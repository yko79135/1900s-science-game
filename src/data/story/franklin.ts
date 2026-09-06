import type { StoryScene } from '../../types/story';

const sourceIds = ['franklin'];
const laterSourceIds = ['franklinLater'];

/** Board context cards told in full by scenes in this file. */
export const FRANKLIN_REPLACED_CONTEXT_CARDS: string[] = [
  'franklin-card-1947-paris',
  'franklin-card-1951-kings',
  'franklin-card-1952-photo51',
  'franklin-card-1953-shown',
];

export const FRANKLIN_STORY_SCENES: StoryScene[] = [
  // -------------------------------------------------------------------------
  // Prologue
  // -------------------------------------------------------------------------
  {
    id: 'franklin-prologue-notting-hill',
    characterId: 'franklin',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A House Full of Argument',
        locationLabel: 'London',
        yearLabel: '1920s',
        image: {
          setting: 'a tall Notting Hill nursery window over plane trees and a coal cart, early 1920s',
          year: 1926,
          characters: ['franklin'],
          mood: 'bright, exacting, domestic',
          details: ['plane trees in leaf', 'a coal cart and horse', 'a slate and chalk', 'brass stair rail', 'wet London brick'],
          alt: 'A tall sash window above plane trees and a coal cart in a London street in the 1920s.',
        },
        pages: [
          {
            id: 'window',
            narration:
              'Plane trees, a coal cart, and the smell of wet London brick: the nursery window gives on to all three, and the small girl at it is counting the horses. She counts everything. By six she is doing arithmetic for the pleasure of the answers coming out exactly right, and for no other reason anyone can find.',
          },
          {
            id: 'household',
            narration:
              'It is a house of banking and committees and loud opinions kindly meant. Money is not the difficulty here. The difficulty, later, will be that everyone under this roof is quite certain what a useful life looks like, and no two of them agree.',
          },
          {
            id: 'certainty',
            narration:
              'She argues at the dinner table before she can properly reach it, and she argues a thing all the way to its end. Her father enjoys this more than he will admit on the days it is turned on him.',
            speaker: 'HER FATHER',
            dialogue: 'Very well. Then show me how you know it. Not who told you — how you know it.',
          },
        ],
        historicalNote:
          'Rosalind Franklin was born in Notting Hill, London, in 1920, into a prominent Anglo-Jewish family active in banking and public service. Her early aptitude for arithmetic and her appetite for argument are described in standard biographies. The dialogue is dramatized wording, not a quotation.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Formation, 1920–1938
  // -------------------------------------------------------------------------
  {
    id: 'franklin-formation-opening',
    characterId: 'franklin',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'One of the Few Schools That Teaches Physics',
        locationLabel: 'London',
        yearLabel: '1932–1938',
        image: {
          setting: 'a girls’ school chemistry room in west London in the mid-1930s, late afternoon light',
          year: 1935,
          characters: ['franklin'],
          mood: 'disciplined, eager, unsentimental',
          details: ['bunsen burner and tripod', 'ruled exercise book', 'glass burette in a clamp', 'chalked equations', 'hockey boots by the door'],
          alt: 'A school chemistry bench with a burette in a clamp and a ruled exercise book open beside it.',
        },
        pages: [
          {
            id: 'school',
            narration:
              'The school in west London is one of the few that will teach a girl physics and chemistry instead of a little botany and a great deal of deportment. She takes both. Her exercise books are full of crossings-out, and beside each crossing-out is the reason for it, written small.',
          },
          {
            id: 'ladder',
            narration:
              'Hockey in the afternoons, and holidays spent walking. She likes the parts of the world that require a foot to be put in exactly the right place, and she has no patience at all with the parts that only require enthusiasm.',
          },
          {
            id: 'table',
            narration:
              'At fifteen she says it out loud over the soup: she means to be a scientist. It is received the way a stated intention to join a circus might be received in this house — with affection, and alarm, and an immediate counter-proposal.',
            speaker: 'HER FATHER',
            dialogue: 'There is a great deal of good to be done in the world, and most of it is done by people who are needed. Tell me what a laboratory needs you for.',
          },
          {
            id: 'decide',
            narration:
              'Europe is sending its children across the Channel, and the house fills with lists: sponsors found, places arranged, trains met. Her father would rather she gave the next ten years to that. She would rather give them to a bench. The scholarship examinations are in the spring.',
            choices: [
              {
                id: 'science',
                label: 'Sit the examinations, and say plainly why',
                effects: [
                  { type: 'flag', flag: 'franklin.chosenScience', value: true },
                  { type: 'theme', theme: 'workVsService', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'both',
                label: 'Meet the trains and sit the examinations, and sleep less',
                effects: [
                  { type: 'flag', flag: 'franklin.chosenScience', value: true },
                  { type: 'flag', flag: 'franklin.chosenBoth', value: true },
                  { type: 'resources', effects: { network: 1, wellbeing: -2 } },
                ],
              },
              {
                id: 'duty',
                label: 'Give the committees a year first; the science will keep',
                effects: [
                  { type: 'flag', flag: 'franklin.chosenDuty', value: true },
                  { type: 'theme', theme: 'workVsService', amount: -2 },
                  { type: 'resources', effects: { network: 1, funds: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Franklin attended St Paul’s Girls’ School, one of the few London girls’ schools then teaching physics and chemistry, decided on a scientific career in her teens, and won a place at Newnham College, Cambridge, in 1938. Her father’s preference for public service over a laboratory career for her, and the family’s work resettling refugees from Europe, are reported in standard biographies. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-personal-school-lab',
    characterId: 'franklin',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 70 },
    once: true,
    variants: [
      {
        id: 'declared',
        conditions: [
          { type: 'narrativeFlag', flag: 'franklin.chosenScience' },
          { type: 'yearAtLeast', year: 1934 },
        ],
        title: 'The Argument Over the Coffee Cups',
        yearLabel: '1935–1937',
        image: {
          setting: 'a dining room after dinner with a school report and a folded newspaper on the cloth, mid-1930s',
          year: 1936,
          characters: ['franklin'],
          mood: 'tense, affectionate, immovable',
          details: ['a school report on the cloth', 'a folded newspaper', 'two coffee cups', 'gasolier over the table', 'a chair pushed back'],
          alt: 'A school report and a folded newspaper on a dining table with two coffee cups beside them.',
        },
        pages: [
          {
            id: 'report',
            narration:
              'The report is on the cloth between the coffee cups, and it is a very good report, which is precisely why the argument is happening. Nobody in this house objects to her being clever. They object to the use she proposes to put it to.',
          },
          {
            id: 'row',
            narration:
              'She does not raise her voice, because raising it would concede the point about temperament. She sets out the case in order, with the reason for the order, and does not accept a single answer that begins with what people will think.',
            speaker: 'HER FATHER',
            dialogue: 'A laboratory will take your whole life and give you nothing back that anybody can see.',
          },
          {
            id: 'reply',
            narration:
              'She says that is the arrangement she is offering it. Then she clears her own place, goes upstairs, and works through a chapter of physical chemistry that is not on any syllabus she is being examined in, because it is the only reply available at fifteen that will still be true at thirty.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'franklin.declaredEarly', value: true },
          { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
        ],
        historicalNote:
          'Franklin decided on a scientific career in her teens against her father’s preference for public service, and the disagreement is reported in standard biographies. The scene and its dialogue are dramatized.',
      },
      {
        id: 'bench',
        conditions: [{ type: 'yearAtLeast', year: 1934 }],
        title: 'Six Weighings of the Same Thing',
        yearLabel: '1934–1937',
        image: {
          setting: 'a school chemistry laboratory after hours, a balance case open under a single lamp, mid-1930s',
          year: 1935,
          characters: ['franklin'],
          mood: 'absorbed, obstinate, quiet',
          details: ['glass balance case', 'brass weights in a velvet tray', 'a crucible cooling', 'ruled results book', 'the last lamp on'],
          alt: 'An open glass balance case with brass weights in a velvet tray under a single lamp.',
        },
        pages: [
          {
            id: 'balance',
            narration:
              'The others left at four. She weighs the crucible a sixth time, because the fifth disagreed with the fourth in the third decimal and one of the two is a lie. The velvet tray of brass weights is warm where her hand has been resting on the case.',
          },
          {
            id: 'mistress',
            narration:
              'The mistress in charge of the laboratory comes back for her umbrella, sees the lamp, and stands in the doorway rather than in the room, which is the correct instinct.',
            speaker: 'THE SCIENCE MISTRESS',
            dialogue: 'Four figures is what the examiners want, Rosalind. The fifth is for you.',
          },
          {
            id: 'answer',
            narration:
              'That, it turns out, is the whole distinction, and she has just been handed it at fifteen by a woman she will not think to thank for twenty years. She writes the sixth figure down anyway, and beside it the reason the fifth was wrong.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.declaredEarly', value: true }],
        historicalNote:
          'St Paul’s Girls’ School taught physics and chemistry to a standard few girls’ schools then matched. The scene is a dramatized composite; the science mistress is not a named individual.',
      },
    ],
  },
  {
    id: 'franklin-formation-closing',
    characterId: 'franklin',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'examined',
        conditions: [{ type: 'narrativeFlag', flag: 'franklin.chosenScience' }],
        title: 'Three Days in a Cold Hall',
        locationLabel: 'London',
        yearLabel: '1938',
        image: {
          setting: 'an examination hall with rows of small desks and high windows, winter 1938',
          year: 1938,
          characters: ['franklin'],
          mood: 'austere, focused, cold',
          details: ['rows of small desks', 'inkwell and blotting paper', 'high leaded windows', 'a folded overcoat', 'a bell rope'],
          alt: 'Rows of small examination desks under high windows in a cold hall.',
        },
        pages: [
          {
            id: 'papers',
            narration:
              'Three days of papers in a hall too cold for the fingers, and a train home in the dark with the answers still running. She knows two of the questions were badly set, and says so to nobody, because the mark is the mark.',
          },
          {
            id: 'letter',
            narration:
              'The letter comes in the spring: a place, and money attached to it. Her father congratulates her with the particular stiffness of a man keeping a promise he did not want to make, and then, that evening, tells two separate people about it.',
          },
        ],
        historicalNote:
          'Franklin won a place and an entrance award at Newnham College, Cambridge, in 1938. The scene is dramatized around that documented outcome.',
      },
      {
        id: 'given-away',
        title: 'A Year Given Away',
        yearLabel: '1938',
        image: {
          setting: 'a church hall used as a refugee reception office, trestle tables and coats, late 1930s',
          year: 1938,
          characters: ['franklin'],
          mood: 'busy, dutiful, restless',
          details: ['trestle tables', 'lists of names on foolscap', 'a tea urn', 'stacked suitcases', 'a chemistry textbook face-down'],
          alt: 'Trestle tables covered in paper lists in a church hall, with stacked suitcases against a wall.',
        },
        pages: [
          {
            id: 'lists',
            narration:
              'Lists of names in a church hall, a tea urn that will not boil, a suitcase with a label tied to the handle in handwriting she cannot read. The work is real and she is good at it, and she is careful never to say aloud that it is not hers.',
          },
          {
            id: 'nightreading',
            narration:
              'The textbook lives face-down on the table by her bed, open at the same chapter for eleven weeks. The examinations will still be there next year. So, she notices with some relief, will she.',
          },
        ],
        historicalNote:
          'A divergent close for a route in which the decision to go up to Cambridge was deferred. Franklin’s family were active in refugee resettlement work in the late 1930s.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Education, 1938–1945
  // -------------------------------------------------------------------------
  {
    id: 'franklin-education-opening',
    characterId: 'franklin',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'newnham',
        conditions: [{ type: 'locationIs', locationId: 'cambridgeUK' }],
        title: 'Guests of the University',
        locationLabel: 'Cambridge',
        yearLabel: '1938–1941',
        image: {
          setting: 'a wet gravel college court with bicycles against a wall, Cambridge, 1938',
          year: 1939,
          characters: ['franklin'],
          mood: 'grey, determined, expectant',
          details: ['bicycles leaned in a row', 'wet gravel', 'a gowned figure’s folded gown over an arm', 'lecture notebook', 'iron railings'],
          alt: 'Bicycles leaned against a wall beside a wet gravel college court.',
        },
        pages: [
          {
            id: 'court',
            narration:
              'Wet gravel, a row of bicycles, and a court that has not changed its mind about anything since 1871. The women’s colleges teach the same syllabus and sit the same papers; the University has simply not got round to awarding them the degree. She sits at the front of the lecture room. It saves argument later.',
          },
          {
            id: 'benchwork',
            narration:
              'The practical classes smell of hot wax and rubber tubing. She learns to grind, mount, align, expose, and above all to distrust a number that has only been obtained once — the unglamorous half of the subject, the half that decides whether the glamorous half is true.',
            speaker: 'A SUPERVISOR',
            dialogue: 'Most of your results will be wrong, Miss Franklin. The whole art is being the one who finds out first.',
          },
          {
            id: 'call',
            narration:
              'Then the blackout comes down, and the men go, and the laboratories run on women, old men and improvisation. London is being bombed and her family are in it. The college would like her to finish her degree quietly.',
            choices: [
              {
                id: 'warden',
                label: 'Go back to London on the nights you can, and stand a warden’s post',
                effects: [
                  { type: 'flag', flag: 'franklin.warden', value: true },
                  { type: 'theme', theme: 'workVsService', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, network: 1 } },
                ],
              },
              {
                id: 'bench',
                label: 'Stay at the bench and make the work itself count for something',
                effects: [
                  { type: 'flag', flag: 'franklin.bench', value: true },
                  { type: 'theme', theme: 'workVsService', amount: -2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Franklin read natural sciences at Newnham College from 1938; Cambridge did not award full degrees to women until 1948. She served as an air raid warden in London during the war and afterwards took up war-related research on the physical chemistry of coal. Dialogue is dramatized.',
      },
      {
        id: 'deferred',
        conditions: [{ type: 'narrativeFlag', flag: 'franklin.chosenDuty' }],
        title: 'Chemistry After Ten O’Clock',
        yearLabel: '1938–1941',
        image: {
          setting: 'a small desk under a shaded lamp at night, textbooks and committee papers side by side, about 1939',
          year: 1939,
          characters: ['franklin'],
          mood: 'stubborn, tired, private',
          details: ['shaded reading lamp', 'committee minutes in a folder', 'chemistry textbook', 'blackout curtain', 'cold cup of tea'],
          alt: 'A shaded lamp over a desk where a textbook lies open beside a folder of committee papers.',
        },
        pages: [
          {
            id: 'daylight',
            narration:
              'The daylight hours belong to other people’s emergencies: forms, sponsors, a train from Harwich, a child who will not put down a case. She is extremely competent at all of it, which is exactly the trap.',
          },
          {
            id: 'night',
            narration:
              'After ten the blackout curtain goes across and the textbook comes out, and she works problems until the numbers stop making sense. Nobody has set her these problems. Nobody will mark them.',
            speaker: 'HER FATHER',
            dialogue: 'You are burning the candle at both ends for a subject nobody is paying you to learn.',
          },
          {
            id: 'call',
            narration:
              'Then the bombing starts in earnest, and the choice narrows to something simpler than ambition. There are posts to be stood at night. There is also a bench, somewhere, with her name not yet on it.',
            choices: [
              {
                id: 'warden',
                label: 'Go back to London on the nights you can, and stand a warden’s post',
                effects: [
                  { type: 'flag', flag: 'franklin.warden', value: true },
                  { type: 'theme', theme: 'workVsService', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, network: 1 } },
                ],
              },
              {
                id: 'bench',
                label: 'Stay at the bench and make the work itself count for something',
                effects: [
                  { type: 'flag', flag: 'franklin.bench', value: true },
                  { type: 'theme', theme: 'workVsService', amount: -2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A divergent opening for a route in which formal study came later. Franklin’s wartime air raid warden service in London is documented. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Whatever Room Has an Instrument In It',
        yearLabel: '1938–1945',
        image: {
          setting: 'a makeshift wartime laboratory bench with taped windows and borrowed apparatus, early 1940s',
          year: 1941,
          characters: ['franklin'],
          mood: 'improvised, dogged, grey',
          details: ['tape crossed on window glass', 'borrowed glassware', 'a stirrup pump in a corner', 'ruled laboratory notebook', 'a tin hat on a hook'],
          alt: 'A wartime laboratory bench with taped window glass and borrowed apparatus.',
        },
        pages: [
          {
            id: 'wherever',
            narration:
              'The war rearranges everyone. She learns the subject in whatever room happens to have an instrument in it, from whoever happens to be too old or too female to have been sent elsewhere, and finds that this suits her better than a syllabus would have.',
          },
          {
            id: 'discipline',
            narration:
              'What she takes from these years is not a body of knowledge. It is a habit: measure it again, in a different way, before you say it out loud.',
            speaker: 'A SUPERVISOR',
            dialogue: 'Most of your results will be wrong. The whole art is being the one who finds out first.',
          },
          {
            id: 'call',
            narration:
              'London burns in patches all that winter and the nights have to be stood by somebody. There is also work to be done that will still matter when it is over, if anyone is left to read it.',
            choices: [
              {
                id: 'warden',
                label: 'Go back to London on the nights you can, and stand a warden’s post',
                effects: [
                  { type: 'flag', flag: 'franklin.warden', value: true },
                  { type: 'theme', theme: 'workVsService', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, network: 1 } },
                ],
              },
              {
                id: 'bench',
                label: 'Stay at the bench and make the work itself count for something',
                effects: [
                  { type: 'flag', flag: 'franklin.bench', value: true },
                  { type: 'theme', theme: 'workVsService', amount: -2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A place-neutral opening covering the wartime years. Franklin was an air raid warden in London and worked on the physical chemistry of coal for the war effort. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-education-closing',
    characterId: 'franklin',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'coal',
        conditions: [{ type: 'narrativeFlag', flag: 'franklin.bench' }],
        title: 'What the Coal Was Hiding',
        yearLabel: '1942–1945',
        image: {
          setting: 'a wartime research bench with lumps of coal, a crucible furnace and a gas burette, early 1940s',
          year: 1944,
          characters: ['franklin'],
          mood: 'sooty, absorbed, practical',
          details: ['lumps of coal on a tray', 'small crucible furnace', 'gas burette', 'sooty cuffs', 'ruled notebook of densities'],
          alt: 'A bench with lumps of coal on a tray beside a small furnace and a gas burette.',
        },
        pages: [
          {
            id: 'porosity',
            narration:
              'Coal, of all things. The country needs to know which coals will hold a gas and which will let it through, and the answer turns out to live in holes too small to see: a structure of pores that opens or closes depending on how the stuff was cooked.',
          },
          {
            id: 'doctorate',
            narration:
              'She measures densities with helium and with methanol and with anything else that will fit into a pore of a given size, and out of it comes a doctorate and a set of papers that materials people will still be citing when nobody remembers the war. She has found the thing she is for: reading an invisible arrangement off a stubborn substance.',
          },
        ],
        historicalNote:
          'From 1942 Franklin researched the porosity and microstructure of coals for the British Coal Utilisation Research Association; this work earned her Cambridge doctorate in 1945 and is still cited in materials science.',
      },
      {
        id: 'degree',
        conditions: [{ type: 'visitedLocation', locationId: 'cambridgeUK' }],
        title: 'Leaving Cambridge Sideways',
        locationLabel: 'Cambridge',
        yearLabel: '1941–1945',
        image: {
          setting: 'a college gateway with a packed trunk and a bicycle in wartime, about 1945',
          year: 1945,
          characters: ['franklin'],
          mood: 'unceremonious, forward-leaning, grey',
          details: ['corded trunk', 'bicycle with a basket', 'a gate lodge window', 'ration book on top of papers', 'rain on stone'],
          alt: 'A corded trunk and a bicycle beside a college gateway in the rain.',
        },
        pages: [
          {
            id: 'gate',
            narration:
              'She leaves the way everyone leaves in wartime: with a corded trunk, a ration book on top of the papers, and no ceremony worth the name. The University has taught her a subject and declined to give her the letters for it.',
          },
          {
            id: 'ahead',
            narration:
              'What she has instead is a set of hands that can align an apparatus and a temper that will not accept a result it has only seen once. Somebody, somewhere, is going to need exactly that, and she intends to find out who.',
          },
        ],
        historicalNote:
          'Franklin completed her Cambridge studies during the war; the University did not award full degrees to women until 1948.',
      },
      {
        id: 'default',
        title: 'The End of the Blackout',
        yearLabel: '1945',
        image: {
          setting: 'a London street with the blackout tape being scraped from a window, 1945',
          year: 1945,
          characters: ['franklin'],
          mood: 'exhausted, opening, uncertain',
          details: ['blackout tape half scraped away', 'bucket and cloth', 'gapped terrace where a house stood', 'newspaper hoarding', 'spring light'],
          alt: 'Blackout tape being scraped from a window pane in a London terrace in 1945.',
        },
        pages: [
          {
            id: 'tape',
            narration:
              'The tape comes off the windows in strips and the light that arrives is much brighter than anybody remembers asking for. There is a gap in the terrace where a house used to be, and grass in it.',
          },
          {
            id: 'next',
            narration:
              'She is twenty-five and qualified for a profession that has not decided whether it has room for her. There are laboratories on the other side of the Channel with instruments nobody here has learned to use properly. She begins, quietly, to write letters.',
          },
        ],
        historicalNote:
          'A place-neutral close to the war years, before Franklin’s move to Paris in 1947.',
      },
    ],
  },
  {
    id: 'franklin-encounter-computable',
    characterId: 'franklin',
    chapterId: 'education',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'human-turing',
        conditions: [
          { type: 'otherCharacterIsHuman', characterId: 'turing' },
          { type: 'locationIs', locationId: 'cambridgeUK' },
          { type: 'otherCharacterAt', characterId: 'turing', locationId: 'cambridgeUK' },
          { type: 'yearAtLeast', year: 1939 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'A Procedure With No Judgement In It',
        locationLabel: 'Cambridge',
        yearLabel: '1940s',
        image: {
          setting: 'a Cambridge tea room with two cups going cold and a paper covered in diagrams, early 1940s',
          year: 1941,
          characters: ['franklin', 'turing'],
          mood: 'brisk, mutually impatient, delighted',
          details: ['two cups gone cold', 'a typed offprint', 'a pencil drawing of a tape and squares', 'wet coats on hooks', 'ration-thin cake'],
          alt: 'Two cold cups of tea beside a typed paper and a pencil sketch of a tape divided into squares.',
        },
        pages: [
          {
            id: 'offprint',
            narration:
              'He draws it on the back of the offprint: a tape, squares on it, a thing that reads one square at a time and has no opinions whatever. She watches the pencil rather than his face, which is her way of paying attention.',
          },
          {
            id: 'exchange',
            narration:
              'Her objection is not to the machine. It is that a procedure specified perfectly on paper still has to meet an apparatus, and apparatus lies. She says so, and he does not bristle, which surprises her.',
            speaker: 'TURING',
            dialogue: 'Then your instrument is part of the procedure and you have simply not written that part down yet. Write it down and we can argue about whether it terminates.',
          },
          {
            id: 'after',
            narration:
              'They part without agreeing and both go away pleased. For the rest of her life she will write her methods sections as though somebody with no judgement at all is going to have to follow them, and she will never quite say where she got the habit.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'turing', familiarity: 1, respect: 2, tension: 0, flag: 'cambridge-procedure' },
          { type: 'flag', flag: 'franklin.metTuring', value: true },
        ],
        historicalNote:
          'Speculative in its premise: there is no record that Franklin and Turing met. Turing’s 1936 paper on computable numbers and the universal machine, and Franklin’s exacting attention to method and calibration, are both documented. Dialogue is dramatized.',
      },
      {
        id: 'npc-turing',
        conditions: [
          { type: 'otherCharacterIsNpc', characterId: 'turing' },
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'The Paper That Goes Round the Laboratory',
        yearLabel: '1940s',
        image: {
          setting: 'a laboratory table where a passed-around offprint lies among stained notebooks, early 1940s',
          year: 1942,
          characters: ['franklin'],
          mood: 'curious, sidelong, wartime',
          details: ['a much-handled offprint', 'thumbprints on the margin', 'stained notebooks', 'a cold pipe in an ashtray', 'blackout frame at the window'],
          alt: 'A much-handled offprint lying among stained laboratory notebooks under a taped window.',
        },
        pages: [
          {
            id: 'paper',
            narration:
              'An offprint goes round the laboratory, several years old and already legendary among the mathematicians: numbers a machine could compute, by a young man from one of the Cambridge colleges. The margins have other people’s thumbprints on them.',
          },
          {
            id: 'procedure',
            narration:
              'She does not follow the logic all the way down and does not pretend to. What stays is the ambition of it — to specify a procedure so completely that a thing with no judgement at all could carry it out and still be right. That is what a method ought to be, she thinks, and almost none of them are.',
            speaker: 'A MATHEMATICIAN',
            dialogue: 'He has gone off to do something for the government. Nobody will say what. When it is over he will tell us and we shan’t believe a word of it.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.readComputable', value: true }],
        historicalNote:
          'Turing’s paper on computable numbers circulated widely from 1936, and he worked in secret on wartime cryptanalysis from 1939. There is no record that he and Franklin met; here the idea reaches her and he does not. Dialogue is dramatized.',
      },
      {
        id: 'alone',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'Write It Down as Though a Stranger Must Do It',
        yearLabel: '1940s',
        image: {
          setting: 'a laboratory notebook open at a page of numbered method steps, wartime lamplight',
          year: 1943,
          characters: ['franklin'],
          mood: 'solitary, meticulous, quiet',
          details: ['numbered steps in a ruled notebook', 'a ruler holding the page', 'stopwatch', 'inky fingers', 'a shaded lamp'],
          alt: 'A ruled notebook open at a page of numbered method steps beneath a shaded lamp.',
        },
        pages: [
          {
            id: 'steps',
            narration:
              'Nobody hands her the idea; the instrument does. Twice in one month she gets a result she cannot reproduce, and both times it is because she did something with her hands that she never wrote down.',
          },
          {
            id: 'rule',
            narration:
              'So she starts numbering the steps. Not for a journal — for a stranger, a stranger with no sense at all, who must be able to stand at this bench a year from now and arrive at the same number or an honest disagreement.',
          },
        ],
        historicalNote:
          'A divergent version of the same idea reaching her by her own route. Franklin’s exceptional methodological discipline is well documented.',
      },
    ],
  },
  {
    id: 'franklin-personal-warden',
    characterId: 'franklin',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 50 },
    once: true,
    variants: [
      {
        id: 'warden',
        conditions: [
          { type: 'narrativeFlag', flag: 'franklin.warden' },
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'The Post at the End of the Street',
        yearLabel: '1941–1944',
        image: {
          setting: 'a sandbagged warden’s post at the end of a dark London street, wartime',
          year: 1942,
          characters: ['franklin'],
          mood: 'cold, watchful, unheroic',
          details: ['sandbags and a stirrup pump', 'a shaded torch', 'tin hat on a nail', 'a street map with squares inked in', 'thermos'],
          alt: 'A sandbagged warden’s post with a stirrup pump, a tin hat on a nail and a shaded torch.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'Sandbags, a stirrup pump, a map of the streets with squares inked on it, and hours of nothing at all. She keeps the map. She corrects it when a house goes, which is not sentiment; an out-of-date map gets somebody killed.',
          },
          {
            id: 'quiet',
            narration:
              'What she is not prepared for is how much of it is waiting. She works problems in her head between the sirens, in the dark, without paper, and finds she can hold rather more of a calculation than she thought.',
            speaker: 'A NEIGHBOUR',
            dialogue: 'You are the only one on this post who checks the same corner twice, love.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1, network: 1 } }],
        historicalNote:
          'Franklin served as an air raid warden in London during the Second World War. The details of a warden’s post are typical of the period; the dialogue is dramatized.',
      },
      {
        id: 'worn',
        conditions: [
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1945 },
          { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 } },
        ],
        title: 'Three Winters of It',
        yearLabel: '1941–1944',
        image: {
          setting: 'a cold bedsit with a single bar of an electric fire and papers stacked on a chair, wartime',
          year: 1943,
          characters: ['franklin'],
          mood: 'depleted, stubborn, grey',
          details: ['one-bar electric fire', 'papers stacked on a chair', 'a mended glove', 'cold teapot', 'window taped in a diamond'],
          alt: 'A one-bar electric fire in a cold room with papers stacked on a chair.',
        },
        pages: [
          {
            id: 'cold',
            narration:
              'One bar of the fire, and only in the evening. She has been cold for three winters and has stopped noticing, which is its own kind of problem, and she eats standing up because sitting down at this hour ends the day.',
          },
          {
            id: 'anyway',
            narration:
              'She writes to her sister that she is perfectly all right and that the work is going well, and both statements are approximately true in the way that a measurement with a large error bar is true.',
          },
        ],
        historicalNote:
          'A dramatized portrait of the wartime years, consistent with the documented shortages and Franklin’s reputation for working through them.',
      },
      {
        id: 'steady',
        conditions: [
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'Sundays on the Chalk',
        yearLabel: '1941–1944',
        image: {
          setting: 'a chalk ridge path above fields on a clear Sunday, wartime southern England',
          year: 1943,
          characters: ['franklin'],
          mood: 'clear, restorative, brisk',
          details: ['chalk path', 'nailed walking boots', 'folded map in a pocket', 'wind in dry grass', 'a distant water tower'],
          alt: 'A chalk ridge path running along a hillside above open fields on a clear day.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'On the Sundays she can get out of London she walks the chalk until her legs give an honest report, and comes back with her face stinging and her temper improved out of all recognition.',
          },
          {
            id: 'reason',
            narration:
              'It is not escape. It is the same appetite as the bench: a landscape is a structure too, and you can read the shape of it off the ground if you are willing to be out in the weather long enough to look.',
          },
        ],
        historicalNote:
          'Franklin was a serious and lifelong walker and climber. The scene is dramatized.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Entry into the Profession, 1945–1950
  // -------------------------------------------------------------------------
  {
    id: 'franklin-entry-opening',
    characterId: 'franklin',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'paris',
        conditions: [{ type: 'locationIs', locationId: 'paris' }],
        title: 'The Best Place in the World to Be Twenty-Six',
        locationLabel: 'Paris',
        yearLabel: '1947–1950',
        image: {
          setting: 'a state chemistry laboratory in post-war Paris with an X-ray set and a shared lunch table',
          year: 1948,
          characters: ['franklin'],
          mood: 'warm, argumentative, alive',
          details: ['X-ray tube in a lead housing', 'shared table with bread and a bottle', 'French notebooks', 'a coke stove', 'lead apron on a peg'],
          alt: 'An X-ray tube in a lead housing beside a laboratory table set for a shared lunch.',
        },
        pages: [
          {
            id: 'quai',
            narration:
              'Paris after the war is cold, short of coal, and the best place in the world to be twenty-six. She takes rooms she can barely heat, is arguing in French inside a month, and is happy in a way she will spend the rest of her life quietly trying to reproduce.',
          },
          {
            id: 'lab',
            narration:
              'The laboratory is a state chemistry service with an X-ray set, a coke stove and no ceremony at all. Everyone eats at the same table. Everyone attacks everyone else’s data over the bread, and nobody goes home wounded, and to her this is close to a miracle.',
            speaker: 'MERING',
            dialogue: 'Carbon is a disgrace. It will not sit still, it will not make a proper crystal, and what it gives you is a smear. So — we learn to read smears.',
          },
          {
            id: 'method',
            narration:
              'There are two ways to spend the next four years. She can chase results a journal will take now, or she can learn the instrument until it stops being an instrument and becomes a way of asking a question.',
            choices: [
              {
                id: 'methodFirst',
                label: 'Learn the instrument until it disappears',
                effects: [
                  { type: 'flag', flag: 'franklin.methodFirst', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, funds: 2 } },
                ],
              },
              {
                id: 'resultsFirst',
                label: 'Publish steadily and build a name while you can',
                effects: [
                  { type: 'flag', flag: 'franklin.resultsFirst', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: -2 },
                  { type: 'resources', effects: { standing: 1, funds: 2 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'From 1947 Franklin worked at the Laboratoire Central des Services Chimiques de l’État in Paris under Jacques Mering, learning X-ray diffraction analysis of imperfectly crystalline carbons, on a salaried state appointment. Friends and colleagues recorded that these were among her happiest years. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Letter With a French Stamp',
        yearLabel: '1947–1950',
        image: {
          setting: 'a desk with an opened letter bearing a French stamp beside a borrowed X-ray apparatus manual',
          year: 1947,
          characters: ['franklin'],
          mood: 'restless, weighing, quiet',
          details: ['letter with a French stamp', 'apparatus manual', 'a timetable', 'unlit pipe of a colleague', 'rain on a window'],
          alt: 'An opened letter with a French stamp lying beside a manual for X-ray apparatus.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter with the French stamp sits on the desk for four days. There is a laboratory over there where they point X-rays at substances too disordered to be called crystals, and read them anyway, and almost nobody in Britain can do it.',
          },
          {
            id: 'here',
            narration:
              'The apparatus in front of her is the same in principle and worse in practice: a tube that runs hot, a camera that has to be aligned by somebody patient, and a stack of plates that will tell the truth only if every one of a hundred small things was done properly. She has been counting the hundred small things since she was fifteen.',
            speaker: 'A COLLEAGUE',
            dialogue: 'Everyone here wants the pattern. Nobody here wants to spend two years learning to trust it.',
          },
          {
            id: 'method',
            narration:
              'There are two ways to spend the next four years. She can chase results a journal will take now, or she can learn the instrument until it stops being an instrument and becomes a way of asking a question.',
            choices: [
              {
                id: 'methodFirst',
                label: 'Learn the instrument until it disappears',
                effects: [
                  { type: 'flag', flag: 'franklin.methodFirst', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, funds: 2 } },
                ],
              },
              {
                id: 'resultsFirst',
                label: 'Publish steadily and build a name while you can',
                effects: [
                  { type: 'flag', flag: 'franklin.resultsFirst', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: -2 },
                  { type: 'resources', effects: { standing: 1, funds: 2 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A place-neutral opening for a route that has not reached Paris. Franklin’s Paris appointment ran from 1947 to 1950. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-card-paris-method',
    characterId: 'franklin',
    chapterId: 'entry',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    replacesContextCardId: 'franklin-card-1947-paris',
    variants: [
      {
        id: 'in-paris',
        conditions: [
          { type: 'locationIs', locationId: 'paris' },
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1950 },
        ],
        title: 'Learning to Read a Smear',
        locationLabel: 'Paris',
        yearLabel: '1947',
        image: {
          setting: 'a darkened X-ray room with a camera aligned on a capillary of coal char, Paris, late 1940s',
          year: 1947,
          characters: ['franklin'],
          mood: 'patient, exacting, absorbed',
          details: ['glass capillary in a holder', 'collimator and camera', 'lead sheet', 'stopclock', 'developing dish under a red lamp'],
          alt: 'A fine glass capillary mounted before an X-ray camera in a darkened laboratory.',
        },
        pages: [
          {
            id: 'exposure',
            narration:
              'A speck of coal char in a glass capillary finer than a hair, a beam collimated down to something measured in fractions of a millimetre, and eleven hours in which nothing whatever appears to happen. What comes off the plate is not a lattice of neat spots. It is soft rings, and rings are what a substance gives you when it refuses to be a crystal.',
          },
          {
            id: 'reading',
            narration:
              'She learns to read the diameter of a ring as a distance and the blur of it as disorder. Some carbons close up their pores when they are heated; some never will, whatever you do to them; and she can tell the two apart from the smear alone, which nobody at home can do.',
          },
          {
            id: 'mering',
            narration:
              'He watches her align the camera for the fourth time in an afternoon and does not tell her to hurry, which is the highest compliment available in this building.',
            speaker: 'MERING',
            dialogue: 'You are not measuring the carbon. You are measuring how badly it is arranged. That is much harder, and it is worth much more.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1947-paris' },
          { type: 'resources', effects: { network: 1 } },
          { type: 'flag', flag: 'franklin.learnedMethod', value: true },
          { type: 'flag', flag: 'franklin.parisWorked', value: true },
        ],
        historicalNote:
          'At the Laboratoire Central des Services Chimiques de l’État, Franklin mastered X-ray diffraction analysis of amorphous carbons under Jacques Mering — the technique she later turned on DNA fibres. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1946 },
          { type: 'yearAtMost', year: 1950 },
        ],
        title: 'The Method, the Slow Way',
        yearLabel: '1947',
        image: {
          setting: 'a cramped X-ray room in a British laboratory with a home-made camera mount, late 1940s',
          year: 1947,
          characters: ['franklin'],
          mood: 'improvised, dogged, isolated',
          details: ['home-made camera mount', 'journal open at a plate of ring patterns', 'brass shim', 'dark-room clock', 'a queue of exposed plates'],
          alt: 'A home-made X-ray camera mount beside a journal opened at a page of ring patterns.',
        },
        pages: [
          {
            id: 'journals',
            narration:
              'There is no shared lunch table here and no one to argue with. She learns the method out of journals and other people’s calibration notes, in a room with a home-made camera mount and a door that has to be wedged shut.',
          },
          {
            id: 'shim',
            narration:
              'It takes her two years to arrive where a fortnight in the right laboratory would have put her, and she arrives with something the fortnight would not have given her: she knows every way the apparatus can lie, because she has been lied to by all of them.',
            speaker: 'THE HEAD OF DEPARTMENT',
            dialogue: 'You have spent a month on the mounting and not one exposure on the specimen.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1947-paris' },
          { type: 'resources', effects: { network: 1 } },
          { type: 'flag', flag: 'franklin.learnedMethod', value: true },
        ],
        historicalNote:
          'The documented route took Franklin to Paris in 1947 to learn diffraction analysis of disordered carbons under Jacques Mering. This variant follows a life in which she acquired the same technique elsewhere and alone. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-encounter-mering',
    characterId: 'franklin',
    chapterId: 'entry',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'argument',
        conditions: [
          { type: 'locationIs', locationId: 'paris' },
          { type: 'yearAtLeast', year: 1948 },
          { type: 'yearAtMost', year: 1950 },
        ],
        title: 'Argument as an Act of Friendship',
        locationLabel: 'Paris',
        yearLabel: '1948–1950',
        image: {
          setting: 'a laboratory lunch table strewn with plates, bread and diffraction photographs, Paris, late 1940s',
          year: 1949,
          characters: ['franklin'],
          mood: 'noisy, affectionate, sharp',
          details: ['diffraction plates propped against a bottle', 'bread and a knife', 'chalked figures on a door', 'coffee cups', 'a cigarette burning down'],
          alt: 'Diffraction photographs propped against a bottle on a laboratory table set for lunch.',
        },
        pages: [
          {
            id: 'table',
            narration:
              'Her photographs are propped against the wine bottle at lunch so that four people can shout at them. In England this would be a humiliation. Here it is the meal.',
          },
          {
            id: 'concede',
            narration:
              'He takes her interpretation apart in about ninety seconds, and she takes his objection apart in rather less, and then they both stop and look at the plate again because something in the argument has shown them a third thing neither had seen.',
            speaker: 'MERING',
            dialogue: 'Good. Now you have two explanations and no way to choose. Go and design the experiment that kills one of them.',
          },
          {
            id: 'keep',
            narration:
              'She will carry this room around with her for the rest of her working life and measure every other laboratory against it, usually unfavourably, and never entirely explain to English colleagues why she seems to be arguing with them so much.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'franklin.parisRoom', value: true },
          { type: 'flag', flag: 'franklin.parisWorked', value: true },
        ],
        historicalNote:
          'Colleagues recorded the open, argumentative style of the Paris laboratory and Franklin’s ease in it; her later English colleagues often read the same directness differently. Dialogue is dramatized.',
      },
      {
        id: 'letters',
        conditions: [
          { type: 'yearAtLeast', year: 1948 },
          { type: 'yearAtMost', year: 1950 },
        ],
        title: 'Correspondence With a Better Laboratory',
        yearLabel: '1948–1950',
        image: {
          setting: 'a desk with a French letter, a returned photograph and marginal notes in two hands, late 1940s',
          year: 1949,
          characters: ['franklin'],
          mood: 'wistful, precise, distant',
          details: ['thin airmail paper', 'a returned diffraction print', 'annotations in two hands', 'a dictionary open', 'an unposted reply'],
          alt: 'A thin airmail letter beside a returned diffraction print annotated in two different hands.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'She sends prints abroad and gets them back with the margins full of a handwriting she has never seen in person: three objections, one of them right, and an instruction to stop apologising for the exposure time.',
          },
          {
            id: 'lack',
            narration:
              'It is a good correspondence and it is not a room. What she wants is four people shouting at one photograph over bread, and what she has is the post, which is slower and much politer than she needs.',
            speaker: 'A FRIEND',
            dialogue: 'You could simply go. They would have you tomorrow.',
          },
        ],
        historicalNote:
          'A divergent version of Franklin’s Paris years, for a life that stayed and corresponded instead. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-personal-mountains',
    characterId: 'franklin',
    chapterId: 'entry',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 50 },
    once: true,
    variants: [
      {
        id: 'high',
        conditions: [
          { type: 'yearAtLeast', year: 1948 },
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 6 },
        ],
        title: 'Where the Foot Goes Exactly',
        yearLabel: 'summer, late 1940s',
        image: {
          setting: 'a high alpine ridge in summer with a rucksack set down on rock, late 1940s',
          year: 1949,
          characters: ['franklin'],
          mood: 'exhilarated, spare, clear',
          details: ['nailed boots', 'coiled rope', 'battered rucksack', 'snow in a north-facing gully', 'a folded contour map'],
          alt: 'A rucksack and coiled rope set down on a high rocky ridge with snow in a gully below.',
        },
        pages: [
          {
            id: 'ridge',
            narration:
              'Nailed boots on dry rock, the rope coiled because it is not needed yet, and four hundred metres of air under her left elbow. She is entirely absorbed and completely happy and would be embarrassed to be told so.',
          },
          {
            id: 'reason',
            narration:
              'It is the same pleasure as the bench and she knows it: a problem with an unforgiving answer, no possibility of talking your way past a mistake, and the requirement to put your foot in exactly the right place, every time, for eleven hours.',
          },
          {
            id: 'down',
            narration:
              'Coming down she works out the ratio of two ring diameters in her head and gets it wrong, and this too she finds enjoyable, because she will know by Tuesday.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1, health: 1 } }],
        historicalNote:
          'Franklin was a serious walker and climber all her adult life and took hard mountain holidays in Europe throughout the Paris years. The scene is dramatized.',
      },
      {
        id: 'low',
        conditions: [{ type: 'yearAtLeast', year: 1948 }],
        title: 'The Boots by the Door',
        yearLabel: 'late 1940s',
        image: {
          setting: 'a small rented room with unused walking boots by the door and a stack of plates on the table, late 1940s',
          year: 1949,
          characters: ['franklin'],
          mood: 'weary, postponed, quiet',
          details: ['unused nailed boots', 'stack of exposed plates', 'a timetable', 'an unopened letter', 'the same shirt on a chair'],
          alt: 'A pair of unused walking boots by a door beside a table stacked with exposed photographic plates.',
        },
        pages: [
          {
            id: 'boots',
            narration:
              'The boots have been by the door since April with the laces still tied the way she left them. There is always one more plate to develop, and the plates are honest work, and honest work is very easy to hide inside.',
          },
          {
            id: 'promise',
            narration:
              'She writes to a friend that she will come in August without fail. She means it when she writes it, and she is aware, sealing the envelope, of exactly how much that is worth.',
          },
        ],
        historicalNote:
          'A dramatized counterpoint for a route in which the work has crowded out the mountains Franklin loved.',
      },
    ],
  },
  {
    id: 'franklin-entry-closing',
    characterId: 'franklin',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'portable',
        conditions: [{ type: 'projectCompleted', projectId: 'franklin-xray-technique' }],
        title: 'A Skill You Can Carry',
        yearLabel: '1950',
        image: {
          setting: 'a packed case of camera parts, collimators and lead sheet ready for a journey, 1950',
          year: 1950,
          characters: ['franklin'],
          mood: 'assured, valedictory, forward-looking',
          details: ['camera parts wrapped in cloth', 'collimator tubes', 'notebook of calibrations', 'labels in French', 'a strapped case'],
          alt: 'Camera parts and collimator tubes wrapped in cloth inside a strapped travelling case.',
        },
        pages: [
          {
            id: 'pack',
            narration:
              'She packs the notebook of calibrations before she packs her clothes. Cameras can be built again; four years of knowing exactly how this one lies cannot.',
          },
          {
            id: 'offer',
            narration:
              'The offers that come are all for the same reason: there are not five people in Britain who can get an interpretable pattern out of a substance that will not crystallise, and she is one of them, and the substances people want read next are not coal.',
          },
        ],
        historicalNote:
          'Franklin returned to Britain in 1950 with a formidable reputation for diffraction work on poorly crystalline materials, which is why she was recruited to apply the technique to biological fibres.',
      },
      {
        id: 'leaving-paris',
        conditions: [{ type: 'narrativeFlag', flag: 'franklin.parisWorked' }],
        title: 'Leaving the Only Laboratory That Suited Her',
        locationLabel: 'Paris',
        yearLabel: '1950',
        image: {
          setting: 'an emptied desk in a Paris laboratory with a farewell bottle and a last shared meal cleared away',
          year: 1950,
          characters: ['franklin'],
          mood: 'reluctant, fond, resolved',
          details: ['emptied desk drawer', 'a bottle and glasses', 'chalk still on the door', 'labels being peeled off', 'a train ticket'],
          alt: 'An emptied laboratory desk with a bottle and glasses left on it and chalk marks still on the door.',
        },
        pages: [
          {
            id: 'clear',
            narration:
              'They give her a bottle and make speeches in two languages and she is dreadful at being toasted, and stands there gripping her own elbows until it is over.',
          },
          {
            id: 'ticket',
            narration:
              'The ticket is bought. She is going back to a country where arguing at lunch is considered a character defect, and she knows it, and she goes anyway, because the instruments are being pointed at something new over there.',
          },
        ],
        historicalNote:
          'Franklin left Paris in 1950 to take up a fellowship in London; friends recorded her reluctance to leave.',
      },
      {
        id: 'default',
        title: 'Whatever Comes Next Will Need a Pattern',
        yearLabel: '1950',
        image: {
          setting: 'a laboratory notebook closed on a desk beside a stack of unlabelled plates, 1950',
          year: 1950,
          characters: ['franklin'],
          mood: 'unsettled, competent, waiting',
          details: ['closed notebook with a rubber band', 'unlabelled plates', 'a letter of application', 'cold lamp', 'a folded map of London'],
          alt: 'A closed laboratory notebook held with a rubber band beside a stack of unlabelled plates.',
        },
        pages: [
          {
            id: 'close',
            narration:
              'The band goes round the notebook and the notebook goes into the case. Whatever the next five years are about, they will be about getting a readable pattern off something that does not want to give one.',
          },
          {
            id: 'wait',
            narration:
              'There is talk in the journals about fibres now — biological ones, spun out of living material, disordered in exactly the way carbon is disordered. She reads it twice and says nothing, and writes to two people.',
          },
        ],
        historicalNote:
          'A place-neutral close to the years in which Franklin became an expert diffractionist, before the DNA work began in 1951.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1951–1953
  // -------------------------------------------------------------------------
  {
    id: 'franklin-breakthrough-opening',
    characterId: 'franklin',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'kings-method',
        conditions: [
          { type: 'locationIs', locationId: 'london' },
          { type: 'narrativeFlag', flag: 'franklin.methodFirst' },
        ],
        title: 'A Basement, a Fine-Focus Tube, and a Wet River',
        locationLabel: 'London',
        yearLabel: '1951',
        image: {
          setting: 'a basement X-ray laboratory near the Thames with a fine-focus tube and hydrogen cylinder, 1951',
          year: 1951,
          characters: ['franklin'],
          mood: 'cold, purposeful, subterranean',
          details: ['fine-focus X-ray tube', 'hydrogen cylinder and bubbler', 'salt solutions in dishes', 'a tilting specimen holder', 'damp on a whitewashed wall'],
          alt: 'A fine-focus X-ray tube and a hydrogen cylinder in a damp basement laboratory.',
        },
        pages: [
          {
            id: 'basement',
            narration:
              'The laboratory is below ground and the river is somewhere behind the wall; you can feel it in the damp on the whitewash. What is in the room is a new fine-focus tube, a micro-camera, and a brief that amounts to one sentence: find out what the fibres are shaped like.',
          },
          {
            id: 'humidity',
            narration:
              'Within weeks she has done the thing nobody else thought to do. Bubbling hydrogen through salt solutions lets her hold the air around the specimen at a chosen wetness — and at high humidity the pattern changes utterly. There are two forms of this substance, not one, and half the confusion in the literature is people photographing a mixture.',
          },
          {
            id: 'brief',
            narration:
              'There is a colleague upstairs who has been working on the same material for two years and who understood that she was arriving to assist him. Nobody in authority has told either of them plainly which of these accounts is true.',
            speaker: 'WILKINS',
            dialogue: 'I had rather assumed you were coming to help me with my problem.',
          },
          {
            id: 'hold',
            narration:
              'Everyone in the building knows two things: that the structure is close, and that a wrong structure published loudly is still a structure published loudly. She has to decide now what she will do with a measurement she is not yet certain of.',
            choices: [
              {
                id: 'hold',
                label: 'Say nothing until the numbers are beyond argument',
                effects: [
                  { type: 'flag', flag: 'franklin.holdForCertainty', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: 2 },
                  { type: 'resources', effects: { standing: -1, funds: 2 } },
                ],
              },
              {
                id: 'publish',
                label: 'Put the measurements out early and let them be argued with',
                effects: [
                  { type: 'flag', flag: 'franklin.publishSoon', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: -2 },
                  { type: 'resources', effects: { standing: 1, exposure: 1, funds: 2 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.kingsPost', value: true }],
        historicalNote:
          'Franklin joined King’s College London in January 1951 on a fellowship, with a new fine-focus tube and micro-camera. Her humidity control established that DNA fibres take two distinct forms, A and B. The ambiguity about her role relative to Maurice Wilkins is documented and was never properly resolved by the laboratory’s director. Dialogue is dramatized.',
      },
      {
        id: 'kings',
        conditions: [{ type: 'locationIs', locationId: 'london' }],
        title: 'Find Out What the Fibres Are Shaped Like',
        locationLabel: 'London',
        yearLabel: '1951',
        image: {
          setting: 'a basement X-ray laboratory near the Thames with specimen fibres drawn on a frame, 1951',
          year: 1951,
          characters: ['franklin'],
          mood: 'cold, methodical, tense',
          details: ['fibre drawn on a wire frame', 'lead apron', 'salt solution dishes', 'exposure clock', 'stone stairs to the street'],
          alt: 'A fine fibre drawn across a wire frame in front of an X-ray camera in a basement laboratory.',
        },
        pages: [
          {
            id: 'gel',
            narration:
              'The material arrives as a sticky gel and has to be drawn out into a fibre thin enough to be worth photographing, which is done with a glass rod and a steady hand and a good deal of swearing. The laboratory is below ground and cold.',
          },
          {
            id: 'twoforms',
            narration:
              'She controls the wetness of the air around the specimen — nobody else has bothered — and the pattern changes completely at high humidity. Two forms, not one. Half the arguments in the literature turn out to be about photographs of a mixture.',
          },
          {
            id: 'brief',
            narration:
              'There is a colleague upstairs who has worked on this material for two years and understood that she was coming to assist him. Nobody in authority has told either of them plainly which account is the true one.',
            speaker: 'WILKINS',
            dialogue: 'I had rather assumed you were coming to help me with my problem.',
          },
          {
            id: 'hold',
            narration:
              'Everyone in the building knows two things: that the structure is close, and that a wrong structure published loudly is still a structure published loudly. She has to decide now what she will do with a measurement she is not yet certain of.',
            choices: [
              {
                id: 'hold',
                label: 'Say nothing until the numbers are beyond argument',
                effects: [
                  { type: 'flag', flag: 'franklin.holdForCertainty', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: 2 },
                  { type: 'resources', effects: { standing: -1, funds: 2 } },
                ],
              },
              {
                id: 'publish',
                label: 'Put the measurements out early and let them be argued with',
                effects: [
                  { type: 'flag', flag: 'franklin.publishSoon', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: -2 },
                  { type: 'resources', effects: { standing: 1, exposure: 1, funds: 2 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.kingsPost', value: true }],
        historicalNote:
          'Franklin joined King’s College London in January 1951 to apply X-ray diffraction to DNA fibres, and her humidity control established the A and B forms. The ambiguity about her role relative to Maurice Wilkins is documented. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Fibres Are Somewhere Else',
        yearLabel: '1951',
        image: {
          setting: 'a laboratory bench with journals open at fibre diffraction plates and no specimen to hand, 1951',
          year: 1951,
          characters: ['franklin'],
          mood: 'frustrated, alert, distant',
          details: ['journals open at plates', 'an empty specimen holder', 'a letter of enquiry', 'measuring loupe', 'a cold radiator'],
          alt: 'Journals open at pages of fibre diffraction photographs beside an empty specimen holder.',
        },
        pages: [
          {
            id: 'reading',
            narration:
              'The published fibre photographs are bad and she can say exactly why: nobody is controlling the water. A fibre of this material is a sponge, and a sponge photographed at an unrecorded humidity is a photograph of nothing in particular.',
          },
          {
            id: 'distance',
            narration:
              'She writes it in a letter, politely, twice, and gets a courteous reply that does not address the point. Then a third letter, less politely, with a table in it. That one is not answered at all.',
            speaker: 'A COLLEAGUE',
            dialogue: 'They will get there without you, you know. Badly, and first.',
          },
          {
            id: 'hold',
            narration:
              'She has a fibre, a borrowed set and no mandate, and the calendar is not on her side. There is a measurement she could make and a measurement she could publish, and they are not yet the same measurement.',
            choices: [
              {
                id: 'hold',
                label: 'Say nothing until the numbers are beyond argument',
                effects: [
                  { type: 'flag', flag: 'franklin.holdForCertainty', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: 2 },
                  { type: 'resources', effects: { standing: -1, funds: 2 } },
                ],
              },
              {
                id: 'publish',
                label: 'Put the measurements out early and let them be argued with',
                effects: [
                  { type: 'flag', flag: 'franklin.publishSoon', value: true },
                  { type: 'theme', theme: 'certaintyVsSpeed', amount: -2 },
                  { type: 'resources', effects: { standing: 1, exposure: 1, funds: 2 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A place-neutral opening for a route that has not reached the King’s College laboratory. Franklin’s insight about humidity control is documented. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-card-kings-role',
    characterId: 'franklin',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 99 },
    once: true,
    replacesContextCardId: 'franklin-card-1951-kings',
    variants: [
      {
        id: 'in-london',
        conditions: [
          { type: 'locationIs', locationId: 'london' },
          { type: 'yearAtLeast', year: 1952 },
        ],
        title: 'Nobody Will Write the Sentence Down',
        locationLabel: 'London',
        yearLabel: '1951–1952',
        image: {
          setting: 'a college corridor between a basement laboratory and an upstairs office, London, early 1950s',
          year: 1952,
          characters: ['franklin'],
          mood: 'chilly, unresolved, formal',
          details: ['a door with two names on it', 'stone stairs', 'a memorandum in a pigeonhole', 'lead apron over an arm', 'a tea trolley'],
          alt: 'A stone stairway between a basement laboratory door and an upstairs office corridor.',
        },
        pages: [
          {
            id: 'ambiguity',
            narration:
              'It could be settled in one sentence by the man who runs the place, and the sentence is never written. She was engaged to lead the fibre work; he was told he would have an assistant; both of them were told what they wanted to hear, and now both of them are in the same corridor being right.',
          },
          {
            id: 'weather',
            narration:
              'So it turns into weather. She is direct, in the manner of the laboratory that formed her, and directness from a woman in this building is read as coldness. He avoids the argument, in the manner of the country that formed him, and avoidance is read by her as evasion. Neither reading is wrong. Neither helps.',
            speaker: 'WILKINS',
            dialogue: 'I am not obstructing you. I simply do not care to conduct my science at a shout.',
          },
          {
            id: 'stance',
            narration:
              'The apparatus is hers, the specimens are hers, the problem was given to her in writing by somebody who has since gone quiet. She has to decide how to hold that.',
            choices: [
              {
                id: 'ground',
                label: 'Say plainly, once, whose apparatus and whose problem this is',
                effects: [
                  { type: 'flag', flag: 'franklin.standGround', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: 2 },
                  { type: 'resources', effects: { standing: 1, network: -1 } },
                ],
              },
              {
                id: 'room',
                label: 'Close the door and let the data do the arguing',
                effects: [
                  { type: 'flag', flag: 'franklin.ownRoom', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: -2 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1951-kings' },
          { type: 'resources', effects: { network: -1, wellbeing: -1 } },
          { type: 'flag', flag: 'franklin.kingsPost', value: true },
        ],
        historicalNote:
          'Franklin was recruited to King’s College London to lead X-ray work on DNA, while Maurice Wilkins, already working on the problem, understood that she would be assisting him. The laboratory’s director never resolved the ambiguity in writing, and the resulting friction lasted the whole of her time there. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [{ type: 'yearAtLeast', year: 1952 }],
        title: 'The Post That Was Never Made Plain',
        yearLabel: '1951–1952',
        image: {
          setting: 'a desk with two letters of appointment worded differently side by side, early 1950s',
          year: 1952,
          characters: ['franklin'],
          mood: 'wary, exact, cool',
          details: ['two letters with different wording', 'a fountain pen uncapped', 'an unsent reply', 'departmental circular', 'rain on a sash window'],
          alt: 'Two letters of appointment with differing wording lying side by side on a desk.',
        },
        pages: [
          {
            id: 'wording',
            narration:
              'She lays the two letters beside each other and reads the wording again. One says the work is hers to direct. The other, sent to somebody else about her, does not say that. The difference is four words and about three years of her life.',
          },
          {
            id: 'learned',
            narration:
              'She has learned this much: an arrangement that everybody understands differently is not an arrangement, it is a delayed argument. From now on she will ask for it in writing, and be thought difficult for asking.',
            speaker: 'A SENIOR COLLEAGUE',
            dialogue: 'Nobody means you any harm. That is rather the trouble — nobody means anything at all.',
          },
          {
            id: 'stance',
            narration:
              'She can force the sentence into the open now, while it is only awkward, or she can put her head down and let the results settle it later.',
            choices: [
              {
                id: 'ground',
                label: 'Say plainly, once, whose apparatus and whose problem this is',
                effects: [
                  { type: 'flag', flag: 'franklin.standGround', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: 2 },
                  { type: 'resources', effects: { standing: 1, network: -1 } },
                ],
              },
              {
                id: 'room',
                label: 'Close the door and let the data do the arguing',
                effects: [
                  { type: 'flag', flag: 'franklin.ownRoom', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: -2 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1951-kings' },
          { type: 'resources', effects: { network: -1, wellbeing: -1 } },
        ],
        historicalNote:
          'The documented dispute arose at King’s College London in 1951 over whether Franklin was to lead the DNA X-ray work or assist Maurice Wilkins. This variant carries the same unresolved ambiguity into a life lived elsewhere. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-card-photograph-51',
    characterId: 'franklin',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 98 },
    once: true,
    replacesContextCardId: 'franklin-card-1952-photo51',
    variants: [
      {
        id: 'taken-kings',
        conditions: [
          { type: 'projectCompleted', projectId: 'franklin-photograph-51' },
          { type: 'locationIs', locationId: 'london' },
          { type: 'yearAtLeast', year: 1952 },
        ],
        title: 'A Hundred Hours',
        locationLabel: 'London',
        yearLabel: '1952',
        image: {
          setting: 'a darkroom under a red safelight where a large plate is lifted dripping from the fixer, 1952',
          year: 1952,
          characters: ['franklin'],
          mood: 'hushed, triumphant, disciplined',
          details: ['red safelight', 'plate dripping over a dish', 'exposure log with a hundred hours written in', 'tongs', 'a wet bench'],
          alt: 'A photographic plate lifted dripping from a fixing dish under a red darkroom safelight.',
        },
        pages: [
          {
            id: 'exposure',
            narration:
              'The specimen tilted, the fibre drawn to a hair, the air around it held wet with a salt solution and a hydrogen line, and then the exposure: not minutes, not hours. A hundred hours, while the building empties and fills and empties again and the log gets another line each morning.',
          },
          {
            id: 'plate',
            narration:
              'The plate comes out of the fixer and she holds it under the safelight and says nothing for a while. A cross. A clean X of spots striding away from the centre, and the layer lines countable, and the fourth one missing exactly as it should be if two chains are running in opposite directions half a turn apart.',
          },
          {
            id: 'gosling',
            narration:
              'Her student has been in and out of the darkroom for four days pretending not to hurry her. He looks at it over her shoulder and forgets to be tactful.',
            speaker: 'GOSLING',
            dialogue: 'That is the best photograph anyone has ever taken of anything. What do we do with it?',
          },
          {
            id: 'answer',
            narration:
              'What they do with it is put it in the drawer and go back to the A form, which is messier, harder, and not yet understood — because a photograph is not a structure, and she will not say a thing is true because it is beautiful.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1952-photo51' },
          { type: 'resources', effects: { standing: 1 } },
          { type: 'flag', flag: 'franklin.tookPhoto51', value: true },
        ],
        historicalNote:
          'In May 1952 Franklin and her research student Raymond Gosling obtained the celebrated B-form diffraction photograph, known as Photograph 51, from a hundred-hour exposure under controlled humidity. Franklin set it aside to concentrate on the more difficult A form. Dialogue is dramatized.',
      },
      {
        id: 'taken-alone',
        conditions: [
          { type: 'projectCompleted', projectId: 'franklin-photograph-51' },
          { type: 'yearAtLeast', year: 1952 },
        ],
        title: 'A Hundred Hours, and Nobody in the Corridor',
        yearLabel: '1952',
        image: {
          setting: 'a darkroom under a red safelight with one plate held up to the light and no one else present',
          year: 1952,
          characters: ['franklin'],
          mood: 'hushed, solitary, exact',
          details: ['red safelight', 'a plate held up dripping', 'exposure log with a hundred hours in it', 'tongs on a wet bench', 'a bolted door'],
          alt: 'A single photographic plate held up dripping under a red darkroom safelight.',
        },
        pages: [
          {
            id: 'exposure',
            narration:
              'The specimen tilted, the fibre drawn to a hair, the air around it held wet with a salt solution and a hydrogen line, and then the exposure: not minutes, not hours. A hundred hours, while the building empties and fills and empties again and the log gets another line each morning.',
          },
          {
            id: 'plate',
            narration:
              'It comes out of the fixer and she holds it under the safelight and says nothing for a long time, because there is nobody in the room to say it to. A cross. A clean X of spots striding away from the centre, the layer lines countable, and the fourth one missing exactly as it should be if two chains run in opposite directions half a turn apart.',
          },
          {
            id: 'answer',
            narration:
              'She dries it, sleeves it, dates the sleeve, and goes back to the other form, which is messier and harder and not yet understood — because a photograph is not a structure, and she will not say a thing is true because it is beautiful.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1952-photo51' },
          { type: 'resources', effects: { standing: 1 } },
          { type: 'flag', flag: 'franklin.tookPhoto51', value: true },
        ],
        historicalNote:
          'The documented photograph was taken at King’s College London in May 1952 by Franklin with her research student Raymond Gosling. This variant follows a life in which the same exposure was made somewhere else, and alone.',
      },
      {
        id: 'not-yet-kings',
        conditions: [
          { type: 'locationIs', locationId: 'london' },
          { type: 'yearAtLeast', year: 1952 },
        ],
        title: 'The Exposure That Would Not Come Clean',
        yearLabel: '1952',
        image: {
          setting: 'a darkroom bench with several imperfect plates laid out and one discarded, early 1950s',
          year: 1952,
          characters: ['franklin'],
          mood: 'stubborn, unsatisfied, patient',
          details: ['plates laid in a row', 'a smeared pattern', 'exposure log with crossings-out', 'red safelight', 'a discarded specimen frame'],
          alt: 'Several photographic plates laid in a row under a safelight, one of them smeared.',
        },
        pages: [
          {
            id: 'row',
            narration:
              'Six plates in a row under the safelight and not one of them will do. The fibre sags, or the humidity drifts overnight, or the specimen dries at hour sixty and the whole pattern reverts to the other form halfway through its own exposure.',
          },
          {
            id: 'again',
            narration:
              'Anyone else would publish the third one with an apology in the caption. She writes the failure up in the log with the reason beside it, resets the salt solution, and starts the clock again. The picture that will settle the argument is in there. It simply has not been earned yet.',
            speaker: 'GOSLING',
            dialogue: 'Another hundred hours, then.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1952-photo51' },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'The documented route produced Photograph 51 in May 1952 from a hundred-hour exposure. This variant follows a life in which the decisive exposure has not yet come out. Dialogue is dramatized.',
      },
      {
        id: 'not-yet',
        conditions: [{ type: 'yearAtLeast', year: 1952 }],
        title: 'The Exposure That Would Not Come Clean',
        yearLabel: '1952',
        image: {
          setting: 'a darkroom bench with several imperfect plates laid out and one discarded, early 1950s',
          year: 1952,
          characters: ['franklin'],
          mood: 'stubborn, unsatisfied, patient',
          details: ['plates laid in a row', 'a smeared pattern', 'exposure log with crossings-out', 'red safelight', 'a discarded specimen frame'],
          alt: 'Several photographic plates laid in a row under a safelight, one of them smeared.',
        },
        pages: [
          {
            id: 'row',
            narration:
              'Six plates in a row under the safelight and not one of them will do. The fibre sags, or the humidity drifts overnight, or the specimen dries at hour sixty and the whole pattern reverts to the other form halfway through its own exposure.',
          },
          {
            id: 'again',
            narration:
              'Anyone else would publish the third one with an apology in the caption. She writes the failure up in the log with the reason beside it, resets the salt solution, and starts the clock again. The picture that will settle the argument is in there. It simply has not been earned yet.',
          },
          {
            id: 'alone',
            narration:
              'There is no student at her elbow to be told any of this, which saves a conversation. She sets the clock, writes the date on the sleeve of a plate that does not exist yet, and puts the kettle on.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1952-photo51' },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'A divergent version of the documented hundred-hour exposure, for a life working without the King’s College laboratory or a research student.',
      },
    ],
  },
  {
    id: 'franklin-breakthrough-closing',
    characterId: 'franklin',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'drawer',
        conditions: [
          { type: 'projectCompleted', projectId: 'franklin-photograph-51' },
          { type: 'narrativeFlag', flag: 'franklin.holdForCertainty' },
        ],
        title: 'The Draft in the Drawer',
        locationLabel: 'London',
        yearLabel: '1952–1953',
        image: {
          setting: 'a desk drawer half open on a typed draft and a folder of measurements, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'private, certain, unhurried',
          details: ['typed draft with pencil corrections', 'folder of measured spacings', 'a rubber band', 'the drawer’s brass handle', 'a lamp left on'],
          alt: 'A half-open desk drawer showing a typed draft and a folder of measurements.',
        },
        pages: [
          {
            id: 'draft',
            narration:
              'The draft is written. Two chains, on the outside, running in opposite directions; the repeat measured; the density accounted for; the water counted. It is nearly all there and the last part is not, and she will not send a paper out with a nearly in it.',
          },
          {
            id: 'weeks',
            narration:
              'Another six weeks, she thinks, closing the drawer. Six weeks is nothing. She has spent four years learning to read a smear and eighteen months getting the humidity right, and six weeks is nothing at all.',
          },
        ],
        historicalNote:
          'By early 1953 Franklin’s unpublished notebooks and drafts contained the essential features of the B-form structure, including the antiparallel chains and the correct repeat. She was working towards publication when the Cambridge model appeared.',
      },
      {
        id: 'photographed',
        conditions: [{ type: 'projectCompleted', projectId: 'franklin-photograph-51' }],
        title: 'What the Plate Already Knows',
        locationLabel: 'London',
        yearLabel: '1952–1953',
        image: {
          setting: 'a lit viewing box with a diffraction plate on it and a ruler laid across the layer lines, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'concentrated, cool, close',
          details: ['illuminated viewing box', 'ruler across layer lines', 'table of spacings', 'sharpened pencil', 'a cup gone cold'],
          alt: 'A diffraction plate on an illuminated viewing box with a ruler laid across its layer lines.',
        },
        pages: [
          {
            id: 'measure',
            narration:
              'She measures the plate again with a ruler and a loupe, because a number obtained once is a rumour. Thirty-four ångström for the repeat. Twenty across. Ten units to the turn. The numbers do not move.',
          },
          {
            id: 'race',
            narration:
              'Somewhere north of here men are cutting metal plates and clamping them to a stand, and she thinks their method is a parlour trick and their arithmetic careless. She is right about both, and it is going to make no difference whatsoever.',
          },
        ],
        historicalNote:
          'Franklin’s measured parameters for the B form — a 34 ångström repeat, a diameter near 20 ångström, ten units per turn — were in her notebooks and in an unpublished Medical Research Council report before the Cambridge model was built.',
      },
      {
        id: 'default',
        title: 'Two Years and No Photograph',
        yearLabel: '1953',
        image: {
          setting: 'a laboratory notebook full of rejected exposures beside a stack of journals, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'frustrated, unbowed, tired',
          details: ['pages of rejected exposures', 'journals with paper markers', 'a broken specimen frame', 'cold lamp', 'a list of things to try'],
          alt: 'A notebook full of crossed-out exposure records beside a stack of journals with paper markers.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'Two years of exposures and a notebook that reads like a ledger of everything that can go wrong with a wet fibre. She has learned an enormous amount and proved nothing anybody can point to.',
          },
          {
            id: 'onward',
            narration:
              'There is a list on the last page of things still to try, in her handwriting, numbered, with the reason for each. It is not a defeat. It is what the middle of a hard problem actually looks like, and she has never once mistaken the middle for the end.',
          },
        ],
        historicalNote:
          'A divergent close for a route in which the decisive DNA photograph was never obtained.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Crisis and Responsibility, 1953
  // -------------------------------------------------------------------------
  {
    id: 'franklin-crisis-opening',
    characterId: 'franklin',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'packing',
        conditions: [{ type: 'narrativeFlag', flag: 'franklin.kingsPost' }],
        title: 'Boxes Labelled in a Small Hand',
        locationLabel: 'London',
        yearLabel: '1953',
        image: {
          setting: 'a laboratory being packed into tea chests, labels written in a small precise hand, London, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'cold, brisk, undercurrent',
          details: ['tea chests and straw', 'labels in small precise handwriting', 'a wrapped camera', 'radiator turned off', 'a corridor noticeboard'],
          alt: 'Tea chests packed with straw and labelled in small precise handwriting in an emptying laboratory.',
        },
        pages: [
          {
            id: 'february',
            narration:
              'Wet wool in the corridor, radiators off again, and a row of tea chests. She is going: another college across town, a different problem, and a laboratory in which nobody will be confused about whose it is. The labels are in her handwriting, which is small and does not slope.',
          },
          {
            id: 'models',
            narration:
              'Cambridge is building models again. The last time they built one it was wrong, and she said so, in a room, at length, and enjoyed herself thoroughly. The talk in the corridor this winter has a different quality. Not excitement. Care.',
            speaker: 'A COLLEAGUE',
            dialogue: 'They have something. I don’t know what they have. I do know they are not asking us for it.',
          },
          {
            id: 'terms',
            narration:
              'And there is a condition attached to the move, put politely and in writing: the nucleic acid work stays here. She reads the sentence twice, folds the letter along its existing crease, and goes back to the chests.',
          },
        ],
        historicalNote:
          'By early 1953 Franklin had arranged to move to Birkbeck College, and was asked to leave the nucleic acid work behind at King’s. The Cambridge model-building effort resumed in that period. Dialogue is dramatized.',
      },
      {
        id: 'arriving',
        conditions: [{ type: 'locationIs', locationId: 'london' }],
        title: 'Arriving in the Middle of Somebody Else’s Year',
        locationLabel: 'London',
        yearLabel: '1953',
        image: {
          setting: 'a London college corridor seen by somebody who has just put a case down in it, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'displaced, alert, late',
          details: ['a case set down on stone', 'a corridor noticeboard', 'unfamiliar pigeonholes', 'a wet coat still buttoned', 'a radiator ticking'],
          alt: 'A travelling case set down on a stone corridor floor beside a noticeboard.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'She puts the case down in a corridor she has never stood in before and reads the noticeboard the way she reads everything, from the bottom up. There is no drawer in this building with her name on it, no fibre in it spun by her hand, nothing here at all to leave behind when she goes.',
          },
          {
            id: 'ahead',
            narration:
              'The fight in this building is two years old and she has walked in on the last act of it. Nobody has to decide whose apparatus is whose, because none of it has ever been hers.',
            speaker: 'A COLLEAGUE',
            dialogue: 'You have missed the whole of it, and I would not congratulate you if I were you. There is nothing left in here to miss.',
          },
          {
            id: 'models',
            narration:
              'Cambridge is building models again. The talk in this corridor has a quality she recognises from a distance and cannot place from inside: not excitement. Care.',
          },
        ],
        historicalNote:
          'A divergent opening for a life that reached London only in 1953. On the documented route Franklin had been at King’s since January 1951 and was leaving it that spring.',
      },
      {
        id: 'default',
        title: 'News From Cambridge',
        yearLabel: '1953',
        image: {
          setting: 'a corridor noticeboard with a journal issue pinned open, early 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'unsettled, attentive, cold',
          details: ['journal pinned to a board', 'drawing pins', 'a radiator', 'wet umbrella against a wall', 'coats on hooks'],
          alt: 'A journal issue pinned open on a corridor noticeboard beside a wet umbrella.',
        },
        pages: [
          {
            id: 'board',
            narration:
              'Someone has pinned the issue open on the corridor board, which is how news travels in a building like this. Two pages, a diagram, and a sentence at the end so lightly worded that she reads it three times to be sure it says what it says.',
          },
          {
            id: 'reaction',
            narration:
              'Whatever room she has been working in these last two years, the problem was being worked elsewhere too, and elsewhere has finished first.',
            speaker: 'HER STUDENT',
            dialogue: 'You had this. I have heard you say most of it out loud in this corridor.',
          },
          {
            id: 'quiet',
            narration:
              'She reads the diagram the way she reads everything: for what it predicts. It predicts a great deal. That is the part she cannot argue with and does not intend to try.',
          },
        ],
        historicalNote:
          'A place-neutral opening to the year in which the Cambridge model appeared. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-card-data-shown',
    characterId: 'franklin',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 99 },
    once: true,
    replacesContextCardId: 'franklin-card-1953-shown',
    variants: [
      {
        id: 'stood-ground',
        conditions: [
          { any: [{ type: 'chapterIs', chapterId: 'crisis' }, { type: 'chapterIs', chapterId: 'legacy' }] },
          { type: 'yearAtLeast', year: 1953 },
          { type: 'narrativeFlag', flag: 'franklin.standGround' },
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['franklin-dna-ab-forms', 'franklin-photograph-51'],
            count: 1,
          },
        ],
        title: 'Numbers She Knows Better Than Anyone Alive',
        yearLabel: '1953',
        image: {
          setting: 'a laboratory table with a wire and metal model standing on a clamp stand, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'stunned, controlled, exact',
          details: ['wire and sheet-metal model on a clamp stand', 'retort stands', 'a ruler held against the model', 'chalk figures on a board', 'winter light through high windows'],
          alt: 'A wire and sheet-metal molecular model standing on a clamp stand in a laboratory.',
        },
        pages: [
          {
            id: 'invitation',
            narration:
              'A note comes down from Cambridge, cheerful, asking nothing at all. Then a colleague mentions in the corridor, in passing, as though it were a matter of decoration, that they have a model up and would she care to come and look at it.',
          },
          {
            id: 'numbers',
            narration:
              'She looks. Two chains running opposite ways, the bases turned inward, the repeat thirty-four ångström, the diameter twenty, ten units to the turn. She knows those numbers better than anyone alive, because she measured them, in a basement, over two years, and has not published them.',
          },
          {
            id: 'said',
            narration:
              'Nobody in the room says where the numbers came from, and she does not ask it in front of the models, because she made a point once about whose apparatus this was and has watched what saying such things costs. What she says instead is what she would say about anybody’s structure.',
            speaker: 'ROSALIND',
            dialogue: 'It is very pretty. Now show me what it predicts that I can photograph.',
          },
          {
            id: 'answer',
            narration:
              'On the train back she works out, without wanting to, how a set of unpublished measurements gets from a report in a drawer to a model bench sixty miles away. There are only three or four ways and none of them require anyone to have done anything they would call wrong.',
            choices: [
              {
                id: 'record',
                label: 'Put your own measurements into print at once, in your own words',
                effects: [
                  { type: 'flag', flag: 'franklin.saidIt', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: 1 },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'ask',
                label: 'Ask him, once, to his face, and accept whatever answer comes',
                effects: [
                  { type: 'flag', flag: 'franklin.askedHim', value: true },
                  { type: 'flag', flag: 'franklin.saidIt', value: true },
                  { type: 'resources', effects: { network: -1, wellbeing: -1 } },
                ],
              },
              {
                id: 'quiet',
                label: 'Say nothing, and take the working half of your life with you',
                effects: [
                  { type: 'flag', flag: 'franklin.saidNothing', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: -1 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1953-shown' },
          { type: 'resources', effects: { standing: -1, exposure: 1 } },
        ],
        historicalNote:
          'In January 1953 Maurice Wilkins showed Photograph 51 to James Watson without Franklin’s knowledge, and an unpublished Medical Research Council report containing her measurements reached the Cambridge group shortly afterwards. Both fed the model published that April. Franklin was never told how her data had travelled. Dialogue is dramatized.',
      },
      {
        id: 'measured-them',
        conditions: [
          { any: [{ type: 'chapterIs', chapterId: 'crisis' }, { type: 'chapterIs', chapterId: 'legacy' }] },
          { type: 'yearAtLeast', year: 1953 },
          { type: 'projectCompleted', projectId: 'franklin-photograph-51' },
        ],
        title: 'A Model She Can Check From Across the Room',
        yearLabel: '1953',
        image: {
          setting: 'a laboratory table with a wire and metal model standing on a clamp stand, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'quiet, precise, wounded',
          details: ['wire and sheet-metal model', 'clamp stands', 'a notebook held closed', 'winter light', 'a ruler on the bench'],
          alt: 'A wire molecular model on clamp stands in a bare laboratory with winter light.',
        },
        pages: [
          {
            id: 'invitation',
            narration:
              'A cheerful note from Cambridge, asking nothing. Then a colleague mentions in the corridor, in passing, that they have a model up and would she care to come and look.',
          },
          {
            id: 'check',
            narration:
              'She can check it from the doorway. The repeat is right, the diameter is right, the chains run opposite ways and the bases are on the inside — every one of those a thing she measured off a plate she exposed for a hundred hours, and every one of them still sitting unpublished in a folder with a rubber band round it.',
          },
          {
            id: 'said',
            narration:
              'It is correct. That is the fact of the room and she is not capable of pretending otherwise, whatever else is true about how it got here. She looks at it a long time and then says the only thing worth saying.',
            speaker: 'ROSALIND',
            dialogue: 'It is very pretty. Now show me what it predicts that I can photograph.',
          },
          {
            id: 'answer',
            narration:
              'On the train back she works out, without wanting to, how an unpublished measurement travels sixty miles. There are three or four routes and none of them require anybody to have done a thing they would themselves call wrong.',
            choices: [
              {
                id: 'record',
                label: 'Put your own measurements into print at once, in your own words',
                effects: [
                  { type: 'flag', flag: 'franklin.saidIt', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: 1 },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'ask',
                label: 'Ask him, once, to his face, and accept whatever answer comes',
                effects: [
                  { type: 'flag', flag: 'franklin.askedHim', value: true },
                  { type: 'flag', flag: 'franklin.saidIt', value: true },
                  { type: 'resources', effects: { network: -1, wellbeing: -1 } },
                ],
              },
              {
                id: 'quiet',
                label: 'Say nothing, and take the working half of your life with you',
                effects: [
                  { type: 'flag', flag: 'franklin.saidNothing', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: -1 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1953-shown' },
          { type: 'resources', effects: { standing: -1, exposure: 1 } },
        ],
        historicalNote:
          'Franklin’s B-form photograph was shown to James Watson without her knowledge in January 1953, and her unpublished parameters reached the Cambridge group through a Medical Research Council report. Her own paper with Raymond Gosling appeared in the same April issue of the journal as the model. Dialogue is dramatized.',
      },
      {
        id: 'report',
        conditions: [
          { any: [{ type: 'chapterIs', chapterId: 'crisis' }, { type: 'chapterIs', chapterId: 'legacy' }] },
          { type: 'yearAtLeast', year: 1953 },
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['franklin-dna-ab-forms', 'franklin-photograph-51'],
            count: 1,
          },
        ],
        title: 'Sixty Miles With No Envelope',
        yearLabel: '1953',
        image: {
          setting: 'a report in a buff folder on a desk beside a printed journal page, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'sober, exact, cold',
          details: ['buff report folder', 'a journal open at a short paper', 'a railway ticket', 'rubber band', 'grey afternoon window'],
          alt: 'A buff report folder on a desk beside a journal opened at a short printed paper.',
        },
        pages: [
          {
            id: 'report',
            narration:
              'The report was typed for a committee and circulated to about a dozen people. It contains her spacings, her water content, her two forms and the humidity at which each appears. It was never meant to travel, and paper of this kind travels beautifully because nobody thinks of it as travelling at all.',
          },
          {
            id: 'model',
            narration:
              'The structure that comes out of Cambridge that spring is right, and it is built on a set of constraints she recognises line by line. Nobody has stolen anything. A photograph was shown across a desk; a report was passed along a corridor of a different building; both were done by men who would be genuinely astonished to be accused.',
            speaker: 'A COLLEAGUE',
            dialogue: 'Nobody did anything improper, you understand.',
          },
          {
            id: 'answer',
            narration:
              'Understood. That is precisely the shape of the thing: a series of ordinary courtesies between men, at the end of which her two years are in someone else’s diagram and her name is not on it.',
            choices: [
              {
                id: 'record',
                label: 'Put your own measurements into print at once, in your own words',
                effects: [
                  { type: 'flag', flag: 'franklin.saidIt', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: 1 },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'ask',
                label: 'Ask him, once, to his face, and accept whatever answer comes',
                effects: [
                  { type: 'flag', flag: 'franklin.askedHim', value: true },
                  { type: 'flag', flag: 'franklin.saidIt', value: true },
                  { type: 'resources', effects: { network: -1, wellbeing: -1 } },
                ],
              },
              {
                id: 'quiet',
                label: 'Say nothing, and take the working half of your life with you',
                effects: [
                  { type: 'flag', flag: 'franklin.saidNothing', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: -1 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1953-shown' },
          { type: 'resources', effects: { standing: -1, exposure: 1 } },
        ],
        historicalNote:
          'Photograph 51 was shown to James Watson by Maurice Wilkins in January 1953 without Franklin’s knowledge, and her unpublished measurements reached Francis Crick through a Medical Research Council progress report. Neither transfer was regarded as improper at the time. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { any: [{ type: 'chapterIs', chapterId: 'crisis' }, { type: 'chapterIs', chapterId: 'legacy' }] },
          { type: 'yearAtLeast', year: 1953 },
        ],
        title: 'Every Constraint She Was Two Years From',
        yearLabel: '1953',
        image: {
          setting: 'a journal open at a short paper with a diagram, on a desk with no plates of one’s own, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'level, aching, professional',
          details: ['a journal open at a diagram', 'an empty plate rack', 'a pencil not picked up', 'a cold window', 'a list of experiments not yet run'],
          alt: 'A journal open at a short paper with a diagram, on a desk beside an empty plate rack.',
        },
        pages: [
          {
            id: 'read',
            narration:
              'Two pages and a diagram. She reads it standing up, and then again sitting down, and what she feels first is not what she expected to feel. The structure is right. She can tell it is right from the shape of the argument, which is the only compliment she has ever known how to pay.',
          },
          {
            id: 'list',
            narration:
              'Then she reads the constraints they used. The repeat. The diameter. The units to a turn. Every one of them is on the list of things she meant to measure this year, in the order she meant to measure them, and the list is in the drawer under her elbow with nothing crossed off.',
            speaker: 'A COLLEAGUE',
            dialogue: 'You would have got there. You know that.',
          },
          {
            id: 'answer',
            narration:
              'Perhaps. A structure nobody published is not a structure, and she has said so to students often enough to be unable to make an exception for herself. What remains is a decision about how to spend the next twenty minutes, and then the next twenty years.',
            choices: [
              {
                id: 'record',
                label: 'Put the notes and the plan on the record, incomplete as they are',
                effects: [
                  { type: 'flag', flag: 'franklin.saidIt', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: 1 },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'ask',
                label: 'Ask them, once, how they arrived at those particular numbers',
                effects: [
                  { type: 'flag', flag: 'franklin.askedHim', value: true },
                  { type: 'flag', flag: 'franklin.saidIt', value: true },
                  { type: 'resources', effects: { network: -1, wellbeing: -1 } },
                ],
              },
              {
                id: 'quiet',
                label: 'Say nothing, cross the list off, and choose a new substance',
                effects: [
                  { type: 'flag', flag: 'franklin.saidNothing', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: -1 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'franklin-card-1953-shown' },
          { type: 'resources', effects: { standing: -1, exposure: 1 } },
        ],
        historicalNote:
          'The documented route had Franklin’s own unpublished data reach the Cambridge group in early 1953 through Photograph 51 and a Medical Research Council report. This variant follows a life in which those measurements were never made, and the structure arrives as news. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-crisis-closing',
    characterId: 'franklin',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'in-print',
        conditions: [
          { type: 'narrativeFlag', flag: 'franklin.saidIt' },
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['franklin-dna-ab-forms', 'franklin-photograph-51'],
            count: 1,
          },
        ],
        title: 'Third Paper in the Same Issue',
        yearLabel: '1953',
        image: {
          setting: 'a journal issue open at three short consecutive papers, spring 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'restrained, upright, unresolved',
          details: ['journal open at consecutive papers', 'a diffraction figure printed small', 'pencil in the margin', 'spring light', 'a folded proof sheet'],
          alt: 'A journal opened at three short consecutive papers, one carrying a small printed diffraction figure.',
        },
        pages: [
          {
            id: 'issue',
            narration:
              'Three papers, one after another, in the same April issue. Theirs, his, and hers with her student’s name beside it, carrying her measurements and the plates she took them off and a sentence saying the evidence is in general agreement with the model proposed. She writes that sentence herself and does not flinch at it.',
          },
          {
            id: 'move',
            narration:
              'Then the chests go on the van. Whatever was owed her in that building has been settled in the only currency she trusts, which is print, and it is not enough, and she has decided not to spend the next twenty years saying so.',
          },
        ],
        historicalNote:
          'Three papers appeared consecutively in the same April 1953 issue: the Cambridge model, Wilkins and colleagues, and Franklin and Gosling. Franklin’s paper presented the B-form photograph and stated that her evidence was in general agreement with the proposed structure.',
      },
      {
        id: 'spoke-without',
        conditions: [{ type: 'narrativeFlag', flag: 'franklin.saidIt' }],
        title: 'A Letter With Nothing to Enclose',
        yearLabel: '1953',
        image: {
          setting: 'a written letter on a desk with no enclosure beside it, spring 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'plain, unbowed, exposed',
          details: ['a finished letter', 'an empty envelope', 'a bare plate rack', 'a pen laid across the page', 'grey spring light'],
          alt: 'A finished letter on a desk beside an empty envelope and a bare plate rack.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'She writes it out plainly: what she thought, when she thought it, what she was going to measure and in what order. It is honest and it is unanswerable and it is not evidence, and she has spent her whole working life explaining the difference to other people.',
          },
          {
            id: 'send',
            narration:
              'She posts it anyway, because a thing said late is still said, and then she gets on with the packing. The next laboratory has a leaking roof and a virus in it, and nobody there has ever heard her raise her voice.',
          },
        ],
        historicalNote:
          'A divergent close for a life in which Franklin spoke about the episode without having her own published data behind her. On the documented route her paper with Raymond Gosling appeared in the same April 1953 issue as the Cambridge model.',
      },
      {
        id: 'silent',
        conditions: [{ type: 'narrativeFlag', flag: 'franklin.saidNothing' }],
        title: 'The Chests Go on the Van',
        yearLabel: '1953',
        image: {
          setting: 'a removal van being loaded with tea chests outside a college door, spring 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'closed, dignified, moving on',
          details: ['tea chests on a tail-lift', 'a folded lead apron', 'a clipboard', 'rain-dark pavement', 'a college doorway'],
          alt: 'Tea chests being loaded into a removal van outside a college doorway on a wet pavement.',
        },
        pages: [
          {
            id: 'load',
            narration:
              'She checks the chests off a list, corrects the list twice, and does not go back inside for anything. There is a version of this afternoon in which she stands in an office and says what happened out loud, and she has decided against it, on grounds she would find it difficult to write down.',
          },
          {
            id: 'ahead',
            narration:
              'What she has instead is a method, a camera, a student who would follow her anywhere, and a new substance to point them at. She is thirty-two, and somebody on the pavement asks her, kindly, whether she is not going to say anything at all about it.',
            speaker: 'ROSALIND',
            dialogue: 'I would rather spend the next five years photographing something than the next twenty explaining the last two.',
          },
        ],
        historicalNote:
          'Franklin moved to Birkbeck College in March 1953 and rarely discussed the DNA episode afterwards; those who knew her recorded that she preferred to go on to new work.',
      },
      {
        id: 'photographed',
        conditions: [{ type: 'projectCompleted', projectId: 'franklin-photograph-51' }],
        title: 'What the Photograph Was For',
        yearLabel: '1953',
        image: {
          setting: 'a diffraction plate slid into a folder and the folder tied shut, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'contained, resolute, quiet',
          details: ['plate sliding into a folder', 'tape tie', 'a labelled index card', 'a stripped bench', 'an emptied drawer'],
          alt: 'A photographic plate being slid into a tied folder beside an emptied laboratory drawer.',
        },
        pages: [
          {
            id: 'file',
            narration:
              'The plate goes into a folder, the folder into a box, the box on to a van. It has done what a photograph can do, which is settle a question that arguments could not, and it has done it for people who did not have to take it.',
          },
          {
            id: 'terms',
            narration:
              'She is asked, in writing and quite pleasantly, to leave the nucleic acid work behind her. She agrees, because the terms are the terms, and because she has never once wanted to own a problem — only to get the picture right.',
          },
        ],
        historicalNote:
          'On moving to Birkbeck in 1953, Franklin was asked to leave the nucleic acid work at King’s. She largely complied and turned to virus structure.',
      },
      {
        id: 'default',
        title: 'A Year That Ends in Boxes',
        yearLabel: '1953',
        image: {
          setting: 'an emptied laboratory with a bare bench and one forgotten glass rod, 1953',
          year: 1953,
          characters: ['franklin'],
          mood: 'bare, level, forward',
          details: ['bare bench', 'a forgotten glass rod', 'unhooked lead apron', 'chalk ghost of writing on a board', 'a single overhead lamp'],
          alt: 'A bare laboratory bench with one forgotten glass rod under a single overhead lamp.',
        },
        pages: [
          {
            id: 'bare',
            narration:
              'A bare bench, one glass rod nobody claimed, and the chalk ghost of somebody’s equation on the board. Rooms empty faster than they fill.',
          },
          {
            id: 'onward',
            narration:
              'What she takes out of the year is a rule, and she keeps it for the rest of her working life: whatever you have measured and not published does not yet exist, and the world will not wait politely at the door while you make certain.',
          },
        ],
        historicalNote:
          'A place-neutral close to 1953, the year the DNA structure was published.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Legacy, 1954–1958
  // -------------------------------------------------------------------------
  {
    id: 'franklin-legacy-opening',
    characterId: 'franklin',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds: laterSourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'birkbeck',
        conditions: [{ type: 'locationIs', locationId: 'london' }],
        title: 'The Top Floor of a Bomb-Damaged House',
        locationLabel: 'London',
        yearLabel: '1954',
        image: {
          setting: 'a laboratory in the attic of a war-damaged Bloomsbury house, with a bucket under a leak, 1954',
          year: 1954,
          characters: ['franklin'],
          mood: 'shabby, joyful, industrious',
          details: ['bucket under a roof leak', 'attic beams', 'virus preparations in stoppered tubes', 'a narrow stair', 'X-ray set two floors below'],
          alt: 'An attic laboratory with a bucket under a roof leak and stoppered tubes on a bench.',
        },
        pages: [
          {
            id: 'attic',
            narration:
              'The laboratory is at the top of a bomb-damaged house in Bloomsbury and the X-ray set is in the basement, which means about forty trips up and down the stairs a day. The roof leaks on to the equipment. She is entirely happy and everybody notices.',
          },
          {
            id: 'virus',
            narration:
              'The problem is a virus that infects tobacco: a rod, obviously helical, argued over for fifteen years by people who have never had a good enough pattern. She has spent four years learning to get a pattern out of things that do not want to give one.',
            speaker: 'BERNAL',
            dialogue: 'You may have the top floor, whatever money I can find, and no interference from me. In exchange I should like to be able to say how a virus is built.',
          },
          {
            id: 'group',
            narration:
              'There is money for two or three people, and there is a decision under it that she recognises from the last laboratory, coming at her from the other side this time: whether a group is a set of hands or a set of scientists.',
            choices: [
              {
                id: 'buildGroup',
                label: 'Build a group, and teach them everything you know',
                effects: [
                  { type: 'flag', flag: 'franklin.buildGroup', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: -1 },
                  { type: 'resources', effects: { network: 2, funds: 2 } },
                ],
              },
              {
                id: 'ownHands',
                label: 'Take the critical measurements with your own hands',
                effects: [
                  { type: 'flag', flag: 'franklin.ownHands', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: 1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1, funds: 2 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Franklin moved to Birkbeck College in 1953, to a laboratory in war-damaged premises under J. D. Bernal, and turned her methods on the tobacco mosaic virus. Colleagues recorded that these were productive and happy years, and that she led a genuine research group. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Rod, and Nobody Has a Good Photograph of It',
        yearLabel: '1954',
        image: {
          setting: 'a bench with sealed tubes of virus preparation and a folder of poor published plates, 1954',
          year: 1954,
          characters: ['franklin'],
          mood: 'appetitive, sceptical, fresh',
          details: ['stoppered tubes', 'folder of poor published plates', 'a new notebook', 'a loupe', 'a clean bench'],
          alt: 'Stoppered tubes of preparation on a clean bench beside a folder of published diffraction plates.',
        },
        pages: [
          {
            id: 'newsubstance',
            narration:
              'A new substance and a clean notebook, which is the best combination she knows. The published photographs of it are poor and she can say why within an afternoon, which is a good sign about the next four years.',
          },
          {
            id: 'ambition',
            narration:
              'Nobody knows where the genetic material sits inside a virus, or whether it is buried in the protein or wrapped round the outside of it. That is a question a diffraction pattern can answer, if the pattern is good enough.',
            speaker: 'BERNAL',
            dialogue: 'You could have chosen something easier, you know. There is a great deal of easier work about.',
          },
          {
            id: 'group',
            narration:
              'There is money for two or three people, and a decision under it she recognises from the other side of a corridor she once stood in: whether a group is a set of hands or a set of scientists.',
            choices: [
              {
                id: 'buildGroup',
                label: 'Build a group, and teach them everything you know',
                effects: [
                  { type: 'flag', flag: 'franklin.buildGroup', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: -1 },
                  { type: 'resources', effects: { network: 2, funds: 2 } },
                ],
              },
              {
                id: 'ownHands',
                label: 'Take the critical measurements with your own hands',
                effects: [
                  { type: 'flag', flag: 'franklin.ownHands', value: true },
                  { type: 'theme', theme: 'recognitionVsWork', amount: 1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1, funds: 2 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A place-neutral opening to Franklin’s virus-structure years. Whether the RNA of the tobacco mosaic virus lay inside the protein coat and at what radius was an open question she settled. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-encounter-klug',
    characterId: 'franklin',
    chapterId: 'legacy',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: laterSourceIds,
    trigger: { event: 'afterAction', priority: 70 },
    once: true,
    variants: [
      {
        id: 'group-paris',
        conditions: [
          { type: 'narrativeFlag', flag: 'franklin.buildGroup' },
          { type: 'narrativeFlag', flag: 'franklin.parisWorked' },
          { type: 'yearAtLeast', year: 1955 },
        ],
        title: 'Somebody Who Argues Back Properly',
        yearLabel: '1955–1957',
        image: {
          setting: 'two people bent over a diffraction plate on a lit box in an attic laboratory, mid-1950s',
          year: 1956,
          characters: ['franklin'],
          mood: 'collegial, quick, warm',
          details: ['illuminated viewing box', 'two pencils', 'a Fourier map on tracing paper', 'tea in jam jars', 'a sloping attic ceiling'],
          alt: 'Two pencils and a tracing-paper map laid over a diffraction plate on an illuminated box.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'He arrives with no virus experience and an unreasonable appetite for other people’s problems, and within a fortnight he is contradicting her about the radius of the nucleic acid. She has not enjoyed anything so much since Paris.',
          },
          {
            id: 'method',
            narration:
              'She teaches him what she was taught: hold the humidity, log every failure with its reason, and never say a thing is true because the picture of it is beautiful. He teaches her to be less afraid of a calculation she has not done herself.',
            speaker: 'KLUG',
            dialogue: 'Your objection is right and your reason for it is wrong. Shall I show you, or would you rather find it?',
          },
          {
            id: 'answer',
            narration:
              'She would rather find it. She finds it in about forty minutes, tells him so with something close to delight, and puts his name on the paper without being asked.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.klugPartnership', value: true }],
        historicalNote:
          'Aaron Klug joined Franklin’s Birkbeck laboratory in 1954; their collaboration on virus structure was close and productive, and he continued the work after her death, receiving the Nobel Prize in Chemistry in 1982. Dialogue is dramatized.',
      },
      {
        id: 'group',
        conditions: [
          { type: 'narrativeFlag', flag: 'franklin.buildGroup' },
          { type: 'yearAtLeast', year: 1955 },
        ],
        title: 'The Argument She Had Been Having by Post',
        yearLabel: '1955–1957',
        image: {
          setting: 'two people bent over a diffraction plate on a lit box in an attic laboratory, mid-1950s',
          year: 1956,
          characters: ['franklin'],
          mood: 'collegial, quick, warm',
          details: ['illuminated viewing box', 'two pencils', 'a Fourier map on tracing paper', 'tea in jam jars', 'a sloping attic ceiling'],
          alt: 'Two pencils and a tracing-paper map laid over a diffraction plate on an illuminated box.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'He arrives with no virus experience and an unreasonable appetite for other people’s problems, and within a fortnight he is contradicting her about the radius of the nucleic acid. For twenty years the only person who argued with her properly did it in the margins of a returned print, three weeks late. This one does it across a bench, at once, out loud.',
          },
          {
            id: 'method',
            narration:
              'She teaches him what she taught herself: hold the humidity, log every failure with its reason, and never say a thing is true because the picture of it is beautiful. He teaches her to be less afraid of a calculation she has not done with her own hands.',
            speaker: 'KLUG',
            dialogue: 'Your objection is right and your reason for it is wrong. Shall I show you, or would you rather find it?',
          },
          {
            id: 'answer',
            narration:
              'She would rather find it. She finds it in about forty minutes, tells him so with something close to delight, and puts his name on the paper without being asked.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.klugPartnership', value: true }],
        historicalNote:
          'Aaron Klug joined Franklin’s Birkbeck laboratory in 1954 and became her closest scientific collaborator, continuing the work after her death. This variant follows a life that never had the Paris laboratory to compare him with. Dialogue is dramatized.',
      },
      {
        id: 'colleague',
        conditions: [{ type: 'yearAtLeast', year: 1955 }],
        title: 'The Man Who Would Not Be Put Off',
        yearLabel: '1955–1957',
        image: {
          setting: 'a doorway of an attic laboratory with a visitor holding a rolled diagram, mid-1950s',
          year: 1956,
          characters: ['franklin'],
          mood: 'guarded, then curious',
          details: ['rolled diagram under an arm', 'attic doorway', 'a stack of plates on a stool', 'a kettle', 'a bicycle clip still on a trouser leg'],
          alt: 'A visitor in a laboratory doorway holding a rolled diagram under one arm.',
        },
        pages: [
          {
            id: 'door',
            narration:
              'He turns up at the door with a rolled diagram and a question she has already answered twice in print, and instead of leaving when told so he asks a second question, which is better, and a third, which is very good indeed.',
          },
          {
            id: 'thaw',
            narration:
              'She has grown used to being handled carefully by colleagues who have decided in advance that she is difficult. This one has evidently not been told, or has been told and did not attend.',
            speaker: 'KLUG',
            dialogue: 'I am told you are hard to work with. I have not found that. I have found you are hard to be vague at.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.klugPartnership', value: true }],
        historicalNote:
          'Aaron Klug joined Franklin at Birkbeck in 1954 and became her closest scientific collaborator. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-personal-illness',
    characterId: 'franklin',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds: laterSourceIds,
    trigger: { event: 'afterAction', priority: 85 },
    once: true,
    variants: [
      {
        id: 'unwell',
        conditions: [
          { type: 'yearAtLeast', year: 1956 },
          { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
        ],
        title: 'Between the Operations',
        yearLabel: '1956–1958',
        image: {
          setting: 'a hospital window looking on to London roofs, with a folder of work on the bed table, 1957',
          year: 1957,
          characters: ['franklin'],
          mood: 'grave, composed, undefeated',
          details: ['folder of manuscript on a bed table', 'a fountain pen', 'London roofs through glass', 'a jug and glass', 'an unopened novel'],
          alt: 'A folder of manuscript pages and a fountain pen on a hospital bed table beside a window over rooftops.',
        },
        pages: [
          {
            id: 'onset',
            narration:
              'It begins on a lecture tour and she puts it down to travel, and then to food, and then she stops putting it down to anything and goes to a doctor in London. There is an operation, and later another.',
          },
          {
            id: 'between',
            narration:
              'Between them she is at the top of the house in Bloomsbury with the sets running, because the alternative is a room with nothing in it that can be measured. Friends take her in, feed her, and are asked not to make a fuss, and mostly comply.',
            speaker: 'KLUG',
            dialogue: 'You could let us do this part. We do know how, you taught us.',
          },
          {
            id: 'answer',
            narration:
              'She writes the grant application for the next three years anyway, and the specifications for a model of the virus six feet high for an exhibition in Brussels, and does not discuss the arithmetic of any of it with anybody.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.ill', value: true }],
        historicalNote:
          'Franklin was diagnosed with ovarian cancer in 1956, underwent surgery and treatment, and continued to lead her research group between hospital admissions, including planning a large model of the tobacco mosaic virus for the 1958 Brussels World’s Fair. Dialogue is dramatized.',
      },
      {
        id: 'pressing-on',
        conditions: [{ type: 'yearAtLeast', year: 1956 }],
        title: 'For a Stranger Who Must Carry It On Without Her',
        yearLabel: '1956–1958',
        image: {
          setting: 'a desk at night with a grant application, a model drawing and a hospital appointment card, 1957',
          year: 1957,
          characters: ['franklin'],
          mood: 'grave, determined, unsentimental',
          details: ['grant application in typescript', 'scale drawing of a model', 'an appointment card face-down', 'a coat over a chair', 'a lamp left burning'],
          alt: 'A typed grant application and a scale drawing of a model on a desk beside a face-down appointment card.',
        },
        pages: [
          {
            id: 'fact',
            narration:
              'It starts on a lecture tour, and she puts it down to travel, and then to food, and then she stops putting it down to anything. There is a hospital in London and a word said to her there, once, plainly, and she takes it the way she takes any result that has been obtained properly: she does not argue with it, and she does not repeat it.',
          },
          {
            id: 'plans',
            narration:
              'What she does that autumn is write out three years of work on one sheet — the viruses to be done, in order, with the reason for the order — and she writes it the way she writes a method, for a stranger who must be able to carry it out without her. She means the sentence exactly as it reads.',
            speaker: 'KLUG',
            dialogue: 'You have written this as though you will not be here to argue about it.',
          },
          {
            id: 'model',
            narration:
              'She does not answer that, and puts a drawing beside it instead: a model of the virus six feet high, to scale, for an exhibition in Brussels next spring. She is not a woman given to monuments. She has thought about the plexiglass for a fortnight.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.ill', value: true }],
        historicalNote:
          'Franklin was diagnosed with ovarian cancer in 1956, continued to lead her group through surgery and treatment, planned an extended programme of virus research, and designed a large model of the tobacco mosaic virus for the 1958 Brussels World’s Fair. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'franklin-personal-notebooks',
    characterId: 'franklin',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds: laterSourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'left-behind',
        conditions: [
          { type: 'projectCompleted', projectId: 'franklin-photograph-51' },
          { type: 'yearAtLeast', year: 1955 },
        ],
        title: 'A Box She Does Not Open',
        yearLabel: '1955–1957',
        image: {
          setting: 'a cupboard shelf with an unopened labelled box among current work, mid-1950s',
          year: 1956,
          characters: ['franklin'],
          mood: 'private, level, closed',
          details: ['a labelled box on a high shelf', 'current notebooks in use below', 'dust along the shelf edge', 'a stepladder', 'attic light'],
          alt: 'A labelled box on a high cupboard shelf above notebooks currently in use.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The box is on the top shelf with a label on it in her handwriting and a date. Somebody asks, once, whether she is going to write the longer paper about it. She says the work is finished and moves the conversation on, and the person asking has the sense to let her.',
          },
          {
            id: 'why',
            narration:
              'It is not bitterness; she genuinely has not the time. She has a virus to build and a group to keep in funds and a method to hand on, and the past is a poor use of an afternoon.',
          },
          {
            id: 'once',
            narration:
              'She does take it down once, on a wet evening, to check a figure for somebody else’s paper. The plate is exactly as good as she remembered. She checks the figure, puts the lid back on, and goes upstairs.',
          },
        ],
        historicalNote:
          'Franklin turned decisively to virus research after 1953 and rarely revisited the DNA episode. Her interior view of it is dramatized; the record preserves her reticence rather than her feelings.',
      },
      {
        id: 'general',
        conditions: [{ type: 'yearAtLeast', year: 1955 }],
        title: 'Only the Current Notebook Is Open',
        yearLabel: '1955–1957',
        image: {
          setting: 'a shelf of closed notebooks with one open on the bench in front of them, mid-1950s',
          year: 1956,
          characters: ['franklin'],
          mood: 'orderly, forward-facing, dry',
          details: ['a row of closed notebooks', 'one open notebook', 'a dated spine label', 'a pen across the page', 'afternoon dust in the light'],
          alt: 'A row of closed dated notebooks on a shelf with one open notebook on the bench before them.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'A row of spines with dates on them, and one open on the bench. She keeps every notebook and consults almost none of them. What is in the closed ones is either published or was a mistake, and neither category improves with revisiting.',
          },
          {
            id: 'forward',
            narration:
              'A young member of the group works up the nerve to ask what she considers her best piece of work. She does not look up from the plate.',
            speaker: 'ROSALIND',
            dialogue: 'The one on the bench. It is the only one I can still do anything about.',
          },
        ],
        historicalNote:
          'A dramatized portrait consistent with Franklin’s documented habit of working forward rather than revisiting completed work.',
      },
    ],
  },
  {
    id: 'franklin-legacy-closing',
    characterId: 'franklin',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds: laterSourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'both-done',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['franklin-tobacco-mosaic-virus', 'franklin-rna-virology'],
            count: 2,
          },
        ],
        title: 'The Model Goes to Brussels',
        yearLabel: '1958',
        image: {
          setting: 'a large plexiglass model of a helical virus crated for shipping, spring 1958',
          year: 1958,
          characters: ['franklin'],
          mood: 'tender, complete, unspoken',
          details: ['tall model in a crate', 'wood shavings', 'a shipping label', 'a folded specification sheet', 'spring light in an empty hall'],
          alt: 'A tall helical model being crated with wood shavings beside a shipping label.',
        },
        pages: [
          {
            id: 'crate',
            narration:
              'The model stands six feet high and goes into its crate in wood shavings, helix and all, with the nucleic acid where she proved it sits — inside the protein, at a measured radius, not free in the middle where everyone assumed. The crate goes to Brussels in the spring.',
          },
          {
            id: 'after',
            narration:
              'She does not go with it. She is thirty-seven. The programme is written out in her hand for three years ahead, in order, with the reason for the order, so that a stranger could carry it on — which is, in the end, exactly what happens, and they do it well, and they say so for the rest of their lives.',
          },
        ],
        historicalNote:
          'Franklin established the helical structure of the tobacco mosaic virus and the location of its RNA within the protein coat, and designed a large model of it for the 1958 Brussels World’s Fair. She died in London in April 1958, aged 37. Her group, led afterwards by Aaron Klug, continued the work.',
      },
      {
        id: 'virus-done',
        conditions: [{ type: 'projectCompleted', projectId: 'franklin-tobacco-mosaic-virus' }],
        title: 'Where the Nucleic Acid Actually Sits',
        yearLabel: '1958',
        image: {
          setting: 'an attic laboratory bench left tidy, with a finished figure pinned above it, 1958',
          year: 1958,
          characters: ['franklin'],
          mood: 'quiet, finished, resonant',
          details: ['a pinned figure of a helical rod', 'a tidied bench', 'a labelled tube rack', 'the stair door ajar', 'spring light on dust'],
          alt: 'A tidy attic laboratory bench with a pinned diagram of a helical rod above it.',
        },
        pages: [
          {
            id: 'result',
            narration:
              'Not in the middle. Not loose. Wound in at a fixed radius inside the protein, exactly where it has to be for the thing to be built the way it is built — and the pattern says so, and can be shown to say so, which is the only kind of saying she has ever trusted.',
          },
          {
            id: 'hands',
            narration:
              'The bench is left tidy. Everything in the room has a label on it in a small hand that does not slope, and the people who come up the stairs after her will be able to find every single thing.',
          },
        ],
        historicalNote:
          'Franklin determined the helical structure of the tobacco mosaic virus and located its RNA within the protein coat. She died in April 1958, aged 37.',
      },
      {
        id: 'default',
        title: 'Written Out for Whoever Comes Next',
        yearLabel: '1958',
        image: {
          setting: 'a desk with a research programme written out in a neat hand and a closed notebook on top, 1958',
          year: 1958,
          characters: ['franklin'],
          mood: 'still, ordered, generous',
          details: ['programme written in a neat hand', 'closed notebook', 'a capped pen', 'an open window', 'spring light'],
          alt: 'A handwritten research programme on a desk with a closed notebook and a capped pen on top.',
        },
        pages: [
          {
            id: 'programme',
            narration:
              'The last thing on the desk is a list: the work to be done, in order, with the reason for the order beside each item. She has written methods for strangers all her life and this is only the largest of them.',
          },
          {
            id: 'short',
            narration:
              'It is a short life and she does not treat it as one. There is no valedictory in the handwriting. There is a next experiment, and the humidity at which to run it. Somebody reads the last line out in the room a fortnight later and has to stop halfway.',
            speaker: 'KLUG',
            dialogue: 'Ninety-two per cent. She has even told us what the weather in the room is to be.',
          },
        ],
        historicalNote:
          'Rosalind Franklin died in London in April 1958, aged 37, having left a detailed research programme her group continued.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Breakthroughs — one per project
  // -------------------------------------------------------------------------
  {
    id: 'franklin-project-coal-carbon',
    characterId: 'franklin',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'franklin-coal-carbon', priority: 78 },
    once: true,
    variants: [
      {
        id: 'in-paris',
        conditions: [{ type: 'locationIs', locationId: 'paris' }],
        title: 'Two Kinds of Carbon',
        locationLabel: 'Paris',
        yearLabel: 'late 1940s',
        image: {
          setting: 'a bench with two trays of carbon samples and their ring patterns pinned above them, Paris, late 1940s',
          year: 1949,
          characters: ['franklin'],
          mood: 'clarifying, satisfied, dry',
          details: ['two trays of black samples', 'ring patterns pinned to a board', 'a helium density apparatus', 'a labelled sample bottle', 'coal dust on a cuff'],
          alt: 'Two trays of black carbon samples beneath pinned photographs of soft ring patterns.',
        },
        pages: [
          {
            id: 'split',
            narration:
              'It comes out of a hundred exposures and a great deal of arithmetic: there are two families here, and no amount of heat will turn one into the other. Some carbons graphitise when you cook them. Some never will, whatever the furnace does, because the disorder is built in at the start.',
          },
          {
            id: 'consequence',
            narration:
              'It is not a glamorous result. It is the kind that gets used: by people making electrodes, by people making filters, by people who will be citing it long after they have forgotten there was a person attached to it.',
            speaker: 'MERING',
            dialogue: 'You have made a classification. Everyone will use it and nobody will thank you. That is the best kind.',
          },
          {
            id: 'own',
            narration:
              'She writes it up in five papers in three years, in two languages, with the methods set out step by numbered step so that a stranger could repeat every one of them, and does not once say the word important.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'franklin.carbonWork', value: true },
          { type: 'flag', flag: 'franklin.parisWorked', value: true },
        ],
        historicalNote:
          'Franklin’s Paris work established the distinction between graphitising and non-graphitising carbons and characterised their pore structure; the papers remain cited in materials science. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Holes Too Small to See',
        yearLabel: 'late 1940s',
        image: {
          setting: 'a bench with a helium density apparatus and a row of black samples, late 1940s',
          year: 1949,
          characters: ['franklin'],
          mood: 'absorbed, methodical, quietly pleased',
          details: ['glass density apparatus', 'row of numbered samples', 'a gas cylinder', 'notebook of densities', 'blackened fingertips'],
          alt: 'A glass density apparatus beside a numbered row of black carbon samples.',
        },
        pages: [
          {
            id: 'pores',
            narration:
              'The trick is to measure the same lump twice with two different gases: one small enough to get into the pores, one too big. What is left over between the two answers is the shape of the emptiness inside, and the emptiness turns out to be the whole story.',
          },
          {
            id: 'families',
            narration:
              'Two families, then. Some carbons will rearrange themselves into graphite if you heat them hard enough; some are locked out of it from the moment they form. She can tell which is which from a smear of soft rings on a plate, and nobody else in the country can.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.carbonWork', value: true }],
        historicalNote:
          'Franklin used density measurements with different gases and X-ray diffraction to characterise the porosity of coals and carbons, distinguishing graphitising from non-graphitising forms.',
      },
    ],
  },
  {
    id: 'franklin-project-xray-technique',
    characterId: 'franklin',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'franklin-xray-technique', priority: 82 },
    once: true,
    variants: [
      {
        id: 'in-paris',
        conditions: [{ type: 'locationIs', locationId: 'paris' }],
        title: 'When the Instrument Disappears',
        locationLabel: 'Paris',
        yearLabel: 'late 1940s',
        image: {
          setting: 'an X-ray room where the camera is being aligned by feel, Paris, late 1940s',
          year: 1950,
          characters: ['franklin'],
          mood: 'fluent, quiet, mastered',
          details: ['collimator being adjusted', 'a brass shim', 'the hum of a transformer', 'a calibration notebook', 'lead apron worn open'],
          alt: 'Hands adjusting a collimator on an X-ray camera in a darkened room.',
        },
        pages: [
          {
            id: 'fluent',
            narration:
              'One morning she realises she has aligned the whole apparatus without thinking about it once, the way a person walks downstairs. The camera has stopped being an object between her and the specimen. It is now a way of asking a question, and the question can be as fine as she likes.',
          },
          {
            id: 'lying',
            narration:
              'What she really owns is the catalogue of lies. Every way the tube can drift, every way a specimen can dry out mid-exposure, every artefact that looks like a result — she has been fooled by all of them personally, and written each one down with the reason beside it.',
            speaker: 'MERING',
            dialogue: 'Anyone can take a photograph. You have learned when not to believe one. Go somewhere they need that.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'franklin.instrumentMastery', value: true },
          { type: 'flag', flag: 'franklin.parisWorked', value: true },
        ],
        historicalNote:
          'Under Jacques Mering, Franklin became an exceptionally skilled diffractionist, particularly of poorly crystalline materials — the expertise she brought to biological fibres in 1951. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Catalogue of Lies',
        yearLabel: 'late 1940s',
        image: {
          setting: 'a calibration notebook open at a list of instrument faults and their causes, late 1940s',
          year: 1950,
          characters: ['franklin'],
          mood: 'exacting, self-taught, assured',
          details: ['a numbered list of faults', 'small sketches in the margin', 'a brass shim taped to a page', 'a loupe', 'a stopclock'],
          alt: 'A calibration notebook open at a numbered list of instrument faults with sketches in the margin.',
        },
        pages: [
          {
            id: 'faults',
            narration:
              'The notebook is a catalogue of ways to be deceived: tube drift, a sagging specimen, a camera a quarter of a degree out, an exposure that spans a change in the weather. Fourteen entries, each one paid for with a wasted week.',
          },
          {
            id: 'mastery',
            narration:
              'This is the whole of the expertise and it looks like nothing at all from outside. She can now put a beam through a substance that has no business giving a pattern, and know exactly how much of what comes back is the substance and how much is the apparatus.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.instrumentMastery', value: true }],
        historicalNote:
          'Franklin’s mastery of X-ray diffraction of imperfectly crystalline materials was the technical foundation of everything that followed.',
      },
    ],
  },
  {
    id: 'franklin-project-ab-forms',
    characterId: 'franklin',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'franklin-dna-ab-forms', priority: 84 },
    once: true,
    variants: [
      {
        id: 'in-london',
        conditions: [{ type: 'locationIs', locationId: 'london' }],
        title: 'Two Forms, Not One',
        locationLabel: 'London',
        yearLabel: '1951–1952',
        image: {
          setting: 'a humidity chamber with salt solutions and a fibre specimen, basement laboratory, 1952',
          year: 1952,
          characters: ['franklin'],
          mood: 'decisive, cool, clarifying',
          details: ['dishes of salt solution', 'hydrogen bubbler', 'two plates propped side by side', 'a hygrometer', 'a fibre on a wire frame'],
          alt: 'Two diffraction plates propped side by side above dishes of salt solution and a hygrometer.',
        },
        pages: [
          {
            id: 'switch',
            narration:
              'Dry, and the pattern is crowded with sharp spots: crystalline, informative, and extremely hard to interpret. Wet — above about seventy-five per cent — and the whole thing lets go and opens into something simpler and longer. The same substance. Two states, and a switch she can operate at will.',
          },
          {
            id: 'literature',
            narration:
              'Half the disagreements in the published literature evaporate in an afternoon. Those people were not contradicting each other. They were photographing a mixture, in an uncontrolled room, and arguing about the average.',
          },
          {
            id: 'measure',
            narration:
              'She measures both forms properly: the repeat, the diameter, the water in the fibre and where it must be sitting. It is not the picture that makes the front page. It is the work that makes the picture mean anything.',
            speaker: 'GOSLING',
            dialogue: 'Everyone else has been arguing about the weather in the room and calling it chemistry.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.twoForms', value: true }],
        historicalNote:
          'Franklin’s control of humidity established that DNA fibres exist in two distinct forms, A and B, and she measured the parameters of both. This resolved a great deal of confusion in the existing literature. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Weather in the Room',
        yearLabel: '1951–1952',
        image: {
          setting: 'a bench with a hygrometer, a bubbler and two contrasting diffraction plates, early 1950s',
          year: 1952,
          characters: ['franklin'],
          mood: 'methodical, quietly triumphant',
          details: ['hygrometer', 'gas bubbler', 'two contrasting plates', 'a notebook column of humidities', 'a sealed specimen cell'],
          alt: 'A hygrometer and bubbler on a bench beside two contrasting diffraction photographs.',
        },
        pages: [
          {
            id: 'control',
            narration:
              'Nobody thinks to control the water because nobody thinks the water matters. It matters more than anything else in the experiment. The fibre is a sponge, and a sponge photographed at an unrecorded humidity is a photograph of an unrepeatable object.',
          },
          {
            id: 'result',
            narration:
              'Held wet, it gives one pattern. Held dry, another, and she can go back and forth between them all afternoon. Two forms of the same substance, each measurable, and a whole shelf of contradictory papers explained and quietly retired.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.twoForms', value: true }],
        historicalNote:
          'The distinction between the A and B forms of DNA and their dependence on humidity was Franklin’s, and underlies all subsequent structural interpretation of the fibre patterns.',
      },
    ],
  },
  {
    id: 'franklin-project-photo-51',
    characterId: 'franklin',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'franklin-photograph-51', priority: 88 },
    once: true,
    variants: [
      {
        id: 'in-london',
        conditions: [{ type: 'locationIs', locationId: 'london' }],
        title: 'What the Cross Means',
        locationLabel: 'London',
        yearLabel: '1952',
        image: {
          setting: 'a plate on an illuminated box with layer lines counted off in pencil on tracing paper, 1952',
          year: 1952,
          characters: ['franklin'],
          mood: 'exact, contained, momentous',
          details: ['tracing paper over a plate', 'layer lines numbered in pencil', 'a ruler and loupe', 'a table of spacings', 'a typed report in a buff cover'],
          alt: 'Tracing paper laid over a diffraction plate with layer lines numbered in pencil.',
        },
        pages: [
          {
            id: 'read',
            narration:
              'A cross of spots means a helix; that much has been known in principle for a year. What the plate gives her is the arithmetic. Count the layer lines and you have the pitch. Note which one is missing and you have two chains, offset, running in opposite directions. Measure the falloff and you know the heavy parts are on the outside, not the inside.',
          },
          {
            id: 'restraint',
            narration:
              'She writes it into a report for a committee — sober, complete, hedged exactly as far as the evidence requires and not one word further. Then she goes back to the other form, the difficult one, because a structure that only explains the easy half is not a structure.',
          },
          {
            id: 'said',
            narration:
              'Her student wants to know whether they have just done the thing. She looks at the plate a moment longer than she needs to.',
            speaker: 'ROSALIND',
            dialogue: 'We have the evidence. Having the evidence and knowing what to say about it are six months apart, and I intend to spend them.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.tookPhoto51', value: true }],
        historicalNote:
          'Photograph 51, obtained in May 1952 by Franklin and Raymond Gosling, showed the characteristic helical cross of the B form. Franklin’s contemporaneous notes and her Medical Research Council report set out the pitch, the antiparallel chains and the phosphates on the outside. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Arithmetic of a Cross',
        yearLabel: '1952',
        image: {
          setting: 'a table of measured spacings beside a diffraction plate under a lamp, early 1950s',
          year: 1952,
          characters: ['franklin'],
          mood: 'precise, undemonstrative, weighty',
          details: ['column of measured spacings', 'a plate under a lamp', 'sharpened pencil', 'slide rule', 'a folded report'],
          alt: 'A handwritten column of measured spacings beside a diffraction plate under a lamp.',
        },
        pages: [
          {
            id: 'numbers',
            narration:
              'Thirty-four ångström for the repeat. Twenty across. Ten units to the turn, and the fourth layer line absent, which is not an accident and not a flaw in the plate but two chains half a turn out of step with each other.',
          },
          {
            id: 'weight',
            narration:
              'She checks each number twice with a ruler and a loupe, because a figure obtained once is a rumour. They do not move. Whatever is going to be built out of this molecule, it has to fit these, and there is not much room left for it to be anything else.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.tookPhoto51', value: true }],
        historicalNote:
          'The B-form parameters Franklin measured — a 34 ångström repeat, roughly 20 ångström diameter, ten units per turn, and the missing fourth layer line indicating antiparallel chains — were the decisive structural constraints.',
      },
    ],
  },
  {
    id: 'franklin-project-tmv',
    characterId: 'franklin',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: laterSourceIds,
    trigger: { event: 'projectCompleted', projectId: 'franklin-tobacco-mosaic-virus', priority: 80 },
    once: true,
    variants: [
      {
        id: 'in-london',
        conditions: [{ type: 'locationIs', locationId: 'london' }],
        title: 'Not Down the Middle',
        locationLabel: 'London',
        yearLabel: '1955–1956',
        image: {
          setting: 'an attic laboratory bench with a radial density map drawn on tracing paper, mid-1950s',
          year: 1956,
          characters: ['franklin'],
          mood: 'elated, exacting, collegial',
          details: ['radial density plot on tracing paper', 'a compass and dividers', 'stoppered virus tubes', 'a lamp on a clamp', 'sloped attic ceiling'],
          alt: 'A radial density plot drawn on tracing paper beside dividers and stoppered tubes.',
        },
        pages: [
          {
            id: 'hollow',
            narration:
              'Everybody has assumed the rod is solid and the nucleic acid runs down the middle of it, because that is where a person would put it. The pattern says the middle is empty. There is a hole down the axis of the thing, and the protein is wound around nothing at all.',
          },
          {
            id: 'radius',
            narration:
              'And the RNA is not in the middle and not on the outside. It is buried in the protein at a fixed radius, a measured distance out from the axis, held in a groove that goes round with the helix. She can say the number, and defend it, and show anyone who asks exactly which features of the pattern require it.',
            speaker: 'KLUG',
            dialogue: 'Nobody is going to believe the hole.',
          },
          {
            id: 'reply',
            narration:
              'They will, she says, when they see how much else stops making sense without it — and they do, within a year, and after that everybody has always thought so.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.virusStructure', value: true }],
        historicalNote:
          'Franklin established that the tobacco mosaic virus is a hollow helical rod and located its RNA at a defined radius within the protein rather than along the axis. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Groove That Goes Round With the Helix',
        yearLabel: '1955–1956',
        image: {
          setting: 'a bench with a helical model in progress and a diffraction plate propped behind it, mid-1950s',
          year: 1956,
          characters: ['franklin'],
          mood: 'absorbed, confident, clear',
          details: ['part-built helical model', 'a propped plate', 'dividers', 'a table of radii', 'a lamp'],
          alt: 'A partly built helical model on a bench with a diffraction plate propped behind it.',
        },
        pages: [
          {
            id: 'shape',
            narration:
              'A helical rod, hollow down the axis, built of identical protein units stacked round and round — and the genetic material not loose in the centre but held out at a definite radius, in a groove, one turn of it for every turn of the helix.',
          },
          {
            id: 'method',
            narration:
              'The result is arrived at the way all her results are arrived at: hold the conditions, measure the falloff, believe the pattern rather than the picture in your head. The picture in everyone’s head had it down the middle.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.virusStructure', value: true }],
        historicalNote:
          'Franklin’s determination of the helical structure of the tobacco mosaic virus and the radial position of its RNA is documented and was continued by her group after her death.',
      },
    ],
  },
  {
    id: 'franklin-project-rna',
    characterId: 'franklin',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: laterSourceIds,
    trigger: { event: 'projectCompleted', projectId: 'franklin-rna-virology', priority: 76 },
    once: true,
    variants: [
      {
        id: 'in-london',
        conditions: [{ type: 'locationIs', locationId: 'london' }],
        title: 'A Method That Travels',
        locationLabel: 'London',
        yearLabel: '1956–1958',
        image: {
          setting: 'a bench with several different virus preparations lined up and labelled, mid-1950s',
          year: 1957,
          characters: ['franklin'],
          mood: 'expansive, generous, driving',
          details: ['a row of differently labelled preparations', 'a shared notebook', 'two sets of dividers', 'a rota pinned to a beam', 'the stair door propped open'],
          alt: 'A row of differently labelled virus preparations along a bench beneath a pinned laboratory rota.',
        },
        pages: [
          {
            id: 'others',
            narration:
              'One virus becomes several. The rod, then a spherical one, then whatever anybody can grow enough of, because the method she built for coal and turned on a fibre turns out to work on all of them, and the group is now big enough to run three problems at once.',
          },
          {
            id: 'handon',
            narration:
              'She spends more of her time now teaching people to distrust their own plates than taking her own, which she would have thought a demotion ten years ago and does not now.',
            speaker: 'A MEMBER OF HER GROUP',
            dialogue: 'You have made yourself unnecessary in about four rooms.',
          },
          {
            id: 'reply',
            narration:
              'Good, she says, and means it, and goes upstairs to see why the humidity log has a gap in it.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.rnaWork', value: true }],
        historicalNote:
          'In her last years Franklin extended her structural methods from the tobacco mosaic virus to other RNA viruses, and her group carried the programme forward after her death in 1958. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Same Question, New Substances',
        yearLabel: '1956–1958',
        image: {
          setting: 'a notebook page listing viruses in order with the reason for the order beside each, mid-1950s',
          year: 1957,
          characters: ['franklin'],
          mood: 'purposeful, orderly, forward',
          details: ['a numbered list of organisms', 'reasons written in the margin', 'a capped pen', 'stacked plates', 'lamp light on a ruled page'],
          alt: 'A notebook page listing organisms in numbered order with reasons written in the margin.',
        },
        pages: [
          {
            id: 'programme',
            narration:
              'The list runs down the page in order, with the reason for the order beside each item, because a programme is only a method written at a larger scale and she has never been able to write one carelessly.',
          },
          {
            id: 'general',
            narration:
              'What she has really built is not a set of structures. It is a way of getting a trustworthy pattern out of something wet, disordered and alive — and that will outlast every particular answer it produces.',
          },
        ],
        effects: [{ type: 'flag', flag: 'franklin.rnaWork', value: true }],
        historicalNote:
          'Franklin extended her diffraction methods to RNA viruses in her final years; the approach was continued by her Birkbeck group.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Epilogue
  // -------------------------------------------------------------------------
  {
    id: 'franklin-epilogue',
    characterId: 'franklin',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds: ['franklin', 'franklinLater'],
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'held-and-photographed',
        conditions: [
          { type: 'choiceWas', choiceKey: 'franklin-breakthrough-opening:hold', choiceId: 'hold' },
          { type: 'projectCompleted', projectId: 'franklin-photograph-51' },
        ],
        title: 'The Cost of Being Certain',
        yearLabel: 'after',
        image: {
          setting: 'a diffraction photograph on a lit box in an empty room, no one present',
          year: 1958,
          characters: [],
          mood: 'still, luminous, unpeopled',
          details: ['a single plate on a lit box', 'an empty stool', 'a ruler set aside', 'dust in the beam of the lamp', 'a closed door'],
          alt: 'A single diffraction photograph glowing on an illuminated box in an empty room.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'She was right to wait and it cost her the thing waiting was supposed to buy. Both of those are true and neither cancels the other, and she would have said so herself, in one sentence, and then asked what you wanted to measure next.',
          },
          {
            id: 'inheritance',
            narration:
              'What she leaves is not one photograph. It is a way of working that spread out through everyone she trained: hold the conditions, log the failures with their reasons, publish nothing you have only seen once.',
          },
          {
            id: 'last',
            narration:
              'The plate is still there, in an archive, in a folder, in a small hand that does not slope. It is the clearest thing anybody photographed that century, and it was taken by somebody who would not have called it the best thing she did.',
          },
        ],
        historicalNote:
          'Franklin’s insistence on evidence before publication is documented, as is the fact that the DNA structure was published by others using her unpublished data. She died in 1958; the Nobel Prize for the structure was awarded in 1962 and is not given posthumously.',
      },
      {
        id: 'group-paris',
        conditions: [
          { type: 'choiceWas', choiceKey: 'franklin-legacy-opening:group', choiceId: 'buildGroup' },
          { type: 'narrativeFlag', flag: 'franklin.parisWorked' },
        ],
        title: 'What She Handed On',
        yearLabel: 'after',
        image: {
          setting: 'an attic laboratory with the work continuing, one empty chair at the bench',
          year: 1959,
          characters: [],
          mood: 'continuing, warm, absent',
          details: ['one empty chair', 'a running X-ray set', 'notebooks in a stack', 'a kettle on', 'sloped attic ceiling'],
          alt: 'An attic laboratory in use with one empty chair at the bench.',
        },
        pages: [
          {
            id: 'chair',
            narration:
              'The set is still running upstairs. Somebody has taken over the humidity log and is keeping it exactly as she kept it, because that is how they were taught and because none of them can think of a better way.',
          },
          {
            id: 'onward',
            narration:
              'The group goes on for decades and does work she would have wanted to argue about at lunch, loudly, over bread, in the manner of the one laboratory that ever entirely suited her.',
          },
          {
            id: 'named',
            narration:
              'They name what they learned after the person who taught it, every time, in print, for the rest of their lives. It is not a prize. It is better documented than one.',
            speaker: 'KLUG',
            dialogue: 'She would have taken this apart in about forty minutes. I have spent thirty years trying to be the person who does that for somebody else.',
          },
        ],
        historicalNote:
          'Aaron Klug and others in Franklin’s Birkbeck group continued her virus research after her death in 1958; Klug received the Nobel Prize in Chemistry in 1982 and repeatedly credited her. Dialogue is dramatized.',
      },
      {
        id: 'group',
        conditions: [{ type: 'choiceWas', choiceKey: 'franklin-legacy-opening:group', choiceId: 'buildGroup' }],
        title: 'The Laboratory She Had to Build',
        yearLabel: 'after',
        image: {
          setting: 'an attic laboratory with the work continuing, one empty chair at the bench',
          year: 1959,
          characters: [],
          mood: 'continuing, warm, absent',
          details: ['one empty chair', 'a running X-ray set', 'notebooks in a stack', 'a kettle on', 'sloped attic ceiling'],
          alt: 'An attic laboratory in use with one empty chair at the bench.',
        },
        pages: [
          {
            id: 'chair',
            narration:
              'The set is still running upstairs. Somebody has taken over the humidity log and is keeping it exactly as she kept it, because that is how they were taught and because none of them can think of a better way.',
          },
          {
            id: 'onward',
            narration:
              'She never found the room she wanted — the one where four people shout at one photograph over bread and nobody goes home wounded. She was obliged, in the end, to build it, from a leaking attic and three salaries, and she did.',
          },
          {
            id: 'named',
            narration:
              'They name what they learned after the person who taught it, every time, in print, for the rest of their lives. It is not a prize. It is better documented than one.',
            speaker: 'KLUG',
            dialogue: 'She would have taken this apart in about forty minutes. I have spent thirty years trying to be the person who does that for somebody else.',
          },
        ],
        historicalNote:
          'Franklin’s Birkbeck group continued her virus research after her death in 1958. This variant follows a life that never had the Paris laboratory and had to make its own. Dialogue is dramatized.',
      },
      {
        id: 'other-life',
        conditions: [
          { type: 'choiceWas', choiceKey: 'franklin-formation-opening:decide', choiceId: 'duty' },
          {
            not: {
              type: 'completedProjectCountAtLeast',
              projectIds: [
                'franklin-coal-carbon',
                'franklin-xray-technique',
                'franklin-dna-ab-forms',
                'franklin-photograph-51',
                'franklin-tobacco-mosaic-virus',
                'franklin-rna-virology',
              ],
              count: 2,
            },
          },
        ],
        title: 'The Other Useful Life',
        yearLabel: 'after',
        image: {
          setting: 'a committee room table with lists, a teacup and a closed chemistry textbook at the end',
          year: 1958,
          characters: [],
          mood: 'reflective, honourable, wistful',
          details: ['lists of names', 'a teacup', 'a closed textbook', 'stacked chairs', 'evening light through high windows'],
          alt: 'A committee room table with lists of names, a teacup and a closed textbook at the far end.',
        },
        pages: [
          {
            id: 'good',
            narration:
              'A great deal of good was done, and it was done by somebody who was needed, and the names on those lists belonged to people who are alive because of the work. Her father was not wrong about any of that.',
          },
          {
            id: 'cost',
            narration:
              'The textbook stayed on the end of the table. Certain photographs were never taken, by anyone, for years, and nobody knew to miss them.',
          },
          {
            id: 'last',
            narration:
              'She never said she regretted it. She was not a woman who said such things aloud. She did keep the textbook.',
          },
        ],
        historicalNote:
          'A divergent close for a life in which Franklin gave her years to public service rather than research. Her family’s refugee resettlement work and her father’s preference for that path are documented; the outcome here is invented.',
      },
      {
        id: 'broad-life',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'franklin-coal-carbon',
              'franklin-xray-technique',
              'franklin-dna-ab-forms',
              'franklin-photograph-51',
              'franklin-tobacco-mosaic-virus',
              'franklin-rna-virology',
            ],
            count: 4,
          },
        ],
        title: 'Coal, Fibres, Viruses',
        yearLabel: 'after',
        image: {
          setting: 'three diffraction plates laid side by side on a bench — rings, a cross, a helical rod',
          year: 1958,
          characters: [],
          mood: 'summative, spare, clear',
          details: ['a plate of soft rings', 'a plate with an X of spots', 'a plate of a helical rod', 'a ruler', 'clean bench light'],
          alt: 'Three diffraction photographs laid side by side: soft rings, a cross of spots, and a helical pattern.',
        },
        pages: [
          {
            id: 'three',
            narration:
              'Three photographs on a bench and one method between them. Coal that would not crystallise; a fibre that changed its mind with the humidity; a rod with its nucleic acid wound in at a measured radius. Different substances, the same refusal to guess.',
          },
          {
            id: 'span',
            narration:
              'Sixteen working years, four fields, and papers in every one of them that people are still citing when the equipment she used has been in a museum for decades.',
          },
          {
            id: 'voice',
            narration:
              'Asked once what she was proudest of, she named the experiment she was doing that week. She was not being modest. She simply thought that was where the interesting part always was.',
          },
        ],
        historicalNote:
          'Franklin published significant work on coal and carbon microstructure, DNA fibre diffraction, and virus structure in a career of roughly sixteen working years. Her carbon papers are still cited in materials science.',
      },
      {
        id: 'default',
        title: 'Small Handwriting, No Slope',
        yearLabel: 'after',
        image: {
          setting: 'a closed laboratory notebook with a dated spine label on an otherwise empty bench',
          year: 1958,
          characters: [],
          mood: 'quiet, exact, complete',
          details: ['closed notebook', 'dated spine label', 'an empty bench', 'a capped pen', 'late light'],
          alt: 'A closed laboratory notebook with a dated spine label on an empty bench.',
        },
        pages: [
          {
            id: 'notebook',
            narration:
              'Thirty-seven years, and the record of them is in ruled notebooks with the failures written down beside their reasons, which is rarer than it sounds and worth more than most of what gets framed.',
          },
          {
            id: 'last',
            narration:
              'The people who trained under her all say the same thing about her, and all of them say it in the same words, because they are her words and she used them on every one of them.',
            speaker: 'A MEMBER OF HER GROUP',
            dialogue: 'Show me how you know it. Not who told you — how you know it.',
          },
        ],
        historicalNote:
          'Rosalind Franklin died in London in April 1958, aged 37. The closing line echoes the exacting temperament described by everyone who worked with her; the wording is dramatized.',
      },
    ],
  },
];
