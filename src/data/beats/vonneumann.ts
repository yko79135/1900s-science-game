import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of John von Neumann, 1903–1957.
 *
 * One line lands after a turn the authored scenes have no reason to interrupt:
 * a night train with a porter who knows him, a laboratory that smells of ether
 * all winter, a suit worn on a mesa where everybody else is in shirtsleeves.
 * The scenes own the bank on the Danube, the two timetables, Hilbert’s
 * programme, the three sentences at the back of the room, the founding chair,
 * the post office box, the shed behind the Institute and the machine that
 * begins. These are the years in between, and they are gated the same way — by
 * year, by place, by what the life has and has not got. Beats with a place, a
 * flag, or another scientist in the same city on them outrank the general
 * ones, so Göttingen, the mesa and Princeton each sound like themselves.
 */

export const VONNEUMANN_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1913–1921
  // -------------------------------------------------------------------------
  {
    id: 'vonneumann-beat-staircase-nursery',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The family takes a whole floor and the cousins take the floors below, which makes the staircase the real nursery.',
    priority: 30,
  },
  {
    id: 'vonneumann-beat-two-languages-at-table',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1920 },
    ],
    speaker: 'HIS FATHER',
    text: 'Answer him in Latin at this end of the table, Jancsi, and in German at the other, and do not confuse the two.',
    priority: 34,
  },
  {
    id: 'vonneumann-beat-forty-four-volumes',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'He reads a history of the world in forty-four volumes off his father’s shelves, and can still give the page for a battle years afterwards.',
    priority: 34,
  },
  {
    id: 'vonneumann-beat-french-to-the-end',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'The tutor sets French exercises on Monday and finds by Thursday that the boy has done them to the end of the book.',
    priority: 30,
  },
  {
    id: 'vonneumann-beat-master-takes-father-aside',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1918 },
    ],
    speaker: 'THE MATHEMATICS MASTER',
    text: 'I cannot go on pretending this school has anything left to teach him, sir; he needs the university, and he needs it now.',
    priority: 36,
  },
  {
    id: 'vonneumann-beat-wednesday-lesson',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'A young man comes out from the university on Wednesdays, and the lesson is held in the drawing room because the pupil is eleven.',
    priority: 35,
  },
  {
    id: 'vonneumann-beat-do-it-at-the-table',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1920 },
    ],
    speaker: 'HIS MOTHER',
    text: 'Whatever you are doing in your head, Jancsi, do it at the table with the rest of us and not up against the window.',
    priority: 34,
  },
  {
    id: 'vonneumann-beat-directory-trick',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'He does the trick with the telephone directory once for each new set of guests, and is sorry afterwards, though never sorry enough to refuse.',
    priority: 33,
  },
  {
    id: 'vonneumann-beat-rooms-in-vienna',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'They leave the city in the spring with two trunks and take rooms abroad, and nobody explains to the children how long for.',
    priority: 40,
  },
  {
    id: 'vonneumann-beat-currency-at-dinner',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1922 },
    ],
    text: 'The talk at dinner is all about the currency that autumn, and he follows it a good deal better than the guests suppose.',
    priority: 34,
  },
  {
    id: 'vonneumann-beat-brothers-as-audience',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'His brothers are small enough to be an audience and he uses them, explaining things at a speed that is not really for them.',
    priority: 30,
  },
  {
    id: 'vonneumann-beat-title-in-the-post',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1917 },
    ],
    text: 'A title arrives in the post and changes how the name is written, which interests him less than the paper it is printed on.',
    priority: 32,
  },
  {
    id: 'vonneumann-beat-suit-at-eleven',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'He is put into a suit and a tie for the Gymnasium at eleven, and is never afterwards seen out of one.',
    priority: 31,
  },
  {
    id: 'vonneumann-beat-faust-at-dinner',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'He gives a long scene of Faust at a dinner party without a book, and the guests ask how, and no answer satisfies them.',
    priority: 33,
  },

  // -------------------------------------------------------------------------
  // Education, 1921–1926
  // -------------------------------------------------------------------------
  {
    id: 'vonneumann-beat-night-train-porter',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'The night train has a compartment he prefers and a porter who knows him, which is the nearest thing he has to a room this year.',
    priority: 36,
  },
  {
    id: 'vonneumann-beat-ether-all-winter',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'zurich' },
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'The laboratory smells of ether all winter, and he does the titrations correctly and without the smallest flicker of interest.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-lake-walk',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'zurich' },
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'He walks out along the lake on Sunday with a professor of chemistry and talks about topology the entire way there and back.',
    priority: 44,
  },
  {
    id: 'vonneumann-beat-solve-it-slowly',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1927 },
    ],
    speaker: 'A PROFESSOR',
    text: 'In this room I set the problems, and if you have already solved it, kindly solve it slowly enough for the others.',
    priority: 38,
  },
  {
    id: 'vonneumann-beat-examinations-in-a-week',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'He sits the examinations in a week and takes the train back the same evening, before any of the results are posted.',
    priority: 36,
  },
  {
    id: 'vonneumann-beat-berlin-cheap',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1925 },
    ],
    text: 'The city is cheap this year for anyone paid from abroad and ruinous for everybody else, and he notices which of the two he is.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-berlin-einstein',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'The colloquium here is attended by a man whose photograph is in the newspapers, and who asks the simplest question in the room.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-posted-from-a-station',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1928 },
    ],
    text: 'A paper of his own is finished on the train and posted from a station he cannot afterwards name.',
    priority: 34,
  },
  {
    id: 'vonneumann-beat-not-a-visitors-son',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1925 },
    ],
    speaker: 'A LECTURER',
    text: 'You are in the wrong room, young man — I beg your pardon, you are in exactly the right room, please go on.',
    priority: 35,
  },
  {
    id: 'vonneumann-beat-restaurant-arguing',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1927 },
      { type: 'resourceAtLeast', resource: 'funds', value: 3 },
    ],
    text: 'The allowance from home goes largely on restaurants, where the arguing is better than in the reading room and lasts later.',
    priority: 36,
  },
  {
    id: 'vonneumann-beat-five-hours',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'He sleeps five hours, if that, and is the only man at breakfast who looks as though he slept eight.',
    priority: 30,
  },
  {
    id: 'vonneumann-beat-different-axiom',
    characterId: 'vonneumann',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'vonneumann-set-theory-axioms' },
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1929 },
    ],
    text: 'The set theory will not come out, so he starts it again from a different axiom, twice, inside a single month.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-once-a-year-question',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1927 },
    ],
    speaker: 'HIS FATHER',
    text: 'And is the mathematics leading anywhere in particular this year, Jancsi, or shall we ask each other again next year?',
    priority: 38,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1926–1930
  // -------------------------------------------------------------------------
  {
    id: 'vonneumann-beat-footpath-round-the-wall',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'The town has one good bookshop, three lecture halls that matter, and a footpath round the wall where the arguments get finished.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-gottingen-noether',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'noether', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The algebra in the Wednesday seminar is thirty years ahead of the room and she delivers it as though it were obvious.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-gottingen-oppenheimer',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'The American in the front row interrupts more than anybody, and is right often enough that the interruptions are tolerated.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-eleven-in-the-room',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'He gives his first course to eleven people, three of whom are professors who came to see whether it was true.',
    priority: 40,
  },
  {
    id: 'vonneumann-beat-separate-folder',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'He writes five papers in a year on five subjects, and the librarian gives up and starts a separate folder for him.',
    priority: 38,
  },
  {
    id: 'vonneumann-beat-hamburg-term',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'A term on the northern coast is grey and wet and the mathematics there is excellent, and he reports it home in that order.',
    priority: 38,
  },
  {
    id: 'vonneumann-beat-coffee-twice',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'The quantum people and the mathematics people take their coffee in different rooms, and he takes his twice.',
    priority: 45,
  },
  {
    id: 'vonneumann-beat-postscript-sleep',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1933 },
    ],
    speaker: 'A COLLEAGUE',
    text: 'The proof is elegant and I am frankly jealous of it, and tell me honestly, do you ever actually sleep?',
    priority: 36,
  },
  {
    id: 'vonneumann-beat-car-he-cannot-drive',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1936 },
      { type: 'resourceAtLeast', resource: 'funds', value: 3 },
    ],
    text: 'He buys a car he cannot properly drive and drives it at speed, to the entertainment of everyone except the passengers.',
    priority: 40,
  },
  {
    id: 'vonneumann-beat-two-certificates-drawer',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'The engineering diploma lies in a drawer with the doctorate, and neither of them has ever been shown to anybody.',
    priority: 36,
  },
  {
    id: 'vonneumann-beat-wedding-party',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'He is married in the winter, and the party runs longer and louder than anything the street has previously had to sit through.',
    priority: 44,
  },
  {
    id: 'vonneumann-beat-men-waiting-for-a-chair',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1933 },
    ],
    speaker: 'A FRIEND',
    text: 'Do not tell them your age, János; half this city is waiting for a chair and the other half is waiting for us to die.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-agrees-to-a-date',
    characterId: 'vonneumann',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'vonneumann-quantum-foundations' },
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'A publisher asks for a book on the mathematics of the quantum theory, and he agrees to a date he has no business agreeing to.',
    priority: 46,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1930–1944
  // -------------------------------------------------------------------------
  {
    id: 'vonneumann-beat-smoking-room-crossing',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'The crossing takes six days and he spends them in the smoking room, working, in a suit, among men in blazers.',
    priority: 40,
  },
  {
    id: 'vonneumann-beat-elms-and-a-fireplace',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'This town has elms and no pavements worth the name, and the mathematics happens in a building with a fireplace in it.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-princeton-einstein',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'Two of the most photographed men in the Institute walk to lunch by different routes, on purpose, and arrive at the same minute.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-princeton-turing',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'turing', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'The English research student in the common room is building something out of tape and patience, and will not be hurried through it.',
    priority: 56,
  },
  {
    id: 'vonneumann-beat-princeton-bohr',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'bohr', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1944 },
    ],
    text: 'The Dane is here for the term and cannot finish a sentence, and every unfinished sentence turns out to contain the point.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-princeton-godel',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'godel', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1956 },
    ],
    text: 'He walks the logician home and does most of the talking, and the few sentences coming back take him a week to unpack.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-citizenship-history',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'He sits the examination for citizenship and is marked on the history, which he has read a good deal more of than the examiner.',
    priority: 44,
  },
  {
    id: 'vonneumann-beat-letter-for-later',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'The daughter is small enough to be carried, and he writes her a letter to be opened much later and files a copy of it.',
    priority: 42,
  },
  {
    id: 'vonneumann-beat-marriage-ends-quietly',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1940 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 } },
    ],
    text: 'The marriage ends quietly, and he takes rooms for a year and eats every single meal out.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-back-with-a-trunk',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'He goes back to Budapest in the summer and returns with a wife, a trunk of silver, and a good deal of unspoken arithmetic about the year.',
    priority: 48,
  },
  {
    id: 'vonneumann-beat-dog-with-a-name',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1948 },
    ],
    text: 'The dog has a mathematical name and the run of the house, and is the only resident who reliably ignores him.',
    priority: 36,
  },
  {
    id: 'vonneumann-beat-ballistics-tables',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'The proving ground wants him four days a month for the firing tables and pays him in train tickets and problems.',
    priority: 44,
  },
  {
    id: 'vonneumann-beat-admiralty-winter',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1942 },
      { type: 'yearAtMost', year: 1944 },
    ],
    text: 'He crosses to England in the winter on naval business and comes back talking about shock waves and almost nothing else.',
    priority: 48,
  },
  {
    id: 'vonneumann-beat-economist-down-the-corridor',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The economist down the corridor wants a theory of bargaining, and he wants an excuse to stop thinking about explosives.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-four-committees',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'He sits on four committees, two of which are secret, and keeps the entire schedule in his head and writes none of it down.',
    priority: 44,
  },
  {
    id: 'vonneumann-beat-one-household-safer',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1942 },
    ],
    text: 'A cousin’s papers come through at last, and the family in Budapest is one household smaller and one household safer.',
    priority: 48,
  },
  {
    id: 'vonneumann-beat-too-strong-on-one-page',
    characterId: 'vonneumann',
    conditions: [
      { type: 'projectCompleted', projectId: 'vonneumann-quantum-foundations' },
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'Nothing in the book is wrong and one thing in it is stated too strongly, and he knows exactly which page it is on.',
    priority: 48,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1943–1946
  // -------------------------------------------------------------------------
  {
    id: 'vonneumann-beat-hand-cranked-room',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1947 },
    ],
    text: 'The mesa stands at seven thousand feet and the arithmetic is done on hand-cranked machines by a room of young women.',
    priority: 48,
  },
  {
    id: 'vonneumann-beat-losalamos-oppenheimer',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1947 },
    ],
    text: 'The director walks him down to the gate at midnight still arguing, and neither of them has eaten anything since the morning.',
    priority: 56,
  },
  {
    id: 'vonneumann-beat-two-sets-of-notes',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1947 },
    ],
    speaker: 'A SECRETARY',
    text: 'We keep one set of your notes on each coast, Professor, because you have never once arrived carrying the right one.',
    priority: 40,
  },
  {
    id: 'vonneumann-beat-cards-to-another-state',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The punched cards go out to a machine in another state and come back three weeks later with the answer to last month’s question.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-problem-on-the-platform',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1947 },
    ],
    text: 'He sleeps on trains and arrives shaved, and the people meeting him have learned to bring the problem out onto the platform.',
    priority: 42,
  },
  {
    id: 'vonneumann-beat-suit-in-shirtsleeves',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1947 },
    ],
    text: 'The suit is the same on the mesa as it is in Washington, and the men in shirtsleeves have stopped finding it funny.',
    priority: 48,
  },
  {
    id: 'vonneumann-beat-month-takes-a-month',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'A calculation that ought to take a month takes a month, and he says out loud that this is the thing which has to change.',
    priority: 50,
  },
  {
    id: 'vonneumann-beat-weather-is-fine',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'His letters home say the weather is fine and the work is interesting, because those are the two things that will pass.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-committee-he-does-not-discuss',
    characterId: 'vonneumann',
    conditions: [
      { type: 'projectCompleted', projectId: 'vonneumann-implosion-computation' },
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1947 },
    ],
    text: 'He is asked to sit on a committee about where it would be used, and he sits on it, and afterwards does not discuss it with anybody.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-fortnight-with-the-daughter',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1947 },
    ],
    text: 'The daughter comes for the summer and he takes a fortnight off, which is the longest he has stopped in five years.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-thousands-of-valves',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1946 },
    ],
    speaker: 'A MAN ON THE PLATFORM',
    text: 'They are building a thing with thousands of valves in it, sir, and nobody there can tell me plainly what it is for.',
    priority: 52,
  },
  {
    id: 'vonneumann-beat-language-of-engineers',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1947 },
    ],
    speaker: 'AN ENGINEER',
    text: 'You talk like one of us and you are not one of us, Professor, and I have decided not to hold it against you.',
    priority: 42,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1945–1957
  // -------------------------------------------------------------------------
  {
    id: 'vonneumann-beat-every-appendix',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'The committee meets in a room with no windows, and he is the only member present who has read every appendix.',
    priority: 42,
  },
  {
    id: 'vonneumann-beat-wife-codes-it',
    characterId: 'vonneumann',
    conditions: [
      { type: 'projectCompleted', projectId: 'vonneumann-stored-program' },
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1955 },
    ],
    speaker: 'KLÁRA',
    text: 'I have the machine running your problem and you have the whole afternoon free, and you are not to touch anything.',
    priority: 52,
  },
  {
    id: 'vonneumann-beat-consults-for-everyone',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1956 },
      { type: 'resourceAtLeast', resource: 'network', value: 4 },
    ],
    text: 'He consults for a company that makes business machines and for a corporation that makes nothing at all, and enjoys both equally.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-princeton-oppenheimer',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1956 },
    ],
    text: 'The director’s tea at three is the only appointment in the week that he keeps without having to be reminded of it.',
    priority: 56,
  },
  {
    id: 'vonneumann-beat-evidence-for-a-colleague',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1956 },
    ],
    text: 'He gives evidence for a colleague at a closed hearing and says, without hedging any of it, that the man is loyal.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-rented-furnished',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'washingtonDC' },
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1957 },
    ],
    text: 'The house is rented furnished and the books stay in their crates, on the grounds that this is only a two-year post.',
    priority: 50,
  },
  {
    id: 'vonneumann-beat-new-car-most-years',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1955 },
      { type: 'resourceAtLeast', resource: 'funds', value: 4 },
    ],
    text: 'He buys a new car most years and returns each one with a story the insurance company has heard in some form before.',
    priority: 40,
  },
  {
    id: 'vonneumann-beat-will-machines-think',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1956 },
    ],
    text: 'A young man writes to ask whether machines will ever think, and gets four pages back that carefully do not settle it.',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-six-answers',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1955 },
    ],
    speaker: 'A TRUSTEE',
    text: 'What is the machine actually for, Professor, and could you manage it in one answer this time rather than six?',
    priority: 46,
  },
  {
    id: 'vonneumann-beat-half-hours',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1950 },
      { type: 'yearAtMost', year: 1956 },
    ],
    text: 'The mathematics gets done in half-hours between other things now, and the half-hours are the part of the day he keeps.',
    priority: 44,
  },
  {
    id: 'vonneumann-beat-shoulder-that-aches',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1957 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'The shoulder aches through the whole summer and he works a full week regardless, and then at last sees somebody about it.',
    priority: 52,
  },
  {
    id: 'vonneumann-beat-two-awards-one-suit',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1957 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'They give him two awards in the same year and he attends both, from a chair, in the same suit.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-room-he-can-be-wheeled-into',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1957 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 3 } },
    ],
    text: 'The meetings move to a room he can be wheeled into, the agenda is unchanged, and it is got through in the usual hour.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-guard-at-the-door',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1957 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 3 } },
    ],
    text: 'There is a guard outside the door of the room, which is not there for his sake, and everybody including him knows it.',
    priority: 56,
  },
  {
    id: 'vonneumann-beat-brother-reads-goethe',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1957 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 3 } },
    ],
    speaker: 'HIS BROTHER',
    text: 'Shall I go on to the end of the scene, Jancsi, or would you rather correct my pronunciation again first?',
    priority: 56,
  },
  {
    id: 'vonneumann-beat-lectures-not-delivered',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1957 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'The lectures he was to give on the brain and the machine are written out in longhand, not delivered, and kept.',
    priority: 54,
  },
  {
    id: 'vonneumann-beat-evening-visitor',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1957 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 3 } },
    ],
    text: 'A priest comes in the evenings and they talk, and he is not much comforted, and not much troubled by not being comforted.',
    priority: 52,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'vonneumann-beat-eats-well-then-works',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'He eats extremely well and then works, and the connection between the two facts is one he has never bothered to examine.',
    priority: 7,
    repeatable: true,
  },
  {
    id: 'vonneumann-beat-awake-at-three',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1956 },
    ],
    text: 'He is awake at three and downstairs at the desk, and asleep again before the rest of the house gets up.',
    priority: 6,
    repeatable: true,
  },
  {
    id: 'vonneumann-beat-back-of-the-timetable',
    characterId: 'vonneumann',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1956 },
    ],
    text: 'The train is late, so the whole calculation gets done on the back of the timetable and then checked twice.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'vonneumann-beat-saturday-at-the-house',
    characterId: 'vonneumann',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'There is a party at the house on Saturday, and the physics gets done at it, loudly, somewhere after midnight.',
    priority: 9,
    repeatable: true,
  },
];
