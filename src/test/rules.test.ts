import { describe, expect, it } from 'vitest';
import {
  applyCenturyDeadlines,
  canAttemptProject,
  charactersOverlap,
  computeCanonScore,
  computeFinalScore,
  evaluateTravel,
  getCharacter,
  isLocationActiveForYear,
  summarizeConsequences,
  yearForActionsSpent,
  yearWithinBothLifetimes,
} from '../engine/rules';
import { createGame, createPlayer, gameReducer } from '../engine/reducer';
import { getProjectById, LOCATIONS } from '../data/content';
import type { GameState } from '../types';

describe('movement eligibility', () => {
  it('rejects travel to a location before it becomes active', () => {
    const player = createPlayer('turing', 'p1');
    // Bletchley Park doesn't open until 1939; Turing's education chapter is much earlier.
    const result = evaluateTravel(player, 'bletchleyPark');
    expect(result.allowed).toBe(false);
    expect(result.reasons.join(' ')).toMatch(/not yet a relevant destination/);
  });

  it('allows travel to an active, affordable destination', () => {
    const player = createPlayer('curie', 'p1');
    const funded = { ...player, resources: { ...player.resources, funds: 10 } };
    const result = evaluateTravel(funded, 'paris');
    expect(result.allowed).toBe(true);
    expect(result.fundsCost).toBe(LOCATIONS.paris.travelCost);
  });

  it('rejects travel when funds are insufficient', () => {
    const player = createPlayer('curie', 'p1');
    const poor = { ...player, resources: { ...player.resources, funds: 0 } };
    const result = evaluateTravel(poor, 'paris');
    expect(result.allowed).toBe(false);
    expect(result.reasons.join(' ')).toMatch(/Insufficient Funds/);
  });

  it('isLocationActiveForYear respects open-ended ranges', () => {
    expect(isLocationActiveForYear(LOCATIONS.princeton, 1930)).toBe(true);
    expect(isLocationActiveForYear(LOCATIONS.princeton, 1929)).toBe(false);
    expect(isLocationActiveForYear(LOCATIONS.princeton, 2000)).toBe(true);
  });
});

describe('travel and living costs', () => {
  it('travel deducts funds and a Time action', () => {
    let game = createGame(['curie'], 1);
    game = { ...game, players: [{ ...game.players[0], resources: { ...game.players[0].resources, funds: 10 } }] };
    const before = game.players[0];
    const after = gameReducer(game, { type: 'TRAVEL', destinationId: 'paris' }).players[0];
    expect(after.resources.funds).toBe(before.resources.funds - LOCATIONS.paris.travelCost);
    expect(after.timeActionsRemaining).toBe(before.timeActionsRemaining - 1);
    expect(after.currentLocationId).toBe('paris');
  });

  it('end of chapter charges living cost at the current location', () => {
    let game = createGame(['curie'], 2);
    const before = game.players[0].resources.funds;
    game = gameReducer(game, { type: 'END_CHAPTER' });
    const after = game.players[0].resources.funds;
    expect(after).toBe(Math.max(0, before - LOCATIONS.warsaw.livingCost));
  });
});

describe('in-chapter year progression', () => {
  it('spreads a chapter’s years evenly across its four Time actions', () => {
    expect(yearForActionsSpent(1895, 1903, 0)).toBe(1895);
    expect(yearForActionsSpent(1895, 1903, 2)).toBe(1899);
    expect(yearForActionsSpent(1895, 1903, 4)).toBe(1903);
  });

  it('spending Time actions lets an otherwise too-early project become reachable within the same chapter', () => {
    let game = createGame(['curie'], 6);
    game = {
      ...game,
      players: [
        {
          ...game.players[0],
          currentLocationId: 'paris',
          chapterIndex: 2, // entry: 1895-1902
          currentYear: 1895,
          resources: { ...game.players[0].resources, tokens: { ...game.players[0].resources.tokens, evidence: 2 } },
        },
      ],
    };
    const project = getProjectById('curie-radiation-measurement')!; // earliestYear 1896
    expect(canAttemptProject(game, game.players[0], project).eligible).toBe(false);
    // Spend two Time actions (e.g. resting), advancing the in-chapter year.
    game = gameReducer(game, { type: 'REST_AND_FAMILY' });
    game = gameReducer(game, { type: 'REST_AND_FAMILY' });
    expect(game.players[0].currentYear).toBeGreaterThanOrEqual(1896);
    expect(canAttemptProject(game, game.players[0], project).eligible).toBe(true);
  });
});

describe('project prerequisites', () => {
  it('rejects a project before its earliest year / outside its chapter', () => {
    const game = createGame(['einstein'], 3);
    const project = getProjectById('einstein-general-relativity')!;
    const player = game.players[0];
    const eligibility = canAttemptProject(game, player, project);
    expect(eligibility.eligible).toBe(false);
  });

  it('accepts a project once location, chapter, year, and tokens are satisfied', () => {
    let game = createGame(['curie'], 4);
    // Grant enough evidence tokens for the radiation-measurement project.
    game = {
      ...game,
      players: [{ ...game.players[0], resources: { ...game.players[0].resources, tokens: { ...game.players[0].resources.tokens, evidence: 2 } } }],
    };
    // Curie starts in Warsaw; the project requires Paris and the 'entry' chapter.
    game = { ...game, players: [{ ...game.players[0], currentLocationId: 'paris', chapterIndex: 2, currentYear: 1897 }] };
    const project = getProjectById('curie-radiation-measurement')!;
    const eligibility = canAttemptProject(game, game.players[0], project);
    expect(eligibility.eligible).toBe(true);
  });

  it('rejects a project requiring knowledge that has not been published', () => {
    const game = createGame(['noether'], 5);
    const project = getProjectById('noether-theorem')!;
    const player = { ...game.players[0], currentLocationId: 'gottingen', chapterIndex: 3, currentYear: 1918 };
    const eligibility = canAttemptProject(game, player, project);
    expect(eligibility.eligible).toBe(false);
    expect(eligibility.reasons.join(' ')).toMatch(/prior knowledge/);
  });
});

describe('canon scoring', () => {
  it('awards +3 for a Documented project completed in its canon place and year', () => {
    const player = createPlayer('einstein', 'p1');
    const inCanon = { ...player, currentLocationId: 'bern', currentYear: 1905 };
    const project = getProjectById('einstein-special-relativity')!;
    expect(computeCanonScore(project, inCanon)).toBe(3);
  });

  it('awards +1 for a Documented project completed off its canon place/year', () => {
    const player = createPlayer('einstein', 'p1');
    const offCanon = { ...player, currentLocationId: 'zurich', currentYear: 1910 };
    const project = getProjectById('einstein-special-relativity')!;
    expect(computeCanonScore(project, offCanon)).toBe(1);
  });

  it('awards 0 for a Speculative project', () => {
    const player = createPlayer('einstein', 'p1');
    const project = getProjectById('einstein-unified-field')!;
    expect(computeCanonScore(project, { ...player, currentLocationId: project.canonLocationId, currentYear: project.canonYearStart })).toBe(0);
  });
});

describe('character timeline overlap', () => {
  it('recognizes overlapping lifespans (Einstein and Gödel at Princeton)', () => {
    expect(charactersOverlap(getCharacter('einstein'), getCharacter('godel'))).toBe(true);
    expect(yearWithinBothLifetimes(getCharacter('einstein'), getCharacter('godel'), 1945)).toBe(true);
  });

  it('rejects a year outside one character’s lifespan', () => {
    // Ramanujan died in 1920; he cannot have interacted with Turing (born 1912) as adults.
    expect(yearWithinBothLifetimes(getCharacter('ramanujan'), getCharacter('turing'), 1935)).toBe(false);
  });

  it('detects non-overlapping lifespans using the pure function directly', () => {
    // Hilbert (1862-1943) and Johnson (1918-2020) briefly overlapped in raw years.
    expect(charactersOverlap(getCharacter('hilbert'), getCharacter('johnson'))).toBe(true);
    // Two lifespans with a genuine gap between death and birth never overlap.
    const early = { ...getCharacter('ramanujan'), bornYear: 1800, diedYear: 1850 };
    const late = { ...getCharacter('johnson'), bornYear: 1918, diedYear: 2020 };
    expect(charactersOverlap(early, late)).toBe(false);
  });
});

describe('The Century Does Not Wait', () => {
  it('leaves an unpublished entry alone before its deadline', () => {
    const { knowledgeBoard, newlyTriggered } = applyCenturyDeadlines({}, 1904);
    expect(newlyTriggered).not.toContain('specialRelativity');
    expect(knowledgeBoard.specialRelativity).toBeUndefined();
  });

  it('triggers an NPC fallback once the deadline passes with no publication', () => {
    const { knowledgeBoard, newlyTriggered } = applyCenturyDeadlines({}, 1910);
    expect(newlyTriggered).toContain('specialRelativity');
    expect(knowledgeBoard.specialRelativity.npcFallbackTriggered).toBe(true);
    expect(knowledgeBoard.specialRelativity.publishedByCharacterId).toBeUndefined();
  });

  it('does not overwrite an entry a player already published', () => {
    const published = { specialRelativity: { entryId: 'specialRelativity', publishedByCharacterId: 'einstein' as const, publishedYear: 1905, npcFallbackTriggered: false } };
    const { knowledgeBoard, newlyTriggered } = applyCenturyDeadlines(published, 1950);
    expect(newlyTriggered).not.toContain('specialRelativity');
    expect(knowledgeBoard.specialRelativity.publishedByCharacterId).toBe('einstein');
  });
});

describe('consequence accumulation', () => {
  it('summarizes consequence log entries by type', () => {
    const player = createPlayer('oppenheimer', 'p1');
    const withConsequences = {
      ...player,
      consequenceLog: [
        { type: 'nuclear' as const, amount: 3, description: 'a', chapterId: 'crisis' as const, year: 1945, projectId: 'x' },
        { type: 'secrecy' as const, amount: 2, description: 'b', chapterId: 'crisis' as const, year: 1945, projectId: 'x' },
        { type: 'nuclear' as const, amount: 1, description: 'c', chapterId: 'crisis' as const, year: 1945, projectId: 'y' },
      ],
    };
    const totals = summarizeConsequences(withConsequences);
    expect(totals.nuclear).toBe(4);
    expect(totals.secrecy).toBe(2);
  });
});

describe('final legacy scoring', () => {
  it('computes a ratio against the character legacy benchmark', () => {
    const player = createPlayer('curie', 'p1');
    const scored = { ...player, legacyPoints: 50, canonPoints: 10 };
    const summary = computeFinalScore(scored);
    expect(summary.totalLegacy).toBe(50);
    expect(summary.canonAlignment).toBe(10);
    expect(summary.benchmark).toBe(getCharacter('curie').legacyBenchmark);
    expect(summary.benchmarkRatio).toBeCloseTo(50 / getCharacter('curie').legacyBenchmark);
  });
});

describe('reducer: attempting and completing a project', () => {
  it('completing a project awards Legacy, spends tokens, and can populate the Century Knowledge Board', () => {
    let game: GameState = createGame(['einstein'], 7);
    game = {
      ...game,
      players: [
        {
          ...game.players[0],
          currentLocationId: 'bern',
          chapterIndex: 2, // entry
          currentYear: 1905,
          resources: { ...game.players[0].resources, tokens: { ...game.players[0].resources.tokens, theory: 3 } },
        },
      ],
    };
    game = gameReducer(game, { type: 'ATTEMPT_PROJECT', projectId: 'einstein-special-relativity' });
    const player = game.players[0];
    expect(player.completedProjectIds).toContain('einstein-special-relativity');
    expect(player.legacyPoints).toBeGreaterThan(0);
    expect(player.resources.tokens.theory).toBe(0);
    expect(game.knowledgeBoard.specialRelativity?.publishedByCharacterId).toBe('einstein');
  });
});
