import type { GameState, PlayerState } from '../types';
import { CHARACTERS, PROJECTS_BY_CHARACTER } from '../data/content';
import { computeFinalScore } from './rules';

/**
 * How a life gets summed up in one line somebody would repeat.
 *
 * A number out of a benchmark tells a person nothing they can compare or boast
 * about. A rank does: it names what this life amounted to, and it is short
 * enough to say out loud after a run.
 */

export interface Verdict {
  /** The line a player repeats: "Remembered — the man who bent the light". */
  rank: string;
  /** One sentence on why this life earned that rank. */
  reason: string;
  /** 0–5, for the shape of the badge rather than a score out of ten. */
  tier: number;
  /** The single most consequential thing this life finished, if any. */
  crowning?: string;
}

const TIERS: { at: number; rank: string }[] = [
  { at: 0.85, rank: 'Remembered' },
  { at: 0.6, rank: 'Established' },
  { at: 0.4, rank: 'Respected' },
  { at: 0.2, rank: 'Published' },
  { at: 0.05, rank: 'Known Locally' },
  { at: 0, rank: 'Forgotten' },
];

/** The heaviest completed project, which is what a life gets known for. */
function crowningWork(player: PlayerState): { name: string; legacy: number } | undefined {
  const projects = (PROJECTS_BY_CHARACTER[player.characterId] ?? [])
    .filter((project) => player.completedProjectIds.includes(project.id))
    .sort((a, b) => b.baseLegacy - a.baseLegacy);
  const best = projects[0];
  return best ? { name: best.name, legacy: best.baseLegacy } : undefined;
}

export function verdictFor(state: GameState, player: PlayerState): Verdict {
  const summary = computeFinalScore(player);
  const character = CHARACTERS[player.characterId];
  const ratio = summary.benchmarkRatio;
  const tierIndex = TIERS.findIndex((tier) => ratio >= tier.at);
  const tier = TIERS.length - 1 - (tierIndex < 0 ? TIERS.length - 1 : tierIndex);
  const base = TIERS[tierIndex < 0 ? TIERS.length - 1 : tierIndex].rank;

  const crowning = crowningWork(player);
  const done = player.completedProjectIds.length;
  const total = (PROJECTS_BY_CHARACTER[player.characterId] ?? []).length;

  // A life can be remembered for what it built or for what it refused; say which.
  const flags = state.narrative?.flags ?? {};
  const spokeUp = Boolean(flags[`${player.characterId}.pacifist`] ?? flags[`${player.characterId}.publicName`] ?? flags[`${player.characterId}.resigned`]);
  const outlived = player.resources.health >= 7 && player.resources.wellbeing >= 7;

  let qualifier = '';
  if (crowning && ratio >= 0.4) qualifier = ` — for ${crowning.name.toLowerCase()}`;
  else if (spokeUp && ratio < 0.4) qualifier = ' — for what he would not sign';
  else if (outlived && ratio < 0.2) qualifier = ' — and content';

  const reason =
    done === 0
      ? `${character.name} finished none of the work this life made possible.`
      : done === total
        ? `Every piece of work this life could reach was finished.`
        : `${done} of ${total} pieces of work finished, with ${summary.canonAlignment}% of it where the record puts it.`;

  return { rank: `${base}${qualifier}`, reason, tier, crowning: crowning?.name };
}
