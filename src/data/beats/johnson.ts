import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of Katherine Johnson, 1918–2020.
 *
 * The scenes own the door at the eighth grade, the seat at Morgantown, the
 * west building, Freedom 7 and the day and a half of checking. These are the
 * years in between: a resoled shoe, a stove lit by whoever came first, thirty
 * pages copied out by hand thirty-one times, a countdown heard through a
 * corridor door. Every one is gated by year, and most of them by place, by
 * money, or by what the life has already decided about itself.
 */

export const JOHNSON_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1923–1928
  // -------------------------------------------------------------------------
  {
    id: 'johnson-beat-fence-posts',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'She counts the fence posts between the house and the road going out, and again coming back, and the number is a comfort both times.',
    priority: 26,
  },
  {
    id: 'johnson-beat-two-rows-up',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1926 },
    ],
    text: 'They move her up a grade in October and up another before the snow, and the only trouble is that her feet no longer reach the floor.',
    priority: 32,
  },
  {
    id: 'johnson-beat-brothers-book',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1926 },
    ],
    text: 'Her brother leaves his arithmetic open on the table and she has finished the back pages of it before anyone thinks to ask who did.',
    priority: 30,
  },
  {
    id: 'johnson-beat-hotel-season',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1928 },
    ],
    text: 'Her father takes the season up the valley at the hotel and comes back with cracked hands and a paper bag for the four of them.',
    priority: 28,
  },
  {
    id: 'johnson-beat-secondhand-readers',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1928 },
    ],
    text: 'The readers arrive secondhand with another school’s name inked inside the cover, and she has read hers straight through twice by Christmas.',
    priority: 34,
  },
  {
    id: 'johnson-beat-mother-on-the-how',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1928 },
    ],
    speaker: 'HER MOTHER',
    text: 'You will have the education, and how we manage it is not a thing for you to be working out at nine years old.',
    priority: 40,
  },
  {
    id: 'johnson-beat-brother-handwriting',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1927 },
    ],
    speaker: 'HER BROTHER',
    text: 'She has done mine along with her own, and now the teacher wants to know why my handwriting has suddenly improved.',
    priority: 36,
  },
  {
    id: 'johnson-beat-boy-across-the-road',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1928 },
    ],
    text: 'The boy across the road finished the eighth grade last spring and works now, and nobody in the house uses the word finished about him.',
    priority: 30,
  },
  {
    id: 'johnson-beat-household-figures',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.helpsAtHome' },
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1928 },
    ],
    text: 'She keeps the household figures in her head because paper is for school, and the household only comes to a page anyway.',
    priority: 38,
  },
  {
    id: 'johnson-beat-count-of-the-bench',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.counts' },
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'Nobody asked her for the count and she has it regardless: eleven children on the bench this morning, two of them coughing.',
    priority: 38,
  },
  {
    id: 'johnson-beat-where-numbers-stop',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.asksAloud' },
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1928 },
    ],
    text: 'She asks the teacher out loud where the numbers stop, gets an answer that is plainly a guess, and files the guess for later.',
    priority: 38,
  },

  // -------------------------------------------------------------------------
  // Education, 1928–1939
  // -------------------------------------------------------------------------
  {
    id: 'johnson-beat-two-households',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.twoHouseholds' },
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'Two households on one wage: the valley through the summer, Institute through the school year, and a car that knows the road by itself.',
    priority: 40,
  },
  {
    id: 'johnson-beat-father-on-the-drive',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1934 },
    ],
    speaker: 'HER FATHER',
    text: 'I will drive you the hundred and twenty miles and I will drive you back, and we are not going to discuss whether it is worth it.',
    priority: 42,
  },
  {
    id: 'johnson-beat-youngest-room',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'She is the youngest in every room she walks into and has stopped remarking on it, since remarking on it only starts the arithmetic again.',
    priority: 32,
  },
  {
    id: 'johnson-beat-classmate-same-paper',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1932 },
    ],
    speaker: 'A CLASSMATE',
    text: 'You are ten years old and sitting the same paper I am sitting, and I have decided not to think about that today.',
    priority: 36,
  },
  {
    id: 'johnson-beat-french-cards',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'French verbs go on a card in her coat pocket and get conjugated on the walk, which is long enough for all the irregular ones.',
    priority: 34,
  },
  {
    id: 'johnson-beat-french-restful',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.frenchToo' },
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'She keeps the French because it is the one subject where being right is not the whole of it, and that turns out to be restful.',
    priority: 38,
  },
  {
    id: 'johnson-beat-registrar-column',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.takesEverything' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'She signs for the course anyway, and the registrar writes her name into a column that had no room left in it.',
    priority: 38,
  },
  {
    id: 'johnson-beat-second-copy',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.twiceCorrect' },
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'She works every problem twice and hands in the second copy, and nobody in the building has ever seen the first.',
    priority: 38,
  },
  {
    id: 'johnson-beat-claytor-nobody-to-ask',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.claytor' },
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1937 },
    ],
    speaker: 'CLAYTOR',
    text: 'You will be the only mathematician in the building one day, so learn this properly now, because there will be nobody to ask.',
    priority: 44,
  },
  {
    id: 'johnson-beat-board-unerased',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.claytor' },
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'He leaves the board unerased between lectures so that she can copy what he did while the room is empty of anyone watching.',
    priority: 40,
  },
  {
    id: 'johnson-beat-resoled-shoes',
    characterId: 'johnson',
    conditions: [
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1936 },
    ],
    text: 'The shoes are resoled in October rather than replaced, and she walks on the inside edge of the left one until spring.',
    priority: 36,
  },
  {
    id: 'johnson-beat-summer-tin',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'Summer is somebody else’s kitchen and somebody else’s children, and a tin on the shelf where the autumn term’s money goes.',
    priority: 30,
  },
  {
    id: 'johnson-beat-library-until-nine',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'instituteWV' },
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'The college library is warm and open until nine, and she has read past the mathematics shelf into whatever happened to be shelved beside it.',
    priority: 34,
  },
  {
    id: 'johnson-beat-faculty-doctorates',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'There are men teaching here with doctorates who could not get a post anywhere the salary was decent, and they give her every hour she asks for.',
    priority: 36,
  },
  {
    id: 'johnson-beat-hem-let-down',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'Her mother lets down a hem and takes in a waist the night before, and in the morning the dress fits exactly.',
    priority: 32,
  },
  {
    id: 'johnson-beat-advertisement-column',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'The advertisements want typists and teachers, and she reads the whole column twice, standing in the hallway, to be certain she has missed nothing.',
    priority: 36,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1939–1953
  // -------------------------------------------------------------------------
  {
    id: 'johnson-beat-morgantown-scale',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'morgantown' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'The campus here is four times the size of the one she knows and a great deal quieter whenever she walks into a room.',
    priority: 44,
  },
  {
    id: 'johnson-beat-two-silences',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.wasFirst' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1941 },
    ],
    speaker: 'KATHERINE',
    text: 'Nobody speaks to me, and nobody speaks against me, and those are two different sentences that I have learned to tell apart.',
    priority: 46,
  },
  {
    id: 'johnson-beat-third-row',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'morgantown' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'She takes the third row on the first morning because the third row is where a person sits, and does not turn round to see who noticed.',
    priority: 42,
  },
  {
    id: 'johnson-beat-lodging-in-town',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'morgantown' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'The lodging is in the town rather than on the campus, and the walk in January is long enough to plan an entire seminar.',
    priority: 44,
  },
  {
    id: 'johnson-beat-thirty-one-and-a-stove',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.stayedTeaching' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'The schoolroom holds thirty-one children and one stove, and she has both of them running properly by the second week of September.',
    priority: 38,
  },
  {
    id: 'johnson-beat-nine-month-pay',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'A teacher is paid for nine months and the other three are for finding something else, which she has always managed to find.',
    priority: 34,
  },
  {
    id: 'johnson-beat-own-chalk',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'She buys the chalk herself in September, and the extra readers as well, and has never once mentioned either at a meeting.',
    priority: 34,
  },
  {
    id: 'johnson-beat-over-the-line',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'The school is over the state line and the road takes an hour, and she does the week’s problems in her head on the way.',
    priority: 32,
  },
  {
    id: 'johnson-beat-names-at-church',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1942 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The war is a list of names read out at church and a shortage of everything, and the children learn to use both sides of the paper.',
    priority: 40,
  },
  {
    id: 'johnson-beat-formation-overhead',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1942 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The aeroplanes go over in formation on their way to somewhere and the whole class turns its head, and she allows it, once.',
    priority: 36,
  },
  {
    id: 'johnson-beat-three-bedtimes',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'Three daughters, three bedtimes, and a kitchen table that is a schoolroom from seven until the youngest can no longer hold her eyes open.',
    priority: 38,
  },
  {
    id: 'johnson-beat-week-assembled',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'Her husband works and she works, and between them the week is assembled every Sunday night and very rarely improved upon.',
    priority: 32,
  },
  {
    id: 'johnson-beat-principal-nothing-above',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1952 },
    ],
    speaker: 'A SCHOOL PRINCIPAL',
    text: 'You are the best mathematics teacher in this county and there is nothing above this for you to be promoted into, and I am sorry.',
    priority: 40,
  },
  {
    id: 'johnson-beat-show-me-the-working',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1952 },
    ],
    speaker: 'KATHERINE',
    text: 'Do it again and show me the working, because an answer you cannot show me is an answer I am not able to use.',
    priority: 36,
  },
  {
    id: 'johnson-beat-fourth-chapter',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'The text stops three chapters before anything interesting, so she writes the fourth chapter herself, by hand, thirty-one times.',
    priority: 38,
  },
  {
    id: 'johnson-beat-four-line-notice',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'The notice in the paper runs to four lines and she reads all four of them standing up in the hallway with her coat still on.',
    priority: 40,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1953–1961
  // -------------------------------------------------------------------------
  {
    id: 'johnson-beat-rented-house',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'hamptonLangley' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1956 },
    ],
    text: 'The house is rented and the girls start a new school in the middle of a term, and all four of them manage it without comment.',
    priority: 42,
  },
  {
    id: 'johnson-beat-walk-to-the-west-building',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'hamptonLangley' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'The west building is a good walk from the rest of the site, which is the point of it, and the walk is where the women talk.',
    priority: 44,
  },
  {
    id: 'johnson-beat-vaughan-on-loan',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.vaughan' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1958 },
    ],
    speaker: 'DOROTHY VAUGHAN',
    text: 'You are on loan to the flight people for two weeks, and if they have any sense at all they will forget to send you back.',
    priority: 48,
  },
  {
    id: 'johnson-beat-table-with-a-sign',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'hamptonLangley' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'There is a table in the cafeteria with a small sign standing on it, and she eats at her desk instead, which is quicker anyway.',
    priority: 46,
  },
  {
    id: 'johnson-beat-fifth-place',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1960 },
    ],
    text: 'The tunnel data comes off in reels and she reduces it by hand to five places, and the fifth place is the one that matters.',
    priority: 36,
  },
  {
    id: 'johnson-beat-engineer-no-rule',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1959 },
    ],
    speaker: 'AN ENGINEER',
    text: 'Nobody has ever asked to come to the briefing before, which is not at all the same thing as there being a rule against it.',
    priority: 46,
  },
  {
    id: 'johnson-beat-asking-stops-being-necessary',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.askedForTheRoom' },
      { type: 'yearAtLeast', year: 1957 },
      { type: 'yearAtMost', year: 1961 },
    ],
    text: 'She asks again whether a rule exists, nobody can produce one, and after a while the asking simply stops being necessary.',
    priority: 46,
  },
  {
    id: 'johnson-beat-numbers-do-the-arguing',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.keepsToTheNumbers' },
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1961 },
    ],
    text: 'She keeps to the numbers and lets the numbers do the arguing, which is slower than an argument and has never yet lost one.',
    priority: 42,
  },
  {
    id: 'johnson-beat-calculator-rattle',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1960 },
    ],
    text: 'The desk calculator rattles like a till, and she can hear a wrong entry in it before she can see one, which nobody believes until it happens.',
    priority: 38,
  },
  {
    id: 'johnson-beat-back-on-the-monday',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1959 },
      { type: 'yearAtMost', year: 1961 },
    ],
    text: 'She marries again in a small ceremony with the three girls in the front row, and is back at her desk on the Monday.',
    priority: 40,
  },
  {
    id: 'johnson-beat-report-at-home',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.signsHerWork' },
      { type: 'yearAtLeast', year: 1960 },
      { type: 'yearAtMost', year: 1962 },
    ],
    text: 'A copy of the report goes home in her bag and is shown to three daughters who are not remotely impressed, which is exactly right.',
    priority: 42,
  },
  {
    id: 'johnson-beat-post-at-eleven',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.neverAnswered' },
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'Fourteen months, and the post still comes at eleven, and she has stopped walking out to the hall to meet it.',
    priority: 44,
  },
  {
    id: 'johnson-beat-letterhead-changes',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1958 },
      { type: 'yearAtMost', year: 1960 },
    ],
    text: 'The word on the letterhead changes from aeronautics to space over a single weekend, and on Monday the same men argue about the same drag.',
    priority: 40,
  },
  {
    id: 'johnson-beat-west-building-empties',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'hamptonLangley' },
      { type: 'yearAtLeast', year: 1958 },
      { type: 'yearAtMost', year: 1961 },
    ],
    text: 'The west building empties that year and the women are dealt out across the divisions, and she is already on the far side of the site.',
    priority: 44,
  },
  {
    id: 'johnson-beat-what-the-numbers-carry',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1958 },
      { type: 'yearAtMost', year: 1961 },
    ],
    speaker: 'KATHERINE',
    text: 'Tell me what you want the aircraft to do and I will tell you what the numbers will carry and what they will not.',
    priority: 40,
  },
  {
    id: 'johnson-beat-one-lamp-lit',
    characterId: 'johnson',
    conditions: [
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1959 },
    ],
    text: 'She works after they are asleep with one lamp lit, and the figures are the one place she can go where nothing has happened yet.',
    priority: 40,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1961–1963
  // -------------------------------------------------------------------------
  {
    id: 'johnson-beat-heat-off-the-concrete',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'capeCanaveral' },
      { type: 'yearAtLeast', year: 1961 },
      { type: 'yearAtMost', year: 1963 },
    ],
    text: 'The heat here comes up off the concrete long after dark, and the men work in shirtsleeves and speak entirely in hours remaining.',
    priority: 46,
  },
  {
    id: 'johnson-beat-launch-window-door',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1961 },
      { type: 'yearAtMost', year: 1963 },
    ],
    text: 'A launch window is a door that opens for a few minutes and does not care in the least whether the arithmetic is finished.',
    priority: 40,
  },
  {
    id: 'johnson-beat-place-in-the-ocean',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.checksTwice' },
      { type: 'yearAtLeast', year: 1961 },
      { type: 'yearAtMost', year: 1963 },
    ],
    text: 'Two days on a machine fed one line at a time, and what comes out at the end of it is a place in the ocean.',
    priority: 44,
  },
  {
    id: 'johnson-beat-one-of-them-has-stopped',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.askedByName' },
      { type: 'yearAtLeast', year: 1962 },
      { type: 'yearAtMost', year: 1963 },
    ],
    text: 'Men who used to walk past her desk stop at it now, and one of them still says get the girl, and one of them has stopped.',
    priority: 46,
  },
  {
    id: 'johnson-beat-countdown-in-a-corridor',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1961 },
      { type: 'yearAtMost', year: 1963 },
    ],
    text: 'The whole building listens to a countdown on a radio in a corridor, and the arithmetic in the room is hers, and she says nothing.',
    priority: 42,
  },
  {
    id: 'johnson-beat-recovery-ships',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1961 },
      { type: 'yearAtMost', year: 1963 },
    ],
    text: 'The recovery ships are placed on the strength of a number she wrote down, and she thinks about that on the drive home and then stops.',
    priority: 38,
  },
  {
    id: 'johnson-beat-run-it-again',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1962 },
      { type: 'yearAtMost', year: 1963 },
    ],
    speaker: 'A FLIGHT ENGINEER',
    text: 'Run it again and tell me the same thing and I will sign it, and tell me something different and we are all going home.',
    priority: 44,
  },
  {
    id: 'johnson-beat-when-to-let-go',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1961 },
      { type: 'yearAtMost', year: 1962 },
    ],
    speaker: 'KATHERINE',
    text: 'You tell me where you want him to come down and when, and I will tell you the moment to let go of him.',
    priority: 46,
  },
  {
    id: 'johnson-beat-which-part-was-hers',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1961 },
      { type: 'yearAtMost', year: 1963 },
    ],
    text: 'Her daughters watch the launch at school with the whole assembly and come home wanting to know which part of it was hers.',
    priority: 42,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1963–1970
  // -------------------------------------------------------------------------
  {
    id: 'johnson-beat-stone-at-a-moving-stone',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1964 },
      { type: 'yearAtMost', year: 1969 },
    ],
    text: 'The Mercury sums were a stone thrown at a mark; this one is a stone thrown at another stone, and that stone is also moving.',
    priority: 42,
  },
  {
    id: 'johnson-beat-power-off-chart',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.apolloBackup' },
      { type: 'yearAtLeast', year: 1965 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'She works out the version where everything fails: one star, a wristwatch, and a chart a man can read with the power off.',
    priority: 46,
  },
  {
    id: 'johnson-beat-answers-them-twice',
    characterId: 'johnson',
    conditions: [
      { type: 'narrativeFlag', flag: 'johnson.teachesTheNext' },
      { type: 'yearAtLeast', year: 1964 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'The new ones arrive with degrees she never had and questions she did have, and she answers every one of them twice.',
    priority: 40,
  },
  {
    id: 'johnson-beat-young-analyst',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1965 },
      { type: 'yearAtMost', year: 1970 },
    ],
    speaker: 'A YOUNG ANALYST',
    text: 'The machine gave us this an hour ago, Mrs. Johnson, so what exactly is it that you are still looking for?',
    priority: 42,
  },
  {
    id: 'johnson-beat-tell-the-crew',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1966 },
      { type: 'yearAtMost', year: 1970 },
    ],
    speaker: 'KATHERINE',
    text: 'Tell the crew the chart works with the power off, because that is the only condition under which they will ever need it.',
    priority: 44,
  },
  {
    id: 'johnson-beat-one-case-a-month',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1964 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'The machines are trusted now, and she still works one case a month by hand, and has never once explained to anybody why.',
    priority: 38,
  },
  {
    id: 'johnson-beat-two-clocks',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1968 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'The rendezvous is two clocks and a closing distance, and the only real difficulty is that both of the clocks are in the sky.',
    priority: 40,
  },
  {
    id: 'johnson-beat-reports-not-newspapers',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1966 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'Her name is in the technical reports and out of the newspapers, and she has made a long, workable peace with the difference.',
    priority: 36,
  },
  {
    id: 'johnson-beat-quiet-table',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1964 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'The girls are grown and one of them teaches, and the kitchen table is quiet now in a way that takes some getting used to.',
    priority: 34,
  },
  {
    id: 'johnson-beat-plaque-and-lunch',
    characterId: 'johnson',
    conditions: [
      { type: 'resourceAtLeast', resource: 'standing', value: 5 },
      { type: 'yearAtLeast', year: 1965 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'There is a plaque, a group photograph and a lunch, and the lunch is the part of it she actually enjoys.',
    priority: 36,
  },
  {
    id: 'johnson-beat-a-long-way-out',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1970 },
      { type: 'yearAtMost', year: 1971 },
    ],
    text: 'Something goes wrong a long way out, the backup procedures come down off the shelf, and for four days nobody in the building sleeps.',
    priority: 48,
  },
  {
    id: 'johnson-beat-what-the-job-is',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1969 },
      { type: 'yearAtMost', year: 1971 },
    ],
    text: 'Somebody asks when she means to retire, and she says she has only just worked out what the job actually is.',
    priority: 32,
  },

  // -------------------------------------------------------------------------
  // Other lives, other cities
  // -------------------------------------------------------------------------
  {
    id: 'johnson-beat-princeton-tea-towels',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'There is a man in this town whose face is on tea towels, and the people who work here refer to him as the fellow along the corridor.',
    priority: 56,
  },
  {
    id: 'johnson-beat-princeton-same-route',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'godel', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'A logician here walks the same route at the same hour every day, watched over kindly by people who have agreed not to discuss it.',
    priority: 56,
  },
  {
    id: 'johnson-beat-princeton-machine-room',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'The machine room here is the size of a parlour, and the man who argued it into existence is somewhere in the building being three moves ahead.',
    priority: 56,
  },
  {
    id: 'johnson-beat-washington-lowered-voices',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'washingtonDC' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'washingtonDC' },
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1963 },
    ],
    text: 'A physicist in this city had his clearance taken from him in a closed room, and men at the next table lower their voices to say so.',
    priority: 56,
  },
  {
    id: 'johnson-beat-brynmawr-two-languages',
    characterId: 'johnson',
    conditions: [
      { type: 'locationIs', locationId: 'brynMawr' },
      { type: 'otherCharacterAt', characterId: 'noether', locationId: 'brynMawr' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'A German mathematician lectures here to four women and a visitor in a mixture of two languages, and none of them wants her to stop.',
    priority: 56,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'johnson-beat-rain-off-the-water',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'Rain comes in off the water for a week, the windows stay shut, and the whole floor smells of warm paper.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'johnson-beat-second-check',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'She checks it, and then she checks it again, because the second check is the only one that has ever caught anything.',
    priority: 9,
    repeatable: true,
  },
  {
    id: 'johnson-beat-pencil-and-eraser',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1970 },
    ],
    text: 'The pencil is sharpened to a point she can feel through the paper and the eraser is nearly gone, and both of those are deliberate.',
    priority: 7,
    repeatable: true,
  },
  {
    id: 'johnson-beat-stove-eats-coal',
    characterId: 'johnson',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1942 },
    ],
    text: 'Winter comes down the valley early and the stove eats coal faster than anybody sitting at the table has budgeted for.',
    priority: 6,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Strain, when the years of work have taken more than they have given back
  // -------------------------------------------------------------------------
  {
    id: 'johnson-beat-strain-three-numbers',
    characterId: 'johnson',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 4 }],
    text: 'She checks the one column three times and gets three numbers, and arithmetic she could do in her sleep will not come out right on paper.',
    priority: 40,
    repeatable: true,
  },
  {
    id: 'johnson-beat-strain-choir',
    characterId: 'johnson',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 2 }],
    text: 'She misses the Wednesday practice at church for the third week running, and on Thursday a covered dish arrives at the door.',
    priority: 50,
    repeatable: true,
  },
  {
    id: 'johnson-beat-strain-folder',
    characterId: 'johnson',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 0 }],
    text: 'The trajectory sheets go back into the folder exactly as they came out, and when the engineers ask for the numbers by Friday she tells them to ask somebody else.',
    priority: 60,
    repeatable: true,
  },
];
