# Writing a life for *The Shape of a Century*

Every scientist on the roster gets one file in this folder, `<characterId>.ts`,
exporting `<CHARACTER>_STORY_SCENES: StoryScene[]` and
`<CHARACTER>_REPLACED_CONTEXT_CARDS: string[]`. This guide is the contract for
what goes inside. The engine is in `src/engine/story.ts`; the types are in
`src/types/story.ts`. Read both before writing.

## What the player experiences

The player is not reading a biography. They are living one life across six
chapters on a board, and the story pages are the moments when the board goes
quiet and the life speaks. A page is one screen: an illustration, a location
and year, two to four sentences, sometimes one line of dialogue, sometimes a
choice. Pages chain into a scene. Scenes fire when the engine sees a reason:
a chapter opening or closing, a project completed, an action taken in the
right year and place.

The player's route may not be the documented one. They may never go to Bern,
never finish the theorem, sign the letter or refuse it. The story must hold
either way, and it must hold *in the fiction*. The engine's job is to pick
the right variant; the writer's job is to make every variant feel like the
only way this life could have gone.

## The voice

- Close third person, present tense. "She" and "he" by name where clarity
  needs it, and by first name where the person would have been addressed that
  way in the room. Formal surnames for people the character addresses formally.
- Begin in a place, with a thing: a wet coat, a tram bell, a sheet of
  photographic paper still curling, the smell of a coal fire in a lecture
  hall. Then the stakes. Never begin with an abstraction.
- Two to four sentences per page. Short sentences carry weight; let them.
- One page in every major scene should have a *spoken line* — a real person
  from this life saying something to the character, or the character saying
  something aloud. Dialogue is invented wording unless the `historicalNote`
  says otherwise. Never present an invented line as a quotation from the
  record.
- The character has a temperament and it shows in what they notice: Curie
  counts, Einstein plays, Noether laughs, Ramanujan sees the finished thing
  before the proof, Turing takes things apart, Johnson checks the arithmetic
  twice, Gödel worries, von Neumann is already three moves ahead, Bohr
  cannot finish a sentence without a caveat, Hilbert issues instructions,
  Oppenheimer performs, Franklin is exact and will not be rushed.
- End scenes on a turn, an image, or a question — not on a summary.

## Words that must never appear in narration or dialogue

`player`, `game`, `board`, `timeline`, `canonical`, `canon`, `human-controlled`,
`NPC`, `variant`, `historically` (as in "historically, X did Y"), `in this
playthrough`, `this version of`. The illusion is the product. Anything the
engine needs to explain about itself belongs in `historicalNote`, which the
player can open under "Historical basis" and which is *expected* to speak
plainly about what is documented, what is dramatized, and what diverged.

## Divergence is written from inside the life

When the player has not done what the record says, do not narrate the record.
Narrate the drawer where the unfinished manuscript sits, the letter that does
not arrive, the colleague who publishes first, the quiet decade. The character
does not know what they were "supposed" to do. They know what they did.

Bad: "Historically, Special Relativity had already changed physics by this
point. Here, that work remains unfinished."

Good: "The notebook from the tram rides is still in the desk, thirty pages of
questions about clocks. Nobody has asked to read it. Lorentz's paper arrives
in the post and Albert reads it twice, and then goes for a long walk."

## Facts

The only facts you may use are the ones in `src/data/content/` for this
character (biography, chapters, projects, locations, context cards,
collaborators, historical events, insights, sources) and facts about this
person that are so well documented that any standard biography states them.
When unsure of a date, a name, or who was in the room, stay vague rather than
plausible-wrong: "a colleague", "that winter", "the letter". Never invent a
named person who is not in the content files or in every biography. Never
attribute a specific quotation as real. Every scene's `sourceIds` must be
keys from `src/data/content/sources.ts`.

Persecution, war, illness, and death are part of these lives and are told
with dignity and restraint, PG-13, never sensational, never graphic. Turing's
prosecution and death, Franklin's illness, Gödel's fears, Oppenheimer's
hearing, Bohr's escape, Johnson's segregated workplace, Ramanujan's illness:
tell them from inside the person's experience, with the same care a good
biographer takes, and no more detail than the record supports.

## Classification

- `Documented`: the setting and event are on the record; only the wording
  is dramatized.
- `Plausible`: a dramatized moment consistent with the record (most
  encounters and personal scenes).
- `Speculative`: only for scenes whose *premise* departs from the record
  (a meeting that never happened, an outcome the person never reached).

Classification is per scene. A scene with a documented variant and a
divergent variant is `Documented` if the default path is documented; put the
divergence in that variant's `historicalNote`.

## Shape of a life (what every file must contain)

1. **Prologue** — `kind: 'prologue'`, `trigger: { event: 'gameStart' }`, no
   `chapterId`. Two or three pages. The world this person is born into, and
   the child. This runs only in a full-length campaign.
2. **Six chapter openings** — `kind: 'chapterOpening'`,
   `trigger: { event: 'chapterOpening', priority: 90 }`, one per `chapterId`.
   Three or four pages: the place; a spoken line from someone in the life;
   the question the chapter poses. Where the person historically faced a
   decision at the start of the chapter, the last page offers a **choice**
   with two or three options, each with `effects` (a `flag`, a `theme`, and
   small `resources` nudges, never larger than ±2). Provide a `default`
   variant with no conditions *last*, and put location-specific variants
   before it.
3. **Six chapter closings** — `kind: 'chapterClosing'`,
   `trigger: { event: 'chapterClosing', priority: 80 }`. At least two
   variants: the route the record took (conditioned on the chapter's key
   `projectCompleted` or `locationIs`) and the route it did not (the
   unconditioned default). Both written from inside the life. Two pages each.
4. **One breakthrough per project** — `kind: 'breakthrough'`,
   `trigger: { event: 'projectCompleted', projectId, priority: 70–90 }`.
   Two or three pages: the moment; what it cost; who it reaches. Where the
   place matters, a located variant and an elsewhere variant.
5. **Every context card replaced** — for each card in the character's
   `contextCards`, a scene with `replacesContextCardId: <cardId>`, an
   `afterAction` trigger conditioned on the card's year window
   (`yearAtLeast`/`yearAtMost`) and, where the card only makes sense in a
   place, `locationIs`; an `effects: [{ type: 'markContextCardSeen', cardId }]`
   on *every* variant; and the card's id in
   `<CHARACTER>_REPLACED_CONTEXT_CARDS`. Where the person historically faced a
   decision, the scene ends in a choice. Where the card describes something
   that happened *to* them wherever they were (a war, a death, a prize), an
   unconditioned-by-place variant must exist so the scene cannot be missed.
6. **Two or three encounters** — `kind: 'encounter'`, `afterAction`, with a
   documented collaborator, mentor, rival, or family member speaking, and
   at least one with another roster scientist using the
   `otherCharacterIsNpc` / `otherCharacterIsHuman` + `otherCharacterAt`
   pattern (see `einstein.ts`). Write all three variants in-world: present,
   present by another road, absent.
7. **Two or three personal scenes** — `kind: 'personal'`, `afterAction`,
   conditioned on resources (`wellbeing`, `health`, `funds`, `standing`) so
   that a struggling life and a comfortable one read differently.
8. **Epilogue** — `kind: 'epilogue'`, `trigger: { event: 'epilogue' }`, no
   `chapterId`. Two or three variants keyed to what the life achieved
   (`completedProjectCountAtLeast`) and to the choices made (`choiceWas`,
   `narrativeFlag`), plus a default. The last page is the character's own
   voice or a single image, not a scoreboard.

Aim for 28–40 scenes and 4,500–7,000 words of narration and dialogue per life.
That is a novella's worth of pages spread across a long game; it should feel
generous, never padded.

## Continuity is the fun

The engine remembers. Use it:

- `effects: [{ type: 'flag', flag: '<characterId>.<thread>', value: true }]`
  when a thread starts; `conditions: [{ type: 'narrativeFlag', flag }]` when
  it pays off two chapters later.
- A choice on page `p` of scene `s` is remembered as `choiceKey: 's:p'`;
  `{ type: 'choiceWas', choiceKey: 's:p', choiceId }` lets a later scene
  answer it. Every choice in the file must be answered somewhere later.
- `{ type: 'relationship', characterId, familiarity, respect, tension }`
  for roster scientists; read it back with `relationshipAtLeast`.
- `{ type: 'theme', theme, amount }` accumulates a leaning
  (e.g. `institutionVsIndependence`, `dutyVsConscience`); the epilogue can
  key on themes through flags you set alongside them.

Effects and choices change the board too: `resources` nudges of ±1 or ±2 to
`funds`, `wellbeing`, `health`, `standing`, `network`, `exposure`, or a token
(`theory`, `evidence`, …). Use them so that a choice is felt, never so that
it decides the game.

## Images

Every variant carries an `image` spec. Write `setting` as a concrete place
and moment, `mood` as two or three words, `details` as four to six period
objects, `alt` as one sentence a screen reader can say. Never put people
suffering, weapons in use, or text in the picture; for war, persecution,
weapons, and death use documents, luggage, empty rooms, weather, and distance.
`characters` lists the roster ids visible in the frame — the character alone
by default; a second roster member only in an encounter with them.

## Mechanics checklist

- Scene `id`s are `<characterId>-<slug>`, unique across the whole game.
- `once: true` on everything except a scene you deliberately want repeatable.
- Every scene with `chapterId` only fires in that chapter; leave `chapterId`
  off prologue and epilogue only.
- Variant order matters: the first variant whose conditions all pass is
  chosen. Specific before general; unconditioned default last.
- Location ids and project ids must exist in `src/data/content/`; the
  integrity tests will fail otherwise.
- Year conditions: `yearAtLeast` / `yearAtMost` refer to the player's current
  year, which advances one year per action inside the chapter's window.
  A scene that must not be missed needs a window the player will actually
  pass through, not a single year.
- Run `npx tsc --noEmit -p tsconfig.app.json` and
  `npx vitest run src/test/story.playthrough.test.ts -t <characterId>`
  before you are done. The playthrough test drives the whole life on both
  the documented route and a stay-at-home route and fails on a stall, a
  missing chapter scene, a life with no dialogue, or a life with no choice.
  Set `VITE_PLAY_DUMP=/tmp/<characterId>.log VITE_PLAY_CHAR=<characterId>`
  to write the transcript and read your own life end to end. Read it. If
  it is choppy, it is not done.
