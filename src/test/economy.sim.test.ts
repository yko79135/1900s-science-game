import { describe, expect, it } from 'vitest';
import { createGame, pendingContextCards } from '../engine/reducer';
import { getActiveStoryView, hasActiveStory, initializeStoryGame, storyAwareGameReducer } from '../engine/story';
import { CHARACTERS, PROJECTS_BY_CHARACTER } from '../data/content';
import { goalsFor } from '../engine/goals';
import { turnOptions } from '../engine/turn';
import type { CharacterId, GameState } from '../types';

/**
 * Plays every life using only what the screen tells a player: the goal cards
 * and the action list. If a life cannot finish its own work under this policy,
 * either the ladder is unclimbable or the screen is not saying enough — and
 * both of those are the game's fault, not the player's.
 */

const ALL = Object.keys(CHARACTERS) as CharacterId[];
const REPORT = import.meta.env.VITE_SIM_REPORT as string | undefined;

function clearStory(state: GameState): GameState {
  let s = state;
  let guard = 0;
  while (hasActiveStory(s) && guard++ < 3000) {
    const view = getActiveStoryView(s);
    if (!view) break;
    if (view.page.choices?.length && !view.chosenChoiceId) {
      s = storyAwareGameReducer(s, { type: 'STORY_CHOOSE', choiceId: view.page.choices[0].id });
      continue;
    }
    s = storyAwareGameReducer(s, { type: 'STORY_NEXT' });
  }
  return s;
}

/** The action a player would take after reading a lead off a goal card. */
function actionForLead(lead: string): string | undefined {
  if (lead.startsWith('Read and think')) return 'study';
  if (lead.startsWith('Work the mathematics')) return 'prove';
  if (lead.startsWith('Calculate')) return 'calculate';
  if (lead.startsWith('Measure and observe')) return 'measure';
  if (lead.startsWith('Build apparatus')) return 'build';
  if (lead.startsWith('Teach')) return 'earn';
  if (lead.startsWith('Seek out')) return 'collaborate';
  return undefined;
}

export function playLife(id: CharacterId) {
  let state = initializeStoryGame(createGame([id], 7));
  let guard = 0;

  while (guard++ < 800) {
    state = clearStory(state);
    const player = state.players[0];
    if (state.phase === 'endgame' || player.finished) break;

    if (pendingContextCards(player).length) {
      state = storyAwareGameReducer(state, { type: 'ACK_CONTEXT_CARDS' });
      continue;
    }

    const goals = goalsFor(state, player);
    const ready = goals.find((goal) => goal.state === 'ready');
    if (ready) {
      state = storyAwareGameReducer(state, { type: 'ATTEMPT_PROJECT', projectId: ready.project.id });
      continue;
    }

    const all = turnOptions(state, player);
    const options = all.filter((option) => option.enabled);

    // A worn-down life cannot work; the screen says so, and a player rests.
    if (player.resources.wellbeing <= 1) {
      const rest = options.find((option) => option.id === 'rest');
      if (rest) {
        state = storyAwareGameReducer(state, rest.action);
        continue;
      }
    }
    if (!options.length) {
      state = storyAwareGameReducer(state, { type: 'END_CHAPTER' });
      continue;
    }

    // Follow the nearest goal's first unmet lead; otherwise go to where the
    // work happens; otherwise read.
    let pick;
    const blocked =
      goals.find((goal) => goal.state === 'blocked') ??
      goals.find((goal) => goal.state === 'waiting') ??
      goals.find((goal) => goal.state !== 'done');
    const lead = blocked?.requirements.find((r) => !r.met && r.lead)?.lead;
    if (lead) {
      const wanted = actionForLead(lead);
      if (wanted) pick = options.find((option) => option.id === wanted);
      if (!pick) {
        const place = /in ([A-Za-zÀ-ÿ' -]+)\.?$/.exec(lead)?.[1];
        if (place) pick = options.find((option) => option.label.endsWith(place));
      }
    }
    const target = blocked ?? goals.find((goal) => goal.state === 'waiting');
    if (!pick && target && !target.project.locationIds.includes(player.currentLocationId)) {
      pick = target.project.locationIds
        .map((locationId) => options.find((option) => option.id === `travel-${locationId}`))
        .find(Boolean);
    }
    pick = pick ?? options.find((option) => option.id === 'study') ?? options[0];
    state = storyAwareGameReducer(state, pick.action);
  }

  const player = state.players[0];
  const all = PROJECTS_BY_CHARACTER[id] ?? [];
  return {
    done: player.completedProjectIds.length,
    total: all.length,
    missed: all.filter((project) => !player.completedProjectIds.includes(project.id)).map((project) => project.name),
  };
}

describe('a life can finish its own work', () => {
  it('every life finishes something, and most lives finish most of it', async () => {
    const report = ALL.map((id) => ({ id, ...playLife(id) }));

    if (REPORT) {
      const moduleName = 'node:fs';
      const fs = await import(/* @vite-ignore */ moduleName);
      fs.writeFileSync(
        REPORT,
        report.map((r) => `${r.id}: ${r.done}/${r.total} — missed: ${r.missed.join(', ') || 'none'}`).join('\n'),
      );
    }

    expect(report.filter((r) => r.done === 0).map((r) => r.id), 'lives that finish nothing').toEqual([]);
    const halfway = report.filter((r) => r.done * 2 < r.total).map((r) => r.id);
    expect(halfway, 'lives that cannot reach half their own work').toEqual([]);
  });
});
