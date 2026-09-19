import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of Marie Curie, 1867–1934.
 *
 * The authored scenes own the pact with Bronya, the garret winter, the meeting
 * with Pierre, the shed and the glow, the prizes, the street on the rue
 * Dauphine, the mobile units and the gram from America. These are the years in
 * between: an inspector at the schoolroom door, a sack of Bohemian residue with
 * pine needles still in it, a bank that will not melt a medal, a dial marked so
 * that failing eyes can still read it. She counts things; that is how she is
 * built, and it is what the ordinary years sound like in her hands.
 *
 * Every beat is gated by year at minimum, and the ones carrying a place, a
 * flag or a project outrank the general ones, so a detour to Göttingen or a
 * decade of thin funds sounds like itself.
 */

export const CURIE_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, Warsaw, 1877–1891
  // -------------------------------------------------------------------------
  {
    id: 'curie-beat-mother-illness',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1877 },
      { type: 'yearAtMost', year: 1879 },
    ],
    text: 'Her mother will not kiss the children goodnight any more, and nobody at the table says the name of the illness out loud.',
    priority: 40,
  },
  {
    id: 'curie-beat-glass-case',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1877 },
      { type: 'yearAtMost', year: 1883 },
    ],
    text: 'The glass case in the front room holds instruments her father is no longer permitted to teach with, and she dusts them every Saturday.',
    priority: 34,
  },
  {
    id: 'curie-beat-black-dress',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1878 },
      { type: 'yearAtMost', year: 1883 },
    ],
    text: 'The black dress is let out twice as she grows, and by the second winter there are two places missing from the row at church.',
    priority: 36,
  },
  {
    id: 'curie-beat-inspector',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1878 },
      { type: 'yearAtMost', year: 1884 },
    ],
    text: 'The inspector comes without warning, the Polish books go under the desks, and the best reader in the room is made to recite the tsars.',
    priority: 38,
  },
  {
    id: 'curie-beat-father-two-languages',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1878 },
      { type: 'yearAtMost', year: 1885 },
    ],
    speaker: 'FATHER',
    text: 'Say it to them in Russian and think it in Polish. That is all they can take, and all we get to keep.',
    priority: 40,
  },
  {
    id: 'curie-beat-boarders',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1879 },
      { type: 'yearAtMost', year: 1885 },
    ],
    text: 'The bad investment is never explained to the children, but the lodgers arrive that autumn and the girls begin sleeping three to a room.',
    priority: 34,
  },
  {
    id: 'curie-beat-country-year',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1883 },
      { type: 'yearAtMost', year: 1886 },
    ],
    text: 'After the medal comes a year with country cousins where books are forbidden her, and she dances until the sleigh horses need resting.',
    priority: 36,
  },
  {
    id: 'curie-beat-village-reading',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1885 },
      { type: 'yearAtMost', year: 1890 },
    ],
    text: 'She teaches the village children to read their own language in the evenings, which would cost her more than the lessons are worth if anyone told.',
    priority: 36,
  },
  {
    id: 'curie-beat-flying-rooms',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.flyingUniversity' },
      { type: 'yearAtLeast', year: 1884 },
      { type: 'yearAtMost', year: 1891 },
    ],
    text: 'The lecture has moved flats again this month, and they are asked to arrive singly and to leave by two different doors.',
    priority: 48,
  },
  {
    id: 'curie-beat-governess-journey',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.governessYears' },
      { type: 'yearAtLeast', year: 1886 },
      { type: 'yearAtMost', year: 1890 },
    ],
    text: 'The post is four hours by train and then an hour by sleigh, and the wage is worth more sent to Paris than kept.',
    priority: 48,
  },
  {
    id: 'curie-beat-son-of-the-house',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1887 },
      { type: 'yearAtMost', year: 1890 },
    ],
    text: 'The son of the house comes home from his studies, and his mother makes clear, without once raising her voice, what a governess is.',
    priority: 40,
  },
  {
    id: 'curie-beat-bronya-terms',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1886 },
      { type: 'yearAtMost', year: 1891 },
    ],
    speaker: 'BRONYA',
    text: 'Send what you can and not a rouble more, Maniu. I will not eat in Paris while you go short in Warsaw.',
    priority: 42,
  },
  {
    id: 'curie-beat-jozef-letter',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1888 },
      { type: 'yearAtMost', year: 1891 },
    ],
    speaker: 'JÓZEF',
    text: 'You are spending yourself on other people’s children. Go while you still believe you are capable of going.',
    priority: 42,
  },
  {
    id: 'curie-beat-boots-mended',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1885 },
      { type: 'yearAtMost', year: 1891 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'There is money this month for the fare or money for the boots, and the boots go to the cobbler one more time instead.',
    priority: 38,
  },

  // -------------------------------------------------------------------------
  // Education, Paris, 1891–1895
  // -------------------------------------------------------------------------
  {
    id: 'curie-beat-fourth-class',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1891 },
      { type: 'yearAtMost', year: 1893 },
    ],
    text: 'Four days on a wooden bench with a folding stool she carries herself, and she eats what was wrapped for her in Warsaw.',
    priority: 40,
  },
  {
    id: 'curie-beat-front-row-french',
    characterId: 'curie',
    conditions: [
      { type: 'locationIs', locationId: 'paris' },
      { type: 'yearAtLeast', year: 1891 },
      { type: 'yearAtMost', year: 1894 },
    ],
    text: 'She sits in the front row because her French is not yet good enough for any other row, and copies the board exactly.',
    priority: 42,
  },
  {
    id: 'curie-beat-bucket-of-coal',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1891 },
      { type: 'yearAtMost', year: 1895 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'Coal is bought a bucket at a time from the yard on the corner, and carried up six flights by the person who will burn it.',
    priority: 42,
  },
  {
    id: 'curie-beat-food-across-the-city',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.austerity' },
      { type: 'yearAtLeast', year: 1891 },
      { type: 'yearAtMost', year: 1895 },
    ],
    text: 'Her brother-in-law carries food across the city and stands there until she eats it, and she writes home that she is perfectly comfortable.',
    priority: 48,
  },
  {
    id: 'curie-beat-lessons-after-ten',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.tutoring' },
      { type: 'yearAtLeast', year: 1891 },
      { type: 'yearAtMost', year: 1895 },
    ],
    text: 'The lessons pay the rent and take the afternoons, so the mathematics gets done between ten at night and the lamp running dry.',
    priority: 48,
  },
  {
    id: 'curie-beat-counting-the-women',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1891 },
      { type: 'yearAtMost', year: 1894 },
    ],
    text: 'There are a couple of dozen women in a faculty of nearly two thousand, and by Christmas she can name most of them.',
    priority: 36,
  },
  {
    id: 'curie-beat-second-degree',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1894 },
      { type: 'yearAtMost', year: 1896 },
    ],
    text: 'She takes a second degree in mathematics, because the first one did not use up everything she came all this way carrying.',
    priority: 40,
  },
  {
    id: 'curie-beat-scholarship-repaid',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1893 },
      { type: 'yearAtMost', year: 1897 },
    ],
    text: 'The Polish scholarship is repaid in full the first year she draws a salary, and the committee writes back to say nobody does that.',
    priority: 40,
  },
  {
    id: 'curie-beat-tableaux',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1891 },
      { type: 'yearAtMost', year: 1895 },
    ],
    text: 'The Poles in the city put on tableaux about the country on Sundays, and she is given a part because she is tall and will stand still.',
    priority: 34,
  },
  {
    id: 'curie-beat-pierre-argues',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.metPierre' },
      { type: 'yearAtLeast', year: 1894 },
      { type: 'yearAtMost', year: 1896 },
    ],
    speaker: 'PIERRE',
    text: 'You mean to go back in the autumn. I consider that an error, and I intend to say so to you every week until you sail.',
    priority: 50,
  },
  {
    id: 'curie-beat-warsaw-summer',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1894 },
      { type: 'yearAtMost', year: 1896 },
    ],
    text: 'She goes home for the summer and the university there still has no place for her, which settles a question she had left open.',
    priority: 40,
  },
  {
    id: 'curie-beat-steel-commission',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1894 },
      { type: 'yearAtMost', year: 1896 },
    ],
    text: 'A commission asks her to measure the magnetic properties of steels, and she has the method, the patience, and nowhere at all to work.',
    priority: 44,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1895–1902
  // -------------------------------------------------------------------------
  {
    id: 'curie-beat-two-bicycles',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1897 },
    ],
    text: 'The wedding money buys two bicycles, and they ride into the country for a fortnight with nothing arranged further ahead than supper.',
    priority: 42,
  },
  {
    id: 'curie-beat-dark-blue',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1897 },
    ],
    text: 'She has no wedding dress made, only a dark blue one she can wear in a laboratory afterwards, which is exactly what she does.',
    priority: 40,
  },
  {
    id: 'curie-beat-two-columns',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1900 },
    ],
    text: 'Irène is born in September, and that month’s notebook keeps feeding times in one column and instrument readings in the other.',
    priority: 46,
  },
  {
    id: 'curie-beat-grandfather-afternoons',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'Pierre’s father moves in and takes the child to the gardens every afternoon, which is the only reason the measurements go on at all.',
    priority: 42,
  },
  {
    id: 'curie-beat-doctor-curie-understanding',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1904 },
    ],
    speaker: 'DR CURIE',
    text: 'Go to your shed. The child and I have an understanding, and neither of us requires you before six o’clock.',
    priority: 44,
  },
  {
    id: 'curie-beat-bohemian-sacks',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'Sacks of brown residue arrive from a mine in Bohemia with pine needles still caught in them, and there are twenty more sacks behind.',
    priority: 46,
  },
  {
    id: 'curie-beat-iron-rod',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1904 },
    ],
    text: 'She stirs a boiling mass in the yard with an iron rod nearly her own height, because the fumes will not stay inside the shed.',
    priority: 44,
  },
  {
    id: 'curie-beat-suburb-teaching',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1904 },
    ],
    text: 'She takes the teaching at the girls’ school in the western suburbs, three hours out and back, because a salary is a salary.',
    priority: 42,
  },
  {
    id: 'curie-beat-geneva-offer',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1902 },
    ],
    text: 'A post is offered elsewhere with a proper laboratory attached, and they refuse it in one evening, because the ore is here.',
    priority: 42,
  },
  {
    id: 'curie-beat-congress-of-problems',
    characterId: 'curie',
    conditions: [
      { type: 'locationIs', locationId: 'paris' },
      { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'paris' },
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1901 },
    ],
    text: 'The mathematicians fill the city for a congress, and one of them reads out the problems of the coming century as though setting homework.',
    priority: 58,
  },
  {
    id: 'curie-beat-weigh-it-tomorrow',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1904 },
    ],
    speaker: 'PIERRE',
    text: 'Weigh it again tomorrow. If the number holds tomorrow it is still ours, and you will have slept in between.',
    priority: 44,
  },
  {
    id: 'curie-beat-cracked-fingers',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1905 },
    ],
    text: 'The skin on her fingertips cracks and is slow to close, and Pierre carries a burn on his forearm that he shows people at dinner.',
    priority: 44,
  },
  {
    id: 'curie-beat-still-in-the-barium',
    characterId: 'curie',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'curie-polonium-radium' },
      { type: 'yearAtLeast', year: 1899 },
      { type: 'yearAtMost', year: 1904 },
    ],
    text: 'Tons of residue have gone through her hands this year and the new thing in it still will not come away from the barium.',
    priority: 46,
  },
  {
    id: 'curie-beat-hundredth-of-a-division',
    characterId: 'curie',
    conditions: [
      { type: 'projectCompleted', projectId: 'curie-radiation-measurement' },
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'The electrometer answers to a hundredth of a division now, and she trusts it further than she trusts anybody’s published table.',
    priority: 46,
  },
  {
    id: 'curie-beat-father-dies',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1904 },
    ],
    text: 'Her father dies in Warsaw in the spring, and she arrives in time for the arrangements and for nothing else at all.',
    priority: 48,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1902–1913
  // -------------------------------------------------------------------------
  {
    id: 'curie-beat-nothing-to-photograph',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.firstPrize' },
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1908 },
    ],
    text: 'Reporters come out to the shed wanting a photograph of the discovery, and there is nothing to photograph but a deal table.',
    priority: 48,
  },
  {
    id: 'curie-beat-eve-born',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1907 },
    ],
    text: 'Ève is born in December, and the household adds a second set of hours to a timetable that had no room left in it.',
    priority: 44,
  },
  {
    id: 'curie-beat-no-patent',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1907 },
    ],
    text: 'They settle in one evening not to patent the process, and write the method out plainly for anybody who troubles to ask for it.',
    priority: 46,
  },
  {
    id: 'curie-beat-tradesmen',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1907 },
    ],
    speaker: 'PIERRE',
    text: 'If we take a patent we are tradesmen. Write to the industry and tell them everything; they will work it out in a year regardless.',
    priority: 44,
  },
  {
    id: 'curie-beat-grey-notebook',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1910 },
    ],
    text: 'She writes to him in a grey notebook in the evenings, and tells him about the work first, because the work is what he would have asked about.',
    priority: 50,
  },
  {
    id: 'curie-beat-borrowed-notes',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.tookTheChair' },
      { type: 'yearAtLeast', year: 1907 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'Students lend her their notes from his last course, and she returns them corrected, apologising for the corrections and making them anyway.',
    priority: 50,
  },
  {
    id: 'curie-beat-kept-the-laboratory',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.refusedTheChair' },
      { type: 'yearAtLeast', year: 1907 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'The chair goes to somebody else and she keeps the laboratory, which is the half of it she would have chosen if anyone had asked.',
    priority: 50,
  },
  {
    id: 'curie-beat-debierne-overnight',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1907 },
      { type: 'yearAtMost', year: 1912 },
    ],
    speaker: 'DEBIERNE',
    text: 'The electrolysis will run all night whether you watch it or not. Go home, Madame, and I will have a number for you at seven.',
    priority: 48,
  },
  {
    id: 'curie-beat-metal-for-a-week',
    characterId: 'curie',
    conditions: [
      { type: 'projectCompleted', projectId: 'curie-isolate-radium-metal' },
      { type: 'yearAtLeast', year: 1910 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'The metal exists, is weighed, and spoils within the week, which she counts as sufficient, because the weighing was the part in doubt.',
    priority: 48,
  },
  {
    id: 'curie-beat-lost-by-two',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'The Academy votes on her in January and she loses by two, and the men waiting outside the hall ask her how she feels about it.',
    priority: 50,
  },
  {
    id: 'curie-beat-a-month-of-newspapers',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'The newspapers spend a month on her private life, a crowd stands in the street below, and the girls are sent to friends for the duration.',
    priority: 50,
  },
  {
    id: 'curie-beat-another-name-by-the-sea',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1915 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'She spends the better part of a year under another name in a quiet house by the sea, and answers no letters whatever.',
    priority: 50,
  },
  {
    id: 'curie-beat-masons-on-his-street',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1915 },
    ],
    text: 'Masons are raising her institute on a street that has been given his name, and she inspects the brickwork the way she inspects an apparatus.',
    priority: 48,
  },
  {
    id: 'curie-beat-only-woman-in-brussels',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1914 },
    ],
    text: 'She is the only woman at a conference of twenty-odd physicists, and the argument runs past midnight in three languages and settles nothing.',
    priority: 46,
  },
  {
    id: 'curie-beat-appeal-signed-twice',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1909 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'The year’s grant comes to less than the ore bill, so she drafts the appeal herself and signs it with both their names.',
    priority: 46,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1914–1918
  // -------------------------------------------------------------------------
  {
    id: 'curie-beat-finished-and-empty',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1917 },
    ],
    text: 'The institute is finished in July and empty by September, because every man who was to work in it has gone to a depot.',
    priority: 50,
  },
  {
    id: 'curie-beat-bank-declines',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'She carries her two gold medals to the bank to be melted down for the war, and the bank declines, politely and finally.',
    priority: 50,
  },
  {
    id: 'curie-beat-learns-to-drive',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'She learns to drive, then to change a tyre, then to clean a carburettor, in that order and inside a single month.',
    priority: 48,
  },
  {
    id: 'curie-beat-irene-seventeen',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.ireneTrained' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1919 },
    ],
    speaker: 'IRÈNE',
    text: 'I can run the apparatus without you standing behind me. You have three hospitals waiting, and I am seventeen, not seven.',
    priority: 52,
  },
  {
    id: 'curie-beat-surgeon-and-plate',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'A surgeon will not look at the plate, so she stands beside the table until he looks, and then he cuts where the plate says.',
    priority: 48,
  },
  {
    id: 'curie-beat-engine-cannot-stop',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The generator runs off the car engine, so the engine cannot be stopped, so she eats standing up beside a shaking vehicle.',
    priority: 46,
  },
  {
    id: 'curie-beat-glass-needles',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'Thin glass needles of the emanation are sealed at the institute and sent out to the hospitals, and the sealing is done by hand, hers among them.',
    priority: 46,
  },
  {
    id: 'curie-beat-see-the-bullet',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1919 },
    ],
    speaker: 'MARIE',
    text: 'You will not be asked to understand the physics. You will be asked to see the fragment, and in six weeks you will see it.',
    priority: 48,
  },
  {
    id: 'curie-beat-hands-shake-by-evening',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1920 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'Her ears ring and her hands are unsteady by evening, and she puts it down to the roads and the cold, which is partly true.',
    priority: 50,
  },
  {
    id: 'curie-beat-there-is-a-poland',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'Word comes in November that there is a Poland again, and she reads it twice and then returns to the list of hospitals.',
    priority: 52,
  },
  {
    id: 'curie-beat-safe-in-bordeaux',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.radiumSouth' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'The gram spent a night in a strongroom with a clerk who had no notion what he was guarding, and she has not stopped thinking about it.',
    priority: 54,
  },
  {
    id: 'curie-beat-two-floors-above-it',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.stayedWithTheLab' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'She kept the gram in the city and slept two floors above it, and in the end the army came for her advice instead.',
    priority: 54,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1918–1934
  // -------------------------------------------------------------------------
  {
    id: 'curie-beat-meloney-bargain',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1923 },
    ],
    speaker: 'MELONEY',
    text: 'One gram, Madame, bought by American women — and in exchange you will let me put your face in a magazine.',
    priority: 50,
  },
  {
    id: 'curie-beat-arm-in-a-sling',
    characterId: 'curie',
    conditions: [
      { type: 'locationIs', locationId: 'newYork' },
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'This country wants its hand shaken by ten thousand people, and by the second week her right arm is carried in a sling.',
    priority: 56,
  },
  {
    id: 'curie-beat-marked-dials',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'She puts her own coloured marks on the dials so that she can read them without admitting to anyone what she can no longer read.',
    priority: 48,
  },
  {
    id: 'curie-beat-irene-marries',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1931 },
    ],
    text: 'Irène marries the young man who came to the institute as an assistant, and the wedding breakfast ends in time for the afternoon’s work.',
    priority: 48,
  },
  {
    id: 'curie-beat-money-in-it-next-year',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1932 },
    ],
    speaker: 'MARIE',
    text: 'I do not want a laboratory named after me. I want a laboratory, and I want there to be money in it next year.',
    priority: 48,
  },
  {
    id: 'curie-beat-warsaw-institute',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'A radium institute opens in Warsaw with her sister running it, and she goes back to the city that would not have her as a student.',
    priority: 54,
  },
  {
    id: 'curie-beat-key-she-carries',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.americanGram' },
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'The gram from across the ocean lives in a lead safe whose key she carries herself, and it is in use six days a week.',
    priority: 52,
  },
  {
    id: 'curie-beat-eve-and-the-doctors',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1934 },
    ],
    speaker: 'ÈVE',
    text: 'You have three doctors and you believe none of them. Choose one, and I will see that you keep the appointment.',
    priority: 50,
  },
  {
    id: 'curie-beat-cost-per-resolution',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.committeeYears' },
      { type: 'yearAtLeast', year: 1923 },
      { type: 'yearAtMost', year: 1932 },
    ],
    text: 'The commission meets for a week and produces a resolution, and she works out the cost per resolution and does not say it aloud.',
    priority: 50,
  },
  {
    id: 'curie-beat-knows-what-each-measures',
    characterId: 'curie',
    conditions: [
      { type: 'narrativeFlag', flag: 'curie.instituteRunning' },
      { type: 'yearAtLeast', year: 1924 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'Thirty people work in her building now and she knows what every one of them is measuring, which costs her most of her Sundays.',
    priority: 50,
  },
  {
    id: 'curie-beat-tiredness-at-eleven',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1934 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'The tiredness arrives at eleven in the morning now instead of six at night, and she works through it, because the alternative is a chair.',
    priority: 52,
  },
  {
    id: 'curie-beat-house-in-the-mountains',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'In the spring the fever will not come down, and they take her up to a house in the mountains where the air is supposed to help.',
    priority: 54,
  },
  {
    id: 'curie-beat-say-it-to-the-young',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'A delegation asks her to say something to the young, and she says what she has always said, and they print it as though it were new.',
    priority: 44,
  },

  // -------------------------------------------------------------------------
  // Other lives, other cities
  // -------------------------------------------------------------------------
  {
    id: 'curie-beat-berlin-walk-to-the-station',
    characterId: 'curie',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The physicist from the commission lives here, and walks her to the station afterwards still arguing a point she had considered closed.',
    priority: 58,
  },
  {
    id: 'curie-beat-gottingen-lecturer',
    characterId: 'curie',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'noether', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'A mathematician here lectures in a room where the students talk back to her, and the faculty are still arguing about what to call her post.',
    priority: 58,
  },
  {
    id: 'curie-beat-cambridge-notebooks',
    characterId: 'curie',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'otherCharacterAt', characterId: 'ramanujan', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1919 },
    ],
    text: 'There is a young man at Trinity who is ill and will not eat the college food, and whose notebooks are passed round like contraband.',
    priority: 58,
  },
  {
    id: 'curie-beat-copenhagen-unfinished-sentence',
    characterId: 'curie',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'otherCharacterAt', characterId: 'bohr', locationId: 'copenhagen' },
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'The institute here is built around a man who cannot finish a sentence without amending it, and the young ones adore him for exactly that.',
    priority: 58,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'curie-beat-tea-standing-up',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1891 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'Tea at four o’clock, drunk standing at the bench, because sitting down at four is how an entire afternoon gets away from a person.',
    priority: 9,
    repeatable: true,
  },
  {
    id: 'curie-beat-underlined-numbers',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1896 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'The day’s figures go into the notebook in her small upright hand, and she underlines the ones she does not yet believe.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'curie-beat-letter-in-polish',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1891 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'A letter from home is read twice and answered on Sunday, in Polish, which takes her longer than she has ever admitted to anyone.',
    priority: 8,
    repeatable: true,
  },
  {
    id: 'curie-beat-correcting-for-the-room',
    characterId: 'curie',
    conditions: [
      { type: 'yearAtLeast', year: 1877 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'The weather turns and the instruments turn with it, so the first hour of the day goes on correcting for a change in the room.',
    priority: 5,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Strain, when the years of work have taken more than they have given back
  // -------------------------------------------------------------------------
  {
    id: 'curie-beat-strain-column',
    characterId: 'curie',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 4 }],
    text: 'She enters the same figure twice in one afternoon and finds it only because the column refuses to add.',
    priority: 40,
    repeatable: true,
  },
  {
    id: 'curie-beat-strain-fingertips',
    characterId: 'curie',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 2 }],
    text: 'Her fingertips split and are slow to close, and she has begun answering the question about her hands before anybody has finished asking it.',
    priority: 50,
    repeatable: true,
  },
  {
    id: 'curie-beat-strain-electrometer',
    characterId: 'curie',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 0 }],
    text: 'The electrometer is warmed and steady, and she sits in front of it until the light goes out of the shed, and the notebook stays empty.',
    priority: 60,
    repeatable: true,
  },
];
