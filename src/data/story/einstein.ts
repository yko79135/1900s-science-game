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
              'Ulm, March. Snow still lies grey in the gutters. Below the window a cart goes past with a load of copper wire.',
          },
          {
            id: 'head',
            speaker: 'PAULINE',
            dialogue: 'Hermann. Look at the shape of his head.',
          },
          {
            id: 'head-2',
            speaker: 'HERMANN',
            dialogue: 'It is a head. He will grow into it.',
          },
          {
            id: 'finished',
            speaker: 'HERMANN',
            dialogue: 'They say the science of it is finished. A few decimals left to tidy, and then it is only wire and cost.',
          },
          {
            id: 'munich',
            narration:
              'They move to Munich before the year is out. Hermann and his brother Jakob take a workshop and start winding wire onto iron.',
          },
          {
            id: 'silent',
            narration: 'Two years on, the boy still does not speak. Not one word that anybody has caught.',
          },
          {
            id: 'silent-2',
            speaker: 'PAULINE',
            dialogue: 'Say anything at all. Say my name. Say the word for spoon.',
          },
          {
            id: 'silent-3',
            speaker: 'HERMANN',
            dialogue: 'Leave him. He is building it somewhere we cannot see it. He will say it when it is whole.',
          },
          {
            id: 'soup',
            narration: 'When it comes, months later, it comes whole. He puts down his spoon at supper.',
          },
          {
            id: 'soup-2',
            speaker: 'ALBERT',
            dialogue: 'The soup is too hot.',
          },
          {
            id: 'soup-3',
            speaker: 'PAULINE',
            dialogue: 'He can speak. Albert — why have you never said anything before?',
          },
          {
            id: 'soup-4',
            speaker: 'ALBERT',
            dialogue: 'Everything was all right before.',
          },
        ],
        historicalNote:
          'Einstein was born in Ulm in March 1879; the family moved to Munich, where his father Hermann and uncle Jakob ran an electrical business. His late speech as a small child, and the family story that his first remark was a complaint about the soup, are repeated in the standard biographies. All dialogue is dramatized wording, not quotation.',
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
            id: 'sickbed',
            narration:
              'He is five and ill in bed. His father sits on the edge of it and puts something small and brass into his hand.',
          },
          {
            id: 'flat',
            speaker: 'HERMANN',
            dialogue: 'Hold it flat. Let it settle.',
          },
          {
            id: 'wobble',
            speaker: 'ALBERT',
            dialogue: 'It is a needle. It wobbles and then it stops.',
          },
          {
            id: 'turn',
            speaker: 'HERMANN',
            dialogue: 'Good. Now turn yourself around.',
          },
          {
            id: 'turning',
            narration: 'He turns, quilt and all, until the window is where the door was.',
          },
          {
            id: 'didnt',
            speaker: 'ALBERT',
            dialogue: 'The needle did not turn.',
          },
          {
            id: 'no',
            speaker: 'HERMANN',
            dialogue: 'No.',
          },
          {
            id: 'why',
            speaker: 'ALBERT',
            dialogue: 'I turned. Why did it not?',
          },
          {
            id: 'pulling',
            speaker: 'HERMANN',
            dialogue: 'Something is pulling on it. It has been pulling the whole time.',
          },
          {
            id: 'where',
            speaker: 'ALBERT',
            dialogue: 'From where?',
          },
          {
            id: 'earth',
            speaker: 'HERMANN',
            dialogue: 'The earth, they say. From under the floor and out past the roof and everywhere in between.',
          },
          {
            id: 'touching',
            speaker: 'ALBERT',
            dialogue: 'But nothing is touching it. Not your hand. Not the glass. Nothing.',
          },
          {
            id: 'again',
            narration: 'He turns the case again, slowly, watching the needle refuse him.',
          },
          {
            id: 'room',
            speaker: 'ALBERT',
            dialogue: 'Papa. There is something in this room that I cannot see.',
          },
          {
            id: 'sleep',
            speaker: 'HERMANN',
            dialogue: 'There is something in every room. Go to sleep.',
          },
          {
            id: 'cant',
            speaker: 'ALBERT',
            dialogue: 'I cannot now.',
          },
          {
            id: 'workshop',
            narration:
              'Downstairs the workshop smells of hot varnish and brass filings. Uncle Jakob winds wire onto iron for the street lamps of small Bavarian towns.',
          },
          {
            id: 'hunt',
            speaker: 'JAKOB',
            dialogue: 'You are always hunting something. Here is the trick. The thing you are hunting has no name yet, so you give it one. Call it x.',
          },
          {
            id: 'hunt-2',
            speaker: 'JAKOB',
            dialogue: 'Then you chase it around the page until it holds still and tells you what it was.',
          },
          {
            id: 'hunt-3',
            speaker: 'ALBERT',
            dialogue: 'And if it never holds still?',
          },
          {
            id: 'hunt-4',
            speaker: 'JAKOB',
            dialogue: 'Then you were hunting the wrong animal. Wind this.',
          },
          {
            id: 'school',
            narration: 'At the Gymnasium the lessons are recited in unison and corrected with a stick.',
          },
          {
            id: 'school-2',
            speaker: 'THE TEACHER',
            dialogue: 'Einstein. The class is on page forty.',
          },
          {
            id: 'school-3',
            speaker: 'ALBERT',
            dialogue: 'I finished the book.',
          },
          {
            id: 'school-5',
            speaker: 'ALBERT',
            dialogue: 'In a fortnight. It is a good book. It only asks questions it can answer.',
          },
          {
            id: 'school-6',
            speaker: 'THE TEACHER',
            dialogue: 'Your presence in this room rots the respect of the class. Sit down and recite with the others.',
          },
          {
            id: 'contracts',
            narration: 'Then the lighting contracts go to a larger firm. The workshop is sold in the spring.',
          },
          {
            id: 'alps',
            speaker: 'HERMANN',
            dialogue: 'We go over the Alps. There is work in Italy or there is work nowhere.',
          },
          {
            id: 'stay',
            speaker: 'HERMANN',
            dialogue: 'You stay and finish the certificate. A lodging house on the far side of the park.',
          },
          {
            id: 'maja',
            speaker: 'MAJA',
            dialogue: 'It has one window and the window faces a wall. I went and looked.',
          },
          {
            id: 'choice',
            speaker: 'THE LANDLADY',
            dialogue: 'Rent is Fridays. The window does not open. Three years is a long time, boy. What will you do with yourself?',
            choices: [
              {
                id: 'leave',
                label: 'Get out. Follow them over the Alps.',
                effects: [
                  { type: 'flag', flag: 'einstein.leftMunich', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, standing: -1 } },
                ],
              },
              {
                id: 'endure',
                label: 'Stay. Head down. Finish the certificate.',
                effects: [
                  { type: 'flag', flag: 'einstein.enduredMunich', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'workshop',
                label: 'Stay — and spend every evening with the dynamos.',
                effects: [
                  { type: 'flag', flag: 'einstein.workshopYears', value: true },
                  { type: 'resources', effects: { network: 1, funds: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The compass his father showed him when he was ill as a small boy, the family electrical workshop run with his uncle Jakob, his impatience with rote Gymnasium teaching, and the family’s move to Italy after the business lost its contracts are all documented. The teacher and the landlady stand in for people whose names are not recorded. Dialogue is dramatized.',
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
              'The train climbs out of Bavaria in the dark and comes down into a morning full of shouting and lemon trees.',
          },
          {
            id: 'door',
            speaker: 'MAJA',
            dialogue: 'You are supposed to be in Munich.',
          },
          {
            id: 'note',
            speaker: 'ALBERT',
            dialogue: 'I had a note from a doctor. My nerves require rest.',
          },
          {
            id: 'note-2',
            speaker: 'ALBERT',
            dialogue: 'And a note from the mathematics master saying the rest of me is entirely well. I showed them one at a time.',
          },
          {
            id: 'kitchen',
            narration:
              'The new works are already in trouble. His father does the arithmetic at the kitchen table twice, as if it might come out differently.',
          },
          {
            id: 'engineer',
            speaker: 'HERMANN',
            dialogue: 'The firm needs an engineer, Albert. Not a philosopher.',
          },
          {
            id: 'engineer-2',
            speaker: 'ALBERT',
            dialogue: 'I could be an engineer who thinks.',
          },
          {
            id: 'engineer-3',
            speaker: 'HERMANN',
            dialogue: 'Engineers eat. Think afterwards, at your leisure, on a full stomach.',
          },
          {
            id: 'consulate',
            narration: 'That winter he signs a paper at a consulate and stops being German.',
          },
          {
            id: 'what',
            speaker: 'MAJA',
            dialogue: 'What are you now, then?',
          },
          {
            id: 'nothing',
            speaker: 'ALBERT',
            dialogue: 'Nothing at all. It is restful.',
          },
          {
            id: 'mama',
            speaker: 'MAJA',
            dialogue: 'Mama will cry.',
          },
          {
            id: 'mama-2',
            speaker: 'ALBERT',
            dialogue: 'Mama will cry and then ask what it cost. Five years belonging to no country — it suits me perfectly.',
          },
          {
            id: 'clerks',
            speaker: 'MAJA',
            dialogue: 'And every clerk in Europe will look at you twice.',
          },
          {
            id: 'clerks-2',
            speaker: 'ALBERT',
            dialogue: 'They already do. Now at least they will have a reason.',
          },
        ],
        historicalNote:
          'Einstein left the Munich Gymnasium early and joined his family in Italy after their business failed, and renounced his German citizenship in 1896, remaining stateless until he became Swiss in 1901. Dialogue is dramatized.',
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
            narration: 'The lodging house keeps his room. The letters keep arriving with Italian stamps on them.',
          },
          {
            id: 'eating',
            speaker: 'MAJA',
            dialogue: 'Mama wants to know whether you are eating.',
          },
          {
            id: 'eating-2',
            speaker: 'MAJA',
            dialogue: 'I told her you were reading. She did not find that as funny as I did.',
          },
          {
            id: 'reply',
            narration: 'He answers about one letter in three, and the ones he answers keep circling back to the needle.',
          },
          {
            id: 'ask',
            speaker: 'ALBERT',
            dialogue: 'Ask Papa this for me. If nothing touches the needle, what is in the space between?',
          },
          {
            id: 'ask-2',
            speaker: 'MAJA',
            dialogue: 'Papa says: wire, if you are lucky. Papa says come south.',
          },
          {
            id: 'south',
            speaker: 'ALBERT',
            dialogue: 'Tell them I am finishing it. Tell them the room is fine.',
          },
          {
            id: 'timetable',
            narration:
              'He does not go south. He learns the timetable of the trains that do by heart, which is not the same thing.',
          },
          {
            id: 'bricks',
            speaker: 'ALBERT',
            dialogue: 'The room is not fine. I have counted the bricks in the wall opposite. Twice. They agree.',
          },
        ],
        historicalNote:
          'Einstein was left behind in Munich to finish school when the family moved to Italy. This telling follows a boy who endured that year rather than walking out of it. Dialogue is dramatized.',
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
            id: 'aarau',
            narration:
              'He failed the entrance examination once — everything except mathematics and physics — and was sent here to fill in the rest of himself.',
          },
          {
            id: 'wall',
            speaker: 'THE TEACHER',
            dialogue: 'You have been on that wall for an hour, Einstein. What are you doing?',
          },
          {
            id: 'running',
            speaker: 'ALBERT',
            dialogue: 'Running.',
          },
          {
            id: 'sitting',
            speaker: 'THE TEACHER',
            dialogue: 'You are sitting down.',
          },
          {
            id: 'beam',
            speaker: 'ALBERT',
            dialogue: 'In my head I am running beside a beam of light. Keeping up with it exactly.',
          },
          {
            id: 'follow',
            speaker: 'THE TEACHER',
            dialogue: 'I do not follow.',
          },
          {
            id: 'pond',
            speaker: 'ALBERT',
            dialogue: 'Drop a stone in the pond behind the church. What do you get?',
          },
          {
            id: 'rings',
            speaker: 'THE TEACHER',
            dialogue: 'Rings. Going outward.',
          },
          {
            id: 'bank',
            speaker: 'ALBERT',
            dialogue: 'Now walk along the bank beside one ring, at exactly the speed it travels. What does it look like?',
          },
          {
            id: 'still',
            speaker: 'THE TEACHER',
            dialogue: 'Still, I suppose. A ridge of water sitting there, doing nothing.',
          },
          {
            id: 'lamp',
            speaker: 'ALBERT',
            dialogue: 'Light is rings too. A lamp throws them, the sun throws them, out through the room in every direction.',
          },
          {
            id: 'frozen',
            speaker: 'ALBERT',
            dialogue: 'So if I run beside a beam at its own speed, I should see a ridge of light standing still beside me. Frozen. Going nowhere.',
          },
          {
            id: 'never',
            speaker: 'ALBERT',
            dialogue: 'Nobody has ever seen such a thing. Not in any workshop in Europe. Not once.',
          },
          {
            id: 'faster',
            speaker: 'THE TEACHER',
            dialogue: 'Perhaps nobody has run fast enough.',
          },
          {
            id: 'rules',
            speaker: 'ALBERT',
            dialogue: 'That is the trouble. The rules we have for light will not allow it to stand still. Run as hard as you like — it leaves you at the same speed.',
          },
          {
            id: 'rain',
            speaker: 'THE TEACHER',
            dialogue: 'Nonsense. Run through rain and the rain hits you harder.',
          },
          {
            id: 'rain-2',
            speaker: 'ALBERT',
            dialogue: 'Yes. Rain behaves. Light does not. That is the whole of my afternoon.',
          },
          {
            id: 'one',
            speaker: 'THE TEACHER',
            dialogue: 'Then one of the two must be wrong. The light, or the running.',
          },
          {
            id: 'light',
            speaker: 'ALBERT',
            dialogue: 'The light is not wrong. So it is the running. I have no idea yet what that means.',
          },
          {
            id: 'write',
            speaker: 'THE TEACHER',
            dialogue: 'Neither have I. Write it down anyway.',
          },
        ],
        historicalNote:
          'Einstein described this thought experiment — what he would see if he chased a light beam at its own speed — in his own later autobiographical writing, and dated it to his year at the Aarau cantonal school, where teaching was far freer than in Munich. The teacher here stands in for that school; the wording is dramatized.',
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
            narration: 'The Aarau certificate is one folded sheet. It is worth more than everything else he owns.',
          },
          {
            id: 'citizen',
            speaker: 'THE CLERK',
            dialogue: 'Citizenship.',
          },
          {
            id: 'citizen-2',
            speaker: 'ALBERT',
            dialogue: 'None.',
          },
          {
            id: 'citizen-3',
            speaker: 'THE CLERK',
            dialogue: 'That is not a thing a man is permitted to be.',
          },
          {
            id: 'citizen-4',
            speaker: 'ALBERT',
            dialogue: 'And yet here I am, holding up your queue.',
          },
          {
            id: 'age',
            speaker: 'THE CLERK',
            dialogue: 'Age.',
          },
          {
            id: 'age-2',
            speaker: 'ALBERT',
            dialogue: 'Seventeen.',
          },
          {
            id: 'age-3',
            speaker: 'THE CLERK',
            dialogue: 'You will be the youngest in the section. Every year, for four years.',
          },
          {
            id: 'age-4',
            speaker: 'ALBERT',
            dialogue: 'I shall try to be insufferable about it.',
          },
          {
            id: 'gate',
            narration: 'At the gate he stops. Trams grind past on the wet rails. Nobody is watching him arrive.',
          },
          {
            id: 'good',
            speaker: 'ALBERT',
            dialogue: 'Nobody here knows who my father was. That is the best news I have ever had.',
          },
        ],
        historicalNote:
          'Einstein completed his schooling at Aarau and entered the Zürich polytechnic in 1896 as a stateless seventeen-year-old, younger than his classmates. The clerk and the exchange are dramatized.',
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
              'He finishes it out in the room that faces a wall. What he carries out of Munich fits in one case and one notebook.',
          },
          {
            id: 'porter',
            speaker: 'THE PORTER',
            dialogue: 'Is that everything?',
          },
          {
            id: 'porter-2',
            speaker: 'ALBERT',
            dialogue: 'The case has shirts in it. The notebook is the heavy one.',
          },
          {
            id: 'porter-3',
            speaker: 'THE PORTER',
            dialogue: 'Books?',
          },
          {
            id: 'porter-4',
            speaker: 'ALBERT',
            dialogue: 'One question. I have had it since I was five and I have not put it down yet.',
          },
          {
            id: 'porter-5',
            speaker: 'THE PORTER',
            dialogue: 'Must be a good one.',
          },
          {
            id: 'porter-6',
            speaker: 'ALBERT',
            dialogue: 'It is about light. Ask me again in ten years.',
          },
          {
            id: 'ahead',
            narration: 'Ahead of him is a country that does not care who his father was.',
          },
          {
            id: 'exams',
            speaker: 'ALBERT',
            dialogue: 'And a whole language of examinations that I have no intention of learning to speak well.',
          },
          {
            id: 'late',
            speaker: 'THE PORTER',
            dialogue: 'Train is late anyway.',
          },
          {
            id: 'late-2',
            speaker: 'ALBERT',
            dialogue: 'Good. Gives me time to be wrong about something else.',
          },
        ],
        historicalNote:
          'A closing for a boy who stayed in Munich to the end rather than following his family south. The question about light, and the move into Switzerland afterwards, are the documented constants.',
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
            narration: 'Zürich smells of lake water, coal smoke and cheap coffee. The benches in the theatre are full by eight.',
          },
          {
            id: 'weber',
            speaker: 'PROFESSOR WEBER',
            dialogue: 'We begin, as we always begin, with the foundations.',
          },
          {
            id: 'foundations',
            narration: 'The lectures are excellent and they stop at about 1890, which is exactly where the interesting part starts.',
          },
          {
            id: 'ask',
            speaker: 'ALBERT',
            dialogue: 'Herr Professor. When do we reach the last ten years?',
          },
          {
            id: 'ask-2',
            speaker: 'PROFESSOR WEBER',
            dialogue: 'When you have earned the right to be bored by them, Einstein. Sit down.',
          },
          {
            id: 'maxwell',
            speaker: 'ALBERT',
            dialogue: 'He has not said Maxwell once. Not once in a month.',
          },
          {
            id: 'maxwell-2',
            speaker: 'GROSSMANN',
            dialogue: 'He will. Give him thirty years.',
          },
          {
            id: 'notes',
            narration: 'Grossmann takes notes in a hand so even it looks printed.',
          },
          {
            id: 'notes-2',
            speaker: 'GROSSMANN',
            dialogue: 'Sit wherever you like. Come or do not come. I write it all down regardless.',
          },
          {
            id: 'notes-3',
            speaker: 'ALBERT',
            dialogue: 'Why?',
          },
          {
            id: 'notes-4',
            speaker: 'GROSSMANN',
            dialogue: 'I am told my handwriting is my best feature. It would be a waste not to use it on somebody.',
          },
          {
            id: 'mileva',
            narration: 'There is one woman in the section. She has read the new papers and disagrees with him about all of them.',
          },
          {
            id: 'mileva-2',
            speaker: 'MILEVA',
            dialogue: 'You have read that badly.',
          },
          {
            id: 'mileva-3',
            speaker: 'ALBERT',
            dialogue: 'I have read it twice.',
          },
          {
            id: 'mileva-4',
            speaker: 'MILEVA',
            dialogue: 'Then you have read it badly twice. Come and argue about it properly. I have coffee and you have nothing else to do.',
          },
          {
            id: 'arithmetic',
            narration: 'Four years, then a teaching diploma, then — if a professor likes you — an assistantship.',
          },
          {
            id: 'choice',
            speaker: 'GROSSMANN',
            dialogue: 'Everyone in the section can do that arithmetic. The only open question is what you spend the four years on. So. What will it be?',
            choices: [
              {
                id: 'reading',
                label: 'Skip the lectures. Read Maxwell and Boltzmann alone.',
                effects: [
                  { type: 'flag', flag: 'einstein.selfTaught', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'lectures',
                label: 'Attend everything. Make yourself useful to the professors.',
                effects: [
                  { type: 'flag', flag: 'einstein.goodStudent', value: true },
                  { type: 'resources', effects: { standing: 1, network: 1 } },
                ],
              },
              {
                id: 'laboratory',
                label: 'Live in the laboratory and burn your hands.',
                effects: [
                  { type: 'flag', flag: 'einstein.laboratoryYears', value: true },
                  { type: 'resources', effects: { health: -1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Einstein entered the Zürich polytechnic in 1896, was taught physics by Professor Heinrich Weber, befriended Marcel Grossmann, and studied alongside Mileva Marić, the only woman in their section. He cut lectures to read the newest physics on his own and relied on Grossmann’s notes. Dialogue is dramatized.',
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
            narration: 'The notebooks come across the café table in a stack, corners squared.',
          },
          {
            id: 'every',
            speaker: 'ALBERT',
            dialogue: 'You went to every lecture I missed.',
          },
          {
            id: 'every-2',
            speaker: 'GROSSMANN',
            dialogue: 'I went to every lecture. That yours were missed is a separate fact, and I have never once mentioned it.',
          },
          {
            id: 'every-3',
            speaker: 'ALBERT',
            dialogue: 'You just did.',
          },
          {
            id: 'every-4',
            speaker: 'GROSSMANN',
            dialogue: 'I said it was separate. I did not say I had forgotten it.',
          },
          {
            id: 'argue',
            speaker: 'ALBERT',
            dialogue: 'A physicist needs the mathematics that works. Not the newest kind.',
          },
          {
            id: 'argue-2',
            speaker: 'GROSSMANN',
            dialogue: 'You only say that because the newest kind is difficult.',
          },
          {
            id: 'argue-3',
            speaker: 'ALBERT',
            dialogue: 'I say it because nature is not showing off.',
          },
          {
            id: 'winning',
            narration: 'Grossmann is winning, which he does by never raising his voice.',
          },
          {
            id: 'pass',
            speaker: 'GROSSMANN',
            dialogue: 'You will pass because I write neatly. What you do afterwards is entirely your own affair.',
          },
          {
            id: 'pass-2',
            speaker: 'ALBERT',
            dialogue: 'And what do you imagine I will do?',
          },
          {
            id: 'pass-3',
            speaker: 'GROSSMANN',
            dialogue: 'Something strange. I would put money on it, if I had any.',
          },
          {
            id: 'future',
            speaker: 'ALBERT',
            dialogue: 'If I ever need a kind of mathematics I have never heard of, I shall write to you.',
          },
          {
            id: 'future-2',
            speaker: 'GROSSMANN',
            dialogue: 'Do. I shall keep the post office standing by.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.grossmannNotes', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Marcel Grossmann was Einstein’s fellow student and lifelong friend; Einstein sat few lectures and used Grossmann’s notes to pass, and years later wrote to him for the geometry he needed for general relativity. Dialogue is dramatized.',
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
            narration: 'The parcel comes wrapped in brown paper and tied with a length of string too good to throw away.',
          },
          {
            id: 'inside',
            narration: 'Inside: four months of lectures, copied out in that impossible even handwriting.',
          },
          {
            id: 'note',
            speaker: 'GROSSMANN',
            dialogue: 'You owe me nothing.',
          },
          {
            id: 'note-2',
            speaker: 'ALBERT',
            dialogue: 'That is the most expensive kind of debt there is, and he knows it.',
          },
          {
            id: 'reply',
            narration: 'He writes back the same evening. Three pages, none of them about the lectures.',
          },
          {
            id: 'reply-2',
            speaker: 'ALBERT',
            dialogue: 'I have a question about light and nobody here will sit still long enough for it.',
          },
          {
            id: 'reply-3',
            speaker: 'ALBERT',
            dialogue: 'You always sat still for it. Even when you were certain I was wrong.',
          },
          {
            id: 'reply-4',
            speaker: 'ALBERT',
            dialogue: 'Especially then.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.grossmannNotes', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'The same documented friendship, told for a life that spent these years away from Zürich. Grossmann’s notes and his steadiness are on the record; the parcel is dramatized.',
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
            narration: 'The stove is out. The calculation has not moved in nine days.',
          },
          {
            id: 'stuck-2',
            speaker: 'ALBERT',
            dialogue: 'Nine days. The same wrong answer every night, only tidier.',
          },
          {
            id: 'violin',
            narration: 'Then he takes down the violin.',
          },
          {
            id: 'door',
            speaker: 'THE LANDLADY',
            dialogue: 'Herr Einstein.',
          },
          {
            id: 'door-2',
            speaker: 'THE LANDLADY',
            dialogue: 'It is one in the morning.',
          },
          {
            id: 'door-3',
            speaker: 'ALBERT',
            dialogue: 'Is it? I am sorry. I shall stop.',
          },
          {
            id: 'door-4',
            speaker: 'THE LANDLADY',
            dialogue: 'It is a very beautiful noise and it is one in the morning.',
          },
          {
            id: 'knot',
            speaker: 'ALBERT',
            dialogue: 'May I ask you something. When you cannot undo a knot, what do you do?',
          },
          {
            id: 'knot-2',
            speaker: 'THE LANDLADY',
            dialogue: 'Put it down. Go to bed. It is looser in the morning.',
          },
          {
            id: 'knot-3',
            speaker: 'ALBERT',
            dialogue: 'That is precisely what this is. Only I cannot go to bed, so I play instead.',
          },
          {
            id: 'knot-4',
            speaker: 'THE LANDLADY',
            dialogue: 'Then play it quieter.',
          },
          {
            id: 'quieter',
            narration:
              'He plays quieter. Mozart solves nothing, but the shape of the problem changes, the way a room changes when somebody moves one chair.',
          },
          {
            id: 'line',
            narration: 'Some time before dawn he writes down a line that is not wrong.',
          },
          {
            id: 'line-2',
            speaker: 'ALBERT',
            dialogue: 'There. She was right. It was looser.',
          },
        ],
        historicalNote:
          'Einstein played the violin from childhood and all his life, frequently while stuck on a problem. The particular night, and the landlady, are dramatized.',
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
            id: 'piano',
            narration: 'Somebody two floors down has a piano and no shame. On Thursdays they meet in the middle.',
          },
          {
            id: 'bring',
            speaker: 'THE NEIGHBOUR',
            dialogue: 'Thursday. Bring the fiddle. Do not bring the physics.',
          },
          {
            id: 'bring-2',
            speaker: 'ALBERT',
            dialogue: 'I cannot always tell them apart.',
          },
          {
            id: 'unstoppable',
            narration: 'He is not a good violinist. He is an unstoppable one.',
          },
          {
            id: 'ahead',
            speaker: 'THE NEIGHBOUR',
            dialogue: 'You are ahead again. You are always ahead.',
          },
          {
            id: 'ahead-2',
            speaker: 'ALBERT',
            dialogue: 'I am where the music is going. You are where it is.',
          },
          {
            id: 'stairs',
            narration: 'Afterwards, on the stairs, the thing that would not come apart all week has quietly come apart.',
          },
          {
            id: 'again',
            speaker: 'THE NEIGHBOUR',
            dialogue: 'Same time next week?',
          },
          {
            id: 'again-2',
            speaker: 'ALBERT',
            dialogue: 'Yes. And do not tell anyone this is how I work. They would want to come and watch.',
          },
        ],
        historicalNote: 'Einstein’s lifelong violin playing is documented. The Thursday evenings and the neighbour are dramatized.',
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
            narration: 'The diploma is real. So is the list pinned to the corridor wall.',
          },
          {
            id: 'list-2',
            narration: 'Four assistantships. Four names. None of them his.',
          },
          {
            id: 'classmate',
            speaker: 'A CLASSMATE',
            dialogue: 'Weber took two of them. Neither of them you.',
          },
          {
            id: 'classmate-2',
            speaker: 'ALBERT',
            dialogue: 'He told me once that I was clever, and that I did not let myself be told anything.',
          },
          {
            id: 'classmate-3',
            speaker: 'A CLASSMATE',
            dialogue: 'Was he wrong?',
          },
          {
            id: 'classmate-4',
            speaker: 'ALBERT',
            dialogue: 'No. That is what makes it sting.',
          },
          {
            id: 'letters',
            narration: 'He writes to professors in three countries. Politely, then less politely, then politely again.',
          },
          {
            id: 'letters-3',
            speaker: 'ALBERT',
            dialogue: 'A man who skipped the lectures cannot be astonished when the lecturers skip him.',
          },
          {
            id: 'letters-4',
            speaker: 'A CLASSMATE',
            dialogue: 'Does saying that help?',
          },
          {
            id: 'letters-5',
            speaker: 'ALBERT',
            dialogue: 'Not nearly as much as it ought to.',
          },
        ],
        historicalNote:
          'Einstein took his diploma in 1900 but, alone among his classmates, was given no assistantship, and spent two years without an academic post. His relations with Professor Weber had soured. Dialogue is dramatized.',
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
            narration: 'He passes. The margin is not enormous.',
          },
          {
            id: 'passed-2',
            speaker: 'ALBERT',
            dialogue: 'The handwriting I passed on was not mine.',
          },
          {
            id: 'passed-3',
            speaker: 'GROSSMANN',
            dialogue: 'No.',
          },
          {
            id: 'passed-4',
            speaker: 'ALBERT',
            dialogue: 'I should like that noted. Loudly. In front of people.',
          },
          {
            id: 'passed-5',
            speaker: 'GROSSMANN',
            dialogue: 'It is noted. Sit down.',
          },
          {
            id: 'lake',
            narration: 'They sit by the lake until the steamers stop running.',
          },
          {
            id: 'post',
            speaker: 'GROSSMANN',
            dialogue: 'Neither of us has a post.',
          },
          {
            id: 'post-2',
            speaker: 'ALBERT',
            dialogue: 'One of us has a father who knows people.',
          },
          {
            id: 'post-3',
            speaker: 'GROSSMANN',
            dialogue: 'And one of us is too decent to mention it tonight.',
          },
          {
            id: 'post-4',
            speaker: 'ALBERT',
            dialogue: 'You just mentioned it.',
          },
          {
            id: 'post-5',
            speaker: 'GROSSMANN',
            dialogue: 'I mentioned that I was not mentioning it. Entirely different thing.',
          },
          {
            id: 'end',
            speaker: 'ALBERT',
            dialogue: 'Whatever happens next, I am not going to be grateful quietly.',
          },
          {
            id: 'end-2',
            speaker: 'GROSSMANN',
            dialogue: 'I should be disappointed in you if you were.',
          },
        ],
        historicalNote:
          'Grossmann’s father later recommended Einstein for the post at the Bern patent office. The evening by the lake is dramatized.',
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
            narration: 'The room goes back to the landlady with the stove blacked and the books returned.',
          },
          {
            id: 'pack-2',
            speaker: 'THE LANDLADY',
            dialogue: 'Four years, and this is all of it?',
          },
          {
            id: 'pack-3',
            speaker: 'ALBERT',
            dialogue: 'One case and one notebook.',
          },
          {
            id: 'pack-4',
            speaker: 'THE LANDLADY',
            dialogue: 'Which is the heavy one?',
          },
          {
            id: 'pack-5',
            speaker: 'ALBERT',
            dialogue: 'The notebook. It always is.',
          },
          {
            id: 'letter',
            narration: 'On the bare table there is one letter, written, folded, and not yet posted.',
          },
          {
            id: 'wait',
            speaker: 'THE LANDLADY',
            dialogue: 'And now?',
          },
          {
            id: 'wait-2',
            speaker: 'ALBERT',
            dialogue: 'Now everything waits on somebody else answering a letter.',
          },
          {
            id: 'wait-3',
            speaker: 'THE LANDLADY',
            dialogue: 'That happens to everybody sooner or later.',
          },
          {
            id: 'wait-4',
            speaker: 'ALBERT',
            dialogue: 'It has never once happened to me. I do not care for it at all.',
          },
        ],
        historicalNote:
          'A closing for an education that did not run through the documented Zürich route. The two years without a post that followed his diploma are documented.',
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
            narration: 'A folded newspaper on the table, his own advertisement circled in ink. Mathematics and physics. Trial lesson free of charge.',
          },
          {
            id: 'anyone',
            speaker: 'MILEVA',
            dialogue: 'Did anybody come?',
          },
          {
            id: 'anyone-2',
            speaker: 'ALBERT',
            dialogue: 'One. An engineer who wanted his son drilled for an examination.',
          },
          {
            id: 'anyone-4',
            speaker: 'ALBERT',
            dialogue: 'I taught the boy something interesting instead. He is no longer my pupil.',
          },
          {
            id: 'posts',
            narration: 'Two years of this. A stand-in post at a technical school, and then the regular man comes back and the post goes with him.',
          },
          {
            id: 'posts-2',
            speaker: 'MILEVA',
            dialogue: 'Four men from our section have assistantships. You have a diploma.',
          },
          {
            id: 'posts-3',
            speaker: 'ALBERT',
            dialogue: 'Four men from our section went to the lectures.',
          },
          {
            id: 'posts-5',
            speaker: 'ALBERT',
            dialogue: 'Weber would have taken me if I had once said Herr Professor as though I meant it.',
          },
          {
            id: 'stateless',
            narration: 'In the winter he pays for Swiss papers with money he does not have. Being from nowhere has stopped being restful.',
          },
          {
            id: 'stateless-2',
            speaker: 'THE CLERK',
            dialogue: 'The fee is payable in full. Today.',
          },
          {
            id: 'stateless-3',
            speaker: 'ALBERT',
            dialogue: 'I have belonged to nothing for five years. It turns out nothing does not employ people.',
          },
          {
            id: 'bern',
            narration: 'Then a letter from Zürich, in a hand so even it looks printed.',
          },
          {
            id: 'bern-2',
            speaker: 'GROSSMANN',
            dialogue: 'My father has spoken to the director of the patent office in Bern. There is an examination to sit.',
          },
          {
            id: 'bern-3',
            speaker: 'ALBERT',
            dialogue: 'Patents. Marcel, I would be a clerk.',
          },
          {
            id: 'bern-4',
            speaker: 'GROSSMANN',
            dialogue: 'You would be a clerk with a salary, eight hours of other men’s machines, and every evening of your life to yourself.',
          },
          {
            id: 'bern-7',
            speaker: 'MILEVA',
            dialogue: 'Take it. We cannot go on eating arguments.',
          },
          {
            id: 'choice',
            speaker: 'MILEVA',
            dialogue: 'The examination is in three weeks. What are you willing to be, and for how long?',
            choices: [
              {
                id: 'patent',
                label: 'Sit the examination. Be a clerk in Bern.',
                effects: [
                  { type: 'flag', flag: 'einstein.patentPost', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'resources', effects: { funds: 2, standing: -1 } },
                ],
              },
              {
                id: 'university',
                label: 'Keep writing to professors until one of them answers.',
                effects: [
                  { type: 'flag', flag: 'einstein.heldOut', value: true },
                  { type: 'resources', effects: { standing: 1, funds: -1 } },
                ],
              },
              {
                id: 'teaching',
                label: 'Take whatever school will have you.',
                effects: [
                  { type: 'flag', flag: 'einstein.schoolmaster', value: true },
                  { type: 'resources', effects: { funds: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Einstein advertised private lessons, held temporary teaching posts, became a Swiss citizen in 1901, and took the Bern patent examiner post in 1902 after Marcel Grossmann’s father recommended him. The clerk stands in for officials whose names are not recorded. Dialogue is dramatized.',
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
            narration: 'The examining room in Bern. Rolled drawings to the ceiling, a clock on the wall, and a desk too high to slouch at.',
          },
          {
            id: 'haller',
            speaker: 'HALLER',
            dialogue: 'Read every application as though the man were a liar and a genius at the same time.',
          },
          {
            id: 'haller-2',
            speaker: 'ALBERT',
            dialogue: 'Both at once?',
          },
          {
            id: 'haller-3',
            speaker: 'HALLER',
            dialogue: 'Always both. Find the place where the machine would stop. Then write the refusal so it does not humiliate him.',
          },
          {
            id: 'drawer',
            narration: 'The second drawer holds work of his own. He has oiled the runners so it shuts without a sound.',
          },
          {
            id: 'drawer-2',
            speaker: 'BESSO',
            dialogue: 'Haller can hear that drawer from the corridor.',
          },
          {
            id: 'drawer-3',
            speaker: 'ALBERT',
            dialogue: 'Haller can hear a fly change its mind. He has never said one word about it.',
          },
          {
            id: 'drawer-4',
            speaker: 'BESSO',
            dialogue: 'Because your reports are the best in the building.',
          },
          {
            id: 'drawer-5',
            speaker: 'ALBERT',
            dialogue: 'Then the arrangement is honest. He buys the daylight. I keep the evenings.',
          },
          {
            id: 'walk',
            narration: 'Walking home under the arcades they argue, and go past his own street, and turn back, and go past it again.',
          },
          {
            id: 'walk-2',
            speaker: 'BESSO',
            dialogue: 'That is twice now. Twice past your own door, over two clocks that will not agree.',
          },
          {
            id: 'walk-3',
            speaker: 'ALBERT',
            dialogue: 'They will agree eventually. One of us has to give, and I am beginning to think it is not me.',
          },
        ],
        historicalNote:
          'Einstein worked as a patent examiner in Bern from 1902 under the director Friedrich Haller, and discussed physics daily with his colleague Michele Besso, whom he thanked in the 1905 relativity paper. The drawer and all dialogue are dramatized.',
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
            narration: 'He does the household arithmetic first, because it is the harder problem.',
          },
          {
            id: 'sums-2',
            speaker: 'MILEVA',
            dialogue: 'Rent, coal, and the tutoring fee that has not come.',
          },
          {
            id: 'sums-3',
            speaker: 'ALBERT',
            dialogue: 'I shall ask for it twice. The second time is always the one that works.',
          },
          {
            id: 'sums-5',
            speaker: 'ALBERT',
            dialogue: 'And if he never pays, we shall be poor and interesting instead of poor and bored.',
          },
          {
            id: 'work',
            narration: 'Then he clears the table of that arithmetic and does the other kind, which costs nothing.',
          },
          {
            id: 'work-2',
            speaker: 'MILEVA',
            dialogue: 'You are the only man I know who is cheerful about this.',
          },
          {
            id: 'work-3',
            speaker: 'ALBERT',
            dialogue: 'I am not cheerful. I am refusing to be bored. From outside they look the same.',
          },
        ],
        historicalNote:
          'Einstein lived on very little in the years before and around the patent office post. The morning is dramatized.',
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
            narration: 'The bargain is simple and he made it with his eyes open.',
          },
          {
            id: 'trade-2',
            speaker: 'ALBERT',
            dialogue: 'They buy the daylight. I keep the evenings.',
          },
          {
            id: 'trade-3',
            speaker: 'A COLLEAGUE',
            dialogue: 'The evenings are not very long.',
          },
          {
            id: 'trade-4',
            speaker: 'ALBERT',
            dialogue: 'No. But nobody asks me what I do with them.',
          },
          {
            id: 'trade-6',
            speaker: 'ALBERT',
            dialogue: 'An assistant has the whole day — and a professor telling him what to do with it. I know which bargain I would rather hold.',
          },
          {
            id: 'evening',
            narration: 'The lamp is filled twice a week. It is the only honest record of what happens in this room.',
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
            narration: 'The lamp is lit and the manuscript is finished. He has read the first page four times to see whether he still believes it.',
          },
          {
            id: 'broken',
            speaker: 'BESSO',
            dialogue: 'You have the face of a man who has broken something.',
          },
          {
            id: 'broken-2',
            speaker: 'ALBERT',
            dialogue: 'I have. Sit down, Michele. Shine a light on a clean metal plate. What happens?',
          },
          {
            id: 'broken-3',
            speaker: 'BESSO',
            dialogue: 'It gets warm.',
          },
          {
            id: 'broken-4',
            speaker: 'ALBERT',
            dialogue: 'It spits out tiny pieces of itself. Little specks of charge. The light knocks them loose.',
          },
          {
            id: 'brighter',
            speaker: 'ALBERT',
            dialogue: 'Turn the lamp up. Twice as bright. What should the specks do?',
          },
          {
            id: 'brighter-2',
            speaker: 'BESSO',
            dialogue: 'Harder push, faster specks. Any engineer would tell you that.',
          },
          {
            id: 'brighter-3',
            speaker: 'ALBERT',
            dialogue: 'They do not go faster. More of them come off, and every single one leaves at exactly the speed it did before.',
          },
          {
            id: 'colour',
            speaker: 'ALBERT',
            dialogue: 'Now leave the brightness alone and change the colour. Red to blue.',
          },
          {
            id: 'colour-3',
            speaker: 'ALBERT',
            dialogue: 'Fewer come off. And every one of them leaves faster.',
          },
          {
            id: 'colour-5',
            speaker: 'ALBERT',
            dialogue: 'Brightness changes how many. Colour changes how hard. Brightness does nothing to the hardness at all.',
          },
          {
            id: 'colour-6',
            speaker: 'BESSO',
            dialogue: 'A wave cannot do that. A bigger wave hits harder. That is what a wave is.',
          },
          {
            id: 'jug',
            narration: 'He gets up and fetches the water jug off the washstand and puts it in Besso’s hands.',
          },
          {
            id: 'jug-2',
            speaker: 'ALBERT',
            dialogue: 'Pour that on the flowerbed. The whole jug, in a steady stream.',
          },
          {
            id: 'jug-3',
            speaker: 'BESSO',
            dialogue: 'The soil drinks it. Nothing moves.',
          },
          {
            id: 'jug-4',
            speaker: 'ALBERT',
            dialogue: 'Now freeze the same water into hailstones and throw them one at a time.',
          },
          {
            id: 'jug-5',
            speaker: 'BESSO',
            dialogue: 'Something gets knocked out of the bed.',
          },
          {
            id: 'jug-6',
            speaker: 'ALBERT',
            dialogue: 'Only if one single stone is heavy enough. Throwing twice as many small ones does nothing whatever.',
          },
          {
            id: 'hail',
            speaker: 'BESSO',
            dialogue: 'You are about to tell me that light is hail.',
          },
          {
            id: 'hail-2',
            speaker: 'ALBERT',
            dialogue: 'I am telling you light arrives in separate lumps. Countable ones. And a blue lump is a heavier stone than a red one.',
          },
          {
            id: 'hail-4',
            speaker: 'ALBERT',
            dialogue: 'Brightness is how many stones a second. Colour is how heavy each one is. That is the entire paper, in a jug of water.',
          },
          {
            id: 'quanta',
            speaker: 'BESSO',
            dialogue: 'And a hundred years of men who proved light is a wave?',
          },
          {
            id: 'quanta-2',
            speaker: 'ALBERT',
            dialogue: 'Were not wrong. That is the part that keeps me awake at night.',
          },
          {
            id: 'quanta-4',
            speaker: 'ALBERT',
            dialogue: 'And it cannot be both, and it is both, and nobody alive knows how. I have written it down anyway.',
          },
          {
            id: 'quanta-6',
            speaker: 'ALBERT',
            dialogue: 'The lump needs a name. I call it a quantum. The word only means a portion — a helping.',
          },
          {
            id: 'quanta-8',
            speaker: 'ALBERT',
            dialogue: 'Like soup. Light comes in helpings, Michele, and you cannot be served half of one.',
          },
          {
            id: 'revolutionary',
            narration: 'He ties the pages with string. Of everything on this desk tonight, it is the one that frightens him.',
          },
          {
            id: 'revolutionary-3',
            speaker: 'ALBERT',
            dialogue: 'The others move the furniture about. This one takes out a wall.',
          },
        ],
        historicalNote:
          'Einstein’s 1905 paper proposed that light is absorbed and emitted in discrete packets, explaining why the colour of light — not its brightness — sets the speed of the electrons a metal gives up. It later won him the Nobel Prize, and he called it in correspondence the only genuinely revolutionary thing he wrote that year. The conversation with Besso is dramatized.',
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
            narration: 'It arrives late, and in a different room from the one he expected, and it arrives whole.',
          },
          {
            id: 'idea-2',
            speaker: 'THE LANDLADY',
            dialogue: 'That lamp has been burning since Thursday.',
          },
          {
            id: 'idea-3',
            speaker: 'ALBERT',
            dialogue: 'Answer me something. Pour water on a flowerbed and nothing shifts. Why does one hailstone shift it?',
          },
          {
            id: 'idea-4',
            speaker: 'THE LANDLADY',
            dialogue: 'Because a hailstone is a lump and water is not.',
          },
          {
            id: 'idea-5',
            speaker: 'ALBERT',
            dialogue: 'Just so. Light is hail. It comes in lumps, I can prove it, and nobody is going to thank me.',
          },
          {
            id: 'cost',
            speaker: 'THE LANDLADY',
            dialogue: 'Will it pay your rent?',
          },
          {
            id: 'cost-2',
            speaker: 'ALBERT',
            dialogue: 'Not a centime. There is no polite way to say it either. I am posting it in the morning.',
          },
        ],
        historicalNote:
          'A breakthrough for a life that reached the light-in-packets idea somewhere other than Bern in 1905. The physics is documented; the setting and the landlady are not.',
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
            narration: 'A borrowed microscope, a drop of water on a slide, and one grain of pollen that will not hold still.',
          },
          {
            id: 'jitter-2',
            speaker: 'ALBERT',
            dialogue: 'Look at it. Left. Back. Nowhere. Left again.',
          },
          {
            id: 'jitter-3',
            speaker: 'MILEVA',
            dialogue: 'It has done that under microscopes for eighty years. Everyone agrees it is mysterious and goes to lunch.',
          },
          {
            id: 'jitter-4',
            speaker: 'ALBERT',
            dialogue: 'What is hitting it?',
          },
          {
            id: 'jitter-5',
            speaker: 'MILEVA',
            dialogue: 'Nothing is hitting it. The water is still.',
          },
          {
            id: 'crowd',
            speaker: 'ALBERT',
            dialogue: 'The water is not still. The water is a crowd.',
          },
          {
            id: 'crowd-3',
            speaker: 'ALBERT',
            dialogue: 'Stand a man in the middle of the market square at noon. Shoulders on every side of him, all shoving.',
          },
          {
            id: 'crowd-4',
            speaker: 'ALBERT',
            dialogue: 'Mostly the shoves cancel. Now and again more arrive from the left than the right, and he staggers.',
          },
          {
            id: 'crowd-6',
            speaker: 'MILEVA',
            dialogue: 'From an upstairs window you would see only a man twitching in an empty square.',
          },
          {
            id: 'crowd-7',
            speaker: 'MILEVA',
            dialogue: 'But your grain is a thousand times too big to be shifted by one of them.',
          },
          {
            id: 'crowd-8',
            speaker: 'ALBERT',
            dialogue: 'By one, yes. But they do not arrive evenly, and they arrive in their millions.',
          },
          {
            id: 'mach',
            speaker: 'MILEVA',
            dialogue: 'Half of Vienna says atoms are only a way of talking. Nobody has ever seen one.',
          },
          {
            id: 'mach-2',
            speaker: 'ALBERT',
            dialogue: 'Then let the way of talking make a prediction, and we shall see who is only talking.',
          },
          {
            id: 'bookkeeping',
            narration: 'He does the bookkeeping of the shoving: how far a grain should wander in one second, if it is jostled by things too small to see.',
          },
          {
            id: 'bookkeeping-2',
            speaker: 'ALBERT',
            dialogue: 'There. A number. So far, in one second, for a grain that size, in water at that warmth.',
          },
          {
            id: 'bookkeeping-3',
            speaker: 'MILEVA',
            dialogue: 'And if a man with a microscope measures it and gets something else?',
          },
          {
            id: 'bookkeeping-4',
            speaker: 'ALBERT',
            dialogue: 'Then there are no atoms and I am a fool, and the whole argument is settled by Tuesday.',
          },
          {
            id: 'atoms',
            speaker: 'MILEVA',
            dialogue: 'And if he gets your number?',
          },
          {
            id: 'atoms-2',
            speaker: 'ALBERT',
            dialogue: 'Then nobody may call them a way of talking ever again. They will have left footprints, and the footprints will have a size.',
          },
          {
            id: 'atoms-3',
            narration: 'It is not a picture of an atom. It is better than that. It is a number somebody else can go out and break.',
          },
        ],
        historicalNote:
          'Einstein’s 1905 paper on the jittering of small particles in a fluid turned the reality of molecules into a measurable prediction; experiments confirmed it within a few years and ended the serious scientific argument about whether atoms exist. The conversation is dramatized.',
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
            narration: 'No microscope and no slide. A glass of water on the sill and four pages of arithmetic.',
          },
          {
            id: 'count-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'You are counting things nobody can see.',
          },
          {
            id: 'count-3',
            speaker: 'ALBERT',
            dialogue: 'I am counting them by what they push. A man in a crowd staggers; you learn the crowd from the stagger.',
          },
          {
            id: 'count-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'And the answer comes out as what?',
          },
          {
            id: 'count-5',
            speaker: 'ALBERT',
            dialogue: 'How far a speck in water should wander in one second. Anyone with a microscope and patience can check me.',
          },
          {
            id: 'send',
            speaker: 'A COLLEAGUE',
            dialogue: 'And if they check you and you are wrong?',
          },
          {
            id: 'send-2',
            speaker: 'ALBERT',
            dialogue: 'Then I shall have saved the century some time. That is a respectable way to be wrong.',
          },
        ],
        historicalNote:
          'The same documented result — a measurable prediction from the jostling of invisible molecules — reached outside Bern in 1905.',
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
            narration: 'The last tram of the evening pulls away from the clock tower. Both of them look back at the lit face of it, the way anyone does.',
          },
          {
            id: 'tram-2',
            speaker: 'ALBERT',
            dialogue: 'Michele. That time up there. When did it leave the tower?',
          },
          {
            id: 'tram-4',
            speaker: 'ALBERT',
            dialogue: 'You will say it is leaving now. It is not. That light left the clock a moment ago and had to travel down the street to your eye.',
          },
          {
            id: 'tram-6',
            speaker: 'BESSO',
            dialogue: 'A very small moment. And?',
          },
          {
            id: 'now-2',
            speaker: 'ALBERT',
            dialogue: 'And now make this tram faster. As fast as the light itself. Keep looking back at the clock.',
          },
          {
            id: 'now-3',
            speaker: 'BESSO',
            dialogue: 'Then I never catch any newer news of it. The hands would stand still.',
          },
          {
            id: 'now-4',
            speaker: 'ALBERT',
            dialogue: 'For you. The clock in the square goes on striking the hour for everybody in the square.',
          },
          {
            id: 'now-6',
            speaker: 'ALBERT',
            dialogue: 'And do not tell me yours is the wrong one. Show me the clock hung above all the others, that we may go and ask it.',
          },
          {
            id: 'towers',
            narration: 'The tram turns into the long arcaded street. Two more towers along it, and in this town no two of them ever quite agree.',
          },
          {
            id: 'towers-2',
            speaker: 'BESSO',
            dialogue: 'Very well. Run towards a light and it arrives at you faster. That is the end of it.',
          },
          {
            id: 'towers-3',
            speaker: 'ALBERT',
            dialogue: 'That is the whole trouble. It does not. It comes at you at the same speed however hard you run.',
          },
          {
            id: 'towers-5',
            speaker: 'ALBERT',
            dialogue: 'Every measurement anybody has ever made says so. And the rules for light say it too, and they have never yet been wrong.',
          },
          {
            id: 'rain',
            speaker: 'BESSO',
            dialogue: 'Rain does not behave like that. Run through rain and it hits you harder.',
          },
          {
            id: 'rain-2',
            speaker: 'ALBERT',
            dialogue: 'Rain behaves. Light refuses. I have spent ten years being polite about it.',
          },
          {
            id: 'rain-4',
            speaker: 'BESSO',
            dialogue: 'Then something in that sentence has to give.',
          },
          {
            id: 'rain-6',
            speaker: 'ALBERT',
            dialogue: 'The clock gives. The ruler gives. The word now gives. Never the light.',
          },
          {
            id: 'rain-7',
            speaker: 'BESSO',
            dialogue: 'Albert, that is not physics. That is a man losing his nerve in the rain.',
          },
          {
            id: 'train',
            narration: 'They get down at the bridge. He does not stop walking and he does not stop talking.',
          },
          {
            id: 'train-2',
            speaker: 'ALBERT',
            dialogue: 'Lightning strikes a train. Once at the front, once at the back. A man on the platform, exactly halfway, sees the two flashes together.',
          },
          {
            id: 'train-3',
            speaker: 'BESSO',
            dialogue: 'Then they happened together. That is what together means.',
          },
          {
            id: 'train-4',
            speaker: 'ALBERT',
            dialogue: 'Now a woman sitting in the middle of the carriage. The train is moving. She is carried towards one flash and away from the other.',
          },
          {
            id: 'train-5',
            speaker: 'BESSO',
            dialogue: 'So she meets the front one first. She is moving, that is all.',
          },
          {
            id: 'train-6',
            speaker: 'ALBERT',
            dialogue: 'She is not moving. Not as far as her carriage is concerned. She is sitting perfectly still in the middle of her own world.',
          },
          {
            id: 'train-8',
            speaker: 'ALBERT',
            dialogue: 'And neither of them is mistaken. That is the thing I cannot make anybody swallow. They are both right.',
          },
          {
            id: 'train-10',
            speaker: 'ALBERT',
            dialogue: 'At the same time is not a fact about the world. It is an agreement between two clocks about a signal that takes time to arrive.',
          },
          {
            id: 'give',
            narration: 'Besso stops in the middle of the bridge. It is raining and neither of them notices for some time.',
          },
          {
            id: 'give-2',
            speaker: 'BESSO',
            dialogue: 'And if that is true. What else falls over?',
          },
          {
            id: 'give-3',
            speaker: 'ALBERT',
            dialogue: 'A moving clock runs slow. A moving ruler is short. Not by a trick of looking — that is what they are.',
          },
          {
            id: 'give-5',
            speaker: 'ALBERT',
            dialogue: 'Nobody has ever seen a short ruler, because trams are slow. At tram speeds the change is smaller than a dust mote.',
          },
          {
            id: 'give-6',
            speaker: 'BESSO',
            dialogue: 'I am going to bed. I do not accept one word of it.',
          },
          {
            id: 'give-7',
            speaker: 'ALBERT',
            dialogue: 'Good. Refuse it again tomorrow. You are the only man in Bern who refuses it properly.',
          },
          {
            id: 'night',
            narration: 'He does not sleep. Five weeks of work come apart and settle back in a different order, and by six in the morning it is finished.',
          },
          {
            id: 'solved',
            speaker: 'ALBERT',
            dialogue: 'Thank you. It is finished. Space and time will have to give up some of their dignity, but it is finished.',
          },
          {
            id: 'solved-2',
            speaker: 'BESSO',
            dialogue: 'Albert. It is six o’clock and you are standing in my doorway.',
          },
          {
            id: 'solved-3',
            speaker: 'ALBERT',
            dialogue: 'Yes. Fetch your coat, we shall be late.',
          },
        ],
        historicalNote:
          'Einstein completed special relativity in Bern in 1905 after long walking arguments with Michele Besso, whom he thanked in the paper and is reported to have visited the next morning. Bern’s clock towers and trams were part of his daily life. The train-and-lightning argument is his own; all wording here is dramatized, not quoted.',
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
            narration: 'No clock tower outside this window, and the year is not the one he would have chosen. It makes no difference whatever.',
          },
          {
            id: 'late-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Explain it to me as though I were the porter.',
          },
          {
            id: 'late-3',
            speaker: 'ALBERT',
            dialogue: 'Lightning hits both ends of a train. On the platform the two flashes are at the same moment. On the train they are not.',
          },
          {
            id: 'late-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'One of them has it wrong.',
          },
          {
            id: 'what',
            speaker: 'ALBERT',
            dialogue: 'Neither. At the same moment is only an agreement between two clocks about a signal that takes time to arrive.',
          },
          {
            id: 'what-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'And what falls out of that?',
          },
          {
            id: 'what-3',
            speaker: 'ALBERT',
            dialogue: 'A moving clock runs slow. A moving ruler is short. And at the end of it, weight and energy turn out to be one thing said twice.',
          },
          {
            id: 'quiet',
            narration: 'He sits with it a long while. Whoever he tells first will be polite and will not understand, and that is the whole of the celebration.',
          },
        ],
        historicalNote:
          'A breakthrough for a life that arrived at special relativity by another road. The content of the theory is documented; the circumstances are not.',
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
            narration: 'Four envelopes leave one small post office inside a few months. He counts out the coins for the stamps twice.',
          },
          {
            id: 'posted-2',
            speaker: 'THE CLERK',
            dialogue: 'Registered?',
          },
          {
            id: 'posted-3',
            speaker: 'ALBERT',
            dialogue: 'Ordinary. I cannot afford to have my opinions insured.',
          },
          {
            id: 'posted-4',
            speaker: 'THE CLERK',
            dialogue: 'What is in them?',
          },
          {
            id: 'posted-5',
            speaker: 'ALBERT',
            dialogue: 'Light in lumps. The size of the things water is made of. The end of the word now. And a short one about weight and energy.',
          },
          {
            id: 'posted-7',
            speaker: 'THE CLERK',
            dialogue: 'Eighty centimes.',
          },
          {
            id: 'office',
            narration: 'On Monday he is back at the desk by eight, refusing a patent for an improved gravel sorter.',
          },
          {
            id: 'office-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'You look terrible, Einstein. Have you been working?',
          },
          {
            id: 'office-3',
            speaker: 'ALBERT',
            dialogue: 'Only in the evenings. Nothing worth putting in a report.',
          },
          {
            id: 'wait',
            narration: 'The journals print them. Then nothing happens for the better part of a year.',
          },
          {
            id: 'wait-2',
            speaker: 'BESSO',
            dialogue: 'Berlin has written to you.',
          },
          {
            id: 'wait-3',
            speaker: 'ALBERT',
            dialogue: 'Planck. He has read the one about the clocks three times and wishes to argue about page nine.',
          },
          {
            id: 'wait-5',
            speaker: 'ALBERT',
            dialogue: 'Michele, I read that man’s books instead of going to lectures. He is arguing with me. Nothing has ever been better.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
          { type: 'flag', flag: 'einstein.miracleYear', value: true },
        ],
        historicalNote:
          'In 1905 Einstein published four papers — on light in packets, on the jostling of particles in water, on special relativity, and on the equivalence of mass and energy — while employed full time at the patent office and holding no academic position. Max Planck was among the first established physicists to take the work seriously. Dialogue is dramatized.',
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
            narration: 'Four envelopes leave one small post office inside a few months, and nobody watching would look twice at any of them.',
          },
          {
            id: 'posted-2',
            speaker: 'THE CLERK',
            dialogue: 'Heavy, these.',
          },
          {
            id: 'posted-3',
            speaker: 'ALBERT',
            dialogue: 'One is about light. One is about water. One is about clocks. The thin one is the worst of them.',
          },
          {
            id: 'work',
            narration: 'None of it is anybody’s job. He does the day he is paid for, comes home, clears the table, and works until the lamp needs filling.',
          },
          {
            id: 'work-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'You look terrible. Have you been working?',
          },
          {
            id: 'work-3',
            speaker: 'ALBERT',
            dialogue: 'I have been arranging some furniture. Nobody on the stairs would guess at it, and I prefer that.',
          },
          {
            id: 'wait-2',
            speaker: 'ALBERT',
            dialogue: 'The journals print them, and nothing happens for a year. Then the letters come, from the men whose books I read instead of going to their lectures.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
          { type: 'flag', flag: 'einstein.miracleYear', value: true },
        ],
        historicalNote:
          'In 1905 Einstein published four transformative papers in a single year while holding no academic position. This telling follows a life that did the same work somewhere other than Bern. Dialogue is dramatized.',
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
            narration: 'Two results out of a life with no laboratory, no assistant and no chair. Either one of them would redirect a career.',
          },
          {
            id: 'two-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Two papers in a year, from a clerk. They will start learning your name.',
          },
          {
            id: 'two-3',
            speaker: 'ALBERT',
            dialogue: 'They will spell it wrong first. Everyone does.',
          },
          {
            id: 'third',
            speaker: 'A COLLEAGUE',
            dialogue: 'And the third thing? The one in the drawer.',
          },
          {
            id: 'third-2',
            speaker: 'ALBERT',
            dialogue: 'In pieces. I take it out most evenings and put it back most nights. It will keep — it has kept since I was sixteen.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'resources', effects: { standing: 1, network: 1 } },
          { type: 'flag', flag: 'einstein.miracleYear', value: true },
        ],
        historicalNote:
          'A partial version of the documented 1905 cluster. Einstein really did produce this work with no academic post.',
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
            narration: 'The journal comes in a paper wrapper. His name is set in a type that makes it look like somebody else’s.',
          },
          {
            id: 'printed-2',
            speaker: 'MILEVA',
            dialogue: 'Well?',
          },
          {
            id: 'printed-3',
            speaker: 'ALBERT',
            dialogue: 'I have read my own paragraphs as a stranger would. There are two sentences I should have cut.',
          },
          {
            id: 'rest',
            speaker: 'MILEVA',
            dialogue: 'And the rest of it? The other pages?',
          },
          {
            id: 'rest-2',
            speaker: 'ALBERT',
            dialogue: 'Still in the drawer. One paper is not a year that changes physics. It is a door held open with a foot.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote: 'A reduced version of the documented 1905 output, for a life that published less that year.',
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
            narration: 'Thirty pages in the drawer about clocks. Forty about the size of molecules. None of them have gone anywhere.',
          },
          {
            id: 'inside-2',
            speaker: 'BESSO',
            dialogue: 'You have been at the same page since Easter.',
          },
          {
            id: 'inside-3',
            speaker: 'ALBERT',
            dialogue: 'Each one stops where finishing it would cost a month I do not have.',
          },
          {
            id: 'year',
            speaker: 'BESSO',
            dialogue: 'You seem happy enough.',
          },
          {
            id: 'year-2',
            speaker: 'ALBERT',
            dialogue: 'The desk is warm, the salary comes on time, and it is possible to be happy and not be doing the thing you are for.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
          { type: 'flag', flag: 'einstein.unpublishedDrawer', value: true },
        ],
        historicalNote:
          'The documented 1905 papers were written in exactly these conditions — full-time clerical work, no institution. Here they stayed unfinished.',
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
            narration: 'The letter has an embossed seal and the word Professor in it, and it is addressed to him.',
          },
          {
            id: 'offer-2',
            speaker: 'HALLER',
            dialogue: 'You are giving notice.',
          },
          {
            id: 'offer-3',
            speaker: 'ALBERT',
            dialogue: 'Zürich. They are offering me a chair. It has taken nine years and a good deal of other men’s dinners.',
          },
          {
            id: 'offer-4',
            speaker: 'HALLER',
            dialogue: 'Your reports are the best in this building. The department will miss them.',
          },
          {
            id: 'offer-5',
            speaker: 'ALBERT',
            dialogue: 'That is the strangest compliment I have ever been paid.',
          },
          {
            id: 'offer-6',
            speaker: 'HALLER',
            dialogue: 'It was not a compliment. It was a complaint.',
          },
          {
            id: 'notice',
            narration: 'He clears the desk. He carries out rather less than he carried in.',
          },
          {
            id: 'notice-2',
            speaker: 'ALBERT',
            dialogue: 'Nine years of other men’s machines, and they made me. I shall never say that where a professor can hear it.',
          },
        ],
        historicalNote:
          'Einstein left the patent office in 1909 for his first academic appointment, after his 1905 papers were taken up by the established physicists. Friedrich Haller was the patent office director; the exchange is dramatized.',
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
            narration: 'Three men in three countries have written to him about the paper. Three short letters, all of them warm.',
          },
          {
            id: 'letters-2',
            speaker: 'MILEVA',
            dialogue: 'Does any of them offer you a post?',
          },
          {
            id: 'letters-3',
            speaker: 'ALBERT',
            dialogue: 'Not one. Being interesting turns out to be a different profession from being employable.',
          },
          {
            id: 'keep',
            speaker: 'MILEVA',
            dialogue: 'So you keep the desk.',
          },
          {
            id: 'keep-2',
            speaker: 'ALBERT',
            dialogue: 'The desk, the salary, and the drawer. There is more in it than there was, and it is the only ledger I trust.',
          },
        ],
        historicalNote: 'A closing for a life whose early publications drew attention but no chair.',
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
            narration: 'The record shows a decade of impeccable examinations, and not one day late.',
          },
          {
            id: 'record-2',
            speaker: 'HALLER',
            dialogue: 'A hundred perpetual motion machines refused, and every one of the inventors thanked you for it.',
          },
          {
            id: 'record-3',
            speaker: 'ALBERT',
            dialogue: 'I tell them where the machine stops. Men will forgive almost anything if you are exact about it.',
          },
          {
            id: 'drawer',
            speaker: 'HALLER',
            dialogue: 'And the second drawer?',
          },
          {
            id: 'drawer-2',
            speaker: 'ALBERT',
            dialogue: 'Heavier than when I came. Nobody has read a page of it.',
          },
          {
            id: 'drawer-3',
            narration: 'He is thirty. Outside the high window the century goes past like a train that does not stop here.',
          },
        ],
        historicalNote: 'A closing for a life that stayed at the patent desk without publishing the 1905 work.',
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
            narration: 'His first lectures are bad. He has written down what a professor sounds like, and he reads it out.',
          },
          {
            id: 'first-2',
            speaker: 'A STUDENT',
            dialogue: 'Herr Professor. We did not follow that last step.',
          },
          {
            id: 'first-3',
            speaker: 'ALBERT',
            dialogue: 'Neither did I. Wait there.',
          },
          {
            id: 'stop',
            narration: 'He puts the notes down and works the problem on the board in front of them. Wrongly. Then wrongly again.',
          },
          {
            id: 'stop-3',
            speaker: 'ALBERT',
            dialogue: 'Do not copy this down yet. Copy it when it is right. Watch it be wrong first — that is the part nobody ever shows you.',
          },
          {
            id: 'again',
            narration: 'The third attempt holds. Somebody at the back says oh, out loud, and does not mean to.',
          },
          {
            id: 'again-2',
            speaker: 'A STUDENT',
            dialogue: 'Is that allowed? Being wrong in front of us.',
          },
          {
            id: 'again-3',
            speaker: 'ALBERT',
            dialogue: 'It is the only kind of teaching I can do. Attendance will tell us whether it is any good.',
          },
          {
            id: 'again-4',
            narration: 'Attendance doubles by Christmas.',
          },
          {
            id: 'salary',
            speaker: 'MILEVA',
            dialogue: 'The salary is smaller than the office paid. The hours are longer.',
          },
          {
            id: 'salary-2',
            speaker: 'ALBERT',
            dialogue: 'And I talk all day instead of thinking. I had not accounted for the talking.',
          },
          {
            id: 'salary-3',
            speaker: 'MILEVA',
            dialogue: 'Then go back to the desk. You were happy there, and nobody ever asked you a question you could not answer.',
          },
          {
            id: 'choice',
            speaker: 'MILEVA',
            dialogue: 'You cannot keep both. A chair, or a quiet desk with the evenings in it. Choose.',
            choices: [
              {
                id: 'professor',
                label: 'Take the chair. Be a professor of physics.',
                effects: [
                  { type: 'flag', flag: 'einstein.tookChair', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -2 },
                  { type: 'resources', effects: { standing: 2, funds: -1 } },
                ],
              },
              {
                id: 'clerk',
                label: 'Keep the desk, the salary, and the quiet.',
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
            narration: 'They come to Zürich in person to fetch him: two of the most decorated men in German science, on an ordinary Tuesday.',
          },
          {
            id: 'delegation-2',
            speaker: 'PLANCK',
            dialogue: 'No lectures. No students. No duties of any kind.',
          },
          {
            id: 'delegation-4',
            speaker: 'PLANCK',
            dialogue: 'And in return you think. The Academy would simply like to be the address at which you do it.',
          },
          {
            id: 'delegation-5',
            speaker: 'ALBERT',
            dialogue: 'You are offering me a salary for thinking.',
          },
          {
            id: 'delegation-6',
            speaker: 'PLANCK',
            dialogue: 'I am aware of how it sounds. I have argued for it in rooms you would not have enjoyed.',
          },
          {
            id: 'terms',
            narration: 'It is also Berlin. Parade grounds, a court, and a language of rank he gave up at sixteen along with the passport.',
          },
          {
            id: 'terms-2',
            speaker: 'MILEVA',
            dialogue: 'You swore you would never live in that country again.',
          },
          {
            id: 'terms-3',
            speaker: 'ALBERT',
            dialogue: 'I swore a great many things at seventeen, and all in the same tone of voice.',
          },
          {
            id: 'arrive',
            narration: 'He goes. The flat is too large, the streets are too straight, and one room holds nothing but a table.',
          },
          {
            id: 'arrive-2',
            speaker: 'ALBERT',
            dialogue: 'On that table goes gravity. Everything else in this city can wait its turn.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.berlinPost', value: true },
          { type: 'resources', effects: { funds: 1, standing: 1 } },
        ],
        historicalNote:
          'Einstein was recruited to the Prussian Academy of Sciences in Berlin in 1914 with a research salary and no teaching obligations; Max Planck was among those who travelled to Zürich to persuade him. Dialogue is dramatized.',
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
            narration: 'The envelope from Berlin stands against the hall mirror for a month. He walks past it twice a day.',
          },
          {
            id: 'unanswered-2',
            speaker: 'MILEVA',
            dialogue: 'It is still there.',
          },
          {
            id: 'unanswered-3',
            speaker: 'ALBERT',
            dialogue: 'I have decided to decide tomorrow. I have now decided that thirty times.',
          },
          {
            id: 'reason',
            speaker: 'MILEVA',
            dialogue: 'They are offering you a salary to think. You have wanted that since you were nineteen.',
          },
          {
            id: 'reason-2',
            speaker: 'ALBERT',
            dialogue: 'And one morning somebody will come and ask what the salary was for. That question is always asked.',
          },
          {
            id: 'reason-3',
            speaker: 'MILEVA',
            dialogue: 'And if you are wrong about them?',
          },
          {
            id: 'reason-4',
            speaker: 'ALBERT',
            dialogue: 'Then I shall have been rude to an Academy. I find I can live with that.',
          },
          {
            id: 'shut',
            narration: 'He writes four lines declining, in his politest German, and posts it on the way to a lecture.',
          },
        ],
        effects: [{ type: 'flag', flag: 'einstein.declinedBerlin', value: true }],
        historicalNote: 'A turn for a life that did not take the Berlin appointment. The offer itself is documented.',
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
            narration: 'In August the city empties into the railway stations singing. By October the university men have written their contribution.',
          },
          {
            id: 'august-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Have you read it? Ninety-three names.',
          },
          {
            id: 'august-3',
            speaker: 'ALBERT',
            dialogue: 'I read it in the corridor with my coat still on. I could not make myself sit down to it.',
          },
          {
            id: 'names',
            narration: 'The sheet is pinned at eye height. A page defending the army’s conduct, signed by ninety-three of the best minds in Germany.',
          },
          {
            id: 'names-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Four of them eat lunch with you.',
          },
          {
            id: 'names-3',
            speaker: 'ALBERT',
            dialogue: 'Two of them taught me something I still use every day of my life.',
          },
          {
            id: 'names-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'They are patriots. It is not a crime.',
          },
          {
            id: 'names-5',
            speaker: 'ALBERT',
            dialogue: 'They are professors. They spent thirty years telling me a true thing does not care which country you are standing in.',
          },
          {
            id: 'names-7',
            speaker: 'ALBERT',
            dialogue: 'And now I find that physics has borders, and that they were drawn some time last Tuesday.',
          },
          {
            id: 'other',
            narration: 'A physician he barely knows has drafted the opposite document. A great deal of space at the bottom for names, and almost nothing above it.',
          },
          {
            id: 'appeal',
            speaker: 'A COLLEAGUE',
            dialogue: 'Four men have put their names to that. Four, against ninety-three. What will you do?',
            choices: [
              {
                id: 'sign',
                label: 'Put your name to the appeal for a Europe that still exists.',
                effects: [
                  { type: 'flag', flag: 'einstein.pacifist', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say nothing. Keep to the equations.',
                effects: [
                  { type: 'flag', flag: 'einstein.quietWar', value: true },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'private',
                label: 'Write privately, across the lines, to whoever still answers.',
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
          'In October 1914 ninety-three German intellectuals signed a manifesto defending Germany’s war conduct; Einstein was one of a very small number who signed a counter-appeal for European unity instead, drafted by the physician Georg Nicolai. The corridor scene is dramatized.',
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
            narration: 'The French journals stop coming. Then the English ones. The shelf keeps the gap where they used to stand.',
          },
          {
            id: 'silence-2',
            speaker: 'THE POSTMAN',
            dialogue: 'This one came back, sir. Stamped.',
          },
          {
            id: 'silence-3',
            speaker: 'ALBERT',
            dialogue: 'Four months to travel to England and be told England can no longer be written to.',
          },
          {
            id: 'names',
            narration: 'And the declarations keep coming, one country at a time, each signed by the men who taught him that knowledge belongs to nobody.',
          },
          {
            id: 'names-2',
            speaker: 'THE POSTMAN',
            dialogue: 'Bad business all round.',
          },
          {
            id: 'names-3',
            speaker: 'ALBERT',
            dialogue: 'It is worse than bad. It is tidy. Every one of them signed neatly, on the line provided.',
          },
          {
            id: 'draft',
            narration: 'Then somebody sends him the other kind of document, folded in with a letter that took nine weeks to arrive.',
          },
          {
            id: 'appeal',
            speaker: 'A COLLEAGUE',
            dialogue: 'An appeal to Europeans. Asking educated men to refuse to hate on schedule. There is space at the bottom and almost nothing above it.',
            choices: [
              {
                id: 'sign',
                label: 'Put your name to the appeal for a Europe that still exists.',
                effects: [
                  { type: 'flag', flag: 'einstein.pacifist', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say nothing. Keep to the equations.',
                effects: [
                  { type: 'flag', flag: 'einstein.quietWar', value: true },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'private',
                label: 'Write privately, across the lines, to whoever still answers.',
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
          'The rupture of international scientific correspondence during the First World War, and Einstein’s refusal to join the nationalist declarations, are documented. Here he is away from Berlin.',
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
            narration: 'Every letter he posts to Göttingen comes back faster than the post has any right to manage.',
          },
          {
            id: 'letters-2',
            speaker: 'ALBERT',
            dialogue: 'You have gone further along my road than I have. Again.',
          },
          {
            id: 'summer',
            speaker: 'ALBERT',
            dialogue: 'I lectured here six mornings in the summer and held nothing back. Not one card.',
          },
          {
            id: 'summer-2',
            speaker: 'HILBERT',
            dialogue: 'You did. It was the most expensive generosity I have ever watched a man commit.',
          },
          {
            id: 'fence',
            speaker: 'HILBERT',
            dialogue: 'Show me which part of the physics your mathematics is not permitted to break. Then I shall know where to stop.',
          },
          {
            id: 'fence-2',
            speaker: 'ALBERT',
            dialogue: 'Energy. Whatever else the equations do, they may not make energy out of nothing.',
          },
          {
            id: 'fence-3',
            speaker: 'HILBERT',
            dialogue: 'Good. That is a fence. Everything on the other side of it I intend to push over.',
          },
          {
            id: 'november',
            narration: 'He stops sleeping properly and sends work in weekly instalments, correcting himself twice in public.',
          },
          {
            id: 'november-2',
            speaker: 'ALBERT',
            dialogue: 'Being wrong in front of Göttingen is cheaper than being slow in front of it.',
          },
          {
            id: 'november-3',
            narration: 'He has already drafted the generous letter he means to send when it is over, and keeps it where he can see it.',
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
            narration: 'Postcards, then letters, then telegrams, all autumn. Each one arrives a step further along than the last.',
          },
          {
            id: 'exchange-2',
            speaker: 'BESSO',
            dialogue: 'Neither of you has once mentioned speed.',
          },
          {
            id: 'exchange-3',
            speaker: 'ALBERT',
            dialogue: 'Neither of us has once stopped counting the days. It is a very courteous sort of sprint.',
          },
          {
            id: 'said',
            narration: 'The objection, when it arrives from Göttingen, is the useful kind: not that the physics is wrong, but that it is not yet forced.',
          },
          {
            id: 'said-2',
            speaker: 'HILBERT',
            dialogue: 'Physics is far too difficult for physicists. Tell me what your equations are forbidden to do, and I shall tell you what they must be.',
          },
          {
            id: 'close',
            narration: 'He works eleven days without properly stopping. Somewhere in the middle of them he decides what letter he will send at the end.',
          },
          {
            id: 'close-2',
            speaker: 'ALBERT',
            dialogue: 'The one without a single barbed sentence in it. I have written it already.',
          },
          {
            id: 'close-3',
            speaker: 'BESSO',
            dialogue: 'Before you know who wins?',
          },
          {
            id: 'close-4',
            speaker: 'ALBERT',
            dialogue: 'Deciding in advance is the only way I have ever managed to be gracious.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, tension: 1, flag: 'relativity-1915' },
          { type: 'flag', flag: 'einstein.gottingenRace', value: true },
        ],
        historicalNote:
          'The Einstein–Hilbert correspondence and near-simultaneous derivation of the field equations in November 1915 are documented. The remark about physicists is in the spirit of Hilbert’s recorded wit, but the wording is dramatized.',
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
            narration: 'The letters he sends to the mathematicians are not refused. They are simply not answered.',
          },
          {
            id: 'silence-2',
            speaker: 'BESSO',
            dialogue: 'Still nothing from Göttingen?',
          },
          {
            id: 'silence-3',
            speaker: 'ALBERT',
            dialogue: 'Nothing. So I do the geometry myself, badly and slowly, and get there in the end.',
          },
          {
            id: 'alone',
            speaker: 'BESSO',
            dialogue: 'Nobody arrived a week ahead of you. You should be pleased.',
          },
          {
            id: 'alone-2',
            speaker: 'ALBERT',
            dialogue: 'I find I would have preferred the competition. I am not sure what that says about me.',
          },
        ],
        effects: [{ type: 'flag', flag: 'einstein.hilbertSilence', value: true }],
        historicalNote: 'A version of the documented 1915 exchange for a life in which the Göttingen correspondence never happened.',
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
            id: 'study',
            narration: 'Pages of calculation on the desk, the chair and the floor. An astronomical table lies open at Mercury.',
          },
          {
            id: 'study-2',
            speaker: 'ELSA',
            dialogue: 'You have not eaten since yesterday. What is it this time?',
          },
          {
            id: 'study-3',
            speaker: 'ALBERT',
            dialogue: 'A man falling off a roof.',
          },
          {
            id: 'study-4',
            speaker: 'ELSA',
            dialogue: 'Albert.',
          },
          {
            id: 'roofer',
            speaker: 'ALBERT',
            dialogue: 'I am entirely serious. Years ago, in Bern, I read about one. He fell, he was not badly hurt, and he said the strangest thing.',
          },
          {
            id: 'roofer-3',
            speaker: 'ALBERT',
            dialogue: 'That while he was falling he felt nothing at all. No weight.',
          },
          {
            id: 'roofer-4',
            speaker: 'ELSA',
            dialogue: 'Well, of course. There was nothing under him.',
          },
          {
            id: 'roofer-5',
            speaker: 'ALBERT',
            dialogue: 'That is it. That is the whole thing. Weight is not what you feel when you fall.',
          },
          {
            id: 'roofer-6',
            speaker: 'ALBERT',
            dialogue: 'It is what you feel when the floor stops you. Stand still and the floor shoves up at your feet all day long.',
          },
          {
            id: 'roofer-8',
            speaker: 'ALBERT',
            dialogue: 'It shoves at you every minute of your life, and that shove is the thing you have been calling your weight.',
          },
          {
            id: 'lift',
            speaker: 'ALBERT',
            dialogue: 'Now come into the lift with me. No windows. The cable breaks. What do you feel?',
          },
          {
            id: 'lift-2',
            speaker: 'ELSA',
            dialogue: 'Nothing, I suppose. I should float about the box and scream.',
          },
          {
            id: 'lift-3',
            speaker: 'ALBERT',
            dialogue: 'Both, and in that order. Now: is there anything you could do inside that box to find out what is happening?',
          },
          {
            id: 'lift-4',
            speaker: 'ELSA',
            dialogue: 'Drop something. But it would float too.',
          },
          {
            id: 'lift-5',
            speaker: 'ALBERT',
            dialogue: 'It floats. So you cannot tell whether you are falling down a shaft, or drifting far out in space where there is no earth at all.',
          },
          {
            id: 'lift-7',
            speaker: 'ALBERT',
            dialogue: 'They would feel the same because they are the same. Now turn it round. Have something haul that box upward, faster and faster.',
          },
          {
            id: 'lift-8',
            speaker: 'ELSA',
            dialogue: 'I should be pressed down onto the floor.',
          },
          {
            id: 'lift-9',
            speaker: 'ALBERT',
            dialogue: 'Exactly as though you had weight. You could stand up. You could drop a spoon and watch it fall.',
          },
          {
            id: 'lift-10',
            speaker: 'ELSA',
            dialogue: 'So from inside I could not tell whether I am being pulled by the earth or hauled by a rope.',
          },
          {
            id: 'lift-11',
            speaker: 'ALBERT',
            dialogue: 'Not by any measurement whatever. Which means gravity and being hauled are one single thing wearing two hats.',
          },
          {
            id: 'sits',
            narration: 'She sits down on the arm of the chair without meaning to, and does not pick up the tray again.',
          },
          {
            id: 'sits-2',
            speaker: 'ELSA',
            dialogue: 'Very well. And that took you eight years?',
          },
          {
            id: 'beam',
            speaker: 'ALBERT',
            dialogue: 'Because of the light. Shine a lamp across your hauled box, from one wall to the other.',
          },
          {
            id: 'beam-3',
            speaker: 'ALBERT',
            dialogue: 'It crosses. And while it crosses, the box is hauled upward — so the beam lands lower on the far wall than where it set out.',
          },
          {
            id: 'beam-5',
            speaker: 'ALBERT',
            dialogue: 'From inside, it would look bent. And the two boxes are the same box. So near the earth, near the sun, light must bend as well.',
          },
          {
            id: 'beam-6',
            speaker: 'ELSA',
            dialogue: 'Light has no weight. Nothing can pull on it.',
          },
          {
            id: 'beam-7',
            speaker: 'ALBERT',
            dialogue: 'Nothing does. It goes perfectly straight. It is the place it is going through that is not flat.',
          },
          {
            id: 'cloth',
            speaker: 'ELSA',
            dialogue: 'Now you have lost me.',
          },
          {
            id: 'cloth-3',
            narration: 'They take the cloth off the table and hold it taut between them, two corners each. He sets the flat-iron down in the middle of it.',
          },
          {
            id: 'cloth-4',
            speaker: 'ELSA',
            dialogue: 'It sags.',
          },
          {
            id: 'cloth-5',
            speaker: 'ALBERT',
            dialogue: 'Now roll a marble across the cloth, off to one side. Watch it.',
          },
          {
            id: 'cloth-6',
            speaker: 'ELSA',
            dialogue: 'It curves in towards the iron.',
          },
          {
            id: 'cloth-7',
            speaker: 'ALBERT',
            dialogue: 'And nothing pulled it. The iron never touched it. The cloth was bent, and the marble went straight.',
          },
          {
            id: 'cloth-8',
            speaker: 'ELSA',
            dialogue: 'And the sun is the iron.',
          },
          {
            id: 'cloth-9',
            speaker: 'ALBERT',
            dialogue: 'The sun is the iron. Space is the cloth. And the earth is the marble, going straight for all it is worth.',
          },
          {
            id: 'cloth-11',
            speaker: 'ALBERT',
            dialogue: 'The starlight goes straight too. Across a dent. It will arrive in the wrong place, and that is how they will catch me out.',
          },
          {
            id: 'mercury',
            narration: 'Mercury has been wandering for sixty years. Its orbit creeps round the sun by an amount nobody can account for.',
          },
          {
            id: 'mercury-3',
            speaker: 'ALBERT',
            dialogue: 'A hair, Elsa. Forty-three seconds of arc in a hundred years. They have invented an entire hidden planet rather than admit they cannot explain it.',
          },
          {
            id: 'number',
            narration: 'He puts the new equations in and turns the handle. Nothing adjusted. Nothing added. Nothing chosen to make it come right.',
          },
          {
            id: 'number-2',
            speaker: 'ALBERT',
            dialogue: 'Forty-three.',
          },
          {
            id: 'number-4',
            speaker: 'ALBERT',
            dialogue: 'That is exactly the number the astronomers measure. Elsa — it came out of the equations. I did not put it in.',
          },
          {
            id: 'number-5',
            narration: 'He sits very still. For three days afterwards something goes wrong in his chest, as though the news had to be paid for somewhere.',
          },
          {
            id: 'what',
            speaker: 'ELSA',
            dialogue: 'Say it once more. Plainly. So I can tell it to somebody.',
          },
          {
            id: 'what-2',
            speaker: 'ALBERT',
            dialogue: 'There is no force reaching across an empty room. There is no empty room. Heavy things tell the room what shape to be.',
          },
          {
            id: 'what-4',
            speaker: 'ALBERT',
            dialogue: 'And falling is going straight, in a place that has been bent by everything in it.',
          },
        ],
        historicalNote:
          'Einstein completed the field equations of general relativity in Berlin in November 1915. The falling man who feels no weight, and the sealed box that cannot tell gravity from acceleration, are his own arguments, dating back to Bern. The first confirmation was Mercury’s unexplained orbital creep of about forty-three seconds of arc per century, which the equations produced with nothing adjusted; he described a violent physical reaction to it. Elsa Löwenthal was his cousin and later his wife; the conversation is dramatized.',
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
            speaker: 'ALBERT',
            dialogue: 'Marcel. I need a kind of mathematics I do not have.',
          },
          {
            id: 'ask-2',
            speaker: 'GROSSMANN',
            dialogue: 'You said you would write to me if that ever happened. It has only taken fifteen years.',
          },
          {
            id: 'ask-3',
            speaker: 'ALBERT',
            dialogue: 'I need to do geometry inside a place that will not lie flat. A surface that sags where something heavy sits on it.',
          },
          {
            id: 'ask-4',
            speaker: 'GROSSMANN',
            dialogue: 'Ah. There is such a thing. Italians, mostly. Nobody has ever found the slightest use for it.',
          },
          {
            id: 'ask-6',
            speaker: 'GROSSMANN',
            dialogue: 'You will hate it for a fortnight and be using it by the end of the month. I shall fetch the volumes before you change your mind.',
          },
          {
            id: 'read',
            narration: 'He hates it for a fortnight. Then he cannot stop, and the lamp is lit at four in the morning for a year.',
          },
          {
            id: 'read-2',
            speaker: 'ALBERT',
            dialogue: 'You have handed me the only tool in Europe that fits.',
          },
          {
            id: 'read-3',
            speaker: 'GROSSMANN',
            dialogue: 'I shall help you with the mathematics. I will have nothing whatever to do with the physics.',
          },
          {
            id: 'close',
            narration: 'When the equations finally close, they are simpler than the mess he fought through to reach them.',
          },
          {
            id: 'close-2',
            speaker: 'ALBERT',
            dialogue: 'There. Gravity is not a pull. Heavy things bend the space around them and everything else runs straight through the bend.',
          },
          {
            id: 'close-3',
            speaker: 'GROSSMANN',
            dialogue: 'And that is falling.',
          },
          {
            id: 'close-4',
            speaker: 'ALBERT',
            dialogue: 'That is falling. It comes out simpler than the road to it, which is the sign, every time, that a thing is true.',
          },
          {
            id: 'cost',
            speaker: 'ALBERT',
            dialogue: 'I have been ill, and rude to people who did not deserve it, and absent from a house where I was needed.',
          },
          {
            id: 'cost-2',
            speaker: 'GROSSMANN',
            dialogue: 'The equations do not know any of that.',
          },
          {
            id: 'cost-3',
            speaker: 'ALBERT',
            dialogue: 'No. They will still be true when every one of us is dead. I mind that less than I ought to.',
          },
        ],
        historicalNote:
          'Marcel Grossmann supplied Einstein with the differential geometry of curved surfaces that general relativity required, during their Zürich collaboration in the early 1910s. The conversation is dramatized.',
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
            narration: 'Eight years, and it comes out in a room that nobody will ever photograph.',
          },
          {
            id: 'done-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Give it to me in one sentence.',
          },
          {
            id: 'done-3',
            speaker: 'ALBERT',
            dialogue: 'Gravity is not a pull. Heavy things bend the space around them, and everything else goes straight through the bend.',
          },
          {
            id: 'done-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'A stone dropped from a window?',
          },
          {
            id: 'done-5',
            speaker: 'ALBERT',
            dialogue: 'Takes the straightest road available, in a place that will not lie flat. That is all falling has ever been.',
          },
          {
            id: 'alone',
            narration: 'Outside it is raining and a cart is going past. Inside, the world has changed shape, and there is nobody awake to tell.',
          },
        ],
        historicalNote: 'A completion of general relativity outside its documented Berlin setting. The physics is documented.',
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
            narration: 'No coal, very little fat, and a city eating turnips in every form a cook can invent.',
          },
          {
            id: 'winter-2',
            speaker: 'ELSA',
            dialogue: 'Your collar is loose. When did that happen?',
          },
          {
            id: 'nursed',
            speaker: 'ELSA',
            dialogue: 'Eat this first.',
          },
          {
            id: 'nursed-2',
            speaker: 'ALBERT',
            dialogue: 'After this page.',
          },
          {
            id: 'nursed-3',
            speaker: 'ELSA',
            dialogue: 'The universe has waited a very long time. It can wait until half past one.',
          },
          {
            id: 'nursed-4',
            speaker: 'ALBERT',
            dialogue: 'That is an unanswerable argument and I resent it deeply.',
          },
          {
            id: 'work',
            narration: 'He works propped on pillows with the tray across his knees. It is not heroic. It is only what there is to do.',
          },
          {
            id: 'work-2',
            speaker: 'ELSA',
            dialogue: 'Is it going well?',
          },
          {
            id: 'work-3',
            speaker: 'ALBERT',
            dialogue: 'Slower. About as good. Slower is not the same as worse — it took me thirty years to learn that.',
          },
        ],
        historicalNote:
          'Einstein became seriously ill in 1917 amid the wartime food shortages in Berlin and was nursed by his cousin Elsa Löwenthal, whom he married in 1919. Dialogue is dramatized.',
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
            narration: 'The ration card is pinned to the shelf where the sugar used to be kept.',
          },
          {
            id: 'ration-2',
            speaker: 'THE LANDLADY',
            dialogue: 'You are playing with your coat on again.',
          },
          {
            id: 'ration-3',
            speaker: 'ALBERT',
            dialogue: 'My fingers are cold. It is not the coat’s fault that the Mozart is bad.',
          },
          {
            id: 'music',
            speaker: 'THE LANDLADY',
            dialogue: 'It is an hour a day. Everybody should have one.',
          },
          {
            id: 'music-2',
            speaker: 'ALBERT',
            dialogue: 'It is the only hour with nothing to do with the war in it. I defend it like a border.',
          },
          {
            id: 'music-3',
            speaker: 'THE LANDLADY',
            dialogue: 'Then play the quiet one, and defend it more softly.',
          },
        ],
        historicalNote:
          'Wartime shortages in Germany from 1916 onward are documented, as is Einstein’s constant violin playing. The landlady is dramatized.',
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
            narration: 'The theory has made a promise it cannot take back.',
          },
          {
            id: 'prediction-2',
            speaker: 'ELSA',
            dialogue: 'Which promise?',
          },
          {
            id: 'prediction-3',
            speaker: 'ALBERT',
            dialogue: 'Starlight passing close by the sun arrives in the wrong place. It is bent going past, by a definite amount.',
          },
          {
            id: 'prediction-4',
            speaker: 'ELSA',
            dialogue: 'Then somebody should go and look.',
          },
          {
            id: 'prediction-5',
            speaker: 'ALBERT',
            dialogue: 'You cannot see a star that sits beside the sun. The sun drowns the whole sky for a million miles.',
          },
          {
            id: 'prediction-7',
            speaker: 'ALBERT',
            dialogue: 'Unless the moon slides in front of it. Then for six minutes, in the middle of the day, the stars come out beside the sun.',
          },
          {
            id: 'letter',
            narration: 'A letter comes from England, by way of a neutral country, in the middle of a war.',
          },
          {
            id: 'letter-2',
            speaker: 'EDDINGTON',
            dialogue: 'There is a total eclipse in May. I intend to be underneath it with a camera.',
          },
          {
            id: 'letter-3',
            speaker: 'EDDINGTON',
            dialogue: 'I shall photograph the stars beside the sun that day, and the same stars at night six months later.',
          },
          {
            id: 'letter-4',
            speaker: 'EDDINGTON',
            dialogue: 'Then I lay one plate over the other. If those stars have shifted, their light was bent on the way to us.',
          },
          {
            id: 'letter-5',
            speaker: 'EDDINGTON',
            dialogue: 'If they have not shifted, your theory is finished, and a good deal else with it.',
          },
          {
            id: 'letter-6',
            speaker: 'ELSA',
            dialogue: 'He is English.',
          },
          {
            id: 'letter-7',
            speaker: 'ALBERT',
            dialogue: 'He is an Englishman proposing to test a German theory while the two countries are shelling each other.',
          },
          {
            id: 'letter-9',
            speaker: 'ALBERT',
            dialogue: 'He says the sky does not take sides. He will not fight, and they very nearly gaoled him for it.',
          },
          {
            id: 'wait',
            narration: 'The eclipse falls in the spring. Between now and then there is nothing whatever for him to do about it.',
          },
          {
            id: 'wait-2',
            speaker: 'ELSA',
            dialogue: 'And if the stars have not moved?',
          },
          {
            id: 'wait-3',
            speaker: 'ALBERT',
            dialogue: 'Then I am wrong, and I shall say so from a platform in front of the ninety-three. Waiting is the hardest work I have ever attempted.',
          },
        ],
        historicalNote:
          'General relativity predicted that starlight grazing the sun would be deflected by a definite amount, observable only during a total solar eclipse. Arthur Eddington, a Quaker who refused military service, learned of the theory through neutral Holland during the war and organised the May 1919 expedition that tested it by comparing eclipse photographs with night plates of the same stars. The letter and the conversation are dramatized.',
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
            narration: 'Ten years of impeccable service. The war passed over the office without stopping.',
          },
          {
            id: 'ledger-2',
            speaker: 'HALLER',
            dialogue: 'You have never once been late.',
          },
          {
            id: 'ledger-3',
            speaker: 'ALBERT',
            dialogue: 'I have never once been anything else.',
          },
          {
            id: 'ledger-4',
            speaker: 'HALLER',
            dialogue: 'Men you studied with have chairs now. One of them has a street named after him.',
          },
          {
            id: 'ledger-5',
            speaker: 'ALBERT',
            dialogue: 'A short street. I have walked down it.',
          },
          {
            id: 'notebook',
            narration: 'The notebook is thicker than it was. Some of it is right.',
          },
          {
            id: 'notebook-2',
            speaker: 'ALBERT',
            dialogue: 'Nobody has read it, and nobody has told me I am wrong. I cannot decide which of those is the loss.',
          },
        ],
        historicalNote: 'A closing for a life that stayed outside the university after 1909.',
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
            narration: 'Four years of it, and the counting is done in the newspapers now, in columns.',
          },
          {
            id: 'count-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Whole seminar rooms are gone. I taught half of one of them.',
          },
          {
            id: 'count-3',
            speaker: 'ALBERT',
            dialogue: 'And every man who signed the declarations is still here, and mostly still confident.',
          },
          {
            id: 'count-5',
            speaker: 'ALBERT',
            dialogue: 'I have said so quietly, and to the wrong people, which is the same as not saying it.',
          },
          {
            id: 'ahead',
            narration: 'He comes out of the decade with less of his health and fewer of his friends.',
          },
          {
            id: 'ahead-2',
            speaker: 'ALBERT',
            dialogue: 'One thing is settled, though. I shall never again put my name under anybody’s flag.',
          },
          {
            id: 'ahead-3',
            speaker: 'ALBERT',
            dialogue: 'A great deal is unfinished. That is not.',
          },
        ],
        historicalNote:
          'A closing framed around the documented human cost of the war and Einstein’s lasting internationalism.',
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
            narration: 'The first winter after the war. The queue outside the bread shop turns the corner before the shutters are up.',
          },
          {
            id: 'city-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'You have got thinner.',
          },
          {
            id: 'city-3',
            speaker: 'ALBERT',
            dialogue: 'Everyone has got thinner. It is the one thing the whole continent has managed to agree on.',
          },
          {
            id: 'lists',
            speaker: 'A COLLEAGUE',
            dialogue: 'The societies are meeting again. Half the foreign members will not sit in a room with the other half.',
          },
          {
            id: 'lists-2',
            speaker: 'ALBERT',
            dialogue: 'And I am on the wrong list in both rooms. Nobody expects me at dinner. It is restful.',
          },
          {
            id: 'lists-3',
            speaker: 'A COLLEAGUE',
            dialogue: 'You are the one German they will still receive abroad. Do not pretend that is nothing.',
          },
          {
            id: 'lists-4',
            speaker: 'ALBERT',
            dialogue: 'It is not a virtue either. It is what comes of reading a page before putting my name on it.',
          },
          {
            id: 'post',
            narration: 'There are eleven letters on the desk this week and not one of them is about physics.',
          },
          {
            id: 'post-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Hunger relief. Prisoners still not sent home. A league of nations. Congresses reopened to everybody.',
          },
          {
            id: 'post-3',
            speaker: 'ALBERT',
            dialogue: 'And every one of them wants the same four inches of paper at the bottom of the page.',
          },
          {
            id: 'post-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'They do not want your physics, Einstein. They want your name at the top of theirs. Those are different things.',
          },
          {
            id: 'post-5',
            speaker: 'ALBERT',
            dialogue: 'I know what they are. I have read all eleven to the end, which is already an answer of a kind.',
          },
          {
            id: 'name',
            speaker: 'A COLLEAGUE',
            dialogue: 'Then give the answer out loud. What is a name for, now that you have one?',
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
          'Post-war conditions in Berlin and Einstein’s isolation among German academics after refusing the war declarations are documented, as is his growing involvement in relief and internationalist appeals. The colleague stands in for people whose names are not recorded, and the dialogue is dramatized.',
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
            narration: 'The war ends the way a fever ends. Bread is rationed, coal is a rumour, and the universities reopen pretending nothing happened.',
          },
          {
            id: 'after-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'You did not sit down at the meeting.',
          },
          {
            id: 'after-3',
            speaker: 'ALBERT',
            dialogue: 'I stood at the back with my coat on. I could not make myself sit down to it.',
          },
          {
            id: 'post',
            narration: 'The post has changed character since the armistice. Fewer offprints. Many more appeals.',
          },
          {
            id: 'post-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Hunger relief. Prisoners. A league of nations. Congresses opened to everybody who was recently being shot at.',
          },
          {
            id: 'post-3',
            speaker: 'ALBERT',
            dialogue: 'Eleven this week. They arrive by every delivery, like the milk.',
          },
          {
            id: 'post-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'They do not want your physics, Einstein. They want your name at the top of their page. Those are different things.',
          },
          {
            id: 'post-5',
            speaker: 'ALBERT',
            dialogue: 'I am forty, and somebody has handed me an instrument I cannot read the dial of.',
          },
          {
            id: 'post-6',
            speaker: 'A COLLEAGUE',
            dialogue: 'Most men would call that luck.',
          },
          {
            id: 'post-7',
            speaker: 'ALBERT',
            dialogue: 'Most men can read the dial. I should like to know what it measures before I start spending it.',
          },
          {
            id: 'post-8',
            narration: 'He reads every one of the eleven to the end. That is already an answer, and not one he has admitted to giving.',
          },
          {
            id: 'name',
            speaker: 'A COLLEAGUE',
            dialogue: 'So. What is the name for?',
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
            narration: 'The telegram comes from Leiden, from a colleague who has heard from London, who has heard from the men with the plates.',
          },
          {
            id: 'telegram-2',
            speaker: 'ELSA',
            dialogue: 'Read it out.',
          },
          {
            id: 'telegram-3',
            speaker: 'ALBERT',
            dialogue: 'Deflection observed. Consistent with prediction. Eleven words, and one of them is the last ten years of my life.',
          },
          {
            id: 'elsa',
            speaker: 'ELSA',
            dialogue: 'Say it so that I can tell my sister.',
          },
          {
            id: 'elsa-2',
            speaker: 'ALBERT',
            dialogue: 'They photographed the stars beside the sun while the moon covered it. Then the same stars at night, months later.',
          },
          {
            id: 'elsa-3',
            speaker: 'ALBERT',
            dialogue: 'They laid one plate over the other. The stars beside the sun are sitting in the wrong place.',
          },
          {
            id: 'elsa-4',
            speaker: 'ELSA',
            dialogue: 'The stars moved?',
          },
          {
            id: 'elsa-5',
            speaker: 'ALBERT',
            dialogue: 'The stars did nothing at all. Their light came past the sun, and the road it travelled was not flat.',
          },
          {
            id: 'howfar',
            speaker: 'ELSA',
            dialogue: 'And how far wrong are they?',
          },
          {
            id: 'howfar-2',
            speaker: 'ALBERT',
            dialogue: 'Less than the width of a hair held out at arm’s length. Exactly that much. Not a hair more.',
          },
          {
            id: 'howfar-3',
            speaker: 'ELSA',
            dialogue: 'Somebody measured a hair. On an island. From a photograph.',
          },
          {
            id: 'howfar-4',
            speaker: 'ALBERT',
            dialogue: 'Somebody measured it twice and compared. That is the whole business, Elsa. Patience and glass.',
          },
          {
            id: 'calm',
            narration: 'He writes a postcard to his mother. Then he goes back to the page he was on before the boy came up the stairs.',
          },
          {
            id: 'calm-2',
            speaker: 'ELSA',
            dialogue: 'You are not going to shout?',
          },
          {
            id: 'calm-3',
            speaker: 'ALBERT',
            dialogue: 'The equations have been right since November. The sky was never going to change its mind about it.',
          },
        ],
        historicalNote:
          'Eddington’s 1919 eclipse expedition confirmed the predicted deflection of starlight; the result was announced in London that November. Einstein learned of it by telegram from Hendrik Lorentz in Leiden. The wording is dramatized.',
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
            narration: 'The telegram comes from Leiden, by way of London, from the men with the plates. Deflection observed. Consistent with prediction.',
          },
          {
            id: 'telegram-2',
            speaker: 'ELSA',
            dialogue: 'That is your starlight.',
          },
          {
            id: 'telegram-3',
            speaker: 'ALBERT',
            dialogue: 'It is the starlight. The prediction belongs to somebody else.',
          },
          {
            id: 'drawer',
            narration: 'His own version stops forty pages in, at the place where the geometry got harder than he had time for.',
          },
          {
            id: 'drawer-2',
            speaker: 'ELSA',
            dialogue: 'You could say that you had it first.',
          },
          {
            id: 'drawer-3',
            speaker: 'ALBERT',
            dialogue: 'I had a question first. He had an answer. Those are not the same claim and I will not make it.',
          },
          {
            id: 'measure',
            speaker: 'ELSA',
            dialogue: 'Then what is there to be glad about?',
          },
          {
            id: 'measure-2',
            speaker: 'ALBERT',
            dialogue: 'The light bent, Elsa. Somebody went to an island with a camera, and the light bent.',
          },
          {
            id: 'measure-3',
            speaker: 'ALBERT',
            dialogue: 'It would have bent if I had never picked up a pen in my life. That is the part I like.',
          },
          {
            id: 'measure-4',
            narration: 'He puts the telegram inside the notebook, at the page where it stops, and does not open either of them for a long time.',
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
            narration: 'The post arrives in sacks now. Invitations, insults, proposals of marriage, and three separate schemes for perpetual motion.',
          },
          {
            id: 'post-2',
            speaker: 'THE SECRETARY',
            dialogue: 'Nine letters this morning begin by explaining relativity to you.',
          },
          {
            id: 'post-3',
            speaker: 'ALBERT',
            dialogue: 'Does any one of them get it right?',
          },
          {
            id: 'post-4',
            speaker: 'THE SECRETARY',
            dialogue: 'One is close. He has decided you meant that everything is a matter of opinion.',
          },
          {
            id: 'post-5',
            speaker: 'ALBERT',
            dialogue: 'That is the opposite of what I meant, and he has written four pages of it.',
          },
          {
            id: 'street',
            narration: 'On the pavement a young man from a newspaper walks backwards in front of him with a notebook open.',
          },
          {
            id: 'street-2',
            speaker: 'A REPORTER',
            dialogue: 'Professor. One sentence. For people who read on a tram.',
          },
          {
            id: 'street-3',
            speaker: 'ALBERT',
            dialogue: 'Very well. Two men can disagree about when a thing happened, and both of them be right.',
          },
          {
            id: 'street-4',
            speaker: 'A REPORTER',
            dialogue: 'Both right?',
          },
          {
            id: 'street-5',
            speaker: 'ALBERT',
            dialogue: 'There is no clock hanging over the world that settles it for everybody. Only light is the same for all of us.',
          },
          {
            id: 'street-6',
            speaker: 'A REPORTER',
            dialogue: 'My editor will cut that. It reads as though you are saying nothing is true.',
          },
          {
            id: 'street-7',
            speaker: 'ALBERT',
            dialogue: 'It says the opposite. One thing is so true that the clocks have to bend to keep up with it.',
          },
          {
            id: 'street-8',
            speaker: 'A REPORTER',
            dialogue: 'Shorter?',
          },
          {
            id: 'street-9',
            speaker: 'ALBERT',
            dialogue: 'Shorter than that and it stops being the thing and starts being a slogan.',
          },
          {
            id: 'spend',
            narration: 'The morning paper says, in letters two inches high, that the professor has proved nothing is true.',
          },
          {
            id: 'spend-2',
            speaker: 'ALBERT',
            dialogue: 'If they will print me saying that, they will print me saying something worth reading.',
          },
          {
            id: 'spend-3',
            speaker: 'THE SECRETARY',
            dialogue: 'The four appeals, then. Shall I bring the pen?',
          },
          {
            id: 'spend-4',
            speaker: 'ALBERT',
            dialogue: 'Bring the pen. This is not an honour they have given me. It is a currency, and currency is for spending.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1919-fame' },
          { type: 'resources', effects: { standing: 2, network: 2, exposure: 1 } },
          { type: 'flag', flag: 'einstein.worldFamous', value: true },
        ],
        historicalNote:
          'The eclipse announcement made Einstein an international celebrity almost overnight, and he used that fame throughout the 1920s for pacifist and internationalist causes. The press repeatedly reduced his work to the claim that everything is relative, which he spent decades denying. Dialogue is dramatized.',
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
            narration: 'The newspapers of every country run the same story in different sizes. The heavens have been weighed and found bent.',
          },
          {
            id: 'papers-2',
            speaker: 'ELSA',
            dialogue: 'There are people standing outside the house.',
          },
          {
            id: 'papers-3',
            speaker: 'ALBERT',
            dialogue: 'In this weather? What do they imagine is going to come out of the door?',
          },
          {
            id: 'halls',
            narration: 'The halls sell out. People who cannot follow a line of algebra come to look at a man who can.',
          },
          {
            id: 'halls-2',
            speaker: 'A STUDENT',
            dialogue: 'Professor, they are turning people away at the doors.',
          },
          {
            id: 'halls-3',
            speaker: 'ALBERT',
            dialogue: 'They did not understand one word of it. They applauded anyway. It is very moving and extremely strange.',
          },
          {
            id: 'halls-4',
            speaker: 'A STUDENT',
            dialogue: 'They came because it is beautiful.',
          },
          {
            id: 'halls-5',
            speaker: 'ALBERT',
            dialogue: 'They came because a newspaper told them the sky was bent, and nobody has told them anything surprising since the war.',
          },
          {
            id: 'one',
            speaker: 'ELSA',
            dialogue: 'The man at the front asked you to put it in one sentence.',
          },
          {
            id: 'one-2',
            speaker: 'ALBERT',
            dialogue: 'I gave him one. He looked at me as though I had been rude to him in front of his wife.',
          },
          {
            id: 'cost',
            narration: 'The work he can do in a day is measured now by the interruptions between the parts of it.',
          },
          {
            id: 'cost-2',
            speaker: 'ALBERT',
            dialogue: 'I start at five in the morning. It is the only hour the century has not yet claimed.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'einstein-card-1919-fame' },
          { type: 'resources', effects: { standing: 2, network: 1 } },
          { type: 'flag', flag: 'einstein.worldFamous', value: true },
        ],
        historicalNote:
          'The global press reaction to the 1919 confirmation and Einstein’s subsequent celebrity are documented, including packed public lectures given to audiences with no physics. Dialogue is dramatized.',
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
            narration: 'Twenty chairs, half of them filled, and a blackboard of geometry that perhaps two hundred people in the world can read.',
          },
          {
            id: 'known-2',
            speaker: 'A STUDENT',
            dialogue: 'Nobody has gone to look, then. No expedition. No plates.',
          },
          {
            id: 'known-3',
            speaker: 'ALBERT',
            dialogue: 'No ship, no island, no camera. Officially it remains a beautiful conjecture.',
          },
          {
            id: 'wait',
            speaker: 'A STUDENT',
            dialogue: 'Does that not trouble you?',
          },
          {
            id: 'wait-2',
            speaker: 'ALBERT',
            dialogue: 'Somebody will look, at some eclipse or other, and the sky will say whatever it says.',
          },
          {
            id: 'wait-3',
            speaker: 'A STUDENT',
            dialogue: 'You could press them. They would go, if you asked.',
          },
          {
            id: 'wait-4',
            speaker: 'ALBERT',
            dialogue: 'I mind the waiting less than my colleagues do. I suspect that is arrogance wearing patience as a coat.',
          },
          {
            id: 'wait-5',
            narration: 'He goes home at the usual hour, and the sky stays exactly as unexamined as it was that morning.',
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
            narration: 'The rack belongs to other people this decade: a channel swimmer, a tenor, a man who has flown further than anybody.',
          },
          {
            id: 'stand-2',
            speaker: 'THE NEWSAGENT',
            dialogue: 'Same one as yesterday?',
          },
          {
            id: 'stand-3',
            speaker: 'ALBERT',
            dialogue: 'The same one. Is there anything in it?',
          },
          {
            id: 'stand-4',
            speaker: 'THE NEWSAGENT',
            dialogue: 'A professor died. Four lines, inside page, under the shipping.',
          },
          {
            id: 'stand-5',
            speaker: 'ALBERT',
            dialogue: 'That is the going rate. I have read the four lines. He was worth forty.',
          },
          {
            id: 'home',
            narration: 'He pays for the paper with a wet coin and walks home unrecognised past the tram stop.',
          },
          {
            id: 'home-2',
            speaker: 'ALBERT',
            dialogue: 'It is a mercy, of course.',
          },
          {
            id: 'home-3',
            narration: 'He says it aloud, to nobody, and turns it over afterwards like a stone in a pocket.',
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
            narration: 'The telegram catches him halfway across an ocean on a lecture tour. The ceremony will happen without him.',
          },
          {
            id: 'telegram-2',
            speaker: 'ELSA',
            dialogue: 'Read the whole of it. What is it for?',
          },
          {
            id: 'telegram-3',
            speaker: 'ALBERT',
            dialogue: 'The law of the photoelectric effect.',
          },
          {
            id: 'telegram-4',
            speaker: 'ELSA',
            dialogue: 'And what is that, when it is at home?',
          },
          {
            id: 'telegram-5',
            speaker: 'ALBERT',
            dialogue: 'The paper about light arriving in lumps. Shine a lamp on metal and the metal spits out little pieces of electricity.',
          },
          {
            id: 'telegram-6',
            speaker: 'ALBERT',
            dialogue: 'Not a stream pouring in. Lumps. One lump in, one piece out. Brightness only changes how many.',
          },
          {
            id: 'nothing',
            speaker: 'ELSA',
            dialogue: 'Nothing about space, then. Nothing about time.',
          },
          {
            id: 'nothing-2',
            speaker: 'ALBERT',
            dialogue: 'Not a word. They have given it to me for the one paper they were certain of.',
          },
          {
            id: 'nothing-3',
            speaker: 'ELSA',
            dialogue: 'Are you insulted?',
          },
          {
            id: 'nothing-4',
            speaker: 'ALBERT',
            dialogue: 'I find it funny. I expect to go on finding it funny for about a year.',
          },
          {
            id: 'money',
            narration: 'The money goes to Zürich, as agreed years ago by lawyers, when nobody believed there would ever be any money.',
          },
          {
            id: 'money-2',
            speaker: 'ELSA',
            dialogue: 'All of it?',
          },
          {
            id: 'money-3',
            speaker: 'ALBERT',
            dialogue: 'All of it. It was written down. I have never once got out of anything that was written down.',
          },
          {
            id: 'money-4',
            narration: 'The medal goes into a drawer with the string and the sealing wax, and stays there.',
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
            narration: 'The congress runs a week and the real work happens at breakfast, over cleared plates and a napkin covered in diagrams.',
          },
          {
            id: 'mornings-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'What are the two of you actually arguing about? It has been going since Tuesday.',
          },
          {
            id: 'mornings-3',
            speaker: 'ALBERT',
            dialogue: 'Whether the world has made up its mind before anybody looks at it. He says that is an improper question.',
          },
          {
            id: 'mornings-4',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And you say?',
          },
          {
            id: 'mornings-5',
            speaker: 'ALBERT',
            dialogue: 'That it is the only question. Watch. Niels — I have brought you a box.',
          },
          {
            id: 'box',
            speaker: 'BOHR',
            dialogue: 'Ah — yes — a box — it is always a box with you — go on, go on.',
          },
          {
            id: 'box-2',
            speaker: 'ALBERT',
            dialogue: 'It hangs from a spring and it is full of light. A hole in the side, a shutter over the hole.',
          },
          {
            id: 'box-3',
            speaker: 'ALBERT',
            dialogue: 'The shutter opens for an instant, by clock, and exactly one flash gets out.',
          },
          {
            id: 'box-4',
            speaker: 'BOHR',
            dialogue: 'Yes, and then you —',
          },
          {
            id: 'box-5',
            speaker: 'ALBERT',
            dialogue: 'And then I weigh it. Lighter by exactly what left. And the clock says exactly when it left.',
          },
          {
            id: 'box-6',
            speaker: 'ALBERT',
            dialogue: 'Both. Exactly. Your rule says nature will not permit a man both at once. My box permits it.',
          },
          {
            id: 'pause',
            narration: 'Bohr stands there holding the coffee pot and does not put it down for a considerable time.',
          },
          {
            id: 'pause-2',
            speaker: 'BOHR',
            dialogue: 'That is — no — wait — you must let me —',
          },
          {
            id: 'pause-3',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'He has walked off down the wrong corridor.',
          },
          {
            id: 'pause-4',
            speaker: 'ALBERT',
            dialogue: 'He does that when he is being careful. From outside it looks like losing and it takes very much longer.',
          },
          {
            id: 'evening',
            narration: 'In the evening the answer comes back, at length, with three qualifications attached to the front of it.',
          },
          {
            id: 'evening-2',
            speaker: 'BOHR',
            dialogue: 'Your box drops a little when it lightens. It moves, my friend. It moves in your own gravity.',
          },
          {
            id: 'evening-3',
            speaker: 'BOHR',
            dialogue: 'And a clock that hangs lower runs slower. You told us that yourself, in 1915.',
          },
          {
            id: 'evening-4',
            speaker: 'BOHR',
            dialogue: 'So the clock is no longer exact. Your box has cheated you, and it cheated you with your own theory.',
          },
          {
            id: 'evening-5',
            speaker: 'ALBERT',
            dialogue: 'That is the cruellest thing anybody has ever done to me before breakfast.',
          },
          {
            id: 'evening-6',
            speaker: 'BOHR',
            dialogue: 'You are not saying it is wrong. You are saying you do not like it. Only one of those is physics.',
          },
          {
            id: 'argue',
            speaker: 'BOHR',
            dialogue: 'Tomorrow there is another breakfast. Will you bring me a better box, or will you let me finish a sentence?',
            choices: [
              {
                id: 'press',
                label: 'Bring the better box. Press until it breaks or you do',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 1, tension: 1, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 2 },
                ],
              },
              {
                id: 'listen',
                label: 'Let him finish. Listen all the way to the end',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 2, tension: 0, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The Einstein–Bohr exchanges at the Solvay congresses of 1927 and 1930 are documented: Einstein arrived each morning with a thought experiment designed to defeat the new physics, and Bohr answered it by evening. The box of light weighed on a spring, defeated by Einstein’s own result that a clock lower in a gravitational field runs slow, is the best known of them. Dialogue is dramatized.',
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
            narration: 'He has built a machine out of nothing but thought: a shutter, a clock, a spring balance, and a box full of light.',
          },
          {
            id: 'device-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Why a box? Why not simply say what you mean?',
          },
          {
            id: 'device-3',
            speaker: 'ALBERT',
            dialogue: 'Because what I mean is that nature is not as vague as they claim, and you cannot argue with a man about vagueness.',
          },
          {
            id: 'device-4',
            speaker: 'ALBERT',
            dialogue: 'You can argue with him about a box. A box either does the thing or it does not.',
          },
          {
            id: 'device-5',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And what does yours do?',
          },
          {
            id: 'device-6',
            speaker: 'ALBERT',
            dialogue: 'It lets one flash of light out and tells me both the weight that left and the instant it left. They say that cannot be had.',
          },
          {
            id: 'night',
            narration: 'It takes his opponent one night to find the flaw. He is said to have walked in circles for most of it.',
          },
          {
            id: 'reply',
            speaker: 'BOHR',
            dialogue: 'It is not that nature is vague. It is — how shall I put it — that your question has assumed an answer.',
          },
          {
            id: 'reply-2',
            speaker: 'BOHR',
            dialogue: 'An answer nature was never asked to have. You are demanding that it possess something before anyone requires it.',
          },
          {
            id: 'reply-3',
            speaker: 'ALBERT',
            dialogue: 'A stone has a position whether or not I am looking at the stone.',
          },
          {
            id: 'reply-4',
            speaker: 'BOHR',
            dialogue: 'A stone, yes — certainly — but the stone is very large, and that, my friend, is the entire difficulty.',
          },
          {
            id: 'reply-5',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Which of them is winning?',
          },
          {
            id: 'reply-6',
            speaker: 'ALBERT',
            dialogue: 'Neither. That is why we keep doing it. Nobody sane goes thirty years with an argument he can win.',
          },
          {
            id: 'argue',
            speaker: 'BOHR',
            dialogue: 'The session closes in ten minutes. Shall we go round once more, or shall we go and eat something?',
            choices: [
              {
                id: 'press',
                label: 'Round once more. Press until it breaks or you do',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 1, tension: 1, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 2 },
                ],
              },
              {
                id: 'listen',
                label: 'Eat, and let him finish a sentence for once',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 2, tension: 0, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The long Einstein–Bohr disagreement over whether the new physics gives a complete account of the world, conducted with great mutual respect over three decades, is documented. Dialogue is dramatized.',
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
            narration: 'The congress goes ahead without the one man he wanted to argue with. So the argument goes into a letter instead.',
          },
          {
            id: 'letter-2',
            speaker: 'ELSA',
            dialogue: 'Nine pages. To one man.',
          },
          {
            id: 'letter-3',
            speaker: 'ALBERT',
            dialogue: 'Eight of argument and one apologising for the eight.',
          },
          {
            id: 'letter-4',
            speaker: 'ELSA',
            dialogue: 'What is it about this time?',
          },
          {
            id: 'letter-5',
            speaker: 'ALBERT',
            dialogue: 'They say you cannot know where a small thing is and how fast it is going. Not ever. Not both.',
          },
          {
            id: 'letter-6',
            speaker: 'ELSA',
            dialogue: 'Because the instruments are poor.',
          },
          {
            id: 'letter-7',
            speaker: 'ALBERT',
            dialogue: 'No. Because there is nothing there to be known, they say. The world has not settled it until somebody looks.',
          },
          {
            id: 'letter-8',
            speaker: 'ELSA',
            dialogue: 'And you have drawn a box.',
          },
          {
            id: 'letter-9',
            speaker: 'ALBERT',
            dialogue: 'A box with a shutter and a clock, which I believe forces the world to settle it. He will find the hole in it.',
          },
          {
            id: 'letter-10',
            speaker: 'ELSA',
            dialogue: 'Then why send it at all?',
          },
          {
            id: 'letter-11',
            speaker: 'ALBERT',
            dialogue: 'Because he will find the hole and I shall learn something. There is nobody else on earth I can say that about.',
          },
          {
            id: 'wait',
            narration: 'Letters are a poor way to be disagreed with. By the time the reply comes he has thought of two better objections.',
          },
          {
            id: 'argue',
            speaker: 'ELSA',
            dialogue: 'You are reading it over again. Is it a kind letter or a hard one?',
            choices: [
              {
                id: 'press',
                label: 'Hard. Press the objection until it breaks or you do',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 1, tension: 1, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 2 },
                ],
              },
              {
                id: 'listen',
                label: 'Kind. Ask the question and leave room for the answer',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 2, tension: 0, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsChance', amount: 1 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A divergent version of the documented Einstein–Bohr debate, conducted in correspondence rather than face to face. Elsa Löwenthal was Einstein’s cousin and second wife; the conversation is dramatized.',
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
            narration: 'The flat is being shut up for a winter abroad, as it has been every winter for years. Trunks stand in the hall.',
          },
          {
            id: 'winter-2',
            speaker: 'ELSA',
            dialogue: 'Why are you standing in the doorway? The cab is paid by the hour.',
          },
          {
            id: 'winter-3',
            speaker: 'ALBERT',
            dialogue: 'Turn round and look at it.',
          },
          {
            id: 'winter-4',
            speaker: 'ELSA',
            dialogue: 'At what? The rooms?',
          },
          {
            id: 'winter-5',
            speaker: 'ALBERT',
            dialogue: 'At the rooms. Very carefully. You will not see them again.',
          },
          {
            id: 'winter-6',
            speaker: 'ELSA',
            dialogue: 'You are being theatrical.',
          },
          {
            id: 'winter-7',
            speaker: 'ALBERT',
            dialogue: 'I am doing arithmetic. I have been doing it since the lists began appearing with academic titles beside the names.',
          },
          {
            id: 'zurich',
            speaker: 'ELSA',
            dialogue: 'We stop at Zürich?',
          },
          {
            id: 'zurich-2',
            speaker: 'ALBERT',
            dialogue: 'For an afternoon. Eduard is there.',
          },
          {
            id: 'zurich-3',
            speaker: 'ELSA',
            dialogue: 'He will want you to play.',
          },
          {
            id: 'zurich-4',
            speaker: 'ALBERT',
            dialogue: 'Then I shall play. He has never wanted conversation from me. Music he can take.',
          },
          {
            id: 'zurich-5',
            narration: 'They sit an hour in a quiet room in Zürich. He plays; his son listens with his eyes closed; nobody mentions the boat.',
          },
          {
            id: 'zurich-6',
            speaker: 'ALBERT',
            dialogue: 'I shall write. Every week.',
          },
          {
            id: 'spring',
            narration: 'By spring the government has changed, and the letters from friends all say the same sentence in different handwriting.',
          },
          {
            id: 'spring-2',
            speaker: 'ELSA',
            dialogue: 'They say do not come back.',
          },
          {
            id: 'spring-3',
            speaker: 'ALBERT',
            dialogue: 'They say it politely, and they are right, and there is still a seat at the Academy with my name on it.',
          },
          {
            id: 'resign',
            speaker: 'ELSA',
            dialogue: 'And a blank sheet in front of you. Well?',
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
          'Einstein left Germany in December 1932 and never returned; after the Nazi seizure of power in 1933 he resigned from the Prussian Academy and renounced his German citizenship. His parting remark to Elsa about looking at the house for the last time is widely reported. He saw his younger son Eduard, who was ill and under care in Zürich, for the last time in 1933, and played the violin during the visit; the wording here is dramatized.',
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
            narration: 'The news finds him out of the country. It takes a week to understand what an ordinary piece of luck has just saved him from.',
          },
          {
            id: 'news-2',
            speaker: 'ELSA',
            dialogue: 'What does the paper say?',
          },
          {
            id: 'news-3',
            speaker: 'ALBERT',
            dialogue: 'That the government has changed. And that the universities are to be cleaned.',
          },
          {
            id: 'news-4',
            speaker: 'ELSA',
            dialogue: 'Cleaned.',
          },
          {
            id: 'news-5',
            speaker: 'ALBERT',
            dialogue: 'It is the word they print. It is chosen so that nobody reading it has to picture anything.',
          },
          {
            id: 'letters',
            narration: 'The letters arrive over three weeks from three countries, and all of them say the same sentence in different handwriting.',
          },
          {
            id: 'letters-2',
            speaker: 'ELSA',
            dialogue: 'Who has written?',
          },
          {
            id: 'letters-3',
            speaker: 'ALBERT',
            dialogue: 'Six of them. Colleagues of twenty years, no longer colleagues by order of somebody in an office.',
          },
          {
            id: 'letters-4',
            speaker: 'ELSA',
            dialogue: 'And the others?',
          },
          {
            id: 'letters-5',
            speaker: 'ALBERT',
            dialogue: 'The others have not written. That silence is also a letter and I can read it perfectly well.',
          },
          {
            id: 'seat',
            narration: 'He still holds the post, and the salary, and a seat at a table he sat at for nineteen years.',
          },
          {
            id: 'seat-2',
            speaker: 'ELSA',
            dialogue: 'You could say nothing and let them take it from you.',
          },
          {
            id: 'seat-3',
            speaker: 'ALBERT',
            dialogue: 'I could. Then it is a thing done to me, and I shall spend the rest of my life explaining that.',
          },
          {
            id: 'resign',
            speaker: 'ELSA',
            dialogue: 'There is hotel paper on the desk. What are you going to write on it?',
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
            narration: 'He gave that country back at sixteen, with a form and a clerk’s stamp, and has been told ever since that it did not count.',
          },
          {
            id: 'news-2',
            speaker: 'ALBERT',
            dialogue: 'It counts this morning. The government has changed and the universities are to be cleaned.',
          },
          {
            id: 'news-3',
            speaker: 'ELSA',
            dialogue: 'You hold nothing there. There is nothing for you to resign.',
          },
          {
            id: 'news-4',
            speaker: 'ALBERT',
            dialogue: 'Nothing whatever. No chair, no seat, no salary. It is the weakest position a man can argue from.',
          },
          {
            id: 'news-5',
            speaker: 'ELSA',
            dialogue: 'Then do not argue.',
          },
          {
            id: 'letters',
            narration: 'The letters come over three weeks, and all of them say the same sentence in different handwriting.',
          },
          {
            id: 'letters-2',
            speaker: 'ALBERT',
            dialogue: 'Men I have written to for twenty years are suddenly, officially, no longer anything at all.',
          },
          {
            id: 'letters-3',
            speaker: 'ELSA',
            dialogue: 'And some have not written.',
          },
          {
            id: 'letters-4',
            speaker: 'ALBERT',
            dialogue: 'Some have not. That silence is its own letter, and it is perfectly legible.',
          },
          {
            id: 'have',
            speaker: 'ELSA',
            dialogue: 'What do you actually have?',
          },
          {
            id: 'have-2',
            speaker: 'ALBERT',
            dialogue: 'A name that carries across borders, and a blank sheet of paper. It is harder than it sounds.',
          },
          {
            id: 'resign',
            speaker: 'ELSA',
            dialogue: 'Then decide what goes on the sheet.',
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
            narration: 'The trunks go down the stairs one at a time. Nineteen years turn out to fit into fewer of them than anybody expected.',
          },
          {
            id: 'leave-2',
            speaker: 'ELSA',
            dialogue: 'The violin can go in the hold with the rest.',
          },
          {
            id: 'leave-3',
            speaker: 'ALBERT',
            dialogue: 'The violin travels in the cabin. So do the papers. Everything else is furniture.',
          },
          {
            id: 'coast',
            narration: 'He stands at the rail until the coastline is a smudge, and then a rumour, and then nothing at all.',
          },
          {
            id: 'coast-2',
            speaker: 'ELSA',
            dialogue: 'You will catch cold out here.',
          },
          {
            id: 'coast-3',
            speaker: 'ALBERT',
            dialogue: 'I am fifty-four and stateless for the second time. It is the only condition in which I have ever felt entirely accurate.',
          },
          {
            id: 'gulls',
            narration: 'The gulls give up at the edge of the shipping lane and turn back. He stays where he is.',
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
            narration: 'A night compartment, a case on the rack, a corridor lamp beyond the glass. The train slows for the frontier.',
          },
          {
            id: 'border-2',
            speaker: 'THE GUARD',
            dialogue: 'Papers.',
          },
          {
            id: 'border-3',
            speaker: 'ALBERT',
            dialogue: 'There. The photograph is nine years old and was not flattering then.',
          },
          {
            id: 'border-4',
            speaker: 'THE GUARD',
            dialogue: 'Purpose of travel.',
          },
          {
            id: 'border-5',
            speaker: 'ALBERT',
            dialogue: 'Work. The equations went ahead of me in twelve languages and nobody asked them anything at all.',
          },
          {
            id: 'ahead',
            narration: 'Somewhere ahead there is an institute with money, no students, and a room he has not yet seen.',
          },
          {
            id: 'ahead-2',
            speaker: 'ALBERT',
            dialogue: 'It is not a homecoming. I have stopped expecting those.',
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
            narration: 'It is not done in a day. It is done in small steps, each signed by somebody who considers himself uninvolved.',
          },
          {
            id: 'plate-2',
            speaker: 'THE PORTER',
            dialogue: 'They had the nameplate off this morning. I was told to do it.',
          },
          {
            id: 'plate-3',
            speaker: 'ALBERT',
            dialogue: 'Four screw holes. They have left the holes.',
          },
          {
            id: 'plate-4',
            speaker: 'THE PORTER',
            dialogue: 'I could fill them. It takes a minute.',
          },
          {
            id: 'plate-5',
            speaker: 'ALBERT',
            dialogue: 'Leave them. Somebody should have to walk past and look at them.',
          },
          {
            id: 'leave',
            narration: 'He takes the violin, the papers and the coat. The rest can stay and belong to whoever wants it.',
          },
          {
            id: 'leave-2',
            speaker: 'ALBERT',
            dialogue: 'What I cannot decide, on the train, is whether I am being driven out or simply going first.',
          },
        ],
        historicalNote:
          'The bureaucratic removal of Jewish academics from German institutions from 1933 is documented. The porter stands in for people whose names are not recorded, and the scene is dramatized.',
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
            narration: 'He does not have to leave. He has been outside so long that the passport in the drawer is a joke he made at sixteen.',
          },
          {
            id: 'border-2',
            speaker: 'ELSA',
            dialogue: 'You have been at that window an hour.',
          },
          {
            id: 'border-3',
            speaker: 'ALBERT',
            dialogue: 'The trains still run north from here.',
          },
          {
            id: 'border-4',
            speaker: 'ELSA',
            dialogue: 'And?',
          },
          {
            id: 'border-5',
            speaker: 'ALBERT',
            dialogue: 'And I know people at the other end of that line. Very few of them have anywhere to be sent to.',
          },
          {
            id: 'north',
            narration: 'Being safe by an accident of paperwork turns out to feel exactly like being lucky and not at all like being right.',
          },
          {
            id: 'north-2',
            speaker: 'ALBERT',
            dialogue: 'I am on the correct side of a line I did not draw. That is not a character reference.',
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
            narration: 'The crates come off the cart and stand in the hall for eleven days, because opening them would settle something.',
          },
          {
            id: 'arrive-2',
            speaker: 'ELSA',
            dialogue: 'Eleven days, Albert.',
          },
          {
            id: 'arrive-3',
            speaker: 'ALBERT',
            dialogue: 'The violin came out the first evening. The rest can wait until I believe in the address.',
          },
          {
            id: 'hook',
            narration: 'The coat goes on a hook that is the wrong height. He never does get used to the hook.',
          },
          {
            id: 'hook-2',
            speaker: 'ELSA',
            dialogue: 'It is very quiet here. You will have to find something to be furious about.',
          },
          {
            id: 'hook-3',
            speaker: 'ALBERT',
            dialogue: 'Give me a fortnight.',
          },
          {
            id: 'flexner',
            speaker: 'FLEXNER',
            dialogue: 'There are no duties. No lectures, no examinations, no committees unless you ask for one.',
          },
          {
            id: 'flexner-2',
            speaker: 'ALBERT',
            dialogue: 'That was said to me once before, in Berlin, by men who meant it at the time.',
          },
          {
            id: 'flexner-3',
            speaker: 'FLEXNER',
            dialogue: 'I shall mean it for as long as I have the job. The question is what you intend to do with it.',
          },
          {
            id: 'flexner-4',
            speaker: 'ALBERT',
            dialogue: 'You have asked me that on my first morning, in a hall full of unopened crates.',
          },
          {
            id: 'purpose-lead',
            narration: 'A salary, a room, a blackboard and about twenty working years. He has never been able to do two things properly at once.',
          },
          {
            id: 'purpose',
            speaker: 'ELSA',
            dialogue: 'One thing, then. Which one?',
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
          'Einstein left Germany permanently in 1933 and took a research post at the newly founded Institute for Advanced Study in Princeton, brought there by its first director Abraham Flexner. The post carried no teaching duties. Dialogue is dramatized.',
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
            narration: 'Nothing moves. The same stairs, the same chair, the same view he stopped noticing some years ago.',
          },
          {
            id: 'rooms-2',
            speaker: 'ELSA',
            dialogue: 'You have bought a wireless.',
          },
          {
            id: 'rooms-3',
            speaker: 'ALBERT',
            dialogue: 'A better one. It is the only concession I was prepared to make to the year.',
          },
          {
            id: 'rooms-4',
            speaker: 'ELSA',
            dialogue: 'You have it so loud I cannot hear myself think.',
          },
          {
            id: 'rooms-5',
            speaker: 'ALBERT',
            dialogue: 'That is very largely the idea.',
          },
          {
            id: 'news',
            narration: 'The upheaval is entirely elsewhere, happening to people he knows by name, and a life can fail to be interrupted.',
          },
          {
            id: 'news-2',
            speaker: 'ELSA',
            dialogue: 'You cannot stop any of it by hearing it sooner.',
          },
          {
            id: 'news-3',
            speaker: 'ALBERT',
            dialogue: 'No. But I can stop pretending afterwards that I did not know.',
          },
          {
            id: 'letters',
            narration: 'He writes eleven letters that week, most of them to men who are trying to get other men out.',
          },
          {
            id: 'letters-2',
            speaker: 'ELSA',
            dialogue: 'And the work?',
          },
          {
            id: 'letters-3',
            speaker: 'ALBERT',
            dialogue: 'The work is patient. It has waited thirty years. It can wait until Thursday.',
          },
          {
            id: 'purpose',
            speaker: 'ELSA',
            dialogue: 'There are twenty working years left, at best. What is the one thing?',
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
            narration: 'They give him a room, a blackboard, two chairs and no instructions of any kind.',
          },
          {
            id: 'office-2',
            speaker: 'FLEXNER',
            dialogue: 'Is there anything you need?',
          },
          {
            id: 'office-3',
            speaker: 'ALBERT',
            dialogue: 'A desk, a chair, paper, a pencil. And a very large wastepaper basket.',
          },
          {
            id: 'office-4',
            speaker: 'FLEXNER',
            dialogue: 'Why a large one?',
          },
          {
            id: 'office-5',
            speaker: 'ALBERT',
            dialogue: 'Because in my line of work nearly all of it is wrong, and the wrongness has to go somewhere.',
          },
          {
            id: 'duties',
            speaker: 'FLEXNER',
            dialogue: 'There are no duties here at all. In nineteen years at an academy, were you ever given nothing to do?',
          },
          {
            id: 'duties-2',
            speaker: 'ALBERT',
            dialogue: 'Never once. It has taken me most of a winter to understand that this is the gift.',
          },
          {
            id: 'language',
            narration: 'The language outside the window defeats him for a few months and then quietly stops mattering.',
          },
          {
            id: 'language-2',
            speaker: 'ELSA',
            dialogue: 'They call you the greatest man in the world here, and they have still put you on a committee.',
          },
          {
            id: 'language-3',
            speaker: 'ALBERT',
            dialogue: 'Every country has a committee. It is the one institution that survives translation.',
          },
          {
            id: 'purpose-lead',
            narration: 'Twenty working years, at the outside, and he has never in his life done two things properly at once.',
          },
          {
            id: 'purpose',
            speaker: 'ELSA',
            dialogue: 'So which is it going to be?',
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
          'The Institute for Advanced Study, whose first director was Abraham Flexner, offered permanent research positions with no teaching obligations. Dialogue is dramatized.',
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
            narration: 'They walk home together most days: an old man in a jumper and a much thinner one buttoned into an overcoat in July.',
          },
          {
            id: 'pair-2',
            speaker: 'GÖDEL',
            dialogue: 'I have been reading your equations. Not for the physics. For what they permit.',
          },
          {
            id: 'pair-3',
            speaker: 'ALBERT',
            dialogue: 'Permit.',
          },
          {
            id: 'pair-4',
            speaker: 'GÖDEL',
            dialogue: 'As a lawyer reads a contract. One should always ask what a thing allows, not what its author intended.',
          },
          {
            id: 'time',
            speaker: 'ALBERT',
            dialogue: 'And what do mine allow?',
          },
          {
            id: 'time-2',
            speaker: 'GÖDEL',
            dialogue: 'A universe that turns. Not the stars in it. The whole of it, turning. You did not forbid this.',
          },
          {
            id: 'time-3',
            speaker: 'ALBERT',
            dialogue: 'Go on.',
          },
          {
            id: 'time-4',
            speaker: 'GÖDEL',
            dialogue: 'In such a world a traveller may set out, go round in a very large circle, and arrive at a time before he left.',
          },
          {
            id: 'bicycle',
            narration: 'A boy on a bicycle comes past them. Neither man moves out of the way, and the boy goes round.',
          },
          {
            id: 'bicycle-2',
            speaker: 'GÖDEL',
            dialogue: 'I have written it down. It is quite rigorous. I checked it four times, and once more this morning.',
          },
          {
            id: 'reply',
            narration: 'Albert walks another twenty paces without answering, which is his highest available form of compliment.',
          },
          {
            id: 'reply-2',
            speaker: 'ALBERT',
            dialogue: 'I have always suspected my equations were cleverer than I am.',
          },
          {
            id: 'reply-3',
            speaker: 'ALBERT',
            dialogue: 'It is a great relief to have it confirmed by somebody qualified.',
          },
          {
            id: 'reply-4',
            speaker: 'GÖDEL',
            dialogue: 'I did not say the world is like that. Only that you did not forbid it. That is a different claim.',
          },
          {
            id: 'reply-5',
            speaker: 'ALBERT',
            dialogue: 'Kurt. Allow me one afternoon.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'godel', familiarity: 2, respect: 2, tension: 0, flag: 'princeton-walks' },
          { type: 'flag', flag: 'einstein.godelWalks', value: true },
        ],
        historicalNote:
          'Einstein and Gödel walked to and from the Institute together for years in Princeton, and Gödel published rotating-universe solutions to Einstein’s equations in 1949, in which a traveller could in principle return to his own past. Dialogue is dramatized.',
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
            narration: 'He tells people, and means it entirely, that his own work no longer amounts to very much these days.',
          },
          {
            id: 'privilege-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Then why do you come in at all?',
          },
          {
            id: 'privilege-3',
            speaker: 'ALBERT',
            dialogue: 'For the privilege of walking home with the logician. I would come in for that alone.',
          },
          {
            id: 'walk',
            narration: 'Two overcoats on a summer path, one of them far too heavy, and two long shadows across the lawns.',
          },
          {
            id: 'walk-2',
            speaker: 'GÖDEL',
            dialogue: 'Your universe need not have begun at all. It may only turn.',
          },
          {
            id: 'walk-3',
            speaker: 'ALBERT',
            dialogue: 'That is an extraordinary thing to say between here and the corner.',
          },
          {
            id: 'walk-4',
            speaker: 'GÖDEL',
            dialogue: 'I have checked it four times. And once more this morning, in case the fourth was being kind to me.',
          },
          {
            id: 'walk-5',
            speaker: 'ALBERT',
            dialogue: 'And if it is true?',
          },
          {
            id: 'walk-6',
            speaker: 'GÖDEL',
            dialogue: 'Then time does not run the way people assume. The assumption was never in your equations. Only in their heads.',
          },
          {
            id: 'corner',
            narration: 'They part at the same corner every afternoon with the same small nod.',
          },
          {
            id: 'corner-2',
            speaker: 'ALBERT',
            dialogue: 'Same time tomorrow.',
          },
          {
            id: 'corner-3',
            narration: 'It is the last real friendship of his life, and neither of them ever says so out loud.',
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
            narration: 'He walks the same road every afternoon, at the same speed, in the same weather-defeating jumper.',
          },
          {
            id: 'walk-2',
            speaker: 'A NEIGHBOUR',
            dialogue: 'Afternoon, Professor. Talking to yourself again.',
          },
          {
            id: 'walk-3',
            speaker: 'ALBERT',
            dialogue: 'Arguing. There is a difference, and it matters a great deal.',
          },
          {
            id: 'walk-4',
            speaker: 'A NEIGHBOUR',
            dialogue: 'Who is winning?',
          },
          {
            id: 'walk-5',
            speaker: 'ALBERT',
            dialogue: 'I am. That is precisely the trouble with it.',
          },
          {
            id: 'miss',
            narration: 'What he misses is not agreement. He has never in his life been short of agreement.',
          },
          {
            id: 'miss-2',
            speaker: 'ALBERT',
            dialogue: 'I want somebody good enough to disagree with me in the correct way. Slowly. About the assumption, not the answer.',
          },
          {
            id: 'miss-3',
            speaker: 'A NEIGHBOUR',
            dialogue: 'Can’t help you there.',
          },
          {
            id: 'miss-4',
            speaker: 'ALBERT',
            dialogue: 'No. Very few can. Good afternoon.',
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
            narration: 'He writes it up properly with two younger colleagues. Not a refutation. A question, four pages long.',
          },
          {
            id: 'paper-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'What am I typing, exactly?',
          },
          {
            id: 'paper-3',
            speaker: 'ALBERT',
            dialogue: 'Take two small things made together, then carried a thousand miles apart. Keep them both sealed up.',
          },
          {
            id: 'paper-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'Like a pair of gloves in two boxes.',
          },
          {
            id: 'paper-5',
            speaker: 'ALBERT',
            dialogue: 'That is my answer, yes. Open one box, see a left glove, and you know the far box without touching it.',
          },
          {
            id: 'paper-6',
            speaker: 'HELEN DUKAS',
            dialogue: 'Then what is the argument about?',
          },
          {
            id: 'paper-7',
            speaker: 'ALBERT',
            dialogue: 'They say the gloves are neither left nor right until somebody looks. Your looking here settles the one over there.',
          },
          {
            id: 'paper-8',
            speaker: 'HELEN DUKAS',
            dialogue: 'How would the far one know it had been looked at?',
          },
          {
            id: 'paper-9',
            speaker: 'ALBERT',
            dialogue: 'That is the whole paper. Either it knew all along and they have left something out, or the news travels faster than light.',
          },
          {
            id: 'answer',
            narration: 'The reply comes back from Copenhagen within weeks, courteous and unyielding. The young men read it and go back to work.',
          },
          {
            id: 'answer-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'They were very polite about it.',
          },
          {
            id: 'answer-3',
            speaker: 'ALBERT',
            dialogue: 'They were. I have become the man they respect and route around.',
          },
          {
            id: 'dice',
            speaker: 'ALBERT',
            dialogue: 'I still cannot believe the world settles its affairs by throwing dice. I know exactly how that sounds.',
          },
          {
            id: 'dice-2',
            speaker: 'ALBERT',
            dialogue: 'Seventy per cent certain I am right. One hundred per cent certain I cannot prove it.',
          },
        ],
        historicalNote:
          'Einstein published a paper in 1935 with two younger colleagues asking whether the new physics gives a complete account of a pair of particles made together and then separated; Bohr replied the same year. His objection to fundamental chance, expressed in correspondence, is documented. Helen Dukas was his secretary from 1928. Wording is paraphrased, not quoted.',
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
            narration: 'The file of letters is thicker than most men’s collected works, tied with string, twenty years deep.',
          },
          {
            id: 'file-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'Copenhagen again.',
          },
          {
            id: 'file-3',
            speaker: 'ALBERT',
            dialogue: 'Copenhagen again. He has answered the objection I made in the spring, and answered it well.',
          },
          {
            id: 'file-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'Have you changed your mind?',
          },
          {
            id: 'file-5',
            speaker: 'ALBERT',
            dialogue: 'No. I have stopped needing to win, which is a different and much cheaper thing.',
          },
          {
            id: 'position',
            speaker: 'HELEN DUKAS',
            dialogue: 'Shall I file it with the others?',
          },
          {
            id: 'position-2',
            speaker: 'ALBERT',
            dialogue: 'File it where I can reach it. Their theory works. Every experiment anybody has done agrees with it.',
          },
          {
            id: 'position-3',
            speaker: 'ALBERT',
            dialogue: 'I simply think it is a beautiful description of the shadow of something nobody has yet gone round to look at.',
          },
          {
            id: 'dice',
            narration: 'He writes back the same evening, six pages, after reading every line of the other man’s letter twice.',
          },
          {
            id: 'dice-2',
            speaker: 'ALBERT',
            dialogue: 'Put at the end: I cannot believe the world settles its business by throwing.',
          },
          {
            id: 'dice-3',
            speaker: 'ALBERT',
            dialogue: 'And under it: the world is under no obligation whatever to consult me.',
          },
        ],
        historicalNote:
          'Einstein maintained his objection to the completeness of the new physics in correspondence throughout his later life, while conceding that its predictions were never wrong. Wording is paraphrased.',
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
            narration: 'The new physics predicts everything anybody has thought to measure, and it does it in terms of what is likely.',
          },
          {
            id: 'incomplete-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'You think it is wrong.',
          },
          {
            id: 'incomplete-3',
            speaker: 'ALBERT',
            dialogue: 'I think it is right and unfinished. Those can both be true and usually are.',
          },
          {
            id: 'incomplete-4',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Unfinished how?',
          },
          {
            id: 'incomplete-5',
            speaker: 'ALBERT',
            dialogue: 'It gives me the odds beautifully. It will not tell me what is actually there when nobody is in the room.',
          },
          {
            id: 'incomplete-6',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Perhaps nothing is.',
          },
          {
            id: 'incomplete-7',
            speaker: 'ALBERT',
            dialogue: 'Perhaps. Then I have spent forty years being wrong about the thing I was most sure of.',
          },
          {
            id: 'alone',
            narration: 'The young men are very polite about this. They have been polite about it for some years now.',
          },
          {
            id: 'alone-2',
            speaker: 'ALBERT',
            dialogue: 'Being treated gently is what happens to a position just before people stop arguing with it.',
          },
        ],
        historicalNote:
          'Einstein’s lifelong conviction that the new physics was incomplete rather than incorrect is documented. Dialogue is dramatized.',
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
            narration: 'The cottage has no telephone. There is a borrowed sailing boat, which he handles badly and with enormous pleasure.',
          },
          {
            id: 'summer-2',
            narration: 'It is August. He is sixty, sunburnt, and has not thought about politics in six weeks.',
          },
          {
            id: 'car',
            narration: 'A car comes down the lane and stops crookedly. A younger man is driving, because the passenger never learned how.',
          },
          {
            id: 'car-2',
            speaker: 'SZILÁRD',
            dialogue: 'I am sorry about the lane. We asked a child where the professor lived and she brought us straight here.',
          },
          {
            id: 'car-3',
            speaker: 'ALBERT',
            dialogue: 'They always do. Sit down. You have come a long way to say one thing.',
          },
          {
            id: 'chain',
            speaker: 'SZILÁRD',
            dialogue: 'Uranium. They have broken the atom of it in Berlin, and when it breaks it throws out pieces.',
          },
          {
            id: 'chain-2',
            speaker: 'ALBERT',
            dialogue: 'Pieces that can break the next one.',
          },
          {
            id: 'chain-3',
            speaker: 'SZILÁRD',
            dialogue: 'Pieces that can break two more. And those four. Put enough of it in one place and it does not stop.',
          },
          {
            id: 'chain-4',
            speaker: 'ALBERT',
            dialogue: 'How much is enough?',
          },
          {
            id: 'chain-5',
            speaker: 'SZILÁRD',
            dialogue: 'Nobody knows yet. That is the point. It is no longer a question of principle. It is a question of tonnage.',
          },
          {
            id: 'glass',
            narration: 'He puts the glass of water down on the arm of the chair, very carefully, as though it might be needed later.',
          },
          {
            id: 'glass-2',
            speaker: 'ALBERT',
            dialogue: 'I did not think of that.',
          },
          {
            id: 'glass-3',
            speaker: 'SZILÁRD',
            dialogue: 'Nobody did, until last winter.',
          },
          {
            id: 'glass-4',
            speaker: 'ALBERT',
            dialogue: 'Twenty years of saying that nations cannot be trusted with anything sharper than a treaty. And I did not think of that.',
          },
          {
            id: 'ore',
            speaker: 'SZILÁRD',
            dialogue: 'Germany has stopped selling the ore out of the mines it took. That is not a scientific fact. It is an administrative one.',
          },
          {
            id: 'ore-2',
            speaker: 'ALBERT',
            dialogue: 'Which is worse. Scientists guess at things. Ministries decide them.',
          },
          {
            id: 'draft',
            narration: 'There is a typed draft on the table, addressed to a president, with a blank line at the foot of the second page.',
          },
          {
            id: 'draft-2',
            speaker: 'SZILÁRD',
            dialogue: 'I do not need your physics. Everybody has the physics. I need the one signature that gets read the day it arrives.',
          },
          {
            id: 'flag',
            speaker: 'ALBERT',
            dialogue: 'In 1919 I said I would never again put my name under anybody’s flag.',
          },
          {
            id: 'flag-2',
            speaker: 'SZILÁRD',
            dialogue: 'This is not a flag. It is a warning about a fire, sent to the man who has the buckets.',
          },
          {
            id: 'flag-3',
            speaker: 'ALBERT',
            dialogue: 'Or the man with the matches. I have never once been able to tell those two apart in advance.',
          },
          {
            id: 'sign',
            speaker: 'SZILÁRD',
            dialogue: 'There is a pen on the table, Professor.',
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
          'In August 1939 Leó Szilárd, driven by a colleague because he could not drive, visited Einstein at a rented Long Island cottage and put the case for a letter to President Roosevelt warning that a runaway chain reaction in uranium had become possible. Einstein’s reported reaction — that he had not thought of that — is documented, as is the German embargo on Czech uranium ore. The wording here is dramatized.',
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
            narration: 'It is August and he has not thought about politics in six weeks. Then the post brings a thick envelope.',
          },
          {
            id: 'letter-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'From the Hungarian. Four paragraphs, and a draft of something addressed to a head of state.',
          },
          {
            id: 'letter-3',
            speaker: 'ALBERT',
            dialogue: 'Read me the four paragraphs.',
          },
          {
            id: 'letter-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'Uranium. He says that when the atom of it is broken, it throws out pieces that break the next one.',
          },
          {
            id: 'letter-5',
            speaker: 'HELEN DUKAS',
            dialogue: 'And those break two more. With enough of it in one place, he says, it does not stop.',
          },
          {
            id: 'letter-6',
            speaker: 'ALBERT',
            dialogue: 'Read the next sentence slowly.',
          },
          {
            id: 'letter-7',
            speaker: 'HELEN DUKAS',
            dialogue: 'Extremely powerful bombs of a new type may be constructed. He has underlined the word may.',
          },
          {
            id: 'window',
            narration: 'He carries the pages to the window and reads them through twice without sitting down again.',
          },
          {
            id: 'window-2',
            speaker: 'ALBERT',
            dialogue: 'I did not think of that. Twenty years of saying nations cannot be trusted, and I did not think of that.',
          },
          {
            id: 'ore',
            speaker: 'HELEN DUKAS',
            dialogue: 'He writes that Germany has stopped selling the ore.',
          },
          {
            id: 'ore-2',
            speaker: 'ALBERT',
            dialogue: 'Then somebody over there has thought of it. Which ends the argument about whether it is possible.',
          },
          {
            id: 'name',
            speaker: 'HELEN DUKAS',
            dialogue: 'The last page says he does not need your physics.',
          },
          {
            id: 'name-2',
            speaker: 'ALBERT',
            dialogue: 'No. He needs the one signature on earth that gets read the day it arrives. He is quite right about that.',
          },
          {
            id: 'sign',
            speaker: 'HELEN DUKAS',
            dialogue: 'There is a blank line at the bottom. Shall I fetch the pen?',
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
          'Leó Szilárd drafted the August 1939 letter to President Roosevelt warning of nuclear chain reactions and sought Einstein’s signature because of the weight his name carried. This variant reaches him by post rather than in person. Helen Dukas was his secretary. Dialogue is dramatized.',
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
            narration: 'The letter has gone. A plain envelope, several careful hands, and then a desk belonging to a head of state.',
          },
          {
            id: 'water-2',
            speaker: 'A NEIGHBOUR',
            dialogue: 'There is no wind at all, Professor.',
          },
          {
            id: 'water-3',
            speaker: 'ALBERT',
            dialogue: 'None whatever. We shall sit here until it decides otherwise. I find I do not mind.',
          },
          {
            id: 'weight',
            narration: 'The sail goes slack. The boat sits still on flat water inside a shoreline of low trees.',
          },
          {
            id: 'weight-2',
            speaker: 'A NEIGHBOUR',
            dialogue: 'You have been quiet since Tuesday.',
          },
          {
            id: 'weight-3',
            speaker: 'ALBERT',
            dialogue: 'I have been counting hands. A thing passes through a great many of them between a signature and a consequence.',
          },
          {
            id: 'weight-4',
            speaker: 'A NEIGHBOUR',
            dialogue: 'I don’t follow you.',
          },
          {
            id: 'weight-5',
            speaker: 'ALBERT',
            dialogue: 'Nor does any of the hands. Not one of them ever feels like the hand that did it.',
          },
          {
            id: 'weight-6',
            narration: 'The water does not move for another hour, and neither does he.',
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
            id: 'read',
            narration: 'Two typed pages, and they say considerably less than the two men at the table know.',
          },
          {
            id: 'read-2',
            speaker: 'SZILÁRD',
            dialogue: 'Read the middle paragraph aloud. Tell me if it is too strong.',
          },
          {
            id: 'read-3',
            speaker: 'ALBERT',
            dialogue: 'Extremely powerful bombs of a new type may be constructed. It is not too strong. It is barely strong enough.',
          },
          {
            id: 'read-4',
            speaker: 'SZILÁRD',
            dialogue: 'Then leave it as it stands.',
          },
          {
            id: 'read-5',
            speaker: 'ALBERT',
            dialogue: 'Put in where the ore comes from. Ministries move for a cargo manifest. They have never once moved for physics.',
          },
          {
            id: 'pen',
            narration: 'He signs it at the foot of the second page. The pen belongs to somebody else and the ink is very blue.',
          },
          {
            id: 'pen-2',
            speaker: 'SZILÁRD',
            dialogue: 'Thank you.',
          },
          {
            id: 'pen-3',
            speaker: 'ALBERT',
            dialogue: 'Do not thank me. My name is the only reason anybody will read it, and we both knew that before lunch.',
          },
          {
            id: 'pen-4',
            speaker: 'SZILÁRD',
            dialogue: 'Yes.',
          },
          {
            id: 'pen-5',
            speaker: 'ALBERT',
            dialogue: 'The alternative was to be right, and silent, and second. I have no appetite for any of the three.',
          },
          {
            id: 'after',
            narration: 'It takes two months to reach the desk it was written for.',
          },
          {
            id: 'after-2',
            narration: 'He will spend the rest of his life explaining, to people who never asked, exactly what he did and did not do that August.',
          },
        ],
        historicalNote:
          'Einstein signed the letter drafted with Szilárd in August 1939; it reached Roosevelt in October. Einstein had no role in the subsequent weapons programme and later described the signature as the one great mistake of his life.',
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
            narration: 'He asks for the night and takes all of it. The letter sits on the porch rail under a beach stone.',
          },
          {
            id: 'night-2',
            speaker: 'SZILÁRD',
            dialogue: 'You were persuaded in the first four minutes. I watched you be persuaded.',
          },
          {
            id: 'night-3',
            speaker: 'ALBERT',
            dialogue: 'I was. That is not the part that is taking the time.',
          },
          {
            id: 'night-4',
            speaker: 'SZILÁRD',
            dialogue: 'What is?',
          },
          {
            id: 'night-5',
            speaker: 'ALBERT',
            dialogue: 'The man who has to live afterwards with having been persuaded in four minutes. He argues more slowly.',
          },
          {
            id: 'dawn',
            narration: 'The tide goes out and comes back and offers no opinion. The coffee goes cold twice.',
          },
          {
            id: 'morning',
            speaker: 'ALBERT',
            dialogue: 'Give me the pen.',
          },
          {
            id: 'morning-2',
            speaker: 'SZILÁRD',
            dialogue: 'You are sure.',
          },
          {
            id: 'morning-3',
            speaker: 'ALBERT',
            dialogue: 'I am sure of nothing. I have finished arguing with myself, which is not the same thing and will have to do.',
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
            narration: 'The warning goes out over his name, because his name is the only instrument available that carries that far.',
          },
          {
            id: 'send-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'Shall I mark it urgent?',
          },
          {
            id: 'send-3',
            speaker: 'ALBERT',
            dialogue: 'It will not help. A letter is urgent when the man who opens it decides that it is.',
          },
          {
            id: 'send-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'It is not really physics, is it.',
          },
          {
            id: 'send-5',
            speaker: 'ALBERT',
            dialogue: 'No. It is the use of a reputation as a tool. I have never done that for anything smaller.',
          },
          {
            id: 'seal',
            narration: 'A plain sealed envelope on the hall table, a hat on its peg, and the front door standing open onto the summer.',
          },
          {
            id: 'seal-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'And now?',
          },
          {
            id: 'seal-3',
            speaker: 'ALBERT',
            dialogue: 'Now I go back to the equations. They have never once asked me to decide anything.',
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
            narration: 'He has been resting at a lake. The housekeeper comes out to the porch to tell him what the radio has just said.',
          },
          {
            id: 'news-2',
            speaker: 'THE HOUSEKEEPER',
            dialogue: 'A city. One aeroplane. One bomb.',
          },
          {
            id: 'news-3',
            speaker: 'ALBERT',
            dialogue: 'How many people?',
          },
          {
            id: 'news-4',
            speaker: 'THE HOUSEKEEPER',
            dialogue: 'They did not say. They said a great many.',
          },
          {
            id: 'word',
            narration: 'He says one word in German. It is short, and it is not an exclamation.',
          },
          {
            id: 'word-2',
            narration: 'It is the sound a man makes when a long arithmetic finally comes out.',
          },
          {
            id: 'word-3',
            speaker: 'THE HOUSEKEEPER',
            dialogue: 'Shall I switch it off?',
          },
          {
            id: 'word-4',
            speaker: 'ALBERT',
            dialogue: 'Leave it on. I should like to hear how they say it the second time.',
          },
          {
            id: 'after',
            narration: 'He sits on the porch for the rest of the afternoon and does not go back inside.',
          },
          {
            id: 'after-2',
            speaker: 'ALBERT',
            dialogue: 'I put my hand to two pages six years ago and I built nothing. Both are true and neither helps today.',
          },
          {
            id: 'after-3',
            speaker: 'ALBERT',
            dialogue: 'From here on it must be governed by everybody or it will be owned by somebody. That is the work I have left.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'einstein.bombNews', value: true },
          { type: 'resources', effects: { wellbeing: -2, exposure: 1 } },
        ],
        historicalNote:
          'Einstein learned of Hiroshima from a radio report while staying at Saranac Lake; his reported one-word reaction is documented and is paraphrased here rather than quoted. He had no part in the weapons programme and afterwards campaigned for international control of atomic energy.',
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
            narration: 'The announcement is read three times in an hour, because the man reading it cannot quite believe his own copy.',
          },
          {
            id: 'news-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'A city. A single device. They keep using the word unprecedented.',
          },
          {
            id: 'news-3',
            speaker: 'ALBERT',
            dialogue: 'For once correctly.',
          },
          {
            id: 'sit',
            narration: 'The curtains are drawn against the heat. The newspaper lies face down on a chair where somebody put it.',
          },
          {
            id: 'sit-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'You warned them. Six years ago, you warned them.',
          },
          {
            id: 'sit-3',
            speaker: 'ALBERT',
            dialogue: 'I did. And the warning was heard. This afternoon is what being heard turned out to mean.',
          },
          {
            id: 'sit-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'That is not fair to you.',
          },
          {
            id: 'sit-5',
            speaker: 'ALBERT',
            dialogue: 'There is nobody in this room I need to defend myself to, and I would rather not begin.',
          },
          {
            id: 'after',
            narration: 'Within a month he is signing appeals again, and this time they are about the thing itself.',
          },
          {
            id: 'after-2',
            speaker: 'ALBERT',
            dialogue: 'It must belong to no single country. The alternative is a world in which every capital is a hostage.',
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
            narration: 'A city. One aircraft. One device. He listens to the announcement all the way through, twice.',
          },
          {
            id: 'news-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'Where are you going?',
          },
          {
            id: 'news-3',
            speaker: 'ALBERT',
            dialogue: 'To the desk. There is a drawer I should very much like to be wrong about.',
          },
          {
            id: 'unsigned',
            narration: 'Two typed pages, six years old, with a blank line at the bottom of the second.',
          },
          {
            id: 'unsigned-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'You never signed it.',
          },
          {
            id: 'unsigned-3',
            speaker: 'ALBERT',
            dialogue: 'I asked for one night. The night became a week, and the week became a habit.',
          },
          {
            id: 'unsigned-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'Then you decided nothing at all.',
          },
          {
            id: 'unsigned-5',
            speaker: 'ALBERT',
            dialogue: 'That is what I have told myself for six years. I understand this afternoon that it is a way of deciding.',
          },
          {
            id: 'after',
            speaker: 'ALBERT',
            dialogue: 'It happened without me. It would have happened without me in any case.',
          },
          {
            id: 'after-2',
            speaker: 'ALBERT',
            dialogue: 'Neither of those is the sentence I keep saying to myself, and I notice that.',
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
            narration: 'It happens without him: a city, a single device, and a long chain of names on documents he never saw.',
          },
          {
            id: 'news-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'Shall I leave the wireless on?',
          },
          {
            id: 'news-3',
            speaker: 'ALBERT',
            dialogue: 'Switch it off. I worked out forty years ago what weight is worth if you turn it into energy.',
          },
          {
            id: 'news-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'And somebody has gone and cashed it.',
          },
          {
            id: 'news-5',
            speaker: 'ALBERT',
            dialogue: 'Somebody has gone and cashed it. In a currency I did not choose and cannot call back in.',
          },
          {
            id: 'clean',
            narration: 'The newspaper lies face down on the chair. The glass of water beside it is not touched all afternoon.',
          },
          {
            id: 'clean-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'You had no hand in it. None at all.',
          },
          {
            id: 'clean-3',
            speaker: 'ALBERT',
            dialogue: 'My hands are clean in the narrow sense a court would use. I had assumed that would be more comfort than it is.',
          },
          {
            id: 'clean-4',
            speaker: 'ALBERT',
            dialogue: 'A man can be innocent of the deed and still be part of the arithmetic.',
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
            narration: 'The cupboard behind the desk holds a bundle for every attempt, tied with string, each with a date on the label.',
          },
          {
            id: 'cupboard-2',
            speaker: 'AN ASSISTANT',
            dialogue: 'And every one of them is wrong.',
          },
          {
            id: 'cupboard-3',
            speaker: 'ALBERT',
            dialogue: 'Every one. I can tell you where each turned wrong. That has never once told me where to turn instead.',
          },
          {
            id: 'close',
            narration: 'This one does not turn. He follows it to the end four times before he allows himself to believe the fourth.',
          },
          {
            id: 'close-2',
            speaker: 'AN ASSISTANT',
            dialogue: 'Say what it means. Plainly. I shall have to repeat it to somebody tomorrow.',
          },
          {
            id: 'close-3',
            speaker: 'ALBERT',
            dialogue: 'Gravity is the shape of space. That has been settled since 1915 and nobody argues with it.',
          },
          {
            id: 'close-4',
            speaker: 'ALBERT',
            dialogue: 'And the pull of a magnet is a different thing entirely, with different rules, kept in a different drawer.',
          },
          {
            id: 'close-5',
            speaker: 'AN ASSISTANT',
            dialogue: 'And now?',
          },
          {
            id: 'close-6',
            speaker: 'ALBERT',
            dialogue: 'Now they come out of one set of symbols. Two drawers, one cupboard. Nothing bolted on, nothing apologised for.',
          },
          {
            id: 'quiet',
            narration: 'He wakes nobody. He makes a fair copy in the neat hand he keeps for things he believes are true.',
          },
          {
            id: 'quiet-2',
            speaker: 'ALBERT',
            dialogue: 'There is a very great deal of string in that cupboard.',
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
            narration: 'An approach a year since the twenties, tied with string and dated and put in the cupboard when it turned wrong.',
          },
          {
            id: 'close-2',
            speaker: 'AN ASSISTANT',
            dialogue: 'And this one does not turn.',
          },
          {
            id: 'close-3',
            speaker: 'ALBERT',
            dialogue: 'This one does not turn. Gravity and the magnet in one set of symbols, with nothing bolted on.',
          },
          {
            id: 'early',
            speaker: 'AN ASSISTANT',
            dialogue: 'Then why do you look like that?',
          },
          {
            id: 'early-2',
            speaker: 'ALBERT',
            dialogue: 'Because it came easily. Things that arrive easily have usually arrived wrong.',
          },
          {
            id: 'early-3',
            speaker: 'AN ASSISTANT',
            dialogue: 'So you are going to try to break it.',
          },
          {
            id: 'early-4',
            speaker: 'ALBERT',
            dialogue: 'For two years. It is the only honest way I know of celebrating anything.',
          },
          {
            id: 'quiet',
            narration: 'For tonight, though, he makes a fair copy in the neat hand he keeps for things he believes are true.',
          },
          {
            id: 'quiet-2',
            narration: 'He sits with it until the window is fully light.',
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
            narration: 'Gravity and the magnet, written in one set of symbols, with nothing bolted on and nothing apologised for.',
          },
          {
            id: 'close-2',
            speaker: 'AN ASSISTANT',
            dialogue: 'It has taken your whole working life.',
          },
          {
            id: 'close-3',
            speaker: 'ALBERT',
            dialogue: 'My working life, and most of my reputation among people whose opinion I pretend not to value.',
          },
          {
            id: 'audience',
            narration: 'He is old. The young men are busy computing quantities he does not believe are fundamental.',
          },
          {
            id: 'audience-2',
            speaker: 'AN ASSISTANT',
            dialogue: 'They will not read it.',
          },
          {
            id: 'audience-3',
            speaker: 'ALBERT',
            dialogue: 'Not for ten years. Possibly not at all. That is a separate question from whether it is true.',
          },
          {
            id: 'audience-4',
            speaker: 'AN ASSISTANT',
            dialogue: 'Does that not spoil it?',
          },
          {
            id: 'audience-5',
            speaker: 'ALBERT',
            dialogue: 'Nothing spoils it. Fetch me the good pen. This one gets a fair copy.',
          },
          {
            id: 'quiet',
            narration: 'He writes it out in the neat hand he keeps for true things, and sits with it until the room is fully light.',
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
            narration: 'The cupboard holds a bundle for every approach, tied with string and dated. Some of them are beautiful.',
          },
          {
            id: 'bundles-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'May I ask you something, and only once?',
          },
          {
            id: 'bundles-3',
            speaker: 'ALBERT',
            dialogue: 'Once is the correct number. Ask it.',
          },
          {
            id: 'why',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Why do you keep at a thing that everybody else has given up on?',
          },
          {
            id: 'why-2',
            speaker: 'ALBERT',
            dialogue: 'Because somebody must work on the problem that will not come out.',
          },
          {
            id: 'why-3',
            speaker: 'ALBERT',
            dialogue: 'And I can afford it. My reputation is already made and there is nothing better to spend it on.',
          },
          {
            id: 'why-4',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And if it never comes out?',
          },
          {
            id: 'why-5',
            speaker: 'ALBERT',
            dialogue: 'Then the cupboard is full, and somebody knows thirty places not to look. That is not nothing.',
          },
          {
            id: 'chalk',
            narration: 'He rubs the blackboard down with the side of his hand and starts again.',
          },
          {
            id: 'chalk-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'You have the same face every time you do that.',
          },
          {
            id: 'chalk-3',
            speaker: 'ALBERT',
            dialogue: 'I have been starting again since before you were born. One develops an expression for it.',
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
            narration: 'There is always a line on the blackboard that stops halfway across. He leaves it there overnight on purpose.',
          },
          {
            id: 'evening-2',
            speaker: 'THE CLEANER',
            dialogue: 'Shall I wipe that off, Professor?',
          },
          {
            id: 'evening-3',
            speaker: 'ALBERT',
            dialogue: 'Never that one. If it goes, I arrive in the morning at the beginning of something.',
          },
          {
            id: 'evening-4',
            speaker: 'THE CLEANER',
            dialogue: 'And if it stays?',
          },
          {
            id: 'evening-5',
            speaker: 'ALBERT',
            dialogue: 'Then I arrive in the middle, which is a far better place to be met.',
          },
          {
            id: 'peace',
            narration: 'Most days the middle is where he stays.',
          },
          {
            id: 'peace-2',
            speaker: 'ALBERT',
            dialogue: 'I have made my peace with it. The way a man makes peace with a country he intends to go on quarrelling with.',
          },
          {
            id: 'peace-3',
            narration: 'The coat comes off the hook, the chalk goes back in the tray, and the line stays where it is.',
          },
        ],
        historicalNote:
          'Einstein worked on unification until the end of his life without completing it. The cleaner stands in for people whose names are not recorded, and the scene is dramatized.',
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
            narration: 'There is work beside the bed at the end, because there has been work beside the bed for sixty years.',
          },
          {
            id: 'work-2',
            speaker: 'MARGOT',
            dialogue: 'The last page is not finished.',
          },
          {
            id: 'work-3',
            speaker: 'ALBERT',
            dialogue: 'No. It was never going to be. That is not a thing to be sad about.',
          },
          {
            id: 'refuse',
            narration: 'The surgeons come and put the case for an operation, carefully, twice.',
          },
          {
            id: 'refuse-2',
            speaker: 'ALBERT',
            dialogue: 'I have done my share.',
          },
          {
            id: 'refuse-3',
            speaker: 'MARGOT',
            dialogue: 'They say it would buy you time.',
          },
          {
            id: 'refuse-4',
            speaker: 'ALBERT',
            dialogue: 'It is tasteless to prolong a life artificially. I should like to go elegantly.',
          },
          {
            id: 'refuse-5',
            narration: 'The elegance is debatable. The timing is his own.',
          },
          {
            id: 'ask',
            speaker: 'MARGOT',
            dialogue: 'Is there anything you want?',
          },
          {
            id: 'ask-2',
            speaker: 'ALBERT',
            dialogue: 'The glasses. The page. And the light left on a little.',
          },
        ],
        historicalNote:
          'Einstein declined surgery in his final illness in 1955, saying he had done his share and wanted to go on his own terms, and was working to the end. His stepdaughter Margot was with him. The wording here is dramatized.',
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
            narration: 'Somebody squares the papers into stacks and is careful with them. That is what happens to a life’s work in the first week.',
          },
          {
            id: 'stack-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'The finished ones go on the left.',
          },
          {
            id: 'stack-3',
            speaker: 'ALBERT',
            dialogue: 'And the rest into a box with a year written on the lid.',
          },
          {
            id: 'stack-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'It is a very large box.',
          },
          {
            id: 'stack-5',
            speaker: 'ALBERT',
            dialogue: 'It is the ordinary size. Only the eulogies pretend otherwise.',
          },
          {
            id: 'sum',
            narration: 'The violin case is closed. The pipe is on the shelf. The window stands open onto a lawn.',
          },
          {
            id: 'sum-2',
            speaker: 'HELEN DUKAS',
            dialogue: 'You did a great deal of it.',
          },
          {
            id: 'sum-3',
            speaker: 'ALBERT',
            dialogue: 'Some of it. Not all of it. I have yet to meet the man who did all of it.',
          },
        ],
        historicalNote:
          'A closing for a life that achieved part of the documented body of work. Helen Dukas was Einstein’s secretary from 1928 until his death.',
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
            narration: 'He was given about the usual number of years and spent them on the one question.',
          },
          {
            id: 'ordinary-2',
            speaker: 'MARGOT',
            dialogue: 'And it was never answered.',
          },
          {
            id: 'ordinary-3',
            speaker: 'ALBERT',
            dialogue: 'It was never answered. It was a good question. Those are rarer than answers and worth more.',
          },
          {
            id: 'porch',
            narration: 'An empty chair on the porch, a blanket folded over the arm, evening light coming through the elms.',
          },
          {
            id: 'compass',
            speaker: 'MARGOT',
            dialogue: 'There is a compass in the drawer with a dent in the case.',
          },
          {
            id: 'compass-2',
            speaker: 'ALBERT',
            dialogue: 'My father gave me that when I was five and ill in bed.',
          },
          {
            id: 'compass-3',
            speaker: 'MARGOT',
            dialogue: 'You never talk about it.',
          },
          {
            id: 'compass-4',
            speaker: 'ALBERT',
            dialogue: 'There is nothing to say. A needle that would not turn when I did. I have been at that bedside ever since.',
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
            id: 'office',
            narration: 'The office stays as it was for a while. Nobody wants to be the one to rub the blackboard down.',
          },
          {
            id: 'office-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Somebody ought to write down what he did. In order.',
          },
          {
            id: 'office-3',
            speaker: 'A COLLEAGUE',
            dialogue: 'Space bends. Time is local. Light comes in countable pieces. Atoms leave footprints.',
          },
          {
            id: 'office-4',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And the last one?',
          },
          {
            id: 'office-5',
            speaker: 'A COLLEAGUE',
            dialogue: 'The two great fields turned out to be one field, seen from two sides. He got that at the very end.',
          },
          {
            id: 'office-6',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Every one of those was a scandal when he wrote it.',
          },
          {
            id: 'cost',
            narration: 'It cost a marriage, a country, most of his health, and every evening of his adult life.',
          },
          {
            id: 'voice',
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
            id: 'office',
            narration: 'The office is as he left it. One line of chalk stops halfway across the blackboard.',
          },
          {
            id: 'office-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Do we rub it out?',
          },
          {
            id: 'office-3',
            speaker: 'A COLLEAGUE',
            dialogue: 'Not this week.',
          },
          {
            id: 'office-4',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Space bends. Time is local. Light in countable pieces. Atoms with footprints. All of it in a schoolbook now.',
          },
          {
            id: 'office-5',
            speaker: 'A COLLEAGUE',
            dialogue: 'And thirty years at the end on a problem that would not come out.',
          },
          {
            id: 'office-6',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'That seems a hard price.',
          },
          {
            id: 'cost',
            narration: 'A marriage, a country, most of his health, and every evening of his adult life.',
          },
          {
            id: 'voice',
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
            narration: 'A shelf of bound offprints in a row, and one conspicuous gap where something taller should be standing.',
          },
          {
            id: 'shelf-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Light in pieces. Atoms with footprints. Time made local. Anybody would be glad of that spine.',
          },
          {
            id: 'shelf-3',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And the gap?',
          },
          {
            id: 'shelf-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'Gravity. He knew the shape of what belonged there for forty years.',
          },
          {
            id: 'voice',
            speaker: 'ALBERT',
            dialogue: 'I could see it. I could never make it stand up.',
          },
          {
            id: 'voice-2',
            speaker: 'ALBERT',
            dialogue: 'Those are not the same skill, and I was only ever given the first one.',
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
            narration: 'A clear night over the rooftops of a small town. Bare elms, frost on the path, one lit upstairs window.',
          },
          {
            id: 'what-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'He took gravity away from Newton and handed it back as geometry.',
          },
          {
            id: 'what-3',
            speaker: 'A COLLEAGUE',
            dialogue: 'And then spent forty years failing to do the same for everything else. The same man, both halves.',
          },
          {
            id: 'legacy',
            narration: 'Somewhere tonight starlight goes past a sun and arrives very slightly late.',
          },
          {
            id: 'legacy-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'How late?',
          },
          {
            id: 'legacy-3',
            speaker: 'A COLLEAGUE',
            dialogue: 'Less than the width of a hair, held out at arm’s length. He gave the number before anybody looked.',
          },
          {
            id: 'voice',
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
            narration: 'A plain wooden drawer standing open and empty. A brass handle worn bright, and an old ink stain in the grain.',
          },
          {
            id: 'drawer-2',
            speaker: 'THE CLERK',
            dialogue: 'That was his desk. Technical expert, third class.',
          },
          {
            id: 'drawer-3',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And he wrote them here?',
          },
          {
            id: 'drawer-4',
            speaker: 'THE CLERK',
            dialogue: 'In the evenings. No laboratory, no assistant, and no institution that would have him.',
          },
          {
            id: 'drawer-5',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'That is a charming detail.',
          },
          {
            id: 'drawer-6',
            speaker: 'THE CLERK',
            dialogue: 'It is not a detail. It is the whole argument.',
          },
          {
            id: 'voice',
            speaker: 'ALBERT',
            dialogue: 'I was never any good at obeying. It turned out to be the only qualification the work required.',
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
            narration: 'A desk stacked with signed appeals, a fountain pen, reading glasses, a lamp, and a window going dark.',
          },
          {
            id: 'lists-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Twice in his life a page went round with names on it.',
          },
          {
            id: 'lists-3',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And twice he ended up on the shorter list.',
          },
          {
            id: 'lists-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'He read the names before he read the argument. Both times.',
          },
          {
            id: 'voice',
            speaker: 'ALBERT',
            dialogue: 'The equations were the easy part. Equations never ask you to be brave in a corridor.',
          },
          {
            id: 'voice-2',
            speaker: 'ALBERT',
            dialogue: 'A man may be forgiven for having been wrong. Having been convenient is harder to explain afterwards.',
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
            narration: 'Not everything he began was finished, and some of it was never written down at all.',
          },
          {
            id: 'life-2',
            speaker: 'MARGOT',
            dialogue: 'This was in the drawer.',
          },
          {
            id: 'life-3',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Is it worth anything?',
          },
          {
            id: 'life-4',
            speaker: 'MARGOT',
            dialogue: 'It is a toy his father gave him when he was five and ill in bed. He never made more of it than that.',
          },
          {
            id: 'compass',
            narration: 'The needle swings, and settles, and points where it has always pointed. Nothing is touching it.',
          },
          {
            id: 'voice',
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
