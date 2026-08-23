import type { CharacterId, LifeChapterId } from '../../types';
import type { StoryScene } from '../../types/story';
import { CHAPTERS_BY_CHARACTER, CHARACTERS, LOCATIONS } from '../content';
import { EINSTEIN_REPLACED_CONTEXT_CARDS, EINSTEIN_STORY_SCENES } from './einstein';

export { EINSTEIN_REPLACED_CONTEXT_CARDS, EINSTEIN_STORY_SCENES } from './einstein';

export const STORY_SCENES: StoryScene[] = [...EINSTEIN_STORY_SCENES];

const STORY_BY_ID = new Map(STORY_SCENES.map((scene) => [scene.id, scene]));

export function storySceneById(id: string): StoryScene | undefined {
  return STORY_BY_ID.get(id) ?? fallbackSceneById(id);
}

export function authoredScenesForCharacter(characterId: CharacterId): StoryScene[] {
  return STORY_SCENES.filter((scene) => scene.characterId === characterId);
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
