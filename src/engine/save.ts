import type { CompendiumDiscoveryState, GameState, SaveFile, SettingsState } from '../types';
import { SCHEMA_VERSION } from '../types';
import { CHAPTERS_BY_CHARACTER } from '../data/content';
import { ACTIONS_PER_TURN, chapterActionBudget } from './rules';

const KEYS = {
  currentGame: 'shapeOfACentury.currentGame',
  completedGames: 'shapeOfACentury.completedGames',
  settings: 'shapeOfACentury.settings',
  compendium: 'shapeOfACentury.compendium',
} as const;

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/**
 * Migrates a raw saved payload to the current schema. Unknown/newer versions
 * are rejected rather than guessed at.
 */
export function migrateSave(raw: unknown): GameState | null {
  if (!raw || typeof raw !== 'object') return null;
  const save = raw as Partial<SaveFile>;
  if (!save.game || typeof save.game.schemaVersion !== 'number') return null;
  if (save.game.schemaVersion > SCHEMA_VERSION) return null; // From a newer version we don't understand.
  let game = save.game as GameState;

  if (game.schemaVersion < 2) {
    game = {
      ...game,
      schemaVersion: 2,
      players: game.players.map((player) => {
        const chapter = CHAPTERS_BY_CHARACTER[player.characterId]?.[player.chapterIndex];
        if (!chapter || player.finished) return player;

        const currentYear = Math.max(chapter.yearStart, Math.min(chapter.yearEnd, player.currentYear));
        return {
          ...player,
          currentYear,
          timeActionsRemaining: chapterActionBudget(currentYear, chapter.yearEnd),
        };
      }),
    };
  }

  if (game.schemaVersion < 3) {
    game = {
      ...game,
      schemaVersion: 3,
      players: game.players.map((player) => {
        const chapter = CHAPTERS_BY_CHARACTER[player.characterId]?.[player.chapterIndex];
        if (!chapter || player.finished) {
          return { ...player, turnActionsRemaining: ACTIONS_PER_TURN };
        }

        const currentYear = Math.max(chapter.yearStart, Math.min(chapter.yearEnd, player.currentYear));
        return {
          ...player,
          currentYear,
          timeActionsRemaining: chapterActionBudget(currentYear, chapter.yearEnd),
          turnActionsRemaining: ACTIONS_PER_TURN,
        };
      }),
    };
  }

  return game;
}

export function saveCurrentGame(game: GameState): void {
  const payload: SaveFile = { schemaVersion: SCHEMA_VERSION, savedAt: Date.now(), game };
  localStorage.setItem(KEYS.currentGame, JSON.stringify(payload));
}

export function loadCurrentGame(): GameState | null {
  const raw = safeParse<unknown>(localStorage.getItem(KEYS.currentGame));
  return migrateSave(raw);
}

export function clearCurrentGame(): void {
  localStorage.removeItem(KEYS.currentGame);
}

export function exportSaveAsJson(game: GameState): string {
  const payload: SaveFile = { schemaVersion: SCHEMA_VERSION, savedAt: Date.now(), game };
  return JSON.stringify(payload, null, 2);
}

export function importSaveFromJson(json: string): GameState | null {
  const raw = safeParse<unknown>(json);
  return migrateSave(raw);
}

export interface CompletedGameRecord {
  id: string;
  completedAt: number;
  summary: { characterId: string; legacyPoints: number; canonPoints: number }[];
}

export function loadCompletedGames(): CompletedGameRecord[] {
  return safeParse<CompletedGameRecord[]>(localStorage.getItem(KEYS.completedGames)) ?? [];
}

export function appendCompletedGame(record: CompletedGameRecord): void {
  const existing = loadCompletedGames();
  localStorage.setItem(KEYS.completedGames, JSON.stringify([...existing, record]));
}

const DEFAULT_SETTINGS: SettingsState = {
  reducedMotion: false,
  highContrast: false,
  tutorialCompleted: false,
};

export function loadSettings(): SettingsState {
  return { ...DEFAULT_SETTINGS, ...(safeParse<Partial<SettingsState>>(localStorage.getItem(KEYS.settings)) ?? {}) };
}

export function saveSettings(settings: SettingsState): void {
  localStorage.setItem(KEYS.settings, JSON.stringify(settings));
}

const DEFAULT_COMPENDIUM: CompendiumDiscoveryState = { discoveredIds: [] };

export function loadCompendiumDiscoveries(): CompendiumDiscoveryState {
  return safeParse<CompendiumDiscoveryState>(localStorage.getItem(KEYS.compendium)) ?? DEFAULT_COMPENDIUM;
}

export function saveCompendiumDiscoveries(state: CompendiumDiscoveryState): void {
  localStorage.setItem(KEYS.compendium, JSON.stringify(state));
}

export function markCompendiumDiscovered(id: string): void {
  const state = loadCompendiumDiscoveries();
  if (!state.discoveredIds.includes(id)) {
    saveCompendiumDiscoveries({ discoveredIds: [...state.discoveredIds, id] });
  }
}
