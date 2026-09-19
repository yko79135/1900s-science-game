import type { GameState, PlayerState } from '../types';
import { CHARACTERS } from '../data/content';
import { computeFinalScore } from './rules';
import { verdictFor } from './verdict';

/**
 * A life's standing so far, in the shape a player can watch move.
 *
 * The endgame verdict already ranks a finished life. This is the same ladder
 * read mid-run, so the rank on the screen during play is the rank the ending
 * will use, and a player can see themselves climbing it rather than finding
 * out at the end what they were.
 */

export interface Standing {
  /** How far up the ranks this life has come, 1-based. */
  level: number;
  /** What the life would be called if it ended now. */
  title: string;
  /** Legacy earned toward the next rank. */
  progress: number;
  /** Legacy needed for the next rank; equals progress at the top. */
  target: number;
  /** 0–1, for the bar. */
  fraction: number;
}

const RANK_AT = [0, 0.05, 0.2, 0.4, 0.6, 0.85];

export function standingOf(state: GameState, player: PlayerState): Standing {
  const benchmark = CHARACTERS[player.characterId].legacyBenchmark;
  const summary = computeFinalScore(player);
  const ratio = summary.benchmarkRatio;

  let index = 0;
  for (let i = RANK_AT.length - 1; i >= 0; i -= 1) {
    if (ratio >= RANK_AT[i]) { index = i; break; }
  }

  const floor = RANK_AT[index] * benchmark;
  const ceiling = index + 1 < RANK_AT.length ? RANK_AT[index + 1] * benchmark : floor;
  const atTop = index + 1 >= RANK_AT.length;

  // The rank's own name, without the "for what he would not sign" tail the
  // ending adds; mid-run there is no settled reason yet. And a life still being
  // lived is not yet forgotten — that is a judgement only an ending can make.
  const ranked = verdictFor(state, player).rank.split(' — ')[0];
  const title = index === 0 ? 'Unknown' : ranked;

  return {
    level: index + 1,
    title,
    progress: Math.round(summary.totalLegacy),
    target: Math.round(atTop ? summary.totalLegacy : ceiling),
    fraction: atTop ? 1 : Math.max(0, Math.min(1, (summary.totalLegacy - floor) / Math.max(1, ceiling - floor))),
  };
}
