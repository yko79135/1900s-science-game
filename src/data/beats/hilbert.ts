import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of David Hilbert, 1862–1943.
 *
 * The authored scenes own the bridges, the apple tree, Gordan's sentence, the
 * Paris address, the bathhouse, the programme and the empty table. These are the
 * years between: a leaving certificate, a bicycle, a printer's proof, an
 * inflation salary, a lecture list getting shorter every term. He is the same
 * man throughout — the one who assumes the answer exists and sets about
 * arranging the room so that somebody finds it. Beats carrying a place or a flag
 * outrank the general ones, so Königsberg, Paris and Göttingen each sound like
 * themselves.
 */

export const HILBERT_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1872–1880 — Königsberg
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-beat-river-ice',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1872 },
      { type: 'yearAtMost', year: 1878 },
    ],
    text: 'The Pregel freezes in December and the barges sit in it until March, and the whole city walks on water it usually pays to cross.',
    priority: 30,
  },
  {
    id: 'hilbert-beat-fathers-court',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1872 },
      { type: 'yearAtMost', year: 1879 },
    ],
    text: 'He sits at the back of his father’s court one afternoon and learns that a rule is worth exactly as much as the man applying it says it is.',
    priority: 34,
  },
  {
    id: 'hilbert-beat-mother-comet',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1872 },
      { type: 'yearAtMost', year: 1880 },
    ],
    speaker: 'HIS MOTHER',
    text: 'Coat over the nightshirt and out into the yard, David — it is due at ten past two, and it has never once been late.',
    priority: 36,
  },
  {
    id: 'hilbert-beat-declensions',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1872 },
      { type: 'yearAtMost', year: 1879 },
    ],
    text: 'The school runs on memory and he has no gift for it, so he learns the Latin twice as slowly and forgets it twice as fast.',
    priority: 30,
  },
  {
    id: 'hilbert-beat-called-slow',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1873 },
      { type: 'yearAtMost', year: 1879 },
      { not: { type: 'resourceAtLeast', resource: 'standing', value: 2 } },
    ],
    text: 'Two masters describe him as slow within his hearing, and he considers the word, and privately decides it is the wrong one.',
    priority: 38,
  },
  {
    id: 'hilbert-beat-one-lesson',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1873 },
      { type: 'yearAtMost', year: 1880 },
    ],
    text: 'Mathematics is the one lesson he never prepares for and never trails in, because nothing in it has to be accepted before it is understood.',
    priority: 35,
  },
  {
    id: 'hilbert-beat-other-gymnasium',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1879 },
      { type: 'yearAtMost', year: 1880 },
    ],
    text: 'For the last year they move him to the other gymnasium, where the mathematics master is better and the Greek master is no worse.',
    priority: 40,
  },
  {
    id: 'hilbert-beat-amber-docks',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1872 },
      { type: 'yearAtMost', year: 1880 },
    ],
    text: 'On the docks they sort amber by weight and clarity into nine grades, and he watches the sorting for an hour without once being bored.',
    priority: 28,
  },
  {
    id: 'hilbert-beat-father-speaks',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1876 },
      { type: 'yearAtMost', year: 1880 },
    ],
    speaker: 'HIS FATHER',
    text: 'A profession is a set of rules a man may live inside, David, and I have yet to hear you name one you would consent to.',
    priority: 42,
  },
  {
    id: 'hilbert-beat-arithmetic-walking',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1874 },
      { type: 'yearAtMost', year: 1880 },
    ],
    text: 'He does his arithmetic aloud on the walk home, out of step with his own feet, until a neighbour asks his mother whether the boy is quite well.',
    priority: 32,
  },
  {
    id: 'hilbert-beat-stove-out',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1872 },
      { type: 'yearAtMost', year: 1880 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 } },
    ],
    text: 'The classroom stove goes out before noon in February and forty boys copy Greek in their coats with their breath showing.',
    priority: 33,
  },
  {
    id: 'hilbert-beat-leaving-certificate',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1879 },
      { type: 'yearAtMost', year: 1881 },
    ],
    text: 'The leaving certificate is respectable in everything and exceptional in one subject, and he folds it once and does not look at it again.',
    priority: 44,
  },

  // -------------------------------------------------------------------------
  // Education, 1880–1885 — Königsberg
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-beat-university-down-the-street',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1880 },
      { type: 'yearAtMost', year: 1885 },
      { type: 'locationIs', locationId: 'konigsberg' },
    ],
    text: 'The university is eleven minutes from the front door, so he becomes a student without once having to pack a trunk.',
    priority: 48,
  },
  {
    id: 'hilbert-beat-hurwitz-arrives',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1884 },
      { type: 'yearAtMost', year: 1886 },
      { type: 'locationIs', locationId: 'konigsberg' },
    ],
    text: 'The new professor is three years older than he is and knows the whole of mathematics well enough to say where its edges are.',
    priority: 50,
  },
  {
    id: 'hilbert-beat-minkowski-prize',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1883 },
      { type: 'yearAtMost', year: 1887 },
    ],
    text: 'Minkowski is two years younger and has already won a prize in Paris, and the town discusses it, and he simply wants to know how it was done.',
    priority: 46,
  },
  {
    id: 'hilbert-beat-subject-per-term',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1884 },
      { type: 'yearAtMost', year: 1893 },
    ],
    text: 'They take one subject a term and dismantle it between them, until none of the three can remember which of them first said the useful thing.',
    priority: 44,
  },
  {
    id: 'hilbert-beat-heidelberg-semester',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1880 },
      { type: 'yearAtMost', year: 1884 },
    ],
    text: 'One semester away in the south shows him that the lectures are better elsewhere and the conversation is not, and he comes home.',
    priority: 40,
  },
  {
    id: 'hilbert-beat-lindemann-seminar',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1882 },
      { type: 'yearAtMost', year: 1885 },
      { type: 'locationIs', locationId: 'konigsberg' },
    ],
    speaker: 'LINDEMANN',
    text: 'Invariant theory, then, Hilbert — it is unfashionable, it is difficult, and there is a great deal in it still lying about unclaimed.',
    priority: 52,
  },
  {
    id: 'hilbert-beat-modest-household',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1880 },
      { type: 'yearAtMost', year: 1885 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'A judge’s salary stretches to lodging a son at home and not much further, and books are bought one at a time and argued about first.',
    priority: 41,
  },
  {
    id: 'hilbert-beat-dancing',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1881 },
      { type: 'yearAtMost', year: 1888 },
    ],
    text: 'He dances badly and often, stays to the end of every student ball, and will argue about geometry with anyone still upright at two.',
    priority: 38,
  },
  {
    id: 'hilbert-beat-reading-room-lamp',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1881 },
      { type: 'yearAtMost', year: 1885 },
    ],
    text: 'The reading room keeps one lamp burning after hours for whoever is left, and for three winters the one left is usually him.',
    priority: 36,
  },
  {
    id: 'hilbert-beat-oral-examination',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1884 },
      { type: 'yearAtMost', year: 1886 },
    ],
    text: 'The oral runs an hour and he answers the philosophy question badly and the mathematics question in a way the examiners discuss afterwards.',
    priority: 45,
  },
  {
    id: 'hilbert-beat-frozen-walk',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1880 },
      { type: 'yearAtMost', year: 1888 },
      { type: 'locationIs', locationId: 'konigsberg' },
    ],
    text: 'They walk out past the last houses with the wind off the Baltic behind them, and nobody proposes turning back before the argument is finished.',
    priority: 47,
  },
  {
    id: 'hilbert-beat-hurwitz-says',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1884 },
      { type: 'yearAtMost', year: 1892 },
    ],
    speaker: 'HURWITZ',
    text: 'You are not quicker than the rest of us, Hilbert; you are simply unwilling to stop, and that turns out to be the rarer thing.',
    priority: 49,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1885–1899
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-beat-study-journey',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1885 },
      { type: 'yearAtMost', year: 1888 },
    ],
    text: 'He spends a year travelling to sit in other men’s lecture rooms, and comes back with nine notebooks and a list of people worth writing to.',
    priority: 44,
  },
  {
    id: 'hilbert-beat-klein-notices',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1886 },
      { type: 'yearAtMost', year: 1894 },
    ],
    text: 'A letter comes from Göttingen asking a precise question about his last paper, which is how that particular professor says he is watching.',
    priority: 46,
  },
  {
    id: 'hilbert-beat-few-students',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1886 },
      { type: 'yearAtMost', year: 1892 },
      { type: 'locationIs', locationId: 'konigsberg' },
    ],
    text: 'His first course announced as a lecturer draws eleven students, and he prepares each hour as though the room were not eleven but a hundred.',
    priority: 48,
  },
  {
    id: 'hilbert-beat-marriage',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1892 },
      { type: 'yearAtMost', year: 1894 },
    ],
    text: 'He marries a woman from the town who has no patience with ceremony and rather less with mathematicians who forget to eat.',
    priority: 50,
  },
  {
    id: 'hilbert-beat-son-born',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1893 },
      { type: 'yearAtMost', year: 1896 },
    ],
    text: 'A son is born in the summer and he holds him with the extreme care of a man handling an object whose properties are not yet established.',
    priority: 47,
  },
  {
    id: 'hilbert-beat-chair-at-home',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1893 },
      { type: 'yearAtMost', year: 1895 },
      { type: 'locationIs', locationId: 'konigsberg' },
    ],
    text: 'His old teacher goes south and the chair falls to him at thirty-one, in the same building where he was an indifferent schoolboy.',
    priority: 49,
  },
  {
    id: 'hilbert-beat-existence-is-enough',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1888 },
      { type: 'yearAtMost', year: 1894 },
      { type: 'projectCompleted', projectId: 'hilbert-finiteness-theorem' },
    ],
    speaker: 'THE EDITOR',
    text: 'The referee asks for the basis itself, Herr Doktor, and not merely for your assurance that such a basis is bound to exist.',
    priority: 52,
  },
  {
    id: 'hilbert-beat-number-report',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1894 },
      { type: 'yearAtMost', year: 1898 },
    ],
    text: 'The society asks for a survey of number theory and he delivers, three years late, a book that reorganises the subject instead of reporting it.',
    priority: 45,
  },
  {
    id: 'hilbert-beat-wilhelm-weber-garden',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1905 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'The Göttingen house has a garden with a wall along one side, and he measures the wall before the furniture arrives, for reasons of his own.',
    priority: 54,
  },
  {
    id: 'hilbert-beat-bicycle',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1920 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'He learns to ride a bicycle at thirty-three, badly, and rides it to the institute in all weathers for the next thirty years.',
    priority: 46,
  },
  {
    id: 'hilbert-beat-dividing-the-work',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1905 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'The senior professor handles the ministry and the money, and leaves him the mathematics, and both of them regard this as the better bargain.',
    priority: 50,
  },
  {
    id: 'hilbert-beat-slow-lecturing',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1890 },
      { type: 'yearAtMost', year: 1910 },
    ],
    text: 'He lectures slowly, repeats himself twice on purpose, and will begin an hour again from the start if one man at the back is lost.',
    priority: 40,
  },
  {
    id: 'hilbert-beat-salary-better',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1902 },
      { type: 'resourceAtLeast', resource: 'funds', value: 3 },
    ],
    text: 'The Göttingen salary runs to a housekeeper and a long table, and he spends the difference on having people at the table.',
    priority: 44,
  },
  {
    id: 'hilbert-beat-kathe-copies',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1893 },
      { type: 'yearAtMost', year: 1910 },
    ],
    text: 'Käthe copies out the manuscripts in a clear round hand and tells him, accurately, which pages a reader will give up on.',
    priority: 43,
  },
  {
    id: 'hilbert-beat-kathe-speaks',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1915 },
    ],
    speaker: 'KÄTHE',
    text: 'Your students are in the garden again, David, and one of them has been there since ten, and you promised me a quiet Sunday.',
    priority: 47,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1899–1910 — Göttingen and Paris
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-beat-geometry-proofs',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1899 },
      { type: 'yearAtMost', year: 1902 },
      { type: 'projectCompleted', projectId: 'hilbert-foundations-of-geometry' },
    ],
    text: 'The printer queries an axiom as a probable misprint, since it states something no reader could possibly need to be told.',
    priority: 52,
  },
  {
    id: 'hilbert-beat-french-rehearsed',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1899 },
      { type: 'yearAtMost', year: 1901 },
    ],
    text: 'He rehearses the French aloud for a fortnight and is told, kindly, that his accent will be the least memorable thing about the hour.',
    priority: 50,
  },
  {
    id: 'hilbert-beat-curie-paris',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1902 },
      { type: 'locationIs', locationId: 'paris' },
      { type: 'otherCharacterAt', characterId: 'curie', locationId: 'paris' },
    ],
    speaker: 'CURIE',
    text: 'You set your colleagues twenty-three problems, Monsieur; in my shed there is only one, and it weighs several tonnes.',
    priority: 64,
  },
  {
    id: 'hilbert-beat-paris-heat',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1901 },
      { type: 'locationIs', locationId: 'paris' },
    ],
    text: 'Paris in August is airless, the hall is half the size promised, and the men who matter are all in the first four rows.',
    priority: 58,
  },
  {
    id: 'hilbert-beat-claimed-solutions',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1901 },
      { type: 'yearAtMost', year: 1910 },
      { type: 'projectCompleted', projectId: 'hilbert-problems' },
    ],
    text: 'Solutions arrive by every post, most of them to the third problem, most of them wrong, and he reads the first page of each one.',
    priority: 51,
  },
  {
    id: 'hilbert-beat-students-from-abroad',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1901 },
      { type: 'yearAtMost', year: 1910 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'Americans, Hungarians and Japanese arrive at the institute with letters of introduction, and the town’s landladies learn to ask about mathematics.',
    priority: 53,
  },
  {
    id: 'hilbert-beat-doorbell-sunday',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1912 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'The doorbell goes on a Sunday afternoon and it is a student with a proof, and he takes the proof and leaves the door open.',
    priority: 49,
  },
  {
    id: 'hilbert-beat-minkowski-comes',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1906 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'A chair is made for Minkowski and he arrives in the autumn, and the five o’clock walk resumes after seventeen years as though it had paused for lunch.',
    priority: 56,
  },
  {
    id: 'hilbert-beat-minkowski-speaks',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1908 },
    ],
    speaker: 'MINKOWSKI',
    text: 'You have made a subject out of asking questions, David, and now every young man in Europe wants to be asked one.',
    priority: 54,
  },
  {
    id: 'hilbert-beat-signing-theses',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1910 },
    ],
    text: 'He signs four doctorates in one year and remembers, of each of them, the exact afternoon on which the candidate stopped being frightened.',
    priority: 45,
  },
  {
    id: 'hilbert-beat-reading-room-insisted',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1910 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'He argues the faculty into a reading room where the journals stand open on the shelves, on the grounds that a locked cupboard has never proved anything.',
    priority: 52,
  },
  {
    id: 'hilbert-beat-panama-hat',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1925 },
    ],
    text: 'He buys a soft straw hat in a colour no professor in the town has worn before, and wears it in the lecture room until somebody mentions it.',
    priority: 38,
  },
  {
    id: 'hilbert-beat-prize-from-hungary',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1912 },
      { type: 'resourceAtLeast', resource: 'standing', value: 3 },
    ],
    text: 'A prize comes from Budapest with a medal and a sum of money, and he puts the medal in a drawer and the money into travel for two students.',
    priority: 46,
  },
  {
    id: 'hilbert-beat-failed-candidate',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1912 },
    ],
    text: 'He fails a candidate who has memorised everything and understood none of it, and is short with the faculty about what an examination is for.',
    priority: 42,
  },
  {
    id: 'hilbert-beat-list-reprinted',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1902 },
      { type: 'yearAtMost', year: 1910 },
      { type: 'projectCompleted', projectId: 'hilbert-problems' },
    ],
    text: 'The list is reprinted in four languages and he finds, in the English, that a translator has quietly improved one of his sentences.',
    priority: 47,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1915–1933 — Göttingen
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-beat-lecture-list-uniform',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1918 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'Half the seminar is in uniform and the other half is too young for it, and the lecture list gets shorter every term without discussion.',
    priority: 55,
  },
  {
    id: 'hilbert-beat-declines-to-sign',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'A declaration comes round for the professors to sign and he reads it twice and does not sign it, and says so plainly when asked why.',
    priority: 58,
  },
  {
    id: 'hilbert-beat-obituary-uproar',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'He publishes a proper notice for a dead French geometer in the middle of the war, and a crowd of students comes to the house about it.',
    priority: 57,
  },
  {
    id: 'hilbert-beat-noether-upstairs',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1933 },
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'noether', locationId: 'gottingen' },
    ],
    speaker: 'NOETHER',
    text: 'It is simpler than you have it, Herr Geheimrat — throw away the coordinates and the theorem stops needing to be clever.',
    priority: 66,
  },
  {
    id: 'hilbert-beat-inflation-salary',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1921 },
      { type: 'yearAtMost', year: 1925 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'The salary is paid twice a week now because by Friday it buys less than it did on Tuesday, and the institute heats one room.',
    priority: 56,
  },
  {
    id: 'hilbert-beat-assistants',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1932 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'His assistants write up the lectures into books that go out under his name, and he insists their names go on the title page beside it.',
    priority: 53,
  },
  {
    id: 'hilbert-beat-courant-speaks',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1922 },
      { type: 'yearAtMost', year: 1932 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    speaker: 'COURANT',
    text: 'The Americans will pay for the building, Herr Geheimrat, but only if you write the letter, and only if you keep it to one page.',
    priority: 57,
  },
  {
    id: 'hilbert-beat-thin-year-recovery',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1925 },
      { type: 'yearAtMost', year: 1929 },
      { type: 'narrativeFlag', flag: 'hilbert.illness' },
    ],
    text: 'The new treatment arrives from America in a jar and tastes exactly as bad as promised, and by spring he is on the bicycle again.',
    priority: 60,
  },
  {
    id: 'hilbert-beat-annalen-dispute',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'He removes a colleague from the journal’s editorial board and will not discuss it afterwards, and half the profession takes a side within the month.',
    priority: 54,
  },
  {
    id: 'hilbert-beat-bologna',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1928 },
      { type: 'yearAtMost', year: 1930 },
    ],
    text: 'He walks his delegation into the Italian congress after fourteen years of exclusion, on the principle that mathematics has no nationality worth mentioning.',
    priority: 58,
  },
  {
    id: 'hilbert-beat-honorary-citizen',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1933 },
    ],
    text: 'The city of his boyhood makes him an honorary citizen with a scroll, and he is more pleased by it than by anything from Berlin.',
    priority: 55,
  },
  {
    id: 'hilbert-beat-vonneumann-gottingen',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1926 },
      { type: 'yearAtMost', year: 1930 },
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'gottingen' },
    ],
    speaker: 'VON NEUMANN',
    text: 'Give me the axioms for the quantum theory by Thursday, Herr Geheimrat, and I shall tell you by Friday which of them you do not need.',
    priority: 65,
  },
  {
    id: 'hilbert-beat-oppenheimer-gottingen',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1927 },
      { type: 'yearAtMost', year: 1929 },
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'gottingen' },
    ],
    text: 'The young American in the physics seminar interrupts everybody, quotes poetry in the corridor, and is right often enough to be forgiven both.',
    priority: 63,
  },
  {
    id: 'hilbert-beat-godel-konigsberg',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1931 },
      { type: 'locationIs', locationId: 'konigsberg' },
      { type: 'otherCharacterAt', characterId: 'godel', locationId: 'konigsberg' },
    ],
    text: 'A very quiet young man from Vienna says something at the end of a session that four people hear properly and one of them understands.',
    priority: 68,
  },
  {
    id: 'hilbert-beat-family-matter',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1930 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    text: 'There is a sorrow in the family that is not spoken of outside the house, and inside the house he does not speak of it either.',
    priority: 52,
  },
  {
    id: 'hilbert-beat-programme-desk',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1920 },
      { type: 'yearAtMost', year: 1930 },
      { type: 'projectNotCompleted', projectId: 'hilbert-formalist-program' },
    ],
    text: 'The consistency proof sits on the desk in three drafts, each one shorter than the last, and none of them yet short enough to be finished.',
    priority: 51,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1933–1943 — Göttingen
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-beat-notices-posted',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1935 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'The notices go up in the entrance hall in April, and by the end of the month the corridor is quieter by the length of a list.',
    priority: 58,
  },
  {
    id: 'hilbert-beat-crossed-off',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1936 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'The lecture list for the winter is printed with the names crossed through rather than reset, which somebody evidently thought was a kindness.',
    priority: 57,
  },
  {
    id: 'hilbert-beat-second-floor',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1938 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'The whole of the second floor is in England and America now, and he can recite the addresses in order, which he does at dinner.',
    priority: 56,
  },
  {
    id: 'hilbert-beat-same-route',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1940 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'He walks the old route at five and nobody falls into step beside him, and he walks it at five the following day regardless.',
    priority: 54,
  },
  {
    id: 'hilbert-beat-new-building-empty',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1940 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'The institute they built with American money is ten years old and beautifully lit, and there is nobody in the reading room at four o’clock.',
    priority: 55,
  },
  {
    id: 'hilbert-beat-letters-from-america',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'Letters come from America asking, in careful phrasing, whether he is well, and he answers each one about mathematics and nothing else.',
    priority: 50,
  },
  {
    id: 'hilbert-beat-garden-late',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1942 },
    ],
    text: 'His eyes are poor for print now but good enough for the garden, and he spends the long afternoons there deciding what still needs proving.',
    priority: 49,
  },
  {
    id: 'hilbert-beat-last-lectures',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1937 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    text: 'He lectures to nine, then to five, then to a room with a visitor in it, and prepares for each of them in exactly the same way.',
    priority: 53,
  },
  {
    id: 'hilbert-beat-blackout',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'The windows are covered again after dark, as they were a quarter of a century ago, and the same town is quiet in the same way.',
    priority: 52,
  },
  {
    id: 'hilbert-beat-kathe-late',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1943 },
    ],
    speaker: 'KÄTHE',
    text: 'Sit down, David, and eat something, and tell me about the problem instead of the people — the problem has not disappointed you.',
    priority: 54,
  },
  {
    id: 'hilbert-beat-student-visits',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1942 },
      { type: 'locationIs', locationId: 'gottingen' },
    ],
    speaker: 'A FORMER STUDENT',
    text: 'I came through the town on other business, Herr Geheimrat, and I find I have two hours, and I should like to spend them on the seventh problem.',
    priority: 51,
  },
  {
    id: 'hilbert-beat-papers-in-order',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'He puts the papers in order himself, by subject and not by date, because a man looking for something will be looking for a question.',
    priority: 56,
  },

  // -------------------------------------------------------------------------
  // Recurring texture
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-beat-weather-baltic',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1872 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'Rain comes in off the plain for the week and he goes out in it anyway, on the grounds that the argument will not walk itself.',
    priority: 5,
    repeatable: true,
  },
  {
    id: 'hilbert-beat-five-oclock-habit',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1884 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'At five he stops whatever is in front of him and goes out, because the useful thought has never once arrived at the desk.',
    priority: 9,
    repeatable: true,
  },
  {
    id: 'hilbert-beat-chalk-again',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1886 },
      { type: 'yearAtMost', year: 1935 },
    ],
    text: 'He begins the hour again from the first line, slowly, because one man in the third row has the wrong thing written down.',
    priority: 7,
    repeatable: true,
  },
  {
    id: 'hilbert-beat-assume-it-exists',
    characterId: 'hilbert',
    conditions: [
      { type: 'yearAtLeast', year: 1885 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'He begins by assuming the answer is there to be found, which is not optimism in him so much as a rule of procedure.',
    priority: 6,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Strain, when the years of work have taken more than they have given back
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-beat-strain-rained-out',
    characterId: 'hilbert',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 4 }],
    text: 'The same line of algebra has stood on the garden blackboard for a week, and the rain has taken half of it and he has not been out to look.',
    priority: 40,
    repeatable: true,
  },
  {
    id: 'hilbert-beat-strain-bicycle',
    characterId: 'hilbert',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 2 }],
    text: 'The bicycle stays against the wall a fortnight and his supper is carried out to the study, because he will not come in to the table for it.',
    priority: 50,
    repeatable: true,
  },
  {
    id: 'hilbert-beat-strain-chalk',
    characterId: 'hilbert',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 0 }],
    text: 'He stands among the fruit trees with the chalk in his hand and the branches dripping, and goes back indoors without having written anything.',
    priority: 60,
    repeatable: true,
  },
];
