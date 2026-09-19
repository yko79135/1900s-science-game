import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of Kurt Gödel, 1906–1978.
 *
 * The authored scenes own the sickroom, the Circle, the sentence about itself,
 * Königsberg, the Anschluss, the crossing, the walks and the hearing. These are
 * the years in between: a gas meter, a typesetter short of symbols, a queue at a
 * ministry, a pink bird in a garden in New Jersey. He is the same man in all of
 * them — the one who will not take a word for it, and who is pleasant about it.
 * Beats carrying a place or a flag outrank the general ones, so a detour to
 * Göttingen or forty years on one street sounds like itself.
 */

export const GODEL_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1916–1924 — Brno
  // -------------------------------------------------------------------------
  {
    id: 'godel-beat-loom-hum',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'The looms start before six and the valley hums all day at a pitch he can name, though nobody else in the house hears it at all.',
    priority: 30,
  },
  {
    id: 'godel-beat-two-languages',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1922 },
    ],
    text: 'The shop signs on the hill are German and the ones at the bottom of it are Czech, and he reads both without deciding which is his.',
    priority: 28,
  },
  {
    id: 'godel-beat-pulse-window',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1924 },
      { type: 'narrativeFlag', flag: 'godel.watchesHimself' },
    ],
    text: 'He takes his own pulse at the window before school and enters the figure in a ruled column, and tells nobody what he is comparing it with.',
    priority: 48,
  },
  {
    id: 'godel-beat-empire-ends',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'The empire ends in November and the same town wakes in a different country, and the post office has new stamps by the spring.',
    priority: 40,
  },
  {
    id: 'godel-beat-father-form',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1924 },
    ],
    speaker: 'HIS FATHER',
    text: 'We are Austrians who happen to live in Czechoslovakia now, Kurt; fill in the form the way they ask and say nothing further.',
    priority: 38,
  },
  {
    id: 'godel-beat-brother-plates',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1924 },
    ],
    text: 'Rudolf comes home from his medical studies with a book of plates of the heart, and leaves it on the table, and does not mention why.',
    priority: 36,
  },
  {
    id: 'godel-beat-learns-shorthand',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1924 },
    ],
    text: 'They teach the commercial shorthand for clerks and he takes to it at once, because a page nobody else can read is a page nobody can argue with.',
    priority: 34,
  },
  {
    id: 'godel-beat-gymnasium-marks',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1923 },
    ],
    text: 'He goes through the whole gymnasium without one mark below the highest, and the mathematics master finds this more unnerving than pleasing.',
    priority: 32,
  },
  {
    id: 'godel-beat-theatre-audience',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1924 },
    ],
    text: 'His mother takes him to the theatre in town and he watches the audience as closely as the stage, to catch the moment they decide to believe it.',
    priority: 30,
  },
  {
    id: 'godel-beat-kant-winter',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1924 },
    ],
    text: 'He reads Kant over one winter in a borrowed copy and underlines almost nothing, since underlining would mean he had already settled which parts were true.',
    priority: 34,
  },
  {
    id: 'godel-beat-factory-books',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1924 },
      { type: 'resourceAtLeast', resource: 'funds', value: 3 },
    ],
    text: 'The factory books are done at the long table on Sundays, and he is allowed to check the columns because he checks them twice without being told to.',
    priority: 42,
  },
  {
    id: 'godel-beat-mother-vienna',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1924 },
    ],
    speaker: 'HIS MOTHER',
    text: 'Your brother is already in Vienna, Kurt, and I would rather have you both in one city than one of you here on his own.',
    priority: 44,
  },

  // -------------------------------------------------------------------------
  // Education, 1924–1929 — Vienna
  // -------------------------------------------------------------------------
  {
    id: 'godel-beat-furtwangler-chair',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1927 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'Furtwängler lectures from his chair without a single note while an assistant writes the number theory on the board behind him.',
    priority: 52,
  },
  {
    id: 'godel-beat-tram-ring',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1929 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'The tram round the Ring takes eleven minutes and he uses them to decide which of the morning’s lemmas he actually believes.',
    priority: 46,
  },
  {
    id: 'godel-beat-gas-meter',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1928 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'The landlady fits a coin meter to the gas, and he learns precisely how many pages of reading an hour of light is worth.',
    priority: 44,
  },
  {
    id: 'godel-beat-coffee-house-argument',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1929 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'The argument from the seminar runs on in the coffee house until the waiter stacks the chairs, and he has contributed perhaps nine words.',
    priority: 48,
  },
  {
    id: 'godel-beat-principia',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1928 },
    ],
    text: 'He works through the great English treatise a page at a time and finds the symbols patient in a way that people are not.',
    priority: 38,
  },
  {
    id: 'godel-beat-hahn-seminar',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1929 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    speaker: 'HAHN',
    text: 'You have read it more carefully than the men who wrote it, Herr Gödel; now stand up and tell the seminar what you found.',
    priority: 54,
  },
  {
    id: 'godel-beat-monthly-money',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1928 },
      { type: 'resourceAtLeast', resource: 'funds', value: 2 },
    ],
    text: 'Money comes monthly from Brno and goes on books, lodging and coffee in that order, all of it entered in a small ruled book.',
    priority: 40,
  },
  {
    id: 'godel-beat-missing-line',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1929 },
    ],
    text: 'A standard textbook settles a lemma in four lines, and he spends the evening finding the fifth line it decided not to bother with.',
    priority: 36,
  },
  {
    id: 'godel-beat-carnap-slowly',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1929 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    speaker: 'CARNAP',
    text: 'Say that again more slowly, Gödel — I believe you have just disagreed with every one of us and none of us noticed.',
    priority: 53,
  },
  {
    id: 'godel-beat-dance-hall',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1929 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'A dance hall off the Ring is loud and warm and nobody in it wants anything from him, and he goes back the following week.',
    priority: 50,
  },
  {
    id: 'godel-beat-family-disapprove',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'The family call the woman from the dance hall a passing thing, and he does not argue with them, and does not stop going.',
    priority: 38,
  },
  {
    id: 'godel-beat-ring-shouting',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1929 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'There is shouting on the Ring again and the seminar begins late, and nobody in the room mentions why the trams stopped running.',
    priority: 47,
  },
  {
    id: 'godel-beat-taken-for-shy',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'The others take him for shy for two years, until the afternoon he corrects a proof at the board in a voice none of them has heard.',
    priority: 34,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1929–1931
  // -------------------------------------------------------------------------
  {
    id: 'godel-beat-telegram-brno',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'The telegram from Brno comes in February, and by summer the household in Vienna is larger by his mother and smaller by his father.',
    priority: 56,
  },
  {
    id: 'godel-beat-family-flat',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1933 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'His mother and brother take a flat near the university and he moves in with them, and the three of them go to the opera on Thursdays.',
    priority: 50,
  },
  {
    id: 'godel-beat-citizenship-1929',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'He files for Austrian citizenship at a counter where the clerk asks him twice whether he quite understands what he is giving up.',
    priority: 44,
  },
  {
    id: 'godel-beat-dissertation-typed',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'The dissertation has to be typed by somebody else, and he reads the typescript three times through on account of one comma.',
    priority: 42,
  },
  {
    id: 'godel-beat-hahn-accepted',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1931 },
      { type: 'projectCompleted', projectId: 'godel-completeness-theorem' },
    ],
    speaker: 'HAHN',
    text: 'It is accepted, and it is short, and in twenty years nobody will remember that anybody ever doubted the thing you have just settled.',
    priority: 58,
  },
  {
    id: 'godel-beat-no-salary',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1932 },
      { not: { type: 'resourceAtLeast', resource: 'standing', value: 2 } },
    ],
    text: 'A doctorate buys him no salary and no room of his own at the university, only the settled right to be inside the building.',
    priority: 45,
  },
  {
    id: 'godel-beat-train-north',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'The train north takes two nights, and he spends the second of them deciding how few words the thing can honestly be said in.',
    priority: 46,
  },
  {
    id: 'godel-beat-konigsberg-cold-stone',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1932 },
      { type: 'locationIs', locationId: 'konigsberg' },
    ],
    text: 'Königsberg smells of sea and cold stone, and the conference hall is heated to exactly the temperature at which men agree with one another.',
    priority: 55,
  },
  {
    id: 'godel-beat-numbering-check',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'He checks the numbering a fourth time, because the whole thing rests on a clerk’s trick and clerks are known to make mistakes.',
    priority: 43,
  },
  {
    id: 'godel-beat-mother-interval',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1933 },
    ],
    speaker: 'HIS MOTHER',
    text: 'Come to the theatre on Thursday, Kurt; you may think about your logic in the interval like everybody else does.',
    priority: 41,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1930–1934
  // -------------------------------------------------------------------------
  {
    id: 'godel-beat-offprints',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1934 },
      { type: 'projectCompleted', projectId: 'godel-incompleteness' },
    ],
    text: 'Requests for offprints arrive from Warsaw, Cambridge and New Jersey, and he posts every one himself with a covering note of two lines.',
    priority: 54,
  },
  {
    id: 'godel-beat-typesetter',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The typesetter has half the symbols he needs and none of the rest, and the proofs come back with the argument spelled out in words.',
    priority: 40,
  },
  {
    id: 'godel-beat-zermelo',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'Zermelo tells him at a meeting that he has misunderstood his own theorem, and he answers by letter, at length, and is not believed.',
    priority: 44,
  },
  {
    id: 'godel-beat-congratulated-wrongly',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1936 },
    ],
    text: 'People congratulate him for showing that mathematics cannot be trusted, which is the reverse of what he proved, and he corrects three of them and then stops.',
    priority: 42,
  },
  {
    id: 'godel-beat-second-theorem-page',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The second theorem takes a page and a half to say that no system can promise its own safety, and looks obvious the moment it is written down.',
    priority: 43,
  },
  {
    id: 'godel-beat-vonneumann-yours',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1934 },
    ],
    speaker: 'VON NEUMANN',
    text: 'I had the corollary a fortnight after Königsberg and you had it already, so it is yours, and I shall say so wherever I am asked.',
    priority: 52,
  },
  {
    id: 'godel-beat-first-lecture-room',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1936 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'The room they give him holds forty and is never a sixth full, and he prepares for it exactly as he would for four hundred.',
    priority: 50,
  },
  {
    id: 'godel-beat-crossing-cabin',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1935 },
      { type: 'visitedLocation', locationId: 'princeton' },
    ],
    text: 'The crossing takes eight days and he keeps to the cabin with a notebook, a ship being a system with no outside from which to check it.',
    priority: 51,
  },
  {
    id: 'godel-beat-princeton-elms',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1939 },
      { type: 'locationIs', locationId: 'princeton' },
    ],
    text: 'Princeton is wooden houses and elms and a borrowed room, and the audience for his lectures is small and entirely awake.',
    priority: 53,
  },
  {
    id: 'godel-beat-letters-in-pairs',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1939 },
      { type: 'locationIs', locationId: 'princeton' },
    ],
    text: 'Letters from Vienna take three weeks and arrive in pairs, so he reads a piece of news and its correction on the same afternoon.',
    priority: 49,
  },
  {
    id: 'godel-beat-tired-1934',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1936 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 3 } },
    ],
    text: 'He is tired in a way sleep does not reach, and he writes the word rest in the notebook as though it were a task with steps.',
    priority: 47,
  },
  {
    id: 'godel-beat-hilbert-better-means',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1942 },
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen' },
    ],
    speaker: 'HILBERT',
    text: 'Then the consistency must be reached by other means, young man, and we shall simply have to go and find better means.',
    priority: 62,
  },
  {
    id: 'godel-beat-noether-corridor',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1933 },
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'noether', locationId: 'gottingen' },
    ],
    text: 'Noether’s seminar spills out into the corridor, all of it shouted and none of it unkind, and he stands at the back taking nothing down.',
    priority: 60,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1934–1940
  // -------------------------------------------------------------------------
  {
    id: 'godel-beat-empty-chairs',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1938 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'Two more chairs are empty at the Thursday seminar, and the reasons given are all professional, and none of the reasons are professional.',
    priority: 55,
  },
  {
    id: 'godel-beat-side-stair',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1940 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'There are new badges in the corridor and the porter greets him differently, and he notices that he has begun using the side stair.',
    priority: 56,
  },
  {
    id: 'godel-beat-institute-writes',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'The Institute writes from New Jersey twice a year, politely, to ask whether he is well and whether he might come for a term.',
    priority: 46,
  },
  {
    id: 'godel-beat-found-fit',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'A board declares him fit for garrison duty, the first time in his life a physician’s verdict has gone against him in that direction.',
    priority: 54,
  },
  {
    id: 'godel-beat-new-order-form',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'The new order wants him to apply again for the right to lecture, on a form that asks about his ancestry before it asks about his mathematics.',
    priority: 52,
  },
  {
    id: 'godel-beat-three-ministries',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'He queues at three ministries in one week, and each of them requires a paper that one of the other two must issue first.',
    priority: 50,
  },
  {
    id: 'godel-beat-adele-trunk',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1941 },
      { type: 'narrativeFlag', flag: 'godel.married' },
    ],
    speaker: 'ADELE',
    text: 'I have the tickets and the trunk is packed, Kurtele, and you are welcome to check my arithmetic once we are on the train.',
    priority: 60,
  },
  {
    id: 'godel-beat-constructible-evenings',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1940 },
      { type: 'projectNotCompleted', projectId: 'godel-constructible-universe' },
    ],
    text: 'The set theory goes on in the evenings regardless, since the constructible sets take no interest at all in what is happening on the Ring.',
    priority: 48,
  },
  {
    id: 'godel-beat-four-students',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1939 },
      { type: 'locationIs', locationId: 'vienna' },
    ],
    text: 'He lectures to four students on the axiom of choice, and one of them asks a question that takes him a fortnight to answer properly.',
    priority: 49,
  },
  {
    id: 'godel-beat-kitchen-coal',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1939 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'Coal is dear this winter, so he works in the kitchen, which is the only warm room, with somebody reading quietly opposite.',
    priority: 45,
  },
  {
    id: 'godel-beat-address-book',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'He copies the addresses of everyone he still writes to into one small book, and the book is shorter than it was two years ago.',
    priority: 47,
  },
  {
    id: 'godel-beat-timetable-east',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'The route reads Berlin, Moscow, Manchuria, Yokohama, and he studies the timetable the way other men read a novel.',
    priority: 51,
  },
  {
    id: 'godel-beat-garden-instructions',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1939 },
      { type: 'narrativeFlag', flag: 'godel.sanatorium' },
    ],
    text: 'He spends part of the year somewhere quiet with a garden and instructions to do nothing, which he follows as exactly as he follows anything.',
    priority: 57,
  },
  {
    id: 'godel-beat-brother-rest',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1938 },
    ],
    speaker: 'HIS BROTHER',
    text: 'Rest is not a thing whose necessity you can prove, Kurt; you simply do it, and afterwards you find you are glad.',
    priority: 46,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1940–1978 — Princeton
  // -------------------------------------------------------------------------
  {
    id: 'godel-beat-desk-no-duties',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1943 },
      { type: 'locationIs', locationId: 'princeton' },
    ],
    text: 'The Institute gives him a desk, a year’s appointment and no duties, and the absence of duties turns out to be harder to plan around than duties.',
    priority: 56,
  },
  {
    id: 'godel-beat-renewed-again',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1952 },
      { type: 'locationIs', locationId: 'princeton' },
      { not: { type: 'narrativeFlag', flag: 'godel.professor' } },
    ],
    text: 'The appointment is renewed for another year, as it has been every year, and he does not ask anybody why it is only ever a year.',
    priority: 55,
  },
  {
    id: 'godel-beat-morgenstern-corner',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1942 },
      { type: 'yearAtMost', year: 1958 },
      { type: 'locationIs', locationId: 'princeton' },
    ],
    speaker: 'MORGENSTERN',
    text: 'Walk with me as far as the corner, Gödel, and tell me the objection you were too polite to make in there.',
    priority: 57,
  },
  {
    id: 'godel-beat-pink-bird',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1965 },
      { type: 'locationIs', locationId: 'princeton' },
    ],
    text: 'Adele sets a pink bird of painted metal in the garden, and he likes it better than anything else they own, and says so to visitors.',
    priority: 52,
  },
  {
    id: 'godel-beat-adele-bird',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1968 },
      { type: 'locationIs', locationId: 'princeton' },
    ],
    speaker: 'ADELE',
    text: 'Come out and look at the bird in the garden, Kurtele, before you decide what you think about it.',
    priority: 51,
  },
  {
    id: 'godel-beat-small-white-house',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1962 },
      { type: 'locationIs', locationId: 'princeton' },
    ],
    text: 'The house on the quiet street is small and white and theirs, and he measures the study twice before deciding where the desk will stand.',
    priority: 50,
  },
  {
    id: 'godel-beat-leibniz-kept-back',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1962 },
    ],
    text: 'He reads Leibniz for two years and grows certain that some of it was kept from print, and he says so only to people who will not repeat it.',
    priority: 44,
  },
  {
    id: 'godel-beat-husserl-notebooks',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1959 },
      { type: 'yearAtMost', year: 1972 },
    ],
    text: 'He takes up Husserl in the original and fills three notebooks over a winter, not one of which he will let out of the house.',
    priority: 43,
  },
  {
    id: 'godel-beat-tea-at-three',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1965 },
      { type: 'locationIs', locationId: 'princeton' },
    ],
    text: 'Tea is at three and he comes to it most days, stands near the window, and leaves the moment a second conversation starts up.',
    priority: 48,
  },
  {
    id: 'godel-beat-ontological-shown-once',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1968 },
      { type: 'yearAtMost', year: 1974 },
    ],
    text: 'He shows the argument about necessary existence to one younger colleague and asks that it not be printed, because it is not finished and may not be.',
    priority: 45,
  },
  {
    id: 'godel-beat-prize-thirty-one-words',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1955 },
      { type: 'projectCompleted', projectId: 'godel-incompleteness' },
    ],
    text: 'A prize arrives for work of twenty years ago and he is asked to say a few words at the dinner, and says thirty-one of them.',
    priority: 49,
  },
  {
    id: 'godel-beat-medal-read-out',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1974 },
      { type: 'yearAtMost', year: 1977 },
    ],
    text: 'A medal comes from Washington, somebody else stands up to receive it, and the citation is read aloud in a room he is not in.',
    priority: 47,
  },
  {
    id: 'godel-beat-four-minutes-at-the-door',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1965 },
      { type: 'yearAtMost', year: 1977 },
      { type: 'narrativeFlag', flag: 'godel.circleDrawnIn' },
    ],
    text: 'Visitors are received at the door, courteously, for four minutes, and afterwards he writes down what was said and what he replied.',
    priority: 58,
  },
  {
    id: 'godel-beat-agreed-hour',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1964 },
      { type: 'yearAtMost', year: 1977 },
    ],
    text: 'He answers the telephone between four and five and not otherwise, because an agreed hour is a small system he can see the whole of.',
    priority: 46,
  },
  {
    id: 'godel-beat-nearly-finished',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1972 },
    ],
    text: 'Three papers in the drawer are nearly finished, and nearly finished has become the exact distance he cannot bring himself to cross.',
    priority: 44,
  },
  {
    id: 'godel-beat-vonneumann-lawn',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1954 },
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'princeton' },
    ],
    text: 'Von Neumann crosses the lawn talking already and has the answer before the question is out, and is still the one man here who listens.',
    priority: 63,
  },
  {
    id: 'godel-beat-bohr-quite-right',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1943 },
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'bohr', locationId: 'princeton' },
    ],
    speaker: 'BOHR',
    text: 'No, no, you are quite right, quite right — but consider, Herr Gödel, whether being right is the only thing a statement can be.',
    priority: 64,
  },
  {
    id: 'godel-beat-oppenheimer-corridor',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1954 },
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'princeton' },
    ],
    text: 'The director quotes poetry in the common room and then asks him three exact questions in the corridor, where nobody can hear the answers.',
    priority: 62,
  },
  {
    id: 'godel-beat-young-logicians',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1960 },
      { type: 'yearAtMost', year: 1974 },
    ],
    text: 'Young logicians write to him as though to a monument, and he answers each one properly, with corrections, in a hand they can barely read.',
    priority: 45,
  },
  {
    id: 'godel-beat-long-last-winter',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1976 },
      { type: 'yearAtMost', year: 1978 },
    ],
    text: 'The winter is long and he keeps his own hours, and what is on the desk stays between him and the page, as it always has.',
    priority: 53,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'godel-beat-rain-lamp-at-noon',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1978 },
    ],
    text: 'Rain settles in for the week and he works with the lamp lit at noon, and minds it considerably less than the household does.',
    priority: 5,
    repeatable: true,
  },
  {
    id: 'godel-beat-four-oclock-quiet',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1978 },
    ],
    text: 'At four o’clock the building goes quiet enough to hear the radiators, and that hour is reliably the best hour of his day.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'godel-beat-same-route',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1978 },
    ],
    text: 'He eats at the same hour and walks the same route, and is faintly uneasy for the whole of any day that alters either.',
    priority: 7,
    repeatable: true,
  },
  {
    id: 'godel-beat-second-time-through',
    characterId: 'godel',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1978 },
    ],
    text: 'He works a line through twice before he will write it down, and the second time is never the formality other people take it for.',
    priority: 6,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Strain, when the years of work have taken more than they have given back
  // -------------------------------------------------------------------------
  {
    id: 'godel-beat-strain-unsent',
    characterId: 'godel',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 4 }],
    text: 'He weighs the bread and the butter the way he would weigh a proof, and the letter to his mother is begun four times and sent none of them.',
    priority: 40,
    repeatable: true,
  },
  {
    id: 'godel-beat-strain-cold-soup',
    characterId: 'godel',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 2 }],
    text: 'The plate is set down in front of him and he waits until somebody else has eaten from it, and the soup goes cold while he waits.',
    priority: 50,
    repeatable: true,
  },
  {
    id: 'godel-beat-strain-date',
    characterId: 'godel',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 0 }],
    text: 'The notebook is open and the shorthand is ready, and by evening the page carries the date and nothing underneath the date.',
    priority: 60,
    repeatable: true,
  },
];
