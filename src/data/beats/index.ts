import type { StoryBeat } from '../../types/story';
import { TURING_BEATS } from './turing';
import { EINSTEIN_BEATS } from './einstein';
import { CURIE_BEATS } from './curie';
import { RAMANUJAN_BEATS } from './ramanujan';
import { NOETHER_BEATS } from './noether';
import { JOHNSON_BEATS } from './johnson';
import { BOHR_BEATS } from './bohr';
import { FRANKLIN_BEATS } from './franklin';
import { GODEL_BEATS } from './godel';
import { HILBERT_BEATS } from './hilbert';
import { OPPENHEIMER_BEATS } from './oppenheimer';
import { VONNEUMANN_BEATS } from './vonneumann';

/** Every short beat in the game, in no particular order. */
export const BEATS: StoryBeat[] = [...VONNEUMANN_BEATS, ...JOHNSON_BEATS, ...OPPENHEIMER_BEATS, ...GODEL_BEATS, ...HILBERT_BEATS, ...BOHR_BEATS, ...FRANKLIN_BEATS, ...CURIE_BEATS, ...EINSTEIN_BEATS, ...RAMANUJAN_BEATS, ...NOETHER_BEATS, ...TURING_BEATS];
