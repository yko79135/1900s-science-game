import type { Character } from '../types';
import type { StoryImageSpec } from '../types/story';

export const STORY_IMAGE_MODEL = 'openai/gpt-image-2';

export interface StoryImagePromptContext {
  sceneYear?: number;
  locationLabel?: string;
  completedProjectNames?: string[];
}

export function characterAgeInYear(character: Character, year: number): number {
  return Math.max(0, year - character.bornYear);
}

function characterDescription(character: Character, year?: number): string {
  const age = year === undefined ? '' : `, age ${characterAgeInYear(character, year)} in ${year}`;
  return `${character.name} (${character.field}${age})`;
}

export function buildStoryImagePrompt(
  spec: StoryImageSpec,
  visibleCharacters: Character | Character[],
  context: StoryImagePromptContext = {},
): string {
  const characters = Array.isArray(visibleCharacters) ? visibleCharacters : [visibleCharacters];
  const year = spec.year ?? context.sceneYear;
  const details = spec.details?.length ? `Scene details: ${spec.details.join(', ')}.` : '';
  const location = context.locationLabel ? `Timeline location context: ${context.locationLabel}.` : '';
  const projects = context.completedProjectNames?.length
    ? `Alternate-history continuity: subtly respect these completed scientific milestones where relevant: ${context.completedProjectNames.join(', ')}.`
    : '';

  return [
    'Art direction: cinematic historical illustrated storybook, painterly graphic-novel realism, restrained, believable, and visually consistent across the full campaign.',
    characters.length
      ? `Visible historical figures: ${characters.map((character) => characterDescription(character, year)).join('; ')}. Preserve each recurring figure's recognizable visual continuity while aging them naturally for the stated year.`
      : '',
    `Setting: ${spec.setting}.`,
    year === undefined ? '' : `Scene year: ${year}.`,
    location,
    `Mood: ${spec.mood}.`,
    details,
    projects,
    'Use period-appropriate, historically accurate clothing, architecture, laboratories, furniture, scientific equipment, hairstyles, and materials. Avoid modern objects, stock-photo styling, anime, fantasy aesthetics, and caricature.',
    'PG-13 or milder only: no gore, no graphic injury, no corpses as a visual focus, no sexual content, no nudity, no torture imagery, and no sensational atrocity imagery. Never depict graphic civilian suffering.',
    'For war, Nazi persecution, nuclear weapons, illness, and death, prefer documents, newspapers, laboratories, luggage, distant landscapes, scientists reacting, symbolic or atmospheric imagery, or a distant mushroom cloud when historically appropriate.',
    'No text embedded inside the image: no captions, labels, lettering, signatures, watermarks, logos, or readable words.',
  ]
    .filter(Boolean)
    .join(' ');
}
