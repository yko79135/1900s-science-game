import type { StoryBeat } from '../../types/story';

/**
 * The quiet years of Rosalind Franklin, 1920–1958.
 *
 * The authored scenes own the loud ones: the school laboratory, the warden’s
 * post, the argument with Mering, the hundred-hour exposure, the news from
 * Cambridge, the boxes on the van, the top floor in Bloomsbury. These are the
 * years in between — a cold room in Paris, a briquette that will not behave, a
 * cylinder of hydrogen wheeled down a corridor, a grant application typed twice
 * because the first carbon smudged. She is exact, and will not be hurried, and
 * the beats are gated the way she would gate them: by place, by evidence, by
 * what the year has actually got in it.
 */

export const FRANKLIN_BEATS: StoryBeat[] = [
  // -------------------------------------------------------------------------
  // Formation, 1930–1938
  // -------------------------------------------------------------------------
  {
    id: 'franklin-beat-arithmetic-for-pleasure',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1934 },
    ],
    text: 'She does arithmetic for pleasure in the back of an exercise book, and is annoyed when an answer comes out round and easy.',
    priority: 30,
  },
  {
    id: 'franklin-beat-fathers-evening-class',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'london' },
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'Her father teaches working men in the evenings and comes home describing the one in the third row who had the better argument.',
    priority: 40,
  },
  {
    id: 'franklin-beat-father-line',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1938 },
    ],
    speaker: 'HER FATHER',
    text: 'You argue like somebody who intends to be paid for it, Ros, and I have not decided yet whether that pleases me.',
    priority: 42,
  },
  {
    id: 'franklin-beat-mother-line',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1937 },
    ],
    speaker: 'HER MOTHER',
    text: 'You may be right and still be unbearable about it. The two things are not the same accomplishment, my darling.',
    priority: 38,
  },
  {
    id: 'franklin-beat-crystals-on-the-sill',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1937 },
    ],
    text: 'Copper sulphate grows on a saucer on the windowsill for a fortnight, and she measures the angles with a school protractor and is not satisfied.',
    priority: 34,
  },
  {
    id: 'franklin-beat-hockey-field',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'She plays hockey with a seriousness the other girls find excessive, and comes off the field wanting to discuss where the mistake was.',
    priority: 30,
  },
  {
    id: 'franklin-beat-french-prize',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'She wins the French prize two years running and spends the book token on something with diagrams in it.',
    priority: 32,
  },
  {
    id: 'franklin-beat-aunt-who-marched',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1932 },
      { type: 'yearAtMost', year: 1938 },
    ],
    speaker: 'HER AUNT',
    text: 'They will tell you it is not the moment, Rosalind. It was not the moment for us either, and we went anyway.',
    priority: 36,
  },
  {
    id: 'franklin-beat-newspapers-from-germany',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1933 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'The foreign pages are read aloud at breakfast now, and the names in them are beginning to belong to people the family knows.',
    priority: 42,
  },
  {
    id: 'franklin-beat-house-guest',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'london' },
      { type: 'yearAtLeast', year: 1937 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'A child arrives from Vienna with one case and a label, and is given the small room, and is not asked any questions at supper.',
    priority: 48,
  },
  {
    id: 'franklin-beat-physics-mistress',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1934 },
      { type: 'yearAtMost', year: 1938 },
    ],
    speaker: 'THE PHYSICS MISTRESS',
    text: 'Stay and do it again if you want to. Nobody in this room has ever been harmed by a second measurement.',
    priority: 38,
  },
  {
    id: 'franklin-beat-comfortable-house',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1938 },
      { type: 'resourceAtLeast', resource: 'funds', value: 3 },
    ],
    text: 'Nothing in the house is short, and she understands early that this is a fact about the house and not about her.',
    priority: 36,
  },
  {
    id: 'franklin-beat-declared-early-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.declaredEarly' },
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'Having said what she intends to do, she stops discussing it, which the family mistakes for a change of heart.',
    priority: 50,
  },
  {
    id: 'franklin-beat-chosen-duty-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.chosenDuty' },
      { type: 'yearAtLeast', year: 1935 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'She gives her Saturdays to the committee work and keeps a chemistry book in her bag for the bus home.',
    priority: 50,
  },
  {
    id: 'franklin-beat-brother-teasing',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1931 },
      { type: 'yearAtMost', year: 1938 },
    ],
    speaker: 'HER BROTHER',
    text: 'Nobody has won an argument with you since you were nine, Ros, and the rest of us have simply learned to leave the room.',
    priority: 34,
  },
  {
    id: 'franklin-beat-london-rain',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1930 },
      { type: 'yearAtMost', year: 1938 },
    ],
    text: 'The fog comes down yellow for three days and the lamps are lit at noon, and everyone in the house coughs politely.',
    priority: 6,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Education, 1938–1945
  // -------------------------------------------------------------------------
  {
    id: 'franklin-beat-three-in-sixty',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'She is one of three women in a lecture of sixty, and has worked out which seat gives the clearest view of the blackboard.',
    priority: 46,
  },
  {
    id: 'franklin-beat-title-of-a-degree',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'She sits the same papers as the men and is awarded the title of a degree, which is a document about the university rather than about her.',
    priority: 48,
  },
  {
    id: 'franklin-beat-sandbags',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1941 },
    ],
    text: 'Undergraduates fill sandbags in the court all one afternoon, and the practical class is set back a week and nobody says why.',
    priority: 42,
  },
  {
    id: 'franklin-beat-blackout-bicycle',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1939 },
      { type: 'yearAtMost', year: 1944 },
    ],
    text: 'She cycles back in the blackout with a shaded lamp, counting the turnings, and arrives with her hands too cold to write.',
    priority: 36,
  },
  {
    id: 'franklin-beat-french-refugee',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'cambridgeUK' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'A French physicist who got out ahead of the occupation lodges in the town, and the two of them speak only French on Thursdays.',
    priority: 46,
  },
  {
    id: 'franklin-beat-rations',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1945 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'The ration book is worked out for the month on the back of a laboratory sheet, and comes out exactly, which pleases her disproportionately.',
    priority: 40,
  },
  {
    id: 'franklin-beat-briquette',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1942 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'A coal that ought to behave like the last one does not, and she takes the difference seriously when everybody else takes it as a nuisance.',
    priority: 44,
  },
  {
    id: 'franklin-beat-gas-masks-and-porosity',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1942 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The holes in a lump of carbon turn out to matter to a man in a mask on a ship, which she had not expected of holes.',
    priority: 42,
  },
  {
    id: 'franklin-beat-bench-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.bench' },
      { type: 'yearAtLeast', year: 1942 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The bench is hers for as long as the war wants the work done, and she has never in her life had so much uninterrupted apparatus.',
    priority: 52,
  },
  {
    id: 'franklin-beat-warden-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.warden' },
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'She comes off duty at six with brick dust in her hair and is at the bench by nine, and considers the arrangement perfectly workable.',
    priority: 52,
  },
  {
    id: 'franklin-beat-father-war-work',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1941 },
      { type: 'yearAtMost', year: 1944 },
    ],
    speaker: 'HER FATHER',
    text: 'It is war work and it is coal, Ros. You need not pretend to me that those are the same sentence.',
    priority: 44,
  },
  {
    id: 'franklin-beat-first-paper',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1943 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'Her first paper goes out with her name on it alone, and she reads the proofs four times looking for a number she has not earned.',
    priority: 46,
  },
  {
    id: 'franklin-beat-thesis-typed',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1944 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'The thesis is typed twice because the first carbon smudged on the tables, and the tables are the part she will not have smudged.',
    priority: 44,
  },
  {
    id: 'franklin-beat-read-computable-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.readComputable' },
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1948 },
    ],
    text: 'She keeps thinking about a procedure written so plainly that a stranger could run it without understanding a word of why.',
    priority: 50,
  },
  {
    id: 'franklin-beat-brothers-letters',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1940 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'Letters come from her brothers with the place names cut out of them, and she answers with the weather and the chemistry.',
    priority: 40,
  },
  {
    id: 'franklin-beat-cold-rooms',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1938 },
      { type: 'yearAtMost', year: 1945 },
    ],
    text: 'There is no coal for the grate in a building devoted to coal, and she works in her overcoat and finds it faintly funny.',
    priority: 8,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1945–1950
  // -------------------------------------------------------------------------
  {
    id: 'franklin-beat-grey-london',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'london' },
      { type: 'yearAtLeast', year: 1945 },
      { type: 'yearAtMost', year: 1947 },
    ],
    text: 'The war ends and the rationing does not, and she looks at the years ahead of her here and finds them the colour of the buildings.',
    priority: 46,
  },
  {
    id: 'franklin-beat-arguing-in-french',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'paris' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1950 },
    ],
    text: 'By the second winter she is arguing in French at full speed, and has stopped translating the insults back into English afterwards.',
    priority: 50,
  },
  {
    id: 'franklin-beat-long-lunch',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'paris' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1950 },
    ],
    text: 'The whole laboratory eats at one long table for two hours, and the science done over it is not written down anywhere.',
    priority: 48,
  },
  {
    id: 'franklin-beat-cold-room-left-bank',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'paris' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1950 },
      { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
    ],
    text: 'Her room has a stove that must be fed and a window that will not shut, and she would not exchange it for anything in London.',
    priority: 52,
  },
  {
    id: 'franklin-beat-mering-line',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'paris' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1950 },
    ],
    speaker: 'MERING',
    text: 'You want the pattern to confess, and it will not. Ask it something smaller, and ask it eleven times.',
    priority: 54,
  },
  {
    id: 'franklin-beat-method-first-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.methodFirst' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1951 },
    ],
    text: 'She spends a whole month on the camera and nothing on the substance, and knows exactly what she is buying with the month.',
    priority: 50,
  },
  {
    id: 'franklin-beat-results-first-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.resultsFirst' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1951 },
    ],
    text: 'She takes the result the instrument will give her today, and writes in the margin exactly how much she does not trust it.',
    priority: 50,
  },
  {
    id: 'franklin-beat-darkroom-hours',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'She develops her own plates because the first three minutes decide everything, and she does not care to be told about them afterwards.',
    priority: 42,
  },
  {
    id: 'franklin-beat-politics-in-the-canteen',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'paris' },
      { type: 'yearAtLeast', year: 1947 },
      { type: 'yearAtMost', year: 1950 },
    ],
    text: 'Half the laboratory was in the Resistance and none of them mention it, and the arguments at lunch are about wine and the government.',
    priority: 46,
  },
  {
    id: 'franklin-beat-first-conference-paper',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1951 },
    ],
    text: 'She gives twenty minutes in French to a room of carbon chemists, and answers the hostile question by agreeing with the half of it that was right.',
    priority: 44,
  },
  {
    id: 'franklin-beat-family-wants-her-back',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1951 },
    ],
    speaker: 'HER SISTER',
    text: 'Mother says four years is a visit that has forgotten itself, and I have said I will pass the message on, so there it is.',
    priority: 44,
  },
  {
    id: 'franklin-beat-instrument-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.instrumentMastery' },
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'She can now tell from the hum whether the tube is behaving, and has stopped being able to explain how she knows.',
    priority: 54,
  },
  {
    id: 'franklin-beat-letter-from-london',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1949 },
      { type: 'yearAtMost', year: 1951 },
    ],
    text: 'A letter from London offers three years, a basement and a substance nobody there has yet photographed properly.',
    priority: 48,
  },
  {
    id: 'franklin-beat-manchester-machine',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'manchesterUK' },
      { type: 'otherCharacterAt', characterId: 'turing', locationId: 'manchesterUK' },
      { type: 'yearAtLeast', year: 1948 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'There is a machine in this city that fills a room and does arithmetic all night, and the man who feeds it talks to her about patterns.',
    priority: 58,
  },
  {
    id: 'franklin-beat-princeton-old-man',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1955 },
    ],
    text: 'An old man walks past the window at the same hour each day, and the whole institute has agreed to pretend not to watch him.',
    priority: 58,
  },
  {
    id: 'franklin-beat-princeton-logician',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'princeton' },
      { type: 'otherCharacterAt', characterId: 'godel', locationId: 'princeton' },
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'A logician here asks her what a photograph can prove, listens to the whole answer, and then says something she thinks about for a week.',
    priority: 58,
  },
  {
    id: 'franklin-beat-fixer-smell',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1946 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'The fixer gets into her hands and stays there, and she has given up apologising for it at other people’s dinner tables.',
    priority: 7,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1951–1953
  // -------------------------------------------------------------------------
  {
    id: 'franklin-beat-hydrogen-cylinders',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'london' },
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'Cylinders of hydrogen are wheeled down the corridor past men who would rather she wheeled them somewhere else.',
    priority: 50,
  },
  {
    id: 'franklin-beat-salt-solutions',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'She keeps the air around the fibre at a humidity she chooses, with salt solutions in open dishes and a note of the temperature every hour.',
    priority: 46,
  },
  {
    id: 'franklin-beat-the-tilting-camera',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'The camera is rebuilt twice in the workshop to her drawings, and the second one holds the specimen exactly where she put it.',
    priority: 48,
  },
  {
    id: 'franklin-beat-the-student',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    speaker: 'ROSALIND',
    text: 'Draw it again. The last one had a kink in it near the rod, and I do not photograph kinks and call them structure.',
    priority: 46,
  },
  {
    id: 'franklin-beat-lunch-alone',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'london' },
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'There is a room upstairs she is not invited into at lunchtime, so she eats with the crystallographers and finds the conversation better.',
    priority: 50,
  },
  {
    id: 'franklin-beat-wilkins-corridor',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    speaker: 'WILKINS',
    text: 'I had understood I was to continue with the fibres. Somebody has told one of us something that the other was not told.',
    priority: 52,
  },
  {
    id: 'franklin-beat-stand-ground-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.standGround' },
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'She asks for the division of the work in writing, twice, and the answer that comes back is warm and says nothing.',
    priority: 56,
  },
  {
    id: 'franklin-beat-own-room-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.ownRoom' },
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'She keeps to her own end of the basement and her own apparatus, and the peace this buys costs more than she admits.',
    priority: 56,
  },
  {
    id: 'franklin-beat-patterson-arithmetic',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'The sums run to weeks of adding by hand on squared paper, and she will not shorten them because a shortened sum is a guess.',
    priority: 48,
  },
  {
    id: 'franklin-beat-the-mock-card',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.twoForms' },
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'She has a card printed announcing the death of the helix in the drier form, and circulates it, and means the joke entirely seriously.',
    priority: 56,
  },
  {
    id: 'franklin-beat-colloquium',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1952 },
    ],
    text: 'She gives the department her measurements in one hour with nothing rounded, and two visitors from Cambridge take no notes at all.',
    priority: 50,
  },
  {
    id: 'franklin-beat-hold-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.holdForCertainty' },
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'The draft is right and is not finished, and every week she does not send it is a week she has decided to spend on being sure.',
    priority: 56,
  },
  {
    id: 'franklin-beat-publish-soon-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.publishSoon' },
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'She sends the short note off with the error bars showing, and dislikes the feeling of having been hurried by other people.',
    priority: 56,
  },
  {
    id: 'franklin-beat-applying-elsewhere',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1952 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'She writes to a professor across town about a top floor, a fellowship and viruses, and does not tell anyone at work for a month.',
    priority: 48,
  },
  {
    id: 'franklin-beat-four-oclock-darkroom',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1951 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'At four o’clock the basement is quiet enough to hear the pump, and she finds she works best in the hour nobody wants.',
    priority: 8,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1953
  // -------------------------------------------------------------------------
  {
    id: 'franklin-beat-april-issue',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'The journal comes in the ordinary way, in the ordinary brown wrapper, on an ordinary Thursday, and she reads it standing at the bench.',
    priority: 54,
  },
  {
    id: 'franklin-beat-said-it-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.saidIt' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'Having said the thing out loud once, she declines every invitation to say it again, which people mistake for having got over it.',
    priority: 60,
  },
  {
    id: 'franklin-beat-said-nothing-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.saidNothing' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'She says nothing, and files the notebooks in date order, and the silence is a decision rather than an absence of one.',
    priority: 60,
  },
  {
    id: 'franklin-beat-asked-him-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.askedHim' },
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'The answer she was given is turned over for weeks afterwards, and each time it comes out a little smaller than it sounded.',
    priority: 60,
  },
  {
    id: 'franklin-beat-clumsy-congratulation',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'A colleague congratulates her on being part of it, and she thanks him, and neither of them looks at the other for a moment.',
    priority: 52,
  },
  {
    id: 'franklin-beat-condition-of-the-post',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1954 },
    ],
    text: 'A condition of the new post is that she leaves the substance behind, and she agrees to it in one line and means it.',
    priority: 56,
  },
  {
    id: 'franklin-beat-instruments-stay',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1954 },
    ],
    speaker: 'ROSALIND',
    text: 'The camera stays; it belongs to the department. I have written out how to use it, and I should like somebody to read that.',
    priority: 54,
  },
  {
    id: 'franklin-beat-tube-home',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1953 },
      { type: 'yearAtMost', year: 1953 },
    ],
    text: 'On the train home she does the humidity arithmetic again from memory, because it is the one thing that will still answer her.',
    priority: 50,
  },

  // -------------------------------------------------------------------------
  // Legacy, 1954–1958
  // -------------------------------------------------------------------------
  {
    id: 'franklin-beat-five-flights',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'london' },
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'The X-ray set is in the basement and the microscope is five floors up, and there is no lift, and the plates are carried by hand.',
    priority: 50,
  },
  {
    id: 'franklin-beat-bucket-on-the-landing',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'london' },
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'Rain comes through where the roof was mended badly after the war, and the bucket on the landing is emptied by whoever passes it.',
    priority: 48,
  },
  {
    id: 'franklin-beat-grant-applications',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'She keeps four people in salaries by writing to America twice a year, and does the costings herself down to the photographic plates.',
    priority: 46,
  },
  {
    id: 'franklin-beat-american-roads',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1957 },
    ],
    text: 'She crosses a continent by road between laboratories, sleeps badly in motels, and comes back with three collaborations and a sunburn.',
    priority: 44,
  },
  {
    id: 'franklin-beat-virus-in-the-post',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'A sealed tube of virus arrives from abroad packed in ice, and she has the specimen mounted before the ice has finished melting.',
    priority: 44,
  },
  {
    id: 'franklin-beat-klug-argument',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.klugPartnership' },
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1958 },
    ],
    speaker: 'KLUG',
    text: 'You are about to say the data cannot decide it. Say it, and then let me show you the way I think it can.',
    priority: 56,
  },
  {
    id: 'franklin-beat-cooking-for-the-group',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'She cooks for the group in her flat and is a far better cook than any of them expected, and enjoys the small revenge of it.',
    priority: 40,
  },
  {
    id: 'franklin-beat-build-group-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.buildGroup' },
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'There are five of them now and the work goes on when she is away, which she finds harder to get used to than she expected.',
    priority: 54,
  },
  {
    id: 'franklin-beat-own-hands-payoff',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.ownHands' },
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'She still mounts every specimen herself, because a mounting she did not watch is a measurement she cannot defend.',
    priority: 54,
  },
  {
    id: 'franklin-beat-rosalind-aloud',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1958 },
    ],
    speaker: 'ROSALIND',
    text: 'Photograph it again at the other humidity. If it is true, it will still be true on Friday, and then we may write it down.',
    priority: 48,
  },
  {
    id: 'franklin-beat-copenhagen-institute',
    characterId: 'franklin',
    conditions: [
      { type: 'locationIs', locationId: 'copenhagen' },
      { type: 'otherCharacterAt', characterId: 'bohr', locationId: 'copenhagen' },
      { type: 'yearAtLeast', year: 1950 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'The old man who runs this institute asks her four questions about her plates, and the fourth one is better than her own.',
    priority: 58,
  },
  {
    id: 'franklin-beat-stairs',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.ill' },
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'The five flights take longer than they did, so she starts up them earlier and arrives at the same time as before.',
    priority: 60,
  },
  {
    id: 'franklin-beat-spare-room',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.ill' },
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'Friends make up a spare room and put a lamp by the bed, and she works there in the evenings and asks them not to hover.',
    priority: 60,
  },
  {
    id: 'franklin-beat-told-them-once',
    characterId: 'franklin',
    conditions: [
      { type: 'narrativeFlag', flag: 'franklin.ill' },
      { type: 'yearAtLeast', year: 1956 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'She tells the group once, plainly, in the same voice she uses for a result, and then asks about Tuesday’s exposure.',
    priority: 60,
  },
  {
    id: 'franklin-beat-plexiglass-order',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1957 },
      { type: 'yearAtMost', year: 1958 },
    ],
    speaker: 'ROSALIND',
    text: 'Curved, to that tolerance, or it is not a model of anything. I am happy to wait while you telephone the works.',
    priority: 50,
  },
  {
    id: 'franklin-beat-lecture-abroad',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1955 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'She lectures abroad on the virus and is introduced as the leading person in it, and privately corrects the word leading to careful.',
    priority: 44,
  },
  {
    id: 'franklin-beat-method-written-out',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1957 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'The method goes into the notebook in a hand small enough to fit and plain enough for a stranger, which is how she always wrote it.',
    priority: 52,
  },
  {
    id: 'franklin-beat-skylight-rain',
    characterId: 'franklin',
    conditions: [
      { type: 'yearAtLeast', year: 1954 },
      { type: 'yearAtMost', year: 1958 },
    ],
    text: 'Rain on the skylight all afternoon, and the top floor smells of wet plaster and photographic chemicals in about equal measure.',
    priority: 6,
    repeatable: true,
  },

  // -------------------------------------------------------------------------
  // Strain, when the years of work have taken more than they have given back
  // -------------------------------------------------------------------------
  {
    id: 'franklin-beat-strain-exposures',
    characterId: 'franklin',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 4 }],
    text: 'She runs the exposures long because she will not trust a shorter one, and the letter from Paris has been in her coat pocket unanswered for three weeks.',
    priority: 40,
    repeatable: true,
  },
  {
    id: 'franklin-beat-strain-coat',
    characterId: 'franklin',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 2 }],
    text: 'She has taken to keeping her coat on indoors, and the technician remarks, without being asked, that the room is not as cold as all that.',
    priority: 50,
    repeatable: true,
  },
  {
    id: 'franklin-beat-strain-unstarted',
    characterId: 'franklin',
    conditions: [{ type: 'resourceAtMost', resource: 'wellbeing', value: 0 }],
    text: 'The camera is loaded, the specimen is mounted, the hours are written on the card, and she does not start the exposure.',
    priority: 60,
    repeatable: true,
  },
];
