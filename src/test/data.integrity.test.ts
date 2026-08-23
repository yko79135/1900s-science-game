import { describe, expect, it } from 'vitest';
import { CHARACTER_LIST, CHAPTERS_BY_CHARACTER, PROJECTS_BY_CHARACTER, CONTEXT_CARDS_BY_CHARACTER, LOCATIONS, getChapter } from '../data/content';
import { MAP_REGION_GROUPS, detailMapViewForLocation } from '../components/map/mapViews';
import { LIFE_CHAPTER_ORDER } from '../types';
import { chapterActionBudget, TIME_ACTIONS_PER_YEAR } from '../engine/rules';

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

  it('every project can be reached and attempted within its chapter timeline', () => {
    const timelineProblems: string[] = [];

    for (const character of CHARACTER_LIST) {
      for (const project of PROJECTS_BY_CHARACTER[character.id]) {
        const chapter = getChapter(character.id, project.chapterId);
        if (!chapter) {
          timelineProblems.push(`${project.id}: missing chapter ${project.chapterId}`);
          continue;
        }
        if (project.earliestYear > chapter.yearEnd) {
          timelineProblems.push(`${project.id}: earliest year ${project.earliestYear} is after ${chapter.label} ends in ${chapter.yearEnd}`);
          continue;
        }

        const actionsToEarliestYear = Math.max(0, project.earliestYear - chapter.yearStart) * TIME_ACTIONS_PER_YEAR;
        if (actionsToEarliestYear + project.timeCost > chapterActionBudget(chapter.yearStart, chapter.yearEnd)) {
          timelineProblems.push(`${project.id}: not enough Time remains to attempt it in ${project.earliestYear}`);
        }
      }
    }

    expect(timelineProblems).toEqual([]);
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

  it('puts every city in exactly one focused map view', () => {
    const focusedLocationIds = MAP_REGION_GROUPS.flatMap((region) =>
      region.views.filter((view) => !view.overview).flatMap((view) => view.locationIds),
    );

    expect(new Set(focusedLocationIds).size).toBe(focusedLocationIds.length);
    expect([...focusedLocationIds].sort()).toEqual(Object.keys(LOCATIONS).sort());
  });

  it('keeps each regional overview aligned with its focused views', () => {
    for (const region of MAP_REGION_GROUPS) {
      const overview = region.views.find((view) => view.overview);
      if (!overview) continue;

      const focusedLocationIds = region.views
        .filter((view) => !view.overview)
        .flatMap((view) => view.locationIds)
        .sort();
      expect([...overview.locationIds].sort()).toEqual(focusedLocationIds);
    }
  });

  it('routes crowded cities to focused regional tabs', () => {
    expect(detailMapViewForLocation('london').id).toBe('england');
    expect(detailMapViewForLocation('erlangen').id).toBe('central-europe');
    expect(detailMapViewForLocation('princeton').id).toBe('northeast-us');
    expect(detailMapViewForLocation('instituteWV').id).toBe('appalachia-virginia');
  });
});
