import { describe, expect, it, beforeEach } from 'vitest';
import { createGame } from '../engine/reducer';
import {
  clearCurrentGame,
  exportSaveAsJson,
  importSaveFromJson,
  loadCurrentGame,
  migrateSave,
  saveCurrentGame,
} from '../engine/save';
import { ACTIONS_PER_TURN, chapterActionBudget } from '../engine/rules';

beforeEach(() => {
  localStorage.clear();
});

describe('save/load serialization', () => {
  it('round-trips a game through localStorage', () => {
    const game = createGame(['curie', 'einstein'], 42);
    saveCurrentGame(game);
    const loaded = loadCurrentGame();
    expect(loaded).not.toBeNull();
    expect(loaded?.seed).toBe(42);
    expect(loaded?.players.map((p) => p.characterId)).toEqual(['curie', 'einstein']);
  });

  it('returns null when no game is saved', () => {
    clearCurrentGame();
    expect(loadCurrentGame()).toBeNull();
  });

  it('round-trips through JSON export/import', () => {
    const game = createGame(['hilbert'], 99);
    const json = exportSaveAsJson(game);
    const imported = importSaveFromJson(json);
    expect(imported?.seed).toBe(99);
    expect(imported?.players[0].characterId).toBe('hilbert');
  });

  it('rejects malformed JSON on import', () => {
    expect(importSaveFromJson('{not valid json')).toBeNull();
  });

  it('rejects a save from a newer, unrecognized schema version', () => {
    const game = createGame(['bohr'], 1);
    const raw = { schemaVersion: 1, savedAt: Date.now(), game: { ...game, schemaVersion: 999 } };
    expect(migrateSave(raw)).toBeNull();
  });

  it('migrates an older save to the one-action-per-year turn clock', () => {
    const game = createGame(['noether'], 2);
    const legacyGame = {
      ...game,
      schemaVersion: 2,
      players: [{ ...game.players[0], chapterIndex: 4, currentYear: 1924, timeActionsRemaining: 2, turnActionsRemaining: undefined }],
    };
    const migrated = migrateSave({ schemaVersion: 2, savedAt: Date.now(), game: legacyGame });

    expect(migrated?.schemaVersion).toBe(3);
    expect(migrated?.players[0].currentYear).toBe(1924);
    expect(migrated?.players[0].timeActionsRemaining).toBe(chapterActionBudget(1924, 1933));
    expect(migrated?.players[0].turnActionsRemaining).toBe(ACTIONS_PER_TURN);
  });
});
