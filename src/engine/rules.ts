import type {
  Character,
  CharacterId,
  ConsequenceLogEntry,
  GameState,
  Location,
  PlayerState,
  ResearchProject,
  ResourceTokenType,
} from '../types';
import { LIFE_CHAPTER_ORDER } from '../types';
import {
  CHARACTERS,
  CHAPTERS_BY_CHARACTER,
  COLLABORATORS,
  CENTURY_KNOWLEDGE,
  HISTORICAL_EVENTS,
  LOCATIONS,
} from '../data/content';

// ---------------------------------------------------------------------------
// Basic lookups
// ---------------------------------------------------------------------------

export function getCharacter(id: CharacterId): Character {
  const character = CHARACTERS[id];
  if (!character) throw new Error(`Unknown character: ${id}`);
  return character;
}

export function getLocation(id: string): Location {
  const location = LOCATIONS[id];
  if (!location) throw new Error(`Unknown location: ${id}`);
  return location;
}

export function currentChapterId(player: PlayerState) {
  return LIFE_CHAPTER_ORDER[player.chapterIndex];
}

export const TIME_ACTIONS_PER_YEAR = 3;

/** Each year in a chapter, including its final year, has three Time actions. */
export function chapterActionBudget(chapterYearStart: number, chapterYearEnd: number): number {
  const inclusiveYearCount = Math.max(1, chapterYearEnd - chapterYearStart + 1);
  return inclusiveYearCount * TIME_ACTIONS_PER_YEAR;
}

/**
 * Three spent Time actions advance the calendar by one year. The result is
 * clamped to the chapter's final year so that its last three actions can be
 * used on projects and other work dated to that year.
 */
export function yearForActionsSpent(chapterYearStart: number, chapterYearEnd: number, actionsSpent: number): number {
  const elapsedYears = Math.floor(Math.max(0, actionsSpent) / TIME_ACTIONS_PER_YEAR);
  return Math.min(chapterYearEnd, chapterYearStart + elapsedYears);
}

export function currentChapter(player: PlayerState) {
  const chapters = CHAPTERS_BY_CHARACTER[player.characterId];
  const id = currentChapterId(player);
  const chapter = chapters.find((c) => c.id === id);
  if (!chapter) throw new Error(`No chapter ${id} for ${player.characterId}`);
  return chapter;
}

// ---------------------------------------------------------------------------
// Timeline overlap
// ---------------------------------------------------------------------------

/** Two characters' lifespans overlap at all (a precondition for any meeting). */
export function charactersOverlap(a: Character, b: Character): boolean {
  const aEnd = a.diedYear ?? Infinity;
  const bEnd = b.diedYear ?? Infinity;
  return a.bornYear <= bEnd && b.bornYear <= aEnd;
}

/** Whether a specific year falls within both characters' lifespans. */
export function yearWithinBothLifetimes(a: Character, b: Character, year: number): boolean {
  const aEnd = a.diedYear ?? Infinity;
  const bEnd = b.diedYear ?? Infinity;
  return year >= a.bornYear && year <= aEnd && year >= b.bornYear && year <= bEnd;
}

// ---------------------------------------------------------------------------
// Movement / travel eligibility
// ---------------------------------------------------------------------------

export interface TravelEligibility {
  allowed: boolean;
  reasons: string[];
  fundsCost: number;
  timeCost: number;
}

export function isLocationActiveForYear(location: Location, year: number): boolean {
  if (year < location.activeStart) return false;
  if (location.activeEnd !== null && year > location.activeEnd) return false;
  return true;
}

const RELOCATE_TIME_COST = 1;

export function evaluateTravel(player: PlayerState, destinationId: string): TravelEligibility {
  const reasons: string[] = [];
  const destination = LOCATIONS[destinationId];
  if (!destination) {
    return { allowed: false, reasons: ['Unknown destination.'], fundsCost: 0, timeCost: RELOCATE_TIME_COST };
  }
  if (destinationId === player.currentLocationId) {
    reasons.push('Already at this location.');
  }
  if (!isLocationActiveForYear(destination, player.currentYear)) {
    if (player.currentYear < destination.activeStart) {
      reasons.push(`${destination.name} is not yet a relevant destination in ${player.currentYear} (opens ${destination.activeStart}).`);
    } else {
      reasons.push(`${destination.name} is no longer a relevant destination by ${player.currentYear}.`);
    }
  }
  const fundsCost = destination.travelCost;
  if (player.resources.funds < fundsCost) {
    reasons.push(`Insufficient Funds for travel (needs ${fundsCost}, has ${player.resources.funds}).`);
  }
  if (player.timeActionsRemaining < RELOCATE_TIME_COST) {
    reasons.push('No Time actions remaining this chapter.');
  }
  return { allowed: reasons.length === 0, reasons, fundsCost, timeCost: RELOCATE_TIME_COST };
}

export function isCanonicalDestination(character: Character, locationId: string): boolean {
  return character.canonicalRoute.some((stop) => stop.locationId === locationId);
}

export function reachableLocations(player: PlayerState): Location[] {
  return Object.values(LOCATIONS).filter((loc) => loc.id !== player.currentLocationId);
}

// ---------------------------------------------------------------------------
// Knowledge board
// ---------------------------------------------------------------------------

export function isKnowledgeAvailable(state: GameState, knowledgeId: string, forYear: number): boolean {
  const entry = state.knowledgeBoard[knowledgeId];
  if (!entry) return false;
  if (entry.publishedYear === undefined) return false;
  return forYear >= entry.publishedYear;
}

/**
 * "The Century Does Not Wait": for any knowledge entry not yet published by a
 * player, once the observing year passes its historical deadline, an NPC
 * researcher publishes it instead. Downstream projects remain unlockable, but
 * no player receives credit. Pure function: returns a new knowledgeBoard map.
 */
export function applyCenturyDeadlines(
  knowledgeBoard: GameState['knowledgeBoard'],
  observedYear: number,
): { knowledgeBoard: GameState['knowledgeBoard']; newlyTriggered: string[] } {
  const next = { ...knowledgeBoard };
  const newlyTriggered: string[] = [];
  for (const entry of Object.values(CENTURY_KNOWLEDGE)) {
    const current = next[entry.id];
    const alreadyPublished = current?.publishedYear !== undefined;
    if (alreadyPublished) continue;
    if (observedYear > entry.deadlineYear) {
      next[entry.id] = {
        entryId: entry.id,
        npcFallbackTriggered: true,
        publishedYear: entry.deadlineYear,
      };
      newlyTriggered.push(entry.id);
    }
  }
  return { knowledgeBoard: next, newlyTriggered };
}

// ---------------------------------------------------------------------------
// Project prerequisites
// ---------------------------------------------------------------------------

export interface ProjectEligibility {
  eligible: boolean;
  reasons: string[];
}

export function canAttemptProject(
  state: GameState,
  player: PlayerState,
  project: ResearchProject,
): ProjectEligibility {
  const reasons: string[] = [];

  if (player.completedProjectIds.includes(project.id)) {
    reasons.push('Already completed.');
  }
  if (project.chapterId !== currentChapterId(player)) {
    reasons.push(`Only available during the "${project.chapterId}" chapter.`);
  }
  if (player.currentYear < project.earliestYear) {
    reasons.push(`Not possible before ${project.earliestYear}.`);
  }
  if (!project.locationIds.includes(player.currentLocationId)) {
    reasons.push(`Requires presence at: ${project.locationIds.map((id) => LOCATIONS[id]?.name ?? id).join(', ')}.`);
  }
  if (project.requiresInstitutionId) {
    const location = LOCATIONS[player.currentLocationId];
    const hasInstitution = location?.institutions.some((inst) => inst.id === project.requiresInstitutionId);
    if (!hasInstitution) {
      reasons.push('Requires access to a specific institution not present at this location.');
    }
  }
  for (const knowledgeId of project.requiredKnowledgeIds) {
    if (!isKnowledgeAvailable(state, knowledgeId, player.currentYear)) {
      const entry = CENTURY_KNOWLEDGE[knowledgeId];
      reasons.push(`Requires prior knowledge: ${entry?.name ?? knowledgeId} (not yet published).`);
    }
  }
  for (const collaboratorId of project.requiredCollaboratorIds) {
    const collaborator = COLLABORATORS[collaboratorId];
    if (!collaborator) {
      reasons.push(`Unknown collaborator: ${collaboratorId}.`);
      continue;
    }
    if (player.currentYear < collaborator.activeStart || player.currentYear > collaborator.activeEnd) {
      reasons.push(`${collaborator.name} is not available in ${player.currentYear}.`);
    } else if (!collaborator.locationIds.includes(player.currentLocationId)) {
      reasons.push(`${collaborator.name} is not present at this location.`);
    }
  }
  for (const [token, amount] of Object.entries(project.requiredTokens) as [ResourceTokenType, number][]) {
    if ((player.resources.tokens[token] ?? 0) < (amount ?? 0)) {
      reasons.push(`Requires ${amount} ${token} (has ${player.resources.tokens[token] ?? 0}).`);
    }
  }
  if (player.timeActionsRemaining < project.timeCost) {
    reasons.push(`Requires ${project.timeCost} Time (has ${player.timeActionsRemaining}).`);
  }
  if (player.resources.funds < project.fundsCost) {
    reasons.push(`Requires ${project.fundsCost} Funds (has ${player.resources.funds}).`);
  }

  return { eligible: reasons.length === 0, reasons };
}

// ---------------------------------------------------------------------------
// Canon scoring
// ---------------------------------------------------------------------------

export type CanonScore = 3 | 1 | 0;

export function computeCanonScore(project: ResearchProject, player: PlayerState): CanonScore {
  const inCanonWindow =
    player.currentLocationId === project.canonLocationId &&
    player.currentYear >= project.canonYearStart &&
    player.currentYear <= project.canonYearEnd;

  if (project.classification === 'Documented' && inCanonWindow) return 3;
  if (project.classification === 'Documented' && !inCanonWindow) return 1;
  if (project.classification === 'Plausible') return 1;
  return 0; // Speculative
}

// ---------------------------------------------------------------------------
// Ability-specific legacy modifiers
// ---------------------------------------------------------------------------

/**
 * Ramanujan's Conjecture Engine: a completed project lacking both a Proof
 * token requirement and a named collaborator requirement is a "bare
 * conjecture" and earns only half Legacy until later verified.
 */
export function isBareConjecture(project: ResearchProject, character: Character): boolean {
  if (character.ability.id !== 'conjecture-engine') return false;
  const hasProofRequirement = (project.requiredTokens.proof ?? 0) > 0;
  const hasCollaborator = project.requiredCollaboratorIds.length > 0;
  return !hasProofRequirement && !hasCollaborator;
}

export interface ProjectCompletionResult {
  legacyAwarded: number;
  canonScore: CanonScore;
  consequences: ConsequenceLogEntry[];
}

/** Special-cased historically grounded crossover bonuses between characters' projects. */
const FUNDS_DISCOUNT_CROSSOVERS: Array<{ prerequisiteProjectId: string; discountedProjectId: string; discount: number }> = [
  // Curie's radiological instrumentation work reduces the cost of later X-ray projects.
  { prerequisiteProjectId: 'curie-medical-radiology', discountedProjectId: 'franklin-xray-technique', discount: 1 },
  { prerequisiteProjectId: 'curie-medical-radiology', discountedProjectId: 'franklin-photograph-51', discount: 1 },
];

export function crossoverFundsDiscount(state: GameState, project: ResearchProject): number {
  let discount = 0;
  for (const rule of FUNDS_DISCOUNT_CROSSOVERS) {
    if (rule.discountedProjectId !== project.id) continue;
    const unlocked = state.players.some((p) => p.completedProjectIds.includes(rule.prerequisiteProjectId));
    if (unlocked) discount += rule.discount;
  }
  return discount;
}

export function computeProjectCompletion(
  _state: GameState,
  player: PlayerState,
  project: ResearchProject,
): ProjectCompletionResult {
  const character = getCharacter(player.characterId);
  const canonScore = computeCanonScore(project, player);
  let legacyAwarded = project.baseLegacy;

  if (isBareConjecture(project, character)) {
    legacyAwarded = Math.floor(legacyAwarded / 2);
  }

  legacyAwarded += canonScore;

  const consequences: ConsequenceLogEntry[] = project.consequences.map((c) => ({
    ...c,
    chapterId: currentChapterId(player),
    year: player.currentYear,
    projectId: project.id,
  }));

  return { legacyAwarded, canonScore, consequences };
}

// ---------------------------------------------------------------------------
// Consequence accumulation
// ---------------------------------------------------------------------------

export function summarizeConsequences(player: PlayerState): Record<string, number> {
  const totals: Record<string, number> = {};
  for (const entry of player.consequenceLog) {
    totals[entry.type] = (totals[entry.type] ?? 0) + entry.amount;
  }
  return totals;
}

// ---------------------------------------------------------------------------
// Historical events
// ---------------------------------------------------------------------------

export function eventsForChapter(player: PlayerState): typeof HISTORICAL_EVENTS {
  const chapter = currentChapter(player);
  return HISTORICAL_EVENTS.filter((event) => {
    const characterMatch = event.affectedCharacterIds.length === 0 || event.affectedCharacterIds.includes(player.characterId);
    const overlapsChapter = event.yearStart <= chapter.yearEnd && event.yearEnd >= chapter.yearStart;
    return characterMatch && overlapsChapter && !player.triggeredEventIds.includes(event.id);
  });
}

// ---------------------------------------------------------------------------
// Final legacy calculation
// ---------------------------------------------------------------------------

export interface FinalScoreSummary {
  scientificLegacy: number;
  canonAlignment: number;
  totalLegacy: number;
  consequenceTotals: Record<string, number>;
  benchmark: number;
  benchmarkRatio: number;
}

export function computeFinalScore(player: PlayerState): FinalScoreSummary {
  const character = getCharacter(player.characterId);
  return {
    scientificLegacy: player.legacyPoints,
    canonAlignment: player.canonPoints,
    totalLegacy: player.legacyPoints,
    consequenceTotals: summarizeConsequences(player),
    benchmark: character.legacyBenchmark,
    benchmarkRatio: character.legacyBenchmark > 0 ? player.legacyPoints / character.legacyBenchmark : 0,
  };
}
