import type {
  CharacterId,
  GameState,
  InsightAcquisition,
  PlayerResources,
  PlayerState,
  ResourceTokenType,
} from '../types';
import { LIFE_CHAPTER_ORDER, SCHEMA_VERSION } from '../types';
import { CHAPTERS_BY_CHARACTER, COLLABORATORS, CONTEXT_CARDS_BY_CHARACTER, INSIGHTS, LOCATIONS, getProjectById } from '../data/content';
import {
  canAttemptProject,
  ACTIONS_PER_TURN,
  computeProjectCompletion,
  crossoverFundsDiscount,
  currentChapter,
  currentChapterId,
  evaluateTravel,
  applyCenturyDeadlines,
  chapterActionBudget,
  eventsForChapter,
  findAvailableInsightAcquisitions,
  getCharacter,
  yearForActionsSpent,
  yearWithinBothLifetimes,
} from './rules';
import { nextInt } from './rng';

// ---------------------------------------------------------------------------
// Construction helpers
// ---------------------------------------------------------------------------

function emptyTokens(): Record<ResourceTokenType, number> {
  return { theory: 0, proof: 0, evidence: 0, computation: 0, engineering: 0 };
}

let idCounter = 0;
function freshId(prefix: string): string {
  idCounter += 1;
  return `${prefix}-${idCounter}-${Date.now().toString(36)}`;
}

const SHORT_GAME_START_CHAPTER_INDEX = 3; // "Breakthrough"

export function createPlayer(characterId: CharacterId, playerId: string, gameLength: 'short' | 'full' = 'full'): PlayerState {
  const character = getCharacter(characterId);
  const resources: PlayerResources = {
    funds: character.startingResources.funds,
    wellbeing: character.startingResources.wellbeing,
    health: character.startingResources.health,
    standing: character.startingResources.standing,
    network: character.startingResources.network,
    exposure: 0,
    tokens: { ...emptyTokens(), ...character.startingTokens },
  };
  const chapterIndex = gameLength === 'short' ? SHORT_GAME_START_CHAPTER_INDEX : 0;
  const startChapter = CHAPTERS_BY_CHARACTER[characterId][chapterIndex];
  const startLocationId = startChapter.startingLocationId;
  return {
    id: playerId,
    characterId,
    currentLocationId: startLocationId,
    currentYear: startChapter.yearStart,
    chapterIndex,
    timeActionsRemaining: chapterActionBudget(startChapter.yearStart, startChapter.yearEnd),
    turnActionsRemaining: ACTIONS_PER_TURN,
    resources,
    insights: (character.startingInsights ?? []).map((insightId) => ({
      insightId,
      sourceType: 'starting',
      sourceId: character.id,
      sourceCharacterId: character.id,
      year: startChapter.yearStart,
    })),
    studyProgress: emptyTokens(),
    completedProjectIds: [],
    seenContextCardIds: [],
    legacyPoints: 0,
    canonPoints: 0,
    consequenceLog: [],
    routeHistory: [{ locationId: startLocationId, year: startChapter.yearStart, chapterId: startChapter.id }],
    finished: false,
    problemCardsPlaced: [],
    abilityUsedThisChapter: false,
    johnsonVerifiedProjectIds: [],
    bohrInviteeIds: [],
    triggeredEventIds: [],
  };
}

export function createGame(characterIds: CharacterId[], seed: number, gameLength: 'short' | 'full' = 'full'): GameState {
  const now = Date.now();
  return {
    schemaVersion: SCHEMA_VERSION,
    seed,
    rngCursor: 0,
    phase: 'board',
    players: characterIds.map((id, i) => createPlayer(id, `p${i + 1}`, gameLength)),
    activePlayerIndex: 0,
    knowledgeBoard: {},
    log: [{ id: freshId('log'), year: 0, message: 'The game begins.' }],
    gameLength,
    tutorialActive: false,
    createdAt: now,
    updatedAt: now,
  };
}

/** Starts the configured game over with the same roster, seed, and length. */
export function restartGame(game: GameState): GameState {
  return createGame(
    game.players.map((player) => player.characterId),
    game.seed,
    game.gameLength,
  );
}

function log(state: GameState, year: number, message: string): GameState {
  return { ...state, log: [...state.log, { id: freshId('log'), year, message }], updatedAt: Date.now() };
}

function updatePlayer(state: GameState, playerId: string, updater: (p: PlayerState) => PlayerState): GameState {
  return {
    ...state,
    players: state.players.map((p) => (p.id === playerId ? updater(p) : p)),
    updatedAt: Date.now(),
  };
}

function addInsightAcquisitions(state: GameState, playerId: string, acquisitions: InsightAcquisition[]): GameState {
  if (acquisitions.length === 0) return state;
  const player = state.players.find((candidate) => candidate.id === playerId);
  if (!player) return state;
  const existing = new Set(player.insights.map((item) => item.insightId));
  const unique = acquisitions.filter((item) => !existing.has(item.insightId));
  if (unique.length === 0) return state;
  let next = updatePlayer(state, playerId, (current) => ({ ...current, insights: [...current.insights, ...unique] }));
  for (const acquisition of unique) {
    const name = INSIGHTS[acquisition.insightId]?.name ?? acquisition.insightId;
    next = log(next, acquisition.year, `${getCharacter(player.characterId).name} gains the Insight "${name}" via ${acquisition.sourceType}.`);
  }
  return next;
}

function grantAvailableInsights(
  state: GameState,
  playerId: string,
  context: Parameters<typeof findAvailableInsightAcquisitions>[2] = { type: 'passive' },
): GameState {
  const player = state.players.find((candidate) => candidate.id === playerId);
  if (!player) return state;
  return addInsightAcquisitions(state, playerId, findAvailableInsightAcquisitions(state, player, context));
}

function grantPassiveInsightsToAllPlayers(state: GameState): GameState {
  return state.players.reduce((next, player) => grantAvailableInsights(next, player.id), state);
}

function grantHumanSharedInsight(state: GameState, learnerId: string, teacher: PlayerState): GameState {
  const learner = state.players.find((candidate) => candidate.id === learnerId);
  if (!learner) return state;
  const owned = new Set(learner.insights.map((item) => item.insightId));
  const insightId = teacher.insights
    .map((item) => item.insightId)
    .filter((id) => INSIGHTS[id] && !owned.has(id))
    .sort()[0];
  if (!insightId) return state;
  return addInsightAcquisitions(state, learnerId, [
    {
      insightId,
      sourceType: 'humanCollaboration',
      sourceId: teacher.characterId,
      sourcePlayerId: teacher.id,
      sourceCharacterId: teacher.characterId,
      year: learner.currentYear,
    },
  ]);
}

function activePlayer(state: GameState): PlayerState {
  return state.players[state.activePlayerIndex];
}

export function pendingContextCards(player: PlayerState) {
  const chapterId = currentChapterId(player);
  return CONTEXT_CARDS_BY_CHARACTER[player.characterId].filter(
    (card) => card.chapterId === chapterId && !player.seenContextCardIds.includes(card.id),
  );
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

/**
 * Advances a player's calendar by one year and spends the action's point cost
 * from the current turn.
 */
function spendAction(player: PlayerState, turnCost: number): Pick<PlayerState, 'timeActionsRemaining' | 'turnActionsRemaining' | 'currentYear'> {
  const chapter = currentChapter(player);
  const chapterBudget = chapterActionBudget(chapter.yearStart, chapter.yearEnd);
  const actionsSpentBefore = chapterBudget - player.timeActionsRemaining;
  const actionsSpentAfter = actionsSpentBefore + 1;
  return {
    timeActionsRemaining: player.timeActionsRemaining - 1,
    turnActionsRemaining: player.turnActionsRemaining - turnCost,
    currentYear: yearForActionsSpent(chapter.yearStart, chapter.yearEnd, actionsSpentAfter),
  };
}

function canSpendAction(player: PlayerState, turnCost: number): boolean {
  return player.timeActionsRemaining >= 1 && player.turnActionsRemaining >= turnCost;
}

// ---------------------------------------------------------------------------
// Action types
// ---------------------------------------------------------------------------

export type GameAction =
  | { type: 'TRAVEL'; destinationId: string }
  | { type: 'ATTEMPT_PROJECT'; projectId: string; verify?: boolean }
  | { type: 'GENERATE_TOKEN'; kind: 'study' | 'research' | 'calculate' | 'experimentEvidence' | 'experimentEngineering' }
  | { type: 'COLLABORATE' }
  | { type: 'TEACH_OR_EARN' }
  | { type: 'SEEK_FUNDING' }
  | { type: 'REST_AND_FAMILY' }
  | { type: 'ADVOCACY' }
  | { type: 'BUILD_INSTITUTION' }
  | { type: 'CONVERT_TOKEN'; from: ResourceTokenType; to: ResourceTokenType }
  | { type: 'BOHR_INVITE'; targetPlayerId: string }
  | { type: 'ACK_CONTEXT_CARDS' }
  | { type: 'END_TURN' }
  | { type: 'END_CHAPTER' };

const TIME_COST_DEFAULT = 1;

/** Draws one deterministic random number from the game's seeded sequence. */
function drawRandom(state: GameState, maxExclusive: number): { value: number; state: GameState } {
  const { value, cursor } = nextInt({ seed: state.seed, cursor: state.rngCursor }, maxExclusive);
  return { value, state: { ...state, rngCursor: cursor } };
}

function reduceGameAction(state: GameState, action: GameAction): GameState {
  const player = activePlayer(state);
  if (!player || player.finished) return state;

  switch (action.type) {
    case 'TRAVEL': {
      const evalResult = evaluateTravel(player, action.destinationId);
      if (!evalResult.allowed) {
        return log(state, player.currentYear, `Cannot travel: ${evalResult.reasons.join(' ')}`);
      }
      const destination = LOCATIONS[action.destinationId];
      const timing = spendAction(player, evalResult.timeCost);
      let next = updatePlayer(state, player.id, (p) => ({
        ...p,
        currentLocationId: action.destinationId,
        ...timing,
        resources: { ...p.resources, funds: p.resources.funds - evalResult.fundsCost },
        routeHistory: [...p.routeHistory, { locationId: action.destinationId, year: timing.currentYear, chapterId: currentChapterId(p) }],
      }));
      next = log(next, player.currentYear, `${getCharacter(player.characterId).name} travels to ${destination.name}.`);
      next = grantAvailableInsights(next, player.id, { type: 'location', locationId: action.destinationId });
      return next;
    }

    case 'ATTEMPT_PROJECT': {
      const project = getProjectById(action.projectId);
      if (!project) return log(state, player.currentYear, 'Unknown project.');
      const character = getCharacter(player.characterId);
      let timeCost = project.timeCost;
      if (character.ability.id === 'conjecture-engine') {
        const onlyTheory = Object.keys(project.requiredTokens).every((k) => k === 'theory');
        if (onlyTheory) timeCost = Math.max(1, timeCost - 1);
      }

      let effectivePlayer = player;
      let usedAbility = false;

      const eligibility = canAttemptProject(state, effectivePlayer, project, timeCost);
      if (!eligibility.eligible) {
        // Curie: Experimental Persistence — short by exactly one Evidence token.
        if (
          character.ability.id === 'experimental-persistence' &&
          !player.abilityUsedThisChapter &&
          eligibility.reasons.length === 1 &&
          (project.requiredTokens.evidence ?? 0) - (player.resources.tokens.evidence ?? 0) === 1
        ) {
          effectivePlayer = {
            ...effectivePlayer,
            resources: { ...effectivePlayer.resources, tokens: { ...effectivePlayer.resources.tokens, evidence: (effectivePlayer.resources.tokens.evidence ?? 0) + 1 } },
          };
          usedAbility = true;
        } else {
          return log(state, player.currentYear, `Cannot attempt "${project.name}": ${eligibility.reasons.join(' ')}`);
        }
        const recheck = canAttemptProject(state, effectivePlayer, project, timeCost);
        if (!recheck.eligible) {
          return log(state, player.currentYear, `Cannot attempt "${project.name}": ${recheck.reasons.join(' ')}`);
        }
      }

      const fundsDiscount = crossoverFundsDiscount(state, project);
      const fundsCost = Math.max(0, project.fundsCost - fundsDiscount);

      const completion = computeProjectCompletion(state, effectivePlayer, project);
      let legacyAwarded = completion.legacyAwarded;

      const verifying = action.verify && character.ability.id === 'verification' && !player.abilityUsedThisChapter;
      if (verifying) {
        legacyAwarded += 2;
        usedAbility = true;
      }

      // Overwork: attempting a third+ project within one chapter costs Wellbeing,
      // unless the character has the Polymath ability.
      const projectsThisChapter = effectivePlayer.completedProjectIds.filter((id) => getProjectById(id)?.chapterId === project.chapterId).length;
      const overworked = projectsThisChapter >= 2 && character.ability.id !== 'polymath';

      const newTokens = { ...effectivePlayer.resources.tokens };
      for (const [token, amount] of Object.entries(project.requiredTokens) as [ResourceTokenType, number][]) {
        newTokens[token] = Math.max(0, (newTokens[token] ?? 0) - (amount ?? 0));
      }

      let next: GameState = {
        ...state,
        knowledgeBoard: project.grantsKnowledgeId && state.knowledgeBoard[project.grantsKnowledgeId]?.publishedYear === undefined
          ? {
              ...state.knowledgeBoard,
              [project.grantsKnowledgeId]: {
                entryId: project.grantsKnowledgeId,
                publishedByPlayerId: effectivePlayer.id,
                publishedByCharacterId: effectivePlayer.characterId,
                publishedYear: effectivePlayer.currentYear,
                npcFallbackTriggered: false,
              },
            }
          : state.knowledgeBoard,
      };

      // Hilbert's Problem Setter: Gödel's "Limits of the System" engaging
      // Hilbert's formalist program grants Hilbert bonus Legacy too.
      if (project.id === 'godel-limits-of-system') {
        const hilbertPlayer = next.players.find((p) => p.characterId === 'hilbert' && p.completedProjectIds.includes('hilbert-formalist-program'));
        if (hilbertPlayer) {
          next = updatePlayer(next, hilbertPlayer.id, (p) => ({ ...p, legacyPoints: p.legacyPoints + 5 }));
          next = log(next, effectivePlayer.currentYear, `Hilbert's formalist program gains renewed Legacy as later work engages his problems.`);
        }
      }

      if (!canSpendAction(player, timeCost)) {
        return log(state, player.currentYear, `Cannot attempt "${project.name}": requires ${timeCost} turn actions.`);
      }
      const projectTiming = spendAction(player, timeCost);
      next = updatePlayer(next, player.id, (p) => ({
        ...p,
        currentLocationId: effectivePlayer.currentLocationId,
        completedProjectIds: [...p.completedProjectIds, project.id],
        legacyPoints: p.legacyPoints + legacyAwarded,
        canonPoints: p.canonPoints + completion.canonScore,
        consequenceLog: [...p.consequenceLog, ...completion.consequences],
        resources: {
          ...p.resources,
          funds: p.resources.funds - fundsCost,
          tokens: newTokens,
          wellbeing: overworked ? p.resources.wellbeing - 1 : p.resources.wellbeing,
        },
        ...projectTiming,
        abilityUsedThisChapter: p.abilityUsedThisChapter || usedAbility,
        johnsonVerifiedProjectIds: verifying ? [...p.johnsonVerifiedProjectIds, project.id] : p.johnsonVerifiedProjectIds,
      }));

      next = grantAvailableInsights(next, player.id, { type: 'passive' });
      const earlyText = completion.earlyDiscoveryBonus > 0 ? `, including +${completion.earlyDiscoveryBonus} early-discovery bonus` : '';
      next = log(next, effectivePlayer.currentYear, `${character.name} completes "${project.name}" (+${legacyAwarded} Legacy${earlyText}; Canon Alignment +${completion.canonScore}).`);
      return next;
    }

    case 'GENERATE_TOKEN': {
      if (!canSpendAction(player, TIME_COST_DEFAULT)) return state;
      const character = getCharacter(player.characterId);
      const location = LOCATIONS[player.currentLocationId];
      const map: Record<typeof action.kind, ResourceTokenType> = {
        study: 'theory',
        research: 'proof',
        calculate: 'computation',
        experimentEvidence: 'evidence',
        experimentEngineering: 'engineering',
      };
      const tokenType = map[action.kind];
      const bonus = location?.researchBonuses[tokenType] ?? 0;
      const usingThoughtExperiment = character.ability.id === 'thought-experiment' && action.kind === 'study' && !player.abilityUsedThisChapter;
      const gained = 1 + bonus + (usingThoughtExperiment ? 1 : 0);
      const genTiming = spendAction(player, TIME_COST_DEFAULT);
      let next = updatePlayer(state, player.id, (p) => ({
        ...p,
        ...genTiming,
        abilityUsedThisChapter: p.abilityUsedThisChapter || usingThoughtExperiment,
        studyProgress: { ...p.studyProgress, [tokenType]: (p.studyProgress[tokenType] ?? 0) + 1 },
        resources: { ...p.resources, tokens: { ...p.resources.tokens, [tokenType]: (p.resources.tokens[tokenType] ?? 0) + gained } },
      }));
      next = grantAvailableInsights(next, player.id);
      return next;
    }

    case 'COLLABORATE': {
      if (!canSpendAction(player, TIME_COST_DEFAULT)) return state;
      const character = getCharacter(player.characterId);
      const localCollaborator = character.collaboratorIds
        .map((id) => COLLABORATORS[id])
        .find((c) => c && c.locationIds.includes(player.currentLocationId) && player.currentYear >= c.activeStart && player.currentYear <= c.activeEnd);
      const networkGain = character.ability.id === 'scientific-director' ? 2 : 1;
      const collabTiming = spendAction(player, TIME_COST_DEFAULT);
      let next = updatePlayer(state, player.id, (p) => {
        const tokens = { ...p.resources.tokens };
        if (localCollaborator) {
          for (const [t, amt] of Object.entries(localCollaborator.bonus) as [ResourceTokenType, number][]) {
            tokens[t] = (tokens[t] ?? 0) + (amt ?? 0);
          }
        }
        return {
          ...p,
          ...collabTiming,
          resources: { ...p.resources, network: p.resources.network + networkGain, tokens },
        };
      });
      if (localCollaborator) {
        next = grantAvailableInsights(next, player.id, { type: 'collaborator', collaboratorId: localCollaborator.id });
      }
      const humanPeer = state.players
        .filter((candidate) => candidate.id !== player.id)
        .filter((candidate) => candidate.currentLocationId === player.currentLocationId)
        .filter((candidate) => Math.abs(candidate.currentYear - player.currentYear) <= 1)
        .sort((a, b) => a.id.localeCompare(b.id))[0];
      if (humanPeer) {
        next = grantHumanSharedInsight(next, player.id, humanPeer);
        next = grantAvailableInsights(next, player.id, {
          type: 'characterEncounter',
          characterId: humanPeer.characterId,
          sourcePlayerId: humanPeer.id,
        });
      }
      return next;
    }

    case 'TEACH_OR_EARN': {
      if (!canSpendAction(player, TIME_COST_DEFAULT)) return state;
      const location = LOCATIONS[player.currentLocationId];
      const employment = location?.employment[0];
      const fundsGain = employment?.fundsPerChapter ?? 2;
      const standingDelta = employment?.standingDelta ?? 0;
      const teachTiming = spendAction(player, TIME_COST_DEFAULT);
      return updatePlayer(state, player.id, (p) => ({
        ...p,
        ...teachTiming,
        resources: { ...p.resources, funds: p.resources.funds + fundsGain, standing: p.resources.standing + standingDelta },
      }));
    }

    case 'SEEK_FUNDING': {
      if (!canSpendAction(player, TIME_COST_DEFAULT)) return state;
      const { value, state: withRng } = drawRandom(state, 4); // 0..3
      const fundsGain = value + 1; // 1..4, deterministic from seed
      const fundingTiming = spendAction(player, TIME_COST_DEFAULT);
      return updatePlayer(withRng, player.id, (p) => ({
        ...p,
        ...fundingTiming,
        resources: { ...p.resources, funds: p.resources.funds + fundsGain },
      }));
    }

    case 'REST_AND_FAMILY': {
      if (!canSpendAction(player, TIME_COST_DEFAULT)) return state;
      const restTiming = spendAction(player, TIME_COST_DEFAULT);
      return updatePlayer(state, player.id, (p) => ({
        ...p,
        ...restTiming,
        resources: {
          ...p.resources,
          wellbeing: clamp(p.resources.wellbeing + 2, 0, 10),
          health: clamp(p.resources.health + 1, 0, 10),
        },
      }));
    }

    case 'ADVOCACY': {
      if (!canSpendAction(player, TIME_COST_DEFAULT)) return state;
      const advocacyTiming = spendAction(player, TIME_COST_DEFAULT);
      return updatePlayer(state, player.id, (p) => ({
        ...p,
        ...advocacyTiming,
        resources: { ...p.resources, standing: p.resources.standing + 1, network: p.resources.network + 1, exposure: p.resources.exposure + 1 },
      }));
    }

    case 'BUILD_INSTITUTION': {
      const character = getCharacter(player.characterId);
      const timeCost = character.ability.id === 'scientific-director' ? 3 : 2;
      if (!canSpendAction(player, timeCost)) return state;
      const exposureGain = character.ability.id === 'scientific-director' ? 1 : 0;
      const buildTiming = spendAction(player, timeCost);
      return updatePlayer(state, player.id, (p) => ({
        ...p,
        ...buildTiming,
        resources: { ...p.resources, network: p.resources.network + 2, standing: p.resources.standing + 1, exposure: p.resources.exposure + exposureGain },
      }));
    }

    case 'CONVERT_TOKEN': {
      const character = getCharacter(player.characterId);
      const allowed = character.ability.id === 'structural-insight' || character.ability.id === 'universal-method';
      if (!allowed || player.abilityUsedThisChapter) return state;
      if ((player.resources.tokens[action.from] ?? 0) < 1) return state;
      return updatePlayer(state, player.id, (p) => ({
        ...p,
        abilityUsedThisChapter: true,
        resources: {
          ...p.resources,
          tokens: {
            ...p.resources.tokens,
            [action.from]: p.resources.tokens[action.from] - 1,
            [action.to]: (p.resources.tokens[action.to] ?? 0) + 1,
          },
        },
      }));
    }

    case 'BOHR_INVITE': {
      if (player.characterId !== 'bohr' || player.abilityUsedThisChapter) return state;
      if (!player.completedProjectIds.includes('bohr-founding-institute')) return state;
      const target = state.players.find((p) => p.id === action.targetPlayerId);
      if (!target) return state;
      const bohrChar = getCharacter('bohr');
      const targetChar = getCharacter(target.characterId);
      if (!yearWithinBothLifetimes(bohrChar, targetChar, player.currentYear)) return state;
      let next = updatePlayer(state, player.id, (p) => ({
        ...p,
        abilityUsedThisChapter: true,
        bohrInviteeIds: [...p.bohrInviteeIds, target.id],
        resources: { ...p.resources, network: p.resources.network + 2 },
      }));
      next = updatePlayer(next, target.id, (p) => ({
        ...p,
        currentLocationId: 'copenhagen',
        resources: { ...p.resources, network: p.resources.network + 2 },
      }));
      next = log(next, player.currentYear, `${bohrChar.name} invites ${targetChar.name} to Copenhagen.`);
      return next;
    }

    case 'ACK_CONTEXT_CARDS': {
      const cards = pendingContextCards(player);
      if (cards.length === 0) return state;
      return updatePlayer(state, player.id, (p) => ({
        ...p,
        seenContextCardIds: [...p.seenContextCardIds, ...cards.map((c) => c.id)],
        resources: cards.reduce(
          (res, card) => ({
            ...res,
            funds: res.funds + (card.effects?.funds ?? 0),
            wellbeing: clamp(res.wellbeing + (card.effects?.wellbeing ?? 0), 0, 10),
            health: clamp(res.health + (card.effects?.health ?? 0), 0, 10),
            standing: res.standing + (card.effects?.standing ?? 0),
            network: res.network + (card.effects?.network ?? 0),
            exposure: Math.max(0, res.exposure + (card.effects?.exposure ?? 0)),
          }),
          p.resources,
        ),
      }));
    }

    case 'END_TURN':
      return state;

    case 'END_CHAPTER': {
      if (pendingContextCards(player).length > 0) return state;
      return endChapter(state, player.id);
    }

    default:
      return state;
  }
}

function rotateTurn(state: GameState, outgoingPlayerId: string): GameState {
  const outgoingIndex = state.players.findIndex((player) => player.id === outgoingPlayerId);
  if (outgoingIndex < 0) return state;

  const withReset = updatePlayer(state, outgoingPlayerId, (player) => ({
    ...player,
    turnActionsRemaining: ACTIONS_PER_TURN,
  }));
  let nextIndex = (outgoingIndex + 1) % withReset.players.length;
  let guard = 0;
  while (withReset.players[nextIndex].finished && guard < withReset.players.length) {
    nextIndex = (nextIndex + 1) % withReset.players.length;
    guard += 1;
  }
  return { ...withReset, activePlayerIndex: nextIndex, updatedAt: Date.now() };
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  const player = activePlayer(state);
  if (!player || player.finished) return state;

  if (action.type === 'END_TURN') {
    if (pendingContextCards(player).length > 0) return state;
    const ended = log(state, player.currentYear, `${getCharacter(player.characterId).name} ends their turn.`);
    return rotateTurn(ended, player.id);
  }

  const next = grantPassiveInsightsToAllPlayers(reduceGameAction(state, action));
  if (action.type === 'END_CHAPTER' || next.phase === 'endgame') return next;

  const updatedPlayer = next.players.find((candidate) => candidate.id === player.id);
  if (updatedPlayer && updatedPlayer.turnActionsRemaining <= 0) {
    return rotateTurn(next, player.id);
  }
  return next;
}

function endChapter(state: GameState, playerId: string): GameState {
  const player = state.players.find((p) => p.id === playerId);
  if (!player) return state;
  const character = getCharacter(player.characterId);
  const chapter = currentChapter(player);
  const location = LOCATIONS[player.currentLocationId];

  let next = state;

  // Upkeep: living costs.
  next = updatePlayer(next, playerId, (p) => {
    const livingCost = location?.livingCost ?? 0;
    const fundsAfter = p.resources.funds - livingCost;
    const shortfall = fundsAfter < 0;
    return {
      ...p,
      resources: {
        ...p.resources,
        funds: Math.max(0, fundsAfter),
        wellbeing: clamp(p.resources.wellbeing - (shortfall ? 2 : 0), 0, 10),
      },
    };
  });

  // Fixed historical events active during this chapter.
  const events = eventsForChapter(player);
  for (const event of events) {
    next = updatePlayer(next, playerId, (p) => ({
      ...p,
      triggeredEventIds: [...p.triggeredEventIds, event.id],
      resources: {
        ...p.resources,
        funds: p.resources.funds + (event.effects?.funds ?? 0),
        wellbeing: clamp(p.resources.wellbeing + (event.effects?.wellbeing ?? 0), 0, 10),
        health: clamp(p.resources.health + (event.effects?.health ?? 0), 0, 10),
        standing: p.resources.standing + (event.effects?.standing ?? 0),
        network: p.resources.network + (event.effects?.network ?? 0),
        exposure: Math.max(0, p.resources.exposure + (event.effects?.exposure ?? 0)),
      },
    }));
    next = log(next, chapter.yearStart, `Historical event: ${event.name}.`);
  }

  const updatedPlayer = next.players.find((p) => p.id === playerId)!;
  const { knowledgeBoard, newlyTriggered } = applyCenturyDeadlines(next.knowledgeBoard, updatedPlayer.currentYear);
  next = { ...next, knowledgeBoard };
  for (const id of newlyTriggered) {
    next = log(next, updatedPlayer.currentYear, `The Century Does Not Wait: "${id}" enters public knowledge through independent researchers.`);
  }
  next = grantPassiveInsightsToAllPlayers(next);

  const chapters = CHAPTERS_BY_CHARACTER[player.characterId];
  const isLastChapter = player.chapterIndex >= LIFE_CHAPTER_ORDER.length - 1;

  if (isLastChapter) {
    next = updatePlayer(next, playerId, (p) => ({ ...p, finished: true }));
    next = log(next, chapter.yearEnd, `${character.name}'s life story concludes.`);
  } else {
    const nextChapter = chapters[player.chapterIndex + 1];
    next = updatePlayer(next, playerId, (p) => ({
      ...p,
      chapterIndex: p.chapterIndex + 1,
      currentYear: nextChapter.yearStart,
      timeActionsRemaining: chapterActionBudget(nextChapter.yearStart, nextChapter.yearEnd),
      turnActionsRemaining: ACTIONS_PER_TURN,
      abilityUsedThisChapter: false,
      routeHistory: [...p.routeHistory, { locationId: p.currentLocationId, year: nextChapter.yearStart, chapterId: nextChapter.id }],
    }));
    next = log(next, nextChapter.yearStart, `${character.name} enters "${nextChapter.label}" (${nextChapter.yearStart}–${nextChapter.yearEnd}).`);
  }

  // Rotate to the next unfinished player, or end the game.
  const allFinished = next.players.every((p) => p.finished);
  if (allFinished) {
    next = { ...next, phase: 'endgame' };
    return next;
  }
  let nextIndex = (next.activePlayerIndex + 1) % next.players.length;
  let guard = 0;
  while (next.players[nextIndex].finished && guard < next.players.length) {
    nextIndex = (nextIndex + 1) % next.players.length;
    guard += 1;
  }
  next = { ...next, activePlayerIndex: nextIndex };
  return next;
}
