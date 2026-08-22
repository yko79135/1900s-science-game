import type { Character, ContextCard, LifeChapter, ResearchProject } from '../../../types';

export interface CharacterContent {
  character: Character;
  chapters: LifeChapter[];
  projects: ResearchProject[];
  contextCards: ContextCard[];
}
