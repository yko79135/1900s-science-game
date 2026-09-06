import type { CharacterId, GameState, PlayerState, ResourceTokenType } from '../types';
import type { GameAction } from './reducer';
import { gameReducer } from './reducer';
import { CHARACTERS, LOCATIONS } from '../data/content';
import { evaluateTravel } from './rules';
import { scientistsAt, scientistsSharingCity } from './presence';

/**
 * The turn screen's model: a short list of things a life can do this year, each
 * carrying what it will actually cost and gain.
 *
 * Every number shown here is produced by running the real reducer and diffing
 * the result, never by a second table of effects that could drift away from the
 * rules. If the preview is wrong, the game is wrong.
 */

export type ChangeKey =
  | 'research'
  | 'funds'
  | 'wellbeing'
  | 'health'
  | 'standing'
  | 'network'
  | 'exposure'
  | 'year';

export interface Change {
  key: ChangeKey;
  label: string;
  amount: number;
  /** Set when the amount is a roll rather than a certainty. */
  varies?: boolean;
}

export type OptionGroup = 'research' | 'living' | 'people' | 'travel';

export interface TurnOption {
  id: string;
  label: string;
  /** The reason a player would pick this, in their own terms. */
  detail?: string;
  group: OptionGroup;
  action: GameAction;
  changes: Change[];
  years: number;
  enabled: boolean;
  blockedReason?: string;
}

const TOKEN_LABEL: Record<ResourceTokenType, string> = {
  theory: 'Theory',
  proof: 'Proof',
  evidence: 'Evidence',
  computation: 'Computation',
  engineering: 'Engineering',
};

/** The five numbers the player reads. Research is every research token together. */
export function researchTotal(player: PlayerState): number {
  return Object.values(player.resources.tokens).reduce((sum, n) => sum + (n ?? 0), 0);
}

function diff(before: PlayerState, after: PlayerState): Change[] {
  const changes: Change[] = [];
  const push = (key: ChangeKey, label: string, amount: number) => {
    if (amount !== 0) changes.push({ key, label, amount });
  };

  const research = researchTotal(after) - researchTotal(before);
  push('research', 'Research', research);
  push('funds', 'Funds', after.resources.funds - before.resources.funds);
  push('wellbeing', 'Wellbeing', after.resources.wellbeing - before.resources.wellbeing);
  push('health', 'Health', after.resources.health - before.resources.health);
  push('standing', 'Standing', after.resources.standing - before.resources.standing);
  push('network', 'Network', after.resources.network - before.resources.network);
  push('exposure', 'Exposure', after.resources.exposure - before.resources.exposure);
  return changes;
}

/** Which research token an action produces, for the detail line. */
function tokenGained(before: PlayerState, after: PlayerState): string | undefined {
  const grown = (Object.keys(TOKEN_LABEL) as ResourceTokenType[])
    .filter((t) => (after.resources.tokens[t] ?? 0) > (before.resources.tokens[t] ?? 0))
    .map((t) => TOKEN_LABEL[t]);
  return grown.length ? grown.join(' and ') : undefined;
}

/**
 * Runs an action against a copy of the game and reports what it did. The
 * reducer is pure, so this costs nothing and cannot disagree with the real turn.
 */
export function previewAction(state: GameState, action: GameAction): { changes: Change[]; years: number; token?: string; applied: boolean } {
  const before = state.players[state.activePlayerIndex];
  const after = gameReducer(state, action);
  const afterPlayer = after.players.find((p) => p.id === before.id);
  if (!afterPlayer) return { changes: [], years: 0, applied: false };

  const spentYears = afterPlayer.currentYear - before.currentYear;
  const spentTime = before.timeActionsRemaining - afterPlayer.timeActionsRemaining;
  const applied = spentTime > 0 || JSON.stringify(afterPlayer.resources) !== JSON.stringify(before.resources);
  return {
    changes: diff(before, afterPlayer),
    years: Math.max(spentYears, spentTime),
    token: tokenGained(before, afterPlayer),
    applied,
  };
}

function option(
  state: GameState,
  id: string,
  label: string,
  group: OptionGroup,
  action: GameAction,
  detail?: string,
): TurnOption {
  const preview = previewAction(state, action);
  return {
    id,
    label,
    detail,
    group,
    action,
    changes: preview.changes,
    years: preview.years || 1,
    enabled: preview.applied,
    blockedReason: preview.applied ? undefined : 'No time left this chapter.',
  };
}

const RESEARCH_ACTIONS: { id: string; label: string; kind: 'study' | 'research' | 'calculate' | 'experimentEvidence' | 'experimentEngineering' }[] = [
  { id: 'study', label: 'Read and think', kind: 'study' },
  { id: 'prove', label: 'Work the mathematics', kind: 'research' },
  { id: 'calculate', label: 'Calculate', kind: 'calculate' },
  { id: 'measure', label: 'Measure and observe', kind: 'experimentEvidence' },
  { id: 'build', label: 'Build apparatus', kind: 'experimentEngineering' },
];

/** How many other lives a city holds this year — the reason to make a journey. */
export function companyAt(state: GameState, locationId: string, year: number, self: CharacterId): string | undefined {
  const names = scientistsAt(state, locationId, year, self).map((p) => CHARACTERS[p.characterId]?.name).filter(Boolean);
  if (!names.length) return undefined;
  if (names.length === 1) return `${names[0]} is there.`;
  if (names.length === 2) return `${names[0]} and ${names[1]} are there.`;
  return `${names.slice(0, 2).join(', ')} and ${names.length - 2} more are there.`;
}

/** Everyone in the room this year, phrased for the player. */
export function companyHere(state: GameState, player: PlayerState): string | undefined {
  const names = scientistsSharingCity(state, player).map((p) => CHARACTERS[p.characterId]?.name).filter(Boolean);
  if (!names.length) return undefined;
  if (names.length === 1) return `${names[0]} is in this city.`;
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]} are in this city.`;
}

/**
 * Places worth offering this year: where this life historically went, anywhere
 * already visited, and anywhere another scientist is standing.
 */
export function travelOptions(state: GameState, player: PlayerState, limit = 6): TurnOption[] {
  const character = CHARACTERS[player.characterId];
  const onRoute = new Set(character.canonicalRoute.map((stop) => stop.locationId));
  const visited = new Set(player.routeHistory.map((entry) => entry.locationId));

  const candidates = Object.values(LOCATIONS)
    .filter((location) => location.id !== player.currentLocationId)
    .filter((location) => player.currentYear >= location.activeStart && (location.activeEnd === null || player.currentYear <= location.activeEnd))
    .map((location) => {
      const company = companyAt(state, location.id, player.currentYear, player.characterId);
      const evaluation = evaluateTravel(player, location.id);
      const interest = (onRoute.has(location.id) ? 4 : 0) + (company ? 2 : 0) + (visited.has(location.id) ? 1 : 0);
      return { location, company, evaluation, interest };
    })
    .filter((entry) => entry.interest > 0)
    .sort((a, b) => b.interest - a.interest || a.location.travelCost - b.location.travelCost)
    .slice(0, limit);

  return candidates.map((entry) => {
    const base = option(
      state,
      `travel-${entry.location.id}`,
      `Move to ${entry.location.name}`,
      'travel',
      { type: 'TRAVEL', destinationId: entry.location.id },
      entry.company,
    );
    if (entry.evaluation.allowed) return base;
    return { ...base, enabled: false, blockedReason: entry.evaluation.reasons[0] };
  });
}

/** Everything a life can spend this year on, ready to render. */
export function turnOptions(state: GameState, player: PlayerState): TurnOption[] {
  const options: TurnOption[] = [];

  for (const entry of RESEARCH_ACTIONS) {
    const preview = previewAction(state, { type: 'GENERATE_TOKEN', kind: entry.kind });
    if (!preview.changes.length && !preview.applied) continue;
    options.push(
      option(state, entry.id, entry.label, 'research', { type: 'GENERATE_TOKEN', kind: entry.kind }, preview.token),
    );
  }

  const location = LOCATIONS[player.currentLocationId];
  const post = location?.employment[0];
  options.push(
    option(state, 'earn', 'Teach or take a post', 'living', { type: 'TEACH_OR_EARN' }, post?.title ?? 'Whatever work this city offers'),
  );

  const funding = option(state, 'funding', 'Ask for funding', 'living', { type: 'SEEK_FUNDING' }, 'How much depends on who is listening');
  options.push({
    ...funding,
    changes: [{ key: 'funds', label: 'Funds', amount: 1, varies: true }],
  });

  options.push(option(state, 'rest', 'Rest, and see the family', 'living', { type: 'REST_AND_FAMILY' }));
  options.push(
    option(state, 'collaborate', 'Seek out colleagues', 'people', { type: 'COLLABORATE' }, companyHere(state, player)),
  );
  options.push(option(state, 'advocate', 'Speak publicly', 'people', { type: 'ADVOCACY' }));
  options.push(option(state, 'institution', 'Build an institution', 'people', { type: 'BUILD_INSTITUTION' }));

  return [...options, ...travelOptions(state, player)];
}
