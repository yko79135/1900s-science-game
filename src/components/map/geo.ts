import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, Geometry } from 'geojson';
import landTopology from '../../data/geo/land-110m.json';
import { LOCATIONS } from '../../data/content/locations';

export const MAP_WIDTH = 960;
export const MAP_HEIGHT = 500;
const MAP_PADDING = 36;

const topology = landTopology as unknown as Topology;
const landObject = topology.objects.land as GeometryCollection;

export const landFeatures = feature(topology, landObject) as unknown as FeatureCollection<Geometry>;

// Fit the map to the playable locations rather than the full globe. The game has
// no destinations in the southern hemisphere, eastern Asia, or the Pacific, so
// including those areas needlessly squeezed the location markers together.
const locationBounds = {
  type: 'MultiPoint' as const,
  coordinates: Object.values(LOCATIONS).map(({ coordinates }) => [coordinates.lon, coordinates.lat]),
};

export const projection = geoNaturalEarth1()
  .fitExtent(
    [
      [MAP_PADDING, MAP_PADDING],
      [MAP_WIDTH - MAP_PADDING, MAP_HEIGHT - MAP_PADDING],
    ],
    locationBounds,
  )
  .clipExtent([
    [0, 0],
    [MAP_WIDTH, MAP_HEIGHT],
  ]);

export const pathGenerator = geoPath(projection);

export const landPath = pathGenerator(landFeatures) ?? '';

export const graticulePath = pathGenerator(geoGraticule10()) ?? '';

export function project(lon: number, lat: number): [number, number] {
  return projection([lon, lat]) ?? [0, 0];
}

/** A gently-arced quadratic bezier between two projected points, for travel routes. */
export function curvedPath(x1: number, y1: number, x2: number, y2: number, bend = 0.18): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = mx - dy * bend;
  const cy = my + dx * bend;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}
