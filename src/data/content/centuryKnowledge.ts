import type { CenturyKnowledgeEntry } from '../../types';

// Shared chronological knowledge board. A player's project can only draw on
// an entry once that entry's historical year has passed for their own
// timeline. If no player publishes it by `deadlineYear`, "The Century Does
// Not Wait" fires: an NPC researcher publishes it instead, downstream
// projects remain unlocked, but no player receives its Legacy/Canon points.
export const CENTURY_KNOWLEDGE: Record<string, CenturyKnowledgeEntry> = {
  quantizedAtom: {
    id: 'quantizedAtom',
    name: 'Quantized Atomic Structure',
    description: 'Bohr’s 1913 model of the atom with quantized electron orbits, reconciling Rutherford’s nuclear atom with quantum theory.',
    earliestHistoricalYear: 1913,
    deadlineYear: 1916,
    canonicalCharacterId: 'bohr',
    sourceId: 'bohr',
    npcFallbackName: 'the wider Rutherford–Bohr research circle',
  },
  specialRelativity: {
    id: 'specialRelativity',
    name: 'Special Relativity',
    description: 'Einstein’s 1905 theory of space, time, and the invariance of the speed of light.',
    earliestHistoricalYear: 1905,
    deadlineYear: 1908,
    canonicalCharacterId: 'einstein',
    sourceId: 'einstein',
    npcFallbackName: 'the European theoretical-physics community',
  },
  generalRelativity: {
    id: 'generalRelativity',
    name: 'General Relativity',
    description: 'The geometric theory of gravitation completed in Berlin in 1915, developed alongside Hilbert’s parallel invariant-theoretic work.',
    earliestHistoricalYear: 1915,
    deadlineYear: 1917,
    canonicalCharacterId: 'einstein',
    sourceId: 'einstein',
    npcFallbackName: 'the Berlin–Göttingen physics circle',
  },
  noetherTheorem: {
    id: 'noetherTheorem',
    name: "Noether's Theorem",
    description: 'The 1918 proof that every differentiable symmetry of a physical system corresponds to a conservation law, unifying invariance and conservation.',
    earliestHistoricalYear: 1918,
    deadlineYear: 1922,
    canonicalCharacterId: 'noether',
    sourceId: 'noether',
    npcFallbackName: 'the Göttingen mathematical school',
  },
  incompleteness: {
    id: 'incompleteness',
    name: "Gödel's Incompleteness Theorems",
    description: 'The 1931 proof that any sufficiently powerful consistent formal system contains true statements it cannot prove, reshaping Hilbert’s formalist program.',
    earliestHistoricalYear: 1930,
    deadlineYear: 1933,
    canonicalCharacterId: 'godel',
    sourceId: 'godel',
    npcFallbackName: 'the Vienna Circle and Königsberg conference proceedings',
  },
  computability: {
    id: 'computability',
    name: 'Turing Computability and the Universal Machine',
    description: 'Turing’s 1936 formalization of mechanical computation and the concept of a universal machine that can simulate any other.',
    earliestHistoricalYear: 1936,
    deadlineYear: 1939,
    canonicalCharacterId: 'turing',
    sourceId: 'turingBletchley',
    npcFallbackName: 'the Cambridge–Princeton logic community',
  },
  nuclearFission: {
    id: 'nuclearFission',
    name: 'Theoretical Understanding of Nuclear Fission',
    description: 'The 1938–1939 theoretical explanation of uranium fission, drawing on Bohr’s liquid-drop model of the nucleus.',
    earliestHistoricalYear: 1939,
    deadlineYear: 1941,
    canonicalCharacterId: 'bohr',
    sourceId: 'bohrManhattan',
    npcFallbackName: 'the international nuclear-physics community',
  },
  storedProgramConcept: {
    id: 'storedProgramConcept',
    name: 'Stored-Program Computer Architecture',
    description: 'The 1945 architectural concept of storing both instructions and data in a single addressable memory, enabling general-purpose electronic computers.',
    earliestHistoricalYear: 1945,
    deadlineYear: 1949,
    canonicalCharacterId: 'vonneumann',
    sourceId: 'vonneumann',
    npcFallbackName: 'the transatlantic computing-engineering community',
  },
  dnaDoubleHelixEvidence: {
    id: 'dnaDoubleHelixEvidence',
    name: 'X-ray Diffraction Evidence for DNA Structure',
    description: 'Franklin’s 1952–1953 X-ray diffraction images (including Photograph 51) providing the crucial structural evidence for the DNA double helix.',
    earliestHistoricalYear: 1952,
    deadlineYear: 1954,
    canonicalCharacterId: 'franklin',
    sourceId: 'franklin',
    npcFallbackName: 'the King’s College London and Cambridge molecular-biology groups',
  },
};

export type CenturyKnowledgeId = keyof typeof CENTURY_KNOWLEDGE;
