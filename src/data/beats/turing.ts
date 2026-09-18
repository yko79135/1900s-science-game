import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of Alan Turing, 1912–1954.
 *
 * One line lands after a turn the authored scenes have no reason to interrupt:
 * a clock wound on Sunday, a billet three miles out, an eleventh revision of an
 * instruction format nobody has ordered valves for. The scenes own the boat, the
 * other boy, the tape and the table, the huts, the design in the drawer, the
 * imitation test, the stripes and the court. These are the years in between, and
 * they are gated the same way — by year, by place, by what the life has and has
 * not got. Beats with a place, a flag or another scientist in the same city on
 * them outrank the general ones, so Princeton and Manchester sound like
 * themselves.
 */

export const TURING_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1921–1926
  // -------------------------------------------------------------------------
  {
    id: 'turing-beat-guardian-clocks',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1926 },
    ],
    text: 'The clocks in the house are wound on Sunday and agree with one another to the minute, and he checks this on his own account.',
    priority: 30,
  },
  {
    id: 'turing-beat-sea-post',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1926 },
    ],
    text: 'The post from India comes in bundles by sea, six weeks of a father at once, and is answered in one afternoon at the dining table.',
    priority: 30,
  },
  {
    id: 'turing-beat-brother-beach',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1925 },
    ],
    speaker: 'HIS BROTHER',
    text: 'Must you know how everything works, Alan? Some of us are only trying to get down to the beach before the tide.',
    priority: 32,
  },
  {
    id: 'turing-beat-lamp-posts',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1924 },
    ],
    text: 'He stops at every lamp-post on the walk into town to read the maker’s number off the base, and the walk takes an hour.',
    priority: 30,
  },
  {
    id: 'turing-beat-daisies-goal',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1926 },
    ],
    text: 'Put in goal at hockey because nobody wants him anywhere else, he spends the half counting the daisies growing in the goalmouth.',
    priority: 32,
  },
  {
    id: 'turing-beat-cellar-chemistry',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1926 },
    ],
    text: 'The chemistry has been moved to the cellar by general agreement, which suits him, since nobody goes down there to ask about the smell.',
    priority: 34,
  },
  {
    id: 'turing-beat-pi-series',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1926 },
    ],
    text: 'He finds a series in a borrowed book that squeezes decimals out of a circle, and fills four pages with them before he is called for tea.',
    priority: 34,
  },
  {
    id: 'turing-beat-remittance-late',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1926 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'The money from India is late twice running, and he learns the word remittance from a letter he was not meant to have read.',
    priority: 36,
  },
  {
    id: 'turing-beat-mother-diagrams',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1926 },
    ],
    speaker: 'HIS MOTHER',
    text: 'A letter that is entirely diagrams is not a letter, Alan, and your grandmother has begun to ask what is the matter with you.',
    priority: 34,
  },
  {
    id: 'turing-beat-chilblains',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1926 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
    ],
    text: 'The dormitory is unheated until November by rule, and he writes his sums in mittens with the fingers cut off, badly, by himself.',
    priority: 33,
  },

  // -------------------------------------------------------------------------
  // Education, 1926–1936
  // -------------------------------------------------------------------------
  {
    id: 'turing-beat-relativity-notebook',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'He reads Einstein on relativity at fifteen and writes out for his mother the exact page where the great man quietly stops believing Newton.',
    priority: 36,
  },
  {
    id: 'turing-beat-mends-the-bell',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'He mends the kitchen clock and the chapel’s electric bell in the same week and is thanked for neither, the bell being unpopular.',
    priority: 30,
  },
  {
    id: 'turing-beat-cross-country',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'He runs cross-country because it is the only school activity that does not require him to be part of a team, and he wins it.',
    priority: 30,
  },
  {
    id: 'turing-beat-form-master-neat',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1931 },
    ],
    speaker: 'A FORM MASTER',
    text: 'The answer is right, Turing, and the working is not the working we teach, and you will find the world prefers the working.',
    priority: 32,
  },
  {
    id: 'turing-beat-february-letters',
    characterId: 'turing',
    conditions: [
      { type: 'narrativeFlag', flag: 'turing.morcom' },
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1936 },
    ],
    text: 'He writes to the other boy’s mother each February, and the letters are mostly about science, because that is the only way he can say the rest.',
    priority: 44,
  },
  {
    id: 'turing-beat-kings-bedmaker',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'The bedmaker calls him sir, moves nothing whatever on the desk, and has privately decided that the ink is a lost cause.',
    priority: 38,
  },
  {
    id: 'turing-beat-central-limit',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1936 },
    ],
    text: 'He proves from scratch why errors pile up into a bell-shaped curve, and learns afterwards that a Finn had it a dozen years before him.',
    priority: 38,
  },
  {
    id: 'turing-beat-fellowship-rooms',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'The fellowship comes at twenty-two with a set of rooms, a dining right and three hundred a year, and no duty except to be interesting.',
    priority: 40,
  },
  {
    id: 'turing-beat-anti-war-society',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'He joins the anti-war society in a year when everyone joins something, attends twice, and finds the reasoning less rigorous than he had hoped.',
    priority: 32,
  },
  {
    id: 'turing-beat-two-finger-typing',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'He types his own pages with two fingers, because a typist would have to be told what the symbols mean and there is nobody to tell.',
    priority: 36,
  },
  {
    id: 'turing-beat-don-at-hall',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1937 },
    ],
    speaker: 'A DON',
    text: 'The college does not mind in the least what you think about, Turing. It minds a great deal what you wear to Hall.',
    priority: 34,
  },
  {
    id: 'turing-beat-sends-money-home',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1938 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'He sends part of the stipend home without being asked and does the arithmetic about coal in the margin of a proof.',
    priority: 34,
  },
  {
    id: 'turing-beat-lodging-gas-ring',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1936 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    text: 'Supper is whatever can be done on one gas ring, eaten standing, with the notebook open on the mantelpiece at the page that is going wrong.',
    priority: 35,
  },
  {
    id: 'turing-beat-oppenheimer-cavendish',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1928 },
    ],
    text: 'There is an American at the physics laboratory said to be frightening at theory and hopeless at glassblowing, and the story goes round Hall twice.',
    priority: 46,
  },
  {
    id: 'turing-beat-newnham-chemist',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'otherCharacterAt', characterId: 'franklin', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The chemists have a woman in their year who corrects the demonstrators, and the demonstrators complain that it is worse than that: she is right.',
    priority: 46,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1936–1938
  // -------------------------------------------------------------------------
  {
    id: 'turing-beat-crossing-sun',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'The crossing takes eight days and he spends most of them working the ship’s position out of the sun, purely to see whether he can.',
    priority: 34,
  },
  {
    id: 'turing-beat-you-are-welcome',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'Eleven people say you’re welcome to him before lunch and he counts them, on the grounds that a rule that regular must have an exception.',
    priority: 38,
  },
  {
    id: 'turing-beat-einstein-common-room',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The most famous man in physics takes his tea at the far end of the common room, and the room’s achievement is that nobody turns round.',
    priority: 52,
  },
  {
    id: 'turing-beat-vonneumann-workshop',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1940 },
    ],
    speaker: 'VON NEUMANN',
    text: 'Your definition is the right one, and definitions are cheap; what you want next is a workshop and somebody who can solder.',
    priority: 52,
  },
  {
    id: 'turing-beat-church-silence',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'His supervisor reads the draft in silence for an hour and a half, then suggests one change to the notation and nothing else at all.',
    priority: 40,
  },
  {
    id: 'turing-beat-church-speaks',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1939 },
    ],
    speaker: 'CHURCH',
    text: 'The result is yours, Mr Turing. The notation, if you will forgive me, belongs to nobody yet, and should be made easier on the reader.',
    priority: 42,
  },
  {
    id: 'turing-beat-relay-invoice',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'Relay contacts arrive by post and the invoice goes up to his room with the mail, and the porter has decided not to enquire.',
    priority: 38,
  },
  {
    id: 'turing-beat-princeton-road-run',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'He runs out past the fields in the afternoons and comes back with the argument straightened out and his shoes grey to the laces.',
    priority: 36,
  },
  {
    id: 'turing-beat-best-room-alone',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1939 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    text: 'He is in the best mathematical room on earth and has spoken to nobody outside it for eight days, and both things are true at once.',
    priority: 38,
  },
  {
    id: 'turing-beat-godel-arrives',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'godel', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1948 },
    ],
    text: 'The quiet Austrian who came here the long way east walks the same road at the same hour, and will discuss nothing before three o’clock.',
    priority: 54,
  },
  {
    id: 'turing-beat-alan-last-third',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1940 },
    ],
    speaker: 'ALAN',
    text: 'I have two-thirds of a cipher machine on the bench, and the missing third is the part that requires money rather than thought.',
    priority: 36,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1939–1945
  // -------------------------------------------------------------------------
  {
    id: 'turing-beat-billet-supper',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'bletchleyPark' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1944 },
    ],
    text: 'His billet is over a pub three miles out, where the landlady keeps his supper warm until nine and then eats it herself.',
    priority: 38,
  },
  {
    id: 'turing-beat-painted-window',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'bletchleyPark' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The window is painted over and the lamp is on at noon, and after a fortnight of that nobody in the room notices the weather.',
    priority: 34,
  },
  {
    id: 'turing-beat-night-shift-sunrise',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'Night shift ends at eight and he cycles back into the sunrise past men walking to a war they are permitted to describe.',
    priority: 32,
  },
  {
    id: 'turing-beat-wrens-know-machines',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'bletchleyPark' },
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The women who run the machines know their moods better than he does and tell him so, politely, standing in front of the machine.',
    priority: 40,
  },
  {
    id: 'turing-beat-wren-speaks',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'bletchleyPark' },
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1945 },
    ],
    speaker: 'A WREN',
    text: 'It stops on the same drum every time, sir, and has done since Tuesday, and nobody upstairs has thought it worth writing down.',
    priority: 42,
  },
  {
    id: 'turing-beat-crossword-recruit',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'bletchleyPark' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'They take on a man this month for finishing a newspaper crossword in under twelve minutes, and sit him with two classicists and a chess champion.',
    priority: 38,
  },
  {
    id: 'turing-beat-home-guard',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'He joins the Home Guard to learn to shoot, answers one question on the form in a way nobody reads, and stops attending once he can hit the target.',
    priority: 36,
  },
  {
    id: 'turing-beat-speech-scrambler',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'At the new place out in the country he is building a thing to scramble speech, in a hut with one engineer and a soldering iron he mostly owns.',
    priority: 42,
  },
  {
    id: 'turing-beat-atlantic-convoy',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1942 },
      { type: 'yearAtMost', year: 1944 },
    ],
    text: 'He crosses the Atlantic in a winter convoy, is nearly refused entry at the far end for want of the right papers, and mentions neither afterwards.',
    priority: 42,
  },
  {
    id: 'turing-beat-messages-as-quantity',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'Over tea at an American laboratory he meets a young man who measures messages the way engineers measure current, and they agree on more than either expected.',
    priority: 40,
  },
  {
    id: 'turing-beat-mother-foreign-office',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'His mother believes he is doing something dull for a government department, and he has let her go on believing it for four years.',
    priority: 34,
  },
  {
    id: 'turing-beat-sugar-tin',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'His sugar ration lives in a labelled tin on the shelf, and the label is a joke that perhaps two people in England are cleared to understand.',
    priority: 30,
  },
  {
    id: 'turing-beat-four-hours-chair',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1945 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    text: 'He sleeps four hours in the chair because a run is going through the night and he does not trust it to still be there by morning.',
    priority: 36,
  },
  {
    id: 'turing-beat-june-traffic',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'In June the traffic doubles overnight, nobody in the room says the word everyone is thinking, and the tea goes round at the usual hour.',
    priority: 44,
  },
  {
    id: 'turing-beat-colleague-dont-know',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'bletchleyPark' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1945 },
    ],
    speaker: 'A COLLEAGUE',
    text: 'You are the only man here who says I don’t know in a meeting, Alan, and the only one who has found out by Thursday.',
    priority: 40,
  },
  {
    id: 'turing-beat-chess-for-england',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'bletchleyPark' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'He loses at chess twice a week to a man who has played for England, and analyses each loss aloud until the other man goes to bed.',
    priority: 32,
  },
  {
    id: 'turing-beat-ve-walk',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The war ends on an ordinary weekday and he walks twelve miles that night, because there is nothing left in the hut to do and nowhere to say so.',
    priority: 42,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1945–1948
  // -------------------------------------------------------------------------
  {
    id: 'turing-beat-teddington-lodgings',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'teddington' },
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1948 },
    ],
    text: 'He takes rooms in a house where the landlady objects to the hours and to the state of his shoes, in that order.',
    priority: 38,
  },
  {
    id: 'turing-beat-nations-clock',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'teddington' },
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1948 },
    ],
    text: 'The building keeps the nation’s yard and the nation’s second in a basement, and he must fill in a form to borrow a screwdriver.',
    priority: 38,
  },
  {
    id: 'turing-beat-received-with-interest',
    characterId: 'turing',
    conditions: [
      { type: 'narrativeFlag', flag: 'turing.nplCommittees' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1949 },
    ],
    text: 'The minutes record that the proposal was received with interest, which he now knows is the department’s technical term for nothing whatever.',
    priority: 46,
  },
  {
    id: 'turing-beat-walton-vest',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1949 },
    ],
    text: 'He joins the running club in the town, turns out in a vest with no club name on it, and beats men coached since they were fourteen.',
    priority: 38,
  },
  {
    id: 'turing-beat-obe-drawer',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1948 },
    ],
    text: 'A letter says he is to be made an officer of an order for services that may not be described, and the ribbon goes into a drawer.',
    priority: 40,
  },
  {
    id: 'turing-beat-eleventh-revision',
    characterId: 'turing',
    conditions: [
      { type: 'narrativeFlag', flag: 'turing.aceDelayed' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1949 },
    ],
    text: 'Another revision of the instruction format, better than the last one, to be read with admiration by the same four men.',
    priority: 46,
  },
  {
    id: 'turing-beat-no-valves',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'teddington' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1949 },
    ],
    text: 'The young mathematician assigned to him follows the arithmetic perfectly and cannot help with the valves, and there are no valves.',
    priority: 38,
  },
  {
    id: 'turing-beat-teleprinter-code',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1950 },
    ],
    text: 'He writes the instructions in a code of his own mapped onto the teleprinter alphabet, and two people in England can read it aloud.',
    priority: 36,
  },
  {
    id: 'turing-beat-nerve-cells',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1949 },
    ],
    text: 'He reads about nerve cells and the growth of infants for a whole winter and files the notes under engineering, which nobody else does.',
    priority: 38,
  },
  {
    id: 'turing-beat-not-sleeping',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1949 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    text: 'He has stopped answering letters and started waking at four, and the design on the desk is the only finished thing in the building.',
    priority: 38,
  },
  {
    id: 'turing-beat-chairman-speaks',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'teddington' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1949 },
    ],
    speaker: 'THE CHAIRMAN',
    text: 'Nobody is doubting the engine, Dr Turing. We are doubting the establishment’s capacity to house it in this financial year.',
    priority: 42,
  },
  {
    id: 'turing-beat-christmas-wireless',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1949 },
    ],
    text: 'He goes home for Christmas, mends the wireless before lunch, and is asked three separate times what exactly it is that he does.',
    priority: 30,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1948–1954
  // -------------------------------------------------------------------------
  {
    id: 'turing-beat-machine-from-midnight',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'The machine is his from midnight, which suits him exactly, and the night porter has learned not to ask what the noise is about.',
    priority: 40,
  },
  {
    id: 'turing-beat-newman-switched-on',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1951 },
    ],
    speaker: 'NEWMAN',
    text: 'It is cruder than yours and it is switched on, Alan, and there is nobody in this building who knows what to tell it.',
    priority: 46,
  },
  {
    id: 'turing-beat-wilmslow-garden',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1950 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'He buys a small house out beyond the town with a garden he fully intends to do something about, and does not.',
    priority: 38,
  },
  {
    id: 'turing-beat-bear-on-mantelpiece',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'He practises a lecture at the bear on the mantelpiece, on the grounds that an audience that cannot interrupt is the only honest audience.',
    priority: 34,
  },
  {
    id: 'turing-beat-engineer-speaks',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1954 },
    ],
    speaker: 'AN ENGINEER',
    text: 'You talk to it as though it were slow rather than stupid, Dr Turing, and now the lads on the night shift have started doing it too.',
    priority: 42,
  },
  {
    id: 'turing-beat-royal-society',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'He is elected to the Royal Society at thirty-eight and tells his mother before he tells the laboratory, and she tells everybody else.',
    priority: 42,
  },
  {
    id: 'turing-beat-wireless-broadcast',
    characterId: 'turing',
    conditions: [
      { type: 'projectCompleted', projectId: 'turing-machine-intelligence' },
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'They put him on the wireless to argue about whether machines can think, and the producer asks him twice to sound rather less amused.',
    priority: 44,
  },
  {
    id: 'turing-beat-surgeon-sonnet',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'A surgeon says publicly that he will believe a machine thinks when one writes a sonnet out of feeling, and the reply runs to three polite pages.',
    priority: 38,
  },
  {
    id: 'turing-beat-two-chemicals-store',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'He fills the store with two chemicals that do not exist and asks the machine to leave them alone for a thousand steps.',
    priority: 40,
  },
  {
    id: 'turing-beat-fir-cones',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'There are fir cones on every flat surface of the office, counted, numbered in pencil, and on no account to be moved by the cleaners.',
    priority: 36,
  },
  {
    id: 'turing-beat-student-past-midnight',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'His student stays past midnight arguing, and it is the only argument in the building that neither of them is trying to win.',
    priority: 34,
  },
  {
    id: 'turing-beat-leg-goes',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1950 },
      { type: 'yearAtMost', year: 1954 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
    ],
    text: 'The leg goes in a race and a doctor explains that thirty-eight is thirty-eight, so he walks the distances instead and resents every mile.',
    priority: 36,
  },
  {
    id: 'turing-beat-abroad-in-summer',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'He goes abroad in the summer for the first time in years and comes back brown, unhurried, and full of a question about the spacing of leaves.',
    priority: 38,
  },
  {
    id: 'turing-beat-four-inches-of-it',
    characterId: 'turing',
    conditions: [
      { type: 'narrativeFlag', flag: 'turing.prosecution' },
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'The local paper gives it four inches on an inside page and the laboratory says nothing at all, which is its way of being kind.',
    priority: 50,
  },
  {
    id: 'turing-beat-carry-on-as-before',
    characterId: 'turing',
    conditions: [
      { type: 'narrativeFlag', flag: 'turing.prosecution' },
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'Two colleagues go on exactly as before, holding the door and arguing about the tape, and he notices, and never says that he has noticed.',
    priority: 48,
  },
  {
    id: 'turing-beat-franklin-london',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'london' },
      { type: 'otherCharacterAt', characterId: 'franklin', locationId: 'london' },
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'In a basement along the corridor they photograph fibres with X-rays, and the pictures pegged up to dry look like nothing and are evidently everything.',
    priority: 50,
  },
  {
    id: 'turing-beat-mother-at-the-stove',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1950 },
      { type: 'yearAtMost', year: 1954 },
    ],
    speaker: 'HIS MOTHER',
    text: 'You will eat something that was not on that stove yesterday, Alan, and then you may go back to your cones.',
    priority: 36,
  },
  {
    id: 'turing-beat-alan-described-exactly',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1954 },
    ],
    speaker: 'ALAN',
    text: 'If a thing can be described exactly, it can be built; everything I have argued about for twenty years is a footnote to that.',
    priority: 40,
  },
  {
    id: 'turing-beat-unfinished-pattern',
    characterId: 'turing',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'turing-morphogenesis' },
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'The pattern arithmetic is a foot thick on the desk and unfinished, and he has told nobody at all how far along it has got.',
    priority: 42,
  },
  {
    id: 'turing-beat-programmers-complain',
    characterId: 'turing',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'Somebody complains that his handbook assumes the reader is intelligent, and he cannot see, even after it is explained, what the objection is.',
    priority: 40,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'turing-beat-hay-fever-june',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'June arrives and takes his eyes and his temper with it, so he works at night until the pollen goes over.',
    priority: 9,
    repeatable: true,
  },
  {
    id: 'turing-beat-running-it-out',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1951 },
    ],
    text: 'He runs in the evening until the argument in his head arranges itself, and then runs the rest of the way home in any case.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'turing-beat-problem-in-the-middle',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'He writes the problem out longhand in the middle of the page and works outward from it in both directions at once.',
    priority: 7,
    repeatable: true,
  },
  {
    id: 'turing-beat-four-oclock-kettle',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'At four o’clock somebody puts the kettle on, the argument stops for eleven minutes exactly, and he has timed it more than once.',
    priority: 6,
    repeatable: true,
  },
  {
    id: 'turing-beat-rain-off-the-moors',
    characterId: 'turing',
    conditions: [
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'Rain settles in for three days, and he works with the lamp lit and the window shut and does not notice the week going by.',
    priority: 5,
    repeatable: true,
  },
];
