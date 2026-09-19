import { describe, expect, it } from 'vitest';
import { STORY_SCENES } from '../data/story';
import { CHARACTERS } from '../data/content';
import type { CharacterId } from '../types';
import type { StoryPage } from '../types/story';

/**
 * The contract in `src/data/story/STYLE.md`, made measurable.
 *
 * A life written as a novel and a life written as a conversation read very
 * differently, and the difference is countable: how many pages are somebody
 * speaking, how long a page runs, and whether an idea is ever named without
 * being explained. Taste decides whether a line is good; these numbers decide
 * whether it is the right shape.
 *
 * Lives still in the old style are listed in OLD_STYLE. Converting one means
 * deleting its name from that list — and the test then holds it to the bar.
 */

/** Lives not yet rewritten. This list only ever gets shorter. */
const OLD_STYLE: CharacterId[] = [
  'curie',
  'bohr',
  'noether',
  'hilbert',
  'ramanujan',
  'godel',
  'turing',
  'vonneumann',
  'oppenheimer',
  'franklin',
  'johnson',
];

/** Three pages in five should be somebody speaking. */
const MIN_SPOKEN_SHARE = 0.6;
/**
 * How much of the speech is contracted.
 *
 * This is the single number that separates dialogue from literature. People
 * say "don't", "it's", "I've"; prose says "do not", "it is", "I have". A first
 * pass at this file reached 78% spoken and still read as riddles, and the
 * reason was measurable: 12 of its 904 spoken lines contained a contraction.
 * Everyone was speaking expanded, formal, faintly archaic English, and every
 * line landed like an epigram.
 */
const MIN_CONTRACTION_SHARE = 0.35;
/** Speech is short. A line that runs long is a paragraph wearing a name tag. */
const MAX_MEAN_LINE_WORDS = 13;
/** A page is one beat, not a paragraph. */
const MAX_PAGE_WORDS = 45;
/** A few long pages are tolerable; a habit of them is not. */
const MAX_LONG_PAGE_SHARE = 0.06;

/**
 * Words a reader without science will not know. Each may appear only in a
 * scene that also puts it in plain words — which we approximate by requiring
 * the scene to be mostly spoken, since explaining is something a person does.
 */
const JARGON = [
  'quantum', 'quanta', 'relativity', 'entropy', 'invariant', 'eigenvalue',
  'topology', 'axiom', 'incompleteness', 'fission', 'cryptanalysis',
  'tensor', 'isotope', 'diffraction', 'photoelectric', 'thermodynamic',
  'isomorphism', 'cardinality', 'undecidable', 'stochastic',
];

/**
 * Constructions nobody uses out loud. Each has a spoken form that costs
 * nothing — "shall" is "will" or "'ll", "that we may" is "so we can" — and
 * leaving them in is what makes a period character sound like a translation
 * of a period character.
 */
const STILTED = [
  /\bI shall\b/i,
  /\bwe shall\b/i,
  /\bshall not\b/i,
  /\bthat we may\b/i,
  /\bthat I may\b/i,
  /\bneed not\b/i,
  /\bmay not\b/i,
  /\bhas it not\b/i,
  /\bis it not\b/i,
  /\bnothing whatever\b/i,
  /\bvery well then\b/i,
];

const CONTRACTION = /\w['’](?:s|t|re|ve|ll|d|m|n)\b/i;

function wordsOf(page: StoryPage): number {
  return `${page.narration ?? ''} ${page.dialogue ?? ''}`.trim().split(/\s+/).filter(Boolean).length;
}

function pagesOf(characterId: CharacterId): { page: StoryPage; sceneId: string }[] {
  return STORY_SCENES.filter((scene) => scene.characterId === characterId).flatMap((scene) =>
    scene.variants.flatMap((variant) => variant.pages.map((page) => ({ page, sceneId: scene.id }))),
  );
}

const REWRITTEN = (Object.keys(CHARACTERS) as CharacterId[]).filter((id) => !OLD_STYLE.includes(id));

describe('a rewritten life reads as a conversation', () => {
  for (const id of REWRITTEN) {
    describe(id, () => {
      const pages = pagesOf(id);

      it('is mostly people speaking', () => {
        const spoken = pages.filter((entry) => entry.page.dialogue).length;
        const share = spoken / Math.max(1, pages.length);
        expect(
          share,
          `${id}: ${spoken} of ${pages.length} pages are spoken (${Math.round(share * 100)}%)`,
        ).toBeGreaterThanOrEqual(MIN_SPOKEN_SHARE);
      });

      it('sounds like speech, not like prose', () => {
        const spoken = pages.map((entry) => entry.page.dialogue).filter(Boolean) as string[];
        const contracted = spoken.filter((line) => CONTRACTION.test(line)).length;
        const share = contracted / Math.max(1, spoken.length);
        expect(
          share,
          `${id}: only ${contracted} of ${spoken.length} spoken lines use a contraction (${Math.round(share * 100)}%)`,
        ).toBeGreaterThanOrEqual(MIN_CONTRACTION_SHARE);
      });

      it('keeps spoken lines short', () => {
        const spoken = pages.map((entry) => entry.page.dialogue).filter(Boolean) as string[];
        const mean = spoken.reduce((sum, line) => sum + line.split(/\s+/).filter(Boolean).length, 0) / Math.max(1, spoken.length);
        expect(Number(mean.toFixed(1)), `${id}: spoken lines average ${mean.toFixed(1)} words`).toBeLessThanOrEqual(MAX_MEAN_LINE_WORDS);
      });

      it('avoids constructions nobody says out loud', () => {
        const offenders: string[] = [];
        for (const entry of pages) {
          const line = entry.page.dialogue;
          if (!line) continue;
          const hit = STILTED.find((pattern) => pattern.test(line));
          if (hit) offenders.push(`${entry.sceneId}: "${line.slice(0, 60)}"`);
        }
        expect(offenders.slice(0, 8)).toEqual([]);
      });

      it('names whoever is speaking', () => {
        const unnamed = pages.filter((entry) => entry.page.dialogue && !entry.page.speaker);
        expect(unnamed.map((entry) => entry.sceneId)).toEqual([]);
      });

      it('keeps a page to one beat', () => {
        const long = pages.filter((entry) => wordsOf(entry.page) > MAX_PAGE_WORDS);
        const share = long.length / Math.max(1, pages.length);
        expect(
          share,
          `${id}: ${long.length} pages over ${MAX_PAGE_WORDS} words, e.g. ${long[0]?.sceneId ?? '—'}`,
        ).toBeLessThanOrEqual(MAX_LONG_PAGE_SHARE);
      });

      it('does not stack a paragraph and a line on one page', () => {
        const stacked = pages.filter(
          (entry) => entry.page.dialogue && (entry.page.narration ?? '').split(/\s+/).filter(Boolean).length > 20,
        );
        expect(stacked.map((entry) => entry.sceneId)).toEqual([]);
      });

      it('explains an idea in the scene that names it', () => {
        const offenders: string[] = [];
        for (const scene of STORY_SCENES.filter((candidate) => candidate.characterId === id)) {
          const scenePages = scene.variants.flatMap((variant) => variant.pages);
          const text = scenePages.map((page) => `${page.narration ?? ''} ${page.dialogue ?? ''}`).join(' ').toLowerCase();
          const used = JARGON.filter((word) => text.includes(word));
          if (!used.length) continue;
          const spoken = scenePages.filter((page) => page.dialogue).length;
          if (spoken / Math.max(1, scenePages.length) < 0.5) {
            offenders.push(`${scene.id} uses ${used.join(', ')} with almost nobody speaking`);
          }
        }
        expect(offenders).toEqual([]);
      });
    });
  }
});

describe('the conversion', () => {
  it('reports what is left', () => {
    // Not an assertion so much as a running total, printed when it fails
    // elsewhere and readable here.
    expect(OLD_STYLE.length).toBeLessThanOrEqual(11);
  });
});
