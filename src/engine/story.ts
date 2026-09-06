import type { GameAction } from './reducer';
import { gameReducer, pendingContextCards } from './reducer';
import type {
  CharacterId,
  GameState,
  LifeChapterId,
  PlayerState,
  ResourceTokenType,
} from '../types';
import { LIFE_CHAPTER_ORDER } from '../types';
import type {
  NarrativeState,
  StoryAction,
  StoryCondition,
  StoryEffect,
  StoryPage,
  StoryRelationshipState,
  StoryScene,
  StoryTriggerEvent,
  StoryVariant,
} from '../types/story';
import {
  CHAPTERS_BY_CHARACTER,
  CHARACTERS,
  CONTEXT_CARDS_BY_CHARACTER,
  LOCATIONS,
  PROJECTS_BY_CHARACTER,
} from '../data/content';
import {
  REPLACED_CONTEXT_CARDS_BY_CHARACTER,
  STORY_SCENES,
  chapterClosingSceneId,
  chapterOpeningSceneId,
  epilogueSceneId,
  prologueSceneId,
  storySceneById,
} from '../data/story';

export type StoryAwareAction = GameAction | StoryAction;

/** Temporary product switch: preserve authored narrative content without showing story pages. */
export const STORY_PAGES_ENABLED = true;

interface StoryEventContext {
  event: StoryTriggerEvent;
  projectId?: string;
}

export interface ActiveStoryView {
  scene: StoryScene;
  variant: StoryVariant;
  page: StoryPage;
  player: PlayerState;
  pageIndex: number;
  pageCount: number;
  choiceKey: string;
  chosenChoiceId?: string;
}

export function createEmptyNarrativeState(): NarrativeState {
  return {
    activePageIndex: 0,
    pendingSceneIds: [],
    seenSceneIds: [],
    choices: {},
    flags: {},
    relationships: {},
    themes: {},
    chapterOpeningSeen: {},
    chapterClosingSeen: {},
    chronicle: [],
  };
}

function narrativeOf(state: GameState): NarrativeState {
  return state.narrative ?? createEmptyNarrativeState();
}

function withNarrative(state: GameState, narrative: NarrativeState): GameState {
  return { ...state, narrative, updatedAt: Date.now() };
}

/** Context cards that an authored story scene replaces are marked seen so the board never shows both. */
function markReplacedCardsHandled(state: GameState): GameState {
  return {
    ...state,
    players: state.players.map((player) => {
      const replaced = REPLACED_CONTEXT_CARDS_BY_CHARACTER[player.characterId] ?? [];
      if (replaced.length === 0) return player;
      const merged = new Set([...player.seenContextCardIds, ...replaced]);
      return { ...player, seenContextCardIds: [...merged] };
    }),
  };
}

/** Adds story-capable state to an existing save without forcing old campaigns back through the prologue. */
export function ensureNarrativeState(state: GameState): GameState {
  if (!STORY_PAGES_ENABLED) {
    const narrative = state.narrative ?? createEmptyNarrativeState();
    return withNarrative(state, {
      ...narrative,
      activeSceneId: undefined,
      activeVariantId: undefined,
      activePageIndex: 0,
      focusPlayerId: undefined,
      pendingSceneIds: [],
      pendingTransition: undefined,
    });
  }
  const normalized = markReplacedCardsHandled(state);
  return normalized.narrative ? normalized : withNarrative(normalized, createEmptyNarrativeState());
}

/** Initializes narrative state; story pages are queued only while the feature is enabled. */
export function initializeStoryGame(state: GameState): GameState {
  if (!STORY_PAGES_ENABLED) return withNarrative(state, createEmptyNarrativeState());
  let next = withNarrative(markReplacedCardsHandled(state), createEmptyNarrativeState());
  const player = next.players[next.activePlayerIndex];
  if (!player) return next;

  const ids: string[] = [];
  const prologue = prologueSceneId(player.characterId);
  if (prologue && next.gameLength === 'full') ids.push(prologue);
  ids.push(chapterOpeningSceneId(player.characterId, currentChapterId(player)));
  next = queueScenes(next, ids, player.id);
  return next;
}

/** On an old/resumed save, introduce only the current chapter opening rather than replaying childhood. */
export function prepareResumedStoryGame(state: GameState): GameState {
  if (!STORY_PAGES_ENABLED) return ensureNarrativeState(state);
  return ensureOpeningForActivePlayer(ensureNarrativeState(state));
}

export function hasActiveStory(state: GameState): boolean {
  return STORY_PAGES_ENABLED && Boolean(state.narrative?.activeSceneId);
}

export function getActiveStoryView(state: GameState): ActiveStoryView | null {
  const narrative = state.narrative;
  if (!narrative?.activeSceneId || !narrative.activeVariantId || !narrative.focusPlayerId) return null;
  const scene = storySceneById(narrative.activeSceneId);
  const player = state.players.find((candidate) => candidate.id === narrative.focusPlayerId);
  if (!scene || !player) return null;
  const variant = scene.variants.find((candidate) => candidate.id === narrative.activeVariantId);
  if (!variant) return null;
  const page = variant.pages[narrative.activePageIndex];
  if (!page) return null;
  const choiceKey = `${scene.id}:${page.id}`;
  return {
    scene,
    variant,
    page,
    player,
    pageIndex: narrative.activePageIndex,
    pageCount: variant.pages.length,
    choiceKey,
    chosenChoiceId: narrative.choices[choiceKey],
  };
}

function currentChapterId(player: PlayerState): LifeChapterId {
  return LIFE_CHAPTER_ORDER[player.chapterIndex];
}

function chapterKey(player: PlayerState, chapterId = currentChapterId(player)): string {
  return `${player.id}:${chapterId}`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function relationshipKey(a: CharacterId, b: CharacterId): string {
  return [a, b].sort().join(':');
}

export function relationshipBetween(state: GameState, a: CharacterId, b: CharacterId): StoryRelationshipState {
  return (
    narrativeOf(state).relationships[relationshipKey(a, b)] ?? {
      familiarity: 0,
      respect: 0,
      tension: 0,
      flags: [],
    }
  );
}

export function isHumanControlled(state: GameState, characterId: CharacterId): boolean {
  return state.players.some((player) => player.characterId === characterId);
}

/** Canonical NPC location. Human-controlled characters never use this function for encounter resolution. */
export function npcCanonLocationAtYear(characterId: CharacterId, year: number): string | undefined {
  const character = CHARACTERS[characterId];
  if (!character) return undefined;
  if (year < character.bornYear || (character.diedYear !== null && year > character.diedYear)) return undefined;
  const route = [...character.canonicalRoute].sort((a, b) => a.year - b.year);
  let locationId = character.startingLocationId;
  for (const stop of route) {
    if (stop.year > year) break;
    locationId = stop.locationId;
  }
  return locationId;
}

export function npcCanonProjectsByYear(characterId: CharacterId, year: number): string[] {
  if (isNaN(year)) return [];
  return (PROJECTS_BY_CHARACTER[characterId] ?? [])
    .filter((project) => project.canonYearEnd <= year)
    .map((project) => project.id);
}

function resourceValue(player: PlayerState, resource: string): number {
  if (resource in player.resources.tokens) {
    return player.resources.tokens[resource as keyof typeof player.resources.tokens] ?? 0;
  }
  const resources = player.resources as unknown as Record<string, number>;
  return resources[resource] ?? 0;
}

function conditionMatches(state: GameState, player: PlayerState, condition: StoryCondition): boolean {
  if ('all' in condition) return condition.all.every((item) => conditionMatches(state, player, item));
  if ('any' in condition) return condition.any.some((item) => conditionMatches(state, player, item));
  if ('not' in condition) return !conditionMatches(state, player, condition.not);

  switch (condition.type) {
    case 'chapterIs':
      return currentChapterId(player) === condition.chapterId;
    case 'yearAtLeast':
      return player.currentYear >= condition.year;
    case 'yearAtMost':
      return player.currentYear <= condition.year;
    case 'locationIs':
      return player.currentLocationId === condition.locationId;
    case 'locationIsNot':
      return player.currentLocationId !== condition.locationId;
    case 'visitedLocation':
      return player.routeHistory.some((entry) => entry.locationId === condition.locationId);
    case 'projectCompleted':
      return player.completedProjectIds.includes(condition.projectId);
    case 'projectNotCompleted':
      return !player.completedProjectIds.includes(condition.projectId);
    case 'completedProjectCountAtLeast':
      return condition.projectIds.filter((id) => player.completedProjectIds.includes(id)).length >= condition.count;
    case 'resourceAtLeast':
      return resourceValue(player, condition.resource) >= condition.value;
    case 'insightAcquired':
      return player.insights.some((acquisition) => acquisition.insightId === condition.insightId);
    case 'insightSourceIs':
      return player.insights.some(
        (acquisition) =>
          acquisition.insightId === condition.insightId &&
          acquisition.sourceType === condition.sourceType &&
          (condition.sourceId === undefined || acquisition.sourceId === condition.sourceId),
      );
    case 'narrativeFlag': {
      const actual = narrativeOf(state).flags[condition.flag];
      return condition.value === undefined ? Boolean(actual) : actual === condition.value;
    }
    case 'choiceWas':
      return narrativeOf(state).choices[condition.choiceKey] === condition.choiceId;
    case 'otherCharacterIsHuman':
      return isHumanControlled(state, condition.characterId);
    case 'otherCharacterIsNpc':
      return !isHumanControlled(state, condition.characterId);
    case 'otherCharacterAt': {
      const human = state.players.find((candidate) => candidate.characterId === condition.characterId);
      if (human) {
        const tolerance = condition.yearTolerance ?? 1;
        return human.currentLocationId === condition.locationId && Math.abs(human.currentYear - player.currentYear) <= tolerance;
      }
      return npcCanonLocationAtYear(condition.characterId, player.currentYear) === condition.locationId;
    }
    case 'relationshipAtLeast': {
      const relationship = relationshipBetween(state, player.characterId, condition.characterId);
      const value = relationship[condition.field];
      return typeof value === 'number' && value >= condition.value;
    }
    default:
      return false;
  }
}

export function selectStoryVariant(state: GameState, scene: StoryScene, player: PlayerState): StoryVariant | undefined {
  return scene.variants.find((variant) => (variant.conditions ?? []).every((condition) => conditionMatches(state, player, condition)));
}

/** Public preview helper used by tests and future authoring tools. */
export function resolveStoryVariantId(state: GameState, sceneId: string, focusPlayerId: string): string | undefined {
  const scene = storySceneById(sceneId);
  const player = state.players.find((candidate) => candidate.id === focusPlayerId);
  if (!scene || !player) return undefined;
  return selectStoryVariant(state, scene, player)?.id;
}

function eventMatches(scene: StoryScene, context: StoryEventContext): boolean {
  if (scene.trigger.event !== context.event) return false;
  if (scene.trigger.projectId && scene.trigger.projectId !== context.projectId) return false;
  return true;
}

/** The earliest year a variant's conditions admit, so that scenes about earlier events are told first. */
function earliestYearOf(condition: StoryCondition): number | undefined {
  if ('all' in condition) {
    const years = condition.all.map(earliestYearOf).filter((year): year is number => year !== undefined);
    return years.length ? Math.max(...years) : undefined;
  }
  if ('any' in condition) {
    const years = condition.any.map(earliestYearOf).filter((year): year is number => year !== undefined);
    return years.length ? Math.min(...years) : undefined;
  }
  if ('not' in condition) return undefined;
  return condition.type === 'yearAtLeast' ? condition.year : undefined;
}

function variantEarliestYear(variant: StoryVariant): number {
  const years = (variant.conditions ?? []).map(earliestYearOf).filter((year): year is number => year !== undefined);
  return years.length ? Math.max(...years) : 0;
}

function eligibleScenes(state: GameState, player: PlayerState, context: StoryEventContext): StoryScene[] {
  const narrative = narrativeOf(state);
  const eligible: { scene: StoryScene; year: number }[] = [];
  for (const scene of STORY_SCENES) {
    if (scene.characterId && scene.characterId !== player.characterId) continue;
    if (scene.chapterId && scene.chapterId !== currentChapterId(player)) continue;
    if (!eventMatches(scene, context)) continue;
    if (scene.once && (narrative.seenSceneIds.includes(scene.id) || narrative.activeSceneId === scene.id || narrative.pendingSceneIds.includes(scene.id))) continue;
    const variant = selectStoryVariant(state, scene, player);
    if (!variant) continue;
    eligible.push({ scene, year: variantEarliestYear(variant) });
  }
  // Chronology first — a scene whose conditions begin in 1914 is told before one that begins in 1915 —
  // then the author's priority breaks ties among scenes of the same moment.
  return eligible
    .sort((a, b) => a.year - b.year || (b.scene.trigger.priority ?? 0) - (a.scene.trigger.priority ?? 0))
    .map((entry) => entry.scene);
}

function activateScene(state: GameState, sceneId: string, focusPlayerId: string, pendingSceneIds: string[]): GameState {
  const scene = storySceneById(sceneId);
  const player = state.players.find((candidate) => candidate.id === focusPlayerId);
  if (!scene || !player) return withNarrative(state, { ...narrativeOf(state), pendingSceneIds });
  const variant = selectStoryVariant(state, scene, player);
  if (!variant) return withNarrative(state, { ...narrativeOf(state), pendingSceneIds });
  return withNarrative(state, {
    ...narrativeOf(state),
    activeSceneId: scene.id,
    activeVariantId: variant.id,
    activePageIndex: 0,
    focusPlayerId,
    pendingSceneIds,
  });
}

function queueScenes(state: GameState, sceneIds: string[], focusPlayerId: string): GameState {
  const narrative = narrativeOf(state);
  const unique = sceneIds.filter(
    (id, index) =>
      sceneIds.indexOf(id) === index &&
      !narrative.seenSceneIds.includes(id) &&
      narrative.activeSceneId !== id &&
      !narrative.pendingSceneIds.includes(id),
  );
  if (unique.length === 0) return state;

  if (narrative.activeSceneId) {
    return withNarrative(state, { ...narrative, pendingSceneIds: [...narrative.pendingSceneIds, ...unique] });
  }
  const [first, ...rest] = unique;
  return activateScene(state, first, focusPlayerId, rest);
}

function ensureOpeningForActivePlayer(state: GameState): GameState {
  if (state.phase === 'endgame' || hasActiveStory(state)) return state;
  const player = state.players[state.activePlayerIndex];
  if (!player || player.finished) return state;
  const chapterId = currentChapterId(player);
  const key = chapterKey(player, chapterId);
  if (narrativeOf(state).chapterOpeningSeen[key]) return state;
  return queueScenes(state, [chapterOpeningSceneId(player.characterId, chapterId)], player.id);
}

function updateFocusPlayer(state: GameState, playerId: string, updater: (player: PlayerState) => PlayerState): GameState {
  return {
    ...state,
    players: state.players.map((player) => (player.id === playerId ? updater(player) : player)),
    updatedAt: Date.now(),
  };
}

const TOKEN_KEYS: ResourceTokenType[] = ['theory', 'proof', 'evidence', 'computation', 'engineering'];

/** Story effects may nudge the six life resources and, by name, any research token. */
function applyResourceEffects(player: PlayerState, effects: Record<string, number | undefined>): PlayerState {
  const tokens = { ...player.resources.tokens };
  for (const key of TOKEN_KEYS) {
    if (effects[key] !== undefined) tokens[key] = Math.max(0, (tokens[key] ?? 0) + (effects[key] ?? 0));
  }
  return {
    ...player,
    resources: {
      ...player.resources,
      funds: Math.max(0, player.resources.funds + (effects.funds ?? 0)),
      wellbeing: clamp(player.resources.wellbeing + (effects.wellbeing ?? 0), 0, 10),
      health: clamp(player.resources.health + (effects.health ?? 0), 0, 10),
      standing: player.resources.standing + (effects.standing ?? 0),
      network: player.resources.network + (effects.network ?? 0),
      exposure: Math.max(0, player.resources.exposure + (effects.exposure ?? 0)),
      tokens,
    },
  };
}

function applyEffects(state: GameState, playerId: string, effects: StoryEffect[] | undefined): GameState {
  if (!effects?.length) return state;
  let next = state;
  for (const effect of effects) {
    const player = next.players.find((candidate) => candidate.id === playerId);
    if (!player) break;
    if (effect.type === 'resources') {
      next = updateFocusPlayer(next, playerId, (current) => applyResourceEffects(current, effect.effects));
      continue;
    }
    if (effect.type === 'markContextCardSeen') {
      next = updateFocusPlayer(next, playerId, (current) => ({
        ...current,
        seenContextCardIds: current.seenContextCardIds.includes(effect.cardId)
          ? current.seenContextCardIds
          : [...current.seenContextCardIds, effect.cardId],
      }));
      continue;
    }
    if (effect.type === 'flag') {
      const narrative = narrativeOf(next);
      next = withNarrative(next, { ...narrative, flags: { ...narrative.flags, [effect.flag]: effect.value } });
      continue;
    }
    if (effect.type === 'theme') {
      const narrative = narrativeOf(next);
      next = withNarrative(next, {
        ...narrative,
        themes: { ...narrative.themes, [effect.theme]: (narrative.themes[effect.theme] ?? 0) + effect.amount },
      });
      continue;
    }
    if (effect.type === 'relationship' && effect.characterId !== player.characterId) {
      const narrative = narrativeOf(next);
      const key = relationshipKey(player.characterId, effect.characterId);
      const existing = narrative.relationships[key] ?? { familiarity: 0, respect: 0, tension: 0, flags: [] };
      const flags = effect.flag && !existing.flags.includes(effect.flag) ? [...existing.flags, effect.flag] : existing.flags;
      next = withNarrative(next, {
        ...narrative,
        relationships: {
          ...narrative.relationships,
          [key]: {
            familiarity: clamp(existing.familiarity + (effect.familiarity ?? 0), 0, 5),
            respect: clamp(existing.respect + (effect.respect ?? 0), -3, 5),
            tension: clamp(existing.tension + (effect.tension ?? 0), 0, 5),
            flags,
            lastInteractionYear: player.currentYear,
          },
        },
      });
    }
  }
  return next;
}

function completeActiveScene(state: GameState): GameState {
  const view = getActiveStoryView(state);
  if (!view || !state.narrative) return state;
  let next = applyEffects(state, view.player.id, view.variant.effects);
  let narrative = narrativeOf(next);
  const seenSceneIds = narrative.seenSceneIds.includes(view.scene.id)
    ? narrative.seenSceneIds
    : [...narrative.seenSceneIds, view.scene.id];
  const openingSeen = { ...narrative.chapterOpeningSeen };
  const closingSeen = { ...narrative.chapterClosingSeen };
  if (view.scene.kind === 'chapterOpening' && view.scene.chapterId) openingSeen[chapterKey(view.player, view.scene.chapterId)] = true;
  if (view.scene.kind === 'chapterClosing' && view.scene.chapterId) closingSeen[chapterKey(view.player, view.scene.chapterId)] = true;

  const firstText = view.variant.pages.find((page) => page.narration)?.narration ?? view.variant.title;
  const entry = {
    sceneId: view.scene.id,
    variantId: view.variant.id,
    characterId: view.player.characterId,
    title: view.variant.title,
    year: view.player.currentYear,
    locationLabel: view.variant.locationLabel ?? LOCATIONS[view.player.currentLocationId]?.name,
    classification: view.scene.classification,
    summary: firstText.length > 180 ? `${firstText.slice(0, 177)}…` : firstText,
  };
  const chronicle = narrative.chronicle.some((item) => item.sceneId === view.scene.id)
    ? narrative.chronicle
    : [...narrative.chronicle, entry];
  const [nextSceneId, ...rest] = narrative.pendingSceneIds;

  narrative = {
    ...narrative,
    activeSceneId: undefined,
    activeVariantId: undefined,
    activePageIndex: 0,
    focusPlayerId: undefined,
    pendingSceneIds: rest,
    seenSceneIds,
    chapterOpeningSeen: openingSeen,
    chapterClosingSeen: closingSeen,
    chronicle,
  };
  next = withNarrative(next, narrative);

  if (nextSceneId) return activateScene(next, nextSceneId, view.player.id, rest);

  const transition = narrative.pendingTransition;
  if (transition?.type === 'endChapter') {
    next = withNarrative(next, { ...narrativeOf(next), pendingTransition: undefined });
    const active = next.players[next.activePlayerIndex];
    if (active?.id === transition.playerId) {
      next = gameReducer(next, { type: 'END_CHAPTER' });
    }
    return ensureOpeningForActivePlayer(next);
  }

  return ensureOpeningForActivePlayer(next);
}

function advanceStory(state: GameState): GameState {
  const view = getActiveStoryView(state);
  if (!view || !state.narrative) return state;
  if (view.page.choices?.length && !view.chosenChoiceId) return state;
  if (view.pageIndex < view.pageCount - 1) {
    return withNarrative(state, { ...state.narrative, activePageIndex: view.pageIndex + 1 });
  }
  return completeActiveScene(state);
}

function chooseStory(state: GameState, choiceId: string): GameState {
  const view = getActiveStoryView(state);
  if (!view || !state.narrative || !view.page.choices?.length || view.chosenChoiceId) return state;
  const choice = view.page.choices.find((candidate) => candidate.id === choiceId);
  if (!choice) return state;
  let next = withNarrative(state, {
    ...state.narrative,
    choices: { ...state.narrative.choices, [view.choiceKey]: choice.id },
  });
  next = applyEffects(next, view.player.id, choice.effects);
  return advanceStory(next);
}

function handleStoryAction(state: GameState, action: StoryAction): GameState {
  if (!hasActiveStory(state)) return state;
  if (action.type === 'STORY_BACK') {
    const narrative = narrativeOf(state);
    return withNarrative(state, { ...narrative, activePageIndex: Math.max(0, narrative.activePageIndex - 1) });
  }
  if (action.type === 'STORY_CHOOSE') return chooseStory(state, action.choiceId);
  return advanceStory(state);
}

function isStoryAction(action: StoryAwareAction): action is StoryAction {
  return action.type.startsWith('STORY_');
}

function queueEventStories(state: GameState, player: PlayerState, context: StoryEventContext): GameState {
  const scenes = eligibleScenes(state, player, context);
  if (scenes.length === 0) return state;
  // Cap incidental after-action interruptions. Major project scenes remain deterministic and immediate.
  const ids = context.event === 'afterAction' ? scenes.slice(0, 2).map((scene) => scene.id) : scenes.map((scene) => scene.id);
  return queueScenes(state, ids, player.id);
}

export function storyAwareGameReducer(inputState: GameState, action: StoryAwareAction): GameState {
  let state = ensureNarrativeState(inputState);

  if (!STORY_PAGES_ENABLED) {
    return isStoryAction(action) ? state : gameReducer(state, action);
  }
  if (isStoryAction(action)) return handleStoryAction(state, action);
  if (hasActiveStory(state)) return state;

  const player = state.players[state.activePlayerIndex];
  if (!player || player.finished) return state;

  if (action.type === 'END_CHAPTER') {
    if (pendingContextCards(player).length > 0) return state;
    const chapterId = currentChapterId(player);
    const ids = [chapterClosingSceneId(player.characterId, chapterId)];
    const isLast = player.chapterIndex >= LIFE_CHAPTER_ORDER.length - 1;
    const epilogue = epilogueSceneId(player.characterId);
    if (isLast && epilogue) ids.push(epilogue);
    state = queueScenes(state, ids, player.id);
    if (hasActiveStory(state)) {
      return withNarrative(state, {
        ...narrativeOf(state),
        pendingTransition: { type: 'endChapter', playerId: player.id },
      });
    }
    return gameReducer(state, action);
  }

  const beforeProjectIds = new Set(player.completedProjectIds);
  let next = gameReducer(state, action);
  const focusAfter = next.players.find((candidate) => candidate.id === player.id);
  if (!focusAfter) return next;

  const completedNow = focusAfter.completedProjectIds.filter((id) => !beforeProjectIds.has(id));
  for (const projectId of completedNow) {
    next = queueEventStories(next, focusAfter, { event: 'projectCompleted', projectId });
  }
  if (!hasActiveStory(next)) {
    next = queueEventStories(next, focusAfter, { event: 'afterAction' });
  }
  if (!hasActiveStory(next)) next = ensureOpeningForActivePlayer(next);
  return next;
}

export function currentNarrativeChapterSummary(state: GameState, playerId: string): string {
  const player = state.players.find((candidate) => candidate.id === playerId);
  if (!player) return '';
  const chapter = CHAPTERS_BY_CHARACTER[player.characterId]?.[player.chapterIndex];
  if (!chapter) return '';
  const completed = (PROJECTS_BY_CHARACTER[player.characterId] ?? []).filter(
    (project) => project.chapterId === chapter.id && player.completedProjectIds.includes(project.id),
  );
  const places = [...new Set(player.routeHistory.filter((entry) => entry.chapterId === chapter.id).map((entry) => LOCATIONS[entry.locationId]?.name).filter(Boolean))];
  const pieces = [
    `${CHARACTERS[player.characterId].name} completed ${completed.length} major project${completed.length === 1 ? '' : 's'} in ${chapter.label}.`,
  ];
  if (places.length) pieces.push(`Places that shaped the chapter: ${places.join(', ')}.`);
  return pieces.join(' ');
}

/** Useful for the Chronicle and authoring tools. */
export function contextCardReplacementStatus(characterId: CharacterId): string[] {
  const replaced = REPLACED_CONTEXT_CARDS_BY_CHARACTER[characterId] ?? [];
  const actual = new Set((CONTEXT_CARDS_BY_CHARACTER[characterId] ?? []).map((card) => card.id));
  return replaced.filter((id) => actual.has(id));
}
