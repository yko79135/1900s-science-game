import type { StoryScene } from '../../types/story';

const sourceIds = ['turingBletchley', 'turingNpl'];

/** Board context cards told in full by scenes in this file. */
export const TURING_REPLACED_CONTEXT_CARDS: string[] = [
  'turing-card-1936',
  'turing-card-1938-princeton',
  'turing-card-1939-bletchley',
  'turing-card-1946-ace',
  'turing-card-1950-imitation-game',
  'turing-card-1952-morphogenesis',
];

export const TURING_STORY_SCENES: StoryScene[] = [
  // -------------------------------------------------------------------------
  // Prologue
  // -------------------------------------------------------------------------
  {
    id: 'turing-prologue-boat',
    characterId: 'turing',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Boat Back',
        locationLabel: 'London',
        yearLabel: '1912',
        image: {
          setting: 'a London street of tall houses in June 1912, with a cabin trunk waiting on the step',
          year: 1912,
          characters: ['turing'],
          mood: 'warm, orderly, already leaving',
          details: ['a strapped cabin trunk', 'plane trees in a square', 'a shipping-line label', 'a folded sailing list', 'brass door numbers'],
          alt: 'A strapped cabin trunk with a shipping label waiting on the step of a tall London house in summer.',
        },
        pages: [
          {
            id: 'june',
            narration:
              'A warm June in London, the plane trees already going over, and a trunk on the step with a shipping label tied to the handle. The boy is a few days old. His father’s leave has a fixed number of weeks left in it, and then there is a ship, and then an office in India with a ceiling fan and a great many returns to sign.',
          },
          {
            id: 'guardians',
            narration:
              'So the two brothers are lodged on the south coast with a retired couple who keep good clocks and a punctual table. Letters arrive by sea in bundles and are read twice, once for the news and once for the handwriting. The word home means a house he has never seen and a house he sleeps in, and nobody troubles to say which is which.',
          },
          {
            id: 'rules',
            narration:
              'By four he is an untidy child with ink to the elbow who has noticed that the adults are running on rules — the clocks, the table, the sea post — and that a rule can be found out from the outside if you watch it long enough and ask why once too often.',
            speaker: 'HIS GUARDIAN',
            dialogue: 'Alan. A boy is not required to know why. A boy is required to be ready by half past.',
          },
        ],
        historicalNote:
          'Turing was born in London in June 1912. His father served in the Indian Civil Service, and he and his brother were boarded with a retired couple in England while their parents were abroad. Dialogue is dramatized wording, not a quotation.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter 1 — Formation, 1912–1926
  // -------------------------------------------------------------------------
  {
    id: 'turing-formation-opening',
    characterId: 'turing',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Everything Comes Apart',
        yearLabel: '1918–1926',
        image: {
          setting: 'a suburban English garden bed and, beyond it, a prep-school corridor of hooks and boots',
          year: 1919,
          characters: ['turing'],
          mood: 'curious, solitary, ink-stained',
          details: ['a watering can', 'a broken tin toy', 'a leaking fountain pen', 'a boot rack', 'a hand-cut diagram in a notebook'],
          alt: 'A watering can and a broken tin toy beside a freshly watered patch of garden soil.',
        },
        pages: [
          {
            id: 'sailor',
            narration:
              'In the garden he presses the arms of a broken tin sailor into the soil, the way the gardener presses in bulbs, and waters the place every morning for a week to see whether they come up. Nothing comes up. He is not disappointed. He has learned something about arms.',
          },
          {
            id: 'school',
            narration:
              'At the prep school the ink goes everywhere: cuffs, desk lid, the margin of a Latin primer he is failing. Halfway through a lesson on the ablative he is under the desk instead, following a chain of reasoning about a bicycle chain, which has the advantage of being true.',
            speaker: 'A MASTER',
            dialogue: 'Turing. You are here to be educated. You are not here to think.',
          },
          {
            id: 'book',
            narration:
              'A book comes from his mother — a household primer that explains the body as a machine which runs on food and air, with diagrams and no reverence in it at all. He reads it until the spine gives out. It is the first time anyone has told him that the inside of a thing is allowed to be knowable.',
          },
          {
            id: 'choice',
            narration:
              'Next term will be a long corridor of subjects he is bad at, and one thing he is not bad at that nobody in the building wants: the moment when a rule is pushed until it says something new. He has to decide how to carry it through a school that grades handwriting.',
            choices: [
              {
                id: 'notebook',
                label: 'Keep it to yourself and fill a notebook',
                effects: [
                  { type: 'flag', flag: 'turing.privateNotebook', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, standing: -1 } },
                ],
              },
              {
                id: 'pass',
                label: 'Learn the shape they want and wear it',
                effects: [
                  { type: 'flag', flag: 'turing.learnedToPass', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'shed',
                label: 'Take over the disused shed and do chemistry',
                effects: [
                  { type: 'flag', flag: 'turing.shed', value: true },
                  { type: 'resources', effects: { network: 1, health: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Turing planted the broken limbs of a toy sailor in the garden as a small child, was given a popular science primer by his mother, and was repeatedly marked down at school for untidiness and for pursuing mathematics ahead of the syllabus. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'turing-formation-shed',
    characterId: 'turing',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 88 },
    once: true,
    variants: [
      {
        id: 'shed-chosen',
        conditions: [
          { type: 'choiceWas', choiceKey: 'turing-formation-opening:choice', choiceId: 'shed' },
          { type: 'yearAtLeast', year: 1919 },
          { type: 'yearAtMost', year: 1925 },
        ],
        title: 'Iodine and Seaweed',
        yearLabel: '1920s',
        image: {
          setting: 'a cold garden shed converted to a boy’s laboratory in the early 1920s',
          year: 1922,
          characters: ['turing'],
          mood: 'absorbed, cold, happy',
          details: ['a spirit lamp', 'stained corks', 'a jar of seaweed', 'a cracked porcelain dish', 'a school cap on a nail'],
          alt: 'A spirit lamp and a cracked porcelain dish on a bench in a cold garden shed.',
        },
        pages: [
          {
            id: 'iodine',
            narration:
              'The shed has one window, a spirit lamp, and a smell that follows him into meals. He is boiling seaweed down to get iodine out of it, because a book said it could be done and did not say how much seaweed. The answer is a great deal of seaweed.',
          },
          {
            id: 'fingers',
            narration:
              'His fingers go brown and stay brown. A master confiscates the lamp on the grounds that it is not on any syllabus, which is exactly why it is in the shed, and hands it back at the end of term without comment.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.handsOn', value: true },
          { type: 'resources', effects: { engineering: 1 } },
        ],
        historicalNote:
          'Turing carried out amateur chemistry through his school years, including extracting iodine from seaweed, and was criticised for pursuing it outside the syllabus. The details here are dramatized around that documented habit.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1919 },
          { type: 'yearAtMost', year: 1925 },
        ],
        title: 'The Bottom of the Form',
        yearLabel: '1920s',
        image: {
          setting: 'a prep-school classroom after hours with one desk still occupied',
          year: 1922,
          characters: ['turing'],
          mood: 'patient, out of step, unbothered',
          details: ['a lifted desk lid', 'a blotted exercise book', 'chalk dust in low light', 'a stack of Latin primers', 'a cricket ball nobody wants'],
          alt: 'One occupied desk in an empty classroom, its lid propped open on a blotted exercise book.',
        },
        pages: [
          {
            id: 'sums',
            narration:
              'He is bottom of the form in three subjects and doing calculus he has not been taught, from a book he has not been given, in an exercise book ruled for spelling. The arrangement suits nobody but him.',
          },
          {
            id: 'proof',
            narration:
              'He works out a result about a series before the class has been shown the method, and is marked down because the working is not the working in the book. He reads the correction twice, decides it is about handwriting, and goes on.',
          },
        ],
        effects: [{ type: 'resources', effects: { theory: 1 } }],
        historicalNote:
          'School reports on Turing repeatedly praised his mathematical ability while condemning his presentation and his indifference to the rest of the curriculum.',
      },
    ],
  },
  {
    id: 'turing-formation-reports',
    characterId: 'turing',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 84 },
    once: true,
    variants: [
      {
        id: 'low-standing',
        conditions: [
          { not: { type: 'resourceAtLeast', resource: 'standing', value: 1 } },
          { type: 'yearAtLeast', year: 1921 },
          { type: 'yearAtMost', year: 1926 },
        ],
        title: 'What the Report Says',
        yearLabel: '1920s',
        image: {
          setting: 'a family sitting room with an end-of-term report open on a side table',
          year: 1924,
          characters: ['turing'],
          mood: 'quiet disappointment, private stubbornness',
          details: ['a folded school report', 'a teacup on a doily', 'a mantel clock', 'a fountain pen with a bent nib', 'winter light on a rug'],
          alt: 'An opened end-of-term school report lying beside a teacup on a side table.',
        },
        pages: [
          {
            id: 'read',
            narration:
              'The report is read aloud in the sitting room, in order, so that the good sentence about mathematics arrives after four bad ones about everything else and does not survive the journey. His handwriting is called disgraceful. His mind is not mentioned.',
          },
          {
            id: 'answer',
            narration:
              'He does not defend himself, which is taken for sullenness and is in fact arithmetic: he has worked out how many terms remain and how little any of this will weigh at the end of them.',
            speaker: 'HIS MOTHER',
            dialogue: 'They will not keep you, Alan, if you will not be ordinary for one hour a day.',
          },
        ],
        effects: [{ type: 'theme', theme: 'institutionVsIndependence', amount: 1 }],
        historicalNote:
          'Turing’s school reports were consistently critical of his untidiness and his neglect of subjects outside mathematics and science. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1921 },
          { type: 'yearAtMost', year: 1926 },
        ],
        title: 'A Prize and a Warning',
        yearLabel: '1920s',
        image: {
          setting: 'a school hall on prize day with one boy holding a bound book',
          year: 1924,
          characters: ['turing'],
          mood: 'formal, faintly grudging',
          details: ['a bound prize book', 'rows of folding chairs', 'a lectern', 'a printed order of proceedings', 'a hat on a knee'],
          alt: 'A boy holding a bound prize book among rows of folding chairs in a school hall.',
        },
        pages: [
          {
            id: 'prize',
            narration:
              'They give him a prize for mathematics and a warning in the same breath, which is a school’s way of saying that it cannot decide what he is. The prize is a bound book of essays he will never open.',
          },
          {
            id: 'corridor',
            narration:
              'In the corridor afterwards a master tells him, not unkindly, that a boy who is clever in only one direction is a nuisance to everybody including himself. He thinks about it seriously for several days, the way he thinks about everything, and concludes that the man may be right and it changes nothing.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 1 } }],
        historicalNote:
          'Turing won school mathematics prizes while being warned about his neglect of other subjects.',
      },
    ],
  },
  {
    id: 'turing-formation-closing',
    characterId: 'turing',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'notebook',
        conditions: [{ type: 'choiceWas', choiceKey: 'turing-formation-opening:choice', choiceId: 'notebook' }],
        title: 'The Notebook Goes With Him',
        yearLabel: '1926',
        image: {
          setting: 'a packed school trunk with a soft-covered notebook set on top of folded clothes',
          year: 1926,
          characters: ['turing'],
          mood: 'private, prepared, unafraid',
          details: ['a soft-covered notebook', 'a school trunk with initials', 'a rolled towel', 'a name-tape kit', 'a rail ticket'],
          alt: 'A soft-covered notebook resting on folded clothes inside a packed school trunk.',
        },
        pages: [
          {
            id: 'pack',
            narration:
              'The trunk is packed by somebody else and the notebook goes in last, under the towels, where it is nobody’s business. Fourteen years old, and he has already arranged his life into a public half that can be marked and a private half that cannot.',
          },
          {
            id: 'ahead',
            narration:
              'The public half will go on being a disappointment for years. The private half is a boy working out, alone, with no one to check him, what it is that a rule actually does.',
          },
        ],
        historicalNote:
          'Turing worked well ahead of his school syllabus in private notebooks throughout his boyhood. This closing follows a life that kept that work hidden.',
      },
      {
        id: 'london',
        conditions: [{ type: 'locationIs', locationId: 'london' }],
        title: 'The House With the Good Clocks',
        locationLabel: 'London',
        yearLabel: '1926',
        image: {
          setting: 'a hallway of a London house with a hall clock and a strapped trunk by the door',
          year: 1926,
          characters: ['turing'],
          mood: 'orderly, provisional, on the point of departure',
          details: ['a hall clock', 'a strapped trunk', 'a folded railway timetable', 'a hat stand', 'letters on a salver'],
          alt: 'A strapped trunk and a folded timetable in a hallway beneath a hall clock.',
        },
        pages: [
          {
            id: 'clocks',
            narration:
              'The last summer in the house with the good clocks. Letters from India go on arriving in bundles; he answers them in a hand that has been described in writing as an offence. Nobody in the hallway knows what to do with him and everybody is kind about it.',
          },
          {
            id: 'next',
            narration:
              'What he wants is not a career. It is one clean question with a yes or a no at the end of it. He has not found one yet. He has begun to suspect that they are not lying about in the open, and that you have to go somewhere to be handed one.',
          },
        ],
        historicalNote:
          'Turing spent his boyhood in England with guardians and relatives while his parents were largely abroad.',
      },
      {
        id: 'default',
        title: 'Fourteen, and Nothing Settled',
        yearLabel: '1926',
        image: {
          setting: 'an English railway platform in 1926 with a boy, a trunk and a bicycle',
          year: 1926,
          characters: ['turing'],
          mood: 'unsettled, restless, forward-leaning',
          details: ['a bicycle propped on a platform', 'a corded trunk', 'a station clock', 'a folded map', 'a boy’s cap'],
          alt: 'A bicycle propped beside a corded trunk on an English railway platform under a station clock.',
        },
        pages: [
          {
            id: 'end',
            narration:
              'Childhood ends the way it does for boys of his sort: with a timetable. Somebody else has decided where he will be in September and what he will be taught there, and he has decided, privately, what he will actually be doing instead.',
          },
          {
            id: 'question',
            narration:
              'He is good at exactly one thing and it is not a thing the world has a job for. That will have to be somebody’s problem eventually. For now it is his, and he does not mind it much.',
          },
        ],
        historicalNote:
          'A summary of Turing’s boyhood: strong independent mathematical work, poor standing in the wider school curriculum.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter 2 — Education, 1926–1936
  // -------------------------------------------------------------------------
  {
    id: 'turing-education-opening',
    characterId: 'turing',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'kings',
        conditions: [{ type: 'locationIs', locationId: 'cambridgeUK' }],
        title: 'A Room Over the Court',
        locationLabel: 'Cambridge',
        yearLabel: '1931',
        image: {
          setting: 'an undergraduate room over a Cambridge college court in autumn',
          year: 1931,
          characters: ['turing'],
          mood: 'released, unguarded, quick',
          details: ['a gas ring', 'a stack of borrowed offprints', 'running shoes by the door', 'a sash window over a court', 'a tea caddy'],
          alt: 'An undergraduate room with running shoes by the door and offprints stacked beside a sash window.',
        },
        pages: [
          {
            id: 'court',
            narration:
              'The room looks over a court where the grass is a rule rather than a plant. For the first time in his life nobody is checking his handwriting, and the effect is roughly that of taking a coat off indoors.',
          },
          {
            id: 'company',
            narration:
              'The others here are quick in the way he is quick, and one or two are quicker, and it turns out to be a relief rather than a wound. He learns to argue at speed, badly dressed, in a voice that goes up when he is excited and stammers when he is nearly right.',
            speaker: 'A FELLOW UNDERGRADUATE',
            dialogue: 'You never say what you mean, Turing. You say the thing three steps after what you mean and expect us to reverse it.',
          },
          {
            id: 'running',
            narration:
              'He runs. Miles of it, out along the river and back, because the head works better once the body has been given something dull to do, and because a mile is a thing that cannot be argued with.',
          },
          {
            id: 'choice',
            narration:
              'The reading lists point three ways, and a man has only so many years. He can go after the foundations of mathematics, or after the physics of what a mind is made of, or after machines — the actual metal — which no respectable mathematician here would call a subject at all.',
            choices: [
              {
                id: 'logic',
                label: 'Go after the foundations: what a proof really is',
                effects: [
                  { type: 'flag', flag: 'turing.logicFirst', value: true },
                  { type: 'resources', effects: { standing: 1, funds: 1 } },
                ],
              },
              {
                id: 'mind',
                label: 'Go after the mind: whether thought is only matter',
                effects: [
                  { type: 'flag', flag: 'turing.mindFirst', value: true },
                  { type: 'theme', theme: 'mindVsMachine', amount: 2 },
                  { type: 'resources', effects: { theory: 1 } },
                ],
              },
              {
                id: 'machines',
                label: 'Go after machines, and let the mathematicians sniff',
                effects: [
                  { type: 'flag', flag: 'turing.machinesFirst', value: true },
                  { type: 'resources', effects: { engineering: 1, standing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Turing went up to King’s College, Cambridge, in 1931 and was elected a fellow of the college in 1935. He was a serious long-distance runner throughout his life. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Sixty Miles in the Rain',
        yearLabel: '1926',
        image: {
          setting: 'an English country road in a wet May, with a bicycle and a small suitcase',
          year: 1926,
          characters: ['turing'],
          mood: 'stubborn, soaked, elated',
          details: ['a heavy bicycle', 'a strapped suitcase', 'a signpost', 'wet hedgerows', 'an inn sign'],
          alt: 'A heavy bicycle with a strapped suitcase leaning at a signpost on a wet country road.',
        },
        pages: [
          {
            id: 'strike',
            narration:
              'The country has stopped. No trains anywhere on the first day of term, and the school is sixty miles inland from the port where the boat has put him down. He is thirteen. He finds a bicycle.',
          },
          {
            id: 'road',
            narration:
              'He rides it over two days through a wet May, sleeps at an inn halfway with his suitcase strapped behind the saddle, and arrives on time. The local paper prints a paragraph. The masters are impressed for about a fortnight, and then his handwriting comes up again.',
          },
          {
            id: 'told',
            narration:
              'The new form master looks at the ride, the ink, and the marks together, and reaches the conclusion every master reaches.',
            speaker: 'A FORM MASTER',
            dialogue: 'You will not win a scholarship by being interesting, Turing. You will win one by being neat.',
          },
          {
            id: 'choice',
            narration:
              'What he does with the next ten years is his own affair, whatever the timetable says. There are three roads out of a school like this, and only one of them has a salary at the end.',
            choices: [
              {
                id: 'logic',
                label: 'Go after the foundations: what a proof really is',
                effects: [
                  { type: 'flag', flag: 'turing.logicFirst', value: true },
                  { type: 'resources', effects: { standing: 1, funds: 1 } },
                ],
              },
              {
                id: 'mind',
                label: 'Go after the mind: whether thought is only matter',
                effects: [
                  { type: 'flag', flag: 'turing.mindFirst', value: true },
                  { type: 'theme', theme: 'mindVsMachine', amount: 2 },
                  { type: 'resources', effects: { theory: 1 } },
                ],
              },
              {
                id: 'machines',
                label: 'Go after machines, and let the mathematicians sniff',
                effects: [
                  { type: 'flag', flag: 'turing.machinesFirst', value: true },
                  { type: 'resources', effects: { engineering: 1, standing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Turing began at Sherborne School in 1926 during the General Strike and cycled some sixty miles to reach it, staying overnight on the way. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'turing-morcom',
    characterId: 'turing',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1928 },
          { type: 'yearAtMost', year: 1933 },
        ],
        title: 'The Other Boy',
        yearLabel: 'c. 1929–1930',
        image: {
          setting: 'a school observatory step at night with two coats and one small telescope',
          year: 1929,
          characters: ['turing'],
          mood: 'warmth, cold air, something enormous',
          details: ['a small brass telescope', 'two coats on a step', 'a star chart weighted with a stone', 'frost on iron railings', 'a hand-drawn diagram'],
          alt: 'A small brass telescope and a weighted star chart on a cold stone step at night.',
        },
        pages: [
          {
            id: 'friend',
            narration:
              'There is another boy, a year ahead, who is better at nearly everything and does not mind being caught out. They stand on the observatory step in the cold arguing about the spectra of stars, and for the first time in his life Alan is talking to somebody at full speed and being met.',
          },
          {
            id: 'winter',
            narration:
              'Then in the winter the other boy is not at chapel, and is not at chapel the next day either. He had been ill for a long time from something in the milk that nobody had thought to test for, and had said nothing about it because it would have been a fuss.',
            speaker: 'ALAN',
            dialogue: 'He knew the answer before I had the question out. I keep starting sentences at him.',
          },
          {
            id: 'question',
            narration:
              'He writes to the boy’s mother, carefully, more than once. And he starts on the question that will not leave him again as long as he lives: whether a mind is only the matter it is running on, and whether anything of it can be carried off that matter and set going again elsewhere.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.morcom', value: true },
          { type: 'theme', theme: 'mindVsMachine', amount: 2 },
          { type: 'resources', effects: { wellbeing: -1, theory: 1 } },
        ],
        historicalNote:
          'Turing’s close school friend Christopher Morcom died in 1930 of an illness contracted from infected milk. Turing corresponded with Morcom’s mother for years afterwards, and the loss shaped his lifelong interest in whether mind can be separated from matter. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'turing-newman-lecture',
    characterId: 'turing',
    chapterId: 'education',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 97 },
    once: true,
    variants: [
      {
        id: 'machines-first',
        conditions: [
          { type: 'choiceWas', choiceKey: 'turing-education-opening:choice', choiceId: 'machines' },
          { type: 'yearAtLeast', year: 1933 },
          { type: 'yearAtMost', year: 1936 },
        ],
        title: 'The Word Mechanical',
        yearLabel: 'c. 1935',
        image: {
          setting: 'a small university lecture room with a blackboard and a dozen chairs',
          year: 1935,
          characters: ['turing'],
          mood: 'a door opening in a wall',
          details: ['a half-erased blackboard', 'a dozen wooden chairs', 'a lecturer’s notes', 'a raincoat over a seat back', 'chalk in a tin'],
          alt: 'A half-erased blackboard above a lecturer’s notes in a small room of wooden chairs.',
        },
        pages: [
          {
            id: 'lecture',
            narration:
              'He has spent two years being told that metal is not a subject, and then a topologist stands up in a room of twelve and asks whether there is a mechanical process that will decide, for any statement whatever, if it follows from the axioms.',
            speaker: 'NEWMAN',
            dialogue: 'Mechanical, gentlemen. The word is doing a great deal of work and nobody has ever said what it means. Somebody ought to find out.',
          },
          {
            id: 'grass',
            narration:
              'He runs it off that afternoon, out along the river, and then lies down flat in the meadow grass with his heart going, and the thing arrives whole: not a proof, a device. A strip of paper, a reader that can only see one square at a time, and a very short list of what it is allowed to do.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.entscheidung', value: true },
          { type: 'resources', effects: { theory: 1, engineering: 1 } },
        ],
        historicalNote:
          'Max Newman’s 1935 Cambridge lectures on Hilbert’s Entscheidungsproblem set Turing on the road to "On Computable Numbers"; he is reported to have conceived the machine while lying in the meadows after a run. Dialogue is dramatized.',
      },
      {
        id: 'cambridge',
        conditions: [
          { type: 'locationIs', locationId: 'cambridgeUK' },
          { type: 'yearAtLeast', year: 1933 },
          { type: 'yearAtMost', year: 1936 },
        ],
        title: 'Define Me the Word Mechanical',
        locationLabel: 'Cambridge',
        yearLabel: 'c. 1935',
        image: {
          setting: 'a Cambridge lecture room emptying out, one student still at the board',
          year: 1935,
          characters: ['turing'],
          mood: 'quiet, electric, unhurried',
          details: ['chalk on a sleeve', 'a wiped blackboard with one line left', 'stacked chairs', 'a gown over an arm', 'rain on high windows'],
          alt: 'A blackboard wiped except for one line, in a lecture room with stacked chairs.',
        },
        pages: [
          {
            id: 'board',
            narration:
              'The room empties and one line of chalk stays on the wall: is there a definite method that settles every mathematical question. Alan stands in front of it with chalk on his sleeve, holding, as usual, the wrong end of the problem, which is the end that turns out to be the handle.',
          },
          {
            id: 'newman',
            narration:
              'The lecturer comes back for his notes and finds him there. He is a topologist, patient with cleverness, unimpressed by speed on its own.',
            speaker: 'NEWMAN',
            dialogue: 'Everybody wants to answer it. Nobody will define the terms. Define me the word mechanical and I will listen to anything you say afterwards.',
          },
          {
            id: 'run',
            narration:
              'He runs eight miles out of Cambridge with that in his head and lies down in the meadow grass at the end of it. What comes is not an argument. It is a machine — paper tape, a reader that sees one square at a time, and a table of behaviour so short you could write it on a postcard.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.entscheidung', value: true },
          { type: 'resources', effects: { theory: 1, proof: 1 } },
        ],
        historicalNote:
          'Newman’s 1935 lectures posed Hilbert’s decision problem to Turing’s year at Cambridge. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1933 },
          { type: 'yearAtMost', year: 1936 },
        ],
        title: 'A Problem Arriving by Post',
        yearLabel: 'c. 1935',
        image: {
          setting: 'a lodging-house table with an opened journal and a cold cup of tea',
          year: 1935,
          characters: ['turing'],
          mood: 'solitary, gripped, slightly cold',
          details: ['an opened mathematical journal', 'a cold cup of tea', 'a torn envelope', 'a pencil worn to a stub', 'a gas fire unlit'],
          alt: 'An opened mathematical journal and a torn envelope beside a cold cup of tea.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'Nobody lectures to him about it. The problem arrives the way most things arrive when you are outside the room: in print, weeks late, in a journal borrowed from somebody who wants it back. Is there a definite method that decides every mathematical question.',
          },
          {
            id: 'alone',
            narration:
              'He works at it on the table where he eats, with the fire unlit because coal costs money, and he gets to the same place the room full of men will get to: that you cannot answer it until you have said what a method is. And that nobody has.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.entscheidung', value: true },
          { type: 'resources', effects: { theory: 1 } },
        ],
        historicalNote:
          'A divergent version of Turing’s introduction to the decision problem, for a life that never sat in Newman’s Cambridge lecture room.',
      },
    ],
  },
  {
    id: 'turing-computable-paper',
    characterId: 'turing',
    chapterId: 'education',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'turing-card-1936',
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    variants: [
      {
        id: 'cambridge',
        conditions: [
          { type: 'locationIs', locationId: 'cambridgeUK' },
          { type: 'yearAtLeast', year: 1934 },
          { type: 'yearAtMost', year: 1936 },
        ],
        title: 'A Machine Made of Paper',
        locationLabel: 'Cambridge',
        yearLabel: '1936',
        image: {
          setting: 'a college desk covered in ruled strips of paper and a short table of instructions',
          year: 1936,
          characters: ['turing'],
          mood: 'exact, tireless, quietly enormous',
          details: ['long ruled paper strips', 'a table of instructions in pencil', 'a typewriter with a jammed ribbon', 'a mug', 'a window on to a court'],
          alt: 'Long ruled strips of paper and a pencilled table of instructions covering a college desk.',
        },
        pages: [
          {
            id: 'machine',
            narration:
              'The machine has no wheels and no wires. It is a strip of paper divided into squares, a reader that can see exactly one square, and a table saying what to do for each combination of square and state. That is the whole of it, and he has to prove that it is enough.',
          },
          {
            id: 'universal',
            narration:
              'Then the second thing, which is the one that will not stop growing. If the table of one machine can be written down as marks on the tape, then one machine can read the description of any other and become it. Not a machine for a job. A machine for all the jobs, waiting to be told which.',
          },
          {
            id: 'halting',
            narration:
              'And the answer to the question that started it is no. There is no method that decides every question, and he can show it by asking his machine, politely, to say in advance whether a given machine will ever stop. It cannot. Nothing can.',
          },
          {
            id: 'send',
            narration:
              'The paper is nearly typed when word comes from Princeton that a logician there has reached the same conclusion by another road and got into print first. The mathematics is not in doubt. What is in doubt is what a young man does about it.',
            choices: [
              {
                id: 'appendix',
                label: 'Add an appendix proving the two answers are the same thing',
                effects: [
                  { type: 'flag', flag: 'turing.generousAppendix', value: true },
                  { type: 'resources', effects: { network: 1, proof: 1 } },
                ],
              },
              {
                id: 'priority',
                label: 'Press your claim: yours was finished first',
                effects: [
                  { type: 'flag', flag: 'turing.pressedPriority', value: true },
                  { type: 'resources', effects: { standing: 1, network: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1936' },
          { type: 'flag', flag: 'turing.universalMachine', value: true },
          { type: 'resources', effects: { standing: 1, network: 1 } },
        ],
        historicalNote:
          'In 1936 Turing defined computability in terms of an abstract machine, proved the existence of a universal machine, and showed the decision problem unsolvable. Alonzo Church published an equivalent result first; Turing added an appendix demonstrating that the two definitions coincide.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1934 },
          { type: 'yearAtMost', year: 1936 },
        ],
        title: 'The Tape and the Table',
        yearLabel: '1936',
        image: {
          setting: 'a plain table with ruled paper strips, an inkpot and one lamp',
          year: 1936,
          characters: ['turing'],
          mood: 'private, absolute, unwitnessed',
          details: ['ruled paper strips', 'an inkpot', 'a single lamp', 'a pencilled state table', 'a folded jacket on a chair'],
          alt: 'Ruled paper strips and a pencilled state table under a single lamp on a plain table.',
        },
        pages: [
          {
            id: 'build',
            narration:
              'He builds it on the table where he eats: a strip of paper in squares, a reader that sees one square, a short table of what to do next. It is the crudest possible thing that could be called following a rule, and that is exactly the point. If this cannot do it, nothing can.',
          },
          {
            id: 'universal',
            narration:
              'And then the turn that changes the century. Write one machine’s table on the tape of another, and the second becomes the first. One device, general, indifferent, waiting only to be told what to be.',
          },
          {
            id: 'send',
            narration:
              'The proof that no method settles every question falls out of it in three pages. Nobody has asked him for any of this. There is a journal, a stamp, and a man across the Atlantic who has been circling the same ground.',
            choices: [
              {
                id: 'appendix',
                label: 'Add an appendix proving the two answers are the same thing',
                effects: [
                  { type: 'flag', flag: 'turing.generousAppendix', value: true },
                  { type: 'resources', effects: { network: 1, proof: 1 } },
                ],
              },
              {
                id: 'priority',
                label: 'Press your claim: yours was finished first',
                effects: [
                  { type: 'flag', flag: 'turing.pressedPriority', value: true },
                  { type: 'resources', effects: { standing: 1, network: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1936' },
          { type: 'flag', flag: 'turing.universalMachine', value: true },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'The universal machine and the unsolvability of the decision problem are Turing’s 1936 results. This variant follows a life that reached them outside Cambridge.',
      },
    ],
  },
  {
    id: 'turing-breakthrough-computable',
    characterId: 'turing',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'turing-computable-numbers', priority: 88 },
    once: true,
    variants: [
      {
        id: 'cambridge',
        conditions: [{ type: 'locationIs', locationId: 'cambridgeUK' }],
        title: 'On Computable Numbers',
        locationLabel: 'Cambridge',
        yearLabel: '1936',
        image: {
          setting: 'a college pigeonhole with a wrapped set of printed offprints in it',
          year: 1936,
          characters: ['turing'],
          mood: 'anticlimax with a long fuse',
          details: ['string-tied offprints', 'a brass pigeonhole label', 'a porter’s ledger', 'a bicycle against a wall', 'a printed wrapper'],
          alt: 'A string-tied bundle of printed offprints waiting in a college pigeonhole.',
        },
        pages: [
          {
            id: 'offprints',
            narration:
              'The offprints come back from the printer tied with string. He gives some away and cannot think who else would want one. In the whole of Europe there are perhaps a dozen people who will read it properly this year.',
          },
          {
            id: 'cost',
            narration:
              'It cost him a spring and most of a summer and the good opinion of two men who think a mathematician should not be talking about tape. His answer, when pressed, is that he did not invent the tape to be interesting. He invented it to be stupid enough to trust.',
            speaker: 'ALAN',
            dialogue: 'It has to be something a clerk could do with no idea what any of it is for. Otherwise you are just smuggling in a mind and calling it a method.',
          },
          {
            id: 'after',
            narration:
              'What he has actually done is describe a thing that does not exist yet, in enough detail that somebody could build it. He does not put that in the paper. He thinks about it on the way to dinner.',
          },
        ],
        historicalNote:
          '"On Computable Numbers, with an Application to the Entscheidungsproblem" appeared in 1936 and attracted little immediate attention outside a small circle of logicians. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Three Pages That Do Not Look Like Much',
        yearLabel: '1936',
        image: {
          setting: 'a post office counter with a wrapped manuscript being weighed',
          year: 1936,
          characters: ['turing'],
          mood: 'ordinary counter, extraordinary parcel',
          details: ['a brass scale', 'a brown paper parcel', 'a rack of stamps', 'a rubber date stamp', 'a queue behind'],
          alt: 'A brown paper parcel on a brass post office scale beside a rack of stamps.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'It goes over a counter in brown paper and is weighed by a man who wants the next customer. Whatever else happens to him, this is the morning: a parcel, a date stamp, and the definition of what a machine can and cannot ever do.',
          },
          {
            id: 'quiet',
            narration:
              'Nothing happens for a while. A handful of letters, one of them from across the Atlantic and worth all the others. He goes running, and comes back, and starts on something else, because the alternative is waiting.',
          },
        ],
        historicalNote:
          'Turing’s 1936 paper was slow to attract attention beyond a small group of logicians.',
      },
    ],
  },
  {
    id: 'turing-education-closing',
    characterId: 'turing',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'published-generous',
        conditions: [
          { type: 'projectCompleted', projectId: 'turing-computable-numbers' },
          { type: 'choiceWas', choiceKey: 'turing-computable-paper:send', choiceId: 'appendix' },
        ],
        title: 'The Appendix',
        yearLabel: '1936',
        image: {
          setting: 'a desk with a short typed appendix laid on top of a finished paper',
          year: 1936,
          characters: ['turing'],
          mood: 'generous, clear-eyed, finished',
          details: ['a short typed appendix', 'a paperclip', 'a finished typescript', 'an airmail envelope', 'a lamp on a low setting'],
          alt: 'A short typed appendix clipped to the front of a finished typescript beside an airmail envelope.',
        },
        pages: [
          {
            id: 'appendix',
            narration:
              'The appendix is four pages and costs him a fortnight, and it says, in effect: the other man’s answer and mine are the same answer wearing different clothes, and here is the proof. It is the least self-interested thing he will ever write and it does his reputation more good than the paper.',
          },
          {
            id: 'invitation',
            narration:
              'An invitation comes back across the Atlantic almost by return. He is twenty-four, he has defined what a machine is, and the only people who have noticed are on the wrong side of an ocean.',
          },
        ],
        historicalNote:
          'Turing added an appendix showing that his computability and Church’s lambda-definability coincide, and went to Princeton in 1936 to work with Church.',
      },
      {
        id: 'published',
        conditions: [{ type: 'projectCompleted', projectId: 'turing-computable-numbers' }],
        title: 'A Dozen Readers',
        yearLabel: '1936',
        image: {
          setting: 'a college staircase at night with a lit window and a bicycle below',
          year: 1936,
          characters: ['turing'],
          mood: 'undersold, patient, certain',
          details: ['one lit staircase window', 'a bicycle against railings', 'a wrapped offprint', 'wet cobbles', 'a gas lamp'],
          alt: 'A single lit window on a college staircase above a bicycle propped against railings.',
        },
        pages: [
          {
            id: 'quiet',
            narration:
              'The paper is out and the world declines to shake. A dozen readers, two of them serious, and a reprint request from a country he has never visited. He had half expected an argument and got a silence instead, which is worse and easier.',
          },
          {
            id: 'ahead',
            narration:
              'He is twenty-four. He has drawn the boundary of what any mechanism can ever do, and the only question left is what to do inside it — which is, it turns out, everything.',
          },
        ],
        historicalNote:
          'Turing’s 1936 result had limited immediate reception; its consequences unfolded over the following decades.',
      },
      {
        id: 'default',
        title: 'The Drawer',
        yearLabel: '1936',
        image: {
          setting: 'a desk drawer half open on a bundle of unpublished sheets',
          year: 1936,
          characters: ['turing'],
          mood: 'unresolved, held back, restless',
          details: ['a bundle of unposted sheets', 'a half-open drawer', 'a dry inkpot', 'an unstamped envelope', 'a running vest over a chair'],
          alt: 'A bundle of unposted sheets in a half-open desk drawer beside an unstamped envelope.',
        },
        pages: [
          {
            id: 'drawer',
            narration:
              'The strips of ruled paper and the table of behaviour go into the drawer, finished in his head and unfinished on paper, which is the only state that counts. Somebody in another country is circling the same ground; he can hear it in the journals, a season behind.',
          },
          {
            id: 'later',
            narration:
              'He tells himself he will write it out properly when the term is over. He is twenty-four and there is a great deal of time, which is what everybody thinks at twenty-four, and which is occasionally true.',
          },
        ],
        historicalNote:
          'A divergent close for a life in which the 1936 computability paper was not finished; the underlying result was reached independently by Church in the same period.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter 3 — Entry into the Profession, 1936–1938
  // -------------------------------------------------------------------------
  {
    id: 'turing-entry-opening',
    characterId: 'turing',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'A Very Large Common Room',
        locationLabel: 'Princeton',
        yearLabel: '1936',
        image: {
          setting: 'a new American mathematics building with an over-furnished common room, 1936',
          year: 1936,
          characters: ['turing'],
          mood: 'well-funded, foreign, faintly absurd',
          details: ['leather armchairs', 'a chess set nobody is using', 'a tea urn', 'high leaded windows', 'a new blackboard'],
          alt: 'Leather armchairs and a tea urn in a new, well-appointed university common room.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'The building is three years old and pretending to be four hundred. There are leather armchairs, and a tea urn, and more famous mathematicians per square yard than in the whole of England, and not one of them has heard of him.',
          },
          {
            id: 'church',
            narration:
              'His supervisor is a slow, exact man who writes everything down and never says a sentence he has not checked. It is the opposite of Alan’s temperament and it is very good for him.',
            speaker: 'CHURCH',
            dialogue: 'You are quick. Quickness is not the same as right. Show me the step you skipped, and then show me why you thought it could be skipped.',
          },
          {
            id: 'shop',
            narration:
              'In the basement there is a machine shop with a lathe in it, and he gets permission to use it in the evenings. He is winding relays for a cipher machine of his own, in America, in 1937, because he has read the newspapers and can add.',
          },
        ],
        historicalNote:
          'Turing worked at Princeton from 1936 to 1938 under Alonzo Church, and built part of an electromechanical cipher machine in the university machine shop, already anticipating war. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Profession With No Name Yet',
        yearLabel: '1936',
        image: {
          setting: 'a common room of older men in gowns with one young man at the edge of it',
          year: 1936,
          characters: ['turing'],
          mood: 'admitted, unplaced, impatient',
          details: ['a rack of pipes', 'a decanter on a tray', 'a folded newspaper', 'an unread offprint on a side table', 'firelight on panelling'],
          alt: 'A decanter and a rack of pipes in a panelled common room with an unread offprint on a side table.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'He is twenty-four and has been elected to things: a fellowship, a dining right, a chair by a fire among men who have written on the ablative and the sonnet. Somewhere in the room his own work is lying face down on a side table with the pages uncut.',
          },
          {
            id: 'nobody',
            narration:
              'There is no post anywhere in the country for what he does, because what he does has not got a name and will not have one for fifteen years. He is a mathematician who keeps talking about machinery, which reads to his elders as a young man being deliberately difficult.',
            speaker: 'A SENIOR FELLOW',
            dialogue: 'You will have to decide what you are, Turing. A pure mathematician does not go about with an oil can, and an engineer does not publish in the Proceedings.',
          },
          {
            id: 'answer',
            narration:
              'He has no intention of deciding. Everything he has done so far has come from the seam between the two, and he suspects that the seam is where the next twenty years are kept.',
          },
        ],
        historicalNote:
          'Turing was elected a fellow of King’s College in 1935. There was no established academic profession corresponding to his interests at the time; his combination of logic and machinery was unusual. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'turing-card-princeton-circle',
    characterId: 'turing',
    chapterId: 'entry',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: ['turingBletchley', 'vonneumann'],
    replacesContextCardId: 'turing-card-1938-princeton',
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'yearAtLeast', year: 1937 },
          { type: 'yearAtMost', year: 1938 },
        ],
        title: 'The Best Room in the World',
        locationLabel: 'Princeton',
        yearLabel: '1938',
        image: {
          setting: 'a seminar room of a dozen chairs with a blackboard of ordinal notation',
          year: 1938,
          characters: ['turing'],
          mood: 'rarefied, argumentative, alive',
          details: ['a blackboard of ordinal notation', 'a dozen mismatched chairs', 'a cup left on a sill', 'a thesis in a stiff folder', 'winter light'],
          alt: 'A blackboard covered in ordinal notation above a dozen mismatched seminar chairs.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'A dozen chairs, and in them, at various hours, most of the people on earth who know what an undecidable statement is. They argue the way other men play football: hard, without malice, and for far too long.',
          },
          {
            id: 'ordinals',
            narration:
              'His own problem is what to do about the gap. If no single system can prove everything true, you can bolt on the missing statement as a new axiom and start again — and again, forever, up through the ordinals. He is building a ladder out of the hole and taking careful notes on how far it does not reach.',
          },
          {
            id: 'thesis',
            narration:
              'The thesis will be read by very few people and understood by fewer, and it contains the first honest attempt anybody has made to say what a mathematician does that a machine does not.',
            speaker: 'CHURCH',
            dialogue: 'You have called it intuition and put it in a box marked oracle. That is not an answer, Mr Turing. But it is a very good name for the question.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1938-princeton' },
          { type: 'relationship', characterId: 'vonneumann', familiarity: 1, respect: 1, flag: 'princeton-logic' },
          { type: 'resources', effects: { network: 1, theory: 1 } },
        ],
        historicalNote:
          'Turing’s Princeton doctorate, "Systems of Logic Based on Ordinals" (1938), extended computability with oracle machines and iterated axiom systems. He worked among the Princeton logic community, which included von Neumann and Gödel. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1937 },
          { type: 'yearAtMost', year: 1938 },
        ],
        title: 'The Circle, at a Distance',
        yearLabel: '1938',
        image: {
          setting: 'a reading desk with foreign journals and a sheaf of airmail letters',
          year: 1938,
          characters: ['turing'],
          mood: 'connected by paper only',
          details: ['foreign journals', 'a sheaf of airmail letters', 'a library reading lamp', 'a paperknife', 'a folded map of the Atlantic'],
          alt: 'Foreign journals and a sheaf of airmail letters under a library reading lamp.',
        },
        pages: [
          {
            id: 'papers',
            narration:
              'The conversation is happening. It simply is not happening in this room. It reaches him as offprints, six weeks old, in which men he has never met answer questions he asked last year and ask three he has not thought of.',
          },
          {
            id: 'oracle',
            narration:
              'He works on it anyway, on the gap that no single system can close: pile on the missing statement, prove a little further, find a new gap. And on the odder thought underneath — that whatever a mathematician has which a machine has not, somebody will one day have to describe it or admit there is nothing there.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1938-princeton' },
          { type: 'resources', effects: { theory: 1 } },
        ],
        historicalNote:
          'A divergent version of Turing’s engagement with the Princeton logic circle, for a life that followed it only through the literature.',
      },
    ],
  },
  {
    id: 'turing-vonneumann-princeton',
    characterId: 'turing',
    chapterId: 'entry',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['turingBletchley', 'vonneumann'],
    trigger: { event: 'afterAction', priority: 92 },
    once: true,
    variants: [
      {
        id: 'human-vonneumann',
        conditions: [
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'yearAtLeast', year: 1937 },
          { type: 'yearAtMost', year: 1938 },
          { type: 'otherCharacterIsHuman', characterId: 'vonneumann' },
          { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'princeton', yearTolerance: 2 },
        ],
        title: 'An Offer on a Walk',
        locationLabel: 'Princeton',
        yearLabel: '1938',
        image: {
          setting: 'a path between American faculty houses, two men walking, spring 1938',
          year: 1938,
          characters: ['turing', 'vonneumann'],
          mood: 'brisk, flattering, complicated',
          details: ['a well-cut suit beside a shapeless jacket', 'a folded thesis', 'new-leafed trees', 'a parked car', 'a clipped lawn'],
          alt: 'Two figures walking a path between faculty houses, one in a well-cut suit and one in a shapeless jacket.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'The other man walks fast, dresses like a banker, and has read the 1936 paper twice, which puts him in a very small club. He does not compliment it. He starts using it, mid-sentence, as though it had always been there.',
          },
          {
            id: 'offer',
            narration:
              'Halfway along the path he stops talking about logic and starts talking about a salary, which in his hands is also a kind of mathematics.',
            speaker: 'VON NEUMANN',
            dialogue: 'Stay. Work with me. You have built the general machine and you are the only man in either hemisphere who knows what it is for. In England they will give you a common room and a bicycle.',
          },
          {
            id: 'decide',
            narration:
              'Behind the offer there is a newspaper on a hall table with a photograph of a crowd saluting in a European capital, and the arithmetic of what is coming, which they have both already done and neither will say aloud.',
            choices: [
              {
                id: 'home',
                label: 'Go home. Whatever is coming will need people at home',
                effects: [
                  { type: 'flag', flag: 'turing.wentHome', value: true },
                  { type: 'relationship', characterId: 'vonneumann', familiarity: 1, respect: 1, tension: 1 },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay. The work is here and so are the only readers',
                effects: [
                  { type: 'flag', flag: 'turing.stayedAbroad', value: true },
                  { type: 'relationship', characterId: 'vonneumann', familiarity: 2, respect: 2 },
                  { type: 'resources', effects: { funds: 2, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann, who had read Turing’s 1936 paper, offered him a research assistantship at Princeton in 1938; Turing declined and returned to England. Dialogue is dramatized.',
      },
      {
        id: 'npc-vonneumann',
        conditions: [
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'yearAtLeast', year: 1937 },
          { type: 'yearAtMost', year: 1938 },
          { type: 'otherCharacterIsNpc', characterId: 'vonneumann' },
        ],
        title: 'The Man Who Read It Twice',
        locationLabel: 'Princeton',
        yearLabel: '1938',
        image: {
          setting: 'a crowded seminar room where one listener has stopped taking notes',
          year: 1938,
          characters: ['turing', 'vonneumann'],
          mood: 'recognition arriving from an unexpected direction',
          details: ['an abandoned notebook', 'a chalk-dusted lectern', 'a well-cut suit among tweed', 'a jug of water', 'radiator pipes'],
          alt: 'A seminar room where one listener in a well-cut suit has set his notebook aside.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'He gives a short talk to a room that is being polite, and in the third row one man stops taking notes, which from him is a standing ovation. Afterwards he comes up and says nothing at all about the talk.',
            speaker: 'VON NEUMANN',
            dialogue: 'Your universal machine. Has anyone built one? No. Somebody will, and within ten years, and it will be a war that pays for it.',
          },
          {
            id: 'offer',
            narration:
              'An offer follows within the week — a post, a salary, the run of the place. It is the first time anyone has offered him money for the shape of his mind rather than for teaching somebody else’s syllabus.',
          },
          {
            id: 'decide',
            narration:
              'On the hall table there is a newspaper with a photograph of a crowd in a European capital, arms up, mouths open. He looks at it for a long time before answering the letter.',
            choices: [
              {
                id: 'home',
                label: 'Go home. Whatever is coming will need people at home',
                effects: [
                  { type: 'flag', flag: 'turing.wentHome', value: true },
                  { type: 'relationship', characterId: 'vonneumann', familiarity: 1, respect: 1, tension: 1 },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay. The work is here and so are the only readers',
                effects: [
                  { type: 'flag', flag: 'turing.stayedAbroad', value: true },
                  { type: 'relationship', characterId: 'vonneumann', familiarity: 2, respect: 2 },
                  { type: 'resources', effects: { funds: 2, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Von Neumann knew and admired Turing’s computability work and offered him a Princeton assistantship in 1938. Turing returned to England. Dialogue is dramatized.',
      },
      {
        id: 'absent',
        conditions: [
          { type: 'yearAtLeast', year: 1937 },
          { type: 'yearAtMost', year: 1938 },
        ],
        title: 'An Offer in an Envelope',
        yearLabel: '1938',
        image: {
          setting: 'a table with an opened foreign letter, a timetable and a newspaper folded to a photograph',
          year: 1938,
          characters: ['turing'],
          mood: 'weighing an ocean',
          details: ['an opened airmail letter', 'a sailing timetable', 'a folded newspaper', 'a cold teapot', 'a tin of pen nibs'],
          alt: 'An opened airmail letter beside a sailing timetable and a folded newspaper.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter is short and very confident and comes from a man who has read the 1936 paper twice. It offers a salary, a title, and the company of the only people alive who know what the universal machine is for.',
          },
          {
            id: 'paper',
            narration:
              'Beside it on the table is a newspaper folded to a photograph of a crowd in a European capital with their arms up. He does the arithmetic that everybody in England is doing quietly this year and getting the same answer to.',
          },
          {
            id: 'decide',
            narration:
              'A sailing takes eight days. Whatever is coming will not wait eight days, and will not care where he is standing when it starts.',
            choices: [
              {
                id: 'home',
                label: 'Go home. Whatever is coming will need people at home',
                effects: [
                  { type: 'flag', flag: 'turing.wentHome', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay. The work is here and so are the only readers',
                effects: [
                  { type: 'flag', flag: 'turing.stayedAbroad', value: true },
                  { type: 'resources', effects: { funds: 2, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A divergent version of the 1938 Princeton offer, written for a life in which the two men never shared a room.',
      },
    ],
  },
  {
    id: 'turing-breakthrough-ordinals',
    characterId: 'turing',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'turing-princeton-ordinal-logics', priority: 86 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Ladders Out of a Hole',
        yearLabel: '1938',
        image: {
          setting: 'a stiff-bound doctoral thesis on a desk beside a returned examiner’s report',
          year: 1938,
          characters: ['turing'],
          mood: 'rigorous, unfashionable, deep',
          details: ['a stiff-bound thesis', 'an examiner’s report', 'a fountain pen cap', 'a stack of ordinal diagrams', 'a lamp'],
          alt: 'A stiff-bound doctoral thesis beside a typed examiner’s report on a desk.',
        },
        pages: [
          {
            id: 'ladder',
            narration:
              'The thesis is finished and it is about the hole in the floor of mathematics. You can patch it by adding the unprovable statement as an axiom; then the patched system has a hole of its own; so you patch again, and again, up through the ordinals, forever, never arriving.',
          },
          {
            id: 'oracle',
            narration:
              'To make the argument work he invents a machine that may consult something outside itself for answers it cannot compute. He calls it an oracle and refuses to say what is in it, because that is precisely the point: everything mechanical is on this side of the line, and something that is not is on the other.',
          },
          {
            id: 'cost',
            narration:
              'Almost nobody reads it for twenty years. It cost him two years and an ocean, and it contains, buried in the notation, the first serious attempt to say what a mind has that a mechanism has not.',
          },
        ],
        historicalNote:
          '"Systems of Logic Based on Ordinals" (1938) introduced oracle machines and transfinite progressions of formal systems; it was little read at the time and became foundational later.',
      },
    ],
  },
  {
    id: 'turing-entry-closing',
    characterId: 'turing',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'home',
        conditions: [
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'choiceWas', choiceKey: 'turing-vonneumann-princeton:decide', choiceId: 'home' },
        ],
        title: 'Eight Days East',
        yearLabel: '1938',
        image: {
          setting: 'a ship’s rail at dusk with a folded newspaper under an arm',
          year: 1938,
          characters: ['turing'],
          mood: 'decided, unromantic, heading into weather',
          details: ['a ship’s rail', 'a folded newspaper', 'a wet deck', 'a lifebelt on a bracket', 'grey water'],
          alt: 'A wet ship’s deck and rail at dusk with a folded newspaper tucked under an arm.',
        },
        pages: [
          {
            id: 'sail',
            narration:
              'He sails east with two relays and a half-built cipher machine in his luggage and a doctorate that will not be worth a shilling where he is going. Everyone on the boat is reading the same newspaper and nobody is discussing it.',
          },
          {
            id: 'arrive',
            narration:
              'There is a college fellowship waiting, and a man from a government department who wants a word about ciphers, and a summer that will turn out to be the last ordinary summer for six years. He spends it running.',
          },
        ],
        historicalNote:
          'Turing returned to England in 1938, resumed his King’s College fellowship, and had already begun part-time work for the Government Code and Cypher School before war was declared.',
      },
      {
        id: 'abroad',
        conditions: [{ type: 'choiceWas', choiceKey: 'turing-vonneumann-princeton:decide', choiceId: 'stay' }],
        title: 'A Long Way From the Weather',
        yearLabel: '1938',
        image: {
          setting: 'an office with a new desk, a foreign newspaper and an unlit pipe',
          year: 1938,
          characters: ['turing'],
          mood: 'comfortable, guilty, productive',
          details: ['a new desk blotter', 'a foreign newspaper', 'an unlit pipe', 'a filing cabinet', 'a wide window on a lawn'],
          alt: 'A new desk with a blotter and a foreign newspaper beside a wide window over a lawn.',
        },
        pages: [
          {
            id: 'desk',
            narration:
              'The desk is new, the salary is generous, and the mathematics is the best he has ever had within arm’s reach. The newspapers arrive four days late and each one is worse than the last, and there is nothing whatever he can do about any of it from here.',
          },
          {
            id: 'letters',
            narration:
              'Letters come from England with cheerful sentences and gaps in the middle where something has been left out. He answers them all, at length, about logic.',
          },
        ],
        historicalNote:
          'A divergent close for a life that accepted the Princeton offer instead of returning to England before the war.',
      },
      {
        id: 'default',
        title: 'The Summer Before',
        yearLabel: '1938',
        image: {
          setting: 'a country lane in late summer with a bicycle laid in the grass',
          year: 1938,
          characters: ['turing'],
          mood: 'ordinary, doomed, golden',
          details: ['a bicycle laid in grass', 'a jam jar', 'a folded jumper', 'gnats in low sun', 'a distant church tower'],
          alt: 'A bicycle laid down in long grass beside a folded jumper in late summer light.',
        },
        pages: [
          {
            id: 'summer',
            narration:
              'It is the last ordinary summer and nobody knows quite how ordinary it is. He runs in the evenings, eats badly, and spends three weeks on a problem in number theory that nobody has asked about.',
          },
          {
            id: 'word',
            narration:
              'Then a man from a department that does not have a name comes to talk to him about ciphers, and asks whether he would be prepared to make himself available, and does not say for what.',
          },
        ],
        historicalNote:
          'Turing was approached by the Government Code and Cypher School before the outbreak of war and reported for duty in September 1939.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter 4 — Breakthrough, 1939–1945
  // -------------------------------------------------------------------------
  {
    id: 'turing-breakthrough-opening',
    characterId: 'turing',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'bletchley',
        conditions: [{ type: 'locationIs', locationId: 'bletchleyPark' }],
        title: 'The Day After',
        locationLabel: 'Bletchley Park',
        yearLabel: '1939',
        image: {
          setting: 'a Victorian country house with wooden huts going up on the lawn, September 1939',
          year: 1939,
          characters: ['turing'],
          mood: 'improvised, urgent, oddly domestic',
          details: ['half-built wooden huts', 'a gravel drive', 'a stack of trestle tables', 'blackout paper', 'a tennis court gone to seed'],
          alt: 'Half-built wooden huts on the lawn of a Victorian country house beside a gravel drive.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'He reports the day after the declaration, to a country house with an ugly conservatory and wooden huts going up on the lawn. There is a tennis court going to seed and a stack of trestle tables in the hall and a war on.',
          },
          {
            id: 'problem',
            narration:
              'The problem is a machine with rotating wheels that scrambles a message differently for every letter, and whose settings change at midnight. The number of settings is a number with more digits than there are seconds in a life.',
            speaker: 'A SENIOR MAN',
            dialogue: 'We do not need every message. We need enough of them, before midnight, every night, for as long as this goes on.',
          },
          {
            id: 'insight',
            narration:
              'And within a fortnight he has the shape of it. You do not search for the right setting. You guess a fragment of the plain text, chain the consequences until they contradict themselves, and let a machine do the contradicting — thousands of times a minute, all night, without once wondering why.',
          },
          {
            id: 'choice',
            narration:
              'There are three men’s work here and one of him. He can be the man who designs the machine, or the man who does the mathematics of the odds, or the man who runs the hut and gets the others what they need.',
            choices: [
              {
                id: 'machine',
                label: 'Design the machine. Nothing else scales',
                effects: [
                  { type: 'flag', flag: 'turing.buildTheMachine', value: true },
                  { type: 'resources', effects: { engineering: 1, computation: 1 } },
                ],
              },
              {
                id: 'statistics',
                label: 'Do the mathematics of the odds. That is where the leverage is',
                effects: [
                  { type: 'flag', flag: 'turing.oddsFirst', value: true },
                  { type: 'resources', effects: { theory: 1, computation: 1 } },
                ],
              },
              {
                id: 'people',
                label: 'Run the hut. Get the others what they need',
                effects: [
                  { type: 'flag', flag: 'turing.ranTheHut', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { network: 2, standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Turing reported to the Government Code and Cypher School at Bletchley Park in September 1939 and led the mathematical attack on naval Enigma from Hut 8. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Word About Ciphers',
        yearLabel: '1939',
        image: {
          setting: 'a blacked-out room with a single lamp and an official envelope on the table',
          year: 1939,
          characters: ['turing'],
          mood: 'sudden, unglamorous, decisive',
          details: ['blackout paper on a window', 'an official buff envelope', 'a ration card', 'a single lamp', 'a wireless set'],
          alt: 'An official buff envelope on a table under a single lamp in a blacked-out room.',
        },
        pages: [
          {
            id: 'declared',
            narration:
              'The declaration comes over the wireless on a Sunday morning and everyone in the room listens standing up, which nobody has arranged. Afterwards there is nothing to do, so people go and put paper over their windows.',
          },
          {
            id: 'envelope',
            narration:
              'The buff envelope arrives a few days later. It does not say where, or what, or for how long. It says that a mathematician might be of use and asks him to hold himself in readiness.',
            speaker: 'A MAN FROM A DEPARTMENT',
            dialogue: 'You will not be able to tell anyone. Not your mother, not afterwards, not in thirty years. Say yes now or say no now.',
          },
          {
            id: 'choice',
            narration:
              'Whatever he does with the next six years will be done behind a door, without a byline, in a hurry. The only decision left is which part of the problem to make his own.',
            choices: [
              {
                id: 'machine',
                label: 'Design the machine. Nothing else scales',
                effects: [
                  { type: 'flag', flag: 'turing.buildTheMachine', value: true },
                  { type: 'resources', effects: { engineering: 1, computation: 1 } },
                ],
              },
              {
                id: 'statistics',
                label: 'Do the mathematics of the odds. That is where the leverage is',
                effects: [
                  { type: 'flag', flag: 'turing.oddsFirst', value: true },
                  { type: 'resources', effects: { theory: 1, computation: 1 } },
                ],
              },
              {
                id: 'people',
                label: 'Run the hut. Get the others what they need',
                effects: [
                  { type: 'flag', flag: 'turing.ranTheHut', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { network: 2, standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Wartime codebreaking work was covered by the Official Secrets Act and remained classified for decades. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'turing-card-bletchley',
    characterId: 'turing',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'turing-card-1939-bletchley',
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    variants: [
      {
        id: 'bletchley',
        conditions: [
          { type: 'locationIs', locationId: 'bletchleyPark' },
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1944 },
        ],
        title: 'Hut Eight',
        locationLabel: 'Bletchley Park',
        yearLabel: '1940–1944',
        image: {
          setting: 'the interior of a wooden hut at night, trestle tables, blackout, paper everywhere',
          year: 1941,
          characters: ['turing'],
          mood: 'exhausted, exact, unrelenting',
          details: ['trestle tables', 'blackout frames', 'a tin mug chained to a radiator', 'sheets of punched card', 'a paraffin heater'],
          alt: 'Trestle tables covered in paper inside a blacked-out wooden hut, a tin mug chained to a radiator.',
        },
        pages: [
          {
            id: 'hut',
            narration:
              'The hut is cold at one end and unbearable at the other and smells of paraffin and wet wool. His mug is chained to the radiator because mugs go missing, and the chain has a small padlock, and nobody has ever asked him about it twice.',
          },
          {
            id: 'midnight',
            narration:
              'At midnight the settings change and everything they have learned that day becomes worthless in the same second. Then it begins again. Somewhere out in the Atlantic there are convoys, and every hour of delay in this hut is measured in ships.',
          },
          {
            id: 'weight',
            narration:
              'Nobody says that part aloud. The rule of the place is that you do the piece in front of you and you do not add it up.',
            speaker: 'ALAN',
            dialogue: 'Do not tell me what it is for tonight. Tell me at the end of the war, if we are still here, and I will decide then how to feel about it.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1939-bletchley' },
          { type: 'flag', flag: 'turing.hutEight', value: true },
          { type: 'resources', effects: { standing: 1, exposure: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Turing led Hut 8, the section attacking German naval Enigma, from 1939. He is reported to have chained his mug to a radiator. The results of the work were classified for decades. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1944 },
        ],
        title: 'The War Finds Him Anyway',
        yearLabel: '1940–1944',
        image: {
          setting: 'a blacked-out room with an official file, a wireless and a shaded lamp',
          year: 1941,
          characters: ['turing'],
          mood: 'shut in, useful, uncredited',
          details: ['a buff file tied with tape', 'a shaded lamp', 'a wireless set', 'a ration book', 'taped window glass'],
          alt: 'A buff file tied with tape beside a wireless set under a shaded lamp.',
        },
        pages: [
          {
            id: 'work',
            narration:
              'War does not ask what you were working on. It arrives, takes the useful part of you, files it under a number, and hands the rest back at the end without an explanation.',
          },
          {
            id: 'silence',
            narration:
              'He signs the same Act everybody signs. Whatever he does for the next six years he may not describe to his mother, or to a committee, or to anyone deciding later what he was worth.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1939-bletchley' },
          { type: 'resources', effects: { exposure: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'British wartime cryptanalysis was covered by the Official Secrets Act; participants could not describe their work for decades afterwards. This variant follows a life the war reached elsewhere.',
      },
    ],
  },
  {
    id: 'turing-welchman-hut',
    characterId: 'turing',
    chapterId: 'breakthrough',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 88 },
    once: true,
    variants: [
      {
        id: 'bletchley',
        conditions: [
          { type: 'locationIs', locationId: 'bletchleyPark' },
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1944 },
        ],
        title: 'The Improvement',
        locationLabel: 'Bletchley Park',
        yearLabel: 'c. 1940',
        image: {
          setting: 'a workshop bench with a wiring diagram spread over it and two mugs',
          year: 1940,
          characters: ['turing'],
          mood: 'collegial, fast, unsentimental',
          details: ['a large wiring diagram', 'two enamel mugs', 'coils of coloured wire', 'a soldering iron', 'a drum of rotor contacts'],
          alt: 'A large wiring diagram spread across a workshop bench beside two enamel mugs.',
        },
        pages: [
          {
            id: 'diagram',
            narration:
              'The diagram covers the bench and hangs off both ends. His machine works; it is simply slower than the war. Then another mathematician puts a finger on one corner of it and adds a set of connections that were not there.',
            speaker: 'WELCHMAN',
            dialogue: 'Feed the contradictions back on themselves. If a wiring is wrong, it should be able to say so twice as fast, and it should say so about its neighbours too.',
          },
          {
            id: 'reaction',
            narration:
              'Alan looks at it for perhaps forty seconds, which for him is a very long time, and then says the improvement is better than anything he would have thought of and asks why nobody did it in August. It is not a graceful compliment. It is the only kind he gives.',
          },
          {
            id: 'after',
            narration:
              'The machines are built with the addition. What was going to take a week now takes a night, and a night is the difference between a warning and a report.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.welchman', value: true },
          { type: 'resources', effects: { engineering: 1, network: 1 } },
        ],
        historicalNote:
          'Gordon Welchman’s diagonal board substantially increased the efficiency of Turing’s Bombe design. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1944 },
        ],
        title: 'Nobody to Hand It To',
        yearLabel: 'c. 1940',
        image: {
          setting: 'a desk with a large wiring diagram, one mug, and no second chair',
          year: 1940,
          characters: ['turing'],
          mood: 'capable, alone, slightly slower',
          details: ['a large wiring diagram', 'one enamel mug', 'a bare second chair', 'a pencil compass', 'a shaded lamp'],
          alt: 'A large wiring diagram on a desk with a single mug and an empty second chair.',
        },
        pages: [
          {
            id: 'alone',
            narration:
              'The method is sound. He can see, quite clearly, that there is a place in it where it ought to be twice as fast, and he cannot see how, and there is nobody within a hundred miles cleared to be told the question.',
          },
          {
            id: 'lesson',
            narration:
              'He leaves the diagram out for four days in case looking at it sideways helps. It does not. This is the thing nobody warns a solitary man about: some improvements are not deeper, only other, and can only be handed to you by somebody standing in a different place.',
          },
        ],
        historicalNote:
          'A divergent version of the Bombe’s development, for a life without the collaborator who supplied its key improvement.',
      },
    ],
  },
  {
    id: 'turing-joan',
    characterId: 'turing',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 82 },
    once: true,
    variants: [
      {
        id: 'close',
        conditions: [
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 },
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1944 },
        ],
        title: 'Honest, and Not Enough',
        yearLabel: 'c. 1941',
        image: {
          setting: 'a lane outside a wartime hut at dusk, two bicycles leaning together',
          year: 1941,
          characters: ['turing'],
          mood: 'tender, truthful, sad',
          details: ['two bicycles leaning together', 'a hedgerow in late light', 'a knitted scarf', 'a paper bag of apples', 'a shaded torch'],
          alt: 'Two bicycles leaning together against a hedgerow in the last light of the day.',
        },
        pages: [
          {
            id: 'colleague',
            narration:
              'She is one of the very few in the place who can follow him at speed and tell him when he is wrong without dressing it up. They cycle back together, argue about chess problems, and are, for a while, unmistakably happy.',
          },
          {
            id: 'ask',
            narration:
              'He asks her to marry him in the ordinary way and she says yes in the ordinary way, and then a week later he tells her the truth about himself, because the alternative would be a lie that lasted forty years.',
            speaker: 'ALAN',
            dialogue: 'I would rather you knew it from me now than found it out later and had to be kind about it.',
          },
          {
            id: 'end',
            narration:
              'They stay friends. He breaks it off himself, in the end, and is careful about how, and neither of them says anything unkind about the other for the rest of their lives.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.engagement', value: true },
          { type: 'resources', effects: { network: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Turing became engaged to a fellow Bletchley cryptanalyst in 1941, told her that he was homosexual, and ended the engagement himself; they remained on good terms. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1944 },
        ],
        title: 'The Shape of a Working Life',
        yearLabel: 'c. 1941',
        image: {
          setting: 'a shared canteen table late at night with two plates and a chess set',
          year: 1941,
          characters: ['turing'],
          mood: 'companionable, tired, guarded',
          details: ['two plates pushed aside', 'a small travelling chess set', 'a tea urn', 'a blackout blind', 'a rota pinned to a wall'],
          alt: 'A small travelling chess set on a canteen table beside two pushed-aside plates.',
        },
        pages: [
          {
            id: 'canteen',
            narration:
              'The friendships here are made of shifts. You share a table at two in the morning with somebody who understands the only thing you are allowed to talk about, and that turns out to be a great deal more than most people get.',
          },
          {
            id: 'private',
            narration:
              'Outside the fence there is a life he does not discuss, and a law about it, and a habit of carefulness that has been growing in him since he was fifteen. Inside the fence there is work. He is better at the second than at protecting the first.',
          },
        ],
        effects: [{ type: 'resources', effects: { network: 1 } }],
        historicalNote:
          'Homosexual acts between men were criminal offences in Britain throughout Turing’s life, requiring lifelong concealment.',
      },
    ],
  },
  {
    id: 'turing-silver',
    characterId: 'turing',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'poor',
        conditions: [
          { not: { type: 'resourceAtLeast', resource: 'funds', value: 4 } },
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1944 },
        ],
        title: 'Two Ingots and a Pram',
        yearLabel: 'c. 1940',
        image: {
          setting: 'a wood at the edge of a village with a spade and an old pram',
          year: 1940,
          characters: ['turing'],
          mood: 'absurd, methodical, secretive',
          details: ['an old pram', 'a spade', 'a folded bearing sketch', 'bluebell leaves', 'a bridge over a stream'],
          alt: 'An old pram and a spade at the edge of a wood in spring.',
        },
        pages: [
          {
            id: 'plan',
            narration:
              'He has decided that money will be worthless if the invasion comes, so he converts his savings into two bars of silver and pushes them into a wood in a borrowed pram, which is the least suspicious thing he can think of and is in fact the most.',
          },
          {
            id: 'bury',
            narration:
              'He buries them, takes bearings from a bridge and a tree, encrypts the bearings, and hides the encrypted note somewhere else. It is, he thinks, quite a neat little system.',
          },
          {
            id: 'after',
            narration:
              'After the war he goes back with a metal detector he has partly built himself, digs several holes, finds nothing, and gets stung by nettles. The silver is presumably still there. He is not, on the whole, sorry.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.silver', value: true },
          { type: 'resources', effects: { funds: -1, wellbeing: 1 } },
        ],
        historicalNote:
          'Turing converted savings into silver bars and buried them in woodland during the war as a hedge against invasion; he was never able to recover them.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1944 },
        ],
        title: 'A Gas Mask in June',
        yearLabel: 'c. 1940',
        image: {
          setting: 'a country lane in summer with a bicycle and a service gas mask hanging from the handlebars',
          year: 1941,
          characters: ['turing'],
          mood: 'eccentric, practical, unbothered',
          details: ['a service gas mask', 'a heavy bicycle', 'a hedgerow in flower', 'a bicycle chain in a rag', 'a paper bag'],
          alt: 'A service gas mask hanging from the handlebars of a bicycle in a flowering summer lane.',
        },
        pages: [
          {
            id: 'mask',
            narration:
              'He cycles to work in a gas mask, not because of gas but because of pollen, and the sentries have stopped remarking on it. His bicycle chain comes off at a fixed number of turns, so he counts the turns and lifts it back on before it happens.',
          },
          {
            id: 'why',
            narration:
              'Somebody suggests he get the bicycle mended. He explains, with genuine enthusiasm, that a fault you understand exactly is better than a repair you have to trust. The other man says that is the maddest sentence he has heard all week, and goes back inside.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote:
          'Turing wore a service gas mask while cycling to relieve hay fever and preferred to count the revolutions of his faulty bicycle chain rather than have it repaired; both are reported in the Bletchley Park record.',
      },
    ],
  },
  {
    id: 'turing-breakthrough-bombe',
    characterId: 'turing',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'turing-enigma-bombe', priority: 90 },
    once: true,
    variants: [
      {
        id: 'machine-choice',
        conditions: [{ type: 'choiceWas', choiceKey: 'turing-breakthrough-opening:choice', choiceId: 'machine' }],
        title: 'The Machine That Says No',
        yearLabel: '1940',
        image: {
          setting: 'a tall cabinet of rotating drums in a wooden hut, mid-run',
          year: 1940,
          characters: ['turing'],
          mood: 'noise, oil, relief',
          details: ['rows of rotating drums', 'a bank of plugged cables', 'an oil can', 'a stopwatch', 'a chalked run number'],
          alt: 'A tall cabinet of rotating drums and plugged cables running in a wooden hut.',
        },
        pages: [
          {
            id: 'run',
            narration:
              'It stands as tall as a man and makes a noise like a room full of knitting. It does not find the answer. It eliminates: it takes a guess about the plain text, follows the consequences round the wiring, and stops the instant they contradict each other.',
          },
          {
            id: 'stop',
            narration:
              'A drum halts. A girl reads off a setting, a second machine tests it, and a message that was noise at eight o’clock is German by nine. He watches the first successful stop with his hands in his pockets and says nothing at all.',
            speaker: 'ALAN',
            dialogue: 'It has no idea what it has just done. That is the whole trick. It never needs to know.',
          },
          {
            id: 'cost',
            narration:
              'They build more of them, then hundreds. He may not say one word about any of it for the rest of his life, and the machines will be broken up for scrap when it is over, on orders, so that no trace remains.',
          },
        ],
        historicalNote:
          'The Bombe, designed by Turing and improved by Welchman, tested Enigma settings by finding logical contradictions rather than by exhaustive search. Most Bombes were dismantled after the war and the work remained secret for decades. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Contradiction, at Speed',
        yearLabel: '1940',
        image: {
          setting: 'a wooden hut at night with a tall drum cabinet and a decrypted sheet on a table',
          year: 1940,
          characters: ['turing'],
          mood: 'grim satisfaction',
          details: ['a tall drum cabinet', 'a decrypted sheet', 'a shaded bulb', 'a stopwatch', 'a tin of oil'],
          alt: 'A decrypted sheet on a table beside a tall cabinet of drums under a shaded bulb.',
        },
        pages: [
          {
            id: 'method',
            narration:
              'The method is not cleverness, it is stubbornness made of metal. Guess a phrase that is almost certainly in the message — a weather report, a formal greeting — and let the machine chase the consequences until they cross their own path.',
          },
          {
            id: 'first',
            narration:
              'The first night it works, a message comes out of the drums that was noise an hour ago. Somebody at the far end of a table starts translating and stops making conversation.',
          },
          {
            id: 'silence',
            narration:
              'There is no announcement and no paper. There will not be one for thirty years. He goes outside into the blackout, where the sky over the huts is thick with stars because there is not a lit window anywhere in England.',
          },
        ],
        historicalNote:
          'The Bombe’s use of cribs and logical contradiction to eliminate Enigma settings is documented; the entire effort was classified and unpublished for decades.',
      },
    ],
  },
  {
    id: 'turing-breakthrough-banburismus',
    characterId: 'turing',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'turing-banburismus', priority: 86 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Weight of Evidence',
        yearLabel: '1941',
        image: {
          setting: 'long printed card sheets pinned over each other on a lit table',
          year: 1941,
          characters: ['turing'],
          mood: 'quiet arithmetic against a clock',
          details: ['long punched card sheets', 'a pin cushion', 'a hand-ruled scoring table', 'a lit glass table top', 'a stub of pencil'],
          alt: 'Long punched card sheets pinned over one another on a lit glass table.',
        },
        pages: [
          {
            id: 'sheets',
            narration:
              'The sheets are printed in a town up the road and long enough to hang off the table. You lay one over another, slide them along, and count where the holes agree more often than chance would allow.',
          },
          {
            id: 'units',
            narration:
              'He gives the agreement a number, and the number a name, and works out how to add such numbers together so that a hundred weak hints become one strong conclusion. Nobody has done arithmetic quite like this before; there is a war on, so nobody publishes it.',
          },
          {
            id: 'use',
            narration:
              'What it buys is the thing they never have enough of: it cuts the machine runs down to what the night can hold. Twenty years later mathematicians will reinvent most of it in the open and give it other names.',
          },
        ],
        historicalNote:
          'Banburismus was Turing’s sequential statistical method for narrowing naval Enigma rotor settings, using log-odds scoring related to later Bayesian sequential analysis. It was classified and unpublished.',
      },
    ],
  },
  {
    id: 'turing-breakthrough-closing',
    characterId: 'turing',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'both',
        conditions: [
          { type: 'completedProjectCountAtLeast', projectIds: ['turing-enigma-bombe', 'turing-banburismus'], count: 2 },
        ],
        title: 'Action This Day',
        yearLabel: '1945',
        image: {
          setting: 'an empty wooden hut with stripped tables and a stack of files tied for destruction',
          year: 1945,
          characters: ['turing'],
          mood: 'ending, unrecorded, hollow',
          details: ['stripped trestle tables', 'files tied with tape', 'an empty drum cabinet frame', 'a stopped clock', 'daylight through an open door'],
          alt: 'Stripped trestle tables and tied bundles of files in an emptied wooden hut, the door standing open.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The one time he goes over everybody’s head, it is not about credit. He and three others write straight to the Prime Minister to say they have the method and not the typists, not the machines, not the parts — and the answer comes back within the day, in red, ordering that they be given everything they ask for.',
          },
          {
            id: 'end',
            narration:
              'And then it is over, and the huts are stripped, and the machines are broken up, and every man and woman in them is told that they were never here. He walks out through a door he will not be allowed to describe for thirty years, with an idea in his head about what these machines could do if they were not being used to count contradictions.',
          },
        ],
        historicalNote:
          'In 1941 Turing and three colleagues wrote directly to Winston Churchill requesting resources for the codebreaking effort; Churchill ordered that it be given priority. Bletchley Park’s work remained secret until the 1970s.',
      },
      {
        id: 'bombe',
        conditions: [{ type: 'projectCompleted', projectId: 'turing-enigma-bombe' }],
        title: 'Scrap and Silence',
        yearLabel: '1945',
        image: {
          setting: 'a yard where machine cabinets are being dismantled into crates',
          year: 1945,
          characters: ['turing'],
          mood: 'orderly erasure',
          details: ['dismantled cabinets', 'packing crates', 'a clipboard inventory', 'coils of removed wire', 'rain on gravel'],
          alt: 'Machine cabinets being dismantled into packing crates in a wet yard.',
        },
        pages: [
          {
            id: 'scrap',
            narration:
              'The machines come apart faster than they went together. There is an inventory, and a signature, and a lorry, and by the end of the month the most advanced calculating engines in the world are wire and scrap and a line in a ledger.',
          },
          {
            id: 'keep',
            narration:
              'What he keeps is not equipment. It is six years of knowing, in his hands rather than on paper, exactly how fast a machine can be made to follow a rule — and the certainty, which nobody else in England quite shares yet, that the next one should be told what to do in its own memory.',
          },
        ],
        historicalNote:
          'Most Bombes were dismantled at the end of the war and the work was not publicly acknowledged for decades.',
      },
      {
        id: 'default',
        title: 'Six Years With No Paper Trail',
        yearLabel: '1945',
        image: {
          setting: 'a demobilisation office corridor with a queue of coats and a stamped form',
          year: 1945,
          characters: ['turing'],
          mood: 'flat, tired, unresolved',
          details: ['a stamped release form', 'a queue of overcoats', 'a wooden counter', 'a rubber stamp', 'a poster peeling at one corner'],
          alt: 'A stamped release form on a wooden counter in a corridor lined with waiting overcoats.',
        },
        pages: [
          {
            id: 'out',
            narration:
              'The war ends the way it began for him: with a form. Six years, a signature, and a piece of paper that says nothing about what he did with them, because there is nothing that may be said.',
          },
          {
            id: 'after',
            narration:
              'Everybody around him is going back to something. He has nothing to go back to and one thing to go towards, which he has been drawing in his head for two years and has not yet put on paper: a single machine, general, that holds the orders it obeys in the same store as the numbers it works on.',
          },
        ],
        historicalNote:
          'Wartime secrecy meant participants left with no public record of their work. Turing’s stored-program computer design followed immediately after the war.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter 5 — Crisis and Responsibility, 1945–1948
  // -------------------------------------------------------------------------
  {
    id: 'turing-crisis-opening',
    characterId: 'turing',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'teddington',
        conditions: [{ type: 'locationIs', locationId: 'teddington' }],
        title: 'A Building Full of Standards',
        locationLabel: 'Teddington',
        yearLabel: '1945',
        image: {
          setting: 'a national laboratory corridor of measurement rooms in 1945',
          year: 1945,
          characters: ['turing'],
          mood: 'careful, slow, institutional',
          details: ['a brass standard weight under glass', 'a corridor of numbered doors', 'a duplicated memorandum', 'a tea trolley', 'a barometer'],
          alt: 'A brass standard weight under a glass case in a corridor of numbered laboratory doors.',
        },
        pages: [
          {
            id: 'place',
            narration:
              'The laboratory measures things for the nation: weights, lengths, the exact value of a second. It is a building where being right slowly is a virtue, and he has arrived from six years where being right by midnight was the only virtue there was.',
          },
          {
            id: 'report',
            narration:
              'He writes the whole design in a few months. Not a sketch — an engine, described down to the arithmetic units and the storage and the way it will be told what to do, and with its programme held in the store alongside the figures, so that it can rewrite its own orders while it runs.',
            speaker: 'A DIVISION HEAD',
            dialogue: 'It is a remarkable document, Dr Turing. Now. Which section of this establishment do you propose should build it?',
          },
          {
            id: 'choice',
            narration:
              'That is the question and there is no answer to it here. There are no electronics engineers on the establishment, no valves in the store, and a committee that meets monthly.',
            choices: [
              {
                id: 'fight',
                label: 'Stay and fight the committee for the engineers',
                effects: [
                  { type: 'flag', flag: 'turing.foughtCommittee', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'build',
                label: 'Get into the workshop and build a piece of it yourself',
                effects: [
                  { type: 'flag', flag: 'turing.builtItHimself', value: true },
                  { type: 'resources', effects: { engineering: 1, standing: -1 } },
                ],
              },
              {
                id: 'leave',
                label: 'Take a year away and think about minds instead',
                effects: [
                  { type: 'flag', flag: 'turing.sabbatical', value: true },
                  { type: 'theme', theme: 'mindVsMachine', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, standing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Turing joined the National Physical Laboratory in 1945 and produced a detailed design for the Automatic Computing Engine in early 1946. Construction was delayed by the laboratory’s limited electronics capacity; he later took a sabbatical year at Cambridge. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Thing He Has Been Drawing',
        yearLabel: '1945',
        image: {
          setting: 'a rented room with a large sheet of paper covered in a machine’s block diagram',
          year: 1945,
          characters: ['turing'],
          mood: 'impatient, precise, ahead of everybody',
          details: ['a large block diagram', 'a slide rule', 'a mug ring on paper', 'a coil of solder', 'a single bar fire'],
          alt: 'A large hand-drawn block diagram of a machine spread across a table beside a slide rule.',
        },
        pages: [
          {
            id: 'drawing',
            narration:
              'He has been drawing it since the middle of the war, on the back of things, in his head on runs. One machine, general purpose, with its instructions kept in the same memory as its numbers so that it can be told to be anything at all.',
          },
          {
            id: 'nobody',
            narration:
              'The obstacle is not the idea. The obstacle is that no such thing exists, the men who could build it are being demobilised into other work, and everyone with the authority to fund it thinks a computing machine is a very fast adding machine for ballistics tables.',
            speaker: 'ALAN',
            dialogue: 'It is not a calculator with ambitions. It is the same device I described on paper in 1936, and it can be made of valves, and it will do anything you can say precisely.',
          },
          {
            id: 'choice',
            narration:
              'Three years, then, and a decision about how to spend them, because the design is finished in his head and finishing it in the world is somebody’s job and there is no queue.',
            choices: [
              {
                id: 'fight',
                label: 'Stay and fight the committee for the engineers',
                effects: [
                  { type: 'flag', flag: 'turing.foughtCommittee', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'build',
                label: 'Get into the workshop and build a piece of it yourself',
                effects: [
                  { type: 'flag', flag: 'turing.builtItHimself', value: true },
                  { type: 'resources', effects: { engineering: 1, standing: -1 } },
                ],
              },
              {
                id: 'leave',
                label: 'Take a year away and think about minds instead',
                effects: [
                  { type: 'flag', flag: 'turing.sabbatical', value: true },
                  { type: 'theme', theme: 'mindVsMachine', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, standing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Turing’s postwar stored-program design derived directly from his 1936 universal machine. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'turing-card-ace',
    characterId: 'turing',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'turing-card-1946-ace',
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    variants: [
      {
        id: 'teddington',
        conditions: [
          { type: 'locationIs', locationId: 'teddington' },
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1948 },
        ],
        title: 'Complete, and Not Being Built',
        locationLabel: 'Teddington',
        yearLabel: '1946–1948',
        image: {
          setting: 'a committee room with a thick typed proposal on the table and most chairs empty',
          year: 1947,
          characters: ['turing'],
          mood: 'frustration held in a polite room',
          details: ['a thick duplicated proposal', 'a carafe of water', 'mostly empty chairs', 'a minute book', 'rain on tall windows'],
          alt: 'A thick duplicated proposal lying on a committee table among mostly empty chairs.',
        },
        pages: [
          {
            id: 'proposal',
            narration:
              'The proposal is on the table and it is the most complete description of an electronic computer anyone in the country has written: storage, instruction format, the arithmetic, even how a programmer would think about it. It has been on that table, in one form or another, for two years.',
          },
          {
            id: 'delay',
            narration:
              'The objections are never to the machine. They are to the establishment plan, the electronics section that does not exist, the priority of another project, and the fact that a working model would need somebody senior to sign for the valves.',
            speaker: 'A COMMITTEE MEMBER',
            dialogue: 'Nobody doubts the design. We are asking whether this is the right year, and whether it is properly our sort of work.',
          },
          {
            id: 'clock',
            narration:
              'Meanwhile, in a laboratory in the north with a workshop and four engineers in it, something far smaller and far cruder is being soldered together, and it will hold its own instructions in its own memory, and it will run before this committee next meets, and it will not be his.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1946-ace' },
          { type: 'flag', flag: 'turing.aceDelayed', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Turing’s 1946 ACE report was unusually complete for its date, but the National Physical Laboratory lacked the engineering capacity to build it quickly; a reduced Pilot ACE ran only in 1950, after he had left. The Manchester "Baby" ran the first stored program in 1948. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1948 },
        ],
        title: 'The Design Ages in a Drawer',
        yearLabel: '1946–1948',
        image: {
          setting: 'a drawer of duplicated typescript with a rubber band gone brittle',
          year: 1947,
          characters: ['turing'],
          mood: 'stalled, patient, corrosive',
          details: ['a duplicated typescript', 'a perished rubber band', 'a drawer runner', 'a carbon copy gone grey', 'a dry inkpot'],
          alt: 'A duplicated typescript in a drawer, bound with a rubber band gone brittle.',
        },
        pages: [
          {
            id: 'drawer',
            narration:
              'The design is finished and correct and in a drawer, which is a state that will be very familiar to anyone who has ever been three years early. Every few months he takes it out, improves the instruction format, and puts it back.',
          },
          {
            id: 'others',
            narration:
              'Elsewhere, in laboratories with engineers and budgets, smaller and cruder machines are being welded together out of surplus valves. They are worse designs. They will be first, and being first is the only part of this that anyone will remember.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1946-ace' },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Turing’s complete stored-program design was delayed for years by engineering and institutional constraints while cruder machines were built elsewhere.',
      },
    ],
  },
  {
    id: 'turing-running',
    characterId: 'turing',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 84 },
    once: true,
    variants: [
      {
        id: 'strong',
        conditions: [
          { type: 'resourceAtLeast', resource: 'health', value: 6 },
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1948 },
        ],
        title: 'Two Hours Forty-Six',
        yearLabel: '1947',
        image: {
          setting: 'a suburban road at the end of a long race, a club vest and a stopwatch',
          year: 1947,
          characters: ['turing'],
          mood: 'physical, honest, uncomplicated',
          details: ['a numbered club vest', 'a stopwatch on a lanyard', 'a folded towel', 'a bottle of water', 'a chalked finish line'],
          alt: 'A numbered club vest and a stopwatch on a lanyard beside a folded towel at a roadside finish.',
        },
        pages: [
          {
            id: 'race',
            narration:
              'He runs the distance in two hours and forty-six minutes, which is within a quarter of an hour of the men who will run for Britain at the next Olympics, and he has done it on club training and a diet of whatever there is.',
          },
          {
            id: 'why',
            narration:
              'Somebody at the laboratory asks why a man of his abilities punishes himself like that on a Saturday. He does not find the question difficult.',
            speaker: 'ALAN',
            dialogue: 'I have such a stressful job that the only way I can get it out of my mind is by running hard. And a mile is not a committee. It either takes you four minutes or it does not.',
          },
          {
            id: 'body',
            narration:
              'He runs to meetings sometimes, forty miles, arriving in shorts with the papers in a knapsack, and the men in suits find this funnier than he does. The body is the one machine he has never had to argue with anybody about.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.running', value: true },
          { type: 'resources', effects: { wellbeing: 2, health: 1 } },
        ],
        historicalNote:
          'Turing was a serious marathon runner, recording about 2 hours 46 minutes in 1947 — close to Olympic qualifying standard — and sometimes ran long distances to meetings. His remark that running was the only way to get a stressful job out of his mind is reported in the record; the wording here follows it closely and the rest of the exchange is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1948 },
        ],
        title: 'Miles Instead of Sleep',
        yearLabel: '1947',
        image: {
          setting: 'a dark suburban towpath before dawn with one runner’s breath in the cold',
          year: 1947,
          characters: ['turing'],
          mood: 'grinding, solitary, necessary',
          details: ['frost on a towpath', 'a plimsoll with a split seam', 'breath in cold air', 'a gas lamp on a bridge', 'a shut lock gate'],
          alt: 'A frosted towpath and a shut lock gate under a bridge lamp before dawn.',
        },
        pages: [
          {
            id: 'dark',
            narration:
              'He runs in the dark before the laboratory opens because the alternative is lying awake composing memoranda to men who will not read them. His shoes are splitting and he has not replaced them.',
          },
          {
            id: 'after',
            narration:
              'It works for the length of the run and about an hour afterwards. Then the day begins, and somewhere in it there is a meeting at which the machine he designed will be deferred again for reasons that are all perfectly reasonable.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1, health: -1 } }],
        historicalNote:
          'Turing ran long distances throughout the postwar years, describing it as relief from the stress of his work.',
      },
    ],
  },
  {
    id: 'turing-breakthrough-ace',
    characterId: 'turing',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'turing-ace-design', priority: 88 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'An Engine on Paper',
        yearLabel: '1946',
        image: {
          setting: 'a desk with a completed typescript, block diagrams and a pile of instruction tables',
          year: 1946,
          characters: ['turing'],
          mood: 'complete, unbuilt, formidable',
          details: ['a bound typescript', 'block diagrams', 'tables of instruction codes', 'a mercury delay line sketch', 'a lamp burning late'],
          alt: 'A bound typescript and block diagrams beside tables of instruction codes on a lamplit desk.',
        },
        pages: [
          {
            id: 'complete',
            narration:
              'It is finished: storage, instruction codes, arithmetic, the lot, with costings. Where other men have written about what a computing machine might be, he has written what this one is, down to the number of tubes and the way a programmer will have to think.',
          },
          {
            id: 'trick',
            narration:
              'The heart of it is the thing he proved on paper ten years ago and nobody noticed. The instructions live in the same memory as the numbers. The machine can therefore be handed a description of any procedure whatever, and become it, and can be told to alter its own orders while it runs.',
          },
          {
            id: 'wait',
            narration:
              'He hands it in and waits for a workshop. There is no workshop. The document goes into the establishment’s files, where it is admired, in writing, at intervals, for years.',
          },
        ],
        historicalNote:
          'Turing’s 1946 ACE report was one of the most detailed stored-program computer designs of its era, including instruction formats and cost estimates. A reduced version ran in 1950.',
      },
    ],
  },
  {
    id: 'turing-crisis-closing',
    characterId: 'turing',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'left',
        conditions: [{ type: 'choiceWas', choiceKey: 'turing-crisis-opening:choice', choiceId: 'leave' }],
        title: 'A Year to Think About Minds',
        yearLabel: '1948',
        image: {
          setting: 'a college room with a notebook of neurological diagrams and no machine anywhere',
          year: 1948,
          characters: ['turing'],
          mood: 'restorative, strange, fertile',
          details: ['diagrams of connected nodes', 'a borrowed physiology text', 'a bicycle in a doorway', 'a tea ration tin', 'a bare desk'],
          alt: 'A notebook of hand-drawn connected nodes beside a borrowed physiology text on a bare desk.',
        },
        pages: [
          {
            id: 'year',
            narration:
              'He takes the year and spends it on the question underneath all the others: what an infant brain is, considered as a machine, and whether the way to get an intelligent one is to build it clever or to build it ignorant and teach it.',
          },
          {
            id: 'report',
            narration:
              'What he writes is unlike anything else of its decade — networks of simple units, trained rather than wired, unorganised at birth and organised by experience. The establishment files it as an internal report and does not publish it. It will be read properly in about forty years.',
          },
        ],
        historicalNote:
          'Turing spent a sabbatical year at Cambridge in 1947–48 and wrote "Intelligent Machinery", an internal NPL report describing trainable networks of simple units; it was not published in his lifetime.',
      },
      {
        id: 'built',
        conditions: [{ type: 'projectCompleted', projectId: 'turing-ace-design' }],
        title: 'Signed For and Shelved',
        yearLabel: '1948',
        image: {
          setting: 'a laboratory registry with a bound report being stamped and filed',
          year: 1948,
          characters: ['turing'],
          mood: 'anticlimax, banked fury',
          details: ['a bound report', 'a registry stamp', 'a shelf of buff files', 'a signature book', 'a wall clock'],
          alt: 'A bound report being stamped at a registry counter beside a shelf of buff files.',
        },
        pages: [
          {
            id: 'stamped',
            narration:
              'The design is signed for, registered, and shelved between a report on the calibration of thermometers and one on the fatigue of aircraft rivets. Every page of it is right. Not one valve has been ordered.',
          },
          {
            id: 'north',
            narration:
              'A letter comes from the north, from the topologist who once asked him to define the word mechanical. There is a laboratory up there with engineers in it and a machine that already runs, and no one to tell it what to do.',
          },
        ],
        historicalNote:
          'Turing left the NPL in 1948 for the University of Manchester at Max Newman’s invitation, where a working stored-program machine already existed.',
      },
      {
        id: 'default',
        title: 'Three Years, No Machine',
        yearLabel: '1948',
        image: {
          setting: 'an emptied office with a wastepaper basket of superseded drafts',
          year: 1948,
          characters: ['turing'],
          mood: 'worn down, still certain',
          details: ['a basket of superseded drafts', 'an empty desk', 'a coat on a hook', 'a hand-drawn schematic pinned to a wall', 'grey daylight'],
          alt: 'A wastepaper basket of superseded drafts beside an emptied desk and a pinned schematic.',
        },
        pages: [
          {
            id: 'tally',
            narration:
              'Three years, eleven revisions, four committees, and no machine. He is thirty-six and has spent the best engineering years of his life describing to careful men a thing they agree is excellent and will not build.',
          },
          {
            id: 'north',
            narration:
              'Then a letter from the north: a laboratory with engineers in it, a machine that already runs, and nobody who knows what to tell it. It is not his design and it is switched on, which he has come to understand is the whole of the argument.',
          },
        ],
        historicalNote:
          'Delays at the NPL led Turing to leave for Manchester in 1948, where a working machine already existed.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter 6 — Legacy, 1948–1954
  // -------------------------------------------------------------------------
  {
    id: 'turing-legacy-opening',
    characterId: 'turing',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'manchester',
        conditions: [{ type: 'locationIs', locationId: 'manchesterUK' }],
        title: 'A Machine That Is Switched On',
        locationLabel: 'Manchester',
        yearLabel: '1948',
        image: {
          setting: 'a university computing room with racks of valves, a cathode ray store and a paper tape reader',
          year: 1949,
          characters: ['turing'],
          mood: 'noisy, warm, finally real',
          details: ['racks of valves', 'a cathode ray tube store', 'punched paper tape', 'a hand-lettered operating log', 'a hot-metal smell'],
          alt: 'Racks of valves and a cathode ray tube store beside a reel of punched paper tape.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The room is hot, loud, and smells of dust burning off valves. Along one wall is a store that holds numbers as bright dots on the face of a cathode ray tube, and if you lean close you can watch a calculation happening as pattern.',
          },
          {
            id: 'told',
            narration:
              'It is not his design. It is cruder, smaller, and switched on, and he decides in about a minute that this is the trade he would have made every time. He writes the handbook for programming it, in a style that assumes the reader is intelligent, which is not universally popular.',
            speaker: 'NEWMAN',
            dialogue: 'It is running, Alan. It is ugly and it is running. Now tell it to do something nobody has ever asked a machine to do.',
          },
          {
            id: 'choice',
            narration:
              'He is thirty-six, with a machine at last and six years of things he has been saving up to ask it. The trouble is that they are not the same question and there is only one of him.',
            choices: [
              {
                id: 'minds',
                label: 'Ask whether a machine can be said to think',
                effects: [
                  { type: 'flag', flag: 'turing.chaseMinds', value: true },
                  { type: 'theme', theme: 'mindVsMachine', amount: 2 },
                  { type: 'resources', effects: { theory: 1, exposure: 1 } },
                ],
              },
              {
                id: 'patterns',
                label: 'Ask how a spot becomes a stripe: the mathematics of growth',
                effects: [
                  { type: 'flag', flag: 'turing.chasePatterns', value: true },
                  { type: 'resources', effects: { theory: 1, computation: 1 } },
                ],
              },
              {
                id: 'both',
                label: 'Refuse to choose, and be thought unserious by both camps',
                effects: [
                  { type: 'flag', flag: 'turing.chaseBoth', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Turing became deputy director of the Manchester University Computing Machine Laboratory in 1948 and wrote the programmers’ handbook for the Ferranti Mark I. He worked on machine intelligence and on mathematical biology in the same years. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'What He Has Been Saving Up',
        yearLabel: '1948',
        image: {
          setting: 'a desk with two open notebooks, one full of logic and one full of leaf shapes',
          year: 1948,
          characters: ['turing'],
          mood: 'two futures on one desk',
          details: ['a notebook of logical notation', 'a notebook of leaf and shell sketches', 'a fir cone', 'a slide rule', 'a cold pipe'],
          alt: 'Two open notebooks on a desk, one of logical notation and one of sketched leaves and shells.',
        },
        pages: [
          {
            id: 'two',
            narration:
              'There are two notebooks on the desk and they do not belong to the same man according to anybody who looks at them. One is logic. The other is full of sketched leaves, fir cones, and the arrangement of spots on an animal.',
          },
          {
            id: 'same',
            narration:
              'They are the same question. Both of them ask how something complicated can arise from a short set of rules applied over and over by something that does not understand them.',
            speaker: 'ALAN',
            dialogue: 'A brain is not magic and a daisy is not magic. Both of them are running a rule. I should like to find out which rule, and I do not much mind which one I get first.',
          },
          {
            id: 'choice',
            narration:
              'He is thirty-six, and neither subject exists yet, and there are exactly two people in the country who would call either of them work.',
            choices: [
              {
                id: 'minds',
                label: 'Ask whether a machine can be said to think',
                effects: [
                  { type: 'flag', flag: 'turing.chaseMinds', value: true },
                  { type: 'theme', theme: 'mindVsMachine', amount: 2 },
                  { type: 'resources', effects: { theory: 1, exposure: 1 } },
                ],
              },
              {
                id: 'patterns',
                label: 'Ask how a spot becomes a stripe: the mathematics of growth',
                effects: [
                  { type: 'flag', flag: 'turing.chasePatterns', value: true },
                  { type: 'resources', effects: { theory: 1, computation: 1 } },
                ],
              },
              {
                id: 'both',
                label: 'Refuse to choose, and be thought unserious by both camps',
                effects: [
                  { type: 'flag', flag: 'turing.chaseBoth', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'From 1948 Turing worked simultaneously on machine intelligence and on the mathematics of biological pattern formation. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'turing-card-imitation',
    characterId: 'turing',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'turing-card-1950-imitation-game',
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    variants: [
      {
        id: 'manchester',
        conditions: [
          { type: 'locationIs', locationId: 'manchesterUK' },
          { type: 'yearAtLeast', year: 1949 },
          { type: 'yearAtMost', year: 1951 },
        ],
        title: 'Can Machines Think?',
        locationLabel: 'Manchester',
        yearLabel: '1950',
        image: {
          setting: 'a typewriter with a philosophy journal proof beside a teleprinter',
          year: 1950,
          characters: ['turing'],
          mood: 'playful, deadly serious, unanswerable',
          details: ['a page of typed proof', 'a teleprinter', 'two closed doors', 'a folded journal wrapper', 'a cigarette burn on a desk'],
          alt: 'A page of typed proof beside a teleprinter and a folded journal wrapper.',
        },
        pages: [
          {
            id: 'question',
            narration:
              'The paper opens by asking whether machines can think and then refuses to answer it, on the grounds that nobody can say what either word means and the argument will go on forever. So he replaces the question with a test that can actually be run.',
          },
          {
            id: 'test',
            narration:
              'A judge, two closed doors, and typed conversation only. Behind one door a person; behind the other a machine. The judge may ask anything at all, for as long as he likes. If he cannot reliably tell which is which, then the question of what is going on inside is not a question anyone has a method for.',
          },
          {
            id: 'objections',
            narration:
              'He lists the objections against himself, one after another, and answers them in order — theological, mathematical, the one about machines never doing anything new — with a politeness that is much more devastating than argument.',
            speaker: 'ALAN',
            dialogue: 'We may hope that machines will eventually compete with men in all purely intellectual fields. Which to start with? Even that is a difficult decision.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1950-imitation-game' },
          { type: 'flag', flag: 'turing.imitation', value: true },
          { type: 'resources', effects: { standing: 1, exposure: 1 } },
        ],
        historicalNote:
          'Turing’s 1950 paper "Computing Machinery and Intelligence" in Mind replaced the question "can machines think?" with the imitation game, and answered nine objections in turn. The closing dialogue follows closely the passage in that paper where Turing asks which intellectual fields a machine should be set to first; it is presented as speech rather than as an exact quotation.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1949 },
          { type: 'yearAtMost', year: 1951 },
        ],
        title: 'A Test Instead of an Argument',
        yearLabel: '1950',
        image: {
          setting: 'a plain desk with a typescript titled as a question and a pot of tea gone cold',
          year: 1950,
          characters: ['turing'],
          mood: 'mischievous, rigorous, alone',
          details: ['a typescript with a question for a title', 'a cold pot of tea', 'a stack of philosophy offprints', 'a fountain pen', 'a wireless'],
          alt: 'A typescript with a question for its title lying beside a cold pot of tea.',
        },
        pages: [
          {
            id: 'trap',
            narration:
              'The word think is a trap and he refuses to walk into it. Instead: a judge, two closed doors, typed answers, and no clue but the conversation. Not a definition — a procedure, which anybody can carry out and nobody can argue with afterwards.',
          },
          {
            id: 'answer',
            narration:
              'Half the letters he gets in reply are furious and the other half have missed the point. He answers them all, patiently, because the objections are interesting and because he has been arguing this one since a boy died at his school and left him with the question.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1950-imitation-game' },
          { type: 'flag', flag: 'turing.imitation', value: true },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'The 1950 Mind paper proposed an operational test in place of a definition of thinking. This variant follows a life that wrote it away from Manchester.',
      },
    ],
  },
  {
    id: 'turing-breakthrough-intelligence',
    characterId: 'turing',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'turing-machine-intelligence', priority: 88 },
    once: true,
    variants: [
      {
        id: 'minds-chosen',
        conditions: [{ type: 'choiceWas', choiceKey: 'turing-legacy-opening:choice', choiceId: 'minds' }],
        title: 'The Child Machine',
        yearLabel: '1950',
        image: {
          setting: 'a lecture room where a diagram of a learning machine is chalked up',
          year: 1950,
          characters: ['turing'],
          mood: 'provocative, generous, unfashionable',
          details: ['a chalked learning diagram', 'a row of unconvinced faces implied by empty chairs', 'a glass of water', 'a folded journal', 'a pointer'],
          alt: 'A chalked diagram of a learning machine on a lecture room board beside a glass of water.',
        },
        pages: [
          {
            id: 'child',
            narration:
              'His proposal is not to build an adult mind. It is to build a child’s and then educate it — a machine simple at birth, with a capacity to be changed by what happens to it, put through something like a schooling and punished and rewarded like anybody else.',
          },
          {
            id: 'objection',
            narration:
              'The objection he takes most seriously is the one about machines never doing anything genuinely new. He has an answer and it is uncomfortable: that people say this because machines have always been told exactly what to do, and that nobody has yet tried building one that is allowed to be wrong.',
            speaker: 'ALAN',
            dialogue: 'If a machine is expected to be infallible, it cannot also be intelligent. There are theorems about that. I proved one of them myself.',
          },
          {
            id: 'later',
            narration:
              'The philosophers write back at length. The engineers are busy. It will be about fifty years before anybody has a machine that makes the question urgent, and by then his three-page sketch will be the shape the whole field is arguing inside.',
          },
        ],
        historicalNote:
          'Turing proposed building a "child machine" to be educated rather than a fully-formed adult intelligence, and argued that infallibility and intelligence are incompatible. The line about infallibility and intelligence follows an argument Turing made in print; the surrounding dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Fifty Years From Now',
        yearLabel: '1950',
        image: {
          setting: 'a printed journal issue lying open on a desk beside unopened correspondence',
          year: 1950,
          characters: ['turing'],
          mood: 'quiet detonation',
          details: ['an open journal issue', 'a stack of unopened letters', 'a paperknife', 'a teacup', 'a window on wet rooftops'],
          alt: 'An open printed journal issue on a desk beside a stack of unopened letters.',
        },
        pages: [
          {
            id: 'print',
            narration:
              'It comes out in a philosophy journal, of all places, and it is the least technical thing he has ever written and by some distance the most read. He guesses that in about fifty years a machine will do well enough at the test that ordinary people will stop finding the idea absurd.',
          },
          {
            id: 'reaction',
            narration:
              'The reaction is not hostility so much as embarrassment: a serious mathematician talking about machines and minds in the same breath, as though it were a proper subject. He is entirely unbothered. He has been the only person in the room before.',
          },
        ],
        historicalNote:
          'Turing predicted in 1950 that by around the year 2000 machine performance would make talk of thinking machines unremarkable.',
      },
    ],
  },
  {
    id: 'turing-prosecution',
    characterId: 'turing',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 95 },
    once: true,
    variants: [
      {
        id: 'learned-to-pass',
        conditions: [
          { type: 'narrativeFlag', flag: 'turing.learnedToPass' },
          { type: 'yearAtLeast', year: 1952 },
          { type: 'yearAtMost', year: 1954 },
        ],
        title: 'The Shape He Learned to Wear',
        yearLabel: '1952',
        image: {
          setting: 'a suburban front room after a break-in, a police notebook open on the arm of a chair',
          year: 1952,
          characters: ['turing'],
          mood: 'quiet, formal, closing in',
          details: ['a forced window catch', 'an open police notebook', 'a mantel clock', 'a raincoat over a chair', 'a cold grate'],
          alt: 'An open police notebook resting on the arm of a chair in a front room with a forced window catch.',
        },
        pages: [
          {
            id: 'burglary',
            narration:
              'The house is broken into and a few things are taken, and he does what any householder does: he reports it. He has spent thirty years learning to wear the shape they wanted, and it does not occur to him, at the counter, that the shape has a seam.',
          },
          {
            id: 'question',
            narration:
              'The constable is polite and thorough and asks how he came to know who the thief might be, and then asks it again, differently, and then writes for a while without looking up.',
            speaker: 'THE CONSTABLE',
            dialogue: 'I shall have to ask you to be exact, sir. About the nature of the acquaintance.',
          },
          {
            id: 'statement',
            narration:
              'There is a law about this, and it is a hundred years old, and it does not care what a man has done for his country because his country is not permitted to be told. He has perhaps thirty seconds to decide how to answer.',
            choices: [
              {
                id: 'plainly',
                label: 'Tell it plainly. You have never once been ashamed of it',
                effects: [
                  { type: 'flag', flag: 'turing.spokePlainly', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { exposure: 2, standing: -2 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say as little as the law allows',
                effects: [
                  { type: 'flag', flag: 'turing.saidLittle', value: true },
                  { type: 'resources', effects: { exposure: 1, standing: -1, wellbeing: -1 } },
                ],
              },
            ],
          },
          {
            id: 'court',
            narration:
              'The court is small and the reporters are local and the charge is a phrase from another century. He is convicted, and offered a choice between prison and remaining at liberty on condition that he submits to a course of medical treatment for a year, and he takes the second because there is work on his desk.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.prosecution', value: true },
          { type: 'resources', effects: { standing: -2, wellbeing: -2, exposure: 2 } },
        ],
        historicalNote:
          'After reporting a burglary at his home in 1952, Turing was charged under the Criminal Law Amendment Act 1885 with gross indecency, a criminal offence covering homosexual acts between men. He made a full statement, was convicted, and accepted probation conditional on a year of hormone treatment rather than imprisonment. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1952 },
          { type: 'yearAtMost', year: 1954 },
        ],
        title: 'A Law From Another Century',
        yearLabel: '1952',
        image: {
          setting: 'a magistrates’ court corridor with a bench, a hat and a folded local newspaper',
          year: 1952,
          characters: ['turing'],
          mood: 'formal, diminishing, unjust',
          details: ['a wooden bench in a corridor', 'a folded local newspaper', 'a hat on a knee', 'frosted glass doors', 'a brass handrail'],
          alt: 'A hat resting on a bench in a court corridor beside a folded local newspaper.',
        },
        pages: [
          {
            id: 'report',
            narration:
              'It begins with a break-in at his house, which he reports, because a burglary is a thing one reports. In the course of the investigation an officer asks a question that has nothing to do with the burglary, and everything afterwards follows from the answer.',
          },
          {
            id: 'law',
            narration:
              'The offence is a phrase from the last century. It applies to what he is, and no part of the law is interested in the six years he cannot mention, or in the machine, or in anything else on his record.',
            speaker: 'HIS SOLICITOR',
            dialogue: 'They will not want a trial of the facts. They will want a man who agrees that it happened. What you say about yourself is the only thing left that is yours.',
          },
          {
            id: 'statement',
            narration:
              'He has never lied about himself to anyone who mattered and has never volunteered it to anyone who did not. Now a room of strangers is going to write it down either way.',
            choices: [
              {
                id: 'plainly',
                label: 'Tell it plainly. You have never once been ashamed of it',
                effects: [
                  { type: 'flag', flag: 'turing.spokePlainly', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { exposure: 2, standing: -2 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say as little as the law allows',
                effects: [
                  { type: 'flag', flag: 'turing.saidLittle', value: true },
                  { type: 'resources', effects: { exposure: 1, standing: -1, wellbeing: -1 } },
                ],
              },
            ],
          },
          {
            id: 'sentence',
            narration:
              'He is convicted, and offered prison or liberty on condition of a year of medical treatment, and takes the second, and goes home, and writes to a friend a letter that is mostly about the mathematics of leaf arrangement, with one paragraph in the middle that is not.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'turing.prosecution', value: true },
          { type: 'resources', effects: { standing: -2, wellbeing: -2, exposure: 2 } },
        ],
        historicalNote:
          'Turing was prosecuted in 1952 for gross indecency after reporting a burglary at his home, convicted, and placed on probation conditional on a year of hormone treatment. He continued working and corresponding on mathematical biology throughout. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'turing-card-morphogenesis',
    characterId: 'turing',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'turing-card-1952-morphogenesis',
    trigger: { event: 'afterAction', priority: 94 },
    once: true,
    variants: [
      {
        id: 'manchester',
        conditions: [
          { type: 'locationIs', locationId: 'manchesterUK' },
          { type: 'yearAtLeast', year: 1952 },
          { type: 'yearAtMost', year: 1954 },
        ],
        title: 'Patterns From Nothing at All',
        locationLabel: 'Manchester',
        yearLabel: '1952',
        image: {
          setting: 'a desk of daisy heads, fir cones and a long printout of computed values',
          year: 1952,
          characters: ['turing'],
          mood: 'delighted, absorbed, unguarded',
          details: ['fir cones in a row', 'a daisy head on graph paper', 'a long computed printout', 'a ruler', 'a magnifying glass'],
          alt: 'Fir cones and a daisy head on graph paper beside a long printout of computed values.',
        },
        pages: [
          {
            id: 'question',
            narration:
              'The question is childish and nobody has answered it: an embryo starts as a ball of nearly identical cells with nothing to tell one part from another, so where does the first stripe come from? Where does anything come from, if everything begins the same?',
          },
          {
            id: 'answer',
            narration:
              'His answer is two chemicals, one that spreads slowly and encourages itself, one that spreads fast and puts the first one down. Perfectly even to begin with. Then the smallest disturbance — and the evenness is unstable, and spots appear, at a spacing the equations fix in advance.',
          },
          {
            id: 'machine',
            narration:
              'He runs the equations on the machine at night, when nobody wants it, and gets out patterns that look like the flank of an animal. He has founded a science that will not have a name for another thirty years and he is treating it as a hobby.',
            speaker: 'ALAN',
            dialogue: 'The dappling is not designed. Nothing decides where the spots go. The chemistry cannot help it — and that is a much better answer than design, because you can check it.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1952-morphogenesis' },
          { type: 'flag', flag: 'turing.morphogenesis', value: true },
          { type: 'resources', effects: { network: 1, theory: 1 } },
        ],
        historicalNote:
          '"The Chemical Basis of Morphogenesis" (1952) showed that a reacting, diffusing chemical system can spontaneously break symmetry and produce stable patterns, founding mathematical biology. Turing computed examples on the Manchester machine. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1952 },
          { type: 'yearAtMost', year: 1954 },
        ],
        title: 'Where the First Stripe Comes From',
        yearLabel: '1952',
        image: {
          setting: 'a kitchen table covered in graph paper, seed heads and hand-computed columns',
          year: 1952,
          characters: ['turing'],
          mood: 'homely, obsessive, original',
          details: ['seed heads on graph paper', 'columns of hand computation', 'a jam jar of water', 'a school ruler', 'a pencil sharpened to nothing'],
          alt: 'Seed heads laid on graph paper beside long hand-computed columns of figures.',
        },
        pages: [
          {
            id: 'even',
            narration:
              'He does it by hand at the kitchen table, columns of it, because the question will not leave him alone: how does anything become different from anything else, if it all starts the same?',
          },
          {
            id: 'break',
            narration:
              'Two substances, one slow and self-encouraging, one fast and suppressing. Start them perfectly even. The evenness will not hold — it cannot hold — and what breaks out of it is a pattern with a spacing you can predict before you look.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'turing-card-1952-morphogenesis' },
          { type: 'flag', flag: 'turing.morphogenesis', value: true },
          { type: 'resources', effects: { theory: 1 } },
        ],
        historicalNote:
          'Turing’s reaction–diffusion model of pattern formation dates from 1952. This variant follows a life that developed it without a machine to compute examples on.',
      },
    ],
  },
  {
    id: 'turing-breakthrough-morphogenesis',
    characterId: 'turing',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'turing-morphogenesis', priority: 86 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Chemical Basis',
        yearLabel: '1952',
        image: {
          setting: 'a printed paper with computed pattern plots beside a sunflower head',
          year: 1952,
          characters: ['turing'],
          mood: 'quiet pride in an unfashionable thing',
          details: ['printed pattern plots', 'a sunflower head', 'a pair of dividers', 'a botany text borrowed from a library', 'afternoon light'],
          alt: 'A printed paper of computed pattern plots lying beside a sunflower head and a pair of dividers.',
        },
        pages: [
          {
            id: 'paper',
            narration:
              'The paper is published and read by almost nobody who works on animals, because it is full of differential equations, and by almost nobody who works on equations, because it is full of animals. It is the first mathematical theory of how a body decides what shape to be.',
          },
          {
            id: 'plan',
            narration:
              'He is already onto the next part — the arrangement of leaves round a stem, the spirals on a fir cone, the numbers that keep turning up in them — and he has a machine to compute it and a stack of cones on the desk to check it against.',
          },
          {
            id: 'shape',
            narration:
              'It is the only work of his life that is about living things, and he speaks about it more happily than about anything else, and it is unfinished.',
          },
        ],
        historicalNote:
          'Turing’s 1952 morphogenesis paper founded mathematical biology; his subsequent work on phyllotaxis remained unfinished at his death and was published posthumously.',
      },
    ],
  },
  {
    id: 'turing-after',
    characterId: 'turing',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 78 },
    once: true,
    variants: [
      {
        id: 'plainly',
        conditions: [
          { type: 'narrativeFlag', flag: 'turing.prosecution' },
          { type: 'choiceWas', choiceKey: 'turing-prosecution:statement', choiceId: 'plainly' },
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1954 },
        ],
        title: 'The Door That Closes Quietly',
        yearLabel: '1953',
        image: {
          setting: 'a desk with a returned pass, a refused visa form and a stack of ongoing work',
          year: 1953,
          characters: ['turing'],
          mood: 'diminished world, undiminished work',
          details: ['a returned building pass', 'a stamped official form', 'a stack of computed sheets', 'a fir cone used as a paperweight', 'a cold pipe'],
          alt: 'A returned building pass and a stamped official form beside a stack of computed sheets.',
        },
        pages: [
          {
            id: 'clearance',
            narration:
              'Nothing is announced. The consultations simply stop being arranged, and then a pass is not renewed, and a country he used to be flown to declines to let him in. A man who is honest about himself is, by the rules of the time, a man who can be blackmailed, and therefore not to be trusted with what he already knows.',
          },
          {
            id: 'work',
            narration:
              'The work does not stop. He goes on with the leaf spirals and the machine and the letters, and he writes to a friend about the whole business in a tone of exasperated comedy, which is how he has handled every unbearable thing since he was seventeen.',
            speaker: 'ALAN',
            dialogue: 'I have been turned into a security risk by being asked a direct question and answering it. You will observe that the logic is impeccable and the conclusion is idiotic.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: -1, wellbeing: -1 } }],
        historicalNote:
          'Turing’s conviction cost him his security clearance and ended his consultancy for British signals intelligence; he was also refused entry to the United States. He continued his Manchester research. Dialogue is dramatized.',
      },
      {
        id: 'quiet',
        conditions: [
          { type: 'narrativeFlag', flag: 'turing.prosecution' },
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1954 },
        ],
        title: 'A Year of Conditions',
        yearLabel: '1953',
        image: {
          setting: 'a mantelpiece with a probation appointment card tucked behind a clock',
          year: 1953,
          characters: ['turing'],
          mood: 'contained, private, enduring',
          details: ['an appointment card behind a clock', 'a chemistry notebook', 'a pair of running shoes gone stiff', 'a bowl of fir cones', 'rain on a window'],
          alt: 'An appointment card tucked behind a mantel clock beside a bowl of fir cones.',
        },
        pages: [
          {
            id: 'terms',
            narration:
              'The year of treatment is a condition of his liberty and he keeps to it exactly, the way he keeps to anything he has agreed. It changes his body and his temper and he mentions it to almost no one, and the running shoes go stiff by the door.',
          },
          {
            id: 'carry',
            narration:
              'He carries on. There is a laboratory, and a machine, and a problem about spirals that nobody else in the world is working on, and it is enough to be getting up for. He is careful, now, in ways he never used to be, and he minds that more than the rest of it.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1, health: -1 } }],
        historicalNote:
          'Turing’s probation required a year of hormone treatment. He continued to work at Manchester throughout and afterwards.',
      },
    ],
  },
  {
    id: 'turing-legacy-closing',
    characterId: 'turing',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'after-prosecution',
        conditions: [{ type: 'narrativeFlag', flag: 'turing.prosecution' }],
        title: 'The Work Left Out on the Desk',
        yearLabel: '1954',
        image: {
          setting: 'a study in early summer with an unfinished calculation on the desk and the window open',
          year: 1954,
          characters: ['turing'],
          mood: 'ordinary, unfinished, tender',
          details: ['an unfinished sheet of computation', 'a fir cone paperweight', 'an open window', 'a half-written letter', 'a garden going into flower'],
          alt: 'An unfinished sheet of computation weighted by a fir cone on a desk beside an open window.',
        },
        pages: [
          {
            id: 'spring',
            narration:
              'The spring of that year he is working on how leaves arrange themselves round a stem, which is a problem about spirals and whole numbers and has nothing to do with any of it. He makes lists of things to do. He accepts an invitation for the following month.',
          },
          {
            id: 'june',
            narration:
              'In June the work is on the desk where he left it, the window is open on the garden, and the house is quiet. He was forty-one, sixteen days short of forty-two, and there is no more to say about it than that, and a great deal that ought to have been said to him.',
          },
        ],
        historicalNote:
          'Turing died at his home in June 1954, shortly before his forty-second birthday, with work in progress on phyllotaxis. He had been convicted in 1952 and lost his security clearance. His death was recorded as suicide; some later accounts have questioned that finding. Out of respect, this scene describes nothing beyond the fact and the unfinished work.',
      },
      {
        id: 'default',
        title: 'Unfinished, and Going Well',
        yearLabel: '1954',
        image: {
          setting: 'a desk with an open notebook of spirals and a chair pushed back',
          year: 1954,
          characters: ['turing'],
          mood: 'quiet, ordinary, arrested',
          details: ['a notebook open at spiral diagrams', 'a chair pushed back', 'a cold cup', 'a stack of computed printout', 'summer light on a floor'],
          alt: 'A notebook open at spiral diagrams on a desk with the chair pushed back.',
        },
        pages: [
          {
            id: 'plans',
            narration:
              'There are three things on the go: the spirals, a programme for the machine, and an argument with a philosopher that he is enjoying enormously. He is forty-one. Nothing about the desk suggests an ending.',
          },
          {
            id: 'quiet',
            narration:
              'And then, in June, it stops, and the notebook stays open at the page he was on. What he was working out that week would not be worked out by anybody else for another twenty years.',
          },
        ],
        historicalNote:
          'Turing died in June 1954 at forty-one, leaving unfinished work on the mathematics of plant growth. This scene deliberately records only the fact and what was left on the desk.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Epilogue
  // -------------------------------------------------------------------------
  {
    id: 'turing-epilogue',
    characterId: 'turing',
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
              'turing-computable-numbers',
              'turing-princeton-ordinal-logics',
              'turing-enigma-bombe',
              'turing-banburismus',
              'turing-ace-design',
              'turing-machine-intelligence',
              'turing-morphogenesis',
            ],
            count: 5,
          },
        ],
        title: 'The Machine Everybody Is Standing On',
        yearLabel: 'After',
        image: {
          setting: 'a modern-looking room of racked equipment implied only by cables and a printed report',
          year: 1970,
          characters: ['turing'],
          mood: 'accumulating, vindicating, late',
          details: ['a bundle of cables', 'a printed report with a 1936 citation', 'a reel of tape', 'a library stamp', 'a lit corridor beyond'],
          alt: 'A bundle of cables beside a printed report open at a citation to a 1936 paper.',
        },
        pages: [
          {
            id: 'spread',
            narration:
              'The paper from 1936 turns out to have been a specification. Every machine built afterwards is one of his, in the only sense that matters: a store, a set of instructions kept in it, and a device that does not need to understand a single thing it is doing.',
          },
          {
            id: 'secret',
            narration:
              'The six years he could not describe stay undescribed for another two decades, and then the file is opened and a country finds out what it owed and to whom. An apology is offered, formally, half a century late, to a man who is not there to receive it.',
          },
          {
            id: 'voice',
            narration:
              'What survives is not the legend. It is a habit of mind: take the mystery, replace it with something a clerk could do, and see whether anything is missing afterwards.',
            speaker: 'ALAN',
            dialogue: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
          },
        ],
        historicalNote:
          'Turing’s universal machine underlies modern computing; the Bletchley Park work was declassified from the 1970s; a British government apology was issued in 2009 and a royal pardon in 2013. The closing line follows the final sentence of his 1950 paper closely; it appears in print there, and is presented here as speech.',
      },
      {
        id: 'spoke-plainly',
        conditions: [{ type: 'choiceWas', choiceKey: 'turing-prosecution:statement', choiceId: 'plainly' }],
        title: 'A Man Who Answered the Question',
        yearLabel: 'After',
        image: {
          setting: 'a court record book closed on a shelf beside a scientific offprint',
          year: 1960,
          characters: ['turing'],
          mood: 'sober, clear, unrepentant',
          details: ['a closed record book', 'a scientific offprint', 'a shelf edge', 'a strip of daylight', 'dust'],
          alt: 'A closed record book on a shelf beside a thin scientific offprint.',
        },
        pages: [
          {
            id: 'record',
            narration:
              'Two records survive him. One is a court book in a provincial town with a sentence in it that would be quietly repealed within fifteen years, and the other is a body of work that will not be repealed at all.',
          },
          {
            id: 'change',
            narration:
              'The law that convicted him is changed by men who never met him, arguing in a chamber he would have found absurd, and it takes them years, and it is too late in the only way that counts.',
          },
          {
            id: 'voice',
            narration:
              'He never once said that he was sorry for what he was, and never once pretended it was the interesting thing about him.',
            speaker: 'ALAN',
            dialogue: 'It is a fact about me, like being left-handed or good at running. You may write it down. I should like to get back to the spirals.',
          },
        ],
        historicalNote:
          'Turing made a full and unapologetic statement to police in 1952. The law under which he was convicted was substantially reformed in 1967. Dialogue is dramatized.',
      },
      {
        id: 'patterns',
        conditions: [{ type: 'choiceWas', choiceKey: 'turing-legacy-opening:choice', choiceId: 'patterns' }],
        title: 'Spots, Stripes and Spirals',
        yearLabel: 'After',
        image: {
          setting: 'a laboratory bench in a later decade with a dish of chemical pattern and a fir cone',
          year: 1975,
          characters: ['turing'],
          mood: 'delayed vindication, natural beauty',
          details: ['a shallow dish of banded chemical pattern', 'a fir cone', 'a printed 1952 citation', 'a stopwatch', 'a window on a garden'],
          alt: 'A shallow dish showing a banded chemical pattern beside a fir cone and a printed citation.',
        },
        pages: [
          {
            id: 'later',
            narration:
              'Twenty years on, chemists get the bands to appear in a dish, and the equations that predict them are his, and the biologists who spent a career insisting that patterns must be blueprinted somewhere begin, grudgingly, to read the paper.',
          },
          {
            id: 'field',
            narration:
              'A whole field grows out of it — shells, coats, fingers, the stripes on a fish — and it carries his name in the way subjects do, casually, as though it were a kind of weather rather than a man.',
          },
          {
            id: 'voice',
            narration:
              'He liked this work best, and said so, and did it in the years when everything else was being taken away from him.',
            speaker: 'ALAN',
            dialogue: 'A daisy is a machine following a rule. I find that far more beautiful than the alternative, and rather easier to check.',
          },
        ],
        historicalNote:
          'Turing patterns were confirmed experimentally in chemical systems decades after 1952 and are now a standard framework in developmental biology. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Short Distance Ahead',
        yearLabel: 'After',
        image: {
          setting: 'an empty study with a reel of punched tape and an open window',
          year: 1954,
          characters: ['turing'],
          mood: 'quiet, unfinished, forward-facing',
          details: ['a reel of punched paper tape', 'an open window', 'a stack of unread offprints', 'a fir cone', 'light on an empty chair'],
          alt: 'A reel of punched paper tape on a desk in an empty study with the window open.',
        },
        pages: [
          {
            id: 'left',
            narration:
              'What he leaves is a strip of tape, a definition, and a set of questions that nobody had thought to ask in that form: what a machine can do, what it cannot, what it would take for one to be called intelligent, and how a spot becomes a stripe.',
          },
          {
            id: 'later',
            narration:
              'Every one of those questions outlives him and turns into a subject. The six secret years come out of the files two decades later and change what the century thought had happened to it.',
          },
          {
            id: 'voice',
            narration:
              'He was forty-one, and the notebook was open, and the arithmetic on the top sheet was going well.',
            speaker: 'ALAN',
            dialogue: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
          },
        ],
        historicalNote:
          'Turing died in 1954. His work founded computability theory, shaped the design of stored-program computers, opened the study of machine intelligence, and began mathematical biology. The closing line follows the last sentence of "Computing Machinery and Intelligence" closely; it appears in print there, and is presented here as speech.',
      },
    ],
  },
];
