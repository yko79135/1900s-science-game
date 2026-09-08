import { describe, expect, it } from 'vitest';
import {
  CENTURY_KNOWLEDGE,
  CHARACTER_LIST,
  CHAPTERS_BY_CHARACTER,
  COLLABORATORS,
  CONTEXT_CARDS_BY_CHARACTER,
  HISTORICAL_EVENTS,
  INSIGHTS,
  LOCATIONS,
  PROJECTS_BY_CHARACTER,
  getChapter,
  getProjectById,
} from '../data/content';
import { MAP_REGION_GROUPS, detailMapViewForLocation } from '../components/map/mapViews';
import { LIFE_CHAPTER_ORDER } from '../types';
import { ACTIONS_PER_TURN, chapterActionBudget, TIME_ACTIONS_PER_YEAR } from '../engine/rules';

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
        for (const insightId of project.requiredInsights) {
          expect(INSIGHTS[insightId], `missing Insight ${insightId} referenced by ${project.id}`).toBeDefined();
        }
      }
    }
  });

  it('every Insight route references valid deterministic content', () => {
    const characterIds = new Set(CHARACTER_LIST.map((character) => character.id));
    const eventIds = new Set(HISTORICAL_EVENTS.map((event) => event.id));
    for (const insight of Object.values(INSIGHTS)) {
      expect(insight.acquisitionRoutes.length).toBeGreaterThan(0);
      expect(insight.leads.length).toBeGreaterThan(0);
      for (const route of insight.acquisitionRoutes) {
        if (route.type === 'location') expect(LOCATIONS[route.locationId], `${insight.id}: ${route.locationId}`).toBeDefined();
        if (route.type === 'collaborator') expect(COLLABORATORS[route.collaboratorId], `${insight.id}: ${route.collaboratorId}`).toBeDefined();
        if (route.type === 'characterEncounter') expect(characterIds.has(route.characterId), `${insight.id}: ${route.characterId}`).toBe(true);
        if (route.type === 'projectCompletion') expect(getProjectById(route.projectId), `${insight.id}: ${route.projectId}`).toBeDefined();
        if (route.type === 'centuryKnowledge') expect(CENTURY_KNOWLEDGE[route.knowledgeId], `${insight.id}: ${route.knowledgeId}`).toBeDefined();
        if (route.type === 'historicalEvent') expect(eventIds.has(route.eventId), `${insight.id}: ${route.eventId}`).toBe(true);
        if (route.type === 'study') expect(route.threshold).toBeGreaterThan(0);
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
        if (project.timeCost > ACTIONS_PER_TURN) {
          timelineProblems.push(`${project.id}: costs ${project.timeCost} turn actions but a turn only provides ${ACTIONS_PER_TURN}`);
        }

        const actionsToEarliestYear = Math.max(0, project.earliestYear - chapter.yearStart) * TIME_ACTIONS_PER_YEAR;
        if (actionsToEarliestYear + 1 > chapterActionBudget(chapter.yearStart, chapter.yearEnd)) {
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

describe('a life becomes playable when the person could plausibly act', () => {
  it('never opens a campaign on an infant, and never on a chapter too short to play', () => {
    for (const character of CHARACTER_LIST) {
      const characterId = character.id;
      const formation = CHAPTERS_BY_CHARACTER[characterId]?.[0];
      expect(formation, `${characterId} formation`).toBeDefined();
      const ageAtStart = formation!.yearStart - character.bornYear;
      // The turn screen offers posts, funding and travel; a toddler cannot take them.
      expect(ageAtStart, `${characterId} starts at age ${ageAtStart}`).toBeGreaterThanOrEqual(5);
      const turns = formation!.yearEnd - formation!.yearStart + 1;
      expect(turns, `${characterId} formation is ${turns} turns`).toBeGreaterThanOrEqual(6);
      expect(formation!.yearStart, `${characterId} starts before it ends`).toBeLessThan(formation!.yearEnd);
    }
  });
});
