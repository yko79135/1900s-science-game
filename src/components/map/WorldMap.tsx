import { useMemo, useRef, useState, type PointerEvent, type WheelEvent } from 'react';
import type { CharacterId, Location, PlayerState } from '../../types';
import { LOCATIONS } from '../../data/content';
import { evaluateTravel, getCharacter, isCanonicalDestination, isLocationActiveForYear } from '../../engine/rules';
import { MAP_HEIGHT, MAP_WIDTH, curvedPath, graticulePath, landPath, project } from './geo';
import { detailMapViewForLocation, MAP_REGION_GROUPS, MAP_VIEWS, overviewMapViewForLocation, type MapRegionGroup, type MapView } from './mapViews';
import './worldmap.css';

export interface WorldMapProps {
  players: PlayerState[];
  activePlayer: PlayerState;
  selectedLocationId: string | null;
  onSelectLocation: (id: string) => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const CITY_FOCUS_ZOOM = 2.5;

function viewportForLocations(locations: Location[]) {
  const points = locations.map((location) => project(location.coordinates.lon, location.coordinates.lat));
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const singleLocation = points.length === 1;
  const contentWidth = singleLocation ? 80 : Math.max(maxX - minX, 4);
  const contentHeight = singleLocation ? 80 : Math.max(maxY - minY, 4);
  const minimumPadding = singleLocation ? 35 : 4;
  const paddingX = Math.max(contentWidth * 0.18, minimumPadding);
  const paddingY = Math.max(contentHeight * 0.28, minimumPadding);
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  return {
    x: centerX - contentWidth / 2 - paddingX,
    y: centerY - contentHeight / 2 - paddingY,
    width: contentWidth + paddingX * 2,
    height: contentHeight + paddingY * 2,
  };
}

export function WorldMap({ players, activePlayer, selectedLocationId, onSelectLocation }: WorldMapProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [activeViewId, setActiveViewId] = useState(() => overviewMapViewForLocation(activePlayer.currentLocationId).id);
  const dragState = useRef<{ startX: number; startY: number; panX: number; panY: number } | null>(null);

  const activeCharacter = getCharacter(activePlayer.characterId);

  const locations = useMemo(() => Object.values(LOCATIONS), []);
  const activeView = MAP_VIEWS.find((view) => view.id === activeViewId) ?? MAP_VIEWS[0];
  const activeRegion = MAP_REGION_GROUPS.find((region) => region.views.some((view) => view.id === activeView.id)) ?? MAP_REGION_GROUPS[0];
  const visibleLocations = useMemo(
    () => locations.filter((location) => activeView.locationIds.includes(location.id)),
    [locations, activeView],
  );

  const mapViewport = useMemo(() => viewportForLocations(visibleLocations), [visibleLocations]);

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

  function selectRegion(region: MapRegionGroup) {
    selectView(region.views[0]);
  }

  function jumpToCurrentCity() {
    const locationId = activePlayer.currentLocationId;
    const location = LOCATIONS[locationId];
    const targetView = detailMapViewForLocation(locationId);
    const targetLocations = locations.filter((candidate) => targetView.locationIds.includes(candidate.id));
    const targetViewport = viewportForLocations(targetLocations);
    const targetCenterX = targetViewport.x + targetViewport.width / 2;
    const targetCenterY = targetViewport.y + targetViewport.height / 2;
    const [locationX, locationY] = project(location.coordinates.lon, location.coordinates.lat);

    setActiveViewId(targetView.id);
    setZoom(CITY_FOCUS_ZOOM);
    setPan({ x: targetCenterX - locationX, y: targetCenterY - locationY });
    onSelectLocation(locationId);
  }

  function isInActiveView(locationId: string) {
    return activeView.locationIds.includes(locationId);
  }

  const viewCenterX = mapViewport.x + mapViewport.width / 2;
  const viewCenterY = mapViewport.y + mapViewport.height / 2;
  const markerScale = Math.min(1, Math.max(mapViewport.width / MAP_WIDTH, mapViewport.height / MAP_HEIGHT));

  return (
    <div className="world-map" role="group" aria-label="Interactive world map game board">
      <div className="world-map__navigation">
        <div className="world-map__tabs" role="tablist" aria-label="Map region">
          {MAP_REGION_GROUPS.map((region) => (
            <button
              key={region.id}
              type="button"
              role="tab"
              aria-selected={activeRegion.id === region.id}
              aria-controls="world-map-surface"
              className={`world-map__tab${activeRegion.id === region.id ? ' is-active' : ''}`}
              onClick={() => selectRegion(region)}
            >
              {region.label}
            </button>
          ))}
        </div>
        {activeRegion.views.length > 1 && (
          <div className="world-map__tabs world-map__tabs--detail" role="tablist" aria-label={`${activeRegion.label} map area`}>
            {activeRegion.views.map((view) => (
              <button
                key={view.id}
                type="button"
                role="tab"
                aria-selected={activeView.id === view.id}
                aria-controls="world-map-surface"
                className={`world-map__tab world-map__tab--detail${activeView.id === view.id ? ' is-active' : ''}`}
                onClick={() => selectView(view)}
              >
                {view.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="world-map__hud" data-testid="map-hud">
        <div className="world-map__year" role="status" aria-live="polite" aria-label={`Current year ${activePlayer.currentYear}`}>
          <span className="world-map__year-label">Current year</span>
          <strong className="world-map__year-value" data-testid="current-year-display">
            {activePlayer.currentYear}
          </strong>
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
          <button
            type="button"
            className="btn"
            data-testid="jump-to-current-city-btn"
            onClick={jumpToCurrentCity}
            aria-label={`Jump to current city: ${LOCATIONS[activePlayer.currentLocationId]?.name ?? activePlayer.currentLocationId}`}
          >
            My City
          </button>
        </div>
      </div>
      <svg
        id="world-map-surface"
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
              markerScale={markerScale}
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
  markerScale,
  onSelect,
}: {
  location: Location;
  meta: { active: boolean; travel: ReturnType<typeof evaluateTravel>; canonical: boolean };
  selected: boolean;
  isCurrent: boolean;
  occupants: PlayerState[];
  markerScale: number;
  onSelect: () => void;
}) {
  const [x, y] = project(location.coordinates.lon, location.coordinates.lat);
  const labelWidth = location.name.length * 4.9 + 14;
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
      transform={`translate(${x}, ${y}) scale(${markerScale})`}
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
      <circle r={14} className="world-map__location-hit-area" />
      {meta.canonical && <circle r={10} className="world-map__location-halo" />}
      <circle r={6} className="world-map__location-dot" />
      {occupants.map((p, i) => {
        const char = getCharacterColorSafe(p.characterId);
        const angle = (i / Math.max(occupants.length, 1)) * Math.PI * 2;
        const ox = Math.cos(angle) * 10.5;
        const oy = Math.sin(angle) * 10.5;
        return <circle key={p.id} cx={ox} cy={oy} r={4.1} fill={char} className="world-map__token" />;
      })}
      {isCurrent && <circle r={12} className="world-map__current-ring" />}
      <g className="world-map__label" aria-hidden="true">
        <rect x={-labelWidth / 2} y={-30} width={labelWidth} height={17} rx={3} />
        <text x={0} y={-18.2} textAnchor="middle">
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
