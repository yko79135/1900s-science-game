import type {
  CharacterId,
  ContextCardEffect,
  HistoricalClassification,
  LifeChapterId,
  ResourceTokenType,
} from './index';

export type StorySceneKind =
  | 'prologue'
  | 'chapterOpening'
  | 'historicalEvent'
  | 'encounter'
  | 'breakthrough'
  | 'personal'
  | 'relocation'
  | 'failure'
  | 'divergence'
  | 'chapterClosing'
  | 'epilogue';

export type StoryTriggerEvent =
  | 'gameStart'
  | 'chapterOpening'
  | 'afterAction'
  | 'projectCompleted'
  | 'chapterClosing'
  | 'epilogue';

export interface StoryTrigger {
  event: StoryTriggerEvent;
  projectId?: string;
  priority?: number;
}

export type StoryResourceKey =
  | 'funds'
  | 'wellbeing'
  | 'health'
  | 'standing'
  | 'network'
  | 'exposure'
  | ResourceTokenType;

export type StoryCondition =
  | { all: StoryCondition[] }
  | { any: StoryCondition[] }
  | { not: StoryCondition }
  | { type: 'chapterIs'; chapterId: LifeChapterId }
  | { type: 'yearAtLeast'; year: number }
  | { type: 'yearAtMost'; year: number }
  | { type: 'locationIs'; locationId: string }
  | { type: 'locationIsNot'; locationId: string }
  | { type: 'visitedLocation'; locationId: string }
  | { type: 'projectCompleted'; projectId: string }
  | { type: 'projectNotCompleted'; projectId: string }
  | { type: 'completedProjectCountAtLeast'; projectIds: string[]; count: number }
  | { type: 'resourceAtLeast'; resource: StoryResourceKey; value: number }
  | { type: 'narrativeFlag'; flag: string; value?: boolean | string | number }
  | { type: 'choiceWas'; choiceKey: string; choiceId: string }
  | { type: 'otherCharacterIsHuman'; characterId: CharacterId }
  | { type: 'otherCharacterIsNpc'; characterId: CharacterId }
  | { type: 'otherCharacterAt'; characterId: CharacterId; locationId: string; yearTolerance?: number }
  | { type: 'relationshipAtLeast'; characterId: CharacterId; field: keyof StoryRelationshipState; value: number };

export interface StoryImageSpec {
  setting: string;
  year?: number;
  characters?: CharacterId[];
  mood: string;
  details?: string[];
  alt: string;
  /** Optional pre-generated or cached URL. Live generation is otherwise handled by StoryImageProvider. */
  imageUrl?: string;
}

export type StoryEffect =
  | {
      type: 'relationship';
      characterId: CharacterId;
      familiarity?: number;
      respect?: number;
      tension?: number;
      flag?: string;
    }
  | { type: 'theme'; theme: string; amount: number }
  | { type: 'flag'; flag: string; value: boolean | string | number }
  | { type: 'resources'; effects: ContextCardEffect }
  | { type: 'markContextCardSeen'; cardId: string };

export interface StoryChoice {
  id: string;
  label: string;
  effects?: StoryEffect[];
}

export interface StoryPage {
  id: string;
  narration?: string;
  speaker?: string;
  dialogue?: string;
  choices?: StoryChoice[];
}

export interface StoryVariant {
  id: string;
  conditions?: StoryCondition[];
  title: string;
  locationLabel?: string;
  yearLabel?: string;
  image: StoryImageSpec;
  pages: StoryPage[];
  effects?: StoryEffect[];
  historicalNote?: string;
}

export interface StoryScene {
  id: string;
  characterId?: CharacterId;
  chapterId?: LifeChapterId;
  kind: StorySceneKind;
  classification: HistoricalClassification;
  sourceIds: string[];
  trigger: StoryTrigger;
  once: boolean;
  variants: StoryVariant[];
  replacesContextCardId?: string;
}

export interface StoryRelationshipState {
  familiarity: number;
  respect: number;
  tension: number;
  flags: string[];
  lastInteractionYear?: number;
}

export interface StoryChronicleEntry {
  sceneId: string;
  variantId: string;
  characterId: CharacterId;
  title: string;
  year: number;
  locationLabel?: string;
  classification: HistoricalClassification;
  summary: string;
}

export interface NarrativeTransition {
  type: 'endChapter';
  playerId: string;
}

export interface NarrativeState {
  activeSceneId?: string;
  activeVariantId?: string;
  activePageIndex: number;
  focusPlayerId?: string;
  pendingSceneIds: string[];
  seenSceneIds: string[];
  choices: Record<string, string>;
  flags: Record<string, boolean | string | number>;
  relationships: Record<string, StoryRelationshipState>;
  themes: Record<string, number>;
  chapterOpeningSeen: Record<string, boolean>;
  chapterClosingSeen: Record<string, boolean>;
  chronicle: StoryChronicleEntry[];
  pendingTransition?: NarrativeTransition;
}

export type StoryAction =
  | { type: 'STORY_NEXT' }
  | { type: 'STORY_BACK' }
  | { type: 'STORY_CHOOSE'; choiceId: string };
