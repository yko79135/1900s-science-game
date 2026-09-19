import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of Emmy Noether, 1882–1935.
 *
 * The authored scenes own the doorway at Erlangen, the letter from Göttingen,
 * the theorem, the paragraph with her name inside it and the crossing. These
 * are the years in between: the corridor she waits in, the postcards across a
 * town she could walk in twenty minutes, the chalk, the seven years without a
 * title, the flat with the seminar on the stairs. Beats carrying a place, a
 * flag or a finished project outrank the general ones, so a life that stayed
 * in Erlangen and a life that got to Göttingen do not sound the same.
 */

export const NOETHER_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1892–1900
  // -------------------------------------------------------------------------
  {
    id: 'noether-beat-three-brothers',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1892 },
      { type: 'yearAtMost', year: 1897 },
    ],
    text: 'Three brothers make enough noise at the table that nobody notices the eldest has stopped talking and started counting.',
    priority: 30,
  },
  {
    id: 'noether-beat-fathers-pace',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1892 },
      { type: 'yearAtMost', year: 1899 },
    ],
    text: 'Her father crosses the courtyard slowly and refuses an arm, and she learns to walk at his pace without being asked to.',
    priority: 30,
  },
  {
    id: 'noether-beat-winter-balls',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1900 },
    ],
    text: 'She loves the winter dances and misses none of them, and is the only girl in the room who has been turning a problem over all evening.',
    priority: 30,
  },
  {
    id: 'noether-beat-spectacles',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1893 },
      { type: 'yearAtMost', year: 1899 },
    ],
    text: 'The new spectacles are thick enough to change her face, and she minds that a good deal less than the household expects her to.',
    priority: 26,
  },
  {
    id: 'noether-beat-soup',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1894 },
      { type: 'yearAtMost', year: 1899 },
    ],
    speaker: 'IDA',
    text: 'Emmy. The soup. Leave the sum where it is, it will still be there, and look at the soup.',
    priority: 32,
  },
  {
    id: 'noether-beat-girls-school-french',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1892 },
      { type: 'yearAtMost', year: 1898 },
    ],
    text: 'At the girls’ school the mathematics stops at what a household needs, and the French and the English go on for years.',
    priority: 30,
  },
  {
    id: 'noether-beat-sunday-colleagues',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1900 },
    ],
    text: 'Her father’s colleagues come on Sunday afternoons and talk across her, and about once a year one of them asks her something by accident.',
    priority: 32,
  },
  {
    id: 'noether-beat-hold-the-lamp',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1896 },
      { type: 'yearAtMost', year: 1900 },
    ],
    speaker: 'MAX NOETHER',
    text: 'Bring the lamp nearer. No — you read it out to me, my eyes have had enough of that hand today.',
    priority: 34,
  },
  {
    id: 'noether-beat-irregular-verbs',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1900 },
    ],
    text: 'For a year she drills irregular verbs at a schoolmistress’s pace and keeps a second book that has nothing to do with verbs in it.',
    priority: 34,
  },
  {
    id: 'noether-beat-fritz-slower',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1896 },
      { type: 'yearAtMost', year: 1900 },
    ],
    speaker: 'FRITZ',
    text: 'Slower, Emmy. Not because I am younger — because you said it at the speed you thought it, and I am only listening.',
    priority: 32,
  },

  // -------------------------------------------------------------------------
  // Education, 1900–1908
  // -------------------------------------------------------------------------
  {
    id: 'noether-beat-signature-refused',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'One professor refuses her without giving a reason, and she takes his course anyway, out of the notebook of a man who was allowed in.',
    priority: 36,
  },
  {
    id: 'noether-beat-corridor-window',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1905 },
    ],
    text: 'There is no room for her to wait in between lectures, so she waits at the corridor window with a book held close to her face.',
    priority: 36,
  },
  {
    id: 'noether-beat-fees-from-the-salary',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1906 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 2 } },
    ],
    text: 'Her fees come out of her father’s salary, and the household economises in ways that are never once discussed at the table.',
    priority: 40,
  },
  {
    id: 'noether-beat-fathers-course-again',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1901 },
      { type: 'yearAtMost', year: 1904 },
    ],
    text: 'She sits her father’s course twice more than she needs to, because his proofs go slowly and she wants to know exactly where.',
    priority: 34,
  },
  {
    id: 'noether-beat-nuremberg-exam',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1903 },
      { type: 'yearAtMost', year: 1904 },
    ],
    text: 'She sits the matriculation examination in Nuremberg among boys of eighteen and comes home on the evening train with the certificate in her coat.',
    priority: 40,
  },
  {
    id: 'noether-beat-train-from-gottingen',
    characterId: 'noether',
    conditions: [
      { type: 'visitedLocation', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1907 },
    ],
    text: 'The journey back takes the whole day, and she spends it copying out a lattice a lecturer drew and then wiped off too quickly.',
    priority: 42,
  },
  {
    id: 'noether-beat-matriculation-allowed',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1906 },
    ],
    text: 'The university decides women may enrol after all, and the decision is read out in a tone suggesting nothing much has changed.',
    priority: 38,
  },
  {
    id: 'noether-beat-gordan-standing',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'erlangen' },
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1907 },
    ],
    text: 'Gordan works standing, filling the blackboard and talking at it rather than at the room, and she learns more from the hand than the result.',
    priority: 40,
  },
  {
    id: 'noether-beat-gordan-compute',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1905 },
      { type: 'yearAtMost', year: 1907 },
    ],
    speaker: 'GORDAN',
    text: 'Compute it, Fräulein. Get the formulas onto the paper and the structure will look after itself, as it always has.',
    priority: 40,
  },
  {
    id: 'noether-beat-summer-invariants',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1907 },
    ],
    text: 'Over the summer she reads what Göttingen has published on invariants and finds a way of thinking that hardly needs the formulas at all.',
    priority: 38,
  },
  {
    id: 'noether-beat-three-hundred-invariants',
    characterId: 'noether',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'noether-invariant-theory' },
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1908 },
    ],
    text: 'The system runs to three hundred and thirty-one invariants, and she checks the last of them twice, because nobody else is going to.',
    priority: 42,
  },
  {
    id: 'noether-beat-bound-copy',
    characterId: 'noether',
    conditions: [
      { type: 'projectCompleted', projectId: 'noether-invariant-theory' },
      { type: 'yearAtLeast', year: 1907 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'The bound copy goes on the shelf between her father’s books, spine outward, and she does not take it down again.',
    priority: 42,
  },
  {
    id: 'noether-beat-congratulate-the-father',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1907 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'Her examiners congratulate her father first, and then, in the pause somebody has to fill, they congratulate her.',
    priority: 40,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1908–1915
  // -------------------------------------------------------------------------
  {
    id: 'noether-beat-fathers-name-on-the-list',
    characterId: 'noether',
    conditions: [
      { type: 'narrativeFlag', flag: 'noether.unpaidErlangen' },
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1915 },
    ],
    text: 'The course stands under her father’s name on the list, and the eleven men who come to it know perfectly well whose course it is.',
    priority: 46,
  },
  {
    id: 'noether-beat-no-register',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1915 },
    ],
    text: 'No title, no salary, no register to sign: nothing in the university’s papers will ever show that these years happened.',
    priority: 40,
  },
  {
    id: 'noether-beat-taking-his-lectures',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1910 },
      { type: 'yearAtMost', year: 1915 },
    ],
    text: 'When her father’s health keeps him at home she takes the lecture at no notice, and next week’s announcement mentions none of it.',
    priority: 42,
  },
  {
    id: 'noether-beat-salzburg',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'She joins the mathematical society and speaks at its meeting, where nobody has met her and three men in the room have read her.',
    priority: 40,
  },
  {
    id: 'noether-beat-vienna-cafe',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1915 },
    ],
    text: 'She gives a lecture in Vienna and is taken afterwards to a café where the argument runs on until the trams stop.',
    priority: 40,
  },
  {
    id: 'noether-beat-gordan-dies',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'Gordan dies in the winter, and she finds herself defending his methods to men who never once had to use them.',
    priority: 44,
  },
  {
    id: 'noether-beat-fischer-ask-what',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1915 },
    ],
    speaker: 'FISCHER',
    text: 'Put the formulas down, Fräulein Noether. Ask what the thing stays the same under, and ask that first.',
    priority: 44,
  },
  {
    id: 'noether-beat-postcards-across-town',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'erlangen' },
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1915 },
    ],
    text: 'She and Fischer conduct an argument by postcard across a town either of them could walk in twenty minutes.',
    priority: 46,
  },
  {
    id: 'noether-beat-eight-years-no-salary',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1915 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 2 } },
    ],
    text: 'Years of work have produced no salary at all, and the arithmetic of that is the one calculation she declines to carry out.',
    priority: 46,
  },
  {
    id: 'noether-beat-school-post-thursday',
    characterId: 'noether',
    conditions: [
      { type: 'narrativeFlag', flag: 'noether.schoolPost' },
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'The girls’ school would pay her properly and leave her the evenings, and every autumn she says again that she will think about it.',
    priority: 46,
  },
  {
    id: 'noether-beat-marking-scripts',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1910 },
      { type: 'yearAtMost', year: 1915 },
    ],
    text: 'She corrects other people’s examination scripts for a fee that is not a salary and that nobody makes the mistake of calling one.',
    priority: 38,
  },
  {
    id: 'noether-beat-mother-dies',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1917 },
    ],
    text: 'Her mother dies in the spring, and a house that has always had somebody in the kitchen stops having anybody in the kitchen.',
    priority: 52,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1915–1919
  // -------------------------------------------------------------------------
  {
    id: 'noether-beat-room-over-a-garden',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'Her rented room looks over a garden she never once walks in, and the rent takes most of what Erlangen sends.',
    priority: 44,
  },
  {
    id: 'noether-beat-klein-faculties',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1918 },
    ],
    speaker: 'KLEIN',
    text: 'The faculty will come round, Fräulein Noether, the way faculties do: slowly, and then insisting it was their own idea.',
    priority: 46,
  },
  {
    id: 'noether-beat-hilbert-arrangement',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1919 },
    ],
    speaker: 'HILBERT',
    text: 'You will lecture and I will put my name on the announcement, and we shall both be insulted by the arrangement in different ways.',
    priority: 56,
  },
  {
    id: 'noether-beat-with-assistance',
    characterId: 'noether',
    conditions: [
      { type: 'narrativeFlag', flag: 'noether.underHilbertsName' },
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The lecture list reads Professor Hilbert, with assistance, and the assistance stands at the front of the hall for the whole hour.',
    priority: 50,
  },
  {
    id: 'noether-beat-winter-of-turnips',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'The winter of turnips: the hall keeps its coats on through the hour and she writes in gloves with the fingers cut away.',
    priority: 48,
  },
  {
    id: 'noether-beat-fritz-at-the-front',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'Fritz writes from the army in a hand that gets smaller each month, to fit more of the war onto the same sheet.',
    priority: 46,
  },
  {
    id: 'noether-beat-bread-parcel',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'A parcel comes from home with bread in it, and she divides it among students who have further to walk than she does.',
    priority: 44,
  },
  {
    id: 'noether-beat-group-underneath',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'She reads the new theory of gravitation the way she reads everything, for the group underneath it, and the group underneath it is enormous.',
    priority: 46,
  },
  {
    id: 'noether-beat-nearly-closed',
    characterId: 'noether',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'noether-theorem' },
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The symmetry argument is nearly closed, and nearly is a word she has learned to distrust most when she is the one using it.',
    priority: 50,
  },
  {
    id: 'noether-beat-two-pages-do-it',
    characterId: 'noether',
    conditions: [
      { type: 'narrativeFlag', flag: 'noether.theoremProved' },
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'Two pages carry the whole result, and she is faintly disappointed that the rest of the paper still needs the other thirty.',
    priority: 54,
  },
  {
    id: 'noether-beat-habilitation-file',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The file on her right to lecture has been open for years and now weighs more than the dissertation it keeps referring to.',
    priority: 48,
  },
  {
    id: 'noether-beat-november-no-coal',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'In November the town has a workers’ council and no coal, and the seminar meets regardless, in somebody’s kitchen.',
    priority: 48,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1919–1933
  // -------------------------------------------------------------------------
  {
    id: 'noether-beat-right-without-salary',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1922 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 2 } },
    ],
    text: 'The right to lecture arrives with no salary attached to it, which she had been warned of and had not quite believed.',
    priority: 50,
  },
  {
    id: 'noether-beat-teaching-commission',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1926 },
    ],
    text: 'From the spring there is a commission to teach algebra and a payment for it, small enough to be a standing joke among her students.',
    priority: 46,
  },
  {
    id: 'noether-beat-money-halves',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1924 },
    ],
    text: 'The money halves every week that autumn, so she pays the milkman in the morning, when the sum still means something.',
    priority: 48,
  },
  {
    id: 'noether-beat-no-christmas-erlangen',
    characterId: 'noether',
    conditions: [
      { type: 'narrativeFlag', flag: 'noether.fatherGone' },
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'Nobody in Erlangen expects her at Christmas now, so she stops going, and the vacation becomes the best working month of the year.',
    priority: 50,
  },
  {
    id: 'noether-beat-faster-than-chalk',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'She lectures faster than chalk allows: half the room copies nothing and follows her, half copies everything and follows nothing.',
    priority: 36,
  },
  {
    id: 'noether-beat-hair-and-chalk',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'By the middle of the hour her hair has come down and there is chalk down the front of her dress, and she has noticed neither.',
    priority: 34,
  },
  {
    id: 'noether-beat-same-table-restaurant',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'She takes her midday meal at the same table in the same restaurant and does mathematics across it with whoever sits down.',
    priority: 34,
  },
  {
    id: 'noether-beat-two-rooms-and-a-table',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The flat is two rooms and a table that has never once been clear, and in a full term the seminar spills onto the stairs.',
    priority: 38,
  },
  {
    id: 'noether-beat-chain-condition',
    characterId: 'noether',
    conditions: [
      { type: 'projectCompleted', projectId: 'noether-ideal-theory' },
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'The condition on the chains does in one line what used to take a chapter, and she is still surprised when people attach her name to it.',
    priority: 52,
  },
  {
    id: 'noether-beat-waerden-written-out',
    characterId: 'noether',
    conditions: [
      { type: 'narrativeFlag', flag: 'noether.waerdenNotes' },
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1931 },
    ],
    speaker: 'VAN DER WAERDEN',
    text: 'I have written it out as you said it, Fräulein Noether. It takes four times the pages and half the thinking.',
    priority: 52,
  },
  {
    id: 'noether-beat-textbook-appears',
    characterId: 'noether',
    conditions: [
      { type: 'projectCompleted', projectId: 'noether-algebra-school' },
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'A textbook appears with a young man’s name on the spine and her methods throughout it, and she recommends it to everyone without qualification.',
    priority: 52,
  },
  {
    id: 'noether-beat-topologist-summer',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'The topologist from Moscow spends another summer here and turns her arguments into shapes she never asked him for and cannot unsee.',
    priority: 42,
  },
  {
    id: 'noether-beat-alexandrov-nine',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1930 },
    ],
    speaker: 'ALEXANDROV',
    text: 'In Moscow nobody will care that you are a woman, Emmy Noether. They will only ask whether the lecture is at nine.',
    priority: 46,
  },
  {
    id: 'noether-beat-hasse-margin',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1933 },
    ],
    speaker: 'HASSE',
    text: 'Your letter came with the proof written up the margin again, Fräulein Noether. The margin is not a journal.',
    priority: 44,
  },
  {
    id: 'noether-beat-artin-same-year',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'She and Artin reach the same result from two directions in one year and spend a good evening deciding it does not matter whose it is.',
    priority: 42,
  },
  {
    id: 'noether-beat-vonneumann-lunch',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'The Hungarian who is twenty-three and already everywhere repeats her lecture back to her at lunch, improved, without noticing he has done it.',
    priority: 58,
  },
  {
    id: 'noether-beat-american-student-poetry',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'An American doctoral student quotes poetry across the seminar table and then asks the one question that shows he has followed all of it.',
    priority: 58,
  },
  {
    id: 'noether-beat-berlin-questions',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'In Berlin, where the conservation problem came from, the physicists ask her across a table the questions they would never put in the post.',
    priority: 58,
  },
  {
    id: 'noether-beat-hilbert-retires',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1933 },
    ],
    speaker: 'HILBERT',
    text: 'Thirty-five years, and the thing I am proudest of is an appointment the faculty assured me I could not make.',
    priority: 56,
  },
  {
    id: 'noether-beat-weyl-chair',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1933 },
    ],
    speaker: 'WEYL',
    text: 'You are the stronger mathematician, Fräulein Noether, and I hold the better chair, and I have stopped trying to explain that to visitors.',
    priority: 54,
  },
  {
    id: 'noether-beat-three-qualifiers',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'Her title carries three qualifiers and each of them means the same thing: that the post can be withdrawn without anybody holding a hearing.',
    priority: 44,
  },
  {
    id: 'noether-beat-eleven-languages',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'In June the town smells of lime trees and printer’s ink, and there are a dozen languages going in the mathematics reading room.',
    priority: 40,
  },
  {
    id: 'noether-beat-shared-prize',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The prize is shared with a younger man and comes with no post attached, which is the shape every honour of hers has had.',
    priority: 48,
  },
  {
    id: 'noether-beat-wrong-petitions',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'She is counted among those who signed the wrong appeals after the war, and it is remembered by the sort of men who keep files.',
    priority: 44,
  },
  {
    id: 'noether-beat-four-lectures-of-rest',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1933 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'The doctor tells her to rest and she asks how long, and works out that the answer comes to four lectures.',
    priority: 50,
  },
  {
    id: 'noether-beat-nobody-asks',
    characterId: 'noether',
    conditions: [
      { type: 'narrativeFlag', flag: 'noether.quietDecade' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'Nobody has asked her to speak for three years, and the work goes on in the notebooks at exactly the rate it always did.',
    priority: 52,
  },
  {
    id: 'noether-beat-brown-uniform',
    characterId: 'noether',
    conditions: [
      { type: 'narrativeFlag', flag: 'noether.apartmentSeminar' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'The seminar meets in her flat now, and one of them comes in a brown uniform, and she teaches him exactly as she teaches the others.',
    priority: 58,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1933–1935
  // -------------------------------------------------------------------------
  {
    id: 'noether-beat-lawns-and-committee',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'brynMawr' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'The college has lawns, a library that opens at eight, and a salary paid by a committee in New York for one year only.',
    priority: 52,
  },
  {
    id: 'noether-beat-wheeler-german',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'brynMawr' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1935 },
    ],
    speaker: 'ANNA PELL WHEELER',
    text: 'Say it in German, Miss Noether. I will say it again in English afterwards and we shall lose very little on the way.',
    priority: 54,
  },
  {
    id: 'noether-beat-tuesday-train',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'brynMawr' },
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'Once a week she takes the train up to the Institute and lectures to a room of men who have read her and never heard her.',
    priority: 52,
  },
  {
    id: 'noether-beat-nothing-female',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1935 },
    ],
    speaker: 'EMMY',
    text: 'It is a men’s university, they tell me, where nothing female is admitted. I go up on the morning train regardless.',
    priority: 54,
  },
  {
    id: 'noether-beat-princeton-coat',
    characterId: 'noether',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'The physicist from Berlin is here too, walking to the Institute in a coat that does not fit, and they argue symmetry along the path.',
    priority: 60,
  },
  {
    id: 'noether-beat-four-notebooks',
    characterId: 'noether',
    conditions: [
      { type: 'narrativeFlag', flag: 'noether.brynMawrCircle' },
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'Four young women follow her from room to room with their notebooks open, and she calls them her girls, and they let her.',
    priority: 56,
  },
  {
    id: 'noether-beat-fritz-siberia',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'Fritz writes from a university far out east that has taken him in, and describes the winter there as though it were a mathematical object.',
    priority: 50,
  },
  {
    id: 'noether-beat-summer-crates',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'She goes back in the summer to settle the flat; the neighbours are careful with her, and the books go into crates for the last time.',
    priority: 52,
  },
  {
    id: 'noether-beat-finding-posts',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'The letters ask her to find posts for people she taught, and she writes to everybody she knows in a country she has been in one year.',
    priority: 50,
  },
  {
    id: 'noether-beat-renewed-a-year',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1935 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'The appointment is renewed a year at a time, and she long ago stopped expecting any appointment to reach further than that.',
    priority: 50,
  },
  {
    id: 'noether-beat-small-operation',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'A doctor finds something in the spring and calls the operation a small one, and she puts it in the diary for after the term.',
    priority: 56,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'noether-beat-chalk-stub',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1908 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'The chalk snaps, she keeps the stub, and the sentence goes on without a pause for either event.',
    priority: 9,
    repeatable: true,
  },
  {
    id: 'noether-beat-wet-wool',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'Rain comes over the hills before noon and the hall fills with the smell of wet wool and old radiators.',
    priority: 6,
    repeatable: true,
  },
  {
    id: 'noether-beat-past-midnight',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'She works past midnight and cannot say afterwards which of the hours produced the line that turned out to be useful.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'noether-beat-walks-too-fast',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1908 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'She walks too fast for whoever is beside her, arrives mid-sentence, and expects the sentence to be picked up where it was dropped.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'noether-beat-offprints-first',
    characterId: 'noether',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'The post brings offprints from three countries and one bill, and the offprints are opened first, on the stairs.',
    priority: 7,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Strain, when the years of work have taken more than they have given back
  // -------------------------------------------------------------------------
  {
    id: 'noether-beat-strain-lost-thread',
    characterId: 'noether',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 4 }],
    text: 'She loses the thread twice at the blackboard and does not laugh about it, and the students come out of the hour quieter than they went into it.',
    priority: 40,
    repeatable: true,
  },
  {
    id: 'noether-beat-strain-first-bend',
    characterId: 'noether',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 2 }],
    text: 'She sets off to walk the students out as she always does and turns back at the first bend, and one of them asks her, carefully, whether she is unwell.',
    priority: 50,
    repeatable: true,
  },
  {
    id: 'noether-beat-strain-no-lecture',
    characterId: 'noether',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 0 }],
    text: 'No lecture is announced for this term under anybody’s name, and the offprints stay on the table in the string they arrived in.',
    priority: 60,
    repeatable: true,
  },
];
