import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of J. Robert Oppenheimer, 1904–1967.
 *
 * One line lands after a turn the authored scenes have no reason to interrupt:
 * a chauffeur set down a street early, a shilling meter in a cold Cambridge
 * room, a badge asked for by a sentry who knows perfectly well who he is. The
 * scenes own the cigar box of stones, the bench and the blackboard, the
 * caravan south, the collapsing star, the general's offer, the rain before
 * dawn and the room with the folding chairs. These are the years in between,
 * and they are gated the same way — by year, by place, by what the life has
 * and has not got. Beats with a place, a flag, or another scientist in the
 * same city on them outrank the general ones, so Göttingen, the mesa and the
 * Institute each sound like themselves.
 */

export const OPPENHEIMER_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1914–1922
  // -------------------------------------------------------------------------
  {
    id: 'oppenheimer-beat-ethics-instead',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'The school teaches ethics where other schools teach scripture, and he takes the distinction rather more seriously than the masters intend.',
    priority: 30,
  },
  {
    id: 'oppenheimer-beat-car-set-down-early',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'He asks to be set down a street early so the other boys will not see the car, and nobody at home is told why.',
    priority: 32,
  },
  {
    id: 'oppenheimer-beat-north-room-light',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1920 },
    ],
    speaker: 'HIS MOTHER',
    text: 'Stand nearer the window, Robert; there is an hour of good light left and you keep drifting into the dark part of the room.',
    priority: 34,
  },
  {
    id: 'oppenheimer-beat-mother-paints',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'His mother paints with one glove on and does not explain the glove, and he learns to be quiet there before anywhere else.',
    priority: 30,
  },
  {
    id: 'oppenheimer-beat-verse-notebook',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1922 },
    ],
    text: 'He writes verse in a notebook he shows to nobody, and rules a careful margin down the left of every page first.',
    priority: 30,
  },
  {
    id: 'oppenheimer-beat-paintings-in-the-hall',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1922 },
      { type: 'resourceAtLeast', resource: 'funds', value: 3 },
    ],
    text: 'The pictures in the hall are worth more than the building, and he walks past them twice a day without once being told so.',
    priority: 33,
  },
  {
    id: 'oppenheimer-beat-frank-twice',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1922 },
    ],
    speaker: 'FRANK',
    text: 'Show me the second part again, Robert, and this time leave out the bit where you say it is obvious.',
    priority: 32,
  },
  {
    id: 'oppenheimer-beat-summer-camp',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1922 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    text: 'The summer camp runs three weeks and he writes home about the geology, which is not the part of it that is hard.',
    priority: 36,
  },
  {
    id: 'oppenheimer-beat-ill-in-spring',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1921 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
    ],
    text: 'He is ill again in the spring and reads through it, propped up, with the curtains half drawn against a bright street.',
    priority: 34,
  },
  {
    id: 'oppenheimer-beat-squall-on-the-bay',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1922 },
    ],
    text: 'The little sloop takes a squall on the beam off the bay and he holds the course a good deal longer than the shore thinks wise.',
    priority: 32,
  },
  {
    id: 'oppenheimer-beat-after-the-bell',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1922 },
    ],
    speaker: 'THE CHEMISTRY MASTER',
    text: 'Stay behind if you like, Robert; I am here until six, and the apparatus is certainly not going anywhere tonight.',
    priority: 33,
  },
  {
    id: 'oppenheimer-beat-father-bookseller',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1922 },
    ],
    speaker: 'HIS FATHER',
    text: 'Order whatever you want to read next and have the bill sent to me; I would very much rather you were expensive than idle.',
    priority: 35,
  },

  // -------------------------------------------------------------------------
  // Education, 1922–1927
  // -------------------------------------------------------------------------
  {
    id: 'oppenheimer-beat-seventh-course',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1925 },
    ],
    text: 'Six courses a term is the stated limit, so he audits a seventh and sits at the back of it with his coat still on.',
    priority: 32,
  },
  {
    id: 'oppenheimer-beat-dante-in-italian',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1926 },
    ],
    text: 'He learns enough Italian over one vacation to read Dante, having decided in November that the translations were not telling the truth.',
    priority: 35,
  },
  {
    id: 'oppenheimer-beat-tutor-read-more',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1926 },
    ],
    speaker: 'A TUTOR',
    text: 'You have read more than any of us, Mr. Oppenheimer, and understood rather less of it than you appear to suppose.',
    priority: 36,
  },
  {
    id: 'oppenheimer-beat-bench-alone',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'The bench is a humiliation conducted in public, so he comes in early and gets the failing part of it done alone.',
    priority: 44,
  },
  {
    id: 'oppenheimer-beat-shilling-meter',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'The room off the Backs is cold in a way that cannot be argued with, and the meter eats sixpences all evening.',
    priority: 42,
  },
  {
    id: 'oppenheimer-beat-unposted-letter',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1927 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    text: 'He writes to a friend that he is no good at any of this, and then leaves the letter unposted for a week.',
    priority: 43,
  },
  {
    id: 'oppenheimer-beat-doctor-recommends-walking',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1927 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 3 } },
    ],
    text: 'A doctor in London asks him careful questions and recommends walking, and the walking is the part of it he takes up.',
    priority: 45,
  },
  {
    id: 'oppenheimer-beat-corsica-novel',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1928 },
    ],
    text: 'A fortnight abroad goes entirely on a long French novel, and he comes back saying only that it was useful.',
    priority: 36,
  },
  {
    id: 'oppenheimer-beat-gottingen-street',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1929 },
    ],
    text: 'Here the mathematics is done at the board and then again in the street afterwards, and the street part runs longer.',
    priority: 44,
  },
  {
    id: 'oppenheimer-beat-gottingen-hilbert',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1929 },
    ],
    text: 'Hilbert comes to the colloquium most weeks, and the question he asks at the end is always the one nobody prepared for.',
    priority: 52,
  },
  {
    id: 'oppenheimer-beat-gottingen-noether',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'noether', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1929 },
    ],
    text: 'The algebra lectures down the corridor are given by a woman the faculty took years to pay, and her students are the best in the building.',
    priority: 52,
  },
  {
    id: 'oppenheimer-beat-gottingen-vonneumann',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'The Hungarian in the second row finishes the calculation while the board is still being wiped, and has the grace to look apologetic.',
    priority: 54,
  },
  {
    id: 'oppenheimer-beat-german-sharpness',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1929 },
    ],
    text: 'The German comes back in six weeks, and with it a habit of saying the sharp thing in a language that makes it sound worse.',
    priority: 38,
  },
  {
    id: 'oppenheimer-beat-offprints-parcel',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1929 },
    ],
    text: 'The offprints of his own paper arrive in a flat brown parcel, and he leaves it on the table unopened until evening.',
    priority: 37,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1927–1936
  // -------------------------------------------------------------------------
  {
    id: 'oppenheimer-beat-too-fast-first-year',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'berkeley' },
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'He speaks too fast all the first year, and the students take down the shape of the argument and fill in the words at night.',
    priority: 44,
  },
  {
    id: 'oppenheimer-beat-say-it-again',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1934 },
    ],
    speaker: 'A STUDENT',
    text: 'Could you give us the last twenty minutes again, slowly, and this time facing the room instead of the board?',
    priority: 38,
  },
  {
    id: 'oppenheimer-beat-opje',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'They start calling him Opje in the corridor; he pretends not to hear it, and is answering to it within the month.',
    priority: 36,
  },
  {
    id: 'oppenheimer-beat-no-radio',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'There is no wireless in the flat and no newspaper on the table, and he hears about the Crash a week late, from a colleague.',
    priority: 40,
  },
  {
    id: 'oppenheimer-beat-two-students-east',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1936 },
      { type: 'projectCompleted', projectId: 'oppenheimer-berkeley-school' },
    ],
    text: 'Two of his students take posts in the East and the corridor is quieter for a term, which he is surprised to find he minds.',
    priority: 46,
  },
  {
    id: 'oppenheimer-beat-funeral-east',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'He goes East in the winter for a funeral and comes back with his father, who takes an apartment near the water.',
    priority: 42,
  },
  {
    id: 'oppenheimer-beat-thesis-better-than-his',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1936 },
    ],
    text: 'A pupil’s thesis is better than his own first paper, and he says so to the department in writing, at some length.',
    priority: 36,
  },
  {
    id: 'oppenheimer-beat-cousin-no-work',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1936 },
    ],
    speaker: 'HIS COUSIN',
    text: 'There is no work of any kind to be had here, Robert, and I am writing to everyone, and you are the last of them.',
    priority: 40,
  },
  {
    id: 'oppenheimer-beat-sanskrit-hour',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'berkeley' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'He begins Sanskrit with a scholar on the far side of the campus, an hour a week, and keeps it up longer than anyone expects.',
    priority: 45,
  },
  {
    id: 'oppenheimer-beat-cold-and-strong',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1938 },
      { type: 'resourceAtLeast', resource: 'network', value: 3 },
    ],
    text: 'The drinks he mixes are famously cold and famously strong, and the food after them is hot enough to silence the table.',
    priority: 38,
  },
  {
    id: 'oppenheimer-beat-pasadena-february',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'pasadena' },
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'February here is all light and no weather at all, and his best thinking gets done on the train between the two of them.',
    priority: 46,
  },
  {
    id: 'oppenheimer-beat-one-good-chair',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1936 },
    ],
    text: 'The flat holds one good chair, a painting off his father’s wall, and nothing else anybody would think worth remarking on.',
    priority: 34,
  },
  {
    id: 'oppenheimer-beat-three-lines-of-comment',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1936 },
    ],
    text: 'A paper comes back with three lines of comment on it, and he rewrites the whole thing in a week out of pure irritation.',
    priority: 35,
  },
  {
    id: 'oppenheimer-beat-quiet-about-politics',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'narrativeFlag', flag: 'oppenheimer.politics', value: 'quiet' },
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'He stays out of the meetings and reads the pamphlets at home, which is not at all the same thing as not minding.',
    priority: 48,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1936–1942
  // -------------------------------------------------------------------------
  {
    id: 'oppenheimer-beat-car-with-a-name',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1942 },
    ],
    text: 'The car is driven far too fast on the coast road, and it has a name he took out of a Sanskrit poem.',
    priority: 36,
  },
  {
    id: 'oppenheimer-beat-father-dies',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'His father dies in the spring, and the money that comes with it is given away in pieces over the following year.',
    priority: 48,
  },
  {
    id: 'oppenheimer-beat-frank-telephones',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1941 },
    ],
    speaker: 'FRANK',
    text: 'I have joined, Robert, and I am telling you before you read it somewhere else, and no, I am not asking what you think.',
    priority: 46,
  },
  {
    id: 'oppenheimer-beat-married-before-a-judge',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1942 },
    ],
    text: 'He is married in the autumn before a judge, with two strangers from the courthouse corridor standing as witnesses.',
    priority: 50,
  },
  {
    id: 'oppenheimer-beat-kitty-four-words',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1945 },
    ],
    speaker: 'KITTY',
    text: 'You have said four words since Tuesday, Robert, and two of them were about somebody else’s arithmetic.',
    priority: 44,
  },
  {
    id: 'oppenheimer-beat-boy-born-in-may',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'The boy is born in May and sleeps straight through the evening seminars, which move into the front room for a month.',
    priority: 48,
  },
  {
    id: 'oppenheimer-beat-cyclotron-men',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'berkeley' },
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1942 },
    ],
    text: 'The men from the cyclotron building come over with a result and stay until two, and the theory is rebuilt twice before they go.',
    priority: 44,
  },
  {
    id: 'oppenheimer-beat-union-elected',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1942 },
    ],
    text: 'He joins the teachers’ association and is elected to something at the second meeting, which is how these things go.',
    priority: 40,
  },
  {
    id: 'oppenheimer-beat-cheque-to-spain',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1940 },
      { type: 'resourceAtLeast', resource: 'funds', value: 3 },
    ],
    text: 'The Spanish relief appeal comes round again and he signs the cheque without reading past the first paragraph of it.',
    priority: 44,
  },
  {
    id: 'oppenheimer-beat-news-at-breakfast',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1942 },
    ],
    text: 'The news out of Europe arrives at breakfast in a form that makes the morning’s calculation feel like somebody’s hobby.',
    priority: 42,
  },
  {
    id: 'oppenheimer-beat-general-questions',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1943 },
      { type: 'resourceAtLeast', resource: 'exposure', value: 2 },
    ],
    text: 'Men with credentials come to the department to ask general questions about nobody in particular, and the department answers them politely.',
    priority: 50,
  },
  {
    id: 'oppenheimer-beat-thinner-at-christmas',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1943 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
    ],
    text: 'He sleeps four hours, lectures at eight, and is visibly thinner at Christmas than he was in September.',
    priority: 42,
  },
  {
    id: 'oppenheimer-beat-summer-cut-to-ten-days',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'narrativeFlag', flag: 'oppenheimer.ranch', value: true },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'The summer at the ranch is cut to ten days, and he spends four of them writing letters about other people’s work.',
    priority: 48,
  },
  {
    id: 'oppenheimer-beat-not-yet-a-paper',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'oppenheimer-gravitational-collapse' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'Nothing he publishes this year is the thing he is actually thinking about, and the thing he is thinking about is not yet a paper.',
    priority: 46,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1942–1945
  // -------------------------------------------------------------------------
  {
    id: 'oppenheimer-beat-box-number',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The address is a box number in Santa Fe, and every child born on the hill this year is born at that box number.',
    priority: 50,
  },
  {
    id: 'oppenheimer-beat-water-off',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The water goes off for two days in June and the work goes on regardless, which is not a thing anybody up here boasts about.',
    priority: 46,
  },
  {
    id: 'oppenheimer-beat-tuesday-meeting',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'narrativeFlag', flag: 'oppenheimer.appointed', value: true },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The Tuesday evening meeting runs three hours, and half of it is the part the security officers would rather was not said aloud.',
    priority: 52,
  },
  {
    id: 'oppenheimer-beat-hat-on-a-coat-stand',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'His weight is down again and the hat sits on him the way a hat sits on a coat-stand, and he will not be told about it.',
    priority: 50,
  },
  {
    id: 'oppenheimer-beat-badge-sir',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    speaker: 'A SENTRY',
    text: 'Your badge, please, sir — I know perfectly well who you are, and I still have to see the badge.',
    priority: 50,
  },
  {
    id: 'oppenheimer-beat-mail-read-first',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The mail going out is read by somebody else first, and the wives have worked out which words cause a letter to come back.',
    priority: 48,
  },
  {
    id: 'oppenheimer-beat-daughter-in-december',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The daughter is born in December, in a hospital that stands in a place with no name the post office will accept.',
    priority: 52,
  },
  {
    id: 'oppenheimer-beat-forty-minutes-at-the-dance',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'There is a dance in the lodge on Saturday and he stays forty minutes, which everybody present counts as a success.',
    priority: 44,
  },
  {
    id: 'oppenheimer-beat-resignation-on-conscience',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'narrativeFlag', flag: 'oppenheimer.appointed', value: true },
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1946 },
    ],
    speaker: 'A PHYSICIST',
    text: 'I will finish the week, Director, and then I am going home, and nothing you have said this afternoon changes that.',
    priority: 54,
  },
  {
    id: 'oppenheimer-beat-walking-the-fence-line',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'narrativeFlag', flag: 'oppenheimer.appointed', value: true },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    speaker: 'THE GENERAL',
    text: 'Your housing can wait, Doctor, and the schedule cannot, and we both know perfectly well which of the two I came up here about.',
    priority: 50,
  },
  {
    id: 'oppenheimer-beat-consultant-from-princeton',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The consultant from Princeton is here nine days and leaves the board covered in a hand that nobody else on the hill can read.',
    priority: 56,
  },
  {
    id: 'oppenheimer-beat-four-thousand-no-name',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'There are thousands of people on this mesa and no town at all, and the road down closes whenever it rains hard.',
    priority: 46,
  },
  {
    id: 'oppenheimer-beat-not-opened-a-book',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'narrativeFlag', flag: 'oppenheimer.appointed', value: true },
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'He has not opened a book that was not about this for two years, and does not miss it as much as he thinks he ought to.',
    priority: 52,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1945–1967
  // -------------------------------------------------------------------------
  {
    id: 'oppenheimer-beat-grocer-with-a-cover',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1950 },
      { type: 'resourceAtLeast', resource: 'exposure', value: 3 },
    ],
    speaker: 'THE GROCER',
    text: 'My boy says you are the most famous man in the country; would you put your name on this one for him?',
    priority: 46,
  },
  {
    id: 'oppenheimer-beat-testify-then-lecture',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'He gives evidence in the morning and a lecture in the afternoon, and the lecture is the part he prepares on the train.',
    priority: 42,
  },
  {
    id: 'oppenheimer-beat-long-answer',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'A general asks for a simple answer, he gives a long one, and the room decides he is being difficult on purpose.',
    priority: 44,
  },
  {
    id: 'oppenheimer-beat-committee-vote',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'narrativeFlag', flag: 'oppenheimer.advocate', value: true },
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1953 },
    ],
    speaker: 'A COMMISSIONER',
    text: 'You have made your objection very beautifully, Doctor, and the vote is going the other way regardless of how it was made.',
    priority: 52,
  },
  {
    id: 'oppenheimer-beat-princeton-einstein',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'The old man passes the window at the same hour each morning, and an institute full of clocks quietly sets itself by him.',
    priority: 54,
  },
  {
    id: 'oppenheimer-beat-princeton-godel',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'godel', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1965 },
    ],
    text: 'The logician takes his lunch alone and his questions in the corridor, and the corridor questions are the best the place produces.',
    priority: 54,
  },
  {
    id: 'oppenheimer-beat-princeton-vonneumann',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'One professor wants valves and a shed in the grounds, the rest want a library, and the choice between them is his.',
    priority: 56,
  },
  {
    id: 'oppenheimer-beat-washington-vonneumann',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'washingtonDC' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'washingtonDC' },
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'In a corridor here he passes a man he once had on the mesa, now on a commission, and neither of them can stop.',
    priority: 56,
  },
  {
    id: 'oppenheimer-beat-mathematics-is-not-gone',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'narrativeFlag', flag: 'oppenheimer.hearing' },
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1962 },
    ],
    text: 'The clearance is gone and the physics is not, and the physics is what he carries to the board on Monday morning.',
    priority: 54,
  },
  {
    id: 'oppenheimer-beat-crossing-the-street',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'narrativeFlag', flag: 'oppenheimer.hearing' },
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1960 },
    ],
    text: 'Old friends cross the street to avoid him and old friends telephone from Europe, and he keeps a count of neither.',
    priority: 52,
  },
  {
    id: 'oppenheimer-beat-island-shore',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1957 },
      { type: 'yearAtMost', year: 1964 },
    ],
    text: 'He buys a piece of shore on an island where the mail comes twice a week and there is nothing whatever to administer.',
    priority: 46,
  },
  {
    id: 'oppenheimer-beat-medal-and-citation',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1962 },
      { type: 'yearAtMost', year: 1965 },
      { type: 'narrativeFlag', flag: 'oppenheimer.hearing' },
    ],
    text: 'They give him a medal in Washington nine years on, and the citation says a great deal about physics and nothing about the hearing.',
    priority: 56,
  },
  {
    id: 'oppenheimer-beat-historian-and-poet',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'projectCompleted', projectId: 'oppenheimer-ias-directorship' },
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1960 },
    ],
    text: 'He appoints a historian and a poet in the same year, and the mathematicians write to the trustees about it at length.',
    priority: 50,
  },
  {
    id: 'oppenheimer-beat-careful-with-words',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1964 },
      { type: 'yearAtMost', year: 1967 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'The doctors are careful with their words that autumn and he is careful with his, and the lectures get ten minutes shorter.',
    priority: 54,
  },
  {
    id: 'oppenheimer-beat-schoolboy-letter',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1966 },
    ],
    text: 'A schoolboy writes to ask about collapsing stars and gets two pages back, which is longer than most senators get.',
    priority: 44,
  },
  {
    id: 'oppenheimer-beat-students-run-departments',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'projectCompleted', projectId: 'oppenheimer-berkeley-school' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1966 },
    ],
    speaker: 'A FORMER STUDENT',
    text: 'We have a chair going and a problem none of us can start, Opje, and I am writing to you before I write to anybody else.',
    priority: 48,
  },
  {
    id: 'oppenheimer-beat-house-too-large',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1950 },
      { type: 'yearAtMost', year: 1964 },
    ],
    text: 'The house on the grounds is too large and hung with his mother’s pictures, and he has stopped rehanging them.',
    priority: 46,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'oppenheimer-beat-lights-from-the-last',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1966 },
    ],
    text: 'He lights the next one from the last, and somebody empties the ashtray twice a day without ever mentioning it.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'oppenheimer-beat-fog-over-the-bay',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'berkeley' },
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'Fog comes in over the bay before the lecture, and the hall smells of wet wool for the rest of the hour.',
    priority: 9,
    repeatable: true,
  },
  {
    id: 'oppenheimer-beat-reads-past-midnight',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1966 },
    ],
    text: 'He reads something that is not physics until one in the morning and is at the board again before nine.',
    priority: 6,
    repeatable: true,
  },
  {
    id: 'oppenheimer-beat-dust-on-every-desk',
    characterId: 'oppenheimer',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The wind gets up on the mesa after lunch and lays a fine grey dust over every desk in the place.',
    priority: 9,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Strain, when the years of work have taken more than they have given back
  // -------------------------------------------------------------------------
  {
    id: 'oppenheimer-beat-strain-ashtray',
    characterId: 'oppenheimer',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 4 }],
    text: 'He lights each one off the last and the ashtray is full before the morning meeting, and his brother’s letter stays folded in the jacket.',
    priority: 40,
    repeatable: true,
  },
  {
    id: 'oppenheimer-beat-strain-belt',
    characterId: 'oppenheimer',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 2 }],
    text: 'The belt goes in another notch, and somebody stops him at the door to tell him plainly that his collar no longer touches his neck.',
    priority: 50,
    repeatable: true,
  },
  {
    id: 'oppenheimer-beat-strain-blackboard',
    characterId: 'oppenheimer',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 0 }],
    text: 'He stands at the blackboard with the chalk up and the room waiting, and after a while somebody else finishes the sentence and the meeting moves on.',
    priority: 60,
    repeatable: true,
  },
];
