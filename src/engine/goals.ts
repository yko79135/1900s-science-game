import type { GameState, InsightRoute, PlayerState, ResearchProject, ResourceTokenType } from '../types';
import {
  CENTURY_KNOWLEDGE,
  CHAPTERS_BY_CHARACTER,
  COLLABORATORS,
  INSIGHTS,
  LOCATIONS,
  PROJECTS_BY_CHARACTER,
} from '../data/content';
import { canAttemptProject, currentChapterId, hasInsight, isKnowledgeAvailable } from './rules';

/**
 * The work, stated as something a player can aim at.
 *
 * A life's projects were previously reachable only through the map, and the
 * reasons one was out of reach were written for a rules engine rather than a
 * person. Everything here answers one question instead: what would I have to
 * do next to finish this?
 */

export type GoalState = 'done' | 'ready' | 'waiting' | 'blocked';

export interface Requirement {
  label: string;
  have: number;
  need: number;
  met: boolean;
  /** The one thing to do about it, in the player's own words. */
  lead?: string;
}

export interface Goal {
  project: ResearchProject;
  state: GoalState;
  requirements: Requirement[];
  /** The single sentence under the title: what to do next, or what it cost. */
  nextStep: string;
  /** Years of a life this will consume. */
  years: number;
  /** Set when the work is possible but not yet — a year to wait for. */
  opensIn?: number;
  /** This chapter is nearly over and this work is only available inside it. */
  urgent: boolean;
}

const TOKEN_ACTION: Record<ResourceTokenType, string> = {
  theory: 'Read and think',
  proof: 'Work the mathematics',
  computation: 'Calculate',
  evidence: 'Measure and observe',
  engineering: 'Build apparatus',
};

const TOKEN_NAME: Record<ResourceTokenType, string> = {
  theory: 'Theory',
  proof: 'Proof',
  computation: 'Computation',
  evidence: 'Evidence',
  engineering: 'Engineering',
};

/** Turns a rule about how an insight is acquired into a thing to go and do. */
function routeLead(route: InsightRoute): string | undefined {
  switch (route.type) {
    case 'location': {
      const place = LOCATIONS[route.locationId]?.name;
      return place ? `Spend time in ${place}.` : undefined;
    }
    case 'collaborator': {
      const person = COLLABORATORS[route.collaboratorId];
      if (!person) return undefined;
      const where = person.locationIds.map((id) => LOCATIONS[id]?.name).filter(Boolean)[0];
      return where ? `Seek out ${person.name} in ${where}.` : `Seek out ${person.name}.`;
    }
    case 'study':
      return `${TOKEN_ACTION[route.token]} — ${route.threshold} times over.`;
    case 'projectCompletion':
      return 'Finish the earlier work first.';
    case 'centuryKnowledge': {
      const entry = CENTURY_KNOWLEDGE[route.knowledgeId];
      return entry ? `Wait for ${entry.name} to be published.` : undefined;
    }
    case 'characterEncounter':
      return 'Be where the other one is.';
    case 'historicalEvent':
      return 'Live through what is coming.';
  }
}

function insightRequirement(player: PlayerState, insightId: string): Requirement {
  const insight = INSIGHTS[insightId];
  const met = hasInsight(player, insightId);
  const lead = insight?.leads?.[0] ?? insight?.acquisitionRoutes.map(routeLead).find(Boolean);
  return { label: insight?.name ?? insightId, have: met ? 1 : 0, need: 1, met, lead: met ? undefined : lead };
}

/** Everything standing between this life and this piece of work. */
export function requirementsFor(state: GameState, player: PlayerState, project: ResearchProject): Requirement[] {
  const requirements: Requirement[] = [];

  for (const [token, need] of Object.entries(project.requiredTokens) as [ResourceTokenType, number][]) {
    if (!need) continue;
    const have = player.resources.tokens[token] ?? 0;
    requirements.push({
      label: TOKEN_NAME[token],
      have,
      need,
      met: have >= need,
      lead: have >= need ? undefined : `${TOKEN_ACTION[token]}.`,
    });
  }

  if (project.fundsCost > 0) {
    const have = player.resources.funds;
    requirements.push({
      label: 'Funds',
      have,
      need: project.fundsCost,
      met: have >= project.fundsCost,
      lead: have >= project.fundsCost ? undefined : 'Teach, or ask for funding.',
    });
  }

  for (const insightId of project.requiredInsights) {
    requirements.push(insightRequirement(player, insightId));
  }

  for (const knowledgeId of project.requiredKnowledgeIds) {
    const available = isKnowledgeAvailable(state, knowledgeId, player.currentYear);
    const entry = CENTURY_KNOWLEDGE[knowledgeId];
    requirements.push({
      label: entry?.name ?? knowledgeId,
      have: available ? 1 : 0,
      need: 1,
      met: available,
      lead: available ? undefined : 'Nobody has published this yet.',
    });
  }

  return requirements;
}

/**
 * The first thing worth doing about this piece of work. A goal that cannot be
 * started yet still says what to prepare, because a player told only to wait
 * has been given nothing to decide.
 */
function firstLead(requirements: Requirement[]): string | undefined {
  const unmet = requirements.filter((r) => !r.met);
  const actionable = unmet.find((r) => r.lead);
  if (actionable?.lead) return actionable.lead;
  const first = unmet[0];
  return first ? `Needs ${first.need} ${first.label}; you have ${first.have}.` : undefined;
}

function sentence(project: ResearchProject, player: PlayerState, requirements: Requirement[], opensIn?: number): string {
  const lead = firstLead(requirements);
  if (opensIn !== undefined) {
    const when = opensIn - player.currentYear === 1 ? 'Possible from next year' : `Possible from ${opensIn}`;
    return lead ? `${when}. Meanwhile: ${lead.charAt(0).toLowerCase()}${lead.slice(1)}` : `${when}.`;
  }
  if (!lead) {
    const years = project.timeCost;
    const label = `${years} ${years === 1 ? 'year' : 'years'} of work`;
    return player.timeActionsRemaining < years
      ? `Ready — ${label}, and it will take the rest of this chapter.`
      : `Ready. ${label}.`;
  }
  return lead;
}

/**
 * This chapter's work, plus the next thing on the horizon so a player always
 * has something to aim at — including in the early chapters, which have no
 * projects of their own.
 */
export function goalsFor(state: GameState, player: PlayerState, horizon = 2): Goal[] {
  const all = PROJECTS_BY_CHARACTER[player.characterId] ?? [];
  const chapters = CHAPTERS_BY_CHARACTER[player.characterId] ?? [];
  const chapterId = currentChapterId(player);
  const chapterIndex = chapters.findIndex((c) => c.id === chapterId);

  const inChapter = all.filter((p) => p.chapterId === chapterId);
  const later = all
    .filter((p) => {
      const index = chapters.findIndex((c) => c.id === p.chapterId);
      return index > chapterIndex;
    })
    .slice(0, horizon);

  const pool = inChapter.length ? inChapter : later;
  const shown = inChapter.length ? [...inChapter, ...later.slice(0, 1)] : pool;

  return shown.map((project) => {
    const done = player.completedProjectIds.includes(project.id);
    const requirements = requirementsFor(state, player, project);
    const tooEarly = player.currentYear < project.earliestYear;
    const wrongChapter = project.chapterId !== chapterId;
    const eligible = canAttemptProject(state, player, project).eligible;

    let goalState: GoalState;
    if (done) goalState = 'done';
    else if (eligible) goalState = 'ready';
    else if (tooEarly || wrongChapter) goalState = 'waiting';
    else goalState = 'blocked';

    const opensIn = tooEarly ? project.earliestYear : wrongChapter ? undefined : undefined;

    const urgent =
      goalState === 'blocked' && player.timeActionsRemaining <= Math.max(2, project.timeCost);

    return {
      project,
      state: goalState,
      urgent,
      requirements,
      years: project.timeCost,
      opensIn,
      nextStep: done
        ? 'Finished.'
        : wrongChapter
          ? (() => {
              const chapterLabel = chapters.find((c) => c.id === project.chapterId)?.label;
              const when = chapterLabel ? `Not until ${chapterLabel.toLowerCase()}` : 'Later in this life';
              const lead = firstLead(requirements);
              return lead ? `${when}. Meanwhile: ${lead.charAt(0).toLowerCase()}${lead.slice(1)}` : `${when}.`;
            })()
          : sentence(project, player, requirements, opensIn),
    };
  });
}
