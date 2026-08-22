import { describe, expect, it } from 'vitest';
import { CHARACTER_LIST, CHAPTERS_BY_CHARACTER, PROJECTS_BY_CHARACTER, CONTEXT_CARDS_BY_CHARACTER, LOCATIONS, getChapter } from '../data/content';
import { LIFE_CHAPTER_ORDER } from '../types';

describe('character roster', () => {
  it('has exactly twelve characters', () => {
    expect(CHARACTER_LIST).toHaveLength(12);
  });

  it('every character has all six Life Chapters in order', () => {
    for (const character of CHARACTER_LIST) {
      const chapters = CHAPTERS_BY_CHARACTER[character.id];
      expect(chapters.map((c) => c.id)).toEqual(LIFE_CHAPTER_ORDER);
    }
  });

  it('every character has at least five projects', () => {
    for (const character of CHARACTER_LIST) {
      expect(PROJECTS_BY_CHARACTER[character.id].length).toBeGreaterThanOrEqual(5);
    }
  });

  it('every character has at least four context cards', () => {
    for (const character of CHARACTER_LIST) {
      expect(CONTEXT_CARDS_BY_CHARACTER[character.id].length).toBeGreaterThanOrEqual(4);
    }
  });

  it('every character has at least two collaborators', () => {
    for (const character of CHARACTER_LIST) {
      expect(character.collaboratorIds.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('every character has a sourced biography and a legacy benchmark near 100', () => {
    for (const character of CHARACTER_LIST) {
      expect(character.sourceIds.length).toBeGreaterThan(0);
      expect(character.legacyBenchmark).toBeGreaterThanOrEqual(80);
      expect(character.legacyBenchmark).toBeLessThanOrEqual(120);
    }
  });

  it('every context card is tagged with a chapter that actually contains its year', () => {
    for (const character of CHARACTER_LIST) {
      for (const card of CONTEXT_CARDS_BY_CHARACTER[character.id]) {
        const chapter = getChapter(character.id, card.chapterId);
        expect(chapter, `missing chapter ${card.chapterId} for ${card.id}`).toBeDefined();
        expect(card.year, `${card.id} year ${card.year} outside ${card.chapterId} range [${chapter!.yearStart}, ${chapter!.yearEnd}]`).toBeGreaterThanOrEqual(chapter!.yearStart);
        expect(card.year).toBeLessThanOrEqual(chapter!.yearEnd);
      }
    }
  });

  it('every project references a real character, valid locations, and a source', () => {
    for (const character of CHARACTER_LIST) {
      for (const project of PROJECTS_BY_CHARACTER[character.id]) {
        expect(project.characterId).toBe(character.id);
        expect(project.locationIds.length).toBeGreaterThan(0);
        for (const locId of project.locationIds) {
          expect(LOCATIONS[locId], `missing location ${locId} referenced by ${project.id}`).toBeDefined();
        }
        expect(LOCATIONS[project.canonLocationId], `missing canon location for ${project.id}`).toBeDefined();
        expect(project.sourceId).toBeTruthy();
      }
    }
  });
});

describe('map locations', () => {
  it('every location has valid coordinates', () => {
    for (const location of Object.values(LOCATIONS)) {
      expect(location.coordinates.lat).toBeGreaterThanOrEqual(-90);
      expect(location.coordinates.lat).toBeLessThanOrEqual(90);
      expect(location.coordinates.lon).toBeGreaterThanOrEqual(-180);
      expect(location.coordinates.lon).toBeLessThanOrEqual(180);
    }
  });

  it('includes required historically significant locations', () => {
    const required = [
      'warsaw', 'paris', 'zurich', 'bern', 'prague', 'berlin', 'erlangen', 'gottingen',
      'konigsberg', 'moscow', 'vienna', 'brno', 'budapest', 'copenhagen', 'stockholm',
      'cambridgeUK', 'manchesterUK', 'london', 'bletchleyPark', 'teddington',
      'kumbakonam', 'madras', 'newYork', 'cambridgeMA', 'princeton', 'brynMawr',
      'berkeley', 'pasadena', 'losAlamos', 'washingtonDC', 'whiteSulphurSprings',
      'instituteWV', 'morgantown', 'hamptonLangley', 'capeCanaveral',
    ];
    for (const id of required) {
      expect(LOCATIONS[id], `missing required location ${id}`).toBeDefined();
    }
  });

  it('distinguishes the two Cambridges', () => {
    expect(LOCATIONS.cambridgeUK.name).toContain('England');
    expect(LOCATIONS.cambridgeMA.name).toContain('Massachusetts');
    expect(LOCATIONS.cambridgeUK.coordinates).not.toEqual(LOCATIONS.cambridgeMA.coordinates);
  });
});
