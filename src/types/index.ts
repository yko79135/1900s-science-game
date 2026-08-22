// Core domain types for "The Shape of a Century: Lives, Ideas, Consequences"
// Kept independent of React so the engine and data files stay pure and testable.

export type HistoricalClassification = 'Documented' | 'Plausible' | 'Speculative';

export interface HistoricalSource {
  id: string;
  label: string;
  url: string;
}

export type ResourceTokenType = 'theory' | 'proof' | 'evidence' | 'computation' | 'engineering';

export type LifeChapterId =
  | 'formation'
  | 'education'
  | 'entry'
  | 'breakthrough'
  | 'crisis'
  | 'legacy';

export const LIFE_CHAPTER_ORDER: LifeChapterId[] = [
  'formation',
  'education',
  'entry',
  'breakthrough',
  'crisis',
  'legacy',
];

export const LIFE_CHAPTER_LABELS: Record<LifeChapterId, string> = {
  formation: 'Formation',
  education: 'Education',
  entry: 'Entry into the Profession',
  breakthrough: 'Breakthrough',
  crisis: 'Crisis and Responsibility',
  legacy: 'Legacy',
};

export interface Coordinates {
  lat: number;
  lon: number;
}

export type CharacterId =
  | 'curie'
  | 'einstein'
  | 'noether'
  | 'ramanujan'
  | 'oppenheimer'
  | 'hilbert'
  | 'johnson'
  | 'godel'
  | 'vonneumann'
  | 'franklin'
  | 'turing'
  | 'bohr';

export interface EmploymentOpportunity {
  id: string;
  title: string;
  description: string;
  fundsPerChapter: number;
  timeCost: number;
  requiresCharacterIds?: CharacterId[];
  standingDelta?: number;
}

export interface Institution {
  id: string;
  name: string;
  locationId: string;
  description: string;
  researchBonus?: Partial<Record<ResourceTokenType, number>>;
}

export interface Location {
  id: string;
  name: string;
  region: string;
  country: string;
  coordinates: Coordinates;
  activeStart: number;
  activeEnd: number | null;
  travelCost: number;
  livingCost: number;
  institutions: Institution[];
  researchBonuses: Partial<Record<ResourceTokenType, number>>;
  employment: EmploymentOpportunity[];
  risks: string[];
  connectedCharacterIds: CharacterId[];
  note: string;
  sourceId: string;
  disambiguation?: string;
}

export interface Collaborator {
  id: string;
  name: string;
  description: string;
  locationIds: string[];
  activeStart: number;
  activeEnd: number;
  relatedCharacterIds: CharacterId[];
  bonus: Partial<Record<ResourceTokenType, number>>;
  sourceId: string;
}

export interface ConsequenceEffect {
  type: 'nuclear' | 'secrecy' | 'exposure' | 'displacement' | 'priorityLoss' | 'overwork';
  amount: number;
  description: string;
}

export interface ResearchProject {
  id: string;
  characterId: CharacterId;
  chapterId: LifeChapterId;
  name: string;
  field: string;
  description: string;
  baseLegacy: number;
  earliestYear: number;
  requiredTokens: Partial<Record<ResourceTokenType, number>>;
  locationIds: string[];
  requiresInstitutionId?: string;
  requiredKnowledgeIds: string[];
  requiredCollaboratorIds: string[];
  canonLocationId: string;
  canonYearStart: number;
  canonYearEnd: number;
  nearCanonNote?: string;
  classification: HistoricalClassification;
  sourceId: string;
  consequences: ConsequenceEffect[];
  grantsKnowledgeId?: string;
  timeCost: number;
  fundsCost: number;
}

export interface ContextCardEffect {
  funds?: number;
  wellbeing?: number;
  health?: number;
  standing?: number;
  network?: number;
  exposure?: number;
}

export interface ContextCard {
  id: string;
  characterId: CharacterId;
  chapterId: LifeChapterId;
  year: number;
  title: string;
  body: string;
  type: 'personal' | 'historical';
  sourceId: string;
  effects?: ContextCardEffect;
}

export interface LifeChapter {
  id: LifeChapterId;
  characterId: CharacterId;
  label: string;
  yearStart: number;
  yearEnd: number;
  startingLocationId: string;
  summary: string;
}

export interface CanonicalRouteStop {
  locationId: string;
  year: number;
  note: string;
}

export interface CharacterAbility {
  id: string;
  name: string;
  description: string;
}

export interface StartingResources {
  funds: number;
  wellbeing: number;
  health: number;
  standing: number;
  network: number;
}

export interface Character {
  id: CharacterId;
  name: string;
  field: string;
  bornYear: number;
  diedYear: number | null;
  shortBio: string;
  sourceIds: string[];
  ability: CharacterAbility;
  startingResources: StartingResources;
  startingLocationId: string;
  canonicalRoute: CanonicalRouteStop[];
  collaboratorIds: string[];
  legacyBenchmark: number;
  difficulty: 'Approachable' | 'Balanced' | 'Demanding';
  tension: string;
  monogram: string;
  color: string;
}

export interface HistoricalEvent {
  id: string;
  name: string;
  yearStart: number;
  yearEnd: number;
  description: string;
  affectedLocationIds: string[];
  affectedCharacterIds: CharacterId[];
  sourceId: string;
  effects?: ContextCardEffect;
}

export interface CenturyKnowledgeEntry {
  id: string;
  name: string;
  description: string;
  earliestHistoricalYear: number;
  deadlineYear: number;
  canonicalCharacterId: CharacterId;
  sourceId: string;
  npcFallbackName: string;
}

// ---- Runtime / player state ----

export interface PlayerResources {
  funds: number;
  wellbeing: number;
  health: number;
  standing: number;
  network: number;
  exposure: number;
  tokens: Record<ResourceTokenType, number>;
}

export interface ConsequenceLogEntry extends ConsequenceEffect {
  chapterId: LifeChapterId;
  year: number;
  projectId: string;
}

export interface RouteHistoryEntry {
  locationId: string;
  year: number;
  chapterId: LifeChapterId;
}

export interface KnowledgeBoardEntryState {
  entryId: string;
  publishedByPlayerId?: string;
  publishedByCharacterId?: CharacterId;
  publishedYear?: number;
  npcFallbackTriggered: boolean;
}

export interface PlayerState {
  id: string;
  characterId: CharacterId;
  currentLocationId: string;
  currentYear: number;
  chapterIndex: number; // 0..5 into LIFE_CHAPTER_ORDER
  timeActionsRemaining: number;
  resources: PlayerResources;
  completedProjectIds: string[];
  seenContextCardIds: string[];
  legacyPoints: number;
  canonPoints: number;
  consequenceLog: ConsequenceLogEntry[];
  routeHistory: RouteHistoryEntry[];
  finished: boolean;
  problemCardsPlaced: string[]; // Hilbert
  abilityUsedThisChapter: boolean;
  johnsonVerifiedProjectIds: string[];
  bohrInviteeIds: string[];
  triggeredEventIds: string[];
}

export type GamePhase =
  | 'title'
  | 'setup'
  | 'characterSelect'
  | 'board'
  | 'endgame';

export interface GameLogEntry {
  id: string;
  year: number;
  message: string;
}

export interface GameState {
  schemaVersion: number;
  seed: number;
  rngCursor: number;
  phase: GamePhase;
  players: PlayerState[];
  activePlayerIndex: number;
  knowledgeBoard: Record<string, KnowledgeBoardEntryState>;
  log: GameLogEntry[];
  gameLength: 'short' | 'full';
  tutorialActive: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface SaveFile {
  schemaVersion: number;
  savedAt: number;
  game: GameState;
}

export interface SettingsState {
  reducedMotion: boolean;
  highContrast: boolean;
  tutorialCompleted: boolean;
}

export interface CompendiumDiscoveryState {
  discoveredIds: string[];
}

export const SCHEMA_VERSION = 1;
