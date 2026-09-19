# Writing a life for *The Shape of a Century*

Every scientist on the roster gets one file in this folder, `<characterId>.ts`,
exporting `<CHARACTER>_STORY_SCENES: StoryScene[]` and
`<CHARACTER>_REPLACED_CONTEXT_CARDS: string[]`. This guide is the contract for
what goes inside. The engine is in `src/engine/story.ts`; the types are in
`src/types/story.ts`. Read both before writing.

## What the player experiences

This is a visual novel wearing a strategy game. The board is where a life is
spent; the scenes are where it is *lived*, and they are told the way a Ren'Py
game tells a story — a picture, a name, a line, a click. One beat per screen.
The player taps through a conversation.

That means **people talking to each other**, not a narrator describing people.
A scene is a conversation with just enough narration to set the room and move
the clock. If a page can be a line somebody says, it is a line somebody says.

The player's route may not be the documented one. They may never go to Bern,
never finish the theorem, sign the letter or refuse it. The story must hold
either way, and it must hold *in the fiction*. The engine's job is to pick
the right variant; the writer's job is to make every variant feel like the
only way this life could have gone.

## The rule that matters most: someone in the room does not understand

The player has no physics. Assume a clever, curious fifteen-year-old who has
never taken a science class. Every idea in this game has to reach them, and
the way it reaches them is that **a person in the scene asks**.

Put someone in the room who does not follow — a wife, a mother, a landlady, a
clerk, a student, a journalist, a brother, a colleague from another field —
and let them say so. Then the scientist explains it, out loud, to a person
they care about, in words that person knows. This is not a concession to the
reader. It is how these ideas actually travelled, and it is the best scene
material in the file.

Bad, and typical of the old file:

> Wherever Albert turns it, the needle swings back to the same stubborn north.
> Nothing is touching it. Something enormous and invisible is holding it, and
> the room is suddenly not the size he thought it was.

Evocative, and a reader learns nothing. They do not know what a compass is
doing, why it matters, or why the boy cares. Do this instead:

> HERMANN: Hold it flat. Now turn yourself around.
> ALBERT: The needle didn't turn.
> HERMANN: No.
> ALBERT: I turned. Why didn't it?
> HERMANN: Something is pulling on it. It has been pulling the whole time.
> ALBERT: From where?
> HERMANN: The earth, they say.
> ALBERT: But nothing is touching it.
> *He turns it again, slowly, watching the needle refuse him.*
> ALBERT: Papa. There is something in this room I can't see.

Same moment, same facts, one-third the abstraction — and the reader now
understands what a magnetic field is, without the phrase ever being used.

### How to explain without jargon

- **Name the thing only after describing it.** "Light comes in lumps, not in a
  stream" first; "quanta" after, once, if at all.
- **Use what the listener already touches.** Trams, clocks, post, rain, coins,
  a kettle, a staircase, a dropped stone, a rowing boat.
- **Keep the number small.** "Twice as far" beats "a factor of two". Never put
  an equation in a line of dialogue.
- **Let the listener push back.** "That can't be right." "Say it again."
  "So the clock on the tower is *wrong*?" Confusion on the page is the
  reader's confusion being answered.
- **One idea per scene.** If a scene needs two, it is two scenes.

If a term from the list below appears, a character must make it plain within
the same scene, or it must not appear at all: *quantum*, *relativity*,
*entropy*, *field*, *invariant*, *set*, *algorithm*, *isotope*, *diffraction*,
*eigenvalue*, *topology*, *axiom*, *incompleteness*, *fission*, *cryptanalysis*,
*helix*, *tensor*, *spectrum*, *partition*, *matrix*.

## The shape of a page

One page is one beat. Pick one:

- **A spoken line.** `speaker` set to the person's name as the reader should
  see it, `dialogue` set to what they say. One or two sentences. This is the
  default and should be most pages.
- **A piece of narration.** One or two sentences, present tense, close third
  person. Use it to set a room, move the clock, or show an action. Not to
  explain an idea — a person explains ideas.

Do not stack a paragraph of narration and a line of dialogue on the same page.
That is the old style and it reads as a novel, not a conversation.

**Length:** no page over about 35 words. Most should be well under. A long
speech is several pages, so the player clicks through it and it breathes.

**Density:** at least three pages in five should be spoken lines. Scenes that
are pure narration are allowed only for a wordless moment — a death, a
departure, a room after everyone has gone.

**Speakers:** always name them. `speaker: 'MILEVA'` for someone close,
`speaker: 'PROFESSOR WEBER'` where the character would use the title. The
character themselves speaks too — `speaker: 'ALBERT'`. A reader must never
have to guess who is talking.

## The voice

- Close third person, present tense, for narration. Plain words. Short
  sentences.
- Dialogue sounds like speech, not like prose: contractions, interruptions,
  half-sentences, people talking past each other. Read it aloud. If it does
  not sound like a person, cut it.
- Begin a scene in a place, with a thing, then get to the talking fast — by
  the second page.
- The character has a temperament and it shows in *how they talk*: Curie is
  exact and says less than she knows, Einstein teases, Noether laughs and
  talks over people, Ramanujan states the answer and is impatient with the
  proof, Turing is blunt and literal, Johnson asks the question everyone else
  skipped, Gödel qualifies everything, von Neumann is three moves ahead and
  bored, Bohr never finishes a sentence, Hilbert issues instructions,
  Oppenheimer performs, Franklin will not be rushed and says so.
- End scenes on a line somebody says, not a summary.

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
   Eight to fourteen pages: a line of narration for the place, then a
   conversation — the person the chapter belongs to and someone who wants
   something from them. The question the chapter poses is asked out loud by
   one of them. Where the person historically faced a
   decision at the start of the chapter, the last page offers a **choice**
   with two or three options, each with `effects` (a `flag`, a `theme`, and
   small `resources` nudges, never larger than ±2). Provide a `default`
   variant with no conditions *last*, and put location-specific variants
   before it.
3. **Six chapter closings** — `kind: 'chapterClosing'`,
   `trigger: { event: 'chapterClosing', priority: 80 }`. At least two
   variants: the route the record took (conditioned on the chapter's key
   `projectCompleted` or `locationIs`) and the route it did not (the
   unconditioned default). Both written from inside the life. Six to ten
   pages each, mostly spoken.
4. **One breakthrough per project** — `kind: 'breakthrough'`,
   `trigger: { event: 'projectCompleted', projectId, priority: 70–90 }`.
   Eight to sixteen pages. The moment, then somebody who does not understand
   it asking what it means, and being told. This is where the explaining
   happens, so these are the most important scenes in the file. Where the
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

Aim for 28–40 scenes per life. Pages are short now, so expect 350–550 pages
across a life rather than 250 long ones — the same reading time, clicked
through as a conversation instead of read as prose.

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
