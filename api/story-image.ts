import { generateImage } from 'ai';
import { CHARACTERS, LOCATIONS, PROJECTS_BY_CHARACTER } from '../src/data/content';
import { storySceneById } from '../src/data/story';
import { buildStoryImagePrompt, STORY_IMAGE_MODEL } from '../src/engine/storyImagePrompt';
import type { CharacterId } from '../src/types';

interface ApiRequest {
  method?: string;
  body?: unknown;
}

interface ApiResponse {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(body: unknown): void;
}

export interface ValidatedStoryImageRequest {
  sceneId: string;
  variantId: string;
  year: number;
  locationId: string;
  completedProjectIds: string[];
}

export interface GeneratedImageData {
  base64: string;
  mediaType?: string;
}

export type StoryImageGenerator = (prompt: string) => Promise<GeneratedImageData>;

export class StoryImageApiError extends Error {
  constructor(
    readonly statusCode: number,
    message: string,
  ) {
    super(message);
    this.name = 'StoryImageApiError';
  }
}

const ID_PATTERN = /^[a-z0-9:-]+$/;
const ALLOWED_KEYS = new Set(['sceneId', 'variantId', 'year', 'locationId', 'completedProjectIds']);
const IMAGE_MEDIA_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp']);

function badRequest(message: string): never {
  throw new StoryImageApiError(400, message);
}

function parseBody(input: unknown): Record<string, unknown> {
  let value = input;
  if (typeof value === 'string') {
    if (value.length > 20_000) badRequest('Request body is too large.');
    try {
      value = JSON.parse(value) as unknown;
    } catch {
      badRequest('Request body must be valid JSON.');
    }
  }
  if (!value || typeof value !== 'object' || Array.isArray(value)) badRequest('Request body must be an object.');
  return value as Record<string, unknown>;
}

function boundedId(value: unknown, field: string, maxLength: number): string {
  if (typeof value !== 'string' || value.length < 1 || value.length > maxLength || !ID_PATTERN.test(value)) {
    badRequest(`${field} is malformed.`);
  }
  return value as string;
}

export function validateStoryImageRequest(input: unknown): ValidatedStoryImageRequest {
  const body = parseBody(input);
  if (Object.keys(body).some((key) => !ALLOWED_KEYS.has(key))) badRequest('Request contains unsupported fields.');

  const sceneId = boundedId(body.sceneId, 'sceneId', 120);
  const variantId = boundedId(body.variantId, 'variantId', 80);
  const locationId = boundedId(body.locationId, 'locationId', 80);
  if (!Number.isInteger(body.year) || (body.year as number) < 1800 || (body.year as number) > 2100) {
    badRequest('year is outside the supported historical range.');
  }
  if (!Array.isArray(body.completedProjectIds) || body.completedProjectIds.length > 24) {
    badRequest('completedProjectIds is malformed.');
  }
  const completedProjectIds = body.completedProjectIds.map((id) => boundedId(id, 'completedProjectIds', 120));

  return { sceneId, variantId, year: body.year as number, locationId, completedProjectIds };
}

function sceneProjectNames(characterId: CharacterId | undefined, projectIds: string[]): string[] {
  if (!characterId) {
    if (projectIds.length) badRequest('Completed projects do not belong to this story scene.');
    return [];
  }
  const projects = PROJECTS_BY_CHARACTER[characterId] ?? [];
  const projectsById = new Map(projects.map((project) => [project.id, project]));
  return projectIds.map((projectId) => {
    const project = projectsById.get(projectId);
    if (!project) badRequest('completedProjectIds contains an unknown project for this character.');
    return project.name;
  });
}

async function generateThroughGateway(prompt: string): Promise<GeneratedImageData> {
  if (!process.env.AI_GATEWAY_API_KEY && !process.env.VERCEL_OIDC_TOKEN) {
    throw new StoryImageApiError(503, 'Image generation is not configured.');
  }

  const { image } = await generateImage({
    model: STORY_IMAGE_MODEL,
    prompt,
    size: '1536x1024',
    providerOptions: {
      gateway: {
        tags: ['feature:story-image'],
      },
    },
  });
  return { base64: image.base64, mediaType: image.mediaType };
}

export async function processStoryImageRequest(
  input: unknown,
  generator: StoryImageGenerator = generateThroughGateway,
): Promise<{ imageUrl: string }> {
  const request = validateStoryImageRequest(input);
  const scene = storySceneById(request.sceneId);
  if (!scene) badRequest('Unknown story scene.');
  const variant = scene.variants.find((candidate) => candidate.id === request.variantId);
  if (!variant) badRequest('Unknown story variant.');
  const location = LOCATIONS[request.locationId];
  if (!location) badRequest('Unknown story location.');

  const characterIds = variant.image.characters ?? (scene.characterId ? [scene.characterId] : []);
  const visibleCharacters = characterIds.map((characterId) => CHARACTERS[characterId]).filter(Boolean);
  if (visibleCharacters.length !== characterIds.length) {
    throw new StoryImageApiError(500, 'Authored scene contains an unknown character.');
  }

  const prompt = buildStoryImagePrompt(variant.image, visibleCharacters, {
    sceneYear: request.year,
    locationLabel: `${location.name}, ${location.country}`,
    completedProjectNames: sceneProjectNames(scene.characterId, request.completedProjectIds),
  });
  const generated = await generator(prompt);
  const mediaType = generated.mediaType ?? 'image/png';
  if (!IMAGE_MEDIA_TYPES.has(mediaType) || !/^[a-z0-9+/=]+$/i.test(generated.base64)) {
    throw new StoryImageApiError(502, 'Image provider returned an invalid result.');
  }
  return { imageUrl: `data:${mediaType};base64,${generated.base64}` };
}

export default async function handler(request: ApiRequest, response: ApiResponse): Promise<void> {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  try {
    const result = await processStoryImageRequest(request.body);
    response.status(200).json(result);
  } catch (error) {
    const statusCode = error instanceof StoryImageApiError ? error.statusCode : 502;
    if (!(error instanceof StoryImageApiError) || statusCode >= 500) {
      console.error('Story image generation failed.', error instanceof Error ? error.name : 'UnknownError');
    }
    response.status(statusCode).json({
      error: statusCode === 400 ? 'Invalid story image request.' : 'Story image generation is unavailable.',
    });
  }
}

export const config = {
  maxDuration: 60,
};
