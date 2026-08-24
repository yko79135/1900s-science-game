import { describe, expect, it } from 'vitest';
import { getProjectById } from '../data/content';
import { createGame, gameReducer } from '../engine/reducer';
import { selectStoryVariant } from '../engine/story';
import {
  applyCenturyDeadlines,
  canAttemptProject,
  chapterActionBudget,
  computeProjectCompletion,
  findAvailableInsightAcquisitions,
  hasInsight,
} from '../engine/rules';
import type { GameState, InsightAcquisition, PlayerState, StoryScene } from '../types';

function acquisition(insightId: string, sourceType: InsightAcquisition['sourceType'], year: number): InsightAcquisition {
  return { insightId, sourceType, year };
}

function readySpecialRelativityGame(locationId = 'zurich', year = 1905): GameState {
  const game = createGame(['einstein'], 1905);
  return {
    ...game,
    players: [
      {
        ...game.players[0],
        chapterIndex: 2,
        currentYear: year,
        currentLocationId: locationId,
        timeActionsRemaining: chapterActionBudget(year, 1909),
        turnActionsRemaining: 4,
        resources: {
          ...game.players[0].resources,
          tokens: { ...game.players[0].resources.tokens, theory: 3 },
        },
      },
    ],
  };
}

function readyGeneralRelativityGame(locationId: string): GameState {
  const game = createGame(['einstein'], 1915, 'short');
  return {
    ...game,
    knowledgeBoard: {
      specialRelativity: {
        entryId: 'specialRelativity',
        publishedByPlayerId: 'earlier-player',
        publishedByCharacterId: 'einstein',
        publishedYear: 1905,
        npcFallbackTriggered: false,
      },
    },
    players: [
      {
        ...game.players[0],
        chapterIndex: 3,
        currentYear: 1914,
        currentLocationId: locationId,
        timeActionsRemaining: chapterActionBudget(1914, 1919),
        turnActionsRemaining: 4,
        completedProjectIds: ['einstein-special-relativity'],
        resources: {
          ...game.players[0].resources,
          funds: 3,
          tokens: { ...game.players[0].resources.tokens, theory: 3, proof: 3 },
        },
      },
    ],
  };
}

describe('Insight routes and project eligibility', () => {
  it('finds the same Insight through collaborator and independent-study routes', () => {
    const game = readyGeneralRelativityGame('zurich');
    const player = game.players[0];

    const fromGrossmann = findAvailableInsightAcquisitions(game, player, {
      type: 'collaborator',
      collaboratorId: 'marcelGrossmann',
    }).find((item) => item.insightId === 'tensor-geometry');
    const fromStudy = findAvailableInsightAcquisitions(
      game,
      { ...player, studyProgress: { ...player.studyProgress, proof: 4 } },
    ).find((item) => item.insightId === 'tensor-geometry');

    expect(fromGrossmann?.sourceType).toBe('collaborator');
    expect(fromStudy?.sourceType).toBe('study');
  });

  it('blocks a project with a missing Insight and unlocks it once acquired', () => {
    const game = readySpecialRelativityGame();
    const project = getProjectById('einstein-special-relativity')!;
    const blocked = canAttemptProject(game, game.players[0], project);

    expect(blocked.eligible).toBe(false);
    expect(blocked.reasons.join(' ')).toMatch(/Relativity of Simultaneity/);

    const unlocked: PlayerState = {
      ...game.players[0],
      insights: [...game.players[0].insights, acquisition('relativity-of-simultaneity', 'study', 1905)],
    };
    expect(canAttemptProject(game, unlocked, project).eligible).toBe(true);
  });

  it('does not require the canon location when scientific requirements are met', () => {
    const game = readySpecialRelativityGame('prague');
    const project = getProjectById('einstein-special-relativity')!;
    const player = {
      ...game.players[0],
      insights: [...game.players[0].insights, acquisition('relativity-of-simultaneity', 'study', 1905)],
    };

    expect(project.canonLocationId).toBe('bern');
    expect(project.locationIds).not.toContain('prague');
    expect(canAttemptProject(game, player, project).eligible).toBe(true);
  });
});

describe('discovery scoring and public knowledge', () => {
  it('awards base discovery Legacy without adding Canon score', () => {
    const game = readySpecialRelativityGame('bern');
    const project = getProjectById('einstein-special-relativity')!;
    const player = {
      ...game.players[0],
      insights: [...game.players[0].insights, acquisition('relativity-of-simultaneity', 'location', 1905)],
    };
    const result = computeProjectCompletion(game, player, project);

    expect(result.canonScore).toBe(3);
    expect(result.baseLegacy).toBe(project.baseLegacy);
    expect(result.legacyAwarded).toBe(project.baseLegacy);
  });

  it('adds only a modest bonus for an early discovery', () => {
    const game = readySpecialRelativityGame('prague', 1904);
    const project = getProjectById('einstein-special-relativity')!;
    const player = {
      ...game.players[0],
      insights: [...game.players[0].insights, acquisition('relativity-of-simultaneity', 'study', 1904)],
    };
    const result = computeProjectCompletion(game, player, project);

    expect(result.earlyDiscoveryBonus).toBe(2);
    expect(result.legacyAwarded).toBe(project.baseLegacy + 2);
  });

  it('publishes a human discovery to Century Knowledge', () => {
    let game = readySpecialRelativityGame('prague');
    game = {
      ...game,
      players: [
        {
          ...game.players[0],
          insights: [...game.players[0].insights, acquisition('relativity-of-simultaneity', 'study', 1905)],
        },
      ],
    };

    game = gameReducer(game, { type: 'ATTEMPT_PROJECT', projectId: 'einstein-special-relativity' });

    expect(game.players[0].completedProjectIds).toContain('einstein-special-relativity');
    expect(game.players[0].legacyPoints).toBe(18);
    expect(game.knowledgeBoard.specialRelativity?.publishedByPlayerId).toBe(game.players[0].id);
  });

  it('never changes a human Legacy score when an NPC fallback fires', () => {
    const game = createGame(['einstein'], 8);
    const player = { ...game.players[0], legacyPoints: 11 };
    const { knowledgeBoard } = applyCenturyDeadlines(game.knowledgeBoard, 1910);

    expect(knowledgeBoard.specialRelativity.npcFallbackTriggered).toBe(true);
    expect(knowledgeBoard.specialRelativity.publishedByPlayerId).toBeUndefined();
    expect(player.legacyPoints).toBe(11);
  });
});

describe('collaboration and alternate General Relativity paths', () => {
  it('lets a human collaborator supply an Insight with provenance', () => {
    let game = createGame(['einstein', 'hilbert'], 12, 'short');
    game = {
      ...game,
      players: [
        {
          ...game.players[0],
          currentLocationId: 'berlin',
          currentYear: 1915,
          turnActionsRemaining: 4,
          timeActionsRemaining: 3,
        },
        {
          ...game.players[1],
          currentLocationId: 'berlin',
          currentYear: 1915,
          insights: [acquisition('tensor-geometry', 'study', 1914)],
        },
      ],
    };

    game = gameReducer(game, { type: 'COLLABORATE' });
    const learned = game.players[0].insights.find((item) => item.insightId === 'tensor-geometry');

    expect(learned?.sourceType).toBe('humanCollaboration');
    expect(learned?.sourcePlayerId).toBe(game.players[1].id);
    expect(learned?.sourceCharacterId).toBe('hilbert');
  });

  it('makes Insight acquisition source available to narrative variants', () => {
    const game = readyGeneralRelativityGame('zurich');
    const player = {
      ...game.players[0],
      insights: [
        ...game.players[0].insights,
        { ...acquisition('tensor-geometry', 'collaborator', 1914), sourceId: 'marcelGrossmann' },
      ],
    };
    const scene: StoryScene = {
      id: 'test-insight-source',
      characterId: 'einstein',
      chapterId: 'breakthrough',
      kind: 'breakthrough',
      classification: 'Speculative',
      sourceIds: [],
      trigger: { event: 'afterAction' },
      once: true,
      variants: [
        {
          id: 'grossmann-route',
          conditions: [
            {
              type: 'insightSourceIs',
              insightId: 'tensor-geometry',
              sourceType: 'collaborator',
              sourceId: 'marcelGrossmann',
            },
          ],
          title: 'Grossmann supplies the missing language',
          image: { setting: 'Zürich study', mood: 'collaborative', alt: 'Two scientists working together.' },
          pages: [{ id: 'page', narration: 'The source is available to the story engine.' }],
        },
      ],
    };

    expect(selectStoryVariant({ ...game, players: [player] }, scene, player)?.id).toBe('grossmann-route');
  });

  it('reaches General Relativity through Grossmann or independent mathematics', () => {
    let collaboratorPath = readyGeneralRelativityGame('zurich');
    collaboratorPath = gameReducer(collaboratorPath, { type: 'COLLABORATE' });
    expect(hasInsight(collaboratorPath.players[0], 'equivalence-principle')).toBe(true);
    expect(
      collaboratorPath.players[0].insights.find((item) => item.insightId === 'tensor-geometry')?.sourceType,
    ).toBe('collaborator');
    collaboratorPath = gameReducer(collaboratorPath, {
      type: 'ATTEMPT_PROJECT',
      projectId: 'einstein-general-relativity',
    });

    let studyPath = readyGeneralRelativityGame('prague');
    const studiedPlayer = {
      ...studyPath.players[0],
      studyProgress: { ...studyPath.players[0].studyProgress, theory: 5, proof: 4 },
    };
    const studiedInsights = findAvailableInsightAcquisitions(studyPath, studiedPlayer);
    studyPath = {
      ...studyPath,
      players: [{ ...studiedPlayer, insights: [...studiedPlayer.insights, ...studiedInsights] }],
    };
    expect(
      studyPath.players[0].insights.find((item) => item.insightId === 'tensor-geometry')?.sourceType,
    ).toBe('study');
    studyPath = gameReducer(studyPath, { type: 'ATTEMPT_PROJECT', projectId: 'einstein-general-relativity' });

    expect(collaboratorPath.players[0].completedProjectIds).toContain('einstein-general-relativity');
    expect(studyPath.players[0].completedProjectIds).toContain('einstein-general-relativity');
  });
});

describe('representative converted projects', () => {
  it('authors Insights for all four Einstein examples plus mathematical and experimental examples', () => {
    expect(getProjectById('einstein-photoelectric')?.requiredInsights).toEqual(['light-quanta']);
    expect(getProjectById('einstein-brownian-motion')?.requiredInsights).toEqual(['molecular-motion']);
    expect(getProjectById('einstein-special-relativity')?.requiredInsights).toEqual(['relativity-of-simultaneity']);
    expect(getProjectById('einstein-general-relativity')?.requiredInsights).toEqual([
      'equivalence-principle',
      'tensor-geometry',
    ]);
    expect(getProjectById('hilbert-foundations-of-geometry')?.requiredInsights).toEqual(['axiomatic-method']);
    expect(getProjectById('franklin-photograph-51')?.requiredInsights).toEqual(['xray-diffraction']);
  });
});
