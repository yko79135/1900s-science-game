import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of Albert Einstein, 1879–1955.
 *
 * One line lands after a turn that the authored scenes have no reason to
 * interrupt: a rent rise, a rejected thesis, a barometer explained by post to a
 * boy in Zürich. The scenes own the compass, the four envelopes, the field
 * equations, the letter and the walks; these are the years in between, and they
 * are gated the same way — by year, by place, by what the life has and has not
 * got. Beats with a place or a flag on them outrank the general ones, so a
 * detour to Göttingen or a decade at the patent desk sounds like itself.
 */

export const EINSTEIN_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1879–1896
  // -------------------------------------------------------------------------
  {
    id: 'einstein-beat-late-words',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1889 },
      { type: 'yearAtMost', year: 1893 },
    ],
    text: 'He still tries each sentence out under his breath before he says it, and the masters read the pause as insolence.',
    priority: 30,
  },
  {
    id: 'einstein-beat-violin-lessons',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1886 },
      { type: 'yearAtMost', year: 1893 },
    ],
    text: 'The violin lessons are a punishment for three years, until the Mozart sonatas arrive and nobody has to ask him twice again.',
    priority: 30,
  },
  {
    id: 'einstein-beat-geometry-pocket',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1889 },
      { type: 'yearAtMost', year: 1894 },
    ],
    text: 'The little book of plane geometry lives in his coat pocket, where the other boys keep string, and he has finished it twice by summer.',
    priority: 26,
  },
  {
    id: 'einstein-beat-greek-master',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1888 },
      { type: 'yearAtMost', year: 1894 },
    ],
    text: 'The Greek master tells him nothing will ever become of him, and he writes the sentence down at home to see how it looks in Greek.',
    priority: 32,
  },
  {
    id: 'einstein-beat-maja-letter',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1890 },
      { type: 'yearAtMost', year: 1896 },
    ],
    speaker: 'MAJA',
    text: 'Four pages about magnets and one line about whether you are eating — and remember that Mama reads them too.',
    priority: 34,
  },
  {
    id: 'einstein-beat-kitchen-accounts',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1893 },
      { type: 'yearAtMost', year: 1896 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'The firm’s accounts are done twice at the kitchen table and come out the same the second time, which nobody says aloud.',
    priority: 36,
  },
  {
    id: 'einstein-beat-italian-hills',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1894 },
      { type: 'yearAtMost', year: 1896 },
    ],
    text: 'He walks out of the town into the hills for a day and a half, because the road is there and nobody expects him anywhere.',
    priority: 28,
  },
  {
    id: 'einstein-beat-aarau-supper',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1896 },
    ],
    text: 'In Aarau he boards with a schoolmaster’s family who argue about politics at supper and expect him to take a side.',
    priority: 32,
  },
  {
    id: 'einstein-beat-french-report',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1896 },
    ],
    text: 'The examiner’s report says the French is the trouble, and his French, read back to him aloud, agrees with the report.',
    priority: 34,
  },
  {
    id: 'einstein-beat-lodging-lamp',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1893 },
      { type: 'yearAtMost', year: 1895 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    text: 'The lodging house turns the gas down at ten, and he reads at the window until the street lamp outside is the only light left.',
    priority: 33,
  },
  {
    id: 'einstein-beat-zurich-trams',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'zurich' },
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1896 },
    ],
    text: 'The trams here run to the minute; he times two of them from the pavement before he goes in to register his name.',
    priority: 38,
  },

  // -------------------------------------------------------------------------
  // Education, 1896–1900
  // -------------------------------------------------------------------------
  {
    id: 'einstein-beat-lecture-hall',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1896 },
      { type: 'yearAtMost', year: 1900 },
    ],
    text: 'The lecture hall smells of coal smoke and wet coats, and the professor reads out the notes he read out last year.',
    priority: 26,
  },
  {
    id: 'einstein-beat-mileva-reading',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1900 },
    ],
    text: 'Mileva is the only other person in the section who has read the new papers, and she disagrees with him about every one of them.',
    priority: 40,
  },
  {
    id: 'einstein-beat-mileva-skipping',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1900 },
    ],
    speaker: 'MILEVA',
    text: 'If you are going to miss the lectures, miss them properly, and read something the professor has never heard of.',
    priority: 42,
  },
  {
    id: 'einstein-beat-grossmann-warning',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1900 },
    ],
    speaker: 'GROSSMANN',
    text: 'You will get a post one day, Albert, but not from any of the men you have been enjoying yourself with.',
    priority: 41,
  },
  {
    id: 'einstein-beat-landlady-coal',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1900 },
    ],
    text: 'The landlady raises the rent by two francs in October and explains twice, at length, that coal is coal.',
    priority: 30,
  },
  {
    id: 'einstein-beat-split-sausage',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1900 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'Supper is bread and one sausage divided in two, and he says he is not hungry, which is untrue and convinces nobody.',
    priority: 34,
  },
  {
    id: 'einstein-beat-laboratory-report',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1900 },
    ],
    text: 'The physics professor keeps him out of the good laboratory and writes a note about his attitude that will follow him for years.',
    priority: 36,
  },
  {
    id: 'einstein-beat-cramming',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1899 },
      { type: 'yearAtMost', year: 1900 },
    ],
    text: 'He crams the whole syllabus in three weeks from borrowed notes, passes it, and cannot look at a physics book for months afterwards.',
    priority: 33,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1900–1909
  // -------------------------------------------------------------------------
  {
    id: 'einstein-beat-no-reply',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'Another professor does not answer, and he begins to suspect that the ones who do not answer have all read the same letter about him.',
    priority: 38,
  },
  {
    id: 'einstein-beat-held-out',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.heldOut' },
      { type: 'yearAtLeast', year: 1901 },
      { type: 'yearAtMost', year: 1905 },
    ],
    text: 'He holds out one more year for the post that does not come, and the private lessons pay for the coal and very little past it.',
    priority: 46,
  },
  {
    id: 'einstein-beat-schoolroom',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.schoolmaster' },
      { type: 'yearAtLeast', year: 1901 },
      { type: 'yearAtMost', year: 1906 },
    ],
    text: 'Forty boys take every hour he has, and the physics gets whatever is left of him once the exercise books are marked.',
    priority: 46,
  },
  {
    id: 'einstein-beat-dissertation-returned',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1901 },
      { type: 'yearAtMost', year: 1904 },
    ],
    text: 'The dissertation comes back with a courteous note, and he carries the pages and the wasted fee home in the same envelope.',
    priority: 36,
  },
  {
    id: 'einstein-beat-thursday-academy',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1906 },
    ],
    text: 'Two friends come on Thursdays for cheap sausage and philosophy, and they call themselves an academy, which nobody else finds funny.',
    priority: 40,
  },
  {
    id: 'einstein-beat-four-oclock',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'bern' },
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'At four o’clock the office goes quiet enough to hear the clock in the stairwell, and the second drawer slides open on his own pages.',
    priority: 44,
  },
  {
    id: 'einstein-beat-perpetual-motion',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.patentPost' },
      { type: 'locationIs', locationId: 'bern' },
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'Three of the morning’s applications are perpetual motion machines, and the kindest thing he can write is exactly where each one stops.',
    priority: 45,
  },
  {
    id: 'einstein-beat-besso-sunday',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1903 },
      { type: 'yearAtMost', year: 1909 },
    ],
    speaker: 'BESSO',
    text: 'If it is right it will still be right on Sunday. Put the coat on and come and walk by the river.',
    priority: 42,
  },
  {
    id: 'einstein-beat-first-child',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'Hans Albert learns to shout before he learns to speak, and the flat is small enough that the physics moves to after ten.',
    priority: 40,
  },
  {
    id: 'einstein-beat-mileva-fourth-time',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1909 },
    ],
    speaker: 'MILEVA',
    text: 'You have checked it three times. Eat something first, and then you may check it a fourth.',
    priority: 38,
  },
  {
    id: 'einstein-beat-clock-question-waits',
    characterId: 'einstein',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'einstein-special-relativity' },
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'The question about the two clocks comes out on Sundays, the way other men take out a boat, and goes back in the drawer by dark.',
    priority: 44,
  },
  {
    id: 'einstein-beat-reprint-requests',
    characterId: 'einstein',
    conditions: [
      { type: 'projectCompleted', projectId: 'einstein-special-relativity' },
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'Requests for offprints arrive from cities he has never seen, and a clerk asks him, not unkindly, whether he is in some kind of trouble.',
    priority: 44,
  },
  {
    id: 'einstein-beat-habilitation-refused',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1907 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'His application to lecture is refused on the grounds that the paper he enclosed is not enough of a thesis.',
    priority: 38,
  },
  {
    id: 'einstein-beat-eight-oclock-still',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.miracleYear' },
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'Four papers in one year, and the office still expects him at eight in the morning, which he finds funnier than it deserves.',
    priority: 48,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1909–1919
  // -------------------------------------------------------------------------
  {
    id: 'einstein-beat-chair-pays-less',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'The chair pays less than the patent office did, and he accepts it without telling anybody at home the figure.',
    priority: 38,
  },
  {
    id: 'einstein-beat-old-office',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'zurich' },
      { type: 'yearAtLeast', year: 1910 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'He is given the office of a man he once asked for a post, and neither of them mentions it at the faculty meeting.',
    priority: 40,
  },
  {
    id: 'einstein-beat-kept-desk',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.keptDesk' },
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'Gravitation is worked out on the backs of rejected applications, and the file trays fill up again regardless of what is on the paper.',
    priority: 48,
  },
  {
    id: 'einstein-beat-prague-form',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'prague' },
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'The appointment here requires a religion written on the form, so he writes one down rather than spend a morning arguing with a clerk.',
    priority: 46,
  },
  {
    id: 'einstein-beat-academy-asks-nothing',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1917 },
    ],
    text: 'Berlin is louder than he expected, and the Academy asks nothing of him at all, which takes some getting used to.',
    priority: 40,
  },
  {
    id: 'einstein-beat-family-to-zurich',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1917 },
    ],
    text: 'Mileva takes the boys back to Zürich in the summer, and the flat is suddenly large enough to work in and too large for anything else.',
    priority: 44,
  },
  {
    id: 'einstein-beat-barometer-letter',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'He writes to Hans Albert about measuring a tower with a barometer, and asks about the arithmetic homework only at the end.',
    priority: 40,
  },
  {
    id: 'einstein-beat-hilbert-blackboard',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1918 },
    ],
    speaker: 'HILBERT',
    text: 'Bring the equations to the blackboard, Einstein, and we shall establish before lunch which of us is wrong.',
    priority: 60,
  },
  {
    id: 'einstein-beat-gottingen-third-row',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The mathematician they brought here to lecture without a salary takes his conservation laws apart from the third row and hands them back in better order.',
    priority: 58,
  },
  {
    id: 'einstein-beat-expedition-interned',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1917 },
    ],
    text: 'The expedition sent to photograph an eclipse for him is arrested as spies before the sky clears, and the instruments stay behind a border.',
    priority: 42,
  },
  {
    id: 'einstein-beat-sawdust-bread',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'By winter there is sawdust in the bread, and the students left in the lecture hall are the ones the army did not want.',
    priority: 40,
  },
  {
    id: 'einstein-beat-coat-indoors',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1920 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'He works in his overcoat with a blanket across his knees, and eats whatever has been carried across the city to him that week.',
    priority: 46,
  },
  {
    id: 'einstein-beat-elsa-soup',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1920 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    speaker: 'ELSA',
    text: 'Soup, then sleep, then your equations. In that order, Albert, and I am not discussing it in the doorway.',
    priority: 50,
  },
  {
    id: 'einstein-beat-offprints-across-lines',
    characterId: 'einstein',
    conditions: [
      { type: 'projectCompleted', projectId: 'einstein-general-relativity' },
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'Requests for the field-equation paper come from four countries in a month, and two of them are at war with the one he lives in.',
    priority: 44,
  },
  {
    id: 'einstein-beat-settlement',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'The settlement is signed in Zürich, and it promises Mileva the money from a prize he has not been given.',
    priority: 42,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1919–1933
  // -------------------------------------------------------------------------
  {
    id: 'einstein-beat-photographer-gate',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.worldFamous' },
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'A photographer waits two hours at the gate to catch him carrying his own violin case, and gets the picture.',
    priority: 46,
  },
  {
    id: 'einstein-beat-mother-spring',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1923 },
    ],
    text: 'His mother dies in the flat in the spring, and for a month after it he does not take the violin out of its case.',
    priority: 44,
  },
  {
    id: 'einstein-beat-back-of-the-hall',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1923 },
    ],
    text: 'A meeting is held in the city to explain that his physics is a fraud, so he buys a ticket and sits near the back of the hall.',
    priority: 48,
  },
  {
    id: 'einstein-beat-inflation-coal',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1924 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'The money buys less at supper than it did at breakfast, and the coal merchant will take payment only in advance.',
    priority: 42,
  },
  {
    id: 'einstein-beat-ticker-tape',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'newYork' },
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'New York throws paper out of its windows at him for eleven blocks, and afterwards he asks what all that paper costs.',
    priority: 50,
  },
  {
    id: 'einstein-beat-medal-in-drawer',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.nobel' },
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The prize money goes to Zürich as promised, and the medal goes into a drawer with the reprints and a ball of string.',
    priority: 46,
  },
  {
    id: 'einstein-beat-elsa-manages',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1932 },
    ],
    speaker: 'ELSA',
    text: 'Say yes to the photographers and no to the dinners, and let me be the one who decides which is which.',
    priority: 44,
  },
  {
    id: 'einstein-beat-hans-albert-easter',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1933 },
    ],
    speaker: 'HANS ALBERT',
    text: 'You promised to come at Easter and you sent a paper about gravitation instead. I read it. I still wanted the visit.',
    priority: 42,
  },
  {
    id: 'einstein-beat-eduard-follows',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1933 },
    ],
    speaker: 'EDUARD',
    text: 'You write to me about music because you think I cannot follow the other thing. I can follow the other thing.',
    priority: 46,
  },
  {
    id: 'einstein-beat-zurich-letters-shorter',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The letters from Zürich about his younger son grow shorter and the doctors’ letters grow longer, and he answers both the same week.',
    priority: 44,
  },
  {
    id: 'einstein-beat-lake-house',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1929 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The house by the lake is finished for his fiftieth birthday, and the best thing in it is the water at the end of the garden.',
    priority: 42,
  },
  {
    id: 'einstein-beat-gown-in-the-hall',
    characterId: 'einstein',
    conditions: [
      { type: 'resourceAtLeast', resource: 'standing', value: 6 },
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'Another university sends a gown he will not wear and a doctorate he did not ask for, and Elsa hangs the gown in the hall.',
    priority: 36,
  },
  {
    id: 'einstein-beat-committees-write',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.pacifist' },
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The committees write to him every week now, and he signs about half of what they send and reads every word of the rest.',
    priority: 44,
  },
  {
    id: 'einstein-beat-treated-kindly',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.quietWar' },
      { type: 'yearAtLeast', year: 1919 },
      { type: 'yearAtMost', year: 1927 },
    ],
    text: 'The Academy is warmer to him than to the men who spoke, and he notices the difference every single time he is thanked for something.',
    priority: 44,
  },
  {
    id: 'einstein-beat-oranges-in-january',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'pasadena' },
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'In California there are oranges on the trees in January, and the observatory men want to show him the sky before he has unpacked.',
    priority: 50,
  },
  {
    id: 'einstein-beat-books-on-a-fire',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'Word comes that his books are on a fire in a square he used to cross on the way to the Academy.',
    priority: 52,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1933–1955
  // -------------------------------------------------------------------------
  {
    id: 'einstein-beat-wastebasket',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1939 },
    ],
    speaker: 'ALBERT',
    text: 'A desk, paper, a pencil — and a very large wastebasket, please, because most of it is going to be wrong.',
    priority: 52,
  },
  {
    id: 'einstein-beat-german-holds-still',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'His English comes slowly, so the difficult thinking stays in German, where the words hold still while he looks at them.',
    priority: 40,
  },
  {
    id: 'einstein-beat-affidavits',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1942 },
    ],
    text: 'The letters asking him to vouch for a family arrive faster than he can sign them, and he signs them anyway, one household at a time.',
    priority: 46,
  },
  {
    id: 'einstein-beat-elsa-winter',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'Elsa dies in the winter, and on the second day he goes back to the desk, because there is nowhere else to put the hours.',
    priority: 50,
  },
  {
    id: 'einstein-beat-maja-arrives',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'Maja comes from Italy to stay, and in the evenings the house begins to sound like a Munich kitchen again.',
    priority: 44,
  },
  {
    id: 'einstein-beat-clock-taker-apart',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'There is an English student in the mathematics building who takes clocks apart and talks about one machine that could imitate every other machine.',
    priority: 60,
  },
  {
    id: 'einstein-beat-bohr-corridor',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1942 },
    ],
    speaker: 'BOHR',
    text: 'You are not wrong, Albert, you are only asking the question at the wrong end of it — no, wait, let me begin again.',
    priority: 60,
  },
  {
    id: 'einstein-beat-logician-arrives',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'A logician arrives from Vienna by way of Siberia and Japan, says almost nothing for three weeks, and then says something exact.',
    priority: 58,
  },
  {
    id: 'einstein-beat-godel-constitution',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1950 },
    ],
    speaker: 'GÖDEL',
    text: 'There is an inconsistency in the constitution, Albert. I found it last night. I intend to raise it with the judge.',
    priority: 58,
  },
  {
    id: 'einstein-beat-machine-in-the-shed',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'Behind the Institute they are building a machine out of wire and glass tubes, and the men building it talk about it the way sailors talk about weather.',
    priority: 54,
  },
  {
    id: 'einstein-beat-new-director',
    characterId: 'einstein',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'The Institute has a new director who wears his hat like a man being photographed, and who very often is.',
    priority: 54,
  },
  {
    id: 'einstein-beat-navy-fee',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The Navy pays him a consultant’s fee for arithmetic about explosions in water, and the work is dull, which he counts as a mercy.',
    priority: 46,
  },
  {
    id: 'einstein-beat-schoolchildren-write',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'Schoolchildren write to ask whether he believes in God and whether he was bad at arithmetic, and he answers both questions truthfully.',
    priority: 36,
  },
  {
    id: 'einstein-beat-one-government',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.signedLetter' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'He puts his name to appeals for one government over all of them, and the replies call him a saint and a fool, often in the same envelope.',
    priority: 48,
  },
  {
    id: 'einstein-beat-name-not-on-it',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.refusedLetter' },
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'His name was not on the warning, and the men whose names were on it still come out to Princeton to ask him what he thinks.',
    priority: 48,
  },
  {
    id: 'einstein-beat-speaking-anyway',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.speak' },
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'They ask him to say something public about a matter he is no expert in, and he says it anyway, because silence has a price as well.',
    priority: 42,
  },
  {
    id: 'einstein-beat-other-end',
    characterId: 'einstein',
    conditions: [
      { type: 'narrativeFlag', flag: 'einstein.unify' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'The thing will not close, so he starts again from the other end of it, which is what the mornings are for.',
    priority: 44,
  },
  {
    id: 'einstein-beat-maja-newspaper',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1952 },
    ],
    speaker: 'MAJA',
    text: 'Read me the part about the weather, Albert. I have had quite enough of the other part this week.',
    priority: 44,
  },
  {
    id: 'einstein-beat-give-up-the-sailing',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1955 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'The doctors tell him to give up the pipe and the sailing, and he gives up the sailing.',
    priority: 48,
  },
  {
    id: 'einstein-beat-no-good-with-people',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'A delegation asks whether he would consent to be a president, and he thanks them and explains that he is no good with people.',
    priority: 50,
  },
  {
    id: 'einstein-beat-one-more-appeal',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'A letter comes from England asking for his name on one more appeal, and he signs it in April with a steady enough hand.',
    priority: 50,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'einstein-beat-violin-before-bed',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1886 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'He plays for an hour before bed, badly in the middle, and stops only when the phrase finally comes out whole.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'einstein-beat-walking-to-think',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'He walks in order to think, and comes back with the sentence he needed and no memory at all of the streets that produced it.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'einstein-beat-morning-post',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'The morning post brings four letters, three of which want something from him and one of which is about physics.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'einstein-beat-rain-all-week',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1879 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'Rain settles in for the week; he keeps the lamp lit at noon and does not much mind the excuse.',
    priority: 5,
    repeatable: true,
  },
  {
    id: 'einstein-beat-half-a-page',
    characterId: 'einstein',
    conditions: [
      { type: 'yearAtLeast', year: 1896 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'He sleeps badly, gets up, writes half a page, and is asleep in the chair again before the ink is dry.',
    priority: 9,
    repeatable: true,
  },
];
