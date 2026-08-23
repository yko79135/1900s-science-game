import { describe, expect, it } from 'vitest';
import { createGame } from '../engine/reducer';
import {
  createEmptyNarrativeState,
  getActiveStoryView,
  initializeStoryGame,
  resolveStoryVariantId,
  storyAwareGameReducer,
} from '../engine/story';
import { chapterActionBudget } from '../engine/rules';
import { buildStoryImagePrompt } from '../engine/storyImage';
import { CHARACTERS } from '../data/content';
import { storySceneById } from '../data/story';
import type { GameState } from '../types';

function storylessEinstein(): GameState {
  const base = createGame(['einstein'], 1905, 'full');
  return {
    ...base,
    narrative: {
      ...createEmptyNarrativeState(),
      chapterOpeningSeen: { 'p1:formation': true },
    },
  };
}

describe('narrative campaign flow', () => {
  it('starts a full Einstein game with the world prologue, then Formation opening', () => {
    let game: GameState = initializeStoryGame(createGame(['einstein'], 42, 'full'));
    expect(getActiveStoryView(game)?.scene.id).toBe('einstein-prologue-century');

    game = storyAwareGameReducer(game, { type: 'STORY_NEXT' });
    expect(getActiveStoryView(game)?.scene.id).toBe('einstein-prologue-century');

    game = storyAwareGameReducer(game, { type: 'STORY_NEXT' });
    expect(getActiveStoryView(game)?.scene.id).toBe('einstein-formation-opening');
  });

  it('defers chapter advancement until the closing story finishes', () => {
    let game: GameState = storylessEinstein();
    const beforeChapter = game.players[0].chapterIndex;

    game = storyAwareGameReducer(game, { type: 'END_CHAPTER' });
    expect(game.players[0].chapterIndex).toBe(beforeChapter);
    expect(getActiveStoryView(game)?.scene.id).toBe('einstein-formation-closing');

    game = storyAwareGameReducer(game, { type: 'STORY_NEXT' });
    expect(game.players[0].chapterIndex).toBe(beforeChapter + 1);
    expect(getActiveStoryView(game)?.scene.id).toBe('einstein-education-opening');
  });

  it('uses deterministic fallback chapter stories for characters not authored yet', () => {
    const game = initializeStoryGame(createGame(['curie'], 7, 'full'));
    const view = getActiveStoryView(game);
    expect(view?.scene.id).toBe('fallback:curie:formation:opening');
    expect(view?.page.narration).toMatch(/Marie Curie/);
  });
});

describe('Einstein state-aware story variants', () => {
  it('queues the Bern Special Relativity breakthrough only after the project is completed', () => {
    let game: GameState = createGame(['einstein'], 1905, 'full');
    game = {
      ...game,
      narrative: {
        ...createEmptyNarrativeState(),
        chapterOpeningSeen: { 'p1:entry': true },
      },
      players: [
        {
          ...game.players[0],
          chapterIndex: 2,
          currentYear: 1905,
          currentLocationId: 'bern',
          timeActionsRemaining: chapterActionBudget(1905, 1909),
          turnActionsRemaining: 4,
          resources: {
            ...game.players[0].resources,
            tokens: { ...game.players[0].resources.tokens, theory: 3 },
          },
        },
      ],
    };

    expect(game.players[0].completedProjectIds).not.toContain('einstein-special-relativity');
    game = storyAwareGameReducer(game, { type: 'ATTEMPT_PROJECT', projectId: 'einstein-special-relativity' });

    expect(game.players[0].completedProjectIds).toContain('einstein-special-relativity');
    const view = getActiveStoryView(game);
    expect(view?.scene.id).toBe('einstein-special-relativity-breakthrough');
    expect(view?.variant.id).toBe('bern-1905');
  });

  it('uses Canon Hilbert when Hilbert is not a human player', () => {
    const base = storylessEinstein();
    const game: GameState = {
      ...base,
      players: [
        {
          ...base.players[0],
          chapterIndex: 3,
          currentYear: 1915,
          currentLocationId: 'berlin',
        },
      ],
    };
    expect(resolveStoryVariantId(game, 'einstein-hilbert-1915', 'p1')).toBe('npc-hilbert');
  });

  it('uses a human Hilbert actual location and never silently substitutes Canon Hilbert', () => {
    const base = createGame(['einstein', 'hilbert'], 1915, 'full');
    const shared: GameState = {
      ...base,
      narrative: createEmptyNarrativeState(),
      players: [
        { ...base.players[0], chapterIndex: 3, currentYear: 1915, currentLocationId: 'berlin' },
        { ...base.players[1], currentYear: 1915, currentLocationId: 'paris' },
      ],
    };

    expect(resolveStoryVariantId(shared, 'einstein-hilbert-1915', 'p1')).toBe('human-hilbert-elsewhere');

    const together: GameState = {
      ...shared,
      players: [shared.players[0], { ...shared.players[1], currentLocationId: 'gottingen' }],
    };
    expect(resolveStoryVariantId(together, 'einstein-hilbert-1915', 'p1')).toBe('human-hilbert-present');
  });
});

describe('story image safety contract', () => {
  it('builds an image prompt with period accuracy, no embedded text, and PG-13 constraints', () => {
    const scene = storySceneById('einstein-atomic-bomb-news');
    expect(scene).toBeDefined();
    const variant = scene!.variants[0];
    const prompt = buildStoryImagePrompt(variant.image, CHARACTERS.einstein);
    expect(prompt).toMatch(/PG-13/);
    expect(prompt).toMatch(/no gore/i);
    expect(prompt).toMatch(/no nudity/i);
    expect(prompt).toMatch(/no.*text/i);
    expect(prompt).toMatch(/period-appropriate/i);
  });
});
