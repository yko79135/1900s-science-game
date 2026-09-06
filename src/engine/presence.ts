import type { CharacterId, GameState, PlayerState } from '../types';
import { CHARACTERS } from '../data/content';

/**
 * Where the other scientists are, so that lives can cross.
 *
 * A character not being played by anybody still moves: their documented route
 * is read as a set of spans, so they are somewhere every year of their life,
 * not only in the years the route happens to name. A character somebody is
 * playing is wherever that player actually took them.
 */

export interface Presence {
  characterId: CharacterId;
  locationId: string;
  /** The year they arrived at this location. */
  since: number;
  /** True when a player is steering this life rather than the record. */
  played: boolean;
}

/** The span-based position of an unplayed scientist in a given year. */
export function unplayedPresence(characterId: CharacterId, year: number): Presence | undefined {
  const character = CHARACTERS[characterId];
  if (!character) return undefined;
  if (year < character.bornYear) return undefined;
  if (character.diedYear !== null && year > character.diedYear) return undefined;

  let locationId = character.startingLocationId;
  let since = character.bornYear;
  for (const stop of [...character.canonicalRoute].sort((a, b) => a.year - b.year)) {
    if (stop.year > year) break;
    if (stop.locationId !== locationId) {
      locationId = stop.locationId;
      since = stop.year;
    }
  }
  return { characterId, locationId, since, played: false };
}

/** Where a scientist is in a given year, whether or not somebody is playing them. */
export function presenceOf(state: GameState, characterId: CharacterId, year: number): Presence | undefined {
  const player = state.players.find((candidate) => candidate.characterId === characterId);
  if (player) {
    const arrival = [...player.routeHistory]
      .filter((entry) => entry.locationId === player.currentLocationId)
      .sort((a, b) => a.year - b.year)[0];
    return {
      characterId,
      locationId: player.currentLocationId,
      since: arrival?.year ?? player.currentYear,
      played: true,
    };
  }
  return unplayedPresence(characterId, year);
}

/**
 * Everyone else who is in the same city in the same year. This is what makes a
 * detour somewhere unlikely worth taking: the century's other lives are running
 * whether the player visits them or not.
 */
export function scientistsSharingCity(state: GameState, player: PlayerState): Presence[] {
  const others = (Object.keys(CHARACTERS) as CharacterId[]).filter((id) => id !== player.characterId);
  return others
    .map((id) => presenceOf(state, id, player.currentYear))
    .filter((presence): presence is Presence => Boolean(presence))
    .filter((presence) => presence.locationId === player.currentLocationId)
    .sort((a, b) => Number(b.played) - Number(a.played) || a.characterId.localeCompare(b.characterId));
}

/**
 * Scientists a player could reach this year by moving. Used to show a journey's
 * real reason: not the city, the person who is in it.
 */
export function scientistsAt(state: GameState, locationId: string, year: number, exclude: CharacterId): Presence[] {
  const others = (Object.keys(CHARACTERS) as CharacterId[]).filter((id) => id !== exclude);
  return others
    .map((id) => presenceOf(state, id, year))
    .filter((presence): presence is Presence => Boolean(presence))
    .filter((presence) => presence.locationId === locationId)
    .sort((a, b) => a.characterId.localeCompare(b.characterId));
}
