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
              'Ulm, March. The snow in the gutters has gone grey. A cart goes past under the window with a load of copper wire.',
          },
          {
            id: 'head',
            speaker: 'PAULINE',
            dialogue: 'Hermann. Look at the shape of his head.',
          },
          {
            id: 'head-2',
            speaker: 'HERMANN',
            dialogue: 'It’s a head. He’ll grow into it.',
          },
          {
            id: 'finished',
            speaker: 'HERMANN',
            dialogue: 'They say there’s nothing left in physics. A few decimals, then it’s all wire and prices.',
          },
          {
            id: 'munich',
            narration:
              'They move to Munich before the year’s out. Hermann and his brother Jakob take a workshop and wind wire onto iron.',
          },
          {
            id: 'silent',
            narration: 'Two years on, the boy still hasn’t said a word. Not one that anybody has caught.',
          },
          {
            id: 'silent-2',
            speaker: 'PAULINE',
            dialogue: 'Say something. Anything. Say my name. Say spoon.',
          },
          {
            id: 'silent-3',
            speaker: 'HERMANN',
            dialogue: 'Leave him. He’ll talk when he’s got something to say.',
          },
          {
            id: 'soup',
            narration: 'It comes months later, at supper. He puts his spoon down.',
          },
          {
            id: 'soup-2',
            speaker: 'ALBERT',
            dialogue: 'The soup is too hot.',
          },
          {
            id: 'soup-3',
            speaker: 'PAULINE',
            dialogue: 'He can talk. Albert — why haven’t you said anything before?',
          },
          {
            id: 'soup-4',
            speaker: 'ALBERT',
            dialogue: 'Everything was fine before.',
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
              'He’s five and ill in bed. His father sits on the edge of it and puts something small and brass in his hand.',
          },
          {
            id: 'flat',
            speaker: 'HERMANN',
            dialogue: 'Hold it flat. Let it settle.',
          },
          {
            id: 'wobble',
            speaker: 'ALBERT',
            dialogue: 'It’s a needle. It wobbles, then it stops.',
          },
          {
            id: 'turn',
            speaker: 'HERMANN',
            dialogue: 'Good. Now turn yourself round.',
          },
          {
            id: 'turning',
            narration: 'He turns, quilt and all, until the window is where the door was.',
          },
          {
            id: 'didnt',
            speaker: 'ALBERT',
            dialogue: 'The needle didn’t turn.',
          },
          {
            id: 'no',
            speaker: 'HERMANN',
            dialogue: 'No. It never does.',
          },
          {
            id: 'why',
            speaker: 'ALBERT',
            dialogue: 'But I turned. Why didn’t it?',
          },
          {
            id: 'pulling',
            speaker: 'HERMANN',
            dialogue: 'Something’s pulling on it. It’s been pulling the whole time.',
          },
          {
            id: 'where',
            speaker: 'ALBERT',
            dialogue: 'Pulling from where?',
          },
          {
            id: 'earth',
            speaker: 'HERMANN',
            dialogue: 'The earth. It’s a big magnet, they say, and the needle’s a little one.',
          },
          {
            id: 'touching',
            speaker: 'ALBERT',
            dialogue: 'But it isn’t touching the needle. The earth’s all the way down there.',
          },
          {
            id: 'again',
            narration: 'He turns the case again, slowly, watching the needle refuse him.',
          },
          {
            id: 'room',
            speaker: 'HERMANN',
            dialogue: 'It doesn’t have to touch it. That’s the strange part.',
          },
          {
            id: 'sleep',
            speaker: 'ALBERT',
            dialogue: 'So something’s reaching up through the floor, right now, holding it?',
          },
          {
            id: 'cant',
            speaker: 'HERMANN',
            dialogue: 'Right now. All the time. Everywhere. Go to sleep.',
          },
          {
            id: 'workshop',
            narration:
              'Downstairs the workshop smells of hot varnish and brass filings. Uncle Jakob winds wire onto iron for street lamps.',
          },
          {
            id: 'hunt',
            speaker: 'JAKOB',
            dialogue: 'You’re always after something. Give it a name before you start. Call it x.',
          },
          {
            id: 'hunt-2',
            speaker: 'JAKOB',
            dialogue: 'Then you push it round the page until it tells you what it is.',
          },
          {
            id: 'hunt-3',
            speaker: 'ALBERT',
            dialogue: 'And if it doesn’t tell me?',
          },
          {
            id: 'hunt-4',
            speaker: 'JAKOB',
            dialogue: 'Then you asked it wrong. Start again. Wind this.',
          },
          {
            id: 'school',
            narration: 'At the Gymnasium the lessons are recited in unison and corrected with a stick.',
          },
          {
            id: 'school-2',
            speaker: 'THE TEACHER',
            dialogue: 'Einstein. We’re on page forty.',
          },
          {
            id: 'school-3',
            speaker: 'ALBERT',
            dialogue: 'I’ve finished the book.',
          },
          {
            id: 'school-5',
            speaker: 'ALBERT',
            dialogue: 'Two weeks ago. It was interesting, so I kept going.',
          },
          {
            id: 'school-6',
            speaker: 'THE TEACHER',
            dialogue: 'You sit there and the rest of them stop listening to me. Sit down and recite.',
          },
          {
            id: 'contracts',
            narration: 'Then the lighting contracts go to a bigger firm. The workshop is sold in the spring.',
          },
          {
            id: 'alps',
            speaker: 'HERMANN',
            dialogue: 'We’re going over the Alps. There’s work in Italy or there’s work nowhere.',
          },
          {
            id: 'stay',
            speaker: 'HERMANN',
            dialogue: 'You’ll stay and finish the certificate. There’s a lodging house past the park.',
          },
          {
            id: 'maja',
            speaker: 'MAJA',
            dialogue: 'It’s got one window and the window faces a wall. I went and looked.',
          },
          {
            id: 'choice',
            speaker: 'THE LANDLADY',
            dialogue: 'Rent’s on Fridays. The window doesn’t open. Three years on your own — what’ll you do?',
            choices: [
              {
                id: 'leave',
                label: 'Leave. Go after them over the Alps.',
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
                label: 'Stay, and spend every evening with the dynamos.',
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
            dialogue: 'You’re supposed to be in Munich.',
          },
          {
            id: 'note',
            speaker: 'ALBERT',
            dialogue: 'I got a note from a doctor. My nerves need rest.',
          },
          {
            id: 'note-2',
            speaker: 'ALBERT',
            dialogue: 'And one from the maths master saying I’m fine otherwise. I showed them separately.',
          },
          {
            id: 'kitchen',
            narration:
              'The new works are already in trouble. His father does the arithmetic twice at the kitchen table.',
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
            dialogue: 'Engineers eat. Do the thinking after supper.',
          },
          {
            id: 'consulate',
            narration: 'That winter he signs a paper at a consulate and stops being German.',
          },
          {
            id: 'what',
            speaker: 'MAJA',
            dialogue: 'So what are you now?',
          },
          {
            id: 'nothing',
            speaker: 'ALBERT',
            dialogue: 'Nothing. It’s restful.',
          },
          {
            id: 'mama',
            speaker: 'MAJA',
            dialogue: 'Mama will cry.',
          },
          {
            id: 'mama-2',
            speaker: 'ALBERT',
            dialogue: 'She’ll cry, then she’ll ask what it cost. It wasn’t much.',
          },
          {
            id: 'clerks',
            speaker: 'MAJA',
            dialogue: 'And every clerk in Europe will look at you twice.',
          },
          {
            id: 'clerks-2',
            speaker: 'ALBERT',
            dialogue: 'They already do. Now they’ll have a reason.',
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
            narration: 'The lodging house keeps his room. The letters keep coming with Italian stamps on them.',
          },
          {
            id: 'eating',
            speaker: 'MAJA',
            dialogue: 'Mama wants to know if you’re eating.',
          },
          {
            id: 'eating-2',
            speaker: 'MAJA',
            dialogue: 'I told her you were reading. She didn’t think that was funny.',
          },
          {
            id: 'reply',
            narration: 'He answers about one letter in three, and the ones he answers keep circling back to the needle.',
          },
          {
            id: 'ask',
            speaker: 'ALBERT',
            dialogue: 'Ask Papa this for me. If nothing touches the needle, what’s in between?',
          },
          {
            id: 'ask-2',
            speaker: 'MAJA',
            dialogue: 'Papa says wire, if you’re lucky. Papa says come south.',
          },
          {
            id: 'south',
            speaker: 'ALBERT',
            dialogue: 'Tell them I’m finishing it. Tell them the room’s fine.',
          },
          {
            id: 'timetable',
            narration:
              'He doesn’t go south. He learns the timetable of the trains that do, which is not the same thing.',
          },
          {
            id: 'bricks',
            speaker: 'ALBERT',
            dialogue: 'The room isn’t fine. I’ve counted the bricks in the wall opposite. Twice.',
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
              'He failed the entrance exam once — everything except maths and physics — and was sent here to fill in the rest.',
          },
          {
            id: 'wall',
            speaker: 'THE TEACHER',
            dialogue: 'You’ve been on that wall an hour, Einstein. What are you doing?',
          },
          {
            id: 'running',
            speaker: 'ALBERT',
            dialogue: 'Running.',
          },
          {
            id: 'sitting',
            speaker: 'THE TEACHER',
            dialogue: 'You’re sitting down.',
          },
          {
            id: 'beam',
            speaker: 'ALBERT',
            dialogue: 'In my head I’m running next to a beam of light. Keeping up with it exactly.',
          },
          {
            id: 'follow',
            speaker: 'THE TEACHER',
            dialogue: 'I don’t follow.',
          },
          {
            id: 'pond',
            speaker: 'ALBERT',
            dialogue: 'Throw a stone in the pond behind the church. What do you get?',
          },
          {
            id: 'rings',
            speaker: 'THE TEACHER',
            dialogue: 'Rings. Spreading out.',
          },
          {
            id: 'bank',
            speaker: 'ALBERT',
            dialogue: 'Now walk along the bank beside one ring, at its own speed. What do you see?',
          },
          {
            id: 'still',
            speaker: 'THE TEACHER',
            dialogue: 'Not much. A ridge of water sitting there, doing nothing.',
          },
          {
            id: 'lamp',
            speaker: 'ALBERT',
            dialogue: 'Light does the same thing. A lamp throws rings out across the room.',
          },
          {
            id: 'frozen',
            speaker: 'ALBERT',
            dialogue: 'So if I ran beside one at its own speed, I’d see light standing still.',
          },
          {
            id: 'never',
            speaker: 'ALBERT',
            dialogue: 'Nobody’s ever seen that. Not in any workshop anywhere.',
          },
          {
            id: 'faster',
            speaker: 'THE TEACHER',
            dialogue: 'Maybe nobody’s run fast enough.',
          },
          {
            id: 'rules',
            speaker: 'ALBERT',
            dialogue: 'That’s the trouble. The rules won’t let it. Light leaves you at the same speed however fast you run.',
          },
          {
            id: 'rain',
            speaker: 'THE TEACHER',
            dialogue: 'Nonsense. Run through rain and the rain hits you harder.',
          },
          {
            id: 'rain-2',
            speaker: 'ALBERT',
            dialogue: 'Yes. Rain behaves. Light doesn’t. That’s what I’ve been stuck on all afternoon.',
          },
          {
            id: 'one',
            speaker: 'THE TEACHER',
            dialogue: 'Then one of them’s wrong. The light, or the running.',
          },
          {
            id: 'light',
            speaker: 'ALBERT',
            dialogue: 'The light isn’t wrong. So it’s the running. I don’t know what that means yet.',
          },
          {
            id: 'write',
            speaker: 'THE TEACHER',
            dialogue: 'Nor do I. Write it down anyway.',
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
            narration: 'The Aarau certificate is one folded sheet. It’s worth more than everything else he owns.',
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
            dialogue: 'That’s not something a man’s allowed to be.',
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
            dialogue: 'You’ll be the youngest in the section. Every year, for four years.',
          },
          {
            id: 'age-4',
            speaker: 'ALBERT',
            dialogue: 'I’ll be unbearable about it.',
          },
          {
            id: 'gate',
            narration: 'At the gate he stops. Trams grind past on the wet rails. Nobody’s watching him arrive.',
          },
          {
            id: 'good',
            speaker: 'ALBERT',
            dialogue: 'Nobody here knows who my father was. I don’t mind that at all.',
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
              'He finishes it out in the room that faces a wall. What he takes out of Munich fits in a case and a notebook.',
          },
          {
            id: 'porter',
            speaker: 'THE PORTER',
            dialogue: 'Is that everything?',
          },
          {
            id: 'porter-2',
            speaker: 'ALBERT',
            dialogue: 'The case is shirts. The notebook’s the heavy one.',
          },
          {
            id: 'porter-3',
            speaker: 'THE PORTER',
            dialogue: 'Books?',
          },
          {
            id: 'porter-4',
            speaker: 'ALBERT',
            dialogue: 'One question. I’ve had it since I was five.',
          },
          {
            id: 'porter-5',
            speaker: 'THE PORTER',
            dialogue: 'Must be a good one.',
          },
          {
            id: 'porter-6',
            speaker: 'ALBERT',
            dialogue: 'It’s about light. Ask me again in ten years.',
          },
          {
            id: 'ahead',
            narration: 'Ahead of him is a country that doesn’t care who his father was.',
          },
          {
            id: 'exams',
            speaker: 'ALBERT',
            dialogue: 'And a lot of examinations I don’t intend to take seriously.',
          },
          {
            id: 'late',
            speaker: 'THE PORTER',
            dialogue: 'Train’s late anyway.',
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
            narration: 'Zürich smells of lake water, coal smoke and cheap coffee. The benches are full by eight.',
          },
          {
            id: 'weber',
            speaker: 'PROFESSOR WEBER',
            dialogue: 'We begin where we always begin. With the foundations.',
          },
          {
            id: 'foundations',
            narration: 'The lectures are excellent and they stop at about 1890, which is where the interesting part starts.',
          },
          {
            id: 'ask',
            speaker: 'ALBERT',
            dialogue: 'Herr Professor. When do we get to the last ten years?',
          },
          {
            id: 'ask-2',
            speaker: 'PROFESSOR WEBER',
            dialogue: 'When you’ve earned the right to be bored by them. Sit down.',
          },
          {
            id: 'maxwell',
            speaker: 'ALBERT',
            dialogue: 'He hasn’t said Maxwell once. Not once in a month.',
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
            dialogue: 'Sit where you like. Come or don’t. I write it all down either way.',
          },
          {
            id: 'notes-3',
            speaker: 'ALBERT',
            dialogue: 'Why?',
          },
          {
            id: 'notes-4',
            speaker: 'GROSSMANN',
            dialogue: 'I’m told my handwriting’s my best feature. Seems a shame to waste it.',
          },
          {
            id: 'mileva',
            narration: 'There is one woman in the section. She has read the new papers and disagrees with him about all of them.',
          },
          {
            id: 'mileva-2',
            speaker: 'MILEVA',
            dialogue: 'You’ve read that badly.',
          },
          {
            id: 'mileva-3',
            speaker: 'ALBERT',
            dialogue: 'I’ve read it twice.',
          },
          {
            id: 'mileva-4',
            speaker: 'MILEVA',
            dialogue: 'Then you’ve read it badly twice. Come and argue about it. I’ve got coffee.',
          },
          {
            id: 'arithmetic',
            narration: 'Four years, then a teaching diploma, then — if a professor likes you — an assistantship.',
          },
          {
            id: 'choice',
            speaker: 'GROSSMANN',
            dialogue: 'Everyone here can do that arithmetic. The question’s what you do with the four years.',
            choices: [
              {
                id: 'reading',
                label: 'Skip the lectures. Read Maxwell and Boltzmann on your own.',
                effects: [
                  { type: 'flag', flag: 'einstein.selfTaught', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'lectures',
                label: 'Go to everything. Make yourself useful to the professors.',
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
            dialogue: 'I went to every lecture. That you missed them is separate, and I’ve never mentioned it.',
          },
          {
            id: 'every-3',
            speaker: 'ALBERT',
            dialogue: 'You just did.',
          },
          {
            id: 'every-4',
            speaker: 'GROSSMANN',
            dialogue: 'I said it was separate. I didn’t say I’d forgotten.',
          },
          {
            id: 'argue',
            speaker: 'ALBERT',
            dialogue: 'A physicist needs maths that works. Not maths that’s new.',
          },
          {
            id: 'argue-2',
            speaker: 'GROSSMANN',
            dialogue: 'You only say that because the new kind is hard.',
          },
          {
            id: 'argue-3',
            speaker: 'ALBERT',
            dialogue: 'I say it because I don’t think nature needs it.',
          },
          {
            id: 'winning',
            narration: 'Grossmann is winning, which he does by never raising his voice.',
          },
          {
            id: 'pass',
            speaker: 'GROSSMANN',
            dialogue: 'You’ll pass because I write neatly. After that you’re on your own.',
          },
          {
            id: 'pass-2',
            speaker: 'ALBERT',
            dialogue: 'And what do you think I’ll do?',
          },
          {
            id: 'pass-3',
            speaker: 'GROSSMANN',
            dialogue: 'Something odd. I’d bet money on it if I had any.',
          },
          {
            id: 'future',
            speaker: 'ALBERT',
            dialogue: 'If I ever need maths I’ve never heard of, I’ll write to you.',
          },
          {
            id: 'future-2',
            speaker: 'GROSSMANN',
            dialogue: 'Do. I’ll keep an eye on the post.',
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
            narration: 'The parcel comes wrapped in brown paper, tied with a length of string too good to throw away.',
          },
          {
            id: 'inside',
            narration: 'Inside: four months of lectures, copied out in that impossible even handwriting.',
          },
          {
            id: 'note',
            speaker: 'GROSSMANN',
            dialogue: 'You don’t owe me anything.',
          },
          {
            id: 'note-2',
            speaker: 'ALBERT',
            dialogue: 'That’s the worst kind of debt there is, and he knows it.',
          },
          {
            id: 'reply',
            narration: 'He writes back the same evening. Three pages, none of them about the lectures.',
          },
          {
            id: 'reply-2',
            speaker: 'ALBERT',
            dialogue: 'I’ve got a question about light and nobody here will sit still for it.',
          },
          {
            id: 'reply-3',
            speaker: 'ALBERT',
            dialogue: 'You always sat still for it. Even when you thought I was wrong.',
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
            narration: 'The stove is out. The calculation hasn’t moved in nine days.',
          },
          {
            id: 'stuck-2',
            speaker: 'ALBERT',
            dialogue: 'Nine days. Same wrong answer every night, only tidier.',
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
            dialogue: 'It’s one in the morning.',
          },
          {
            id: 'door-3',
            speaker: 'ALBERT',
            dialogue: 'Is it? Sorry. I’ll stop.',
          },
          {
            id: 'door-4',
            speaker: 'THE LANDLADY',
            dialogue: 'It’s a lovely noise and it’s one in the morning.',
          },
          {
            id: 'knot',
            speaker: 'ALBERT',
            dialogue: 'Can I ask you something? When you can’t undo a knot, what do you do?',
          },
          {
            id: 'knot-2',
            speaker: 'THE LANDLADY',
            dialogue: 'Put it down. Go to bed. It’s looser in the morning.',
          },
          {
            id: 'knot-3',
            speaker: 'ALBERT',
            dialogue: 'That’s exactly what this is. Only I can’t sleep, so I play instead.',
          },
          {
            id: 'knot-4',
            speaker: 'THE LANDLADY',
            dialogue: 'Then play it quieter.',
          },
          {
            id: 'quieter',
            narration:
              'He plays quieter. Mozart solves nothing, but the problem shifts, the way a room shifts when somebody moves a chair.',
          },
          {
            id: 'line',
            narration: 'Some time before dawn he writes down a line that isn’t wrong.',
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
            dialogue: 'Thursday. Bring the fiddle. Don’t bring the physics.',
          },
          {
            id: 'bring-2',
            speaker: 'ALBERT',
            dialogue: 'I can’t always tell them apart.',
          },
          {
            id: 'unstoppable',
            narration: 'He isn’t a good violinist. He’s an unstoppable one.',
          },
          {
            id: 'ahead',
            speaker: 'THE NEIGHBOUR',
            dialogue: 'You’re ahead again. You’re always ahead.',
          },
          {
            id: 'ahead-2',
            speaker: 'ALBERT',
            dialogue: 'Sorry. I keep hearing where it’s going.',
          },
          {
            id: 'stairs',
            narration: 'Afterwards, on the stairs, the thing that wouldn’t come apart all week has quietly come apart.',
          },
          {
            id: 'again',
            speaker: 'THE NEIGHBOUR',
            dialogue: 'Same time next week?',
          },
          {
            id: 'again-2',
            speaker: 'ALBERT',
            dialogue: 'Yes. And don’t tell anyone this is how I work.',
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
            dialogue: 'He told me once I was clever and wouldn’t be told anything.',
          },
          {
            id: 'classmate-3',
            speaker: 'A CLASSMATE',
            dialogue: 'Was he wrong?',
          },
          {
            id: 'classmate-4',
            speaker: 'ALBERT',
            dialogue: 'No. That’s what stings.',
          },
          {
            id: 'letters',
            narration: 'He writes to professors in three countries. Politely, then less politely, then politely again.',
          },
          {
            id: 'letters-3',
            speaker: 'ALBERT',
            dialogue: 'If you skip the lectures you can’t be shocked when the lecturers skip you.',
          },
          {
            id: 'letters-4',
            speaker: 'A CLASSMATE',
            dialogue: 'Does saying that help?',
          },
          {
            id: 'letters-5',
            speaker: 'ALBERT',
            dialogue: 'Not as much as I’d like.',
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
            dialogue: 'The handwriting I passed on wasn’t mine.',
          },
          {
            id: 'passed-3',
            speaker: 'GROSSMANN',
            dialogue: 'No.',
          },
          {
            id: 'passed-4',
            speaker: 'ALBERT',
            dialogue: 'I’d like that said out loud. In front of people.',
          },
          {
            id: 'passed-5',
            speaker: 'GROSSMANN',
            dialogue: 'It’s said. Sit down.',
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
            dialogue: 'And one of us is too polite to bring that up tonight.',
          },
          {
            id: 'post-4',
            speaker: 'ALBERT',
            dialogue: 'You just brought it up.',
          },
          {
            id: 'post-5',
            speaker: 'GROSSMANN',
            dialogue: 'I brought up not bringing it up. Different thing.',
          },
          {
            id: 'end',
            speaker: 'ALBERT',
            dialogue: 'Whatever happens next, I’m not going to be quietly grateful.',
          },
          {
            id: 'end-2',
            speaker: 'GROSSMANN',
            dialogue: 'I’d be disappointed in you if you were.',
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
            dialogue: 'Four years, and that’s all of it?',
          },
          {
            id: 'pack-3',
            speaker: 'ALBERT',
            dialogue: 'One case and one notebook.',
          },
          {
            id: 'pack-4',
            speaker: 'THE LANDLADY',
            dialogue: 'Which one’s the heavy one?',
          },
          {
            id: 'pack-5',
            speaker: 'ALBERT',
            dialogue: 'The notebook. It always is.',
          },
          {
            id: 'letter',
            narration: 'On the bare table there’s one letter, written, folded, and not yet posted.',
          },
          {
            id: 'wait',
            speaker: 'THE LANDLADY',
            dialogue: 'And now?',
          },
          {
            id: 'wait-2',
            speaker: 'ALBERT',
            dialogue: 'Now it all waits on somebody else answering a letter.',
          },
          {
            id: 'wait-3',
            speaker: 'THE LANDLADY',
            dialogue: 'That happens to everybody sooner or later.',
          },
          {
            id: 'wait-4',
            speaker: 'ALBERT',
            dialogue: 'It’s never happened to me. I don’t care for it.',
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
            narration: 'A folded newspaper on the table, his own advertisement ringed in ink. Maths and physics. First lesson free.',
          },
          {
            id: 'anyone',
            speaker: 'MILEVA',
            dialogue: 'Did anybody come?',
          },
          {
            id: 'anyone-2',
            speaker: 'ALBERT',
            dialogue: 'One. An engineer who wanted his boy drilled for an exam.',
          },
          {
            id: 'anyone-4',
            speaker: 'ALBERT',
            dialogue: 'I taught him something interesting instead. He isn’t coming back.',
          },
          {
            id: 'posts',
            narration: 'Two years of it. A stand-in post at a technical school, then the regular man comes back.',
          },
          {
            id: 'posts-2',
            speaker: 'MILEVA',
            dialogue: 'Four men from our year have assistantships. You’ve got the same diploma.',
          },
          {
            id: 'posts-3',
            speaker: 'ALBERT',
            dialogue: 'They went to the lectures. I didn’t.',
          },
          {
            id: 'posts-5',
            speaker: 'ALBERT',
            dialogue: 'Weber would’ve taken me if I’d said Herr Professor like I meant it.',
          },
          {
            id: 'stateless',
            narration: 'That winter he pays for Swiss papers with money he hasn’t got. Being from nowhere has stopped being restful.',
          },
          {
            id: 'stateless-2',
            speaker: 'THE CLERK',
            dialogue: 'The fee’s payable in full. Today.',
          },
          {
            id: 'stateless-3',
            speaker: 'ALBERT',
            dialogue: 'I’ve belonged to nothing for five years. Nothing doesn’t hire people.',
          },
          {
            id: 'bern',
            narration: 'Then a letter from Zürich, in a hand so even it looks printed.',
          },
          {
            id: 'bern-2',
            speaker: 'GROSSMANN',
            dialogue: 'My father’s spoken to the patent office director in Bern. There’s an exam.',
          },
          {
            id: 'bern-3',
            speaker: 'ALBERT',
            dialogue: 'Patents. Marcel, I’d be a clerk.',
          },
          {
            id: 'bern-4',
            speaker: 'GROSSMANN',
            dialogue: 'A clerk with a salary. Eight hours of other men’s machines, then the evening’s yours.',
          },
          {
            id: 'bern-7',
            speaker: 'MILEVA',
            dialogue: 'Take it. We can’t keep eating arguments.',
          },
          {
            id: 'choice',
            speaker: 'MILEVA',
            dialogue: 'The exam’s in three weeks. Well? What are you going to do?',
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
            narration: 'The examining room in Bern. Rolled drawings to the ceiling, a clock, and a desk too high to slouch at.',
          },
          {
            id: 'haller',
            speaker: 'HALLER',
            dialogue: 'Read every application as if the man’s a liar and a genius at once.',
          },
          {
            id: 'haller-2',
            speaker: 'ALBERT',
            dialogue: 'Both at once?',
          },
          {
            id: 'haller-3',
            speaker: 'HALLER',
            dialogue: 'Always both. Find where the machine stops. Then say no without humiliating him.',
          },
          {
            id: 'drawer',
            narration: 'The second drawer holds work of his own. He’s oiled the runners so it shuts without a sound.',
          },
          {
            id: 'drawer-2',
            speaker: 'BESSO',
            dialogue: 'Haller can hear that drawer from the corridor.',
          },
          {
            id: 'drawer-3',
            speaker: 'ALBERT',
            dialogue: 'He can hear a fly change its mind. He’s never said a word.',
          },
          {
            id: 'drawer-4',
            speaker: 'BESSO',
            dialogue: 'Because your reports are the best in the building.',
          },
          {
            id: 'drawer-5',
            speaker: 'ALBERT',
            dialogue: 'Then it’s a fair trade. He buys the daylight. I keep the evenings.',
          },
          {
            id: 'walk',
            narration: 'Walking home under the arcades they argue, go past his own street, turn back, and go past it again.',
          },
          {
            id: 'walk-2',
            speaker: 'BESSO',
            dialogue: 'That’s twice now. Twice past your own door, over two clocks that won’t agree.',
          },
          {
            id: 'walk-3',
            speaker: 'ALBERT',
            dialogue: 'They’ll agree eventually. One of us has to give, and it isn’t me.',
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
            narration: 'He does the household arithmetic first, because it’s the harder problem.',
          },
          {
            id: 'sums-2',
            speaker: 'MILEVA',
            dialogue: 'Rent, coal, and the tutoring fee that hasn’t come.',
          },
          {
            id: 'sums-3',
            speaker: 'ALBERT',
            dialogue: 'I’ll ask twice. The second time’s the one that works.',
          },
          {
            id: 'sums-5',
            speaker: 'ALBERT',
            dialogue: 'And if he never pays, we’re poor and interesting instead of poor and bored.',
          },
          {
            id: 'work',
            narration: 'Then he clears the table of that arithmetic and does the other kind, which costs nothing.',
          },
          {
            id: 'work-2',
            speaker: 'MILEVA',
            dialogue: 'You’re the only man I know who’s cheerful about this.',
          },
          {
            id: 'work-3',
            speaker: 'ALBERT',
            dialogue: 'I’m not cheerful. I’m refusing to be bored. From outside they look the same.',
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
            dialogue: 'The evenings aren’t very long.',
          },
          {
            id: 'trade-4',
            speaker: 'ALBERT',
            dialogue: 'No. But nobody asks what I do with them.',
          },
          {
            id: 'trade-6',
            speaker: 'ALBERT',
            dialogue: 'An assistant gets the whole day, and a professor telling him how to spend it.',
          },
          {
            id: 'evening',
            narration: 'The lamp is filled twice a week. It’s the only honest record of this room.',
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
            narration: 'The lamp is lit and the manuscript is done. He’s read the first page four times already.',
          },
          {
            id: 'broken',
            speaker: 'BESSO',
            dialogue: 'You look like a man who’s broken something.',
          },
          {
            id: 'broken-2',
            speaker: 'ALBERT',
            dialogue: 'I have. Sit down. Shine a lamp on a clean metal plate. What happens?',
          },
          {
            id: 'broken-3',
            speaker: 'BESSO',
            dialogue: 'It gets warm.',
          },
          {
            id: 'broken-4',
            speaker: 'ALBERT',
            dialogue: 'It also spits out little specks of charge. The light knocks them loose.',
          },
          {
            id: 'brighter',
            speaker: 'ALBERT',
            dialogue: 'Now turn the lamp up. Twice as bright. What do the specks do?',
          },
          {
            id: 'brighter-2',
            speaker: 'BESSO',
            dialogue: 'Come off faster, obviously. Bigger push, bigger speed.',
          },
          {
            id: 'brighter-3',
            speaker: 'ALBERT',
            dialogue: 'No. More of them come off. Each one leaves at exactly the same speed.',
          },
          {
            id: 'colour',
            speaker: 'ALBERT',
            dialogue: 'Now leave the brightness alone. Change the colour instead. Red to blue.',
          },
          {
            id: 'colour-3',
            speaker: 'ALBERT',
            dialogue: 'Fewer come off. And every one of them leaves faster.',
          },
          {
            id: 'colour-5',
            speaker: 'ALBERT',
            dialogue: 'So brightness changes how many. Colour changes how hard. Brightness doesn’t touch the hardness.',
          },
          {
            id: 'colour-6',
            speaker: 'BESSO',
            dialogue: 'Hang on. A wave can’t do that. A bigger wave hits harder. That’s what waves are.',
          },
          {
            id: 'jug',
            narration: 'He gets up, fetches the water jug off the washstand, and puts it in Besso’s hands.',
          },
          {
            id: 'jug-2',
            speaker: 'ALBERT',
            dialogue: 'Pour that on the flowerbed. All of it, in a steady stream.',
          },
          {
            id: 'jug-3',
            speaker: 'BESSO',
            dialogue: 'The soil drinks it. Nothing moves.',
          },
          {
            id: 'jug-4',
            speaker: 'ALBERT',
            dialogue: 'Now freeze the same water into hailstones. Throw them one at a time.',
          },
          {
            id: 'jug-5',
            speaker: 'BESSO',
            dialogue: 'Then something gets knocked out of the bed.',
          },
          {
            id: 'jug-6',
            speaker: 'ALBERT',
            dialogue: 'Only if one stone’s heavy enough. Twice as many small ones won’t do it.',
          },
          {
            id: 'hail',
            speaker: 'BESSO',
            dialogue: 'No, say that again. You’re about to tell me light is hail.',
          },
          {
            id: 'hail-2',
            speaker: 'ALBERT',
            dialogue: 'Light arrives in lumps. You could count them. And a blue lump is a heavier stone.',
          },
          {
            id: 'hail-4',
            speaker: 'ALBERT',
            dialogue: 'Brightness is how many stones a second. Colour is how heavy one stone is.',
          },
          {
            id: 'quanta',
            speaker: 'BESSO',
            dialogue: 'And the hundred years of men who proved light’s a wave?',
          },
          {
            id: 'quanta-2',
            speaker: 'ALBERT',
            dialogue: 'They weren’t wrong. That’s the part that keeps me up at night.',
          },
          {
            id: 'quanta-4',
            speaker: 'ALBERT',
            dialogue: 'It can’t be both and it is both, and nobody knows how. I wrote it anyway.',
          },
          {
            id: 'quanta-6',
            speaker: 'ALBERT',
            dialogue: 'The lump wants a name. I’m calling it a quantum. It only means a portion.',
          },
          {
            id: 'quanta-8',
            speaker: 'ALBERT',
            dialogue: 'Like a helping of soup, Michele. You don’t get handed half a helping.',
          },
          {
            id: 'revolutionary',
            narration: 'He ties the pages with string. Of everything on the desk tonight, this is the one that frightens him.',
          },
          {
            id: 'revolutionary-3',
            speaker: 'ALBERT',
            dialogue: 'The others just move the furniture about. This one takes out a wall.',
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
            narration: 'It arrives late, in a different room from the one he expected, and it arrives whole.',
          },
          {
            id: 'idea-2',
            speaker: 'THE LANDLADY',
            dialogue: 'That lamp’s been burning since Thursday.',
          },
          {
            id: 'idea-3',
            speaker: 'ALBERT',
            dialogue: 'Tell me something. Water on a flowerbed shifts nothing. Why does one hailstone shift it?',
          },
          {
            id: 'idea-4',
            speaker: 'THE LANDLADY',
            dialogue: 'Because a hailstone’s a lump and water isn’t.',
          },
          {
            id: 'idea-5',
            speaker: 'ALBERT',
            dialogue: 'That’s it exactly. Light’s hail. I can prove it and nobody’ll thank me.',
          },
          {
            id: 'cost',
            speaker: 'THE LANDLADY',
            dialogue: 'Will it pay your rent?',
          },
          {
            id: 'cost-2',
            speaker: 'ALBERT',
            dialogue: 'Not a centime. I’m posting it in the morning anyway.',
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
            narration: 'A borrowed microscope, a drop of water on a slide, and one grain of pollen that won’t hold still.',
          },
          {
            id: 'jitter-2',
            speaker: 'ALBERT',
            dialogue: 'Look at it. Left. Back. Nowhere. Left again.',
          },
          {
            id: 'jitter-3',
            speaker: 'MILEVA',
            dialogue: 'It’s done that for eighty years. Everyone calls it mysterious and goes to lunch.',
          },
          {
            id: 'jitter-4',
            speaker: 'ALBERT',
            dialogue: 'What’s hitting it?',
          },
          {
            id: 'jitter-5',
            speaker: 'MILEVA',
            dialogue: 'Nothing’s hitting it. The water’s still.',
          },
          {
            id: 'crowd',
            speaker: 'ALBERT',
            dialogue: 'The water isn’t still. The water’s a crowd.',
          },
          {
            id: 'crowd-3',
            speaker: 'ALBERT',
            dialogue: 'Put a man in the market square at noon. Shoulders on every side, shoving.',
          },
          {
            id: 'crowd-4',
            speaker: 'ALBERT',
            dialogue: 'Mostly the shoves cancel. Now and then more come from the left, and he staggers.',
          },
          {
            id: 'crowd-6',
            speaker: 'MILEVA',
            dialogue: 'And from an upstairs window he’d just be twitching in an empty square.',
          },
          {
            id: 'crowd-7',
            speaker: 'MILEVA',
            dialogue: 'But your grain’s thousands of times too big for one of them to shift.',
          },
          {
            id: 'crowd-8',
            speaker: 'ALBERT',
            dialogue: 'For one, yes. They don’t arrive evenly, though, and there are millions of them.',
          },
          {
            id: 'mach',
            speaker: 'MILEVA',
            dialogue: 'Half of Vienna says atoms are only a way of talking. Nobody’s seen one.',
          },
          {
            id: 'mach-2',
            speaker: 'ALBERT',
            dialogue: 'Then let the way of talking make a prediction. We’ll see who’s only talking.',
          },
          {
            id: 'bookkeeping',
            narration: 'He works out the bookkeeping of the shoving: how far a grain should wander in one second.',
          },
          {
            id: 'bookkeeping-2',
            speaker: 'ALBERT',
            dialogue: 'There. A number. That far, in one second, for a grain that size.',
          },
          {
            id: 'bookkeeping-3',
            speaker: 'MILEVA',
            dialogue: 'And if somebody measures it and gets something else?',
          },
          {
            id: 'bookkeeping-4',
            speaker: 'ALBERT',
            dialogue: 'Then there are no atoms, I’m a fool, and it’s settled by Tuesday.',
          },
          {
            id: 'atoms',
            speaker: 'MILEVA',
            dialogue: 'And if he gets your number?',
          },
          {
            id: 'atoms-2',
            speaker: 'ALBERT',
            dialogue: 'Then nobody calls them a way of talking again. They’ve left a mark you can measure.',
          },
          {
            id: 'atoms-3',
            narration: 'It isn’t a picture of an atom. It’s a number somebody else can go out and break.',
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
            dialogue: 'You’re counting things nobody can see.',
          },
          {
            id: 'count-3',
            speaker: 'ALBERT',
            dialogue: 'I’m counting them by their shoves. A man staggers; you learn the crowd from that.',
          },
          {
            id: 'count-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'And what does the answer look like?',
          },
          {
            id: 'count-5',
            speaker: 'ALBERT',
            dialogue: 'How far a speck wanders in a second. Anyone with a microscope can check me.',
          },
          {
            id: 'send',
            speaker: 'A COLLEAGUE',
            dialogue: 'And if they check and you’re wrong?',
          },
          {
            id: 'send-2',
            speaker: 'ALBERT',
            dialogue: 'Then I’ve saved everybody some time. That’s a decent way to be wrong.',
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
            narration: 'The last tram pulls away from the clock tower. They both look back at the lit face of it.',
          },
          {
            id: 'tram-2',
            speaker: 'ALBERT',
            dialogue: 'Michele. That time up there. When did it leave the tower?',
          },
          {
            id: 'tram-4',
            speaker: 'ALBERT',
            dialogue: 'You’ll say now. It isn’t now. That light left a moment ago and came down the street.',
          },
          {
            id: 'tram-6',
            speaker: 'BESSO',
            dialogue: 'A very small moment. So?',
          },
          {
            id: 'now-2',
            speaker: 'ALBERT',
            dialogue: 'Now make this tram faster. As fast as the light. Keep looking back.',
          },
          {
            id: 'now-3',
            speaker: 'BESSO',
            dialogue: 'Then I never get any newer news of it. The hands would stand still.',
          },
          {
            id: 'now-4',
            speaker: 'ALBERT',
            dialogue: 'For you. In the square it goes on striking the hour for everybody.',
          },
          {
            id: 'now-6',
            speaker: 'ALBERT',
            dialogue: 'And don’t tell me yours is the wrong one. There’s no master clock to go and ask.',
          },
          {
            id: 'towers',
            narration: 'The tram turns into the long arcaded street. Two more towers on it, and no two of them agree.',
          },
          {
            id: 'towers-2',
            speaker: 'BESSO',
            dialogue: 'All right. Run towards a light and it reaches you sooner. Done.',
          },
          {
            id: 'towers-3',
            speaker: 'ALBERT',
            dialogue: 'That’s the whole trouble. It doesn’t. Same speed however hard you run.',
          },
          {
            id: 'towers-5',
            speaker: 'ALBERT',
            dialogue: 'Every measurement says so. And the rules for light say so, and they’ve never failed.',
          },
          {
            id: 'rain',
            speaker: 'BESSO',
            dialogue: 'Rain doesn’t work like that. Run through rain and it hits you harder.',
          },
          {
            id: 'rain-2',
            speaker: 'ALBERT',
            dialogue: 'Rain behaves. Light won’t. I’ve been polite about it for ten years.',
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
            dialogue: 'Albert, that isn’t physics. That’s a man losing his nerve in the rain.',
          },
          {
            id: 'train',
            narration: 'They get down at the bridge. He doesn’t stop walking and he doesn’t stop talking.',
          },
          {
            id: 'train-2',
            speaker: 'ALBERT',
            dialogue: 'Lightning hits a train, front and back. A man halfway along the platform sees both flashes together.',
          },
          {
            id: 'train-3',
            speaker: 'BESSO',
            dialogue: 'Then they happened together. That’s what together means.',
          },
          {
            id: 'train-4',
            speaker: 'ALBERT',
            dialogue: 'Now a woman in the middle of the carriage. The train’s carrying her towards one flash.',
          },
          {
            id: 'train-5',
            speaker: 'BESSO',
            dialogue: 'So she meets that one first. She’s moving, that’s all.',
          },
          {
            id: 'train-6',
            speaker: 'ALBERT',
            dialogue: 'She isn’t moving. Not in her carriage. She’s sitting perfectly still in her own world.',
          },
          {
            id: 'train-8',
            speaker: 'ALBERT',
            dialogue: 'And neither of them is wrong. That’s what nobody will swallow. They’re both right.',
          },
          {
            id: 'train-10',
            speaker: 'ALBERT',
            dialogue: 'At the same time isn’t a fact. It’s two clocks agreeing about a signal that takes time.',
          },
          {
            id: 'give',
            narration: 'Besso stops in the middle of the bridge. It’s raining and neither of them notices.',
          },
          {
            id: 'give-2',
            speaker: 'BESSO',
            dialogue: 'All right. Say that’s true. What else falls over?',
          },
          {
            id: 'give-3',
            speaker: 'ALBERT',
            dialogue: 'A moving clock runs slow. A moving ruler is short. Not a trick of looking.',
          },
          {
            id: 'give-5',
            speaker: 'ALBERT',
            dialogue: 'Nobody’s ever seen a short ruler, because trams are slow. The change is tiny.',
          },
          {
            id: 'give-6',
            speaker: 'BESSO',
            dialogue: 'I’m going to bed. I don’t accept one word of it.',
          },
          {
            id: 'give-7',
            speaker: 'ALBERT',
            dialogue: 'Good. Refuse it again tomorrow. You’re the only man in Bern who refuses it properly.',
          },
          {
            id: 'night',
            narration: 'He doesn’t sleep. Five weeks of work come apart and settle differently, and by six it’s finished.',
          },
          {
            id: 'solved',
            speaker: 'ALBERT',
            dialogue: 'Thank you. It’s done. Space and time lose some of their dignity, but it’s done.',
          },
          {
            id: 'solved-2',
            speaker: 'BESSO',
            dialogue: 'Albert. It’s six in the morning and you’re standing in my doorway.',
          },
          {
            id: 'solved-3',
            speaker: 'ALBERT',
            dialogue: 'Yes. Get your coat, we’ll be late.',
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
            narration: 'No clock tower outside this window, and the year isn’t the one he’d have chosen. No difference.',
          },
          {
            id: 'late-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Explain it to me like I’m the porter.',
          },
          {
            id: 'late-3',
            speaker: 'ALBERT',
            dialogue: 'Lightning hits both ends of a train. On the platform the flashes are together. On the train they aren’t.',
          },
          {
            id: 'late-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'So one of them’s got it wrong.',
          },
          {
            id: 'what',
            speaker: 'ALBERT',
            dialogue: 'Neither. At the same moment just means two clocks agreeing about a signal that takes time.',
          },
          {
            id: 'what-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'And what falls out of that?',
          },
          {
            id: 'what-3',
            speaker: 'ALBERT',
            dialogue: 'Moving clocks run slow. Moving rulers are short. And weight and energy turn out to be one thing.',
          },
          {
            id: 'quiet',
            narration: 'He sits with it a while. Whoever he tells first will be polite and won’t understand.',
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
            narration: 'Four envelopes leave one small post office in a few months. He counts the stamp money twice.',
          },
          {
            id: 'posted-2',
            speaker: 'THE CLERK',
            dialogue: 'Registered?',
          },
          {
            id: 'posted-3',
            speaker: 'ALBERT',
            dialogue: 'Ordinary. I can’t afford to insure my opinions.',
          },
          {
            id: 'posted-4',
            speaker: 'THE CLERK',
            dialogue: 'What’s in them?',
          },
          {
            id: 'posted-5',
            speaker: 'ALBERT',
            dialogue: 'Light in lumps. The size of what water’s made of. The end of the word now.',
          },
          {
            id: 'posted-7',
            speaker: 'THE CLERK',
            dialogue: 'Eighty centimes.',
          },
          {
            id: 'office',
            narration: 'On Monday he’s at the desk by eight, refusing a patent for an improved gravel sorter.',
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
            dialogue: 'Berlin’s written to you.',
          },
          {
            id: 'wait-3',
            speaker: 'ALBERT',
            dialogue: 'Planck. He’s read the clock paper three times and wants to argue about page nine.',
          },
          {
            id: 'wait-5',
            speaker: 'ALBERT',
            dialogue: 'Michele, I read that man’s books instead of going to lectures. He’s arguing with me.',
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
            narration: 'Four envelopes leave one small post office in a few months. Nobody in the queue looks twice.',
          },
          {
            id: 'posted-2',
            speaker: 'THE CLERK',
            dialogue: 'Heavy, these.',
          },
          {
            id: 'posted-3',
            speaker: 'ALBERT',
            dialogue: 'One’s about light. One’s about water. One’s about clocks. The thin one’s the worst.',
          },
          {
            id: 'work',
            narration: 'None of it is anybody’s job. He does the paid day, comes home, and works late.',
          },
          {
            id: 'work-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'You look terrible. Have you been working?',
          },
          {
            id: 'work-3',
            speaker: 'ALBERT',
            dialogue: 'I’ve been shifting some furniture about. Nobody on the stairs would guess.',
          },
          {
            id: 'wait-2',
            speaker: 'ALBERT',
            dialogue: 'The journals print them and nothing happens for a year. Then the letters start.',
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
            narration: 'Two results from a life with no laboratory, no assistant and no chair. Either one would redirect a career.',
          },
          {
            id: 'two-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Two papers in a year, from a clerk. They’ll start learning your name.',
          },
          {
            id: 'two-3',
            speaker: 'ALBERT',
            dialogue: 'They’ll spell it wrong first. Everybody does.',
          },
          {
            id: 'third',
            speaker: 'A COLLEAGUE',
            dialogue: 'And the third thing? The one in the drawer.',
          },
          {
            id: 'third-2',
            speaker: 'ALBERT',
            dialogue: 'In pieces. I take it out most evenings and put it back most nights.',
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
            narration: 'The journal comes in a paper wrapper. His name is set in a type that looks like somebody else’s.',
          },
          {
            id: 'printed-2',
            speaker: 'MILEVA',
            dialogue: 'Well?',
          },
          {
            id: 'printed-3',
            speaker: 'ALBERT',
            dialogue: 'I read my own paragraphs like a stranger. There are two sentences I’d cut.',
          },
          {
            id: 'rest',
            speaker: 'MILEVA',
            dialogue: 'And the rest of it? The other pages?',
          },
          {
            id: 'rest-2',
            speaker: 'ALBERT',
            dialogue: 'Still in the drawer. One paper isn’t a year that changes physics.',
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
            narration: 'Thirty pages in the drawer about clocks. Forty about molecules. None of them have gone anywhere.',
          },
          {
            id: 'inside-2',
            speaker: 'BESSO',
            dialogue: 'You’ve been on the same page since Easter.',
          },
          {
            id: 'inside-3',
            speaker: 'ALBERT',
            dialogue: 'They all stop where finishing would cost a month I haven’t got.',
          },
          {
            id: 'year',
            speaker: 'BESSO',
            dialogue: 'You seem happy enough.',
          },
          {
            id: 'year-2',
            speaker: 'ALBERT',
            dialogue: 'The desk is warm and the salary comes. You can be happy and still be wasted.',
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
            narration: 'The letter has an embossed seal and the word Professor in it, and it’s addressed to him.',
          },
          {
            id: 'offer-2',
            speaker: 'HALLER',
            dialogue: 'You’re giving notice.',
          },
          {
            id: 'offer-3',
            speaker: 'ALBERT',
            dialogue: 'Zürich. They’re offering me a chair. It’s only taken nine years.',
          },
          {
            id: 'offer-4',
            speaker: 'HALLER',
            dialogue: 'Your reports are the best in this building. The department will miss them.',
          },
          {
            id: 'offer-5',
            speaker: 'ALBERT',
            dialogue: 'That’s the strangest compliment I’ve ever been paid.',
          },
          {
            id: 'offer-6',
            speaker: 'HALLER',
            dialogue: 'It wasn’t a compliment. It was a complaint.',
          },
          {
            id: 'notice',
            narration: 'He clears the desk. He carries out rather less than he carried in.',
          },
          {
            id: 'notice-2',
            speaker: 'ALBERT',
            dialogue: 'Nine years of other men’s machines, and they made me. I won’t say that near a professor.',
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
            narration: 'Three men in three countries have written about the paper. Three short letters, all of them warm.',
          },
          {
            id: 'letters-2',
            speaker: 'MILEVA',
            dialogue: 'Does any of them offer you a post?',
          },
          {
            id: 'letters-3',
            speaker: 'ALBERT',
            dialogue: 'Not one. Being interesting isn’t the same trade as being employable.',
          },
          {
            id: 'keep',
            speaker: 'MILEVA',
            dialogue: 'So you keep the desk.',
          },
          {
            id: 'keep-2',
            speaker: 'ALBERT',
            dialogue: 'The desk, the salary and the drawer. There’s more in it than there was.',
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
            dialogue: 'A hundred perpetual motion machines refused, and the inventors all thanked you.',
          },
          {
            id: 'record-3',
            speaker: 'ALBERT',
            dialogue: 'I tell them where the machine stops. People forgive you if you’re exact.',
          },
          {
            id: 'drawer',
            speaker: 'HALLER',
            dialogue: 'And the second drawer?',
          },
          {
            id: 'drawer-2',
            speaker: 'ALBERT',
            dialogue: 'Heavier than when I came. Nobody’s read a page of it.',
          },
          {
            id: 'drawer-3',
            narration: 'He’s thirty. Outside the high window the century goes past like a train that doesn’t stop.',
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
            narration: 'His first lectures are bad. He’s written down what a professor sounds like, and he reads it out.',
          },
          {
            id: 'first-2',
            speaker: 'A STUDENT',
            dialogue: 'Herr Professor. We didn’t follow that last step.',
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
            dialogue: 'Don’t copy this down yet. Copy it when it’s right. Watch it be wrong first.',
          },
          {
            id: 'again',
            narration: 'The third attempt holds. Somebody at the back says oh, out loud, and doesn’t mean to.',
          },
          {
            id: 'again-2',
            speaker: 'A STUDENT',
            dialogue: 'Is that allowed? Being wrong in front of us.',
          },
          {
            id: 'again-3',
            speaker: 'ALBERT',
            dialogue: 'It’s the only teaching I can do. We’ll see if anyone comes back.',
          },
          {
            id: 'again-4',
            narration: 'Attendance doubles by Christmas.',
          },
          {
            id: 'salary',
            speaker: 'MILEVA',
            dialogue: 'The salary’s smaller than the office paid. The hours are longer.',
          },
          {
            id: 'salary-2',
            speaker: 'ALBERT',
            dialogue: 'And I talk all day instead of thinking. I hadn’t counted on the talking.',
          },
          {
            id: 'salary-3',
            speaker: 'MILEVA',
            dialogue: 'Then go back to the desk. Nobody there ever asked you a question.',
          },
          {
            id: 'choice',
            speaker: 'MILEVA',
            dialogue: 'You can’t have both. A chair, or a quiet desk with the evenings in it. Choose.',
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
            narration: 'They come to Zürich in person: two of the most decorated men in German science, on an ordinary Tuesday.',
          },
          {
            id: 'delegation-2',
            speaker: 'PLANCK',
            dialogue: 'No lectures. No students. No duties of any kind.',
          },
          {
            id: 'delegation-4',
            speaker: 'PLANCK',
            dialogue: 'You think, and we’d like to be the address where you do it.',
          },
          {
            id: 'delegation-5',
            speaker: 'ALBERT',
            dialogue: 'You’re offering me a salary for thinking.',
          },
          {
            id: 'delegation-6',
            speaker: 'PLANCK',
            dialogue: 'I know how it sounds. I’ve argued for it in rooms you wouldn’t have enjoyed.',
          },
          {
            id: 'terms',
            narration: 'It’s also Berlin. Parade grounds, a court, and a language of rank he gave up at sixteen.',
          },
          {
            id: 'terms-2',
            speaker: 'MILEVA',
            dialogue: 'You swore you’d never live in that country again.',
          },
          {
            id: 'terms-3',
            speaker: 'ALBERT',
            dialogue: 'I swore a lot of things at seventeen, all in the same voice.',
          },
          {
            id: 'arrive',
            narration: 'He goes. The flat’s too large, the streets too straight, and one room holds nothing but a table.',
          },
          {
            id: 'arrive-2',
            speaker: 'ALBERT',
            dialogue: 'Gravity goes on that table. Everything else in this city can wait.',
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
            dialogue: 'It’s still there.',
          },
          {
            id: 'unanswered-3',
            speaker: 'ALBERT',
            dialogue: 'I’ve decided to decide tomorrow. That’s about thirty times now.',
          },
          {
            id: 'reason',
            speaker: 'MILEVA',
            dialogue: 'They’re offering you a salary to think. You’ve wanted that since you were nineteen.',
          },
          {
            id: 'reason-2',
            speaker: 'ALBERT',
            dialogue: 'And one morning somebody’ll come and ask what the salary was for.',
          },
          {
            id: 'reason-3',
            speaker: 'MILEVA',
            dialogue: 'And if you’re wrong about them?',
          },
          {
            id: 'reason-4',
            speaker: 'ALBERT',
            dialogue: 'Then I’ve been rude to an Academy. I can live with that.',
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
            narration: 'In August the city empties into the stations singing. By October the university men have written theirs.',
          },
          {
            id: 'august-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Have you read it? Ninety-three names.',
          },
          {
            id: 'august-3',
            speaker: 'ALBERT',
            dialogue: 'In the corridor, with my coat still on. I couldn’t make myself sit down to it.',
          },
          {
            id: 'names',
            narration: 'The sheet is pinned at eye height. A page defending the army, signed by ninety-three of the best.',
          },
          {
            id: 'names-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Four of them eat lunch with you.',
          },
          {
            id: 'names-3',
            speaker: 'ALBERT',
            dialogue: 'Two of them taught me something I still use every day.',
          },
          {
            id: 'names-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'They’re patriots. That isn’t a crime.',
          },
          {
            id: 'names-5',
            speaker: 'ALBERT',
            dialogue: 'They’re professors. They spent thirty years telling me truth doesn’t care where you stand.',
          },
          {
            id: 'names-7',
            speaker: 'ALBERT',
            dialogue: 'And now physics has borders, and they were drawn some time last Tuesday.',
          },
          {
            id: 'other',
            narration: 'A physician he hardly knows has drafted the opposite document. Plenty of room at the bottom for names.',
          },
          {
            id: 'appeal',
            speaker: 'A COLLEAGUE',
            dialogue: 'Four men have signed that. Four, against ninety-three. What are you going to do?',
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
            narration: 'The French journals stop coming. Then the English ones. The shelf keeps the gap where they stood.',
          },
          {
            id: 'silence-2',
            speaker: 'THE POSTMAN',
            dialogue: 'This one came back, sir. Stamped.',
          },
          {
            id: 'silence-3',
            speaker: 'ALBERT',
            dialogue: 'Four months to reach England and be told England can’t be written to.',
          },
          {
            id: 'names',
            narration: 'The declarations keep coming, one country at a time, signed by the men who taught him otherwise.',
          },
          {
            id: 'names-2',
            speaker: 'THE POSTMAN',
            dialogue: 'Bad business all round.',
          },
          {
            id: 'names-3',
            speaker: 'ALBERT',
            dialogue: 'It’s worse than bad. It’s tidy. They all signed neatly, on the line provided.',
          },
          {
            id: 'draft',
            narration: 'Then somebody sends the other kind of document, folded into a letter that took nine weeks.',
          },
          {
            id: 'appeal',
            speaker: 'A COLLEAGUE',
            dialogue: 'An appeal to Europeans. Don’t hate to order. There’s space at the bottom and little above it.',
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
            dialogue: 'You’ve got further down my own road than I have. Again.',
          },
          {
            id: 'summer',
            speaker: 'ALBERT',
            dialogue: 'I lectured here six mornings in the summer and held nothing back.',
          },
          {
            id: 'summer-2',
            speaker: 'HILBERT',
            dialogue: 'You did. It was the most expensive generosity I’ve ever watched.',
          },
          {
            id: 'fence',
            speaker: 'HILBERT',
            dialogue: 'Tell me what your physics won’t let the mathematics break. Then I’ll know where to stop.',
          },
          {
            id: 'fence-2',
            speaker: 'ALBERT',
            dialogue: 'Energy. Whatever the equations do, they can’t make energy out of nothing.',
          },
          {
            id: 'fence-3',
            speaker: 'HILBERT',
            dialogue: 'Good. That’s a fence. Everything past it I intend to push over.',
          },
          {
            id: 'november',
            narration: 'He stops sleeping properly, sends work in weekly instalments, and corrects himself twice in public.',
          },
          {
            id: 'november-2',
            speaker: 'ALBERT',
            dialogue: 'Being wrong in front of Göttingen is cheaper than being slow in front of it.',
          },
          {
            id: 'november-3',
            narration: 'He’s already drafted the generous letter he means to send at the end, and keeps it in view.',
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
            narration: 'Postcards, then letters, then telegrams, all autumn. Each one a step further on than the last.',
          },
          {
            id: 'exchange-2',
            speaker: 'BESSO',
            dialogue: 'Neither of you has once mentioned speed.',
          },
          {
            id: 'exchange-3',
            speaker: 'ALBERT',
            dialogue: 'And neither of us has stopped counting the days. It’s a very polite sprint.',
          },
          {
            id: 'said',
            narration: 'The objection from Göttingen is the useful kind: not that the physics is wrong, but that it isn’t forced.',
          },
          {
            id: 'said-2',
            speaker: 'HILBERT',
            dialogue: 'Physics is too hard for physicists. Tell me what your equations aren’t allowed to do.',
          },
          {
            id: 'close',
            narration: 'He works eleven days without properly stopping. Somewhere in them he decides what letter to send.',
          },
          {
            id: 'close-2',
            speaker: 'ALBERT',
            dialogue: 'The one without a single barbed sentence in it. It’s written already.',
          },
          {
            id: 'close-3',
            speaker: 'BESSO',
            dialogue: 'Before you know who wins?',
          },
          {
            id: 'close-4',
            speaker: 'ALBERT',
            dialogue: 'Deciding early is the only way I’ve ever managed to be gracious.',
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
            narration: 'The letters he sends to the mathematicians aren’t refused. They just aren’t answered.',
          },
          {
            id: 'silence-2',
            speaker: 'BESSO',
            dialogue: 'Still nothing from Göttingen?',
          },
          {
            id: 'silence-3',
            speaker: 'ALBERT',
            dialogue: 'Nothing. So I do the geometry myself, badly and slowly, and get there.',
          },
          {
            id: 'alone',
            speaker: 'BESSO',
            dialogue: 'Nobody beat you to it by a week. You should be pleased.',
          },
          {
            id: 'alone-2',
            speaker: 'ALBERT',
            dialogue: 'I’d have preferred the competition. I’m not sure what that says about me.',
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
            dialogue: 'You haven’t eaten since yesterday. What is it this time?',
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
            dialogue: 'I’m serious. Years ago in Bern I read about one. He fell and wasn’t badly hurt.',
          },
          {
            id: 'roofer-3',
            speaker: 'ALBERT',
            dialogue: 'And he said that while he was falling he felt nothing. No weight at all.',
          },
          {
            id: 'roofer-4',
            speaker: 'ELSA',
            dialogue: 'Well, of course. There was nothing under him.',
          },
          {
            id: 'roofer-5',
            speaker: 'ALBERT',
            dialogue: 'That’s it. That’s the whole thing. Weight isn’t what you feel when you fall.',
          },
          {
            id: 'roofer-6',
            speaker: 'ALBERT',
            dialogue: 'It’s what you feel when the floor stops you. The floor shoves up at your feet.',
          },
          {
            id: 'roofer-8',
            speaker: 'ALBERT',
            dialogue: 'All day, every day. That shove is what you’ve been calling your weight.',
          },
          {
            id: 'lift',
            speaker: 'ALBERT',
            dialogue: 'Now get in a lift with me. No windows. The cable snaps. What do you feel?',
          },
          {
            id: 'lift-2',
            speaker: 'ELSA',
            dialogue: 'Nothing, I suppose. I’d float round the box and scream.',
          },
          {
            id: 'lift-3',
            speaker: 'ALBERT',
            dialogue: 'Both, in that order. Now — could you do anything inside to find out what’s happening?',
          },
          {
            id: 'lift-4',
            speaker: 'ELSA',
            dialogue: 'Drop something. But it’d float too.',
          },
          {
            id: 'lift-5',
            speaker: 'ALBERT',
            dialogue: 'It floats. So you can’t tell if you’re falling, or drifting in space with no earth anywhere.',
          },
          {
            id: 'lift-7',
            speaker: 'ALBERT',
            dialogue: 'They feel the same because they are the same. Now turn it round. Haul the box upward.',
          },
          {
            id: 'lift-8',
            speaker: 'ELSA',
            dialogue: 'I’d be pressed down onto the floor.',
          },
          {
            id: 'lift-9',
            speaker: 'ALBERT',
            dialogue: 'Exactly as if you had weight. You could stand up, drop a spoon, watch it fall.',
          },
          {
            id: 'lift-10',
            speaker: 'ELSA',
            dialogue: 'So from inside I couldn’t tell if the earth’s pulling me or a rope’s hauling me.',
          },
          {
            id: 'lift-11',
            speaker: 'ALBERT',
            dialogue: 'Not by any measurement. So gravity and being hauled are the same thing in two hats.',
          },
          {
            id: 'sits',
            narration: 'She sits down on the arm of the chair without meaning to, and doesn’t pick the tray up again.',
          },
          {
            id: 'sits-2',
            speaker: 'ELSA',
            dialogue: 'All right. And that took you eight years?',
          },
          {
            id: 'beam',
            speaker: 'ALBERT',
            dialogue: 'Because of the light. Shine a lamp across your hauled box, wall to wall.',
          },
          {
            id: 'beam-3',
            speaker: 'ALBERT',
            dialogue: 'While it crosses, the box moves up. So it lands lower than where it started.',
          },
          {
            id: 'beam-5',
            speaker: 'ALBERT',
            dialogue: 'From inside it looks bent. Same box. So near the sun, light must bend too.',
          },
          {
            id: 'beam-6',
            speaker: 'ELSA',
            dialogue: 'But light has no weight. Nothing can pull on it.',
          },
          {
            id: 'beam-7',
            speaker: 'ALBERT',
            dialogue: 'Nothing does. It goes perfectly straight. The place it’s going through isn’t flat.',
          },
          {
            id: 'cloth',
            speaker: 'ELSA',
            dialogue: 'Now you’ve lost me.',
          },
          {
            id: 'cloth-3',
            narration: 'They take the cloth off the table and hold it taut, two corners each. He sets the flat-iron in the middle.',
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
            dialogue: 'And nothing pulled it. The iron never touched it. The cloth’s bent; the marble went straight.',
          },
          {
            id: 'cloth-8',
            speaker: 'ELSA',
            dialogue: 'And the sun is the iron.',
          },
          {
            id: 'cloth-9',
            speaker: 'ALBERT',
            dialogue: 'The sun’s the iron. Space is the cloth. The earth’s the marble, going straight.',
          },
          {
            id: 'cloth-11',
            speaker: 'ALBERT',
            dialogue: 'Starlight goes straight too, across the dent. It’ll arrive in the wrong place.',
          },
          {
            id: 'mercury',
            narration: 'Mercury has been wandering for sixty years. Its orbit creeps round the sun and nobody can say why.',
          },
          {
            id: 'mercury-3',
            speaker: 'ALBERT',
            dialogue: 'Forty-three seconds of arc in a century, Elsa. They’d rather invent a hidden planet.',
          },
          {
            id: 'number',
            narration: 'He puts the new equations in and turns the handle. Nothing adjusted, nothing added, nothing chosen.',
          },
          {
            id: 'number-2',
            speaker: 'ALBERT',
            dialogue: 'Forty-three.',
          },
          {
            id: 'number-4',
            speaker: 'ALBERT',
            dialogue: 'That’s what the astronomers measure. It came out of the equations. I didn’t put it in.',
          },
          {
            id: 'number-5',
            narration: 'He sits very still. For three days afterwards something goes wrong in his chest.',
          },
          {
            id: 'what',
            speaker: 'ELSA',
            dialogue: 'Say it again. Plainly. So I can tell somebody.',
          },
          {
            id: 'what-2',
            speaker: 'ALBERT',
            dialogue: 'There’s no force reaching across an empty room. There isn’t an empty room.',
          },
          {
            id: 'what-4',
            speaker: 'ALBERT',
            dialogue: 'Heavy things bend it, and falling is just going straight through the bend.',
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
            dialogue: 'Marcel. I need a kind of mathematics I haven’t got.',
          },
          {
            id: 'ask-2',
            speaker: 'GROSSMANN',
            dialogue: 'You said you’d write if that ever happened. It’s only taken fifteen years.',
          },
          {
            id: 'ask-3',
            speaker: 'ALBERT',
            dialogue: 'I need geometry inside a place that won’t lie flat. A surface that sags under weight.',
          },
          {
            id: 'ask-4',
            speaker: 'GROSSMANN',
            dialogue: 'Ah. That exists. Italians, mostly. Nobody’s ever found any use for it.',
          },
          {
            id: 'ask-6',
            speaker: 'GROSSMANN',
            dialogue: 'You’ll hate it for a fortnight and be using it by the end of the month.',
          },
          {
            id: 'read',
            narration: 'He hates it for a fortnight. Then he can’t stop, and the lamp burns at four for a year.',
          },
          {
            id: 'read-2',
            speaker: 'ALBERT',
            dialogue: 'You’ve handed me the only tool in Europe that fits.',
          },
          {
            id: 'read-3',
            speaker: 'GROSSMANN',
            dialogue: 'I’ll help with the mathematics. I want nothing to do with the physics.',
          },
          {
            id: 'close',
            narration: 'When the equations finally close, they’re simpler than the mess he fought through to reach them.',
          },
          {
            id: 'close-2',
            speaker: 'ALBERT',
            dialogue: 'There. Gravity isn’t a pull. Heavy things bend the space, and everything runs through the bend.',
          },
          {
            id: 'close-3',
            speaker: 'GROSSMANN',
            dialogue: 'And that’s falling.',
          },
          {
            id: 'close-4',
            speaker: 'ALBERT',
            dialogue: 'That’s falling. It came out simpler than the road to it, which is usually a good sign.',
          },
          {
            id: 'cost',
            speaker: 'ALBERT',
            dialogue: 'I’ve been ill, and rude to people who didn’t deserve it, and away from home.',
          },
          {
            id: 'cost-2',
            speaker: 'GROSSMANN',
            dialogue: 'The equations don’t know any of that.',
          },
          {
            id: 'cost-3',
            speaker: 'ALBERT',
            dialogue: 'No. They’ll be true when we’re all dead. I mind that less than I should.',
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
            dialogue: 'Gravity isn’t a pull. Heavy things bend the space, and everything else goes straight through it.',
          },
          {
            id: 'done-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'And a stone dropped from a window?',
          },
          {
            id: 'done-5',
            speaker: 'ALBERT',
            dialogue: 'Takes the straightest road there is, in a place that won’t lie flat.',
          },
          {
            id: 'alone',
            narration: 'Outside it’s raining and a cart goes past. Inside, there’s nobody awake to tell.',
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
            dialogue: 'Your collar’s loose. When did that happen?',
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
            dialogue: 'The universe has waited a long time. It can wait till half past one.',
          },
          {
            id: 'nursed-4',
            speaker: 'ALBERT',
            dialogue: 'That’s unanswerable and I resent it deeply.',
          },
          {
            id: 'work',
            narration: 'He works propped on pillows with the tray across his knees. It isn’t heroic. It’s what there is.',
          },
          {
            id: 'work-2',
            speaker: 'ELSA',
            dialogue: 'Is it going well?',
          },
          {
            id: 'work-3',
            speaker: 'ALBERT',
            dialogue: 'Slower. About as good. Slower isn’t the same as worse.',
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
            dialogue: 'You’re playing with your coat on again.',
          },
          {
            id: 'ration-3',
            speaker: 'ALBERT',
            dialogue: 'My fingers are cold. It isn’t the coat’s fault the Mozart’s bad.',
          },
          {
            id: 'music',
            speaker: 'THE LANDLADY',
            dialogue: 'It’s an hour a day. Everybody should have one.',
          },
          {
            id: 'music-2',
            speaker: 'ALBERT',
            dialogue: 'It’s the only hour with no war in it. I defend it like a border.',
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
            narration: 'The theory has made a promise it can’t take back.',
          },
          {
            id: 'prediction-2',
            speaker: 'ELSA',
            dialogue: 'Which promise?',
          },
          {
            id: 'prediction-3',
            speaker: 'ALBERT',
            dialogue: 'Starlight passing close to the sun arrives in the wrong place. Bent by a definite amount.',
          },
          {
            id: 'prediction-4',
            speaker: 'ELSA',
            dialogue: 'Then somebody should go and look.',
          },
          {
            id: 'prediction-5',
            speaker: 'ALBERT',
            dialogue: 'You can’t see a star beside the sun. The sun drowns that whole piece of sky.',
          },
          {
            id: 'prediction-7',
            speaker: 'ALBERT',
            dialogue: 'Unless the moon covers it. Then the stars come out beside the sun for six minutes.',
          },
          {
            id: 'letter',
            narration: 'A letter comes from England, by way of a neutral country, in the middle of a war.',
          },
          {
            id: 'letter-2',
            speaker: 'EDDINGTON',
            dialogue: 'There’s a total eclipse in May. I mean to be under it with a camera.',
          },
          {
            id: 'letter-3',
            speaker: 'EDDINGTON',
            dialogue: 'I’ll photograph the stars beside the sun, then the same stars at night six months later.',
          },
          {
            id: 'letter-4',
            speaker: 'EDDINGTON',
            dialogue: 'Then I lay one plate over the other. If they’ve shifted, the light was bent.',
          },
          {
            id: 'letter-5',
            speaker: 'EDDINGTON',
            dialogue: 'If they haven’t shifted, your theory’s finished, and a good deal else with it.',
          },
          {
            id: 'letter-6',
            speaker: 'ELSA',
            dialogue: 'He’s English.',
          },
          {
            id: 'letter-7',
            speaker: 'ALBERT',
            dialogue: 'He’s an Englishman testing a German theory while the two are shelling each other.',
          },
          {
            id: 'letter-9',
            speaker: 'ALBERT',
            dialogue: 'He says the sky doesn’t take sides. He won’t fight, and they nearly gaoled him.',
          },
          {
            id: 'wait',
            narration: 'The eclipse falls in the spring. Until then there’s nothing at all for him to do about it.',
          },
          {
            id: 'wait-2',
            speaker: 'ELSA',
            dialogue: 'And if the stars haven’t moved?',
          },
          {
            id: 'wait-3',
            speaker: 'ALBERT',
            dialogue: 'Then I’m wrong, and I’ll say so in front of the ninety-three. Waiting’s the hard part.',
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
            dialogue: 'You’ve never once been late.',
          },
          {
            id: 'ledger-3',
            speaker: 'ALBERT',
            dialogue: 'I’ve never once been anything else.',
          },
          {
            id: 'ledger-4',
            speaker: 'HALLER',
            dialogue: 'Men you studied with have chairs now. One of them has a street named after him.',
          },
          {
            id: 'ledger-5',
            speaker: 'ALBERT',
            dialogue: 'A short street. I’ve walked down it.',
          },
          {
            id: 'notebook',
            narration: 'The notebook is thicker than it was. Some of it is right.',
          },
          {
            id: 'notebook-2',
            speaker: 'ALBERT',
            dialogue: 'Nobody’s read it and nobody’s told me I’m wrong. I can’t decide which is worse.',
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
            narration: 'Four years of it, and the counting’s done in the newspapers now, in columns.',
          },
          {
            id: 'count-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Whole seminar rooms are gone. I taught half of one of them.',
          },
          {
            id: 'count-3',
            speaker: 'ALBERT',
            dialogue: 'And every man who signed the declarations is still here, and still confident.',
          },
          {
            id: 'count-5',
            speaker: 'ALBERT',
            dialogue: 'I’ve said so quietly, to the wrong people, which is the same as not saying it.',
          },
          {
            id: 'ahead',
            narration: 'He comes out of the decade with less of his health and fewer of his friends.',
          },
          {
            id: 'ahead-2',
            speaker: 'ALBERT',
            dialogue: 'One thing’s settled. I’ll never put my name under anybody’s flag again.',
          },
          {
            id: 'ahead-3',
            speaker: 'ALBERT',
            dialogue: 'A great deal is unfinished. That isn’t.',
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
            dialogue: 'You’ve got thinner.',
          },
          {
            id: 'city-3',
            speaker: 'ALBERT',
            dialogue: 'Everyone’s got thinner. It’s the one thing the whole continent agrees on.',
          },
          {
            id: 'lists',
            speaker: 'A COLLEAGUE',
            dialogue: 'The societies are meeting again. Half the foreign members won’t sit with the other half.',
          },
          {
            id: 'lists-2',
            speaker: 'ALBERT',
            dialogue: 'And I’m on the wrong list in both rooms. Nobody asks me to dinner. It’s restful.',
          },
          {
            id: 'lists-3',
            speaker: 'A COLLEAGUE',
            dialogue: 'You’re the one German they’ll still receive abroad. Don’t pretend that’s nothing.',
          },
          {
            id: 'lists-4',
            speaker: 'ALBERT',
            dialogue: 'It isn’t a virtue either. I read the page before I signed it, that’s all.',
          },
          {
            id: 'post',
            narration: 'There are eleven letters on the desk this week and not one of them is about physics.',
          },
          {
            id: 'post-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Hunger relief. Prisoners still not sent home. A league of nations. Congresses open to everybody.',
          },
          {
            id: 'post-3',
            speaker: 'ALBERT',
            dialogue: 'And every one of them wants the same four inches at the bottom of the page.',
          },
          {
            id: 'post-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'They don’t want your physics, Einstein. They want your name on their page. Different thing.',
          },
          {
            id: 'post-5',
            speaker: 'ALBERT',
            dialogue: 'I know what they want. I’ve read all eleven to the end, which is already half an answer.',
          },
          {
            id: 'name',
            speaker: 'A COLLEAGUE',
            dialogue: 'Then give the other half out loud. What’s a name for, now you’ve got one?',
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
            dialogue: 'You didn’t sit down at the meeting.',
          },
          {
            id: 'after-3',
            speaker: 'ALBERT',
            dialogue: 'I stood at the back with my coat on. Couldn’t make myself sit down to it.',
          },
          {
            id: 'post',
            narration: 'The post has changed character since the armistice. Fewer offprints. Many more appeals.',
          },
          {
            id: 'post-2',
            speaker: 'A COLLEAGUE',
            dialogue: 'Hunger relief. Prisoners. A league of nations. Congresses open to men who were shooting at each other in June.',
          },
          {
            id: 'post-3',
            speaker: 'ALBERT',
            dialogue: 'Eleven this week. They come with every delivery, like the milk.',
          },
          {
            id: 'post-4',
            speaker: 'A COLLEAGUE',
            dialogue: 'They don’t want your physics, Einstein. They want your name on their page. Different thing.',
          },
          {
            id: 'post-5',
            speaker: 'ALBERT',
            dialogue: 'I’m forty, and somebody’s handed me an instrument I can’t read.',
          },
          {
            id: 'post-6',
            speaker: 'A COLLEAGUE',
            dialogue: 'Most men would call that luck.',
          },
          {
            id: 'post-7',
            speaker: 'ALBERT',
            dialogue: 'Most men can read the dial. I’d like to know what it measures before I spend any.',
          },
          {
            id: 'post-8',
            narration: 'He reads all eleven to the end. He has not admitted to himself that this is an answer.',
          },
          {
            id: 'name',
            speaker: 'A COLLEAGUE',
            dialogue: 'So. What’s the name for?',
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
            narration: 'The telegram comes from Leiden, from a colleague who heard from London, who heard from the men with the plates.',
          },
          {
            id: 'telegram-2',
            speaker: 'ELSA',
            dialogue: 'Read it out.',
          },
          {
            id: 'telegram-3',
            speaker: 'ALBERT',
            dialogue: 'Deflection observed. Consistent with prediction. That’s the whole thing. Eleven words.',
          },
          {
            id: 'elsa',
            speaker: 'ELSA',
            dialogue: 'Say it so I can tell my sister.',
          },
          {
            id: 'elsa-2',
            speaker: 'ALBERT',
            dialogue: 'They photographed the stars beside the sun while the moon covered it. Then the same stars at night.',
          },
          {
            id: 'elsa-3',
            speaker: 'ALBERT',
            dialogue: 'Then you lay one plate on the other. The sun’s stars are in the wrong place.',
          },
          {
            id: 'elsa-4',
            speaker: 'ELSA',
            dialogue: 'The stars moved?',
          },
          {
            id: 'elsa-5',
            speaker: 'ALBERT',
            dialogue: 'No. The stars did nothing. Their light came past the sun and the road wasn’t flat.',
          },
          {
            id: 'howfar',
            speaker: 'ELSA',
            dialogue: 'And how far wrong are they?',
          },
          {
            id: 'howfar-2',
            speaker: 'ALBERT',
            dialogue: 'About the width of a hair at arm’s length. Exactly that much. Not a hair more.',
          },
          {
            id: 'howfar-3',
            speaker: 'ELSA',
            dialogue: 'Somebody measured a hair. On an island. From a photograph.',
          },
          {
            id: 'howfar-4',
            speaker: 'ALBERT',
            dialogue: 'Measured it twice and compared. That’s the whole job, Elsa. Patience and glass.',
          },
          {
            id: 'calm',
            narration: 'He writes a postcard to his mother. Then he goes back to the page he was on before the boy came up the stairs.',
          },
          {
            id: 'calm-2',
            speaker: 'ELSA',
            dialogue: 'You’re not going to shout?',
          },
          {
            id: 'calm-3',
            speaker: 'ALBERT',
            dialogue: 'The equations have been right since November. The sky was never going to change its mind.',
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
            dialogue: 'That’s your starlight.',
          },
          {
            id: 'telegram-3',
            speaker: 'ALBERT',
            dialogue: 'It’s the starlight. The prediction’s somebody else’s.',
          },
          {
            id: 'drawer',
            narration: 'His own version stops forty pages in, at the place where the geometry got harder than he had time for.',
          },
          {
            id: 'drawer-2',
            speaker: 'ELSA',
            dialogue: 'You could say you had it first.',
          },
          {
            id: 'drawer-3',
            speaker: 'ALBERT',
            dialogue: 'I had the question first. He had the answer. I’m not going to muddle those two.',
          },
          {
            id: 'measure',
            speaker: 'ELSA',
            dialogue: 'Then what’s there to be glad about?',
          },
          {
            id: 'measure-2',
            speaker: 'ALBERT',
            dialogue: 'The light bent, Elsa. Somebody took a camera to an island and the light bent.',
          },
          {
            id: 'measure-3',
            speaker: 'ALBERT',
            dialogue: 'It would have bent if I’d never picked up a pen. That’s the part I like.',
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
            dialogue: 'Nine letters this morning start by explaining relativity to you.',
          },
          {
            id: 'post-3',
            speaker: 'ALBERT',
            dialogue: 'Does any of them get it right?',
          },
          {
            id: 'post-4',
            speaker: 'THE SECRETARY',
            dialogue: 'One’s close. He’s decided you meant everything is a matter of opinion.',
          },
          {
            id: 'post-5',
            speaker: 'ALBERT',
            dialogue: 'That’s the opposite of what I meant, and he’s written four pages of it.',
          },
          {
            id: 'street',
            narration: 'On the pavement a young man from a newspaper walks backwards in front of him with a notebook open.',
          },
          {
            id: 'street-2',
            speaker: 'A REPORTER',
            dialogue: 'Professor. One sentence. For people reading on a tram.',
          },
          {
            id: 'street-3',
            speaker: 'ALBERT',
            dialogue: 'All right. Two men can disagree about when a thing happened, and both be right.',
          },
          {
            id: 'street-4',
            speaker: 'A REPORTER',
            dialogue: 'Both right?',
          },
          {
            id: 'street-5',
            speaker: 'ALBERT',
            dialogue: 'There’s no clock hanging over the world to settle it. Only light is the same for everybody.',
          },
          {
            id: 'street-6',
            speaker: 'A REPORTER',
            dialogue: 'My editor will cut that. It sounds like you’re saying nothing’s true.',
          },
          {
            id: 'street-7',
            speaker: 'ALBERT',
            dialogue: 'It’s the opposite. One thing’s so true the clocks have to bend to keep up with it.',
          },
          {
            id: 'street-8',
            speaker: 'A REPORTER',
            dialogue: 'Shorter?',
          },
          {
            id: 'street-9',
            speaker: 'ALBERT',
            dialogue: 'Any shorter and it stops being the thing. Then it’s a slogan.',
          },
          {
            id: 'spend',
            narration: 'The morning paper says, in letters two inches high, that the professor has proved nothing is true.',
          },
          {
            id: 'spend-2',
            speaker: 'ALBERT',
            dialogue: 'If they’ll print that, they’ll print something worth reading.',
          },
          {
            id: 'spend-3',
            speaker: 'THE SECRETARY',
            dialogue: 'The four appeals, then. Shall I bring the pen?',
          },
          {
            id: 'spend-4',
            speaker: 'ALBERT',
            dialogue: 'Bring the pen. They’ve handed me something I can spend, so I’ll spend it.',
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
            dialogue: 'In this weather? What do they think is going to come out of the door?',
          },
          {
            id: 'halls',
            narration: 'The halls sell out. People who cannot follow a line of algebra come to look at a man who can.',
          },
          {
            id: 'halls-2',
            speaker: 'A STUDENT',
            dialogue: 'Professor, they’re turning people away at the doors.',
          },
          {
            id: 'halls-3',
            speaker: 'ALBERT',
            dialogue: 'They didn’t understand a word of it. They clapped anyway. It’s touching and very strange.',
          },
          {
            id: 'halls-4',
            speaker: 'A STUDENT',
            dialogue: 'They came because it’s beautiful.',
          },
          {
            id: 'halls-5',
            speaker: 'ALBERT',
            dialogue: 'They came because a paper told them the sky was bent. Nothing surprising has happened since the war.',
          },
          {
            id: 'one',
            speaker: 'ELSA',
            dialogue: 'The man at the front asked you to put it in one sentence.',
          },
          {
            id: 'one-2',
            speaker: 'ALBERT',
            dialogue: 'I gave him one. He looked at me as if I’d been rude to his wife.',
          },
          {
            id: 'cost',
            narration: 'The work he can do in a day is measured now by the interruptions between the parts of it.',
          },
          {
            id: 'cost-2',
            speaker: 'ALBERT',
            dialogue: 'I start at five in the morning. It’s the only hour nobody’s claimed yet.',
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
            dialogue: 'So nobody’s gone to look. No expedition. No plates.',
          },
          {
            id: 'known-3',
            speaker: 'ALBERT',
            dialogue: 'No ship, no island, no camera. Officially it’s still a nice guess.',
          },
          {
            id: 'wait',
            speaker: 'A STUDENT',
            dialogue: 'Doesn’t that bother you?',
          },
          {
            id: 'wait-2',
            speaker: 'ALBERT',
            dialogue: 'Somebody will look, at some eclipse or other, and the sky will say what it says.',
          },
          {
            id: 'wait-3',
            speaker: 'A STUDENT',
            dialogue: 'You could push them. They’d go, if you asked.',
          },
          {
            id: 'wait-4',
            speaker: 'ALBERT',
            dialogue: 'I don’t mind the waiting as much as my colleagues do. I’m not sure that’s a virtue.',
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
            dialogue: 'The same one. Anything in it?',
          },
          {
            id: 'stand-4',
            speaker: 'THE NEWSAGENT',
            dialogue: 'A professor died. Four lines, inside page, under the shipping.',
          },
          {
            id: 'stand-5',
            speaker: 'ALBERT',
            dialogue: 'That’s the going rate. I’ve read the four lines. He was worth forty.',
          },
          {
            id: 'home',
            narration: 'He pays for the paper with a wet coin and walks home unrecognised past the tram stop.',
          },
          {
            id: 'home-2',
            speaker: 'ALBERT',
            dialogue: 'It’s a mercy, really.',
          },
          {
            id: 'home-3',
            narration: 'He says it aloud, to nobody, and goes on turning it over afterwards like a stone in a pocket.',
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
            dialogue: 'Read the whole of it. What’s it for?',
          },
          {
            id: 'telegram-3',
            speaker: 'ALBERT',
            dialogue: 'The law of the photoelectric effect.',
          },
          {
            id: 'telegram-4',
            speaker: 'ELSA',
            dialogue: 'And what’s that when it’s at home?',
          },
          {
            id: 'telegram-5',
            speaker: 'ALBERT',
            dialogue: 'The paper about light arriving in lumps. Shine a lamp on metal and the metal spits out bits of electricity.',
          },
          {
            id: 'telegram-6',
            speaker: 'ALBERT',
            dialogue: 'Not a stream pouring in. Lumps. One lump in, one bit out. Brighter just means more lumps.',
          },
          {
            id: 'nothing',
            speaker: 'ELSA',
            dialogue: 'Nothing about space, then. Nothing about time.',
          },
          {
            id: 'nothing-2',
            speaker: 'ALBERT',
            dialogue: 'Not a word. They’ve given it for the one paper they were sure of.',
          },
          {
            id: 'nothing-3',
            speaker: 'ELSA',
            dialogue: 'Are you insulted?',
          },
          {
            id: 'nothing-4',
            speaker: 'ALBERT',
            dialogue: 'I think it’s funny. I expect I’ll go on finding it funny for about a year.',
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
            dialogue: 'All of it. It was written down. I’ve never got out of anything that was written down.',
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
            dialogue: 'What are you two actually arguing about? It’s been going since Tuesday.',
          },
          {
            id: 'mornings-3',
            speaker: 'ALBERT',
            dialogue: 'Whether the world’s made up its mind before anybody looks. He says that isn’t a proper question.',
          },
          {
            id: 'mornings-4',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And you say?',
          },
          {
            id: 'mornings-5',
            speaker: 'ALBERT',
            dialogue: 'That it’s the only question. Watch. Niels — I’ve brought you a box.',
          },
          {
            id: 'box',
            speaker: 'BOHR',
            dialogue: 'Ah — yes — a box — it’s always a box with you — go on, go on.',
          },
          {
            id: 'box-2',
            speaker: 'ALBERT',
            dialogue: 'It hangs from a spring and it’s full of light. A hole in the side, a shutter over the hole.',
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
            dialogue: 'Then I weigh it. Lighter by exactly what left. And the clock says exactly when.',
          },
          {
            id: 'box-6',
            speaker: 'ALBERT',
            dialogue: 'Both. Exactly. Your rule says nature won’t allow both at once. My box allows it.',
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
            dialogue: 'He’s gone off down the wrong corridor.',
          },
          {
            id: 'pause-4',
            speaker: 'ALBERT',
            dialogue: 'He does that when he’s being careful. It looks like losing and it takes much longer.',
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
            dialogue: 'And a clock hanging lower runs slow. You told us that yourself, in 1915.',
          },
          {
            id: 'evening-4',
            speaker: 'BOHR',
            dialogue: 'So the clock isn’t exact any more. Your box cheated you, and it used your own theory.',
          },
          {
            id: 'evening-5',
            speaker: 'ALBERT',
            dialogue: 'That’s the cruellest thing anybody’s done to me before breakfast.',
          },
          {
            id: 'evening-6',
            speaker: 'BOHR',
            dialogue: 'You’re not saying it’s wrong. You’re saying you don’t like it. Only one of those is physics.',
          },
          {
            id: 'argue',
            speaker: 'BOHR',
            dialogue: 'There’s another breakfast tomorrow. Will you bring me a better box, or let me finish a sentence?',
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
            dialogue: 'Why a box? Why not just say what you mean?',
          },
          {
            id: 'device-3',
            speaker: 'ALBERT',
            dialogue: 'What I mean is that nature isn’t as vague as they say. You can’t argue with a man about vagueness.',
          },
          {
            id: 'device-4',
            speaker: 'ALBERT',
            dialogue: 'You can argue about a box. A box either does the thing or it doesn’t.',
          },
          {
            id: 'device-5',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And what does yours do?',
          },
          {
            id: 'device-6',
            speaker: 'ALBERT',
            dialogue: 'Lets out one flash, and tells me the weight that left and the instant it left. They say you can’t have both.',
          },
          {
            id: 'night',
            narration: 'It takes his opponent one night to find the flaw. He is said to have walked in circles for most of it.',
          },
          {
            id: 'reply',
            speaker: 'BOHR',
            dialogue: 'It isn’t that nature is vague. It’s — how shall I put it — your question assumes an answer.',
          },
          {
            id: 'reply-2',
            speaker: 'BOHR',
            dialogue: 'An answer nature was never asked for. You want it to have something before anybody needs it.',
          },
          {
            id: 'reply-3',
            speaker: 'ALBERT',
            dialogue: 'A stone has a position whether I’m looking at it or not.',
          },
          {
            id: 'reply-4',
            speaker: 'BOHR',
            dialogue: 'A stone, yes — certainly — but a stone is very large, and that’s the whole difficulty.',
          },
          {
            id: 'reply-5',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Which of them’s winning?',
          },
          {
            id: 'reply-6',
            speaker: 'ALBERT',
            dialogue: 'Neither. That’s why we keep at it. Nobody sane spends thirty years on an argument he can win.',
          },
          {
            id: 'argue',
            speaker: 'BOHR',
            dialogue: 'The session closes in ten minutes. Shall we go round once more, or go and eat something?',
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
            dialogue: 'What’s it about this time?',
          },
          {
            id: 'letter-5',
            speaker: 'ALBERT',
            dialogue: 'They say you can’t know where a small thing is and how fast it’s going. Not ever. Not both.',
          },
          {
            id: 'letter-6',
            speaker: 'ELSA',
            dialogue: 'Because the instruments are poor.',
          },
          {
            id: 'letter-7',
            speaker: 'ALBERT',
            dialogue: 'No. Because there’s nothing there to know, they say. The world hasn’t settled it until somebody looks.',
          },
          {
            id: 'letter-8',
            speaker: 'ELSA',
            dialogue: 'And you’ve drawn a box.',
          },
          {
            id: 'letter-9',
            speaker: 'ALBERT',
            dialogue: 'A box with a shutter and a clock. I think it forces the world to settle it. He’ll find the hole.',
          },
          {
            id: 'letter-10',
            speaker: 'ELSA',
            dialogue: 'Then why send it at all?',
          },
          {
            id: 'letter-11',
            speaker: 'ALBERT',
            dialogue: 'Because he’ll find the hole and I’ll learn something. There’s nobody else I can say that about.',
          },
          {
            id: 'wait',
            narration: 'Letters are a poor way to be disagreed with. By the time the reply comes he has thought of two better objections.',
          },
          {
            id: 'argue',
            speaker: 'ELSA',
            dialogue: 'You’re reading it over again. Is it a kind letter or a hard one?',
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
            dialogue: 'Why are you standing in the doorway? The cab’s paid by the hour.',
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
            dialogue: 'At the rooms. Very carefully. You won’t see them again.',
          },
          {
            id: 'winter-6',
            speaker: 'ELSA',
            dialogue: 'You’re being theatrical.',
          },
          {
            id: 'winter-7',
            speaker: 'ALBERT',
            dialogue: 'I’m doing arithmetic. I’ve been doing it since the lists started having professors on them.',
          },
          {
            id: 'zurich',
            speaker: 'ELSA',
            dialogue: 'We stop at Zürich?',
          },
          {
            id: 'zurich-2',
            speaker: 'ALBERT',
            dialogue: 'For an afternoon. Eduard’s there.',
          },
          {
            id: 'zurich-3',
            speaker: 'ELSA',
            dialogue: 'He’ll want you to play.',
          },
          {
            id: 'zurich-4',
            speaker: 'ALBERT',
            dialogue: 'Then I’ll play. He’s never wanted conversation from me. Music he can take.',
          },
          {
            id: 'zurich-5',
            narration: 'They sit an hour in a quiet room in Zürich. He plays; his son listens with his eyes closed; nobody mentions the boat.',
          },
          {
            id: 'zurich-6',
            speaker: 'ALBERT',
            dialogue: 'I’ll write. Every week.',
          },
          {
            id: 'spring',
            narration: 'By spring the government has changed, and the letters from friends all say the same sentence in different handwriting.',
          },
          {
            id: 'spring-2',
            speaker: 'ELSA',
            dialogue: 'They say don’t come back.',
          },
          {
            id: 'spring-3',
            speaker: 'ALBERT',
            dialogue: 'They say it politely. They’re right. And there’s still a seat at the Academy with my name on it.',
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
            dialogue: 'That the government’s changed. And that the universities are to be cleaned.',
          },
          {
            id: 'news-4',
            speaker: 'ELSA',
            dialogue: 'Cleaned.',
          },
          {
            id: 'news-5',
            speaker: 'ALBERT',
            dialogue: 'That’s the word they print. It’s chosen so nobody reading it has to picture anything.',
          },
          {
            id: 'letters',
            narration: 'The letters arrive over three weeks from three countries, and all of them say the same sentence in different handwriting.',
          },
          {
            id: 'letters-2',
            speaker: 'ELSA',
            dialogue: 'Who’s written?',
          },
          {
            id: 'letters-3',
            speaker: 'ALBERT',
            dialogue: 'Six. Colleagues of twenty years, not colleagues any more, by order of somebody in an office.',
          },
          {
            id: 'letters-4',
            speaker: 'ELSA',
            dialogue: 'And the others?',
          },
          {
            id: 'letters-5',
            speaker: 'ALBERT',
            dialogue: 'The others haven’t written. That silence is a letter too, and I can read it.',
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
            dialogue: 'I could. Then it’s something done to me, and I’ll be explaining that for the rest of my life.',
          },
          {
            id: 'resign',
            speaker: 'ELSA',
            dialogue: 'There’s hotel paper on the desk. What are you going to put on it?',
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
            dialogue: 'It counts this morning. The government’s changed and the universities are to be cleaned.',
          },
          {
            id: 'news-3',
            speaker: 'ELSA',
            dialogue: 'You hold nothing there. There’s nothing for you to resign.',
          },
          {
            id: 'news-4',
            speaker: 'ALBERT',
            dialogue: 'Not a thing. No chair, no seat, no salary. It’s the weakest place a man can argue from.',
          },
          {
            id: 'news-5',
            speaker: 'ELSA',
            dialogue: 'Then don’t argue.',
          },
          {
            id: 'letters',
            narration: 'The letters come over three weeks, and all of them say the same sentence in different handwriting.',
          },
          {
            id: 'letters-2',
            speaker: 'ALBERT',
            dialogue: 'Men I’ve written to for twenty years aren’t anything at all now. Officially.',
          },
          {
            id: 'letters-3',
            speaker: 'ELSA',
            dialogue: 'And some haven’t written.',
          },
          {
            id: 'letters-4',
            speaker: 'ALBERT',
            dialogue: 'Some haven’t. That silence is a letter too, and it’s perfectly legible.',
          },
          {
            id: 'have',
            speaker: 'ELSA',
            dialogue: 'What do you actually have?',
          },
          {
            id: 'have-2',
            speaker: 'ALBERT',
            dialogue: 'A name that crosses borders, and a blank sheet of paper. It’s harder than it sounds.',
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
            dialogue: 'The violin goes in the cabin. So do the papers. The rest is furniture.',
          },
          {
            id: 'coast',
            narration: 'He stands at the rail until the coastline is a smudge, and then a rumour, and then nothing at all.',
          },
          {
            id: 'coast-2',
            speaker: 'ELSA',
            dialogue: 'You’ll catch cold out here.',
          },
          {
            id: 'coast-3',
            speaker: 'ALBERT',
            dialogue: 'I’m fifty-four and stateless again. Second time. It suits me better than it should.',
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
            dialogue: 'There. The photograph’s nine years old and it wasn’t flattering then.',
          },
          {
            id: 'border-4',
            speaker: 'THE GUARD',
            dialogue: 'Purpose of travel.',
          },
          {
            id: 'border-5',
            speaker: 'ALBERT',
            dialogue: 'Work. The equations went ahead of me in twelve languages and nobody asked them anything.',
          },
          {
            id: 'ahead',
            narration: 'Somewhere ahead there is an institute with money, no students, and a room he has not yet seen.',
          },
          {
            id: 'ahead-2',
            speaker: 'ALBERT',
            dialogue: 'It isn’t a homecoming. I’ve stopped expecting those.',
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
            dialogue: 'Four screw holes. They’ve left the holes.',
          },
          {
            id: 'plate-4',
            speaker: 'THE PORTER',
            dialogue: 'I could fill them. Takes a minute.',
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
            dialogue: 'On the train I still can’t work out whether I’m being driven out or just going first.',
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
            dialogue: 'You’ve been at that window an hour.',
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
            dialogue: 'And I know people at the other end of that line. Most of them have nowhere to go.',
          },
          {
            id: 'north',
            narration: 'Being safe by an accident of paperwork turns out to feel exactly like being lucky and not at all like being right.',
          },
          {
            id: 'north-2',
            speaker: 'ALBERT',
            dialogue: 'I’m on the right side of a line I didn’t draw. That’s not a character reference.',
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
            dialogue: 'The violin came out the first evening. The rest can wait till I believe in the address.',
          },
          {
            id: 'hook',
            narration: 'The coat goes on a hook that is the wrong height. He never does get used to the hook.',
          },
          {
            id: 'hook-2',
            speaker: 'ELSA',
            dialogue: 'It’s very quiet here. You’ll have to find something to be furious about.',
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
            dialogue: 'I’ll mean it as long as I’ve got the job. The question is what you’ll do with it.',
          },
          {
            id: 'flexner-4',
            speaker: 'ALBERT',
            dialogue: 'You’re asking me that on my first morning, in a hall full of unopened crates.',
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
            dialogue: 'You’ve bought a wireless.',
          },
          {
            id: 'rooms-3',
            speaker: 'ALBERT',
            dialogue: 'A better one. It’s the only concession I’m making to the year.',
          },
          {
            id: 'rooms-4',
            speaker: 'ELSA',
            dialogue: 'You have it so loud I can’t hear myself think.',
          },
          {
            id: 'rooms-5',
            speaker: 'ALBERT',
            dialogue: 'That’s largely the idea.',
          },
          {
            id: 'news',
            narration: 'The upheaval is entirely elsewhere, happening to people he knows by name, and a life can fail to be interrupted.',
          },
          {
            id: 'news-2',
            speaker: 'ELSA',
            dialogue: 'You can’t stop any of it by hearing it sooner.',
          },
          {
            id: 'news-3',
            speaker: 'ALBERT',
            dialogue: 'No. But I can stop pretending afterwards that I didn’t know.',
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
            dialogue: 'The work’s patient. It’s waited thirty years. It can wait till Thursday.',
          },
          {
            id: 'purpose',
            speaker: 'ELSA',
            dialogue: 'Twenty working years left, at best. What’s the one thing?',
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
            dialogue: 'Because nearly all of it’s wrong, and the wrongness has to go somewhere.',
          },
          {
            id: 'duties',
            speaker: 'FLEXNER',
            dialogue: 'There are no duties here at all. In nineteen years at an academy, were you ever given nothing to do?',
          },
          {
            id: 'duties-2',
            speaker: 'ALBERT',
            dialogue: 'Never once. It’s taken me most of a winter to see that’s the gift.',
          },
          {
            id: 'language',
            narration: 'The language outside the window defeats him for a few months and then quietly stops mattering.',
          },
          {
            id: 'language-2',
            speaker: 'ELSA',
            dialogue: 'They call you the greatest man in the world here, and they’ve still put you on a committee.',
          },
          {
            id: 'language-3',
            speaker: 'ALBERT',
            dialogue: 'Every country has a committee. It’s the one thing that survives translation.',
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
            dialogue: 'I’ve been reading your equations. Not for the physics. For what they allow.',
          },
          {
            id: 'pair-3',
            speaker: 'ALBERT',
            dialogue: 'Allow.',
          },
          {
            id: 'pair-4',
            speaker: 'GÖDEL',
            dialogue: 'The way a lawyer reads a contract. You ask what a thing permits, not what the author wanted.',
          },
          {
            id: 'time',
            speaker: 'ALBERT',
            dialogue: 'And what do mine allow?',
          },
          {
            id: 'time-2',
            speaker: 'GÖDEL',
            dialogue: 'A universe that turns. Not the stars in it. The whole thing, turning. You didn’t forbid that.',
          },
          {
            id: 'time-3',
            speaker: 'ALBERT',
            dialogue: 'Go on.',
          },
          {
            id: 'time-4',
            speaker: 'GÖDEL',
            dialogue: 'In a world like that you set out, go round in a very large circle, and arrive before you left.',
          },
          {
            id: 'bicycle',
            narration: 'A boy on a bicycle comes past them. Neither man moves out of the way, and the boy goes round.',
          },
          {
            id: 'bicycle-2',
            speaker: 'GÖDEL',
            dialogue: 'I’ve written it down. It’s quite rigorous. I checked it four times, and once more this morning.',
          },
          {
            id: 'reply',
            narration: 'Albert walks another twenty paces without answering, which is his highest available form of compliment.',
          },
          {
            id: 'reply-2',
            speaker: 'ALBERT',
            dialogue: 'I’ve always suspected my equations were cleverer than I am.',
          },
          {
            id: 'reply-3',
            speaker: 'ALBERT',
            dialogue: 'It’s a relief to hear it from somebody qualified.',
          },
          {
            id: 'reply-4',
            speaker: 'GÖDEL',
            dialogue: 'I didn’t say the world is like that. Only that you didn’t forbid it. Different claim.',
          },
          {
            id: 'reply-5',
            speaker: 'ALBERT',
            dialogue: 'Kurt. Give me one afternoon.',
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
            dialogue: 'To walk home with the logician. I’d come in for that alone.',
          },
          {
            id: 'walk',
            narration: 'Two overcoats on a summer path, one of them far too heavy, and two long shadows across the lawns.',
          },
          {
            id: 'walk-2',
            speaker: 'GÖDEL',
            dialogue: 'Your universe doesn’t have to have begun. It might only turn.',
          },
          {
            id: 'walk-3',
            speaker: 'ALBERT',
            dialogue: 'That’s an extraordinary thing to say between here and the corner.',
          },
          {
            id: 'walk-4',
            speaker: 'GÖDEL',
            dialogue: 'I checked it four times. And once more this morning, in case the fourth was being kind to me.',
          },
          {
            id: 'walk-5',
            speaker: 'ALBERT',
            dialogue: 'And if it’s true?',
          },
          {
            id: 'walk-6',
            speaker: 'GÖDEL',
            dialogue: 'Then time doesn’t run the way people think. That was never in your equations. Only in their heads.',
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
            dialogue: 'Arguing. There’s a difference, and it matters.',
          },
          {
            id: 'walk-4',
            speaker: 'A NEIGHBOUR',
            dialogue: 'Who’s winning?',
          },
          {
            id: 'walk-5',
            speaker: 'ALBERT',
            dialogue: 'I am. That’s the trouble with it.',
          },
          {
            id: 'miss',
            narration: 'What he misses is not agreement. He has never in his life been short of agreement.',
          },
          {
            id: 'miss-2',
            speaker: 'ALBERT',
            dialogue: 'I want somebody good enough to disagree properly. Slowly. About the assumption, not the answer.',
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
            dialogue: 'Two small things made together, then carried a thousand miles apart. Both of them sealed up.',
          },
          {
            id: 'paper-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'Like a pair of gloves in two boxes.',
          },
          {
            id: 'paper-5',
            speaker: 'ALBERT',
            dialogue: 'That’s my answer, yes. Open one, see a left glove, and you know the far one without touching it.',
          },
          {
            id: 'paper-6',
            speaker: 'HELEN DUKAS',
            dialogue: 'Then what’s the argument about?',
          },
          {
            id: 'paper-7',
            speaker: 'ALBERT',
            dialogue: 'They say the gloves aren’t left or right until somebody looks. Your looking here settles the one over there.',
          },
          {
            id: 'paper-8',
            speaker: 'HELEN DUKAS',
            dialogue: 'How would the far one know it’d been looked at?',
          },
          {
            id: 'paper-9',
            speaker: 'ALBERT',
            dialogue: 'That’s the whole paper. Either it knew all along and they’ve left something out, or the news beats light.',
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
            dialogue: 'They were. I’ve become the man they respect and walk around.',
          },
          {
            id: 'dice',
            speaker: 'ALBERT',
            dialogue: 'I still can’t believe the world settles things by throwing dice. I know how that sounds.',
          },
          {
            id: 'dice-2',
            speaker: 'ALBERT',
            dialogue: 'Seventy per cent sure I’m right. A hundred per cent sure I can’t prove it.',
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
            dialogue: 'Copenhagen again. He’s answered the objection I made in the spring, and answered it well.',
          },
          {
            id: 'file-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'Have you changed your mind?',
          },
          {
            id: 'file-5',
            speaker: 'ALBERT',
            dialogue: 'No. I’ve stopped needing to win, which is cheaper and much easier.',
          },
          {
            id: 'position',
            speaker: 'HELEN DUKAS',
            dialogue: 'Shall I file it with the others?',
          },
          {
            id: 'position-2',
            speaker: 'ALBERT',
            dialogue: 'File it where I can reach it. Their theory works. Every experiment anybody’s done agrees with it.',
          },
          {
            id: 'position-3',
            speaker: 'ALBERT',
            dialogue: 'I just think it’s a lovely description of the shadow of something nobody’s gone round to look at.',
          },
          {
            id: 'dice',
            narration: 'He writes back the same evening, six pages, after reading every line of the other man’s letter twice.',
          },
          {
            id: 'dice-2',
            speaker: 'ALBERT',
            dialogue: 'Put at the end: I can’t believe the world settles its business by throwing.',
          },
          {
            id: 'dice-3',
            speaker: 'ALBERT',
            dialogue: 'And under that: the world’s under no obligation to consult me.',
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
            dialogue: 'You think it’s wrong.',
          },
          {
            id: 'incomplete-3',
            speaker: 'ALBERT',
            dialogue: 'I think it’s right and unfinished. Both can be true, and usually are.',
          },
          {
            id: 'incomplete-4',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Unfinished how?',
          },
          {
            id: 'incomplete-5',
            speaker: 'ALBERT',
            dialogue: 'It gives me the odds beautifully. It won’t tell me what’s there when nobody’s in the room.',
          },
          {
            id: 'incomplete-6',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Maybe nothing is.',
          },
          {
            id: 'incomplete-7',
            speaker: 'ALBERT',
            dialogue: 'Maybe. Then I’ve spent forty years wrong about the thing I was surest of.',
          },
          {
            id: 'alone',
            narration: 'The young men are very polite about this. They have been polite about it for some years now.',
          },
          {
            id: 'alone-2',
            speaker: 'ALBERT',
            dialogue: 'Being handled gently is what happens just before people stop arguing with you.',
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
            dialogue: 'Sorry about the lane. We asked a child where the professor lived and she brought us straight here.',
          },
          {
            id: 'car-3',
            speaker: 'ALBERT',
            dialogue: 'They always do. Sit down. You’ve come a long way to say one thing.',
          },
          {
            id: 'chain',
            speaker: 'SZILÁRD',
            dialogue: 'Uranium. They’ve broken the atom of it in Berlin, and when it breaks it throws out pieces.',
          },
          {
            id: 'chain-2',
            speaker: 'ALBERT',
            dialogue: 'Pieces that can break the next one.',
          },
          {
            id: 'chain-3',
            speaker: 'SZILÁRD',
            dialogue: 'Pieces that can break two more. And those four. Put enough in one place and it doesn’t stop.',
          },
          {
            id: 'chain-4',
            speaker: 'ALBERT',
            dialogue: 'How much is enough?',
          },
          {
            id: 'chain-5',
            speaker: 'SZILÁRD',
            dialogue: 'Nobody knows yet. That’s the point. It isn’t a question of principle now. It’s a question of tonnage.',
          },
          {
            id: 'glass',
            narration: 'He puts the glass of water down on the arm of the chair, very carefully, as though it might be needed later.',
          },
          {
            id: 'glass-2',
            speaker: 'ALBERT',
            dialogue: 'I didn’t think of that.',
          },
          {
            id: 'glass-3',
            speaker: 'SZILÁRD',
            dialogue: 'Nobody did, until last winter.',
          },
          {
            id: 'glass-4',
            speaker: 'ALBERT',
            dialogue: 'Twenty years telling people not to trust nations with anything sharper than a treaty. And I didn’t think of it.',
          },
          {
            id: 'ore',
            speaker: 'SZILÁRD',
            dialogue: 'Germany’s stopped selling the ore out of the mines it took. That isn’t a scientific fact. It’s an administrative one.',
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
            dialogue: 'I don’t need your physics. Everybody’s got the physics. I need a signature that gets read the day it arrives.',
          },
          {
            id: 'flag',
            speaker: 'ALBERT',
            dialogue: 'In 1919 I said I’d never put my name under anybody’s flag again.',
          },
          {
            id: 'flag-2',
            speaker: 'SZILÁRD',
            dialogue: 'It isn’t a flag. It’s a warning. He’s the only man who can do anything about it.',
          },
          {
            id: 'flag-3',
            speaker: 'ALBERT',
            dialogue: 'He’s also the man who’d build it. You’ve thought about that longer than I have.',
          },
          {
            id: 'sign',
            speaker: 'SZILÁRD',
            dialogue: 'There’s a pen on the table, Professor.',
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
            dialogue: 'Uranium. He says when the atom of it breaks, it throws out pieces that break the next one.',
          },
          {
            id: 'letter-5',
            speaker: 'HELEN DUKAS',
            dialogue: 'And those break two more. With enough of it in one place, he says, it doesn’t stop.',
          },
          {
            id: 'letter-6',
            speaker: 'ALBERT',
            dialogue: 'Read the next sentence slowly.',
          },
          {
            id: 'letter-7',
            speaker: 'HELEN DUKAS',
            dialogue: 'Extremely powerful bombs of a new type may be constructed. He’s underlined the word may.',
          },
          {
            id: 'window',
            narration: 'He carries the pages to the window and reads them through twice without sitting down again.',
          },
          {
            id: 'window-2',
            speaker: 'ALBERT',
            dialogue: 'I didn’t think of that. Twenty years saying nations can’t be trusted, and I didn’t think of it.',
          },
          {
            id: 'ore',
            speaker: 'HELEN DUKAS',
            dialogue: 'He writes that Germany’s stopped selling the ore.',
          },
          {
            id: 'ore-2',
            speaker: 'ALBERT',
            dialogue: 'Then somebody over there has thought of it. That ends the argument about whether it’s possible.',
          },
          {
            id: 'name',
            speaker: 'HELEN DUKAS',
            dialogue: 'The last page says he doesn’t need your physics.',
          },
          {
            id: 'name-2',
            speaker: 'ALBERT',
            dialogue: 'No. He needs a signature that gets read the day it arrives. He’s right about that.',
          },
          {
            id: 'sign',
            speaker: 'HELEN DUKAS',
            dialogue: 'There’s a blank line at the bottom. Shall I fetch the pen?',
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
            dialogue: 'There’s no wind at all, Professor.',
          },
          {
            id: 'water-3',
            speaker: 'ALBERT',
            dialogue: 'None. We’ll sit here till it changes its mind. I find I don’t mind.',
          },
          {
            id: 'weight',
            narration: 'The sail goes slack. The boat sits still on flat water inside a shoreline of low trees.',
          },
          {
            id: 'weight-2',
            speaker: 'A NEIGHBOUR',
            dialogue: 'You’ve been quiet since Tuesday.',
          },
          {
            id: 'weight-3',
            speaker: 'ALBERT',
            dialogue: 'Counting hands. A thing goes through a lot of them between a signature and a consequence.',
          },
          {
            id: 'weight-4',
            speaker: 'A NEIGHBOUR',
            dialogue: 'I don’t follow you.',
          },
          {
            id: 'weight-5',
            speaker: 'ALBERT',
            dialogue: 'Nor do the hands. None of them ever feels like the one that did it.',
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
            dialogue: 'Read the middle paragraph out. Tell me if it’s too strong.',
          },
          {
            id: 'read-3',
            speaker: 'ALBERT',
            dialogue: 'Extremely powerful bombs of a new type may be constructed. It isn’t too strong. It’s barely strong enough.',
          },
          {
            id: 'read-4',
            speaker: 'SZILÁRD',
            dialogue: 'Then leave it as it stands.',
          },
          {
            id: 'read-5',
            speaker: 'ALBERT',
            dialogue: 'Put in where the ore comes from. Ministries move for a cargo manifest. They’ve never moved for physics.',
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
            dialogue: 'Don’t thank me. My name’s the only reason anybody will read it, and we both knew that before lunch.',
          },
          {
            id: 'pen-4',
            speaker: 'SZILÁRD',
            dialogue: 'Yes.',
          },
          {
            id: 'pen-5',
            speaker: 'ALBERT',
            dialogue: 'The other option was to be right, and quiet, and late. I don’t want any of the three.',
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
            dialogue: 'You were persuaded in the first four minutes. I watched it happen.',
          },
          {
            id: 'night-3',
            speaker: 'ALBERT',
            dialogue: 'I was. That isn’t the part taking the time.',
          },
          {
            id: 'night-4',
            speaker: 'SZILÁRD',
            dialogue: 'What is?',
          },
          {
            id: 'night-5',
            speaker: 'ALBERT',
            dialogue: 'Living afterwards with having been persuaded in four minutes. That man argues slower.',
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
            dialogue: 'You’re sure.',
          },
          {
            id: 'morning-3',
            speaker: 'ALBERT',
            dialogue: 'I’m not sure of anything. I’ve finished arguing with myself. That’ll have to do.',
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
            dialogue: 'It won’t help. A letter’s urgent when the man who opens it decides it is.',
          },
          {
            id: 'send-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'It isn’t really physics, is it.',
          },
          {
            id: 'send-5',
            speaker: 'ALBERT',
            dialogue: 'No. It’s using a reputation as a tool. I’ve never done that for anything smaller.',
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
            dialogue: 'Now I go back to the equations. They’ve never asked me to decide anything.',
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
            dialogue: 'They didn’t say. They said a great many.',
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
            dialogue: 'Leave it on. I want to hear how they say it the second time.',
          },
          {
            id: 'after',
            narration: 'He sits on the porch for the rest of the afternoon and does not go back inside.',
          },
          {
            id: 'after-2',
            speaker: 'ALBERT',
            dialogue: 'I signed two pages six years ago. I didn’t build any of it. Neither of those helps today.',
          },
          {
            id: 'after-3',
            speaker: 'ALBERT',
            dialogue: 'Somebody has to get it out of national hands now. That’s the work I’ve got left.',
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
            dialogue: 'I did. And they heard it. This afternoon is what being heard turned out to mean.',
          },
          {
            id: 'sit-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'That isn’t fair to you.',
          },
          {
            id: 'sit-5',
            speaker: 'ALBERT',
            dialogue: 'There’s nobody in this room I need to defend myself to. I’d rather not start.',
          },
          {
            id: 'after',
            narration: 'Within a month he is signing appeals again, and this time they are about the thing itself.',
          },
          {
            id: 'after-2',
            speaker: 'ALBERT',
            dialogue: 'It can’t belong to one country. Otherwise every capital is a hostage.',
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
            dialogue: 'To the desk. There’s a drawer I’d very much like to be wrong about.',
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
            dialogue: 'Then you didn’t decide anything.',
          },
          {
            id: 'unsigned-5',
            speaker: 'ALBERT',
            dialogue: 'That’s what I’ve told myself for six years. This afternoon I can see it was a decision.',
          },
          {
            id: 'after',
            speaker: 'ALBERT',
            dialogue: 'It happened without me. It would have happened without me anyway.',
          },
          {
            id: 'after-2',
            speaker: 'ALBERT',
            dialogue: 'Neither of those is the sentence I keep saying to myself. I’ve noticed that.',
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
            dialogue: 'Switch it off. I worked out forty years ago what weight’s worth if you turn it into energy.',
          },
          {
            id: 'news-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'And somebody’s gone and cashed it.',
          },
          {
            id: 'news-5',
            speaker: 'ALBERT',
            dialogue: 'Somebody’s gone and cashed it. In a currency I didn’t pick and can’t call back.',
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
            dialogue: 'Not in the narrow sense a court would use. I’d assumed that would be more comfort than it is.',
          },
          {
            id: 'clean-4',
            speaker: 'ALBERT',
            dialogue: 'You can be innocent of the thing and still be part of the sum.',
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
            dialogue: 'Every one. I can tell you where each turned wrong. It’s never told me where to turn instead.',
          },
          {
            id: 'close',
            narration: 'This one does not turn. He follows it to the end four times before he allows himself to believe the fourth.',
          },
          {
            id: 'close-2',
            speaker: 'AN ASSISTANT',
            dialogue: 'Say what it means. Plainly. I’ll have to repeat it to somebody tomorrow.',
          },
          {
            id: 'close-3',
            speaker: 'ALBERT',
            dialogue: 'Gravity is the shape of space. That’s been settled since 1915 and nobody argues with it.',
          },
          {
            id: 'close-4',
            speaker: 'ALBERT',
            dialogue: 'And a magnet’s pull is a different thing, with different rules, kept in a different drawer.',
          },
          {
            id: 'close-5',
            speaker: 'AN ASSISTANT',
            dialogue: 'And now?',
          },
          {
            id: 'close-6',
            speaker: 'ALBERT',
            dialogue: 'Now they come out of one set of symbols. Two drawers, one cupboard. Nothing bolted on.',
          },
          {
            id: 'quiet',
            narration: 'He wakes nobody. He makes a fair copy in the neat hand he keeps for things he believes are true.',
          },
          {
            id: 'quiet-2',
            speaker: 'ALBERT',
            dialogue: 'There’s a very great deal of string in that cupboard.',
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
            dialogue: 'And this one doesn’t turn.',
          },
          {
            id: 'close-3',
            speaker: 'ALBERT',
            dialogue: 'This one doesn’t turn. Gravity and the magnet in one set of symbols, nothing bolted on.',
          },
          {
            id: 'early',
            speaker: 'AN ASSISTANT',
            dialogue: 'Then why do you look like that?',
          },
          {
            id: 'early-2',
            speaker: 'ALBERT',
            dialogue: 'Because it came easily. Things that come easily have usually come out wrong.',
          },
          {
            id: 'early-3',
            speaker: 'AN ASSISTANT',
            dialogue: 'So you’re going to try to break it.',
          },
          {
            id: 'early-4',
            speaker: 'ALBERT',
            dialogue: 'For two years. It’s the only honest way I know of celebrating anything.',
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
            dialogue: 'It’s taken your whole working life.',
          },
          {
            id: 'close-3',
            speaker: 'ALBERT',
            dialogue: 'My working life, and most of my standing with people whose opinion I pretend not to care about.',
          },
          {
            id: 'audience',
            narration: 'He is old. The young men are busy computing quantities he does not believe are fundamental.',
          },
          {
            id: 'audience-2',
            speaker: 'AN ASSISTANT',
            dialogue: 'They won’t read it.',
          },
          {
            id: 'audience-3',
            speaker: 'ALBERT',
            dialogue: 'Not for ten years. Maybe never. That’s a separate question from whether it’s true.',
          },
          {
            id: 'audience-4',
            speaker: 'AN ASSISTANT',
            dialogue: 'Doesn’t that spoil it?',
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
            dialogue: 'Once is the right number. Ask it.',
          },
          {
            id: 'why',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'Why do you keep at something everybody else has given up on?',
          },
          {
            id: 'why-2',
            speaker: 'ALBERT',
            dialogue: 'Because somebody has to work on the problem that won’t come out.',
          },
          {
            id: 'why-3',
            speaker: 'ALBERT',
            dialogue: 'And I can afford to. My reputation’s made. There’s nothing better to spend it on.',
          },
          {
            id: 'why-4',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And if it never comes out?',
          },
          {
            id: 'why-5',
            speaker: 'ALBERT',
            dialogue: 'Then the cupboard’s full and somebody knows thirty places not to look. That’s not nothing.',
          },
          {
            id: 'chalk',
            narration: 'He rubs the blackboard down with the side of his hand and starts again.',
          },
          {
            id: 'chalk-2',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'You’ve got the same face every time you do that.',
          },
          {
            id: 'chalk-3',
            speaker: 'ALBERT',
            dialogue: 'I’ve been starting again since before you were born. You develop an expression for it.',
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
            dialogue: 'Then I arrive in the middle, which is a much better place to be met.',
          },
          {
            id: 'peace',
            narration: 'Most days the middle is where he stays.',
          },
          {
            id: 'peace-2',
            speaker: 'ALBERT',
            dialogue: 'I’ve made my peace with it. The way you do with a country you mean to go on quarrelling with.',
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
            dialogue: 'The last page isn’t finished.',
          },
          {
            id: 'work-3',
            speaker: 'ALBERT',
            dialogue: 'No. It was never going to be. That’s all right.',
          },
          {
            id: 'refuse',
            narration: 'The surgeons come and put the case for an operation, carefully, twice.',
          },
          {
            id: 'refuse-2',
            speaker: 'ALBERT',
            dialogue: 'I’ve done my share.',
          },
          {
            id: 'refuse-3',
            speaker: 'MARGOT',
            dialogue: 'They say it would buy you time.',
          },
          {
            id: 'refuse-4',
            speaker: 'ALBERT',
            dialogue: 'I don’t want it stretched out artificially. I’d rather go without a fuss.',
          },
          {
            id: 'refuse-5',
            narration: 'The lack of fuss is debatable. The timing is his own.',
          },
          {
            id: 'ask',
            speaker: 'MARGOT',
            dialogue: 'Is there anything you want?',
          },
          {
            id: 'ask-2',
            speaker: 'ALBERT',
            dialogue: 'The glasses. The page. And leave the light on a little.',
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
            dialogue: 'And the rest in a box with a year written on the lid.',
          },
          {
            id: 'stack-4',
            speaker: 'HELEN DUKAS',
            dialogue: 'It’s a very large box.',
          },
          {
            id: 'stack-5',
            speaker: 'ALBERT',
            dialogue: 'It’s the usual size. Only the eulogies pretend otherwise.',
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
            dialogue: 'Some of it. Not all. I’ve never met anybody who did all of it.',
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
            dialogue: 'Never answered. It was a good question, though. Better than most answers.',
          },
          {
            id: 'porch',
            narration: 'An empty chair on the porch, a blanket folded over the arm, evening light coming through the elms.',
          },
          {
            id: 'compass',
            speaker: 'MARGOT',
            dialogue: 'There’s a compass in the drawer with a dent in the case.',
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
            dialogue: 'There’s not much to say. A needle that wouldn’t turn when I did. I’ve been at that bedside ever since.',
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
            dialogue: 'Space bends. Time’s local. Light comes in countable pieces. Atoms leave footprints.',
          },
          {
            id: 'office-4',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'And the last one?',
          },
          {
            id: 'office-5',
            speaker: 'A COLLEAGUE',
            dialogue: 'The two great fields turned out to be one field from two sides. He got that right at the end.',
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
            dialogue: 'I haven’t any particular gift. I’m just very curious, and I was given a lot of time.',
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
            dialogue: 'Space bends. Time’s local. Light in countable pieces. Atoms with footprints. It’s all in a schoolbook now.',
          },
          {
            id: 'office-5',
            speaker: 'A COLLEAGUE',
            dialogue: 'And thirty years at the end on a problem that wouldn’t come out.',
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
            dialogue: 'I haven’t any particular gift. I’m just very curious, and I was given a lot of time.',
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
            dialogue: 'Light in pieces. Atoms with footprints. Time made local. Anybody would be glad of that shelf.',
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
            dialogue: 'Those aren’t the same skill, and I only ever had the first one.',
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
            dialogue: 'He took gravity off Newton and handed it back as geometry.',
          },
          {
            id: 'what-3',
            speaker: 'A COLLEAGUE',
            dialogue: 'Then spent forty years failing to do the same for everything else. Same man, both halves.',
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
            dialogue: 'Less than the width of a hair at arm’s length. He gave the number before anybody looked.',
          },
          {
            id: 'voice',
            speaker: 'ALBERT',
            dialogue: 'The strangest thing about the world is that we can understand it at all.',
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
            dialogue: 'That’s a charming detail.',
          },
          {
            id: 'drawer-6',
            speaker: 'THE CLERK',
            dialogue: 'It isn’t a detail. It’s the whole argument.',
          },
          {
            id: 'voice',
            speaker: 'ALBERT',
            dialogue: 'I was never any good at doing as I was told. It turned out to be the only qualification needed.',
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
            dialogue: 'The equations were the easy part. They never ask you to be brave in a corridor.',
          },
          {
            id: 'voice-2',
            speaker: 'ALBERT',
            dialogue: 'You can be forgiven for being wrong. Having been convenient is harder to explain.',
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
            dialogue: 'It’s a toy his father gave him when he was five and ill in bed. He never made more of it than that.',
          },
          {
            id: 'compass',
            narration: 'The needle swings, and settles, and points where it has always pointed. Nothing is touching it.',
          },
          {
            id: 'voice',
            speaker: 'ALBERT',
            dialogue: 'Something had to be behind it, hidden. I don’t think I ever left that bed.',
          },
        ],
        historicalNote:
          'Einstein recalled the compass his father gave him as a decisive early experience. Dialogue is dramatized.',
      },
    ],
  },
];
