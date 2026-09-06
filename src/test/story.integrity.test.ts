import { describe, expect, it } from 'vitest';
import { CHARACTERS, CONTEXT_CARDS_BY_CHARACTER, LOCATIONS, PROJECTS_BY_CHARACTER, SOURCES } from '../data/content';
import { REPLACED_CONTEXT_CARDS_BY_CHARACTER, STORY_SCENES, authoredScenesForCharacter } from '../data/story';
import { BEATS } from '../data/beats';
import type { StoryCondition, StoryEffect, StoryScene } from '../types/story';
import type { CharacterId } from '../types';
import { LIFE_CHAPTER_ORDER } from '../types';

/**
 * Structural checks on every authored story scene: ids resolve, conditions
 * point at real things, replaced context cards really exist, and the prose
 * never breaks the fiction by talking about the engine.
 */

const CHARACTER_IDS = Object.keys(CHARACTERS) as CharacterId[];
const SOURCE_IDS = new Set(Object.keys(SOURCES));
const LOCATION_IDS = new Set(Object.keys(LOCATIONS));
const ALL_PROJECT_IDS = new Set(Object.values(PROJECTS_BY_CHARACTER).flat().map((project) => project.id));
const ALL_CARD_IDS = new Set(Object.values(CONTEXT_CARDS_BY_CHARACTER).flat().map((card) => card.id));

const FORBIDDEN_IN_PROSE = [
  /\bplayer(s)?\b/i,
  /\bgame\b/i,
  /\btimeline\b/i,
  /\bcanon(ical)?\b/i,
  /\bhuman-controlled\b/i,
  /\bNPC\b/,
  /\bplaythrough\b/i,
  /\bhistorically,/i,
  /\bin this version\b/i,
  /\bvariant\b/i,
];

type LeafCondition = Exclude<StoryCondition, { all: StoryCondition[] } | { any: StoryCondition[] } | { not: StoryCondition }>;

function walkConditions(condition: StoryCondition, visit: (leaf: LeafCondition) => void): void {
  if ('all' in condition) return condition.all.forEach((item) => walkConditions(item, visit));
  if ('any' in condition) return condition.any.forEach((item) => walkConditions(item, visit));
  if ('not' in condition) return walkConditions(condition.not, visit);
  visit(condition);
}

function sceneConditions(scene: StoryScene): StoryCondition[] {
  return scene.variants.flatMap((variant) => variant.conditions ?? []);
}

function sceneEffects(scene: StoryScene): StoryEffect[] {
  return scene.variants.flatMap((variant) => [
    ...(variant.effects ?? []),
    ...variant.pages.flatMap((page) => page.choices?.flatMap((choice) => choice.effects ?? []) ?? []),
  ]);
}

function proseOf(scene: StoryScene): { where: string; text: string }[] {
  return scene.variants.flatMap((variant) => [
    { where: `${scene.id}/${variant.id}:title`, text: variant.title },
    ...variant.pages.flatMap((page) => [
      { where: `${scene.id}/${variant.id}/${page.id}:narration`, text: page.narration ?? '' },
      { where: `${scene.id}/${variant.id}/${page.id}:dialogue`, text: page.dialogue ?? '' },
      ...(page.choices ?? []).map((choice) => ({ where: `${scene.id}/${variant.id}/${page.id}/${choice.id}:label`, text: choice.label })),
    ]),
  ]);
}

describe('story scene integrity', () => {
  it('has globally unique scene ids and unique variant ids within a scene', () => {
    const ids = STORY_SCENES.map((scene) => scene.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const scene of STORY_SCENES) {
      const variantIds = scene.variants.map((variant) => variant.id);
      expect(new Set(variantIds).size, `${scene.id} variant ids`).toBe(variantIds.length);
      expect(scene.variants.length, `${scene.id} has variants`).toBeGreaterThan(0);
      for (const variant of scene.variants) {
        expect(variant.pages.length, `${scene.id}/${variant.id} has pages`).toBeGreaterThan(0);
        const pageIds = variant.pages.map((page) => page.id);
        expect(new Set(pageIds).size, `${scene.id}/${variant.id} page ids`).toBe(pageIds.length);
      }
    }
  });

  it('prefixes every scene id with its character id', () => {
    for (const scene of STORY_SCENES) {
      expect(scene.characterId, `${scene.id} characterId`).toBeDefined();
      expect(scene.id.startsWith(`${scene.characterId}-`), `${scene.id} should start with ${scene.characterId}-`).toBe(true);
    }
  });

  it('references only real sources, locations, projects, characters, and context cards', () => {
    for (const scene of STORY_SCENES) {
      for (const sourceId of scene.sourceIds) expect(SOURCE_IDS.has(sourceId), `${scene.id} source ${sourceId}`).toBe(true);
      if (scene.trigger.projectId) expect(ALL_PROJECT_IDS.has(scene.trigger.projectId), `${scene.id} trigger project`).toBe(true);
      if (scene.replacesContextCardId) expect(ALL_CARD_IDS.has(scene.replacesContextCardId), `${scene.id} replaced card`).toBe(true);
      for (const condition of sceneConditions(scene)) {
        walkConditions(condition, (leaf) => {
          if ('locationId' in leaf) expect(LOCATION_IDS.has(leaf.locationId), `${scene.id} location ${leaf.locationId}`).toBe(true);
          if ('projectId' in leaf) expect(ALL_PROJECT_IDS.has(leaf.projectId), `${scene.id} project ${leaf.projectId}`).toBe(true);
          if ('projectIds' in leaf) for (const id of leaf.projectIds) expect(ALL_PROJECT_IDS.has(id), `${scene.id} project ${id}`).toBe(true);
          if ('characterId' in leaf) expect(CHARACTER_IDS.includes(leaf.characterId), `${scene.id} character ${leaf.characterId}`).toBe(true);
        });
      }
      for (const effect of sceneEffects(scene)) {
        if (effect.type === 'markContextCardSeen') expect(ALL_CARD_IDS.has(effect.cardId), `${scene.id} marks card ${effect.cardId}`).toBe(true);
        if (effect.type === 'relationship') expect(CHARACTER_IDS.includes(effect.characterId), `${scene.id} relationship ${effect.characterId}`).toBe(true);
      }
      for (const variant of scene.variants) {
        for (const id of variant.image.characters ?? []) expect(CHARACTER_IDS.includes(id), `${scene.id} image character ${id}`).toBe(true);
      }
    }
  });

  it('keeps the engine out of the prose', () => {
    const offenders: string[] = [];
    for (const scene of STORY_SCENES) {
      for (const { where, text } of proseOf(scene)) {
        for (const pattern of FORBIDDEN_IN_PROSE) {
          if (pattern.test(text)) offenders.push(`${where}: ${pattern} in “${text.slice(0, 80)}”`);
        }
      }
    }
    expect(offenders, offenders.join('\n')).toEqual([]);
  });

  it('keeps the engine out of the beats too, and gates every one of them', () => {
    const ids = BEATS.map((beat) => beat.id);
    expect(new Set(ids).size, 'beat ids must be unique').toBe(ids.length);
    const offenders: string[] = [];
    for (const beat of BEATS) {
      expect(CHARACTER_IDS.includes(beat.characterId), `${beat.id} character`).toBe(true);
      // A beat with no conditions fires in the wrong decade.
      expect((beat.conditions ?? []).length, `${beat.id} needs at least one condition`).toBeGreaterThan(0);
      for (const condition of beat.conditions ?? []) {
        walkConditions(condition, (leaf) => {
          if ('locationId' in leaf) expect(LOCATION_IDS.has(leaf.locationId), `${beat.id} location ${leaf.locationId}`).toBe(true);
          if ('projectId' in leaf) expect(ALL_PROJECT_IDS.has(leaf.projectId), `${beat.id} project ${leaf.projectId}`).toBe(true);
          if ('characterId' in leaf) expect(CHARACTER_IDS.includes(leaf.characterId), `${beat.id} character ${leaf.characterId}`).toBe(true);
        });
      }
      for (const pattern of FORBIDDEN_IN_PROSE) {
        if (pattern.test(beat.text)) offenders.push(`${beat.id}: ${pattern}`);
      }
    }
    expect(offenders, offenders.join('\n')).toEqual([]);
  });

  it('answers every choice somewhere later in the same life', () => {
    for (const characterId of CHARACTER_IDS) {
      const scenes = authoredScenesForCharacter(characterId);
      if (scenes.length === 0) continue;
      const choiceKeys = new Set<string>();
      for (const scene of scenes) {
        for (const variant of scene.variants) {
          for (const page of variant.pages) if (page.choices?.length) choiceKeys.add(`${scene.id}:${page.id}`);
        }
      }
      const answered = new Set<string>();
      for (const scene of scenes) {
        for (const condition of sceneConditions(scene)) {
          walkConditions(condition, (leaf) => {
            if (leaf.type === 'choiceWas') answered.add(leaf.choiceKey);
          });
        }
      }
      // A choice can also be remembered through a flag it sets; accept either.
      const flagsRead = new Set<string>();
      for (const scene of scenes) {
        for (const condition of sceneConditions(scene)) {
          walkConditions(condition, (leaf) => {
            if (leaf.type === 'narrativeFlag') flagsRead.add(leaf.flag);
          });
        }
      }
      const unanswered = [...choiceKeys].filter((key) => {
        if (answered.has(key)) return false;
        const [sceneId, pageId] = key.split(':');
        const scene = scenes.find((candidate) => candidate.id === sceneId);
        const page = scene?.variants.flatMap((variant) => variant.pages).find((candidate) => candidate.id === pageId);
        const flagsSet = page?.choices?.flatMap((choice) => (choice.effects ?? []).filter((e) => e.type === 'flag').map((e) => (e as { flag: string }).flag)) ?? [];
        return !flagsSet.some((flag) => flagsRead.has(flag));
      });
      expect(unanswered, `${characterId}: choices never referenced later: ${unanswered.join(', ')}`).toEqual([]);
    }
  });

  it('declares replaced context cards that exist, and marks them seen in every variant', () => {
    for (const characterId of CHARACTER_IDS) {
      const replaced = REPLACED_CONTEXT_CARDS_BY_CHARACTER[characterId] ?? [];
      const cards = new Set((CONTEXT_CARDS_BY_CHARACTER[characterId] ?? []).map((card) => card.id));
      for (const cardId of replaced) expect(cards.has(cardId), `${characterId} replaced card ${cardId}`).toBe(true);
      for (const scene of authoredScenesForCharacter(characterId)) {
        if (!scene.replacesContextCardId) continue;
        expect(replaced, `${scene.id} replaces ${scene.replacesContextCardId} but it is not in the replaced list`).toContain(scene.replacesContextCardId);
        for (const variant of scene.variants) {
          const marks = (variant.effects ?? []).some((e) => e.type === 'markContextCardSeen' && e.cardId === scene.replacesContextCardId);
          expect(marks, `${scene.id}/${variant.id} must mark ${scene.replacesContextCardId} seen`).toBe(true);
        }
      }
    }
  });

  it('gives every authored life a full set of chapter scenes, a prologue, and an epilogue', () => {
    for (const characterId of CHARACTER_IDS) {
      const scenes = authoredScenesForCharacter(characterId);
      if (scenes.length === 0) continue;
      for (const chapterId of LIFE_CHAPTER_ORDER) {
        expect(scenes.some((s) => s.kind === 'chapterOpening' && s.chapterId === chapterId), `${characterId} ${chapterId} opening`).toBe(true);
        expect(scenes.some((s) => s.kind === 'chapterClosing' && s.chapterId === chapterId), `${characterId} ${chapterId} closing`).toBe(true);
      }
      expect(scenes.some((s) => s.kind === 'prologue'), `${characterId} prologue`).toBe(true);
      expect(scenes.some((s) => s.kind === 'epilogue'), `${characterId} epilogue`).toBe(true);
      for (const project of PROJECTS_BY_CHARACTER[characterId] ?? []) {
        expect(
          scenes.some((s) => s.trigger.event === 'projectCompleted' && s.trigger.projectId === project.id),
          `${characterId} has no scene for project ${project.id}`,
        ).toBe(true);
      }
      for (const card of CONTEXT_CARDS_BY_CHARACTER[characterId] ?? []) {
        expect(scenes.some((s) => s.replacesContextCardId === card.id), `${characterId} context card ${card.id} is not told by a scene`).toBe(true);
      }
    }
  });
});
