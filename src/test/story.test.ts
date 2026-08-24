import { describe, expect, it } from 'vitest';
import { createGame } from '../engine/reducer';
import {
  createEmptyNarrativeState,
  getActiveStoryView,
  hasActiveStory,
  initializeStoryGame,
  prepareResumedStoryGame,
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
  it('starts a full Einstein game without queueing story pages', () => {
    const game: GameState = initializeStoryGame(createGame(['einstein'], 42, 'full'));
    expect(hasActiveStory(game)).toBe(false);
    expect(getActiveStoryView(game)).toBeNull();
    expect(game.narrative?.pendingSceneIds).toEqual([]);
    expect(game.players[0].seenContextCardIds).not.toContain('einstein-card-1905');
  });

  it('advances chapters directly without a closing story interruption', () => {
    let game: GameState = storylessEinstein();
    const beforeChapter = game.players[0].chapterIndex;

    game = storyAwareGameReducer(game, { type: 'END_CHAPTER' });
    expect(game.players[0].chapterIndex).toBe(beforeChapter + 1);
    expect(getActiveStoryView(game)).toBeNull();
  });

  it('does not queue fallback pages for characters without authored stories', () => {
    const game = initializeStoryGame(createGame(['curie'], 7, 'full'));
    expect(getActiveStoryView(game)).toBeNull();
    expect(game.narrative?.pendingSceneIds).toEqual([]);
  });

  it('clears a pending story interruption when an existing save resumes', () => {
    const base = createGame(['einstein'], 9, 'full');
    const resumed = prepareResumedStoryGame({
      ...base,
      narrative: {
        ...createEmptyNarrativeState(),
        activeSceneId: 'einstein-prologue-century',
        activeVariantId: 'default',
        focusPlayerId: 'p1',
        pendingSceneIds: ['einstein-formation-opening'],
      },
    });

    expect(resumed.narrative?.activeSceneId).toBeUndefined();
    expect(resumed.narrative?.pendingSceneIds).toEqual([]);
    expect(hasActiveStory(resumed)).toBe(false);
  });
});

describe('Einstein state-aware story variants', () => {
  it('completes Special Relativity without queueing a story page', () => {
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
          insights: [
            ...game.players[0].insights,
            { insightId: 'relativity-of-simultaneity', sourceType: 'location' as const, sourceId: 'bern', year: 1905 },
          ],
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
    expect(getActiveStoryView(game)).toBeNull();
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
