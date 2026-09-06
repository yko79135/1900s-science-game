import type { GameState, PlayerState } from '../types';
import type { StoryBeat } from '../types/story';
import { BEATS } from '../data/beats';
import { conditionMatches } from './story';

/**
 * Beats are the quiet half of the narrative: one line offered after a turn,
 * gated exactly like an authored scene but costing the player nothing. They
 * exist so that a year spent reading in Bern still says something.
 */

export function eligibleBeats(state: GameState, player: PlayerState): StoryBeat[] {
  const seen = new Set(state.narrative?.seenBeatIds ?? []);
  // A repeatable beat may come round again, but never twice in a row.
  const justShown = state.narrative?.activeBeatId;
  return BEATS.filter((beat) => beat.characterId === player.characterId)
    .filter((beat) => beat.id !== justShown)
    .filter((beat) => beat.repeatable || !seen.has(beat.id))
    .filter((beat) => (beat.conditions ?? []).every((condition) => conditionMatches(state, player, condition)))
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}

/** The line to show after this turn, if the year has one. */
export function nextBeat(state: GameState, player: PlayerState): StoryBeat | undefined {
  return eligibleBeats(state, player)[0];
}

/** The beat currently on screen, if the year produced one. */
export function activeBeat(state: GameState): StoryBeat | undefined {
  const id = state.narrative?.activeBeatId;
  return id ? BEATS.find((beat) => beat.id === id) : undefined;
}

/**
 * Spends a beat: the year gets its line, and that line does not come round
 * again. Called once per board action, after the action has been applied.
 */
export function advanceBeat(state: GameState): GameState {
  const narrative = state.narrative;
  const player = state.players[state.activePlayerIndex];
  if (!narrative || !player || player.finished) return state;

  const beat = nextBeat(state, player);
  if (!beat) return { ...state, narrative: { ...narrative, activeBeatId: undefined } };

  const seen = narrative.seenBeatIds ?? [];
  return {
    ...state,
    narrative: {
      ...narrative,
      activeBeatId: beat.id,
      seenBeatIds: beat.repeatable || seen.includes(beat.id) ? seen : [...seen, beat.id],
    },
  };
}
