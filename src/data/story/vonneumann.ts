import type { StoryScene } from '../../types/story';

const sourceIds = ['vonneumann'];

/** Board context cards told in full by scenes in this file. */
export const VONNEUMANN_REPLACED_CONTEXT_CARDS: string[] = [
  'vonneumann-card-1923',
  'vonneumann-card-1930-princeton',
  'vonneumann-card-1943-los-alamos',
  'vonneumann-card-1945-machine',
];

export const VONNEUMANN_STORY_SCENES: StoryScene[] = [
  // ───────────────────────────────────────────── prologue
  {
    id: 'vonneumann-prologue-danube',
    characterId: 'vonneumann',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Bank on the Danube',
        locationLabel: 'Budapest',
        yearLabel: '1903–1911',
        image: {
          setting: 'a banker’s apartment above a snowbound Budapest street in the last days of 1903',
          year: 1903,
          characters: ['vonneumann'],
          mood: 'prosperous, wintry, crowded with talk',
          details: ['snow on tram rails', 'a wall of bound books', 'a brass door plate', 'a coal stove', 'folded newspapers in four languages'],
          alt: 'A snowbound city street below the windows of a comfortable apartment with a wall of bound books.',
        },
        pages: [
          {
            id: 'city',
            narration:
              'Snow comes down on the Danube in the last week of 1903 and the trams keep running through it, which is the whole of Budapest’s opinion of itself. The city has an underground railway, a stock exchange, eleven newspapers and a great appetite for being modern. In an apartment near the river a banker’s household counts its relatives, and finds it has one more.',
          },
          {
            id: 'library',
            narration:
              'One room of the apartment has books for walls. His father bought the library entire, the way he buys most things, and the boy goes at it the way other children go at a staircase. He is six when he begins reading a history of the world in forty-four volumes, and afterwards he can tell you which page a given siege is on.',
          },
          {
            id: 'table',
            narration:
              'At dinner the men from the bank argue about grain prices and the Balkans, and the smallest person at the table follows both arguments and finds a mistake in one of them. Nobody minds. In this house being quick is a kind of good manners.',
            speaker: 'MAX',
            dialogue:
              'Hungary is a small country, Jancsi. A small country’s clever boy learns four languages, learns what things cost, and learns never to be surprised.',
          },
        ],
        historicalNote:
          'Von Neumann was born in Budapest in December 1903 into a prosperous banking family whose apartment held a large purchased library; his childhood reading and memory are described in every standard biography. The dialogue is dramatized wording, not a quotation.',
      },
    ],
  },

  // ───────────────────────────────────────────── formation, 1903–1921
  {
    id: 'vonneumann-formation-opening',
    characterId: 'vonneumann',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'budapest',
        conditions: [{ type: 'locationIs', locationId: 'budapest' }],
        title: 'The Boy Who Is Never Surprised',
        locationLabel: 'Budapest',
        yearLabel: '1911–1921',
        image: {
          setting: 'a Budapest gymnasium classroom of wet wool and chalk dust in the years before the war',
          year: 1914,
          characters: ['vonneumann'],
          mood: 'sharp, watched, quietly triumphant',
          details: ['chalk trough under a blackboard', 'inkwells in a wooden desk', 'a wet coat on a hook', 'a folded telephone directory', 'a brass school bell'],
          alt: 'An empty schoolroom with a chalk blackboard, wooden desks with inkwells, and a coat drying on a hook.',
        },
        pages: [
          {
            id: 'gymnasium',
            narration:
              'The gymnasium smells of wet wool and chalk. Boys are made to recite; the master walks the aisle with his hands behind his back and stops behind the eleven-year-old who has already done the fourth problem while the class is still copying down the first.',
          },
          {
            id: 'thursday',
            narration:
              'He is kept back after the bell. He assumes he is in trouble, and is already three answers ahead of the accusation when the master shuts the door and does something else entirely.',
            speaker: 'THE MATHEMATICS MASTER',
            dialogue:
              'You will learn nothing from me in this room. Come on Thursdays and we will find you someone at the university, and you will kindly stop finishing my sentences in front of the others.',
          },
          {
            id: 'directory',
            narration:
              'At his parents’ evenings he is brought out to perform. A guest opens the telephone directory at random, he reads a column once, and gives back the names and the numbers in order. Everyone laughs and is delighted. He smiles and does not say that this is the least interesting thing he can do.',
          },
          {
            id: 'choice',
            narration:
              'Then the war ends and the empire it was fought for stops existing. The currency goes strange, the bank goes cautious, and his father asks him across the desk what a boy is supposed to be in a country that has just been cut into pieces.',
            choices: [
              {
                id: 'mathematics',
                label: 'Say mathematics, and refuse to soften it',
                effects: [
                  { type: 'flag', flag: 'vonneumann.bargain', value: 'mathematics' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: 1, funds: -1 } },
                ],
              },
              {
                id: 'both',
                label: 'Promise him a profession and keep the mathematics as well',
                effects: [
                  { type: 'flag', flag: 'vonneumann.bargain', value: 'both' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { funds: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'engineering',
                label: 'Give him the chemistry and put the rest in a drawer',
                effects: [
                  { type: 'flag', flag: 'vonneumann.bargain', value: 'engineering' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { funds: 2, standing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann’s schoolmasters recognised him early and arranged university tutoring while he was still at the gymnasium; his father wanted a profession that paid. The teacher’s line is dramatized wording.',
      },
      {
        id: 'default',
        title: 'The Boy Who Is Never Surprised',
        yearLabel: '1911–1921',
        image: {
          setting: 'a schoolroom in the years before the Great War, chalk dust in the window light',
          year: 1914,
          characters: ['vonneumann'],
          mood: 'sharp, watched, quietly triumphant',
          details: ['chalk trough under a blackboard', 'inkwells in a wooden desk', 'a wet coat on a hook', 'a folded telephone directory', 'a brass school bell'],
          alt: 'An empty schoolroom with a chalk blackboard, wooden desks with inkwells, and a coat drying on a hook.',
        },
        pages: [
          {
            id: 'gymnasium',
            narration:
              'The schoolroom smells of wet wool and chalk. Boys are made to recite; the master walks the aisle with his hands behind his back and stops behind the eleven-year-old who has already done the fourth problem while the class is still copying down the first.',
          },
          {
            id: 'thursday',
            narration:
              'He is kept back after the bell. He assumes he is in trouble, and is already three answers ahead of the accusation when the master shuts the door and does something else entirely.',
            speaker: 'THE MATHEMATICS MASTER',
            dialogue:
              'You will learn nothing from me in this room. Come on Thursdays and we will find you someone at the university, and you will kindly stop finishing my sentences in front of the others.',
          },
          {
            id: 'directory',
            narration:
              'At his parents’ evenings he is brought out to perform. A guest opens the telephone directory at random, he reads a column once, and gives back the names and the numbers in order. Everyone laughs and is delighted. He smiles and does not say that this is the least interesting thing he can do.',
          },
          {
            id: 'choice',
            narration:
              'Then the war ends and the empire it was fought for stops existing. The currency goes strange, the bank goes cautious, and his father asks him across the desk what a boy is supposed to be in a country that has just been cut into pieces.',
            choices: [
              {
                id: 'mathematics',
                label: 'Say mathematics, and refuse to soften it',
                effects: [
                  { type: 'flag', flag: 'vonneumann.bargain', value: 'mathematics' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: 1, funds: -1 } },
                ],
              },
              {
                id: 'both',
                label: 'Promise him a profession and keep the mathematics as well',
                effects: [
                  { type: 'flag', flag: 'vonneumann.bargain', value: 'both' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { funds: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'engineering',
                label: 'Give him the chemistry and put the rest in a drawer',
                effects: [
                  { type: 'flag', flag: 'vonneumann.bargain', value: 'engineering' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { funds: 2, standing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann’s schoolmasters recognised him early and arranged university tutoring while he was still at the gymnasium; his father wanted a profession that paid. The teacher’s line is dramatized wording.',
      },
    ],
  },
  {
    id: 'vonneumann-formation-eight-digits',
    characterId: 'vonneumann',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'thriving',
        conditions: [
          { type: 'yearAtLeast', year: 1919 },
          { type: 'yearAtMost', year: 1921 },
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 },
        ],
        title: 'Two Numbers and a Ceiling',
        yearLabel: '1920',
        image: {
          setting: 'a dining room set for fewer guests than it was built for, the good silver still out',
          year: 1920,
          characters: ['vonneumann'],
          mood: 'affectionate, showy, a little lonely',
          details: ['a long table laid for eight', 'cigar smoke under a lamp', 'a slip of paper with long numbers', 'a plaster ceiling rose', 'a cut-glass decanter half empty'],
          alt: 'A long dining table laid for fewer guests than it seats, with a slip of paper covered in long numbers.',
        },
        pages: [
          {
            id: 'party',
            narration:
              'The house entertains again, for fewer people, with the good silver out. An uncle writes two eight-figure numbers on a slip — sums in the new currency, which means nothing next month — and asks for the quotient.',
          },
          {
            id: 'ceiling',
            narration:
              'He looks at the plaster rose on the ceiling and the hairline crack running out of it, and then says the answer, and the room applauds a boy of sixteen for doing something the room does not understand. What he was doing up there was not arithmetic. It was choosing which of four ways to do the arithmetic would be shortest.',
            speaker: 'JANCSI',
            dialogue: 'It is not that I am fast. It is that most people begin before they have chosen the road.',
          },
        ],
        historicalNote:
          'Von Neumann’s mental arithmetic and memory feats, including performances for family guests, are reported in every standard biography. Hungarian currency was unstable in the postwar years. The scene and dialogue are dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1919 },
          { type: 'yearAtMost', year: 1921 },
        ],
        title: 'Two Numbers and a Ceiling',
        yearLabel: '1920',
        image: {
          setting: 'a cold study late at night with a lamp and a slate of long division',
          year: 1920,
          characters: ['vonneumann'],
          mood: 'tired, obliging, private',
          details: ['a slate with long division', 'a lamp turned low', 'a shawl over a chair back', 'a shut door', 'a clock reading past midnight'],
          alt: 'A slate covered in long division beside a lamp turned low in a cold study at night.',
        },
        pages: [
          {
            id: 'asked',
            narration:
              'They ask him to do the trick again for a guest who has heard about it, and he does it, because it is easier than explaining why he would rather not. Two eight-figure numbers in a currency that will mean something else by spring, a quotient, applause, bed.',
          },
          {
            id: 'after',
            narration:
              'Afterwards he sits with a slate in the cold and works the same division four ways to see which is shortest. Nobody asks about that part. At sixteen he has begun to suspect that being admired and being understood are unrelated conditions.',
            speaker: 'JANCSI',
            dialogue: 'The trick is choosing the road. Everyone claps for the walking.',
          },
        ],
        historicalNote:
          'Von Neumann’s mental arithmetic feats are reported in every standard biography; Hungarian currency was unstable after the war. The scene and dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-formation-flight',
    characterId: 'vonneumann',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 64 },
    once: true,
    variants: [
      {
        id: 'means',
        conditions: [
          { type: 'yearAtLeast', year: 1918 },
          { type: 'yearAtMost', year: 1921 },
          { type: 'resourceAtLeast', resource: 'funds', value: 3 },
        ],
        title: 'A Few Months Abroad',
        yearLabel: '1919',
        image: {
          setting: 'a station platform at dawn with a family’s luggage and a shuttered ticket window',
          year: 1919,
          characters: ['vonneumann'],
          mood: 'orderly fear, unspoken',
          details: ['strapped leather trunks', 'a shuttered ticket window', 'a folded newspaper', 'steam along a platform', 'a hat held in both hands'],
          alt: 'Strapped leather trunks on an empty station platform at dawn beside a shuttered ticket window.',
        },
        pages: [
          {
            id: 'notices',
            narration:
              'The notices go up in the spring and the bank is no longer quite the family’s bank. His father does the arithmetic of a household in one evening and books passage west for a few months, and nobody in the apartment uses the word that would make it true.',
          },
          {
            id: 'platform',
            narration:
              'On the platform the trunks are strapped and the boy has a book he has already finished. He watches the men in the street and finds that he is not frightened so much as revising: a country he had taken for a constant has turned out to be one of the variables.',
            speaker: 'MAX',
            dialogue: 'We are going for the air. Say that if anyone asks, and say it lightly, and do not be clever about it on the train.',
          },
        ],
        effects: [{ type: 'flag', flag: 'vonneumann.exile', value: true }],
        historicalNote:
          'The Neumann family left Hungary for several months during the short-lived communist regime of 1919 and returned afterwards. The dialogue is dramatized wording.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1918 },
          { type: 'yearAtMost', year: 1921 },
        ],
        title: 'A Few Months Abroad',
        yearLabel: '1919',
        image: {
          setting: 'a shuttered city apartment with furniture under sheets and a suitcase by the door',
          year: 1919,
          characters: ['vonneumann'],
          mood: 'stripped-down, watchful',
          details: ['furniture under dust sheets', 'a single suitcase', 'a lamp unplugged', 'shutters half closed', 'a queue visible in the street below'],
          alt: 'A city apartment with furniture under dust sheets and one suitcase standing by the door.',
        },
        pages: [
          {
            id: 'queues',
            narration:
              'The spring goes wrong in an orderly way: notices, then queues, then the discovery that the family’s money is now somebody’s argument. They pack one case each and go where they can afford to go, which is not far and not comfortable.',
          },
          {
            id: 'variable',
            narration:
              'He is fifteen and he is not frightened so much as revising. A country he had taken for a constant has turned out to be one of the variables. He decides, in a rented room with a bad stove, that he will always want somewhere else to be able to go.',
            speaker: 'MAX',
            dialogue: 'Learn a science they need everywhere. Then no committee anywhere can decide what you are.',
          },
        ],
        effects: [{ type: 'flag', flag: 'vonneumann.exile', value: true }],
        historicalNote:
          'The Neumann family left Hungary for several months during the short-lived communist regime of 1919. The dialogue is dramatized wording.',
      },
    ],
  },
  {
    id: 'vonneumann-formation-closing',
    characterId: 'vonneumann',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'bargain-both',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'both' }],
        title: 'The Terms of the Agreement',
        yearLabel: '1921',
        image: {
          setting: 'a banker’s study at night with two university prospectuses open side by side',
          year: 1921,
          characters: ['vonneumann'],
          mood: 'negotiated, amused, binding',
          details: ['two prospectuses open on a desk', 'a green-shaded lamp', 'a fountain pen uncapped', 'a railway timetable', 'a cold cup of coffee'],
          alt: 'Two university prospectuses open side by side on a desk under a green-shaded lamp.',
        },
        pages: [
          {
            id: 'terms',
            narration:
              'The agreement is written down, more or less, on the back of a timetable. He will take a degree that a bank can respect, and the other thing he will do in the spaces, at his own cost, and there will be no complaints from either party about tiredness.',
          },
          {
            id: 'signed',
            narration:
              'He shakes his father’s hand and goes to pack. He has just committed himself to living two lives at once and it does not occur to him, at seventeen, that this is a decision rather than a schedule.',
          },
        ],
        historicalNote:
          'Von Neumann pursued a chemistry degree at his father’s wish while working towards a mathematics doctorate at the same time. The bargain is dramatized in its wording.',
      },
      {
        id: 'bargain-mathematics',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'mathematics' }],
        title: 'One Life, Then',
        yearLabel: '1921',
        image: {
          setting: 'a hallway with a packed case and a closed study door behind it',
          year: 1921,
          characters: ['vonneumann'],
          mood: 'clean break, quietly costly',
          details: ['a packed case in a hallway', 'a closed door', 'a hat on a stand', 'a folded letter of introduction', 'winter light on a tiled floor'],
          alt: 'A packed case standing in a hallway before a closed study door in winter light.',
        },
        pages: [
          {
            id: 'refusal',
            narration:
              'He says the word and does not decorate it. His father is a reasonable man and reasonable men are hardest to argue with, so the argument is short and the study door closes on it, and the allowance afterwards is smaller than it was.',
          },
          {
            id: 'going',
            narration:
              'In the hallway he counts what he has: a letter of introduction, a case, four languages and no fallback. It is fewer resources than he is used to, and he finds the arithmetic of it oddly exciting.',
          },
        ],
        historicalNote:
          'The record has von Neumann accepting a practical degree alongside his mathematics; a straight refusal is a dramatized departure from it.',
      },
      {
        id: 'default',
        title: 'A Useful Profession',
        yearLabel: '1921',
        image: {
          setting: 'a chemistry lecture theatre’s empty benches with a rack of stoppered bottles',
          year: 1921,
          characters: ['vonneumann'],
          mood: 'dutiful, muffled',
          details: ['a rack of stoppered bottles', 'tiered empty benches', 'a scorched bench top', 'a fume cupboard sash', 'a notebook ruled in columns'],
          alt: 'Empty tiered benches in a chemistry lecture theatre with a rack of stoppered bottles.',
        },
        pages: [
          {
            id: 'accepted',
            narration:
              'The profession is agreed on and the family is pleased and the allowance is generous. He is good at chemistry the way he is good at most things, which is to say immediately and without much affection.',
          },
          {
            id: 'drawer',
            narration:
              'There is a folder of his own work in the bottom drawer, tied with tape. He tells himself he will get back to it in the vacations. Seventeen-year-olds are allowed to believe that; it is one of the few things they are allowed.',
          },
        ],
        historicalNote:
          'Von Neumann did take the practical degree — but never at the cost of the mathematics. A life in which the folder stays in the drawer is a dramatized departure.',
      },
    ],
  },

  // ───────────────────────────────────────────── education, 1921–1926
  {
    id: 'vonneumann-education-opening',
    characterId: 'vonneumann',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'refused',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'mathematics' }],
        title: 'On His Own Account',
        yearLabel: '1921–1926',
        image: {
          setting: 'a cheap lodging room with a table pushed under a window and a stack of pupils’ exercise books',
          year: 1923,
          characters: ['vonneumann'],
          mood: 'independent, thin, undaunted',
          details: ['a stack of pupils’ exercise books', 'a table pushed under a window', 'a coal scuttle nearly empty', 'a card advertising tuition', 'a single good coat on a nail'],
          alt: 'A stack of pupils’ exercise books on a table pushed under a window beside a nearly empty coal scuttle.',
        },
        pages: [
          {
            id: 'lodging',
            narration:
              'The room is cheap and the scuttle is nearly empty and there is a stack of other people’s exercise books on the table, because a young man who has refused a profession must still eat. He marks them fast and badly and is never wrong.',
          },
          {
            id: 'tuition',
            narration:
              'He tutors bankers’ sons in the afternoons for money that would have been his allowance, and he is extremely good company about it, which is how you keep such work. Nobody in the house he visits knows what he does after nine o’clock.',
            speaker: 'A PUPIL’S FATHER',
            dialogue: 'You are wasted on my boy, Neumann. Take a post in a bank and in ten years you will be sitting where I am sitting.',
          },
          {
            id: 'letters',
            narration:
              'His father’s letters still come with the crest on them and still ask, gently and without fail, how he is managing. They never ask about the mathematics. That is his way of not forgiving it yet.',
            speaker: 'MAX',
            dialogue: 'You chose the room and left the door behind. Very well. Then be certain the room is worth what it cost.',
          },
          {
            id: 'choice',
            narration:
              'So the next five years arrange themselves into one question about how a day is to be spent: rent, pupils, seminars, one head. He has to decide what he is willing to do badly.',
            choices: [
              {
                id: 'allAtOnce',
                label: 'Take every hour of paid work there is and do the mathematics on top of it',
                effects: [
                  { type: 'flag', flag: 'vonneumann.method', value: 'allAtOnce' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'chemistryFirst',
                label: 'Earn steadily first, and give the mathematics the nights',
                effects: [
                  { type: 'flag', flag: 'vonneumann.method', value: 'chemistryFirst' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { funds: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'mathematicsFirst',
                label: 'Earn only what you can live on and give the rest to the seminar',
                effects: [
                  { type: 'flag', flag: 'vonneumann.method', value: 'mathematicsFirst' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: 1, funds: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann in fact took the practical degree his father wanted alongside the mathematics; a student life supported by tutoring instead is a dramatized departure. Dialogue is dramatized.',
      },
      {
        id: 'zurich',
        conditions: [{ type: 'locationIs', locationId: 'zurich' }],
        title: 'Two Timetables',
        locationLabel: 'Zürich',
        yearLabel: '1921–1926',
        image: {
          setting: 'a polytechnic chemistry bench in Zürich at the end of a long afternoon',
          year: 1923,
          characters: ['vonneumann'],
          mood: 'efficient, double-booked, exhilarated',
          details: ['a scorched bench top', 'a condenser clamped over a burner', 'a ruled report sheet turned over', 'a night-train timetable', 'a case with two sets of notes'],
          alt: 'A chemistry bench with a clamped condenser and a laboratory report sheet turned over to its blank side.',
        },
        pages: [
          {
            id: 'bench',
            narration:
              'The bench is scored with old burns and the room smells of ether and hot copper. He runs the distillation correctly the first time and writes the figures into their ruled columns. Then he turns the sheet over, because the back of a laboratory report is the best paper in Zürich for thinking about ordinal numbers.',
          },
          {
            id: 'train',
            narration:
              'Every so often there is a night train east and an examination at the other end of it that has nothing to do with chemistry. He keeps both sets of notes in one case and has taught himself to sleep sitting upright, which he regards as a saving rather than a hardship.',
            speaker: 'A FELLOW STUDENT',
            dialogue: 'Neumann. Nobody takes two degrees in two countries at the same time. Pick one and be brilliant at it, like a person.',
          },
          {
            id: 'letters',
            narration:
              'His father’s letters come with the bank’s crest on them and ask, gently and without fail, about the chemistry. They never ask about the other thing. That is his way of not forbidding it.',
            speaker: 'MAX',
            dialogue: 'A profession is a door with your name cut into it. Mathematics is a room. You cannot live in a room that has no door.',
          },
          {
            id: 'choice',
            narration:
              'So the next five years arrange themselves into one question about how a day is to be spent: two examination boards, several hundred miles of track, one head. He has to decide what he is willing to do badly.',
            choices: [
              {
                id: 'allAtOnce',
                label: 'Both at full speed, and sleep on the trains',
                effects: [
                  { type: 'flag', flag: 'vonneumann.method', value: 'allAtOnce' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'chemistryFirst',
                label: 'Give the chemistry the daylight and the mathematics the nights',
                effects: [
                  { type: 'flag', flag: 'vonneumann.method', value: 'chemistryFirst' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { funds: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'mathematicsFirst',
                label: 'Do the minimum at the bench and the maximum in the seminar',
                effects: [
                  { type: 'flag', flag: 'vonneumann.method', value: 'mathematicsFirst' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: 1, funds: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann studied chemical engineering at the ETH Zürich while pursuing a mathematics doctorate registered in Budapest, travelling for examinations. Dialogue is dramatized wording.',
      },
      {
        id: 'default',
        title: 'Two Timetables',
        yearLabel: '1921–1926',
        image: {
          setting: 'a student’s room at night with a case packed for a journey and two sets of notes on the table',
          year: 1923,
          characters: ['vonneumann'],
          mood: 'efficient, double-booked, exhilarated',
          details: ['two stacks of notes side by side', 'a strapped case', 'a railway timetable', 'a lamp with a scorched shade', 'an unopened letter with a bank crest'],
          alt: 'Two separate stacks of notes on a table beside a strapped travelling case and a railway timetable.',
        },
        pages: [
          {
            id: 'two-piles',
            narration:
              'There are two stacks of notes on the table and they are not on speaking terms. One is titrations and boiling points and the price of an industrial process. The other is ordinal numbers, and it is the reason he gets up in the morning.',
          },
          {
            id: 'joke',
            narration:
              'Everyone who hears about the arrangement makes the same joke, and he has learned to laugh at it a half-second before they finish, which annoys them and cannot be helped.',
            speaker: 'A FELLOW STUDENT',
            dialogue: 'Nobody takes two degrees in two countries at the same time. Pick one and be brilliant at it, like a person.',
          },
          {
            id: 'letters',
            narration:
              'His father’s letters come with the bank’s crest on them and ask, gently and without fail, about the chemistry. They never ask about the other thing. That is his way of not forbidding it.',
            speaker: 'MAX',
            dialogue: 'A profession is a door with your name cut into it. Mathematics is a room. You cannot live in a room that has no door.',
          },
          {
            id: 'choice',
            narration:
              'So the next five years arrange themselves into one question about how a day is to be spent: two examination boards, several hundred miles of track, one head. He has to decide what he is willing to do badly.',
            choices: [
              {
                id: 'allAtOnce',
                label: 'Both at full speed, and sleep on the trains',
                effects: [
                  { type: 'flag', flag: 'vonneumann.method', value: 'allAtOnce' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'chemistryFirst',
                label: 'Give the chemistry the daylight and the mathematics the nights',
                effects: [
                  { type: 'flag', flag: 'vonneumann.method', value: 'chemistryFirst' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { funds: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'mathematicsFirst',
                label: 'Do the minimum at the bench and the maximum in the seminar',
                effects: [
                  { type: 'flag', flag: 'vonneumann.method', value: 'mathematicsFirst' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: 1, funds: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann pursued a chemical engineering diploma and a mathematics doctorate simultaneously in the early 1920s. Dialogue is dramatized wording.',
      },
    ],
  },
  {
    id: 'vonneumann-two-degrees',
    characterId: 'vonneumann',
    chapterId: 'education',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    replacesContextCardId: 'vonneumann-card-1923',
    variants: [
      {
        id: 'refused',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1926 },
          { type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'mathematics' },
        ],
        title: 'The Practical Faculty',
        yearLabel: '1923',
        image: {
          setting: 'a registrar’s counter with an enrolment form for a technical faculty pushed across it, unsigned',
          year: 1923,
          characters: ['vonneumann'],
          mood: 'tempted, stubborn, clear-eyed',
          details: ['an unsigned enrolment form', 'a rubber stamp and pad', 'a wire basket of applications', 'a folded railway pass', 'an inkstand with a dry nib'],
          alt: 'An unsigned enrolment form for a technical faculty pushed across a registrar’s counter beside a rubber stamp.',
        },
        pages: [
          {
            id: 'offered',
            narration:
              'A senior man who means well pushes the form across the counter: enrol in the technical faculty as well, take the practical diploma alongside the doctorate, and no committee anywhere will ever be able to decide what you are.',
          },
          {
            id: 'sums',
            narration:
              'It is good advice and he does the sums on it standing at the counter — the fees, the terms, the night trains, the hours it would cost the ordinals. He can afford everything in the list except the last item.',
            speaker: 'JANCSI',
            dialogue: 'A second degree is a door I would have to keep painting. I would rather be difficult to place than easy to shelve.',
          },
          {
            id: 'left',
            narration:
              'The form stays on the counter unsigned and the nib in the inkstand stays dry. He is aware, walking out, that he has just made himself dependent on being right about himself, and that this is exactly the arrangement he wanted.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1923' },
          { type: 'resources', effects: { funds: 1 } },
        ],
        historicalNote:
          'Von Neumann did take a chemical engineering diploma alongside his mathematics doctorate, at his father’s wish. A life in which he refused the practical faculty is a dramatized departure. Dialogue is dramatized.',
      },
      {
        id: 'zurich',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1926 },
          { type: 'locationIs', locationId: 'zurich' },
        ],
        title: 'Two Degrees at Once',
        locationLabel: 'Zürich',
        yearLabel: '1923',
        image: {
          setting: 'a registrar’s counter with two enrolment books open and a stamped pass in a gloved hand',
          year: 1923,
          characters: ['vonneumann'],
          mood: 'brisk, faintly absurd, unstoppable',
          details: ['two enrolment ledgers', 'a rubber stamp and pad', 'a folded railway pass', 'a wire basket of forms', 'an inkstand'],
          alt: 'Two enrolment ledgers open on a registrar’s counter beside a rubber stamp and a folded railway pass.',
        },
        pages: [
          {
            id: 'counter',
            narration:
              'The registrar reads the second form twice and looks up, because the first form is already in his hand and the two are for different countries. There is no rule against it. There is no rule for it either, which is a slower kind of problem.',
          },
          {
            id: 'stamp',
            narration:
              'He is not doing this out of ambition, or not only. His father wanted a profession and he intends to hand one over intact. The rest is his own and he does not propose to discuss it at the counter.',
            speaker: 'THE REGISTRAR',
            dialogue: 'Two faculties, two cities, one candidate. I will stamp it, young man, but I will not be responsible for you.',
          },
          {
            id: 'both',
            narration:
              'The pass goes into his coat with the ledger entries still wet. For the next years he will be, on paper, two people who have never met — and it will turn out that he can afford both of them.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1923' },
          { type: 'resources', effects: { funds: 1 } },
        ],
        historicalNote:
          'To satisfy his father’s wish for a practical profession, von Neumann enrolled in chemical engineering at the ETH Zürich while working toward a mathematics doctorate. The registrar and his line are dramatized.',
      },
      {
        id: 'budapest',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1926 },
          { type: 'locationIs', locationId: 'budapest' },
        ],
        title: 'Two Degrees at Once',
        locationLabel: 'Budapest',
        yearLabel: '1923',
        image: {
          setting: 'a university examination room in Budapest with a long green baize table and a single chair facing it',
          year: 1923,
          characters: ['vonneumann'],
          mood: 'formal, one-sided, quietly comic',
          details: ['a green baize table', 'a single chair set apart', 'a bell push', 'a bound thesis tied with tape', 'a wall clock with a brass pendulum'],
          alt: 'A long green baize examination table facing a single empty chair, with a bound thesis tied in tape.',
        },
        pages: [
          {
            id: 'baize',
            narration:
              'The examiners sit along the green baize and the candidate sits alone facing them, which is the arrangement in every country. What is unusual is that the candidate has attended almost none of the lectures, having spent the term at a bench in another country entirely.',
          },
          {
            id: 'question',
            narration:
              'They ask about the paradoxes: the sets that swallow themselves, the definitions that will not stay still. He answers as though he has been waiting all year for someone to raise the subject, which is exactly the case.',
            speaker: 'AN EXAMINER',
            dialogue: 'You are registered here and educated elsewhere, and you appear to have lost nothing in the post. Kindly explain to us how the trick is done.',
          },
          {
            id: 'both',
            narration:
              'He does not explain it, because the honest answer is that the two things do not compete for the same room in his head. He hands in the thesis, catches a train, and is back at the bench inside three days.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1923' },
          { type: 'resources', effects: { funds: 1 } },
        ],
        historicalNote:
          'Von Neumann’s doctorate in mathematics was registered in Budapest while he studied chemical engineering abroad; his set-theory work formed the dissertation. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1926 },
        ],
        title: 'Two Degrees at Once',
        yearLabel: '1923',
        image: {
          setting: 'a night compartment with two sets of notes open on the seat opposite',
          year: 1923,
          characters: ['vonneumann'],
          mood: 'nocturnal, doubled, cheerfully strained',
          details: ['two open notebooks on a seat', 'a window black with night', 'a punched ticket', 'a coat folded as a pillow', 'a pencil worn to a stub'],
          alt: 'Two open notebooks on the seat of a dark railway compartment beside a folded coat and a punched ticket.',
        },
        pages: [
          {
            id: 'compartment',
            narration:
              'The compartment is cold and the window is black and there are two notebooks open on the seat opposite, one for a profession and one for himself. He works from the profession until the border, then swaps.',
          },
          {
            id: 'arithmetic',
            narration:
              'The arithmetic of it pleases him more than it should: two faculties, two cities, one candidate, and a saving of several years that nobody else has thought to claim. His father wanted a door with a name on it. He intends to deliver the door and keep the room.',
            speaker: 'JANCSI',
            dialogue: 'It is not two lives. It is one life with the waste taken out of it.',
          },
          {
            id: 'both',
            narration:
              'By morning both notebooks are further along and he has slept, in total, about as long as the tunnel. He does not yet know that he will keep this habit for thirty years, or what it will eventually cost him.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1923' },
          { type: 'resources', effects: { funds: 1 } },
        ],
        historicalNote:
          'Von Neumann held the double enrolment from 1921, taking the chemical engineering diploma and the mathematics doctorate within months of each other in 1926. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-personal-nightwork',
    characterId: 'vonneumann',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'strained',
        conditions: [
          { type: 'yearAtLeast', year: 1923 },
          { type: 'yearAtMost', year: 1926 },
          { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
        ],
        title: 'The Cost of the Saving',
        yearLabel: '1924',
        image: {
          setting: 'a rented room before dawn, a chair pulled to a table under a window going grey',
          year: 1924,
          characters: ['vonneumann'],
          mood: 'depleted, stubborn, private',
          details: ['a window going grey', 'a cold cup with a skin on it', 'a chair pushed back at an angle', 'a stack of unopened letters', 'a coat still buttoned'],
          alt: 'A table under a window turning grey before dawn, with a cold cup and a coat still buttoned on the chair.',
        },
        pages: [
          {
            id: 'grey',
            narration:
              'The window goes grey at the edges before he notices that the lamp has stopped being necessary. He has been at it since the train, in his coat, and the coffee beside him has grown a skin.',
          },
          {
            id: 'ledger',
            narration:
              'Someone at the bench asked yesterday whether he was ill, and he said no, quickly, in the tone that ends conversations. The truth is duller than illness: the saving he is so proud of is being paid for somewhere, and the somewhere is here, at five in the morning, in a rented room.',
            speaker: 'JANCSI',
            dialogue: 'One more hour. Then I will be reasonable, and it will be tomorrow, and I will have another hour.',
          },
        ],
        historicalNote:
          'Von Neumann worked at an extraordinary pace throughout the double enrolment. This particular night is a dramatized illustration of a well-attested habit.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1923 },
          { type: 'yearAtMost', year: 1926 },
        ],
        title: 'The Cost of the Saving',
        yearLabel: '1924',
        image: {
          setting: 'a café table late in the evening with papers spread beside an emptied plate',
          year: 1924,
          characters: ['vonneumann'],
          mood: 'sociable, quick, faintly manic',
          details: ['papers spread across a café table', 'an emptied plate pushed aside', 'a marble table top', 'a folded newspaper', 'a waiter’s tray at the edge of the frame'],
          alt: 'Papers spread across a marble café table beside an emptied plate and a folded newspaper.',
        },
        pages: [
          {
            id: 'cafe',
            narration:
              'He does the mathematics in a café rather than a room, because a room is quiet and quiet is where his attention goes looking for other work. Waiters, trams, an argument two tables away: exactly enough noise to hold the rest of him still.',
          },
          {
            id: 'ledger',
            narration:
              'A friend sits down uninvited and is talked at for twenty minutes about a proof, then about the Balkans, then about a joke in Latin, and leaves entertained and slightly winded. Nobody who meets him this year comes away thinking he is tired. He is careful about that.',
            speaker: 'JANCSI',
            dialogue: 'Sit. I will explain it badly first, which is faster, and then you will tell me where I cheated.',
          },
        ],
        historicalNote:
          'Von Neumann habitually worked amid noise and was famously sociable and voluble; the scene is a dramatized illustration.',
      },
    ],
  },
  {
    id: 'vonneumann-set-theory-breakthrough',
    characterId: 'vonneumann',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'hilbert'],
    trigger: { event: 'projectCompleted', projectId: 'vonneumann-set-theory-axioms', priority: 82 },
    once: true,
    variants: [
      {
        id: 'berlin',
        conditions: [{ type: 'locationIs', locationId: 'berlin' }],
        title: 'Where the Paradox Cannot Reach',
        locationLabel: 'Berlin',
        image: {
          setting: 'a lecture room in Berlin after the audience has gone, a blackboard of axioms untouched',
          year: 1927,
          characters: ['vonneumann'],
          mood: 'exacting, elated, cold',
          details: ['a blackboard of numbered axioms', 'a cloth over a chair back', 'a stub of chalk', 'a stack of offprints tied with string', 'a radiator ticking'],
          alt: 'A blackboard of numbered axioms in an emptied lecture room, with a stub of chalk on the ledge.',
        },
        pages: [
          {
            id: 'axioms',
            narration:
              'The trouble with sets was always that a collection could be greedy enough to eat itself. He does not answer the paradox; he builds a floor the paradox cannot stand on, and separates the things that may be members from the things that are merely too big to be.',
          },
          {
            id: 'room',
            narration:
              'The room empties and the axioms stay on the board, numbered, in a hand that never presses hard. A colleague lingers by the door with his hat already on, because the objection he came to make has stopped being available to him.',
            speaker: 'A COLLEAGUE',
            dialogue: 'You have not solved it. You have moved the house away from the river. Is that permitted?',
          },
          {
            id: 'answer',
            narration:
              'He says that it is permitted if the house still stands, and that they should look for the flood next spring and see. Then he wipes half the board and starts on something else, which is the only celebration he has time for.',
          },
        ],
        historicalNote:
          'Von Neumann’s axiomatization of set theory, developed from 1923 and published in the mid-1920s, avoided the classical paradoxes by distinguishing sets from classes too large to be members. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Where the Paradox Cannot Reach',
        image: {
          setting: 'a desk at night with numbered axioms fair-copied onto foolscap',
          year: 1926,
          characters: ['vonneumann'],
          mood: 'exacting, elated, contained',
          details: ['numbered axioms fair-copied on foolscap', 'a dry pen laid across the page', 'a lamp with the shade tipped', 'a discarded draft folded in half', 'a window black with night'],
          alt: 'Numbered axioms fair-copied onto foolscap under a tipped lamp, with a dry pen laid across the page.',
        },
        pages: [
          {
            id: 'axioms',
            narration:
              'The trouble with sets was always that a collection could be greedy enough to eat itself. He does not answer the paradox; he builds a floor the paradox cannot stand on, and separates the things that may be members from the things that are merely too big to be.',
          },
          {
            id: 'copy',
            narration:
              'He fair-copies the axioms in a hand that never presses hard, numbers them, and reads the list once from the bottom up, which is how he checks anything he cares about. It holds.',
            speaker: 'JANCSI',
            dialogue: 'Not a repair. A different floor. Let somebody else find out what will not stand on it.',
          },
          {
            id: 'post',
            narration:
              'It goes into an envelope before he has stopped being pleased with it, because pleased is a state he distrusts. By the time the post takes it he is on the next thing, and the next thing is quantum mechanics.',
          },
        ],
        historicalNote:
          'The axiomatization of set theory was von Neumann’s doctoral work, drawing on Hilbert’s formalist program. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-education-closing',
    characterId: 'vonneumann',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'both-degrees',
        conditions: [
          { type: 'projectCompleted', projectId: 'vonneumann-set-theory-axioms' },
          { not: { type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'mathematics' } },
        ],
        title: 'Two Certificates, One Coat Pocket',
        yearLabel: '1926',
        image: {
          setting: 'a hotel room with two framed certificates propped against a mirror and a case half packed',
          year: 1926,
          characters: ['vonneumann'],
          mood: 'triumphant, already elsewhere',
          details: ['two certificates propped against a mirror', 'a half-packed case', 'a rolled diploma tube', 'a shaving brush left out', 'a train ticket on the washstand'],
          alt: 'Two certificates propped against a mirror above a half-packed case and a rolled diploma tube.',
        },
        pages: [
          {
            id: 'two',
            narration:
              'Both certificates arrive within months of each other, one for a profession and one for the room behind the door. He props them against the mirror for exactly as long as it takes to shave.',
          },
          {
            id: 'onward',
            narration:
              'His father will show one of them to people at the bank and never mention the other, and that is a fair settlement of a debt neither of them ever wrote down. There is a letter about a fellowship on the washstand. Göttingen wants to know when he can come.',
          },
        ],
        historicalNote:
          'Von Neumann took the ETH chemical engineering diploma and the Budapest doctorate in 1926, then went to Göttingen on a fellowship to work near Hilbert.',
      },
      {
        id: 'refused',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'mathematics' }],
        title: 'The Last of the Exercise Books',
        yearLabel: '1926',
        image: {
          setting: 'a cheap room being given up, a bundle of marked exercise books tied for return',
          year: 1926,
          characters: ['vonneumann'],
          mood: 'lean, vindicated, impatient to be gone',
          details: ['exercise books tied with string for return', 'a stripped bed', 'a coal scuttle turned upside down', 'a key on a bare table', 'a letter with a foreign stamp'],
          alt: 'A bundle of marked exercise books tied with string beside a stripped bed and a key on a bare table.',
        },
        pages: [
          {
            id: 'books',
            narration:
              'The last bundle of exercise books is tied with string by the door, marked and to be returned, and the scuttle is turned upside down because there is no point buying coal for a week. Five years of other people’s sons, paid for in afternoons.',
          },
          {
            id: 'onward',
            narration:
              'He never told his father what the tutoring paid or how thin some of the winters were, and he does not intend to start. There is a letter with a foreign stamp on the bare table offering a fellowship. He has read it four times, and this time he reads the salary line last, on purpose, like a man saving the good part.',
          },
        ],
        historicalNote:
          'Von Neumann took the practical degree his father wanted; a student life funded by tutoring instead is a dramatized departure. He did leave for a Göttingen fellowship in 1926.',
      },
      {
        id: 'method-all',
        conditions: [
          { not: { type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'mathematics' } },
          { type: 'narrativeFlag', flag: 'vonneumann.method', value: 'allAtOnce' },
        ],
        title: 'What the Speed Cost',
        yearLabel: '1926',
        image: {
          setting: 'an emptied student room with a stripped bed and a chair he has fallen asleep in',
          year: 1926,
          characters: ['vonneumann'],
          mood: 'triumphant, hollowed out',
          details: ['a stripped bed never slept in', 'a chair with a blanket over its arm', 'two finished stacks of notes', 'a key on a bare table', 'grey light in a bare window'],
          alt: 'A stripped bed beside a chair with a blanket over its arm and two finished stacks of notes.',
        },
        pages: [
          {
            id: 'stripped',
            narration:
              'The bed is stripped and was barely used; he has spent five years asleep in the chair with his coat on, and both stacks on the table are finished, and neither of them is worse than it should be. He was right. That is the part that frightens the people who watched.',
          },
          {
            id: 'onward',
            narration:
              'He is twenty-two and has just proved to himself that he can carry two lives at full speed without dropping either, which is the most dangerous thing he will ever learn. There is a letter about a fellowship in his coat. He has read it four times.',
          },
        ],
        historicalNote:
          'Von Neumann completed the doctorate and the diploma within months of each other in 1926 and moved on to Göttingen. The reckoning is dramatized.',
      },
      {
        id: 'method-chemistry',
        conditions: [
          { not: { type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'mathematics' } },
          { type: 'narrativeFlag', flag: 'vonneumann.method', value: 'chemistryFirst' },
        ],
        title: 'The Daylight Hours',
        yearLabel: '1926',
        image: {
          setting: 'an emptied student room with a technical certificate propped on the sill and a thinner stack beside it',
          year: 1926,
          characters: ['vonneumann'],
          mood: 'creditable, quietly grudging',
          details: ['a certificate propped on a sill', 'a thin stack of notes beside it', 'a stripped bed', 'a key on a bare table', 'grey light in a bare window'],
          alt: 'A certificate propped on a windowsill beside a thin stack of notes in an emptied room.',
        },
        pages: [
          {
            id: 'stripped',
            narration:
              'The certificate stands on the sill and it is a good one, earned in daylight, at a bench, by a man who was never once late. Beside it is the other stack, which is thinner than it would have been, and he can name the four papers that are not in it.',
          },
          {
            id: 'onward',
            narration:
              'He is twenty-two and has kept every promise he made across his father’s desk, and he intends to stop making that particular kind of promise. There is a letter about a fellowship in his coat. He has read it four times.',
          },
        ],
        historicalNote:
          'Von Neumann took the practical degree his father wanted alongside the mathematics. The ordering of his hours is dramatized.',
      },
      {
        id: 'method-mathematics',
        conditions: [
          { not: { type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'mathematics' } },
          { type: 'narrativeFlag', flag: 'vonneumann.method', value: 'mathematicsFirst' },
        ],
        title: 'The Minimum at the Bench',
        yearLabel: '1926',
        image: {
          setting: 'an emptied student room with one large stack of notes on the sill and a folded pass-mark slip',
          year: 1926,
          characters: ['vonneumann'],
          mood: 'unapologetic, cheerful, slightly guilty',
          details: ['a large stack of notes on a sill', 'a folded slip with a bare pass mark', 'a stripped bed', 'a key on a bare table', 'grey light in a bare window'],
          alt: 'A large stack of notes on a windowsill beside a folded slip recording a bare pass mark.',
        },
        pages: [
          {
            id: 'stripped',
            narration:
              'The stack on the sill is enormous and the folded slip beside it records the barest pass the faculty was willing to award. He has done exactly as much chemistry as the regulations required and not one titration more, and he is not sorry, and he has decided not to show his father the slip.',
          },
          {
            id: 'onward',
            narration:
              'He is twenty-two and has learned that an institution will let you steal a great deal of time if you are careful to hand in everything on the day it is due. There is a letter about a fellowship in his coat. He has read it four times.',
          },
        ],
        historicalNote:
          'Von Neumann was said to have treated the practical degree as an obligation rather than a vocation. The grading and the concealment are dramatized.',
      },
      {
        id: 'default',
        title: 'The Unfinished Registration',
        yearLabel: '1926',
        image: {
          setting: 'a dim corridor outside a faculty office with a folder held under one arm',
          year: 1926,
          characters: ['vonneumann'],
          mood: 'suspended, unhurried, slightly hollow',
          details: ['a folder tied with tape', 'a frosted-glass office door', 'a bench in a corridor', 'a noticeboard of examination dates', 'a hat held in one hand'],
          alt: 'A tied folder held beside a bench in a dim corridor outside a frosted-glass faculty office door.',
        },
        pages: [
          {
            id: 'corridor',
            narration:
              'The folder is still tied with the same tape and the examination dates on the noticeboard have gone past twice. Nothing has gone wrong. It is only that the years have been spent on other people’s syllabuses, and the axioms are exactly where he left them.',
          },
          {
            id: 'onward',
            narration:
              'He is not troubled, which troubles him a little. There is a letter about a fellowship in his coat, and he decides on the corridor bench that he will take it, and that the folder is coming with him whether or not anybody has asked to see it.',
          },
        ],
        historicalNote:
          'In the documented life the set-theory work was finished as a doctoral dissertation by 1926. A chapter that closes with it unpublished is a dramatized departure.',
      },
    ],
  },

  // ───────────────────────────────────────────── entry into the profession, 1926–1930
  {
    id: 'vonneumann-entry-opening',
    characterId: 'vonneumann',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'hilbert'],
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'The Town Where Mathematics Lives',
        locationLabel: 'Göttingen',
        yearLabel: '1926–1930',
        image: {
          setting: 'a mathematics institute corridor in Göttingen with a reading room door standing open',
          year: 1927,
          characters: ['vonneumann'],
          mood: 'reverent, competitive, quick',
          details: ['an open reading-room door', 'a wall of bound journals', 'a chalk-dusted sleeve', 'a seminar list pinned to cork', 'bicycles leaning outside a window'],
          alt: 'A corridor in a mathematics institute with an open reading-room door and a wall of bound journals.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'Göttingen is a small town that has decided to be the centre of the world, and the mathematics institute is where it keeps the decision. In the reading room the journals are on shelves within arm’s reach of the chairs, so that an argument can be settled before anybody has to stand up.',
          },
          {
            id: 'seminar',
            narration:
              'At his first seminar he waits until the third objection has been made badly and then makes it properly, and the room turns round. The old man at the front does not turn round. He listens with his back to everyone, which is how the room knows to be quiet.',
            speaker: 'HILBERT',
            dialogue: 'Young man, you have arrived with the answers already written out. Good. Now find me a question here that you cannot do before lunch.',
          },
          {
            id: 'physics',
            narration:
              'The physicists are two streets away and their new mechanics is a scandal: matrices on one side, waves on the other, and nobody able to say what either is a description of. He listens to them argue for a week and comes away with the strong impression that they need a mathematician more than they need another physicist.',
          },
        ],
        historicalNote:
          'Von Neumann worked at Göttingen from 1926 near Hilbert, at the moment when matrix and wave mechanics were competing formulations of quantum theory. Hilbert’s line is dramatized wording.',
      },
      {
        id: 'berlin',
        conditions: [{ type: 'locationIs', locationId: 'berlin' }],
        title: 'The Youngest Man on the List',
        locationLabel: 'Berlin',
        yearLabel: '1926–1930',
        image: {
          setting: 'a Berlin university noticeboard with a lecture list and a tram passing beyond the glass doors',
          year: 1928,
          characters: ['vonneumann'],
          mood: 'ambitious, urban, cold-bright',
          details: ['a printed lecture list under glass', 'a revolving door', 'a tram beyond the entrance', 'a briefcase set against a shin', 'a scarf still knotted indoors'],
          alt: 'A printed university lecture list under glass beside a revolving door with a tram passing outside.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'His name is on the lecture list under glass in the entrance hall, and it is the youngest name there by a decade. He reads it once on the way in, the way you check a sum, and then does not look at it again.',
          },
          {
            id: 'audience',
            narration:
              'The lectures fill because he goes fast and because he is willing to be interrupted. He answers every question in the questioner’s own vocabulary, which flatters people who do not realise they are being translated for.',
            speaker: 'A SENIOR PROFESSOR',
            dialogue: 'You lecture like a man catching a train, Neumann. Some of us are still on the platform. Slow down or we shall stop coming.',
          },
          {
            id: 'physics',
            narration:
              'The physicists have two incompatible descriptions of the same atom and a great deal of pride invested in each. He begins to suspect that the disagreement is not about nature at all, and that whoever writes down the right mathematical space will make the quarrel disappear.',
          },
        ],
        historicalNote:
          'Von Neumann became a Privatdozent in Berlin in 1927, the youngest in the university’s recent memory, before moving on to Hamburg and then Princeton. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Youngest Man on the List',
        yearLabel: '1926–1930',
        image: {
          setting: 'a lecture room filling before a class, a young lecturer setting out chalk',
          year: 1928,
          characters: ['vonneumann'],
          mood: 'ambitious, quick, watched',
          details: ['a fresh box of chalk', 'tiered benches filling', 'a pocket watch laid on a lectern', 'a folded offprint', 'winter coats over seat backs'],
          alt: 'A fresh box of chalk on a lectern before tiered benches filling with students in winter coats.',
        },
        pages: [
          {
            id: 'lectern',
            narration:
              'He lays the watch on the lectern, opens the chalk, and starts a minute early because the room is already full. He is the youngest person in it with the right to be standing up, and he has decided that the way to survive that is to be worth the fare.',
          },
          {
            id: 'audience',
            narration:
              'He goes fast and lets himself be interrupted, and answers each question in the questioner’s own vocabulary, which flatters people who do not notice they are being translated for.',
            speaker: 'A SENIOR PROFESSOR',
            dialogue: 'You lecture like a man catching a train, Neumann. Some of us are still on the platform. Slow down or we shall stop coming.',
          },
          {
            id: 'physics',
            narration:
              'Meanwhile the physicists have two incompatible descriptions of the same atom and a great deal of pride invested in each. He begins to suspect that the disagreement is not about nature at all, and that whoever writes down the right mathematical space will make the quarrel disappear.',
          },
        ],
        historicalNote:
          'Von Neumann held junior teaching posts in the late 1920s while beginning the work that became the operator formulation of quantum mechanics. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-encounter-hilbert',
    characterId: 'vonneumann',
    chapterId: 'entry',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'hilbert'],
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'human-gottingen',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1930 },
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'otherCharacterIsHuman', characterId: 'hilbert' },
          { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen', yearTolerance: 1 },
        ],
        title: 'The Old Man’s Programme',
        locationLabel: 'Göttingen',
        image: {
          setting: 'a garden path behind a Göttingen house, two men walking slowly in overcoats',
          year: 1928,
          characters: ['vonneumann', 'hilbert'],
          mood: 'deferential, charged, autumnal',
          details: ['a gravel path between beds cut back for winter', 'two overcoats', 'a walking stick', 'a folded sheet of proof', 'apple trees stripped bare'],
          alt: 'A gravel garden path between beds cut back for winter, with a walking stick leaning against a bench.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'They walk the garden path because the old man walks when he thinks, and the gravel sets the pace of the conversation. The programme is simple to state and enormous to want: every question in mathematics decided, from axioms, by a method a clerk could check.',
          },
          {
            id: 'said',
            narration:
              'He has brought a folded sheet with a piece of the consistency problem worked out further than anyone has taken it. He hands it over on the path, without ceremony, because ceremony would waste a minute of the walk.',
            speaker: 'HILBERT',
            dialogue: 'You are the fastest man I have met and I do not entirely trust speed. But bring me the finished thing and I will put my name under yours on the invitation.',
          },
          {
            id: 'after',
            narration:
              'Afterwards he stands at the gate longer than he needs to. He has just agreed, without saying so, to spend some part of his life defending a building he did not design — and he finds, to his mild surprise, that he wants to.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 2, respect: 2, flag: 'gottingen-programme' },
          { type: 'flag', flag: 'vonneumann.hilbertProgram', value: true },
        ],
        historicalNote:
          'Von Neumann worked closely on Hilbert’s formalist programme at Göttingen in the late 1920s and pursued proofs of consistency for parts of arithmetic. The walk and the dialogue are dramatized.',
      },
      {
        id: 'npc-gottingen',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1930 },
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'otherCharacterIsNpc', characterId: 'hilbert' },
          { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen' },
        ],
        title: 'The Old Man’s Programme',
        locationLabel: 'Göttingen',
        image: {
          setting: 'a seminar room emptying after a lecture, one chair at the front still occupied',
          year: 1928,
          characters: ['vonneumann', 'hilbert'],
          mood: 'deferential, charged, close',
          details: ['a chair at the front of an emptied room', 'a board of unerased formalism', 'a hat left on a table', 'a chalk-marked cuff', 'a window fogged from the inside'],
          alt: 'One chair still occupied at the front of an emptying seminar room before a board of unerased formalism.',
        },
        pages: [
          {
            id: 'stayed',
            narration:
              'The room empties and one chair at the front stays occupied, so he stays too. The programme is simple to state and enormous to want: every question in mathematics decided, from axioms, by a method a clerk could check.',
          },
          {
            id: 'said',
            narration:
              'He sets a folded sheet on the table — a piece of the consistency problem carried further than anyone has taken it — and waits while it is read twice, slowly, by a man who has stopped being in a hurry about anything.',
            speaker: 'HILBERT',
            dialogue: 'We must know. That is not a hope, it is an instruction. Finish this and you may consider the instruction addressed to you.',
          },
          {
            id: 'after',
            narration:
              'He walks back through the town with the sheet in his coat and the instruction in his ears. He has just agreed, without saying so, to spend some part of his life defending a building he did not design.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 2, respect: 2, flag: 'gottingen-programme' },
          { type: 'flag', flag: 'vonneumann.hilbertProgram', value: true },
        ],
        historicalNote:
          '"We must know, we will know" is Hilbert’s own famous formulation of his programme; the surrounding conversation is dramatized. Von Neumann worked on consistency proofs within that programme in the late 1920s.',
      },
      {
        id: 'human-elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1930 },
          { type: 'otherCharacterIsHuman', characterId: 'hilbert' },
        ],
        title: 'A Programme by Post',
        image: {
          setting: 'a desk with a half-written letter and a pile of offprints from another institute',
          year: 1928,
          characters: ['vonneumann'],
          mood: 'distant, respectful, impatient',
          details: ['a half-written letter', 'offprints in a slit envelope', 'a pen laid on blotting paper', 'a wall calendar', 'a cup of coffee gone cold'],
          alt: 'A half-written letter on blotting paper beside offprints spilling from a slit envelope.',
        },
        pages: [
          {
            id: 'offprints',
            narration:
              'The offprints arrive from an institute he is not at, and he reads them standing up in the hall with his coat still on. Somebody, somewhere, is building the floor under all of mathematics and has not asked him to help.',
          },
          {
            id: 'letter',
            narration:
              'So he writes, in careful German, with the consistency argument set out in a numbered list and no flattery anywhere in it. Flattery in a letter is a way of admitting you have nothing to send.',
            speaker: 'JANCSI',
            dialogue: 'I am not asking for a post. I am telling you where your programme currently stops, and offering to move the stop.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, flag: 'gottingen-programme' },
          { type: 'flag', flag: 'vonneumann.hilbertProgram', value: true },
        ],
        historicalNote:
          'Von Neumann engaged with the formalist programme through publication and correspondence as well as in person. This exchange is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1930 },
        ],
        title: 'A Programme by Post',
        image: {
          setting: 'a desk with a half-written letter and a pile of offprints in a slit envelope',
          year: 1928,
          characters: ['vonneumann'],
          mood: 'distant, respectful, impatient',
          details: ['a half-written letter', 'offprints in a slit envelope', 'a pen laid on blotting paper', 'a wall calendar', 'a cup of coffee gone cold'],
          alt: 'A half-written letter on blotting paper beside offprints spilling from a slit envelope.',
        },
        pages: [
          {
            id: 'offprints',
            narration:
              'The offprints come from Göttingen and he reads them in the hall with his coat still on. The ambition in them is almost rude: every question in mathematics decided, from axioms, by a method a clerk could check.',
          },
          {
            id: 'letter',
            narration:
              'He writes back the same evening with the consistency argument set out in a numbered list and no flattery anywhere in it. Flattery in a letter is a way of admitting you have nothing to send.',
            speaker: 'JANCSI',
            dialogue: 'I am not asking for a post. I am telling you where the programme currently stops, and offering to move the stop.',
          },
          {
            id: 'reply',
            narration:
              'The reply, when it comes, is four lines long and he keeps it. For the next few years he will think of the programme as partly his, which is a comfortable way to think about a building, and an expensive one.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, flag: 'gottingen-programme' },
          { type: 'flag', flag: 'vonneumann.hilbertProgram', value: true },
        ],
        historicalNote:
          'Von Neumann corresponded with and worked within Hilbert’s formalist programme in the late 1920s. The letters and dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-encounter-godel',
    characterId: 'vonneumann',
    chapterId: 'entry',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'godel'],
    trigger: { event: 'afterAction', priority: 84 },
    once: true,
    variants: [
      {
        id: 'konigsberg-npc',
        conditions: [
          { type: 'yearAtLeast', year: 1929 },
          { type: 'yearAtMost', year: 1930 },
          { type: 'locationIs', locationId: 'konigsberg' },
          { type: 'otherCharacterIsNpc', characterId: 'godel' },
          { type: 'otherCharacterAt', characterId: 'godel', locationId: 'konigsberg' },
        ],
        title: 'Three Sentences at the Back of a Room',
        locationLabel: 'Königsberg',
        yearLabel: '1930',
        image: {
          setting: 'a conference room after a session, chairs pushed askew and a young man packing a thin folder',
          year: 1930,
          characters: ['vonneumann', 'godel'],
          mood: 'stunned, courteous, vertiginous',
          details: ['chairs pushed askew', 'a thin folder of pages', 'a carafe with a used glass', 'a printed programme of sessions', 'grey light from a high window'],
          alt: 'Chairs pushed askew in an emptied conference room beside a carafe and a thin folder of pages.',
        },
        pages: [
          {
            id: 'remark',
            narration:
              'It is said almost in passing at the end of a discussion, by a very thin young man who does not raise his voice: there are true statements of arithmetic that the axioms cannot reach. Three sentences. Most of the room files out to lunch.',
          },
          {
            id: 'catch',
            narration:
              'He catches him by the chairs before he has finished tying the folder. He has spent four years inside the programme this remark has just walked through, and he wants it repeated slowly, and then he wants to know whether it can be pushed one step further.',
            speaker: 'JANCSI',
            dialogue: 'Say it again with the numbering. If you are right, then the system cannot even prove its own soundness — and I think that follows tonight, not next year.',
          },
          {
            id: 'letter',
            narration:
              'He works it out on the train and posts the derivation, and the reply says, politely, that it is already written and at the printer. He reads that reply twice and then has to decide what kind of man he is going to be about it.',
            choices: [
              {
                id: 'concede',
                label: 'Write back conceding the whole ground, and say so publicly',
                effects: [
                  { type: 'flag', flag: 'vonneumann.priority', value: 'concede' },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 3, flag: 'incompleteness-1930' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { standing: 1, network: 1 } },
                ],
              },
              {
                id: 'publish',
                label: 'Publish your own derivation alongside his',
                effects: [
                  { type: 'flag', flag: 'vonneumann.priority', value: 'publish' },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 1, tension: 2, flag: 'incompleteness-1930' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 1 },
                  { type: 'resources', effects: { exposure: 1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'flag', flag: 'vonneumann.godel', value: true }],
        historicalNote:
          'Gödel announced his first incompleteness result at a Königsberg meeting in 1930; von Neumann grasped it immediately, derived the second theorem independently, and on learning Gödel had it already withdrew in his favour and became a public advocate for the results. Dialogue is dramatized.',
      },
      {
        id: 'konigsberg-human',
        conditions: [
          { type: 'yearAtLeast', year: 1929 },
          { type: 'yearAtMost', year: 1930 },
          { type: 'locationIs', locationId: 'konigsberg' },
          { type: 'otherCharacterIsHuman', characterId: 'godel' },
          { type: 'otherCharacterAt', characterId: 'godel', locationId: 'konigsberg', yearTolerance: 1 },
        ],
        title: 'Three Sentences at the Back of a Room',
        locationLabel: 'Königsberg',
        yearLabel: '1930',
        image: {
          setting: 'a conference anteroom with two men standing apart from the departing crowd',
          year: 1930,
          characters: ['vonneumann', 'godel'],
          mood: 'stunned, courteous, vertiginous',
          details: ['a departing crowd in overcoats', 'a thin folder held against a chest', 'a printed programme of sessions', 'a cloakroom counter', 'rain on a tall window'],
          alt: 'Two men standing apart in a conference anteroom while a crowd in overcoats leaves past a cloakroom counter.',
        },
        pages: [
          {
            id: 'remark',
            narration:
              'The remark is made almost in passing at the end of a session and hardly anybody stops walking: there are true statements of arithmetic the axioms cannot reach. He stops walking.',
          },
          {
            id: 'catch',
            narration:
              'In the anteroom, with the cloakroom queue moving past them, he asks for it again slowly and then asks the question that follows from it — the one that takes the floor out from under the whole programme, not just one room of it.',
            speaker: 'JANCSI',
            dialogue: 'Then no such system can prove its own soundness. You see that, I think. I am afraid I saw it about eleven seconds ago and I would rather you had it.',
          },
          {
            id: 'letter',
            narration:
              'On the train he writes the derivation out anyway, because a thing is not his until it is on paper, and then he has to decide what to do with a page he already knows he was not first to.',
            choices: [
              {
                id: 'concede',
                label: 'Write back conceding the whole ground, and say so publicly',
                effects: [
                  { type: 'flag', flag: 'vonneumann.priority', value: 'concede' },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 3, flag: 'incompleteness-1930' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { standing: 1, network: 1 } },
                ],
              },
              {
                id: 'publish',
                label: 'Publish your own derivation alongside his',
                effects: [
                  { type: 'flag', flag: 'vonneumann.priority', value: 'publish' },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 1, tension: 2, flag: 'incompleteness-1930' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 1 },
                  { type: 'resources', effects: { exposure: 1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'flag', flag: 'vonneumann.godel', value: true }],
        historicalNote:
          'The 1930 Königsberg announcement of incompleteness and von Neumann’s immediate grasp of its consequences are documented; his independent derivation of the second theorem and his deference over priority are also on the record. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1929 },
          { type: 'yearAtMost', year: 1930 },
        ],
        title: 'Three Sentences in a Report',
        yearLabel: '1930',
        image: {
          setting: 'a desk with a conference report open at a short paragraph, a lamp burning at midday',
          year: 1930,
          characters: ['vonneumann'],
          mood: 'winded, exhilarated, sleepless',
          details: ['a conference report open at a marked paragraph', 'a lamp burning in daylight', 'a page of derivation in pencil', 'an unstamped envelope', 'a cold breakfast pushed aside'],
          alt: 'A conference report open at a marked paragraph beside a page of pencil derivation and an unstamped envelope.',
        },
        pages: [
          {
            id: 'report',
            narration:
              'The report of the meeting runs to forty pages and the thing that matters is three sentences on page nineteen: there are true statements of arithmetic that the axioms cannot reach. He reads it, puts the report down, and does not move for some time.',
          },
          {
            id: 'consequence',
            narration:
              'Four years of his own work have just been given a ceiling, and his first clear feeling is not loss but appetite — because if that is true, then something else follows at once, and he can see the shape of it already.',
            speaker: 'JANCSI',
            dialogue: 'Then no such system can prove its own soundness. That is worse. That is much better.',
          },
          {
            id: 'letter',
            narration:
              'He works it out before morning and writes to Vienna, and the answer says, courteously, that it is already at the printer. He reads the answer twice and then has to decide what kind of man he is going to be about it.',
            choices: [
              {
                id: 'concede',
                label: 'Write back conceding the whole ground, and say so publicly',
                effects: [
                  { type: 'flag', flag: 'vonneumann.priority', value: 'concede' },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 3, flag: 'incompleteness-1930' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { standing: 1, network: 1 } },
                ],
              },
              {
                id: 'publish',
                label: 'Publish your own derivation alongside his',
                effects: [
                  { type: 'flag', flag: 'vonneumann.priority', value: 'publish' },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 1, tension: 2, flag: 'incompleteness-1930' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 1 },
                  { type: 'resources', effects: { exposure: 1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'flag', flag: 'vonneumann.godel', value: true }],
        historicalNote:
          'Von Neumann learned of the incompleteness result in 1930, derived the unprovability of consistency independently, and yielded priority on discovering it was already written up. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-entry-closing',
    characterId: 'vonneumann',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'godel'],
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'conceded',
        conditions: [{ type: 'choiceWas', choiceKey: 'vonneumann-encounter-godel:letter', choiceId: 'concede' }],
        title: 'The Generous Letter',
        yearLabel: '1930',
        image: {
          setting: 'a lecture hall where a speaker is explaining another man’s theorem to a full room',
          year: 1931,
          characters: ['vonneumann'],
          mood: 'open-handed, clear, a little wistful',
          details: ['a full hall of seated coats', 'a board of numbered statements', 'a printed offprint held up', 'a lectern with no notes on it', 'winter light through high windows'],
          alt: 'A board of numbered statements in a full lecture hall, with an offprint held up beside an empty lectern.',
        },
        pages: [
          {
            id: 'lecturing',
            narration:
              'He spends the winter explaining somebody else’s theorem to rooms that have not understood it yet, and he does it better than almost anyone could, and every time he does it he says the other man’s name first.',
          },
          {
            id: 'cost',
            narration:
              'The programme he believed in is finished and he is the one carrying the news. It has cost him a result he had in his own hand. He finds he does not mind as much as he expected, and he is not certain whether that is grace or simply a large appetite for what comes next.',
          },
        ],
        historicalNote:
          'Von Neumann became one of the earliest and most effective public expositors of Gödel’s incompleteness results, having conceded priority on the second theorem.',
      },
      {
        id: 'godel',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.godel' }],
        title: 'The Ceiling',
        yearLabel: '1930',
        image: {
          setting: 'a study at night with a shelf of work on foundations and one drawer standing open',
          year: 1930,
          characters: ['vonneumann'],
          mood: 'reckoning, restless, oddly free',
          details: ['a shelf of bound foundations papers', 'an open drawer', 'a pen across a closed notebook', 'a folded conference report', 'an unlit lamp'],
          alt: 'A shelf of bound papers on foundations above an open drawer holding a closed notebook.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The shelf holds four years of work on foundations and the four years are still correct; they are simply no longer the road anywhere. There is a ceiling in the building now and everybody who works there can see it.',
          },
          {
            id: 'onward',
            narration:
              'He closes the drawer without regret, which surprises the people who know him least. If mathematics cannot be finished, then the interesting question is what mathematics can be made to do — and there is a great deal in the world that has not yet been made to do anything.',
          },
        ],
        historicalNote:
          'After 1930 von Neumann largely turned away from foundational logic toward quantum theory, economics, and computation. The reckoning is dramatized.',
      },
      {
        id: 'hilbert',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.hilbertProgram' }],
        title: 'A Building With No Roof Yet',
        yearLabel: '1930',
        image: {
          setting: 'an institute stairwell at dusk with a briefcase set down on a step',
          year: 1930,
          characters: ['vonneumann'],
          mood: 'loyal, unfinished, patient',
          details: ['a briefcase set on a stair', 'a stone stairwell', 'a coat over a banister', 'a folded seminar notice', 'a gas lamp lit outside'],
          alt: 'A briefcase set down on a stone stair beside a coat thrown over a banister at dusk.',
        },
        pages: [
          {
            id: 'stair',
            narration:
              'He sits on the stair with the case beside him and the seminar notice for next term in his hand. The programme is not finished and nobody has yet shown that it cannot be, and until somebody does he intends to keep laying bricks.',
          },
          {
            id: 'onward',
            narration:
              'There is a letter in the case from across the ocean, offering a term’s lecturing at a place he has never seen. He tells himself it is only a term. He is aware, as he tells himself this, that he is doing it.',
          },
        ],
        historicalNote:
          'Von Neumann was invited to lecture at Princeton around 1930 and moved to the United States in stages. The stairwell is dramatized.',
      },
      {
        id: 'default',
        title: 'An Offer From Across the Water',
        yearLabel: '1930',
        image: {
          setting: 'a table with an unfolded letter bearing an American letterhead and a steamship schedule',
          year: 1930,
          characters: ['vonneumann'],
          mood: 'weighing, unsentimental, curious',
          details: ['a letter with an American letterhead', 'a steamship schedule', 'a pocket atlas open at the Atlantic', 'a cup on a saucer', 'a hat on the table edge'],
          alt: 'An unfolded letter with an American letterhead beside a steamship schedule and a pocket atlas.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter has an American letterhead and a salary in it that reads like a misprint, and it asks for one term. He puts the steamship schedule beside it and looks at the two of them for a while.',
          },
          {
            id: 'onward',
            narration:
              'Europe is behaving in a way he has seen before and did not enjoy the first time. He is twenty-six, he has four languages and no fallback, and he has always intended to have somewhere else to be able to go. He writes to accept, for one term.',
          },
        ],
        historicalNote:
          'Von Neumann began lecturing at Princeton around 1930 and settled permanently in the United States as conditions in Europe worsened.',
      },
    ],
  },

  // ───────────────────────────────────────────── breakthrough, 1930–1944
  {
    id: 'vonneumann-breakthrough-opening',
    characterId: 'vonneumann',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'One Term, Extended',
        locationLabel: 'Princeton',
        yearLabel: '1930–1944',
        image: {
          setting: 'a borrowed university office with crates still roped shut and a window onto flat American lawn',
          year: 1931,
          characters: ['vonneumann'],
          mood: 'provisional, curious, appetitive',
          details: ['crates still roped shut', 'a borrowed desk', 'a lecture list with his name added in ink', 'a wide window onto lawn', 'a gramophone in its case'],
          alt: 'Crates still roped shut in a borrowed office with a wide window onto flat lawn.',
        },
        pages: [
          {
            id: 'office',
            narration:
              'He came for one term and the crates are still roped shut in the corner, which is his way of not deciding. The lawn outside is flat in a manner no European lawn is flat. On the lecture list in the hall his name has been added in ink at the bottom, under the printed ones.',
          },
          {
            id: 'terms',
            narration:
              'There is a rumour in the corridors about money: a new institute being assembled a mile away, with an endowment, no students, and a shortlist. Nobody will say who is on the shortlist, which is how he knows the shortlist exists.',
            speaker: 'A COLLEAGUE',
            dialogue: 'They mean to buy the best minds in the world and give them nothing whatever to do. Half of them will go to pieces on it. The other half will do the century’s work.',
          },
          {
            id: 'appetite',
            narration:
              'He unropes one crate — the gramophone — and leaves the rest. Quantum mechanics is unfinished, economics has no mathematics worth the name, and there is a whole ocean between him and the newspapers from home, which he has begun to read standing up.',
          },
        ],
        historicalNote:
          'Von Neumann came to Princeton University in 1930 as a visiting lecturer and became a professor there before the Institute for Advanced Study, founded in 1930, appointed its first professors in 1933. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Post With No Duties, Somewhere',
        yearLabel: '1930–1944',
        image: {
          setting: 'a study with a prospectus for a new research institute open beside a blackboard',
          year: 1931,
          characters: ['vonneumann'],
          mood: 'provisional, curious, appetitive',
          details: ['a prospectus for a new institute', 'a newly hung blackboard', 'a gramophone in its case', 'a stack of foreign newspapers', 'a coat still on its hanger'],
          alt: 'A prospectus for a new research institute lying open beside a newly hung blackboard.',
        },
        pages: [
          {
            id: 'crates',
            narration:
              'The prospectus is eight pages of very good paper and describes an institute that does not exist yet: an endowment, no students, no lectures, and a shortlist nobody will name. He reads it twice, the way he checks a sum.',
          },
          {
            id: 'terms',
            narration:
              'It is the arrangement he would have designed for himself and did not dare ask anyone for. He puts it in the drawer, on top, where he will see it every time he opens the drawer.',
            speaker: 'A COLLEAGUE',
            dialogue: 'No duties at all. Half of them will go to pieces on it. The other half will do the century’s work. Which half would you be?',
          },
          {
            id: 'appetite',
            narration:
              'He sets up the gramophone under the blackboard and by the end of the week both are in use at once. Quantum mechanics is unfinished, economics has no mathematics worth the name, and the newspapers have started using a tone he recognises from when he was fifteen.',
          },
        ],
        historicalNote:
          'The Institute for Advanced Study was founded in 1930 and appointed its first professors in 1933; von Neumann was among them. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-founding-professor',
    characterId: 'vonneumann',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 95 },
    once: true,
    replacesContextCardId: 'vonneumann-card-1930-princeton',
    variants: [
      {
        id: 'europe',
        conditions: [
          { type: 'yearAtLeast', year: 1932 },
          { type: 'yearAtMost', year: 1940 },
          { not: { type: 'visitedLocation', locationId: 'princeton' } },
        ],
        title: 'The Chair Across the Water',
        yearLabel: '1933',
        image: {
          setting: 'a European study where an engraved American letter lies beside a passport and a departure schedule',
          year: 1933,
          characters: ['vonneumann'],
          mood: 'weighed, watchful, unresolved',
          details: ['an engraved letter with an American seal', 'a passport with a worn cover', 'a shipping company schedule', 'a newspaper folded to an inside page', 'a lamp turned low at midday'],
          alt: 'An engraved letter with an American seal beside a worn passport and a shipping company schedule.',
        },
        pages: [
          {
            id: 'offer',
            narration:
              'The letter is engraved and offers a founding chair at an institute with an endowment, no students, and an ocean around it. It has been on the desk for eleven days beside his passport, which he has also not put away.',
          },
          {
            id: 'papers',
            narration:
              'The newspaper is folded to an inside page because the inside pages are where it is happening: a faculty list here, a resignation there, a word he has not seen in print since he was fifteen. Göttingen is not being closed. It is being emptied, name by name.',
            speaker: 'A COLLEAGUE',
            dialogue: 'You have somewhere to go. Most of the people in this building do not. Whatever you decide about the chair, decide it early enough to be useful to them.',
          },
          {
            id: 'choice',
            narration:
              'That is the real question and the chair is only the frame around it. He is a man with a passport, a name that still opens doors, and a finite quantity of both.',
            choices: [
              {
                id: 'affidavits',
                label: 'Spend the name on paperwork for anyone who asks',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'affidavits' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { funds: -1, network: 2 } },
                ],
              },
              {
                id: 'posts',
                label: 'Spend it finding them actual posts, slowly and properly',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'posts' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'work',
                label: 'Answer what you can and get back to the mathematics',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'work' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, theory: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1930-princeton' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Von Neumann was appointed one of the first professors of the Institute for Advanced Study in 1933, alongside Einstein. Here the offer reaches him while he is still in Europe, in the year German faculties were being emptied of Jewish and politically suspect academics — a documented event. Whether he crosses, and when, is his own; the scene and dialogue are dramatized.',
      },
      {
        id: 'princeton-exile',
        conditions: [
          { type: 'yearAtLeast', year: 1932 },
          { type: 'yearAtMost', year: 1940 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'narrativeFlag', flag: 'vonneumann.exile' },
        ],
        title: 'A Founding Professor',
        locationLabel: 'Princeton',
        yearLabel: '1933',
        image: {
          setting: 'a common room with a tea urn and a noticeboard of new appointments, snow beyond the windows',
          year: 1933,
          characters: ['vonneumann'],
          mood: 'fortunate, guilty, resolute',
          details: ['a noticeboard of typed appointments', 'a tea urn', 'European newspapers folded on a low table', 'snow on a sill', 'a stack of blank affidavit forms'],
          alt: 'A noticeboard of typed appointments above a low table of folded European newspapers and blank forms.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'The appointment goes up typed on the noticeboard between the tea urn and the window, and his name is on the founding list with a handful of others, and he is by some years the youngest of them. He is twenty-nine.',
          },
          {
            id: 'papers',
            narration:
              'On the low table under the noticeboard are the European papers, four days old, and he reads them standing with a cup going cold in his hand. He has been driven out of a country once already and remembers exactly what the first week of it feels like.',
            speaker: 'A COLLEAGUE',
            dialogue: 'Göttingen is being emptied. Not closed — emptied, name by name. There will be a great deal of post from Europe this year and it will all be asking the same thing.',
          },
          {
            id: 'choice',
            narration:
              'The blank affidavit forms are already stacked on the table because somebody sensible has anticipated the year. Every name he vouches for is a promise made with his own standing, and there is not enough of it to go round.',
            choices: [
              {
                id: 'affidavits',
                label: 'Sign for as many as your name will carry',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'affidavits' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { funds: -1, network: 2 } },
                ],
              },
              {
                id: 'posts',
                label: 'Spend your standing finding them actual posts, slowly and properly',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'posts' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'work',
                label: 'Answer what you can and go back to the mathematics',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'work' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1930-princeton' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Von Neumann was one of the first professors appointed to the Institute for Advanced Study in 1933, alongside Einstein, in the year German universities began dismissing Jewish academics. Many émigré scientists needed sponsors and posts. Dialogue is dramatized.',
      },
      {
        id: 'princeton',
        conditions: [
          { type: 'yearAtLeast', year: 1932 },
          { type: 'yearAtMost', year: 1940 },
          { type: 'locationIs', locationId: 'princeton' },
        ],
        title: 'A Founding Professor',
        locationLabel: 'Princeton',
        yearLabel: '1933',
        image: {
          setting: 'a common room with a tea urn and a noticeboard of new appointments, snow beyond the windows',
          year: 1933,
          characters: ['vonneumann'],
          mood: 'fortunate, sober, resolute',
          details: ['a noticeboard of typed appointments', 'a tea urn', 'European newspapers folded on a low table', 'snow on a sill', 'a stack of blank affidavit forms'],
          alt: 'A noticeboard of typed appointments above a low table of folded European newspapers and blank forms.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'The appointment goes up typed on the noticeboard between the tea urn and the window. His name is on the founding list with a handful of others, and he is by some years the youngest of them. He is twenty-nine.',
          },
          {
            id: 'papers',
            narration:
              'Underneath the notice, on the low table, are the European papers four days old. He reads them standing, with a cup going cold in his hand, and does the arithmetic he has done since he was fifteen: who can leave, on what money, to where.',
            speaker: 'A COLLEAGUE',
            dialogue: 'Göttingen is being emptied. Not closed — emptied, name by name. There will be a great deal of post from Europe this year and it will all be asking the same thing.',
          },
          {
            id: 'choice',
            narration:
              'The blank affidavit forms are already stacked on the table because somebody sensible has anticipated the year. Every name he vouches for is a promise made with his own standing, and there is not enough of it to go round.',
            choices: [
              {
                id: 'affidavits',
                label: 'Sign for as many as your name will carry',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'affidavits' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { funds: -1, network: 2 } },
                ],
              },
              {
                id: 'posts',
                label: 'Spend your standing finding them actual posts, slowly and properly',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'posts' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'work',
                label: 'Answer what you can and go back to the mathematics',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'work' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1930-princeton' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Von Neumann became one of the first professors of the Institute for Advanced Study in 1933, alongside Einstein. The affidavit choice reflects the real position of established émigré scientists in that decade; the scene is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1932 },
          { type: 'yearAtMost', year: 1940 },
        ],
        title: 'A Founding Professor',
        yearLabel: '1933',
        image: {
          setting: 'a desk with a formal letter of appointment beside a stack of European newspapers',
          year: 1933,
          characters: ['vonneumann'],
          mood: 'fortunate, sober, resolute',
          details: ['an engraved letter of appointment', 'European newspapers four days old', 'a fountain pen uncapped', 'blank sponsorship forms', 'a cup gone cold'],
          alt: 'An engraved letter of appointment on a desk beside four-day-old newspapers and blank forms.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter is engraved and formal and offers him a founding chair at an institute that has no buildings yet, only money and a list of names. He is twenty-nine and by some years the youngest name on it.',
          },
          {
            id: 'papers',
            narration:
              'Beside it on the desk are the European papers, four days old. He reads them with a cup going cold in his hand and does the arithmetic he has done since he was fifteen: who can leave, on what money, to where.',
            speaker: 'A COLLEAGUE',
            dialogue: 'Göttingen is being emptied. Not closed — emptied, name by name. There will be a great deal of post from Europe this year and it will all be asking the same thing.',
          },
          {
            id: 'choice',
            narration:
              'Somebody sensible has already sent him a stack of blank sponsorship forms. Every name he vouches for is a promise made with his own standing, and there is not enough of it to go round.',
            choices: [
              {
                id: 'affidavits',
                label: 'Sign for as many as your name will carry',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'affidavits' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { funds: -1, network: 2 } },
                ],
              },
              {
                id: 'posts',
                label: 'Spend your standing finding them actual posts, slowly and properly',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'posts' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'work',
                label: 'Answer what you can and go back to the mathematics',
                effects: [
                  { type: 'flag', flag: 'vonneumann.letters', value: 'work' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1930-princeton' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'The Institute for Advanced Study appointed von Neumann as one of its first professors in 1933. The affidavit choice reflects the real position of established émigré scientists in that decade; the scene is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-quantum-breakthrough',
    characterId: 'vonneumann',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'vonneumann-quantum-foundations', priority: 84 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'One Space for Both Quarrels',
        locationLabel: 'Göttingen',
        image: {
          setting: 'a physics institute blackboard at night with two rival notations chalked side by side and a bracket drawn round them',
          year: 1932,
          characters: ['vonneumann'],
          mood: 'settling, austere, quietly final',
          details: ['two notations chalked side by side', 'a large bracket drawn round both', 'a duster grey with chalk', 'a bound proof sheet', 'a single lit desk lamp'],
          alt: 'Two rival mathematical notations chalked side by side on a blackboard with a large bracket drawn round both.',
        },
        pages: [
          {
            id: 'two',
            narration:
              'The two descriptions have been shouting past each other for six years, matrices on the left of the board and waves on the right, each side certain the other is a translation of itself. He draws one bracket around both.',
          },
          {
            id: 'space',
            narration:
              'Inside the bracket is a space of infinitely many directions, and states are directions in it, and measurements are operators on it, and the quarrel is not settled so much as revealed to have been a quarrel about handwriting.',
            speaker: 'A PHYSICIST',
            dialogue: 'You have taken our argument away from us. What are we supposed to do at conferences now?',
          },
          {
            id: 'cost',
            narration:
              'What the book cannot say, and what he privately suspects, is that a formalism this clean will be mistaken for an explanation. He writes it anyway. A house should have a floor even if the people living in it argue about the roof.',
          },
        ],
        historicalNote:
          'Von Neumann’s 1932 Mathematical Foundations of Quantum Mechanics recast the theory in terms of operators on Hilbert space, showing the matrix and wave formulations to be equivalent. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'One Space for Both Quarrels',
        image: {
          setting: 'a desk with a bound typescript, its title page turned face up under a lamp',
          year: 1932,
          characters: ['vonneumann'],
          mood: 'settling, austere, quietly final',
          details: ['a bound typescript face up', 'a page of operator notation', 'a lamp with a green shade', 'a physics journal folded open', 'an empty coffee cup with two spoons'],
          alt: 'A bound typescript lying face up under a green-shaded lamp beside a page of operator notation.',
        },
        pages: [
          {
            id: 'two',
            narration:
              'The two descriptions of the atom have been shouting past each other for six years, each side certain the other is a translation of itself. He builds the room they are both standing in and then points at the floor.',
          },
          {
            id: 'space',
            narration:
              'A space of infinitely many directions. States are directions in it; measurements are operators on it. The quarrel is not settled so much as shown to have been a quarrel about handwriting.',
            speaker: 'JANCSI',
            dialogue: 'They will thank me for the rigour and go on saying whatever they like about what it means. That part is not mathematics and I cannot help them with it.',
          },
          {
            id: 'cost',
            narration:
              'The typescript is thick and cold and correct, and he knows a formalism this clean will be mistaken for an explanation. He sends it anyway. A house should have a floor even if the people living in it argue about the roof.',
          },
        ],
        historicalNote:
          'The 1932 book gave quantum mechanics its rigorous operator formulation and remains the standard mathematical treatment. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-games-breakthrough',
    characterId: 'vonneumann',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'vonneumann-game-theory', priority: 84 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'The Mathematics of Bluffing',
        locationLabel: 'Princeton',
        image: {
          setting: 'a study late at night with a card table pulled up to a desk and a manuscript in two hands of writing',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'playful, rigorous, enormous',
          details: ['a card table pulled to a desk', 'a manuscript in two hands of writing', 'a scattered hand of cards', 'a stopped clock', 'a decanter and two glasses'],
          alt: 'A card table pulled up to a desk holding a manuscript written in two different hands, with cards scattered beside it.',
        },
        pages: [
          {
            id: 'cards',
            narration:
              'It begins with poker, which is the only pastime he has ever taken seriously, and with the observation that bluffing is not cheating or psychology but a move — one you must sometimes make, at a calculable rate, or be beaten by people who do.',
          },
          {
            id: 'morgenstern',
            narration:
              'The economist across the card table wanted a paper. What arrives instead, after months of nights, is six hundred pages in two hands of writing, in which economics is offered a spine it did not ask for.',
            speaker: 'MORGENSTERN',
            dialogue: 'We agreed on twenty pages, Johnny. It is now longer than most of the discipline it is about.',
          },
          {
            id: 'stakes',
            narration:
              'Inside it is a theorem about two parties with opposed interests, which says that even in pure conflict there is a value, and a way to play that cannot be exploited. He is pleased with it in 1944, in a year full of conflict, for reasons he does not put in the preface.',
          },
        ],
        historicalNote:
          'Theory of Games and Economic Behavior, written with the economist Oskar Morgenstern and published in 1944, grew from von Neumann’s earlier minimax theorem. His interest in poker as a model of strategic bluffing is well attested. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Mathematics of Bluffing',
        image: {
          setting: 'a desk buried under a very long manuscript, a hand of cards laid out on the corner',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'playful, rigorous, enormous',
          details: ['a very long manuscript in two hands', 'a hand of cards on a desk corner', 'a stopped clock', 'a page of matrices', 'a coffee ring on a title page'],
          alt: 'A very long manuscript in two hands of writing on a desk with a hand of cards laid out at the corner.',
        },
        pages: [
          {
            id: 'cards',
            narration:
              'It begins with poker, the only pastime he has ever taken seriously, and with the observation that bluffing is not cheating or psychology but a move — one you must make at a calculable rate or be beaten by people who do.',
          },
          {
            id: 'theorem',
            narration:
              'From there it grows past the pastime and past the paper it was supposed to be. Two parties with opposed interests, no trust, no communication; and still there is a value, and still there is a way to play that cannot be exploited.',
            speaker: 'JANCSI',
            dialogue: 'Economics has been writing poetry about markets for a century. Here is a spine. It will hurt going in.',
          },
          {
            id: 'stakes',
            narration:
              'He finishes it in 1944, in a year with a great deal of opposed interest in it, and does not put in the preface why the subject appealed to him just then.',
          },
        ],
        historicalNote:
          'Theory of Games and Economic Behavior appeared in 1944, written with the economist Oskar Morgenstern. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-personal-westcott',
    characterId: 'vonneumann',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 56 },
    once: true,
    variants: [
      {
        id: 'comfortable',
        conditions: [
          { type: 'yearAtLeast', year: 1933 },
          { type: 'yearAtMost', year: 1943 },
          { type: 'resourceAtLeast', resource: 'funds', value: 4 },
        ],
        title: 'The Loudest House on the Street',
        yearLabel: '1934',
        image: {
          setting: 'a bright house on a suburban street on a Saturday night, coats piled on a banister',
          year: 1934,
          characters: ['vonneumann'],
          mood: 'gregarious, loud, oddly solitary',
          details: ['coats piled on a banister', 'a gramophone with the lid up', 'glasses crowding a sideboard', 'a study door ajar on a lit desk', 'a car parked badly at the kerb'],
          alt: 'Coats piled on a banister beside a gramophone with its lid up and a study door ajar on a lit desk.',
        },
        pages: [
          {
            id: 'party',
            narration:
              'There are forty people in the house and the gramophone is at a volume the neighbours have stopped mentioning. He knows every guest’s subject and at least one joke in it, and he moves through the rooms the way a man reads a column of figures.',
          },
          {
            id: 'study',
            narration:
              'At some point in the evening the study door stands ajar and he is at the desk inside with the noise coming through it, working. This is not rudeness. Silence is where his attention goes wandering; a party is a fence around it.',
            speaker: 'A GUEST',
            dialogue: 'Johnny, your own party is happening without you. — Yes. That is what makes it useful.',
          },
        ],
        historicalNote:
          'Von Neumann’s Princeton house was known for frequent, loud parties, and he habitually worked amid noise, sometimes with music playing loudly. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1933 },
          { type: 'yearAtMost', year: 1943 },
        ],
        title: 'The Noise He Needs',
        yearLabel: '1934',
        image: {
          setting: 'a rented room with a gramophone playing loudly beside a desk of pages',
          year: 1934,
          characters: ['vonneumann'],
          mood: 'restless, companionable with nobody, working',
          details: ['a gramophone with the lid up', 'a desk of loose pages', 'a chair turned away from the window', 'a plate of food untouched', 'a wall shared with a neighbour'],
          alt: 'A gramophone with its lid up beside a desk covered in loose pages and an untouched plate of food.',
        },
        pages: [
          {
            id: 'volume',
            narration:
              'The neighbour knocks about the gramophone and he apologises with great charm and does not turn it down, because he has tried the quiet version of this and the quiet version does not work.',
          },
          {
            id: 'why',
            narration:
              'In silence his attention goes off hunting other problems and comes back late and pleased with itself and useless. Noise pins it in the chair. He has never explained this to anybody who did not immediately think he was being clever about it.',
            speaker: 'JANCSI',
            dialogue: 'Quiet is where my attention goes looking for other work. Give me a brass band and I will finish the page.',
          },
        ],
        historicalNote:
          'Von Neumann’s habit of working amid loud music and conversation is widely reported. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-encounter-turing',
    characterId: 'vonneumann',
    chapterId: 'breakthrough',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'turingBletchley'],
    trigger: { event: 'afterAction', priority: 78 },
    once: true,
    variants: [
      {
        id: 'npc-princeton',
        conditions: [
          { type: 'yearAtLeast', year: 1936 },
          { type: 'yearAtMost', year: 1939 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'otherCharacterIsNpc', characterId: 'turing' },
          { type: 'otherCharacterAt', characterId: 'turing', locationId: 'princeton' },
        ],
        title: 'The Machine That Reads Its Own Tape',
        locationLabel: 'Princeton',
        image: {
          setting: 'a common room with two men over an offprint, teacups pushed to the far end of the table',
          year: 1937,
          characters: ['vonneumann', 'turing'],
          mood: 'delighted, technical, seed-planting',
          details: ['an offprint folded back on itself', 'teacups pushed aside', 'a pencil sketch of a tape and squares', 'a shabby jacket on a chair', 'rain against a leaded window'],
          alt: 'An offprint folded back beside a pencil sketch of a tape divided into squares, with teacups pushed aside.',
        },
        pages: [
          {
            id: 'offprint',
            narration:
              'The paper is about a machine that does not exist: a tape divided into squares, a head that reads and writes one square at a time, and a table of rules. It is the plainest thing he has read in years and it settles a question he thought would take a generation.',
          },
          {
            id: 'talk',
            narration:
              'They talk over the pushed-aside teacups until the common room is dark. The young Englishman is awkward at the beginning of every sentence and completely unembarrassed by the middle of it, which is a combination he has not met before.',
            speaker: 'TURING',
            dialogue: 'The point is that one machine can be given a description of any other and then simply be it. There is nothing else needed. That is the whole of it.',
          },
          {
            id: 'offer',
            narration:
              'He offers him a post on the spot and is turned down, courteously, for reasons that have to do with England. He files the tape and the head and the table of rules somewhere he will not lose them. It will be nine years before he needs them.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'turing', familiarity: 2, respect: 3, flag: 'universal-machine' },
          { type: 'flag', flag: 'vonneumann.turing', value: true },
        ],
        historicalNote:
          'Turing was at Princeton from 1936 to 1938; von Neumann knew his work on computable numbers and offered him an assistantship, which Turing declined to return to Britain. Dialogue is dramatized.',
      },
      {
        id: 'human-princeton',
        conditions: [
          { type: 'yearAtLeast', year: 1936 },
          { type: 'yearAtMost', year: 1939 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'otherCharacterIsHuman', characterId: 'turing' },
          { type: 'otherCharacterAt', characterId: 'turing', locationId: 'princeton', yearTolerance: 1 },
        ],
        title: 'The Machine That Reads Its Own Tape',
        locationLabel: 'Princeton',
        image: {
          setting: 'a lawn path between institute buildings, two men walking with an offprint between them',
          year: 1937,
          characters: ['vonneumann', 'turing'],
          mood: 'delighted, technical, seed-planting',
          details: ['an offprint carried folded', 'a path across mown grass', 'a bicycle laid down on the verge', 'a jacket with a torn pocket', 'a low sun through elms'],
          alt: 'A folded offprint carried along a path across mown grass, with a bicycle laid down on the verge.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'They walk the path twice because neither of them wants to be the one who goes indoors. A tape divided into squares, a head that reads and writes one square at a time, and a table of rules — and out of that, in principle, everything.',
          },
          {
            id: 'talk',
            narration:
              'The young man is awkward at the start of every sentence and completely unembarrassed by the middle of it. He asks him the question he asks everyone whose work frightens him slightly, which is what he intends to do next.',
            speaker: 'TURING',
            dialogue: 'Nothing else is needed. Give one machine the description of any other and it will simply be it. Everything after that is engineering.',
          },
          {
            id: 'offer',
            narration:
              'He offers a post and is turned down, courteously, for reasons that have to do with England and are not fully explained. He files the tape and the head and the table of rules somewhere he will not lose them.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'turing', familiarity: 2, respect: 3, flag: 'universal-machine' },
          { type: 'flag', flag: 'vonneumann.turing', value: true },
        ],
        historicalNote:
          'Von Neumann and Turing overlapped at Princeton in the late 1930s and von Neumann offered him a position. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1936 },
          { type: 'yearAtMost', year: 1939 },
        ],
        title: 'An Offprint From Cambridge',
        image: {
          setting: 'a desk with a journal offprint read to pieces, its margins filled with pencil',
          year: 1937,
          characters: ['vonneumann'],
          mood: 'arrested, admiring, storing it away',
          details: ['a much-handled offprint', 'margins filled with pencil', 'a sketch of a tape and squares', 'a drawer standing open', 'a lamp left burning at dawn'],
          alt: 'A much-handled journal offprint with pencil-filled margins beside a sketch of a tape divided into squares.',
        },
        pages: [
          {
            id: 'read',
            narration:
              'The offprint comes from Cambridge and is about a machine that does not exist: a tape divided into squares, a head that reads and writes one square at a time, and a table of rules. He reads it at a sitting and then again with a pencil.',
          },
          {
            id: 'point',
            narration:
              'The point is not the machine. The point is that one machine, given a description of any other, becomes it — that instructions and data can be the same kind of thing, written on the same tape.',
            speaker: 'JANCSI',
            dialogue: 'Somebody has just told us that the plan and the material are made of the same stuff. Nobody appears to have noticed.',
          },
          {
            id: 'drawer',
            narration:
              'He writes a short letter of admiration to a man he has not met and puts the offprint in a drawer he does not use for rubbish. It will be nine years before he needs it, and then he will need it very badly.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'turing', familiarity: 1, respect: 3, flag: 'universal-machine' },
          { type: 'flag', flag: 'vonneumann.turing', value: true },
        ],
        historicalNote:
          'Turing’s 1936 paper on computable numbers introduced the universal machine; von Neumann knew the work well and it informed his later computer designs. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-breakthrough-closing',
    characterId: 'vonneumann',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'games',
        conditions: [{ type: 'projectCompleted', projectId: 'vonneumann-game-theory' }],
        title: 'Four Fields and a Telephone',
        yearLabel: '1944',
        image: {
          setting: 'a study with four separate stacks of work on one desk and a telephone off its hook',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'formidable, stretched, summoned',
          details: ['four separate stacks of work', 'a telephone off its hook', 'a travel bag by the door', 'a folded government telegram', 'a blackboard rubbed to a grey blur'],
          alt: 'Four separate stacks of work on one desk beside a telephone left off its hook and a travel bag by the door.',
        },
        pages: [
          {
            id: 'stacks',
            narration:
              'Four stacks on one desk: operators, ordinals, strategies, and something with shock waves in it that a colonel asked about. Any one of them would be a career. He has done them in fourteen years and is faintly impatient with the rate.',
          },
          {
            id: 'telegram',
            narration:
              'The telephone has been off its hook since Tuesday and there is a telegram folded under it that does not say where he is being asked to go, only that he is. He puts the four stacks in order of what will survive being abandoned, and packs.',
          },
        ],
        historicalNote:
          'By 1944 von Neumann was working simultaneously in operator theory, logic, economics, and applied mathematics for the war effort, travelling constantly on classified consultancy.',
      },
      {
        id: 'letters-europe',
        conditions: [
          { not: { type: 'visitedLocation', locationId: 'princeton' } },
          { type: 'narrativeFlag', flag: 'vonneumann.letters' },
        ],
        title: 'The Ledger of Names',
        yearLabel: '1944',
        image: {
          setting: 'a desk drawer pulled out on a bundle of carbon copies tied with string, shutters closed at midday',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'sober, accounting, closing in',
          details: ['carbon copies tied with string', 'a pulled-out drawer', 'shutters closed at midday', 'an atlas open at central Europe', 'a passport lying on the blotter'],
          alt: 'A bundle of carbon copies tied with string in a pulled-out drawer beside a passport on a blotter.',
        },
        pages: [
          {
            id: 'carbons',
            narration:
              'The carbons are tied with string in the bottom drawer: every letter he wrote for somebody trying to get out, with the date and the outcome pencilled in the corner where he knows the outcome.',
          },
          {
            id: 'count',
            narration:
              'He is a man who counts, and he has counted these, and the number is smaller than the number of letters that came. His own passport is on the blotter with the drawer standing open, and it has been there for some weeks, and the shutters have been closed since March.',
          },
        ],
        historicalNote:
          'Established scientists wrote sponsorship letters for colleagues seeking to leave Europe through the 1930s. Von Neumann himself emigrated; a life still in Europe in 1944 is a dramatized departure, and the danger is left where the record leaves it.',
      },
      {
        id: 'letters',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.letters' }],
        title: 'The Ledger of Names',
        yearLabel: '1944',
        image: {
          setting: 'a desk drawer pulled out on a bundle of carbon copies tied with string',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'sober, accounting, unresolved',
          details: ['carbon copies tied with string', 'a pulled-out drawer', 'a fountain pen with a bent nib', 'an atlas open at central Europe', 'a folded government telegram'],
          alt: 'A bundle of carbon copies tied with string in a pulled-out desk drawer beside an atlas open at central Europe.',
        },
        pages: [
          {
            id: 'carbons',
            narration:
              'The carbons are tied with string in the bottom drawer: every letter he wrote for somebody trying to get out, with the date and the outcome pencilled in the corner where he knows the outcome.',
          },
          {
            id: 'count',
            narration:
              'He is a man who counts, and he has counted these, and the number is smaller than the number of letters that came. There is a telegram on the desk asking him to come somewhere and do something he is not permitted to be told about. He goes.',
          },
        ],
        historicalNote:
          'Many established émigré scientists sponsored and placed colleagues fleeing Europe in the 1930s. The ledger is a dramatized image of that effort.',
      },
      {
        id: 'default',
        title: 'The Quiet Desk',
        yearLabel: '1944',
        image: {
          setting: 'a tidy desk with one project in progress and a window onto an empty afternoon',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'unhurried, underused, restless',
          details: ['one folder squared to the desk edge', 'a full inkwell', 'an unopened box of chalk', 'a clock loud in an empty room', 'a chair not pushed in'],
          alt: 'A single folder squared to the edge of a tidy desk beside a full inkwell and an unopened box of chalk.',
        },
        pages: [
          {
            id: 'tidy',
            narration:
              'The desk is tidy, which is the wrong sign. There is one folder on it, squared to the edge, and the chalk is still in the box, and the clock is audible, which in this room it never used to be.',
          },
          {
            id: 'telegram',
            narration:
              'He has spent fourteen years with an appointment that asked nothing of him and has discovered the flaw in such an appointment, which is that a man who is never required can begin to require nothing of himself. Then the telegram comes, and it wants him somewhere, urgently, and he is out of the door before he has finished reading it.',
          },
        ],
        historicalNote:
          'The documented life filled these years with major work in several fields at once. A quieter version of the decade is a dramatized departure.',
      },
    ],
  },

  // ───────────────────────────────────────────── crisis and responsibility, 1943–1946
  {
    id: 'vonneumann-crisis-opening',
    characterId: 'vonneumann',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'oppenheimer'],
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'europe',
        conditions: [{ not: { type: 'visitedLocation', locationId: 'princeton' } }],
        title: 'The War Comes to the Door',
        yearLabel: '1943–1946',
        image: {
          setting: 'a shuttered apartment with a desk pushed against an inside wall and papers weighted down',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'contracted, watchful, unbroken',
          details: ['shutters closed at midday', 'a desk pushed to an inside wall', 'papers weighted with a stone', 'a stamped identity document', 'a stopped street beyond the glass'],
          alt: 'A desk pushed against an inside wall of a shuttered room, papers held down by a stone.',
        },
        pages: [
          {
            id: 'shutters',
            narration:
              'He has moved the desk to the inside wall, away from the window, which is a thing people in this street have begun doing without discussing why. The shutters stay closed at midday. The papers on the desk are held down with a stone because the glass is taped and the room is never quite still.',
          },
          {
            id: 'document',
            narration:
              'There is a stamped document in the drawer that says what he is permitted to be, and it is a smaller thing than it said last year, and it will be smaller again. Nobody comes to ask him about mathematics any more. They come to ask whether he has heard anything.',
            speaker: 'A NEIGHBOUR',
            dialogue: 'You read four languages. Tell me honestly what the foreign papers are saying, and do not be kind about it.',
          },
          {
            id: 'choice',
            narration:
              'He tells her honestly. Then he sits down at the desk against the inside wall, because there is one hour before the light goes, and he has to decide what a man does with an hour in a year like this.',
            choices: [
              {
                id: 'necessary',
                label: 'Take whatever work keeps you useful to whoever is in charge',
                effects: [
                  { type: 'flag', flag: 'vonneumann.conscience', value: 'necessary' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'arithmetic',
                label: 'Do mathematics; it is the one thing no ministry can requisition',
                effects: [
                  { type: 'flag', flag: 'vonneumann.conscience', value: 'arithmetic' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, theory: 1 } },
                ],
              },
              {
                id: 'reluctant',
                label: 'Keep an honest written account of what these years are',
                effects: [
                  { type: 'flag', flag: 'vonneumann.conscience', value: 'reluctant' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann had left Europe well before the war; a life still in Hungary in 1944 is a dramatized departure. The restrictions, the closed shutters and the narrowing of what a document permitted are drawn from the general record of that year and are deliberately left unelaborated.',
      },
      {
        id: 'losalamos',
        conditions: [{ type: 'locationIs', locationId: 'losAlamos' }],
        title: 'The Address Is a Post Office Box',
        locationLabel: 'Los Alamos',
        yearLabel: '1943–1946',
        image: {
          setting: 'a mesa of hastily built huts behind a wire fence, mountains stacked beyond',
          year: 1943,
          characters: ['vonneumann'],
          mood: 'thin-aired, secretive, urgent',
          details: ['green tar-paper huts', 'a wire fence with a plain gate', 'a badge clipped to a lapel', 'a stack of ruled computing sheets', 'a water tower against mountains'],
          alt: 'Rows of green tar-paper huts behind a wire fence with mountains stacked beyond a water tower.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'The mail address is a post office box in another state and the road up to the mesa has three checkpoints on it. The air is thin enough that everyone speaks slightly slower than they did at sea level, except the physicists, who speak faster.',
          },
          {
            id: 'problem',
            narration:
              'The problem they hand him is one he has met before in another costume: a shock wave that must arrive everywhere at once, on a sphere, to a tolerance no laboratory has ever asked for. The difference is what is inside the sphere.',
            speaker: 'A DIVISION LEADER',
            dialogue: 'The lenses have to focus a blast the way glass focuses light. Nobody can solve those equations. We are told you do arithmetic that other people cannot.',
          },
          {
            id: 'choice',
            narration:
              'He sits down that first night with a sheet of ruled computing paper and finds that he must decide, before the first line, what he is going to be doing here — because the answer will have to hold for however long this lasts.',
            choices: [
              {
                id: 'necessary',
                label: 'This is a war and this is the shortest way out of it',
                effects: [
                  { type: 'flag', flag: 'vonneumann.conscience', value: 'necessary' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'arithmetic',
                label: 'It is arithmetic; what is done with it is not your department',
                effects: [
                  { type: 'flag', flag: 'vonneumann.conscience', value: 'arithmetic' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, standing: 1 } },
                ],
              },
              {
                id: 'reluctant',
                label: 'Do the work and keep an honest account of what it is',
                effects: [
                  { type: 'flag', flag: 'vonneumann.conscience', value: 'reluctant' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann consulted at Los Alamos from 1943 on the mathematics of implosion — the symmetrical compression of a core by shaped explosive lenses. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Telegram Without an Address',
        yearLabel: '1943–1946',
        image: {
          setting: 'a study with a sealed government envelope opened on the desk and a packed bag by the door',
          year: 1943,
          characters: ['vonneumann'],
          mood: 'summoned, secretive, urgent',
          details: ['a slit government envelope', 'a packed bag by a door', 'a travel warrant with the destination blanked', 'a stack of ruled computing sheets', 'a blackboard wiped clean'],
          alt: 'A slit government envelope on a desk beside a travel warrant with its destination left blank.',
        },
        pages: [
          {
            id: 'envelope',
            narration:
              'The envelope has a department’s name on it and a travel warrant inside with the destination left blank, to be filled in by somebody else at a station he will be told about later. He has been asked to go places before. He has never been asked to go nowhere.',
          },
          {
            id: 'problem',
            narration:
              'The problem, when it is finally described to him in a room with the blinds down, is one he has met before in another costume: a shock wave that must arrive everywhere at once, on a sphere, to a tolerance no laboratory has ever needed. The difference is what is inside the sphere.',
            speaker: 'A DIVISION LEADER',
            dialogue: 'The lenses have to focus a blast the way glass focuses light. Nobody can solve those equations. We are told you do arithmetic that other people cannot.',
          },
          {
            id: 'choice',
            narration:
              'He is given a night to think about it, which is more than he needs and less than it deserves. Before the first line of the first calculation he must decide what he will be doing, because the answer will have to hold for however long this lasts.',
            choices: [
              {
                id: 'necessary',
                label: 'This is a war and this is the shortest way out of it',
                effects: [
                  { type: 'flag', flag: 'vonneumann.conscience', value: 'necessary' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'arithmetic',
                label: 'It is arithmetic; what is done with it is not your department',
                effects: [
                  { type: 'flag', flag: 'vonneumann.conscience', value: 'arithmetic' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, standing: 1 } },
                ],
              },
              {
                id: 'reluctant',
                label: 'Do the work and keep an honest account of what it is',
                effects: [
                  { type: 'flag', flag: 'vonneumann.conscience', value: 'reluctant' },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann was recruited as a consultant on the implosion problem in 1943 under wartime secrecy. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-consulting-los-alamos',
    characterId: 'vonneumann',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'oppenheimer'],
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    replacesContextCardId: 'vonneumann-card-1943-los-alamos',
    variants: [
      {
        id: 'europe',
        conditions: [
          { type: 'yearAtLeast', year: 1944 },
          { type: 'yearAtMost', year: 1946 },
          { not: { type: 'visitedLocation', locationId: 'princeton' } },
        ],
        title: 'The Request That Cannot Arrive',
        yearLabel: '1944',
        image: {
          setting: 'a sorting office pigeonhole holding one foreign envelope stamped with a returned-mail mark',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'severed, imagined, quietly bitter',
          details: ['a foreign envelope with a returned-mail mark', 'rows of pigeonholes', 'a rubber stamp on a chain', 'a wall notice of suspended services', 'dust in a shaft of light'],
          alt: 'One foreign envelope with a returned-mail mark standing in a row of empty sorting-office pigeonholes.',
        },
        pages: [
          {
            id: 'severed',
            narration:
              'The post to the west stopped some time ago and nobody has said for how long. Somewhere across an ocean there is a laboratory with a problem in it that he could take apart in a fortnight, and there is no road between the two facts.',
          },
          {
            id: 'guess',
            narration:
              'He knows roughly what they must be doing, because he read the same journals they did until the journals stopped coming, and because a man who is three moves ahead does not stop being three moves ahead merely because his opponent has left the room.',
            speaker: 'JANCSI',
            dialogue: 'They will need a wave that arrives everywhere at once. They will not solve it by hand in the time they have. And I am here, and I am reading a two-year-old paper about turbulence.',
          },
          {
            id: 'after',
            narration:
              'He works the problem anyway, on his own paper, for nobody, and gets a long way into it, and then puts the sheets in the drawer with the passport. It is the most useless good mathematics he will ever do, and he cannot stop doing it.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1943-los-alamos' },
          { type: 'resources', effects: { exposure: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Von Neumann in fact consulted at Los Alamos on implosion computation from 1943. A life cut off from that work in wartime Europe is a dramatized departure.',
      },
      {
        id: 'losalamos',
        conditions: [
          { type: 'yearAtLeast', year: 1944 },
          { type: 'yearAtMost', year: 1946 },
          { type: 'locationIs', locationId: 'losAlamos' },
        ],
        title: 'Consulting at Los Alamos',
        locationLabel: 'Los Alamos',
        yearLabel: '1944',
        image: {
          setting: 'a computing room of women at desk calculators, long ruled sheets pinned along one wall',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'relentless, collegial, sealed',
          details: ['rows of desk calculators', 'long ruled sheets pinned to a wall', 'punched cards in a wooden tray', 'a badge on a lanyard', 'a coffee urn with a dented lid'],
          alt: 'Rows of desk calculators in a long room with ruled computing sheets pinned along the wall.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The computing room runs on hand calculators and punched cards and the patience of people who will never be told what the numbers are for. The sheets are pinned along the wall in the order they were finished, so that everyone can see the front advancing.',
          },
          {
            id: 'shuttle',
            narration:
              'He arrives, changes the method, argues for two days, and is gone again on a night train east, and this happens so often that the room begins to date its work by his visits. It is the fullest he has ever felt and the least he has ever slept.',
            speaker: 'A COMPUTER',
            dialogue: 'You have altered the scheme three times this month, Professor. Some of us would like to finish a column before you improve it.',
          },
          {
            id: 'cost',
            narration:
              'He apologises, sincerely and quickly, and improves it again on Thursday. In the train compartment on the way east he catches himself doing the arithmetic of the thing they are building, in the abstract, without the sphere or the city, and finds the abstraction is getting harder to keep.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1943-los-alamos' },
          { type: 'resources', effects: { exposure: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Von Neumann shuttled between Princeton and Los Alamos as a consultant, reorganising the hand-computation methods used for implosion modelling. Human "computers" — mostly women — carried out the calculations. Dialogue is dramatized.',
      },
      {
        id: 'princeton',
        conditions: [
          { type: 'yearAtLeast', year: 1944 },
          { type: 'yearAtMost', year: 1946 },
          { type: 'locationIs', locationId: 'princeton' },
        ],
        title: 'Consulting at a Distance',
        locationLabel: 'Princeton',
        yearLabel: '1944',
        image: {
          setting: 'a study with a locked steel document case open on the floor and a train timetable on the desk',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'divided, secretive, tired',
          details: ['a locked steel document case', 'a railway timetable much annotated', 'sealed envelopes with no return address', 'a coat still damp on a hook', 'a shaded desk lamp'],
          alt: 'A locked steel document case open on the floor beside a heavily annotated railway timetable.',
        },
        pages: [
          {
            id: 'case',
            narration:
              'The steel case has a lock on it and travels with him, and its contents cannot be discussed in this house, or in that one, or on the train between them. He is away more nights than he is here and cannot say where.',
          },
          {
            id: 'shuttle',
            narration:
              'The timetable on the desk is annotated in four colours. He has become a man whose life is a schedule of departures, carrying a problem west and bringing exhaustion back east, and nobody at either end sees more than half of him.',
            speaker: 'JANCSI',
            dialogue: 'No, I cannot tell you. No, not even that. Ask me about the weather in New Mexico; I am permitted to have opinions about the weather.',
          },
          {
            id: 'cost',
            narration:
              'On the eastbound train he catches himself doing the arithmetic in the abstract, without the sphere and without the city under it, and notices that the abstraction is getting harder to hold in place.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1943-los-alamos' },
          { type: 'resources', effects: { exposure: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Von Neumann divided these years between Princeton and classified consultancy, under strict compartmentalised secrecy. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1944 },
          { type: 'yearAtMost', year: 1946 },
        ],
        title: 'The Work You Cannot Name',
        yearLabel: '1944',
        image: {
          setting: 'a night train compartment with a locked case on the seat and blackout blinds down',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'divided, secretive, tired',
          details: ['a locked steel case on a seat', 'blackout blinds pulled down', 'a punched ticket', 'ruled computing sheets rolled in a tube', 'a cold sandwich untouched'],
          alt: 'A locked steel case on the seat of a night train compartment with blackout blinds pulled down.',
        },
        pages: [
          {
            id: 'train',
            narration:
              'The blinds are down and the case is locked and the ruled sheets in the tube beside him are numbered but not titled. It is the fourth journey this month and he has stopped telling people the direction.',
          },
          {
            id: 'shuttle',
            narration:
              'What is being asked of him is arithmetic of a scale nobody has ever attempted, done by hand, by rooms of people who will not be told what it is for. He is the only one who sees both the method and the purpose, which is a lonely combination.',
            speaker: 'JANCSI',
            dialogue: 'Ask me about the weather. I am permitted to have opinions about the weather.',
          },
          {
            id: 'cost',
            narration:
              'Somewhere past midnight he notices that he has been holding the problem in the abstract, without the sphere and without the city under it, and that the abstraction is getting harder to keep in place.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1943-los-alamos' },
          { type: 'resources', effects: { exposure: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'The implosion computations were classified and compartmentalised; von Neumann travelled constantly between Princeton and the laboratory. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-encounter-oppenheimer',
    characterId: 'vonneumann',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'oppenheimer'],
    trigger: { event: 'afterAction', priority: 88 },
    once: true,
    variants: [
      {
        id: 'europe',
        conditions: [
          { type: 'yearAtLeast', year: 1944 },
          { type: 'yearAtMost', year: 1946 },
          { not: { type: 'visitedLocation', locationId: 'princeton' } },
        ],
        title: 'A Letter Four Years Late',
        image: {
          setting: 'a table with an old envelope, its postmark years out of date, opened with a knife',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'belated, courteous, wounded',
          details: ['an envelope with a postmark years out of date', 'a paper knife', 'a folded invitation card', 'a bare shelf where books used to be', 'a window with new glass in an old frame'],
          alt: 'An old envelope with an out-of-date postmark lying open beside a paper knife and a folded card.',
        },
        pages: [
          {
            id: 'arrives',
            narration:
              'It comes with the first proper post and the postmark on it is four years old. Somebody had written to ask him to come and work on something that could not be described in a letter, and the letter went into a sack somewhere and stayed there while the thing was built without him.',
          },
          {
            id: 'reads',
            narration:
              'The signature belongs to a man he has never met and whose reputation reached him even here. The invitation is warm, urgent, and addressed to an address that stopped being safe about a month after it was written.',
            speaker: 'OPPENHEIMER',
            dialogue: 'I am told there is nobody living who does this kind of arithmetic faster. Come. I cannot say what for, and I would rather not have to ask twice.',
          },
          {
            id: 'after',
            narration:
              'He reads it twice and then puts it in the drawer with the sheets he worked for nobody. He is not certain whether he is sorry, and he is extremely certain that he will never be able to tell anyone which.',
          },
        ],
        effects: [{ type: 'relationship', characterId: 'oppenheimer', familiarity: 1, respect: 1, flag: 'mesa-1944' }],
        historicalNote:
          'Von Neumann was in fact recruited to Los Alamos in 1943 and consulted there throughout the war. A letter that never reached him is a dramatized departure; the dialogue is dramatized.',
      },
      {
        id: 'npc-losalamos',
        conditions: [
          { type: 'yearAtLeast', year: 1944 },
          { type: 'yearAtMost', year: 1946 },
          { type: 'locationIs', locationId: 'losAlamos' },
          { type: 'otherCharacterIsNpc', characterId: 'oppenheimer' },
        ],
        title: 'The Director’s Porch',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a wooden porch on the mesa after dark, two chairs and a spread of stars',
          year: 1944,
          characters: ['vonneumann', 'oppenheimer'],
          mood: 'candid, exhausted, careful',
          details: ['two wooden chairs on a porch', 'an ashtray on a rail', 'a folded schedule of tests', 'a lantern turned low', 'stars over black mountains'],
          alt: 'Two wooden chairs on a dark porch beside a rail with an ashtray and a lantern turned low.',
        },
        pages: [
          {
            id: 'porch',
            narration:
              'The porch is the only place on the mesa where two men can say anything and be reasonably certain nobody is minuting it. The director is thin to the point of transparency and has the schedule folded in his coat like a man carrying a diagnosis.',
          },
          {
            id: 'said',
            narration:
              'They talk about the lenses, and then about the weather over the test site, and then about the thing neither of them has said, which is what the world looks like in about eighteen months.',
            speaker: 'OPPENHEIMER',
            dialogue: 'You are the only man here who calculates faster than he worries. I find I envy it and I am not sure I should.',
          },
          {
            id: 'answer',
            narration:
              'He says that worry is a slow method for reaching conclusions you can get to directly, and that he has reached several and does not like any of them. Then he goes back to the computing room, because there is nothing on the porch that can be improved by staying on it.',
          },
        ],
        effects: [{ type: 'relationship', characterId: 'oppenheimer', familiarity: 2, respect: 2, flag: 'mesa-1944' }],
        historicalNote:
          'Oppenheimer directed Los Alamos while von Neumann consulted there on implosion; they worked together again later at the Institute for Advanced Study. Dialogue is dramatized.',
      },
      {
        id: 'human-losalamos',
        conditions: [
          { type: 'yearAtLeast', year: 1944 },
          { type: 'yearAtMost', year: 1946 },
          { type: 'locationIs', locationId: 'losAlamos' },
          { type: 'otherCharacterIsHuman', characterId: 'oppenheimer' },
          { type: 'otherCharacterAt', characterId: 'oppenheimer', locationId: 'losAlamos', yearTolerance: 2 },
        ],
        title: 'The Director’s Porch',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a wooden porch on the mesa after dark, two chairs and a spread of stars',
          year: 1944,
          characters: ['vonneumann', 'oppenheimer'],
          mood: 'candid, exhausted, careful',
          details: ['two wooden chairs on a porch', 'an ashtray on a rail', 'a folded schedule of tests', 'a lantern turned low', 'stars over black mountains'],
          alt: 'Two wooden chairs on a dark porch beside a rail with an ashtray and a lantern turned low.',
        },
        pages: [
          {
            id: 'porch',
            narration:
              'The porch is the only place on the mesa where two men can say anything and be reasonably certain nobody is minuting it. They have both been awake for a long time and are past the point of arranging their sentences.',
          },
          {
            id: 'said',
            narration:
              'The lenses first, because the lenses are tractable. Then the weather over the test site. Then, at last, the thing neither of them has said aloud, which is what the world looks like in about eighteen months.',
            speaker: 'OPPENHEIMER',
            dialogue: 'You calculate faster than you worry. I do it the other way round and get to the same place a week later, in worse condition.',
          },
          {
            id: 'answer',
            narration:
              'He says that worry is only a slow method for reaching conclusions you can get to directly, and that he has got to several and likes none of them. Then he goes back inside, because nothing on the porch can be improved by staying on it.',
          },
        ],
        effects: [{ type: 'relationship', characterId: 'oppenheimer', familiarity: 2, respect: 2, flag: 'mesa-1944' }],
        historicalNote:
          'Von Neumann and Oppenheimer worked together at Los Alamos and afterwards at the Institute for Advanced Study. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1944 },
          { type: 'yearAtMost', year: 1946 },
        ],
        title: 'A Letter From the Mesa',
        image: {
          setting: 'a desk with a censored letter, whole lines removed with a blade',
          year: 1944,
          characters: ['vonneumann'],
          mood: 'distant, uneasy, obliged',
          details: ['a letter with lines cut out by a censor', 'a stamped envelope with no return address', 'a magnifying glass', 'a half-drawn diagram of a sphere', 'a lamp on a shaded desk'],
          alt: 'A letter with whole lines removed by a censor’s blade lying beside a half-drawn diagram of a sphere.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter arrives with three lines cut out of it by a blade, which is a kind of information in itself. What survives is a request for a method, and beneath the request a tone he recognises: a man asking for help without being allowed to say what for.',
          },
          {
            id: 'reply',
            narration:
              'He writes the method out in full and sends it west, and he does not ask what it is for, because he has already worked out what it is for and would rather not have it confirmed on paper.',
            speaker: 'JANCSI',
            dialogue: 'Here is the scheme. If you are asking me this, you are further along than the newspapers, and I am sorry for all of us.',
          },
        ],
        effects: [{ type: 'relationship', characterId: 'oppenheimer', familiarity: 1, respect: 1, flag: 'mesa-1944' }],
        historicalNote:
          'Wartime correspondence with Los Alamos was censored and compartmentalised. This exchange is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-implosion-breakthrough',
    characterId: 'vonneumann',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'oppenheimer'],
    trigger: { event: 'projectCompleted', projectId: 'vonneumann-implosion-computation', priority: 86 },
    once: true,
    variants: [
      {
        id: 'losalamos',
        conditions: [{ type: 'locationIs', locationId: 'losAlamos' }],
        title: 'A Wave That Arrives Everywhere at Once',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a wall of finished computing sheets pinned in sequence, a single chair facing them',
          year: 1945,
          characters: ['vonneumann'],
          mood: 'complete, cold, unrejoicing',
          details: ['finished computing sheets pinned in sequence', 'a chair turned to face the wall', 'a drawing of a sphere in sections', 'a stopped desk calculator', 'dawn through a small high window'],
          alt: 'A wall of finished computing sheets pinned in sequence, with a single chair turned to face them.',
        },
        pages: [
          {
            id: 'wall',
            narration:
              'The last sheet goes up at the end of the row and the sequence along the wall finally closes: the wave arrives everywhere on the sphere within the tolerance, and it does so on paper, in ink, in a room where nobody cheers.',
          },
          {
            id: 'meaning',
            narration:
              'It is the best applied mathematics he has ever done. He is certain of that and will remain certain of it, and it is the piece of his work he will be least willing to describe at dinner.',
            speaker: 'JANCSI',
            dialogue: 'It focuses. That is all the sentence says. Everything else about it belongs to other people now.',
          },
          {
            id: 'after',
            narration:
              'He signs the sheet, dates it, and walks out into a dawn the colour of nothing in particular. Somewhere below the mesa there is a test site being levelled, and a schedule with his arithmetic on the critical path of it.',
          },
        ],
        historicalNote:
          'Von Neumann’s work on implosion-lens computation was central to the design of the plutonium weapon. The scene is dramatized; the moral weight is drawn from the record of participants’ later accounts generally, not from any specific quotation.',
      },
      {
        id: 'default',
        title: 'A Wave That Arrives Everywhere at Once',
        image: {
          setting: 'a desk stacked with numbered computing sheets, the top one signed and dated',
          year: 1945,
          characters: ['vonneumann'],
          mood: 'complete, cold, unrejoicing',
          details: ['numbered computing sheets in a stack', 'a signed and dated top sheet', 'a drawing of a sphere in sections', 'an unopened bottle', 'grey light at a window'],
          alt: 'A stack of numbered computing sheets with the signed and dated top sheet beside a sectioned drawing of a sphere.',
        },
        pages: [
          {
            id: 'stack',
            narration:
              'The stack finally closes. The wave arrives everywhere on the sphere within the tolerance, and it does so on paper, in ink, in a room where nobody says anything at all.',
          },
          {
            id: 'meaning',
            narration:
              'It is the best applied mathematics he has ever done, and he is certain of that, and it is the piece of his work he will be least willing to describe at dinner.',
            speaker: 'JANCSI',
            dialogue: 'It focuses. That is the whole sentence. Everything else about it belongs to other people now.',
          },
          {
            id: 'after',
            narration:
              'He signs the top sheet and dates it and does not open the bottle somebody left. There is a schedule somewhere with his arithmetic on the critical path of it, and the schedule does not require his opinion.',
          },
        ],
        historicalNote:
          'The implosion computations were among von Neumann’s most consequential applied work. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-crisis-closing',
    characterId: 'vonneumann',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'oppenheimer'],
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'built',
        conditions: [{ type: 'projectCompleted', projectId: 'vonneumann-implosion-computation' }],
        title: 'August',
        yearLabel: '1945',
        image: {
          setting: 'a newsstand on a summer street with a headline board and papers stacked in the sun',
          year: 1945,
          characters: ['vonneumann'],
          mood: 'flat, permanent, unsayable',
          details: ['papers stacked on a newsstand', 'a chalked headline board', 'coins in an open palm', 'a summer awning', 'a folded jacket over one arm'],
          alt: 'Newspapers stacked in the sun at a newsstand beneath a chalked headline board.',
        },
        pages: [
          {
            id: 'stand',
            narration:
              'He buys the paper at a stand on a hot street like everyone else, and reads the front of it standing up, and the arithmetic on the inside pages is the only part of it he can check. It checks.',
          },
          {
            id: 'after',
            narration:
              'There is nothing to say to the man behind the stand, and nothing that could be said to him even if the rules allowed it. He folds the paper under his arm and walks on, and finds that he has begun, without deciding to, to think about what the next machine should be able to do.',
          },
        ],
        historicalNote:
          'The weapons developed at Los Alamos were used in August 1945. Von Neumann turned immediately afterward to the design of general-purpose computers.',
      },
      {
        id: 'stayed',
        conditions: [{ not: { type: 'visitedLocation', locationId: 'princeton' } }],
        title: 'The Year the Post Started Again',
        yearLabel: '1946',
        image: {
          setting: 'a street with a repaired shopfront and one bridge still down across the river beyond it',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'emerged, older, calculating again',
          details: ['a repaired shopfront', 'a bridge down across a river', 'a foreign newspaper months out of date', 'a queue at a post office', 'a coat too large for its wearer'],
          alt: 'A repaired shopfront on a street where one bridge is still down across the river beyond.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'The post starts again and the newspapers arrive months out of date and full of a word he has to look at twice. Somebody built the thing. He had worked out the shape of the problem himself, on his own paper, for nobody, in a shuttered room.',
          },
          {
            id: 'after',
            narration:
              'He stands in the queue at the post office with the paper under his arm and does the only calculation available to him, which is what he would have done differently and how much sooner. Then he goes home and starts writing letters, because there are machines being built now and he intends to be in the conversation.',
          },
        ],
        historicalNote:
          'A life that spent the war in Europe rather than at Los Alamos is a dramatized departure from the record.',
      },
      {
        id: 'conscience-necessary',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.conscience', value: 'necessary' }],
        title: 'The Sum He Did Instead',
        yearLabel: '1946',
        image: {
          setting: 'a hotel room with a suitcase open on a stand and a single sheet of arithmetic on the bed',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'defended, exact, unsoftened',
          details: ['an open suitcase on a stand', 'a single sheet of arithmetic', 'a train ticket used as a bookmark', 'a glass of water untouched', 'curtains half drawn on a grey afternoon'],
          alt: 'A single sheet of arithmetic lying on a made bed beside an open suitcase on a stand.',
        },
        pages: [
          {
            id: 'sheet',
            narration:
              'There is one sheet on the bed and it is not the implosion. It is an estimate of the invasion that did not have to happen, in divisions and months and a figure at the bottom that he has underlined twice and shown to nobody.',
          },
          {
            id: 'after',
            narration:
              'He believes the figure. He has believed it since the first night and he has not revised it, and he is aware that a number you never revise is a thing you are holding rather than a thing you know. He folds the sheet into the case and starts thinking about the next machine.',
          },
        ],
        historicalNote:
          'The argument that the weapons shortened the war was made by many participants at the time and afterwards. The private estimate here is dramatized.',
      },
      {
        id: 'conscience-arithmetic',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.conscience', value: 'arithmetic' }],
        title: 'Not His Department',
        yearLabel: '1946',
        image: {
          setting: 'a hotel room with a suitcase open on a stand and a notebook of pure mathematics face down beside it',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'untroubled on the surface, faintly snagged',
          details: ['an open suitcase on a stand', 'a notebook of pure mathematics face down', 'a train ticket used as a bookmark', 'an untouched glass of water', 'curtains half drawn on a grey afternoon'],
          alt: 'A notebook of mathematics lying face down beside an open suitcase on a stand in a hotel room.',
        },
        pages: [
          {
            id: 'notebook',
            narration:
              'The notebook is face down on the bed and there is nothing in it but mathematics, which is what he said there would be. He kept his side of the arrangement: the arithmetic was his, and what was done with it belonged to men with rank.',
          },
          {
            id: 'after',
            narration:
              'It has held for three years and it holds now, and he notices, packing, that a position which has to be held is not the same as a position which is simply true. He puts the notebook in the case. He does not open it on the train.',
          },
        ],
        historicalNote:
          'Participants in wartime weapons work reasoned about their responsibility in very different ways. This private reckoning is dramatized.',
      },
      {
        id: 'conscience-reluctant',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.conscience', value: 'reluctant' }],
        title: 'The Account He Keeps',
        yearLabel: '1946',
        image: {
          setting: 'a hotel room with a suitcase open on a stand and a notebook shut on the bed',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'accounting, private, unfinished',
          details: ['an open suitcase on a stand', 'a shut notebook on a bedspread', 'a train ticket used as a bookmark', 'a glass of water untouched', 'curtains half drawn on a grey afternoon'],
          alt: 'An open suitcase on a stand beside a shut notebook lying on a made bed with a ticket as a bookmark.',
        },
        pages: [
          {
            id: 'notebook',
            narration:
              'The notebook on the bed is not mathematics. It is the account he decided to keep on the first night, in his own hand, of what the work was and what it was for, and he has kept it honestly, which is not the same as easily.',
          },
          {
            id: 'after',
            narration:
              'He shuts it and puts it at the bottom of the case under the shirts. Then he sits on the edge of the bed and begins, in his head, on the next machine — because a man who cannot stop calculating had better choose carefully what he calculates next.',
          },
        ],
        historicalNote:
          'The moral reckoning of Manhattan Project participants varied widely and is documented in general terms. This private account is dramatized.',
      },
      {
        id: 'default',
        title: 'The Years He Was Not Asked',
        yearLabel: '1946',
        image: {
          setting: 'a study where a wireless set is playing to nobody and a newspaper lies unopened',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'sidelined, restless, unresolved',
          details: ['a wireless set with the dial lit', 'an unopened newspaper', 'a desk of pure mathematics', 'a curtain half drawn', 'a cup and a spoon'],
          alt: 'A wireless set with a lit dial beside an unopened newspaper on a desk of mathematical pages.',
        },
        pages: [
          {
            id: 'wireless',
            narration:
              'The war is announced over and then explained, in pieces, over several weeks, by voices on the wireless describing a thing he did not help to build. The pages on his desk are pure and beautiful and were not required by anybody.',
          },
          {
            id: 'after',
            narration:
              'He is not sorry. He tells himself that twice, which is once more than a true statement usually needs. Then he turns the wireless off and starts thinking about machines, because the question of what arithmetic could be done, if only it could be done fast enough, has not stopped asking itself.',
          },
        ],
        historicalNote:
          'In the documented life von Neumann was deeply involved in wartime weapons computation. A chapter spent outside that work is a dramatized departure.',
      },
    ],
  },

  // ───────────────────────────────────────────── legacy, 1945–1957
  {
    id: 'vonneumann-legacy-opening',
    characterId: 'vonneumann',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'europe',
        conditions: [{ not: { type: 'visitedLocation', locationId: 'princeton' } }],
        title: 'An Application for Valves',
        yearLabel: '1945–1957',
        image: {
          setting: 'a ministry anteroom with a typed requisition form and a bench along a green-painted wall',
          year: 1947,
          characters: ['vonneumann'],
          mood: 'obstructed, undeterred, sardonic',
          details: ['a typed requisition form in triplicate', 'a bench along a green-painted wall', 'a hand-drawn block diagram in a folder', 'a stamped pass', 'a radiator that does not work'],
          alt: 'A typed requisition form in triplicate held on a folder above a bench along a green-painted wall.',
        },
        pages: [
          {
            id: 'form',
            narration:
              'The form is in triplicate and asks him to state the economic purpose of two thousand glass valves. He has filled in this form twice already, in two different tones, and is now trying a third: he has written that the machine will calculate artillery tables, which is true, and is the smallest true thing about it.',
          },
          {
            id: 'wall',
            narration:
              'On the bench beside him the folder holds one page of block diagram: instructions and numbers living in the same memory, so that the thing can be told afterwards, by a stranger, to be a different machine. Nobody in this building has asked to see the page.',
            speaker: 'A MINISTRY OFFICIAL',
            dialogue: 'Professor, we have a national plan for steel and one for grain. There is no line in it for a machine that does not yet do anything.',
          },
          {
            id: 'answer',
            narration:
              'He says that there was no line for the printing press either, and that he is happy to wait while somebody writes one. Then he sits back down on the bench, because he has nowhere else to be, and starts on the fourth version of the form.',
          },
        ],
        historicalNote:
          'Von Neumann built his computer with American institutional money and industrial supply. A postwar central-European life attempting the same machine under a planned economy is a dramatized departure. Dialogue is dramatized.',
      },
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'A Shed Behind the Institute',
        locationLabel: 'Princeton',
        yearLabel: '1945–1957',
        image: {
          setting: 'a bare brick outbuilding behind a genteel institute, a trestle table and a coil of cable',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'improvised, defiant, expectant',
          details: ['a trestle table', 'a coil of heavy cable', 'racks of glass valves in cardboard', 'a swept concrete floor', 'a hand-lettered sign on a door'],
          alt: 'A trestle table and a coil of heavy cable in a bare brick outbuilding with racks of glass valves.',
        },
        pages: [
          {
            id: 'shed',
            narration:
              'The institute was founded so that pure minds would never have to touch anything, and he has asked it for a shed, a machine shop, and a budget for glass valves. The senior faculty are polite about this in the way people are polite about a relative’s new hobby.',
          },
          {
            id: 'argument',
            narration:
              'He makes the argument in a common room over tea and does not raise his voice, because the argument does not need it: there are questions in physics and mathematics whose answers exist and cannot be reached, and the only thing between us and them is the speed of arithmetic.',
            speaker: 'A SENIOR PROFESSOR',
            dialogue: 'We are an institute for thought, not for machinery. You are proposing to put a boiler room in a monastery.',
          },
          {
            id: 'answer',
            narration:
              'He says that the monastery has been copying manuscripts by hand for four hundred years and that he has read about a press. Then he goes out to the shed and paces the floor, working out where the memory will stand.',
          },
        ],
        historicalNote:
          'Von Neumann built the Institute for Advanced Study’s electronic computer from 1945 over the objections of colleagues who thought engineering out of place there. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'What Arithmetic Could Be, If It Were Fast',
        yearLabel: '1945–1957',
        image: {
          setting: 'a workbench with a rack of glass valves, a soldering iron, and a page of block diagrams',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'improvised, defiant, expectant',
          details: ['a rack of glass valves', 'a soldering iron on a stand', 'a page of block diagrams', 'a coil of heavy cable', 'a swept concrete floor'],
          alt: 'A rack of glass valves on a workbench beside a soldering iron and a page of hand-drawn block diagrams.',
        },
        pages: [
          {
            id: 'bench',
            narration:
              'The valves come packed in cardboard like eggs and burn out at a rate that would be a scandal in any other trade. He counts them, works out the failure rate, and decides the arithmetic is still worth it.',
          },
          {
            id: 'argument',
            narration:
              'The objection is always the same and always sincere: this is engineering, and engineering is for other buildings, other people, lesser questions.',
            speaker: 'A SENIOR PROFESSOR',
            dialogue: 'You are proposing to put a boiler room in a monastery. What would you have us tell the benefactors?',
          },
          {
            id: 'answer',
            narration:
              'He says that the monastery has been copying manuscripts by hand for four hundred years and that he has read about a press. Then he goes back to the bench and works out where the memory will stand.',
          },
        ],
        historicalNote:
          'Von Neumann pushed for electronic computation against considerable institutional resistance from 1945 onward. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-machine-begins',
    characterId: 'vonneumann',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 95 },
    once: true,
    replacesContextCardId: 'vonneumann-card-1945-machine',
    variants: [
      {
        id: 'europe',
        conditions: [
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1952 },
          { not: { type: 'visitedLocation', locationId: 'princeton' } },
        ],
        title: 'The Machine Begins',
        yearLabel: '1946',
        image: {
          setting: 'a cleared corner of a university basement with mismatched valves in a wooden crate and a diagram pinned to plaster',
          year: 1947,
          characters: ['vonneumann'],
          mood: 'improvised, urgent, quietly political',
          details: ['mismatched valves in a wooden crate', 'a block diagram pinned to bare plaster', 'a carbon copy on onionskin', 'a borrowed soldering iron', 'a bulb on a flex'],
          alt: 'Mismatched glass valves in a wooden crate beneath a block diagram pinned to bare plaster.',
        },
        pages: [
          {
            id: 'basement',
            narration:
              'The valves are mismatched and came from three countries and two of them by routes he would rather not put in writing. The diagram is pinned to bare plaster under a bulb on a flex, and it is one page, and the page is the whole invention.',
          },
          {
            id: 'design',
            narration:
              'Instructions and numbers in the same memory, made of the same stuff, so that the thing can be told to do something it was not built for, by somebody who has never met it. He has three young men and a basement, and abroad they have buildings.',
            speaker: 'A YOUNG ASSISTANT',
            dialogue: 'If we send the page out, the people with buildings will finish it first. If we do not send it, we will finish it in nineteen years.',
          },
          {
            id: 'choice',
            narration:
              'There is a carbon on onionskin thin enough to go inside a journal offprint, and a list of eleven institutions in cities he can no longer travel to. The page will outlive the basement either way. What he decides is who gets to hold it.',
            choices: [
              {
                id: 'publish',
                label: 'Send the page out while you still can, and lose the priority',
                effects: [
                  { type: 'flag', flag: 'vonneumann.openDesign', value: 'publish' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { network: 2, exposure: 1, standing: -1 } },
                ],
              },
              {
                id: 'hold',
                label: 'Keep it in the basement and build the thing yourself',
                effects: [
                  { type: 'flag', flag: 'vonneumann.openDesign', value: 'hold' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { engineering: 1, network: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1945-machine' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Von Neumann assembled an engineering team with institutional backing and published the design openly and unpatented. A basement version of the same page under postwar central-European conditions is a dramatized departure. Dialogue is dramatized.',
      },
      {
        id: 'princeton',
        conditions: [
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1952 },
          { type: 'locationIs', locationId: 'princeton' },
        ],
        title: 'The Machine Begins',
        locationLabel: 'Princeton',
        yearLabel: '1946',
        image: {
          setting: 'a half-built machine room with a chassis of valves, an engineer’s bench, and a mimeograph stencil drying',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'assembling, generous, historic',
          details: ['a chassis of glass valves', 'a mimeograph stencil pegged to dry', 'a hand-drawn block diagram pinned to a wall', 'a toolbox open on a stool', 'a mailing list on a clipboard'],
          alt: 'A chassis of glass valves beside a mimeograph stencil pegged to dry and a hand-drawn block diagram pinned to a wall.',
        },
        pages: [
          {
            id: 'team',
            narration:
              'He hires engineers, which nobody at the institute has ever done, and they arrive with toolboxes and treat the mathematicians as a mild weather condition. Within a month the room has a smell — hot dust, solder, ozone — that will be the smell of the next fifty years.',
          },
          {
            id: 'design',
            narration:
              'The design on the wall is one page and one idea. Instructions and numbers live in the same memory and are made of the same stuff, so the machine can be told to do something it was not built to do, by anybody, afterwards, on paper.',
            speaker: 'AN ENGINEER',
            dialogue: 'Professor, there are four companies who would buy this drawing off you tomorrow. Do you want me to stop letting people photograph it?',
          },
          {
            id: 'choice',
            narration:
              'The mimeograph stencils are pegged up drying and the mailing list on the clipboard has eleven institutions on it and room for more. What happens to the drawing is entirely his to decide, and he must decide it this week.',
            choices: [
              {
                id: 'publish',
                label: 'Send the design to anyone who writes and take out no patent',
                effects: [
                  { type: 'flag', flag: 'vonneumann.openDesign', value: 'publish' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { network: 2, exposure: 1, funds: -1 } },
                ],
              },
              {
                id: 'hold',
                label: 'Keep the drawing inside the building until the machine runs',
                effects: [
                  { type: 'flag', flag: 'vonneumann.openDesign', value: 'hold' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { funds: 2, network: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1945-machine' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Von Neumann assembled an engineering team at the Institute and circulated the machine’s design reports widely and without patent, deliberately enabling other groups to copy it. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1952 },
        ],
        title: 'The Machine Begins',
        yearLabel: '1946',
        image: {
          setting: 'a desk with a duplicated report, a stencil, and a mailing list on a clipboard',
          year: 1946,
          characters: ['vonneumann'],
          mood: 'assembling, generous, historic',
          details: ['a duplicated report still smelling of spirit', 'a mimeograph stencil', 'a mailing list on a clipboard', 'a hand-drawn block diagram', 'a box of envelopes'],
          alt: 'A duplicated report beside a mimeograph stencil, a clipboard mailing list, and a box of envelopes.',
        },
        pages: [
          {
            id: 'report',
            narration:
              'The report is duplicated on a spirit machine and still smells of it, and it is one page of idea wrapped in forty of consequence. Instructions and numbers live in the same memory and are made of the same stuff.',
          },
          {
            id: 'design',
            narration:
              'Which means the thing can be told to do something it was not built to do, afterwards, by somebody who has never met it. That is the whole invention. The valves are a detail; the valves will be replaced.',
            speaker: 'AN ENGINEER',
            dialogue: 'There are four companies who would buy this off you tomorrow. Shall I stop letting people photograph it?',
          },
          {
            id: 'choice',
            narration:
              'The mailing list on the clipboard has eleven institutions on it and room for more. What happens to the drawing is entirely his to decide, and he must decide it this week.',
            choices: [
              {
                id: 'publish',
                label: 'Send the design to anyone who writes and take out no patent',
                effects: [
                  { type: 'flag', flag: 'vonneumann.openDesign', value: 'publish' },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { network: 2, exposure: 1, funds: -1 } },
                ],
              },
              {
                id: 'hold',
                label: 'Keep the drawing inside the building until the machine runs',
                effects: [
                  { type: 'flag', flag: 'vonneumann.openDesign', value: 'hold' },
                  { type: 'theme', theme: 'breadthVsDepth', amount: 2 },
                  { type: 'resources', effects: { funds: 2, network: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'vonneumann-card-1945-machine' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'The design reports for the Institute machine were circulated openly and unpatented, and other groups built copies from them. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-stored-program-breakthrough',
    characterId: 'vonneumann',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'turingNpl'],
    trigger: { event: 'projectCompleted', projectId: 'vonneumann-stored-program', priority: 88 },
    once: true,
    variants: [
      {
        id: 'turing',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.turing' }],
        title: 'The Tape Comes Out of the Drawer',
        image: {
          setting: 'a machine room at night, a rack of valves lit from within, an old offprint open on a stool',
          year: 1951,
          characters: ['vonneumann'],
          mood: 'vindicated, warm, awake',
          details: ['a rack of valves glowing', 'an old offprint open on a stool', 'a paper tape spilling into a basket', 'a fan belt turning', 'a mug on a girder'],
          alt: 'A rack of glowing valves at night with an old offprint open on a stool and paper tape spilling into a basket.',
        },
        pages: [
          {
            id: 'runs',
            narration:
              'It runs. The valves warm the room, the fan turns, the tape spills into the basket, and a thing built of glass and wire does in an hour what a room of people with hand calculators would need a season for.',
          },
          {
            id: 'offprint',
            narration:
              'On the stool beside it, held open with a spanner, is a much-handled offprint from before the war about a machine that did not exist: a tape, a head, a table of rules. He has kept it fourteen years, and tonight he takes it out and puts it where the engineers can see it.',
            speaker: 'JANCSI',
            dialogue: 'None of this is mine. He wrote it down when it could not be built, which is the harder half.',
          },
          {
            id: 'after',
            narration:
              'Then he goes back to the console and asks it something nobody built it to answer, which is the only test that matters, and it answers.',
          },
        ],
        historicalNote:
          'The stored-program principle — instructions and data held in one addressable memory — underlies nearly all subsequent computers, and von Neumann was well acquainted with Turing’s prewar work on universal machines. Dialogue is dramatized.',
      },
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'One Memory for Both',
        locationLabel: 'Princeton',
        image: {
          setting: 'a machine room at night with a rack of valves lit from within and a console of switches',
          year: 1951,
          characters: ['vonneumann'],
          mood: 'vindicated, absorbed, awake',
          details: ['a rack of glowing valves', 'a console of toggle switches', 'paper tape in a basket', 'a chalked block diagram', 'an oscilloscope face'],
          alt: 'A rack of glowing valves behind a console of toggle switches, with paper tape spilling into a basket.',
        },
        pages: [
          {
            id: 'runs',
            narration:
              'It runs. The valves warm the room and the fan turns and the tape spills into the basket, and a thing built of glass and wire does in an hour what a room of people with hand calculators would need a season for.',
          },
          {
            id: 'idea',
            narration:
              'The idea inside it is one sentence long: put the instructions in the same memory as the numbers. From that follows everything — a machine that can be told, afterwards, by a stranger, to be a different machine.',
            speaker: 'AN ENGINEER',
            dialogue: 'It has just rewritten part of its own instruction list, Professor. Was it supposed to be able to do that?',
          },
          {
            id: 'after',
            narration:
              'He says yes, and then stands looking at the racks for rather a long time, because the honest answer is yes and he has not fully finished thinking about what else follows from it.',
          },
        ],
        historicalNote:
          'The Institute machine, completed around 1951, embodied the stored-program architecture that became standard. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'One Memory for Both',
        image: {
          setting: 'a workroom with a finished chassis of valves and a page of block diagrams pinned above it',
          year: 1951,
          characters: ['vonneumann'],
          mood: 'vindicated, absorbed, awake',
          details: ['a finished chassis of valves', 'block diagrams pinned to a board', 'a console of toggle switches', 'paper tape in a basket', 'a mug left on a girder'],
          alt: 'A finished chassis of glass valves below a board of pinned block diagrams and a console of switches.',
        },
        pages: [
          {
            id: 'runs',
            narration:
              'It runs, and the room fills with the smell of hot dust, and the arithmetic that used to take a season takes an afternoon. Nobody in the doorway quite knows what they are looking at, including, in one particular sense, him.',
          },
          {
            id: 'idea',
            narration:
              'The idea inside it is one sentence long: put the instructions in the same memory as the numbers. From that follows a machine that can be told, afterwards, by a stranger, to be a different machine.',
            speaker: 'JANCSI',
            dialogue: 'We have not built a calculator. We have built something that will be asked to do things we have not thought of, by people we will never meet.',
          },
          {
            id: 'after',
            narration:
              'He stands looking at the racks rather longer than the occasion requires, because he has not finished thinking about what else follows from it, and suspects he will not finish.',
          },
        ],
        historicalNote:
          'The stored-program architecture von Neumann set out in 1945 underlies nearly all modern computers. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-weather-breakthrough',
    characterId: 'vonneumann',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'vonneumann-weather-prediction', priority: 80 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'Tomorrow, Computed',
        locationLabel: 'Princeton',
        image: {
          setting: 'a machine room with a weather chart taped beside the console and a window showing actual weather',
          year: 1950,
          characters: ['vonneumann'],
          mood: 'astonished, sober, thrilled',
          details: ['a hand-drawn pressure chart taped to a wall', 'a console of switches', 'a window with real cloud beyond it', 'a printed run of figures', 'a barometer on a nail'],
          alt: 'A hand-drawn pressure chart taped beside a machine console, with real cloud visible through a window.',
        },
        pages: [
          {
            id: 'run',
            narration:
              'The run takes the machine most of a day and produces a chart of tomorrow’s pressure over half a continent. On the wall beside it the meteorologists have pinned what actually happened. The two are not the same. They are recognisably relatives.',
          },
          {
            id: 'meaning',
            narration:
              'Weather has been the standing example of a thing that cannot be predicted, quoted at schoolchildren and philosophers alike. It has just been predicted, badly, on purpose, by arithmetic.',
            speaker: 'A METEOROLOGIST',
            dialogue: 'It took us twenty-four hours to forecast twenty-four hours. That is useless, and it is the most important useless thing I have ever seen.',
          },
          {
            id: 'after',
            narration:
              'He laughs at that, genuinely, and then says the sentence that worries the room: that a system you can forecast is a system you might one day be tempted to steer.',
          },
        ],
        historicalNote:
          'The first successful numerical weather forecasts were computed around 1950 on an electronic computer under von Neumann’s programme; early runs took roughly as long as the weather they predicted. He also promoted the idea of deliberate climate modification. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Tomorrow, Computed',
        image: {
          setting: 'a desk with two weather charts side by side, one drawn by hand and one printed from a machine run',
          year: 1950,
          characters: ['vonneumann'],
          mood: 'astonished, sober, thrilled',
          details: ['two pressure charts side by side', 'a printed run of figures', 'a barometer', 'a pencil laid across an isobar', 'a window with real cloud beyond it'],
          alt: 'Two weather pressure charts laid side by side on a desk beside a printed run of figures.',
        },
        pages: [
          {
            id: 'run',
            narration:
              'Two charts on the desk: tomorrow as the arithmetic predicted it, and tomorrow as it actually turned out. They are not the same. They are recognisably relatives, which is more than anyone has managed before.',
          },
          {
            id: 'meaning',
            narration:
              'Weather has been the standing example of the unpredictable, quoted at schoolchildren and philosophers alike. It has just been predicted, badly, on purpose, by arithmetic.',
            speaker: 'JANCSI',
            dialogue: 'It took a day to forecast a day. In ten years it will take an hour. Then somebody will ask whether we can change it, and I would rather we thought about that now.',
          },
        ],
        historicalNote:
          'Numerical weather prediction was demonstrated around 1950 using electronic computation, and von Neumann publicly raised the prospect of deliberate weather and climate modification. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-automata-breakthrough',
    characterId: 'vonneumann',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'vonneumann-cellular-automata', priority: 80 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'A Machine That Makes Another',
        locationLabel: 'Princeton',
        image: {
          setting: 'a study floor covered in squared paper, cells inked in a spreading pattern',
          year: 1952,
          characters: ['vonneumann'],
          mood: 'abstract, playful, faintly uncanny',
          details: ['sheets of squared paper across a floor', 'cells inked in black', 'a ruler and a bottle of ink', 'a discarded pen nib', 'lamplight low across the floor'],
          alt: 'Sheets of squared paper across a floor with cells inked in black in a spreading pattern.',
        },
        pages: [
          {
            id: 'floor',
            narration:
              'The squared paper covers most of the floor and the pattern on it is spreading according to four rules he wrote at the top of the first sheet. He is on his knees in a good suit, inking the next generation.',
          },
          {
            id: 'idea',
            narration:
              'The question is not whether a machine can be built. The question is whether a machine can contain a full description of itself and use it to make another, and whether that is difficult, and whether life had to be alive to manage it.',
            speaker: 'JANCSI',
            dialogue: 'There is no magic in it. There is a description, and a builder that reads descriptions, and the description must include the builder. That is the whole trick, and biology found it first.',
          },
          {
            id: 'after',
            narration:
              'He gets up off the floor with ink on his cuff and a page of rules that will still be being played with a century later, by people who will assume, wrongly, that he thought it was a diversion.',
          },
        ],
        historicalNote:
          'Von Neumann’s theory of self-reproducing automata, developed in the late 1940s and early 1950s, founded the study of cellular automata and anticipated the logic of self-replication. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Machine That Makes Another',
        image: {
          setting: 'a desk covered in squared paper with a spreading inked pattern and a page of four rules',
          year: 1952,
          characters: ['vonneumann'],
          mood: 'abstract, playful, faintly uncanny',
          details: ['squared paper sheets', 'a page headed with four rules', 'a bottle of ink', 'a ruler', 'a cold lamp at midday'],
          alt: 'Squared paper covered in an inked spreading pattern beside a page headed with four written rules.',
        },
        pages: [
          {
            id: 'rules',
            narration:
              'Four rules at the top of the first sheet, and then squares, and then more squares, and by the ninth sheet the pattern has built a copy of a part of itself. Nothing here is alive. Everything here is behaving.',
          },
          {
            id: 'idea',
            narration:
              'The question was never whether a machine could be built. It was whether a machine could carry a full description of itself and use it to make another — and whether that requires anything more than bookkeeping.',
            speaker: 'JANCSI',
            dialogue: 'A description, and a builder that reads descriptions, and the description must include the builder. That is the whole trick. Biology found it first and did not explain itself.',
          },
        ],
        historicalNote:
          'Von Neumann’s work on self-reproducing automata founded the field of cellular automata. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-legacy-commission',
    characterId: 'vonneumann',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: ['vonneumann', 'oppenheimer'],
    trigger: { event: 'afterAction', priority: 72 },
    once: true,
    variants: [
      {
        id: 'stayed',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1957 },
          { type: 'locationIsNot', locationId: 'washingtonDC' },
          { not: { type: 'visitedLocation', locationId: 'princeton' } },
        ],
        title: 'The Committee That Wants Him',
        yearLabel: '1955',
        image: {
          setting: 'a committee room with a long table, a portrait high on the wall and a minute-taker at the end',
          year: 1955,
          characters: ['vonneumann'],
          mood: 'wary, valued, cornered',
          details: ['a long table with a cloth on it', 'a portrait high on a wall', 'a minute-taker with a pad', 'a carafe and two tumblers', 'a folder tied with tape'],
          alt: 'A long cloth-covered committee table beneath a portrait high on the wall, a minute-taker at the far end.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'They have made him a member of something, which in this country is a way of knowing where a man is on a given afternoon. There is a minute-taker at the end of the table and a portrait high on the wall, and the folder in front of him is tied with tape rather than stamped.',
          },
          {
            id: 'why',
            narration:
              'What they want from him is the same thing every government has wanted from him: someone who can hold the arithmetic, the machinery and the men on the other side in one head and say the number out loud. What differs is what happens to a man who says the wrong one.',
            speaker: 'A COMMITTEE CHAIRMAN',
            dialogue: 'You are the only person in this room who understands both the arithmetic and the politics. That is why you are here, and it is also why you are watched.',
          },
          {
            id: 'after',
            narration:
              'He answers every question that afternoon and one that nobody asks, which is how long a standoff of this kind stays stable. The minute-taker writes down the answers to the questions and not the other one, and he notices exactly which pen stops.',
          },
        ],
        historicalNote:
          'Von Neumann advised the United States government and served on the Atomic Energy Commission from 1955. A parallel career under a postwar central-European government is a dramatized departure. Dialogue is dramatized.',
      },
      {
        id: 'necessary',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1957 },
          { type: 'locationIsNot', locationId: 'washingtonDC' },
          { type: 'narrativeFlag', flag: 'vonneumann.conscience', value: 'necessary' },
        ],
        title: 'A Seat at the Table',
        yearLabel: '1955',
        image: {
          setting: 'a government committee room with a long polished table and a folder stamped on its cover',
          year: 1955,
          characters: ['vonneumann'],
          mood: 'formal, weighted, wide awake',
          details: ['a long polished table', 'a folder with a stamped cover', 'a water carafe and tumblers', 'a wall map with pins', 'a clock above a panelled door'],
          alt: 'A long polished committee table with a stamped folder, a water carafe, and a pinned wall map behind it.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The room is panelled and the table is long enough to make everyone at it feel institutional, and the folder in front of his chair has a stamp on the cover that means only five people in the building may read it.',
          },
          {
            id: 'why',
            narration:
              'He took the appointment on the same argument he took the first one: that the shortest way out of a war is a war that ends, and that the arithmetic of ending it should be done by someone who can do arithmetic. Twelve years on, the argument still fits, and he has begun to distrust how well it fits.',
            speaker: 'A COMMISSIONER',
            dialogue: 'You are the only man on this commission who understands both the arithmetic and the politics. That is why you are here. It is also, frankly, why you frighten people.',
          },
          {
            id: 'after',
            narration:
              'He answers every question in the room that afternoon and one that nobody asks, which is what the arithmetic says about how long a standoff of this kind can be kept stable. Nobody writes that answer down.',
          },
        ],
        historicalNote:
          'Von Neumann was appointed a commissioner of the Atomic Energy Commission in 1955 and was a leading government adviser on nuclear strategy in his last years. Dialogue is dramatized.',
      },
      {
        id: 'arithmetic',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1957 },
          { type: 'locationIsNot', locationId: 'washingtonDC' },
          { type: 'narrativeFlag', flag: 'vonneumann.conscience', value: 'arithmetic' },
        ],
        title: 'The Department It Turns Out to Be',
        yearLabel: '1955',
        image: {
          setting: 'a government committee room with a long polished table and a folder stamped on its cover',
          year: 1955,
          characters: ['vonneumann'],
          mood: 'formal, exposed, alert',
          details: ['a long polished table', 'a folder with a stamped cover', 'a water carafe and tumblers', 'a wall map with pins', 'a clock above a panelled door'],
          alt: 'A long polished committee table with a stamped folder, a water carafe, and a pinned wall map behind it.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The room is panelled and the folder in front of his chair carries a stamp that means only five people in the building may read it. For twelve years he has said that what was done with his arithmetic was not his department. This afternoon he is the department.',
          },
          {
            id: 'why',
            narration:
              'Nobody makes him say it. He simply notices, somewhere between the second and third item, that the man who decides is now in his chair, and that the position he held so comfortably was never a principle but a floor plan.',
            speaker: 'A COMMISSIONER',
            dialogue: 'You are the only man on this commission who understands both the arithmetic and the politics. That is why you are here. It is also, frankly, why you frighten people.',
          },
          {
            id: 'after',
            narration:
              'He answers every question that afternoon and one that nobody asks, which is how long a standoff of this kind stays stable. Nobody writes that answer down, and he finds that he wanted them to.',
          },
        ],
        historicalNote:
          'Von Neumann moved from wartime consultancy to formal policy authority as an Atomic Energy Commissioner in 1955. Dialogue is dramatized.',
      },
      {
        id: 'reluctant',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1957 },
          { type: 'locationIsNot', locationId: 'washingtonDC' },
          { type: 'narrativeFlag', flag: 'vonneumann.conscience', value: 'reluctant' },
        ],
        title: 'The Ledger Goes to Washington',
        yearLabel: '1955',
        image: {
          setting: 'a government committee room with a long polished table and a plain notebook beside a stamped folder',
          year: 1955,
          characters: ['vonneumann'],
          mood: 'formal, weighted, watchful',
          details: ['a long polished table', 'a stamped folder beside a plain notebook', 'a water carafe and tumblers', 'a wall map with pins', 'a clock above a panelled door'],
          alt: 'A plain notebook lying beside a stamped folder on a long polished committee table.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'He brings the notebook into the room, which is against no rule because nobody imagined it. It sits beside the stamped folder and it is the only object on the table that no clerk has a copy of.',
          },
          {
            id: 'why',
            narration:
              'He took the appointment for the reason he wrote down on the first night: that a man who keeps an honest account of what he has done is obliged to keep going where the doing is. It is a demanding sentence to have written in one’s own hand.',
            speaker: 'A COMMISSIONER',
            dialogue: 'You are the only man on this commission who understands both the arithmetic and the politics. That is why you are here. It is also, frankly, why you frighten people.',
          },
          {
            id: 'after',
            narration:
              'He answers every question that afternoon and one that nobody asks, which is how long a standoff of this kind stays stable. That evening he writes the answer in the notebook instead, where it will be read by nobody and denied by nobody.',
          },
        ],
        historicalNote:
          'Von Neumann served as an Atomic Energy Commissioner from 1955. The private notebook is dramatized.',
      },
      {
        id: 'washington',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1957 },
          { type: 'locationIs', locationId: 'washingtonDC' },
        ],
        title: 'A Seat at the Table',
        locationLabel: 'Washington, D.C.',
        yearLabel: '1955',
        image: {
          setting: 'a government corridor of identical doors with a briefcase set down outside one of them',
          year: 1955,
          characters: ['vonneumann'],
          mood: 'formal, weighted, wide awake',
          details: ['a corridor of identical panelled doors', 'a briefcase set on the floor', 'a security desk with a ledger', 'a lapel badge', 'a radiator under a tall window'],
          alt: 'A briefcase set down in a government corridor of identical panelled doors beside a security desk.',
        },
        pages: [
          {
            id: 'corridor',
            narration:
              'The corridor has thirty identical doors and a ledger at the end of it that everybody signs, including him, four times a week. He has become, without quite deciding to, a man whose day is made of rooms.',
          },
          {
            id: 'why',
            narration:
              'The mathematics is not what they want. What they want is someone who can hold the whole shape of a problem at once — the arithmetic, the machinery, and the men on the other side of it — and say the number out loud.',
            speaker: 'A COMMISSIONER',
            dialogue: 'You are the only man here who understands both the arithmetic and the politics. That is why you are here, and frankly it is also why you frighten people.',
          },
          {
            id: 'after',
            narration:
              'He answers every question that afternoon and one that nobody asks, which is what the arithmetic says about how long a standoff of this kind stays stable. Nobody writes that answer down.',
          },
        ],
        historicalNote:
          'Von Neumann served as an Atomic Energy Commissioner from 1955 and advised extensively on missile and nuclear policy. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1957 },
        ],
        title: 'The Letter With the Seal',
        yearLabel: '1955',
        image: {
          setting: 'a desk with an official letter bearing a seal, laid on top of a page of mathematics',
          year: 1955,
          characters: ['vonneumann'],
          mood: 'weighed, private, decided',
          details: ['an official letter with an embossed seal', 'a page of mathematics half covered', 'a fountain pen uncapped', 'reading spectacles folded', 'a curtain half drawn'],
          alt: 'An official letter with an embossed seal laid on top of a half-covered page of mathematics.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter is embossed and courteous and asks him to serve, and it has been laid down on top of a page of mathematics that will now not be finished this week, or possibly at all.',
          },
          {
            id: 'why',
            narration:
              'He has spent his life saying yes to the next interesting thing and this is not interesting; it is only necessary, and he has never before had to tell those two apart. He uncaps the pen.',
            speaker: 'JANCSI',
            dialogue: 'If the people who understand the arithmetic all stay in their studies, the room will be full of people who do not.',
          },
        ],
        historicalNote:
          'Von Neumann accepted a demanding federal advisory appointment in his final years, greatly reducing his research time. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-personal-late',
    characterId: 'vonneumann',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 68 },
    once: true,
    variants: [
      {
        id: 'ill',
        conditions: [
          { type: 'yearAtLeast', year: 1955 },
          { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
        ],
        title: 'The One Machine He Cannot Repair',
        yearLabel: '1956',
        image: {
          setting: 'a hospital room arranged as an office, papers stacked on a wheeled table',
          year: 1956,
          characters: ['vonneumann'],
          mood: 'diminished, still working, tender',
          details: ['a wheeled bed table stacked with papers', 'a jug and a covered glass', 'a chair drawn close for a visitor', 'a folder of committee minutes', 'a window with a blind half down'],
          alt: 'A wheeled hospital table stacked with papers and committee folders beside a chair drawn close.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'They have let him have the wheeled table and he has covered it: minutes, a draft on automata, a page of arithmetic begun in a better month. Officers come to the door with folders and are sent away or let in depending on whether the folder is urgent.',
          },
          {
            id: 'fear',
            narration:
              'What frightens him is not the ending. It is the possibility of losing, before the ending, the one instrument he has always been able to rely on, and finding out what is left of a man when the arithmetic goes.',
            speaker: 'JANCSI',
            dialogue: 'Read me the columns again. Slowly. I want to hear whether I still catch the error before you finish.',
          },
          {
            id: 'quiet',
            narration:
              'In the evenings the room is quieter than any room he has ever chosen to work in, and he asks, some nights, for someone simply to sit in the chair, which is a request he has never made before in his life.',
          },
        ],
        historicalNote:
          'Von Neumann was diagnosed with cancer in 1955 and continued government and scientific work from hospital until his death in 1957. Accounts describe his distress at the prospect of losing his mental powers. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1955 }],
        title: 'The Speed He Kept',
        yearLabel: '1956',
        image: {
          setting: 'a study late at night with three unfinished projects on one desk and a car key on the sill',
          year: 1956,
          characters: ['vonneumann'],
          mood: 'undimmed, driven, faintly haunted',
          details: ['three unfinished projects on one desk', 'a car key on a windowsill', 'a lamp burning past midnight', 'a lecture invitation unopened', 'a coat over a chair back'],
          alt: 'Three separate unfinished projects on a single desk beside a car key on a windowsill.',
        },
        pages: [
          {
            id: 'desk',
            narration:
              'Three unfinished things on one desk at one in the morning, and the lamp on, and the coat still over the chair from an errand he does not remember coming back from. He is fifty-two and works as though somebody has told him the closing time.',
          },
          {
            id: 'why',
            narration:
              'Nobody has. It is only that he has always taken his own speed as a fixed constant of the world, and has recently begun to notice that constants are things that hold until they do not.',
            speaker: 'JANCSI',
            dialogue: 'I have never been afraid of being wrong. I am beginning to be afraid of being slow.',
          },
        ],
        historicalNote:
          'Von Neumann worked at an extraordinary pace throughout his life and set out in his last years to finish several projects at once. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'vonneumann-legacy-closing',
    characterId: 'vonneumann',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'stayed',
        conditions: [{ not: { type: 'visitedLocation', locationId: 'princeton' } }],
        title: 'The Page Got Out',
        yearLabel: '1957',
        image: {
          setting: 'a basement workroom with a part-built chassis and a foreign journal open at a familiar diagram',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'wry, outpaced, oddly satisfied',
          details: ['a part-built chassis on trestles', 'a foreign journal open at a diagram', 'a bulb on a flex', 'a crate of mismatched valves', 'a tin of tea used for screws'],
          alt: 'A part-built chassis on trestles beside a foreign journal lying open at a familiar block diagram.',
        },
        pages: [
          {
            id: 'journal',
            narration:
              'The journal is nine months old and came by a route with three people in it, and on page forty there is a photograph of a machine in a country he has never seen, and the block diagram beside it is his page with somebody else’s numbering on it.',
          },
          {
            id: 'after',
            narration:
              'The chassis on his own trestles is two thirds finished and will probably stay that way. He looks at the photograph for a long time and finds, to his considerable annoyance, that the feeling is not envy. The idea did not need him. He had rather hoped it would.',
          },
        ],
        historicalNote:
          'The stored-program design spread quickly through published reports. A life that watched that happen from outside is a dramatized departure.',
      },
      {
        id: 'machine',
        conditions: [{ type: 'projectCompleted', projectId: 'vonneumann-stored-program' }],
        title: 'Copies of Copies',
        yearLabel: '1957',
        image: {
          setting: 'a wall map with pins in a dozen cities, each pin labelled with a machine’s name',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'expansive, valedictory, calm',
          details: ['a wall map stuck with pins', 'hand-lettered labels beside each pin', 'a stack of duplicated design reports', 'a chair pushed back', 'winter light through a high window'],
          alt: 'A wall map stuck with a dozen labelled pins above a stack of duplicated design reports.',
        },
        pages: [
          {
            id: 'map',
            narration:
              'Somebody has pinned a map on the corridor wall with a pin for every machine built from the design, and there are a dozen of them now, in cities he has never worked in, each one with a name somebody was pleased with.',
          },
          {
            id: 'after',
            narration:
              'He looks at it on his way past and does the only calculation that interests him about it, which is the doubling time. Then he goes to his office, because there is a draft about automata on the desk and it is about machines that make copies of themselves, and the joke is not lost on him.',
          },
        ],
        historicalNote:
          'Machines built to von Neumann’s openly published architecture spread rapidly through the late 1940s and 1950s.',
      },
      {
        id: 'open',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.openDesign' }],
        title: 'What He Gave Away',
        yearLabel: '1957',
        image: {
          setting: 'a filing drawer of correspondence from institutions requesting design reports',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'settled, generous, unglamorous',
          details: ['a filing drawer of letters', 'foreign stamps on envelopes', 'a duplicated report with a worn cover', 'a rubber stamp reading SENT', 'a desk lamp on a bent arm'],
          alt: 'A filing drawer full of letters with foreign stamps beside a duplicated report with a worn cover.',
        },
        pages: [
          {
            id: 'drawer',
            narration:
              'The drawer is full of requests: universities, laboratories, one or two companies who were surprised to be answered. Every one of them was sent the drawing and none of them was sent a bill.',
          },
          {
            id: 'after',
            narration:
              'He has made no money out of the most consequential thing he ever designed and finds, on the whole, that this is the arrangement he wanted. A thing that spreads is worth more than a thing that is owned, and he has always preferred the larger number.',
          },
        ],
        historicalNote:
          'Von Neumann circulated the computer design reports openly and did not seek patents, an unusual decision that accelerated the spread of the architecture.',
      },
      {
        id: 'default',
        title: 'The Room With the Bench In It',
        yearLabel: '1957',
        image: {
          setting: 'a workroom with an unfinished chassis under a dust sheet and a swept floor',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'unfinished, quiet, unresigned',
          details: ['an unfinished chassis under a dust sheet', 'a swept concrete floor', 'a toolbox closed', 'block diagrams curling on a wall', 'a light left on'],
          alt: 'An unfinished chassis under a dust sheet in a swept workroom with block diagrams curling on the wall.',
        },
        pages: [
          {
            id: 'sheet',
            narration:
              'The dust sheet is over the chassis and the floor has been swept by somebody being tactful. The diagrams are still on the wall, curling at the corners, and they are still right; nobody has shown otherwise.',
          },
          {
            id: 'after',
            narration:
              'He stands in the doorway with the light on behind him and thinks that the idea does not need this particular set of valves, or this room, or, in the end, him. Somebody will read the page. It is one page. It was always going to be one page.',
          },
        ],
        historicalNote:
          'In the documented life the Institute machine was completed and copied widely. A version left unfinished is a dramatized departure.',
      },
    ],
  },

  // ───────────────────────────────────────────── epilogue
  {
    id: 'vonneumann-epilogue',
    characterId: 'vonneumann',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'full',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'vonneumann-set-theory-axioms',
              'vonneumann-quantum-foundations',
              'vonneumann-game-theory',
              'vonneumann-implosion-computation',
              'vonneumann-stored-program',
              'vonneumann-weather-prediction',
              'vonneumann-cellular-automata',
            ],
            count: 5,
          },
        ],
        title: 'The Century He Left Running',
        yearLabel: '1957',
        image: {
          setting: 'a winter window at dusk with a city of lit windows beyond it, one lamp reflected in the glass',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'valedictory, immense, tender',
          details: ['a window at dusk', 'a single lamp reflected in glass', 'a stack of papers squared on a sill', 'a folded pair of spectacles', 'snow beginning outside'],
          alt: 'A single lamp reflected in a winter window at dusk with lit windows beyond and snow beginning.',
        },
        pages: [
          {
            id: 'count',
            narration:
              'Set theory, quantum mechanics, the mathematics of conflict, the arithmetic of a weapon, a machine with one memory for instructions and numbers, tomorrow’s weather, and a pattern on squared paper that makes copies of itself. Any one of them would be a life.',
          },
          {
            id: 'spread',
            narration:
              'The machines multiply first, because he gave the drawing away. Then the strategies, in rooms where nobody has heard of him. Then, much later and everywhere, the ordinary business of instructions and data sharing one memory, which nobody will think to call an idea at all.',
          },
          {
            id: 'voice',
            narration:
              'What he would want said is not the list. It is the habit under the list.',
            speaker: 'JANCSI',
            dialogue: 'Most people begin before they have chosen the road. I only ever chose the road first. Everything else was walking, and I was in a hurry.',
          },
        ],
        historicalNote:
          'Von Neumann died in 1957, aged fifty-three. His stored-program architecture, operator formulation of quantum mechanics, founding of game theory, and work on automata each remain foundational.',
      },
      {
        id: 'stayed',
        conditions: [{ not: { type: 'visitedLocation', locationId: 'princeton' } }],
        title: 'The Man Who Stayed',
        yearLabel: '1957',
        image: {
          setting: 'a study with a shelf of offprints in several languages and one window onto a repaired street',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'unbowed, curtailed, clear',
          details: ['offprints in several languages', 'a window onto a repaired street', 'a part-built chassis under a cloth', 'a plain notebook', 'a lamp turned low'],
          alt: 'A shelf of offprints in several languages beside a window onto a repaired street.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The shelf holds everything he published, in four languages, most of it read late and abroad by people who could not write back. The chassis under the cloth in the corner never ran. The page pinned above it was right the first time and stayed right.',
          },
          {
            id: 'after',
            narration:
              'He was always going to be the fastest man in whatever room he was standing in. The century simply put him in smaller rooms than the ones he was built for, and he went on working at exactly the same speed in all of them.',
            speaker: 'JANCSI',
            dialogue: 'The road was always there. Some years they simply would not let me post the directions.',
          },
        ],
        historicalNote:
          'Von Neumann emigrated in the early 1930s and did his major later work in the United States. A life spent entirely in Europe is a dramatized departure.',
      },
      {
        id: 'machine',
        conditions: [{ type: 'projectCompleted', projectId: 'vonneumann-stored-program' }],
        title: 'One Page, Copied',
        yearLabel: '1957',
        image: {
          setting: 'a duplicated design report on a desk, its cover worn soft from handling',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'quiet, propagating, unfinished',
          details: ['a duplicated report with a soft worn cover', 'a pencil line under one sentence', 'a stack of unanswered letters', 'a dark window', 'a chair pushed in'],
          alt: 'A duplicated design report with a worn soft cover, one sentence underlined in pencil.',
        },
        pages: [
          {
            id: 'report',
            narration:
              'The report is soft at the corners from being handled by people who did not have their own copy. One sentence in it is underlined in pencil, not by him, in a hand nobody can identify.',
          },
          {
            id: 'after',
            narration:
              'It is the sentence about the memory holding both. From it, in rooms he never entered, everything else is built — and because he took no patent and asked no fee, nobody afterwards has to ask anyone’s permission to build it.',
            speaker: 'JANCSI',
            dialogue: 'A thing that spreads is worth more than a thing that is owned. I have always preferred the larger number.',
          },
        ],
        historicalNote:
          'The stored-program design was published without patent and became the architecture of nearly all subsequent computers.',
      },
      {
        id: 'conscience',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.conscience', value: 'reluctant' }],
        title: 'The Account, Closed',
        yearLabel: '1957',
        image: {
          setting: 'a desk drawer holding a plain notebook, closed, with an envelope on top of it',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'reckoned, private, unabsolved',
          details: ['a plain notebook in a drawer', 'a sealed envelope on top of it', 'a drawer key on a ring', 'a folded committee agenda', 'a lamp turned off'],
          alt: 'A plain closed notebook in a desk drawer with a sealed envelope resting on top of it.',
        },
        pages: [
          {
            id: 'notebook',
            narration:
              'The notebook stays in the drawer with an envelope on top of it, and the account inside is complete: what the work was, what it was for, and what he thought at the time, in his own hand, without corrections.',
          },
          {
            id: 'after',
            narration:
              'He never argued that the arithmetic was innocent. He argued that it was arithmetic, and that somebody was going to do it, and that a man who does it should at least know what he has done.',
            speaker: 'JANCSI',
            dialogue: 'I have never asked to be forgiven anything. I have only ever asked to be told the number.',
          },
        ],
        historicalNote:
          'Participants in wartime weapons work reckoned with it in very different ways. This private account is dramatized.',
      },
      {
        id: 'bargain',
        conditions: [{ type: 'narrativeFlag', flag: 'vonneumann.bargain', value: 'engineering' }],
        title: 'The Folder in the Bottom Drawer',
        yearLabel: '1957',
        image: {
          setting: 'a comfortable office with a tied folder taken out of a bottom drawer and laid on the blotter',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'settled, wistful, unregretted aloud',
          details: ['a folder tied with faded tape', 'a bottom drawer standing open', 'a blotter with a good pen on it', 'a framed certificate on a wall', 'rain on a window'],
          alt: 'A folder tied with faded tape laid on a blotter beside an open bottom drawer.',
        },
        pages: [
          {
            id: 'folder',
            narration:
              'The tape has gone the colour of weak tea and the knot is his own, tied at seventeen, and the pages inside are in a hand he can still recognise as impatient. He unties it perhaps twice a decade.',
          },
          {
            id: 'after',
            narration:
              'He has had a large and comfortable life, in the profession his father asked for, and has been very good at it, immediately and without much affection. The room behind the door was always there. He simply never went in and shut it behind him.',
            speaker: 'JANCSI',
            dialogue: 'It was not the wrong choice. It was only the one I did not make twice.',
          },
        ],
        historicalNote:
          'The documented life never subordinated the mathematics to the practical profession. A life in which it did is a dramatized departure.',
      },
      {
        id: 'default',
        title: 'The Road Chosen First',
        yearLabel: '1957',
        image: {
          setting: 'a plain room at dusk with a single page of arithmetic on the table and a chair drawn back',
          year: 1957,
          characters: ['vonneumann'],
          mood: 'quiet, unfinished, clear',
          details: ['one page of arithmetic', 'a chair drawn back from a table', 'a lamp not yet lit', 'a coat on a hook', 'snow at a window'],
          alt: 'A single page of arithmetic on a plain table with a chair drawn back and an unlit lamp beside it.',
        },
        pages: [
          {
            id: 'page',
            narration:
              'One page on the table, worked most of the way through and stopped in the middle of a line, which is how work looks when it is put down rather than finished.',
          },
          {
            id: 'voice',
            narration:
              'He was fifty-three, and he had spent all of it going faster than the people around him, and the thing he wanted understood was never the speed.',
            speaker: 'JANCSI',
            dialogue: 'It is not that I am fast. It is that most people begin before they have chosen the road.',
          },
        ],
        historicalNote:
          'Von Neumann died in 1957 at fifty-three. The closing line echoes the temperament described throughout this life; the wording is dramatized.',
      },
    ],
  },
];
