import type { Character, ContextCard, LifeChapter, ResearchProject } from '../../../types';

export type ResearchProjectContent = Omit<ResearchProject, 'requiredInsights'> & {
  /** Unconverted projects are normalized to an empty list by the content index. */
  requiredInsights?: string[];
};

export interface CharacterContent {
  character: Character;
  chapters: LifeChapter[];
  projects: ResearchProjectContent[];
  contextCards: ContextCard[];
}
