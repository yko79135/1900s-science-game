import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CHARACTERS } from '../data/content';
import { storySceneById } from '../data/story';
import { createGame } from '../engine/reducer';
import {
  clearStoryImageMemoryCache,
  requestStoryImage,
  storyImageCacheKey,
} from '../engine/storyImage';
import { buildStoryImagePrompt } from '../engine/storyImagePrompt';

function atomicBombContext() {
  const scene = storySceneById('einstein-atomic-bomb-news');
  if (!scene) throw new Error('Missing test scene.');
  const variant = scene.variants[0];
  const player = {
    ...createGame(['einstein'], 1945, 'full').players[0],
    currentYear: 1945,
    currentLocationId: 'princeton',
  };
  return { scene, variant, player };
}

beforeEach(() => {
  clearStoryImageMemoryCache();
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('story image browser cache', () => {
  it('creates a stable key for the exact story context', () => {
    const { scene, variant, player } = atomicBombContext();
    const first = storyImageCacheKey(scene, variant, {
      ...player,
      completedProjectIds: ['einstein-general-relativity', 'einstein-special-relativity'],
    });
    const reordered = storyImageCacheKey(scene, variant, {
      ...player,
      completedProjectIds: ['einstein-special-relativity', 'einstein-general-relativity'],
    });

    expect(first).toBe(reordered);
    expect(first).toContain(scene.id);
    expect(first).toContain(variant.image.setting);
    expect(first).toContain('einstein');
  });

  it('uses a cached image without another endpoint or provider request', async () => {
    const { scene, variant, player } = atomicBombContext();
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ imageUrl: 'data:image/png;base64,ZmFrZQ==' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    vi.stubGlobal('fetch', fetchMock);

    const first = await requestStoryImage(scene, variant, player);
    const cached = await requestStoryImage(scene, variant, player);

    expect(first?.url).toBe('data:image/png;base64,ZmFrZQ==');
    expect(cached).toEqual(first);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('falls back safely when the provider endpoint is unavailable', async () => {
    const { scene, variant, player } = atomicBombContext();
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));

    await expect(requestStoryImage(scene, variant, player)).resolves.toBeNull();
  });

  it('never puts a prompt or secret credential in the browser request', async () => {
    const { scene, variant, player } = atomicBombContext();
    const fetchMock = vi.fn().mockResolvedValue(new Response('{}', { status: 503 }));
    vi.stubGlobal('fetch', fetchMock);

    await requestStoryImage(scene, variant, player);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(String(init.body)) as Record<string, unknown>;
    expect(url).toBe('/api/story-image');
    expect(body).not.toHaveProperty('prompt');
    expect(body).not.toHaveProperty('AI_GATEWAY_API_KEY');
    expect(JSON.stringify(init)).not.toMatch(/AI_GATEWAY_API_KEY|VERCEL_OIDC_TOKEN/);
  });
});

describe('historical character continuity', () => {
  it('changes Einstein age across story decades', () => {
    const { variant } = atomicBombContext();
    const youngPrompt = buildStoryImagePrompt({ ...variant.image, year: 1905 }, CHARACTERS.einstein);
    const olderPrompt = buildStoryImagePrompt({ ...variant.image, year: 1950 }, CHARACTERS.einstein);

    expect(youngPrompt).toMatch(/age 26 in 1905/);
    expect(olderPrompt).toMatch(/age 71 in 1950/);
  });
});
