import type { PlayerState } from '../types';
import type { StoryScene, StoryVariant } from '../types/story';

export { buildStoryImagePrompt } from './storyImagePrompt';

export interface GeneratedStoryImage {
  url: string;
  alt: string;
  cacheKey: string;
}

const memoryCache = new Map<string, GeneratedStoryImage>();
const pendingRequests = new Map<string, Promise<GeneratedStoryImage | null>>();
const STORY_IMAGE_CACHE = 'story-images-v1';
const STORY_IMAGE_ENDPOINT = '/api/story-image';

export function storyImageCacheKey(scene: StoryScene, variant: StoryVariant, player: PlayerState): string {
  return JSON.stringify({
    version: 1,
    sceneId: scene.id,
    variantId: variant.id,
    year: variant.image.year ?? player.currentYear,
    locationId: player.currentLocationId,
    setting: variant.image.setting,
    visibleCharacters: [...(variant.image.characters ?? [])].sort(),
    completedProjectIds: [...player.completedProjectIds].sort(),
  });
}

export interface StoryImageRequestBody {
  sceneId: string;
  variantId: string;
  year: number;
  locationId: string;
  completedProjectIds: string[];
}

export interface StoryImageRequestOptions {
  forceRefresh?: boolean;
}

export function storyImageRequestBody(
  scene: StoryScene,
  variant: StoryVariant,
  player: PlayerState,
): StoryImageRequestBody {
  return {
    sceneId: scene.id,
    variantId: variant.id,
    year: player.currentYear,
    locationId: player.currentLocationId,
    completedProjectIds: [...player.completedProjectIds].sort(),
  };
}

function isDisplayableImageUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  return /^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=]+$/i.test(value) || /^https:\/\//i.test(value);
}

function persistentCacheUrl(cacheKey: string): string {
  const origin = typeof window !== 'undefined' && window.location.origin !== 'null'
    ? window.location.origin
    : 'https://story-image-cache.invalid';
  return `${origin}/__story-image-cache__/${encodeURIComponent(cacheKey)}`;
}

async function readPersistentImage(cacheKey: string): Promise<GeneratedStoryImage | null> {
  if (!('caches' in globalThis)) return null;
  try {
    const cache = await globalThis.caches.open(STORY_IMAGE_CACHE);
    const response = await cache.match(persistentCacheUrl(cacheKey));
    if (!response?.ok) return null;
    const cached = (await response.json()) as Partial<GeneratedStoryImage>;
    if (!isDisplayableImageUrl(cached.url) || typeof cached.alt !== 'string' || cached.cacheKey !== cacheKey) return null;
    return { url: cached.url, alt: cached.alt, cacheKey };
  } catch {
    return null;
  }
}

async function persistImage(image: GeneratedStoryImage): Promise<void> {
  if (!('caches' in globalThis)) return;
  try {
    const cache = await globalThis.caches.open(STORY_IMAGE_CACHE);
    await cache.put(
      persistentCacheUrl(image.cacheKey),
      new Response(JSON.stringify(image), { headers: { 'Content-Type': 'application/json' } }),
    );
  } catch {
    // Browser privacy settings and storage quotas may disable Cache Storage.
  }
}

export async function removeCachedStoryImage(cacheKey: string): Promise<void> {
  memoryCache.delete(cacheKey);
  if (!('caches' in globalThis)) return;
  try {
    const cache = await globalThis.caches.open(STORY_IMAGE_CACHE);
    await cache.delete(persistentCacheUrl(cacheKey));
  } catch {
    // A broken cached image can still fall back safely when storage is unavailable.
  }
}

export function clearStoryImageMemoryCache(): void {
  memoryCache.clear();
  pendingRequests.clear();
}

/**
 * Optional live image generation boundary.
 *
 * The browser sends only bounded story identifiers and timeline state to the
 * same-origin serverless endpoint. The endpoint resolves the authored image
 * specification and builds the final prompt; credentials never enter this
 * module or the browser bundle.
 */
export async function requestStoryImage(
  scene: StoryScene,
  variant: StoryVariant,
  player: PlayerState,
  options: StoryImageRequestOptions = {},
): Promise<GeneratedStoryImage | null> {
  const cacheKey = storyImageCacheKey(scene, variant, player);
  if (variant.image.imageUrl) {
    return { url: variant.image.imageUrl, alt: variant.image.alt, cacheKey };
  }

  if (!options.forceRefresh) {
    const cached = memoryCache.get(cacheKey) ?? await readPersistentImage(cacheKey);
    if (cached) {
      memoryCache.set(cacheKey, cached);
      return cached;
    }
    const pending = pendingRequests.get(cacheKey);
    if (pending) return pending;
  }

  const request = (async (): Promise<GeneratedStoryImage | null> => {
    try {
      const response = await fetch(STORY_IMAGE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(storyImageRequestBody(scene, variant, player)),
      });
      if (!response.ok) return null;
      const payload = (await response.json()) as { imageUrl?: unknown };
      if (!isDisplayableImageUrl(payload.imageUrl)) return null;
      const generated = { url: payload.imageUrl, alt: variant.image.alt, cacheKey };
      memoryCache.set(cacheKey, generated);
      await persistImage(generated);
      return generated;
    } catch {
      return null;
    }
  })();

  pendingRequests.set(cacheKey, request);
  try {
    return await request;
  } finally {
    if (pendingRequests.get(cacheKey) === request) pendingRequests.delete(cacheKey);
  }
}
