import { useMemo, useRef, useState, type PointerEvent, type WheelEvent } from 'react';
import type { CharacterId, Location, PlayerState } from '../../types';
import { LOCATIONS } from '../../data/content';
import { evaluateTravel, getCharacter, isCanonicalDestination, isLocationActiveForYear } from '../../engine/rules';
import { MAP_HEIGHT, MAP_WIDTH, curvedPath, graticulePath, landPath, project } from './geo';
import './worldmap.css';

export interface WorldMapProps {
  players: PlayerState[];
  activePlayer: PlayerState;
  selectedLocationId: string | null;
  onSelectLocation: (id: string) => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;

const MAP_VIEWS = [
  { id: 'europe', label: 'Europe', regions: ['Europe'] },
  { id: 'america', label: 'America', regions: ['United States'] },
  { id: 'south-asia', label: 'South Asia', regions: ['South Asia'] },
] as const;

type MapView = (typeof MAP_VIEWS)[number];

function viewForLocation(locationId: string): MapView {
  const region = LOCATIONS[locationId].region;
  return MAP_VIEWS.find((view) => view.regions.some((candidate) => candidate === region)) ?? MAP_VIEWS[0];
}

export function WorldMap({ players, activePlayer, selectedLocationId, onSelectLocation }: WorldMapProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [activeViewId, setActiveViewId] = useState<MapView['id']>(() => viewForLocation(activePlayer.currentLocationId).id);
  const dragState = useRef<{ startX: number; startY: number; panX: number; panY: number } | null>(null);

  const activeCharacter = getCharacter(activePlayer.characterId);

  const locations = useMemo(() => Object.values(LOCATIONS), []);
  const activeView = MAP_VIEWS.find((view) => view.id === activeViewId) ?? MAP_VIEWS[0];
  const visibleLocations = useMemo(
    () => locations.filter((location) => activeView.regions.some((region) => region === location.region)),
    [locations, activeView],
  );

  const mapViewport = useMemo(() => {
    const points = visibleLocations.map((location) => project(location.coordinates.lon, location.coordinates.lat));
    const xs = points.map(([x]) => x);
    const ys = points.map(([, y]) => y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const contentWidth = Math.max(maxX - minX, 80);
    const contentHeight = Math.max(maxY - minY, 80);
    const paddingX = Math.max(contentWidth * 0.18, 35);
    const paddingY = Math.max(contentHeight * 0.28, 35);
    return {
      x: minX - paddingX,
      y: minY - paddingY,
      width: contentWidth + paddingX * 2,
      height: contentHeight + paddingY * 2,
    };
  }, [visibleLocations]);

  const locationMeta = useMemo(() => {
    return new Map(
      locations.map((loc) => {
        const active = isLocationActiveForYear(loc, activePlayer.currentYear);
        const travel = evaluateTravel(activePlayer, loc.id);
        const canonical = isCanonicalDestination(activeCharacter, loc.id);
        return [loc.id, { active, travel, canonical }];
      }),
    );
  }, [locations, activePlayer, activeCharacter]);

  function handleWheel(e: WheelEvent<SVGSVGElement>) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + delta)));
  }

  function handlePointerDown(e: PointerEvent<SVGSVGElement>) {
    dragState.current = { startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y };
    (e.target as Element).setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: PointerEvent<SVGSVGElement>) {
    if (!dragState.current) return;
    const dx = (e.clientX - dragState.current.startX) / zoom;
    const dy = (e.clientY - dragState.current.startY) / zoom;
    setPan({ x: dragState.current.panX + dx, y: dragState.current.panY + dy });
  }

  function handlePointerUp() {
    dragState.current = null;
  }

  function resetView() {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }

  function selectView(view: MapView) {
    setActiveViewId(view.id);
    resetView();
  }

  function isInActiveView(locationId: string) {
    return activeView.regions.some((region) => region === LOCATIONS[locationId].region);
  }

  const viewCenterX = mapViewport.x + mapViewport.width / 2;
  const viewCenterY = mapViewport.y + mapViewport.height / 2;

  return (
    <div className="world-map" role="group" aria-label="Interactive world map game board">
      <div className="world-map__tabs" role="tablist" aria-label="Map region">
        {MAP_VIEWS.map((view) => (
          <button
            key={view.id}
            type="button"
            role="tab"
            aria-selected={activeView.id === view.id}
            className={`world-map__tab${activeView.id === view.id ? ' is-active' : ''}`}
            onClick={() => selectView(view)}
          >
            {view.label}
          </button>
        ))}
      </div>
      <div className="world-map__controls">
        <button type="button" className="btn" onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + 0.5))} aria-label="Zoom in">
          +
        </button>
        <button type="button" className="btn" onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - 0.5))} aria-label="Zoom out">
          −
        </button>
        <button type="button" className="btn" onClick={resetView} aria-label="Reset map view">
          Reset view
        </button>
      </div>
      <svg
        viewBox={`${mapViewport.x} ${mapViewport.y} ${mapViewport.width} ${mapViewport.height}`}
        className="world-map__svg"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        role="img"
        aria-label={`${activeView.label} map showing historical scientific institutions and travel routes`}
      >
        <rect x={0} y={0} width={MAP_WIDTH} height={MAP_HEIGHT} className="world-map__ocean" />
        <g transform={`translate(${pan.x * zoom + viewCenterX * (1 - zoom)}, ${pan.y * zoom + viewCenterY * (1 - zoom)}) scale(${zoom})`}>
          <path d={graticulePath} className="world-map__graticule" />
          <path d={landPath} className="world-map__land" />

          {/* Biography trails: faint lines for every player's past route */}
          {players.map((p) => {
            const char = getCharacter(p.characterId);
            return (
              <g key={`trail-${p.id}`} className="world-map__trail">
                {p.routeHistory.slice(1).map((stop, i) => {
                  const prev = p.routeHistory[i];
                  if (!isInActiveView(prev.locationId) || !isInActiveView(stop.locationId)) return null;
                  const [x1, y1] = project(LOCATIONS[prev.locationId].coordinates.lon, LOCATIONS[prev.locationId].coordinates.lat);
                  const [x2, y2] = project(LOCATIONS[stop.locationId].coordinates.lon, LOCATIONS[stop.locationId].coordinates.lat);
                  return (
                    <path
                      key={i}
                      d={curvedPath(x1, y1, x2, y2)}
                      stroke={char.color}
                      className="world-map__route"
                      style={{ opacity: p.id === activePlayer.id ? 0.75 : 0.35 }}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Canonical route preview for the active character (subtle) */}
          <g className="world-map__canon-route">
            {activeCharacter.canonicalRoute.slice(1).map((stop: (typeof activeCharacter.canonicalRoute)[number], i: number) => {
              const prev = activeCharacter.canonicalRoute[i];
              if (!isInActiveView(prev.locationId) || !isInActiveView(stop.locationId)) return null;
              const [x1, y1] = project(LOCATIONS[prev.locationId].coordinates.lon, LOCATIONS[prev.locationId].coordinates.lat);
              const [x2, y2] = project(LOCATIONS[stop.locationId].coordinates.lon, LOCATIONS[stop.locationId].coordinates.lat);
              return <path key={i} d={curvedPath(x1, y1, x2, y2)} className="world-map__canon-line" />;
            })}
          </g>

          {visibleLocations.map((loc) => (
            <LocationMarker
              key={loc.id}
              location={loc}
              meta={locationMeta.get(loc.id)!}
              selected={selectedLocationId === loc.id}
              isCurrent={activePlayer.currentLocationId === loc.id}
              occupants={players.filter((p) => p.currentLocationId === loc.id)}
              onSelect={() => onSelectLocation(loc.id)}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

function LocationMarker({
  location,
  meta,
  selected,
  isCurrent,
  occupants,
  onSelect,
}: {
  location: Location;
  meta: { active: boolean; travel: ReturnType<typeof evaluateTravel>; canonical: boolean };
  selected: boolean;
  isCurrent: boolean;
  occupants: PlayerState[];
  onSelect: () => void;
}) {
  const [x, y] = project(location.coordinates.lon, location.coordinates.lat);
  const reachable = meta.travel.allowed;
  const classNames = [
    'world-map__location',
    meta.active ? 'is-active-era' : 'is-inactive-era',
    reachable ? 'is-reachable' : 'is-locked',
    selected ? 'is-selected' : '',
    isCurrent ? 'is-current' : '',
    meta.canonical ? 'is-canonical' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <g
      className={classNames}
      transform={`translate(${x}, ${y})`}
      tabIndex={0}
      role="button"
      data-testid={`map-location-${location.id}`}
      aria-label={`${location.name}${meta.canonical ? ' (canonically significant)' : ''}${!meta.active ? ' — not active in this period' : ''}`}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <title>{location.name}</title>
      <circle r={10} className="world-map__location-hit-area" />
      {meta.canonical && <circle r={7.5} className="world-map__location-halo" />}
      <circle r={4.2} className="world-map__location-dot" />
      {occupants.map((p, i) => {
        const char = getCharacterColorSafe(p.characterId);
        const angle = (i / Math.max(occupants.length, 1)) * Math.PI * 2;
        const ox = Math.cos(angle) * 8;
        const oy = Math.sin(angle) * 8;
        return <circle key={p.id} cx={ox} cy={oy} r={3.4} fill={char} className="world-map__token" />;
      })}
      {isCurrent && <circle r={9} className="world-map__current-ring" />}
      <g className="world-map__label" aria-hidden="true">
        <rect
          x={-(location.name.length * 3.5 + 8) / 2}
          y={-19}
          width={location.name.length * 3.5 + 8}
          height={11}
          rx={2.5}
        />
        <text x={0} y={-11.5} textAnchor="middle">
          {location.name}
        </text>
      </g>
    </g>
  );
}

function getCharacterColorSafe(id: CharacterId): string {
  try {
    return getCharacter(id).color;
  } catch {
    return '#b6903f';
  }
}
