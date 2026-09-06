import type { StoryScene } from '../../types/story';

const sourceIds = ['bohr'];
const instituteSources = ['bohr', 'bohrInstitute'];
const warSources = ['bohr', 'bohrManhattan'];

/** Board context cards told in full by scenes in this file. */
export const BOHR_REPLACED_CONTEXT_CARDS: string[] = [
  'bohr-card-1912-manchester',
  'bohr-card-1921-institute',
  'bohr-card-1933-refuge',
  'bohr-card-1940-occupation',
  'bohr-card-1943-escape',
  'bohr-card-1950-openletter',
];

export const BOHR_STORY_SCENES: StoryScene[] = [
  // ───────────────────────────────────────────── prologue
  {
    id: 'bohr-prologue-house-by-the-water',
    characterId: 'bohr',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A House Where Arguments Are Furniture',
        locationLabel: 'Copenhagen',
        yearLabel: '1885',
        image: {
          setting: 'a tall Copenhagen townhouse by the canal on an autumn evening in the 1880s',
          year: 1885,
          characters: ['bohr'],
          mood: 'warm, crowded, unhurried',
          details: ['gas lamps along a canal', 'a long dinner table cleared of plates', 'anatomical charts rolled in a corner', 'a physiology laboratory ledger', 'wet cobblestones'],
          alt: 'A tall canal-side townhouse in Copenhagen at dusk, lamps lit in the upper windows.',
        },
        pages: [
          {
            id: 'canal',
            narration:
              'Rain comes off the harbour and puts a shine on the cobbles outside a tall house by the water. Inside, the plates have been cleared and nobody has stood up. This is a household where the meal ends and the argument begins, and where the argument is treated as a form of hospitality.',
          },
          {
            id: 'father',
            narration:
              'His father is a professor of physiology, which means he spends his working life on the question of how a living thing can be made of ordinary matter and still be a living thing. He brings that question home and lays it on the table with the bread.',
            speaker: 'HIS FATHER',
            dialogue: 'Say the objection out loud, Niels. An objection you keep in your head has never once been tested against anything.',
          },
          {
            id: 'brothers',
            narration:
              'There is a younger brother, Harald, who is quicker at mathematics and quicker on his feet, and the two of them will spend the next sixty years finishing each other’s sentences. Niels is the slow one. Slow, in his case, means he will not let go.',
          },
        ],
        historicalNote:
          'Bohr was born in Copenhagen in 1885 into an academic household; his father, Christian Bohr, was professor of physiology at the University of Copenhagen and his mother came from a prominent Danish family. His younger brother Harald became a mathematician. Dialogue is dramatized.',
      },
    ],
  },

  // ───────────────────────────────────────────── formation
  {
    id: 'bohr-formation-opening',
    characterId: 'bohr',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'copenhagen',
        conditions: [{ type: 'locationIs', locationId: 'copenhagen' }],
        title: 'The Slow Brother',
        locationLabel: 'Copenhagen',
        yearLabel: '1885–1903',
        image: {
          setting: 'a Copenhagen schoolyard and a physiology laboratory bench, 1890s',
          year: 1896,
          characters: ['bohr'],
          mood: 'patient, stubborn, affectionate',
          details: ['a scuffed leather football', 'a brass microscope', 'chalk on a slate', 'a schoolboy’s ink-stained cuff', 'grey Baltic light'],
          alt: 'A worn leather football beside a brass microscope on a laboratory bench.',
        },
        pages: [
          {
            id: 'school',
            narration:
              'He is not the fastest boy in the room and he knows it. He is the one still turning a sentence over at the end of the lesson, long after the class has agreed to move on, because a word in it has not yet been made to sit still.',
          },
          {
            id: 'workshop',
            narration:
              'There is a workshop behind the house where he learns to file and solder, and a laboratory where his father lets both boys watch. He learns early that an idea you cannot build is only half an idea, and that the half you can build will surprise you.',
          },
          {
            id: 'harald',
            narration:
              'Harald reads a proof once and has it. Niels reads it four times and then asks the question nobody else thought to ask, and the answer takes a week.',
            speaker: 'HARALD',
            dialogue: 'You are not slow. You simply refuse to accept a thing until you have annoyed it into confessing.',
          },
          {
            id: 'decide',
            narration:
              'Two ways of being right are available to a boy in this house, and whichever he practises now will be the one his hands remember at forty.',
            choices: [
              {
                id: 'takeApart',
                label: 'Take it apart on the bench until it tells you why',
                effects: [
                  { type: 'flag', flag: 'bohr.method', value: 'hands' },
                  { type: 'theme', theme: 'thingsVsWords', amount: 2 },
                  { type: 'resources', effects: { evidence: 1 } },
                ],
              },
              {
                id: 'talkItOut',
                label: 'Talk it out with Harald until the words stop lying',
                effects: [
                  { type: 'flag', flag: 'bohr.method', value: 'talk' },
                  { type: 'theme', theme: 'thingsVsWords', amount: -1 },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr’s boyhood in an academic Copenhagen household, his practical work in his father’s laboratory, and his lifelong closeness to his brother Harald are documented. The choice and the dialogue are dramatized.',
      },
      {
        id: 'default',
        title: 'The Slow Brother',
        yearLabel: '1885–1903',
        image: {
          setting: 'a boy’s desk with a slate, a soldering iron and an open textbook, 1890s',
          year: 1896,
          characters: ['bohr'],
          mood: 'patient, stubborn, private',
          details: ['a slate and chalk', 'a soldering iron', 'a scuffed leather football', 'ink-stained cuffs', 'a low lamp'],
          alt: 'A schoolboy’s desk with a slate, chalk and a soldering iron beside an open book.',
        },
        pages: [
          {
            id: 'school',
            narration:
              'He is not the fastest boy in any room he enters, and he knows it. He is the one still turning a sentence over after the lesson has ended, because a word in it has not yet been made to sit still.',
          },
          {
            id: 'workshop',
            narration:
              'Wherever the family is, there is a bench, a file, a length of solder. He learns early that an idea you cannot build is only half an idea, and that the half you can build will surprise you.',
          },
          {
            id: 'harald',
            narration:
              'Harald reads a proof once and has it. Niels reads it four times and then asks the question nobody else thought to ask, and the answer takes a week.',
            speaker: 'HARALD',
            dialogue: 'You are not slow. You simply refuse to accept a thing until you have annoyed it into confessing.',
          },
          {
            id: 'decide',
            narration:
              'Two ways of being right are available to a boy like this, and whichever he practises now will be the one his hands remember at forty.',
            choices: [
              {
                id: 'takeApart',
                label: 'Take it apart on the bench until it tells you why',
                effects: [
                  { type: 'flag', flag: 'bohr.method', value: 'hands' },
                  { type: 'theme', theme: 'thingsVsWords', amount: 2 },
                  { type: 'resources', effects: { evidence: 1 } },
                ],
              },
              {
                id: 'talkItOut',
                label: 'Talk it out with Harald until the words stop lying',
                effects: [
                  { type: 'flag', flag: 'bohr.method', value: 'talk' },
                  { type: 'theme', theme: 'thingsVsWords', amount: -1 },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr grew up in an academic household, worked with his hands from boyhood, and remained intellectually inseparable from his brother Harald. The choice and the dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'bohr-personal-glassblowing',
    characterId: 'bohr',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'hands',
        conditions: [
          { type: 'yearAtLeast', year: 1894 },
          { type: 'yearAtMost', year: 1902 },
          { type: 'choiceWas', choiceKey: 'bohr-formation-opening:decide', choiceId: 'takeApart' },
        ],
        title: 'The Fourth Tube',
        yearLabel: 'A School Holiday',
        image: {
          setting: 'a workshop bench at night with a gas flame, glass tubing and three failed attempts, 1890s',
          year: 1898,
          characters: ['bohr'],
          mood: 'obstinate, absorbed, companionable',
          details: ['a blue gas flame', 'three collapsed glass tubes', 'a scorched cloth', 'a jar of water for quenching', 'a boy’s jacket over a stool'],
          alt: 'Three collapsed glass tubes beside a blue gas flame on a night workbench.',
        },
        pages: [
          {
            id: 'flame',
            narration:
              'Three tubes on the bench, all wrong, all wrong in different ways. The glass goes soft too fast at the shoulder and sags, and the sagging is not a mystery — it is a fact he has not yet learned to feel in his wrist.',
          },
          {
            id: 'harald',
            narration:
              'Harald has been sitting on the stool for an hour with a book he has stopped reading, which is his way of keeping somebody company without admitting to it.',
            speaker: 'HARALD',
            dialogue: 'Three is enough, surely. You have proved that it is difficult.',
          },
          {
            id: 'fourth',
            narration:
              'The fourth one comes out true. He holds it up to the flame and turns it, and does not say anything, and puts it in the rack — and then makes a fifth, because one true tube might have been luck.',
          },
        ],
        effects: [
          { type: 'resources', effects: { evidence: 1, wellbeing: 1 } },
          { type: 'flag', flag: 'bohr.ownHands', value: true },
        ],
        historicalNote:
          'Bohr learned practical craft early and blew his own glassware as a student. The particular evening is dramatized.',
      },
      {
        id: 'talk',
        conditions: [
          { type: 'yearAtLeast', year: 1894 },
          { type: 'yearAtMost', year: 1902 },
        ],
        title: 'Two Boys and One Sentence',
        yearLabel: 'A School Holiday',
        image: {
          setting: 'a canal path at dusk, two schoolboys walking slowly with books under their arms, 1890s',
          year: 1898,
          characters: ['bohr'],
          mood: 'circling, patient, warm',
          details: ['a canal at dusk', 'two sets of school books', 'a gas lamp being lit', 'wet leaves', 'a bridge with an iron rail'],
          alt: 'A canal path at dusk with a gas lamp being lit and wet leaves underfoot.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'They have walked the same half mile of canal four times because Niels has a sentence that is nearly right and will not let it go. Harald has the answer and has decided, at fourteen, that handing it over would be a kind of theft.',
          },
          {
            id: 'brother',
            narration:
              'The lamplighter passes them twice. The second time he looks at the two of them over his shoulder, going the wrong way again, and says nothing.',
            speaker: 'HARALD',
            dialogue: 'Say it once more without the middle part. If it is still true without the middle part, then the middle part was you being frightened of it.',
          },
          {
            id: 'true',
            narration:
              'He says it once more without the middle part. It is still true. It is also, he notices, three words shorter and considerably harder to look at, and that is the trade he is going to be making for the next sixty years.',
          },
        ],
        effects: [
          { type: 'resources', effects: { theory: 1, wellbeing: 1 } },
          { type: 'flag', flag: 'bohr.saidAloud', value: true },
        ],
        historicalNote:
          'Bohr habitually worked out his ideas by talking them through, most often with his brother Harald. The particular evening is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-formation-closing',
    characterId: 'bohr',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'hands',
        conditions: [{ type: 'choiceWas', choiceKey: 'bohr-formation-opening:decide', choiceId: 'takeApart' }],
        title: 'What the Bench Taught',
        yearLabel: '1903',
        image: {
          setting: 'a cleared workbench with a finished piece of glassware, evening, 1903',
          year: 1903,
          characters: ['bohr'],
          mood: 'quiet satisfaction, threshold',
          details: ['a blown glass tube', 'files laid in a row', 'a scorched cloth', 'a matriculation card', 'a low window'],
          alt: 'A cleared workbench with a finished glass tube and a row of files.',
        },
        pages: [
          {
            id: 'bench',
            narration:
              'He leaves the bench tidy, which is not his habit. In the rack is the best of the tubes he blew this year, very nearly true, and he can still name the second of the working where the last of it went wrong.',
          },
          {
            id: 'ahead',
            narration:
              'Ahead there is a university that will hand him equations already solved by better men. He intends to distrust every one of them until he has made it in his own hands first.',
          },
        ],
        historicalNote:
          'Bohr was an unusually practical theorist who blew his own glassware and built his own apparatus as a student. The scene is dramatized.',
      },
      {
        id: 'default',
        title: 'Everything Still Open',
        yearLabel: '1903',
        image: {
          setting: 'a Copenhagen doorway at dusk with a coat and a satchel, 1903',
          year: 1903,
          characters: ['bohr'],
          mood: 'unfinished, expectant',
          details: ['a hung overcoat', 'a satchel of notebooks', 'a hallway clock', 'rain on glass', 'a matriculation card'],
          alt: 'A coat and a student’s satchel hung in a hallway at dusk.',
        },
        pages: [
          {
            id: 'doorway',
            narration:
              'Boyhood does not end on a date; it ends the first time somebody asks a question and waits for your answer as though it might matter. That has now happened twice.',
          },
          {
            id: 'ahead',
            narration:
              'He has no method yet, only a habit: never to let a sentence past that he could not say again, differently, and mean the same thing. It is not much to take to a university. It will turn out to be everything.',
          },
        ],
        historicalNote:
          'Bohr matriculated at the University of Copenhagen in 1903. The framing is dramatized connective writing.',
      },
    ],
  },

  // ───────────────────────────────────────────── education
  {
    id: 'bohr-education-opening',
    characterId: 'bohr',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'copenhagen',
        conditions: [{ type: 'locationIs', locationId: 'copenhagen' }],
        title: 'A Prize for Water',
        locationLabel: 'Copenhagen',
        yearLabel: '1903–1907',
        image: {
          setting: 'a university laboratory with a vibrating water jet and a measuring scale, mid-1900s',
          year: 1906,
          characters: ['bohr'],
          mood: 'meticulous, absorbed',
          details: ['a fine jet of water breaking into beads', 'a brass micrometer', 'a stopwatch', 'sheets of ruled calculation', 'a gas tap'],
          alt: 'A fine jet of water breaking into beads above a brass micrometer on a laboratory bench.',
        },
        pages: [
          {
            id: 'jet',
            narration:
              'The Academy has offered a prize for anyone who can measure the surface tension of a liquid properly, and the university has no apparatus for it. So he builds the apparatus. A jet of water leaves a fine orifice and shudders into beads, and the shuddering is the answer.',
          },
          {
            id: 'lab',
            narration:
              'His father’s laboratory is quiet at night and nobody stops him using it. He works there for months, measuring the same shudder over and over, past the point where any sensible person would have written it up.',
            speaker: 'HIS FATHER',
            dialogue: 'You have the number. What you do not have, I think, is permission from yourself to stop.',
          },
          {
            id: 'decide',
            narration:
              'The essay is due and the theory in it is not finished. He can send the measurements, which are beyond argument, or he can hold the whole thing back until the mathematics behind them is his own.',
            choices: [
              {
                id: 'experiment',
                label: 'Send the measurements; the theory can follow',
                effects: [
                  { type: 'flag', flag: 'bohr.prize', value: 'measure' },
                  { type: 'resources', effects: { evidence: 1, standing: 1 } },
                ],
              },
              {
                id: 'theory',
                label: 'Hold it back and rebuild the theory from the ground',
                effects: [
                  { type: 'flag', flag: 'bohr.prize', value: 'theory' },
                  { type: 'resources', effects: { theory: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'flag', flag: 'bohr.copenhagenStudent', value: true }],
        historicalNote:
          'Bohr won the Royal Danish Academy’s gold medal in 1907 for an investigation of the surface tension of water using vibrating jets, carrying out the experiments in his father’s laboratory. The deadline dilemma and dialogue are dramatized.',
      },
      {
        id: 'default',
        title: 'A Prize for Water',
        yearLabel: '1903–1907',
        image: {
          setting: 'a borrowed laboratory bench with a water jet apparatus and calculation sheets, mid-1900s',
          year: 1906,
          characters: ['bohr'],
          mood: 'meticulous, absorbed',
          details: ['a fine jet of water breaking into beads', 'a brass micrometer', 'a stopwatch', 'ruled calculation sheets', 'a gas tap'],
          alt: 'A water jet apparatus and sheets of calculation on a borrowed laboratory bench.',
        },
        pages: [
          {
            id: 'jet',
            narration:
              'An academy prize has been offered for measuring the surface tension of a liquid properly, and there is no apparatus anywhere near him that will do it. So he builds one. A jet of water leaves a fine orifice and shudders into beads, and the shuddering is the answer.',
          },
          {
            id: 'lab',
            narration:
              'He borrows the bench at night, when nobody wants it, and measures the same shudder over and over, past the point where any sensible person would have written it up.',
            speaker: 'HIS FATHER',
            dialogue: 'You have the number. What you do not have, I think, is permission from yourself to stop.',
          },
          {
            id: 'decide',
            narration:
              'The essay is due and the theory in it is not finished. He can send the measurements, which are beyond argument, or hold the whole thing back until the mathematics behind them is his own.',
            choices: [
              {
                id: 'experiment',
                label: 'Send the measurements; the theory can follow',
                effects: [
                  { type: 'flag', flag: 'bohr.prize', value: 'measure' },
                  { type: 'resources', effects: { evidence: 1, standing: 1 } },
                ],
              },
              {
                id: 'theory',
                label: 'Hold it back and rebuild the theory from the ground',
                effects: [
                  { type: 'flag', flag: 'bohr.prize', value: 'theory' },
                  { type: 'resources', effects: { theory: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr’s prize-winning student work on the surface tension of water, done with apparatus he built himself, is documented. The deadline dilemma and dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'bohr-education-closing',
    characterId: 'bohr',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'theory-first',
        conditions: [{ type: 'choiceWas', choiceKey: 'bohr-education-opening:decide', choiceId: 'theory' }],
        title: 'The Habit He Has Just Bought',
        yearLabel: '1911',
        image: {
          setting: 'a desk stacked with successive drafts of the same argument, 1911',
          year: 1911,
          characters: ['bohr'],
          mood: 'costly, exacting',
          details: ['six drafts of one section', 'a bound thesis', 'a mourning band', 'a guttering lamp', 'an untouched supper'],
          alt: 'Six drafts of the same section stacked beside a bound thesis on a desk.',
        },
        pages: [
          {
            id: 'drafts',
            narration:
              'He held the prize essay back until the theory behind the measurements was his own, and it cost him a winter. He has done the same thing to the doctorate, and to everything since, and he now knows this is permanent.',
          },
          {
            id: 'father',
            narration:
              'His father did not live to see it defended. What is left is a young man who cannot let a sentence pass until it is true from both sides, in a language nobody outside Denmark reads, with a suspicion that the classical picture of matter is quietly and comprehensively wrong.',
          },
        ],
        historicalNote:
          'Bohr’s doctorate of 1911 on the electron theory of metals concluded that classical physics could not account for the behaviour of metals; his father died earlier that year. The framing is dramatized.',
      },
      {
        id: 'copenhagen',
        conditions: [{ type: 'narrativeFlag', flag: 'bohr.copenhagenStudent' }],
        title: 'A Thesis Nobody Abroad Can Read',
        locationLabel: 'Copenhagen',
        yearLabel: '1911',
        image: {
          setting: 'a study with a bound doctoral thesis and a black armband on the chair, 1911',
          year: 1911,
          characters: ['bohr'],
          mood: 'grief held quietly, resolve',
          details: ['a bound thesis', 'a mourning band', 'an unlit pipe', 'a travelling fellowship letter', 'grey window light'],
          alt: 'A bound thesis on a desk beside a mourning band laid over a chair back.',
        },
        pages: [
          {
            id: 'defence',
            narration:
              'The thesis is on the electron theory of metals and it is written in Danish, which means that for practical purposes it is written in code. It argues, politely and at length, that the classical picture cannot account for what metals actually do. Nobody in Copenhagen is equipped to disagree.',
          },
          {
            id: 'father',
            narration:
              'His father did not live to see it defended. The house is quieter than it has ever been, and the argument that used to start when the plates were cleared now has to be carried on by one person, in his head, forever.',
          },
        ],
        historicalNote:
          'Bohr completed his doctorate at Copenhagen in 1911 on the electron theory of metals, written in Danish and therefore little read abroad; his father died earlier that year. The framing is dramatized.',
      },
      {
        id: 'default',
        title: 'The Book That Stays Shut',
        yearLabel: '1911',
        image: {
          setting: 'a lamplit desk with an unsent parcel of manuscript, 1911',
          year: 1911,
          characters: ['bohr'],
          mood: 'restless, unfinished',
          details: ['a string-tied parcel', 'a half-written covering letter', 'a mourning band', 'stacked offprints', 'a cold cup'],
          alt: 'A string-tied parcel of manuscript and a half-written letter on a lamplit desk.',
        },
        pages: [
          {
            id: 'parcel',
            narration:
              'The work of these years sits on the desk tied in string, and the covering letter that should go with it has been started four times. Every version says the same thing in a slightly less certain way.',
          },
          {
            id: 'father',
            narration:
              'His father died this year, and the argument that used to begin when the plates were cleared has nobody left to begin it. What is left is a young man, a parcel, and a suspicion that the classical picture of matter is quietly, comprehensively wrong.',
          },
        ],
        historicalNote:
          'Bohr’s student years ended with a doctorate and the death of his father in 1911. This variant follows a course in which the work stayed unpublished and unsent. The framing is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-personal-football',
    characterId: 'bohr',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 80 },
    once: true,
    variants: [
      {
        id: 'well',
        conditions: [
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1909 },
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 },
        ],
        title: 'Between the Posts',
        yearLabel: 'A Saturday',
        image: {
          setting: 'a muddy football pitch at the edge of a northern European city, autumn, 1900s',
          year: 1907,
          characters: ['bohr'],
          mood: 'cold, cheerful, physical',
          details: ['a laced leather ball', 'chalked goal line gone to mud', 'a knitted jersey', 'bare autumn trees', 'a wooden rattle'],
          alt: 'A muddy goalmouth on an autumn football pitch with a laced leather ball.',
        },
        pages: [
          {
            id: 'goal',
            narration:
              'He keeps goal because it is the one position where nothing happens for twenty minutes and then everything does. In the long empty stretches he has been known to work on a problem against the goalpost, which the crowd has opinions about.',
          },
          {
            id: 'harald',
            narration:
              'Harald plays out on the field and is genuinely, embarrassingly good at it, good enough that strangers know the surname for the football before they know it for the mathematics.',
            speaker: 'HARALD',
            dialogue: 'Two shots got past you while you were thinking. I am not saying stop thinking. I am saying pick the half of the match for it.',
          },
          {
            id: 'walk',
            narration:
              'They walk home along the water with their boots hanging by the laces, still arguing, and the argument has already stopped being about football.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1, health: 1 } }],
        historicalNote:
          'Both Bohr brothers played football; Harald played internationally for Denmark. Stories of Niels keeping goal absent-mindedly are part of the standard telling. Dialogue is dramatized.',
      },
      {
        id: 'worn',
        conditions: [
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1910 },
        ],
        title: 'The Match He Does Not Go To',
        yearLabel: 'A Saturday',
        image: {
          setting: 'a student room with the curtains half drawn and an untouched meal, 1900s',
          year: 1907,
          characters: ['bohr'],
          mood: 'tired, shut in',
          details: ['a plate gone cold', 'boots by the door', 'stacked calculation sheets', 'a stopped clock', 'grey afternoon light'],
          alt: 'A student room with boots by the door and an untouched plate beside stacked papers.',
        },
        pages: [
          {
            id: 'boots',
            narration:
              'The boots are by the door where they were left three Saturdays ago. Outside there is a whistle and a distant roar and then nothing, and inside there is a column of figures that has refused to come out twice.',
          },
          {
            id: 'brother',
            narration:
              'Harald comes by afterwards, muddy to the knee, and does not say anything about the plate that has gone cold on the table.',
            speaker: 'HARALD',
            dialogue: 'The problem will still be wrong tomorrow. Come out. You are no use to it grey.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote:
          'Bohr worked to exhaustion as a student and relied heavily on his brother. The specific scene is dramatized.',
      },
    ],
  },

  // ───────────────────────────────────────────── entry
  {
    id: 'bohr-entry-opening',
    characterId: 'bohr',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'manchester',
        conditions: [{ type: 'locationIs', locationId: 'manchesterUK' }],
        title: 'North to the Smoke',
        locationLabel: 'Manchester',
        yearLabel: '1911–1912',
        image: {
          setting: 'a soot-darkened English industrial city street outside a university laboratory, 1912',
          year: 1912,
          characters: ['bohr'],
          mood: 'foreign, energising, loud',
          details: ['soot-blackened brick', 'a laboratory door with a brass plate', 'a foreign fellowship letter', 'a wet umbrella', 'smoke over rooftops'],
          alt: 'A soot-darkened brick laboratory entrance on a wet industrial street.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'The city arrives before the university does: brick gone black, a sky the colour of a used coin, and a noise underneath everything that never quite stops. He has a fellowship, a poor accent, and a thesis nobody here can read.',
          },
          {
            id: 'lab',
            narration:
              'The laboratory is louder than any he has been in. Men shout results down a corridor and somebody is counting flashes of light in a darkened room and swearing about it.',
            speaker: 'A LABORATORY MAN',
            dialogue: 'You are the Dane. Rutherford said to put you somewhere with a chair and no equipment. He says you break things.',
          },
          {
            id: 'decide',
            narration:
              'There is a way to spend a year like this. He can make himself useful at somebody’s bench and learn the trade, or he can take the nuclear atom away into a room and refuse to come out until it stops contradicting itself.',
            choices: [
              {
                id: 'cambridge',
                label: 'Serve the experiments; earn the room first',
                effects: [
                  { type: 'flag', flag: 'bohr.apprenticeship', value: 'bench' },
                  { type: 'resources', effects: { network: 1, evidence: 1 } },
                ],
              },
              {
                id: 'manchester',
                label: 'Take the atom into a room and stay there',
                effects: [
                  { type: 'flag', flag: 'bohr.apprenticeship', value: 'atom' },
                  { type: 'resources', effects: { theory: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'After a first year in England at Cambridge, Bohr moved in 1912 to Rutherford’s laboratory in Manchester, where the recently proposed nuclear atom lacked a theory. The dialogue and the choice are dramatized.',
      },
      {
        id: 'default',
        title: 'A Fellowship and a Question',
        yearLabel: '1911–1912',
        image: {
          setting: 'a lamplit desk with a travelling fellowship letter and a foreign railway timetable, 1911',
          year: 1911,
          characters: ['bohr'],
          mood: 'restless, deciding',
          details: ['a fellowship letter', 'a railway timetable', 'a packed trunk half full', 'an offprint of a paper on the nuclear atom', 'a mourning band'],
          alt: 'A fellowship letter and a railway timetable on a lamplit desk beside a half-packed trunk.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The fellowship letter says a year abroad and does not say where. On the same desk lies an offprint describing an atom that is almost entirely empty, with everything heavy crushed into a speck at the centre.',
          },
          {
            id: 'problem',
            narration:
              'If that picture is right, the electrons should spiral into that speck and every atom in the universe should have collapsed before breakfast. They have not. Somebody is going to have to explain why, and nobody currently wants the job.',
            speaker: 'HARALD',
            dialogue: 'You have found a question that everyone agrees is unanswerable. That is, for you, an unusually good sign.',
          },
          {
            id: 'decide',
            narration:
              'A year is short and can be spent two ways. He can make himself useful in somebody’s laboratory and learn the trade, or he can take the empty atom into a room and refuse to come out until it stops contradicting itself.',
            choices: [
              {
                id: 'cambridge',
                label: 'Serve the experiments; earn the room first',
                effects: [
                  { type: 'flag', flag: 'bohr.apprenticeship', value: 'bench' },
                  { type: 'resources', effects: { network: 1, evidence: 1 } },
                ],
              },
              {
                id: 'manchester',
                label: 'Take the atom into a room and stay there',
                effects: [
                  { type: 'flag', flag: 'bohr.apprenticeship', value: 'atom' },
                  { type: 'resources', effects: { theory: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr held a travelling fellowship after his doctorate and spent it in England. Rutherford’s nuclear atom, proposed shortly before, was known to be unstable under classical physics. The dialogue and the choice are dramatized.',
      },
    ],
  },
  {
    id: 'bohr-card-manchester',
    characterId: 'bohr',
    chapterId: 'entry',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    replacesContextCardId: 'bohr-card-1912-manchester',
    variants: [
      {
        id: 'manchester',
        conditions: [
          { type: 'locationIs', locationId: 'manchesterUK' },
          { type: 'yearAtLeast', year: 1912 },
          { type: 'yearAtMost', year: 1913 },
        ],
        title: 'Rutherford’s Laboratory',
        locationLabel: 'Manchester',
        yearLabel: '1912',
        image: {
          setting: 'a crowded university physics laboratory with scattering apparatus, 1912',
          year: 1912,
          characters: ['bohr'],
          mood: 'noisy, generous, sharp',
          details: ['a gold-foil scattering tube', 'a darkened counting booth', 'a blackboard of orbits', 'tea mugs on a windowsill', 'a director’s open door'],
          alt: 'A crowded physics laboratory with scattering apparatus and a blackboard covered in sketched orbits.',
        },
        pages: [
          {
            id: 'foil',
            narration:
              'In the next room a thin sheet of gold foil is being shot at, and a few of the shots come straight back. That is the whole of the evidence: matter is mostly nothing, with something very small and very heavy at the middle of it.',
          },
          {
            id: 'director',
            narration:
              'The director is a large, loud, entirely unpretentious man who shouts across the laboratory and listens to anybody with a reason. He has decided the Dane is worth the room, and says so where the Dane can hear it.',
            speaker: 'RUTHERFORD',
            dialogue: 'Everyone tells me the theory men are useless in a laboratory. You are useless in a rather promising way. Go on — say the objection.',
          },
          {
            id: 'wall',
            narration:
              'The objection is that the picture cannot last a millionth of a second. The room knows it. The room has decided to be cheerful about it and get on with the measuring, which is exactly what a young man who cannot let go should not be near.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1912-manchester' },
          { type: 'resources', effects: { network: 1, theory: 1 } },
          { type: 'flag', flag: 'bohr.rutherfordRoom', value: true },
          { type: 'flag', flag: 'bohr.manchesterRoom', value: true },
        ],
        historicalNote:
          'Bohr joined Rutherford’s Manchester laboratory in 1912, where the nuclear atom inferred from alpha-particle scattering had no stable classical explanation. Rutherford’s manner is well attested; the wording is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1912 },
          { type: 'yearAtMost', year: 1913 },
        ],
        title: 'The Foil and the Rebound',
        yearLabel: '1912',
        image: {
          setting: 'a quiet study with a foreign journal open at a scattering diagram, 1912',
          year: 1912,
          characters: ['bohr'],
          mood: 'distant, itching, alert',
          details: ['an open foreign journal', 'a scattering diagram', 'a cold pipe', 'a letter with an English postmark', 'a bare desk'],
          alt: 'A foreign journal open at a scattering diagram on an otherwise bare desk.',
        },
        pages: [
          {
            id: 'journal',
            narration:
              'The report comes by post, not by ear. In an English laboratory they have been firing particles at a sheet of gold foil, and a few of the shots come straight back — which means matter is mostly nothing, with something very small and very heavy at the middle of it.',
          },
          {
            id: 'flaw',
            narration:
              'He reads it twice and puts it down, because the picture cannot survive an instant. Electrons circling a charged speck must radiate, and radiating they must fall in, and every atom in the world should have collapsed long before anyone drew this diagram.',
          },
          {
            id: 'distance',
            narration:
              'Somewhere they are cheerfully measuring on and around the contradiction. He is a long way from that room, with nobody to say the objection to, and it will not leave him alone.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1912-manchester' },
          { type: 'resources', effects: { theory: 1 } },
        ],
        historicalNote:
          'The nuclear atom and its classical instability were public knowledge by 1912. This variant follows a course in which Bohr met the problem in print rather than in Rutherford’s laboratory. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-encounter-rutherford',
    characterId: 'bohr',
    chapterId: 'entry',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'in-the-room',
        conditions: [
          { type: 'locationIs', locationId: 'manchesterUK' },
          { type: 'yearAtLeast', year: 1912 },
        ],
        title: 'Permission to Be Absurd',
        locationLabel: 'Manchester',
        yearLabel: '1912–1913',
        image: {
          setting: 'a laboratory director’s office with a pipe, a fire and a stack of drafts, 1913',
          year: 1913,
          characters: ['bohr'],
          mood: 'blunt, warm, decisive',
          details: ['a coal fire', 'a pipe in an ashtray', 'a thick stack of manuscript', 'a window over blackened roofs', 'a cluttered desk'],
          alt: 'A cluttered laboratory director’s office with a coal fire and a thick stack of manuscript.',
        },
        pages: [
          {
            id: 'draft',
            narration:
              'The draft is too long, it is written in a Danish habit of qualifying every clause, and its central proposal is that electrons are simply forbidden to do the thing that classical physics requires them to do.',
          },
          {
            id: 'verdict',
            narration:
              'The director reads it standing up, which is a bad sign, and then sits down, which is worse, and then does not say anything for a long time.',
            speaker: 'RUTHERFORD',
            dialogue: 'Your electrons decide where to jump and when. That is not physics, that is manners. And yet the spectrum comes out — so I shall be an old fool who backs it, and you shall cut it by a third.',
          },
          {
            id: 'cost',
            narration:
              'He does not cut it by a third. They argue about the length for weeks, which is how he learns that a man can fight you line by line and still put his name behind you at the door.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1, network: 1 } },
          { type: 'flag', flag: 'bohr.backed', value: true },
          { type: 'flag', flag: 'bohr.manchesterRoom', value: true },
        ],
        historicalNote:
          'Rutherford supported the publication of Bohr’s 1913 atomic papers while objecting to their length and to the arbitrariness of quantum jumps; their arguments over the manuscript are documented. Dialogue is dramatized.',
      },
      {
        id: 'by-post',
        conditions: [{ type: 'yearAtLeast', year: 1912 }],
        title: 'The Argument by Post',
        yearLabel: '1912–1913',
        image: {
          setting: 'a writing desk with an English envelope, a long draft and a lamp, 1913',
          year: 1913,
          characters: ['bohr'],
          mood: 'patient, isolated, dogged',
          details: ['an English postmark', 'a long handwritten draft', 'a blotter', 'a lamp turned low', 'an empty chair opposite'],
          alt: 'A long handwritten draft and an English-postmarked envelope on a lamplit writing desk.',
        },
        pages: [
          {
            id: 'send',
            narration:
              'He posts the draft to the one man in Europe who might back it, and then waits, which is a skill he does not have. The proposal inside is that electrons are forbidden to do what classical physics insists they must.',
          },
          {
            id: 'reply',
            narration:
              'The reply, when it comes, is three paragraphs, blunt as a hammer, and generous underneath the bluntness. It objects to the length. It objects to electrons choosing their moment. It does not object to publication.',
            speaker: 'RUTHERFORD',
            dialogue: 'I cannot see how an electron knows when to jump, or where. Cut it by a third and I will send it on regardless, and we shall both find out together.',
          },
          {
            id: 'cost',
            narration:
              'He does not cut it by a third. But he keeps the letter, and for the rest of his life he will read manuscripts by young men the way that letter read his.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1 } },
          { type: 'flag', flag: 'bohr.backed', value: true },
        ],
        historicalNote:
          'Rutherford and Bohr corresponded at length over the 1913 papers; Rutherford objected to their length and to quantum jumps while backing publication. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-entry-closing',
    characterId: 'bohr',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'bench-first',
        conditions: [
          { type: 'choiceWas', choiceKey: 'bohr-entry-opening:decide', choiceId: 'cambridge' },
          { type: 'narrativeFlag', flag: 'bohr.manchesterRoom' },
        ],
        title: 'The Year He Spent Being Useful',
        locationLabel: 'Manchester',
        yearLabel: '1913',
        image: {
          setting: 'a laboratory bench at the end of a long day, apparatus cleaned and put away, 1913',
          year: 1913,
          characters: ['bohr'],
          mood: 'earned, impatient, warm',
          details: ['apparatus cleaned and racked', 'somebody else’s results book', 'a pinned table of spectral wavelengths', 'a cooling kettle', 'lamplight on black windows'],
          alt: 'Cleaned apparatus racked above a results book, a table of wavelengths pinned nearby.',
        },
        pages: [
          {
            id: 'earned',
            narration:
              'He spent the year at other men’s benches, counting flashes and cleaning glassware and asking his one question at the ends of afternoons. It bought him something no paper could: the room stopped treating him as a visitor.',
          },
          {
            id: 'lock',
            narration:
              'And then the lock turns anyway, late, on a Tuesday. If the electron is allowed only certain orbits and jumps between them whole, the hydrogen formula falls out of the mathematics like a coin out of a pocket. He has an audience for it by now, which turns out to matter enormously.',
          },
        ],
        historicalNote:
          'Bohr worked in English laboratories through 1911–12 before arriving at the quantized model in early 1913. The framing is dramatized.',
      },
      {
        id: 'manchester',
        conditions: [{ type: 'narrativeFlag', flag: 'bohr.manchesterRoom' }],
        title: 'Something Forbidden, Something True',
        locationLabel: 'Manchester',
        yearLabel: '1913',
        image: {
          setting: 'a lodging-house table at night with spectral line tables and a lamp, 1913',
          year: 1913,
          characters: ['bohr'],
          mood: 'sleepless, electric',
          details: ['tables of spectral lines', 'a slide rule', 'a cooling teapot', 'a mantel clock at three', 'an open window over black roofs'],
          alt: 'Tables of spectral wavelengths and a slide rule on a lodging table under a low lamp.',
        },
        pages: [
          {
            id: 'lines',
            narration:
              'The numbers were sitting in a spectroscopist’s table for thirty years, waiting: a short arithmetical formula that gives the wavelengths of hydrogen and explains nothing. He has been staring at it since Tuesday.',
          },
          {
            id: 'lock',
            narration:
              'Then the lock turns. If the electron is allowed only certain orbits and jumps between them, whole and at once, the formula falls out of the mathematics like a coin out of a pocket. The picture is absurd. The picture is correct.',
          },
        ],
        historicalNote:
          'Bohr’s recognition in early 1913 that Balmer’s empirical formula for the hydrogen spectrum followed from quantized electron orbits is documented. The scene is dramatized.',
      },
      {
        id: 'default',
        title: 'The Formula on the Wall',
        yearLabel: '1913',
        image: {
          setting: 'a quiet study with a pinned table of spectral wavelengths, 1913',
          year: 1913,
          characters: ['bohr'],
          mood: 'circling, unfinished',
          details: ['a pinned table of wavelengths', 'a slide rule', 'a stack of unanswered letters', 'a cold pipe', 'winter light'],
          alt: 'A table of spectral wavelengths pinned to a wall above a quiet desk.',
        },
        pages: [
          {
            id: 'pinned',
            narration:
              'The table of hydrogen wavelengths has been pinned above the desk for a year. It is a piece of pure arithmetic that has no business being true, and every morning he looks at it, and every morning it looks back.',
          },
          {
            id: 'wait',
            narration:
              'Somewhere there is a room where a man would say the objection out loud and another man would shout an answer down a corridor. He is not in that room. The formula stays on the wall, and stays unexplained.',
          },
        ],
        historicalNote:
          'This variant follows a course in which Bohr had not yet joined the laboratory or made the connection between quantized orbits and hydrogen’s spectrum. The framing is dramatized.',
      },
    ],
  },

  // ───────────────────────────────────────────── breakthrough
  {
    id: 'bohr-breakthrough-opening',
    characterId: 'bohr',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'copenhagen',
        conditions: [{ type: 'locationIs', locationId: 'copenhagen' }],
        title: 'Three Papers and a Wife Who Writes Them Down',
        locationLabel: 'Copenhagen',
        yearLabel: '1913',
        image: {
          setting: 'a Copenhagen apartment with a dictation table, ink and manuscript sheets, 1913',
          year: 1913,
          characters: ['bohr'],
          mood: 'domestic, urgent, tender',
          details: ['manuscript sheets in a neat hand', 'an inkwell', 'a walking coat on a hook', 'a harbour view', 'a wedding photograph'],
          alt: 'Manuscript pages in a neat hand beside an inkwell on a dictation table.',
        },
        pages: [
          {
            id: 'dictation',
            narration:
              'He cannot write. He can talk, endlessly, in half sentences that turn back on themselves, and he has married a woman with a steady hand and no fear of interrupting. Margrethe writes; he paces; the paper gets made.',
          },
          {
            id: 'three',
            narration:
              'What is being made is not one paper but three, and together they say something no committee would have permitted: inside the atom, energy comes in whole pieces, and an electron changes state without passing through anything in between.',
            speaker: 'MARGRETHE',
            dialogue: 'You have said ‘on the other hand’ four times in one sentence, Niels. Choose a hand.',
          },
          {
            id: 'decide',
            narration:
              'The three parts can go out together, as one indivisible claim about the world, or the first can go alone and the rest wait until the objections have been answered.',
            choices: [
              {
                id: 'allthree',
                label: 'All three at once — let it stand or fall whole',
                effects: [
                  { type: 'flag', flag: 'bohr.trilogy', value: 'whole' },
                  { type: 'resources', effects: { exposure: 1, standing: 1 } },
                  { type: 'theme', theme: 'boldnessVsCaution', amount: 2 },
                ],
              },
              {
                id: 'holdback',
                label: 'The first alone; answer the objections before the rest',
                effects: [
                  { type: 'flag', flag: 'bohr.trilogy', value: 'staged' },
                  { type: 'resources', effects: { theory: 1 } },
                  { type: 'theme', theme: 'boldnessVsCaution', amount: -1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr published his atomic model as three papers in 1913 and habitually composed by dictation, often to his wife Margrethe. The choice and dialogue are dramatized.',
      },
      {
        id: 'default',
        title: 'Three Papers, Spoken Aloud',
        yearLabel: '1913',
        image: {
          setting: 'a rented room with a dictation table, manuscript sheets and a pacing track worn in the rug, 1913',
          year: 1913,
          characters: ['bohr'],
          mood: 'restless, urgent, close',
          details: ['manuscript sheets in a second hand', 'an inkwell', 'a worn rug', 'a coat on a hook', 'a lamp at midnight'],
          alt: 'Manuscript pages and an inkwell on a table in a rented room, a rug worn thin beside it.',
        },
        pages: [
          {
            id: 'dictation',
            narration:
              'He cannot write, not properly. He can talk, endlessly, in half sentences that double back, and so the work is spoken and somebody else’s hand catches it. The rug wears through in a line between the window and the door.',
          },
          {
            id: 'three',
            narration:
              'What is being made is not one paper but three, and together they say what no committee would have allowed: inside the atom energy comes in whole pieces, and an electron changes state without passing through anything in between.',
            speaker: 'MARGRETHE',
            dialogue: 'You have said ‘on the other hand’ four times in one sentence, Niels. Choose a hand.',
          },
          {
            id: 'decide',
            narration:
              'The three parts can go out together, as one indivisible claim about the world, or the first can go alone and the rest wait until the objections have been answered.',
            choices: [
              {
                id: 'allthree',
                label: 'All three at once — let it stand or fall whole',
                effects: [
                  { type: 'flag', flag: 'bohr.trilogy', value: 'whole' },
                  { type: 'resources', effects: { exposure: 1, standing: 1 } },
                  { type: 'theme', theme: 'boldnessVsCaution', amount: 2 },
                ],
              },
              {
                id: 'holdback',
                label: 'The first alone; answer the objections before the rest',
                effects: [
                  { type: 'flag', flag: 'bohr.trilogy', value: 'staged' },
                  { type: 'resources', effects: { theory: 1 } },
                  { type: 'theme', theme: 'boldnessVsCaution', amount: -1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr composed by dictation throughout his life and published his atomic model in three parts in 1913. The choice and dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'bohr-project-quantized-atom',
    characterId: 'bohr',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'bohr-quantized-atom', priority: 88 },
    once: true,
    variants: [
      {
        id: 'manchester',
        conditions: [{ type: 'locationIs', locationId: 'manchesterUK' }],
        title: 'The Atom Consents to Be Stable',
        locationLabel: 'Manchester',
        yearLabel: '1913',
        image: {
          setting: 'a laboratory blackboard with concentric orbits and a spectral table, 1913',
          year: 1913,
          characters: ['bohr'],
          mood: 'astonished, sober, vindicated',
          details: ['concentric chalk orbits', 'a table of wavelengths', 'chalk dust in lamplight', 'a folded proof sheet', 'coal smoke at the window'],
          alt: 'A blackboard with concentric chalk orbits beside a pinned table of spectral wavelengths.',
        },
        pages: [
          {
            id: 'jump',
            narration:
              'He draws the orbits as rings, which is a lie he will spend thirty years apologising for, and then writes the rule beside them: an electron may sit here, or here, and nowhere between, and when it moves it does not travel — it arrives.',
          },
          {
            id: 'spectrum',
            narration:
              'Out of that rule comes the spectrum of hydrogen, line for line, in the wavelengths a spectroscopist measured before he was born. The picture has no right to work. It works.',
            speaker: 'RUTHERFORD',
            dialogue: 'You have not explained the jump. You have merely made it compulsory. It is either the worst physics I have read this year or the first of a new kind.',
          },
          {
            id: 'quiet',
            narration:
              'He agrees with both halves of that, out loud, at length, and goes on believing it anyway. Behind the ring diagram there is a question about what a description of nature is even for, and it is going to take him the rest of his life.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
          { type: 'flag', flag: 'bohr.atom', value: true },
        ],
        historicalNote:
          'Bohr’s 1913 model of quantized electron orbits reproduced the hydrogen spectrum and was developed in and around Rutherford’s Manchester laboratory. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        title: 'The Rule He Is Not Allowed to Justify',
        yearLabel: '1913',
        image: {
          setting: 'a study desk at night with concentric orbit sketches and a spectral table, 1913',
          year: 1913,
          characters: ['bohr'],
          mood: 'quiet triumph, unease',
          details: ['concentric ink orbits', 'a table of wavelengths', 'a slide rule', 'a lamp at three in the morning', 'a cold cup'],
          alt: 'Concentric ink orbits sketched beside a table of spectral wavelengths on a night desk.',
        },
        pages: [
          {
            id: 'rule',
            narration:
              'He draws the orbits as rings, which is a lie he will spend thirty years apologising for, and writes the rule beside them: the electron may sit here, or here, and nowhere between, and when it moves it does not travel — it arrives.',
          },
          {
            id: 'spectrum',
            narration:
              'Out of that rule falls the spectrum of hydrogen, line for line, matching wavelengths measured before he was born. He checks it three times, because a thing this clean is usually an arithmetic mistake.',
          },
          {
            id: 'alone',
            narration:
              'There is nobody awake to say it to. He goes to the window instead, and stands there long enough for the lamp to gutter, holding a picture of matter that is both plainly impossible and plainly right.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
          { type: 'flag', flag: 'bohr.atom', value: true },
        ],
        historicalNote:
          'The quantized atomic model of 1913 reproduced hydrogen’s spectrum from a rule Bohr could not justify from classical physics. The setting here is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-encounter-einstein',
    characterId: 'bohr',
    chapterId: 'breakthrough',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['bohr', 'einstein'],
    trigger: { event: 'afterAction', priority: 88 },
    once: true,
    variants: [
      {
        id: 'human-present',
        conditions: [
          { type: 'yearAtLeast', year: 1920 },
          { type: 'otherCharacterIsHuman', characterId: 'einstein' },
          {
            any: [
              { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'copenhagen', yearTolerance: 3 },
              { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin', yearTolerance: 3 },
            ],
          },
        ],
        title: 'Past the Stop',
        yearLabel: '1920',
        image: {
          setting: 'the interior of a city tram at dusk with two overcoats and a fogged window, 1920',
          year: 1920,
          characters: ['bohr', 'einstein'],
          mood: 'delighted, absorbed, oblivious',
          details: ['a fogged tram window', 'a hanging leather strap', 'two damp overcoats', 'a conductor’s ticket punch', 'lamps sliding past'],
          alt: 'Two overcoats and a hanging strap inside a tram with a fogged window at dusk.',
        },
        pages: [
          {
            id: 'meeting',
            narration:
              'They have written to each other for years and the letters have been careful. In person, within ten minutes, the carefulness is gone and they are both talking at once about whether light can possibly be a particle when it is so obviously a wave.',
          },
          {
            id: 'tram',
            narration:
              'They get on a tram going the wrong way, and neither of them notices. They ride to the end of the line, ride back, and get off somewhere neither of them intended, still mid-sentence.',
            speaker: 'EINSTEIN',
            dialogue: 'You keep saying we cannot ask what the electron is doing between. I say a thing that is real is doing something. That is not a preference. That is what real means.',
          },
          {
            id: 'answer',
            narration:
              'Niels stops in the street to answer, then starts again, then adds a qualification to his own qualification. It is the beginning of an argument that will outlast both their careers, and it is, from the first evening, a friendship.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 2, respect: 2, tension: 1, flag: 'quantum-debate' },
          { type: 'resources', effects: { network: 1, standing: 1 } },
          { type: 'flag', flag: 'bohr.einstein', value: true },
        ],
        historicalNote:
          'Bohr and Einstein met in 1920 and immediately began the disagreement over quantum theory that lasted the rest of their lives; the story of the two of them riding past their tram stop while arguing is part of the standard telling. Dialogue is dramatized.',
      },
      {
        id: 'npc',
        conditions: [
          { type: 'yearAtLeast', year: 1920 },
          { type: 'otherCharacterIsNpc', characterId: 'einstein' },
        ],
        title: 'The Guest Who Will Not Concede',
        yearLabel: '1920',
        image: {
          setting: 'a lamplit sitting room with two chairs pulled close and a supper gone cold, 1920',
          year: 1920,
          characters: ['bohr', 'einstein'],
          mood: 'warm, immovable, late',
          details: ['two chairs pulled together', 'a supper tray untouched', 'a pipe gone out', 'a sheet of scribbled diagrams', 'a clock past midnight'],
          alt: 'Two chairs pulled close by a lamp, with an untouched supper tray and scribbled diagrams.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'The visitor arrives with no luggage worth mentioning and an objection worth a great deal. He is against the quantum jump — not against the arithmetic, which is unanswerable, but against a universe that declines to say what happens in between.',
          },
          {
            id: 'night',
            narration:
              'They talk until the supper is cold and then until the fire is out. Twice the guest declares himself convinced, and twice, going down the stairs, he thinks of something else.',
            speaker: 'EINSTEIN',
            dialogue: 'You ask me to give up asking what is really there. My friend, I would sooner be a shoemaker than give that up.',
          },
          {
            id: 'after',
            narration:
              'Niels sees him to the door in the small hours, agreeing with almost everything and conceding nothing at all, which is a trick he has been practising since he was seven.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 2, respect: 2, tension: 1, flag: 'quantum-debate' },
          { type: 'resources', effects: { network: 1, standing: 1 } },
          { type: 'flag', flag: 'bohr.einstein', value: true },
        ],
        historicalNote:
          'Bohr and Einstein’s disagreement over quantum theory began at their first meetings around 1920 and remained affectionate throughout. Dialogue is dramatized.',
      },
      {
        id: 'absent',
        conditions: [{ type: 'yearAtLeast', year: 1920 }],
        title: 'An Argument With Nobody In It',
        yearLabel: 'Around 1920',
        image: {
          setting: 'a writing desk with an unanswered letter and two cups, one unused, 1920',
          year: 1920,
          characters: ['bohr'],
          mood: 'wanting, unfinished',
          details: ['an unanswered letter', 'two cups, one clean', 'a diagram of a light quantum', 'a lamp turned low', 'an empty chair'],
          alt: 'An unanswered letter and two cups, one unused, beside a lamp on a writing desk.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The invitation went out in the spring and the reply is polite and full of regret. There is no visit, and so there is no argument, and it turns out he has come to depend on being contradicted.',
          },
          {
            id: 'alone',
            narration:
              'He argues both sides at the desk instead, aloud, which is unnerving for anyone passing the door. The half of the argument he has to invent is never quite as good as the half a real opponent would have supplied.',
          },
        ],
        effects: [{ type: 'resources', effects: { theory: 1 } }],
        historicalNote:
          'Bohr worked best against an opponent and sought out disagreement all his life. This variant follows a course in which the meeting did not take place. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-personal-margrethe',
    characterId: 'bohr',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 78 },
    once: true,
    variants: [
      {
        id: 'strained',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1921 },
          { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 } },
        ],
        title: 'The Sentence That Will Not End',
        yearLabel: 'A Winter',
        image: {
          setting: 'a domestic table at night with a stalled page of dictation and a cold lamp, late 1910s',
          year: 1918,
          characters: ['bohr'],
          mood: 'exhausted, tender, strained',
          details: ['a page stopped mid-sentence', 'a dry pen', 'a child’s shoe by the door', 'a stove gone low', 'winter dark at the window'],
          alt: 'A page of dictation stopped mid-sentence beside a dry pen on a dark table.',
        },
        pages: [
          {
            id: 'stall',
            narration:
              'The page has been stopped at the same clause for two hours. He has rebuilt the sentence eleven times and each version is more honest and less usable than the last.',
          },
          {
            id: 'margrethe',
            narration:
              'Margrethe puts the pen down. There are children asleep in this house and a stove that has gone low and a man who has not eaten since the morning.',
            speaker: 'MARGRETHE',
            dialogue: 'You are not looking for the true sentence any more. You are hiding in it. Come to bed and we will start again at seven.',
          },
          {
            id: 'sleep',
            narration:
              'At seven she reads the eleventh version back to him and he hears, for the first time, what is actually wrong with it. Two hours later the paragraph is done.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 2 } }],
        historicalNote:
          'Bohr dictated his work, frequently to his wife Margrethe, and revised obsessively; her role in his working method is well attested. The scene and dialogue are dramatized.',
      },
      {
        id: 'steady',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1921 },
        ],
        title: 'The Hand That Catches It',
        yearLabel: 'A Winter',
        image: {
          setting: 'a warm family room with a dictation table, children’s things and a full stove, late 1910s',
          year: 1918,
          characters: ['bohr'],
          mood: 'domestic, steady, fond',
          details: ['a stack of finished pages', 'a child’s wooden horse', 'a stove burning well', 'a coffee pot', 'lamplight on a rug'],
          alt: 'A stack of finished manuscript pages beside a child’s wooden horse in a warm room.',
        },
        pages: [
          {
            id: 'rhythm',
            narration:
              'The house has learned his rhythm: he walks the length of the rug, says half a thought, turns, takes it back, says it better. The pen only moves on the third version, and never on the first.',
          },
          {
            id: 'margrethe',
            narration:
              'She has heard every paper he will ever publish before anyone else on earth, in its worst possible form, and has never once told him so.',
            speaker: 'MARGRETHE',
            dialogue: 'That one was almost a sentence, Niels. Say it once more without the “however” and I shall write it down before you can improve it.',
          },
          {
            id: 'done',
            narration:
              'There are children on the floor and a stove doing its work and a man being made intelligible by somebody who loves him. This is what the productive years actually look like.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1, health: 1 } }],
        historicalNote:
          'Bohr’s habit of composing aloud, with Margrethe taking dictation, is documented. The scene and dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'bohr-project-correspondence',
    characterId: 'bohr',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'bohr-correspondence-principle', priority: 84 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Bridge He Refuses to Burn',
        yearLabel: 'The Turn of the Decade',
        image: {
          setting: 'a blackboard divided between a classical wave and a quantum ladder of levels, around 1920',
          year: 1920,
          characters: ['bohr'],
          mood: 'careful, architectural',
          details: ['a chalked wave beside a ladder of levels', 'a duster worn to felt', 'stacked offprints', 'a window over a courtyard', 'a chair turned to face the board'],
          alt: 'A blackboard showing a smooth wave on one side and a ladder of discrete levels on the other.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'Seven years of the new physics have produced a great many answers and no rules for producing them. Anybody in Europe can guess a quantum condition; nobody can say which guesses are permitted, and the guessing has begun to outrun the thinking.',
          },
          {
            id: 'rule',
            narration:
              'So he writes the constraint down, and it is not a formula but a demand: whatever the quantum world does at its own scale, it must, in the limit of large numbers, turn back into the ordinary physics that built every instrument used to measure it.',
            speaker: 'NIELS',
            dialogue: 'We are not permitted to throw away the old physics. We are only permitted to find out where it stops — and it must tell us itself where that is.',
          },
          {
            id: 'use',
            narration:
              'It looks modest written out. In practice it becomes a sieve: three quarters of the guesses coming out of Europe die in it within a year, and the quarter that survive are the beginning of quantum mechanics.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1, theory: 1 } },
          { type: 'flag', flag: 'bohr.correspondence', value: true },
        ],
        historicalNote:
          'Bohr formulated the correspondence principle between 1918 and 1920 as the requirement that quantum predictions reduce to classical results in the appropriate limit; it guided the development of quantum mechanics. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-project-institute',
    characterId: 'bohr',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: instituteSources,
    trigger: { event: 'projectCompleted', projectId: 'bohr-founding-institute', priority: 86 },
    once: true,
    variants: [
      {
        id: 'copenhagen',
        conditions: [{ type: 'locationIs', locationId: 'copenhagen' }],
        title: 'A House With Nothing In It Yet',
        locationLabel: 'Copenhagen',
        yearLabel: '1921',
        image: {
          setting: 'a newly built institute building with bare rooms and unpacked crates, Copenhagen 1921',
          year: 1921,
          characters: ['bohr'],
          mood: 'proud, unfinished, hopeful',
          details: ['bare plaster walls', 'unpacked crates', 'a new blackboard still wrapped', 'a builder’s ladder', 'a brass nameplate'],
          alt: 'A bare new institute room with unpacked crates and a wrapped blackboard against the wall.',
        },
        pages: [
          {
            id: 'money',
            narration:
              'It took four years of asking. He asked the university, then the state, then a brewery, then anyone who would sit still, and he asked in the same hedged, circling, impossible-to-refuse way he explains physics.',
          },
          {
            id: 'rooms',
            narration:
              'The rooms smell of new plaster and there is nothing in them. A blackboard is still in its wrapping against the wall. He walks through them at night working out where to put the arguments.',
            speaker: 'NIELS',
            dialogue: 'A laboratory is only apparatus. What I want is a house where a man from anywhere may say something foolish out loud on a Tuesday and not be finished by it.',
          },
          {
            id: 'open',
            narration:
              'The plate goes up by the door. Within a year the corridors will be loud in four languages, and the people making the noise will mostly be under thirty.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, network: 2 } },
          { type: 'flag', flag: 'bohr.institute', value: true },
        ],
        historicalNote:
          'Bohr’s Institute for Theoretical Physics in Copenhagen was funded from university, state and private sources and opened in 1921, becoming the international centre of quantum theory. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        title: 'A House, Wherever It Stands',
        yearLabel: '1921',
        image: {
          setting: 'an architect’s plan for a small institute weighted down on a desk, 1921',
          year: 1921,
          characters: ['bohr'],
          mood: 'determined, improvised',
          details: ['an unrolled building plan', 'a subscription list of donors', 'an inkstand as a paperweight', 'a brass nameplate not yet fixed', 'a stack of letters'],
          alt: 'An unrolled architect’s plan for a small institute weighted down beside a list of donors.',
        },
        pages: [
          {
            id: 'money',
            narration:
              'It took four years of asking, and he asked everyone: the university, the state, a brewery, a widow with an interest in astronomy. He asks for money in the same hedged, circling, impossible-to-refuse way he explains physics.',
          },
          {
            id: 'idea',
            narration:
              'The plan on the desk is for a small building with big rooms and too many blackboards. What is actually being founded is a rule: anybody may come, anybody may be wrong out loud, and nobody’s nation is written on the door.',
            speaker: 'NIELS',
            dialogue: 'Apparatus one can buy anywhere. What I want is a house where a young man from anywhere may say something foolish on a Tuesday and not be finished by it.',
          },
          {
            id: 'open',
            narration:
              'The nameplate is not fixed yet. He carries it about in his coat pocket for a week, which is not like him at all.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, network: 2 } },
          { type: 'flag', flag: 'bohr.institute', value: true },
        ],
        historicalNote:
          'Bohr raised funds for his institute from public and private sources over several years. This variant places the founding away from Copenhagen. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-card-institute',
    characterId: 'bohr',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: instituteSources,
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    replacesContextCardId: 'bohr-card-1921-institute',
    variants: [
      {
        id: 'founded',
        conditions: [
          { type: 'yearAtLeast', year: 1919 },
          { type: 'projectCompleted', projectId: 'bohr-founding-institute' },
        ],
        title: 'The Corridor in Four Languages',
        yearLabel: '1921',
        image: {
          setting: 'a busy institute corridor with young physicists arguing at a blackboard, early 1920s',
          year: 1922,
          characters: ['bohr'],
          mood: 'crowded, young, electric',
          details: ['a corridor blackboard covered over twice', 'coats on a row of hooks', 'a ping-pong table', 'trunks with foreign labels', 'a bell for tea'],
          alt: 'An institute corridor blackboard covered in overlapping calculations, coats on hooks nearby.',
        },
        pages: [
          {
            id: 'arrivals',
            narration:
              'They come with one suitcase and no money and a letter of introduction that in some cases they have written themselves. Within a fortnight the corridor blackboard has been covered over twice and nobody can find the duster.',
          },
          {
            id: 'young',
            narration:
              'Two in particular will not stop. One is a young German who thinks in matrices and hikes when he is stuck; the other is an Austrian with a tongue like a razor who has never been polite to a wrong idea in his life.',
            speaker: 'PAULI',
            dialogue: 'Professor, that is not even wrong. And now that I have said it, you will spend a fortnight proving me right, which is why we all keep coming here.',
          },
          {
            id: 'method',
            narration:
              'He does not run it like a director. He runs it like a very slow, very stubborn argument that happens to have a building around it, and physicists from six countries rearrange their lives to be inside it.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1921-institute' },
          { type: 'resources', effects: { standing: 1, network: 2 } },
          { type: 'flag', flag: 'bohr.openHouse', value: true },
        ],
        historicalNote:
          'Bohr’s Copenhagen institute drew young physicists from across Europe in the 1920s, Heisenberg and Pauli among them, and its informal argumentative style is documented. Dialogue is dramatized.',
      },
      {
        id: 'unbuilt',
        conditions: [{ type: 'yearAtLeast', year: 1919 }],
        title: 'Four Names on the Subscription List',
        yearLabel: '1919–1921',
        image: {
          setting: 'a benefactor’s panelled office with a folded building plan and an untouched sherry, early 1920s',
          year: 1921,
          characters: ['bohr'],
          mood: 'polite, immovable, deflating',
          details: ['a folded architect’s plan', 'a subscription list with four names', 'two glasses, one untouched', 'a mantel clock', 'a heavy panelled door'],
          alt: 'A folded architect’s plan and a short subscription list on a polished desk beside two glasses.',
        },
        pages: [
          {
            id: 'pitch',
            narration:
              'He unfolds the plan on a polished desk and explains it the way he explains physics: slowly, doubling back, qualifying himself twice, and getting there. Big rooms. Too many blackboards. No nationality on the door.',
          },
          {
            id: 'no',
            narration:
              'The man across the desk hears him out to the end, which is more than most, and then folds the plan back along its own creases and slides it across.',
            speaker: 'A BENEFACTOR',
            dialogue: 'You are asking me to pay for a building in which foreigners will argue. Bring me an instrument, Professor, or a patent, or a cure — and I will write the cheque before you sit down.',
          },
          {
            id: 'street',
            narration:
              'Out in the street he stands with the plan under his arm for a while, working out which part of the sentence he got wrong, because it will not have been the building. There are four names on the subscription list. Somewhere in that morning’s post is a young German who thinks in matrices, asking whether there is room.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1921-institute' },
          { type: 'resources', effects: { network: 1, wellbeing: -1 } },
          { type: 'flag', flag: 'bohr.moneyRefused', value: true },
        ],
        historicalNote:
          'Bohr raised the money for his institute over several years from public and private sources. This variant follows a course in which the funding did not come together; the benefactor and the meeting are dramatized.',
      },
    ],
  },
  {
    id: 'bohr-breakthrough-closing',
    characterId: 'bohr',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds: instituteSources,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'whole-and-built',
        conditions: [
          { type: 'projectCompleted', projectId: 'bohr-founding-institute' },
          { type: 'choiceWas', choiceKey: 'bohr-breakthrough-opening:decide', choiceId: 'allthree' },
        ],
        title: 'A Prize and a Building',
        yearLabel: '1921–1922',
        image: {
          setting: 'an institute office with a telegram on the desk and building dust on the sill, 1922',
          year: 1922,
          characters: ['bohr'],
          mood: 'vindicated, unsettled',
          details: ['an opened telegram', 'plaster dust on a windowsill', 'a new blackboard in use', 'a formal dress coat on a hook', 'a stack of foreign letters'],
          alt: 'An opened telegram on a desk beside a window sill still dusty from building work.',
        },
        pages: [
          {
            id: 'telegram',
            narration:
              'The telegram comes from Stockholm and is read out in a corridor that still smells of new plaster. He is thirty-seven, the model is nine years old, and half the men cheering in the corridor are young enough to be his students, because they are.',
          },
          {
            id: 'unease',
            narration:
              'What nobody says out loud, and what he says constantly, is that the model is already wrong. The rings are a fiction. Something stranger is underneath, and the house he has just built is where it is going to be found.',
          },
        ],
        historicalNote:
          'Bohr received the 1922 Nobel Prize in Physics shortly after founding his institute, and openly regarded his 1913 model as provisional. The scene is dramatized.',
      },
      {
        id: 'built',
        conditions: [{ type: 'projectCompleted', projectId: 'bohr-founding-institute' }],
        title: 'The Door Is Open Now',
        yearLabel: '1921',
        image: {
          setting: 'an institute entrance hall at evening with a row of coat hooks filling up, 1921',
          year: 1921,
          characters: ['bohr'],
          mood: 'quiet pride, anticipation',
          details: ['a row of coat hooks', 'a visitors’ book', 'a brass nameplate', 'a lit stair', 'foreign luggage labels'],
          alt: 'A row of coat hooks and an open visitors’ book in an institute entrance hall.',
        },
        pages: [
          {
            id: 'hooks',
            narration:
              'There are eleven coat hooks by the door and by the end of the month nine of them are foreign. The visitors’ book has to be replaced within two years, which is the only statistic about the place he ever bothers to quote.',
          },
          {
            id: 'ahead',
            narration:
              'The physics is still wrong and he knows it and does not mind. What matters is that the wrongness now has a room to be argued in, and the room has no nationality.',
          },
        ],
        historicalNote:
          'The Copenhagen institute rapidly became an international gathering point after its opening in 1921. The scene is dramatized.',
      },
      {
        id: 'default',
        title: 'Loud Everywhere Except Here',
        yearLabel: '1921',
        image: {
          setting: 'a shared university office with foreign journals stacked unread, 1921',
          year: 1921,
          characters: ['bohr'],
          mood: 'sidelined, restless',
          details: ['stacked foreign journals', 'a shared desk', 'a lecture timetable', 'an unposted letter', 'grey afternoon light'],
          alt: 'Foreign journals stacked unread on a shared university desk.',
        },
        pages: [
          {
            id: 'journals',
            narration:
              'The journals arrive from Munich and Göttingen and Leiden and are full of his atom being argued about by people he has never met. It is a strange thing, to be quoted in four languages and to have no room in which to answer.',
          },
          {
            id: 'plan',
            narration:
              'So he answers them. Nine letters a week, in his own hand, arguing at long distance with men he has never met, and the argument is just as good as it would have been in a corridor and takes eleven days instead of eleven seconds.',
          },
        ],
        historicalNote:
          'This variant follows a course in which the Copenhagen institute was not founded and Bohr’s ideas developed abroad without a home base. The scene is dramatized.',
      },
    ],
  },

  // ───────────────────────────────────────────── crisis
  {
    id: 'bohr-crisis-opening',
    characterId: 'bohr',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds: instituteSources,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'copenhagen',
        conditions: [{ type: 'locationIs', locationId: 'copenhagen' }],
        title: 'The Year the Post Changes',
        locationLabel: 'Copenhagen',
        yearLabel: '1933',
        image: {
          setting: 'an institute office in winter with a desk of dismissal notices and testimonials, 1933',
          year: 1933,
          characters: ['bohr'],
          mood: 'grave, mobilised',
          details: ['a stack of letters with German stamps', 'a typed list of names', 'a telephone off its hook', 'a map of Europe on the wall', 'snow at the window'],
          alt: 'A stack of German-stamped letters and a typed list of names on a winter office desk.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'The post changes in the spring. The letters from Germany stop asking about matrices and start asking whether a man with a wife and two children might be of any use in Denmark, at any salary, in any capacity.',
          },
          {
            id: 'list',
            narration:
              'Within a month there is a list on the desk, typed, added to daily. Every name on it is a physicist who was employed in January and is not employed now, and the reason in every case is the same reason.',
            speaker: 'A DISMISSED COLLEAGUE',
            dialogue: 'I am not asking for a post, Professor. I am asking whether there is anywhere at all that would still let me work.',
          },
          {
            id: 'decide',
            narration:
              'Whatever he has — a name, a fund, a spare room, the ear of a consulate — is about to be spent on something. What it is spent on now will be what the name means afterwards.',
            choices: [
              {
                id: 'openDoor',
                label: 'Open the door — whatever I have is for whoever needs it',
                effects: [
                  { type: 'flag', flag: 'bohr.refuge', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                ],
              },
              {
                id: 'guardWork',
                label: 'Guard the work — physics cannot become a bureau',
                effects: [
                  { type: 'flag', flag: 'bohr.guarded', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -1 },
                  { type: 'resources', effects: { theory: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'From 1933 Bohr’s institute and its associated fund helped displaced scientists dismissed from German universities find posts elsewhere. The dialogue and the choice are dramatized.',
      },
      {
        id: 'default',
        title: 'The Year the Post Changes',
        yearLabel: '1933',
        image: {
          setting: 'a winter desk with foreign newspapers and a typed list of dismissed academics, 1933',
          year: 1933,
          characters: ['bohr'],
          mood: 'grave, decisive',
          details: ['foreign newspapers folded open', 'a typed list of names', 'a bundle of letters', 'a wall map of Europe', 'a cold window'],
          alt: 'Foreign newspapers folded open beside a typed list of names on a winter desk.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'The post changes in the spring. Letters that used to argue about matrices begin instead to ask whether a man with a wife and two children might be of any use anywhere, at any salary, in any capacity.',
          },
          {
            id: 'list',
            narration:
              'Within a month there is a list, typed, added to daily. Every name on it belonged to somebody employed in January who is not employed now, and the reason in each case is the same reason.',
            speaker: 'A DISMISSED COLLEAGUE',
            dialogue: 'I am not asking for a post, Professor. I am asking whether there is anywhere at all that would still let me work.',
          },
          {
            id: 'decide',
            narration:
              'Whatever standing he has is a currency, and it is about to be spent on something. What he spends it on now will be what his name means afterwards.',
            choices: [
              {
                id: 'openDoor',
                label: 'Open the door — whatever I have is for whoever needs it',
                effects: [
                  { type: 'flag', flag: 'bohr.refuge', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                ],
              },
              {
                id: 'guardWork',
                label: 'Guard the work — physics cannot become a bureau',
                effects: [
                  { type: 'flag', flag: 'bohr.guarded', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -1 },
                  { type: 'resources', effects: { theory: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The dismissal of Jewish and dissident academics from German universities began in 1933 and immediately generated appeals to scientists abroad. The dialogue and the choice are dramatized.',
      },
    ],
  },
  {
    id: 'bohr-card-refuge',
    characterId: 'bohr',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: instituteSources,
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    replacesContextCardId: 'bohr-card-1933-refuge',
    variants: [
      {
        id: 'institute',
        conditions: [
          { type: 'yearAtLeast', year: 1934 },
          { type: 'yearAtMost', year: 1939 },
          { type: 'locationIs', locationId: 'copenhagen' },
          { type: 'projectCompleted', projectId: 'bohr-founding-institute' },
        ],
        title: 'A Bed, a Desk, a Post Somewhere Else',
        locationLabel: 'Copenhagen',
        yearLabel: '1933–1938',
        image: {
          setting: 'an institute office turned into a placement bureau, with card files and timetables, mid-1930s',
          year: 1936,
          characters: ['bohr'],
          mood: 'urgent, practical, unglamorous',
          details: ['a card file of names', 'railway and steamship timetables', 'a typewriter with a half-typed testimonial', 'a coat on a visitor’s chair', 'a bank draft book'],
          alt: 'A card file of names and steamship timetables on a desk beside a half-typed testimonial.',
        },
        pages: [
          {
            id: 'bureau',
            narration:
              'Half the institute’s correspondence is now about visas. There is a card file with a name on each card and, underneath, the things that decide a life: languages, dependants, whether anyone in Manchester or Bombay or Ohio owes him a favour.',
          },
          {
            id: 'work',
            narration:
              'He writes testimonials in the evenings, one after another, each one honest and each one shaped like a key. He is not good at flattery, so he does the harder thing and is specific.',
            speaker: 'NIELS',
            dialogue: 'I cannot say he is the finest theorist in Europe, because he is not, and they would smell it. I shall say what he can actually do, and that we will pay his passage.',
          },
          {
            id: 'decide',
            narration:
              'The fund was raised for apparatus. It is going instead on passages and first months’ rent, and there is a limit to it that arrives sooner every quarter.',
            choices: [
              {
                id: 'spendItAll',
                label: 'Spend it down to nothing; apparatus can wait',
                effects: [
                  { type: 'flag', flag: 'bohr.spentFund', value: true },
                  { type: 'resources', effects: { funds: -1, network: 2, standing: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
              {
                id: 'keepAWorkingCore',
                label: 'Hold back enough to keep the physics alive',
                effects: [
                  { type: 'flag', flag: 'bohr.keptCore', value: true },
                  { type: 'resources', effects: { theory: 1, network: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'bohr-card-1933-refuge' }],
        historicalNote:
          'Bohr’s institute and its associated fund helped dismissed scientists obtain posts and passage abroad through the 1930s. The card file, dialogue and the choice are dramatized.',
      },
      {
        id: 'copenhagen',
        conditions: [
          { type: 'yearAtLeast', year: 1934 },
          { type: 'yearAtMost', year: 1939 },
          { type: 'locationIs', locationId: 'copenhagen' },
        ],
        title: 'The List on the Hall Table',
        locationLabel: 'Copenhagen',
        yearLabel: '1933–1938',
        image: {
          setting: 'a domestic hall table used as a filing system, letters and timetables stacked by country, mid-1930s',
          year: 1936,
          characters: ['bohr'],
          mood: 'domestic, relentless, practical',
          details: ['letters stacked by country on a hall table', 'a steamship timetable', 'a pencilled list gone soft at the folds', 'a spare room key', 'a coat on the newel post'],
          alt: 'Letters stacked by country on a hall table beside a steamship timetable and a folded list.',
        },
        pages: [
          {
            id: 'hall',
            narration:
              'The hall table has become a filing system: letters in piles by country, a steamship timetable underneath, and a list in pencil that has gone soft at the folds from being unfolded so often.',
          },
          {
            id: 'evenings',
            narration:
              'The evenings go on testimonials. He is no good at flattery, so he does the harder thing and is exact — languages, dependants, what the man can actually do at a blackboard on a Tuesday — because exactness is what a consulate believes.',
            speaker: 'NIELS',
            dialogue: 'I shall not say he is the finest theorist in Europe. He is not, and they would smell it. I shall say what he can do, and that we will pay his passage, and that there is a bed here until he is settled.',
          },
          {
            id: 'decide',
            narration:
              'Margrethe has made the spare room up twice this month for men she has never met. Money that was put by for apparatus is going on passages, and there is a bottom to it that comes nearer every quarter.',
            choices: [
              {
                id: 'spendItAll',
                label: 'Spend it down to nothing; apparatus can wait',
                effects: [
                  { type: 'flag', flag: 'bohr.spentFund', value: true },
                  { type: 'resources', effects: { funds: -1, network: 2, standing: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
              {
                id: 'keepAWorkingCore',
                label: 'Hold back enough to keep the physics alive',
                effects: [
                  { type: 'flag', flag: 'bohr.keptCore', value: true },
                  { type: 'resources', effects: { theory: 1, network: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'bohr-card-1933-refuge' }],
        historicalNote:
          'Bohr wrote a great many testimonials and placement letters for dismissed scientists through the 1930s and helped fund their passage. The hall table, the dialogue and the choice are dramatized.',
      },
      {
        id: 'anywhere',
        conditions: [
          { type: 'yearAtLeast', year: 1934 },
          { type: 'yearAtMost', year: 1940 },
        ],
        title: 'The Letters Find Him Anyway',
        yearLabel: '1933–1938',
        image: {
          setting: 'a desk far from home covered in forwarded letters and steamship timetables, mid-1930s',
          year: 1936,
          characters: ['bohr'],
          mood: 'burdened, resolute',
          details: ['forwarded envelopes with re-addressed fronts', 'a steamship timetable', 'a fountain pen out of ink', 'a list of names in pencil', 'an unfamiliar window'],
          alt: 'Forwarded envelopes with re-addressed fronts stacked beside a steamship timetable.',
        },
        pages: [
          {
            id: 'forwarded',
            narration:
              'The letters are re-addressed twice, in three different hands, and reach him anyway. Whoever is writing them has run out of names to try, and his is a signature that might still be worth something to a consulate.',
          },
          {
            id: 'testimonials',
            narration:
              'So the evenings go on testimonials, written at a desk in a rented room with a window on somebody else’s street. He is no good at flattery, so he does the harder thing and is exact about what each man can do.',
            speaker: 'NIELS',
            dialogue: 'I have no post to offer him and nowhere to put him. I have a name and a pen, and I am told those are still worth a visa in one or two countries.',
          },
          {
            id: 'limit',
            narration:
              'Some of the letters are answered. Some are answered too late. He keeps the list in pencil so that names can be crossed off, and he does not throw the list away.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1933-refuge' },
          { type: 'resources', effects: { network: 1, funds: -1 } },
        ],
        historicalNote:
          'Appeals from dismissed scientists reached Bohr wherever he was, and he wrote a great many testimonials and placement letters through the 1930s. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-personal-loss',
    characterId: 'bohr',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 89 },
    once: true,
    variants: [
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1934 },
          { type: 'yearAtMost', year: 1938 },
        ],
        title: 'The Sound of the House Afterwards',
        yearLabel: '1934',
        image: {
          setting: 'an empty family room with a window on grey water, a chair turned away, 1934',
          year: 1934,
          characters: ['bohr'],
          mood: 'grief, restraint, stillness',
          details: ['a chair turned toward the window', 'grey water beyond the glass', 'an unlit lamp', 'a folded blanket', 'a clock nobody has wound'],
          alt: 'A chair turned toward a window looking out on grey water in an empty room.',
        },
        pages: [
          {
            id: 'sea',
            narration:
              'There was a boat, and weather, and the sea, and his eldest boy is not coming back from it. That is the whole of what can be said, and he will say no more than that for the rest of his life.',
          },
          {
            id: 'house',
            narration:
              'The house is very quiet. Margrethe winds the clock because somebody has to. He goes to his desk each morning because the alternative is not going, and stands in front of blackboards without seeing them.',
          },
          {
            id: 'return',
            narration:
              'What comes back first is other people’s work. A young man knocks with a wrong idea, and out of habit he begins to explain, gently, why it is wrong — and hears his own voice working again, from a long way off.',
          },
        ],
        effects: [
          { type: 'resources', effects: { wellbeing: -2 } },
          { type: 'flag', flag: 'bohr.loss', value: true },
        ],
        historicalNote:
          'Bohr’s eldest son died in a boating accident in 1934. The account here is deliberately restrained and follows only what the record supports; the scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-invitation',
    characterId: 'bohr',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds: instituteSources,
    trigger: { event: 'afterAction', priority: 84 },
    once: true,
    variants: [
      {
        id: 'open-house',
        conditions: [
          { type: 'yearAtLeast', year: 1935 },
          { type: 'yearAtMost', year: 1940 },
          { type: 'projectCompleted', projectId: 'bohr-founding-institute' },
        ],
        title: 'Come to Copenhagen; We Will Find the Fare',
        yearLabel: 'The Late Thirties',
        image: {
          setting: 'an institute writing room with a half-written invitation and a ledger of travel costs, late 1930s',
          year: 1937,
          characters: ['bohr'],
          mood: 'generous, calculating, warm',
          details: ['a half-written invitation', 'a ledger open at travel expenses', 'a railway fare table', 'a spare key on the desk', 'a guest bed made up in the next room'],
          alt: 'A half-written invitation beside an open ledger of travel expenses and a spare key.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'The ledger is open at the column he likes least and uses most: travel. A fare from Zürich, a fare from Göttingen, a fare from further than that. Against each one he writes the same word, which is yes.',
          },
          {
            id: 'letter',
            narration:
              'The invitation goes out in his own hand, hedged and repetitive and entirely unambiguous underneath. There is a room. There is a bed. The fare is not your problem.',
            speaker: 'NIELS',
            dialogue: 'Do not thank me for the fare. A physicist who cannot afford the journey is a conversation the rest of us do not get to have — so in fact you are doing me the favour.',
          },
          {
            id: 'arrive',
            narration:
              'They arrive by night trains with one suitcase and stand blinking in the hall while somebody finds a key. Within a week they are shouting at the corridor blackboard like everyone else, which is the entire point.',
            choices: [
              {
                id: 'sendLetter',
                label: 'Send for whoever the work needs, and worry about the money after',
                effects: [
                  { type: 'flag', flag: 'bohr.openDoor', value: true },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                ],
              },
              {
                id: 'raiseMoney',
                label: 'Go and raise the money first, so the door can stay open longer',
                effects: [
                  { type: 'flag', flag: 'bohr.openDoor', value: true },
                  { type: 'resources', effects: { funds: 1, network: 1, wellbeing: -1 } },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr routinely brought foreign physicists to Copenhagen at the institute’s expense and used its funds for fares and stipends. The particular letter and the choice are dramatized.',
      },
      {
        id: 'no-house',
        conditions: [
          { type: 'yearAtLeast', year: 1936 },
          { type: 'yearAtMost', year: 1940 },
        ],
        title: 'Somebody Else’s Laboratory, His Money',
        yearLabel: 'The Late Thirties',
        image: {
          setting: 'a station buffet table at night with a ticket, an envelope of notes and a letter of introduction, late 1930s',
          year: 1937,
          characters: ['bohr'],
          mood: 'brisk, tender, conspiratorial',
          details: ['a third-class ticket', 'an envelope of banknotes', 'a sealed letter of introduction', 'two cups of coffee', 'a departures clock'],
          alt: 'A third-class ticket and a sealed letter of introduction on a station buffet table at night.',
        },
        pages: [
          {
            id: 'buffet',
            narration:
              'They meet in a station buffet because it is the one room in the city where two men talking quietly is nobody’s business. On the table: a ticket, a sealed letter to a director in another country, and an envelope that is not discussed.',
          },
          {
            id: 'refuse',
            narration:
              'The young man tries to refuse the envelope, twice, and gets nowhere, because he is arguing with somebody who has spent thirty years not being finished with a thing.',
            speaker: 'NIELS',
            dialogue: 'It is not a gift, it is a fare. And do not thank me for it — a physicist who cannot afford the journey is a conversation the rest of us never get to have, so you are doing me the favour.',
          },
          {
            id: 'clock',
            narration:
              'The departures clock turns over. He walks home along the water working out who is next on the list and what the fare to Manchester costs this year, and he does not, on the whole, mind that the laboratory at the other end will be somebody else’s.',
            choices: [
              {
                id: 'sendLetter',
                label: 'Keep sending them on, and worry about the money after',
                effects: [
                  { type: 'flag', flag: 'bohr.openDoor', value: true },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                ],
              },
              {
                id: 'raiseMoney',
                label: 'Go and raise the money first, so this can go on longer',
                effects: [
                  { type: 'flag', flag: 'bohr.openDoor', value: true },
                  { type: 'resources', effects: { funds: 1, network: 1, wellbeing: -1 } },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr placed displaced and impecunious physicists in other people’s laboratories and helped fund their travel through the 1930s. This variant follows a course in which he had no institute of his own; the station meeting is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-project-debates',
    characterId: 'bohr',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: ['bohr', 'bohrInstitute', 'einstein'],
    trigger: { event: 'projectCompleted', projectId: 'bohr-einstein-debates', priority: 84 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Opposites Are Complementary',
        yearLabel: '1927–1935',
        image: {
          setting: 'a conference room after hours with a napkin sketch of a box, a clock and a spring, late 1920s',
          year: 1930,
          characters: ['bohr'],
          mood: 'sleepless, exhilarated, courteous',
          details: ['a napkin sketch of a box with a shutter', 'a congress programme', 'two cold coffee cups', 'a hotel notepad', 'grey morning at the window'],
          alt: 'A napkin sketched with a box, a shutter and a spring, beside a congress programme.',
        },
        pages: [
          {
            id: 'device',
            narration:
              'The objection arrives at breakfast in the form of a box with a shutter and a clock and a spring, built out of pure thought to catch the new physics telling a lie. It is beautiful. It takes all night to answer.',
          },
          {
            id: 'answer',
            narration:
              'The answer, when it comes at four in the morning, uses his opponent’s own gravity against him — and behind the answer is the thing he has been circling since 1913: that a wave account and a particle account are both required, both complete, and can never be used in the same breath.',
            speaker: 'NIELS',
            dialogue: 'You want one picture that says everything at once. There is no such picture. There are two, and they exclude each other, and together — only together — they are the whole of it.',
          },
          {
            id: 'friendship',
            narration:
              'They argue like this for thirty years and never once fall out. He will keep every one of the letters, and long after the other man is dead he will still be sketching that box on a blackboard, answering it again.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 2, tension: 1, flag: 'quantum-debate' },
          { type: 'resources', effects: { standing: 2, theory: 1 } },
          { type: 'flag', flag: 'bohr.complementarity', value: true },
        ],
        historicalNote:
          'Bohr and Einstein’s exchanges at the Solvay congresses from 1927, and Bohr’s principle of complementarity, are documented; their mutual respect lasted for life. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-card-occupation',
    characterId: 'bohr',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: warSources,
    trigger: { event: 'afterAction', priority: 97 },
    once: true,
    replacesContextCardId: 'bohr-card-1940-occupation',
    variants: [
      {
        id: 'copenhagen-institute',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1942 },
          { type: 'locationIs', locationId: 'copenhagen' },
          { type: 'projectCompleted', projectId: 'bohr-founding-institute' },
        ],
        title: 'April, and the Aeroplanes Are Low',
        locationLabel: 'Copenhagen',
        yearLabel: '1940',
        image: {
          setting: 'a Copenhagen street at dawn with leaflets on wet paving and shuttered shops, April 1940',
          year: 1940,
          characters: ['bohr'],
          mood: 'shock, restraint, cold clarity',
          details: ['leaflets scattered on wet paving', 'shuttered shopfronts', 'a bicycle left against a wall', 'an unread morning paper', 'a low grey sky'],
          alt: 'Leaflets scattered across wet paving in an empty street at dawn, shops shuttered.',
        },
        pages: [
          {
            id: 'morning',
            narration:
              'It takes a morning. There are leaflets on the wet paving in bad Danish, and by the time the milk has been delivered the country belongs to somebody else. The trams run. That is somehow the worst part: the trams run.',
          },
          {
            id: 'institute',
            narration:
              'He goes to the institute because the alternative is not going. The corridor blackboard still has last night’s calculation on it and nobody has rubbed it out, and for one moment that is the only thing in Denmark that has not changed.',
            speaker: 'NIELS',
            dialogue: 'We will go on working, and we will go on being polite, and we will not sign anything. Those three things together are the whole of our policy, and they will have to do.',
          },
          {
            id: 'mother',
            narration:
              'He does not talk about his mother’s family, or about the lists that such governments keep, or about what a name can be made to mean. He keeps the door open, and keeps working, and the arithmetic of it sits at the back of every day.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1940-occupation' },
          { type: 'resources', effects: { exposure: 2, wellbeing: -1 } },
          { type: 'flag', flag: 'bohr.occupied', value: true },
          { type: 'flag', flag: 'bohr.underOccupation', value: true },
        ],
        historicalNote:
          'Germany occupied Denmark in April 1940. Bohr, whose mother came from a Jewish family, kept his institute working under occupation for three increasingly dangerous years. Dialogue is dramatized.',
      },
      {
        id: 'copenhagen',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1942 },
          { type: 'locationIs', locationId: 'copenhagen' },
        ],
        title: 'April, and the Trams Still Run',
        locationLabel: 'Copenhagen',
        yearLabel: '1940',
        image: {
          setting: 'a Copenhagen street at dawn with leaflets on wet paving and shuttered shops, April 1940',
          year: 1940,
          characters: ['bohr'],
          mood: 'shock, restraint, cold clarity',
          details: ['leaflets scattered on wet paving', 'shuttered shopfronts', 'a bicycle left against a wall', 'an unread morning paper', 'a low grey sky'],
          alt: 'Leaflets scattered across wet paving in an empty street at dawn, shops shuttered.',
        },
        pages: [
          {
            id: 'morning',
            narration:
              'It takes a morning. There are leaflets on the wet paving in bad Danish, and by the time the milk has been delivered the country belongs to somebody else. The trams run. That is somehow the worst part: the trams run.',
          },
          {
            id: 'work',
            narration:
              'He goes out to work anyway, because the alternative is not going. Last night’s calculation is still on the blackboard where he left it, and for one moment that is the only thing in Denmark that has not changed.',
            speaker: 'NIELS',
            dialogue: 'We will go on working, and we will go on being polite, and we will not sign anything. Those three things together are the whole of our policy, and they will have to do.',
          },
          {
            id: 'mother',
            narration:
              'He does not talk about his mother’s family, or about the lists that such governments keep, or about what a name can be made to mean. He keeps working, and the arithmetic of it sits at the back of every day.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1940-occupation' },
          { type: 'resources', effects: { exposure: 2, wellbeing: -1 } },
          { type: 'flag', flag: 'bohr.occupied', value: true },
          { type: 'flag', flag: 'bohr.underOccupation', value: true },
        ],
        historicalNote:
          'Germany occupied Denmark in April 1940. Bohr, whose mother came from a Jewish family, continued working at the institute under occupation for three increasingly dangerous years. Dialogue is dramatized.',
      },
      {
        id: 'away',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1942 },
        ],
        title: 'News From a Country That Was There Yesterday',
        yearLabel: '1940',
        image: {
          setting: 'a foreign reading room with a newspaper rack and a wall map, April 1940',
          year: 1940,
          characters: ['bohr'],
          mood: 'helpless distance, dread',
          details: ['a newspaper on a wooden rack', 'a wall map with pins', 'an unsent telegram form', 'a coat over a chair', 'unfamiliar light'],
          alt: 'A newspaper on a wooden rack beneath a pinned wall map in a reading room.',
        },
        pages: [
          {
            id: 'paper',
            narration:
              'The paper is a day old and the news in it is four lines long. It takes him a moment to understand that the four lines are about his own street, his own harbour, the tram line he has ridden since he was a boy.',
          },
          {
            id: 'cable',
            narration:
              'He writes out a telegram and does not send it, because there is nothing he can say that a censor would pass and nothing worth saying that a censor would not read.',
          },
          {
            id: 'weight',
            narration:
              'Everything he built is on the other side of that news. So is his wife’s kitchen, and his brother, and a corridor blackboard with somebody’s calculation still on it. He goes on working, badly, for a fortnight.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1940-occupation' },
          { type: 'resources', effects: { exposure: 1, wellbeing: -1 } },
          { type: 'flag', flag: 'bohr.occupied', value: true },
        ],
        historicalNote:
          'Denmark was occupied in April 1940. This variant follows a course in which Bohr was abroad when it happened. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-encounter-heisenberg',
    characterId: 'bohr',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: warSources,
    trigger: { event: 'afterAction', priority: 91 },
    once: true,
    variants: [
      {
        id: 'copenhagen',
        conditions: [
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1943 },
          { type: 'locationIs', locationId: 'copenhagen' },
        ],
        title: 'A Walk That Ends Early',
        locationLabel: 'Copenhagen',
        yearLabel: '1941',
        image: {
          setting: 'a dark residential street under blackout in autumn, two hats and long shadows, 1941',
          year: 1941,
          characters: ['bohr'],
          mood: 'guarded, chilled, ruinous',
          details: ['blacked-out windows', 'wet leaves underfoot', 'a shuttered street lamp', 'two hats and long coats', 'a garden gate ajar'],
          alt: 'A dark residential street under blackout with wet leaves and a shuttered lamp.',
        },
        pages: [
          {
            id: 'visit',
            narration:
              'The visitor comes in autumn, and the visit is official enough to be dangerous for both of them. Fifteen years ago this man argued with him until three in the morning and then slept on his sofa.',
          },
          {
            id: 'walk',
            narration:
              'They go out to walk, because a house has walls and walls have been known to listen. The conversation lasts a few minutes and afterwards neither of them will ever agree about what was said in it.',
            speaker: 'HEISENBERG',
            dialogue: 'I only wanted to ask you — as a physicist — whether a man in my position has the right to work on such a thing at all.',
          },
          {
            id: 'end',
            narration:
              'He hears the question and hears something under it that stops him where he stands. He says very little. He turns back toward the house, and the friendship of twenty years does not survive the walk.',
            choices: [
              {
                id: 'pressHim',
                label: 'Ask him outright what his people are building',
                effects: [
                  { type: 'flag', flag: 'bohr.askedHim', value: true },
                  { type: 'resources', effects: { exposure: 1, theory: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                ],
              },
              {
                id: 'endIt',
                label: 'Say nothing, and end the walk',
                effects: [
                  { type: 'flag', flag: 'bohr.saidNothing', value: true },
                  { type: 'resources', effects: { wellbeing: -1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Heisenberg visited Bohr in occupied Copenhagen in September 1941; the two spoke privately, the conversation went badly, and their accounts of it never agreed. The dialogue is dramatized and the historical content of the exchange remains genuinely disputed.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1943 },
        ],
        title: 'The Visit That Does Not Happen',
        yearLabel: '1941',
        image: {
          setting: 'a desk with a returned letter marked undeliverable and a wartime censor’s stamp, 1941',
          year: 1941,
          characters: ['bohr'],
          mood: 'suspended, uneasy',
          details: ['a returned envelope', 'a censor’s stamp', 'an old photograph of a summer walking party', 'a pipe unlit', 'a shaded lamp'],
          alt: 'A returned envelope bearing a censor’s stamp beside an old photograph of a walking party.',
        },
        pages: [
          {
            id: 'returned',
            narration:
              'The letter comes back with a stamp on it. Somewhere on the other side of the war a man he taught is working on something, and there is now no road, no post and no walk on which to ask him what.',
          },
          {
            id: 'photograph',
            narration:
              'In the drawer there is a photograph of a walking party from a summer school years ago, twelve young men squinting into the sun, and he can no longer say with confidence what any of them are doing now.',
          },
        ],
        historicalNote:
          'Wartime cut Bohr off from his former students in Germany. This variant follows a course in which the 1941 meeting did not take place. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-project-fission',
    characterId: 'bohr',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: warSources,
    trigger: { event: 'projectCompleted', projectId: 'bohr-fission-theory', priority: 88 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'A Drop of Water That Splits',
        locationLabel: 'Princeton',
        yearLabel: '1939',
        image: {
          setting: 'a university office with two chairs, a blackboard of deforming drop shapes, winter 1939',
          year: 1939,
          characters: ['bohr'],
          mood: 'intense, collaborative, sobering',
          details: ['chalk drawings of a deforming drop', 'two chairs facing the board', 'a stack of isotope tables', 'snow on the window ledge', 'a cold radiator'],
          alt: 'A blackboard covered with chalk drawings of a liquid drop stretching and splitting in two.',
        },
        pages: [
          {
            id: 'drop',
            narration:
              'The picture that works is absurdly homely: the nucleus as a drop of liquid, held by surface tension, wobbling. Push it hard enough and it stretches, necks, and comes apart in two — and he has spent his life since he was twenty-one thinking about the surface tension of water.',
          },
          {
            id: 'isotope',
            narration:
              'Working it through with a younger colleague at the blackboard, the arithmetic gives up a fact that will not stay in a laboratory: it is the rare isotope, the light one, that splits with slow neutrons. Separate it and you have something. Do not, and you have a curiosity.',
            speaker: 'NIELS',
            dialogue: 'It cannot be done. To separate that isotope one would have to turn an entire country into a factory — which is, I am aware, not quite the same thing as saying it cannot be done.',
          },
          {
            id: 'weight',
            narration:
              'They publish it, in full, in the open, in the last summer before the war. He is right that it would take a country. He is about to find out how quickly a country can be turned into a factory.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
          { type: 'flag', flag: 'bohr.fission', value: true },
        ],
        historicalNote:
          'Bohr and John Wheeler developed the liquid-drop theory of fission at Princeton in 1939, identifying uranium-235 as the isotope fissile with slow neutrons; it was published openly that September. Bohr initially doubted that isotope separation was practicable. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        title: 'The Drop, Worked Out Alone',
        yearLabel: '1939',
        image: {
          setting: 'a study blackboard with drawings of a stretching drop and a page of isotope arithmetic, 1939',
          year: 1939,
          characters: ['bohr'],
          mood: 'absorbed, then very quiet',
          details: ['chalk drawings of a stretching drop', 'a page of isotope arithmetic', 'an offprint from abroad', 'a lamp burning late', 'a shut door'],
          alt: 'Chalk drawings of a stretching liquid drop above a page of isotope arithmetic.',
        },
        pages: [
          {
            id: 'drop',
            narration:
              'The picture that works is absurdly homely: the nucleus as a drop of liquid held by surface tension. Push it hard enough and it stretches, necks and comes apart — and the surface tension of water was the first thing he ever measured properly, at twenty-one, in his father’s laboratory.',
          },
          {
            id: 'isotope',
            narration:
              'The arithmetic then gives up something that will not stay inside a study. It is the rare light isotope that splits under slow neutrons. Separate it and there is a weapon at the end of the road. Fail to, and there is only a very interesting paper.',
          },
          {
            id: 'quiet',
            narration:
              'He sits with the page for a long time before putting the light out. Everything he has believed about publishing openly is about to be asked a question he does not have an answer to.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
          { type: 'flag', flag: 'bohr.fission', value: true },
        ],
        historicalNote:
          'The liquid-drop account of fission and the identification of uranium-235 as the slow-neutron fissile isotope date from 1939. This variant places the work away from Princeton. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-card-escape',
    characterId: 'bohr',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: warSources,
    trigger: { event: 'afterAction', priority: 99 },
    once: true,
    replacesContextCardId: 'bohr-card-1943-escape',
    variants: [
      {
        id: 'from-denmark',
        conditions: [
          { type: 'yearAtLeast', year: 1942 },
          { type: 'yearAtMost', year: 1943 },
          { type: 'locationIs', locationId: 'copenhagen' },
        ],
        title: 'The Boat, and the Water Between',
        locationLabel: 'Copenhagen',
        yearLabel: '1943',
        image: {
          setting: 'a small fishing boat’s mooring at night on a dark strait, autumn 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'grave, hushed, urgent',
          details: ['a coiled mooring rope', 'a shuttered lantern', 'black water', 'a single small suitcase', 'the far shore as a low line of lights'],
          alt: 'A coiled mooring rope and a shuttered lantern beside black water at night.',
        },
        pages: [
          {
            id: 'warning',
            narration:
              'The warning comes in the ordinary way such warnings come: a friend, in a doorway, quickly, in September. Arrest is a matter of days. There is no version of staying that is brave rather than simply fatal.',
          },
          {
            id: 'leaving',
            narration:
              'They take almost nothing. Margrethe is beside him, and there are others going the same night by the same route, and every one of them has left a house standing with the lamps off and the door locked as though for a weekend.',
            speaker: 'MARGRETHE',
            dialogue: 'Leave the papers. They are only papers, and you will remember all of it anyway, and you always do.',
          },
          {
            id: 'water',
            narration:
              'It is a short crossing on a dark strait in a small boat, and it is not dramatic, and there is nothing to do in it but sit low and be quiet. On the far side there is Sweden, and lights left on, and a country that is not at war with him.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1943-escape' },
          { type: 'resources', effects: { funds: -1, wellbeing: -1, exposure: 1 } },
          { type: 'flag', flag: 'bohr.escaped', value: true },
          { type: 'flag', flag: 'bohr.crossedByBoat', value: true },
        ],
        historicalNote:
          'Warned of imminent arrest in late September 1943, Bohr and his wife crossed by boat from occupied Denmark to Sweden, as thousands of Danish Jews did in the same weeks; he continued from there to Britain and the United States. The dialogue is dramatized and no more detail is given than the record supports.',
      },
      {
        id: 'left-denmark',
        conditions: [
          { type: 'yearAtLeast', year: 1942 },
          { type: 'yearAtMost', year: 1943 },
          { type: 'narrativeFlag', flag: 'bohr.underOccupation' },
          { not: { type: 'locationIs', locationId: 'copenhagen' } },
        ],
        title: 'The Door Locked as Though for a Weekend',
        yearLabel: '1943',
        image: {
          setting: 'a shut-up apartment at dawn, papers burned in the stove, a single case in the hall, 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'controlled, final, unsentimental',
          details: ['a stove door standing open on ash', 'one small case in the hall', 'a key on a hall table', 'a blackboard wiped clean', 'grey light through half-drawn curtains'],
          alt: 'A single small case in a hallway beside a key on a table and a stove door open on ash.',
        },
        pages: [
          {
            id: 'permit',
            narration:
              'It is not a boat and it is not a night crossing. It is a stamp on a permit, obtained through the sort of quiet arrangement one does not ask questions about, and a departure on an ordinary morning with an ordinary case.',
          },
          {
            id: 'board',
            narration:
              'He wipes the blackboard himself, which nobody has ever seen him do, because whatever is on it should not be read by the next person through that door. Then he stands for a moment in a corridor that has gone very quiet.',
            speaker: 'MARGRETHE',
            dialogue: 'Lock it the way we lock it in August. If we make it look like leaving, somebody will notice that we have left.',
          },
          {
            id: 'go',
            narration:
              'So the door is locked as though for a weekend, and the key goes on the hall table for a neighbour, and they walk out into a street where the trams are running. Behind them a country is beginning to move people across water at night, and he will spend the rest of the war being told about it second hand.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1943-escape' },
          { type: 'resources', effects: { funds: -1, wellbeing: -1, exposure: 1 } },
          { type: 'flag', flag: 'bohr.escaped', value: true },
          { type: 'flag', flag: 'bohr.gotOut', value: true },
        ],
        historicalNote:
          'Bohr left occupied Denmark in 1943 ahead of arrest, in his case by boat to Sweden. This variant follows a course in which he got out by another road; the departure is dramatized and no more detail is given than the record supports.',
      },
      {
        id: 'already-away',
        conditions: [
          { type: 'yearAtLeast', year: 1942 },
          { type: 'yearAtMost', year: 1943 },
        ],
        title: 'The Crossing He Does Not Have to Make',
        yearLabel: '1943',
        image: {
          setting: 'a harbour office window at night looking east across water, autumn 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'relief and guilt together',
          details: ['a window on black water', 'a list of names in pencil', 'a cold cup of coffee', 'a shipping schedule', 'a lamp turned low'],
          alt: 'A dark window over water beside a pencilled list of names and a cold cup.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The news arrives second hand and days late: they are taking people in Denmark now, and boats are going across the strait at night, small ones, as many as can be found.',
          },
          {
            id: 'list',
            narration:
              'He knows names on both sides of that water. He spends the night at a table with a pencil, writing down who is likely to be where, which is a useless thing to do and the only thing available.',
          },
          {
            id: 'guilt',
            narration:
              'He was not in the doorway when the warning came. Somebody else’s boat carried the people who would have been in his. He does not speak about this afterwards, and he never quite puts it down.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1943-escape' },
          { type: 'resources', effects: { wellbeing: -1 } },
          { type: 'flag', flag: 'bohr.escaped', value: true },
        ],
        historicalNote:
          'Bohr escaped occupied Denmark by boat in 1943. This variant follows a course in which he was already outside the country when the arrests began. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-crisis-closing',
    characterId: 'bohr',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds: warSources,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'said-nothing',
        conditions: [{ type: 'narrativeFlag', flag: 'bohr.saidNothing' }],
        title: 'What Was Not Said on the Walk',
        yearLabel: '1943',
        image: {
          setting: 'a temporary room in a neutral city with an unpacked case and a dark window, 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'displaced, sleepless',
          details: ['an unopened suitcase', 'borrowed bedding', 'a dark window', 'a foreign newspaper', 'shoes still on'],
          alt: 'An unopened suitcase beside borrowed bedding in a temporary room at night.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'A borrowed room in a country that is not at war. The case is not unpacked because unpacking would mean something. He sits on the edge of the bed with his shoes still on.',
          },
          {
            id: 'walk',
            narration:
              'He is thinking about a walk in the dark two years ago, and a question he did not answer, and how much of the world now turns on the difference between what a man meant and what a man said.',
          },
        ],
        historicalNote:
          'Bohr reached Sweden in 1943 and went on to Britain and the United States. His unresolved 1941 conversation with Heisenberg troubled him for the rest of his life. The scene is dramatized.',
      },
      {
        id: 'escaped',
        conditions: [
          {
            any: [
              { type: 'locationIs', locationId: 'stockholm' },
              { type: 'narrativeFlag', flag: 'bohr.crossedByBoat' },
            ],
          },
        ],
        title: 'Out, With Nothing',
        yearLabel: '1943',
        image: {
          setting: 'a neutral city street in autumn with lit windows and no blackout, 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'strange relief, exhaustion',
          details: ['unshuttered lit windows', 'a borrowed overcoat', 'a tram running normally', 'a bakery open at dusk', 'wet leaves'],
          alt: 'A street of lit, unshuttered windows in the evening with a tram passing.',
        },
        pages: [
          {
            id: 'lights',
            narration:
              'The windows are lit. That is the thing that undoes him — not the crossing, not the days before it, but a street where nobody has covered the glass and a baker who is open at dusk.',
          },
          {
            id: 'work',
            narration:
              'Within a week he is arguing with officials about other people’s safety, because it is the only work available and because sitting still has never once helped him. The physics is waiting on the other side of an ocean, and it has become something he is afraid of.',
          },
        ],
        historicalNote:
          'Bohr reached neutral Sweden in 1943, worked there on behalf of refugees, and then travelled on to Britain. The scene is dramatized.',
      },
      {
        id: 'got-out',
        conditions: [{ type: 'narrativeFlag', flag: 'bohr.gotOut' }],
        title: 'A Weekend That Does Not End',
        yearLabel: '1943',
        image: {
          setting: 'a boarding-house room in a foreign city, one case still strapped shut, 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'unlanded, alert, quietly furious',
          details: ['a strapped case', 'a foreign newspaper', 'a coat still buttoned', 'an unfamiliar door key', 'a window on a street he cannot name'],
          alt: 'A strapped case and a buttoned coat in a bare boarding-house room.',
        },
        pages: [
          {
            id: 'case',
            narration:
              'The case has not been unstrapped. He has been telling himself for a fortnight that this is a weekend, that the key is on a hall table a thousand miles away and a neighbour is watering something.',
          },
          {
            id: 'news',
            narration:
              'The news comes through anyway, in a language he reads slowly: boats at night, a whole population moved across a narrow strait by fishermen. He was already gone by then. He is glad, and being glad is the part he cannot get comfortable with.',
          },
        ],
        historicalNote:
          'Bohr left occupied Denmark in 1943, in his case by boat; the mass rescue of Danish Jews across the Øresund took place in the same weeks. This variant follows a course in which he got out by another route. The scene is dramatized.',
      },
      {
        id: 'abroad',
        conditions: [{ type: 'narrativeFlag', flag: 'bohr.escaped' }],
        title: 'Safe, and No Use to Anyone There',
        yearLabel: '1943',
        image: {
          setting: 'a foreign office at night with a wall map of Scandinavia and a list of names, 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'restless, guilty, useful in the wrong place',
          details: ['a wall map of Scandinavia', 'a pencilled list of names', 'a telephone', 'a cold coffee pot', 'blackout at the window'],
          alt: 'A wall map of Scandinavia above a pencilled list of names in a night office.',
        },
        pages: [
          {
            id: 'map',
            narration:
              'He follows it on a map, which is the coward’s instrument and the only one he has. Boats at night across a narrow strait, a country emptying itself of the people it was trying to keep, and him on the safe side of all of it with a telephone.',
          },
          {
            id: 'use',
            narration:
              'So he spends the autumn making himself a nuisance to officials on behalf of names he can no longer place a face to. The physics is waiting on a desk somewhere, and it has become a thing he is afraid of.',
          },
        ],
        historicalNote:
          'Denmark’s Jewish population was largely carried to Sweden by boat in the autumn of 1943. This variant follows a course in which Bohr was already abroad when it happened. The scene is dramatized.',
      },
      {
        id: 'default',
        title: 'The Door Still Open, the Street Still Dark',
        yearLabel: '1943',
        image: {
          setting: 'an institute corridor under blackout with one lamp burning, 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'stubborn, precarious',
          details: ['blackout paper on tall windows', 'one lamp burning', 'a corridor blackboard half rubbed out', 'coats on hooks, fewer than before', 'a bicycle in the hall'],
          alt: 'A blacked-out institute corridor with a single lamp and a half-erased blackboard.',
        },
        pages: [
          {
            id: 'corridor',
            narration:
              'Fewer coats on the hooks each term, and the blackboard rubbed out further back each week. He keeps the lamp burning in the corridor because a dark corridor is a statement and a lit one is a different statement.',
          },
          {
            id: 'hold',
            narration:
              'He has not left, and he has not signed anything, and both of those are getting harder to keep doing at the same time. Somewhere ahead there is a night with a boat in it, and he does not know that yet.',
          },
        ],
        historicalNote:
          'Bohr remained in occupied Copenhagen from 1940 until his escape in 1943, keeping the institute working. This variant follows a course in which the chapter closes before he leaves. The scene is dramatized.',
      },
    ],
  },

  // ───────────────────────────────────────────── legacy
  {
    id: 'bohr-legacy-opening',
    characterId: 'bohr',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds: warSources,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'flight',
        conditions: [
          {
            any: [
              { type: 'locationIs', locationId: 'stockholm' },
              { type: 'locationIs', locationId: 'copenhagen' },
            ],
          },
        ],
        title: 'The Bomb Bay',
        yearLabel: '1943',
        image: {
          setting: 'a cramped unheated aircraft compartment with a flying helmet and oxygen line, 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'airless, resolute, disorienting',
          details: ['a leather flying helmet too small', 'a coiled oxygen line', 'a riveted bulkhead', 'a parachute pack', 'frost on metal'],
          alt: 'A leather flying helmet and a coiled oxygen line in a cramped riveted aircraft compartment.',
        },
        pages: [
          {
            id: 'flight',
            narration:
              'They fly him out over occupied water in the bomb bay of a fast unarmed aeroplane, because there is nowhere else in it to put a man. The helmet does not fit his head. He does not hear the instruction to use the oxygen, and at altitude he stops being conscious of anything at all.',
          },
          {
            id: 'landing',
            narration:
              'He comes round on the ground in Scotland, cold through, and is told he has been unconscious for some time. He asks, first, whether the others got in safely, and second, what the news is.',
            speaker: 'AN OFFICER',
            dialogue: 'Professor, you were out for most of the North Sea. Sit down. There are people in London who have been waiting three years to talk to you.',
          },
          {
            id: 'decide',
            narration:
              'The people in London want a physicist. He has come with something else in his coat: a conviction that the thing they are building will be useless as a secret and lethal as one, and that somebody must say so before it exists rather than after.',
            choices: [
              {
                id: 'advise',
                label: 'Be useful to them first; earn the right to be listened to',
                effects: [
                  { type: 'flag', flag: 'bohr.advisor', value: true },
                  { type: 'resources', effects: { standing: 1, network: 1, exposure: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                ],
              },
              {
                id: 'argueOpenness',
                label: 'Make the argument now, to whoever will sit still for it',
                effects: [
                  { type: 'flag', flag: 'bohr.openness', value: true },
                  { type: 'resources', effects: { exposure: 2, standing: -1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr was flown from Sweden to Britain in 1943 in the bomb bay of a Mosquito and lost consciousness in flight because his helmet did not fit over the oxygen equipment. He argued from the outset for postwar international openness about atomic weapons. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Men Who Want a Physicist',
        yearLabel: '1943',
        image: {
          setting: 'a hotel room with a government summons, a packed case and a blacked-out window, 1943',
          year: 1943,
          characters: ['bohr'],
          mood: 'summoned, watchful, decided',
          details: ['a typed official summons', 'a packed case by the door', 'a blacked-out window', 'a coat over a chair', 'a telephone on a side table'],
          alt: 'A typed official summons on a hotel table beside a packed case and a coat.',
        },
        pages: [
          {
            id: 'summons',
            narration:
              'The letter is typed on paper with a crest and says less than nothing. A car will call. There are people who would be glad of an hour of his time on a matter they are not at liberty to describe.',
          },
          {
            id: 'known',
            narration:
              'He knows exactly what the matter is. He worked out the arithmetic himself in 1939 and has been carrying it about like a stone ever since, and now a government has caught up with it and would like to shake his hand.',
            speaker: 'AN OFFICER',
            dialogue: 'You will forgive the vagueness, Professor. I am told you are one of about nine men alive who will not need it explained.',
          },
          {
            id: 'decide',
            narration:
              'They want a physicist. He has come with something else in his coat: a conviction that the thing they are building will be useless as a secret and lethal as one, and that somebody must say so before it exists rather than after.',
            choices: [
              {
                id: 'advise',
                label: 'Be useful to them first; earn the right to be listened to',
                effects: [
                  { type: 'flag', flag: 'bohr.advisor', value: true },
                  { type: 'resources', effects: { standing: 1, network: 1, exposure: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                ],
              },
              {
                id: 'argueOpenness',
                label: 'Make the argument now, to whoever will sit still for it',
                effects: [
                  { type: 'flag', flag: 'bohr.openness', value: true },
                  { type: 'resources', effects: { exposure: 2, standing: -1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bohr was brought into the Allied atomic programme as a consultant in 1943 and argued from the outset for postwar international openness. This variant places him outside Denmark when the approach came. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-personal-homecoming',
    characterId: 'bohr',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds: instituteSources,
    trigger: { event: 'afterAction', priority: 82 },
    once: true,
    variants: [
      {
        id: 'home',
        conditions: [
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1952 },
          { type: 'locationIs', locationId: 'copenhagen' },
          { type: 'projectCompleted', projectId: 'bohr-founding-institute' },
        ],
        title: 'The Building Is Still There',
        locationLabel: 'Copenhagen',
        yearLabel: 'After the War',
        image: {
          setting: 'an institute corridor being reopened, dust sheets coming off equipment, late 1940s',
          year: 1946,
          characters: ['bohr'],
          mood: 'gratitude, sober accounting',
          details: ['dust sheets pulled back', 'a blackboard washed clean', 'a stack of returned journals', 'new young coats on old hooks', 'spring light'],
          alt: 'Dust sheets pulled back from equipment in an institute corridor, blackboard washed clean.',
        },
        pages: [
          {
            id: 'walls',
            narration:
              'The building stood. That is the first surprising thing and for a week it is the only thing he can think about — the plaster, the hooks, the same bad radiator in the same cold room.',
          },
          {
            id: 'names',
            narration:
              'The people are another matter. He goes through the card file from the thirties and finds out, name by name, which ones the world gave back. Some of the cards get a new address. Some do not get anything.',
            speaker: 'NIELS',
            dialogue: 'We will hang the coats up again and we will be loud in the corridor again. It is not disrespectful. It is the only monument any of them would have wanted.',
          },
          {
            id: 'young',
            narration:
              'The new ones arrive that autumn, absurdly young, arguing about things he half understands, and the corridor blackboard is covered over twice in a fortnight, and nobody can find the duster.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 2, network: 1 } }],
        historicalNote:
          'Bohr returned to Copenhagen after the war and resumed direction of his institute, which continued as an international centre. Dialogue is dramatized.',
      },
      {
        id: 'away',
        conditions: [
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1954 },
          { type: 'projectCompleted', projectId: 'bohr-founding-institute' },
        ],
        title: 'A Long Way From the Corridor',
        yearLabel: 'After the War',
        image: {
          setting: 'a hotel writing desk abroad with a stack of institute correspondence, late 1940s',
          year: 1948,
          characters: ['bohr'],
          mood: 'displaced, dutiful',
          details: ['hotel notepaper', 'a bundle of forwarded institute letters', 'an unpacked case', 'a lecture invitation', 'a foreign skyline'],
          alt: 'Hotel notepaper and a bundle of forwarded letters on a writing desk abroad.',
        },
        pages: [
          {
            id: 'forwarded',
            narration:
              'The institute’s post follows him from city to city and he answers all of it by hand: a boiler, a bursary, a young man from Trieste who wants a bed. He is running a corridor he has not stood in for years.',
          },
          {
            id: 'ache',
            narration:
              'What he misses is not the building. It is the specific noise of four people talking over each other at a blackboard, which cannot be conducted by post and which he has spent his whole life arranging.',
          },
        ],
        effects: [{ type: 'resources', effects: { network: 1, wellbeing: -1 } }],
        historicalNote:
          'Bohr travelled and lectured extensively after the war while continuing to direct his institute. This variant follows a course in which he was largely abroad. The scene is dramatized.',
      },
      {
        id: 'no-house',
        conditions: [
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1954 },
        ],
        title: 'A Guest Room Somewhere, Every Term',
        yearLabel: 'After the War',
        image: {
          setting: 'a visiting scholar’s borrowed office with a term’s worth of luggage labels, late 1940s',
          year: 1948,
          characters: ['bohr'],
          mood: 'rootless, courteous, tired',
          details: ['a borrowed desk', 'old luggage labels on a case', 'a visiting lecture schedule', 'a photograph of a harbour', 'somebody else’s books on the shelf'],
          alt: 'A borrowed desk and a case covered in old luggage labels in a visiting scholar’s office.',
        },
        pages: [
          {
            id: 'borrowed',
            narration:
              'The offices are always somebody else’s. He is welcome everywhere for a term at a time, and everywhere the books on the shelf belong to a man who will want them back in April.',
          },
          {
            id: 'noise',
            narration:
              'What he misses is a particular noise: four people talking over each other at one blackboard, in four accents, at eleven at night. He has spent his whole life trying to arrange that noise and has never had a room of his own to put it in.',
          },
        ],
        effects: [{ type: 'resources', effects: { network: 1, wellbeing: -1 } }],
        historicalNote:
          'This variant follows a course in which Bohr never founded an institute of his own and spent the postwar years as a visitor. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-project-losalamos',
    characterId: 'bohr',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: warSources,
    trigger: { event: 'projectCompleted', projectId: 'bohr-los-alamos-advisory', priority: 86 },
    once: true,
    variants: [
      {
        id: 'on-the-hill',
        conditions: [
          {
            any: [
              { type: 'locationIs', locationId: 'losAlamos' },
              { type: 'locationIs', locationId: 'washingtonDC' },
            ],
          },
        ],
        title: 'The Old Man With Another Name',
        yearLabel: '1944–1945',
        image: {
          setting: 'a wooden hut on a high desert mesa with a stove, a blackboard and identity papers, 1944',
          year: 1944,
          characters: ['bohr'],
          mood: 'sobering, paternal, urgent',
          details: ['a wooden hut and a stove', 'a security badge in another name', 'a blackboard of neutron arithmetic', 'high desert light through a small window', 'a folded memorandum'],
          alt: 'A stove and a blackboard of arithmetic in a wooden hut, a badge lying on the table.',
        },
        pages: [
          {
            id: 'name',
            narration:
              'They give him a false name on a badge and a hut on a mesa seven thousand feet up. He is the oldest man there by twenty years and the only one who has already had to leave a country in the dark, and the young physicists treat him rather like weather.',
          },
          {
            id: 'work',
            narration:
              'He is useful. He asks the question under the question, slowly, twice, until somebody in the room hears what they have been assuming. But the thing he came to say is not about neutrons at all.',
            speaker: 'NIELS',
            dialogue: 'They did not need me to tell them it would work. They needed somebody to say, while there is still time, what to do on the morning after it works — and that, so far, nobody has written down.',
          },
          {
            id: 'memo',
            narration:
              'So he writes memoranda, and gets in front of a President and a Prime Minister, and argues that a weapon kept secret merely tells the other side to build one. One of those meetings goes badly enough that he is watched afterwards. He goes on writing memoranda.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'oppenheimer', familiarity: 1, respect: 1 },
          { type: 'resources', effects: { standing: 1, exposure: 2 } },
          { type: 'flag', flag: 'bohr.advised', value: true },
        ],
        historicalNote:
          'Bohr consulted at Los Alamos under the cover name Nicholas Baker in 1944–45 and pressed Allied leaders, in person and in written memoranda, for postwar international openness and control; his meeting with Churchill went badly. Dialogue is dramatized.',
      },
      {
        id: 'at-a-distance',
        title: 'Consulted, and Kept at Arm’s Length',
        yearLabel: '1944–1945',
        image: {
          setting: 'a plain office with a locked despatch box, a courier’s receipt book and a typed question sheet, 1944',
          year: 1944,
          characters: ['bohr'],
          mood: 'contained, impatient, weighty',
          details: ['a locked despatch box', 'a courier’s receipt book', 'a typed sheet of questions with the nouns removed', 'a blotter', 'a shaded lamp'],
          alt: 'A locked despatch box and a courier’s receipt book beside a typed sheet of questions.',
        },
        pages: [
          {
            id: 'box',
            narration:
              'The questions arrive in a locked box and go back in the same box, and they have had the nouns taken out of them, so that the first job each time is to work out what is actually being asked. He is good at that. It is, in a sense, all he has ever done.',
          },
          {
            id: 'answer',
            narration:
              'He answers them properly and at length, and everything he sends back is correct and none of it is the thing he wants to say. They have made a consultant of him and put four hundred miles between his mouth and the room.',
            speaker: 'NIELS',
            dialogue: 'They did not need me to tell them it would work. They needed somebody to say, while there is still time, what to do on the morning after it works — and that will not fit in a box with a lock on it.',
          },
          {
            id: 'memo',
            narration:
              'So he writes it outside the box instead: memoranda, requests for an hour, a case put in person to a President and a Prime Minister. One of those meetings goes badly enough that he is watched for a while afterwards. He goes on writing memoranda.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'oppenheimer', familiarity: 1, respect: 1 },
          { type: 'resources', effects: { standing: 1, exposure: 2 } },
          { type: 'flag', flag: 'bohr.advised', value: true },
        ],
        historicalNote:
          'Bohr advised the Allied atomic programme and pressed Allied leaders for postwar openness and international control. This variant follows a course in which he consulted at a distance rather than on site. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-personal-elephant',
    characterId: 'bohr',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 76 },
    once: true,
    variants: [
      {
        id: 'honoured',
        conditions: [
          { type: 'yearAtLeast', year: 1947 },
          { type: 'yearAtMost', year: 1955 },
          { type: 'resourceAtLeast', resource: 'standing', value: 4 },
        ],
        title: 'A Coat of Arms for a Man Who Hates Ceremony',
        yearLabel: 'After the War',
        image: {
          setting: 'a design table with a heraldic drawing, a taijitu motif and a lettered motto, late 1940s',
          year: 1947,
          characters: ['bohr'],
          mood: 'wry, deeply serious',
          details: ['a heraldic drawing in progress', 'a black and white circular motif', 'a lettered Latin motto', 'a formal invitation card', 'a pot of ink'],
          alt: 'A heraldic drawing in progress showing a circular black-and-white motif above a lettered motto.',
        },
        pages: [
          {
            id: 'order',
            narration:
              'The country decides to give him its highest order, which involves robes, and a ceremony, and — worst of all — the obligation to design a coat of arms. He treats this as a physics problem, which is to say he takes six months over it.',
          },
          {
            id: 'design',
            narration:
              'What goes in the middle is the old Chinese figure of two halves, each containing the seed of the other, and under it a Latin line that means opposites are complementary.',
            speaker: 'NIELS',
            dialogue: 'They wanted a lion, I think. But a lion says only one thing, and I have spent forty years insisting that no single thing is ever the whole of it.',
          },
          {
            id: 'joke',
            narration:
              'It is the only formal honour he ever seems to enjoy, largely because he has managed to smuggle an argument into it.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 1, wellbeing: 1 } }],
        historicalNote:
          'When Bohr received the Danish Order of the Elephant in 1947 he designed a coat of arms bearing the taijitu and the motto “contraria sunt complementa” — opposites are complementary. Dialogue is dramatized.',
      },
      {
        id: 'unhonoured',
        conditions: [
          { type: 'yearAtLeast', year: 1948 },
          { type: 'yearAtMost', year: 1957 },
        ],
        title: 'Two Halves, Drawn Anyway',
        yearLabel: 'After the War',
        image: {
          setting: 'a private notebook page with a circular two-halved figure sketched in ink, late 1940s',
          year: 1949,
          characters: ['bohr'],
          mood: 'private, meditative',
          details: ['a notebook open at a circular figure', 'a pen laid across it', 'a cold pipe', 'an unopened invitation', 'evening light'],
          alt: 'A notebook page with a circular two-halved figure sketched in ink, a pen across it.',
        },
        pages: [
          {
            id: 'sketch',
            narration:
              'Nobody has asked him to design anything. He draws it anyway, in the back of a notebook, the way other men doodle: a circle in two halves, each carrying a seed of the other.',
          },
          {
            id: 'meaning',
            narration:
              'Underneath he writes the Latin — opposites are complementary — and looks at it for a while, and does not show it to anyone. It is the shortest statement of everything he thinks, and it will not fit in a paper.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote:
          'The taijitu and the motto “contraria sunt complementa” were Bohr’s chosen emblem for complementarity. This variant places the emblem outside any state honour. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-project-openletter',
    characterId: 'bohr',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: warSources,
    trigger: { event: 'projectCompleted', projectId: 'bohr-atoms-for-peace', priority: 84 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'An Open Letter, Because the Private Ones Failed',
        yearLabel: '1950',
        image: {
          setting: 'a desk with a typed open letter, carbon copies and a stack of returned private memoranda, 1950',
          year: 1950,
          characters: ['bohr'],
          mood: 'stubborn, unillusioned, clear',
          details: ['a typed letter with wide margins', 'carbon copies', 'a bundle of old memoranda tied with tape', 'a globe', 'a wastepaper basket'],
          alt: 'A typed open letter and carbon copies beside a taped bundle of older memoranda.',
        },
        pages: [
          {
            id: 'failed',
            narration:
              'The private memoranda are in a bundle on the corner of the desk, tied with tape, six years of them. Every one was read by somebody important and answered by nobody, and the world meanwhile has got exactly the arms race he described in the first one.',
          },
          {
            id: 'open',
            narration:
              'So he stops writing privately. The letter is addressed to the United Nations and to anybody else who can read, and its argument is the one he has been making since the war: secrecy between nations is not safety, it is only the first move of the next war.',
            speaker: 'NIELS',
            dialogue: 'An open world is not a pleasant idea I should like to recommend. It is, so far as I am able to see, the only arrangement under which we survive the thing we have made.',
          },
          {
            id: 'send',
            narration:
              'He is sixty-five, and he has spent his life arguing that no single description is ever complete. This one he sends out whole, with his name on it, and lets it stand.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1, exposure: 1 } },
          { type: 'flag', flag: 'bohr.openWorld', value: true },
        ],
        historicalNote:
          'After his wartime memoranda failed to move Allied leaders, Bohr published an Open Letter to the United Nations in 1950 arguing for an "open world" of free scientific and political exchange as the safeguard against nuclear catastrophe. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-card-openletter',
    characterId: 'bohr',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: warSources,
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    replacesContextCardId: 'bohr-card-1950-openletter',
    variants: [
      {
        id: 'published',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1959 },
          { type: 'projectCompleted', projectId: 'bohr-atoms-for-peace' },
        ],
        title: 'What Comes Back',
        yearLabel: '1950',
        image: {
          setting: 'a study with newspapers folded to short columns and a thin pile of replies, 1950',
          year: 1950,
          characters: ['bohr'],
          mood: 'unsurprised, undeterred',
          details: ['newspapers folded to short columns', 'a thin pile of letters', 'a printed copy of the open letter', 'a cooling coffee pot', 'winter light'],
          alt: 'Newspapers folded to short columns beside a thin pile of replies and a printed pamphlet.',
        },
        pages: [
          {
            id: 'columns',
            narration:
              'The papers give it four inches on an inside page. A government spokesman calls it well-intentioned, which in that language means finished. The replies that do come are mostly from other physicists, and mostly begin by agreeing and end by explaining why nothing can be done.',
          },
          {
            id: 'again',
            narration:
              'He reads them all, answers them all, and starts a new draft the same month. He has been rewriting the same argument since before most of these correspondents were born, and he is not tired of it yet.',
            speaker: 'NIELS',
            dialogue: 'They say it is not practical. Nor was an atom that stays up. One says the true thing, and then one says it again, and one goes on saying it until the room has to answer.',
          },
          {
            id: 'later',
            narration:
              'Seven years later a committee in another country gives him a prize for exactly this, which he accepts politely, and which does not change the four inches on the inside page.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1950-openletter' },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'Bohr’s 1950 Open Letter to the United Nations attracted limited public response at the time; he continued to campaign for openness and received the first Atoms for Peace Award in 1957. Dialogue is dramatized.',
      },
      {
        id: 'undrafted',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1959 },
        ],
        title: 'The Draft in the Drawer',
        yearLabel: 'Around 1950',
        image: {
          setting: 'a desk drawer half open on a folded typescript, 1950',
          year: 1950,
          characters: ['bohr'],
          mood: 'restless, withheld',
          details: ['a half-open drawer', 'a folded typescript', 'a newspaper headline about weapons tests', 'a pen capped', 'evening lamp'],
          alt: 'A half-open desk drawer showing a folded typescript beneath a folded newspaper.',
        },
        pages: [
          {
            id: 'drawer',
            narration:
              'The typescript has been folded and put away three times. Each time the news gives him a fresh reason to take it out, and each time some sensible person explains that the moment is not right, and the drawer closes again.',
          },
          {
            id: 'news',
            narration:
              'The tests continue, in one country and then in another. The argument he has not published gets more obviously correct every year, which is the least useful way for an argument to be correct.',
          },
          {
            id: 'pen',
            narration:
              'He caps the pen and turns off the lamp. Somewhere in him a man who once published three impossible papers at once is watching this and is not impressed.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'bohr-card-1950-openletter' },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Bohr published his Open Letter to the United Nations in 1950. This variant follows a course in which the argument was never made public. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'bohr-legacy-closing',
    characterId: 'bohr',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds: instituteSources,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'argued-early',
        conditions: [{ type: 'narrativeFlag', flag: 'bohr.openness' }],
        title: 'The Man Who Would Not Wait His Turn',
        yearLabel: '1962',
        image: {
          setting: 'a study wall of framed and unframed things, a small blackboard, a bundle of memoranda, 1962',
          year: 1962,
          characters: ['bohr'],
          mood: 'unrepentant, tired, clear',
          details: ['a taped bundle of memoranda', 'a small blackboard', 'a folded newspaper', 'reading glasses', 'harbour light at the window'],
          alt: 'A taped bundle of memoranda beside a small study blackboard and folded reading glasses.',
        },
        pages: [
          {
            id: 'early',
            narration:
              'He said it too early, to men who were still winning a war, and they wrote him down as a nuisance and put a watcher on him for a while. He has never once thought that was the wrong week to say it.',
          },
          {
            id: 'now',
            narration:
              'The bundle of memoranda is still on the desk, still tied with tape, still the same argument. Every year since, the world has provided a fresh reason why he was right and no mechanism whatever for acting on it.',
          },
        ],
        historicalNote:
          'Bohr pressed Allied leaders for postwar openness from 1943 onward and was regarded with suspicion in some quarters for doing so. The scene is dramatized.',
      },
      {
        id: 'full',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'bohr-quantized-atom',
              'bohr-correspondence-principle',
              'bohr-founding-institute',
              'bohr-einstein-debates',
              'bohr-fission-theory',
              'bohr-los-alamos-advisory',
              'bohr-atoms-for-peace',
            ],
            count: 5,
          },
        ],
        title: 'Still Rubbing Out the Board',
        yearLabel: '1962',
        image: {
          setting: 'a study with a small blackboard, a sketched box-and-shutter diagram and an armchair, 1962',
          year: 1962,
          characters: ['bohr'],
          mood: 'unfinished, serene',
          details: ['a small study blackboard', 'a sketch of a box with a shutter', 'an armchair with a rug', 'a pipe on the arm', 'late afternoon light'],
          alt: 'A small study blackboard sketched with a box and shutter, an armchair beside it.',
        },
        pages: [
          {
            id: 'board',
            narration:
              'On the study blackboard, at the very end, there is a drawing of a box with a shutter in it — the device an old friend built out of pure thought in 1930 to prove him wrong, and which he has never quite stopped answering.',
          },
          {
            id: 'ongoing',
            narration:
              'Somewhere close by a physicist is under thirty and wrong about something, and will be told so at length and with great affection, and will come back tomorrow to be told again. That was always the actual work.',
          },
        ],
        historicalNote:
          'Bohr worked on complementarity and on the Einstein objections to the end of his life; a sketch of Einstein’s thought experiment was on his blackboard when he died in 1962. The scene is dramatized.',
      },
      {
        id: 'default',
        title: 'The Last Argument',
        yearLabel: '1962',
        image: {
          setting: 'a quiet study at dusk with an unfinished page and a window on a garden, 1962',
          year: 1962,
          characters: ['bohr'],
          mood: 'gentle, unresolved',
          details: ['an unfinished page', 'reading glasses folded', 'a garden window', 'a rug over a chair', 'a low lamp'],
          alt: 'An unfinished page and folded reading glasses on a desk beside a garden window.',
        },
        pages: [
          {
            id: 'page',
            narration:
              'The page on the desk stops in the middle of a qualification, which is the way most of his pages stop and the way he would have wanted this one to. There is a garden outside doing nothing in particular.',
          },
          {
            id: 'rest',
            narration:
              'He has spent seventy-seven years refusing to let a sentence pass until it was true from both sides at once. There are worse ways to have used a century.',
          },
        ],
        historicalNote:
          'Bohr died in Copenhagen in 1962. The scene is dramatized connective writing.',
      },
    ],
  },

  // ───────────────────────────────────────────── epilogue
  {
    id: 'bohr-epilogue',
    characterId: 'bohr',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds: ['bohr', 'bohrInstitute', 'bohrManhattan'],
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'open-world',
        conditions: [
          { type: 'narrativeFlag', flag: 'bohr.openWorld' },
          { type: 'projectCompleted', projectId: 'bohr-founding-institute' },
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'bohr-quantized-atom',
              'bohr-correspondence-principle',
              'bohr-founding-institute',
              'bohr-einstein-debates',
              'bohr-fission-theory',
              'bohr-los-alamos-advisory',
              'bohr-atoms-for-peace',
            ],
            count: 5,
          },
        ],
        title: 'The House and the Letter',
        locationLabel: 'Copenhagen',
        yearLabel: '1962',
        image: {
          setting: 'an institute corridor seen from the entrance, coats on hooks, blackboard in use, 1962',
          year: 1962,
          characters: ['bohr'],
          mood: 'warm, continuing, unfinished',
          details: ['coats on hooks in four sizes', 'a blackboard covered over twice', 'a visitors’ book', 'a printed open letter pinned to a noticeboard', 'spring light down a corridor'],
          alt: 'An institute corridor with coats on hooks and a blackboard covered in overlapping work.',
        },
        pages: [
          {
            id: 'corridor',
            narration:
              'What he leaves is not a formula. It is a corridor with hooks in it, in a small country, where for forty years anybody from anywhere could arrive with one suitcase and be argued with seriously.',
          },
          {
            id: 'letter',
            narration:
              'And a letter, pinned up and gone yellow, saying that a world which keeps its knowledge in vaults has already chosen its ending. Nobody acted on it. Everybody has had to keep answering it.',
          },
          {
            id: 'voice',
            speaker: 'NIELS',
            dialogue: 'Every sentence I ever wrote should be read as a question. I never found the one description that was enough by itself — and I am fairly certain, now, that there is not one.',
            narration:
              'The blackboard is not wiped. Somebody will need what is on it in the morning.',
          },
        ],
        historicalNote:
          'Bohr’s institute remained an international centre for physics and his 1950 Open Letter is the fullest statement of his case for an open world. The closing line is dramatized.',
      },
      {
        id: 'letter-only',
        conditions: [{ type: 'narrativeFlag', flag: 'bohr.openWorld' }],
        title: 'One Argument, Made in Public',
        yearLabel: '1962',
        image: {
          setting: 'a noticeboard with a yellowed printed letter pinned among newer papers, 1962',
          year: 1962,
          characters: ['bohr'],
          mood: 'undramatic, durable',
          details: ['a yellowed printed letter pinned up', 'newer notices overlapping it', 'a drawing pin gone rusty', 'a corridor window', 'winter light'],
          alt: 'A yellowed printed letter pinned to a noticeboard under newer overlapping notices.',
        },
        pages: [
          {
            id: 'pinned',
            narration:
              'It is four pages long and it is pinned up in a dozen places he will never visit, going yellow under newer notices, saying the same thing in each of them: a world that keeps its knowledge in vaults has already chosen its ending.',
          },
          {
            id: 'answer',
            narration:
              'Nobody acted on it. Everybody since has had to keep answering it, which is a slower kind of being right and the only kind he ever trusted.',
          },
          {
            id: 'voice',
            speaker: 'NIELS',
            dialogue: 'Every sentence I ever wrote should be read as a question. I never found the one description that was enough by itself — and I am fairly certain, now, that there is not one.',
            narration: 'The lamp is left on. Somebody will want the desk in the morning.',
          },
        ],
        historicalNote:
          'Bohr’s 1950 Open Letter to the United Nations remained the fullest public statement of his case for an open world. The closing line is dramatized.',
      },
      {
        id: 'refuge-remembered',
        conditions: [
          {
            any: [
              { type: 'choiceWas', choiceKey: 'bohr-crisis-opening:decide', choiceId: 'openDoor' },
              { type: 'narrativeFlag', flag: 'bohr.openDoor' },
              { type: 'choiceWas', choiceKey: 'bohr-card-refuge:decide', choiceId: 'spendItAll' },
            ],
          },
        ],
        title: 'The List in the Drawer',
        yearLabel: '1962',
        image: {
          setting: 'an open desk drawer with a folded pencilled list of names, late in life',
          year: 1962,
          characters: ['bohr'],
          mood: 'quiet accounting, tenderness',
          details: ['an open desk drawer', 'a folded list in pencil', 'addresses added later in a shakier hand', 'a rubber band gone brittle', 'lamp light'],
          alt: 'A pencilled list of names in a drawer, many with later addresses added beside them.',
        },
        pages: [
          {
            id: 'cards',
            narration:
              'The list from the thirties stayed in a drawer for the rest of his life. A good many of the names have a second address beside them in pencil — Manchester, Bombay, Ohio — added years after the first, in a hand that had begun to shake.',
          },
          {
            id: 'count',
            narration:
              'He never counted them out loud. He counted the fares, and the testimonials written at midnight in a language he was not fluent in, and he considered the physics he did not do in those hours to be a reasonable price.',
          },
          {
            id: 'voice',
            speaker: 'NIELS',
            dialogue: 'People ask what all that letter-writing was for. It was for the arguing, yes, in the end. But mostly it was for the arriving.',
          },
        ],
        historicalNote:
          'Bohr helped a substantial number of displaced scientists find posts and passage abroad during the 1930s. The list and the closing line are dramatized.',
      },
      {
        id: 'sparse',
        conditions: [
          {
            not: {
              type: 'completedProjectCountAtLeast',
              projectIds: [
                'bohr-quantized-atom',
                'bohr-correspondence-principle',
                'bohr-founding-institute',
                'bohr-einstein-debates',
                'bohr-fission-theory',
                'bohr-los-alamos-advisory',
                'bohr-atoms-for-peace',
              ],
              count: 3,
            },
          },
        ],
        title: 'The Long Sentence',
        yearLabel: '1962',
        image: {
          setting: 'a study of unpublished notebooks stacked by year, late in life',
          year: 1962,
          characters: ['bohr'],
          mood: 'private, unresolved, unembittered',
          details: ['notebooks stacked and dated', 'a pinned table of spectral wavelengths gone brown', 'a pipe', 'an unfinished page', 'a window on a grey harbour'],
          alt: 'Stacks of dated notebooks beside a browned table of spectral wavelengths pinned to a wall.',
        },
        pages: [
          {
            id: 'notebooks',
            narration:
              'The notebooks are stacked by year against the wall, and the table of hydrogen wavelengths is still pinned above the desk, gone brown at the corners, still not entirely explained by anybody to his satisfaction.',
          },
          {
            id: 'quiet',
            narration:
              'Others built on the pieces he published and built well. He read their papers carefully and wrote to them at length, and the letters were kind and full of objections, which was his way of loving something.',
          },
          {
            id: 'voice',
            speaker: 'NIELS',
            dialogue: 'I was never quick. I only declined to be finished with a thing — and it turns out that a century is long enough to get some distance that way, but not, perhaps, all of it.',
          },
        ],
        historicalNote:
          'This ending follows a course in which much of Bohr’s documented work went uncompleted. The framing is dramatized.',
      },
      {
        id: 'default',
        title: 'Contraria Sunt Complementa',
        yearLabel: '1962',
        image: {
          setting: 'a study desk with a drawn circular two-halved figure and an open notebook, 1962',
          year: 1962,
          characters: ['bohr'],
          mood: 'settled, unfinished, warm',
          details: ['a drawn circle in two halves', 'an open notebook', 'reading glasses', 'a pipe gone out', 'late light on a harbour'],
          alt: 'A drawn circle in two halves on a notebook page beside folded reading glasses.',
        },
        pages: [
          {
            id: 'figure',
            narration:
              'On the last page of the last notebook there is the same figure he drew for forty years: a circle in two halves, each carrying a seed of the other, neither of them the whole answer and both of them required.',
          },
          {
            id: 'work',
            narration:
              'He built an atom that could not last and a house that did, argued with the best mind of the age for thirty years without once losing him as a friend, and spent his last decade insisting, mostly into silence, that knowledge kept in vaults is not safety.',
          },
          {
            id: 'voice',
            speaker: 'NIELS',
            dialogue: 'The opposite of a correct statement is a false statement. But the opposite of a profound truth may well be another profound truth — and that, I am afraid, is where I have had to live.',
            narration: 'The lamp stays on. Somebody in the corridor is still arguing.',
          },
        ],
        historicalNote:
          'Bohr chose the motto “contraria sunt complementa” for his coat of arms. The sentiment in the closing line reflects a remark long attributed to him in the standard literature; the wording here is dramatized rather than quoted.',
      },
    ],
  },
];
