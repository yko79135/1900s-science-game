import { describe, expect, it } from 'vitest';
import { createGame } from '../engine/reducer';
import type { GameAction } from '../engine/reducer';
import { getActiveStoryView, hasActiveStory, initializeStoryGame, storyAwareGameReducer } from '../engine/story';
import { CHARACTERS, PROJECTS_BY_CHARACTER } from '../data/content';
import type { CharacterId, GameState } from '../types';
import { LIFE_CHAPTER_ORDER } from '../types';

/**
 * Drives a whole single-player campaign through the story layer for every
 * character, choosing story options and board actions automatically. Guards
 * against the two failure modes that make a narrative campaign unplayable:
 * the game stalling with no legal action, and the chapter clock never
 * advancing after a closing scene hands control back to the board.
 *
 * Set VITE_PLAY_DUMP=/path/file.log to write the full narrative transcript
 * of one run (VITE_PLAY_CHAR selects the character, VITE_PLAY_PICK the
 * choice index taken at every branch). Useful for reading a life end to end.
 */

const ALL_CHARACTERS = Object.keys(CHARACTERS) as CharacterId[];
const DUMP_PATH = import.meta.env.VITE_PLAY_DUMP as string | undefined;
const DUMP_CHAR = (import.meta.env.VITE_PLAY_CHAR ?? 'einstein') as CharacterId;
const PICK = Number(import.meta.env.VITE_PLAY_PICK ?? 0);

async function writeTranscript(path: string, text: string): Promise<void> {
  const moduleName = 'node:fs';
  const fs = await import(/* @vite-ignore */ moduleName);
  fs.writeFileSync(path, text);
}

type Transcript = { lines: string[]; scenes: number; choices: number; dialogue: number };

function readStory(state: GameState, t: Transcript): GameState {
  let s = state;
  let guard = 0;
  let lastScene = '';
  while (hasActiveStory(s) && guard++ < 2000) {
    const v = getActiveStoryView(s);
    if (!v) break;
    if (v.scene.id !== lastScene) {
      lastScene = v.scene.id;
      t.scenes += 1;
      t.lines.push(
        `\n### ${v.variant.title} | ${v.variant.locationLabel ?? '—'} · ${v.variant.yearLabel ?? v.player.currentYear} | ${v.scene.kind} · ${v.scene.classification} | ${v.scene.id}/${v.variant.id}`,
      );
    }
    if (v.page.narration) t.lines.push(v.page.narration);
    if (v.page.dialogue) {
      t.dialogue += 1;
      t.lines.push(`  ${v.page.speaker ?? '?'}: “${v.page.dialogue}”`);
    }
    if (v.page.choices?.length && !v.chosenChoiceId) {
      t.choices += 1;
      v.page.choices.forEach((c, i) => t.lines.push(`  [${i + 1}] ${c.label}`));
      const idx = Math.min(PICK, v.page.choices.length - 1);
      t.lines.push(`  → ${idx + 1}`);
      // Choosing already turns the page.
      s = storyAwareGameReducer(s, { type: 'STORY_CHOOSE', choiceId: v.page.choices[idx].id });
      continue;
    }
    s = storyAwareGameReducer(s, { type: 'STORY_NEXT' });
  }
  expect(guard, 'story loop should terminate').toBeLessThan(2000);
  return s;
}

function changed(a: GameState, b: GameState): boolean {
  return a !== b && JSON.stringify(a.players) !== JSON.stringify(b.players) || a.phase !== b.phase || a.narrative !== b.narrative;
}

type Route = 'canon' | 'stay';

/** Where the documented life had this person in a given year. */
function canonLocation(characterId: CharacterId, year: number): string {
  const character = CHARACTERS[characterId];
  let locationId = character.startingLocationId;
  for (const stop of [...character.canonicalRoute].sort((a, b) => a.year - b.year)) {
    if (stop.year > year) break;
    locationId = stop.locationId;
  }
  return locationId;
}

function playCampaign(characterId: CharacterId, seed: number, route: Route, t: Transcript): GameState {
  let state = initializeStoryGame(createGame([characterId], seed, 'full'));
  state = readStory(state, t);

  // Rotate through every kind of research so that projects needing two token
  // types can actually be completed, the way a real player would work.
  const tokenKinds = ['study', 'research', 'calculate', 'experimentEvidence', 'experimentEngineering'] as const;
  const boardActionsFor = (turn: number): GameAction[] => [
    ...tokenKinds.map((_, offset) => ({ type: 'GENERATE_TOKEN' as const, kind: tokenKinds[(turn + offset) % tokenKinds.length] })),
    { type: 'COLLABORATE' },
    { type: 'TEACH_OR_EARN' },
    { type: 'REST_AND_FAMILY' },
  ];

  let lastChapter = -1;
  for (let turn = 0; turn < 900; turn++) {
    if (state.phase === 'endgame') break;
    const p = state.players[state.activePlayerIndex];
    expect(p).toBeDefined();
    if (p.chapterIndex !== lastChapter) {
      lastChapter = p.chapterIndex;
      t.lines.push(`\n[BOARD] ${LIFE_CHAPTER_ORDER[p.chapterIndex]} · ${p.currentYear} · ${p.currentLocationId} · projects=${p.completedProjectIds.length}`);
    }

    let next = state;
    if (route === 'canon') {
      const target = canonLocation(characterId, p.currentYear);
      if (target !== p.currentLocationId) {
        const moved = storyAwareGameReducer(state, { type: 'TRAVEL', destinationId: target });
        if (moved.players[state.activePlayerIndex].currentLocationId === target) {
          t.lines.push(`\n>>> travels to ${target}`);
          next = moved;
        } else {
          // Save up for the journey the documented life took.
          for (const earn of [{ type: 'TEACH_OR_EARN' }, { type: 'SEEK_FUNDING' }] as GameAction[]) {
            const earned = storyAwareGameReducer(state, earn);
            const fundsAfter = earned.players[state.activePlayerIndex].resources.funds;
            if (changed(state, earned) && fundsAfter > p.resources.funds) {
              next = earned;
              break;
            }
          }
        }
      }
    }
    for (const project of PROJECTS_BY_CHARACTER[characterId] ?? []) {
      if (next !== state) break;
      if (p.completedProjectIds.includes(project.id)) continue;
      const attempt = storyAwareGameReducer(state, { type: 'ATTEMPT_PROJECT', projectId: project.id });
      if (attempt.players[state.activePlayerIndex].completedProjectIds.includes(project.id)) {
        t.lines.push(`\n*** completed ${project.id}`);
        next = attempt;
        break;
      }
    }
    if (next === state) {
      for (const action of boardActionsFor(turn)) {
        const candidate = storyAwareGameReducer(state, action);
        if (changed(state, candidate)) {
          next = candidate;
          break;
        }
      }
    }
    if (next === state) {
      next = storyAwareGameReducer(state, { type: 'ACK_CONTEXT_CARDS' });
      if (next === state || !changed(state, next)) next = storyAwareGameReducer(state, { type: 'END_CHAPTER' });
      if (changed(state, next)) t.lines.push('\n@@@ end of chapter');
    }
    expect(changed(state, next), `no legal move for ${characterId} at turn ${turn} (${LIFE_CHAPTER_ORDER[p.chapterIndex]} ${p.currentYear})`).toBe(true);
    state = readStory(next, t);
  }
  return state;
}

const RUNS = ALL_CHARACTERS.flatMap((characterId) => (['canon', 'stay'] as Route[]).map((route) => [characterId, route] as const));
const DUMP_ROUTE = (import.meta.env.VITE_PLAY_ROUTE ?? 'canon') as Route;

describe('narrative campaign playthrough', () => {
  it.each(RUNS)('%s can play a whole life through the story layer (%s route)', async (characterId, route) => {
    const t: Transcript = { lines: [], scenes: 0, choices: 0, dialogue: 0 };
    const state = playCampaign(characterId, 11, route, t);
    const player = state.players[0];
    if (DUMP_PATH && characterId === DUMP_CHAR && route === DUMP_ROUTE) {
      t.lines.push(`\n=== ${characterId}: ${t.scenes} scenes, ${t.dialogue} lines of dialogue, ${t.choices} choices ===`);
      await writeTranscript(DUMP_PATH, t.lines.join('\n'));
    }

    expect(state.phase).toBe('endgame');
    expect(player.finished).toBe(true);
    expect(player.chapterIndex).toBe(LIFE_CHAPTER_ORDER.length - 1);
    // Every chapter must open and close with a scene the player actually sees.
    expect(t.scenes).toBeGreaterThanOrEqual(LIFE_CHAPTER_ORDER.length * 2);
    expect(t.dialogue, `${characterId} should have spoken lines`).toBeGreaterThan(0);
    expect(t.choices, `${characterId} should offer at least one choice`).toBeGreaterThan(0);

  });
});
