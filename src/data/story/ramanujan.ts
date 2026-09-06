import type { StoryScene } from '../../types/story';

const sourceIds = ['ramanujan'];

/** Board context cards told in full by scenes in this file. */
export const RAMANUJAN_REPLACED_CONTEXT_CARDS: string[] = [
  'ramanujan-card-1904',
  'ramanujan-card-1913-hardy',
  'ramanujan-card-1914-voyage',
  'ramanujan-card-1918-frs',
];

export const RAMANUJAN_STORY_SCENES: StoryScene[] = [
  // ---------------------------------------------------------------------
  // Prologue
  // ---------------------------------------------------------------------
  {
    id: 'ramanujan-prologue',
    characterId: 'ramanujan',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A Town of Ledgers and Temples',
        locationLabel: 'South India',
        yearLabel: '1887',
        image: {
          setting: 'a temple street in a South Indian town at the end of the nineteenth century',
          year: 1887,
          characters: ['ramanujan'],
          mood: 'warm, ordinary, quietly expectant',
          details: ['gopuram against a white sky', 'brass water vessels', 'palm-leaf eaves', 'a ledger open on a step', 'chalk dust'],
          alt: 'A restrained illustration of a South Indian temple street in the late nineteenth century.',
        },
        pages: [
          {
            id: 'raj',
            narration:
              'The empire runs on arithmetic. Rice is weighed, tariffs are added, salaries are entered in English in ruled columns, and a clerk who can add a page of figures without a mistake will eat. Everything the schools reward can be checked; nothing they reward has to be beautiful.',
          },
          {
            id: 'birth',
            narration:
              'In Erode, in the winter of 1887, a boy is born to a family with more devotion than money. They carry him to Kumbakonam, a town of temple tanks and cloth shops, where his father keeps accounts in a sari merchant\'s shop and his mother sings at the temple for a few coins a month.',
          },
          {
            id: 'child',
            narration:
              'He is slow to talk and quick to notice. He asks how far the first star is, and whether the world has an edge, and whether numbers ever stop. Nobody in the house can answer. Nobody in the house is worried; the boy will learn accounts and be useful.',
          },
        ],
        historicalNote:
          'Ramanujan was born in Erode in December 1887 and raised in Kumbakonam in a poor Brahmin family; his father was a shop clerk and his mother sang at a temple. The connective narration is dramatized.',
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Chapter 1 — Formation
  // ---------------------------------------------------------------------
  {
    id: 'ramanujan-formation-opening',
    characterId: 'ramanujan',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Boy Who Finishes Early',
        locationLabel: 'Kumbakonam',
        yearLabel: '1890s',
        image: {
          setting: 'a crowded schoolroom in Kumbakonam in the 1890s',
          year: 1897,
          characters: ['ramanujan'],
          mood: 'restless brilliance in a small room',
          details: ['slates and chalk', 'a wooden bench worn smooth', 'monsoon light through shutters', 'a brass bell', 'ink-stained register'],
          alt: 'A boy at a worn school bench in a South Indian classroom, slate in hand.',
        },
        pages: [
          {
            id: 'slate',
            narration:
              'The master sets a long division and walks the aisle. Srinivasa has the answer before the chalk is warm, and then sits with the slate face down, because there is nothing to do with the rest of the hour. The others are still on the second line.',
          },
          {
            id: 'master',
            narration: 'The master stops beside the bench and turns the slate face up with one finger.',
            speaker: 'THE SCHOOLMASTER',
            dialogue: 'Boy. If you have finished, tell the class how you did it.',
          },
          {
            id: 'cannot',
            narration:
              'He cannot. The answer arrived whole, like a face across a street, and the steps that ought to lead to it are simply not there. He says the number aloud and it is right, and the room goes quiet in a way he does not enjoy.',
          },
          {
            id: 'question',
            narration:
              'That night he asks his mother what zero divided by zero is. She tells him to eat. He lies on the mat by the door and turns the question over the way another boy would turn a stone in his pocket. It has no bottom. He likes that.',
          },
          {
            id: 'choice',
            narration: 'The school year is turning and he cannot do both well. What does the boy chase?',
            choices: [
              {
                id: 'borrow',
                label: 'Beg mathematics books from anyone who owns one',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.appetite', value: true },
                  { type: 'theme', theme: 'giftVsSystem', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'prizes',
                label: 'Win the school prizes and make the family proud',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.prizes', value: true },
                  { type: 'theme', theme: 'giftVsSystem', amount: -1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Ramanujan\'s early aptitude and his habit of producing results without visible working are documented. The schoolmaster\'s line is dramatized wording, not a quotation.',
      },
    ],
  },
  {
    id: 'ramanujan-formation-lodgers',
    characterId: 'ramanujan',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'students',
        conditions: [{ type: 'yearAtLeast', year: 1898 }],
        title: 'The Lodgers Upstairs',
        locationLabel: 'Kumbakonam',
        yearLabel: 'c. 1899',
        image: {
          setting: 'the upper room of a small house let to college students in Kumbakonam',
          year: 1899,
          characters: ['ramanujan'],
          mood: 'shy hunger, warm lamplight',
          details: ['borrowed textbooks stacked on a mat', 'kerosene lamp', 'a rolled sleeping mat', 'chalk on a doorframe', 'monsoon rain outside'],
          alt: 'A boy reading borrowed college textbooks by lamplight in a small upper room.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'His mother lets the upper room to college students to make the rent. They come down for their meals and he waits by the stair with his hands behind his back, because if he is polite for long enough somebody will lend him a book.',
          },
          {
            id: 'trig',
            narration:
              'One of them gives him a trigonometry text meant for men five years older. He returns it in a week, having found the sine formulas for himself somewhere in the middle, and having been briefly, privately crushed to learn that somebody else had found them first.',
          },
          {
            id: 'ask',
            speaker: 'A LODGER',
            dialogue: 'Keep it. I am done with the examination and you are not done with the book.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.borrowedBooks', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Ramanujan borrowed advanced mathematics books from college students lodging in his mother\'s house and worked far ahead of his schooling. The lodger\'s line is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-formation-squares',
    characterId: 'ramanujan',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 48 },
    once: true,
    variants: [
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1900 }],
        title: 'Magic Squares',
        locationLabel: 'Kumbakonam',
        yearLabel: 'c. 1900',
        image: {
          setting: 'a shaded verandah with a slate covered in grids of numbers',
          year: 1900,
          characters: ['ramanujan'],
          mood: 'absorbed, patient, private',
          details: ['a slate ruled into squares', 'chalk stub', 'jasmine on a string', 'a brass tumbler', 'afternoon shadow'],
          alt: 'A slate ruled into a grid of numbers on a shaded verandah.',
        },
        pages: [
          {
            id: 'grid',
            narration:
              'He fills the slate with squares of numbers whose rows and columns and diagonals all come to the same total, and then squares that also work when you fold them, and then squares built on a birthday. It is a child\'s amusement and he is doing it the way a locksmith takes apart a lock.',
          },
          {
            id: 'rule',
            narration:
              'By the end of the afternoon he is not making squares any more. He is making the rule that makes squares. He does not write the rule down. He is nine, or ten, and it does not occur to him that anyone would want it.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote: 'Ramanujan\'s childhood work on magic squares is documented. The scene around it is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-formation-closing',
    characterId: 'ramanujan',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'home',
        conditions: [{ type: 'locationIs', locationId: 'kumbakonam' }],
        title: 'A Book Without Proofs',
        locationLabel: 'Kumbakonam',
        yearLabel: '1903',
        image: {
          setting: 'a small house in Kumbakonam with a thick worn book open on the floor',
          year: 1903,
          characters: ['ramanujan'],
          mood: 'a door opening',
          details: ['a heavy second-hand book', 'foxed pages', 'oil lamp', 'a folded mat', 'temple bell heard through a window'],
          alt: 'A heavy second-hand mathematics book open on the floor of a small house.',
        },
        pages: [
          {
            id: 'carr',
            narration:
              'The book that comes into the house in 1903 is a synopsis: five thousand results of pure mathematics set down one after another, dense as a railway timetable, with almost nothing in the way of proof. To a trained student it is a revision aid. To him it is a list of five thousand locked doors and no keys.',
          },
          {
            id: 'begin',
            narration:
              'He starts at the beginning. He does not read it; he re-derives it. When he catches up to the book he keeps going, and the going does not stop for seventeen years.',
          },
        ],
        historicalNote:
          'In 1903 Ramanujan obtained G. S. Carr\'s Synopsis of Elementary Results in Pure Mathematics, a compendium of results stated with little proof, and worked through it independently.',
      },
      {
        id: 'away',
        title: 'What He Carries Instead',
        yearLabel: '1903',
        image: {
          setting: 'a railway platform in South India with a boy and a cloth bundle',
          year: 1903,
          characters: ['ramanujan'],
          mood: 'unsettled, hopeful, thin',
          details: ['a cloth bundle', 'wooden benches', 'a station clock', 'a folded slate', 'dust on bare feet'],
          alt: 'A boy with a cloth bundle waiting on a South Indian railway platform.',
        },
        pages: [
          {
            id: 'elsewhere',
            narration:
              'The house in Kumbakonam is behind him and the thick second-hand book that was going round the college there never reaches his hands. He has a slate, a bundle, and a head full of results nobody has asked for.',
          },
          {
            id: 'still',
            narration:
              'It changes nothing about the work and everything about how long it takes. Without a list of what is already known, he will spend years discovering things that were settled before he was born, and will not find out until much later which of them nobody knew at all.',
          },
        ],
        historicalNote:
          'Carr\'s Synopsis reached Ramanujan in Kumbakonam in 1903 and shaped his whole method. This variant follows a life that left the town before the book arrived.',
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Chapter 2 — Education
  // ---------------------------------------------------------------------
  {
    id: 'ramanujan-education-opening',
    characterId: 'ramanujan',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Five Thousand Locked Doors',
        locationLabel: 'Kumbakonam',
        yearLabel: '1903',
        image: {
          setting: 'a college compound in Kumbakonam with a young student and a stack of notebooks',
          year: 1904,
          characters: ['ramanujan'],
          mood: 'obsession pressing against duty',
          details: ['ruled notebooks', 'a college gate', 'an English grammar left unopened', 'chalk-dusted fingers', 'a mango tree'],
          alt: 'A young student in a college compound with notebooks and an unopened English grammar.',
        },
        pages: [
          {
            id: 'scholarship',
            narration:
              'The scholarship to the college is a small triumph for the household. Rice for a year, and a son who might become a graduate, and then a post with a pension. His mother says the word graduate the way other people say the name of a god.',
          },
          {
            id: 'notebook',
            narration:
              'In the lecture on English composition he is under the desk with a notebook, taking a continued fraction apart to see what is inside it. The fraction goes on forever and settles onto a number he did not expect, and he writes it down without a proof because the proof will keep.',
          },
          {
            id: 'friend',
            narration: 'A classmate finds him behind the library with the notebook open on his knees.',
            speaker: 'A CLASSMATE',
            dialogue: 'The physiology paper is on Friday. You have not opened the book once.',
          },
          {
            id: 'choice',
            narration:
              'He says he will read it on Thursday, and he means it, in the way a man means it about a road he will never take. The examinations are three months off and the notebook is half full. What gets the hours?',
            choices: [
              {
                id: 'exams',
                label: 'Sit down and pass the other subjects',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.dutiful', value: true },
                  { type: 'theme', theme: 'giftVsSystem', amount: -2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'notebook',
                label: 'Fill the notebook and let the rest fall',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.notebookFirst', value: true },
                  { type: 'theme', theme: 'giftVsSystem', amount: 2 },
                  { type: 'resources', effects: { theory: 1, standing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Ramanujan won a scholarship to the Government Arts College in Kumbakonam and neglected every subject but mathematics. The classmate\'s line is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-card-scholarship',
    characterId: 'ramanujan',
    chapterId: 'education',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'ramanujan-card-1904',
    trigger: { event: 'afterAction', priority: 82 },
    once: true,
    variants: [
      {
        id: 'prize-boy',
        conditions: [
          { type: 'yearAtLeast', year: 1904 },
          { type: 'choiceWas', choiceKey: 'ramanujan-formation-opening:choice', choiceId: 'prizes' },
        ],
        title: 'The Prize Boy Fails',
        locationLabel: 'Kumbakonam',
        yearLabel: '1904',
        image: {
          setting: 'a college notice board in Kumbakonam with a list of results',
          year: 1904,
          characters: ['ramanujan'],
          mood: 'quiet public humiliation',
          details: ['a printed results list', 'a wooden notice board', 'monsoon damp on paper', 'a satchel of notebooks', 'a bicycle propped on a wall'],
          alt: 'A printed list of examination results pinned to a college notice board.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'He is the boy who won the prizes. The whole street knows it. The list on the board carries his name in the column where nobody wants their name, and the men who shook his father\'s hand two years ago look at the ground when they pass the shop.',
          },
          {
            id: 'mathematics',
            narration:
              'The mathematics paper was full marks and it does not count for anything on its own. English does. Physiology does. He walks home with a satchel of notebooks worth, at this moment, exactly nothing, and the scholarship gone with them.',
          },
          {
            id: 'mother',
            speaker: 'HIS MOTHER',
            dialogue: 'Then you will find work, and you will do your sums in the evening like everybody else.',
          },
          {
            id: 'choice',
            narration: 'The formal road is closed. What does he do with the year in front of him?',
            choices: [
              {
                id: 'wander',
                label: 'Go looking for men who will read the notebooks',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.patrons', value: true },
                  { type: 'theme', theme: 'giftVsSystem', amount: 1 },
                  { type: 'resources', effects: { network: 1, funds: -1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay in the house and keep writing',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.solitude', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 2 },
                  { type: 'resources', effects: { theory: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1904' },
          { type: 'resources', effects: { funds: -1, standing: -1 } },
        ],
        historicalNote:
          'Ramanujan lost his college scholarship after failing subjects other than mathematics, ending his formal education. His mother\'s line is dramatized.',
      },
      {
        id: 'tried',
        conditions: [
          { type: 'yearAtLeast', year: 1904 },
          { type: 'choiceWas', choiceKey: 'ramanujan-education-opening:choice', choiceId: 'exams' },
        ],
        title: 'He Tried',
        locationLabel: 'Kumbakonam',
        yearLabel: '1904',
        image: {
          setting: 'a lamplit table stacked with English and physiology textbooks',
          year: 1904,
          characters: ['ramanujan'],
          mood: 'exhausted honest failure',
          details: ['English grammar and physiology texts', 'a guttering lamp', 'a cold tumbler of coffee', 'a closed notebook', 'moths at the shutter'],
          alt: 'A lamplit table stacked with textbooks beside one closed notebook.',
        },
        pages: [
          {
            id: 'attempt',
            narration:
              'He does read the physiology. He reads it the way a man reads a wall. The words go in and lie down and refuse to arrange themselves, and around midnight the notebook comes out from under the pile because it is the only thing in the room that will speak to him.',
          },
          {
            id: 'result',
            narration:
              'The result is the same result. Full marks in one paper and the rest a ruin, and the scholarship withdrawn in a letter of two sentences. What stings is not the failure. It is that he genuinely tried, and it made no difference at all.',
          },
          {
            id: 'choice',
            narration: 'The formal road is closed. What does he do with the year in front of him?',
            choices: [
              {
                id: 'wander',
                label: 'Go looking for men who will read the notebooks',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.patrons', value: true },
                  { type: 'theme', theme: 'giftVsSystem', amount: 1 },
                  { type: 'resources', effects: { network: 1, funds: -1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay in the house and keep writing',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.solitude', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 2 },
                  { type: 'resources', effects: { theory: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1904' },
          { type: 'resources', effects: { funds: -1, standing: -1 } },
        ],
        historicalNote:
          'Ramanujan lost his college scholarship after failing non-mathematical subjects. This variant dramatizes an attempt to satisfy the curriculum that still fails.',
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1904 }],
        title: 'A Scholarship Lost',
        yearLabel: '1904',
        image: {
          setting: 'a two-line official letter on a plain table',
          year: 1904,
          characters: ['ramanujan'],
          mood: 'flat administrative finality',
          details: ['an official letter', 'an inkwell', 'a stack of ruled notebooks', 'a bare table', 'shuttered light'],
          alt: 'A short official letter lying on a plain table beside a stack of notebooks.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter is two sentences long and does not mention mathematics. The scholarship is withdrawn on account of the other subjects. Somewhere in a building he has never entered, a clerk has ruled a line through his name and gone to lunch.',
          },
          {
            id: 'after',
            narration:
              'What is left is a household one rupee poorer, a young man with no qualification of any kind, and a stack of notebooks that no examiner in the province is competent to read.',
          },
          {
            id: 'choice',
            narration: 'The formal road is closed. What does he do with the year in front of him?',
            choices: [
              {
                id: 'wander',
                label: 'Go looking for men who will read the notebooks',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.patrons', value: true },
                  { type: 'theme', theme: 'giftVsSystem', amount: 1 },
                  { type: 'resources', effects: { network: 1, funds: -1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay in the house and keep writing',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.solitude', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 2 },
                  { type: 'resources', effects: { theory: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1904' },
          { type: 'resources', effects: { funds: -1, standing: -1 } },
        ],
        historicalNote:
          'Absorbed entirely in mathematics, Ramanujan neglected his other subjects and lost his college scholarship, ending his formal education.',
      },
    ],
  },
  {
    id: 'ramanujan-education-slate',
    characterId: 'ramanujan',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 52 },
    once: true,
    variants: [
      {
        id: 'lean',
        conditions: [
          { type: 'yearAtLeast', year: 1906 },
          { not: { type: 'resourceAtLeast', resource: 'funds', value: 2 } },
        ],
        title: 'Paper Costs Money',
        locationLabel: 'Kumbakonam',
        yearLabel: 'c. 1907',
        image: {
          setting: 'a bare room at night with a slate, a chalk stub and one thin notebook',
          year: 1907,
          characters: ['ramanujan'],
          mood: 'hungry concentration',
          details: ['a worn slate', 'a chalk stub', 'a single ruled notebook', 'a low oil lamp', 'a rolled mat against the wall'],
          alt: 'A worn slate and a single notebook by lamplight in a bare room.',
        },
        pages: [
          {
            id: 'slate',
            narration:
              'Paper costs money, so the working goes on the slate and is wiped away with his elbow, over and over, until the elbow is grey to the bone. Only the result goes into the notebook, in a small tight hand, with no explanation of how it got there.',
          },
          {
            id: 'cost',
            narration:
              'Two hundred years from now, mathematicians will complain that he never showed his reasoning. Tonight the reasoning is a smear of chalk on his forearm and there is nowhere else for it to be.',
          },
          {
            id: 'hunger',
            narration:
              'He forgets to eat until his mother puts the plate on the floor beside the slate. He eats with one hand and writes with the other, badly, and is happy in a way he could not describe to anybody in the house.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.slate', value: true },
          { type: 'resources', effects: { theory: 1, health: -1 } },
        ],
        historicalNote:
          'Ramanujan worked on a slate because paper was expensive and recorded only results in his notebooks, which is why so much of his work survives without proofs.',
      },
      {
        id: 'steadier',
        conditions: [{ type: 'yearAtLeast', year: 1906 }],
        title: 'The Notebooks Fill',
        locationLabel: 'Kumbakonam',
        yearLabel: 'c. 1907',
        image: {
          setting: 'a small room with several bound notebooks stacked on a mat',
          year: 1907,
          characters: ['ramanujan'],
          mood: 'steady private industry',
          details: ['stacked bound notebooks', 'a fresh nib', 'an ink bottle', 'a slate leaning on the wall', 'afternoon light on a whitewashed wall'],
          alt: 'Several bound notebooks stacked on a mat in a small whitewashed room.',
        },
        pages: [
          {
            id: 'stack',
            narration:
              'There is enough in the house this year for ink and bound notebooks, and the stack grows an inch a month. He numbers the results as they come, and by the time he reaches the hundreds he has stopped distinguishing between the ones he has proved and the ones he simply knows.',
          },
          {
            id: 'nobody',
            narration:
              'No one has read a page of it. He has no idea whether he is repeating a Frenchman from 1750 or standing somewhere nobody has stood. Both possibilities are in the room with him every evening, and neither one makes him stop.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.slate', value: true },
          { type: 'resources', effects: { theory: 1 } },
        ],
        historicalNote: 'The notebooks of this period are documented; the domestic detail is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-education-marriage',
    characterId: 'ramanujan',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 46 },
    once: true,
    variants: [
      {
        id: 'settled',
        conditions: [
          { type: 'yearAtLeast', year: 1910 },
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 },
        ],
        title: 'A Household to Feed',
        locationLabel: 'Kumbakonam',
        yearLabel: '1910',
        image: {
          setting: 'a small South Indian household courtyard at dusk',
          year: 1910,
          characters: ['ramanujan'],
          mood: 'tender, domestic, faintly comic',
          details: ['a cooking fire', 'brass vessels', 'a folded sari drying', 'a notebook left open on a step', 'a coconut broom'],
          alt: 'A small courtyard at dusk with cooking vessels and a notebook left open on a step.',
        },
        pages: [
          {
            id: 'married',
            narration:
              'He is married now, as sons are, to a girl who is still nearly a child and who finds him mostly on the floor with a slate. Janaki learns quickly which silences may be interrupted and which may not. It is not much of a marriage yet. It is a kindness on both sides.',
          },
          {
            id: 'ledger',
            narration:
              'A household costs money and mathematics pays nothing. He tutors a few boys for a few annas and hates it, because a boy who is being tutored asks why, and he cannot always say why.',
          },
          {
            id: 'line',
            speaker: 'JANAKI',
            dialogue: 'You have been sitting like that since the rice was hot.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.janaki', value: true },
          { type: 'resources', effects: { wellbeing: 1, funds: -1 } },
        ],
        historicalNote:
          'Ramanujan married Janaki in 1909 and supported himself by tutoring and small clerical work before the Port Trust post. Dialogue is dramatized.',
      },
      {
        id: 'strained',
        conditions: [{ type: 'yearAtLeast', year: 1910 }],
        title: 'Nothing Coming In',
        yearLabel: '1910',
        image: {
          setting: 'a bare room with an empty rice tin and an open notebook',
          year: 1910,
          characters: ['ramanujan'],
          mood: 'thin, anxious, stubborn',
          details: ['an empty rice tin', 'an open notebook', 'a cracked tumbler', 'a doorway of hard sunlight', 'a folded mat'],
          alt: 'An empty rice tin beside an open notebook in a bare room.',
        },
        pages: [
          {
            id: 'thin',
            narration:
              'There is a wife in the house and no salary in it. He walks to three offices in one morning with the notebooks under his arm and is asked, politely, what qualification he holds. None. Then good day.',
          },
          {
            id: 'stubborn',
            narration:
              'He comes home, sits down where he was sitting, and finishes the identity he was in the middle of. It is either the most stubborn act of his life or the only thing keeping him upright, and he does not examine which.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.janaki', value: true },
          { type: 'resources', effects: { wellbeing: -1, health: -1 } },
        ],
        historicalNote:
          'Ramanujan spent years without a post, seeking patrons and clerical work in South India while continuing his research.',
      },
    ],
  },
  {
    id: 'ramanujan-series-breakthrough',
    characterId: 'ramanujan',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'ramanujan-infinite-series', priority: 84 },
    once: true,
    variants: [
      {
        id: 'home',
        conditions: [{ type: 'locationIs', locationId: 'kumbakonam' }],
        title: 'A Series for Pi',
        locationLabel: 'Kumbakonam',
        yearLabel: 'c. 1910',
        image: {
          setting: 'a night room in Kumbakonam with a slate of dense notation and one lamp',
          year: 1910,
          characters: ['ramanujan'],
          mood: 'exhilaration in an empty house',
          details: ['a slate covered in fractions', 'chalk dust on a forearm', 'an oil lamp burnt low', 'an open notebook', 'a cold cup of coffee'],
          alt: 'A slate covered in dense fractions beside a low-burning lamp at night.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'It arrives the way they all arrive: complete, at an inconvenient hour, with no receipt. A sum whose terms shrink so fast that eight of them already give the circle\'s number to more decimals than any instrument in the province could use.',
          },
          {
            id: 'check',
            narration:
              'He checks it the only way he can, by hand, digit after digit, from the second hour of the night until the lamp gutters and the birds start. The digits keep agreeing. He has no idea why they agree. He writes the formula into the notebook and does not write a single line of argument beneath it.',
          },
          {
            id: 'alone',
            narration:
              'There is nobody in Kumbakonam who can tell him whether this is famous or new. He carries it around for a week the way a man carries news of a birth he cannot announce.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.series', value: true },
          { type: 'resources', effects: { theory: 1, standing: 1 } },
        ],
        historicalNote:
          'Ramanujan derived remarkable rapidly-converging series for pi and striking continued fractions in his notebooks before any contact with professional mathematicians. The scene is dramatized.',
      },
      {
        id: 'elsewhere',
        title: 'Results Without a Reader',
        image: {
          setting: 'a rented room with a lamp, a slate and a stack of notebooks',
          year: 1910,
          characters: ['ramanujan'],
          mood: 'triumph with nowhere to go',
          details: ['a lamp', 'a slate', 'stacked notebooks', 'a shuttered window', 'a tin trunk'],
          alt: 'A lamp, a slate and stacked notebooks in a rented room at night.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'Wherever he sleeps, the work follows. A continued fraction that will not close, and then closes, and then hands him a value for the circle\'s number that ought to be impossible from so few terms.',
          },
          {
            id: 'nobody',
            narration:
              'He reads it back twice and looks up, and there is only a shuttered window and a tin trunk. The notebook takes it. The notebook is the only thing in the world that will.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.series', value: true },
          { type: 'resources', effects: { theory: 1 } },
        ],
        historicalNote: 'The results are documented; the setting is dramatized to follow a life lived away from Kumbakonam.',
      },
    ],
  },
  {
    id: 'ramanujan-education-closing',
    characterId: 'ramanujan',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'notebooks',
        conditions: [{ type: 'projectCompleted', projectId: 'ramanujan-infinite-series' }],
        title: 'Eleven Years, No Salary',
        yearLabel: '1912',
        image: {
          setting: 'a stack of thick handwritten notebooks tied with string',
          year: 1912,
          characters: ['ramanujan'],
          mood: 'quiet accumulation, uncertain worth',
          details: ['thick notebooks tied with string', 'a cloth wrapper', 'a brass lamp', 'a folded letter of introduction', 'a train ticket'],
          alt: 'A stack of thick handwritten notebooks tied with string beside a folded letter.',
        },
        pages: [
          {
            id: 'stack',
            narration:
              'The notebooks are tied with string and they weigh more than his clothes. Inside them are theorems that will occupy other people for a century, and no one alive has confirmed a single one of them.',
          },
          {
            id: 'need',
            narration:
              'He is twenty-four, unemployed, and increasingly aware that a result nobody reads is indistinguishable from a result nobody had. Somewhere there are men who could tell him which of these pages is worth anything. They are not in this town.',
          },
        ],
        historicalNote:
          'By 1912 Ramanujan had filled several notebooks with original results while holding no academic position.',
      },
      {
        id: 'default',
        title: 'The Years Without a Post',
        yearLabel: '1912',
        image: {
          setting: 'a small room with an unfinished page and a dwindling lamp',
          year: 1912,
          characters: ['ramanujan'],
          mood: 'stalled, patient, uncertain',
          details: ['an unfinished page', 'a dwindling lamp', 'a rolled mat', 'a rain-marked wall', 'an untouched almanac'],
          alt: 'An unfinished page beside a dwindling lamp in a small room.',
        },
        pages: [
          {
            id: 'stall',
            narration:
              'The decade closes with the work half-shaped. Some evenings the notebook stays shut because there is a more pressing question about rent, and a question about rent, once asked, is very hard to put down again.',
          },
          {
            id: 'still',
            narration:
              'Still the results come, unbidden, at the wrong times. He is beginning to understand that the trouble is not the mathematics. The trouble is that nothing in the province is built to receive it.',
          },
        ],
        historicalNote:
          'Ramanujan spent 1904–1912 without formal position or academic contact, an interval this variant follows without the notebook work reaching completion.',
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Chapter 3 — Entry into the Profession
  // ---------------------------------------------------------------------
  {
    id: 'ramanujan-entry-opening',
    characterId: 'ramanujan',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'at-madras',
        conditions: [{ type: 'locationIs', locationId: 'madras' }],
        title: 'Clerk, Madras Port Trust',
        locationLabel: 'Madras (Chennai)',
        yearLabel: '1912',
        image: {
          setting: 'a colonial port office in Madras with high desks and shipping ledgers',
          year: 1912,
          characters: ['ramanujan'],
          mood: 'salt air and ruled columns',
          details: ['shipping ledgers', 'a high clerk\'s desk', 'a ceiling fan', 'brown paper wrapping', 'harbour cranes through a window'],
          alt: 'A high clerk\'s desk stacked with shipping ledgers in a colonial port office.',
        },
        pages: [
          {
            id: 'desk',
            narration:
              'Thirty rupees a month and a desk by a window that smells of tar and fish. The ledgers are tonnages and dues, and he clears the day\'s column by eleven because the arithmetic of a harbour is not difficult, it is only long.',
          },
          {
            id: 'brown',
            narration:
              'The rest of the day belongs to him. He works on the backs of the office\'s brown wrapping paper, in a hand so small the manager assumes at first that it is a foreign language, which in a sense it is.',
          },
          {
            id: 'super',
            narration: 'The manager stands over the desk a long moment with a sheet of the wrapping paper held up to the window light.',
            speaker: 'THE OFFICE MANAGER',
            dialogue: 'Your ledger is faultless and you have not been at your ledger. Go on, then. But keep the ledger faultless.',
          },
          {
            id: 'choice',
            narration:
              'It is the first time in his life that an institution has agreed to look the other way for him, and he never forgets it. Still, a salary is not the thing he needs. He needs a reader. Where does he send the pages?',
            choices: [
              {
                id: 'england',
                label: 'Write to the mathematicians in England',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.wroteEngland', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 1 } },
                ],
              },
              {
                id: 'india',
                label: 'Put the case to the mathematical men of Madras first',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.madrasCircle', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 1 },
                  { type: 'resources', effects: { network: 2, funds: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Ramanujan took a clerkship at the Madras Port Trust in 1912; his superiors encouraged his mathematics. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Post at the Harbour',
        yearLabel: '1912',
        image: {
          setting: 'a third-class carriage at dawn with a cloth bundle of papers on the knees',
          year: 1912,
          characters: ['ramanujan'],
          mood: 'a door opening at last, and a long journey to it',
          details: ['a third-class carriage bench', 'a cloth bundle of papers', 'a folded appointment letter', 'a station clock', 'coal smoke over paddy fields'],
          alt: 'A cloth bundle of papers resting on the knees of a passenger in a third-class railway carriage at dawn.',
        },
        pages: [
          {
            id: 'offer',
            narration:
              'The letter takes four months to arrive and eleven words to say it: a clerkship at the harbour, thirty rupees a month, apply in person. It is the first time anybody has offered him money for anything.',
          },
          {
            id: 'commute',
            narration:
              'So the week becomes a train. He goes down to the harbour and comes back, and the carriage is where the mathematics gets done, on the backs of the brown wrapping paper the office throws away, in a hand so small that a conductor once asked him what language it was.',
          },
          {
            id: 'super',
            narration: 'On the Friday the manager stands over the desk a long moment with a sheet of the wrapping paper held up to the window light.',
            speaker: 'THE OFFICE MANAGER',
            dialogue: 'Your ledger is faultless and you have not been at your ledger. Go on, then. But keep the ledger faultless.',
          },
          {
            id: 'choice',
            narration:
              'It is the first time in his life that an institution has agreed to look the other way for him, and he never forgets it. Still, a salary is not the thing he needs. He needs a reader. Where does he send the pages?',
            choices: [
              {
                id: 'england',
                label: 'Write to the mathematicians in England',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.wroteEngland', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 1 } },
                ],
              },
              {
                id: 'india',
                label: 'Put the case to the mathematical men of Madras first',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.madrasCircle', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 1 },
                  { type: 'resources', effects: { network: 2, funds: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Ramanujan took a Madras Port Trust clerkship in 1912 and his superiors encouraged his mathematics. This variant follows a life that kept its base outside the city. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-entry-portrust',
    characterId: 'ramanujan',
    chapterId: 'entry',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'harbour',
        conditions: [
          { type: 'locationIs', locationId: 'madras' },
          { type: 'yearAtLeast', year: 1912 },
        ],
        title: 'The Man Who Reads the Wrapping Paper',
        locationLabel: 'Madras',
        yearLabel: '1913',
        image: {
          setting: 'a port office corridor in Madras with a clerk holding sheets of brown paper',
          year: 1913,
          characters: ['ramanujan'],
          mood: 'unexpected respect across a desk',
          details: ['sheets of brown wrapping paper covered in notation', 'a rolled harbour chart', 'a ceiling fan', 'ink-stained cuffs', 'a wall of pigeonholes'],
          alt: 'Sheets of brown wrapping paper covered in mathematical notation held in a port office corridor.',
        },
        pages: [
          {
            id: 'caught',
            narration:
              'He is caught. A senior man lifts the brown paper off the desk, expecting a private letter, and finds four hundred symbols arranged like a piece of music. He turns it over. He turns it back.',
          },
          {
            id: 'ask',
            narration: 'The man holds the sheet at arm\'s length, then close, then looks up over the top of it.',
            speaker: 'THE SENIOR CLERK',
            dialogue: 'I read mathematics at university. I do not know what any of this is. Is it correct?',
          },
          {
            id: 'result',
            narration:
              'Yes, he says. He does not say how he knows, because the honest answer sounds like a boast or a madness, and he has learned that both close doors. By the end of the month there are three men in Madras writing letters on his behalf, in careful English, to addresses in England. It is the first time his mathematics has ever moved without him carrying it.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.readers', value: true },
          { type: 'resources', effects: { network: 1, standing: 1 } },
        ],
        historicalNote:
          'Ramanujan\'s supervisors and Madras patrons recognized his ability and helped him reach mathematicians in England. The individuals here are composites and the dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1912 },
          { not: { type: 'narrativeFlag', flag: 'ramanujan.thread.hardyReplied' } },
        ],
        title: 'A Reader, Anywhere',
        yearLabel: '1913',
        image: {
          setting: 'a shaded office doorway where a notebook is being handed to a stranger',
          year: 1913,
          characters: ['ramanujan'],
          mood: 'hesitant offering',
          details: ['a tied notebook', 'a bicycle against a wall', 'a fan turning slowly', 'a peon\'s bench', 'sunlight on a tiled step'],
          alt: 'A tied notebook being handed across a shaded office doorway.',
        },
        pages: [
          {
            id: 'offer',
            narration:
              'He unties the string in front of a stranger who has been kind about something else entirely, and watches the man\'s face for the expression that means the page is being read rather than looked at.',
          },
          {
            id: 'line',
            speaker: 'A STRANGER',
            dialogue: 'I cannot follow it. But I have never seen handwriting so certain about anything.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.readers', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote: 'A dramatized encounter consistent with Ramanujan\'s pattern of seeking readers for his notebooks.',
      },
    ],
  },
  {
    id: 'ramanujan-letter-breakthrough',
    characterId: 'ramanujan',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'ramanujan-letter-to-hardy', priority: 88 },
    once: true,
    variants: [
      {
        id: 'after-patrons',
        conditions: [{ type: 'choiceWas', choiceKey: 'ramanujan-card-scholarship:choice', choiceId: 'wander' }],
        title: 'Nine Pages to Cambridge',
        yearLabel: '1913',
        image: {
          setting: 'a table in Madras with a letter, an inkwell and pages of dense theorems',
          year: 1913,
          characters: ['ramanujan'],
          mood: 'nerve and formality',
          details: ['a folded letter', 'pages of dense notation', 'an inkwell', 'a postal cover addressed to England', 'a ceiling fan'],
          alt: 'A folded letter and pages of dense mathematical notation beside an inkwell.',
        },
        pages: [
          {
            id: 'draft',
            narration:
              'The years of asking have taught him the tone: not a genius announcing himself, only a clerk on a small salary asking to be read. He writes that he has not gone through the ordinary course of study, that he has struck out on a path of his own, and that he would be glad if a professor found anything of value in the enclosed.',
          },
          {
            id: 'theorems',
            narration:
              'Then he encloses the theorems, and they are not modest at all. Formulas for counting primes. Integrals nobody has met. A line asserting that the sum of all the whole numbers, added forever, comes to minus one twelfth — set down flatly, as if it were a tide table.',
          },
          {
            id: 'post',
            narration:
              'He walks it to the post himself and stands a moment with the packet in the slot. It is January. The reply, if there is one, is eight weeks of ocean away, and he has just sent the only copy of the most important thing he owns to a man who has never heard his name.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.letterSent', value: true },
          { type: 'resources', effects: { exposure: 2, network: 1 } },
        ],
        historicalNote:
          'In January 1913 Ramanujan wrote to G. H. Hardy at Cambridge enclosing pages of unproved results, including the divergent-series statement about the sum of the natural numbers. The wording here is dramatized from the documented content of the letter, not quoted.',
      },
      {
        id: 'default',
        title: 'The Letter',
        yearLabel: '1913',
        image: {
          setting: 'a clerk\'s desk with a sealed envelope addressed to England',
          year: 1913,
          characters: ['ramanujan'],
          mood: 'quiet audacity',
          details: ['a sealed envelope', 'ruled foolscap', 'an inkwell', 'a stamp of the Raj', 'harbour light through a shutter'],
          alt: 'A sealed envelope addressed to England on a clerk\'s desk.',
        },
        pages: [
          {
            id: 'draft',
            narration:
              'He writes the letter in the office\'s careful English, with the tea going cold: a clerk of the Port Trust, twenty-three, no degree, who has struck out on a line of his own and would be grateful for an opinion.',
          },
          {
            id: 'theorems',
            narration:
              'Behind the courtesies he sets down page after page of results, none of them proved, several of them impossible-looking, one of them cheerfully asserting a value for a sum that runs away to infinity. He knows how it will look. He sends it anyway.',
          },
          {
            id: 'post',
            narration:
              'The packet goes into the mail for England on a hot morning. Then there is nothing to do but rule columns of tonnage and wait for a monsoon and a ship.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.letterSent', value: true },
          { type: 'resources', effects: { exposure: 2, network: 1 } },
        ],
        historicalNote:
          'The 1913 letter to Hardy is documented, including its enclosure of unproved results. Wording is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-card-reply',
    characterId: 'ramanujan',
    chapterId: 'entry',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'ramanujan-card-1913-hardy',
    trigger: { event: 'afterAction', priority: 84 },
    once: true,
    variants: [
      {
        id: 'posted',
        conditions: [
          { type: 'yearAtLeast', year: 1913 },
          { type: 'projectCompleted', projectId: 'ramanujan-letter-to-hardy' },
          { type: 'choiceWas', choiceKey: 'ramanujan-entry-opening:choice', choiceId: 'england' },
        ],
        title: 'A Thin Envelope from Cambridge',
        yearLabel: '1913',
        image: {
          setting: 'a Madras doorway where a thin foreign envelope is being opened',
          year: 1913,
          characters: ['ramanujan'],
          mood: 'the hinge of a life',
          details: ['a thin foreign envelope', 'a Cambridge postmark', 'a wet doorstep', 'a bundle of copied theorems', 'a bicycle bell heard outside'],
          alt: 'A thin foreign envelope with an English postmark held in a doorway.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'Eight thousand miles away, a professor takes an untidy packet from an unknown Indian clerk and very nearly puts it in the wastepaper basket. Some of it looks like the work of a crank. Some of it he cannot place at all, and that is worse, because he is the best there is at placing things.',
          },
          {
            id: 'evening',
            narration:
              'He and a colleague sit over it after dinner until midnight. They agree in the end that the strangest formulas must be true, because no one with the imagination to invent them would have bothered to invent anything so useless as a lie.',
          },
          {
            id: 'here',
            narration:
              'The reply reaches him in the wet season. It asks for proofs. It asks, more carefully, whether the writer might consider coming to Cambridge. He reads it on the doorstep with the rain coming off the eaves and cannot make his hands put it down.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1913-hardy' },
          { type: 'flag', flag: 'ramanujan.thread.hardyReplied', value: true },
          { type: 'resources', effects: { network: 2, standing: 1 } },
        ],
        historicalNote:
          'Hardy nearly dismissed the 1913 letter, then examined it with Littlewood and concluded the theorems must be genuine. The famous judgement is paraphrased here rather than quoted.',
      },
      {
        id: 'after-letter',
        conditions: [
          { type: 'yearAtLeast', year: 1913 },
          { type: 'projectCompleted', projectId: 'ramanujan-letter-to-hardy' },
        ],
        title: 'They Must Be True',
        yearLabel: '1913',
        image: {
          setting: 'a Madras office where a foreign letter is read at a high desk',
          year: 1913,
          characters: ['ramanujan'],
          mood: 'disbelief becoming certainty',
          details: ['a foreign letter', 'a high desk', 'a ledger left open', 'a ceiling fan', 'monsoon light'],
          alt: 'A foreign letter read at a high desk beside an open ledger.',
        },
        pages: [
          {
            id: 'verdict',
            narration:
              'In Cambridge two mathematicians spend an evening deciding whether a stranger is a fraud. They test the ones they can test. They fail to test the rest, and conclude that these are beyond anyone\'s power to fake: nobody would have the imagination to invent them.',
          },
          {
            id: 'reply',
            narration:
              'The answer that comes back across the ocean is polite, insistent, and slightly hungry. It wants proofs. It wants more. It wants, if it can be managed, the man himself.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1913-hardy' },
          { type: 'flag', flag: 'ramanujan.thread.hardyReplied', value: true },
          { type: 'resources', effects: { network: 2, standing: 1 } },
        ],
        historicalNote:
          'Hardy and Littlewood\'s assessment of the 1913 letter is documented; the judgement is paraphrased, not quoted.',
      },
      {
        id: 'wrote-england',
        conditions: [
          { type: 'yearAtLeast', year: 1914 },
          { type: 'choiceWas', choiceKey: 'ramanujan-entry-opening:choice', choiceId: 'england' },
        ],
        title: 'Two Silences and a Reply',
        yearLabel: '1913–1914',
        image: {
          setting: 'a table with three copied packets of theorems, two of them returned unopened',
          year: 1913,
          characters: ['ramanujan'],
          mood: 'persistence against indifference',
          details: ['three copied packets', 'two returned covers', 'string and brown paper', 'an inkwell', 'a stub of candle'],
          alt: 'Three copied packets of theorems, two of them returned unopened.',
        },
        pages: [
          {
            id: 'two',
            narration:
              'He copies the theorems out three times by hand over three months and sends them to three professors in England. He does not announce himself; he writes that he has not gone through the ordinary course of study, that he is a clerk on a small salary, and that he would be glad if anything in the enclosed were found to be of value.',
          },
          {
            id: 'enclosed',
            narration:
              'What is enclosed is not modest. Formulas for counting primes. Integrals nobody has met. A line asserting that the sum of all the whole numbers, added forever, comes to minus one twelfth, set down flatly, as if it were a tide table. Two of the packets come back the way they went, with nothing added, not even a line of regret.',
          },
          {
            id: 'third',
            narration:
              'The third is opened by a man who almost throws it away and then cannot. Somewhere across an ocean an evening is spent over his pages, and the conclusion is reached that theorems this strange are too strange to be invented.',
          },
          {
            id: 'here',
            narration:
              'What comes back is one thin envelope. It asks for proofs, which he does not have in the form they want, and it asks whether he would come. He sits with it a long time in a room that has suddenly become very small.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1913-hardy' },
          { type: 'flag', flag: 'ramanujan.thread.hardyReplied', value: true },
          { type: 'resources', effects: { network: 2, standing: 1 } },
        ],
        historicalNote:
          'Ramanujan wrote to several English mathematicians before Hardy; the earlier approaches drew no useful response. Hardy\'s reply asked for proofs and opened the way to Cambridge. The letter\'s wording is dramatized from its documented content.',
      },
      {
        id: 'unsent',
        conditions: [{ type: 'yearAtLeast', year: 1914 }],
        title: 'The Drawer',
        yearLabel: '1913–1914',
        image: {
          setting: 'a clerk\'s drawer holding a thick packet of theorems, string still uncut',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'nerve failing quietly',
          details: ['a thick unsent packet', 'uncut string', 'a drawer half open', 'an unused stamp', 'harbour light on a tiled floor'],
          alt: 'A thick unsent packet of papers tied with string lying in a half-open drawer.',
        },
        pages: [
          {
            id: 'ready',
            narration:
              'The packet has been ready since January. Nine pages of theorems, copied fair, and a covering letter he has written four times and burned three. Each version says the same thing more politely: I have not gone through the ordinary course of study, and I should like to be read.',
          },
          {
            id: 'not',
            narration:
              'Twice he carries it as far as the post office. Twice he brings it home again. A man in England who has never heard of him will decide, on the strength of nine pages, whether eleven years were anything at all, and some weeks he would rather not be told.',
          },
          {
            id: 'stay',
            narration:
              'So it stays in the drawer under the shipping forms, with the string uncut, and the theorems in it go on being true where nobody can check them.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1913-hardy' },
          { type: 'flag', flag: 'ramanujan.thread.noAnswer', value: true },
          { type: 'resources', effects: { standing: -1 } },
        ],
        historicalNote:
          'Hardy read the 1913 letter with Littlewood and concluded its theorems must be genuine. This variant follows a life in which the approach to England was never made, and the recognition it produced never happened.',
      },
    ],
  },
  {
    id: 'ramanujan-entry-closing',
    characterId: 'ramanujan',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'invited',
        conditions: [{ type: 'projectCompleted', projectId: 'ramanujan-letter-to-hardy' }],
        title: 'Everything Moves in a Fortnight',
        yearLabel: '1914',
        image: {
          setting: 'a Madras courtyard at dawn with a tin trunk and a folded letter of invitation',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'a household divided',
          details: ['a tin trunk', 'a folded invitation', 'a lamp still burning at dawn', 'a brass vessel', 'a temple flower on a step'],
          alt: 'A tin trunk and a folded letter of invitation in a courtyard at dawn.',
        },
        pages: [
          {
            id: 'invitation',
            narration:
              'A young English mathematician comes out from Cambridge in person to argue him onto a ship. The university says it will find money. The Port Trust says it will find leave. Everything that has refused to move for eleven years moves in a fortnight, on paper.',
          },
          {
            id: 'fortnight',
            narration:
              'He sits up the whole of one night with the invitation on his knee, reading it as though it were a proof that might fail on the second page. It does not fail. In the morning he walks down to the water and stands there a long while. Two years of ruling its tonnages, and it has never once occurred to him that the harbour is a road.',
          },
        ],
        historicalNote:
          'In 1914 an English mathematician travelled to Madras and persuaded Ramanujan to come to Cambridge. The family and caste objections that met the invitation are told in the crossing scene.',
      },
      {
        id: 'answered',
        conditions: [{ type: 'narrativeFlag', flag: 'ramanujan.thread.hardyReplied' }],
        title: 'Answering Is Harder Than Asking',
        yearLabel: '1914',
        image: {
          setting: 'a harbour office desk at evening with a half-written reply and a stack of copied theorems',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'a door unlocked and not yet opened',
          details: ['a half-written reply', 'a stack of freshly copied theorems', 'an inkwell', 'a ledger closed for the day', 'evening light off the water'],
          alt: 'A half-written reply and a stack of copied theorems on a harbour office desk at evening.',
        },
        pages: [
          {
            id: 'known',
            narration:
              'He answers within the week and finds the answering harder than the asking ever was. What they want is proofs. What he has is more results, so he encloses more results, sixty of them, in a hand that gets smaller as the paper runs out.',
          },
          {
            id: 'gap',
            narration:
              'Then the waiting starts again, and this waiting is worse, because now there is somebody at the other end of it. Between a man being wanted in England and a man arriving in England lie a passage nobody has paid for, a leave nobody has granted, and a household that has not yet been told anything at all.',
          },
        ],
        historicalNote:
          'Hardy\'s 1913 reply invited Ramanujan to Cambridge; the passage and the family consent took a further year to arrange. This variant follows a life in which they were not yet settled.',
      },
      {
        id: 'default',
        title: 'The Harbour Stays a Harbour',
        yearLabel: '1914',
        image: {
          setting: 'a harbour at evening with ships loading and a clerk watching from a wall',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'longing held in check',
          details: ['loading cranes', 'coal smoke', 'a folded ledger', 'gulls', 'a distant funnel'],
          alt: 'Ships loading at a harbour at evening, seen from a low wall.',
        },
        pages: [
          {
            id: 'watch',
            narration:
              'The ships go out every week and one of them goes to England. He rules his columns, and at six he sits on the sea wall with the notebook shut on his knee and watches the funnels move against the light.',
          },
          {
            id: 'weigh',
            narration:
              'There is no letter in his pocket asking him to be on one of them. The mathematics is exactly as good as it would have been. It is simply still here, in a locked drawer of a port office, where the tide comes in twice a day and nothing else does.',
          },
        ],
        historicalNote:
          'This variant follows a life in which the correspondence with Cambridge did not open, leaving Ramanujan in his Madras clerkship.',
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Chapter 4 — Breakthrough
  // ---------------------------------------------------------------------
  {
    id: 'ramanujan-breakthrough-opening',
    characterId: 'ramanujan',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'cambridge',
        conditions: [{ type: 'locationIs', locationId: 'cambridgeUK' }],
        title: 'Trinity, in the Cold',
        locationLabel: 'Cambridge, England',
        yearLabel: '1914',
        image: {
          setting: 'a Cambridge college court in a grey English spring',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'strangeness, cold, exhilaration',
          details: ['stone college court', 'a borrowed overcoat', 'gowns on a rail', 'a coal scuttle', 'a rook on a chimney'],
          alt: 'A stone college court in Cambridge on a grey spring day.',
        },
        pages: [
          {
            id: 'cold',
            narration:
              'The cold is not weather. It is a condition of the buildings, of the stone stairs, of the sheets. He wears three borrowed layers indoors and his fingers ache around the pen, and he is happier than he has ever been in his life.',
          },
          {
            id: 'rooms',
            narration:
              'Hardy\'s rooms smell of coal and tobacco. Between them on the table are the pages that crossed the ocean, and beside them a blank sheet, because everything on the first pile now has to be built again from the ground.',
          },
          {
            id: 'demand',
            speaker: 'HARDY',
            dialogue: 'I believe you. That is not the difficulty. The difficulty is that belief is not a proof, and I cannot publish belief.',
          },
          {
            id: 'choice',
            narration: 'Five years of work will be shaped by what he does with that sentence.',
            choices: [
              {
                id: 'proofs',
                label: 'Learn the machinery of proof, however slow',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.rigour', value: true },
                  { type: 'theme', theme: 'intuitionVsRigour', amount: -2 },
                  { type: 'resources', effects: { proof: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'flow',
                label: 'Keep producing; let others build the scaffolding',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.flow', value: true },
                  { type: 'theme', theme: 'intuitionVsRigour', amount: 2 },
                  { type: 'resources', effects: { theory: 2, exposure: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Ramanujan arrived at Cambridge in 1914 and worked closely with Hardy, who pressed him toward formal proof while trying not to extinguish his method. Dialogue is dramatized.',
      },
      {
        id: 'invited',
        conditions: [{ type: 'narrativeFlag', flag: 'ramanujan.thread.hardyReplied' }],
        title: 'Asked to Come, and the Sea Shuts',
        yearLabel: '1914',
        image: {
          setting: 'a shipping agent\'s counter with a cancelled sailing list and an English letter',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'a door opened and then held shut',
          details: ['a sailing list with entries ruled through', 'an English letter folded to the last line', 'a counter bell', 'a ceiling fan', 'harbour glare through a doorway'],
          alt: 'A sailing list with entries ruled through, lying beside a folded English letter on a shipping counter.',
        },
        pages: [
          {
            id: 'asked',
            narration:
              'He has been asked to come. The letter is folded to the last line so that he can find it without reading the rest, and he has found it without reading the rest about forty times since March.',
          },
          {
            id: 'august',
            narration:
              'Then in August the newspapers carry war, and the sailing list at the agent\'s counter goes from four columns to one, and the one column is troops. The passage is no longer a question of money or of his mother. It is a question for governments, and governments have other correspondence.',
          },
          {
            id: 'aloud',
            narration: 'The agent is apologetic in the way of men who have said the same sentence forty times that morning.',
            speaker: 'RAMANUJAN',
            dialogue: 'Then I will send the pages instead of the man. They are the better half of the parcel.',
          },
          {
            id: 'choice',
            narration:
              'He says it lightly and goes home and does not eat. The reader he waited eleven years for is on the far side of a closed ocean, and until the ocean opens again the question of what a result is worth without a demonstration is his to settle alone.',
            choices: [
              {
                id: 'proofs',
                label: 'Learn the machinery of proof, however slow',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.rigour', value: true },
                  { type: 'theme', theme: 'intuitionVsRigour', amount: -2 },
                  { type: 'resources', effects: { proof: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'flow',
                label: 'Keep producing; let others build the scaffolding',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.flow', value: true },
                  { type: 'theme', theme: 'intuitionVsRigour', amount: 2 },
                  { type: 'resources', effects: { theory: 2, exposure: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Hardy\'s reply reached Ramanujan in 1913 and the war closed civilian passages from August 1914. This variant follows a life in which the invitation arrived but the voyage did not happen that year. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Year the Sea Closed',
        yearLabel: '1914',
        image: {
          setting: 'a hot South Indian office with a newspaper reporting war in Europe',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'heat, distance, a door shutting',
          details: ['a folded newspaper', 'a ceiling fan', 'shipping notices', 'a tied bundle of notebooks', 'sunlight through slats'],
          alt: 'A folded newspaper reporting war in Europe on a desk beneath a ceiling fan.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'In August the newspapers carry war, and the shipping notices go from four columns to one. No letter of his is on any of those ships and none is coming back on them, and that is the whole of his connection to the thing.',
          },
          {
            id: 'work',
            narration:
              'He goes on. There is no other verb for it. The notebooks thicken; the results come at their own hours; the fan turns; the harbour empties of anything not carrying troops.',
          },
          {
            id: 'aloud',
            narration: 'A colleague asks whether he minds working where there is no one to check him. He answers without looking up.',
            speaker: 'RAMANUJAN',
            dialogue: 'It does not matter where I sit. The functions are the same functions.',
          },
          {
            id: 'choice',
            narration:
              'He believes it about half the time, which is more than most men manage. Nobody here is standing over him demanding demonstrations. He must decide for himself what a result is worth without one.',
            choices: [
              {
                id: 'proofs',
                label: 'Learn the machinery of proof, however slow',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.rigour', value: true },
                  { type: 'theme', theme: 'intuitionVsRigour', amount: -2 },
                  { type: 'resources', effects: { proof: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'flow',
                label: 'Keep producing; let others build the scaffolding',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.flow', value: true },
                  { type: 'theme', theme: 'intuitionVsRigour', amount: 2 },
                  { type: 'resources', effects: { theory: 2, exposure: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The First World War disrupted travel from India from August 1914. This variant follows a life in which the passage to England was never made.',
      },
    ],
  },
  {
    id: 'ramanujan-card-crossing',
    characterId: 'ramanujan',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'ramanujan-card-1914-voyage',
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'crossed',
        conditions: [
          { type: 'yearAtLeast', year: 1914 },
          { type: 'visitedLocation', locationId: 'cambridgeUK' },
        ],
        title: 'The Black Water',
        locationLabel: 'At sea, and after',
        yearLabel: 'The crossing',
        image: {
          setting: 'a steamer deck at dawn with a tin trunk and a folded shawl',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'solemn departure, sea light',
          details: ['a tin trunk roped shut', 'a folded shawl', 'a rail wet with spray', 'a cloth bundle of rice and tamarind', 'a coastline going thin'],
          alt: 'A tin trunk and folded shawl on a steamer deck at dawn.',
        },
        pages: [
          {
            id: 'permission',
            narration:
              'His mother refuses for weeks and then, one morning, does not. She has had a dream, she says, in which the family goddess told her not to stand between her son and his purpose. Whether the dream came first or the decision did, no one in the house will ever ask.',
          },
          {
            id: 'deck',
            narration:
              'He crosses the sea a Brahmin is not supposed to cross, with rice and tamarind in a cloth bundle because he will not eat what the ship serves. His hair is cut for England. His feet go into shoes for the first time and they hurt for a month.',
          },
          {
            id: 'war',
            narration:
              'Behind him the coast goes thin and disappears. Ahead is a country he has read about only in the front matter of textbooks, and which is at war: its young men are walking out of the colleges in uniform and not coming back, and the rooms they leave behind are where he is going to work.',
          },
          {
            id: 'choice',
            narration: 'In a country with no temple and no kitchen of his own, what does he hold on to?',
            choices: [
              {
                id: 'strict',
                label: 'Keep every observance, cook every meal himself',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.observance', value: true },
                  { type: 'theme', theme: 'faithVsExile', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, health: -1 } },
                ],
              },
              {
                id: 'ease',
                label: 'Let some of it go, to keep the work moving',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.adapted', value: true },
                  { type: 'theme', theme: 'faithVsExile', amount: -1 },
                  { type: 'resources', effects: { theory: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1914-voyage' },
          { type: 'flag', flag: 'ramanujan.thread.inEngland', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Ramanujan overcame religious and family objections to overseas travel and sailed for England in early 1914, shortly before the war. His mother\'s dream of the family goddess granting permission is recorded in the biographical tradition; the shipboard detail is dramatized.',
      },
      {
        id: 'not-taken',
        conditions: [{ type: 'yearAtLeast', year: 1916 }],
        title: 'The Passage Not Taken',
        yearLabel: '1914–1916',
        image: {
          setting: 'a South Indian house with a roped trunk standing unopened by a door',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'a decision that settles like dust',
          details: ['a roped trunk by a door', 'a shipping notice', 'a lamp', 'a folded shawl', 'monsoon light on a wall'],
          alt: 'A roped trunk standing unopened beside a door in a South Indian house.',
        },
        pages: [
          {
            id: 'objection',
            narration:
              'A Brahmin does not cross the black water. His mother says it once and then stops saying it, which is worse, because now it is simply true in the house the way the doorframe is true.',
          },
          {
            id: 'trunk',
            narration:
              'The trunk stands roped by the door for a season. Then the war comes and the sailings thin out, and one week somebody quietly unropes it and puts the winter shawl back in the chest, and nobody says anything about that either.',
          },
          {
            id: 'after',
            narration:
              'He goes back to the ledgers and the brown paper. It is not a tragedy; it is a Tuesday. The results keep arriving, in a language nobody within a thousand miles can read.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1914-voyage' },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Caste objections to overseas travel were a real obstacle in 1914. This variant follows a life in which the voyage never happened.',
      },
    ],
  },
  {
    id: 'ramanujan-hardy-encounter',
    characterId: 'ramanujan',
    chapterId: 'breakthrough',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 72 },
    once: true,
    variants: [
      {
        id: 'rooms',
        conditions: [
          { type: 'locationIs', locationId: 'cambridgeUK' },
          { type: 'yearAtLeast', year: 1915 },
        ],
        title: 'Two Men and a Blackboard',
        locationLabel: 'Cambridge, England',
        yearLabel: '1915–1916',
        image: {
          setting: 'college rooms in Cambridge with a small blackboard and cold tea',
          year: 1915,
          characters: ['ramanujan'],
          mood: 'affection under argument',
          details: ['a small blackboard', 'cold tea in two cups', 'a coal fire', 'stacked offprints', 'rain on leaded glass'],
          alt: 'A small blackboard and two cups of cold tea in Cambridge college rooms.',
        },
        pages: [
          {
            id: 'method',
            narration:
              'They work four hours a day and argue for three of them. Hardy takes a result apart to find the joins and there are no joins. Ramanujan watches him hunt and feels, obscurely, that he is being asked to explain the colour of a thing he can see.',
          },
          {
            id: 'hardy',
            speaker: 'HARDY',
            dialogue: 'You have handed me a cathedral and told me it grew. I must find the quarry, or no one will believe there is a cathedral.',
          },
          {
            id: 'answer',
            narration: 'Ramanujan does not look up from the sheet he is already filling.',
            speaker: 'RAMANUJAN',
            dialogue: 'Then find it. I will bring you another one while you look.',
          },
          {
            id: 'after',
            narration:
              'Neither of them ever quite converts the other. Between them, over five years, they produce more than either would have alone, which is the only argument that finally settles anything.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.hardyBond', value: true },
          { type: 'flag', flag: 'ramanujan.thread.inEngland', value: true },
          { type: 'resources', effects: { proof: 1, standing: 1 } },
        ],
        historicalNote:
          'The Hardy–Ramanujan working relationship, and the tension between intuition and formal proof within it, are documented. Dialogue is dramatized.',
      },
      {
        id: 'letters',
        conditions: [{ type: 'yearAtLeast', year: 1916 }],
        title: 'Cambridge by Post',
        yearLabel: '1916–1917',
        image: {
          setting: 'a desk with a fat envelope of pages going out to England',
          year: 1916,
          characters: ['ramanujan'],
          mood: 'friendship across an ocean',
          details: ['a fat outgoing envelope', 'copied pages', 'a stub of sealing wax', 'a shipping schedule', 'a fan turning'],
          alt: 'A thick envelope of copied pages prepared for posting to England.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'The friendship exists at the speed of shipping. He writes results; three months later a page comes back with objections in a small hard hand, and by then he has moved so far past the objections that answering feels like archaeology.',
          },
          {
            id: 'line',
            narration: 'The same complaint comes back in every third envelope, underlined twice.',
            speaker: 'HARDY, BY LETTER',
            dialogue: 'You send me answers. I want the road you walked to reach them. Send me the road.',
          },
          {
            id: 'try',
            narration: 'He tries, twice, on good paper. The road, written down, is never the road he walked.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.hardyBond', value: true },
          { type: 'resources', effects: { network: 1, exposure: 1 } },
        ],
        historicalNote: 'Correspondence with Hardy is documented; this variant follows a life conducted entirely at long distance. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-hilbert-encounter',
    characterId: 'ramanujan',
    chapterId: 'breakthrough',
    kind: 'encounter',
    classification: 'Speculative',
    sourceIds: ['ramanujan', 'hilbert'],
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'hilbert-here',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'otherCharacterIsHuman', characterId: 'hilbert' },
          { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'cambridgeUK', yearTolerance: 2 },
        ],
        title: 'The Visitor from Göttingen',
        locationLabel: 'Cambridge, England',
        yearLabel: 'c. 1916',
        image: {
          setting: 'a college lecture room with two mathematicians at a blackboard',
          year: 1916,
          characters: ['ramanujan', 'hilbert'],
          mood: 'wary mutual recognition',
          details: ['a blackboard half-erased', 'a lecture list pinned to a door', 'two chairs turned toward each other', 'a wet umbrella', 'winter light'],
          alt: 'Two mathematicians facing a half-erased blackboard in a college lecture room.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'The great man from Göttingen is in Cambridge, which nobody expected in a season when the two countries are shelling each other, and half the faculty will not sit in the room with him. He asks to see the Indian.',
          },
          {
            id: 'blackboard',
            narration:
              'They stand at the same blackboard for two hours without agreeing on what a mathematical fact is. Göttingen wants the axioms first and the truth after. Ramanujan wants the truth first and will send the axioms on later if anybody insists.',
          },
          {
            id: 'line',
            narration: 'At the second hour the older man puts the chalk down and turns round.',
            speaker: 'HILBERT',
            dialogue: 'Where does it come from? A method has a source. Name yours.',
          },
          {
            id: 'source',
            narration:
              'He says the goddess of his family town writes on his tongue in sleep. He says it plainly, without apology, and watches the older man decide not to laugh.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 2, tension: 1, flag: 'blackboard-1916' },
          { type: 'flag', flag: 'ramanujan.thread.gottingen', value: true },
          { type: 'resources', effects: { standing: 1, exposure: 1 } },
        ],
        historicalNote:
          'Ramanujan and Hilbert never met. This scene is speculative. Ramanujan did attribute his results to the goddess Namagiri of Namakkal, which is documented; the dialogue is invented.',
      },
      {
        id: 'hilbert-gottingen',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen', yearTolerance: 3 },
        ],
        title: 'A Road Through a Neutral Country',
        yearLabel: '1915–1916',
        image: {
          setting: 'a desk with a foreign journal that arrived by a roundabout postal route',
          year: 1916,
          characters: ['ramanujan'],
          mood: 'mathematics outrunning a war',
          details: ['a foreign journal with a censor\'s mark', 'a Dutch postal wrapper', 'a set of offprints', 'a paperknife', 'a low fire'],
          alt: 'A foreign journal in a postal wrapper with a censor\'s mark, lying open on a desk.',
        },
        pages: [
          {
            id: 'route',
            narration:
              'Nothing crosses directly between the warring capitals this year except artillery. Mathematics goes the long way, through a neutral post office, in a wrapper with a censor\'s mark, arriving four months late and slightly damp.',
          },
          {
            id: 'note',
            narration:
              'A short notice in a foreign journal mentions the Indian results and asks, without warmth but without doubt, for the demonstrations. Somebody in a country he is forbidden to write to has read him and believed him.',
          },
          {
            id: 'aloud',
            speaker: 'RAMANUJAN',
            dialogue: 'They are quarrelling over a border and passing my formulas across it. That is a strange kind of peace.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, tension: 0, flag: 'journal-1916' },
          { type: 'flag', flag: 'ramanujan.thread.gottingen', value: true },
          { type: 'resources', effects: { exposure: 1 } },
        ],
        historicalNote:
          'Scientific communication between Britain and Germany during the war ran through neutral countries where it ran at all. Any specific notice of Ramanujan\'s work from Göttingen is invented for this scene.',
      },
      {
        id: 'no-word',
        conditions: [{ type: 'yearAtLeast', year: 1915 }],
        title: 'No Word from Anywhere',
        yearLabel: '1915–1916',
        image: {
          setting: 'an empty pigeonhole rack in a mathematics department',
          year: 1916,
          characters: ['ramanujan'],
          mood: 'isolation without self-pity',
          details: ['empty pigeonholes', 'a folded journal index', 'a cold radiator', 'a pen laid across a blank page', 'grey window light'],
          alt: 'An empty rack of pigeonholes in a mathematics department, seen in grey light.',
        },
        pages: [
          {
            id: 'empty',
            narration:
              'The continent has gone quiet. The German journals stop arriving, then stop being printed, then stop being mentioned. Whole schools of mathematics are on the far side of a line, doing work he will not read for years, if ever.',
          },
          {
            id: 'own',
            narration:
              'So he does what he did in Kumbakonam with no library at all: he derives it himself, wrongly attributed, twice discovered, and beautiful. A war can close a post office. It has no jurisdiction over a function.',
          },
        ],
        effects: [{ type: 'flag', flag: 'ramanujan.thread.isolation', value: true }],
        historicalNote:
          'Wartime severed mathematical communication across Europe. This variant follows a life in which no contact with the German school occurred.',
      },
    ],
  },
  {
    id: 'ramanujan-war-scene',
    characterId: 'ramanujan',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 64 },
    once: true,
    variants: [
      {
        id: 'colleges',
        conditions: [
          { type: 'locationIs', locationId: 'cambridgeUK' },
          { type: 'yearAtLeast', year: 1915 },
        ],
        title: 'The Colleges Empty',
        locationLabel: 'Cambridge, England',
        yearLabel: '1915–1916',
        image: {
          setting: 'an empty college hall set for a fraction of its usual diners',
          year: 1916,
          characters: ['ramanujan'],
          mood: 'absence, austerity, quiet grief',
          details: ['long tables mostly unlaid', 'a rolled hospital blanket', 'a lecture list with names struck through', 'sugar rationed in a small bowl', 'boots in a rack'],
          alt: 'A long college hall with most of its tables unlaid.',
        },
        pages: [
          {
            id: 'gone',
            narration:
              'The young men are gone. The courts that were full of them are used for drill and then for wounded, and the lecture list gets shorter each term, with names struck through in ink and no explanation added, because none is needed.',
          },
          {
            id: 'food',
            narration:
              'Vegetables become a question of luck. For a man who will eat nothing that has not passed through his own hands, a war economy is a slow arithmetic problem with only one variable, and he is solving it badly.',
          },
          {
            id: 'work',
            narration:
              'He works. It is the one room in England where nothing has been requisitioned. Partitions do not enlist.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.inEngland', value: true },
          { type: 'resources', effects: { health: -1, funds: -1 } },
        ],
        historicalNote:
          'Cambridge emptied during the First World War and wartime shortages made Ramanujan\'s strict vegetarian diet difficult to maintain, a factor in his declining health.',
      },
      {
        id: 'madras-shelling',
        conditions: [{ type: 'yearAtLeast', year: 1915 }],
        title: 'The Night the Harbour Was Shelled',
        yearLabel: '1914–1915',
        image: {
          setting: 'a South Indian harbour at night with oil tanks burning in the distance',
          year: 1914,
          characters: ['ramanujan'],
          mood: 'distant fire, near silence',
          details: ['a red glow over water', 'shuttered windows', 'a lamp turned down', 'a folded newspaper', 'people on a flat roof'],
          alt: 'A distant red glow over a harbour seen from a shuttered street at night.',
        },
        pages: [
          {
            id: 'shells',
            narration:
              'A cruiser stands off the coast in the dark and puts shells into the oil tanks, and half the city goes up onto its roofs to watch the sky turn the wrong colour. The war, which was a column of print, is suddenly a smell.',
          },
          {
            id: 'after',
            narration:
              'By morning it is over and the port is counting damage in the ordinary language of tonnage and insurance. He rules the columns. Under them, on the brown paper, the work goes on exactly as before, which is either courage or an inability to stop.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1 } }],
        historicalNote:
          'The port of Madras was shelled from the sea in September 1914 by a German cruiser. Ramanujan\'s response here is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-kitchen',
    characterId: 'ramanujan',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 50 },
    once: true,
    variants: [
      {
        id: 'failing',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'locationIs', locationId: 'cambridgeUK' },
          { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
        ],
        title: 'Rice at Two in the Morning',
        locationLabel: 'Cambridge, England',
        yearLabel: '1916',
        image: {
          setting: 'a cold college kitchen at night with one gas ring lit',
          year: 1916,
          characters: ['ramanujan'],
          mood: 'exhaustion and stubborn discipline',
          details: ['a single lit gas ring', 'a small brass pot', 'a tin of rice', 'a page of notation on the table', 'frost on a windowpane'],
          alt: 'A single gas ring lit in a cold kitchen at night beside a small brass pot.',
        },
        pages: [
          {
            id: 'ring',
            narration:
              'He cooks at two in the morning because that is when the work lets him go. One gas ring, one small pot, rice and whatever the greengrocer had. He eats standing up, reading the page he has just finished, and forgets half of what is in the pot.',
          },
          {
            id: 'cost',
            narration:
              'His shoes are wet through most of the winter. He is thinner every term and does not notice, because the mathematics is going faster than it has ever gone, and a man running downhill does not feel his knees until later.',
          },
          {
            id: 'line',
            speaker: 'RAMANUJAN',
            dialogue: 'I will rest when the partition problem behaves.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.wearing', value: true },
          { type: 'flag', flag: 'ramanujan.thread.inEngland', value: true },
          { type: 'resources', effects: { health: -1, theory: 1 } },
        ],
        historicalNote:
          'Ramanujan cooked for himself to maintain a strict vegetarian diet, kept irregular hours, and his health declined during the war years in England. Dialogue is dramatized.',
      },
      {
        id: 'holding',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'locationIs', locationId: 'cambridgeUK' },
        ],
        title: 'Keeping the Hours',
        locationLabel: 'Cambridge, England',
        yearLabel: '1916',
        image: {
          setting: 'a tidy room with a small stove, a made bed and an ordered desk',
          year: 1916,
          characters: ['ramanujan'],
          mood: 'discipline holding, for now',
          details: ['a small stove', 'a made bed', 'ordered papers', 'a shawl on a chair back', 'a jar of tamarind'],
          alt: 'A tidy room with a small stove, a made bed and neatly ordered papers.',
        },
        pages: [
          {
            id: 'order',
            narration:
              'He has found a rhythm: work, cook, sleep at strange hours, walk once a day whether he wants to or not. It is not a comfortable life, but it is a life with edges, and edges are what keeps a man upright a long way from home.',
          },
          {
            id: 'letter',
            narration:
              'A letter from home arrives with a pressed flower in it and no news, which is the news. He puts it inside the front cover of the notebook, where he will see it every day for two years.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.wearing', value: true },
          { type: 'flag', flag: 'ramanujan.thread.inEngland', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote: 'Dramatized domestic detail consistent with Ramanujan\'s documented habits and correspondence with home.',
      },
      {
        id: 'south-india',
        conditions: [{ type: 'yearAtLeast', year: 1915 }],
        title: 'Two Hours Before the Office',
        yearLabel: '1916',
        image: {
          setting: 'a dark South Indian kitchen before dawn with a small cooking fire',
          year: 1916,
          characters: ['ramanujan'],
          mood: 'discipline carved out of an ordinary day',
          details: ['a small cooking fire', 'a brass vessel', 'a folded sheet of brown paper covered in notation', 'a tin lamp', 'a doorway going grey with dawn'],
          alt: 'A small cooking fire and a folded sheet of notation in a dark kitchen before dawn.',
        },
        pages: [
          {
            id: 'dawn',
            narration:
              'The mathematics gets the hours nobody else wants. He is up at four with the lamp and a sheet of brown paper, and by the time the household stirs he has done a day\'s work and has a day\'s work still to do at the harbour.',
          },
          {
            id: 'cost',
            narration:
              'It is not sustainable and he does not care. He eats standing at the doorway, thinking about a function, and forgets by noon whether he ate at all.',
          },
          {
            id: 'line',
            speaker: 'RAMANUJAN',
            dialogue: 'The office has eight hours of me. The rest is not theirs.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.wearing', value: true },
          { type: 'resources', effects: { theory: 1, health: -1 } },
        ],
        historicalNote:
          'Ramanujan worked at extreme hours around his clerical duties and neglected his health. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-composite-breakthrough',
    characterId: 'ramanujan',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'ramanujan-highly-composite', priority: 80 },
    once: true,
    variants: [
      {
        id: 'cambridge',
        conditions: [{ type: 'locationIs', locationId: 'cambridgeUK' }],
        title: 'Numbers with Too Many Divisors',
        locationLabel: 'Cambridge, England',
        yearLabel: '1915',
        image: {
          setting: 'a long paper proof laid out across a college table',
          year: 1915,
          characters: ['ramanujan'],
          mood: 'satisfaction in an unfashionable corner',
          details: ['sixty pages of manuscript', 'a paperweight', 'a table lamp', 'a printed journal cover', 'a pot of ink'],
          alt: 'A long handwritten manuscript laid out across a college table under a lamp.',
        },
        pages: [
          {
            id: 'question',
            narration:
              'Some numbers are crowded. Sixty has twelve divisors and nothing below it has as many; the next such number, and the next, march off into the distance in a pattern that ought to be arbitrary and is not.',
          },
          {
            id: 'paper',
            narration:
              'The paper runs to sixty pages and the journal takes it grudgingly, because nobody has thought this worth a paper before. It is his first published work in England, and it earns him a degree from a university that would never have admitted him as a student.',
          },
          {
            id: 'aloud',
            speaker: 'RAMANUJAN',
            dialogue: 'They think it is a curiosity. It is a doorway. I will show them the room later.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.published', value: true },
          { type: 'resources', effects: { standing: 2, proof: 1 } },
        ],
        historicalNote:
          'Ramanujan\'s long 1915 paper on highly composite numbers was his first major publication in England and earned him a Cambridge research degree. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        title: 'The Crowded Numbers',
        yearLabel: '1915',
        image: {
          setting: 'a desk with a long handwritten table of numbers and their divisor counts',
          year: 1915,
          characters: ['ramanujan'],
          mood: 'private completion',
          details: ['a long table of figures', 'a ruler', 'a stub of pencil', 'a tied notebook', 'lamplight on a bare wall'],
          alt: 'A long handwritten table of numbers and divisor counts under lamplight.',
        },
        pages: [
          {
            id: 'question',
            narration:
              'He tabulates the numbers that have more divisors than anything smaller than themselves, and the tabulation turns into a structure, and the structure turns into a theorem about how such numbers must be built.',
          },
          {
            id: 'shelf',
            narration:
              'It is sixty pages when he is finished and there is no journal within reach that would know what to do with it. It goes into the stack. The stack is now taller than the lamp.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.published', value: true },
          { type: 'resources', effects: { theory: 1, standing: 1 } },
        ],
        historicalNote: 'The mathematics is documented; this variant follows a life in which it found no publisher.',
      },
    ],
  },
  {
    id: 'ramanujan-modular-breakthrough',
    characterId: 'ramanujan',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'ramanujan-modular-forms', priority: 80 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Coefficients Behave',
        yearLabel: '1916',
        image: {
          setting: 'a page of a long list of integers with several circled',
          year: 1916,
          characters: ['ramanujan'],
          mood: 'a suspicion becoming a conviction',
          details: ['a column of large integers', 'several circled entries', 'a pencil worn to a stub', 'a cold cup', 'a window at night'],
          alt: 'A long column of large integers with several entries circled in pencil.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'He computes the coefficients of a certain function by hand, further than any sane person would, and lays them out in a column. They are enormous and they are not random. Multiply the entry at one place by the entry at another and you land, exactly, on the entry at the product.',
          },
          {
            id: 'claim',
            narration:
              'He writes the rule down as a fact. He cannot prove it. He is certain of it in the way he is certain the sun is behind the cloud, and he will be dead before anyone shows he was right.',
          },
          {
            id: 'aloud',
            speaker: 'RAMANUJAN',
            dialogue: 'It is not a guess. A guess would not be this tidy.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.tau', value: true },
          { type: 'resources', effects: { theory: 2, exposure: 1 } },
        ],
        historicalNote:
          'Ramanujan studied the coefficients of the discriminant modular form — now the tau function — and conjectured properties that were proved decades later. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-partitions-breakthrough',
    characterId: 'ramanujan',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'ramanujan-partition-theory', priority: 92 },
    once: true,
    variants: [
      {
        id: 'with-rigour',
        conditions: [
          { type: 'locationIs', locationId: 'cambridgeUK' },
          { type: 'choiceWas', choiceKey: 'ramanujan-breakthrough-opening:choice', choiceId: 'proofs' },
        ],
        title: 'How Many Ways to Break a Number',
        locationLabel: 'Cambridge, England',
        yearLabel: '1917',
        image: {
          setting: 'a college study with two men and a sheet of arithmetic checked digit by digit',
          year: 1917,
          characters: ['ramanujan'],
          mood: 'shared astonishment',
          details: ['a sheet of thirteen-digit arithmetic', 'two chairs pulled together', 'a slide rule unused on the table', 'cold tea', 'a coal fire nearly out'],
          alt: 'A sheet of long arithmetic checked digit by digit on a study table between two chairs.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'Four can be broken into parts five ways. A hundred, into rather more. Two hundred, into a number with thirteen digits, which a colleague has spent weeks computing by hand and has locked in a drawer as a test.',
          },
          {
            id: 'method',
            narration:
              'The formula they build together is not an approximation that improves slowly. It is a sum of pieces that circles the answer and closes on it, and when they take enough pieces and round to the nearest whole number, it does not approximate at all. It hits.',
          },
          {
            id: 'check',
            narration: 'Hardy crosses the room and puts his hand on the drawer handle without opening it.',
            speaker: 'HARDY',
            dialogue: 'Read me your figure. I have his in the drawer.',
          },
          {
            id: 'match',
            narration:
              'Ramanujan reads thirteen digits aloud in a quiet voice. The drawer comes open. They match to the last one, and for a moment neither man says anything at all, because there is nothing to say that is not smaller than the fact.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.partitions', value: true },
          { type: 'resources', effects: { standing: 2, proof: 1, theory: 1 } },
        ],
        historicalNote:
          'The Hardy–Ramanujan asymptotic formula for the partition function, and its verification against hand-computed values, are documented. The scene and dialogue are dramatized.',
      },
      {
        id: 'cambridge',
        conditions: [{ type: 'locationIs', locationId: 'cambridgeUK' }],
        title: 'The Circle Closes',
        locationLabel: 'Cambridge, England',
        yearLabel: '1917',
        image: {
          setting: 'a blackboard covered in a summation with a small circle drawn beside it',
          year: 1917,
          characters: ['ramanujan'],
          mood: 'method invented in the doing',
          details: ['a blackboard summation', 'a chalked circle', 'stacked drafts', 'a dying fire', 'rain on the window'],
          alt: 'A blackboard covered in a long summation with a small chalked circle beside it.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'How many ways can a number be written as a sum of smaller numbers? The counts explode; there is no pattern in them a person can see. Ramanujan has seen one anyway, and has been unable to say why for two years.',
          },
          {
            id: 'method',
            narration:
              'Hardy supplies the machinery: go out into the complex plane, walk a circle around the trouble, and collect what the circle gives you. Ramanujan supplies the terms and, more importantly, the nerve to keep adding them when the mathematics says stop.',
          },
          {
            id: 'result',
            narration:
              'What they get is not close to the answer. Rounded, it is the answer, for every value anyone can check. They have not solved a problem; they have opened a method, and other people will be walking circles like this for the next hundred years.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.partitions', value: true },
          { type: 'resources', effects: { standing: 2, proof: 1 } },
        ],
        historicalNote:
          'The circle method arose from the Hardy–Ramanujan work on partitions and became a foundational technique in analytic number theory.',
      },
      {
        id: 'alone',
        title: 'Counting the Ways',
        yearLabel: '1917',
        image: {
          setting: 'a desk buried in sheets of long addition',
          year: 1917,
          characters: ['ramanujan'],
          mood: 'a summit reached with nobody at the top',
          details: ['sheets of long addition', 'a lamp turned low', 'a tied stack of notebooks', 'a stopped clock', 'a fan turning'],
          alt: 'A desk buried in sheets of long addition beside a low lamp.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'He wants to know how many ways a number can be broken into parts, exactly, for any number at all. Nobody has an exact answer. He builds one out of pieces that have no business fitting together and finds that they fit.',
          },
          {
            id: 'alone',
            narration:
              'He checks it against a value he has computed by hand over three weeks, thirteen digits long, and it agrees to the last figure. There is nobody in the room. He says the number out loud to the room anyway.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.partitions', value: true },
          { type: 'resources', effects: { theory: 2 } },
        ],
        historicalNote:
          'The partition formula was a joint achievement with Hardy. This variant follows a life in which the same ground was reached without a collaborator.',
      },
    ],
  },
  {
    id: 'ramanujan-breakthrough-closing',
    characterId: 'ramanujan',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'productive',
        conditions: [
          { type: 'narrativeFlag', flag: 'ramanujan.thread.inEngland' },
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['ramanujan-highly-composite', 'ramanujan-modular-forms', 'ramanujan-partition-theory'],
            count: 2,
          },
        ],
        title: 'Three Years, Thirty Papers',
        yearLabel: '1917',
        image: {
          setting: 'a shelf of offprints and journals with a thin coat hanging beside it',
          year: 1917,
          characters: ['ramanujan'],
          mood: 'triumph with a cough in it',
          details: ['a shelf of offprints', 'a thin overcoat on a hook', 'a bottle of medicine', 'a half-packed case', 'winter light'],
          alt: 'A shelf of journal offprints beside a thin overcoat on a hook.',
        },
        pages: [
          {
            id: 'output',
            narration:
              'In three war years he has published more than most men publish in twenty, and the mathematics coming off his desk is now being read in four countries and understood in about two.',
          },
          {
            id: 'cost',
            narration:
              'He is also coughing in the mornings and has stopped weighing himself. The overcoat on the hook fitted him in 1914. It does not fit him now, and not because he has grown.',
          },
        ],
        historicalNote:
          'Ramanujan\'s Cambridge years were extraordinarily productive and coincided with a decline in his health that became serious from 1917.',
      },
      {
        id: 'unpublished',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['ramanujan-highly-composite', 'ramanujan-modular-forms', 'ramanujan-partition-theory'],
            count: 2,
          },
        ],
        title: 'Three Years, No Bibliography',
        yearLabel: '1917',
        image: {
          setting: 'a stack of finished manuscripts tied in cloth beside a coat on a nail',
          year: 1917,
          characters: ['ramanujan'],
          mood: 'achievement with no address on it',
          details: ['manuscripts tied in cloth', 'a thin coat on a nail', 'a bottle of medicine', 'a lamp', 'a shuttered window'],
          alt: 'Finished manuscripts tied in cloth standing beside a thin coat hung on a nail.',
        },
        pages: [
          {
            id: 'output',
            narration:
              'Three years of the best work he will ever do, and every page of it is in this room. The results are finished. They are correct. Nobody has asked for them and there is nowhere to send them that would understand what it had been sent, so they are tied in cloth and set on top of the last lot.',
          },
          {
            id: 'cost',
            narration:
              'He is coughing in the mornings and has stopped weighing himself. The coat on the nail fitted him three years ago. It does not fit him now, and not because he has grown.',
          },
        ],
        historicalNote:
          'Ramanujan\'s major results of these years reached print through Cambridge. This variant follows a life in which the same mathematics was done and never published.',
      },
      {
        id: 'present',
        conditions: [{ type: 'narrativeFlag', flag: 'ramanujan.thread.inEngland' }],
        title: 'A Cold Country and an Unfinished Ledger',
        locationLabel: 'Cambridge, England',
        yearLabel: '1917',
        image: {
          setting: 'a college room with an unfinished manuscript and a shut window',
          year: 1917,
          characters: ['ramanujan'],
          mood: 'promise not yet redeemed',
          details: ['an unfinished manuscript', 'a shut window', 'a cooling grate', 'a stack of unopened offprints', 'a shawl'],
          alt: 'An unfinished manuscript on a desk in a cold college room.',
        },
        pages: [
          {
            id: 'unfinished',
            narration:
              'The work is begun and not finished, which is the ordinary condition of work, except that here it is being done a long way from home by a man who is not eating and who has begun to reckon time in terms of how many winters are left.',
          },
          {
            id: 'weigh',
            narration:
              'He came here to be read. He is being read. Whether that has been worth what it is costing is a sum he has not yet been willing to set out.',
          },
        ],
        historicalNote: 'Dramatized reflection consistent with Ramanujan\'s documented circumstances in 1917.',
      },
      {
        id: 'default',
        title: 'The Stack and the Silence',
        yearLabel: '1917',
        image: {
          setting: 'a tall stack of tied notebooks in a hot room',
          year: 1917,
          characters: ['ramanujan'],
          mood: 'quiet accumulation in obscurity',
          details: ['tied notebooks stacked high', 'a fan', 'a shuttered window', 'a pen laid down', 'chalk dust'],
          alt: 'A tall stack of tied notebooks standing in a shuttered room.',
        },
        pages: [
          {
            id: 'stack',
            narration:
              'The stack has stopped being a stack of notebooks and become a piece of furniture. He knows what is in every one of them. He is the only person on earth who does.',
          },
          {
            id: 'clock',
            narration:
              'Three years have gone. He is thirty, and the arithmetic he does most often now is not about partitions. It is about how long a man can go on producing for an audience of one.',
          },
        ],
        historicalNote:
          'This variant follows a life in which the Cambridge collaboration did not take place and the work remained unpublished.',
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Chapter 5 — Crisis and Responsibility
  // ---------------------------------------------------------------------
  {
    id: 'ramanujan-crisis-opening',
    characterId: 'ramanujan',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'observant',
        conditions: [{ type: 'choiceWas', choiceKey: 'ramanujan-card-crossing:choice', choiceId: 'strict' }],
        title: 'What the Body Costs',
        yearLabel: '1917',
        image: {
          setting: 'a nursing-home room with a narrow bed, a blanket and a notebook',
          year: 1917,
          characters: ['ramanujan'],
          mood: 'illness met with obstinate work',
          details: ['a narrow iron bed', 'a grey blanket', 'a notebook on the counterpane', 'a thermometer in a glass', 'a window with bare branches'],
          alt: 'A narrow iron bed with a notebook lying open on the blanket.',
        },
        pages: [
          {
            id: 'ill',
            narration:
              'Three winters of cooking his own food at two in the morning, in a country with no vegetables and no sun, arrive all at once. The fever comes and goes on a schedule of its own. He keeps every observance he came with and it has not saved him.',
          },
          {
            id: 'doctors',
            narration:
              'The doctors examine him and disagree. One says the lungs. One says something in the gut brought from India. They send him from one nursing home to another across the country, and each new physician begins the argument again from the start.',
          },
          {
            id: 'hardy',
            narration: 'Hardy arrives with a timetable in his pocket and the name of another nursing home.',
            speaker: 'HARDY',
            dialogue: 'They will feed you and you will lie still and you will not do mathematics. Those are the terms.',
          },
          {
            id: 'choice',
            narration:
              'He agrees to two of the three. He has perhaps two working years and he can feel it. How does he spend them?',
            choices: [
              {
                id: 'sanatorium',
                label: 'Do as the doctors say and try to last',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.rested', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: -2 },
                  { type: 'resources', effects: { health: 2, theory: -1 } },
                ],
              },
              {
                id: 'work',
                label: 'Keep the notebook on the blanket',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.burned', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: 2 },
                  { type: 'resources', effects: { theory: 2, health: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Ramanujan fell seriously ill from 1917 and spent long periods in English nursing homes; the diagnosis was disputed at the time. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Fever Arrives',
        yearLabel: '1917',
        image: {
          setting: 'a shuttered room with a bed, a jug of water and papers pushed aside',
          year: 1917,
          characters: ['ramanujan'],
          mood: 'illness closing in quietly',
          details: ['a jug of water', 'papers pushed to the floor', 'a shuttered window', 'a folded shawl', 'a stopped pen'],
          alt: 'A shuttered room with a water jug and papers pushed aside beside a bed.',
        },
        pages: [
          {
            id: 'ill',
            narration:
              'It begins as tiredness he can argue with and becomes a fever he cannot. He works through the first month of it because working is what he does when anything happens, good or bad, and then one morning he cannot get up the stairs.',
          },
          {
            id: 'doctors',
            narration:
              'The doctors do not agree with one another. They agree only that he is thin, that the fever returns, and that he must rest, which is the one prescription he has never in his life been able to fill.',
          },
          {
            id: 'aloud',
            speaker: 'RAMANUJAN',
            dialogue: 'If I lie still, the results come anyway. They simply come with nowhere to be written.',
          },
          {
            id: 'choice',
            narration: 'He has perhaps two working years and he can feel it. How does he spend them?',
            choices: [
              {
                id: 'sanatorium',
                label: 'Do as the doctors say and try to last',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.rested', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: -2 },
                  { type: 'resources', effects: { health: 2, theory: -1 } },
                ],
              },
              {
                id: 'work',
                label: 'Keep the notebook on the blanket',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.burned', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: 2 },
                  { type: 'resources', effects: { theory: 2, health: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Ramanujan\'s health collapsed from 1917 and was never satisfactorily diagnosed in his lifetime. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'ramanujan-card-fellowship',
    characterId: 'ramanujan',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'ramanujan-card-1918-frs',
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'england',
        conditions: [
          { type: 'yearAtLeast', year: 1918 },
          { type: 'locationIs', locationId: 'cambridgeUK' },
        ],
        title: 'Fellow of the Royal Society',
        locationLabel: 'Cambridge, England',
        yearLabel: '1918',
        image: {
          setting: 'a bound charter book open for signature in a formal London room',
          year: 1918,
          characters: ['ramanujan'],
          mood: 'grave honour, borrowed strength',
          details: ['a bound charter book', 'a steel-nibbed pen', 'a heavy panelled room', 'a folded certificate', 'a walking stick against a chair'],
          alt: 'A bound charter book open for signature on a table in a panelled room.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter comes to the nursing home. He is elected to the Royal Society at thirty, one of the youngest ever, a clerk from a port office with no degree from anywhere until two years ago. In the autumn the college adds a fellowship of its own.',
          },
          {
            id: 'sign',
            narration:
              'Somewhere in London there is a book with Newton\'s name in it further back and a ruled line waiting for his. He is not well enough to travel for the ceremony. He practises the signature twice on the back of an envelope, out of vanity, and is ashamed of himself, and does it again.',
          },
          {
            id: 'home',
            narration:
              'He writes the news home in nine words and spends the rest of the letter asking after his mother\'s health, the rains, and whether the mango tree by the well is bearing.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1918-frs' },
          { type: 'flag', flag: 'ramanujan.thread.honoured', value: true },
          { type: 'flag', flag: 'ramanujan.thread.inEngland', value: true },
          { type: 'resources', effects: { standing: 3, network: 1 } },
        ],
        historicalNote:
          'Ramanujan was elected Fellow of the Royal Society in 1918 and a Fellow of Trinity College, Cambridge, in the same year, while seriously ill. The signing scene is dramatized.',
      },
      {
        id: 'from-afar',
        conditions: [
          { type: 'yearAtLeast', year: 1918 },
          { type: 'visitedLocation', locationId: 'cambridgeUK' },
        ],
        title: 'The Honour Follows Him',
        yearLabel: '1918',
        image: {
          setting: 'a certificate in a cardboard tube lying unopened on a bed',
          year: 1918,
          characters: ['ramanujan'],
          mood: 'recognition arriving late and far away',
          details: ['a cardboard tube', 'an unopened certificate', 'a bed with a folded quilt', 'a glass of water', 'shutters half closed'],
          alt: 'A cardboard tube containing a certificate lying unopened on a bed.',
        },
        pages: [
          {
            id: 'tube',
            narration:
              'The tube arrives weeks after the vote, carried by three postal services and a war. Inside is his name in copperplate under the words Fellow of the Royal Society, and a note from Hardy saying only that the vote was not close.',
          },
          {
            id: 'reaction',
            narration:
              'He props it on the windowsill. The neighbours are told and do not know what it means, and are pleased in the way people are pleased by weather. He is pleased too, and tired, and mostly wants to get back to a function he left unfinished on Tuesday.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1918-frs' },
          { type: 'flag', flag: 'ramanujan.thread.honoured', value: true },
          { type: 'resources', effects: { standing: 3, network: 1 } },
        ],
        historicalNote:
          'The 1918 election to the Royal Society is documented. This variant follows a life in which the honour reached him after he had left England.',
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1918 }],
        title: 'A Salary for Doing Nothing But This',
        yearLabel: '1918',
        image: {
          setting: 'an official letter granting a research allowance, on a plain desk',
          year: 1918,
          characters: ['ramanujan'],
          mood: 'a modest door opening at last',
          details: ['an official letter with a seal', 'a ledger closed for the last time', 'a fan', 'a tied notebook', 'sunlight on a tiled floor'],
          alt: 'An official letter bearing a seal lying on a plain desk beside a closed ledger.',
        },
        pages: [
          {
            id: 'grant',
            narration:
              'No society in London elects him. What arrives instead is an Indian letter with a seal: a research allowance, enough to live on, granted on the strength of testimonials from men who cannot follow the work but can recognize the shape of a mind.',
          },
          {
            id: 'ledger',
            narration:
              'He closes the harbour ledger for the last time on a Friday and nobody makes a speech. It is the first money he has ever been paid for the only thing he has ever wanted to do.',
          },
          {
            id: 'aloud',
            speaker: 'RAMANUJAN',
            dialogue: 'They are paying me to sit still and think. Somebody should tell them what a bargain they have made.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'ramanujan-card-1918-frs' },
          { type: 'flag', flag: 'ramanujan.thread.honoured', value: true },
          { type: 'resources', effects: { standing: 1, funds: 2 } },
        ],
        historicalNote:
          'Ramanujan received a research scholarship from the University of Madras in 1913 on the strength of local testimonials. This variant follows a life honoured in India rather than in London.',
      },
    ],
  },
  {
    id: 'ramanujan-taxicab',
    characterId: 'ramanujan',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'putney',
        conditions: [
          { type: 'yearAtLeast', year: 1918 },
          { type: 'visitedLocation', locationId: 'cambridgeUK' },
        ],
        title: 'Seventeen Twenty-Nine',
        locationLabel: 'A nursing home near London',
        yearLabel: '1919',
        image: {
          setting: 'a nursing-home room with a visitor\'s hat on the bed rail',
          year: 1919,
          characters: ['ramanujan'],
          mood: 'warmth in a cold room',
          details: ['a hat on a bed rail', 'a grey blanket', 'a window with London rain', 'a glass of milk untouched', 'a pencil on the counterpane'],
          alt: 'A visitor\'s hat resting on the rail of a hospital bed by a rainy window.',
        },
        pages: [
          {
            id: 'visit',
            narration:
              'Hardy is not good at sickrooms. He comes anyway, every week, and stands in the door working out what to say, and generally settles on the weather or the cricket, neither of which either of them cares about.',
          },
          {
            id: 'cab',
            speaker: 'HARDY',
            dialogue: 'I came in a taxi. Its number was 1729. Rather a dull number, I thought. I hope it is not a bad omen.',
          },
          {
            id: 'answer',
            narration: 'The answer comes back before the hat is off the bed rail.',
            speaker: 'RAMANUJAN',
            dialogue: 'No. It is the smallest number you can write as two cubes added together, in two different ways.',
          },
          {
            id: 'after',
            narration:
              'One and twelve. Nine and ten. He has not been out of the bed in three weeks and he did not have to think about it. Hardy sits down slowly on the edge of the chair and stops worrying about the weather.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.taxicab', value: true },
          { type: 'flag', flag: 'ramanujan.thread.inEngland', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'The 1729 taxicab exchange between Hardy and Ramanujan at a London nursing home is one of the best-documented anecdotes in mathematics. The wording here is dramatized from Hardy\'s later account.',
      },
      {
        id: 'ledger',
        conditions: [{ type: 'yearAtLeast', year: 1918 }],
        title: 'A Number on a Shipping Note',
        yearLabel: '1919',
        image: {
          setting: 'a low table stacked with old carbon-copy shipping notes used as scrap paper',
          year: 1919,
          characters: ['ramanujan'],
          mood: 'private delight in an ordinary object',
          details: ['a pile of carbon-copy notes', 'a stub of pencil', 'a brass tumbler', 'a hand fan', 'afternoon light through slats'],
          alt: 'A pile of old carbon-copy shipping notes used as scrap paper on a low table.',
        },
        pages: [
          {
            id: 'note',
            narration:
              'He writes on the backs of old consignment notes because the paper is free. The one on top of the pile carries the serial 1729, and he stops with the pencil halfway down it. Someone in the doorway asks whether there is a mistake in the number.',
          },
          {
            id: 'answer',
            narration: 'He turns round with the sheet still in his hand.',
            speaker: 'RAMANUJAN',
            dialogue: 'No mistake. It is the smallest number that is two cubes added together in two different ways. One and twelve. Nine and ten.',
          },
          {
            id: 'after',
            narration:
              'They laugh politely and go back to whatever they were doing. He copies the number onto the back of his hand in pencil, and keeps the sheet, and does not use that one for working.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.taxicab', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'The property of 1729 and Ramanujan\'s instant recognition of it are documented through Hardy\'s account of the taxicab visit. This variant relocates the moment to a life spent in India.',
      },
    ],
  },
  {
    id: 'ramanujan-crisis-closing',
    characterId: 'ramanujan',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'rested-england',
        conditions: [
          { type: 'choiceWas', choiceKey: 'ramanujan-crisis-opening:choice', choiceId: 'sanatorium' },
          { type: 'narrativeFlag', flag: 'ramanujan.thread.inEngland' },
        ],
        title: 'The Cost of Lying Still',
        yearLabel: '1919',
        image: {
          setting: 'a sanatorium veranda with a shut notebook on a wicker chair',
          year: 1919,
          characters: ['ramanujan'],
          mood: 'obedience that does not feel like healing',
          details: ['a wicker chair', 'a shut notebook', 'a rug over the knees', 'bare trees', 'a bell somewhere inside'],
          alt: 'A shut notebook lying on a wicker chair on a sanatorium veranda.',
        },
        pages: [
          {
            id: 'obey',
            narration:
              'He does as he is told for a year. He eats what is put in front of him where he can, and lies still, and lets the results come and go unwritten, which is a particular kind of loss no doctor has a name for.',
          },
          {
            id: 'weigh',
            narration:
              'He is a little stronger and a year older and the war is over and the ships are sailing again. There is nothing left to decide except the direction.',
          },
        ],
        historicalNote:
          'Ramanujan spent much of 1917–1919 in sanatoria and returned to India in 1919. His fluctuating strength is documented.',
      },
      {
        id: 'rested',
        conditions: [{ type: 'choiceWas', choiceKey: 'ramanujan-crisis-opening:choice', choiceId: 'sanatorium' }],
        title: 'The Cost of Lying Still',
        yearLabel: '1919',
        image: {
          setting: 'a shaded veranda with a shut notebook on a cane chair and a folded quilt',
          year: 1919,
          characters: ['ramanujan'],
          mood: 'obedience that does not feel like healing',
          details: ['a cane chair', 'a shut notebook', 'a folded quilt', 'a brass tumbler of water', 'hot light through a screen'],
          alt: 'A shut notebook lying on a cane chair on a shaded veranda.',
        },
        pages: [
          {
            id: 'obey',
            narration:
              'He does as he is told for a year. He eats what is put in front of him, and lies still, and lets the results come and go unwritten, which is a particular kind of loss no doctor has a name for.',
          },
          {
            id: 'weigh',
            narration:
              'He is a little stronger and a year older and the war is over. What is left of him is his to spend and there is less of it than there was, and he has never once in his life needed to be told what to spend it on.',
          },
        ],
        historicalNote:
          'Ramanujan spent much of 1917–1919 seriously ill under medical instruction. This variant follows a life in which that illness was met in India.',
      },
      {
        id: 'burned',
        conditions: [{ type: 'narrativeFlag', flag: 'ramanujan.thread.inEngland' }],
        title: 'Everything He Has Left',
        locationLabel: 'Cambridge, England',
        yearLabel: '1919',
        image: {
          setting: 'a bed with pages of notation spread across the counterpane',
          year: 1919,
          characters: ['ramanujan'],
          mood: 'furious tenderness toward the work',
          details: ['pages spread on a counterpane', 'a pencil', 'a cold cup of milk', 'a half-packed trunk', 'grey light through a sash window'],
          alt: 'Pages of mathematical notation spread across a bed counterpane beside a pencil.',
        },
        pages: [
          {
            id: 'pages',
            narration:
              'The counterpane is a desk. The pencil is worn to two inches. He works between fevers, in the hours when the room stops tilting, and the pages that come off the bed in this year are as good as anything he has ever done.',
          },
          {
            id: 'sail',
            narration:
              'The passage home is booked for the spring. He does not tell anyone that he is going home to get better. He is going home because it is home, and because a man decides at some point where he wants to be when he stops.',
          },
        ],
        historicalNote:
          'Ramanujan continued to produce significant mathematics while seriously ill and sailed for India in 1919.',
      },
      {
        id: 'default',
        title: 'Two Winters',
        yearLabel: '1919',
        image: {
          setting: 'a room with a calendar and a thin figure by a window',
          year: 1919,
          characters: ['ramanujan'],
          mood: 'time counted differently',
          details: ['a wall calendar', 'a shawl', 'an untouched meal', 'a stack of notebooks', 'evening light'],
          alt: 'A wall calendar and an untouched meal in a quiet room at evening.',
        },
        pages: [
          {
            id: 'count',
            narration:
              'He has begun counting in winters rather than years, which is a thing sick men do without deciding to. Two of them, he thinks, if the fevers keep their present schedule.',
          },
          {
            id: 'use',
            narration:
              'The question is no longer what he might become. It is what can be got down on paper in two winters by a man who cannot always hold the pen, and how much of it will make sense to whoever opens the book.',
          },
        ],
        historicalNote: 'Dramatized reflection consistent with Ramanujan\'s documented decline from 1917 onward.',
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Chapter 6 — Legacy
  // ---------------------------------------------------------------------
  {
    id: 'ramanujan-legacy-opening',
    characterId: 'ramanujan',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'home',
        conditions: [{ type: 'locationIs', locationId: 'madras' }],
        title: 'Home, and the Heat',
        locationLabel: 'Madras (Chennai)',
        yearLabel: '1919',
        image: {
          setting: 'a South Indian room with shutters open to hot light and a bed near the window',
          year: 1919,
          characters: ['ramanujan'],
          mood: 'homecoming under a shadow',
          details: ['open shutters', 'a low bed by a window', 'a brass tumbler', 'a stack of English offprints', 'a hand fan'],
          alt: 'A low bed beside open shutters in a hot South Indian room.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'The heat gets into him like a blanket he has been missing for five years. He is carried up from the harbour more than he walks. The house fills with relatives who have travelled two days to see the famous son and are shocked into politeness by the sight of him.',
          },
          {
            id: 'janaki',
            narration: 'On the third evening his wife clears the relatives out of the room and puts a plate down in front of him.',
            speaker: 'JANAKI',
            dialogue: 'You will eat what I give you and you will not argue about it in English.',
          },
          {
            id: 'work',
            narration:
              'It is the first time in five years that anybody has told him what to do and been obeyed. And still the results come. Faster, if anything. Whatever is running him down has not touched the part of him that does this, and he finds that terrifying and consoling in equal measure.',
          },
          {
            id: 'choice',
            narration: 'There is not much time and there are three things he could do with it.',
            choices: [
              {
                id: 'letter',
                label: 'Write it all to Hardy while he still can',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.lastLetter', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: 1 },
                  { type: 'resources', effects: { exposure: 2, health: -1 } },
                ],
              },
              {
                id: 'notebook',
                label: 'Fill loose pages for whoever finds them',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.loosePages', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 2 },
                  { type: 'resources', effects: { theory: 2 } },
                ],
              },
              {
                id: 'rest',
                label: 'Put the pencil down and be with his family',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.stopped', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 2, health: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Ramanujan returned to India in 1919 in poor health, was cared for by his wife Janaki, and continued to produce mathematics until shortly before his death. Dialogue is dramatized.',
      },
      {
        id: 'abroad',
        conditions: [{ type: 'locationIs', locationId: 'cambridgeUK' }],
        title: 'The Trunk by the Door',
        locationLabel: 'Cambridge, England',
        yearLabel: '1919',
        image: {
          setting: 'a college room with a packed trunk that has not yet been labelled',
          year: 1919,
          characters: ['ramanujan'],
          mood: 'a homecoming being weighed',
          details: ['a packed trunk with no label', 'a shipping timetable', 'a shawl', 'a pot of ink', 'rain at the window'],
          alt: 'A packed trunk without a shipping label standing in a college room.',
        },
        pages: [
          {
            id: 'stay',
            narration:
              'The war is over and the sailing lists are long again, and the trunk has been packed since February. He has a fellowship here, and doctors here, and a table where the work happens. Every week he decides in the morning and unmakes it by evening.',
          },
          {
            id: 'letters',
            narration:
              'Letters come from home in a hand that is not his mother\'s, written down for her by somebody in the street, and go into the front of the notebook with the pressed flower. He answers them at three in the morning, between results, in a mixture of two languages.',
          },
          {
            id: 'aloud',
            speaker: 'RAMANUJAN',
            dialogue: 'One more winter. The functions are close to telling me something.',
          },
          {
            id: 'choice',
            narration: 'There is not much time and there are three things he could do with it.',
            choices: [
              {
                id: 'letter',
                label: 'Write it all to Hardy while he still can',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.lastLetter', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: 1 },
                  { type: 'resources', effects: { exposure: 2, health: -1 } },
                ],
              },
              {
                id: 'notebook',
                label: 'Fill loose pages for whoever finds them',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.loosePages', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 2 },
                  { type: 'resources', effects: { theory: 2 } },
                ],
              },
              {
                id: 'rest',
                label: 'Put the pencil down and be with his family',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.stopped', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 2, health: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Ramanujan did return to India in 1919. This variant follows a life that stayed in England instead.',
      },
      {
        id: 'default',
        title: 'The Last Room',
        yearLabel: '1919',
        image: {
          setting: 'a quiet room with a low table, loose sheets and a jug of water',
          year: 1919,
          characters: ['ramanujan'],
          mood: 'stillness with work in it',
          details: ['loose sheets weighted with a tumbler', 'a jug of water', 'a low table', 'a folded quilt', 'light through slats'],
          alt: 'Loose sheets weighted with a tumbler on a low table beside a jug of water.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'Whatever else the years took, they left him this: a low table, loose sheets, and a mind that will not stop offering him things. He is thirty-two and he moves like a much older man across a room he can cross in six steps.',
          },
          {
            id: 'still',
            narration:
              'Nobody is waiting for these pages. That was true in Kumbakonam when he was sixteen and it is true now, and it has never once been a reason to stop.',
          },
          {
            id: 'choice',
            narration: 'There is not much time and there are three things he could do with it.',
            choices: [
              {
                id: 'letter',
                label: 'Write it all to Hardy while he still can',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.lastLetter', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: 1 },
                  { type: 'resources', effects: { exposure: 2, health: -1 } },
                ],
              },
              {
                id: 'notebook',
                label: 'Fill loose pages for whoever finds them',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.loosePages', value: true },
                  { type: 'theme', theme: 'solitudeVsRecognition', amount: 2 },
                  { type: 'resources', effects: { theory: 2 } },
                ],
              },
              {
                id: 'rest',
                label: 'Put the pencil down and be with his family',
                effects: [
                  { type: 'flag', flag: 'ramanujan.thread.stopped', value: true },
                  { type: 'theme', theme: 'workVsSurvival', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 2, health: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote: 'Dramatized framing of Ramanujan\'s final period, consistent with the documented record.',
      },
    ],
  },
  {
    id: 'ramanujan-janaki',
    characterId: 'ramanujan',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'failing',
        conditions: [
          { type: 'yearAtLeast', year: 1919 },
          { not: { type: 'resourceAtLeast', resource: 'health', value: 4 } },
        ],
        title: 'The Woman with the Fan',
        yearLabel: '1920',
        image: {
          setting: 'a small room where someone fans a sleeping man beside a low table of papers',
          year: 1920,
          characters: ['ramanujan'],
          mood: 'devotion without ceremony',
          details: ['a palm-leaf fan', 'a low table of loose papers', 'a brass tumbler of water', 'a folded quilt', 'a door open to a hot courtyard'],
          alt: 'A palm-leaf fan and a low table of loose papers in a small hot room.',
        },
        pages: [
          {
            id: 'fan',
            narration:
              'Janaki fans him through the worst of the afternoons and stacks the pages he drops, in order, without reading them, because she has watched him long enough to know that the order is the whole of it.',
          },
          {
            id: 'ask',
            narration: 'Once, in the heat of the afternoon, she stops fanning and asks him something she has wanted to ask for eleven years.',
            speaker: 'JANAKI',
            dialogue: 'What is it for? All of this writing. What will it do?',
          },
          {
            id: 'reply',
            narration:
              'He thinks about it honestly for a while. Nothing, he says. It will not do anything. It is simply true, and one day somebody will want it, and it should be here when they come.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.janakiEnd', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Janaki cared for Ramanujan through his final illness and preserved his papers. The conversation is dramatized.',
      },
      {
        id: 'steady',
        conditions: [{ type: 'yearAtLeast', year: 1919 }],
        title: 'Small Hours, Small Room',
        yearLabel: '1920',
        image: {
          setting: 'a lamplit low table with ordered pages and two cups',
          year: 1920,
          characters: ['ramanujan'],
          mood: 'quiet companionship',
          details: ['ordered pages weighted down', 'two cups', 'a lamp', 'a rolled mat', 'moths at a shutter'],
          alt: 'A lamplit low table with neatly ordered pages and two cups.',
        },
        pages: [
          {
            id: 'order',
            narration:
              'The pages go into order every night before the lamp goes out, and somebody who is not him makes sure of it. He has spent his life being the only person who knew where anything was. It is a strange relief to be relieved of the job.',
          },
          {
            id: 'line',
            speaker: 'JANAKI',
            dialogue: 'Sleep. They will still be numbers in the morning.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.janakiEnd', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote: 'Dramatized domestic scene consistent with the documented care Janaki gave him.',
      },
    ],
  },
  {
    id: 'ramanujan-mocktheta-breakthrough',
    characterId: 'ramanujan',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'ramanujan-mock-theta', priority: 92 },
    once: true,
    variants: [
      {
        id: 'home',
        conditions: [{ type: 'locationIs', locationId: 'madras' }],
        title: 'A Letter in January',
        locationLabel: 'Madras (Chennai)',
        yearLabel: '1920',
        image: {
          setting: 'a low table with a letter being written in a shaking hand, papers weighted with a tumbler',
          year: 1920,
          characters: ['ramanujan'],
          mood: 'urgency, tenderness, a door left open',
          details: ['a half-written letter', 'a brass tumbler weighting loose sheets', 'a pencil worn short', 'an unopened envelope from England', 'hot light through slats'],
          alt: 'A half-written letter and loose sheets weighted by a brass tumbler on a low table.',
        },
        pages: [
          {
            id: 'find',
            narration:
              'They come to him in the last months, a whole family of functions nobody has met. They behave almost like the theta functions everyone knows, and then, at the edges, they refuse to, in a way that is not a defect but a nature.',
          },
          {
            id: 'name',
            narration:
              'He gives them a name that says exactly what he thinks of them: mock. Imitations. Things that wear the face of something familiar and are not it. He writes down seventeen of them with their expansions and almost nothing in the way of theory, because the theory would take years he does not have.',
          },
          {
            id: 'send',
            narration: 'The covering letter takes him three days and comes out four lines long.',
            speaker: 'RAMANUJAN',
            dialogue: 'I am sorry to send you so little argument. I have set the functions down. Somebody will find the reasons.',
          },
          {
            id: 'after',
            narration:
              'The letter goes to England in January. Somebody does find the reasons, eighty years later, and it turns out he had opened a door into a room nobody knew was in the house.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.mockTheta', value: true },
          { type: 'resources', effects: { theory: 2, exposure: 2 } },
        ],
        historicalNote:
          'Ramanujan described the mock theta functions in his final letter to Hardy in January 1920; they were not fully understood until the twenty-first century. The letter\'s wording here is dramatized.',
      },
      {
        id: 'default',
        title: 'Seventeen Strangers',
        yearLabel: '1920',
        image: {
          setting: 'loose sheets covered in unfamiliar series, weighted against a fan',
          year: 1920,
          characters: ['ramanujan'],
          mood: 'discovery at the end of strength',
          details: ['loose sheets of series', 'a paperweight', 'a short pencil', 'a shawl over a chair', 'evening light'],
          alt: 'Loose sheets covered in unfamiliar mathematical series, weighted down against a draught.',
        },
        pages: [
          {
            id: 'find',
            narration:
              'The last thing he finds is a class of functions that behave like old friends until you look closely, and then behave like nobody at all. He writes down seventeen of them. He has no strength left for the theory and he knows it.',
          },
          {
            id: 'leave',
            narration:
              'So he leaves them the way he has left everything: stated, exact, unexplained. A pile of loose sheets in a hot room, addressed to no one, waiting for a reader who has not been born yet.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'ramanujan.thread.mockTheta', value: true },
          { type: 'resources', effects: { theory: 2 } },
        ],
        historicalNote:
          'The mock theta functions were Ramanujan\'s final discovery. This variant follows a life in which they were recorded without being sent.',
      },
    ],
  },
  {
    id: 'ramanujan-legacy-closing',
    characterId: 'ramanujan',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'sent',
        conditions: [{ type: 'projectCompleted', projectId: 'ramanujan-mock-theta' }],
        title: 'The Pages Stay',
        yearLabel: '1920',
        image: {
          setting: 'a stack of loose sheets tied with string on a low table beside an empty chair',
          year: 1920,
          characters: ['ramanujan'],
          mood: 'quiet, unfinished, complete',
          details: ['loose sheets tied with string', 'an empty chair', 'a brass lamp unlit', 'an open doorway', 'evening insects'],
          alt: 'A tied stack of loose sheets on a low table beside an empty chair.',
        },
        pages: [
          {
            id: 'last',
            narration:
              'He works until the last week and then stops, not because the work stops but because the hand does. He is thirty-two. The pages are tied and put in a cupboard by somebody who does not know what they are and knows exactly what they are worth.',
          },
          {
            id: 'after',
            narration:
              'The cupboard is opened by a stranger fifty-six years later. Everything in it is still true. That is the thing about the kind of work he did: it does not need him to go on being alive.',
          },
        ],
        historicalNote:
          'Ramanujan died in 1920 at the age of 32. A sheaf of his final pages, the so-called lost notebook, was rediscovered in a library in 1976.',
      },
      {
        id: 'default',
        title: 'What the Cupboard Holds',
        yearLabel: '1920',
        image: {
          setting: 'a cupboard shelf of tied notebooks in a shuttered room',
          year: 1920,
          characters: ['ramanujan'],
          mood: 'silence around a great deal',
          details: ['a cupboard shelf of tied notebooks', 'a folded shawl', 'a shuttered window', 'a swept floor', 'a single lamp'],
          alt: 'A cupboard shelf holding tied notebooks in a shuttered room.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The notebooks go onto a shelf, and the shelf is in a house, and the house is in a town that has never had a mathematician in it before or since. Nobody reads them for a long time. Everything in them is true the whole while.',
          },
          {
            id: 'end',
            narration:
              'A short life, then, and an enormous one, and the two facts do not contradict each other, however hard the people who loved him try to make them.',
          },
        ],
        historicalNote:
          'Ramanujan died in 1920 at 32. His notebooks were studied and edited over the following decades.',
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Epilogue
  // ---------------------------------------------------------------------
  {
    id: 'ramanujan-epilogue',
    characterId: 'ramanujan',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'complete',
        conditions: [
          { type: 'narrativeFlag', flag: 'ramanujan.thread.hardyReplied' },
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'ramanujan-infinite-series',
              'ramanujan-letter-to-hardy',
              'ramanujan-highly-composite',
              'ramanujan-modular-forms',
              'ramanujan-partition-theory',
              'ramanujan-mock-theta',
            ],
            count: 5,
          },
        ],
        title: 'One in a Thousand Years',
        yearLabel: 'After',
        image: {
          setting: 'a library shelf where several volumes of collected papers stand together',
          year: 1927,
          characters: ['ramanujan'],
          mood: 'gravity and warmth',
          details: ['bound collected papers', 'a reading lamp', 'a card catalogue drawer half open', 'a slip of paper marking a page', 'dust in a beam of light'],
          alt: 'Bound volumes of collected papers standing together on a library shelf under a lamp.',
        },
        pages: [
          {
            id: 'papers',
            narration:
              'The collected papers are published, and then the notebooks, edited by men who will give whole careers to the job. Every decade, somebody proves one more of the things he simply wrote down, and the proof is forty pages long, and he had it in a line.',
          },
          {
            id: 'hardy',
            narration:
              'Hardy is asked about him for the rest of his life, by anybody who has heard the name and a good many who have not, and he answers some version of the same thing every time.',
            speaker: 'HARDY',
            dialogue: 'The one thing in my life I can call a romance. He was in a class of his own, and I have never been able to decide what class that was.',
          },
          {
            id: 'last',
            speaker: 'RAMANUJAN',
            dialogue: 'An equation means nothing to me unless it expresses a thought of God.',
            narration: 'A boy who could not pass a physiology examination. A goddess in a small town. A slate wiped clean with an elbow, night after night, and not one line in the notebooks that was wrong.',
          },
        ],
        historicalNote:
          'Ramanujan\'s collected papers and notebooks have been studied continuously since his death, with results proved decades later. Hardy\'s assessment and Ramanujan\'s statement about equations expressing a thought of God are both reported in the biographical record; the wording here is dramatized rather than quoted.',
      },
      {
        id: 'complete-alone',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'ramanujan-infinite-series',
              'ramanujan-letter-to-hardy',
              'ramanujan-highly-composite',
              'ramanujan-modular-forms',
              'ramanujan-partition-theory',
              'ramanujan-mock-theta',
            ],
            count: 5,
          },
        ],
        title: 'The Whole of It, in a Cupboard',
        yearLabel: 'After',
        image: {
          setting: 'a wooden cupboard opened on shelf after shelf of tied notebooks',
          year: 1930,
          characters: ['ramanujan'],
          mood: 'immensity nobody has counted',
          details: ['shelf after shelf of tied notebooks', 'cloth wrappers', 'a paraffin lamp', 'a swept floor', 'a doorway of white light'],
          alt: 'A wooden cupboard opened to reveal shelf after shelf of tied notebooks.',
        },
        pages: [
          {
            id: 'all',
            narration:
              'He did the whole of it and nobody watched him do any of it. The series, the crowded numbers, the coefficients that multiply the way they should not, the partitions, the seventeen strangers at the end. All of it correct. None of it announced.',
          },
          {
            id: 'later',
            narration:
              'The cupboard is opened in a decade he did not live to see, by men who spend the first year simply deciding what order the pages go in. Every theorem they check holds. Some of them take forty pages to prove and he wrote them in a line, and there is no note anywhere explaining how.',
          },
          {
            id: 'voice',
            speaker: 'RAMANUJAN',
            dialogue: 'I never needed anyone to agree with me. I would only have liked somebody to see it.',
          },
        ],
        historicalNote:
          'Ramanujan\'s notebooks were edited and verified over decades after his death. This variant follows a life that produced the same mathematics without the Cambridge correspondence. Dialogue is dramatized.',
      },
      {
        id: 'england-partial',
        conditions: [
          { type: 'visitedLocation', locationId: 'cambridgeUK' },
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'ramanujan-infinite-series',
              'ramanujan-letter-to-hardy',
              'ramanujan-highly-composite',
              'ramanujan-modular-forms',
              'ramanujan-partition-theory',
              'ramanujan-mock-theta',
            ],
            count: 2,
          },
        ],
        title: 'The Part That Got Out',
        yearLabel: 'After',
        image: {
          setting: 'a desk in England with a small pile of offprints and a much larger tied bundle beside it',
          year: 1925,
          characters: ['ramanujan'],
          mood: 'a legacy with a ragged edge',
          details: ['a thin pile of offprints', 'a much larger tied bundle', 'a paperknife', 'a lamp', 'a window at dusk'],
          alt: 'A thin pile of printed offprints beside a much larger tied bundle of manuscript.',
        },
        pages: [
          {
            id: 'ratio',
            narration:
              'What was printed in his lifetime fits on one shelf. What was not fills a cupboard. For fifty years the second pile is a rumour among mathematicians, the way a country nobody has visited is a rumour.',
          },
          {
            id: 'work',
            narration:
              'Then people begin going in. They come out with theorems, and with the odd embarrassment of finding that a man with no training and no library got there before them, using a method he could not describe and they cannot reconstruct.',
          },
          {
            id: 'voice',
            speaker: 'RAMANUJAN',
            dialogue: 'I did not have the proofs. I had the things themselves. Somebody was always going to have to do the rest.',
          },
        ],
        historicalNote:
          'A substantial part of Ramanujan\'s output was unpublished at his death and was worked through by later mathematicians over the following century.',
      },
      {
        id: 'last-letter',
        conditions: [
          { type: 'narrativeFlag', flag: 'ramanujan.thread.hardyReplied' },
          { type: 'choiceWas', choiceKey: 'ramanujan-legacy-opening:choice', choiceId: 'letter' },
        ],
        title: 'Addressed to One Reader',
        yearLabel: 'After',
        image: {
          setting: 'a letter and its envelope kept together in a shallow drawer',
          year: 1922,
          characters: ['ramanujan'],
          mood: 'intimacy outliving the men in it',
          details: ['a letter with folded creases', 'an envelope with Indian stamps', 'a shallow drawer', 'a brass drawer pull', 'a strip of daylight'],
          alt: 'A folded letter and its stamped envelope lying together in a shallow drawer.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'Everything he had left went into letters, and the letters went to one man, who kept them in a drawer and took them out at intervals for the rest of his life and could never quite finish reading them.',
          },
          {
            id: 'spread',
            narration:
              'From that drawer it spreads: to a student, to a seminar, to a journal, to a subject that did not exist when the letter was posted. It turns out to be a very efficient way of publishing, if you have the right reader.',
          },
          {
            id: 'voice',
            speaker: 'RAMANUJAN',
            dialogue: 'Write it to somebody. Nothing survives that was written to nobody.',
          },
        ],
        historicalNote:
          'Ramanujan\'s correspondence with Hardy carried much of his late work, including the mock theta functions, into mathematics.',
      },
      {
        id: 'home-alone',
        conditions: [{ type: 'narrativeFlag', flag: 'ramanujan.thread.loosePages' }],
        title: 'Loose Pages in a Cupboard',
        yearLabel: 'After',
        image: {
          setting: 'a cupboard in a South Indian house holding a bundle of unlabelled sheets',
          year: 1930,
          characters: ['ramanujan'],
          mood: 'patience, dust, eventual light',
          details: ['a bundle of unlabelled sheets', 'a wooden cupboard', 'a cloth wrapper', 'a swept floor', 'sunlight through a doorway'],
          alt: 'A bundle of unlabelled sheets stored in a wooden cupboard.',
        },
        pages: [
          {
            id: 'wait',
            narration:
              'The pages stay in the cupboard through two decades, a war, a partition of the country, and three changes of house. Whoever moves them wraps them in cloth first. Nobody quite dares to throw them out.',
          },
          {
            id: 'open',
            narration:
              'When they are finally read, the reader sits down on the floor because there is no chair. The handwriting is small and confident. There is not one word of explanation anywhere in it and not one line that is wrong.',
          },
          {
            id: 'voice',
            speaker: 'RAMANUJAN',
            dialogue: 'It is true whether or not anyone is looking. I only wanted it written where somebody might look.',
          },
        ],
        historicalNote:
          'Ramanujan\'s papers survived in family and institutional keeping and continued to yield new mathematics long after his death.',
      },
      {
        id: 'default',
        title: 'A Clerk of the Port Trust',
        yearLabel: 'After',
        image: {
          setting: 'a harbour office long after closing, with one ledger left on a high desk',
          year: 1925,
          characters: ['ramanujan'],
          mood: 'ordinary surfaces holding something enormous',
          details: ['a single ledger on a high desk', 'a stilled ceiling fan', 'a rack of pigeonholes', 'evening light on tiled floor', 'a stub of pencil'],
          alt: 'One ledger left open on a high desk in an empty harbour office at evening.',
        },
        pages: [
          {
            id: 'record',
            narration:
              'In the official record he is a clerk of the Port Trust, third grade, whose columns never once failed to add. The record is accurate and it is the least true thing ever written about him.',
          },
          {
            id: 'work',
            narration:
              'The notebooks come to light slowly and by accident, the way such things do. Every page of them was written by a man who never expected to be read and wrote as carefully as if he were.',
          },
          {
            id: 'voice',
            speaker: 'RAMANUJAN',
            dialogue: 'I could not always tell you how I knew. But I always knew.',
          },
        ],
        historicalNote:
          'Ramanujan died in 1920 at 32, having worked most of his life outside any academic institution. His notebooks continue to generate new mathematics.',
      },
    ],
  },
];
