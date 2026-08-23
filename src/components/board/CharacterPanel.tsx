import type { PlayerState } from '../../types';
import { LIFE_CHAPTER_LABELS } from '../../types';
import { LOCATIONS } from '../../data/content';
import { chapterActionBudget, currentChapter, getCharacter } from '../../engine/rules';

export function CharacterPanel({ player }: { player: PlayerState }) {
  const character = getCharacter(player.characterId);
  const chapter = currentChapter(player);
  const totalTimeActions = chapterActionBudget(chapter.yearStart, chapter.yearEnd);
  const location = LOCATIONS[player.currentLocationId];
  const r = player.resources;

  return (
    <section className="character-panel card" aria-label={`${character.name} — active character`}>
      <header className="character-panel__header">
        <span className="character-panel__monogram" style={{ background: character.color }}>
          {character.monogram}
        </span>
        <div>
          <h2>{character.name}</h2>
          <p className="character-panel__chapter">
            {LIFE_CHAPTER_LABELS[chapter.id]} · {player.currentYear} ({chapter.yearStart}–{chapter.yearEnd})
          </p>
        </div>
      </header>

      <p className="character-panel__location">
        Currently in <strong>{location.name}</strong>
      </p>

      <p className="character-panel__ability">
        <strong>{character.ability.name}:</strong> {character.ability.description}
        {player.abilityUsedThisChapter && <span className="tag"> used this chapter</span>}
      </p>

      <dl className="resource-grid">
        <ResourceStat label="Time" value={`${player.timeActionsRemaining} / ${totalTimeActions}`} />
        <ResourceStat label="Funds" value={r.funds} />
        <ResourceStat label="Wellbeing" value={r.wellbeing} />
        <ResourceStat label="Health" value={r.health} />
        <ResourceStat label="Standing" value={r.standing} />
        <ResourceStat label="Network" value={r.network} />
        <ResourceStat label="Exposure" value={r.exposure} />
      </dl>

      <dl className="resource-grid resource-grid--tokens">
        <ResourceStat label="Theory" value={r.tokens.theory} />
        <ResourceStat label="Proof" value={r.tokens.proof} />
        <ResourceStat label="Evidence" value={r.tokens.evidence} />
        <ResourceStat label="Computation" value={r.tokens.computation} />
        <ResourceStat label="Engineering" value={r.tokens.engineering} />
      </dl>

      <p className="character-panel__legacy">
        Legacy so far: <strong>{player.legacyPoints}</strong> (Canon +{player.canonPoints}) — benchmark {character.legacyBenchmark}
      </p>

      <details className="character-panel__route">
        <summary>Route so far ({player.routeHistory.length} stops)</summary>
        <ol>
          {player.routeHistory.map((stop, i) => (
            <li key={i}>
              {stop.year}: {LOCATIONS[stop.locationId]?.name ?? stop.locationId}
            </li>
          ))}
        </ol>
      </details>
    </section>
  );
}

function ResourceStat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="resource-stat">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
