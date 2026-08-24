export interface MapView {
  id: string;
  label: string;
  locationIds: readonly string[];
  overview?: boolean;
}

export interface MapRegionGroup {
  id: string;
  label: string;
  views: readonly MapView[];
}

const ENGLAND = ['cambridgeUK', 'manchesterUK', 'london', 'bletchleyPark', 'teddington'] as const;
const CENTRAL_EUROPE = [
  'paris',
  'zurich',
  'bern',
  'prague',
  'berlin',
  'erlangen',
  'gottingen',
  'vienna',
  'brno',
  'budapest',
] as const;
const NORTH_AND_EAST_EUROPE = ['warsaw', 'konigsberg', 'moscow', 'copenhagen', 'stockholm'] as const;
const EUROPE = [...ENGLAND, ...CENTRAL_EUROPE, ...NORTH_AND_EAST_EUROPE] as const;

const NORTHEAST_US = ['newYork', 'cambridgeMA', 'princeton', 'brynMawr', 'washingtonDC'] as const;
const APPALACHIA_AND_VIRGINIA = ['whiteSulphurSprings', 'instituteWV', 'morgantown', 'hamptonLangley'] as const;
const WESTERN_US = ['berkeley', 'pasadena', 'losAlamos'] as const;
const FLORIDA = ['capeCanaveral'] as const;
const UNITED_STATES = [...NORTHEAST_US, ...APPALACHIA_AND_VIRGINIA, ...WESTERN_US, ...FLORIDA] as const;

const SOUTH_ASIA = ['kumbakonam', 'madras'] as const;

export const MAP_REGION_GROUPS: readonly MapRegionGroup[] = [
  {
    id: 'europe',
    label: 'Europe',
    views: [
      { id: 'europe-overview', label: 'Overview', locationIds: EUROPE, overview: true },
      { id: 'england', label: 'England', locationIds: ENGLAND },
      { id: 'central-europe', label: 'Central Europe', locationIds: CENTRAL_EUROPE },
      { id: 'north-east-europe', label: 'North & East', locationIds: NORTH_AND_EAST_EUROPE },
    ],
  },
  {
    id: 'united-states',
    label: 'United States',
    views: [
      { id: 'us-overview', label: 'Overview', locationIds: UNITED_STATES, overview: true },
      { id: 'northeast-us', label: 'Northeast & D.C.', locationIds: NORTHEAST_US },
      { id: 'appalachia-virginia', label: 'Appalachia & Virginia', locationIds: APPALACHIA_AND_VIRGINIA },
      { id: 'western-us', label: 'West', locationIds: WESTERN_US },
      { id: 'florida', label: 'Florida', locationIds: FLORIDA },
    ],
  },
  {
    id: 'south-asia',
    label: 'South Asia',
    views: [{ id: 'south-asia', label: 'South Asia', locationIds: SOUTH_ASIA }],
  },
];

export const MAP_VIEWS: readonly MapView[] = MAP_REGION_GROUPS.flatMap((group) => group.views);

export function mapRegionForLocation(locationId: string): MapRegionGroup {
  return (
    MAP_REGION_GROUPS.find((group) => group.views.some((view) => view.locationIds.includes(locationId))) ??
    MAP_REGION_GROUPS[0]
  );
}

export function detailMapViewForLocation(locationId: string): MapView {
  return (
    MAP_VIEWS.find((view) => !view.overview && view.locationIds.includes(locationId)) ??
    mapRegionForLocation(locationId).views[0]
  );
}

export function overviewMapViewForLocation(locationId: string): MapView {
  const region = mapRegionForLocation(locationId);
  return region.views.find((view) => view.overview) ?? region.views[0];
}
