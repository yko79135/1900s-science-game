import type { Character, CharacterId, ContextCard, LifeChapter, ResearchProject } from '../../../types';
import { curieContent } from './curie';
import { einsteinContent } from './einstein';
import { noetherContent } from './noether';
import { ramanujanContent } from './ramanujan';
import { oppenheimerContent } from './oppenheimer';
import { hilbertContent } from './hilbert';
import { johnsonContent } from './johnson';
import { godelContent } from './godel';
import { vonNeumannContent } from './vonneumann';
import { franklinContent } from './franklin';
import { turingContent } from './turing';
import { bohrContent } from './bohr';
import type { CharacterContent } from './types';

const ALL_CONTENT: CharacterContent[] = [
  curieContent,
  einsteinContent,
  noetherContent,
  ramanujanContent,
  oppenheimerContent,
  hilbertContent,
  johnsonContent,
  godelContent,
  vonNeumannContent,
  franklinContent,
  turingContent,
  bohrContent,
];

export const CHARACTERS: Record<CharacterId, Character> = Object.fromEntries(
  ALL_CONTENT.map((c) => [c.character.id, c.character]),
) as Record<CharacterId, Character>;

export const CHARACTER_LIST: Character[] = ALL_CONTENT.map((c) => c.character);

export const LIFE_CHAPTERS: LifeChapter[] = ALL_CONTENT.flatMap((c) => c.chapters);

function normalizeProjects(content: CharacterContent): ResearchProject[] {
  return content.projects.map((project) => ({ ...project, requiredInsights: project.requiredInsights ?? [] }));
}

export const RESEARCH_PROJECTS: ResearchProject[] = ALL_CONTENT.flatMap(normalizeProjects);

export const CONTEXT_CARDS: ContextCard[] = ALL_CONTENT.flatMap((c) => c.contextCards);

export const PROJECTS_BY_CHARACTER: Record<CharacterId, ResearchProject[]> = Object.fromEntries(
  ALL_CONTENT.map((c) => [c.character.id, normalizeProjects(c)]),
) as Record<CharacterId, ResearchProject[]>;

export const CHAPTERS_BY_CHARACTER: Record<CharacterId, LifeChapter[]> = Object.fromEntries(
  ALL_CONTENT.map((c) => [c.character.id, c.chapters]),
) as Record<CharacterId, LifeChapter[]>;

export const CONTEXT_CARDS_BY_CHARACTER: Record<CharacterId, ContextCard[]> = Object.fromEntries(
  ALL_CONTENT.map((c) => [c.character.id, c.contextCards]),
) as Record<CharacterId, ContextCard[]>;

export function getProjectById(id: string): ResearchProject | undefined {
  return RESEARCH_PROJECTS.find((p) => p.id === id);
}

export function getChapter(characterId: CharacterId, chapterId: string): LifeChapter | undefined {
  return CHAPTERS_BY_CHARACTER[characterId]?.find((ch) => ch.id === chapterId);
}
