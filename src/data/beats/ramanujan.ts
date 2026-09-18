import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of Srinivasa Ramanujan, 1887–1920.
 *
 * The authored scenes own the slate, the letter, the crossing, the partition
 * formula and the last January. These are the years in between: a borrowed
 * trigonometry book returned on the Friday, a manifest finished by eleven so
 * the afternoon can be spent on something else, a fire in a Trinity grate that
 * is never quite close enough. They are gated the same way the scenes are — by
 * year, by place, by what the life has and has not got — and the ones carrying
 * a place, a flag or a finished piece of work outrank the general ones, so a
 * year in Madras does not sound like a year in Cambridge.
 */

export const RAMANUJAN_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1897–1903
  // -------------------------------------------------------------------------
  {
    id: 'ramanujan-beat-river-steps',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'The washing steps are crowded at dawn, and he works a division in the wet sand with a stick while the household waits its turn.',
    priority: 28,
  },
  {
    id: 'ramanujan-beat-chalk-ration',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1902 },
    ],
    text: 'The school gives out one stick of chalk a week, and his is a stub by the Tuesday of every week.',
    priority: 30,
  },
  {
    id: 'ramanujan-beat-lodgers-outpaced',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.borrowedBooks' },
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1903 },
    ],
    speaker: 'A LODGER',
    text: 'We have stopped bringing the books downstairs, because you finish the exercises before we have finished reading the question.',
    priority: 42,
  },
  {
    id: 'ramanujan-beat-mother-eat-first',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1903 },
    ],
    speaker: 'HIS MOTHER',
    text: 'Eat first and count afterwards; the goddess will not thank me for sending her a thin son with clean sums.',
    priority: 34,
  },
  {
    id: 'ramanujan-beat-prize-day',
    characterId: 'ramanujan',
    conditions: [
      { type: 'choiceWas', choiceKey: 'ramanujan-formation-opening:choice', choiceId: 'prizes' },
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'Prize day gives him a bound volume of English verse he will never open and a certificate the household frames at once.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-borrowed-friday',
    characterId: 'ramanujan',
    conditions: [
      { type: 'choiceWas', choiceKey: 'ramanujan-formation-opening:choice', choiceId: 'borrow' },
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'He walks four streets to borrow a book on a promise to return it Friday, and returns it Friday having copied the useful half.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-father-ledger',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'His father comes home from the cloth shop with ink on two fingers and a ledger that balances, and asks nothing about the slate.',
    priority: 30,
  },
  {
    id: 'ramanujan-beat-two-masters',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'The English master reads his composition aloud as a warning, and the arithmetic master reads his slate aloud as an example.',
    priority: 32,
  },
  {
    id: 'ramanujan-beat-older-boys',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1899 },
      { type: 'yearAtMost', year: 1903 },
    ],
    speaker: 'A CLASSMATE',
    text: 'Do the one with the roots in it — and do it slowly this time, so that I can see where the answer comes from.',
    priority: 32,
  },
  {
    id: 'ramanujan-beat-lamp-runs-out',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1903 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 2 } },
    ],
    text: 'He works on the mat by the door until the oil gives out, then lies still and goes on with it in the dark.',
    priority: 36,
  },

  // -------------------------------------------------------------------------
  // Education, 1903–1912
  // -------------------------------------------------------------------------
  {
    id: 'ramanujan-beat-supplying-reasons',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1903 },
      { type: 'yearAtMost', year: 1908 },
    ],
    text: 'The book states five thousand results and gives reasons for none of them, so he supplies the reasons himself, a page a night.',
    priority: 36,
  },
  {
    id: 'ramanujan-beat-grey-elbow',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.slate' },
      { type: 'yearAtLeast', year: 1903 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'His right elbow is permanently grey, and his mother has given up on that sleeve of that shirt entirely.',
    priority: 42,
  },
  {
    id: 'ramanujan-beat-physiology-again',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1907 },
    ],
    text: 'The physiology paper comes round again in December, and he sits it again and fails it again for exactly the same reason.',
    priority: 38,
  },
  {
    id: 'ramanujan-beat-weeks-away',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1905 },
      { type: 'yearAtMost', year: 1908 },
    ],
    text: 'He is gone from the house some weeks and comes back thinner, with the notebook full and no account at all of where he slept.',
    priority: 40,
  },
  {
    id: 'ramanujan-beat-tutoring',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1912 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'He tutors a schoolboy in algebra for a few rupees a month and spends the hour on something that is not on the examination.',
    priority: 36,
  },
  {
    id: 'ramanujan-beat-library-veranda',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'He has no ticket for the college library, so a friend inside carries the volume out to the veranda for an hour at a time.',
    priority: 34,
  },
  {
    id: 'ramanujan-beat-namagiri-dictates',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1912 },
    ],
    speaker: 'RAMANUJAN',
    text: 'She sets them down on my tongue while I am asleep, and in the morning I have only to copy out what is there.',
    priority: 38,
  },
  {
    id: 'ramanujan-beat-mother-sings',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1903 },
      { type: 'yearAtMost', year: 1910 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 2 } },
    ],
    text: 'His mother sings at the temple for a few coins a month, and the household eats what that buys and what the lodgers pay.',
    priority: 38,
  },
  {
    id: 'ramanujan-beat-copying-job',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1912 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 2 } },
    ],
    text: 'A copying job comes in at two rupees a week, and he does the week of copying in two days and keeps the rest for himself.',
    priority: 34,
  },
  {
    id: 'ramanujan-beat-town-has-nobody',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'kumbakonam' },
      { type: 'yearAtLeast', year: 1905 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'The town has one telegraph office, two presses and nobody at all who can tell him whether a single result of his is new.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-hot-season-fever',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1912 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'He is ill through a fortnight of the hot season and does the shorter calculations lying down, holding the slate above his face.',
    priority: 38,
  },
  {
    id: 'ramanujan-beat-child-wife',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.janaki' },
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'His wife is a child still, kept at her mother’s house for now, and the marriage sits in the household like an unpaid account.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-journal-question',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'The mathematical society prints a question of his, and he reads his own name in type until the page goes soft at the fold.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-nobody-answers',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'His problem runs three issues with no solution sent in, so he sends one in himself and signs it with his own name.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-patron-overnight',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.patrons' },
      { type: 'yearAtLeast', year: 1910 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'A gentleman reads four pages, asks to keep the notebook overnight, and returns it in the morning with the name of a man who might pay.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-solitude-fills',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.solitude' },
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'Nobody comes to the house for the notebooks, and the notebooks fill anyway, at the rate of about a page a day.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-stopped-pretending',
    characterId: 'ramanujan',
    conditions: [
      { type: 'choiceWas', choiceKey: 'ramanujan-education-opening:choice', choiceId: 'notebook' },
      { type: 'yearAtLeast', year: 1905 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'He has stopped pretending to prepare for the examinations, and the household has stopped pretending it has not noticed.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-sitting-for-peace',
    characterId: 'ramanujan',
    conditions: [
      { type: 'choiceWas', choiceKey: 'ramanujan-education-opening:choice', choiceId: 'exams' },
      { type: 'yearAtLeast', year: 1905 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'He sits the papers one more time to keep the peace at home, and spends the revision hours on the fourth notebook.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-fourteen-figures',
    characterId: 'ramanujan',
    conditions: [
      { type: 'projectCompleted', projectId: 'ramanujan-infinite-series' },
      { type: 'yearAtLeast', year: 1908 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'He checks the new series against the figure in the back of a borrowed book and stops at fourteen places, because the slate runs out.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-fraction-left-open',
    characterId: 'ramanujan',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'ramanujan-infinite-series' },
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1912 },
    ],
    speaker: 'RAMANUJAN',
    text: 'It will close, but not this month; leave the foot of the page empty and I shall come back to it.',
    priority: 42,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1912–1914
  // -------------------------------------------------------------------------
  {
    id: 'ramanujan-beat-madras-quiet-hour',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'madras' },
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'Madras is loud in a way the old town never was, so he finds the hour between five and six in the morning and keeps it.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-ledgers-by-eleven',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'madras' },
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'The harbour ledgers are finished by eleven, and the rest of the day belongs to whatever is lying under the ledger.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-senior-clerk-order',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1914 },
    ],
    speaker: 'THE SENIOR CLERK',
    text: 'Finish the manifest, then use the back of it — in that order, or neither of us keeps his desk past Michaelmas.',
    priority: 42,
  },
  {
    id: 'ramanujan-beat-cooks-his-own',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'He cooks his own rice at the lodging after the office, because there is nobody in this city he is permitted to eat from.',
    priority: 38,
  },
  {
    id: 'ramanujan-beat-england-silence',
    characterId: 'ramanujan',
    conditions: [
      { type: 'choiceWas', choiceKey: 'ramanujan-entry-opening:choice', choiceId: 'england' },
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'Two of the Cambridge men send the pages back without a line, and a third does not send them back at all.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-madras-veranda',
    characterId: 'ramanujan',
    conditions: [
      { type: 'choiceWas', choiceKey: 'ramanujan-entry-opening:choice', choiceId: 'india' },
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'The mathematical men of the city pass the notebook round a veranda all evening and agree, politely, that they cannot check it.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-scholarship-sent-home',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1914 },
      { type: 'resourceAtLeast', resource: 'funds', value: 3 },
    ],
    text: 'A university stipend arrives that ends the arithmetic at home, and he sends most of each instalment back to Kumbakonam anyway.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-fortnightly-questions',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.hardyReplied' },
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'Letters come from Cambridge every fortnight now, each of them asking for the proof of something he thought he had explained.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-tenth-page',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.noAnswer' },
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'The envelope with the nine pages is still in the drawer, and he has begun a tenth page out of habit rather than hope.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-relatives-object',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1914 },
    ],
    speaker: 'A RELATIVE',
    text: 'The black water takes a man’s caste off him, and there is no ceremony on this coast that will put it back.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-paper-in-english',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'He writes the mathematics quickly and the covering English slowly, and asks a clerk at the next desk to read the English back.',
    priority: 40,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1914–1917
  // -------------------------------------------------------------------------
  {
    id: 'ramanujan-beat-nearer-the-fire',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1917 },
    ],
    text: 'The college gives him a grate and a coal ration, and he sits nearer his fire than any Englishman in the building sits to his.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-trunk-under-window',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.inEngland' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1916 },
    ],
    text: 'The tin trunk that crossed the sea stands under the window with the rope still knotted round it, in case.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-greengrocer-saves',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1917 },
    ],
    speaker: 'THE GREENGROCER',
    text: 'I put these by for you on the Tuesday; there is nobody else in the town who will take a marrow that shape.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-littlewood-argument',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1916 },
    ],
    speaker: 'LITTLEWOOD',
    text: 'You have set down the answer and left out the argument again; give me the argument, and I do not mind if it is a poor one.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-littlewood-gone',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'Littlewood is away doing arithmetic for the guns, and the third chair in the room stays empty for the duration of it.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-hardy-where-from',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1917 },
    ],
    speaker: 'HARDY',
    text: 'I have to ask where this one came from, and you will tell me you dreamed it, and I shall have to write that down.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-degree-register',
    characterId: 'ramanujan',
    conditions: [
      { type: 'projectCompleted', projectId: 'ramanujan-highly-composite' },
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'The college gives him a degree for the paper on crowded numbers, and he signs the register in a hand that is still a clerk’s.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-rigour-notes',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.rigour' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1917 },
    ],
    text: 'He sits a course on rigorous analysis and takes notes that are half the lecture and half a problem nobody in the room has posed.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-flow-notebooks',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.flow' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1917 },
    ],
    text: 'He fills three notebooks in a winter, and other men spend the spring proving the first eleven pages of them.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-observance-midnight',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.observance' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'Keeping the observances in a country with no temple means cooking at midnight and eating alone, and he does both without complaint.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-adapted-quietly',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.adapted' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'He lets the college feed him on the days the work is going well, and leaves that part out of the letters home.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-blinds-at-dusk',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'The blinds go down at dusk because of the airships, and the porter climbs the staircase to check every window on it.',
    priority: 44,
  },
  {
    id: 'ramanujan-beat-cutting-from-madras',
    characterId: 'ramanujan',
    conditions: [
      { type: 'resourceAtLeast', resource: 'standing', value: 3 },
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'His name appears in a London journal, and a cousin in Madras cuts the notice out and posts it back to him with no letter.',
    priority: 42,
  },
  {
    id: 'ramanujan-beat-tau-obeys',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.tau' },
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The coefficients go on obeying a rule he cannot prove, and he writes the rule down as though it were already a theorem.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-english-winter-chest',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1917 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    speaker: 'RAMANUJAN',
    text: 'It is only the winter here; at home a cough of this kind would have finished with me by the second week.',
    priority: 48,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1917–1919
  // -------------------------------------------------------------------------
  {
    id: 'ramanujan-beat-nursing-home-light',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'The nursing home at the end of the tram line has good light and bad food, and the notebook travels in the trunk with him.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-three-doctors',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
    ],
    speaker: 'A DOCTOR',
    text: 'We are agreed about the rest and the milk, and about nothing else whatever concerning you, and that is the position.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-pencil-on-the-blanket',
    characterId: 'ramanujan',
    conditions: [
      { type: 'choiceWas', choiceKey: 'ramanujan-crisis-opening:choice', choiceId: 'work' },
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'He works on the blanket in pencil because the ink is cold on the sill, and the sister takes the pages away at nine.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-corridor-twice',
    characterId: 'ramanujan',
    conditions: [
      { type: 'choiceWas', choiceKey: 'ramanujan-crisis-opening:choice', choiceId: 'sanatorium' },
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'He does as he is told for four months, and by the end of them he can walk the corridor twice without sitting down.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-hardy-visits',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.hardyBond' },
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
    ],
    speaker: 'HARDY',
    text: 'I have not come to talk mathematics, and we both know I shall be talking mathematics inside a quarter of an hour.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-three-letters-after',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.honoured' },
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'Letters begin arriving with three new letters after his name, and he practises the signature once, on the back of an envelope.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-rationing-arithmetic',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'Rationing turns a vegetarian’s week into arithmetic, and he does that arithmetic every Monday and loses weight regardless.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-bells-in-november',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The bells go all one November afternoon, and he lies still and listens and asks somebody afterwards what the bells had been for.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-no-berths',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.inEngland' },
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The shipping offices have no passenger berths until the spring, and the waiting turns out to be longer than the voyage.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-no-word-from-wife',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.janaki' },
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'No letter comes from his wife for months together, and from this distance there is no way at all of finding out why.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-homesick-word',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 3 } },
    ],
    text: 'He is homesick in a way he has no English word for, and he does not put the Tamil word in the letters either.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-stipend-unspent',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.honoured' },
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1919 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'The fellowship stipend comes in each quarter while he is too ill to spend any of it, and it banks up like snow.',
    priority: 50,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1919–1920
  // -------------------------------------------------------------------------
  {
    id: 'ramanujan-beat-heat-after-england',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'madras' },
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'The heat after five English winters lands on his chest like a hand, and he sits in it gratefully all the same.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-relatives-two-at-a-time',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'Relatives arrive from three towns to see him and are shown in two at a time, for ten minutes, by his wife.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-house-with-better-air',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'They move him to a house with a garden and then to another with better air, and he asks only that the trunk come too.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-forbidden-and-allowed',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 3 } },
    ],
    text: 'The doctors forbid the working and permit the fruit, and he leaves the fruit on the plate and does the working.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-janaki-rice-first',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.janaki' },
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    speaker: 'JANAKI',
    text: 'You will eat the rice and then you may have the slate, and not one minute of it in the other order.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-mother-in-doorway',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'His mother sits in the doorway where she can see him and sings very quietly, the way she used to at the temple.',
    priority: 46,
  },
  {
    id: 'ramanujan-beat-midnight-to-milk',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'He works from midnight until the milk arrives, because the fever is lowest then and the street outside is quiet.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-covering-letters-shorter',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.lastLetter' },
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'His covering letters are shorter now than the mathematics they cover, which was always true and has stopped being hidden.',
    priority: 48,
  },
  {
    id: 'ramanujan-beat-unnumbered-sheets',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.loosePages' },
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'The loose sheets go under the pillow, into the trunk and out again, and nobody in the house thinks to number them.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-pencil-on-the-shelf',
    characterId: 'ramanujan',
    conditions: [
      { type: 'narrativeFlag', flag: 'ramanujan.thread.stopped' },
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'The pencil stays on the shelf a whole week, and the house is quiet that week in a way it has not been for years.',
    priority: 50,
  },
  {
    id: 'ramanujan-beat-stopped-counting',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1920 },
    ],
    speaker: 'RAMANUJAN',
    text: 'I have stopped counting the notebooks; there is one beside the bed, and for the moment that is the only one.',
    priority: 44,
  },

  // -------------------------------------------------------------------------
  // Other lives, in the same cities
  // -------------------------------------------------------------------------
  {
    id: 'ramanujan-beat-gottingen-timetable',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen', yearTolerance: 2 },
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'The mathematics building here runs on one man’s timetable, and the man himself wants the results in the order they were found.',
    priority: 58,
  },
  {
    id: 'ramanujan-beat-gottingen-other-name',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'noether', locationId: 'gottingen', yearTolerance: 2 },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'A woman here lectures under another man’s name on the printed list, and the room fills anyway, twice a week, all term.',
    priority: 57,
  },
  {
    id: 'ramanujan-beat-paris-motor-van',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'paris' },
      { type: 'otherCharacterAt', characterId: 'curie', locationId: 'paris', yearTolerance: 2 },
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'The talk at the institute is all of a woman with two prizes who spends this war driving a photographic van towards the guns.',
    priority: 57,
  },
  {
    id: 'ramanujan-beat-manchester-whole-numbers',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'otherCharacterAt', characterId: 'bohr', locationId: 'manchesterUK', yearTolerance: 2 },
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'A young Dane here insists the atom counts in whole numbers, and cannot get to the end of a sentence about why.',
    priority: 57,
  },
  {
    id: 'ramanujan-beat-berlin-gravity-shape',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin', yearTolerance: 2 },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'The physicists here are arguing about a man who says gravity is a shape, and one of them lends him the paper overnight.',
    priority: 57,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'ramanujan-beat-monsoon-week',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'Rain comes down for three days, the town smells of wet stone, and the work goes better than it does in dry weather.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'ramanujan-beat-slate-wiped-again',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'The slate is wiped with an elbow and filled again before the dust has finished settling on the floor.',
    priority: 7,
    repeatable: true,
  },
  {
    id: 'ramanujan-beat-wakes-with-it-done',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'He wakes in the small hours with a result already finished, and writes it down before he is properly awake.',
    priority: 6,
    repeatable: true,
  },
  {
    id: 'ramanujan-beat-grey-week',
    characterId: 'ramanujan',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'Another grey week; he keeps the fire going, the window shut and both hands flat on the paper to warm them.',
    priority: 9,
    repeatable: true,
  },
  {
    id: 'ramanujan-beat-nothing-in-the-post',
    characterId: 'ramanujan',
    conditions: [
      { type: 'yearAtLeast', year: 1903 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'The post brings nothing for him today, so he sits down and answers a question that nobody has asked him.',
    priority: 5,
    repeatable: true,
  },
];
