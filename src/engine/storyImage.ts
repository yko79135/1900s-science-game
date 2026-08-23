import type { Character, PlayerState } from '../types';
import type { StoryImageSpec, StoryScene, StoryVariant } from '../types/story';

export interface GeneratedStoryImage {
  url: string;
  alt: string;
  cacheKey: string;
}

const memoryCache = new Map<string, GeneratedStoryImage>();

export function storyImageCacheKey(scene: StoryScene, variant: StoryVariant, player: PlayerState): string {
  return [scene.id, variant.id, player.currentYear, player.currentLocationId, ...(variant.image.characters ?? [])].join('|');
}

export function buildStoryImagePrompt(spec: StoryImageSpec, character: Character): string {
  const details = spec.details?.length ? ` Details: ${spec.details.join(', ')}.` : '';
  const year = spec.year ? ` Year: ${spec.year}.` : '';
  return [
    'Cinematic historical illustrated storybook image, painterly graphic-novel realism, restrained and believable rather than heroic or fantastical.',
    `Primary historical figure: ${character.name}.`,
    `Setting: ${spec.setting}.${year}`,
    `Mood: ${spec.mood}.${details}`,
    'Use period-appropriate clothing, architecture, furniture, scientific equipment, and hairstyles. No modern objects unless historically appropriate.',
    'PG-13 maximum: no gore, no graphic wounds, no corpses, no nudity, no sexual content, no torture imagery. Historical danger should be communicated through atmosphere, documents, distance, or environment.',
    'Do not place captions, labels, lettering, watermarks, or readable text inside the image.',
  ].join(' ');
}

/**
 * Optional live image generation boundary.
 *
 * Set VITE_STORY_IMAGE_ENDPOINT to a trusted server-side endpoint that accepts
 * { cacheKey, prompt } and returns { url }. Secrets must live on that server,
 * never in the Vite client. When no endpoint is configured (or generation
 * fails), StoryScreen renders a deterministic historical-art fallback.
 */
export async function requestStoryImage(
  scene: StoryScene,
  variant: StoryVariant,
  player: PlayerState,
  character: Character,
): Promise<GeneratedStoryImage | null> {
  if (variant.image.imageUrl) {
    return { url: variant.image.imageUrl, alt: variant.image.alt, cacheKey: storyImageCacheKey(scene, variant, player) };
  }

  const cacheKey = storyImageCacheKey(scene, variant, player);
  const cached = memoryCache.get(cacheKey);
  if (cached) return cached;

  const endpoint = import.meta.env.VITE_STORY_IMAGE_ENDPOINT as string | undefined;
  if (!endpoint) return null;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cacheKey, prompt: buildStoryImagePrompt(variant.image, character) }),
    });
    if (!response.ok) return null;
    const payload = (await response.json()) as { url?: string };
    if (!payload.url) return null;
    const generated = { url: payload.url, alt: variant.image.alt, cacheKey };
    memoryCache.set(cacheKey, generated);
    return generated;
  } catch {
    return null;
  }
}
