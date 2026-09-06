import type { CharacterId, LifeChapterId } from '../../types';
import type { StoryScene } from '../../types/story';
import { CHAPTERS_BY_CHARACTER, CHARACTERS, LOCATIONS } from '../content';
import { BOHR_REPLACED_CONTEXT_CARDS, BOHR_STORY_SCENES } from './bohr';
import { CURIE_REPLACED_CONTEXT_CARDS, CURIE_STORY_SCENES } from './curie';
import { EINSTEIN_REPLACED_CONTEXT_CARDS, EINSTEIN_STORY_SCENES } from './einstein';
import { FRANKLIN_REPLACED_CONTEXT_CARDS, FRANKLIN_STORY_SCENES } from './franklin';
import { GODEL_REPLACED_CONTEXT_CARDS, GODEL_STORY_SCENES } from './godel';
import { HILBERT_REPLACED_CONTEXT_CARDS, HILBERT_STORY_SCENES } from './hilbert';
import { JOHNSON_REPLACED_CONTEXT_CARDS, JOHNSON_STORY_SCENES } from './johnson';
import { NOETHER_REPLACED_CONTEXT_CARDS, NOETHER_STORY_SCENES } from './noether';
import { OPPENHEIMER_REPLACED_CONTEXT_CARDS, OPPENHEIMER_STORY_SCENES } from './oppenheimer';
import { RAMANUJAN_REPLACED_CONTEXT_CARDS, RAMANUJAN_STORY_SCENES } from './ramanujan';
import { TURING_REPLACED_CONTEXT_CARDS, TURING_STORY_SCENES } from './turing';
import { VONNEUMANN_REPLACED_CONTEXT_CARDS, VONNEUMANN_STORY_SCENES } from './vonneumann';

/** Every authored scene for every playable life, in roster order. */
export const STORY_SCENES: StoryScene[] = [
  ...BOHR_STORY_SCENES,
  ...CURIE_STORY_SCENES,
  ...EINSTEIN_STORY_SCENES,
  ...FRANKLIN_STORY_SCENES,
  ...GODEL_STORY_SCENES,
  ...HILBERT_STORY_SCENES,
  ...JOHNSON_STORY_SCENES,
  ...NOETHER_STORY_SCENES,
  ...OPPENHEIMER_STORY_SCENES,
  ...RAMANUJAN_STORY_SCENES,
  ...TURING_STORY_SCENES,
  ...VONNEUMANN_STORY_SCENES,
];

/** Board context cards that an authored scene now tells in full; the board never shows these. */
export const REPLACED_CONTEXT_CARDS_BY_CHARACTER: Record<CharacterId, string[]> = {
  bohr: [...BOHR_REPLACED_CONTEXT_CARDS],
  curie: [...CURIE_REPLACED_CONTEXT_CARDS],
  einstein: [...EINSTEIN_REPLACED_CONTEXT_CARDS],
  franklin: [...FRANKLIN_REPLACED_CONTEXT_CARDS],
  godel: [...GODEL_REPLACED_CONTEXT_CARDS],
  hilbert: [...HILBERT_REPLACED_CONTEXT_CARDS],
  johnson: [...JOHNSON_REPLACED_CONTEXT_CARDS],
  noether: [...NOETHER_REPLACED_CONTEXT_CARDS],
  oppenheimer: [...OPPENHEIMER_REPLACED_CONTEXT_CARDS],
  ramanujan: [...RAMANUJAN_REPLACED_CONTEXT_CARDS],
  turing: [...TURING_REPLACED_CONTEXT_CARDS],
  vonneumann: [...VONNEUMANN_REPLACED_CONTEXT_CARDS],
};

const STORY_BY_ID = new Map(STORY_SCENES.map((scene) => [scene.id, scene]));

export function storySceneById(id: string): StoryScene | undefined {
  return STORY_BY_ID.get(id) ?? fallbackSceneById(id);
}

export function authoredScenesForCharacter(characterId: CharacterId): StoryScene[] {
  return STORY_SCENES.filter((scene) => scene.characterId === characterId);
}

/** The one-time scene shown before a full campaign's first chapter, if the life has one. */
export function prologueSceneId(characterId: CharacterId): string | undefined {
  return STORY_SCENES.find((scene) => scene.characterId === characterId && scene.kind === 'prologue')?.id;
}

/** The scene shown after the final chapter closes, if the life has one. */
export function epilogueSceneId(characterId: CharacterId): string | undefined {
  return STORY_SCENES.find((scene) => scene.characterId === characterId && scene.kind === 'epilogue')?.id;
}

export function fallbackOpeningId(characterId: CharacterId, chapterId: LifeChapterId): string {
  return `fallback:${characterId}:${chapterId}:opening`;
}

export function fallbackClosingId(characterId: CharacterId, chapterId: LifeChapterId): string {
  return `fallback:${characterId}:${chapterId}:closing`;
}

export function chapterOpeningSceneId(characterId: CharacterId, chapterId: LifeChapterId): string {
  const authored = STORY_SCENES.find(
    (scene) => scene.characterId === characterId && scene.chapterId === chapterId && scene.kind === 'chapterOpening',
  );
  return authored?.id ?? fallbackOpeningId(characterId, chapterId);
}

export function chapterClosingSceneId(characterId: CharacterId, chapterId: LifeChapterId): string {
  const authored = STORY_SCENES.find(
    (scene) => scene.characterId === characterId && scene.chapterId === chapterId && scene.kind === 'chapterClosing',
  );
  return authored?.id ?? fallbackClosingId(characterId, chapterId);
}

function fallbackSceneById(id: string): StoryScene | undefined {
  const match = /^fallback:([^:]+):([^:]+):(opening|closing)$/.exec(id);
  if (!match) return undefined;
  const [, characterRaw, chapterRaw, position] = match;
  const characterId = characterRaw as CharacterId;
  const chapterId = chapterRaw as LifeChapterId;
  const chapter = CHAPTERS_BY_CHARACTER[characterId]?.find((candidate) => candidate.id === chapterId);
  const character = CHARACTERS[characterId];
  if (!chapter || !character) return undefined;

  const location = LOCATIONS[chapter.startingLocationId];
  const opening = position === 'opening';
  const title = opening ? chapter.label : `${chapter.label}: Looking Back`;
  const narration = opening
    ? `${character.name} enters ${chapter.label.toLowerCase()}, a period spanning ${chapter.yearStart}–${chapter.yearEnd}. ${chapter.summary}`
    : `${character.name} leaves this chapter with the discoveries, relationships, locations, and consequences created by this playthrough. The next chapter will build on what actually happened rather than assume the historical route.`;

  return {
    id,
    characterId,
    chapterId,
    kind: opening ? 'chapterOpening' : 'chapterClosing',
    classification: 'Plausible',
    sourceIds: character.sourceIds,
    trigger: { event: opening ? 'chapterOpening' : 'chapterClosing', priority: 20 },
    once: true,
    variants: [
      {
        id: 'fallback',
        title,
        locationLabel: location?.name ?? 'Historical setting',
        yearLabel: opening ? String(chapter.yearStart) : String(chapter.yearEnd),
        image: {
          setting: `${location?.name ?? 'historical scientific setting'} during ${chapter.yearStart}–${chapter.yearEnd}`,
          year: opening ? chapter.yearStart : chapter.yearEnd,
          characters: [characterId],
          mood: opening ? 'historical transition and anticipation' : 'reflective historical transition',
          details: ['period-accurate clothing', 'scientific papers', 'no modern objects'],
          alt: `A restrained historical illustration representing ${character.name} during ${chapter.label}.`,
        },
        pages: [{ id: 'fallback-page', narration }],
        historicalNote:
          'This is a deterministic fallback chapter scene assembled from the existing character and chapter data. It will be replaced as this character receives a full authored story campaign.',
      },
    ],
  };
}
