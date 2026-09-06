import type { StoryScene } from '../../types/story';

const sourceIds = ['einstein'];

export const EINSTEIN_REPLACED_CONTEXT_CARDS: string[] = [
  'einstein-card-1905',
  'einstein-card-1914-war',
  'einstein-card-1919-fame',
  'einstein-card-1933-emigration',
  'einstein-card-1939-letter',
];

export const EINSTEIN_STORY_SCENES: StoryScene[] = [
  // -------------------------------------------------------------------------
  // Prologue
  // -------------------------------------------------------------------------
  {
    id: 'einstein-prologue-century',
    characterId: 'einstein',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A Century About to Change',
        locationLabel: 'Ulm',
        yearLabel: '1879',
        image: {
          setting: 'a modest household above a shopfront in Ulm, southern Germany, in March 1879',
          year: 1879,
          characters: ['einstein'],
          mood: 'quiet, wintry, expectant',
          details: ['grey snow in a gutter', 'a cart loaded with copper wire', 'gas lamp on a corner', 'shuttered shop window'],
          alt: 'A restrained illustration of a snowbound street and a modest household in a small German town in 1879.',
        },
        pages: [
          {
            id: 'ulm',
            narration:
              'Snow still lies grey in the gutters of Ulm on the March morning the boy arrives. His mother frets about the shape of his head until the doctor laughs at her and goes home. Below the window a cart goes past with a load of copper wire for the works down by the river.',
          },
          {
            id: 'wires',
            narration:
              'Europe is being rewired. Gaslight is giving way to filament, horses to timetables, and the men who wind the dynamos believe the physics behind them is very nearly finished — a few decimals left to tidy, and then the work is done. Two brothers in Munich are about to bet a family on that belief.',
          },
          {
            id: 'late',
            narration:
              'The boy is slow to speak. He seems to build each sentence somewhere out of sight and then say it once, whole, as though it had cost him something to make.',
            speaker: 'PAULINE',
            dialogue: 'Say it to me, then. Say anything at all.',
          },
        ],
        historicalNote:
          'Einstein was born in Ulm in March 1879 and the family moved to Munich, where his father and uncle ran an electrical business. His late speech as a small child is reported in standard biographies. The dialogue is dramatized wording, not a quotation.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Formation, 1879-1896
  // -------------------------------------------------------------------------
  {
    id: 'einstein-formation-opening',
    characterId: 'einstein',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Needle That Nothing Touches',
        locationLabel: 'Munich',
        yearLabel: '1884–1894',
        image: {
          setting: 'a middle-class Munich sickroom and the electrical workshop below it, mid-1880s',
          year: 1885,
          characters: ['einstein'],
          mood: 'intimate, hushed, curious',
          details: ['brass pocket compass', 'quilt on a narrow bed', 'coils of winding wire', 'oil lamp', 'brass filings on a bench'],
          alt: 'A small brass compass in a child’s hand on a quilt, with an electrical workshop visible beyond the door.',
        },
        pages: [
          {
            id: 'compass',
            narration:
              'He is five and ill in bed when his father puts a pocket compass into his hand. Wherever Albert turns it, the needle swings back to the same stubborn north. Nothing is touching it. Something enormous and invisible is holding it, and the room is suddenly not the size he thought it was.',
          },
          {
            id: 'workshop',
            narration:
              'Downstairs the workshop smells of hot varnish and brass filings. His uncle winds armatures for the street lighting of small Bavarian towns and lets the boy hold the ends of things.',
            speaker: 'JAKOB',
            dialogue: 'Whatever it is you are hunting, give it a name first. Call it x. Then hunt it until it holds still.',
          },
          {
            id: 'school',
            narration:
              'At the Gymnasium the lessons are recited in unison and corrected with a stick. He works through a geometry book alone in a fortnight and is marked down for insolence. A boy who asks why is a nuisance in a room built for boys who answer when asked.',
          },
          {
            id: 'choice',
            narration:
              'Then the lighting contracts go to a larger firm. The workshop is sold, the family will try again over the Alps, and Albert is to stay behind in a Munich lodging house until his certificate is finished. He is fifteen. The room has one window and it faces a wall.',
            choices: [
              {
                id: 'leave',
                label: 'Find a way over the Alps and follow them',
                effects: [
                  { type: 'flag', flag: 'einstein.leftMunich', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, standing: -1 } },
                ],
              },
              {
                id: 'endure',
                label: 'Stay, keep your head down, and finish the certificate',
                effects: [
                  { type: 'flag', flag: 'einstein.enduredMunich', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'workshop',
                label: 'Stay, but spend the evenings with the dynamos',
                effects: [
                  { type: 'flag', flag: 'einstein.workshopYears', value: true },
                  { type: 'resources', effects: { network: 1, funds: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The compass his father showed him, the electrical business, his impatience with rote Gymnasium teaching, and the family’s move to Italy after the business failed are all documented. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-alps-crossing',
    characterId: 'einstein',
    chapterId: 'formation',
    kind: 'relocation',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'over-the-alps',
        conditions: [
          { type: 'choiceWas', choiceKey: 'einstein-formation-opening:choice', choiceId: 'leave' },
          { type: 'yearAtLeast', year: 1893 },
          { type: 'yearAtMost', year: 1896 },
        ],
        title: 'A Citizen of Nowhere',
        locationLabel: 'Northern Italy',
        yearLabel: '1894–1895',
        image: {
          setting: 'a night train descending out of the Alps into northern Italy in the mid-1890s',
          year: 1895,
          characters: ['einstein'],
          mood: 'unmoored, bright, faintly reckless',
          details: ['carriage window at dawn', 'travelling case', 'folded medical certificate', 'lemon trees beyond the glass'],
          alt: 'A young traveller at a train window as the line comes down out of the mountains into an Italian morning.',
        },
        pages: [
          {
            id: 'train',
            narration:
              'The train climbs out of Bavaria in the dark and comes down into a morning full of shouting and lemon trees. In his coat he has a doctor’s note saying his nerves require rest, and a mathematics report saying the rest of him is entirely well.',
          },
          {
            id: 'father',
            narration:
              'The new works are already in trouble. His father does the arithmetic at the kitchen table twice, as if it might come out differently the second time.',
            speaker: 'HERMANN',
            dialogue: 'The firm needs an engineer, Albert. Not a philosopher. Engineers eat.',
          },
          {
            id: 'papers',
            narration:
              'That winter he gives up his German citizenship. For the next five years he will belong to no country at all, which turns out to be a condition he can live in comfortably, and one that makes every clerk in Europe suspicious of him.',
          },
        ],
        historicalNote:
          'Einstein left the Munich Gymnasium early and joined his family in Italy, and renounced his German citizenship in 1896, remaining stateless until he became Swiss in 1901. Dialogue is dramatized.',
      },
      {
        id: 'stayed',
        conditions: [
          { type: 'yearAtLeast', year: 1893 },
          { type: 'yearAtMost', year: 1896 },
        ],
        title: 'The Room With One Window',
        locationLabel: 'Munich',
        yearLabel: '1894–1895',
        image: {
          setting: 'a rented room in a Munich lodging house in the mid-1890s',
          year: 1895,
          characters: ['einstein'],
          mood: 'lonely, patient, faintly stubborn',
          details: ['narrow bed', 'letters with Italian stamps', 'schoolbooks in a stack', 'a violin case against the wall'],
          alt: 'A narrow rented room with schoolbooks, a violin case, and a small pile of foreign letters.',
        },
        pages: [
          {
            id: 'letters',
            narration:
              'The lodging house keeps his room and the letters keep arriving with Italian stamps on them. He answers about one in three, and the ones he answers are mostly about a problem he has been carrying since the compass.',
          },
          {
            id: 'maja',
            narration:
              'His sister writes the way she talks, in a rush, without punctuation, and the last line of every letter is the same question in a different order.',
            speaker: 'MAJA',
            dialogue: 'Mama wants to know whether you are eating. I told her you were reading. She did not find that as funny as I did.',
          },
        ],
        historicalNote:
          'Einstein was left in Munich to finish school when the family moved to Italy. This variant follows a life that endured the year rather than leaving it. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-light-beam',
    characterId: 'einstein',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'aarau',
        conditions: [
          { type: 'yearAtLeast', year: 1895 },
          { type: 'yearAtMost', year: 1896 },
        ],
        title: 'Chasing a Beam of Light',
        locationLabel: 'Aarau',
        yearLabel: '1895–1896',
        image: {
          setting: 'a hillside above the Swiss town of Aarau on a bright autumn afternoon in 1895',
          year: 1895,
          characters: ['einstein'],
          mood: 'restless, sunlit, wide open',
          details: ['open notebook on grass', 'town roofs below', 'low autumn sun', 'jacket thrown down', 'river bend'],
          alt: 'A teenager lying on a hillside above a Swiss town with an open notebook beside him.',
        },
        pages: [
          {
            id: 'school',
            narration:
              'He has failed the entrance examination once already, in everything but mathematics and physics, and been sent to a school in Aarau to fill in the rest of himself. Here the teachers ask what he thinks and then, alarmingly, wait for the answer.',
          },
          {
            id: 'thought',
            narration:
              'On the hill above the town he asks himself what he would see if he ran alongside a beam of light at exactly its own speed. A wave standing perfectly still. Frozen crests, going nowhere. Nobody has ever seen such a thing, and the equations for light do not permit it to exist.',
          },
          {
            id: 'aloud',
            narration:
              'He says it out loud to the grass, because there is nobody else on the hill, and because saying a thing out loud is how he finds out whether it is stupid.',
            speaker: 'ALBERT',
            dialogue: 'Then either the light is wrong, or the running is. And the light is not wrong.',
          },
        ],
        historicalNote:
          'Einstein described this thought experiment about riding alongside a light beam, from his year at the Aarau cantonal school, in his own later autobiographical writing. The wording here is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-formation-closing',
    characterId: 'einstein',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'certificate',
        conditions: [{ type: 'choiceWas', choiceKey: 'einstein-formation-opening:choice', choiceId: 'leave' }],
        title: 'The Gate on Rämistrasse',
        locationLabel: 'Zürich',
        yearLabel: '1896',
        image: {
          setting: 'the entrance of the Zürich polytechnic on an autumn morning in 1896',
          year: 1896,
          characters: ['einstein'],
          mood: 'arrival, nerves under a flat expression',
          details: ['stone entrance steps', 'rolled certificate', 'tram rails in the road', 'lake haze beyond the roofs'],
          alt: 'A young man with a rolled certificate standing at the foot of a large stone institutional stairway.',
        },
        pages: [
          {
            id: 'certificate',
            narration:
              'The Aarau certificate is a single folded sheet and it is worth more than everything else he owns. He is seventeen, admitted, stateless, and about to be the youngest person in the room for four years running.',
          },
          {
            id: 'gate',
            narration:
              'At the gate he stops long enough to notice that nobody is watching him arrive. It is the first genuinely good news of his adult life.',
          },
        ],
        historicalNote:
          'Einstein completed his schooling at Aarau and entered the Zürich polytechnic in 1896. The scene is dramatized.',
      },
      {
        id: 'default',
        title: 'What He Takes With Him',
        locationLabel: 'Switzerland',
        yearLabel: '1896',
        image: {
          setting: 'a railway platform in a small Swiss town at the end of the 1890s',
          year: 1896,
          characters: ['einstein'],
          mood: 'unsettled, provisional',
          details: ['travelling case', 'timetable board', 'steam over a low platform', 'notebook under one arm'],
          alt: 'A young man with a case and a notebook waiting on a small railway platform.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'He finishes it out in the room that faces a wall, and what he carries out of Munich fits in one case and a notebook. The case holds shirts. The notebook holds a question about light, written in a hand that has not yet learned to be careful.',
          },
          {
            id: 'ahead',
            narration:
              'Ahead of him is a country that does not care who his father was, and a language of examinations he has no intention of learning to speak well. He gets on the train anyway.',
          },
        ],
        historicalNote:
          'A divergent closing for a formation that did not follow the documented route out of Munich. The question about light is the documented constant.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Education, 1896-1900
  // -------------------------------------------------------------------------
  {
    id: 'einstein-education-opening',
    characterId: 'einstein',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Four Years and a Diploma',
        locationLabel: 'Zürich',
        yearLabel: '1896',
        image: {
          setting: 'a tiered lecture theatre at the Zürich polytechnic in the late 1890s',
          year: 1897,
          characters: ['einstein'],
          mood: 'crowded, dutiful, quietly rebellious',
          details: ['tiered wooden benches', 'blackboard with mechanics diagrams', 'coal smoke haze', 'stacked lecture notebooks'],
          alt: 'Students on tiered benches in a nineteenth-century lecture theatre with diagrams on a blackboard.',
        },
        pages: [
          {
            id: 'city',
            narration:
              'Zürich smells of lake water and coal smoke and cheap coffee. The lectures are excellent and they stop at about 1890, which is precisely where the interesting part starts.',
          },
          {
            id: 'grossmann',
            narration:
              'A classmate takes notes in a hand so even it looks printed, and does not appear to mind that the seat beside him is empty three mornings in four.',
            speaker: 'GROSSMANN',
            dialogue: 'Sit where you like. I write it all down anyway, and I am told my handwriting is my best feature.',
          },
          {
            id: 'choice',
            narration:
              'Four years, then a teaching diploma, then — if a professor likes you — an assistantship. Everyone in the section understands the arithmetic. He has to decide what to spend the years on.',
            choices: [
              {
                id: 'reading',
                label: 'Read Maxwell and Boltzmann alone and skip the lectures',
                effects: [
                  { type: 'flag', flag: 'einstein.selfTaught', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'lectures',
                label: 'Attend everything and make yourself useful to the professors',
                effects: [
                  { type: 'flag', flag: 'einstein.goodStudent', value: true },
                  { type: 'resources', effects: { standing: 1, network: 1 } },
                ],
              },
              {
                id: 'laboratory',
                label: 'Live in the physics laboratory and burn your hands',
                effects: [
                  { type: 'flag', flag: 'einstein.laboratoryYears', value: true },
                  { type: 'resources', effects: { health: -1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Einstein studied at the Zürich polytechnic from 1896, befriended Marcel Grossmann there, cut lectures to read modern physics on his own, and relied on Grossmann’s notes. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-grossmann-notes',
    characterId: 'einstein',
    chapterId: 'education',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 66 },
    once: true,
    variants: [
      {
        id: 'zurich',
        conditions: [
          { type: 'locationIs', locationId: 'zurich' },
          { type: 'yearAtLeast', year: 1897 },
          { type: 'yearAtMost', year: 1900 },
        ],
        title: 'The Neatest Handwriting in Switzerland',
        locationLabel: 'Zürich',
        yearLabel: '1898',
        image: {
          setting: 'a corner table in a Zürich café on a wet afternoon in the late 1890s',
          year: 1898,
          characters: ['einstein'],
          mood: 'warm, argumentative, companionable',
          details: ['two coffee glasses', 'open lecture notebook', 'wet umbrella against a chair', 'window fogged from inside'],
          alt: 'Two coffee glasses and an open notebook on a café table beside a fogged window.',
        },
        pages: [
          {
            id: 'notes',
            narration:
              'The notebooks come across the table in a stack, corners squared. Grossmann has been to every lecture Albert has missed, and has never once said so out loud.',
          },
          {
            id: 'said',
            narration:
              'They argue about whether a physicist needs the newest mathematics or only the mathematics that works. Grossmann is winning, which he does by not raising his voice.',
            speaker: 'GROSSMANN',
            dialogue: 'You will pass because I write neatly. What you do afterwards is entirely your own affair, and I expect it will be strange.',
          },
          {
            id: 'later',
            narration:
              'Years from now Albert will send this man a problem about curved space and get back, by return of post, the name of the mathematics he needs. Neither of them knows that this afternoon.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.grossmannNotes', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Marcel Grossmann was Einstein’s fellow student and lifelong friend; Einstein used his lecture notes and later relied on him for the differential geometry behind general relativity. Dialogue is dramatized.',
      },
      {
        id: 'letters',
        conditions: [
          { type: 'yearAtLeast', year: 1897 },
          { type: 'yearAtMost', year: 1900 },
        ],
        title: 'Notes by Post',
        yearLabel: '1898',
        image: {
          setting: 'a rented desk with a parcel of copied lecture notes newly unwrapped, late 1890s',
          year: 1898,
          characters: ['einstein'],
          mood: 'grateful, slightly guilty',
          details: ['string and brown paper', 'copied notebooks', 'inkwell', 'unanswered letters in a stack'],
          alt: 'A parcel of copied lecture notebooks opened on a desk beside brown paper and string.',
        },
        pages: [
          {
            id: 'parcel',
            narration:
              'The parcel comes wrapped in brown paper and tied with a length of string too good to throw away. Inside are four months of lectures in that impossible even handwriting, and a note that reads, in full: you owe me nothing, which is the most expensive kind of debt.',
          },
          {
            id: 'answer',
            narration:
              'He writes back the same evening, three pages, none of them about the lectures.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.grossmannNotes', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'A dramatized version of the same documented friendship for a life that spent these years away from Zürich.',
      },
    ],
  },
  {
    id: 'einstein-violin',
    characterId: 'einstein',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 52 },
    once: true,
    variants: [
      {
        id: 'thin-year',
        conditions: [
          { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 } },
          { type: 'yearAtLeast', year: 1897 },
          { type: 'yearAtMost', year: 1900 },
        ],
        title: 'Mozart at One in the Morning',
        yearLabel: '1899',
        image: {
          setting: 'a cold rented room at night with a violin and a cooling stove, around 1899',
          year: 1899,
          characters: ['einstein'],
          mood: 'tired, tender, sleepless',
          details: ['violin and bow', 'unlit stove', 'candle stub', 'sheets of failed calculation', 'coat worn indoors'],
          alt: 'A violin resting on a table in a cold rented room beside scattered pages of calculation.',
        },
        pages: [
          {
            id: 'stuck',
            narration:
              'The calculation has not moved in nine days. He eats bread and does the sums again and gets the same wrong answer with more decimal places, which is somehow worse.',
          },
          {
            id: 'violin',
            narration:
              'So he takes down the violin. Mozart does not solve anything, but he plays until the shape of the problem changes, the way a room changes when you move one chair.',
            speaker: 'THE LANDLADY',
            dialogue: 'Herr Einstein. It is one in the morning. It is a very beautiful noise and it is one in the morning.',
          },
          {
            id: 'quieter',
            narration:
              'He apologises through the door, and plays more quietly, and at some point before dawn writes down a line that is not wrong.',
          },
        ],
        historicalNote:
          'Einstein played the violin from childhood and throughout his life, often while thinking. The particular night is dramatized.',
      },
      {
        id: 'settled',
        conditions: [
          { type: 'yearAtLeast', year: 1897 },
          { type: 'yearAtMost', year: 1900 },
        ],
        title: 'Two Instruments and a Window',
        yearLabel: '1899',
        image: {
          setting: 'a student lodging with a violin and an open window on a summer evening, around 1899',
          year: 1899,
          characters: ['einstein'],
          mood: 'easy, companionable, warm',
          details: ['violin under a chin', 'open window over a courtyard', 'music stand', 'coffee going cold'],
          alt: 'A violin being played beside an open window looking over a summer courtyard.',
        },
        pages: [
          {
            id: 'evening',
            narration:
              'Somebody two floors down has a piano and no shame, and on Thursdays they meet in the middle. He is not a good violinist. He is an unstoppable one.',
          },
          {
            id: 'after',
            narration:
              'Afterwards, on the stairs, he finds that the thing that would not come apart all week has quietly come apart. He does not tell anyone that this is his method. They would want to see the method.',
          },
        ],
        historicalNote: 'Einstein’s lifelong violin playing is documented; this evening is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-education-closing',
    characterId: 'einstein',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'no-assistantship',
        conditions: [{ type: 'choiceWas', choiceKey: 'einstein-education-opening:choice', choiceId: 'reading' }],
        title: 'Four Posts, and None of Them His',
        locationLabel: 'Zürich',
        yearLabel: '1900',
        image: {
          setting: 'an institute corridor with a notice board of appointments, summer 1900',
          year: 1900,
          characters: ['einstein'],
          mood: 'flat, stung, refusing to show it',
          details: ['pinned appointment notices', 'polished corridor floor', 'diploma in a cardboard tube', 'summer light through high windows'],
          alt: 'A corridor notice board of appointment announcements in a nineteenth-century institute.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'The diploma is real. So is the list on the corridor wall: four assistantships, four names, none of them his. He reads it twice, which is once more than necessary.',
          },
          {
            id: 'letters',
            narration:
              'He writes to professors in three countries, politely, then less politely, then politely again. Some of them do not answer. He tells himself that a man who skipped the lectures cannot be surprised when the lecturers skip him, and finds that this does not help as much as it should.',
          },
        ],
        historicalNote:
          'Einstein received his diploma in 1900 but, unlike his classmates, was not given an assistantship, and spent two years without an academic post. Dramatized wording.',
      },
      {
        id: 'diploma',
        conditions: [{ type: 'narrativeFlag', flag: 'einstein.grossmannNotes' }],
        title: 'A Diploma and a Debt',
        locationLabel: 'Zürich',
        yearLabel: '1900',
        image: {
          setting: 'a lake shore in Zürich on a summer evening in 1900',
          year: 1900,
          characters: ['einstein'],
          mood: 'relieved, uncertain, young',
          details: ['diploma tube on a bench', 'lake steamer', 'jackets over arms', 'long evening light on water'],
          alt: 'Two coats over a bench by a lake shore at evening with a rolled diploma beside them.',
        },
        pages: [
          {
            id: 'passed',
            narration:
              'He passes. The margin is not enormous and the handwriting he passed on was not his own, and he says so, cheerfully, to the man who lent it.',
          },
          {
            id: 'ahead',
            narration:
              'They sit by the lake until the steamers stop running. Neither of them has a post. One of them has a father who knows people, and is too decent to mention it tonight.',
          },
        ],
        historicalNote:
          'Grossmann’s father later recommended Einstein for the Bern patent office post. The evening is dramatized.',
      },
      {
        id: 'default',
        title: 'The End of Being a Student',
        yearLabel: '1900',
        image: {
          setting: 'a rented room being emptied at the end of a course of study, 1900',
          year: 1900,
          characters: ['einstein'],
          mood: 'provisional, unglamorous',
          details: ['packed case', 'stripped bed', 'stack of returned books', 'a single unposted letter'],
          alt: 'A rented room stripped bare with a packed case and a stack of returned books.',
        },
        pages: [
          {
            id: 'pack',
            narration:
              'The room goes back to the landlady with the stove blacked and the books returned. Four years reduce to one case and one notebook, and it is the notebook that is heavy.',
          },
          {
            id: 'wait',
            narration:
              'What happens next depends on somebody else answering a letter. It is the first time in his life that has been true, and he does not care for it at all.',
          },
        ],
        historicalNote:
          'A divergent closing for an education that did not follow the documented Zürich route. Einstein’s two years without a post afterwards are documented.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Entry into the profession, 1900-1909
  // -------------------------------------------------------------------------
  {
    id: 'einstein-entry-opening',
    characterId: 'einstein',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Positions Wanted',
        locationLabel: 'Switzerland',
        yearLabel: '1900–1902',
        image: {
          setting: 'a newspaper small-advertisements page on a lodging-house table, 1901',
          year: 1901,
          characters: ['einstein'],
          mood: 'stubborn, faintly humiliated',
          details: ['newspaper folded to advertisements', 'pen and inkwell', 'cold coffee', 'stack of unanswered applications'],
          alt: 'A newspaper folded open to small advertisements beside a pen and a stack of letters.',
        },
        pages: [
          {
            id: 'adverts',
            narration:
              'Two years of tutoring advertisements: mathematics and physics, most thorough instruction, moderate fee. Two years of trial lessons free of charge to anyone curious. He gets a stand-in post at a technical school and loses it when the regular man comes back.',
          },
          {
            id: 'stateless',
            narration:
              'He is a citizen of nowhere with a teaching diploma nobody wants. In the winter he pays for Swiss papers with money he does not really have, on the theory that a country is a useful thing to be from.',
          },
          {
            id: 'bern',
            narration:
              'Then a letter. A friend’s father has spoken to a director in Bern, and there is an examination to sit, and a desk at the end of it that has nothing whatever to do with physics.',
            speaker: 'GROSSMANN',
            dialogue: 'It is not a chair, Albert. It is a desk, a salary, and eight hours a day of other men’s machines. I think you would be extremely good at it.',
          },
          {
            id: 'choice',
            narration: 'The examination is in three weeks. He has to decide what he is willing to be for a while.',
            choices: [
              {
                id: 'patent',
                label: 'Take the desk in Bern',
                effects: [
                  { type: 'flag', flag: 'einstein.patentPost', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'resources', effects: { funds: 2, standing: -1 } },
                ],
              },
              {
                id: 'university',
                label: 'Keep writing to professors until one of them answers',
                effects: [
                  { type: 'flag', flag: 'einstein.heldOut', value: true },
                  { type: 'resources', effects: { standing: 1, funds: -1 } },
                ],
              },
              {
                id: 'teaching',
                label: 'Take whatever school will have you',
                effects: [
                  { type: 'flag', flag: 'einstein.schoolmaster', value: true },
                  { type: 'resources', effects: { funds: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Einstein advertised private lessons, held temporary teaching posts, became a Swiss citizen in 1901, and took the Bern patent examiner post in 1902 after Marcel Grossmann’s father recommended him. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-patent-office',
    characterId: 'einstein',
    chapterId: 'entry',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'salaried',
        conditions: [
          { type: 'choiceWas', choiceKey: 'einstein-entry-opening:choice', choiceId: 'patent' },
          { type: 'locationIs', locationId: 'bern' },
          { type: 'yearAtLeast', year: 1902 },
          { type: 'yearAtMost', year: 1908 },
        ],
        title: 'Technical Expert, Third Class',
        locationLabel: 'Bern',
        image: {
          setting: 'a patent office examining room in Bern in the early 1900s',
          year: 1903,
          characters: ['einstein'],
          mood: 'orderly, dry, secretly alive',
          details: ['rolled technical drawings', 'high clerk’s desk', 'wall clock', 'half-open drawer of private papers', 'inkstand'],
          alt: 'A clerk’s desk in an early twentieth-century patent office with rolled technical drawings and a wall clock.',
        },
        pages: [
          {
            id: 'desk',
            narration:
              'Eight hours a day of other men’s inventions. He learns to find the flaw in a machine in about the time it takes to unroll the drawing, and to write the refusal in language that does not humiliate the inventor.',
          },
          {
            id: 'drawer',
            narration:
              'The second drawer of the desk holds work of his own. When footsteps come along the corridor the drawer closes, and it closes silently, because he has oiled it.',
          },
          {
            id: 'walk',
            narration:
              'Walking home along the arcades he argues about clocks and signals with a friend from the office, at length, in both directions.',
            speaker: 'BESSO',
            dialogue: 'Albert. We have now walked past your own street twice, and you are still talking about two clocks that do not agree.',
          },
        ],
        historicalNote:
          'Einstein worked as a patent examiner in Bern from 1902 and discussed physics with his colleague Michele Besso, whom he thanked in the 1905 relativity paper. The drawer and the dialogue are dramatized.',
      },
      {
        id: 'lean',
        conditions: [
          { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1908 },
        ],
        title: 'Bread, Coffee, and Arithmetic',
        image: {
          setting: 'a cheap rented room in a Swiss town in the early 1900s, morning',
          year: 1903,
          characters: ['einstein'],
          mood: 'lean, unromantic, determined',
          details: ['bread and a coffee pot', 'newspaper advertisement circled in ink', 'unpaid bill', 'physics pages weighted with a cup'],
          alt: 'A plain breakfast table with a circled newspaper advertisement and pages of handwritten physics.',
        },
        pages: [
          {
            id: 'sums',
            narration:
              'He does the household arithmetic first, because it is the harder problem. Rent, coal, the tutoring fee that has not arrived, the fee he will have to ask for twice.',
          },
          {
            id: 'work',
            narration:
              'Then he clears the table and does the other kind. Poverty, he decides, is only intolerable when it is also boring, and he has been careful never to be bored.',
          },
        ],
        historicalNote:
          'Einstein lived on very little income in the years before and around the patent office post. The scene is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1908 },
        ],
        title: 'Hours That Belong to Someone Else',
        image: {
          setting: 'a working desk at the end of a long salaried day in the early 1900s',
          year: 1903,
          characters: ['einstein'],
          mood: 'patient, private',
          details: ['blotter and pen', 'lamp turned low', 'stacked official files', 'a single private notebook'],
          alt: 'A tidy working desk at evening with official files stacked and one private notebook open.',
        },
        pages: [
          {
            id: 'trade',
            narration:
              'The bargain is simple and he made it with his eyes open: they buy the daylight, he keeps the evenings, and nobody asks what he does with them.',
          },
          {
            id: 'evening',
            narration:
              'The evenings are not long. They are, however, entirely his, which is a thing no assistant to a professor in Europe can say.',
          },
        ],
        historicalNote: 'A dramatized composite of Einstein’s salaried years outside academia.',
      },
    ],
  },
  {
    id: 'einstein-photoelectric-breakthrough',
    characterId: 'einstein',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-photoelectric', priority: 84 },
    once: true,
    variants: [
      {
        id: 'bern',
        conditions: [{ type: 'locationIs', locationId: 'bern' }],
        title: 'Light in Pieces',
        locationLabel: 'Bern',
        yearLabel: '1905',
        image: {
          setting: 'an evening desk in Bern with a lamp and a finished manuscript, 1905',
          year: 1905,
          characters: ['einstein'],
          mood: 'exhilarated, slightly appalled at himself',
          details: ['oil lamp', 'stacked manuscript sheets', 'window dark with rain', 'pen laid across an inkwell'],
          alt: 'A finished handwritten manuscript beside a lamp on a dark rainy evening.',
        },
        pages: [
          {
            id: 'metal',
            narration:
              'Shine light on a metal plate and it gives up electrons. Make the light brighter and it gives up more of them, but not faster ones. Change the colour and everything changes. Waves cannot do this. Waves have never been asked to.',
          },
          {
            id: 'quanta',
            narration:
              'So he stops asking them to. Light arrives in lumps: separate, countable, each carrying what its colour is worth. It explains the plate exactly, and it disagrees with a hundred years of triumphant optics.',
          },
          {
            id: 'revolutionary',
            narration:
              'He tells a friend that of everything he has written this year, this is the only piece that is genuinely revolutionary, and he does not say it as a boast. He says it the way a man says there is a crack in the wall.',
          },
        ],
        historicalNote:
          'Einstein’s 1905 light-quantum paper explained the photoelectric effect and later won him the Nobel Prize. He described it in correspondence as the only revolutionary thing among his 1905 papers; the wording here is dramatized.',
      },
      {
        id: 'default',
        title: 'The Lumps in the Light',
        image: {
          setting: 'a working desk with a finished paper on the quantum of light, early twentieth century',
          characters: ['einstein'],
          mood: 'clear-eyed, unsettled',
          details: ['finished manuscript', 'metal plate and lens on a shelf', 'lamp', 'sheets of discarded working'],
          alt: 'A finished physics manuscript on a desk beside a lens and a small metal plate.',
        },
        pages: [
          {
            id: 'idea',
            narration:
              'It arrives late and in a different room from the one he expected, but it arrives whole: light in countable pieces, each one worth exactly what its colour says.',
          },
          {
            id: 'cost',
            narration:
              'He knows what he is asking people to give up. He posts it anyway. There is no polite version of this idea.',
          },
        ],
        historicalNote:
          'A divergent breakthrough for a life that reached the light-quantum idea somewhere other than Bern in 1905. The physics is documented; the setting is not.',
      },
    ],
  },
  {
    id: 'einstein-brownian-breakthrough',
    characterId: 'einstein',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-brownian-motion', priority: 82 },
    once: true,
    variants: [
      {
        id: 'bern',
        conditions: [{ type: 'locationIs', locationId: 'bern' }],
        title: 'Footprints of Something Invisible',
        locationLabel: 'Bern',
        yearLabel: '1905',
        image: {
          setting: 'a desk with a borrowed microscope and pages of statistical working, Bern 1905',
          year: 1905,
          characters: ['einstein'],
          mood: 'patient, satisfied, exact',
          details: ['brass microscope', 'glass slide and water drop', 'columns of figures', 'lamp on a low flame'],
          alt: 'A brass microscope and a glass slide beside columns of handwritten figures.',
        },
        pages: [
          {
            id: 'jitter',
            narration:
              'Grains suspended in water jitter, and have jittered under microscopes for eighty years while everyone agreed it was mysterious and went back to work.',
          },
          {
            id: 'bookkeeping',
            narration:
              'He does the bookkeeping instead: how far a grain should wander in a second if it is being shoved from every side by things too small to see. The answer is a number. Numbers can be measured against.',
          },
          {
            id: 'atoms',
            narration:
              'Atoms had been a convenience, a way of talking. Now they leave footprints, and the footprints have a size.',
          },
        ],
        historicalNote:
          'Einstein’s 1905 paper on Brownian motion gave a quantitative test for molecular reality; experiments soon confirmed it. The scene is dramatized.',
      },
      {
        id: 'default',
        title: 'A Number for the Invisible',
        image: {
          setting: 'a working desk with statistical calculations of particle motion, early twentieth century',
          characters: ['einstein'],
          mood: 'methodical, quietly triumphant',
          details: ['columns of figures', 'glass of water on a windowsill', 'ruled paper', 'lamp'],
          alt: 'Columns of statistical calculation on ruled paper beside a glass of water on a windowsill.',
        },
        pages: [
          {
            id: 'count',
            narration:
              'He counts what cannot be seen by watching what it pushes. The result is not a picture of an atom. It is something better: a prediction an experimenter can go and break.',
          },
          {
            id: 'send',
            narration:
              'The paper goes out. Somewhere there is a man with a microscope and enough patience, and that man is about to settle a century-old argument on Albert’s behalf.',
          },
        ],
        historicalNote:
          'A divergent breakthrough for the same documented result reached outside Bern in 1905.',
      },
    ],
  },
  {
    id: 'einstein-special-relativity-breakthrough',
    characterId: 'einstein',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-special-relativity', priority: 86 },
    once: true,
    variants: [
      {
        id: 'bern-1905',
        conditions: [
          { type: 'locationIs', locationId: 'bern' },
          { type: 'yearAtLeast', year: 1903 },
          { type: 'yearAtMost', year: 1909 },
        ],
        title: 'Two Clocks',
        locationLabel: 'Bern',
        yearLabel: '1905',
        image: {
          setting: 'a tram pulling away from the clock tower in Bern at dusk, 1905',
          year: 1905,
          characters: ['einstein'],
          mood: 'sudden, vertiginous, quiet',
          details: ['clock tower face', 'tram rails wet with rain', 'gas lamps coming on', 'arcaded street', 'conductor’s bell'],
          alt: 'A tram moving away from a lit clock tower along wet rails at dusk.',
        },
        pages: [
          {
            id: 'tram',
            narration:
              'The tram pulls away from the clock tower and he looks back at the illuminated face of it, the way anyone does. Then he thinks: the time I am reading left that tower a moment ago and had to travel here to reach me.',
          },
          {
            id: 'now',
            narration:
              'And if he were moving away fast enough, the news would never catch him at all; the hands would appear to stop. There is no universal instant that every clock in the world shares. There is only a signal, going at one particular speed, that everybody has to wait for.',
          },
          {
            id: 'solved',
            narration:
              'He does not sleep. In the morning he goes to his friend’s door before work, and says one thing before he says good morning.',
            speaker: 'ALBERT',
            dialogue: 'Thank you. The problem is finished. Space and time will have to give up a little of their dignity, but it is finished.',
          },
        ],
        historicalNote:
          'Einstein completed special relativity in Bern in 1905 after long discussions with Michele Besso, whom he is reported to have thanked the following morning. The wording of the dialogue is dramatized, not quoted.',
      },
      {
        id: 'default',
        title: 'The Hour That Belongs to Nobody',
        image: {
          setting: 'a working room with clock diagrams and a rail timetable pinned to the wall, early twentieth century',
          characters: ['einstein'],
          mood: 'still, altered, alone',
          details: ['two drawn clock faces', 'railway timetable', 'ruled diagrams of light signals', 'cold cup'],
          alt: 'Two drawn clock faces and light-signal diagrams pinned above a working desk.',
        },
        pages: [
          {
            id: 'late',
            narration:
              'There is no clock tower outside this window and the year is not the one he would have chosen, and none of that turns out to matter. The question he carried up a hill as a boy has finally consented to be answered.',
          },
          {
            id: 'what',
            narration:
              'Simultaneity is not a fact about the world. It is an agreement between two clocks about a signal that takes time to arrive. Everything else — the shrinking, the slowing, the mass and the energy — falls out of that one sentence like coins out of a coat.',
          },
          {
            id: 'quiet',
            narration:
              'He sits with it a long time. Whoever he tells first will not understand, and will be polite about it, and that is the whole of the celebration.',
          },
        ],
        historicalNote:
          'A divergent breakthrough for a life that arrived at special relativity by another road. The content of the theory is documented; the circumstances are not.',
      },
    ],
  },
  {
    id: 'einstein-miracle-year',
    characterId: 'einstein',
    chapterId: 'entry',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 72 },
    once: true,
    replacesContextCardId: 'einstein-card-1905',
    variants: [
      {
        id: 'three-papers-bern',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['einstein-photoelectric', 'einstein-brownian-motion', 'einstein-special-relativity'],
            count: 3,
          },
          { type: 'locationIs', locationId: 'bern' },
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1909 },
        ],
        title: 'Four Envelopes',
        locationLabel: 'Bern',
        yearLabel: '1905–1906',
        image: {
          setting: 'a post office counter with several thick envelopes being handed over, 1905',
          year: 1905,
          characters: ['einstein'],
          mood: 'unceremonious, enormous',
          details: ['thick sealed envelopes', 'brass post office grille', 'postmark stamp', 'coins counted out', 'rain on the window'],
          alt: 'Several thick sealed envelopes being handed across a post office counter.',
        },
        pages: [
          {
            id: 'posted',
            narration:
              'The envelopes leave one small post office within a few months of each other. Light in pieces. The size of molecules. The end of absolute time. A short afterthought about mass and energy that he nearly did not bother to write.',
          },
          {
            id: 'office',
            narration:
              'On Monday he is back at the desk by eight, refusing a patent for an improved gravel sorter. He does not mention any of it to the office. There is no way to mention it that does not sound insane.',
            speaker: 'A COLLEAGUE',
            dialogue: 'You look terrible, Einstein. Have you been working?',
          },
          {
            id: 'wait',
            narration:
              'The journals print them. Nothing happens, for a while. Then the letters start to come, and they come from the men whose textbooks he read on his own instead of going to lectures.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
          { type: 'flag', flag: 'einstein.miracleYear', value: true },
        ],
        historicalNote:
          'In 1905 Einstein published four papers — on light quanta, Brownian motion, special relativity, and mass–energy equivalence — while employed full time at the patent office and holding no academic position. Dialogue is dramatized.',
      },
      {
        id: 'three-papers',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['einstein-photoelectric', 'einstein-brownian-motion', 'einstein-special-relativity'],
            count: 3,
          },
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1909 },
        ],
        title: 'Three Envelopes and a Fourth',
        image: {
          setting: 'a post office counter with several thick envelopes being handed over, 1905',
          year: 1905,
          characters: ['einstein'],
          mood: 'unceremonious, enormous',
          details: ['thick sealed envelopes', 'brass post office grille', 'postmark stamp', 'coins counted out', 'rain on the window'],
          alt: 'Several thick sealed envelopes being handed across a post office counter.',
        },
        pages: [
          {
            id: 'posted',
            narration:
              'The envelopes leave one small post office within a few months of each other. Light in pieces. The size of molecules. The end of absolute time. A short afterthought about mass and energy that he nearly did not bother to write.',
          },
          {
            id: 'work',
            narration:
              'None of it is anybody’s job. He does the day he is paid for, comes home, clears whatever is on the table, and works until the lamp needs filling. Nobody who sees him on the stairs would guess at any of it, and he prefers it that way.',
            speaker: 'A COLLEAGUE',
            dialogue: 'You look terrible. Have you been working?',
          },
          {
            id: 'wait',
            narration:
              'The journals print them. Nothing happens, for a while. Then the letters start to come, and they come from the men whose textbooks he read on his own instead of going to lectures.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
          { type: 'flag', flag: 'einstein.miracleYear', value: true },
        ],
        historicalNote:
          'In 1905 Einstein published four transformative papers in a single year while holding no academic position. This variant follows a life that did the same work somewhere other than Bern. Dialogue is dramatized.',
      },
      {
        id: 'two-papers',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['einstein-photoelectric', 'einstein-brownian-motion', 'einstein-special-relativity'],
            count: 2,
          },
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1909 },
        ],
        title: 'Two in One Year',
        yearLabel: '1905–1907',
        image: {
          setting: 'a desk with two completed manuscripts and one unfinished, mid-1900s',
          year: 1906,
          characters: ['einstein'],
          mood: 'productive, tired, unfinished',
          details: ['two tied manuscripts', 'one open unfinished draft', 'lamp', 'journal wrapper'],
          alt: 'Two tied manuscripts and one unfinished draft on a working desk.',
        },
        pages: [
          {
            id: 'two',
            narration:
              'Two results, close together, out of a life that has no laboratory, no assistant, and no chair. Either one of them would redirect a career. Together they make it difficult for physics to keep not knowing his name.',
          },
          {
            id: 'third',
            narration:
              'The third thing is still in the drawer, in pieces, and he takes it out most evenings and puts it back most nights. It will keep. It has kept since he was sixteen.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'resources', effects: { standing: 1, network: 1 } },
          { type: 'flag', flag: 'einstein.miracleYear', value: true },
        ],
        historicalNote:
          'A partial version of the documented 1905 cluster. Einstein really did produce this work without an academic post.',
      },
      {
        id: 'one-paper',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['einstein-photoelectric', 'einstein-brownian-motion', 'einstein-special-relativity'],
            count: 1,
          },
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1909 },
        ],
        title: 'The First One Out',
        yearLabel: '1906',
        image: {
          setting: 'a journal issue arriving in the post at a modest lodging, mid-1900s',
          year: 1906,
          characters: ['einstein'],
          mood: 'small, private, real',
          details: ['journal in a paper wrapper', 'string cut and curled', 'thumb marking a page', 'breakfast pushed aside'],
          alt: 'A scientific journal unwrapped on a breakfast table with a thumb marking one page.',
        },
        pages: [
          {
            id: 'printed',
            narration:
              'His name is in the journal, set in a type that makes it look like somebody else’s. He reads his own paragraphs as a stranger would and finds two sentences he should have cut.',
          },
          {
            id: 'rest',
            narration:
              'The rest of it is still in the drawer. One paper is not a year that changes physics. It is a door held open with a foot.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'A reduced version of the documented 1905 output, for a life that published less that year.',
      },
      {
        id: 'drawer',
        conditions: [
          { type: 'yearAtLeast', year: 1907 },
          { type: 'yearAtMost', year: 1909 },
        ],
        title: 'The Drawer Stays Shut',
        yearLabel: '1907',
        image: {
          setting: 'a closed desk drawer of unpublished handwritten physics, late 1900s',
          year: 1907,
          characters: ['einstein'],
          mood: 'ordinary, unremarked, quietly heavy',
          details: ['half-open drawer of manuscript pages', 'official files stacked square', 'wall clock at six', 'coat on a hook'],
          alt: 'A desk drawer half open on handwritten pages, beside a squared stack of official files.',
        },
        pages: [
          {
            id: 'inside',
            narration:
              'There are thirty pages in the drawer about clocks and forty about the size of molecules, and none of them have gone anywhere. Each one stops at the place where finishing it would take a month he does not have.',
          },
          {
            id: 'year',
            narration:
              'The century does not notice him this year. The desk is warm, the salary comes on time, and the walk home is beautiful in the rain. It is possible to be perfectly happy and not be doing the thing you were for.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'flag', flag: 'einstein.unpublishedDrawer', value: true },
        ],
        historicalNote:
          'The documented 1905 papers were written in exactly these conditions — full-time clerical work, no institution. This variant follows a life in which they stayed unfinished.',
      },
    ],
  },
  {
    id: 'einstein-entry-closing',
    characterId: 'einstein',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'published',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['einstein-photoelectric', 'einstein-brownian-motion', 'einstein-special-relativity'],
            count: 2,
          },
        ],
        title: 'A Letter With a University Seal',
        yearLabel: '1909',
        image: {
          setting: 'an official university letter opened on a plain table, 1909',
          year: 1909,
          characters: ['einstein'],
          mood: 'vindicated, wary',
          details: ['embossed letterhead', 'letter opener', 'ring left by a cup', 'coat still buttoned'],
          alt: 'An official university letter with an embossed seal lying open on a plain table.',
        },
        pages: [
          {
            id: 'offer',
            narration:
              'The letter uses the word Professor and it is addressed to him. It has taken nine years, everything he managed to finish in the evenings, and the intervention of men he has never met over dinners he was not invited to.',
          },
          {
            id: 'notice',
            narration:
              'He hands in his notice at the office. The director shakes his hand and says the department will miss his reports, and means it, which is the strangest compliment he has ever received.',
          },
        ],
        historicalNote:
          'Einstein left the patent office in 1909 for his first academic appointment, following the reception of his 1905 papers.',
      },
      {
        id: 'one-result',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['einstein-photoelectric', 'einstein-brownian-motion', 'einstein-special-relativity'],
            count: 1,
          },
        ],
        title: 'Noticed, Not Wanted',
        yearLabel: '1909',
        image: {
          setting: 'a modest study with one journal offprint and several polite refusals, 1909',
          year: 1909,
          characters: ['einstein'],
          mood: 'stubborn, unfinished',
          details: ['offprint with a paper cover', 'three short letters', 'pen', 'window over rooftops'],
          alt: 'A journal offprint and three short letters on a modest writing desk.',
        },
        pages: [
          {
            id: 'letters',
            narration:
              'Three men in three countries have written to him about the paper. None of the three has a post to offer. Being interesting turns out to be a different profession from being employable.',
          },
          {
            id: 'keep',
            narration:
              'He keeps the desk, the salary, and the drawer. There is more in the drawer than there was, and that is the only ledger he trusts.',
          },
        ],
        historicalNote:
          'A divergent closing for a life whose early publications drew attention but no chair.',
      },
      {
        id: 'default',
        title: 'Nine Years of Other Men’s Machines',
        yearLabel: '1909',
        image: {
          setting: 'a patent office corridor at the end of a working day, 1909',
          year: 1909,
          characters: ['einstein'],
          mood: 'level, unshowy, slightly rueful',
          details: ['long corridor of numbered doors', 'evening light through high windows', 'coat over an arm', 'stack of stamped files'],
          alt: 'A long corridor of numbered office doors in evening light with a stack of stamped files.',
        },
        pages: [
          {
            id: 'record',
            narration:
              'The record shows a decade of impeccable examinations. He has refused a hundred perpetual motion machines with more courtesy than any of them deserved and has never once been late.',
          },
          {
            id: 'drawer',
            narration:
              'The drawer is heavier than when he started. Nobody has read what is in it. He is thirty, and he can feel the century going past outside the window like a train that does not stop here.',
          },
        ],
        historicalNote:
          'A divergent closing for a life that stayed at the patent desk without publishing the 1905 work.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1909-1919
  // -------------------------------------------------------------------------
  {
    id: 'einstein-breakthrough-opening',
    characterId: 'einstein',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Chalk on the Sleeve',
        yearLabel: '1909',
        image: {
          setting: 'a university lecture room with a half-covered blackboard, around 1910',
          year: 1910,
          characters: ['einstein'],
          mood: 'unpolished, alive, unexpectedly warm',
          details: ['blackboard half erased', 'chalk dust on a dark sleeve', 'student benches', 'high grey windows'],
          alt: 'A half-erased blackboard in a lecture room with chalk dust on a dark coat sleeve.',
        },
        pages: [
          {
            id: 'first',
            narration:
              'His first lectures are bad. He has prepared them the way he was taught, which is to say he has written down what a professor sounds like, and the students copy it politely and understand nothing.',
          },
          {
            id: 'stop',
            narration:
              'In the fourth week he stops pretending. He puts the notes down and works the problem on the blackboard in front of them, wrongly, twice, and then correctly.',
            speaker: 'A STUDENT',
            dialogue: 'Herr Professor — we did not follow that last step.',
          },
          {
            id: 'again',
            narration:
              'Neither did he, he says, and does it again more slowly. Attendance doubles by Christmas. He has discovered that thinking out loud in public is the only kind of teaching he can do, and that it happens to be good.',
          },
          {
            id: 'choice',
            narration:
              'The salary is smaller than the patent office paid and the hours are longer. Somewhere behind him is a quiet desk where nobody ever asked him a question he could not answer.',
            choices: [
              {
                id: 'professor',
                label: 'Take the chair and be a professor of physics',
                effects: [
                  { type: 'flag', flag: 'einstein.tookChair', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -2 },
                  { type: 'resources', effects: { standing: 2, funds: -1 } },
                ],
              },
              {
                id: 'clerk',
                label: 'Keep the desk, the salary, and the quiet',
                effects: [
                  { type: 'flag', flag: 'einstein.keptDesk', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { funds: 1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Einstein left the patent office in 1909 for a professorship, moved briefly to Prague, and returned to Zürich before Berlin. His early difficulties and later success as a lecturer are documented; the dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-berlin-offer',
    characterId: 'einstein',
    chapterId: 'breakthrough',
    kind: 'relocation',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 64 },
    once: true,
    variants: [
      {
        id: 'berlin',
        conditions: [
          { type: 'locationIs', locationId: 'berlin' },
          { type: 'yearAtLeast', year: 1913 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'No Lectures, No Students, No Duties',
        locationLabel: 'Berlin',
        image: {
          setting: 'an academy meeting room in Berlin with a long polished table, 1914',
          year: 1914,
          characters: ['einstein'],
          mood: 'flattered, suspicious, arriving',
          details: ['long polished table', 'inkstands in a row', 'heavy curtains', 'a single travelling case by the door'],
          alt: 'A long polished table with inkstands in a formal academy meeting room, a travelling case by the door.',
        },
        pages: [
          {
            id: 'delegation',
            narration:
              'They come to Zürich in person to fetch him, two of the most decorated men in German science, and they make the offer as though embarrassed by how generous it is.',
            speaker: 'THE VISITOR',
            dialogue: 'No lectures. No students. No duties of any kind. Only the Academy, and whatever it is you wish to think about.',
          },
          {
            id: 'terms',
            narration:
              'It is a salary for thinking. It is also Berlin: parade grounds, a court, a language of rank he abandoned at sixteen along with the passport.',
          },
          {
            id: 'arrive',
            narration:
              'He goes. The flat is too large and the streets are too straight and there is a room with nothing in it but a table, and on the table he puts the problem of gravity.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.berlinPost', value: true },
          { type: 'resources', effects: { funds: 1, standing: 1 } },
        ],
        historicalNote:
          'Einstein was recruited to the Prussian Academy of Sciences in Berlin in 1914 with a research salary and no teaching obligations. The visitors and dialogue are dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1916 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'The Letter on the Hall Table',
        image: {
          setting: 'an unopened formal letter left standing on a hall table, 1914',
          year: 1914,
          characters: ['einstein'],
          mood: 'deliberate, unhurried',
          details: ['heavy cream envelope', 'hall table and mirror', 'hat and coat on a hook', 'dust in a slant of light'],
          alt: 'A heavy formal envelope propped against a mirror on a hall table beside a coat hook.',
        },
        pages: [
          {
            id: 'unanswered',
            narration:
              'The envelope from Berlin stands against the hall mirror for a month, and every day he walks past it and does not open it, and every day he decides to decide tomorrow.',
          },
          {
            id: 'reason',
            narration:
              'They are offering him a salary for thinking. He has noticed that the men who take such salaries end up thinking about what the salary is for, and that the question is always asked eventually, and never by the man drawing it.',
          },
          {
            id: 'shut',
            narration:
              'In the end he writes four lines declining, in his politest German, and posts it on the way to a lecture. The envelope goes into a drawer with the other things he has not become.',
          },
        ],
        effects: [{ type: 'flag', flag: 'einstein.declinedBerlin', value: true }],
        historicalNote:
          'A divergent turn for a life that did not take the Berlin appointment. The offer itself is documented.',
      },
    ],
  },
  {
    id: 'einstein-war-1914',
    characterId: 'einstein',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 76 },
    once: true,
    replacesContextCardId: 'einstein-card-1914-war',
    variants: [
      {
        id: 'berlin',
        conditions: [
          { type: 'locationIs', locationId: 'berlin' },
          { type: 'yearAtLeast', year: 1914 },
          { type: 'yearAtMost', year: 1918 },
        ],
        title: 'Ninety-Three Signatures',
        locationLabel: 'Berlin',
        image: {
          setting: 'an academy corridor in Berlin in the autumn of 1914 with a posted declaration',
          year: 1914,
          characters: ['einstein'],
          mood: 'isolated, cold, appalled',
          details: ['posted printed sheet on a corridor wall', 'flags in the street beyond a window', 'overcoats on a rack', 'grey autumn light'],
          alt: 'A printed declaration posted on an institutional corridor wall with flags visible through a window.',
        },
        pages: [
          {
            id: 'august',
            narration:
              'In August the city empties into the railway stations singing. By October the university men have written their own contribution to the war: a page defending the army’s conduct, signed by ninety-three of the best minds in Germany.',
          },
          {
            id: 'names',
            narration:
              'He reads the names in the corridor with his coat still on. Four of them are men he eats lunch with. Two of them taught him something he still uses.',
          },
          {
            id: 'appeal',
            narration:
              'A physician he barely knows has drafted the opposite document — an appeal to Europeans, arguing that a continent of educated men has just agreed to destroy itself and might, on reflection, prefer not to. Almost nobody will sign it.',
            choices: [
              {
                id: 'sign',
                label: 'Put your name to the appeal for a Europe that still exists',
                effects: [
                  { type: 'flag', flag: 'einstein.pacifist', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say nothing and keep to the equations',
                effects: [
                  { type: 'flag', flag: 'einstein.quietWar', value: true },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'private',
                label: 'Write privately, across the lines, to whoever still answers',
                effects: [
                  { type: 'flag', flag: 'einstein.privateLetters', value: true },
                  { type: 'resources', effects: { network: 1, exposure: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1914-war' }],
        historicalNote:
          'In October 1914 ninety-three German intellectuals signed a manifesto defending Germany’s war conduct; Einstein was one of very few who signed a counter-appeal for European unity instead. The corridor scene is dramatized.',
      },
      {
        id: 'away',
        conditions: [
          { type: 'yearAtLeast', year: 1914 },
          { type: 'yearAtMost', year: 1918 },
        ],
        title: 'The Post Stops Crossing',
        image: {
          setting: 'a study where foreign journals have stopped arriving, 1915',
          year: 1915,
          characters: ['einstein'],
          mood: 'shut in, diminished, angry',
          details: ['gap on a shelf of journals', 'returned letter marked undeliverable', 'newspaper folded to casualty columns', 'unlit stove'],
          alt: 'A shelf with a gap where foreign journals should be, beside a returned undelivered letter.',
        },
        pages: [
          {
            id: 'silence',
            narration:
              'The war has been going on long enough now to have a shape, and its shape, from a desk, is silence. The French journals stopped coming, then the English ones. A letter he sent one July came back in November stamped to say the country it was addressed to can no longer be written to.',
          },
          {
            id: 'names',
            narration:
              'And the declarations keep coming, one country at a time, each one signed by exactly the men who taught him that knowledge belongs to nobody. He counts the signatures and finds that physics has borders after all.',
          },
          {
            id: 'appeal',
            narration:
              'Somebody sends him a draft of the other kind of document: an appeal to Europeans, asking educated men to refuse to hate on schedule. There is space at the bottom for names, and almost nothing above it.',
            choices: [
              {
                id: 'sign',
                label: 'Put your name to the appeal for a Europe that still exists',
                effects: [
                  { type: 'flag', flag: 'einstein.pacifist', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say nothing and keep to the equations',
                effects: [
                  { type: 'flag', flag: 'einstein.quietWar', value: true },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'private',
                label: 'Write privately, across the lines, to whoever still answers',
                effects: [
                  { type: 'flag', flag: 'einstein.privateLetters', value: true },
                  { type: 'resources', effects: { network: 1, exposure: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1914-war' }],
        historicalNote:
          'The rupture of international scientific correspondence during the First World War, and Einstein’s refusal to join the nationalist declarations, are documented. This variant places him away from Berlin.',
      },
    ],
  },
  {
    id: 'einstein-hilbert-1915',
    characterId: 'einstein',
    chapterId: 'breakthrough',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['einstein', 'hilbert'],
    trigger: { event: 'afterAction', priority: 78 },
    once: true,
    variants: [
      {
        id: 'human-hilbert-present',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1916 },
          { type: 'otherCharacterIsHuman', characterId: 'hilbert' },
          { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen', yearTolerance: 1 },
        ],
        title: 'The Race From Göttingen',
        yearLabel: '1915',
        image: {
          setting: 'a mathematics institute blackboard in Göttingen in 1915, chalk dust in low light',
          year: 1915,
          characters: ['einstein', 'hilbert'],
          mood: 'exhilarating, competitive, courteous',
          details: ['blackboard covered in tensor notation', 'chalk stubs in a tray', 'lecture chairs pushed back', 'a stack of posted letters'],
          alt: 'A blackboard dense with geometric equations in a mathematics institute, chairs pushed back.',
        },
        pages: [
          {
            id: 'letters',
            narration:
              'Every letter he posts to Göttingen comes back faster than the post has any right to manage, and each one has gone a little further along the same road. Somebody there is working the same problem with better tools and more sleep.',
          },
          {
            id: 'summer',
            narration:
              'He had lectured there in the summer, six mornings, holding nothing back, because holding back would have been beneath both of them. He is now finding out what that cost.',
            speaker: 'HILBERT',
            dialogue: 'Show me which part of the physics your mathematics is not permitted to break. Then I will know where to stop.',
          },
          {
            id: 'november',
            narration:
              'So he stops sleeping properly and sends work in weekly instalments, correcting himself twice in public, because being wrong in front of Göttingen turns out to be cheaper than being slow. He has already drafted the generous letter he means to send when it is over, and keeps it where he can see it.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, tension: 1, flag: 'relativity-1915' },
          { type: 'flag', flag: 'einstein.gottingenRace', value: true },
        ],
        historicalNote:
          'Einstein lectured in Göttingen in mid-1915 and worked on the field equations in close and competitive parallel with Hilbert that autumn, publishing them in November. Dialogue is dramatized.',
      },
      {
        id: 'npc-hilbert',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1916 },
          { type: 'otherCharacterIsNpc', characterId: 'hilbert' },
          { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen', yearTolerance: 1 },
        ],
        title: 'The Göttingen Exchange',
        yearLabel: '1915',
        image: {
          setting: 'a mathematics institute blackboard in Göttingen in 1915, chalk dust in low light',
          year: 1915,
          characters: ['einstein', 'hilbert'],
          mood: 'urgent, respectful, sleepless',
          details: ['blackboard of field equations', 'posted envelopes', 'wartime blackout curtain', 'cold coffee on a ledge'],
          alt: 'Chalked field equations on a large blackboard beside a stack of posted envelopes.',
        },
        pages: [
          {
            id: 'exchange',
            narration:
              'The exchange with Göttingen runs all autumn: postcards, then letters, then telegrams, each one arriving a step further along than the last. Neither man mentions speed. Both of them are counting days.',
          },
          {
            id: 'said',
            narration:
              'The mathematician’s objection, when it comes, is the useful kind — not that the physics is wrong, but that it is not yet forced.',
            speaker: 'HILBERT',
            dialogue: 'Physics is far too difficult for physicists. Show me what your equations are forbidden to do, and I will show you what they must be.',
          },
          {
            id: 'close',
            narration:
              'He works eleven days without properly stopping. Somewhere in the middle of them he decides what kind of letter he will send to Göttingen at the end of this: the one without a single barbed sentence in it. Deciding in advance is the only way he has ever managed to be gracious.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, tension: 1, flag: 'relativity-1915' },
          { type: 'flag', flag: 'einstein.gottingenRace', value: true },
        ],
        historicalNote:
          'The Einstein–Hilbert correspondence and near-simultaneous derivation of the field equations in November 1915 are documented. The remark about physicists is in the spirit of Hilbert’s recorded wit but the wording is dramatized.',
      },
      {
        id: 'human-hilbert-elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1917 },
          { type: 'otherCharacterIsHuman', characterId: 'hilbert' },
        ],
        title: 'Nobody to Race',
        yearLabel: '1915',
        image: {
          setting: 'a working room with unanswered posted letters and a blackboard of geometry, 1915',
          year: 1915,
          characters: ['einstein'],
          mood: 'solitary, unhurried, faintly lonely',
          details: ['unanswered letters in a stack', 'blackboard of geometry', 'empty second chair', 'lamp burning low'],
          alt: 'A blackboard of geometry beside an empty second chair and a stack of unanswered letters.',
        },
        pages: [
          {
            id: 'silence',
            narration:
              'The letters he sends to the mathematicians go unanswered. Not refused — simply not answered, the way post behaves when the man it is addressed to has gone somewhere the war has not published.',
          },
          {
            id: 'alone',
            narration:
              'So he does the geometry himself, badly and slowly, and gets there in the end. Nobody arrives one week ahead of him. He finds he would have preferred the competition, and is not sure what that says about him.',
          },
        ],
        effects: [{ type: 'flag', flag: 'einstein.hilbertSilence', value: true }],
        historicalNote:
          'A divergent version of the documented 1915 exchange, for a life in which the Göttingen correspondence never happened.',
      },
    ],
  },
  {
    id: 'einstein-general-relativity-breakthrough',
    characterId: 'einstein',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-general-relativity', priority: 88 },
    once: true,
    variants: [
      {
        id: 'berlin',
        conditions: [{ type: 'locationIs', locationId: 'berlin' }],
        title: 'Forty-Three Seconds of Arc',
        locationLabel: 'Berlin',
        yearLabel: '1915',
        image: {
          setting: 'a Berlin study at night in November 1915, pages of tensor calculation everywhere',
          year: 1915,
          characters: ['einstein'],
          mood: 'overwhelming, physical, exhausted',
          details: ['pages of calculation on the floor', 'astronomical tables', 'lamp at an angle', 'cold stove', 'chair pushed back'],
          alt: 'Pages of dense calculation spread across a desk and floor beside astronomical tables and a lamp.',
        },
        pages: [
          {
            id: 'mercury',
            narration:
              'Mercury has been wandering for sixty years. Its orbit creeps around the sun by an amount nobody has been able to account for, and astronomers have invented an entire hidden planet rather than admit they cannot.',
          },
          {
            id: 'number',
            narration:
              'He puts the new equations in and turns the handle and out comes the creep: forty-three seconds of arc a century, with nothing adjusted and nothing added. He sits still for a while. Something goes wrong in his chest for three days afterwards, as though the news had to be paid for somewhere.',
          },
          {
            id: 'what',
            narration:
              'Gravity is not a force reaching across an empty room. There is no empty room. Matter tells the room what shape to be, and everything falling is only going straight in a place that has been bent.',
          },
        ],
        historicalNote:
          'Einstein completed the field equations in Berlin in November 1915; the calculation of Mercury’s perihelion advance was the first confirmation, and he described a strong physical reaction to it. Wording dramatized.',
      },
      {
        id: 'zurich',
        conditions: [{ type: 'locationIs', locationId: 'zurich' }],
        title: 'The Mathematics He Had to Borrow',
        locationLabel: 'Zürich',
        yearLabel: '1915',
        image: {
          setting: 'a Zürich study with borrowed geometry texts open and stacked, mid-1910s',
          year: 1915,
          characters: ['einstein'],
          mood: 'dogged, indebted, elated',
          details: ['open geometry volumes', 'borrowed library slips', 'pages of index notation', 'lake fog at the window'],
          alt: 'Open volumes of geometry and pages of index notation on a desk before a fogged window.',
        },
        pages: [
          {
            id: 'ask',
            narration:
              'He asks his old friend what mathematics exists for surfaces that bend, and is handed a name he has never heard and a stack of volumes he cannot read for a fortnight. Then he can. Then he cannot stop.',
          },
          {
            id: 'close',
            narration:
              'When the equations finally close they are simpler than the mess he fought through to reach them, which is the sign, every time, that a thing is true.',
          },
          {
            id: 'cost',
            narration:
              'He has been ill, and rude to people who did not deserve it, and absent from a house where he was needed. The equations do not know any of that. They will still be true when everyone involved is dead.',
          },
        ],
        historicalNote:
          'Marcel Grossmann supplied Einstein with the differential geometry underlying general relativity during their Zürich collaboration. The scene is dramatized.',
      },
      {
        id: 'default',
        title: 'The Shape of the Room',
        image: {
          setting: 'a working desk where a long geometric derivation has just been completed, 1910s',
          characters: ['einstein'],
          mood: 'quiet, enormous, private',
          details: ['final page of derivation', 'ruler and compass', 'lamp', 'window showing early light'],
          alt: 'The final page of a long geometric derivation lying on a desk in early morning light.',
        },
        pages: [
          {
            id: 'done',
            narration:
              'It takes eight years and it comes out in a room nobody will ever photograph. Gravity is geometry. Falling is the straightest line available in a place that has been bent by everything in it.',
          },
          {
            id: 'alone',
            narration:
              'He puts the pen down. Outside it is raining and a cart is going past and somebody two streets away is being shouted at. Inside, the universe has just changed shape, and there is nobody awake to tell.',
          },
        ],
        historicalNote:
          'A divergent completion of general relativity outside its documented Berlin setting. The physics is documented.',
      },
    ],
  },
  {
    id: 'einstein-collapse-1917',
    characterId: 'einstein',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 56 },
    once: true,
    variants: [
      {
        id: 'ill',
        conditions: [
          { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
          { type: 'yearAtLeast', year: 1917 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'The Turnip Winter',
        yearLabel: '1917',
        image: {
          setting: 'a sickroom in a wartime European city in winter, 1917',
          year: 1917,
          characters: ['einstein'],
          mood: 'depleted, cared-for, stubborn',
          details: ['bowl of thin soup', 'blankets over a coat', 'unlit stove', 'papers propped on a bed tray', 'frost on the inside of the glass'],
          alt: 'A bed tray of papers and a bowl of thin soup in a cold room with frost inside the window.',
        },
        pages: [
          {
            id: 'winter',
            narration:
              'There is no coal and there is very little fat and the city eats turnips in every form a cook can invent. He loses a quarter of himself in two months and does not notice until his collar goes slack.',
          },
          {
            id: 'nursed',
            narration:
              'A cousin arrives with soup and an unsentimental manner and simply takes over, in the way of people who have decided that an argument would be a waste of both their time.',
            speaker: 'ELSA',
            dialogue: 'Eat this first. The universe has waited fourteen billion years, it can wait until half past one.',
          },
          {
            id: 'work',
            narration:
              'He works propped up on pillows with the tray across his knees, which is not heroic, only what there is to do. The pages come out slower and about as good.',
          },
        ],
        historicalNote:
          'Einstein became seriously ill in 1917 amid wartime shortages in Berlin and was nursed by his cousin Elsa, whom he later married. Dialogue is dramatized.',
      },
      {
        id: 'holding',
        conditions: [
          { type: 'yearAtLeast', year: 1917 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'Cold Fingers, Same Music',
        yearLabel: '1917',
        image: {
          setting: 'a cold study in wartime with a violin case and an overcoat worn indoors, 1917',
          year: 1917,
          characters: ['einstein'],
          mood: 'austere, holding on',
          details: ['overcoat worn indoors', 'violin case open', 'ration card on a shelf', 'stove with one small fire'],
          alt: 'An open violin case in a cold study where an overcoat is worn indoors.',
        },
        pages: [
          {
            id: 'ration',
            narration:
              'The ration card is pinned to the shelf where the sugar used to be. He is thinner than he was and better at arithmetic about bread than any physicist ought to need to be.',
          },
          {
            id: 'music',
            narration:
              'In the evening he plays with his coat on, badly, because his fingers are cold. It is the only hour of the day that has nothing to do with the war, and he defends it like a border.',
          },
        ],
        historicalNote:
          'Wartime shortages in Germany from 1916 onward are documented, as is Einstein’s constant violin playing. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-breakthrough-closing',
    characterId: 'einstein',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'equations',
        conditions: [{ type: 'projectCompleted', projectId: 'einstein-general-relativity' }],
        title: 'Waiting for an Eclipse',
        yearLabel: '1919',
        image: {
          setting: 'a study with an almanac open to eclipse tables and a world map, 1919',
          year: 1919,
          characters: ['einstein'],
          mood: 'suspended, patient, exposed',
          details: ['almanac open to eclipse tables', 'atlas showing the Atlantic', 'pen resting', 'window at evening'],
          alt: 'An almanac open to eclipse tables beside an atlas showing the Atlantic.',
        },
        pages: [
          {
            id: 'prediction',
            narration:
              'The theory makes a promise it cannot take back: starlight passing the sun must bend, by a definite amount, and the only time anyone can look is during a total eclipse.',
          },
          {
            id: 'wait',
            narration:
              'The next one falls in the spring. Between now and then there is nothing whatever for him to do about it, which he discovers is the hardest work he has ever attempted.',
          },
        ],
        historicalNote:
          'General relativity predicted the deflection of starlight, testable only during a solar eclipse; the 1919 expedition was mounted to look for it.',
      },
      {
        id: 'still-a-clerk',
        conditions: [{ type: 'choiceWas', choiceKey: 'einstein-breakthrough-opening:choice', choiceId: 'clerk' }],
        title: 'Ten Years of Quiet',
        yearLabel: '1919',
        image: {
          setting: 'an office desk cleared for the evening in 1919, one private notebook remaining',
          year: 1919,
          characters: ['einstein'],
          mood: 'settled, unfamous, unfinished',
          details: ['cleared desk', 'single notebook', 'wall clock', 'coat on a hook', 'lamp turned down'],
          alt: 'A cleared office desk in the evening with one private notebook left open under a lamp.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'Ten years of impeccable service and a decade of evenings. The war passed over the office without stopping. Men he studied with have chairs now, and one of them has a street.',
          },
          {
            id: 'notebook',
            narration:
              'The notebook is thicker than it was. Some of it is right. Nobody has read it, and nobody has told him he is wrong, and he cannot decide which of those is the loss.',
          },
        ],
        historicalNote:
          'A divergent closing for a life that stayed outside the university after 1909.',
      },
      {
        id: 'default',
        title: 'What the Decade Took',
        yearLabel: '1919',
        image: {
          setting: 'a European street at the end of the First World War with black-edged notices on a wall',
          year: 1919,
          characters: ['einstein'],
          mood: 'grey, emptied out, beginning again',
          details: ['black-edged notices on a wall', 'queue outside a shop', 'closed shutters', 'thin winter light'],
          alt: 'Printed notices edged in black on a city wall beside a queue outside a shuttered shop.',
        },
        pages: [
          {
            id: 'count',
            narration:
              'Four years of it, and the counting is done in the newspapers now, in columns. Whole seminar rooms are gone. The men who signed the declarations are still here, and mostly still confident.',
          },
          {
            id: 'ahead',
            narration:
              'He comes out of the decade with less of his health, fewer of his friends, and one certainty: that he will never again put his signature under anybody’s flag. A great deal is unfinished. That is not.',
          },
        ],
        historicalNote:
          'A divergent closing framed around the documented human cost of the war and Einstein’s lasting internationalism.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Crisis and responsibility, 1919-1933
  // -------------------------------------------------------------------------
  {
    id: 'einstein-crisis-opening',
    characterId: 'einstein',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'after-the-appeal',
        conditions: [{ type: 'choiceWas', choiceKey: 'einstein-war-1914:appeal', choiceId: 'sign' }],
        title: 'The Man Who Signed the Other Page',
        yearLabel: '1919',
        image: {
          setting: 'a post-war European street in winter with a queue and shuttered windows, 1919',
          year: 1919,
          characters: ['einstein'],
          mood: 'hungry, unrepentant, watchful',
          details: ['bread queue', 'boarded shopfront', 'overcoat with a turned collar', 'newspaper under an arm', 'grey snow'],
          alt: 'A winter queue outside a boarded shopfront on a European street after the war.',
        },
        pages: [
          {
            id: 'city',
            narration:
              'Europe comes out of the war thinner and much louder, arguing in queues and newspapers about whose fault it was. Coal is a rumour. The learned societies reconvene and discover that half their foreign members will not sit in a room with the other half.',
          },
          {
            id: 'reputation',
            narration:
              'His name is on the wrong list. In some rooms that makes him a traitor; in others, mostly foreign ones, it makes him the one German anyone abroad is still willing to be in a room with. Both descriptions are inconvenient and one of them is about to be extremely useful.',
          },
          {
            id: 'letters',
            narration:
              'And the post has changed character. Fewer offprints, more appeals: committees for hunger relief, for prisoners, for a league of nations, for the reopening of scientific congresses to everybody.',
            speaker: 'A COLLEAGUE',
            dialogue: 'They do not want your physics, Einstein. They want your name at the top of their page. You do understand those are different things.',
          },
          {
            id: 'name',
            narration:
              'He understands it perfectly. There are eleven such letters on the desk this week and he has read every one of them to the end, which is already an answer of a kind, and not one he has admitted to giving.',
            choices: [
              {
                id: 'lend',
                label: 'Lend the name to whatever appeal deserves it',
                effects: [
                  { type: 'flag', flag: 'einstein.publicName', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 2 } },
                ],
              },
              {
                id: 'shut',
                label: 'Keep the door shut and the physics private',
                effects: [
                  { type: 'flag', flag: 'einstein.privateMan', value: true },
                  { type: 'resources', effects: { wellbeing: 1, exposure: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Post-war conditions in Berlin and Einstein’s isolation among German academics after refusing the war declarations are documented, as is his growing involvement in relief and internationalist appeals. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Name Worth Something',
        yearLabel: '1919',
        image: {
          setting: 'a study with a stack of appeals and petitions and an unlit stove, early 1919',
          year: 1919,
          characters: ['einstein'],
          mood: 'depleted, sceptical, waiting',
          details: ['stack of petitions', 'ration card on a shelf', 'unlit stove', 'cold cup', 'thin winter light'],
          alt: 'A stack of petitions beside a ration card in a cold study with an unlit stove.',
        },
        pages: [
          {
            id: 'after',
            narration:
              'The war ends the way a fever ends, leaving everyone thinner and less certain of what they were shouting. Bread is rationed. Coal is a rumour. The universities reopen and pretend nothing has changed.',
          },
          {
            id: 'letters',
            narration:
              'The post has changed character too. Fewer offprints, more appeals: committees for hunger relief, for prisoners, for a league of nations, for reopening the congresses to everybody who was recently being shot at.',
            speaker: 'A COLLEAGUE',
            dialogue: 'They do not want your physics, Einstein. They want your name at the top of their page. You do understand those are different things.',
          },
          {
            id: 'name',
            narration:
              'He understands it perfectly. A name is a strange instrument to be handed at forty by people who cannot read a line of what earned it, and there is no manual for the thing.',
            choices: [
              {
                id: 'lend',
                label: 'Lend the name to whatever appeal deserves it',
                effects: [
                  { type: 'flag', flag: 'einstein.publicName', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 2 } },
                ],
              },
              {
                id: 'shut',
                label: 'Keep the door shut and the physics private',
                effects: [
                  { type: 'flag', flag: 'einstein.privateMan', value: true },
                  { type: 'resources', effects: { wellbeing: 1, exposure: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Post-war shortages in Germany and the wave of relief and internationalist appeals that sought Einstein’s signature are documented. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-eclipse-breakthrough',
    characterId: 'einstein',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-eclipse-confirmation', priority: 86 },
    once: true,
    variants: [
      {
        id: 'his-theory',
        conditions: [{ type: 'projectCompleted', projectId: 'einstein-general-relativity' }],
        title: 'The Stars Have Moved',
        yearLabel: '1919',
        image: {
          setting: 'a telegram lying open on a desk beside photographic plates in autumn 1919',
          year: 1919,
          characters: ['einstein'],
          mood: 'vindicated, oddly calm',
          details: ['opened telegram', 'glass photographic plates in a sleeve', 'measuring loupe', 'autumn light on a desk'],
          alt: 'An opened telegram beside glass photographic plates and a measuring loupe on a desk.',
        },
        pages: [
          {
            id: 'telegram',
            narration:
              'The telegram comes from a colleague in Leiden, who has heard from London, who has heard from the men with the plates. Deflection observed. Consistent with prediction. Eleven words, and one of them is his whole life.',
          },
          {
            id: 'plates',
            narration:
              'It is not a photograph of a bending ray. It is a set of star positions measured against the same stars taken six months earlier, and the difference is smaller than the width of a hair held at arm’s length, and it is there.',
          },
          {
            id: 'calm',
            narration:
              'He tells his mother by postcard. Then he goes back to what he was doing, because the equations have been right since the November he finished them and the sky was never going to change its mind about it.',
          },
        ],
        historicalNote:
          'Eddington’s 1919 eclipse expedition confirmed the predicted deflection of starlight; the result was announced in London that November. The telegram wording is dramatized.',
      },
      {
        id: 'default',
        title: 'Somebody’s Prediction, Confirmed',
        yearLabel: '1919',
        image: {
          setting: 'a telegram lying open on a desk beside an unfinished notebook, autumn 1919',
          year: 1919,
          characters: ['einstein'],
          mood: 'complicated, quiet, half-owned',
          details: ['opened telegram', 'notebook of unfinished derivations', 'measuring loupe', 'autumn light on a desk'],
          alt: 'An opened telegram beside a notebook of unfinished derivations and a measuring loupe.',
        },
        pages: [
          {
            id: 'telegram',
            narration:
              'The telegram comes from a colleague in Leiden, who has heard from London, who has heard from the men with the plates. Deflection observed. Consistent with prediction. Eleven words, and he has to read them twice to work out how much of it is his.',
          },
          {
            id: 'drawer',
            narration:
              'The prediction that was tested is the one somebody else finished writing. His own version stops forty pages in, at the place where the geometry got harder than he had time for, and it stopped there in a year he can still name.',
          },
          {
            id: 'measure',
            narration:
              'The starlight bent. That is the part he cares about and the part nobody will attach to him. He puts the telegram in the notebook, at the page where it stops, and does not open either of them again for a long time.',
          },
        ],
        historicalNote:
          'The 1919 confirmation of gravitational light-bending is documented. This variant follows a life that never completed its own theory of gravitation and receives the result as half its own.',
      },
    ],
  },
  {
    id: 'einstein-fame-1919',
    characterId: 'einstein',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 74 },
    once: true,
    replacesContextCardId: 'einstein-card-1919-fame',
    variants: [
      {
        id: 'lent-the-name',
        conditions: [
          { type: 'projectCompleted', projectId: 'einstein-eclipse-confirmation' },
          { type: 'choiceWas', choiceKey: 'einstein-crisis-opening:name', choiceId: 'lend' },
          { type: 'yearAtLeast', year: 1919 },
          { type: 'yearAtMost', year: 1930 },
        ],
        title: 'A Name That Can Be Spent',
        yearLabel: '1920s',
        image: {
          setting: 'a hallway stacked with unopened mail sacks and petitions in the early 1920s',
          year: 1921,
          characters: ['einstein'],
          mood: 'besieged, amused, calculating',
          details: ['mail sacks against a wall', 'petitions in a pile', 'hat and coat by the door', 'telephone on a hall table'],
          alt: 'Sacks of unopened mail and a pile of petitions stacked along a hallway wall.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'The post arrives in sacks. Invitations, insults, proposals of marriage, three separate schemes for perpetual motion, and a great many letters that begin by explaining relativity to him.',
          },
          {
            id: 'reporter',
            narration:
              'On the pavement a young man from a newspaper walks backwards in front of him, notebook out, asking for it in one sentence.',
            speaker: 'A REPORTER',
            dialogue: 'Professor — relativity, in one sentence, for our readers?',
          },
          {
            id: 'spend',
            narration:
              'He gives him something short and wrong enough to print. Then he goes upstairs and signs four appeals, because he has worked out what this new thing is: not an honour, a currency. And currency is for spending.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1919-fame' },
          { type: 'resources', effects: { standing: 2, network: 2, exposure: 1 } },
          { type: 'flag', flag: 'einstein.worldFamous', value: true },
        ],
        historicalNote:
          'The eclipse announcement made Einstein an international celebrity almost overnight, and he used that fame throughout the 1920s for pacifist and internationalist causes. Dialogue is dramatized.',
      },
      {
        id: 'confirmed',
        conditions: [
          { type: 'projectCompleted', projectId: 'einstein-eclipse-confirmation' },
          { type: 'yearAtLeast', year: 1919 },
          { type: 'yearAtMost', year: 1930 },
        ],
        title: 'Overnight, at Forty',
        yearLabel: '1920s',
        image: {
          setting: 'a lecture hall doorway crowded with people trying to get in, early 1920s',
          year: 1921,
          characters: ['einstein'],
          mood: 'overwhelmed, wry, tired',
          details: ['crowd at a doorway', 'hats held in hands', 'ticket stubs', 'lecture hall lights'],
          alt: 'A crowd pressed at the doorway of a lecture hall, hats in hands.',
        },
        pages: [
          {
            id: 'papers',
            narration:
              'The newspapers of every country print the same story in different sizes: the heavens have been weighed and found bent. Overnight, at forty, he becomes the only physicist most people on earth could name.',
          },
          {
            id: 'halls',
            narration:
              'The halls sell out. People who cannot follow a line of algebra come to look at a man who can, and go home satisfied, and he cannot for the life of him work out what they came for.',
            speaker: 'ALBERT',
            dialogue: 'They have not understood a word. They applauded anyway. It is very moving and very strange.',
          },
          {
            id: 'cost',
            narration:
              'The work he can do in a day is now measured by the interruptions. He starts writing at five in the morning, which is the only hour the century has not yet claimed.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1919-fame' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
          { type: 'flag', flag: 'einstein.worldFamous', value: true },
        ],
        historicalNote:
          'The global press reaction to the 1919 confirmation and Einstein’s subsequent celebrity are documented. Dialogue is dramatized.',
      },
      {
        id: 'theory-only',
        conditions: [
          { type: 'projectCompleted', projectId: 'einstein-general-relativity' },
          { type: 'yearAtLeast', year: 1921 },
          { type: 'yearAtMost', year: 1930 },
        ],
        title: 'Known to the Right Two Hundred People',
        yearLabel: '1920s',
        image: {
          setting: 'a specialist seminar room with perhaps twenty people, early 1920s',
          year: 1923,
          characters: ['einstein'],
          mood: 'respected, unexcited, contained',
          details: ['twenty chairs half filled', 'blackboard of geometry', 'coats over chair backs', 'winter afternoon light'],
          alt: 'A small seminar room half filled with listeners before a blackboard of geometry.',
        },
        pages: [
          {
            id: 'known',
            narration:
              'The theory is admired by the people equipped to admire it, and there are about two hundred of them in the world. No expedition has sailed. No plates have been measured. It remains, officially, a beautiful conjecture.',
          },
          {
            id: 'wait',
            narration:
              'He is not troubled. Somebody will look eventually, in some eclipse or other, and the sky will say what it says. He has noticed that he minds the waiting less than his colleagues do, and suspects this is arrogance wearing patience as a coat.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1919-fame' },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'A divergent version in which the theory exists but the observational confirmation that produced Einstein’s fame did not occur.',
      },
      {
        id: 'quiet',
        conditions: [
          { type: 'yearAtLeast', year: 1924 },
          { type: 'yearAtMost', year: 1933 },
        ],
        title: 'Other Names in the Papers',
        yearLabel: '1920s',
        image: {
          setting: 'a newsstand in a European city in the mid-1920s',
          year: 1925,
          characters: ['einstein'],
          mood: 'anonymous, level, faintly relieved',
          details: ['rack of folded newspapers', 'coins on a counter', 'wet pavement', 'tram passing behind'],
          alt: 'A newsstand rack of folded newspapers on a wet pavement with a tram passing.',
        },
        pages: [
          {
            id: 'stand',
            narration:
              'The newspapers this decade belong to other people: a channel swimmer, a tenor, a man who has flown further than anyone. Physics gets four lines on an inside page when a professor dies.',
          },
          {
            id: 'anonymous',
            narration:
              'He buys his paper and walks home unrecognised, which he tells himself is a mercy and which is, on certain evenings, simply a fact he keeps turning over like a stone in a pocket.',
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1919-fame' }],
        historicalNote:
          'A divergent version of the 1919 fame card for a life in which the eclipse confirmation and the celebrity that followed never arrived.',
      },
    ],
  },
  {
    id: 'einstein-nobel-prize',
    characterId: 'einstein',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'awarded',
        conditions: [
          { type: 'projectCompleted', projectId: 'einstein-photoelectric' },
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'For the Paper About Light',
        yearLabel: '1922',
        image: {
          setting: 'a ship’s cabin desk with an opened telegram, early 1920s',
          year: 1922,
          characters: ['einstein'],
          mood: 'amused, distant, unsentimental',
          details: ['telegram on a cabin desk', 'porthole with grey sea', 'travelling trunk', 'lecture notes tied with string'],
          alt: 'An opened telegram on a small cabin desk beside a porthole showing grey sea.',
        },
        pages: [
          {
            id: 'telegram',
            narration:
              'The telegram catches him abroad, halfway across an ocean on a lecture tour, which means the ceremony happens without him and somebody else reads out his words in a hall he has never seen.',
          },
          {
            id: 'citation',
            narration:
              'The citation is for the law of the photoelectric effect. It says nothing whatever about space or time. The committee has given him the prize for the one paper he wrote that the committee was sure of, and he finds this funny for about a year.',
          },
          {
            id: 'money',
            narration:
              'The money goes to Zürich, as agreed years ago in a settlement written by lawyers when nobody believed there would ever be any money. He keeps the medal in a drawer with the string and the sealing wax.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, funds: 1 } },
          { type: 'flag', flag: 'einstein.nobel', value: true },
        ],
        historicalNote:
          'Einstein received the 1921 Nobel Prize in Physics, awarded in 1922 for his discovery of the law of the photoelectric effect rather than for relativity; he was travelling when it was announced, and the prize money went to his first wife under their divorce settlement.',
      },
    ],
  },
  {
    id: 'einstein-bohr-debate',
    characterId: 'einstein',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['einstein', 'bohr'],
    trigger: { event: 'afterAction', priority: 70 },
    once: true,
    variants: [
      {
        id: 'human-bohr-present',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1932 },
          { type: 'otherCharacterIsHuman', characterId: 'bohr' },
          {
            any: [
              { type: 'otherCharacterAt', characterId: 'bohr', locationId: 'copenhagen', yearTolerance: 3 },
              { type: 'otherCharacterAt', characterId: 'bohr', locationId: 'berlin', yearTolerance: 3 },
            ],
          },
        ],
        title: 'Breakfast, and Then the Answer',
        locationLabel: 'Brussels',
        yearLabel: '1927–1930',
        image: {
          setting: 'a hotel breakfast room during an international physics congress in Brussels, late 1920s',
          year: 1927,
          characters: ['einstein', 'bohr'],
          mood: 'relentless, affectionate, unresolved',
          details: ['breakfast table with cleared plates', 'napkin covered in diagrams', 'coffee pot', 'congress programme', 'winter light through tall windows'],
          alt: 'A cleared breakfast table with a napkin covered in diagrams and a congress programme.',
        },
        pages: [
          {
            id: 'mornings',
            narration:
              'The congress runs a week and the real work happens at breakfast. Every morning Albert arrives with a new device made of clocks and shutters and springs, designed to catch the new physics telling a lie.',
          },
          {
            id: 'evenings',
            narration:
              'Every evening the answer comes back, patiently, at length, with three qualifications attached — and the device turns out to have been defeated by the very gravity Albert himself put into the world.',
            speaker: 'BOHR',
            dialogue: 'You are not saying it is wrong, my friend. You are saying you do not like it. Those are very different complaints, and only one of them is physics.',
          },
          {
            id: 'argue',
            narration:
              'They are both right about something and neither of them will live to see which. Tomorrow there will be another breakfast.',
            choices: [
              {
                id: 'press',
                label: 'Press the objection until it breaks or you do',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 1, tension: 1, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 2 },
                ],
              },
              {
                id: 'listen',
                label: 'Listen all the way to the end before answering',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 2, tension: 0, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The Einstein–Bohr exchanges at the Solvay congresses of 1927 and 1930, in which Einstein proposed thought experiments to defeat quantum indeterminacy and Bohr answered them, are documented. Dialogue is dramatized.',
      },
      {
        id: 'npc-bohr',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1932 },
          { type: 'otherCharacterIsNpc', characterId: 'bohr' },
        ],
        title: 'The Argument That Will Not Close',
        locationLabel: 'Brussels',
        yearLabel: '1927–1930',
        image: {
          setting: 'a congress discussion room with a long table and a blackboard, late 1920s',
          year: 1927,
          characters: ['einstein', 'bohr'],
          mood: 'courteous, immovable, warm',
          details: ['long discussion table', 'blackboard of a thought experiment', 'formal dark suits over chair backs', 'water carafes'],
          alt: 'A long congress discussion table before a blackboard sketched with a thought experiment.',
        },
        pages: [
          {
            id: 'device',
            narration:
              'He brings a box with a shutter and a clock and a spring balance, and he has built it out of pure thought to prove that nature cannot really be as vague as they are claiming. It takes his opponent one night to find the flaw.',
          },
          {
            id: 'reply',
            narration:
              'The reply, when it comes, is delivered in that slow, hedged, endlessly qualified way that makes half the room want to finish the sentence for him — and is, infuriatingly, correct.',
            speaker: 'BOHR',
            dialogue: 'It is not that nature is vague. It is that your question has assumed an answer nature was never asked to have.',
          },
          {
            id: 'argue',
            narration:
              'They part friends and remain opponents for thirty years, which turns out to be a kind of friendship almost nobody else in physics is offered.',
            choices: [
              {
                id: 'press',
                label: 'Press the objection until it breaks or you do',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 1, tension: 1, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 2 },
                ],
              },
              {
                id: 'listen',
                label: 'Listen all the way to the end before answering',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 2, tension: 0, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The long Einstein–Bohr disagreement over the interpretation of quantum mechanics, conducted with mutual respect, is documented. Dialogue is dramatized.',
      },
      {
        id: 'human-bohr-elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1933 },
          { type: 'otherCharacterIsHuman', characterId: 'bohr' },
        ],
        title: 'An Argument Conducted by Post',
        yearLabel: 'Late 1920s',
        image: {
          setting: 'a writing desk with a long unfinished letter and a sketched thought experiment, late 1920s',
          year: 1929,
          characters: ['einstein'],
          mood: 'restless, unanswered, patient',
          details: ['long handwritten letter', 'sketch of a box with a shutter', 'blotter', 'lamp', 'empty chair opposite'],
          alt: 'A long handwritten letter and a sketch of a box with a shutter on a writing desk.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The congress goes ahead without the one man he wanted to argue with. So the argument goes into a letter instead: nine pages, a diagram of a box with a shutter and a clock, and the question underneath it that will not leave him alone.',
          },
          {
            id: 'wait',
            narration:
              'Letters are a poor way to be disagreed with. By the time the reply arrives he has thought of two better objections and forgotten why the first one mattered.',
          },
          {
            id: 'argue',
            narration: 'He reads it back before sealing it and has to decide what kind of letter it is going to be.',
            choices: [
              {
                id: 'press',
                label: 'Press the objection until it breaks or you do',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 1, tension: 1, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 2 },
                ],
              },
              {
                id: 'listen',
                label: 'Ask the question and leave room for the answer',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 2, tension: 0, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A divergent version of the documented Einstein–Bohr debate, conducted in correspondence rather than face to face.',
      },
    ],
  },
  {
    id: 'einstein-emigration-1933',
    characterId: 'einstein',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 79 },
    once: true,
    replacesContextCardId: 'einstein-card-1933-emigration',
    variants: [
      {
        id: 'berlin',
        conditions: [
          { type: 'locationIs', locationId: 'berlin' },
          { type: 'yearAtLeast', year: 1932 },
          { type: 'yearAtMost', year: 1938 },
        ],
        title: 'Look at It Very Carefully',
        locationLabel: 'Berlin',
        yearLabel: '1932–1933',
        image: {
          setting: 'a Berlin apartment being packed in the winter of 1932, shutters half closed',
          year: 1932,
          characters: ['einstein'],
          mood: 'quiet, deliberate, final',
          details: ['open trunk', 'books stacked by the door', 'shuttered window', 'sheet over a piano', 'keys on a hall table'],
          alt: 'An open trunk and stacked books beside a shuttered window in an emptying apartment.',
        },
        pages: [
          {
            id: 'winter',
            narration:
              'The flat is being emptied for a winter abroad, the way it has been every winter for years. This time, at the door, he turns and looks at the rooms for longer than the errand requires.',
            speaker: 'ELSA',
            dialogue: 'Why are you standing there?',
          },
          {
            id: 'answer',
            narration:
              'Take a good look at it, he tells her. You will not see it again. She thinks he is being theatrical. He is doing arithmetic — the same arithmetic he has been doing since the lists began appearing in the newspapers with academic titles beside the names.',
          },
          {
            id: 'resign',
            narration:
              'By spring the government has changed and the letters from friends all say the same thing in different handwriting: do not come back. There is a seat at the Academy with his name on it and a page in front of him that could give it up.',
            choices: [
              {
                id: 'resign',
                label: 'Send the resignation and do not go back',
                effects: [
                  { type: 'flag', flag: 'einstein.resigned', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -2, exposure: 1 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say nothing and keep the seat as long as it holds',
                effects: [
                  { type: 'flag', flag: 'einstein.keptSeat', value: true },
                  { type: 'resources', effects: { standing: 1, wellbeing: -2 } },
                ],
              },
              {
                id: 'protest',
                label: 'Publish the letter and let them read it',
                effects: [
                  { type: 'flag', flag: 'einstein.publishedProtest', value: true },
                  { type: 'resources', effects: { exposure: 2, network: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1933-emigration' }],
        historicalNote:
          'Einstein left Germany in December 1932 and never returned; after the Nazi seizure of power in 1933 he resigned from the Prussian Academy and renounced his German citizenship. His parting remark to Elsa about looking at the house for the last time is widely reported; the wording here is dramatized.',
      },
      {
        id: 'abroad',
        conditions: [
          { type: 'narrativeFlag', flag: 'einstein.berlinPost' },
          { type: 'yearAtLeast', year: 1932 },
          { type: 'yearAtMost', year: 1938 },
        ],
        title: 'Do Not Come Back',
        yearLabel: '1933',
        image: {
          setting: 'a hotel writing desk abroad with a stack of letters bearing German stamps, 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'exiled, clear-headed, cold',
          details: ['letters with foreign stamps', 'hotel writing paper', 'travelling coat over a chair', 'harbour visible through a window'],
          alt: 'Hotel writing paper and a stack of stamped letters on a desk with a harbour beyond the window.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The news finds him out of the country, which is a piece of luck so ordinary it takes him a week to understand what it saved him from. The government has changed. The universities are being cleaned.',
          },
          {
            id: 'letters',
            narration:
              'The letters arrive over three weeks from three countries and all of them say the same sentence in different handwriting. Colleagues of twenty years are suddenly, officially, no longer colleagues. Some of them write. Some of them do not, and that silence is its own letter.',
          },
          {
            id: 'resign',
            narration:
              'He has a post there still, and a salary, and a seat at a table he sat at for nineteen years. There is a blank sheet of hotel paper in front of him.',
            choices: [
              {
                id: 'resign',
                label: 'Send the resignation and do not go back',
                effects: [
                  { type: 'flag', flag: 'einstein.resigned', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -2, exposure: 1 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say nothing and keep the seat as long as it holds',
                effects: [
                  { type: 'flag', flag: 'einstein.keptSeat', value: true },
                  { type: 'resources', effects: { standing: 1, wellbeing: -2 } },
                ],
              },
              {
                id: 'protest',
                label: 'Publish the letter and let them read it',
                effects: [
                  { type: 'flag', flag: 'einstein.publishedProtest', value: true },
                  { type: 'resources', effects: { exposure: 2, network: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1933-emigration' }],
        historicalNote:
          'Einstein was outside Germany when the Nazi government took power in 1933 and did not return; the removal of Jewish academics from German universities began that year.',
      },
      {
        id: 'no-post',
        conditions: [
          { type: 'yearAtLeast', year: 1932 },
          { type: 'yearAtMost', year: 1938 },
        ],
        title: 'News About a Country He Left',
        yearLabel: '1933',
        image: {
          setting: 'a desk of foreign newspapers and letters bearing German stamps, 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'cold, watchful, unsurprised',
          details: ['foreign newspapers folded open', 'letters with German stamps', 'reading glasses', 'unlit lamp', 'window over a grey street'],
          alt: 'Foreign newspapers folded open beside a stack of stamped letters and reading glasses.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'He gave that country back at sixteen with a form and a clerk’s stamp, and has spent every year since being told it did not really count. It counts now. The government has changed. The universities are being cleaned.',
          },
          {
            id: 'letters',
            narration:
              'The letters come over three weeks and all of them say the same sentence in different handwriting. Men he has corresponded with for twenty years are suddenly, officially, no longer anything. Some of them write. Some do not, and that silence is its own letter.',
          },
          {
            id: 'resign',
            narration:
              'He holds no post there to give up and no seat to leave empty. All he has is a name that carries across borders and a blank sheet of paper, which turns out to be a harder position than it sounds.',
            choices: [
              {
                id: 'resign',
                label: 'Give up the citizenship, and say in writing why',
                effects: [
                  { type: 'flag', flag: 'einstein.resigned', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, exposure: 1 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say nothing. It stopped being your country at sixteen',
                effects: [
                  { type: 'flag', flag: 'einstein.keptSeat', value: true },
                  { type: 'resources', effects: { wellbeing: -2 } },
                ],
              },
              {
                id: 'protest',
                label: 'Publish the letter and let them read it',
                effects: [
                  { type: 'flag', flag: 'einstein.publishedProtest', value: true },
                  { type: 'resources', effects: { exposure: 2, network: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1933-emigration' }],
        historicalNote:
          'The Nazi seizure of power and the removal of Jewish academics from German universities in 1933 are documented. This variant follows a life that never held the Berlin appointment and so had nothing formal to resign.',
      },
    ],
  },
  {
    id: 'einstein-crisis-closing',
    characterId: 'einstein',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'famous',
        conditions: [
          { type: 'projectCompleted', projectId: 'einstein-eclipse-confirmation' },
          { type: 'narrativeFlag', flag: 'einstein.berlinPost' },
        ],
        title: 'The Most Famous Man Without a Country',
        yearLabel: '1933',
        image: {
          setting: 'a ship’s rail at sea with a receding European coastline, 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'severed, composed, westward',
          details: ['ship’s rail and wake', 'coastline going out of sight', 'travelling coat', 'gulls'],
          alt: 'A ship’s rail and wake with a coastline receding on the horizon.',
        },
        pages: [
          {
            id: 'leave',
            narration:
              'The trunks go down the stairs one at a time, and the cases hold rather less than nineteen years ought to. The violin travels in the cabin with him. The papers travel in the cabin with him. Everything else is furniture.',
          },
          {
            id: 'coast',
            narration:
              'He stands at the rail until the coast is a smudge. He is fifty-four, and stateless again, which is the only condition in which he has ever felt entirely accurate.',
          },
        ],
        historicalNote:
          'Einstein emigrated in 1933 as an internationally famous figure and never set foot in Germany again.',
      },
      {
        id: 'known',
        conditions: [
          { type: 'projectCompleted', projectId: 'einstein-general-relativity' },
          { type: 'narrativeFlag', flag: 'einstein.berlinPost' },
        ],
        title: 'The Theory Travels Better Than the Man',
        yearLabel: '1933',
        image: {
          setting: 'a railway compartment crossing a border at night in 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'watchful, tired, unsentimental',
          details: ['compartment window at night', 'papers in an inside pocket', 'travelling case on a rack', 'lamp in a corridor'],
          alt: 'A night railway compartment with a case on the rack and a corridor lamp beyond the glass.',
        },
        pages: [
          {
            id: 'border',
            narration:
              'The equations do not need papers. They have been in twelve languages for years and no border guard has ever asked them anything. He, on the other hand, is asked twice.',
          },
          {
            id: 'ahead',
            narration:
              'Somewhere ahead there is an institute with money and no students and a room he has not seen. It is not a homecoming. He has stopped expecting those.',
          },
        ],
        historicalNote:
          'A divergent closing for a life whose theory is established but whose public confirmation never came.',
      },
      {
        id: 'removed',
        conditions: [{ type: 'narrativeFlag', flag: 'einstein.berlinPost' }],
        title: 'The Doors Close One at a Time',
        yearLabel: '1933',
        image: {
          setting: 'a university corridor with a nameplate removed from a door, 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'stripped, quiet, undefeated',
          details: ['blank space where a nameplate was', 'four screw holes in a door', 'empty coat hook', 'winter corridor light'],
          alt: 'A door with four screw holes where a nameplate has been removed.',
        },
        pages: [
          {
            id: 'plate',
            narration:
              'It is not done in a single day. It is done in small administrative steps, each one signed by somebody who considers himself uninvolved: a committee, a list, a form, and finally four screw holes where a nameplate used to be.',
          },
          {
            id: 'leave',
            narration:
              'He takes the violin, the papers, and the coat. Everything else can stay and belong to whoever wants it. What he cannot decide, on the train, is whether he is being driven out or simply going first.',
          },
        ],
        historicalNote:
          'The bureaucratic removal of Jewish academics from German institutions from 1933 is documented. The scene is dramatized.',
      },
      {
        id: 'watched-from-outside',
        title: 'Across a Border, and Not Far Enough',
        yearLabel: '1933',
        image: {
          setting: 'a study window looking north over rooftops at dusk, 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'safe, implicated, unquiet',
          details: ['window over rooftops', 'foreign newspaper folded on a sill', 'lamp unlit', 'violin case against a wall'],
          alt: 'A study window over rooftops at dusk with a folded foreign newspaper on the sill.',
        },
        pages: [
          {
            id: 'border',
            narration:
              'He does not have to leave. He is already outside, and has been for so long that the passport in the drawer is a joke he made at sixteen and never took back. Being safe by an accident of paperwork turns out to feel almost exactly like being lucky and not at all like being right.',
          },
          {
            id: 'north',
            narration:
              'The trains still run north from here. He watches the direction they go in and thinks about the people he knows at the other end of the line, and how few of them have anywhere to be sent to.',
          },
        ],
        historicalNote:
          'A divergent closing for a life that was never inside Germany to be driven out of it. The 1933 removals are documented.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Legacy, 1933-1955
  // -------------------------------------------------------------------------
  {
    id: 'einstein-legacy-opening',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'exile',
        conditions: [
          { type: 'choiceWas', choiceKey: 'einstein-emigration-1933:resign', choiceId: 'resign' },
          { type: 'narrativeFlag', flag: 'einstein.berlinPost' },
        ],
        title: 'A Trunk, and a Room That Is Not His Yet',
        yearLabel: '1933',
        image: {
          setting: 'a hallway of unopened crates in a rented house, 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'displaced, calm, faintly absurd',
          details: ['unopened crates in a hallway', 'a coat on a new hook', 'violin case set down', 'a key still in the door'],
          alt: 'Unopened crates stacked in the hallway of a rented house with a coat on a new hook.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'The crates come off the cart and stand in the hall for eleven days, because opening them would settle something he is not ready to settle. The coat goes on a hook that is the wrong height. The violin he unpacks the first evening.',
          },
          {
            id: 'walk',
            narration:
              'Then a road, and an institute at the end of it, and a habit of walking there in the morning and back in the afternoon in the same coat until the neighbours stop remarking on it.',
            speaker: 'ELSA',
            dialogue: 'It is very quiet here, Albert. You will have to find something to be furious about.',
          },
          {
            id: 'purpose',
            narration:
              'There is a salary, a room, no students, and no duties of any kind — the offer Berlin made him twenty years ago, made again by people who have not yet disappointed him. The question is what to spend it on.',
            choices: [
              {
                id: 'unify',
                label: 'Spend what is left on one field theory for everything',
                effects: [
                  { type: 'flag', flag: 'einstein.unify', value: true },
                  { type: 'theme', theme: 'unification', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'speak',
                label: 'Spend it writing letters for people who need a name on the envelope',
                effects: [
                  { type: 'flag', flag: 'einstein.speak', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 2 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Einstein left Germany permanently in 1933 and took a research post at the newly founded Institute for Advanced Study in Princeton, with no teaching duties. Dialogue is dramatized.',
      },
      {
        id: 'stayed',
        conditions: [{ type: 'choiceWas', choiceKey: 'einstein-emigration-1933:resign', choiceId: 'resign' }],
        title: 'The Same Rooms, and the News',
        yearLabel: '1933',
        image: {
          setting: 'a long-lived-in study with a wireless set and a stack of foreign newspapers, 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'settled, guilty, resolved',
          details: ['worn armchair', 'wireless set', 'foreign newspapers in a stack', 'violin case in its usual place', 'lamp lit early'],
          alt: 'A worn armchair and a wireless set in a long-lived-in study with newspapers stacked beside it.',
        },
        pages: [
          {
            id: 'rooms',
            narration:
              'Nothing moves. The same stairs, the same chair, the same view he has stopped noticing. The upheaval is entirely elsewhere, happening to people he knows, and the strangest part is how completely a life can fail to be interrupted.',
          },
          {
            id: 'wireless',
            narration:
              'He buys a better wireless set, which is the only concession the year gets out of him, and listens to it at a volume that makes conversation difficult.',
            speaker: 'ELSA',
            dialogue: 'You cannot stop it by hearing it sooner, Albert.',
          },
          {
            id: 'purpose',
            narration:
              'There is a salary, a room, and about twenty working years left, and he has never in his life been able to do two things properly at once. So: one thing.',
            choices: [
              {
                id: 'unify',
                label: 'Spend what is left on one field theory for everything',
                effects: [
                  { type: 'flag', flag: 'einstein.unify', value: true },
                  { type: 'theme', theme: 'unification', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, theory: 1 } },
                ],
              },
              {
                id: 'speak',
                label: 'Spend it writing letters for people who need a name on the envelope',
                effects: [
                  { type: 'flag', flag: 'einstein.speak', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 2 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A divergent opening for a life that was already outside Germany in 1933 and did not have to emigrate. Einstein’s documented route took him to Princeton.',
      },
      {
        id: 'default',
        title: 'The Room With Nothing In It',
        yearLabel: '1933',
        image: {
          setting: 'an almost empty institute office with a blackboard and two chairs, 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'spare, expectant, new',
          details: ['clean blackboard', 'two chairs', 'window over lawns', 'a single crate of books', 'pipe on a sill'],
          alt: 'An almost empty institute office with a clean blackboard, two chairs and one crate of books.',
        },
        pages: [
          {
            id: 'office',
            narration:
              'They give him a room, a blackboard, and no instructions of any kind. In nineteen years at an academy he was never once given nothing to do, and it takes him most of a winter to understand that this is the gift.',
          },
          {
            id: 'language',
            narration:
              'The language outside the window defeats him for a few months and then stops mattering. Physics is done in the same alphabet everywhere, and the rest can be managed with a shrug and a certain amount of pointing.',
            speaker: 'ELSA',
            dialogue: 'They call you the greatest man in the world here, and they still put you on a committee.',
          },
          {
            id: 'purpose',
            narration:
              'There are, at most, twenty working years left, and he has never in his life been able to do two things properly at once.',
            choices: [
              {
                id: 'unify',
                label: 'Spend what is left on one field theory for everything',
                effects: [
                  { type: 'flag', flag: 'einstein.unify', value: true },
                  { type: 'theme', theme: 'unification', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'speak',
                label: 'Spend it writing letters for people who need a name on the envelope',
                effects: [
                  { type: 'flag', flag: 'einstein.speak', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 2 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The Institute for Advanced Study offered permanent research positions with no teaching obligations. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-godel-walk',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['einstein', 'godel'],
    trigger: { event: 'afterAction', priority: 68 },
    once: true,
    variants: [
      {
        id: 'human-godel-present',
        conditions: [
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1953 },
          { type: 'otherCharacterIsHuman', characterId: 'godel' },
          { type: 'otherCharacterAt', characterId: 'godel', locationId: 'princeton', yearTolerance: 2 },
        ],
        title: 'The Walk Home',
        locationLabel: 'Princeton',
        yearLabel: '1940s',
        image: {
          setting: 'a tree-lined American suburban path in late afternoon, 1940s',
          year: 1947,
          characters: ['einstein', 'godel'],
          mood: 'companionable, strange, unhurried',
          details: ['long afternoon shadows', 'two overcoats', 'leaf-strewn path', 'white fences', 'a briefcase'],
          alt: 'Two long shadows on a leaf-strewn suburban path between white fences in late afternoon.',
        },
        pages: [
          {
            id: 'pair',
            narration:
              'They walk home together most days, an old man in a jumper and a much thinner one buttoned into an overcoat in July. Nobody in the town can work out what they talk about. Neither, some days, can they.',
          },
          {
            id: 'time',
            narration:
              'Today it is time itself. The logician has been reading the field equations the way a lawyer reads a contract, looking for what they permit rather than what they intend.',
            speaker: 'GÖDEL',
            dialogue: 'Your equations allow a universe that rotates. In such a world one may travel far enough into the future to arrive in one’s own past. I have written it down. It is quite rigorous.',
          },
          {
            id: 'reply',
            narration:
              'Albert walks another twenty paces without answering, which is his highest form of compliment. Then he says that he has always suspected his equations were cleverer than he was, and that it is a great relief to have it confirmed by an expert.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'godel', familiarity: 2, respect: 2, tension: 0, flag: 'princeton-walks' },
          { type: 'flag', flag: 'einstein.godelWalks', value: true },
        ],
        historicalNote:
          'Einstein and Gödel walked to and from the Institute together for years in Princeton, and Gödel published rotating-universe solutions to the field equations permitting closed timelike curves in 1949. Dialogue is dramatized.',
      },
      {
        id: 'npc-godel',
        conditions: [
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1953 },
          { type: 'otherCharacterIsNpc', characterId: 'godel' },
        ],
        title: 'Two Overcoats in July',
        locationLabel: 'Princeton',
        yearLabel: '1940s',
        image: {
          setting: 'a tree-lined American suburban path in late afternoon, 1940s',
          year: 1947,
          characters: ['einstein', 'godel'],
          mood: 'affectionate, eccentric, quiet',
          details: ['two overcoats in summer', 'long shadows', 'institute lawns behind', 'a folded paper under an arm'],
          alt: 'Two figures in overcoats walking a shaded path away from institute lawns.',
        },
        pages: [
          {
            id: 'privilege',
            narration:
              'He tells someone, and means it entirely, that his own work no longer amounts to much and that he comes to the institute chiefly for the privilege of walking home with the logician.',
          },
          {
            id: 'question',
            narration:
              'The logician is unwell in a way that no doctor has been able to name, and afraid of things that have not happened, and the sharpest mind Albert has met since Göttingen.',
            speaker: 'GÖDEL',
            dialogue: 'Your universe need not have begun. It may only rotate. I have checked it four times, and once more this morning.',
          },
          {
            id: 'walk',
            narration:
              'They part at the corner every afternoon with the same nod. It is the last real friendship of his life and neither of them ever says so out loud.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'godel', familiarity: 2, respect: 2, tension: 0, flag: 'princeton-walks' },
          { type: 'flag', flag: 'einstein.godelWalks', value: true },
        ],
        historicalNote:
          'Einstein’s remark about coming to the Institute for the privilege of walking home with Gödel is widely reported; the wording here is dramatized. Gödel’s rotating-universe solutions date from 1949.',
      },
      {
        id: 'alone',
        conditions: [
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1953 },
        ],
        title: 'The Same Path, No Company',
        yearLabel: '1940s',
        image: {
          setting: 'a single figure walking a tree-lined path in late afternoon, 1940s',
          year: 1947,
          characters: ['einstein'],
          mood: 'solitary, reflective, unhurried',
          details: ['one long shadow', 'leaf-strewn path', 'empty bench', 'low sun through branches'],
          alt: 'A single long shadow on a leaf-strewn path beside an empty bench.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'He walks the same road every afternoon, at the same speed, in the same weather-defeating jumper. The conversation happens anyway; it simply has only one participant, and that one has heard all the arguments before.',
          },
          {
            id: 'miss',
            narration:
              'What he misses is not agreement. It is somebody good enough to disagree with him in the correct way — slowly, and about the assumption rather than the answer.',
          },
        ],
        historicalNote:
          'A divergent version of the documented Princeton friendship, for a life in which the two men did not overlap.',
      },
    ],
  },
  {
    id: 'einstein-dice-letter',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 54 },
    once: true,
    variants: [
      {
        id: 'pressed',
        conditions: [
          { type: 'choiceWas', choiceKey: 'einstein-bohr-debate:argue', choiceId: 'press' },
          { type: 'yearAtLeast', year: 1936 },
          { type: 'yearAtMost', year: 1950 },
        ],
        title: 'The Objection That Would Not Die',
        yearLabel: '1935–1940s',
        image: {
          setting: 'a study desk with a short joint paper and a long letter in progress, mid-1930s',
          year: 1936,
          characters: ['einstein'],
          mood: 'obstinate, isolated, clear',
          details: ['short typed paper', 'long handwritten letter', 'pen at rest', 'lamp', 'window over dark lawns'],
          alt: 'A short typed paper beside a long handwritten letter under a desk lamp.',
        },
        pages: [
          {
            id: 'paper',
            narration:
              'He writes it up properly with two younger colleagues: not a refutation, a question. If measuring one thing here settles what is true about a thing over there, then either the description is incomplete or the world is stranger than anyone is admitting.',
          },
          {
            id: 'answer',
            narration:
              'The answer comes back from Copenhagen within weeks, courteous and unyielding, and the younger generation reads it and returns to work. He has become the man they respect and route around.',
          },
          {
            id: 'dice',
            narration:
              'He writes to an old friend that he still cannot accept a universe that decides anything by throwing. He knows how this sounds. He is seventy per cent certain he is right and one hundred per cent certain he cannot prove it.',
          },
        ],
        historicalNote:
          'Einstein published the 1935 paper with two younger colleagues questioning whether quantum mechanics is complete; Bohr replied the same year. His objection to fundamental chance, expressed in correspondence, is documented. Wording is paraphrased, not quoted.',
      },
      {
        id: 'listened',
        conditions: [
          { type: 'choiceWas', choiceKey: 'einstein-bohr-debate:argue', choiceId: 'listen' },
          { type: 'yearAtLeast', year: 1936 },
          { type: 'yearAtMost', year: 1950 },
        ],
        title: 'A Disagreement Kept Warm',
        yearLabel: '1935–1940s',
        image: {
          setting: 'a desk with a long correspondence file and a pipe going out, late 1930s',
          year: 1938,
          characters: ['einstein'],
          mood: 'thoughtful, unpersuaded, generous',
          details: ['tied bundle of letters', 'pipe gone out', 'reading glasses', 'lamp on a low flame'],
          alt: 'A tied bundle of correspondence beside reading glasses and an unlit pipe.',
        },
        pages: [
          {
            id: 'file',
            narration:
              'The file of letters is thicker than most men’s collected works. He has read every objection to the end before answering it, which is a discipline he learned late and at some cost to his temper.',
          },
          {
            id: 'position',
            narration:
              'He is not persuaded. He has simply stopped needing to win. The theory works, every experiment agrees with it, and he still believes it is a magnificent description of something underneath that nobody has looked at yet.',
          },
          {
            id: 'dice',
            narration:
              'He writes that he cannot believe the world settles its affairs by throwing. Then he adds, because he is honest before he is stubborn, that the world is under no obligation to consult him.',
          },
        ],
        historicalNote:
          'Einstein maintained his objection to the completeness of quantum mechanics in correspondence throughout his later life. Wording is paraphrased.',
      },
      {
        id: 'unfinished',
        conditions: [
          { type: 'yearAtLeast', year: 1938 },
          { type: 'yearAtMost', year: 1950 },
        ],
        title: 'Something Underneath',
        yearLabel: 'Late 1930s',
        image: {
          setting: 'a blackboard of half-erased notation in an institute office at night',
          year: 1939,
          characters: ['einstein'],
          mood: 'brooding, unfinished, undeterred',
          details: ['half-erased blackboard', 'chalk in a tray', 'lamp on a desk', 'coat over a chair'],
          alt: 'A half-erased blackboard of notation in an office lit by a single desk lamp.',
        },
        pages: [
          {
            id: 'incomplete',
            narration:
              'The new physics predicts everything anyone has thought to measure, and it does so in terms of what is likely. He does not think it is wrong. He thinks it is a very good description of the shadow of something.',
          },
          {
            id: 'alone',
            narration:
              'The young men are polite about this. He notices that being treated gently is what happens to a position just before it stops being argued with.',
          },
        ],
        historicalNote:
          'Einstein’s lifelong conviction that quantum mechanics was incomplete rather than incorrect is documented.',
      },
    ],
  },
  {
    id: 'einstein-letter-1939',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 77 },
    once: true,
    replacesContextCardId: 'einstein-card-1939-letter',
    variants: [
      {
        id: 'visit',
        conditions: [
          { type: 'projectNotCompleted', projectId: 'einstein-szilard-letter' },
          {
            any: [
              { type: 'locationIs', locationId: 'princeton' },
              { type: 'locationIs', locationId: 'newYork' },
              { type: 'locationIs', locationId: 'cambridgeMA' },
              { type: 'locationIs', locationId: 'washingtonDC' },
            ],
          },
          { type: 'yearAtLeast', year: 1939 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'A Car Comes Down the Lane',
        locationLabel: 'Long Island',
        yearLabel: '1939',
        image: {
          setting: 'a rented summer cottage porch near a Long Island shore in August 1939',
          year: 1939,
          characters: ['einstein'],
          mood: 'summer stillness turning cold',
          details: ['screen door', 'small sailing boat pulled up on sand', 'car parked crooked in a lane', 'glasses of water on a table', 'wicker chairs'],
          alt: 'A screen-door porch above a shore with a small sailing boat pulled up on the sand.',
        },
        pages: [
          {
            id: 'summer',
            narration:
              'The cottage has no telephone and a borrowed sailing boat that he handles badly and with enormous pleasure. It is August. He is sixty and sunburnt and has not thought about politics in six weeks.',
          },
          {
            id: 'visitor',
            narration:
              'A car comes down the lane driven by a young physicist, because the man in the passenger seat has never learned to drive and has come a long way to say one thing.',
            speaker: 'SZILÁRD',
            dialogue: 'A chain reaction in uranium. Not in principle. In a laboratory, this year, with equipment that exists. And Germany has stopped selling the ore.',
          },
          {
            id: 'sign',
            narration:
              'Albert puts down the glass of water. He has spent twenty years arguing that nations cannot be trusted with anything sharper than a treaty, and he says, in German, that this particular possibility had simply never occurred to him. There is a draft letter on the table, addressed to a president.',
            choices: [
              {
                id: 'sign',
                label: 'Put your name at the bottom',
                effects: [
                  { type: 'flag', flag: 'einstein.signedLetter', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 1 } },
                ],
              },
              {
                id: 'wait',
                label: 'Ask for the night to think',
                effects: [
                  { type: 'flag', flag: 'einstein.hesitated', value: true },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
              {
                id: 'refuse',
                label: 'Refuse. Let somebody else’s name carry it',
                effects: [
                  { type: 'flag', flag: 'einstein.refusedLetter', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -1 },
                  { type: 'resources', effects: { exposure: -1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1939-letter' }],
        historicalNote:
          'In August 1939 Leo Szilárd, driven by a colleague, visited Einstein at a rented Long Island cottage and persuaded him to sign a letter to President Roosevelt warning of nuclear chain reactions. Einstein’s reported reaction — that he had not thought of that — is documented; the wording here is dramatized.',
      },
      {
        id: 'from-afar',
        conditions: [
          { type: 'projectNotCompleted', projectId: 'einstein-szilard-letter' },
          { type: 'yearAtLeast', year: 1939 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'A Letter Asking for a Name',
        yearLabel: '1939',
        image: {
          setting: 'a writing desk in August 1939 with an airmail letter and a typed draft beside it',
          year: 1939,
          characters: ['einstein'],
          mood: 'summer stillness turning cold',
          details: ['airmail envelope', 'typed draft with a blank signature line', 'glass of water', 'open window over a garden', 'fountain pen still capped'],
          alt: 'An airmail envelope and a typed draft with a blank signature line on a summer writing desk.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'It is August and he has not thought about politics in six weeks. Then the post brings a thick envelope from a physicist he knows slightly, containing a draft of something addressed to a head of state.',
          },
          {
            id: 'argument',
            narration:
              'The argument in it is four paragraphs long and entirely sound. A chain reaction in uranium: not in principle, in a laboratory, this year, with equipment that exists. And the country he was born in has stopped selling the ore.',
            speaker: 'SZILÁRD',
            dialogue: 'I do not need your physics. Everyone has the physics. I need the one signature on earth that will be read the day it arrives.',
          },
          {
            id: 'sign',
            narration:
              'He has spent twenty years arguing that nations cannot be trusted with anything sharper than a treaty. He reads it twice and finds, with some annoyance, that this particular possibility had simply never occurred to him. There is a blank line at the bottom.',
            choices: [
              {
                id: 'sign',
                label: 'Put your name at the bottom',
                effects: [
                  { type: 'flag', flag: 'einstein.signedLetter', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 1 } },
                ],
              },
              {
                id: 'wait',
                label: 'Ask for the night to think',
                effects: [
                  { type: 'flag', flag: 'einstein.hesitated', value: true },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
              {
                id: 'refuse',
                label: 'Refuse. Let somebody else’s name carry it',
                effects: [
                  { type: 'flag', flag: 'einstein.refusedLetter', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -1 },
                  { type: 'resources', effects: { exposure: -1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1939-letter' }],
        historicalNote:
          'Leo Szilárd drafted the August 1939 letter to President Roosevelt warning of nuclear chain reactions and sought Einstein’s signature because of the weight his name carried. This variant reaches him by post rather than in person. Dialogue is dramatized.',
      },
      {
        id: 'after',
        conditions: [
          { type: 'yearAtLeast', year: 1939 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'Several Careful Hands',
        yearLabel: '1939',
        image: {
          setting: 'a still bay in late summer seen from a small boat with a slack sail, 1939',
          year: 1939,
          characters: ['einstein'],
          mood: 'becalmed, thoughtful, heavy',
          details: ['slack sail', 'flat water', 'shoreline of low trees', 'shoes off in the bottom of the boat'],
          alt: 'A small sailing boat with a slack sail on flat water near a low wooded shore.',
        },
        pages: [
          {
            id: 'water',
            narration:
              'The letter has gone. A plain envelope, several careful hands, and then a desk belonging to a head of state, and there is nothing further to be done about any of it from the middle of a bay in August.',
          },
          {
            id: 'weight',
            narration:
              'The sail goes slack and the boat sits still. He thinks about how many hands a thing passes through between a signature and a consequence, and how not one of them ever feels like the hand that did it.',
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1939-letter' }],
        historicalNote:
          'The Einstein–Szilárd letter of August 1939 reached Roosevelt in October and contributed to the establishment of American nuclear research. Einstein sailed regularly and famously without much skill.',
      },
    ],
  },
  {
    id: 'einstein-szilard-letter-breakthrough',
    characterId: 'einstein',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-szilard-letter', priority: 84 },
    once: true,
    variants: [
      {
        id: 'signed',
        conditions: [{ type: 'choiceWas', choiceKey: 'einstein-letter-1939:sign', choiceId: 'sign' }],
        title: 'Two Pages and a Signature',
        yearLabel: '1939',
        image: {
          setting: 'a typed two-page letter on a table with a fountain pen resting on it, 1939',
          year: 1939,
          characters: ['einstein'],
          mood: 'sober, irrevocable, quiet',
          details: ['two typed pages', 'fountain pen uncapped', 'plain envelope', 'summer light across a table'],
          alt: 'Two typed pages on a table with an uncapped fountain pen resting beside a plain envelope.',
        },
        pages: [
          {
            id: 'sign',
            narration:
              'The letter is two pages long and says less than it knows. Extremely powerful bombs of a new type may be constructed. The administration should establish contact. Uranium ore comes chiefly from the Congo.',
          },
          {
            id: 'name',
            narration:
              'His signature is the only reason anyone will read it, and everyone at the table understands that this is the entire purpose of the afternoon. He signs it anyway. The alternative is to be right and silent while somebody else is first.',
          },
          {
            id: 'after',
            narration:
              'It takes two months to reach the desk it was written for. He will spend the rest of his life explaining, to people who did not ask, exactly what he did and did not do that August.',
          },
        ],
        historicalNote:
          'Einstein signed the letter drafted with Szilárd in August 1939; it reached Roosevelt in October. Einstein had no role in the subsequent weapons programme and later described the signature as his one great mistake.',
      },
      {
        id: 'reluctant',
        conditions: [{ type: 'choiceWas', choiceKey: 'einstein-letter-1939:sign', choiceId: 'wait' }],
        title: 'Signed in the Morning',
        yearLabel: '1939',
        image: {
          setting: 'a porch at dawn with an unsigned letter weighted by a stone, 1939',
          year: 1939,
          characters: ['einstein'],
          mood: 'sleepless, resolved, unhappy',
          details: ['letter weighted by a beach stone', 'cold coffee', 'grey dawn over water', 'chair pulled to a rail'],
          alt: 'An unsigned letter weighted by a beach stone on a porch rail at grey dawn.',
        },
        pages: [
          {
            id: 'night',
            narration:
              'He asks for the night and takes all of it. The letter sits on the porch rail under a beach stone and the tide goes out and comes back and does not offer an opinion.',
          },
          {
            id: 'morning',
            narration:
              'In the morning he signs. Not because he has been persuaded — he was persuaded in the first four minutes — but because he has finished arguing with the man who will have to live with it, who is himself.',
          },
        ],
        historicalNote:
          'A dramatized version of the documented decision to sign the 1939 letter.',
      },
      {
        id: 'default',
        title: 'A Warning Sent',
        yearLabel: '1939',
        image: {
          setting: 'a plain envelope being handed across a hallway table, 1939',
          year: 1939,
          characters: ['einstein'],
          mood: 'plain, weighty, unceremonious',
          details: ['plain sealed envelope', 'hall table', 'hat on a peg', 'open front door with summer beyond'],
          alt: 'A plain sealed envelope on a hall table beside a hat on a peg and an open door.',
        },
        pages: [
          {
            id: 'send',
            narration:
              'The warning goes out over his name because his name is the only instrument available that can be heard from that distance. It is not physics. It is the use of a reputation as a tool, and he has never done it for anything smaller.',
          },
          {
            id: 'after',
            narration:
              'Afterwards there is nothing to do but go back to the equations, which have never once asked him to decide anything.',
          },
        ],
        historicalNote:
          'The 1939 Einstein–Szilárd letter to Roosevelt is documented; the framing here is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-atomic-bomb-news',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 75 },
    once: true,
    variants: [
      {
        id: 'signed-his-name',
        conditions: [
          { type: 'choiceWas', choiceKey: 'einstein-letter-1939:sign', choiceId: 'sign' },
          { type: 'yearAtLeast', year: 1945 },
          { type: 'yearAtMost', year: 1952 },
        ],
        title: 'The Radio in the Next Room',
        yearLabel: '1945',
        image: {
          setting: 'a lakeside cottage porch in August 1945 with a radio cabinet in the room behind',
          year: 1945,
          characters: ['einstein'],
          mood: 'stopped, grey, interior',
          details: ['wooden radio cabinet', 'folded newspaper face down', 'still lake water', 'porch chair pushed back', 'summer haze'],
          alt: 'A wooden radio cabinet in a shaded room behind a porch that looks out on still lake water.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'He has been resting at a lake and the housekeeper comes out to the porch to tell him what the radio has just said. A city. One aircraft. One device. A number of people that has not been counted yet and will be an estimate forever.',
          },
          {
            id: 'word',
            narration:
              'He says one word in German. It is short and it is not an exclamation; it is the sound a man makes when a long arithmetic finally resolves. Then he sits for a while and does not go back inside.',
          },
          {
            id: 'after',
            narration:
              'He put his hand to two pages six years ago and he did not build anything, and both of those facts are true and neither of them helps this afternoon. What is left of him he will spend, from here on, on the argument that this thing must be governed by everybody or it will be owned by somebody.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.bombNews', value: true },
          { type: 'resources', effects: { wellbeing: -2, exposure: 1 } },
        ],
        historicalNote:
          'Einstein learned of Hiroshima from a radio report while at Saranac Lake; his reported one-word reaction is documented and is paraphrased here rather than quoted. He had no part in the weapons programme and afterwards campaigned for international control of atomic energy.',
      },
      {
        id: 'signed',
        conditions: [
          { type: 'projectCompleted', projectId: 'einstein-szilard-letter' },
          { type: 'yearAtLeast', year: 1945 },
          { type: 'yearAtMost', year: 1952 },
        ],
        title: 'August, and the News Comes By Radio',
        yearLabel: '1945',
        image: {
          setting: 'a shaded room with a radio cabinet and a folded newspaper, August 1945',
          year: 1945,
          characters: ['einstein'],
          mood: 'grave, still, inward',
          details: ['radio cabinet', 'newspaper folded face down', 'unlit lamp', 'curtains drawn against heat'],
          alt: 'A radio cabinet and a newspaper folded face down in a shaded room with drawn curtains.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The announcement is read three times in an hour because the man reading it cannot quite believe the copy. A city. A single device. The word unprecedented, used correctly for once.',
          },
          {
            id: 'sit',
            narration:
              'He puts his name to a warning six years ago and the warning was heard, and this is what being heard turned out to mean. He does not defend himself out loud. There is nobody in the room to defend himself to.',
          },
          {
            id: 'after',
            narration:
              'Within a month he is signing appeals again, and this time the appeals are about the thing itself: that it must belong to no single country, that the alternative is a world where every capital is a hostage.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.bombNews', value: true },
          { type: 'resources', effects: { wellbeing: -2, exposure: 1 } },
        ],
        historicalNote:
          'Einstein’s postwar advocacy for international control of atomic energy is documented, as is his lack of involvement in the weapons work itself.',
      },
      {
        id: 'hesitated',
        conditions: [
          { type: 'choiceWas', choiceKey: 'einstein-letter-1939:sign', choiceId: 'wait' },
          { type: 'projectNotCompleted', projectId: 'einstein-szilard-letter' },
          { type: 'yearAtLeast', year: 1945 },
          { type: 'yearAtMost', year: 1952 },
        ],
        title: 'The Night He Asked For',
        image: {
          setting: 'a drawer containing an unsigned typed letter, opened in August 1945',
          year: 1945,
          characters: ['einstein'],
          mood: 'stopped, implicated, unresolved',
          details: ['unsigned typed pages in a drawer', 'radio silent in the next room', 'summer light through a blind', 'fountain pen still capped'],
          alt: 'An unsigned typed letter lying in an opened desk drawer beside a capped fountain pen.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'A city. One aircraft. One device. He listens to the announcement all the way through twice and then goes and opens the drawer, because he already knows what is in it and wants to be wrong.',
          },
          {
            id: 'unsigned',
            narration:
              'Two typed pages, six years old, with a blank line at the bottom. He asked for one night. The night became a week and the week became a habit, and at no point did he decide anything at all, which he now understands is a way of deciding.',
          },
          {
            id: 'after',
            narration:
              'It happened without him, and it would have happened without him in any case, and neither of those sentences is the one he keeps saying to himself.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.bombNews', value: true },
          { type: 'resources', effects: { wellbeing: -2 } },
        ],
        historicalNote:
          'Einstein signed the 1939 letter. This variant follows a life that hesitated and never returned to it; the physics of nuclear energy release remained his either way.',
      },
      {
        id: 'unsigned',
        conditions: [
          { type: 'yearAtLeast', year: 1945 },
          { type: 'yearAtMost', year: 1952 },
        ],
        title: 'Somebody Else’s Signature',
        yearLabel: '1945',
        image: {
          setting: 'a quiet study where a radio has been switched off, August 1945',
          year: 1945,
          characters: ['einstein'],
          mood: 'sombre, distant, uneasy',
          details: ['radio with the dial at rest', 'newspaper face down on a chair', 'window shut against heat', 'glass of water untouched'],
          alt: 'A radio switched off beside a newspaper lying face down on a chair.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'It happens without him. A city, a single device, and a long chain of names on documents he never saw. He worked out forty years ago what mass was worth in energy, and now somebody has gone and cashed it.',
          },
          {
            id: 'clean',
            narration:
              'His hands are clean, in the narrow sense that a court would use. He finds that this is not the comfort he had assumed it would be, and that a man can be innocent of the deed and still be part of the arithmetic.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.bombNews', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'A divergent version for a life in which the 1939 warning was never signed. The physics underlying nuclear energy release is Einstein’s; the weapons work was not.',
      },
    ],
  },
  {
    id: 'einstein-unified-field-breakthrough',
    characterId: 'einstein',
    kind: 'breakthrough',
    classification: 'Speculative',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-unified-field', priority: 80 },
    once: true,
    variants: [
      {
        id: 'after-years',
        conditions: [
          { type: 'choiceWas', choiceKey: 'einstein-legacy-opening:purpose', choiceId: 'unify' },
          { type: 'yearAtLeast', year: 1945 },
        ],
        title: 'The Bundle That Does Not Turn Wrong',
        image: {
          setting: 'a cupboard of tied manuscript bundles open beside a desk at dawn',
          year: 1945,
          characters: ['einstein'],
          mood: 'exhausted, disbelieving, luminous',
          details: ['tied bundles with dates on their labels', 'one untied stack on the desk', 'fountain pen at rest', 'cold tea', 'window paling towards dawn'],
          alt: 'An open cupboard of tied manuscript bundles beside one untied stack of pages on a desk at dawn.',
        },
        pages: [
          {
            id: 'cupboard',
            narration:
              'The cupboard behind him holds a bundle for every attempt, tied with string and dated. Every one of them is wrong and he can say exactly where each one turned wrong, which has never once told him where to turn instead.',
          },
          {
            id: 'close',
            narration:
              'This one does not turn. Gravity and the electric field come out in one set of symbols, with nothing bolted on and nothing apologised for, and he follows it to the end four times before he lets himself believe the fourth time.',
          },
          {
            id: 'quiet',
            narration:
              'He does not wake anybody. He makes a fair copy in the neat hand he keeps for things he thinks are true, and sits with it until the window goes fully light, and thinks about all the string in the cupboard.',
          },
        ],
        historicalNote:
          'Einstein pursued a unified field theory for roughly thirty years and never achieved one. This scene departs from the record: it imagines the outcome he worked towards.',
      },
      {
        id: 'early',
        conditions: [{ type: 'yearAtMost', year: 1944 }],
        title: 'Sooner Than Anyone Expected',
        image: {
          setting: 'a desk at dawn with a long derivation completed and pinned in sequence, 1940s',
          year: 1942,
          characters: ['einstein'],
          mood: 'astonished, wary, luminous',
          details: ['pages pinned in sequence', 'fountain pen at rest', 'cold tea', 'window paling towards dawn'],
          alt: 'Pages of a long derivation pinned in sequence above a desk as the window pales towards dawn.',
        },
        pages: [
          {
            id: 'close',
            narration:
              'He has been at this since the twenties, in a way he has never quite admitted to anybody: an approach a year, tied with string and dated and put in the cupboard when it turned wrong. This one does not turn. Gravity and the electric field come out in one set of symbols, with nothing bolted on.',
          },
          {
            id: 'early',
            narration:
              'And it has come earlier than it had any right to, which he distrusts entirely. Things that arrive easily have usually arrived wrong. He will spend the next two years trying to break it, and that is the only honest celebration available to him.',
          },
          {
            id: 'quiet',
            narration:
              'For tonight, though, he makes a fair copy in the neat hand he only uses for things he thinks are true, and sits with it until it is fully light.',
          },
        ],
        historicalNote:
          'Einstein sought a unified field theory for decades and never achieved one. This scene departs from the record: it imagines the outcome he worked towards, reached earlier than the record allows.',
      },
      {
        id: 'default',
        title: 'One Field for Everything',
        yearLabel: 'The last years',
        image: {
          setting: 'a desk at dawn with a long derivation completed and pinned in sequence, early 1950s',
          year: 1952,
          characters: ['einstein'],
          mood: 'exhausted, luminous, alone',
          details: ['pages pinned in sequence', 'fountain pen at rest', 'cold tea', 'window paling towards dawn'],
          alt: 'Pages of a long derivation pinned in sequence above a desk as the window pales towards dawn.',
        },
        pages: [
          {
            id: 'close',
            narration:
              'Gravity and the electric field, written in one set of symbols, with nothing bolted on. It has taken most of his working life and most of his reputation among people whose opinion he pretends not to value.',
          },
          {
            id: 'audience',
            narration:
              'He is old, and the young men are busy computing quantities he does not believe are fundamental. They will not read this for a decade, if they read it at all.',
          },
          {
            id: 'quiet',
            narration:
              'He makes a fair copy anyway, in the neat hand he only uses for things he thinks are true, and sits with it until it is fully light.',
          },
        ],
        historicalNote:
          'Einstein spent his last decades seeking a unified field theory and did not achieve one. This scene departs from the record: it imagines the outcome he worked towards.',
      },
    ],
  },
  {
    id: 'einstein-unified-field-drawer',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'failure',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 50 },
    once: true,
    variants: [
      {
        id: 'still-trying',
        conditions: [
          { type: 'choiceWas', choiceKey: 'einstein-legacy-opening:purpose', choiceId: 'unify' },
          { type: 'projectNotCompleted', projectId: 'einstein-unified-field' },
          { type: 'yearAtLeast', year: 1948 },
          { type: 'yearAtMost', year: 1955 },
        ],
        title: 'Thirty Years of Pages',
        yearLabel: 'The last years',
        image: {
          setting: 'a cupboard of tied bundles of manuscript in an institute office, early 1950s',
          year: 1951,
          characters: ['einstein'],
          mood: 'stubborn, humorous, undefeated',
          details: ['tied bundles of manuscript', 'dates written on the string labels', 'blackboard rubbed grey', 'a single chair'],
          alt: 'A cupboard of tied manuscript bundles with dates on their labels beside a grey blackboard.',
        },
        pages: [
          {
            id: 'bundles',
            narration:
              'The cupboard holds a bundle for every approach, tied with string, dated. Some of them are beautiful. All of them are wrong, and he can say exactly where each one turned wrong, which is not the same as knowing where to turn instead.',
          },
          {
            id: 'why',
            narration:
              'A younger colleague asks, kindly and only once, why he keeps at something everyone else has given up on.',
            speaker: 'ALBERT',
            dialogue: 'Because somebody must work on the thing that will not come out. And I can afford it. My reputation is already made and I cannot spend it on anything better.',
          },
          {
            id: 'chalk',
            narration:
              'He rubs the blackboard down and starts again. He has been starting again since before this young man was born, and he does it with exactly the same expression each time.',
          },
        ],
        historicalNote:
          'Einstein pursued unified field theory for roughly thirty years without success, increasingly isolated from mainstream physics. Dialogue is dramatized.',
      },
      {
        id: 'other-work',
        conditions: [
          { type: 'projectNotCompleted', projectId: 'einstein-unified-field' },
          { type: 'yearAtLeast', year: 1948 },
          { type: 'yearAtMost', year: 1955 },
        ],
        title: 'The Blackboard at the End of the Day',
        yearLabel: 'The last years',
        image: {
          setting: 'an institute office at evening with an unfinished line of notation on the blackboard',
          year: 1951,
          characters: ['einstein'],
          mood: 'unfinished, calm, ordinary',
          details: ['unfinished line of notation', 'chalk stub', 'chair pushed in', 'coat gone from the hook', 'evening lawns beyond'],
          alt: 'An unfinished line of chalk notation on a blackboard in an empty evening office.',
        },
        pages: [
          {
            id: 'evening',
            narration:
              'There is always a line on the blackboard that stops halfway. He leaves it there overnight on purpose, so that in the morning he arrives already in the middle of something instead of at the beginning.',
          },
          {
            id: 'peace',
            narration:
              'Most days the middle is where he stays. He has made his peace with that, in the way a man makes peace with a country he intends to keep quarrelling with.',
          },
        ],
        historicalNote:
          'Einstein worked on unification until the end of his life without completing it. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'einstein-legacy-closing',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'full',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'einstein-photoelectric',
              'einstein-brownian-motion',
              'einstein-special-relativity',
              'einstein-general-relativity',
              'einstein-eclipse-confirmation',
              'einstein-szilard-letter',
              'einstein-unified-field',
            ],
            count: 5,
          },
        ],
        title: 'The Pen Put Down',
        yearLabel: '1955',
        image: {
          setting: 'a bedside table with reading glasses, a pen, and a page of calculation, 1955',
          year: 1955,
          characters: ['einstein'],
          mood: 'gentle, complete, unafraid',
          details: ['reading glasses folded', 'page of calculation', 'fountain pen', 'window with early light', 'a glass of water'],
          alt: 'Folded reading glasses and a pen resting on a page of calculation beside a window at first light.',
        },
        pages: [
          {
            id: 'work',
            narration:
              'There is work beside the bed at the end, because there has been work beside the bed for sixty years and he sees no reason to make an exception now. The last page is unfinished and he knows it and he is not troubled.',
          },
          {
            id: 'refuse',
            narration:
              'He refuses the operation. He has done his share, he says, and it is tasteless to prolong life artificially; he would like to go elegantly. The elegance is debatable. The timing is his own.',
          },
        ],
        historicalNote:
          'Einstein declined surgery in his final illness in 1955, saying he wanted to go on his own terms, and was working to the end. The wording here is dramatized.',
      },
      {
        id: 'some',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'einstein-photoelectric',
              'einstein-brownian-motion',
              'einstein-special-relativity',
              'einstein-general-relativity',
              'einstein-eclipse-confirmation',
              'einstein-szilard-letter',
              'einstein-unified-field',
            ],
            count: 2,
          },
        ],
        title: 'What Was Finished and What Was Not',
        yearLabel: '1955',
        image: {
          setting: 'a study being tidied by someone else, papers squared into stacks, 1955',
          year: 1955,
          characters: ['einstein'],
          mood: 'valedictory, plain, warm',
          details: ['papers squared into stacks', 'violin case closed', 'pipe on a shelf', 'window open to a lawn'],
          alt: 'Papers squared into neat stacks in a study beside a closed violin case.',
        },
        pages: [
          {
            id: 'stack',
            narration:
              'Somebody will square the papers into stacks and be careful with them, and that is the whole of what happens to a life’s work in the first week. The finished things go one way. The rest goes into a box marked with a year.',
          },
          {
            id: 'sum',
            narration:
              'He did some of it. Not all of it. He suspects that is the ordinary condition and that only the eulogies pretend otherwise.',
          },
        ],
        historicalNote:
          'A closing for a life that achieved part of the documented body of work.',
      },
      {
        id: 'default',
        title: 'An Ordinary Amount of Time',
        yearLabel: '1955',
        image: {
          setting: 'an empty chair on a porch with a blanket over the arm, 1955',
          year: 1955,
          characters: ['einstein'],
          mood: 'quiet, level, unresolved',
          details: ['empty porch chair', 'folded blanket', 'evening light through elms', 'a book left face down'],
          alt: 'An empty porch chair with a folded blanket and a book left face down beside it.',
        },
        pages: [
          {
            id: 'ordinary',
            narration:
              'He was given about the usual number of years and spent them on the one question, and the question was not answered, and it was a good question.',
          },
          {
            id: 'compass',
            narration:
              'Somewhere in a drawer there is a compass with a bent case. He never once mentioned it to anyone as anything other than a toy his father gave him when he was ill.',
          },
        ],
        historicalNote:
          'A divergent closing for a life whose work stayed unfinished. The childhood compass is documented.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Epilogue
  // -------------------------------------------------------------------------
  {
    id: 'einstein-epilogue',
    characterId: 'einstein',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'century-unified',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'einstein-photoelectric',
              'einstein-brownian-motion',
              'einstein-special-relativity',
              'einstein-general-relativity',
              'einstein-eclipse-confirmation',
              'einstein-szilard-letter',
              'einstein-unified-field',
            ],
            count: 5,
          },
          { type: 'projectCompleted', projectId: 'einstein-general-relativity' },
          { type: 'projectCompleted', projectId: 'einstein-unified-field' },
        ],
        title: 'One Set of Symbols',
        yearLabel: 'After',
        image: {
          setting: 'an institute office the morning after it has been vacated, blackboard untouched',
          year: 1955,
          characters: ['einstein'],
          mood: 'still, resonant, complete',
          details: ['untouched blackboard of dense notation', 'chalk stub in a tray', 'chair square to a desk', 'sunlight moving across a floor'],
          alt: 'An empty office with a blackboard still dense with chalk notation.',
        },
        pages: [
          {
            id: 'after',
            narration:
              'Space bends. Time is local. Light comes in countable pieces, atoms leave footprints, and in the end the two great fields turned out to be one field seen from two sides. Every one of those sentences was a scandal when he wrote it.',
          },
          {
            id: 'cost',
            narration:
              'It cost a marriage, a country, most of his health, and every evening of his adult life. He would not have called any of that a price. He would have said it was simply what the days were made of.',
          },
          {
            id: 'voice',
            narration:
              'And the office stays as it is for a while, because nobody wants to be the one to rub the blackboard down.',
            speaker: 'ALBERT',
            dialogue: 'I have no particular gift. I am only very curious, and I was given a great deal of time.',
          },
        ],
        historicalNote:
          'Einstein sought a unified field theory to the end of his life and did not reach one; this ending departs from the record on that point. His self-description as merely curious is dramatized from sentiments in his correspondence.',
      },
      {
        id: 'century',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'einstein-photoelectric',
              'einstein-brownian-motion',
              'einstein-special-relativity',
              'einstein-general-relativity',
              'einstein-eclipse-confirmation',
              'einstein-szilard-letter',
              'einstein-unified-field',
            ],
            count: 5,
          },
          { type: 'projectCompleted', projectId: 'einstein-general-relativity' },
        ],
        title: 'The Shape He Left It In',
        yearLabel: 'After',
        image: {
          setting: 'an institute office the morning after it has been vacated, blackboard untouched',
          year: 1955,
          characters: ['einstein'],
          mood: 'still, resonant, unfinished',
          details: ['untouched blackboard with one open line', 'chalk stub in a tray', 'chair square to a desk', 'sunlight moving across a floor'],
          alt: 'An empty office with one unfinished line of chalk notation still on the blackboard.',
        },
        pages: [
          {
            id: 'after',
            narration:
              'Space bends. Time is local. Light comes in countable pieces and atoms leave footprints, and every one of those sentences was a scandal when he wrote it and is now in a schoolbook.',
          },
          {
            id: 'cost',
            narration:
              'It cost a marriage, a country, most of his health, and thirty years spent on a problem that would not come out. He would not have described any of that as a price. He would have said it was simply what the days were made of.',
          },
          {
            id: 'voice',
            narration:
              'And the office stays as it was for a while, because nobody wants to be the one to rub the blackboard down.',
            speaker: 'ALBERT',
            dialogue: 'I have no particular gift. I am only very curious, and I was given a great deal of time.',
          },
        ],
        historicalNote:
          'Einstein described himself in correspondence as having no special talent, only passionate curiosity; the wording here is dramatized rather than quoted.',
      },
      {
        id: 'output',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'einstein-photoelectric',
              'einstein-brownian-motion',
              'einstein-special-relativity',
              'einstein-general-relativity',
              'einstein-eclipse-confirmation',
              'einstein-szilard-letter',
              'einstein-unified-field',
            ],
            count: 5,
          },
        ],
        title: 'A Great Deal of Work, and One Gap',
        yearLabel: 'After',
        image: {
          setting: 'a shelf of bound offprints with one obvious gap between them',
          year: 1955,
          characters: ['einstein'],
          mood: 'substantial, wry, incomplete',
          details: ['bound offprints in a row', 'one gap on the shelf', 'reading glasses folded', 'dust in low light'],
          alt: 'A shelf of bound scientific offprints with a conspicuous gap in the row.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'Light in pieces. Atoms with footprints. Time made local. A great deal of work, most of it right, and a shelf that anybody would be glad to have their name along the spine of.',
          },
          {
            id: 'gap',
            narration:
              'And one gap in the row, at the place where gravity should have gone. He knew the shape of what belonged there for forty years and never got the mathematics to hold still long enough to write it.',
            speaker: 'ALBERT',
            dialogue: 'I could see it. I could not make it stand up. Those are not the same skill and I was only ever given the first one.',
          },
        ],
        historicalNote:
          'A divergent ending for a life of substantial output that never completed general relativity. Einstein’s documented career did complete it, in 1915.',
      },
      {
        id: 'relativity',
        conditions: [{ type: 'projectCompleted', projectId: 'einstein-general-relativity' }],
        title: 'Geometry, and What It Was For',
        yearLabel: 'After',
        image: {
          setting: 'a night sky over a quiet town, stars slightly displaced near the horizon glow',
          year: 1955,
          characters: ['einstein'],
          mood: 'vast, tender, calm',
          details: ['stars over rooftops', 'one lit upstairs window', 'bare elm branches', 'frost on a path'],
          alt: 'A clear night sky over the rooftops of a small town with one lit upstairs window.',
        },
        pages: [
          {
            id: 'what',
            narration:
              'He took gravity away from Newton and gave it back as geometry, and then spent forty years being unable to do the same for everything else. Both halves of that sentence are the same man.',
          },
          {
            id: 'legacy',
            narration:
              'Somewhere tonight starlight is going past a sun and arriving very slightly late, exactly as much late as a set of equations written in a cold flat in wartime said it would be.',
            speaker: 'ALBERT',
            dialogue: 'The strangest thing about the world is that it can be understood at all. Nothing ever entitled us to that.',
          },
        ],
        historicalNote:
          'The remark about the comprehensibility of the world reflects a sentiment Einstein expressed in his own writing; the wording is dramatized, not quoted.',
      },
      {
        id: 'papers',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['einstein-photoelectric', 'einstein-brownian-motion', 'einstein-special-relativity'],
            count: 2,
          },
        ],
        title: 'What Came Out of a Drawer',
        yearLabel: 'After',
        image: {
          setting: 'a plain wooden desk drawer standing open and empty, early twentieth century',
          year: 1955,
          characters: ['einstein'],
          mood: 'modest, lasting, quiet',
          details: ['open empty drawer', 'ink stain in the wood', 'brass handle worn bright', 'window light across the grain'],
          alt: 'An open, empty wooden desk drawer with a worn brass handle and an old ink stain.',
        },
        pages: [
          {
            id: 'drawer',
            narration:
              'It came out of a drawer in a civil-service desk, written in the evenings by a man with no laboratory, no assistant, and no institution willing to employ him. That is not a charming detail. That is the whole argument.',
          },
          {
            id: 'voice',
            narration:
              'He never quite lost the suspicion that the world had let him in by accident and might notice at any time.',
            speaker: 'ALBERT',
            dialogue: 'I was never good at obeying. It turned out to be the only qualification the work required.',
          },
        ],
        historicalNote:
          'Einstein produced his 1905 papers while employed full time as a patent examiner with no academic affiliation. Dialogue is dramatized.',
      },
      {
        id: 'conscience',
        conditions: [{ type: 'narrativeFlag', flag: 'einstein.pacifist' }],
        title: 'The Other List',
        yearLabel: 'After',
        image: {
          setting: 'a desk of signed appeals and open correspondence, mid-twentieth century',
          year: 1955,
          characters: ['einstein'],
          mood: 'weathered, principled, tired',
          details: ['stacked appeals and petitions', 'fountain pen', 'reading glasses', 'lamp', 'window at dusk'],
          alt: 'A desk stacked with signed appeals and open letters beside reading glasses and a lamp.',
        },
        pages: [
          {
            id: 'lists',
            narration:
              'Twice in his life a page went round with names on it, and twice he read the names before he read the argument, and twice he ended up on the shorter list. Nothing else he did required as little thought or cost as much.',
          },
          {
            id: 'voice',
            narration:
              'The equations were the easy part. Equations do not ask you to be brave in a corridor in front of people you have lunch with.',
            speaker: 'ALBERT',
            dialogue: 'A man may be forgiven for being wrong. Being convenient is harder to explain afterwards.',
          },
        ],
        historicalNote:
          'Einstein’s refusal of the 1914 war manifesto and his later public interventions are documented. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Needle Still Points North',
        yearLabel: 'After',
        image: {
          setting: 'a small brass compass lying on a windowsill in evening light',
          year: 1955,
          characters: ['einstein'],
          mood: 'small, warm, unresolved',
          details: ['brass compass with a dented case', 'windowsill', 'evening light', 'dust in the air'],
          alt: 'A small dented brass compass lying on a windowsill in evening light.',
        },
        pages: [
          {
            id: 'life',
            narration:
              'Not everything he began got finished, and some of what he began was never written down at all. He kept asking. That was the constant, from the sickbed at five to the last morning.',
          },
          {
            id: 'compass',
            narration:
              'The compass is still in the drawer. The needle still swings back to the same stubborn north, and nothing is touching it, and nobody has ever satisfactorily explained to a five-year-old why.',
            speaker: 'ALBERT',
            dialogue: 'Something had to be behind it, hidden. I never really stopped standing at that bed.',
          },
        ],
        historicalNote:
          'Einstein recalled the compass his father gave him as a decisive early experience. Dialogue is dramatized.',
      },
    ],
  },
];
