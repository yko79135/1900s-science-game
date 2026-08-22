// Deterministic seeded PRNG (mulberry32) so games are reproducible and tests
// stay deterministic. Never use Math.random() in game rules.

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface SeededRng {
  seed: number;
  cursor: number;
}

/**
 * Advances a seeded RNG cursor deterministically and returns a float in [0, 1).
 * Because GameState only stores {seed, cursor}, this same sequence can be
 * replayed exactly from a saved game.
 */
export function nextRandom(rng: SeededRng): { value: number; cursor: number } {
  const gen = mulberry32(rng.seed ^ (rng.cursor * 0x9e3779b9));
  const value = gen();
  return { value, cursor: rng.cursor + 1 };
}

export function nextInt(rng: SeededRng, maxExclusive: number): { value: number; cursor: number } {
  const { value, cursor } = nextRandom(rng);
  return { value: Math.floor(value * maxExclusive), cursor };
}

export function pick<T>(rng: SeededRng, items: readonly T[]): { value: T; cursor: number } {
  const { value: index, cursor } = nextInt(rng, items.length);
  return { value: items[index], cursor };
}
