# The Shape of a Century: Lives, Ideas, Consequences

A historically grounded strategy board game for the web. Players choose one of
twelve twentieth-century scientists and mathematicians and guide them through
six Life Chapters — Formation, Education, Entry into the Profession,
Breakthrough, Crisis and Responsibility, and Legacy — moving between real
historical cities and institutions on an interactive world map, choosing
research, collaborators, employment, and how to respond to the century's
crises.

## Roster

Marie Curie · Albert Einstein · Emmy Noether · Srinivasa Ramanujan ·
J. Robert Oppenheimer · David Hilbert · Katherine Johnson · Kurt Gödel ·
John von Neumann · Rosalind Franklin · Alan Turing · Niels Bohr

## Running the game

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build (tsc -b && vite build)
npm run preview   # preview the production build
npm test          # unit tests (Vitest)
npm run e2e       # end-to-end playthrough (Playwright)
npm run lint      # oxlint
```

## Live story illustrations

Major story scenes can request a historical illustration from the same-origin
`POST /api/story-image` Vercel Function. The browser sends only the scene and
variant identifiers plus bounded timeline context. The function resolves the
authoritative `StoryImageSpec`, applies the campaign-wide PG-13 prompt rules,
and calls `openai/gpt-image-2` through Vercel AI Gateway. It never accepts a
browser-authored prompt.

Vercel deployments use the automatically managed `VERCEL_OIDC_TOKEN` by
default. If OIDC is not enabled for the project, configure
`AI_GATEWAY_API_KEY` as a server-only Vercel environment variable. Never add a
`VITE_`-prefixed gateway credential.

Generated data URLs are kept outside game saves: an in-memory map prevents
duplicate calls during a session and Cache Storage persists exact story
contexts across refreshes. If generation, storage, or image decoding fails,
the fixed-size fallback artwork remains visible and gameplay continues.

## Architecture

- **`src/types/`** — all core domain types (`Character`, `Location`,
  `ResearchProject`, `ContextCard`, `HistoricalEvent`, `PlayerState`,
  `GameState`, etc.), independent of React.
- **`src/data/content/`** — every biography, location, project, context card,
  historical event, collaborator, and Century Knowledge Board entry, each
  with a `sourceId` pointing at a real, cited source
  (`src/data/content/sources.ts`) and a `classification` of `Documented`,
  `Plausible`, or `Speculative`. One file per character under
  `characters/`. Nothing historical is hard-coded into UI components.
- **`src/data/geo/land-110m.json`** — bundled Natural Earth land geometry
  (via the `world-atlas` package), rendered locally with `d3-geo` /
  `topojson-client`. No map tiles are ever fetched from the network.
- **`src/engine/`** — the pure game engine, with no React dependency:
  - `rng.ts` — a seeded PRNG (mulberry32) so games are reproducible.
  - `rules.ts` — pure functions for travel eligibility, project
    prerequisites, canon scoring, timeline overlap, the Century Knowledge
    Board's "Century Does Not Wait" rule, consequence accumulation, and
    final legacy scoring.
  - `reducer.ts` — a typed action/reducer state machine (`GameAction` →
    `GameState`) that is the single source of truth for gameplay. UI
    components only dispatch actions; no game rules live in click handlers.
  - `save.ts` — localStorage save/load, JSON export/import, and a versioned
    save-schema migration path.
- **`src/components/`** — React presentation layer: title/setup/character
  select screens, the interactive `WorldMap` (SVG + `d3-geo`, pan/zoom,
  keyboard-accessible location selection), the board layout (character
  panel, project panel, action bar, context card overlay, Century Knowledge
  Board, Compendium, rules/tutorial), and the endgame summary.
- **`src/test/`** — Vitest unit tests for data integrity and engine rules.
- **`e2e/`** — a Playwright end-to-end test that plays a complete game from
  character selection through final scoring.

## Design decisions worth calling out

- **Chapters are per-character, not a shared calendar.** Each character's six
  Life Chapters carry their own historical year ranges; two characters are
  only allowed to interact (via a shared collaborator or an ability like
  Bohr's Copenhagen invitation) when their lifespans and the specific
  collaborator's active window genuinely overlap.
- **Each main action advances the calendar by one year.** Players receive four
  action points per turn, and demanding projects can consume more than one
  point while still advancing the calendar once. Turns rotate automatically
  when their points are spent, or a player can end a turn early. Each chapter
  includes one calendar action for every year in its inclusive range.
- **Discovery, not canon, creates Legacy.** Projects award their base Legacy
  when their resources, permanent Insights, public-knowledge prerequisites,
  Funds, and action costs are satisfied. A small early-discovery bonus may be
  added, but historical place/date scoring is kept only as Canon Alignment.
- **Canon gives a good route, not the only route.** Historical locations and
  collaborators provide resource advantages or deterministic ways to acquire
  Insights. Independent study, other projects, Century Knowledge, and human
  collaborators can unlock the same scientific understanding.
- **The Century Does Not Wait** is implemented as a deadline check against
  the shared Knowledge Board: if no player publishes an indispensable
  discovery by its historical deadline, it's marked as published by an NPC
  researcher with no player credit, and everything downstream stays
  unlockable.
- **Consequences are logged, never netted against Legacy.** Nuclear risk,
  secrecy, and exposure accumulate in a separate `consequenceLog` and are
  reported at the end of the game alongside Legacy, rather than being folded
  into a single good/bad meter.

## Known simplifications / expansion opportunities

This is a complete, playable vertical slice covering all twelve characters,
but several systems are intentionally simplified given scope:

- Randomness currently only affects Funds via "Seek Funding"; a fuller random
  event deck (equipment trouble, manuscript review, illness, etc.) is not yet
  implemented.
- Hilbert's "Problem Setter" and Gödel's "Undecidable" abilities are wired as
  a small set of specific, hard-coded crossover bonuses (e.g. Gödel's "Limits
  of the System" boosting Hilbert's formalist program) rather than a fully
  general Problem Card subsystem.
- "Short Game" mode starts each character at their Breakthrough chapter; it
  does not yet offer a distinct mid-length cut.
- The historical Compendium and Century Knowledge Board cover everything
  currently in the data files, but the roster's five-to-seven projects and
  four-to-six context cards per character (all comfortably above the
  five-project / four-card minimum) could be extended with further
  historical depth over time.

Historically sensitive content (the treatment of discrimination,
persecution, wartime secrecy, and the atomic bomb) is represented only
through restricted access, cost, and lost time/Standing/Exposure — never
through reduced ability, and never scored for Legacy or Canon. This is a
good candidate for review by a subject-matter historian before any wider
release.
