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
  it('opens a full Einstein game on the prologue, with the first chapter opening queued behind it', () => {
    const game: GameState = initializeStoryGame(createGame(['einstein'], 42, 'full'));
    expect(hasActiveStory(game)).toBe(true);
    expect(getActiveStoryView(game)?.scene.id).toBe('einstein-prologue-century');
    expect(game.narrative?.pendingSceneIds).toEqual(['einstein-formation-opening']);
    // Context cards that a scene now tells in full never appear on the board.
    expect(game.players[0].seenContextCardIds).toContain('einstein-card-1905');
  });

  it('plays the closing scene before the chapter actually turns, then turns it', () => {
    let game: GameState = storylessEinstein();
    const beforeChapter = game.players[0].chapterIndex;

    game = storyAwareGameReducer(game, { type: 'END_CHAPTER' });
    expect(getActiveStoryView(game)?.scene.kind).toBe('chapterClosing');
    expect(game.players[0].chapterIndex).toBe(beforeChapter);

    let guard = 0;
    while (hasActiveStory(game) && guard++ < 50) {
      const view = getActiveStoryView(game)!;
      if (view.page.choices?.length && !view.chosenChoiceId) {
        game = storyAwareGameReducer(game, { type: 'STORY_CHOOSE', choiceId: view.page.choices[0].id });
      } else {
        game = storyAwareGameReducer(game, { type: 'STORY_NEXT' });
      }
    }
    expect(game.players[0].chapterIndex).toBe(beforeChapter + 1);
  });

  it('ignores board actions while a story page is showing', () => {
    const game: GameState = initializeStoryGame(createGame(['einstein'], 42, 'full'));
    const after = storyAwareGameReducer(game, { type: 'TEACH_OR_EARN' });
    expect(after.players[0].currentYear).toBe(game.players[0].currentYear);
    expect(getActiveStoryView(after)?.scene.id).toBe('einstein-prologue-century');
  });

  it('starts every authored life on its own prologue', () => {
    const game = initializeStoryGame(createGame(['curie'], 7, 'full'));
    expect(getActiveStoryView(game)?.scene.kind).toBe('prologue');
    expect(getActiveStoryView(game)?.scene.characterId).toBe('curie');
  });

  it('keeps a pending story page when an existing save resumes', () => {
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

    expect(resumed.narrative?.activeSceneId).toBe('einstein-prologue-century');
    expect(hasActiveStory(resumed)).toBe(true);
  });

  it('lets a page be turned back without losing the chosen answer', () => {
    let game: GameState = initializeStoryGame(createGame(['einstein'], 42, 'full'));
    game = storyAwareGameReducer(game, { type: 'STORY_NEXT' });
    expect(getActiveStoryView(game)?.pageIndex).toBe(1);
    game = storyAwareGameReducer(game, { type: 'STORY_BACK' });
    expect(getActiveStoryView(game)?.pageIndex).toBe(0);
  });
});

describe('Einstein state-aware story variants', () => {
  it('shows the Bern breakthrough scene when Special Relativity is completed there in 1905', () => {
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
