import { describe, expect, it } from 'vitest';
import { BEATS } from '../data/beats';
import { CHARACTER_LIST, CHAPTERS_BY_CHARACTER } from '../data/content';
import type { StoryCondition } from '../types/story';

/** A life with long silent stretches reads as an empty spreadsheet, not a life. */

function window(conditions: StoryCondition[] = []): { from?: number; to?: number } {
  let from: number | undefined;
  let to: number | undefined;
  const walk = (c: StoryCondition) => {
    if ('all' in c) return c.all.forEach(walk);
    if ('any' in c) return c.any.forEach(walk);
    if ('not' in c) return;
    if (c.type === 'yearAtLeast') from = from === undefined ? c.year : Math.min(from, c.year);
    if (c.type === 'yearAtMost') to = to === undefined ? c.year : Math.max(to, c.year);
  };
  conditions.forEach(walk);
  return { from, to };
}

describe('every life has something to say most years', () => {
  it.each(CHARACTER_LIST.map((c) => [c.id, c.name] as const))(
    '%s has beats available across the whole playable life',
    (characterId) => {
      const chapters = CHAPTERS_BY_CHARACTER[characterId] ?? [];
      const first = chapters[0].yearStart;
      const last = chapters[chapters.length - 1].yearEnd;
      const mine = BEATS.filter((b) => b.characterId === characterId);
      expect(mine.length, `${characterId} beat count`).toBeGreaterThanOrEqual(60);

      const bare: number[] = [];
      for (let year = first; year <= last; year++) {
        const available = mine.filter((beat) => {
          const { from, to } = window(beat.conditions);
          return (from === undefined || year >= from) && (to === undefined || year <= to);
        });
        if (available.length === 0) bare.push(year);
      }
      // Some years may legitimately fall in a gap between chapters; a long run cannot.
      let longest = 0;
      let run = 0;
      let previous = -99;
      for (const year of bare) {
        run = year === previous + 1 ? run + 1 : 1;
        previous = year;
        longest = Math.max(longest, run);
      }
      expect(longest, `${characterId} longest silent stretch: ${bare.join(', ')}`).toBeLessThanOrEqual(12);
    },
  );
});
