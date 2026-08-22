import type { GameAction } from '../../engine/reducer';
import type { PlayerState } from '../../types';
import { LOCATIONS, PROJECTS_BY_CHARACTER } from '../../data/content';
import { evaluateTravel, getCharacter, isCanonicalDestination } from '../../engine/rules';

export interface LocationInfoPanelProps {
  locationId: string;
  player: PlayerState;
  dispatch: (action: GameAction) => void;
  onClose: () => void;
}

export function LocationInfoPanel({ locationId, player, dispatch, onClose }: LocationInfoPanelProps) {
  const location = LOCATIONS[locationId];
  const character = getCharacter(player.characterId);
  const isCurrent = player.currentLocationId === locationId;
  const travel = evaluateTravel(player, locationId);
  const canonical = isCanonicalDestination(character, locationId);
  const projectsHere = PROJECTS_BY_CHARACTER[player.characterId].filter((p) => p.locationIds.includes(locationId));
  const connectedNames = location.connectedCharacterIds.map((id) => {
    try {
      return getCharacter(id).name;
    } catch {
      return id;
    }
  });

  return (
    <section className="location-panel card" aria-label={`Details for ${location.name}`}>
      <div className="location-panel__head">
        <h2>
          {location.name}
          {canonical && <span className="tag" title="A canonically significant location for this character"> notable</span>}
        </h2>
        <button type="button" className="btn" data-testid="location-panel-close" onClick={onClose} aria-label="Close location details and return to projects">
          Back to Projects
        </button>
      </div>
      {location.disambiguation && <p className="location-panel__disambiguation">{location.disambiguation}</p>}
      <p className="location-panel__note">{location.note}</p>

      <dl className="location-panel__facts">
        <div>
          <dt>Active period</dt>
          <dd>
            {location.activeStart}–{location.activeEnd ?? 'present'}
          </dd>
        </div>
        <div>
          <dt>Travel cost</dt>
          <dd>{location.travelCost} Funds</dd>
        </div>
        <div>
          <dt>Living cost</dt>
          <dd>{location.livingCost} Funds / chapter</dd>
        </div>
      </dl>

      {location.institutions.length > 0 && (
        <div>
          <h3>Institutions</h3>
          <ul>
            {location.institutions.map((inst) => (
              <li key={inst.id}>{inst.name} — {inst.description}</li>
            ))}
          </ul>
        </div>
      )}

      {connectedNames.length > 0 && (
        <p>
          <strong>Historically connected to:</strong> {connectedNames.join(', ')}
        </p>
      )}

      {location.risks.length > 0 && (
        <div>
          <h3>Political / social risks</h3>
          <ul>
            {location.risks.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {projectsHere.length > 0 && (
        <div>
          <h3>Projects available here</h3>
          <ul>
            {projectsHere.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </div>
      )}

      {isCurrent ? (
        <p className="location-panel__current">You are here.</p>
      ) : (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-testid="travel-confirm-btn"
            disabled={!travel.allowed}
            onClick={() => dispatch({ type: 'TRAVEL', destinationId: locationId })}
          >
            Travel here ({travel.fundsCost} Funds, {travel.timeCost} Time)
          </button>
          {!travel.allowed && (
            <ul className="project-card__reasons">
              {travel.reasons.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
}
