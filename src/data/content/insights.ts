import type { InsightDefinition } from '../../types';

/**
 * Named, reusable pieces of scientific understanding. Routes are evaluated by
 * the rules engine; ordering is data-only and has no effect on acquisition.
 */
export const INSIGHTS: Record<string, InsightDefinition> = {
  'physical-intuition': {
    id: 'physical-intuition',
    name: 'Physical Intuition',
    description: 'A habit of stripping a physical problem down to a revealing conceptual thought experiment.',
    leads: ['conceptual puzzles', 'thought experiments', 'theoretical discussion'],
    acquisitionRoutes: [{ type: 'study', token: 'theory', threshold: 1 }],
  },
  'light-quanta': {
    id: 'light-quanta',
    name: 'Light Quanta',
    description: 'The idea that light can exchange energy in discrete packets rather than only as a continuous wave.',
    leads: ['precision work with light and energy', 'sustained theoretical study', 'technical work in Bern'],
    acquisitionRoutes: [
      { type: 'location', locationId: 'bern' },
      { type: 'study', token: 'theory', threshold: 2 },
    ],
  },
  'molecular-motion': {
    id: 'molecular-motion',
    name: 'Molecular Motion',
    description: 'A statistical understanding of how invisible molecular collisions produce observable motion.',
    leads: ['statistical mechanics', 'careful experimental evidence', 'independent theoretical study'],
    acquisitionRoutes: [
      { type: 'study', token: 'theory', threshold: 2 },
      { type: 'study', token: 'evidence', threshold: 2 },
    ],
  },
  'relativity-of-simultaneity': {
    id: 'relativity-of-simultaneity',
    name: 'Relativity of Simultaneity',
    description: 'The recognition that spatially separated events need not be simultaneous for every observer.',
    leads: ['clock-synchronization problems', 'the Bern technical community', 'persistent theoretical study'],
    acquisitionRoutes: [
      { type: 'location', locationId: 'bern' },
      { type: 'study', token: 'theory', threshold: 3 },
      { type: 'collaborator', collaboratorId: 'minkowski' },
    ],
  },
  'equivalence-principle': {
    id: 'equivalence-principle',
    name: 'Equivalence Principle',
    description: 'The insight that uniform acceleration and a uniform gravitational field are locally indistinguishable.',
    leads: ['thought experiments about falling observers', 'work extending special relativity', 'theoretical study'],
    acquisitionRoutes: [
      { type: 'projectCompletion', projectId: 'einstein-special-relativity' },
      { type: 'study', token: 'theory', threshold: 5 },
      { type: 'location', locationId: 'zurich' },
    ],
  },
  'tensor-geometry': {
    id: 'tensor-geometry',
    name: 'Tensor Geometry',
    description: 'The differential-geometric language needed to express curvature and gravitational field equations.',
    leads: ['mathematicians in Zürich', 'the Göttingen mathematical community', 'advanced mathematical study'],
    acquisitionRoutes: [
      { type: 'collaborator', collaboratorId: 'marcelGrossmann' },
      { type: 'collaborator', collaboratorId: 'hilbertCollab' },
      { type: 'characterEncounter', characterId: 'hilbert' },
      { type: 'study', token: 'proof', threshold: 4 },
      { type: 'centuryKnowledge', knowledgeId: 'generalRelativity' },
    ],
  },
  'advanced-mathematics': {
    id: 'advanced-mathematics',
    name: 'Advanced Mathematics',
    description: 'A broad command of proof, abstraction, and mathematical structures.',
    leads: ['formal mathematical education', 'mathematical centers such as Göttingen', 'repeated proof work'],
    acquisitionRoutes: [
      { type: 'location', locationId: 'gottingen' },
      { type: 'study', token: 'proof', threshold: 2 },
    ],
  },
  'axiomatic-method': {
    id: 'axiomatic-method',
    name: 'Axiomatic Method',
    description: 'The perspective that a mathematical field can be rebuilt from explicit primitives and axioms.',
    leads: ['work in invariant theory', 'Göttingen geometry seminars', 'advanced proof study'],
    acquisitionRoutes: [
      { type: 'projectCompletion', projectId: 'hilbert-finiteness-theorem' },
      { type: 'location', locationId: 'gottingen' },
      { type: 'study', token: 'proof', threshold: 3 },
      { type: 'collaborator', collaboratorId: 'minkowski' },
    ],
  },
  'experimental-method': {
    id: 'experimental-method',
    name: 'Experimental Method',
    description: 'The discipline of controlling conditions, calibrating apparatus, and separating signal from noise.',
    leads: ['laboratory training', 'repeated evidence work', 'instrument building'],
    acquisitionRoutes: [
      { type: 'study', token: 'evidence', threshold: 2 },
      { type: 'study', token: 'engineering', threshold: 2 },
    ],
  },
  'xray-diffraction': {
    id: 'xray-diffraction',
    name: 'X-ray Diffraction',
    description: 'The technique and interpretive skill needed to infer structure from X-ray diffraction patterns.',
    leads: ['Paris crystallography laboratories', 'experienced X-ray collaborators', 'advanced evidence and apparatus work'],
    acquisitionRoutes: [
      { type: 'projectCompletion', projectId: 'franklin-xray-technique' },
      { type: 'location', locationId: 'paris' },
      { type: 'collaborator', collaboratorId: 'wilkins' },
      { type: 'study', token: 'evidence', threshold: 4 },
      { type: 'study', token: 'engineering', threshold: 3 },
      { type: 'centuryKnowledge', knowledgeId: 'dnaDoubleHelixEvidence' },
    ],
  },
};

export type InsightId = keyof typeof INSIGHTS;
