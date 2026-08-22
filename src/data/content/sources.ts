import type { HistoricalSource } from '../../types';

// Every biography, milestone, event, project, collaborator, institution, and
// location note in this game cites one of these sources. No quotations are
// invented; all URLs were supplied as the authoritative starting bibliography.
export const SOURCES: Record<string, HistoricalSource> = {
  curie: {
    id: 'curie',
    label: 'Nobel Prize — "Marie Curie" (Women Who Changed Science)',
    url: 'https://www.nobelprize.org/stories/women-who-changed-science/marie-curie/',
  },
  einstein: {
    id: 'einstein',
    label: 'Nobel Prize — Albert Einstein, Biographical',
    url: 'https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/',
  },
  noether: {
    id: 'noether',
    label: 'MacTutor — Emmy Noether',
    url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/',
  },
  ramanujan: {
    id: 'ramanujan',
    label: 'MacTutor — Srinivasa Ramanujan',
    url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Ramanujan/',
  },
  oppenheimer: {
    id: 'oppenheimer',
    label: 'Institute for Advanced Study — Oppenheimer Legacy',
    url: 'https://www.ias.edu/oppenheimer-legacy',
  },
  hilbert: {
    id: 'hilbert',
    label: 'MacTutor — David Hilbert',
    url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Hilbert/',
  },
  johnson: {
    id: 'johnson',
    label: 'NASA Langley — Katherine Johnson Biography',
    url: 'https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-biography/',
  },
  godel: {
    id: 'godel',
    label: 'Institute for Advanced Study — Kurt Gödel: Life, Work and Legacy',
    url: 'https://www.ias.edu/kurt-g%C3%B6del-life-work-and-legacy',
  },
  vonneumann: {
    id: 'vonneumann',
    label: 'Institute for Advanced Study — John von Neumann',
    url: 'https://www.ias.edu/von-neumann',
  },
  franklin: {
    id: 'franklin',
    label: "King's College London — Photo 51 and the Discovery of DNA",
    url: 'https://www.kcl.ac.uk/photo-51-and-the-discovery-of-dna',
  },
  franklinLater: {
    id: 'franklinLater',
    label: 'Birkbeck, University of London — Rosalind Franklin Lecture',
    url: 'https://www.bbk.ac.uk/annual-events/rosalind-franklin-lecture',
  },
  turingBletchley: {
    id: 'turingBletchley',
    label: 'Bletchley Park — 10 Things to Know About Alan Turing',
    url: 'https://www.bletchleypark.org.uk/our-story/10-things-to-know-about-alan-turing/',
  },
  turingNpl: {
    id: 'turingNpl',
    label: 'National Physical Laboratory — Alan Turing',
    url: 'https://www.npl.co.uk/about-us/history/famous/alan-turing',
  },
  bohr: {
    id: 'bohr',
    label: 'Nobel Prize — Niels Bohr, Biographical',
    url: 'https://www.nobelprize.org/prizes/physics/1922/bohr/biographical/',
  },
  bohrInstitute: {
    id: 'bohrInstitute',
    label: 'Niels Bohr Institute — History of NBI',
    url: 'https://nbi.ku.dk/english/about/the-history-of-nbi/',
  },
  bohrManhattan: {
    id: 'bohrManhattan',
    label: 'Atomic Heritage Foundation — Niels Bohr Profile',
    url: 'https://ahf.nuclearmuseum.org/ahf/profile/niels-bohr/',
  },
};

export type SourceId = keyof typeof SOURCES;
