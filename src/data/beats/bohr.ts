import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of Niels Bohr, 1885–1962.
 *
 * The authored scenes own the loud ones: the fourth tube, Rutherford’s
 * laboratory, the trilogy, the Institute’s open door, the walk that ends early,
 * the boat across the Sound, the coat of arms, the open letter. These are the
 * years in between — a gas bill, a proof stage returned for the sixth time, a
 * Dutch student at the door, a brother who finishes his sentences and then one
 * winter does not. Beats carrying a place or a flag outrank the general ones,
 * so a life spent in Copenhagen sounds different from one that went north.
 */

export const BOHR_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1895–1903
  // -------------------------------------------------------------------------
  {
    id: 'bohr-beat-latin-margins',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1896 },
      { type: 'yearAtMost', year: 1901 },
    ],
    text: 'The Latin master hands back an essay with the margins full, and he reads the margins far more carefully than he wrote the essay.',
    priority: 30,
  },
  {
    id: 'bohr-beat-harald-proof',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1902 },
    ],
    speaker: 'HARALD',
    text: 'I finished it while you were still deciding whether the first line was honest, and you will be right and I will be quicker.',
    priority: 34,
  },
  {
    id: 'bohr-beat-fathers-bench',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1901 },
    ],
    speaker: 'HIS FATHER',
    text: 'Stand where you can see the whole apparatus, not where the answer is. The answer will come to whoever is watching the wrong end.',
    priority: 42,
  },
  {
    id: 'bohr-beat-goalkeeper',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1899 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'He keeps goal because a goalkeeper is given long minutes to think, and because Harald is better than him everywhere further up the field.',
    priority: 32,
  },
  {
    id: 'bohr-beat-dinner-circle',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1896 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'His father’s friends come after dinner — a physicist, a philosopher, a man of languages — and the boys are allowed to stay if they stay quiet.',
    priority: 36,
  },
  {
    id: 'bohr-beat-mother-reads',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1896 },
      { type: 'yearAtMost', year: 1902 },
    ],
    speaker: 'HIS MOTHER',
    text: 'Read it to me slowly, Niels, and if I understand it by the end then it is finished and you may go out.',
    priority: 33,
  },
  {
    id: 'bohr-beat-handwriting',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1896 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'His handwriting is already a private code, and already somebody else in the house has to make the fair copy of anything important.',
    priority: 28,
  },
  {
    id: 'bohr-beat-summer-house',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'Out of the city the light lasts until eleven, and he walks the same path on the dunes until an argument has taken its final shape.',
    priority: 26,
  },
  {
    id: 'bohr-beat-method-hands',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.method', value: 'hands' },
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'His fingernails are black at the edges all year, and the schoolmasters have decided to interpret it as a deficiency of character.',
    priority: 50,
  },
  {
    id: 'bohr-beat-method-talk',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.method', value: 'talk' },
      { type: 'yearAtLeast', year: 1897 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'The two of them walk the same three streets until midnight, and whatever survives the third circuit is allowed to be written down.',
    priority: 50,
  },
  {
    id: 'bohr-beat-own-hands-payoff',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.ownHands' },
      { type: 'yearAtLeast', year: 1900 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'He no longer asks anybody to make a thing for him, because the making is where he finds out what he actually wanted.',
    priority: 52,
  },
  {
    id: 'bohr-beat-slow-answer',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1898 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'Asked a question in class, he takes so long that the master answers it himself, and is corrected four minutes later.',
    priority: 29,
  },
  {
    id: 'bohr-beat-winter-harbour',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1895 },
      { type: 'yearAtMost', year: 1903 },
    ],
    text: 'The wind comes straight off the harbour for a fortnight, and every window in the house is stuffed with newspaper by Thursday.',
    priority: 6,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Education, 1903–1911
  // -------------------------------------------------------------------------
  {
    id: 'bohr-beat-one-professor',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'yearAtLeast', year: 1903 },
      { type: 'yearAtMost', year: 1907 },
    ],
    speaker: 'CHRISTIANSEN',
    text: 'There is one chair of physics in this country and I am sitting in it, so you will have to be taught by the journals.',
    priority: 46,
  },
  {
    id: 'bohr-beat-student-circle',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1905 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'A dozen students meet in the same café every fortnight to disagree about everything, and he is the one who cannot let a definition pass.',
    priority: 34,
  },
  {
    id: 'bohr-beat-the-danish-book',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1905 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'He presses the same short Danish novel on everyone he meets, because its hero cannot think about thinking without losing his place.',
    priority: 32,
  },
  {
    id: 'bohr-beat-harald-ahead',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1904 },
      { type: 'yearAtMost', year: 1909 },
    ],
    speaker: 'HARALD',
    text: 'You are not behind me, Niels. You are digging in a place I walked over, and one of us is going to find something.',
    priority: 34,
  },
  {
    id: 'bohr-beat-reading-room',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1903 },
      { type: 'yearAtMost', year: 1908 },
    ],
    text: 'The university reading room is cold and half empty, and the German journals arrive three weeks late, which he has stopped thinking is unfair.',
    priority: 30,
  },
  {
    id: 'bohr-beat-fair-copy',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1906 },
      { type: 'yearAtMost', year: 1909 },
    ],
    text: 'The fair copy goes in on the last possible evening, written out in a hand that is not his because his own cannot be read.',
    priority: 32,
  },
  {
    id: 'bohr-beat-metals-drawer',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1909 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'The electrons in a metal will not behave, and the drawer fills with pages proving only that the honest answer is not yet available.',
    priority: 34,
  },
  {
    id: 'bohr-beat-two-languages',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1908 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'He learns German because he must and English because he intends to, and writes badly in both with tremendous determination.',
    priority: 30,
  },
  {
    id: 'bohr-beat-courtship',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1910 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'He explains the whole of his thesis to a young woman on a long walk, and she asks the one question he has been avoiding.',
    priority: 38,
  },
  {
    id: 'bohr-beat-margrethe-early',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1910 },
      { type: 'yearAtMost', year: 1911 },
    ],
    speaker: 'MARGRETHE',
    text: 'Say it to me before you say it to them. If I can hold the whole of it in my head, so can a professor.',
    priority: 40,
  },
  {
    id: 'bohr-beat-thin-year',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1905 },
      { type: 'yearAtMost', year: 1910 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'He takes on coaching hours he does not want, and works out that a term of them buys eight months of not asking anyone.',
    priority: 36,
  },
  {
    id: 'bohr-beat-fellowship-form',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1910 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'The foundation’s form wants his intentions in fifty words, and he produces four hundred and then cuts them down with real pain.',
    priority: 34,
  },
  {
    id: 'bohr-beat-fathers-chair',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'His father dies in the winter, and the argument at the table goes on without the voice that used to start it.',
    priority: 48,
  },
  {
    id: 'bohr-beat-reads-standing',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1903 },
      { type: 'yearAtMost', year: 1911 },
    ],
    text: 'He reads standing up, moving the lamp when the page gets dark, and is surprised each time to find the room has gone quiet.',
    priority: 8,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1911–1913
  // -------------------------------------------------------------------------
  {
    id: 'bohr-beat-dickens-dictionary',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'He learns English out of a fat novel with a dictionary beside it, and arrives speaking a courteous, slightly antique version of the language.',
    priority: 40,
  },
  {
    id: 'bohr-beat-cambridge-page',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'He opens the great man’s own book at the page with the error in it, which is, he realises afterwards, not how one is introduced.',
    priority: 54,
  },
  {
    id: 'bohr-beat-manchester-smoke',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'The smoke here settles on the windowsills overnight, and by March he has stopped noticing it and started noticing the counters instead.',
    priority: 50,
  },
  {
    id: 'bohr-beat-rutherford-line',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1913 },
    ],
    speaker: 'RUTHERFORD',
    text: 'Write it down, Bohr, and write it short. If it takes you nine pages to say, you do not yet believe it.',
    priority: 52,
  },
  {
    id: 'bohr-beat-counters-in-the-dark',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'Men sit in a dark room counting flashes on a screen for an hour at a time, and he understands that somebody must, and that it will not be him.',
    priority: 48,
  },
  {
    id: 'bohr-beat-honeymoon-dictation',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'They marry and spend a good part of the wedding journey with her pen moving and his hands in his pockets, which neither of them regrets.',
    priority: 42,
  },
  {
    id: 'bohr-beat-letter-from-harald',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1913 },
    ],
    speaker: 'HARALD',
    text: 'Your last letter had one idea in it and six apologies for the idea, so I have thrown away the apologies.',
    priority: 38,
  },
  {
    id: 'bohr-beat-lodgings-north',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1913 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    text: 'The lodgings smell of boiled cabbage and the landlady wants the lamp out by eleven, so he does his thinking on the walk home.',
    priority: 36,
  },
  {
    id: 'bohr-beat-memorandum-drawer',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1912 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'A memorandum of twenty pages goes into the drawer unsent, because the part he is sure of is still only the last two.',
    priority: 36,
  },
  {
    id: 'bohr-beat-stayed-home',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'yearAtLeast', year: 1911 },
      { type: 'yearAtMost', year: 1913 },
    ],
    text: 'He stays in the city he was born in and reads the English work a month late, which is a month he will not get back.',
    priority: 46,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1913–1921
  // -------------------------------------------------------------------------
  {
    id: 'bohr-beat-proof-stages',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'The proofs come back for the sixth time with the sentences rebuilt again, and the printer sends a note about the cost of it.',
    priority: 34,
  },
  {
    id: 'bohr-beat-sceptical-seminar',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1916 },
    ],
    text: 'An older man at the back says the rule is arbitrary, and he agrees at length, and declines to stop using it.',
    priority: 34,
  },
  {
    id: 'bohr-beat-atom-payoff',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.atom' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'Letters arrive from spectroscopists who have measured lines for twenty years and want to know whether he has just explained their life’s work.',
    priority: 50,
  },
  {
    id: 'bohr-beat-spectra-catalogue',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'Somebody sends him a catalogue of lines measured in another country, and he spends four evenings deciding whether it is a gift or a trap.',
    priority: 30,
  },
  {
    id: 'bohr-beat-war-post',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'The post from three countries stops being reliable, and physics becomes a correspondence between men who are not permitted to mention where they are.',
    priority: 42,
  },
  {
    id: 'bohr-beat-neutral-country',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1918 },
    ],
    text: 'Coal is short and coffee is a rumour, but the lamps stay on here, and he is uneasy about how convenient that is.',
    priority: 46,
  },
  {
    id: 'bohr-beat-chair-created',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'A chair is made for him because there was not one, and he discovers that a title comes with a stationery allowance and a committee.',
    priority: 44,
  },
  {
    id: 'bohr-beat-dutch-student',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1920 },
    ],
    text: 'A young Dutchman crosses a continent at war, knocks at the door without an appointment, and asks whether he might be of any use.',
    priority: 42,
  },
  {
    id: 'bohr-beat-correspondence-drafts',
    characterId: 'bohr',
    conditions: [
      { type: 'projectNotCompleted', projectId: 'bohr-correspondence-principle' },
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'The bridge between the old physics and the new is drafted eleven times, and each draft is truer and less sayable than the last.',
    priority: 44,
  },
  {
    id: 'bohr-beat-institute-site',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'projectNotCompleted', projectId: 'bohr-founding-institute' },
      { type: 'yearAtLeast', year: 1917 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'He walks the empty ground at the edge of the park and paces out where a lecture room would have to go.',
    priority: 48,
  },
  {
    id: 'bohr-beat-brewery-money',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1918 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'The brewers give more than the ministry does, and he writes the letter of thanks himself, six times, before it is fit to send.',
    priority: 40,
  },
  {
    id: 'bohr-beat-son-born',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1916 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'Another son arrives and the house acquires a rule: no physics on the stairs, which is obeyed for nearly a week.',
    priority: 34,
  },
  {
    id: 'bohr-beat-margrethe-breakthrough',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1915 },
      { type: 'yearAtMost', year: 1921 },
    ],
    speaker: 'MARGRETHE',
    text: 'You have said “on the other hand” four times in one paragraph, Niels, and the paragraph now has more hands than a person.',
    priority: 38,
  },
  {
    id: 'bohr-beat-harald-visits',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1921 },
    ],
    speaker: 'HARALD',
    text: 'Your electrons jump and you will not say how, which in a mathematician would be called cheating and in you is called a principle.',
    priority: 36,
  },
  {
    id: 'bohr-beat-gottingen-visit',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'gottingen' },
      { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen' },
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'In this town the mathematicians have a list of problems on the wall and expect physics to arrive with its papers in order.',
    priority: 56,
  },
  {
    id: 'bohr-beat-berlin-tram',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'berlin' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin' },
      { type: 'yearAtLeast', year: 1914 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'A man here argues with him the length of two tram routes and then walks him back to the first stop to begin again.',
    priority: 56,
  },
  {
    id: 'bohr-beat-bicycle',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1913 },
      { type: 'yearAtMost', year: 1921 },
    ],
    text: 'He bicycles to work with his hat in one hand, arguing with somebody who is not there and steering with the other.',
    priority: 8,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1933–1943
  // -------------------------------------------------------------------------
  {
    id: 'bohr-beat-lists-from-germany',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'The letters from the south stop discussing physics and begin listing qualifications, ages and the number of children, and he answers every one.',
    priority: 46,
  },
  {
    id: 'bohr-beat-spare-room',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'There is a man asleep in the study again, and the household has learned not to ask how long he is staying.',
    priority: 42,
  },
  {
    id: 'bohr-beat-brewery-house',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'The country has given him a house too large for anybody, so he fills it with visiting foreigners and calls that the rent.',
    priority: 44,
  },
  {
    id: 'bohr-beat-after-the-loss',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.loss' },
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'He goes back out on the water the next summer, because staying ashore would be a way of pretending it happened to another family.',
    priority: 56,
  },
  {
    id: 'bohr-beat-quiet-house',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.loss' },
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1943 },
      { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
    ],
    speaker: 'MARGRETHE',
    text: 'Work if you must, but come down at six. The others are still here, and they are watching how you do this.',
    priority: 58,
  },
  {
    id: 'bohr-beat-table-tennis',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'The table at the end of the corridor decides more disputes than the seminar does, and he is unreasonably difficult to beat at it.',
    priority: 30,
  },
  {
    id: 'bohr-beat-compound-nucleus',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1936 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'He builds a shallow wooden basin with steel balls in it, and shows a room full of theorists what a nucleus is like.',
    priority: 36,
  },
  {
    id: 'bohr-beat-news-in-january',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1939 },
    ],
    text: 'Somebody tells him a thing in a corridor in January and he strikes his own forehead, and then apologises to the corridor.',
    priority: 50,
  },
  {
    id: 'bohr-beat-crossing-blackboard',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1940 },
    ],
    text: 'There is a blackboard in the ship’s smoking room and he keeps it for the whole crossing, which nobody dares to object to.',
    priority: 46,
  },
  {
    id: 'bohr-beat-princeton-einstein',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'The old opponent lives twenty minutes away here, and they are so polite to each other now that the young men find it unnerving.',
    priority: 58,
  },
  {
    id: 'bohr-beat-princeton-vonneumann',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'A Hungarian here does the arithmetic aloud while the rest are still choosing units, and enjoys it far too openly.',
    priority: 58,
  },
  {
    id: 'bohr-beat-princeton-godel',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'godel', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'A thin logician walks the same path every afternoon and says almost nothing, and what he says will not leave the room afterwards.',
    priority: 58,
  },
  {
    id: 'bohr-beat-cambridge-young-man',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'otherCharacterAt', characterId: 'turing', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1936 },
    ],
    text: 'A young fellow of one of the colleges is writing about machines that follow rules, and half the mathematicians here think it is a joke.',
    priority: 58,
  },
  {
    id: 'bohr-beat-blackout',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'narrativeFlag', flag: 'bohr.underOccupation' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'The city learns a new grammar of curfews and paper, and the seminar moves to the afternoon so that everyone can get home.',
    priority: 52,
  },
  {
    id: 'bohr-beat-gold-in-acid',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'narrativeFlag', flag: 'bohr.occupied' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'A colleague dissolves two gold medals in acid and leaves the jar on a shelf among the others, where nobody thinks to look.',
    priority: 54,
  },
  {
    id: 'bohr-beat-students-still-come',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.occupied' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'The students still come, and he keeps the work going partly because it is work and partly because an empty building would be an answer.',
    priority: 48,
  },
  {
    id: 'bohr-beat-mothers-name',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.occupied' },
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'His mother’s family is on no list that he has seen, and he understands that the only word carrying weight in that sentence is “yet”.',
    priority: 50,
  },
  {
    id: 'bohr-beat-rain-off-the-sound',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1943 },
    ],
    text: 'Rain comes off the water for three days, and the corridor smells of wet wool from breakfast until the last of them goes home.',
    priority: 6,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1943–1962
  // -------------------------------------------------------------------------
  {
    id: 'bohr-beat-stockholm-rooms',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'stockholm' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'He spends his first free week in a neutral city arguing with officials about other people’s boats rather than about physics.',
    priority: 52,
  },
  {
    id: 'bohr-beat-son-as-assistant',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1946 },
    ],
    speaker: 'AAGE',
    text: 'You said three sentences to the minister and only the second one had a verb, so I have written out what you meant.',
    priority: 46,
  },
  {
    id: 'bohr-beat-memoranda-filed',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'He writes a memorandum for men who read it, thank him, and file it, and then he writes it again and it is filed again.',
    priority: 44,
  },
  {
    id: 'bohr-beat-losalamos-oppenheimer',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The director here quotes poetry at supper and runs a town of three thousand people who are not allowed to say where they live.',
    priority: 58,
  },
  {
    id: 'bohr-beat-losalamos-vonneumann',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'losAlamos' },
      { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'losAlamos' },
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The mathematician flies in for a fortnight, turns a shape into numbers, and is on a train again before anybody has thanked him.',
    priority: 58,
  },
  {
    id: 'bohr-beat-washington-corridor',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'washingtonDC' },
      { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'washingtonDC' },
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1948 },
    ],
    text: 'They wait on the same bench outside the same committee room, two physicists being kept until the politics in the corridor has settled.',
    priority: 56,
  },
  {
    id: 'bohr-beat-august-papers',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1946 },
    ],
    text: 'The newspapers in August print the thing he has been quietly explaining for two years, and print it as a triumph.',
    priority: 48,
  },
  {
    id: 'bohr-beat-coming-home',
    characterId: 'bohr',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1948 },
    ],
    text: 'The building is standing and the roof held, and the first thing he does in his own room is open every window.',
    priority: 46,
  },
  {
    id: 'bohr-beat-advised-payoff',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.advised' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'Some of what he saw he may not describe, so he argues for openness with one hand tied and finds the irony unamusing.',
    priority: 52,
  },
  {
    id: 'bohr-beat-european-laboratory',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1957 },
    ],
    text: 'Twelve countries agree to build one laboratory between them, and he spends a year in trains making certain they meant it.',
    priority: 40,
  },
  {
    id: 'bohr-beat-harald-dies',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'Harald dies in the winter, and there is no longer anybody alive who will say the middle of his sentence back to him.',
    priority: 54,
  },
  {
    id: 'bohr-beat-youngest',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'The youngest boy is ill for a long time and then is not there, and the house keeps his chair where it was.',
    priority: 52,
  },
  {
    id: 'bohr-beat-papa-in-the-corridor',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1960 },
    ],
    text: 'The new ones call him Papa within a fortnight, and he pretends not to hear it and does nothing whatever to stop it.',
    priority: 34,
  },
  {
    id: 'bohr-beat-grandchildren',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1960 },
    ],
    text: 'There are grandchildren on the dunes now, and he explains the tide to them at a length none of them requested.',
    priority: 32,
  },
  {
    id: 'bohr-beat-open-world-payoff',
    characterId: 'bohr',
    conditions: [
      { type: 'narrativeFlag', flag: 'bohr.openWorld' },
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1960 },
    ],
    text: 'Young men write to him from countries that do not write to each other, and he answers all of them at the same length.',
    priority: 54,
  },
  {
    id: 'bohr-beat-margrethe-late',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1962 },
    ],
    speaker: 'MARGRETHE',
    text: 'Fifty years of taking this down, Niels, and you have never once finished a sentence the way you began it.',
    priority: 46,
  },
  {
    id: 'bohr-beat-thin-late-year',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1950 },
      { type: 'yearAtMost', year: 1962 },
      { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
    ],
    text: 'He takes the stairs slowly now and makes a point of doing it alone, arriving late and pretending he stopped to think.',
    priority: 48,
  },
  {
    id: 'bohr-beat-amended-again',
    characterId: 'bohr',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1962 },
    ],
    text: 'He begins a sentence, amends it twice, and the room waits without impatience because the third form is usually worth it.',
    priority: 8,
    repeatable: true,
  },
];
