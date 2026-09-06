import type { StoryScene } from '../../types/story';

const sourceIds = ['oppenheimer'];

/** Board context cards told in full by scenes in this file. */
export const OPPENHEIMER_REPLACED_CONTEXT_CARDS: string[] = [
  'oppenheimer-card-1926',
  'oppenheimer-card-1933-refugees',
  'oppenheimer-card-1942-recruited',
  'oppenheimer-card-1945-trinity',
  'oppenheimer-card-1954-hearing',
];

export const OPPENHEIMER_STORY_SCENES: StoryScene[] = [
  // ───────────────────────────────────────────── prologue
  {
    id: 'oppenheimer-prologue-riverside',
    characterId: 'oppenheimer',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'An Apartment Above the River',
        locationLabel: 'New York',
        image: {
          setting: 'a high floor apartment overlooking the Hudson in New York, 1904',
          year: 1904,
          characters: ['oppenheimer'],
          mood: 'hushed privilege, coal-smoke light',
          details: ['tall sash windows', 'framed paintings', 'a river of barge traffic', 'heavy drapes', 'a nursery lamp'],
          alt: 'A quiet, well-appointed New York apartment at the turn of the century with the Hudson beyond the windows.',
        },
        pages: [
          {
            id: 'century',
            narration:
              'Barges push up the Hudson under a sky the colour of tin. Eleven floors above the water the windows stay shut against the coal smoke, and inside there are paintings on the walls that most of the city will never see. Outside, the century is learning to run on oil and current.',
          },
          {
            id: 'household',
            narration:
              'His father imports cloth and has taught himself, carefully, which pictures are worth owning. His mother paints, and keeps a glove on one hand, and keeps the rooms quiet. Into that quiet, in the spring of 1904, a boy arrives who will be given everything except the habit of being ordinary.',
          },
          {
            id: 'terms',
            narration:
              'He will be told, often and early, that he is exceptional. It is not entirely a kindness. It is a debt, and the century that is starting outside the window is already drawing up the terms of repayment.',
          },
        ],
        historicalNote:
          'Oppenheimer was born in New York in 1904 to a prosperous family; his father was a textile importer and the household owned notable European paintings. The narration is dramatized connective writing, not a quotation.',
      },
    ],
  },

  // ───────────────────────────────────────────── formation
  {
    id: 'oppenheimer-formation-opening',
    characterId: 'oppenheimer',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A Boy Who Is Never Bored',
        locationLabel: 'New York',
        yearLabel: '1904–1922',
        image: {
          setting: 'a progressive New York schoolroom and a boy on a stone stair with a book',
          year: 1913,
          characters: ['oppenheimer'],
          mood: 'precocious solitude',
          details: ['inkwell desks', 'a labelled mineral specimen', 'a stiff collar', 'a wooden stair rail', 'winter light'],
          alt: 'A thin schoolboy reading alone on a stone stair beside a classroom door.',
        },
        pages: [
          {
            id: 'school',
            narration:
              'The school on the West Side teaches that a good mind is a public obligation. Robert is ahead of the room and has already discovered that being ahead is a kind of loneliness with good manners. He reads on the stairs at recess so that nobody will ask him to play.',
          },
          {
            id: 'minerals',
            narration:
              'In his coat pocket there is a labelled scrap of feldspar off a Manhattan excavation. He writes to the mineral men downtown in a careful adult hand, asking about crystal faces, and they write back as though to a colleague, because nothing in the handwriting tells them how old he is.',
          },
          {
            id: 'father',
            speaker: 'HIS FATHER',
            dialogue: 'They will answer any question you ask, Robert. The trick is to ask one they cannot.',
            narration: 'His father has the reply from the mineral men in his hand, and folds it back into its envelope without looking up.',
          },
          {
            id: 'call',
            narration:
              'The city is thick with things that can be learned, and a boy can only carry so many at once. Something has to be chosen first, and whatever is chosen first tends to become the shape of the hand.',
            choices: [
              {
                id: 'minerals',
                label: 'The rocks — the world is made of things you can hold up to a window',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.boyhood', value: 'minerals' },
                  { type: 'theme', theme: 'thingsVsWords', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'letters',
                label: 'The languages — Greek first, then whatever the shelf offers next',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.boyhood', value: 'letters' },
                  { type: 'theme', theme: 'thingsVsWords', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'stage',
                label: 'The room — how to be the one they stop talking over',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.boyhood', value: 'stage' },
                  { type: 'theme', theme: 'selfVsAudience', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Oppenheimer attended the Ethical Culture School in New York and corresponded with adult mineral collectors as a child. The dialogue is dramatized wording.',
      },
    ],
  },
  {
    id: 'oppenheimer-mineral-club',
    characterId: 'oppenheimer',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'confident',
        conditions: [
          { type: 'yearAtLeast', year: 1913 },
          { type: 'yearAtMost', year: 1919 },
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 },
        ],
        title: 'The Youngest Member',
        image: {
          setting: 'a small lecture room of a New York collectors’ society at night',
          year: 1916,
          characters: ['oppenheimer'],
          mood: 'nervous delight, gaslit warmth',
          details: ['a plain lectern', 'a wooden crate set on the floor', 'trays of labelled specimens', 'overcoats on hooks', 'a brass lamp'],
          alt: 'A small society lecture room with a lectern, a wooden crate before it, and trays of mineral specimens.',
        },
        pages: [
          {
            id: 'box',
            narration:
              'The collectors have invited their diligent correspondent to read a paper, having no notion of his age. When he arrives they set a wooden crate behind the lectern so that the members can see him over it. He is small enough that the crate is not a joke for long.',
          },
          {
            id: 'speech',
            speaker: 'ROBERT',
            dialogue: 'Ladies and gentlemen. If you will look at the second tray, you will see that the crystal has told the truth about itself.',
            narration:
              'He has written the opening out and learned it by heart, and he delivers it the way his father delivers things, with one hand flat on the lectern.',
          },
          {
            id: 'after',
            narration:
              'The laugh that goes round the room is not unkind, and it stops when he keeps going. He talks for a quarter of an hour and the members forget to be charmed. Walking home along the park wall afterwards he discovers that he liked being looked at, which is a dangerous thing to find out at that age.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'oppenheimer.audience', value: true },
          { type: 'theme', theme: 'selfVsAudience', amount: 1 },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'The New York Mineralogical Club invited the boy Oppenheimer to lecture, unaware of his age. The dialogue is dramatized wording.',
      },
      {
        id: 'private',
        conditions: [
          { type: 'yearAtLeast', year: 1913 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'A Cigar Box of Labelled Stones',
        image: {
          setting: 'a boy’s bedroom desk with mineral specimens and correspondence, New York',
          year: 1916,
          characters: ['oppenheimer'],
          mood: 'contained, private, slightly airless',
          details: ['a cigar box of labelled stones', 'a magnifying lens', 'a fountain pen', 'unopened letters', 'a drawn curtain'],
          alt: 'A boy’s desk with a cigar box of labelled mineral specimens, a lens and unopened letters.',
        },
        pages: [
          {
            id: 'letters',
            narration:
              'The collectors downtown want him to come and read a paper. He writes back that he is unable to attend, which is true in a way he cannot explain to them, and returns to the cigar box of labelled stones on the desk.',
          },
          {
            id: 'alone',
            speaker: 'ROBERT',
            dialogue: 'It is better on paper. On paper nobody has to look at me while I am right.',
            narration:
              'The specimens are arranged by hardness. He rearranges them by colour, puts them back the way they were, and addresses the window in the voice he uses when he is practising being older.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'oppenheimer.audience', value: false },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Oppenheimer’s childhood mineral collecting and correspondence with adult collectors are documented; a solitary version of that year is a dramatized alternative.',
      },
    ],
  },
  {
    id: 'oppenheimer-formation-illness',
    characterId: 'oppenheimer',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'convalescent',
        conditions: [
          { type: 'yearAtLeast', year: 1920 },
          { not: { type: 'resourceAtLeast', resource: 'health', value: 6 } },
        ],
        title: 'Sent West to Get Well',
        image: {
          setting: 'a sickroom in New York and, beyond it, a railway carriage window on high desert country',
          year: 1922,
          characters: ['oppenheimer'],
          mood: 'convalescence turning to open air',
          details: ['a folded blanket', 'a glass of water', 'a train timetable', 'a wide dry horizon', 'a borrowed saddle'],
          alt: 'A sickroom with a folded blanket and water glass, and a train window looking onto dry open country.',
        },
        pages: [
          {
            id: 'bed',
            narration:
              'He comes back from a summer abroad with something serious in his gut and spends the winter flat on his back. The doctors prescribe rest. Rest is the only subject he has never studied, and he is very bad at it.',
          },
          {
            id: 'train',
            narration:
              'In the spring they put him on a train going west. Somewhere past the hundredth meridian the country stops apologising for itself: no trees to speak of, red rock, a sky with nothing in it but weather.',
          },
          {
            id: 'horse',
            speaker: 'ROBERT',
            dialogue: 'I did not know a place could be this indifferent to me. It is the kindest thing anyone has done.',
            narration:
              'He rides until his legs give out and then rides further, and on the fourth evening, with the ranges going violet in the west and no one inside forty miles, he says it out loud.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'oppenheimer.desert', value: true },
          { type: 'resources', effects: { health: 1, wellbeing: 2 } },
        ],
        historicalNote:
          'Oppenheimer was seriously ill after a trip abroad in his teens and afterwards spent time on horseback in the New Mexico high country, a landscape he returned to all his life. The dialogue is dramatized.',
      },
      {
        id: 'restless',
        conditions: [{ type: 'yearAtLeast', year: 1920 }],
        title: 'A Summer of Long Rides',
        image: {
          setting: 'high dry country in the American southwest with a saddled horse and distant blue ranges',
          year: 1922,
          characters: ['oppenheimer'],
          mood: 'exhilarated escape',
          details: ['a saddled horse', 'a canvas bedroll', 'blue ranges at distance', 'a canteen', 'thin high cloud'],
          alt: 'A saddled horse and bedroll on high dry ground with distant blue mountain ranges.',
        },
        pages: [
          {
            id: 'west',
            narration:
              'There is no doctor’s order behind it. He simply cannot stand another summer of the same rooms, and he arranges a train ticket west with money that was meant for books.',
          },
          {
            id: 'country',
            speaker: 'ROBERT',
            dialogue: 'Physics and desert country. If a man could have both at once he would never need anything else.',
            narration:
              'He will come back east burned brown and quietly certain that he has found the place he will go when the cities become unbearable. On the last evening he says it aloud to a horse, which is the only listener for eleven miles.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'oppenheimer.desert', value: true },
          { type: 'resources', effects: { wellbeing: 2 } },
        ],
        historicalNote:
          'Oppenheimer’s attachment to the New Mexico high country dates from his youth. The wording is dramatized; the pairing of physics and desert country is a sentiment he expressed in various forms.',
      },
    ],
  },
  {
    id: 'oppenheimer-formation-closing',
    characterId: 'oppenheimer',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'performer',
        conditions: [{ type: 'narrativeFlag', flag: 'oppenheimer.boyhood', value: 'stage' }],
        title: 'The Trunk in the Hall',
        image: {
          setting: 'a New York entrance hall with a packed steamer trunk and a hat on a side table',
          year: 1922,
          characters: ['oppenheimer'],
          mood: 'departure, contained excitement',
          details: ['a strapped steamer trunk', 'a soft hat', 'a hall mirror', 'labels tied with string', 'afternoon light on parquet'],
          alt: 'A packed steamer trunk and hat in a well-appointed hallway before a departure.',
        },
        pages: [
          {
            id: 'mirror',
            narration:
              'The trunk is strapped and labelled and he has already decided which of his mannerisms are worth taking to Cambridge, Massachusetts, and which are for New York only. He practises the walk in the hall mirror and is not embarrassed.',
          },
          {
            id: 'leaving',
            narration:
              'He is eighteen and he has never once been unimpressive on purpose. Nobody has yet told him what that costs, and the trunk goes down in the service lift, and the hall is quiet again.',
          },
        ],
      },
      {
        id: 'scholar',
        conditions: [
          {
            any: [
              { type: 'narrativeFlag', flag: 'oppenheimer.boyhood', value: 'minerals' },
              { type: 'narrativeFlag', flag: 'oppenheimer.boyhood', value: 'letters' },
            ],
          },
        ],
        title: 'What Goes in the Trunk',
        image: {
          setting: 'a bedroom floor spread with books, mineral trays and packing paper, New York',
          year: 1922,
          characters: ['oppenheimer'],
          mood: 'careful, elegiac',
          details: ['stacked books', 'a tray of labelled minerals', 'brown packing paper', 'twine', 'a bare mattress'],
          alt: 'Books, mineral trays and packing paper spread across a bedroom floor before a move.',
        },
        pages: [
          {
            id: 'sorting',
            narration:
              'The books go in first because the books are not negotiable. The mineral trays are heavier than he remembered and he takes out half of them, then puts back a third, then sits on the floor beside the crate for a while with his hands on his knees.',
          },
          {
            id: 'ledger',
            narration:
              'He has spent eighteen years accumulating exactness and has no idea yet what it is for. The trunk is corded shut. Whatever he becomes, it will have to be built out of what is in that crate and what is in his head, and he suspects the second is the lighter load.',
          },
        ],
      },
      {
        id: 'default',
        title: 'The End of Being a Boy',
        image: {
          setting: 'a New York window at dusk above the river with a corded trunk beside it',
          year: 1922,
          characters: ['oppenheimer'],
          mood: 'threshold, faint apprehension',
          details: ['a corded trunk', 'a sash window', 'lit windows across the water', 'a folded overcoat', 'a schedule card'],
          alt: 'A corded travelling trunk beside a window looking over a river at dusk.',
        },
        pages: [
          {
            id: 'window',
            narration:
              'The river goes on doing what rivers do. He stands at the window with his coat already on and understands that the part of his life in which everything is arranged for him is finishing tonight, quietly, without ceremony.',
          },
          {
            id: 'ahead',
            narration:
              'Ahead of him: lecture halls, other people’s laboratories, and the discovery of exactly how much of his cleverness will survive contact with the world. He turns off the lamp. The trunk stays where it is until morning.',
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────── education
  {
    id: 'oppenheimer-education-opening',
    characterId: 'oppenheimer',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'cambridge',
        conditions: [{ type: 'locationIs', locationId: 'cambridgeUK' }],
        title: 'Hands That Will Not Learn',
        locationLabel: 'Cambridge, England',
        image: {
          setting: 'a cold English physics laboratory bench with soldering equipment and thin metal films',
          year: 1925,
          characters: ['oppenheimer'],
          mood: 'humiliation under a low ceiling',
          details: ['a soldering iron', 'blackened tin trays', 'a vacuum pump', 'a rain-streaked window', 'a stool too low'],
          alt: 'A cluttered laboratory bench with soldering equipment and blackened trays beneath a rain-streaked window.',
        },
        pages: [
          {
            id: 'bench-cold',
            narration:
              'The laboratory is cold in a way that gets into the joints of things. He is meant to be preparing thin films. His solder will not take, his hands shake with a kind of fury that has no object, and the apparatus knows it.',
          },
          {
            id: 'corridor',
            speaker: 'A SENIOR MAN',
            dialogue: 'You read faster than anyone here, Oppenheimer. It is a pity the equipment cannot be persuaded by reading.',
            narration: 'A senior man stops at the end of the bench on his way to somewhere else, glances at the ruined joint, and says it kindly, which is worse.',
          },
          {
            id: 'bench',
            narration:
              'He stands in the corridor for a full minute after the footsteps have gone. There is a way out of this and he can see it: rooms where the work is done on paper, where a man is judged on what he can hold in his head. Whether he takes it now or endures the bench a while longer is the only question he owns this year.',
            choices: [
              {
                id: 'endure',
                label: 'Stay at the bench until the hands learn what the head already knows',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.cavendish', value: 'endure' },
                  { type: 'resources', effects: { health: -1, wellbeing: -1, standing: 1 } },
                ],
              },
              {
                id: 'theory',
                label: 'Give up the apparatus and go where the work is done on paper',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.cavendish', value: 'theory' },
                  { type: 'theme', theme: 'thingsVsWords', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'confess',
                label: 'Tell somebody how bad it has actually become',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.cavendish', value: 'confess' },
                  { type: 'resources', effects: { wellbeing: 2, network: 1, standing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Oppenheimer’s year at the Cavendish Laboratory was a documented period of misery and poor experimental aptitude, and he came close to a breakdown. The dialogue is dramatized; the unnamed senior colleague stands in for the laboratory’s staff.',
      },
      {
        id: 'default',
        title: 'Three Years in Two',
        image: {
          setting: 'a university dining hall table with a single place set and a propped book',
          year: 1923,
          characters: ['oppenheimer'],
          mood: 'voracious isolation',
          details: ['a propped book against a water jug', 'a cold plate', 'a stack of borrowed volumes', 'long windows', 'a scarf still on'],
          alt: 'A single place at a long dining table with a book propped against a water jug and a stack of borrowed volumes.',
        },
        pages: [
          {
            id: 'harvard',
            narration:
              'He takes six courses at a time and audits more, and finishes the degree a year early because finishing early is a way of proving something to people who never asked. He eats lunch with a book propped against the water jug.',
          },
          {
            id: 'greek',
            narration:
              'Chemistry is the official subject. Physics is the actual one. Sanskrit and French poetry are the ones he mentions at parties, because he has worked out that a man who is brilliant in only one direction is merely useful.',
          },
          {
            id: 'letter',
            speaker: 'ROBERT',
            dialogue: 'I want the Cavendish. If I am going to be a physicist I had better find out whether my hands are any good.',
            narration: 'He writes it across the Atlantic in a letter he redrafts four times, to a laboratory that has no particular reason to want him.',
          },
          {
            id: 'bench',
            narration:
              'The answer, when it comes, is yes. The laboratory bench is waiting somewhere ahead of him, and so is the choice that everybody with clever hands is spared: what a man does when the apparatus refuses him.',
            choices: [
              {
                id: 'endure',
                label: 'Whatever it costs, stay at the bench until the hands learn',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.cavendish', value: 'endure' },
                  { type: 'resources', effects: { health: -1, wellbeing: -1, standing: 1 } },
                ],
              },
              {
                id: 'theory',
                label: 'Trust the head, and go where the work is done on paper',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.cavendish', value: 'theory' },
                  { type: 'theme', theme: 'thingsVsWords', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'confess',
                label: 'Resolve, this time, to tell somebody when it gets bad',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.cavendish', value: 'confess' },
                  { type: 'resources', effects: { wellbeing: 2, network: 1, standing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Oppenheimer completed his Harvard degree in three years, studied widely outside physics, and went on to the Cavendish Laboratory. The letter and dialogue are dramatized wording.',
      },
    ],
  },
  {
    id: 'oppenheimer-education-lodgings',
    characterId: 'oppenheimer',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'comfortable',
        conditions: [
          { type: 'yearAtLeast', year: 1923 },
          { type: 'yearAtMost', year: 1926 },
          { type: 'resourceAtLeast', resource: 'funds', value: 3 },
        ],
        title: 'The Cost of Being Interesting',
        image: {
          setting: 'a set of rented rooms with too many books, a good coat on a hook and a tray of untouched supper',
          year: 1924,
          characters: ['oppenheimer'],
          mood: 'privilege that solves nothing',
          details: ['a good coat on a hook', 'a tray of untouched supper', 'French poetry face-down', 'a gas fire', 'unanswered invitations on the mantel'],
          alt: 'Rented rooms crowded with books, a good coat on a hook and an untouched supper tray.',
        },
        pages: [
          {
            id: 'rooms',
            narration:
              'The rooms are better than a student should have and the money for them arrives without being asked for. He fills them with books in four languages and buys a very good coat, and gives excellent dinners for people whose names he cannot afterwards remember.',
          },
          {
            id: 'trick',
            narration:
              'The trick he has developed is to be the most interesting person in any room within eleven minutes. It works every time. It has never once produced a friend, and he has begun to notice the pattern and to have no idea what to do about it.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'I can make them like me by Thursday. I have not worked out how to make one of them ask me anything on a Friday.',
            narration: 'He says it to the gas fire, at two in the morning, with the invitations he has not answered stacked on the mantel above it.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'oppenheimer.solitude', value: true },
          { type: 'resources', effects: { network: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Oppenheimer’s student years were financially comfortable and socially difficult; the loneliness of that period is documented in his own later accounts. The scene and dialogue are dramatized.',
      },
      {
        id: 'thin',
        conditions: [
          { type: 'yearAtLeast', year: 1923 },
          { type: 'yearAtMost', year: 1926 },
        ],
        title: 'Reading Instead of Eating',
        image: {
          setting: 'a cold single room with a shilling meter, a stack of library books and one blanket doubled over',
          year: 1924,
          characters: ['oppenheimer'],
          mood: 'thin, driven, unadmitted',
          details: ['a coin meter on the wall', 'library books stacked by the bed', 'one blanket doubled over', 'a cup used as a paperweight', 'frost inside the window'],
          alt: 'A cold single room with a coin meter, a stack of library books and one doubled blanket.',
        },
        pages: [
          {
            id: 'meter',
            narration:
              'The meter takes a coin an hour and he has worked out that a coat and a blanket will get him to midnight without one. The books are borrowed, all of them, and have to go back on Fridays, so Thursday nights are long.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'I am not hungry. I am reading. The two feel almost exactly the same from the inside and only one of them is anybody’s business.',
            narration:
              'He says it to a landlady who has asked, once, kindly, whether he is eating. He is thinner every term and quicker every term and has not connected the two.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'oppenheimer.solitude', value: true },
          { type: 'resources', effects: { health: -1, wellbeing: -1 } },
        ],
        historicalNote:
          'Oppenheimer read voraciously outside his subject as a student and was chronically thin. This account follows a life without the family money that in fact supported him.',
      },
    ],
  },
  {
    id: 'oppenheimer-bench-to-blackboard',
    characterId: 'oppenheimer',
    chapterId: 'education',
    kind: 'divergence',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'oppenheimer-card-1926',
    trigger: { event: 'afterAction', priority: 92 },
    once: true,
    variants: [
      {
        id: 'stayed',
        conditions: [
          { type: 'yearAtLeast', year: 1925 },
          { type: 'choiceWas', choiceKey: 'oppenheimer-education-opening:bench', choiceId: 'endure' },
        ],
        title: 'Two More Years of Tin',
        image: {
          setting: 'a laboratory bench late at night with a re-made joint and a row of failed attempts beside it',
          year: 1926,
          characters: ['oppenheimer'],
          mood: 'stubbornness without relief',
          details: ['a row of failed joints laid out in order', 'a soldering iron cooling', 'burned fingertips', 'a stopped clock', 'a coat still buttoned'],
          alt: 'A laboratory bench at night with a row of failed soldered joints laid out beside a cooling iron.',
        },
        pages: [
          {
            id: 'again',
            narration:
              'He said he would stay at the bench, and he stays. The failed joints are laid out along the back of the bench in the order he made them, eleven of them, like a sentence in a language he cannot read.',
          },
          {
            id: 'cost',
            narration:
              'Nobody makes him do it. That is the part he will not explain afterwards: that he could have walked into the room down the corridor where the work is done on paper, at any hour, on any day of those two years, and did not.',
          },
          {
            id: 'silent',
            speaker: 'ROBERT',
            dialogue: 'Once more, and properly this time. A man who cannot make a joint hold has no business telling anyone what matter is doing.',
            narration:
              'He says it to the bench, in the small hours, in a laboratory where every other lamp has been out for three hours. The concession never gets said aloud in all that time, and afterwards he is proud of that, and afterwards he is not.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1926' },
          { type: 'flag', flag: 'oppenheimer.turnedToTheory', value: false },
          { type: 'resources', effects: { wellbeing: -1, health: -1 } },
        ],
        historicalNote:
          'Oppenheimer was documented as ill-suited to experimental work at the Cavendish and moved to theory at Göttingen. This account follows a life that refused to make that move, and stayed at the bench instead.',
      },
      {
        id: 'at-cambridge',
        conditions: [
          { type: 'yearAtLeast', year: 1925 },
          { type: 'yearAtMost', year: 1927 },
          { type: 'locationIs', locationId: 'cambridgeUK' },
        ],
        title: 'From the Bench to the Blackboard',
        locationLabel: 'Cambridge, England',
        image: {
          setting: 'an English laboratory at night with an abandoned apparatus and a lit doorway',
          year: 1926,
          characters: ['oppenheimer'],
          mood: 'exhaustion breaking into relief',
          details: ['an unfinished apparatus', 'a stopped clock', 'a cold cup', 'a coat over a stool', 'a lit corridor beyond the door'],
          alt: 'An abandoned laboratory apparatus at night with a coat over a stool and a lit corridor beyond.',
        },
        pages: [
          {
            id: 'bottom',
            narration:
              'It is late, and the film has failed again, and he sits down on the floor beside the bench because standing has stopped seeming worth the trouble. This is the winter in which he frightens the people who love him, and afterwards is careful never to describe it precisely.',
          },
          {
            id: 'seminar',
            narration:
              'What saves him is a room he wanders into by accident: a seminar, a blackboard, an argument about the new quantum mechanics being conducted at speed. He does not touch a single instrument and by the end of the hour he has said three things that the room stops to consider.',
          },
          {
            id: 'decision',
            speaker: 'ROBERT',
            dialogue: 'I have been trying to become a bad experimentalist. I could be something else by Christmas.',
            narration:
              'The apparatus stays where it is on the bench, half built; somebody else will finish it in the spring and he will never ask how it came out. He writes to Göttingen that week, and says this to the one person who thinks to ask him why.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1926' },
          { type: 'flag', flag: 'oppenheimer.turnedToTheory', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Oppenheimer’s year at the Cavendish was unhappy and he was ill-suited to experimental work; he moved to Göttingen and to theory, which suited him. This account of the turning point is dramatized within that documented arc.',
      },
      {
        id: 'at-gottingen',
        conditions: [
          { type: 'yearAtLeast', year: 1925 },
          { type: 'yearAtMost', year: 1927 },
          { type: 'locationIs', locationId: 'gottingen' },
        ],
        title: 'The Chalk Fits the Hand',
        locationLabel: 'Göttingen',
        image: {
          setting: 'a German seminar room with a long blackboard and afternoon light',
          year: 1926,
          characters: ['oppenheimer'],
          mood: 'arrival, sudden competence',
          details: ['a long blackboard', 'chalk dust in low sun', 'wooden benches', 'a coal stove', 'a stack of offprints'],
          alt: 'A long blackboard in a German seminar room with chalk dust hanging in afternoon light.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'He has been in this town three weeks and he has not once been asked to solder anything. The instrument here is a blackboard and a room of people willing to argue, and it turns out that he is an instrument of the same kind.',
          },
          {
            id: 'contrast',
            narration:
              'He thinks sometimes of the failed films on the cold bench behind him, the stopped clock, the floor he sat on. He does not tell anyone about that winter. He simply works fourteen hours and finds it restful.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'It was never the physics that was beyond me. It was the tin.',
            narration: 'A fellow student asks him in the corridor why he left England, and he answers lightly, and then makes it into a joke, which is how he handles anything true.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1926' },
          { type: 'flag', flag: 'oppenheimer.turnedToTheory', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Oppenheimer left experimental work at the Cavendish for theoretical physics at Göttingen. The dialogue is dramatized wording.',
      },
      {
        id: 'anywhere',
        conditions: [{ type: 'yearAtLeast', year: 1925 }],
        title: 'What the Hands Are For',
        image: {
          setting: 'a desk at night with a half-finished piece of apparatus pushed aside and pages of equations',
          year: 1926,
          characters: ['oppenheimer'],
          mood: 'a quiet, decisive surrender',
          details: ['a half-built apparatus pushed aside', 'pages of equations', 'a low lamp', 'a cold cup', 'an unposted letter'],
          alt: 'A desk at night with a half-built apparatus pushed to one side and pages of handwritten equations.',
        },
        pages: [
          {
            id: 'admission',
            narration:
              'Somewhere in this year he stops pretending. The apparatus on the desk has been half built for four months and every time he touches it the joint fails, and the failure is not the tin’s fault, and he knows it.',
          },
          {
            id: 'paper',
            narration:
              'The equations, meanwhile, come out clean on the first pass. He pushes the apparatus to the far end of the desk, where it will stay, and pulls the pages towards him, and something in his chest lets go.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'Very well. I am not a man who makes things. I am a man who says what things are doing.',
            narration: 'He says it out loud to the empty room, in the flat voice of a man reading out a verdict on himself, and it sounds like a concession, and it is not one.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1926' },
          { type: 'flag', flag: 'oppenheimer.turnedToTheory', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'The move from experiment to theory is documented; where it happens depends on where this life has gone. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'oppenheimer-gottingen-training-breakthrough',
    characterId: 'oppenheimer',
    chapterId: 'education',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'oppenheimer-gottingen-training', priority: 84 },
    once: true,
    variants: [
      {
        id: 'at-gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'Let Him Finish the Sentence',
        locationLabel: 'Göttingen',
        image: {
          setting: 'a crowded German seminar room mid-argument, chairs turned inward',
          year: 1927,
          characters: ['oppenheimer'],
          mood: 'electric, slightly abrasive',
          details: ['chairs turned inward', 'a chalk-crowded blackboard', 'a piece of chalk snapped in two', 'notebooks on knees', 'a stove ticking'],
          alt: 'A crowded seminar room with chairs turned inward toward a chalk-covered blackboard.',
        },
        pages: [
          {
            id: 'seminar',
            narration:
              'The new mechanics is three years old and this room is where it is being argued into shape. He arrives with more languages than manners and an intolerable habit: he can see the end of a derivation while it is still in its second line, and he says so.',
          },
          {
            id: 'petition',
            narration:
              'The other students draw up a paper asking that the American be restrained. It is passed to the professor, who reads it, and puts it under a book on his desk where the American can see it.',
          },
          {
            id: 'born',
            speaker: 'BORN',
            dialogue: 'You will let him finish the sentence, Herr Oppenheimer. Even when you already know how it ends. Especially then.',
            narration:
              'Born reads the paper twice, puts it under a book on the desk where the American can see the corner of it, and waits until the room has emptied. What he says is the mildest correction Robert will ever receive, and it lands like a slap.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1, network: 1 } },
          { type: 'theme', theme: 'selfVsAudience', amount: 1 },
        ],
        historicalNote:
          'Oppenheimer took his doctorate at Göttingen under Max Born and was known for interrupting seminars; fellow students complained to Born about it. The dialogue is dramatized wording.',
      },
      {
        id: 'elsewhere',
        title: 'Reading Himself Into It',
        image: {
          setting: 'a desk stacked with German journals and handwritten translations',
          year: 1927,
          characters: ['oppenheimer'],
          mood: 'solitary, hungry, self-taught',
          details: ['German journals', 'a dictionary open face down', 'handwritten translations', 'a cold pipe', 'a single lamp'],
          alt: 'A desk stacked with German physics journals, a dictionary and pages of handwritten translation.',
        },
        pages: [
          {
            id: 'journals',
            narration:
              'The new mechanics reaches him as ink on paper, months late, in a language he has taught himself well enough to argue in. There is no seminar to interrupt. He interrupts the authors in the margins instead, which is less satisfying and cheaper.',
          },
          {
            id: 'mastery',
            speaker: 'ROBERT',
            dialogue: 'I have had to build the whole room myself. It is a smaller room, but I know where everything is in it.',
            narration:
              'By the end of the year he can do the work. What he does not have is the thing the room would have given him for free: two hundred people who know he can.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1 } },
          { type: 'flag', flag: 'oppenheimer.selfTaught', value: true },
        ],
        historicalNote:
          'Oppenheimer’s documented training in quantum mechanics happened inside the Göttingen circle. A version reached alone through the literature is a dramatized departure from that setting.',
      },
    ],
  },
  {
    id: 'oppenheimer-born-approximation-breakthrough',
    characterId: 'oppenheimer',
    chapterId: 'education',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'oppenheimer-born-oppenheimer', priority: 86 },
    once: true,
    variants: [
      {
        id: 'at-gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'Let the Heavy Things Stand Still',
        locationLabel: 'Göttingen',
        image: {
          setting: 'two chairs pulled to one desk in a German institute office, papers between them',
          year: 1927,
          characters: ['oppenheimer'],
          mood: 'collaborative concentration',
          details: ['two chairs at one desk', 'a molecular sketch', 'a slide rule', 'an inkwell', 'a window onto a cobbled street'],
          alt: 'Two chairs drawn up to one desk with a sketch of a molecule and a slide rule between them.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'A molecule is an impossible bookkeeping problem: every nucleus and every electron pulling on every other, all at once, forever. The equations exist and cannot be solved by anyone alive.',
          },
          {
            id: 'trick',
            narration:
              'The trick, when it comes, is almost rude in its simplicity. The nuclei are thousands of times heavier and therefore thousands of times slower. So let them stand still. Solve for the electrons around a frozen skeleton, then let the skeleton move.',
          },
          {
            id: 'born',
            speaker: 'BORN',
            dialogue: 'It is an approximation, Robert. Say so plainly in the paper, and chemistry will be able to use it for fifty years.',
            narration:
              'They write it up together at the same desk, arguing for most of an afternoon about a single word in the abstract. It will go out under both names and become the quiet floor a whole science stands on without thinking about it.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, network: 1 } },
          { type: 'flag', flag: 'oppenheimer.doctorate', value: true },
        ],
        historicalNote:
          'The Born–Oppenheimer approximation, separating nuclear and electronic motion, was published from Göttingen in 1927 and remains foundational in molecular physics and chemistry. The dialogue is dramatized wording.',
      },
      {
        id: 'elsewhere',
        title: 'A Separation, Worked Out Alone',
        image: {
          setting: 'a single desk at night with a molecular diagram and discarded sheets on the floor',
          year: 1927,
          characters: ['oppenheimer'],
          mood: 'solitary triumph, unshared',
          details: ['a molecular diagram', 'discarded sheets on the floor', 'a guttering lamp', 'a cold stove', 'an unaddressed envelope'],
          alt: 'A desk at night with a molecular diagram and discarded pages scattered on the floor.',
        },
        pages: [
          {
            id: 'alone',
            narration:
              'He gets there without help, which is slower and lonelier and, he tells himself, no less true. Let the heavy nuclei stand still; solve the light electrons around them; then release the skeleton and watch it move.',
          },
          {
            id: 'sending',
            speaker: 'ROBERT',
            dialogue: 'It wants a second name on it. Work like this is supposed to be argued at, and there is nobody here to argue.',
            narration:
              'He addresses the envelope to a journal rather than to a colleague. The result is correct. It will be years before anyone tells him so to his face.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2 } },
          { type: 'flag', flag: 'oppenheimer.doctorate', value: true },
        ],
        historicalNote:
          'The approximation was in fact developed jointly with Max Born at Göttingen; a version reached in isolation is a dramatized departure.',
      },
    ],
  },
  {
    id: 'oppenheimer-education-closing',
    characterId: 'oppenheimer',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'endured',
        conditions: [
          { type: 'narrativeFlag', flag: 'oppenheimer.cavendish', value: 'endure' },
          { type: 'projectNotCompleted', projectId: 'oppenheimer-born-oppenheimer' },
          { type: 'projectNotCompleted', projectId: 'oppenheimer-gottingen-training' },
        ],
        title: 'The Cost of Staying',
        image: {
          setting: 'a laboratory bench at the end of a long day with tools set down in order',
          year: 1927,
          characters: ['oppenheimer'],
          mood: 'grim endurance',
          details: ['tools laid in order', 'burned fingertips', 'a stained apron on a hook', 'a rain-dark window', 'a stopped experiment'],
          alt: 'A laboratory bench with tools laid down in order and a stained apron hanging on a hook.',
        },
        pages: [
          {
            id: 'stayed',
            narration:
              'He stayed. The hands never became good, but they became adequate, and adequacy cost him two years and a great deal that he does not have a word for. The apron hangs on the hook. He does not put it on again.',
          },
          {
            id: 'reckoning',
            narration:
              'Somewhere in Germany the new mechanics has been argued out to a finish without him. He reads about it later, in print, the way one reads about a party one was invited to. He is very good now at a thing that did not need him.',
          },
        ],
      },
      {
        id: 'doctor',
        conditions: [{ type: 'projectCompleted', projectId: 'oppenheimer-born-oppenheimer' }],
        title: 'Herr Doktor',
        image: {
          setting: 'a small European room with a new bound dissertation on a bare table',
          year: 1927,
          characters: ['oppenheimer'],
          mood: 'quiet completion',
          details: ['a bound dissertation', 'a bare table', 'a packed case', 'a train ticket', 'grey morning light'],
          alt: 'A newly bound dissertation on a bare table beside a packed case and a ticket.',
        },
        pages: [
          {
            id: 'bound',
            narration:
              'The dissertation comes back bound, and it is thinner than he expected, and there is a paper with two names on it that will outlive both of them. He is twenty-three. He turns the volume over twice and puts it in the case.',
          },
          {
            id: 'offers',
            narration:
              'The letters have started arriving from American universities, several at once, each assuming the others do not exist. Two years ago he could not make solder hold. He reads the offers standing up, in his coat, and lets himself enjoy it for exactly as long as it takes to finish them.',
          },
        ],
      },
      {
        id: 'trained',
        conditions: [{ type: 'projectCompleted', projectId: 'oppenheimer-gottingen-training' }],
        title: 'Equipped, and Not Yet Known',
        image: {
          setting: 'a European railway platform in early morning with a case and a folder of notes',
          year: 1927,
          characters: ['oppenheimer'],
          mood: 'competence without proof',
          details: ['a leather case', 'a folder of notes under one arm', 'a platform clock', 'steam at knee height', 'a folded overcoat'],
          alt: 'A traveller with a case and folder of notes waiting on an early-morning railway platform.',
        },
        pages: [
          {
            id: 'platform',
            narration:
              'He has the new mechanics in his hands now, all of it, fluently. What he does not have is a result with his name attached, and he knows exactly how much that is worth in a corridor full of young men who do.',
          },
          {
            id: 'ambition',
            narration:
              'The train comes. He has decided, without announcing it to anyone, that the next place he stops will be a place he can build rather than join. It is an arrogant plan. It is also, as it turns out, the correct one.',
          },
        ],
      },
      {
        id: 'default',
        title: 'The Years That Did Not Take',
        image: {
          setting: 'a rented room with unopened journals stacked against the wall',
          year: 1927,
          characters: ['oppenheimer'],
          mood: 'unfinished, restless',
          details: ['unopened journals stacked against a wall', 'a made bed', 'a suitcase not unpacked', 'a cold kettle', 'a window on a grey street'],
          alt: 'A rented room with journals stacked unopened against the wall and a suitcase left packed.',
        },
        pages: [
          {
            id: 'stack',
            narration:
              'The journals have been coming all year and about half of them have been opened. He is twenty-three and formidably educated and has finished nothing, and that sentence sits in the room with him like another occupant.',
          },
          {
            id: 'ahead',
            narration:
              'There will be a post somewhere; there always is, for a man who reads six languages and can talk. But the work that would have made the reputation is still in the stack against the wall, and he can hear the decade starting without him.',
          },
        ],
        historicalNote:
          'On the documented route Oppenheimer completed his doctorate at Göttingen in 1927. This account follows a life that did not reach that point.',
      },
    ],
  },

  // ───────────────────────────────────────────── entry
  {
    id: 'oppenheimer-entry-opening',
    characterId: 'oppenheimer',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'berkeley',
        conditions: [{ type: 'locationIs', locationId: 'berkeley' }],
        title: 'A Desert, and He Likes Deserts',
        locationLabel: 'Berkeley',
        image: {
          setting: 'a bare university office above the bay with eucalyptus outside the window',
          year: 1929,
          characters: ['oppenheimer'],
          mood: 'appraising, faintly amused',
          details: ['an empty bookshelf', 'a blackboard with nothing on it', 'eucalyptus beyond the glass', 'a hat on a hook', 'fog on the bay'],
          alt: 'A bare university office with an empty bookshelf and blank blackboard, eucalyptus trees beyond the window.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'The office is empty, the shelf is empty, the blackboard has not been written on in a year. There is no theoretical physics on this side of the ocean to speak of, and none at all on this coast. He looks at the blank wall and is not dismayed; he has been given a desert and he already knows he loves deserts.',
          },
          {
            id: 'students',
            narration:
              'Within two years there are graduate students who hold their cigarettes the way he holds his, who say the little murmuring noise he makes while thinking, who follow him down the coast each spring when he goes south to teach the other half of his year.',
          },
          {
            id: 'lawrence',
            speaker: 'LAWRENCE',
            dialogue: 'You do the thinking, Robert. I will build something big enough to find out whether you are right.',
            narration: 'The machines go up on one side of the campus and the blackboards fill on the other, and for a decade the arrangement is very nearly perfect.',
          },
        ],
        historicalNote:
          'Oppenheimer joined Berkeley in 1929 with a joint appointment at Caltech, and built a leading school of theoretical physics there; Ernest Lawrence’s experimental laboratory was on the same campus. The dialogue is dramatized wording.',
      },
      {
        id: 'default',
        title: 'A Post, and What to Do With It',
        image: {
          setting: 'an unfamiliar lecture room being measured by eye before term begins',
          year: 1929,
          characters: ['oppenheimer'],
          mood: 'calculating, unsettled',
          details: ['rows of empty seats', 'a clean blackboard', 'a lectern with a chip out of it', 'chalk in a tin', 'high windows'],
          alt: 'An empty lecture room with rows of seats and a clean blackboard before term begins.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'Every lecture room in the world is the same room: seats, chalk, a clock at the back that the speaker is not supposed to look at. He stands where the lecturer stands and counts the chairs, and thinks about what could be made to happen in here.',
          },
          {
            id: 'plan',
            narration:
              'The plan is not modest. He does not want a chair; he wants a school — a dozen young men who think in his accent, and a subject that has no address anywhere he can point to on a map.',
          },
          {
            id: 'aloud',
            speaker: 'ROBERT',
            dialogue: 'One is not enough. One is a curiosity. Twelve is a fact that people have to deal with.',
            narration: 'He says it to an empty room, which is where he does most of his rehearsing.',
          },
        ],
      },
    ],
  },
  {
    id: 'oppenheimer-berkeley-school-breakthrough',
    characterId: 'oppenheimer',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'oppenheimer-berkeley-school', priority: 82 },
    once: true,
    variants: [
      {
        id: 'berkeley',
        conditions: [{ type: 'locationIs', locationId: 'berkeley' }],
        title: 'The Caravan Goes South',
        locationLabel: 'Berkeley',
        image: {
          setting: 'a line of dusty cars loaded with books and bedding on a coast road',
          year: 1934,
          characters: ['oppenheimer'],
          mood: 'loyal, slightly cultish, happy',
          details: ['a line of dusty cars', 'books roped to a luggage rack', 'a rolled blackboard cloth', 'a canvas water bag', 'ocean on the right'],
          alt: 'A line of dusty loaded cars on a coast road, books roped to a luggage rack.',
        },
        pages: [
          {
            id: 'caravan',
            narration:
              'When he goes south for the spring term, they go with him. Not the department: the students. They pack their notes into three cars and follow him down the coast because they have decided the seminar is wherever he is standing.',
          },
          {
            id: 'method',
            narration:
              'His method is not gentle. He asks a question a half-step past what the student knows, and waits, and lets the silence do the teaching. Some of them never forgive it. Most of them spend their careers doing it to somebody else.',
          },
          {
            id: 'student',
            speaker: 'A STUDENT',
            dialogue: 'He does not tell you the answer. He tells you which of your own sentences was the wrong one, and then he looks out of the window until you fix it.',
            narration:
              'By the middle of the decade the best young theorists in the country have all passed through this corridor, and every one of them can be reached by a single telephone call.',
          },
        ],
        effects: [
          { type: 'resources', effects: { network: 2, standing: 2 } },
          { type: 'flag', flag: 'oppenheimer.school', value: true },
        ],
        historicalNote:
          'Oppenheimer’s Berkeley school of theoretical physics trained a generation of American theorists, and students famously followed him between Berkeley and Caltech. The dialogue is dramatized wording.',
      },
      {
        id: 'elsewhere',
        title: 'A School Without a Campus',
        image: {
          setting: 'a table in a rented room with four chairs and pages spread between them',
          year: 1934,
          characters: ['oppenheimer'],
          mood: 'improvised, stubborn',
          details: ['four mismatched chairs', 'pages spread across a table', 'a borrowed blackboard', 'a coffee pot', 'coats piled on a bed'],
          alt: 'Four mismatched chairs around a table spread with pages, a borrowed blackboard behind.',
        },
        pages: [
          {
            id: 'improvised',
            narration:
              'There is no department behind him, so the school is four chairs and whoever will come. They meet in rented rooms; the blackboard is borrowed and has to go back on Thursdays. It is not respectable and it works.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'An institution is only people who keep turning up. We are an institution. We simply have nowhere to put a brass plate.',
            narration:
              'The men who come out of those rooms are as good as any produced anywhere. What they lack, and will keep lacking, is a letterhead to write it on.',
          },
        ],
        effects: [
          { type: 'resources', effects: { network: 2 } },
          { type: 'flag', flag: 'oppenheimer.school', value: true },
        ],
        historicalNote:
          'The documented school was built inside the University of California; an unaffiliated version of it is a dramatized departure.',
      },
    ],
  },
  {
    id: 'oppenheimer-refugee-letters',
    characterId: 'oppenheimer',
    chapterId: 'entry',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'oppenheimer-card-1933-refugees',
    trigger: { event: 'afterAction', priority: 90 },
    once: true,
    variants: [
      {
        id: 'berkeley',
        conditions: [
          { type: 'yearAtLeast', year: 1933 },
          { type: 'yearAtMost', year: 1936 },
          { type: 'locationIs', locationId: 'berkeley' },
        ],
        title: 'The Letters From Göttingen',
        locationLabel: 'Berkeley',
        image: {
          setting: 'a university office desk covered with European letters and a newspaper still folded',
          year: 1933,
          characters: ['oppenheimer'],
          mood: 'the world arriving through the post',
          details: ['European stamps', 'a folded newspaper', 'a typed list of names', 'a telephone on a short cord', 'fog against the window'],
          alt: 'A desk covered with letters bearing European stamps beside a folded newspaper and a typed list of names.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'The letters come in threes and fours now, all of them polite, all of them asking the same thing in different languages. He knows some of these names from seminars. One of them corrected him once, in public, and was right.',
          },
          {
            id: 'newspaper',
            narration:
              'He has never been a man who reads newspapers. He starts. It turns out the world has been having a serious argument for some years and has not been waiting for his attention.',
          },
          {
            id: 'decide',
            narration:
              'There is money in the family and there are department chairmen who take his calls, and there is a decision about how visible a man wants to be while doing an obvious kindness.',
            choices: [
              {
                id: 'quiet',
                label: 'Find them posts. Put nothing in writing that has his name on it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.politics', value: 'quiet' },
                  { type: 'resources', effects: { network: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                ],
              },
              {
                id: 'name',
                label: 'Put his name on the committee letterhead where it can be read',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.politics', value: 'name' },
                  { type: 'resources', effects: { standing: 1, exposure: 1, network: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
              {
                id: 'money',
                label: 'Give a share of the salary, every month, through the relief committees',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.politics', value: 'money' },
                  { type: 'resources', effects: { funds: -1, exposure: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1933-refugees' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'From 1933 Oppenheimer helped place dismissed European academics in American positions and began giving money to relief causes, and this period is when he began paying attention to politics. The choice dramatizes how openly he did it.',
      },
      {
        id: 'anywhere',
        conditions: [{ type: 'yearAtLeast', year: 1933 }],
        title: 'Names He Knows',
        image: {
          setting: 'a desk anywhere in the world with a stack of forwarded letters and a typed list of names',
          year: 1933,
          characters: ['oppenheimer'],
          mood: 'sober, obligated',
          details: ['forwarded envelopes', 'a typed list of names', 'a fountain pen uncapped', 'a chequebook', 'a lamp left on late'],
          alt: 'A desk with forwarded envelopes, a typed list of names, an uncapped pen and a chequebook.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'The list is typed and single-spaced and it has been forwarded twice before it reached him. Mathematicians, chemists, a man who once shared a stove with him in a cold seminar room. Dismissed, all of them, in the same month, by the same signature.',
          },
          {
            id: 'weight',
            narration:
              'He has spent his life until now believing that the work is the point and that the world is scenery. The list on the desk is not scenery. It is a bill, and it has his name in the address line.',
          },
          {
            id: 'decide',
            narration:
              'He can do something about perhaps four of these names. The question is not whether. The question is how loudly.',
            choices: [
              {
                id: 'quiet',
                label: 'Find them posts. Put nothing in writing that has his name on it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.politics', value: 'quiet' },
                  { type: 'resources', effects: { network: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                ],
              },
              {
                id: 'name',
                label: 'Put his name on the committee letterhead where it can be read',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.politics', value: 'name' },
                  { type: 'resources', effects: { standing: 1, exposure: 1, network: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
              {
                id: 'money',
                label: 'Give a share of the salary, every month, through the relief committees',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.politics', value: 'money' },
                  { type: 'resources', effects: { funds: -1, exposure: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1933-refugees' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Oppenheimer helped displaced European scientists find positions in the United States after 1933. The scene is dramatized; the unnamed colleagues stand for the many dismissed academics of those years.',
      },
    ],
  },
  {
    id: 'oppenheimer-perro-caliente',
    characterId: 'oppenheimer',
    chapterId: 'entry',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 56 },
    once: true,
    variants: [
      {
        id: 'ranch',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { type: 'narrativeFlag', flag: 'oppenheimer.desert' },
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 },
          { any: [{ type: 'locationIs', locationId: 'berkeley' }, { type: 'locationIs', locationId: 'pasadena' }] },
        ],
        title: 'Hot Dog',
        image: {
          setting: 'a small log cabin on a high mountain meadow at evening with two horses grazing',
          year: 1932,
          characters: ['oppenheimer'],
          mood: 'unguarded happiness',
          details: ['a log cabin', 'two grazing horses', 'a tin coffee pot on a fire ring', 'saddle blankets airing', 'aspens turning'],
          alt: 'A small log cabin on a high meadow at evening with two horses grazing nearby.',
        },
        pages: [
          {
            id: 'lease',
            narration:
              'Word comes that the cabin up in the high meadow can be leased, and he says the first thing that arrives in his mouth, which is Hot dog. The name sticks to the place for the rest of his life, in Spanish, because he thinks that is funnier.',
          },
          {
            id: 'ride',
            narration:
              'Up here he is a different animal: sunburnt, filthy, capable of riding all day and cooking badly over a fire ring. Students come out for a week and go home astonished that the man in the seminar room owns a saddle.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'My two great loves are physics and this country. It is a pity there is no way to make them into one thing.',
            narration: 'He says it at the fire, with a tin cup, and he will remember saying it, and one day it will turn out he was wrong.',
          },
        ],
        effects: [
          { type: 'resources', effects: { wellbeing: 2, health: 1 } },
          { type: 'flag', flag: 'oppenheimer.ranch', value: true },
        ],
        historicalNote:
          'Oppenheimer leased a cabin in the New Mexico high country which he called Perro Caliente, and often said he loved physics and desert country. The wording here is dramatized.',
      },
      {
        id: 'depleted',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
        ],
        title: 'The Weeks That Do Not Come',
        image: {
          setting: 'an office window with a curled photograph of mountain country pinned beside it',
          year: 1932,
          characters: ['oppenheimer'],
          mood: 'attenuated, overworked',
          details: ['a curled photograph of mountains', 'an overfull ashtray', 'unopened post', 'a clock at half past one', 'a coat never taken off'],
          alt: 'An office window with a curled photograph of mountain country pinned beside it and an overfull ashtray on the sill.',
        },
        pages: [
          {
            id: 'pinned',
            narration:
              'The photograph of the high meadow has been pinned beside the window for three years and has begun to curl at the corner. Every spring he tells three people he is going out in August. Every August there is a paper, or a committee, or a student in trouble.',
          },
          {
            id: 'cost',
            speaker: 'ROBERT',
            dialogue: 'Next year. The horses will still be there next year.',
            narration:
              'He is thinner than he was and he coughs in the mornings and he has stopped noticing either. The clock in the corridor says half past one and he has one more calculation in him.',
          },
        ],
        effects: [
          { type: 'resources', effects: { health: -1 } },
          { type: 'flag', flag: 'oppenheimer.ranch', value: false },
        ],
        historicalNote:
          'Oppenheimer was a heavy smoker who worked to exhaustion; the neglected New Mexico summers are a dramatized consequence of a harder-pressed life.',
      },
      {
        id: 'week',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { any: [{ type: 'locationIs', locationId: 'berkeley' }, { type: 'locationIs', locationId: 'pasadena' }] },
        ],
        title: 'A Week Off the Road',
        image: {
          setting: 'a borrowed cabin porch with a saddle over the rail and a book face-down',
          year: 1932,
          characters: ['oppenheimer'],
          mood: 'partial rest',
          details: ['a saddle over a porch rail', 'a book face-down', 'a kettle', 'dust on boots', 'long evening shadow'],
          alt: 'A porch with a saddle over the rail, a book face-down and dusty boots by the step.',
        },
        pages: [
          {
            id: 'week',
            narration:
              'He takes a week, which is not enough, on a borrowed horse, in country that does not care who he is. It is the only address at which he can be reached and not found.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'A man ought to have one place where nothing he has published counts for anything.',
            narration: 'He will go back down the mountain on the Sunday and be answering post by Tuesday, and the dust will stay on the boots for a month. On the Saturday evening he says the only thing he has said all week.',
          },
        ],
        effects: [
          { type: 'resources', effects: { wellbeing: 1 } },
          { type: 'flag', flag: 'oppenheimer.ranch', value: true },
        ],
      },
      {
        id: 'far',
        conditions: [{ type: 'yearAtLeast', year: 1930 }],
        title: 'A Country He Only Describes',
        image: {
          setting: 'a lamplit room in a city far from the American southwest, with a curled photograph propped against a book',
          year: 1932,
          characters: ['oppenheimer'],
          mood: 'homesickness for a place that is not home',
          details: ['a curled photograph propped against a book', 'a folded map', 'a glass of something untouched', 'rain on a window', 'a saddle blanket used as a cushion'],
          alt: 'A curled photograph of mountain country propped against a book in a lamplit room, rain on the window.',
        },
        pages: [
          {
            id: 'telling',
            narration:
              'He describes it at dinner tables: the thin air, the ranges going violet at eight in the evening, a horse that would not cross water. People assume he is exaggerating, because he exaggerates about most things, and this is the one subject on which he is being exact.',
          },
          {
            id: 'distance',
            speaker: 'ROBERT',
            dialogue: 'There is a meadow at eight thousand feet with nothing on it. I have not seen it in years. It is the only property I have ever wanted.',
            narration:
              'The photograph has begun to curl at one corner from being propped up and taken down. He is a long way from it, and the distance is not measured in miles so much as in the number of things he has agreed to do instead.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'oppenheimer.ranch', value: false },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Oppenheimer leased a cabin in the New Mexico high country in the early 1930s. This account follows a life spent too far from that country to take it up.',
      },
    ],
  },
  {
    id: 'oppenheimer-entry-closing',
    characterId: 'oppenheimer',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'school',
        conditions: [{ type: 'projectCompleted', projectId: 'oppenheimer-berkeley-school' }],
        title: 'A Corridor Full of His Own Sentences',
        image: {
          setting: 'a university corridor at evening with lit office doors along one side',
          year: 1936,
          characters: ['oppenheimer'],
          mood: 'quiet proprietorship',
          details: ['lit office doors', 'a chalk-dusted sleeve', 'a departmental noticeboard', 'a shaded corridor lamp', 'a cigarette burning down'],
          alt: 'A university corridor at evening with several lit office doors and a noticeboard on the wall.',
        },
        pages: [
          {
            id: 'doors',
            narration:
              'He walks the corridor at nine at night and every second door has a light behind it and an argument going on that he started. Nine years ago this coast had no theoretical physics on it at all.',
          },
          {
            id: 'shadow',
            narration:
              'There is a shadow on the decade and he can hear it in the seminar room now: the newspapers, the names on the relief lists, the word from Europe getting shorter and worse. Whatever comes next will want men like the ones behind these doors. He has just finished making them.',
          },
        ],
      },
      {
        id: 'public',
        conditions: [{ type: 'narrativeFlag', flag: 'oppenheimer.politics', value: 'name' }],
        title: 'A Name on Several Letterheads',
        image: {
          setting: 'a desk with committee stationery, a carbon copy and an unopened official envelope',
          year: 1936,
          characters: ['oppenheimer'],
          mood: 'exposed, unrepentant',
          details: ['committee stationery', 'a carbon copy', 'an unopened official envelope', 'a fountain pen', 'a lamp with a green shade'],
          alt: 'A desk with committee stationery, a carbon copy and an unopened official envelope beneath a green-shaded lamp.',
        },
        pages: [
          {
            id: 'letterheads',
            narration:
              'His name is on four letterheads now and he has stopped counting the meetings. The causes are decent and the company is mixed, and he has never in his life been careful about the company, because being careful is what dull men call judgement.',
          },
          {
            id: 'file',
            narration:
              'Somewhere a clerk is opening a folder with his name typed on the tab, and putting in the first sheet, and closing it again. He would find that funny if anyone told him. Nobody tells him for eighteen years.',
          },
        ],
        historicalNote:
          'Oppenheimer’s political associations and donations in the later 1930s were later used against him at the 1954 security hearing. The clerk and the folder are a dramatized image of a documented outcome.',
      },
      {
        id: 'default',
        title: 'Nine Years, and the Weather Changing',
        image: {
          setting: 'an office window at dusk with a newspaper open on the sill',
          year: 1936,
          characters: ['oppenheimer'],
          mood: 'unease at the edge of a decade',
          details: ['a newspaper open on the sill', 'a half-erased blackboard', 'a cold cup', 'a hat on the desk', 'lights coming on outside'],
          alt: 'An office window at dusk with an open newspaper on the sill and a half-erased blackboard behind.',
        },
        pages: [
          {
            id: 'weather',
            narration:
              'The newspaper on the sill is four days old and the news in it has not improved. He is thirty-two, established enough to be invited to things, and privately certain that he has not yet done the piece of work he will be measured against.',
          },
          {
            id: 'ahead',
            narration:
              'Something is coming down the decade towards all of them. He can feel it in the tone of the letters from abroad. He puts the paper in the bin, and turns back to the blackboard, and gets another two hours out of the night.',
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────── breakthrough
  {
    id: 'oppenheimer-breakthrough-opening',
    characterId: 'oppenheimer',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'berkeley',
        conditions: [{ type: 'locationIs', locationId: 'berkeley' }],
        title: 'Stars That Cannot Stop',
        locationLabel: 'Berkeley',
        image: {
          setting: 'a blackboard covered with equations of stellar structure, two students standing back from it',
          year: 1937,
          characters: ['oppenheimer'],
          mood: 'absorbed, faintly ominous',
          details: ['equations of stellar structure', 'a chalk ledge crowded with stubs', 'an open journal', 'a slide rule', 'evening light on the bay'],
          alt: 'A blackboard crowded with equations of stellar structure with a chalk ledge full of stubs beneath it.',
        },
        pages: [
          {
            id: 'question',
            narration:
              'The question on the blackboard is simple to state and nobody likes the answer. A star burns because it is holding itself up. What happens to a heavy one when the fuel is gone and there is nothing left to hold with?',
          },
          {
            id: 'students',
            narration:
              'Two graduate students take the pieces of it. He paces the length of the blackboard while they compute, smoking, saying his little humming noise, contributing nothing for forty minutes and then everything at once.',
          },
          {
            id: 'aloud',
            speaker: 'ROBERT',
            dialogue: 'Do not flinch at it. If the mathematics says the star goes on falling forever, then write down that the star goes on falling forever.',
            narration: 'Elsewhere in the world, in the same season, other people are learning what a nucleus does when it is struck. Neither piece of news has met the other yet.',
          },
        ],
        historicalNote:
          'Oppenheimer worked with graduate students on stellar structure and gravitational collapse in the late 1930s. The dialogue is dramatized wording.',
      },
      {
        id: 'default',
        title: 'The Late Thirties',
        image: {
          setting: 'a working desk with astrophysical tables, a folded newspaper and an ashtray',
          year: 1937,
          characters: ['oppenheimer'],
          mood: 'gathering pressure',
          details: ['astrophysical tables', 'a folded newspaper', 'an ashtray', 'a slide rule', 'a lamp burning at midday'],
          alt: 'A desk with astrophysical tables, a folded newspaper, an ashtray and a slide rule.',
        },
        pages: [
          {
            id: 'two-clocks',
            narration:
              'There are two clocks running in his head now and they keep different time. One is the work: the interiors of collapsing stars, the strangest problem he has ever been able to smell his way into. The other is the newspaper.',
          },
          {
            id: 'noise',
            narration:
              'He is thirty-two and famous in a small country of about four hundred people. He would like, once, to do something the other four hundred cannot argue with.',
          },
          {
            id: 'aloud',
            speaker: 'ROBERT',
            dialogue: 'Everything I have done so far could have been done by somebody else a year later. That is not the same as mattering.',
            narration: 'He says it to nobody and then is annoyed with himself for the theatre of it, and goes back to the tables.',
          },
        ],
      },
    ],
  },
  {
    id: 'oppenheimer-fission-news',
    characterId: 'oppenheimer',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 76 },
    once: true,
    variants: [
      {
        id: 'berkeley',
        conditions: [
          { type: 'yearAtLeast', year: 1939 },
          { type: 'locationIs', locationId: 'berkeley' },
        ],
        title: 'A Week in January',
        locationLabel: 'Berkeley',
        image: {
          setting: 'a blackboard with a rough sketch of a splitting nucleus and a crowd of coats at the door',
          year: 1939,
          characters: ['oppenheimer'],
          mood: 'excitement with a cold underside',
          details: ['a rough nuclear sketch in chalk', 'coats crowded at a doorway', 'a telegram on the desk', 'a cigarette not lit', 'winter rain on glass'],
          alt: 'A blackboard with a rough chalk sketch of a splitting nucleus, coats crowded in a doorway behind.',
        },
        pages: [
          {
            id: 'word',
            narration:
              'The word comes across the country in a week: the nucleus of uranium can be made to split, and when it splits it gives back more than it was asked for. The room fills up. Somebody says it cannot be right and somebody else has already checked.',
          },
          {
            id: 'chalk',
            narration:
              'Within days there is a drawing on his blackboard that is not a nucleus. It is a device. It is crude and wrong in three particulars and it is the first time anyone in the building has drawn one.',
          },
          {
            id: 'decide',
            narration:
              'The letters from the east coast start soon after: committees, quiet questions, a request for a name on a list. There is also a star on the other blackboard that is still falling, and it will not finish itself.',
            choices: [
              {
                id: 'paper',
                label: 'Finish the collapsing-star calculation first. The war has its own physicists',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.1939', value: 'paper' },
                  { type: 'theme', theme: 'workVsService', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'washington',
                label: 'Answer the letters. Whatever this is, he intends to be in the room',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.1939', value: 'washington' },
                  { type: 'theme', theme: 'workVsService', amount: 2 },
                  { type: 'resources', effects: { network: 1, exposure: 1 } },
                ],
              },
              {
                id: 'both',
                label: 'Do both, badly, and sleep four hours',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.1939', value: 'both' },
                  { type: 'resources', effects: { health: -1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'News of nuclear fission reached American physicists in early 1939, and Oppenheimer sketched a possible device on his blackboard within days. The choice dramatizes how he divided the years that followed.',
      },
      {
        id: 'anywhere',
        conditions: [{ type: 'yearAtLeast', year: 1939 }],
        title: 'News That Changes the Arithmetic',
        image: {
          setting: 'a desk with a journal open at a short paper and an unlit cigarette',
          year: 1939,
          characters: ['oppenheimer'],
          mood: 'cold recognition',
          details: ['a journal open at a short paper', 'an unlit cigarette', 'a scribbled estimate on an envelope', 'a wall calendar', 'rain at the window'],
          alt: 'A journal open at a short paper on a desk beside an unlit cigarette and an envelope covered in figures.',
        },
        pages: [
          {
            id: 'paper',
            narration:
              'The paper is two pages long and he reads it three times. A nucleus splits and hands back neutrons, and neutrons split more nuclei, and the sentence at the end of that thought is not written anywhere in the journal because it does not need to be.',
          },
          {
            id: 'envelope',
            narration:
              'He does the estimate on the back of an envelope in about eleven minutes. The number is not comforting. He puts the envelope in his breast pocket and does not throw it away for years.',
          },
          {
            id: 'decide',
            narration:
              'Letters will come, or they will not. The pages on the desk go on waiting, patient as furniture. What he does with the next five years is being decided in this month, and nobody is going to tell him that it has been.',
            choices: [
              {
                id: 'paper',
                label: 'Finish the work on the desk. The war has its own physicists',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.1939', value: 'paper' },
                  { type: 'theme', theme: 'workVsService', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'washington',
                label: 'Write east, and make it known he is available',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.1939', value: 'washington' },
                  { type: 'theme', theme: 'workVsService', amount: 2 },
                  { type: 'resources', effects: { network: 1, exposure: 1 } },
                ],
              },
              {
                id: 'both',
                label: 'Do both, badly, and sleep four hours',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.1939', value: 'both' },
                  { type: 'resources', effects: { health: -1, network: 1 } },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'oppenheimer-collapse-breakthrough',
    characterId: 'oppenheimer',
    chapterId: 'breakthrough',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'oppenheimer-gravitational-collapse', priority: 88 },
    once: true,
    variants: [
      {
        id: 'berkeley',
        conditions: [{ type: 'locationIs', locationId: 'berkeley' }],
        title: 'The Star Closes the Door',
        locationLabel: 'Berkeley',
        image: {
          setting: 'a blackboard at night showing a collapse solution, one lamp lit, a proof sheet on the desk',
          year: 1939,
          characters: ['oppenheimer'],
          mood: 'awe under a plain ceiling',
          details: ['a collapse solution in chalk', 'a single desk lamp', 'a proof sheet', 'a folded newspaper with a black headline', 'an open window'],
          alt: 'A night-time blackboard covered with a collapse calculation beside a single lit desk lamp and a proof sheet.',
        },
        pages: [
          {
            id: 'result',
            narration:
              'The calculation ends and nobody says anything for a moment. Above a certain mass there is nothing that can hold the star up. It does not settle, it does not explode into stability. It keeps going, and the light it sends out gets slower and redder, and then there is no more light.',
          },
          {
            id: 'meaning',
            narration:
              'The object does not go anywhere. It stays exactly where it was and closes itself off from everything outside, and the outside can only ever know its weight. He finds he has been holding the chalk hard enough to break it.',
          },
          {
            id: 'date',
            speaker: 'ROBERT',
            dialogue: 'They will not read this for thirty years. That is all right. It will still be true in thirty years.',
            narration:
              'The paper is finished and sent, and it will appear on the first day of September, 1939, in the same week the armies move in Europe, and almost nobody will notice it. He is going to be right about the thirty years, very nearly to the month.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2 } },
          { type: 'flag', flag: 'oppenheimer.collapse', value: true },
          { type: 'theme', theme: 'workVsService', amount: -1 },
        ],
        historicalNote:
          'Oppenheimer, with Volkoff and Snyder, published work on neutron-star mass limits and continued gravitational collapse; the collapse paper appeared on 1 September 1939 and was largely overlooked for decades. The dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        title: 'A Result Nobody Comes to See',
        image: {
          setting: 'a plain room with a finished calculation pinned to the wall and no visitors',
          year: 1939,
          characters: ['oppenheimer'],
          mood: 'solitary awe',
          details: ['a finished calculation pinned to a wall', 'an empty second chair', 'an unposted manuscript', 'a wireless set switched off', 'late light'],
          alt: 'A finished calculation pinned to a plain wall beside an empty chair and an unposted manuscript.',
        },
        pages: [
          {
            id: 'alone',
            narration:
              'He gets to the end of it alone, in a room with one chair too many. Past a certain weight the star cannot hold itself up and does not stop falling, and closes itself away from the rest of creation, and there is nobody in the doorway to tell.',
          },
          {
            id: 'unposted',
            speaker: 'ROBERT',
            dialogue: 'The world is about to be extremely busy. This will keep.',
            narration:
              'He weighs the manuscript in one hand and looks at the wireless in the corner. It will go into the drawer for a season, and then another, and the war will take the season after that, and by the time anyone reads it he will be a different sort of man entirely.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1 } },
          { type: 'flag', flag: 'oppenheimer.collapse', value: true },
        ],
        historicalNote:
          'The collapse work was done with graduate students at Berkeley and published in 1939. A version reached in isolation and left unpublished is a dramatized departure.',
      },
    ],
  },
  {
    id: 'oppenheimer-breakthrough-closing',
    characterId: 'oppenheimer',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'collapse',
        conditions: [{ type: 'projectCompleted', projectId: 'oppenheimer-gravitational-collapse' }],
        title: 'Two Kinds of Weight',
        image: {
          setting: 'a desk with an offprint on collapse beside a sealed government envelope',
          year: 1942,
          characters: ['oppenheimer'],
          mood: 'the pivot of a life',
          details: ['an offprint', 'a sealed official envelope', 'a blackout curtain half drawn', 'a telephone', 'a hat and coat ready'],
          alt: 'A desk holding a scientific offprint beside a sealed official envelope, a coat ready on the chair.',
        },
        pages: [
          {
            id: 'two',
            narration:
              'On one side of the desk is the offprint: a star, folded shut, that will interest perhaps eleven people this decade. On the other is an envelope with a government frank on it that has been sitting there unopened for two days.',
          },
          {
            id: 'choice',
            narration:
              'He is thirty-eight. He has just done the finest piece of pure physics of his life and he already knows, with a clarity that will never quite leave him, that it is not the thing he is going to be remembered for. He opens the envelope.',
          },
        ],
      },
      {
        id: 'default',
        title: 'The Decade Closes Its Hand',
        image: {
          setting: 'an emptying department corridor with a noticeboard of leave-of-absence notes',
          year: 1942,
          characters: ['oppenheimer'],
          mood: 'depopulation, urgency',
          details: ['leave-of-absence notes pinned to a noticeboard', 'an emptying corridor', 'stacked chairs', 'a blackout curtain', 'a single lit office'],
          alt: 'An emptying university corridor with leave-of-absence notes pinned to a noticeboard.',
        },
        pages: [
          {
            id: 'empty',
            narration:
              'The corridor empties one door at a time. The notes on the noticeboard all say the same thing in different handwriting: leave of absence, address to be advised. Half of the best young theorists he knows have gone somewhere they are not permitted to name.',
          },
          {
            id: 'summons',
            narration:
              'The telephone rings in an office where the blackboard has not been wiped in a month, and it will not be wiped now. There is a train, and a room in a building with a guard on the door, and a question he is going to be asked in it.',
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────── crisis
  {
    id: 'oppenheimer-crisis-opening',
    characterId: 'oppenheimer',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'already-in',
        conditions: [{ type: 'narrativeFlag', flag: 'oppenheimer.1939', value: 'washington' }],
        title: 'The Room He Asked to Be In',
        image: {
          setting: 'a summer study room with a long table, shuttered windows and a guard chair by the door',
          year: 1942,
          characters: ['oppenheimer'],
          mood: 'contained urgency',
          details: ['a long table', 'shuttered windows', 'a chair by the door', 'chalk figures half erased', 'a jug of water and glasses'],
          alt: 'A long table in a shuttered study room with half-erased chalk figures on the blackboard behind.',
        },
        pages: [
          {
            id: 'summer',
            narration:
              'He has been answering the letters for three years and the answering has brought him here: a locked room in the summer heat, a handful of the best men in the country, and a problem that has stopped being a curiosity.',
          },
          {
            id: 'numbers',
            narration:
              'They work out how much material, how fast, how heavy. The numbers keep coming out plausible, and each time they do the room gets quieter. Somebody raises the possibility that the reaction might not stop, and they spend a day proving it will, and nobody sleeps well that night.',
          },
          {
            id: 'seat',
            speaker: 'A COLLEAGUE',
            dialogue: 'Somebody is going to have to run the laboratory that builds it, Robert. You have never run anything larger than a seminar.',
            narration: 'One of the older men says it across the table, in shirtsleeves, meaning it entirely as an argument against.',
          },
          {
            id: 'decide',
            narration: 'He takes that, silently, as a description of a vacancy. It will be filled by someone. There is a way to make sure it is filled by him, and a way to make sure it is not.',
            choices: [
              {
                id: 'seek',
                label: 'Let it be known, in the right rooms, that he wants the laboratory',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.direction', value: 'seek' },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
              {
                id: 'wait',
                label: 'Say nothing, be indispensable, and let them arrive at it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.direction', value: 'wait' },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
              {
                id: 'refuse',
                label: 'Tell them plainly that a theorist has no business running an army post',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.direction', value: 'refuse' },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -2 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A 1942 summer study of the bomb problem preceded the founding of the weapons laboratory. The colleague is unnamed and the dialogue dramatized.',
      },
      {
        id: 'default',
        title: 'The Summer Study',
        image: {
          setting: 'a shuttered room in high summer with a long table and a blackboard of estimates',
          year: 1942,
          characters: ['oppenheimer'],
          mood: 'heat, secrecy, arithmetic',
          details: ['a shuttered window', 'a blackboard of estimates', 'shirtsleeves', 'a jug of water', 'a locked cabinet'],
          alt: 'A shuttered summer room with a long table and a blackboard covered in estimates.',
        },
        pages: [
          {
            id: 'called',
            narration:
              'The invitation is vague to the point of rudeness and he accepts it the same day. The room turns out to be shuttered, hot, and full of men he has published against. Nobody explains anything. Within an hour nobody needs to.',
          },
          {
            id: 'work',
            narration:
              'They are calculating how much of a certain metal it takes, and how quickly it must be brought together, and what happens to a city underneath. He finds — and this is the part he will turn over for the rest of his life — that he is happy. The problem is beautiful and he is good at it.',
          },
          {
            id: 'seat',
            speaker: 'A COLLEAGUE',
            dialogue: 'Somebody will have to run the laboratory that builds it. You have never run anything larger than a seminar.',
            narration: 'One of the older men says it across the table, in shirtsleeves, meaning it entirely as an argument against.',
          },
          {
            id: 'decide',
            narration: 'He takes that, silently, as a description of a vacancy. It will be filled by someone. There is a way to make sure it is filled by him, and a way to make sure it is not.',
            choices: [
              {
                id: 'seek',
                label: 'Let it be known, in the right rooms, that he wants the laboratory',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.direction', value: 'seek' },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
              {
                id: 'wait',
                label: 'Say nothing, be indispensable, and let them arrive at it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.direction', value: 'wait' },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
              {
                id: 'refuse',
                label: 'Tell them plainly that a theorist has no business running an army post',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.direction', value: 'refuse' },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -2 },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The 1942 summer study of the bomb problem is documented; the unnamed colleague and the dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'oppenheimer-groves-appointment',
    characterId: 'oppenheimer',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'oppenheimer-card-1942-recruited',
    trigger: { event: 'afterAction', priority: 95 },
    once: true,
    variants: [
      {
        id: 'sought',
        conditions: [
          { type: 'yearAtLeast', year: 1942 },
          { type: 'yearAtMost', year: 1944 },
          { type: 'narrativeFlag', flag: 'oppenheimer.direction', value: 'seek' },
          { any: [{ type: 'locationIs', locationId: 'losAlamos' }, { type: 'visitedLocation', locationId: 'losAlamos' }] },
        ],
        title: 'The Man Nobody Would Have Picked',
        image: {
          setting: 'a railway carriage compartment with two facing seats and a briefcase between them',
          year: 1943,
          characters: ['oppenheimer'],
          mood: 'appraisal at close quarters',
          details: ['two facing seats', 'a locked briefcase', 'a soft hat on the rack', 'a window of moving farmland', 'two untouched cups'],
          alt: 'Two facing seats in a railway compartment with a locked briefcase and a soft hat on the rack.',
        },
        pages: [
          {
            id: 'compartment',
            narration:
              'They talk it out in a railway compartment because that is where the general can get an hour without a telephone. He has made himself unavoidable, and now he has to survive being examined by a man who does not care in the least how many languages he reads.',
          },
          {
            id: 'objections',
            narration:
              'The objections are written down somewhere and they are all correct. No prize. No laboratory of his own. Friends and a wife and a brother with the wrong sort of history. Not one man on the committee wants him.',
          },
          {
            id: 'groves',
            speaker: 'GROVES',
            dialogue: 'Everyone tells me you are a dilettante with poor associations. Everyone also tells me you are the only man who can hold the whole problem in one head. I am going to bet on the second thing.',
            narration:
              'The general reads the file to the end, closes it, and watches the farmland go past for a while. Then he says the thing that decides the next three years.',
          },
          {
            id: 'signed',
            narration:
              'The clearance is signed over the objections of people whose entire profession is objecting. They will remember. He will find out exactly how well, eleven years from now.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1942-recruited' },
          { type: 'flag', flag: 'oppenheimer.appointed', value: true },
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
        ],
        historicalNote:
          'General Leslie Groves selected Oppenheimer to direct the weapons laboratory despite objections about his associations and his lack of a prize or large-laboratory experience. The dialogue is dramatized wording.',
      },
      {
        id: 'refused',
        conditions: [
          { type: 'yearAtLeast', year: 1942 },
          { type: 'yearAtMost', year: 1944 },
          { type: 'narrativeFlag', flag: 'oppenheimer.direction', value: 'refuse' },
        ],
        title: 'They Ask Anyway',
        image: {
          setting: 'a plain office with an official visitor’s hat on the desk and a declined letter half written',
          year: 1943,
          characters: ['oppenheimer'],
          mood: 'pressure applied politely',
          details: ['an official cap on a desk', 'a half-written letter', 'a folded map', 'a car waiting outside', 'a shut door'],
          alt: 'A plain office desk holding an official cap, a half-written letter and a folded map.',
        },
        pages: [
          {
            id: 'visit',
            narration:
              'He has said no, in writing, in terms he thought were unmistakable. The general comes in person anyway, sits down without being asked, and puts his cap on the desk like a man who intends to stay for a while.',
          },
          {
            id: 'groves',
            speaker: 'GROVES',
            dialogue: 'Every man on my list has a laboratory of his own and would run this one badly. You have nothing to protect. That is precisely why I am here.',
            narration:
              'The objections in the file are all correct and the general has read them and has come anyway. Outside, the car does not switch off its engine.',
          },
          {
            id: 'after',
            narration:
              'He says no a second time, to a man who does not appear to have heard the first. The offer has been made in front of witnesses now, and the file with his name on the tab has acquired several new sheets, and the laboratory will open in the spring under somebody else.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1942-recruited' },
          { type: 'flag', flag: 'oppenheimer.appointed', value: false },
          { type: 'resources', effects: { standing: 1, exposure: 1 } },
        ],
        historicalNote:
          'Groves’ decision to appoint Oppenheimer over the objections of security staff is documented. A version in which Oppenheimer initially declined is dramatized.',
      },
      {
        id: 'taken',
        conditions: [
          { type: 'yearAtLeast', year: 1942 },
          { any: [{ type: 'locationIs', locationId: 'losAlamos' }, { type: 'visitedLocation', locationId: 'losAlamos' }] },
        ],
        title: 'Recruited',
        image: {
          setting: 'a desk with an unsigned appointment letter, a security questionnaire and a fountain pen',
          year: 1943,
          characters: ['oppenheimer'],
          mood: 'a door opening onto a corridor',
          details: ['an unsigned appointment letter', 'a security questionnaire', 'a fountain pen uncapped', 'a folded map of high country', 'a blank pass'],
          alt: 'An unsigned appointment letter and a security questionnaire on a desk beside an uncapped pen.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter offers him a laboratory that does not exist yet, in a place it does not name, for a purpose it will not put in writing. Attached to it is a questionnaire asking who he has known since 1930 and what they believed.',
          },
          {
            id: 'objections',
            narration:
              'By every reasonable measure he is the wrong choice: no prize, no experience of running anything with a payroll, and a decade of the wrong committee letterheads behind him. The general who wants him has read all of that and wants him anyway.',
          },
          {
            id: 'groves',
            speaker: 'GROVES',
            dialogue: 'I am told you cannot manage a stockroom. I am also told you can keep the entire problem in your head at once. I only need one of those to be true.',
            narration:
              'Outside the window a car waits with its engine running. The general puts a pen down on the blotter, sits on the corner of the desk without taking off his cap, and says it.',
          },
          {
            id: 'signs',
            narration:
              'He signs. The pen is the general’s. Somewhere a folder gets thicker, and the mesa he once rode across as a boy is being measured for a fence.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1942-recruited' },
          { type: 'flag', flag: 'oppenheimer.appointed', value: true },
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
        ],
        historicalNote:
          'Oppenheimer was appointed to direct the weapons laboratory in 1942–43 despite security objections, and he suggested the New Mexico mesa where it was built. The dialogue is dramatized wording.',
      },
      {
        id: 'unreached',
        conditions: [{ type: 'yearAtLeast', year: 1942 }],
        title: 'The Bet That Is Never Collected',
        image: {
          setting: 'a railway compartment with two facing seats, a locked briefcase and a folded map left behind on one of them',
          year: 1943,
          characters: ['oppenheimer'],
          mood: 'an offer that outruns the man',
          details: ['two facing seats', 'a locked briefcase', 'a folded map of high country', 'an unsigned form', 'farmland going past'],
          alt: 'A railway compartment with facing seats, a locked briefcase and a folded map of high country.',
        },
        pages: [
          {
            id: 'compartment',
            narration:
              'They talk it out in a railway compartment, because that is where the general can get an hour without a telephone. The map that comes out of the briefcase is of country he has ridden across, and he can name the ridge on it before he is asked.',
          },
          {
            id: 'objections',
            narration:
              'The objections are written down somewhere and they are all correct. No prize. No laboratory of his own. Friends and a wife and a brother with the wrong sort of history. Not one man on the committee wants him.',
          },
          {
            id: 'groves',
            speaker: 'GROVES',
            dialogue: 'Everyone tells me you are a dilettante with poor associations. Everyone also tells me you are the only man who can hold the whole problem in one head. I am going to bet on the second thing.',
            narration:
              'The general reads the file to the end, closes it, and watches the farmland go past for a while. Then he says the thing that is supposed to decide the next three years.',
          },
          {
            id: 'not-taken',
            narration:
              'It does not decide them. The form goes back into the briefcase unsigned; the site is surveyed and fenced and staffed on a schedule that will not wait for one man to settle his affairs, and by the spring the mesa has a director and it is not him.',
          },
          {
            id: 'after',
            speaker: 'ROBERT',
            dialogue: 'He was right about me and he was late by about four months. I would rather he had been wrong.',
            narration:
              'He hears the second-hand version afterwards, the way one hears about a house one nearly bought. The work goes on nine hundred miles away and he is not told what any of it is for.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1942-recruited' },
          { type: 'flag', flag: 'oppenheimer.appointed', value: false },
          { type: 'resources', effects: { standing: 1, exposure: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Groves did select Oppenheimer to direct the weapons laboratory over the objections of security staff, and Oppenheimer did take up the post at Los Alamos. This account follows a life in which the appointment was offered and never taken up.',
      },
    ],
  },
  {
    id: 'oppenheimer-wartime-work',
    characterId: 'oppenheimer',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 84 },
    once: true,
    variants: [
      {
        id: 'on-the-mesa',
        conditions: [
          { type: 'yearAtLeast', year: 1943 },
          { type: 'locationIs', locationId: 'losAlamos' },
        ],
        title: 'Badge Number Six',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a muddy road between new wooden buildings with a queue at a gate and a water tower behind',
          year: 1943,
          characters: ['oppenheimer'],
          mood: 'improvised town, enormous purpose',
          details: ['duckboards over mud', 'a water tower', 'a queue at a gate hut', 'crates stencilled and stacked', 'washing on a line between huts'],
          alt: 'A muddy road between new wooden buildings, duckboards laid over the mud and a water tower behind.',
        },
        pages: [
          {
            id: 'town',
            narration:
              'It is not a laboratory, it is a town that has been dropped on a mesa and told to hurry: duckboards over mud, one telephone line, a water supply that fails on Tuesdays, and eleven hundred people who are not allowed to tell their families where they live.',
          },
          {
            id: 'walking',
            narration:
              'He walks it twice a day, hat on, coat open, and stops at benches. He asks the question that is one half-step past what the man at the bench has already worked out, and then he waits, exactly as he did in a corridor in California.',
          },
          {
            id: 'line',
            speaker: 'A YOUNG PHYSICIST',
            dialogue: 'He came past my desk at eleven at night and asked one question and left. I have been answering it for nine days.',
            narration:
              'They are twenty-six, most of them, and the best in the country, and they have been given a problem with a date on it. The town runs on that and on very bad coffee, and it runs.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'oppenheimer.mesaLife', value: true },
          { type: 'resources', effects: { network: 2, health: -1 } },
        ],
        historicalNote:
          'The wartime laboratory was a closed community built at speed on a New Mexico mesa, with severe shortages and a very young scientific staff. The dialogue is dramatized wording and the young physicist is unnamed.',
      },
      {
        id: 'the-war-elsewhere',
        conditions: [{ type: 'yearAtLeast', year: 1943 }],
        title: 'A Department at Half Strength',
        image: {
          setting: 'a university corridor in wartime with half the office doors dark and a war-work notice pinned up',
          year: 1943,
          characters: ['oppenheimer'],
          mood: 'useful work with the interesting part removed',
          details: ['dark office doors', 'a war-work notice', 'a blackout blind', 'a stack of unmarked calculations', 'a rack of coats too small for the department'],
          alt: 'A wartime university corridor with half the office doors dark and a notice pinned to a board.',
        },
        pages: [
          {
            id: 'thinned',
            narration:
              'The department is at half strength and the half that is left teaches everything. He takes the electrodynamics and the mechanics and, on Thursdays, a class of navy men who need to be able to do a certain kind of arithmetic by June.',
          },
          {
            id: 'sealed',
            narration:
              'Sealed work comes through too: pages of a problem with the middle taken out, sent by people who will not say what the answer is for. He solves them, correctly and quickly, and posts them back into the silence.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'I can tell you what these numbers are. I cannot tell you what they are about, because nobody has been rude enough to let me guess out loud.',
            narration:
              'He says it to the one colleague left who is old enough to find it funny. The blackout blind is down at four in the afternoon and the corridor outside is entirely dark.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'oppenheimer.mesaLife', value: false },
          { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'American physics departments were stripped of staff and students by war work between 1942 and 1945, and compartmentalized calculations were routinely farmed out. The scene is a dramatized composite.',
      },
    ],
  },
  {
    id: 'oppenheimer-encounter-vonneumann',
    characterId: 'oppenheimer',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds: ['oppenheimer', 'vonneumann'],
    trigger: { event: 'afterAction', priority: 74 },
    once: true,
    variants: [
      {
        id: 'human-vonneumann-here',
        conditions: [
          { type: 'yearAtLeast', year: 1943 },
          { type: 'locationIs', locationId: 'losAlamos' },
          { type: 'otherCharacterIsHuman', characterId: 'vonneumann' },
          { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'losAlamos', yearTolerance: 2 },
        ],
        title: 'The Consultant Arrives',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a mesa laboratory office with lens geometry chalked on a blackboard and two chairs pulled up',
          year: 1944,
          characters: ['oppenheimer', 'vonneumann'],
          mood: 'rapid, delighted, ruthless',
          details: ['lens geometry in chalk', 'two chairs at a blackboard', 'a stack of computed sheets', 'a pot of cold coffee', 'a window of pine and dust'],
          alt: 'A laboratory office with geometric lens diagrams on a blackboard and two chairs drawn up to it.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'The car comes up the switchbacks in the afternoon and the man who gets out of it has been thinking about the problem the entire way from the railhead. Within twenty minutes there is chalk on his sleeve and a queue outside the door.',
          },
          {
            id: 'lenses',
            speaker: 'VON NEUMANN',
            dialogue: 'You do not need a cleverer idea. You need a stupider idea, computed properly, by more people than you think you can spare.',
            narration:
              'They go at the blackboard together for four hours, and at the end of it the visitor puts the chalk down and says the thing nobody in the laboratory has been willing to say out loud.',
          },
          {
            id: 'after',
            narration:
              'The elegant approach is abandoned that week and the brutal one taken up instead, with its shaped charges and its mountains of arithmetic. He walks the visitor back to the car at midnight and stands in the road afterwards, smoking, adding up what he has been handed and what it is going to cost in people.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'vonneumann', familiarity: 2, respect: 2, flag: 'implosion-1944' },
          { type: 'flag', flag: 'oppenheimer.implosion', value: true },
        ],
        historicalNote:
          'Von Neumann consulted at Los Alamos on implosion-lens computation. The dialogue is dramatized wording.',
      },
      {
        id: 'npc-vonneumann-here',
        conditions: [
          { type: 'yearAtLeast', year: 1943 },
          { type: 'locationIs', locationId: 'losAlamos' },
          { type: 'otherCharacterIsNpc', characterId: 'vonneumann' },
        ],
        title: 'Arithmetic on an Industrial Scale',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a computing room of desk machines and punched cards in a wartime laboratory',
          year: 1944,
          characters: ['oppenheimer', 'vonneumann'],
          mood: 'grinding, exhilarating labour',
          details: ['rows of desk calculating machines', 'punched cards in trays', 'lens geometry pinned to a wall', 'a wall clock', 'dust on the sills'],
          alt: 'A wartime computing room with rows of desk calculating machines and trays of punched cards.',
        },
        pages: [
          {
            id: 'summoned',
            narration:
              'He asks for the Hungarian and gets him, because at this point in the war he can ask for almost anyone. The visitor looks at the implosion problem for one evening and pronounces it not impossible, merely enormous.',
          },
          {
            id: 'machines',
            speaker: 'VON NEUMANN',
            dialogue: 'This is not a physics problem any more. It is an accounting problem with a very short deadline. Give me machines and people who can be trained in a fortnight.',
            narration:
              'He asks what it will take. The answer comes back without a pause and without any interest in whether it is welcome, and the card machines it implies will be coming up the mountain in crates within the month.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'vonneumann', familiarity: 2, respect: 2, flag: 'implosion-1944' },
          { type: 'flag', flag: 'oppenheimer.implosion', value: true },
        ],
        historicalNote:
          'Von Neumann’s consultation on implosion-lens computation and the use of punched-card machines at Los Alamos are documented. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'oppenheimer-encounter-bohr',
    characterId: 'oppenheimer',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['oppenheimer', 'bohrManhattan'],
    trigger: { event: 'afterAction', priority: 78 },
    once: true,
    variants: [
      {
        id: 'human-bohr-here',
        conditions: [
          { type: 'yearAtLeast', year: 1943 },
          { type: 'locationIs', locationId: 'losAlamos' },
          { type: 'otherCharacterIsHuman', characterId: 'bohr' },
          { type: 'otherCharacterAt', characterId: 'bohr', locationId: 'losAlamos', yearTolerance: 2 },
        ],
        title: 'The Old Man on the Mesa',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a plain wooden laboratory office with two men’s coats on hooks and a window on pine forest',
          year: 1944,
          characters: ['oppenheimer', 'bohr'],
          mood: 'reverence with a cold question underneath',
          details: ['two coats on hooks', 'a stove', 'a window on pines', 'a pipe left on a saucer', 'papers weighted with a stone'],
          alt: 'A plain wooden office with two coats on hooks, a stove and a window looking onto pine forest.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'He has come a long way and by an unlikely road, and he arrives under a name that is not his with an escort that will not leave him alone. The whole laboratory finds a reason to walk past the window.',
          },
          {
            id: 'question',
            speaker: 'BOHR',
            dialogue: 'Is it big enough? Not for the war. For afterwards. Is it big enough to make the next one impossible?',
            narration:
              'He asks it mildly, almost inaudibly, halfway through a sentence about something else, in the manner of a man thinking aloud and forgetting there is anyone present.',
          },
          {
            id: 'after',
            narration:
              'The question reorganises everything in the room that hears it. They walk the perimeter road until it is dark. Nothing about the schedule changes; something about the purpose does, at least in one head, and that head is the one that runs the place.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'bohr', familiarity: 2, respect: 3, flag: 'mesa-1944' },
          { type: 'flag', flag: 'oppenheimer.bohrQuestion', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Bohr, having escaped occupied Denmark, visited Los Alamos and pressed the question of what the weapon would mean after the war. The wording of his question here is dramatized from the sense of remarks reported by those present.',
      },
      {
        id: 'npc-bohr-here',
        conditions: [
          { type: 'yearAtLeast', year: 1943 },
          { type: 'locationIs', locationId: 'losAlamos' },
          { type: 'otherCharacterIsNpc', characterId: 'bohr' },
        ],
        title: 'Is It Big Enough',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a perimeter road at dusk between wooden buildings and a wire fence',
          year: 1944,
          characters: ['oppenheimer', 'bohr'],
          mood: 'quiet gravity at day’s end',
          details: ['a wire fence', 'wooden buildings', 'dust on boots', 'a hat held in one hand', 'a long dusk over pine ridges'],
          alt: 'A dusk road between plain wooden buildings alongside a wire fence, ridges beyond.',
        },
        pages: [
          {
            id: 'escape',
            narration:
              'He got out of an occupied country by fishing boat and out of the next one by aeroplane, and now he is here on a mesa in a borrowed coat, older than everybody, and the young men treat him like weather.',
          },
          {
            id: 'question',
            speaker: 'BOHR',
            dialogue: 'Is it big enough? Not for this war. For the one after. It must be big enough that no one can pretend it is only a bigger shell.',
            narration:
              'He says it half to himself, walking, hands behind his back. It is the only question anybody asks on the mesa that cannot be answered with a calculation.',
          },
          {
            id: 'answer',
            speaker: 'ROBERT',
            dialogue: 'It will be big enough. Whether anyone will look at it honestly afterwards is not a matter of physics.',
            narration: 'They walk to the end of the fence line and back before he answers, and when he does he keeps his eyes on the ridge rather than on the old man.',
          },
          {
            id: 'after',
            narration:
              'He will think about that exchange for the next twenty years, generally at four in the morning, generally alone. It is the only question anybody asks on the mesa that cannot be answered with a number.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'bohr', familiarity: 2, respect: 3, flag: 'mesa-1944' },
          { type: 'flag', flag: 'oppenheimer.bohrQuestion', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Bohr visited the wartime laboratory after escaping occupied Denmark and argued that the weapon’s significance lay in what came after the war. The dialogue is dramatized.',
      },
      {
        id: 'absent',
        conditions: [{ type: 'yearAtLeast', year: 1943 }],
        title: 'A Letter From a Neutral Country',
        image: {
          setting: 'a plain office with a much-forwarded letter and a wall map with pins',
          year: 1944,
          characters: ['oppenheimer'],
          mood: 'longing for a wiser voice',
          details: ['a much-forwarded envelope', 'a wall map with pins', 'a shaded lamp', 'a locked filing drawer', 'an empty visitor chair'],
          alt: 'A much-forwarded letter on a plain office desk beneath a wall map stuck with pins.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter has been opened twice by other people before it reaches him, and it says almost nothing, in the courteous way of a man who knows his post is read. He would give a year of his life for one afternoon of that voice in the same room as this work.',
          },
          {
            id: 'absence',
            speaker: 'ROBERT',
            dialogue: 'There is nobody here old enough to ask the right question. We are all forty and we are all certain.',
            narration:
              'He puts the letter in the locked drawer with the others, turns the key, and goes back down the corridor to the meeting he is already late for, and says it on the way, to nobody.',
          },
        ],
        effects: [{ type: 'flag', flag: 'oppenheimer.bohrQuestion', value: false }],
        historicalNote:
          'Bohr’s wartime visit to the laboratory is documented. A life in which that visit never happens is a dramatized departure.',
      },
    ],
  },
  {
    id: 'oppenheimer-los-alamos-breakthrough',
    characterId: 'oppenheimer',
    chapterId: 'crisis',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'oppenheimer-los-alamos-direction', priority: 92 },
    once: true,
    variants: [
      {
        id: 'losAlamos',
        conditions: [{ type: 'locationIs', locationId: 'losAlamos' }],
        title: 'An Instrument Made of People',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a crowded wooden colloquium hall with benches, a blackboard and a badge on every lapel',
          year: 1945,
          characters: ['oppenheimer'],
          mood: 'exhausted command',
          details: ['plank benches', 'a badge on every lapel', 'a blackboard of divisions', 'a stove pipe', 'mud tracked in on boots'],
          alt: 'A crowded wooden hall with plank benches facing a blackboard, badges on every lapel.',
        },
        pages: [
          {
            id: 'colloquium',
            narration:
              'The Army wanted every man to know only his own corner. He fought that for a year and won: once a week the whole laboratory sits on plank benches and is told what everybody else is doing. It is the single decision that makes the place work.',
          },
          {
            id: 'weight',
            narration:
              'He is down to a weight that alarms people who have not seen him since spring. He knows every division, every schedule, every quarrel, and roughly two thousand names. He sleeps four hours and smokes the rest.',
          },
          {
            id: 'bethe',
            speaker: 'BETHE',
            dialogue: 'You have never built anything in your life, Robert. But you know what every one of us is doing, and not one of us knows that. It turns out that is the job.',
            narration:
              'Bethe finds him at two in the morning in the corridor outside the theoretical division, holding a schedule he has already memorised and has no reason to be carrying.',
          },
          {
            id: 'spring',
            narration:
              'The thing goes together in the spring: shaped charges computed to death, and a sphere of metal that must be squeezed perfectly or not at all. The schedule holds. Nobody on the mesa can quite believe the schedule holds.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 3, exposure: 2, health: -1, wellbeing: -1 } },
          { type: 'flag', flag: 'oppenheimer.built', value: true },
        ],
        historicalNote:
          'Oppenheimer insisted on a weekly colloquium against Army compartmentalization, lost a great deal of weight during the war, and Hans Bethe led the Theoretical Division under him. The dialogue is dramatized wording.',
      },
      {
        id: 'elsewhere',
        title: 'Directing From a Distance',
        image: {
          setting: 'an office of telephones, cables and schedules far from the site being managed',
          year: 1945,
          characters: ['oppenheimer'],
          mood: 'command at one remove',
          details: ['three telephones', 'a cable tray of decrypted schedules', 'a wall chart of divisions', 'a car waiting below', 'an untouched sandwich'],
          alt: 'An office with several telephones, a wall chart of divisions and a tray of cabled schedules.',
        },
        pages: [
          {
            id: 'wires',
            narration:
              'He runs it down a wire, which is not how it was meant to be run. The schedules arrive a day late and the quarrels arrive a week late and by then they have hardened into something that takes a fortnight to undo.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'A laboratory is not a set of instructions. It is two thousand people deciding hourly whether to tell you the truth.',
            narration: 'He puts down the third telephone of the hour, looks at the wall chart of divisions he has never walked through, and says it to the empty office.',
          },
          {
            id: 'built',
            narration:
              'It gets built. It gets built later and more expensively and with more people leaving, and every delay is a month of a war that is being fought by people he will never meet.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, exposure: 2, wellbeing: -2 } },
          { type: 'flag', flag: 'oppenheimer.built', value: true },
        ],
        historicalNote:
          'The documented direction of the laboratory was carried out on site at Los Alamos. Remote direction is a dramatized departure.',
      },
    ],
  },
  {
    id: 'oppenheimer-trinity',
    characterId: 'oppenheimer',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'oppenheimer-card-1945-trinity',
    trigger: { event: 'afterAction', priority: 97 },
    once: true,
    variants: [
      {
        id: 'losAlamos',
        conditions: [
          { type: 'yearAtLeast', year: 1945 },
          { type: 'locationIs', locationId: 'losAlamos' },
        ],
        title: 'Before Dawn, in the Rain',
        locationLabel: 'Los Alamos',
        image: {
          setting: 'a desert observation shelter before dawn with instrument dials, cable and dark welding glass',
          year: 1945,
          characters: ['oppenheimer'],
          mood: 'dread held very still',
          details: ['instrument dials', 'a coil of cable', 'dark welding glass', 'folded blankets on the ground', 'rain drying on a timber post'],
          alt: 'A low desert observation shelter before dawn with instrument dials, cable and a piece of dark welding glass.',
        },
        pages: [
          {
            id: 'rain',
            narration:
              'It rains in the small hours, which nobody planned for, and the shot slips twice. He does not sit down. He holds a post inside the shelter and smokes and says almost nothing while men around him make bets on the number.',
          },
          {
            id: 'count',
            narration:
              'At the end of the count he lies flat on the ground with his face turned away, the way the instructions say. There is a piece of dark glass in his hand that he does not use.',
          },
          {
            id: 'light',
            narration:
              'The light arrives before the sound. It is not any colour he has a word for, and for a moment the hills stand up out of the dark like a photograph coming up in the tray. Then the sound comes, and it goes on far too long, and rolls back off the mountains a second time.',
          },
          {
            id: 'weeks',
            speaker: 'ROBERT',
            dialogue: 'It worked. Now every one of us has to live in the room we have just built, and so does everybody else.',
            narration:
              'Three weeks later the news comes over the wire from the other side of the world, twice, and the laboratory cheers, and he stands on a platform and accepts the cheering, and afterwards a man is sick behind one of the buildings and nobody says anything about it.',
          },
          {
            id: 'choose',
            narration:
              'The war ends. The work is finished and cannot be unfinished, and for the first time in three years he has a choice about what to do with his mouth.',
            choices: [
              {
                id: 'speak',
                label: 'Say out loud what has been made, to anyone who will sit still for it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.afterTrinity', value: 'speak' },
                  { type: 'resources', effects: { standing: 1, exposure: 2 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
              {
                id: 'silence',
                label: 'Say nothing. The work speaks; let the soldiers speak for it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.afterTrinity', value: 'silence' },
                  { type: 'resources', effects: { wellbeing: -2 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -2 },
                ],
              },
              {
                id: 'petition',
                label: 'Carry the scientists’ objections to the men who decide, and keep carrying them',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.afterTrinity', value: 'petition' },
                  { type: 'resources', effects: { network: 1, exposure: 2, wellbeing: -1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 3 },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1945-trinity' },
          { type: 'resources', effects: { wellbeing: -2, standing: 1 } },
        ],
        historicalNote:
          'The first nuclear test took place in the New Mexico desert in July 1945 after weather delays; atomic bombs were used against Hiroshima and Nagasaki weeks later. The dialogue is dramatized wording, not a quotation.',
      },
      {
        id: 'director-away',
        conditions: [
          { type: 'yearAtLeast', year: 1945 },
          { type: 'narrativeFlag', flag: 'oppenheimer.appointed', value: true },
        ],
        title: 'Waiting by a Telephone',
        image: {
          setting: 'an office at four in the morning with a telephone, a desk lamp and the blinds still down',
          year: 1945,
          characters: ['oppenheimer'],
          mood: 'unbearable stillness at a distance',
          details: ['a telephone', 'a desk lamp', 'blinds still down', 'a cold cup', 'a folded weather report'],
          alt: 'A desk at four in the morning with a telephone, a lit lamp and the blinds still down.',
        },
        pages: [
          {
            id: 'date',
            narration:
              'He knows the date and the window and the weather report by heart, and he is nine hundred miles from the shelter where the men he chose are lying face down in the sand. There is nothing left he can do to it. That is a condition he has no practice at.',
          },
          {
            id: 'call',
            narration:
              'The telephone goes at half past five, and the voice on it uses the words they agreed on months ago, which sound ridiculous now and were designed to. He says thank you. He puts the receiver down and sits with his hand still on it.',
          },
          {
            id: 'weeks',
            speaker: 'ROBERT',
            dialogue: 'It worked. Now every one of us has to live in the room we have just built, and so does everybody else.',
            narration:
              'Three weeks later the news comes over the wire from the other side of the world, twice. People he has never met congratulate him in the street. He says it to a colleague in a corridor, quietly, and the colleague does not know what to do with it.',
          },
          {
            id: 'choose',
            narration:
              'The war ends. The work is finished and cannot be unfinished, and for the first time in three years he has a choice about what to do with his mouth.',
            choices: [
              {
                id: 'speak',
                label: 'Say out loud what has been made, to anyone who will sit still for it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.afterTrinity', value: 'speak' },
                  { type: 'resources', effects: { standing: 1, exposure: 2 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
              {
                id: 'silence',
                label: 'Say nothing. The work speaks; let the soldiers speak for it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.afterTrinity', value: 'silence' },
                  { type: 'resources', effects: { wellbeing: -2 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -2 },
                ],
              },
              {
                id: 'petition',
                label: 'Carry the scientists’ objections to the men who decide, and keep carrying them',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.afterTrinity', value: 'petition' },
                  { type: 'resources', effects: { network: 1, exposure: 2, wellbeing: -1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 3 },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1945-trinity' },
          { type: 'resources', effects: { wellbeing: -2, standing: 1 } },
        ],
        historicalNote:
          'Oppenheimer was present at the July 1945 test in the New Mexico desert. This account follows a director who was away from the site on the morning of the shot; the test, the weather delay and the August bombings are documented.',
      },
      {
        id: 'anywhere',
        conditions: [{ type: 'yearAtLeast', year: 1945 }],
        title: 'The News Arrives Anyway',
        image: {
          setting: 'a room with a wireless set switched on and a newspaper special edition on the table',
          year: 1945,
          characters: ['oppenheimer'],
          mood: 'the world rearranging itself in one afternoon',
          details: ['a wireless set', 'a newspaper special edition', 'a cold cup', 'an open window on a summer street', 'a stopped pen'],
          alt: 'A wireless set beside a newspaper special edition on a table by an open summer window.',
        },
        pages: [
          {
            id: 'wireless',
            narration:
              'It comes over the wireless in the middle of an ordinary afternoon: a test in a desert in July, and then, three weeks later, a city. The announcer’s voice is pleased. Outside, people are pleased. The war is going to end.',
          },
          {
            id: 'understanding',
            narration:
              'He is one of perhaps a few hundred people on earth who can read the announcement properly, and the reading takes him about four seconds, and then he sits very still for a long time with the paper on his knee.',
          },
          {
            id: 'weeks',
            speaker: 'ROBERT',
            dialogue: 'They have made the thing. Now every one of us has to live in the room they have built, and so does everybody who comes after.',
            narration: 'Nobody else in the room understands why he has gone the colour he has gone. He stands up, shuts the window, which does not help at all, and says it to the glass.',
          },
          {
            id: 'choose',
            narration:
              'The age is nine days old and men who never saw the inside of the work are on the wireless already, explaining it to everybody. There is still a choice about what he does with his mouth.',
            choices: [
              {
                id: 'speak',
                label: 'Say out loud what has been made, to anyone who will sit still for it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.afterTrinity', value: 'speak' },
                  { type: 'resources', effects: { standing: 1, exposure: 2 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                ],
              },
              {
                id: 'silence',
                label: 'Say nothing. Let the soldiers and the newspapers speak for it',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.afterTrinity', value: 'silence' },
                  { type: 'resources', effects: { wellbeing: -2 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -2 },
                ],
              },
              {
                id: 'petition',
                label: 'Carry the scientists’ objections to the men who decide, and keep carrying them',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.afterTrinity', value: 'petition' },
                  { type: 'resources', effects: { network: 1, exposure: 2, wellbeing: -1 } },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 3 },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1945-trinity' },
          { type: 'resources', effects: { wellbeing: -2 } },
        ],
        historicalNote:
          'The July 1945 test and the August bombings are documented. Experiencing them at a distance is a dramatized departure from Oppenheimer’s presence at the test site.',
      },
    ],
  },
  {
    id: 'oppenheimer-crisis-closing',
    characterId: 'oppenheimer',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'built',
        conditions: [{ type: 'projectCompleted', projectId: 'oppenheimer-los-alamos-direction' }],
        title: 'The Certificate and the Sentence',
        image: {
          setting: 'a plain hall with folding chairs, a small platform and a rolled certificate on a table',
          year: 1945,
          characters: ['oppenheimer'],
          mood: 'honour with something bitter underneath',
          details: ['folding chairs', 'a rolled certificate', 'a small platform', 'coats over chair backs', 'wind against a plank wall'],
          alt: 'A plain hall of folding chairs facing a small platform with a rolled certificate on a table.',
        },
        pages: [
          {
            id: 'ceremony',
            narration:
              'They give the laboratory a certificate for services rendered, and he is the one who has to stand up and accept it in front of the people who did the work. The wind is loud against the plank wall. He speaks for four minutes.',
          },
          {
            id: 'sentence',
            speaker: 'ROBERT',
            dialogue: 'If this is added to the armouries of a quarrelling world, then there will come a day when men curse the name of this place. We had better spend the rest of our lives making that day less likely.',
            narration:
              'He has written four minutes and delivers about three and a half of them, and the last thing he says is not in the draft.',
          },
          {
            id: 'after',
            narration:
              'They applaud, because that is what is done. The site begins emptying the following week. He hands back his pass and drives down the switchbacks for the last time as director, and does not look at the mirror.',
          },
        ],
        historicalNote:
          'In his October 1945 farewell address at Los Alamos, Oppenheimer warned that the world would come to curse the name of the place if such weapons were added to a quarrelling world. The wording here is dramatized, not quoted.',
      },
      {
        id: 'refused',
        conditions: [{ type: 'narrativeFlag', flag: 'oppenheimer.direction', value: 'refuse' }],
        title: 'The War Ends Without Him',
        image: {
          setting: 'a university office with a wireless on and a class list on the desk',
          year: 1945,
          characters: ['oppenheimer'],
          mood: 'relief tangled with exclusion',
          details: ['a wireless set', 'a class list', 'a half-full ashtray', 'a returned government envelope', 'summer light on a bare floor'],
          alt: 'A university office with a wireless set, a class list on the desk and a returned official envelope.',
        },
        pages: [
          {
            id: 'outside',
            narration:
              'He taught through it. He read what he was permitted to read, which was nothing, and guessed the rest, which was most of it. The men who went returned strange and would not say why, and the ones who did not return are not spoken about.',
          },
          {
            id: 'ledger',
            narration:
              'The news of the desert and the two cities reaches him the way it reaches a grocer. His hands are clean and he cannot decide, in any given hour, whether that is a virtue or simply the absence of an opportunity. He is going to have thirty years to work it out.',
          },
        ],
        historicalNote:
          'Oppenheimer did direct the wartime laboratory. This account follows a life in which he refused that role.',
      },
      {
        id: 'default',
        title: 'The Age Starts Without Asking',
        image: {
          setting: 'a room with the blinds half down and a special edition newspaper left folded on a chair',
          year: 1945,
          characters: ['oppenheimer'],
          mood: 'displacement',
          details: ['half-drawn blinds', 'a folded special edition', 'a suitcase by the door', 'a dead cigarette', 'a telephone off the hook'],
          alt: 'A dim room with half-drawn blinds, a folded newspaper on a chair and a suitcase by the door.',
        },
        pages: [
          {
            id: 'edition',
            narration:
              'The special edition has been folded on the chair for two days. He has read it twice and will not throw it away, and it is the only object in the room that will still mean anything in fifty years.',
          },
          {
            id: 'ahead',
            narration:
              'The men who built it are already being asked what should be done next, and they are answering, and being ignored politely. He puts the telephone back on its cradle. It rings almost immediately.',
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────── legacy
  {
    id: 'oppenheimer-legacy-opening',
    characterId: 'oppenheimer',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'speaking',
        conditions: [{ type: 'narrativeFlag', flag: 'oppenheimer.afterTrinity', value: 'speak' }],
        title: 'The Most Famous Physicist in America',
        image: {
          setting: 'a lecture platform with a jug of water, a microphone stand and a full hall beyond the lights',
          year: 1946,
          characters: ['oppenheimer'],
          mood: 'celebrity worn like a coat that does not fit',
          details: ['a microphone stand', 'a water jug', 'photographers’ flash bulbs on a table', 'a porkpie hat on a chair', 'a hall full of coats'],
          alt: 'A lecture platform with a microphone stand and water jug before a full hall.',
        },
        pages: [
          {
            id: 'platform',
            narration:
              'Within a year of the end his face is in the magazines, and he is asked to explain the age to luncheon clubs and Senate committees and, once, to a room of insurance men in Cleveland. He is extremely good at it, which is part of the trouble.',
          },
          {
            id: 'cost',
            narration:
              'Every talk ends with the same request, put in careful language: that the material itself be taken out of national hands before there are two of everything, then twenty. Everyone applauds. Nothing moves.',
          },
          {
            id: 'aloud',
            speaker: 'ROBERT',
            dialogue: 'They want me to be the conscience and the salesman on the same afternoon. I have not yet found the sentence that does both.',
            narration: 'He says it in a car going to another hall, with his hat on his knee, and then goes in and does it again.',
          },
        ],
        historicalNote:
          'After 1945 Oppenheimer was a public figure and advocated international control of atomic energy. The dialogue is dramatized.',
      },
      {
        id: 'quiet',
        conditions: [{ type: 'narrativeFlag', flag: 'oppenheimer.afterTrinity', value: 'silence' }],
        title: 'A Man Who Will Not Comment',
        image: {
          setting: 'a hallway with a telephone left off the hook and unanswered press cards on a tray',
          year: 1946,
          characters: ['oppenheimer'],
          mood: 'withdrawal',
          details: ['a telephone off the hook', 'press cards on a tray', 'a closed study door', 'a coat still buttoned', 'grey afternoon'],
          alt: 'A hallway tray of unanswered press cards beside a telephone left off its cradle.',
        },
        pages: [
          {
            id: 'declines',
            narration:
              'The cards come on a tray and go into a drawer. He has decided that a man who has done a thing has no special standing to lecture the world about it, and he means it, and it costs him more than saying so would have.',
          },
          {
            id: 'inside',
            narration:
              'The talking is done instead by men who were not in the desert. They are confident and they are wrong in ways he could correct in a sentence. He does not correct them. The silence sets like concrete over about four years.',
          },
          {
            id: 'aloud',
            speaker: 'ROBERT',
            dialogue: 'I have said the only thing I had to say and it was made of metal.',
            narration: 'Somebody asks him at dinner, once, whether he intends to answer any of it. He is already halfway to the study door.',
          },
        ],
      },
      {
        id: 'default',
        title: 'What the Age Requires',
        image: {
          setting: 'a committee ante-room with a folded overcoat, a briefcase and an unread agenda',
          year: 1946,
          characters: ['oppenheimer'],
          mood: 'summoned, uncertain of standing',
          details: ['a folded overcoat', 'a briefcase', 'an unread agenda', 'a wall clock', 'a corridor of closed doors'],
          alt: 'A committee ante-room with a folded overcoat, briefcase and unread agenda on a bench.',
        },
        pages: [
          {
            id: 'anteroom',
            narration:
              'The age is eight months old and already has a filing system. He waits in ante-rooms now, with an agenda he has not been sent in advance, to be asked questions by men who have decided the answer on the train.',
          },
          {
            id: 'terms',
            narration:
              'The proposal he believes in is simple and unwelcome: that the dangerous material should belong to no country at all. He has about three years in which anybody will listen to it, and he does not yet know the number is three.',
          },
          {
            id: 'aloud',
            speaker: 'ROBERT',
            dialogue: 'We have perhaps a few years in which this can be arranged by agreement rather than by fright. After that it will be arranged by fright.',
            narration: 'He rehearses it in the ante-room under his breath, the way he rehearses everything, while the clerk’s door stays shut.',
          },
        ],
      },
    ],
  },
  {
    id: 'oppenheimer-advocacy-breakthrough',
    characterId: 'oppenheimer',
    chapterId: 'legacy',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'oppenheimer-atomic-control-advocacy', priority: 84 },
    once: true,
    variants: [
      {
        id: 'washington',
        conditions: [{ type: 'locationIs', locationId: 'washingtonDC' }],
        title: 'A Proposal Nobody Wants',
        locationLabel: 'Washington, D.C.',
        image: {
          setting: 'a government committee room with a long table, blotters and a bound report',
          year: 1946,
          characters: ['oppenheimer'],
          mood: 'lucid argument meeting a closed door',
          details: ['a bound report', 'green blotters', 'a carafe of water', 'a wall map', 'a stenographer’s empty chair'],
          alt: 'A government committee room with a long table, blotters and a bound report at one place.',
        },
        pages: [
          {
            id: 'report',
            narration:
              'The report is written in six weeks and it is the best-argued document he will ever put his hand to. Its central proposal is that the dangerous material must be owned by an authority that answers to no single country, because ownership is the only inspection that ever works.',
          },
          {
            id: 'room',
            narration:
              'It is read. It is praised. It is amended into a shape that a rival power could only receive as a demand, and then offered, and then refused, exactly as anyone in the room could have predicted before lunch.',
          },
          {
            id: 'after',
            speaker: 'ROBERT',
            dialogue: 'We wrote the last sensible year of the century down on paper. I would like the record to show that it was available.',
            narration: 'On the way out, one of the younger men asks him whether six weeks of it was worth the paper.',
          },
          {
            id: 'train',
            narration: 'He goes home on the night train with the report in his case. The report survives. The year does not.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1, exposure: 2 } },
          { type: 'flag', flag: 'oppenheimer.advocate', value: true },
        ],
        historicalNote:
          'Oppenheimer contributed to the Acheson–Lilienthal report proposing international control of atomic energy; the proposal was altered and ultimately failed. The dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        title: 'Arguing From Outside the Room',
        image: {
          setting: 'a study with carbon copies of a proposal and a stack of addressed envelopes',
          year: 1946,
          characters: ['oppenheimer'],
          mood: 'persistence without leverage',
          details: ['carbon copies', 'addressed envelopes', 'a typewriter with a page in it', 'an ashtray', 'a lamp on at dawn'],
          alt: 'A study desk with carbon copies of a proposal, addressed envelopes and a typewriter with a page in it.',
        },
        pages: [
          {
            id: 'copies',
            narration:
              'He writes it anyway, and has it typed with six carbons, and posts it to everyone he can think of who might be in a room where it matters. The argument is the same and it is just as good and it arrives on desks instead of being spoken at tables.',
          },
          {
            id: 'reply',
            speaker: 'ROBERT',
            dialogue: 'A letter can be filed. A man in the room has to be answered. I have written a great many letters.',
            narration: 'Two of the recipients reply. One of them is a friend, and asks in three careful lines whether writing letters does any good at all.',
          },
        ],
        effects: [
          { type: 'resources', effects: { exposure: 1 } },
          { type: 'flag', flag: 'oppenheimer.advocate', value: true },
        ],
      },
    ],
  },
  {
    id: 'oppenheimer-ias-breakthrough',
    characterId: 'oppenheimer',
    chapterId: 'legacy',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'oppenheimer-ias-directorship', priority: 82 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'Tea at Three',
        locationLabel: 'Princeton',
        image: {
          setting: 'a common room with tea things, deep chairs and a lawn beyond tall windows',
          year: 1948,
          characters: ['oppenheimer'],
          mood: 'civilised, faintly haunted',
          details: ['a tea urn', 'deep chairs', 'a lawn beyond tall windows', 'chalk on a sleeve', 'a folded newspaper nobody reads'],
          alt: 'A common room with a tea urn, deep chairs and tall windows onto a lawn.',
        },
        pages: [
          {
            id: 'tea',
            narration:
              'The rule he imposes is that everyone comes to tea at three. Mathematicians who have not spoken to a physicist since the war find themselves holding a cup beside one. Some of them resent it for twenty years and come every day.',
          },
          {
            id: 'ghosts',
            narration:
              'The place is full of people who have nowhere else to be: a man who reasoned his way out of the certainty of arithmetic, another building a machine that will do arithmetic faster than anyone wants, and an old man who crosses the lawn at the same hour every evening and will not be driven home.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'My job is to see that nobody here has to explain themselves to anybody. It is the only administration I have ever enjoyed.',
            narration: 'He keeps a blackboard in the director’s office and uses it, which the trustees find eccentric and the faculty find reassuring.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, network: 2, wellbeing: 1 } },
          { type: 'flag', flag: 'oppenheimer.institute', value: true },
        ],
        historicalNote:
          'Oppenheimer directed the Institute for Advanced Study from 1947, where Einstein, Gödel and von Neumann were among the faculty, and encouraged contact across its schools. The dialogue is dramatized wording.',
      },
      {
        id: 'elsewhere',
        title: 'A Directorship at Arm’s Length',
        image: {
          setting: 'a desk of institutional correspondence, budgets and appointment files far from the institution',
          year: 1948,
          characters: ['oppenheimer'],
          mood: 'administration without a corridor',
          details: ['appointment files', 'a budget ledger', 'a photograph of a lawn', 'a telephone', 'an unopened invitation'],
          alt: 'A desk of appointment files and budget ledgers with a photograph of an institutional lawn propped behind.',
        },
        pages: [
          {
            id: 'files',
            narration:
              'He runs it out of a folder: appointments, stipends, the delicate arithmetic of who will tolerate whom at a common table. It works, in the sense that the salaries are paid and the appointments are excellent.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'You cannot make a scholar feel at home by correspondence. You can only make him feel administered.',
            narration: 'The best of them come anyway, for the quiet and the money. The corridor conversations that would have made it something more do not happen.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1, network: 1 } },
          { type: 'flag', flag: 'oppenheimer.institute', value: true },
        ],
      },
    ],
  },
  {
    id: 'oppenheimer-encounter-einstein',
    characterId: 'oppenheimer',
    chapterId: 'legacy',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds: ['oppenheimer', 'einstein'],
    trigger: { event: 'afterAction', priority: 72 },
    once: true,
    variants: [
      {
        id: 'human-einstein-here',
        conditions: [
          { type: 'yearAtLeast', year: 1950 },
          { type: 'yearAtMost', year: 1956 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'otherCharacterIsHuman', characterId: 'einstein' },
          { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton', yearTolerance: 2 },
        ],
        title: 'Walking Home Along Mercer Street',
        locationLabel: 'Princeton',
        image: {
          setting: 'a tree-lined suburban street in late afternoon with two men walking and a low picket fence',
          year: 1953,
          characters: ['oppenheimer', 'einstein'],
          mood: 'gentle, unillusioned',
          details: ['a picket fence', 'elms in late light', 'a cardigan with no coat over it', 'a briefcase carried loosely', 'leaves not swept'],
          alt: 'Two men walking along a tree-lined suburban street past a low picket fence in late afternoon.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'They walk the same half mile most days, at the pace of the older man, who does not wear a coat in October and does not intend to be advised about it. The conversation is usually about the shape of a theory. Today it is not.',
          },
          {
            id: 'advice',
            speaker: 'EINSTEIN',
            dialogue: 'They make the trouble, and then they want you grateful for the chance to answer it. Do not go, when they ask. Let them try to explain you to themselves.',
            narration:
              'The old man has spent thirty years being unafraid of institutions, largely by never having needed one, and he offers it kindly and with no expectation whatever that it will be taken.',
          },
          {
            id: 'after',
            narration:
              'They part at the gate. He walks on alone and thinks: he does not understand, he has never had to be believed by anybody. And underneath that, quieter: he understands perfectly.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 2, respect: 2, flag: 'mercer-street' },
          { type: 'flag', flag: 'oppenheimer.einsteinAdvice', value: true },
        ],
        historicalNote:
          'Einstein was a professor at the Institute while Oppenheimer directed it, and is reported to have urged him not to submit to the security proceeding. The dialogue is dramatized wording.',
      },
      {
        id: 'npc-einstein-here',
        conditions: [
          { type: 'yearAtLeast', year: 1950 },
          { type: 'yearAtMost', year: 1956 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'otherCharacterIsNpc', characterId: 'einstein' },
        ],
        title: 'The Old Man in the Cardigan',
        locationLabel: 'Princeton',
        image: {
          setting: 'an institute lawn at the end of the day with two figures at distance and long shadows',
          year: 1953,
          characters: ['oppenheimer', 'einstein'],
          mood: 'affectionate disagreement',
          details: ['long shadows on grass', 'a cardigan', 'a bicycle against a wall', 'scattered elm leaves', 'lit windows behind'],
          alt: 'Two distant figures crossing an institute lawn at the end of the day, long shadows behind them.',
        },
        pages: [
          {
            id: 'lawn',
            narration:
              'They cross the lawn together most evenings, at the pace of the older man, and the younger one ends up carrying the briefcase for both of them. Whatever their titles are supposed to be on paper, neither of them has ever managed to make that arrangement feel real.',
          },
          {
            id: 'advice',
            speaker: 'EINSTEIN',
            dialogue: 'They are asking your colleagues about you now. If that is how a country repays service, you owe it nothing further. Walk away and let them write whatever they like.',
            narration:
              'They stop where the paths divide and the old man puts a hand on his sleeve to keep him there a moment longer.',
          },
          {
            id: 'after',
            speaker: 'ROBERT',
            dialogue: 'He has never had to be trusted by anyone in order to do his work. I have built my entire life on being trusted.',
            narration: 'He shakes his head and cannot explain why, and the reason is not creditable and he knows it: he cannot bear to be put outside the room where the decisions are made.',
          },
          {
            id: 'part',
            narration: 'They part at the corner. The old man goes home without a coat, in October, exactly as he intends to.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 2, respect: 2, flag: 'mercer-street' },
          { type: 'flag', flag: 'oppenheimer.einsteinAdvice', value: true },
        ],
        historicalNote:
          'Einstein and Oppenheimer overlapped at the Institute for Advanced Study, and Einstein is reported to have advised him to refuse the security proceeding. The dialogue is dramatized.',
      },
      {
        id: 'absent',
        conditions: [
          { type: 'yearAtLeast', year: 1950 },
          { type: 'yearAtMost', year: 1956 },
        ],
        title: 'Nobody to Tell Him to Walk Away',
        image: {
          setting: 'a study at night with an unposted letter and a chair pulled out from the desk',
          year: 1953,
          characters: ['oppenheimer'],
          mood: 'isolation before a decision',
          details: ['an unposted letter', 'a chair pulled out', 'a cold pipe', 'a lamp with a low shade', 'a window with nothing beyond it'],
          alt: 'A study at night with an unposted letter on the desk and a chair pulled out beside it.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'Colleagues are being interviewed about him; he learns this from a friend who is embarrassed to be the one telling him. He writes to one of the old men of the subject, three drafts, and posts none of them. The question in all three is the same and it is not a question about physics: what a man is supposed to do while a government makes up its mind about him.',
          },
          {
            id: 'alone',
            speaker: 'ROBERT',
            dialogue: 'There is nobody left who is old enough to tell me to walk away and be believed.',
            narration: 'He reads the third draft aloud to the empty study to hear how it sounds, stops at the second paragraph, and afterwards burns it in the grate, which is theatrical, and he knows it is.',
          },
        ],
        effects: [{ type: 'flag', flag: 'oppenheimer.einsteinAdvice', value: false }],
      },
    ],
  },
  {
    id: 'oppenheimer-security-hearing',
    characterId: 'oppenheimer',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'oppenheimer-card-1954-hearing',
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    variants: [
      {
        id: 'washington',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1959 },
          { type: 'locationIs', locationId: 'washingtonDC' },
        ],
        title: 'A Room With Folding Chairs',
        locationLabel: 'Washington, D.C.',
        image: {
          setting: 'a converted government office with folding chairs, a stenotype machine and a leather sofa',
          year: 1954,
          characters: ['oppenheimer'],
          mood: 'airless, procedural, humiliating',
          details: ['folding chairs', 'a stenotype machine', 'a worn leather sofa', 'a water carafe', 'venetian blinds half shut'],
          alt: 'A converted office room with folding chairs, a stenotype machine and a worn leather sofa.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'It is not a court and everybody in the room is careful to say so. There are folding chairs, a stenographer, and a sofa where he sits for four weeks while men read his life back to him out of a folder that has been kept since before the war.',
          },
          {
            id: 'questions',
            narration:
              'The questions are about 1937, and 1943, and a conversation he described badly once and has now been made to describe eleven times. Colleagues come and testify. Some are kind. One is not, and the room notices, and so does he.',
          },
          {
            id: 'inside',
            speaker: 'ROBERT',
            dialogue: 'You are asking me to account for the friendships of a man who no longer exists, in the language of a country that did not yet feel this way.',
            narration:
              'On the eleventh day he stops answering in the manner of a witness and answers in his own manner, which his counsel has been begging him not to do.',
          },
          {
            id: 'decide',
            narration: 'The clearance is revoked on a technical majority, weeks before it was due to lapse on its own. The point was never the clearance; the point was the finding. There was a way to meet this, and there still is, for whatever is left of the years afterwards.',
            choices: [
              {
                id: 'fight',
                label: 'Answer every question for as long as they ask, and let it all be written down',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.hearing', value: 'fight' },
                  { type: 'resources', effects: { wellbeing: -2, standing: -1 } },
                ],
              },
              {
                id: 'record',
                label: 'Say only what the record already says, and let the record hold',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.hearing', value: 'record' },
                  { type: 'resources', effects: { standing: -1, wellbeing: -1 } },
                ],
              },
              {
                id: 'withdraw',
                label: 'Decline the proceeding entirely and let the clearance lapse in silence',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.hearing', value: 'withdraw' },
                  { type: 'resources', effects: { standing: -2, exposure: -1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1954-hearing' },
          { type: 'resources', effects: { standing: -3, exposure: 2 } },
        ],
        historicalNote:
          'A closed Atomic Energy Commission proceeding in 1954 revoked Oppenheimer’s security clearance, drawing on associations from the 1930s and on wartime interviews. The dialogue is dramatized wording; individual witnesses are left unnamed here.',
      },
      {
        id: 'advised',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1959 },
          { type: 'narrativeFlag', flag: 'oppenheimer.einsteinAdvice', value: true },
        ],
        title: 'The Advice He Does Not Take',
        image: {
          setting: 'a study with a registered letter opened on the blotter and a train timetable beside it',
          year: 1954,
          characters: ['oppenheimer'],
          mood: 'a decision made against good counsel',
          details: ['a registered letter', 'a train timetable', 'a packed overnight case', 'an ashtray filled', 'a lamp left on'],
          alt: 'A registered letter opened on a blotter beside a train timetable and a packed overnight case.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter lists the charges in numbered paragraphs, and about half of them are things he said about himself, years ago, freely, believing that candour was a kind of protection. It is very quiet in the study.',
          },
          {
            id: 'ignored',
            narration:
              'He has been told, by a man with every right to say it, to refuse the whole proceeding and let them explain themselves. He packs the overnight case instead. Some men cannot walk out of a room where they are being discussed.',
          },
          {
            id: 'inside',
            speaker: 'ROBERT',
            dialogue: 'They are not accusing me of anything I did. They are accusing me of who I was willing to be seen with while I did it.',
            narration:
              'He reads the numbered paragraphs a fourth time at the kitchen table, with the case already strapped by the door, and finds the sentence that says what all twenty-four of them are actually for.',
          },
          {
            id: 'decide',
            narration: 'The train leaves in the morning. What he does when he arrives is still, in some narrow sense, his own.',
            choices: [
              {
                id: 'fight',
                label: 'Answer every question for as long as they ask, and let it all be written down',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.hearing', value: 'fight' },
                  { type: 'resources', effects: { wellbeing: -2, standing: -1 } },
                ],
              },
              {
                id: 'record',
                label: 'Say only what the record already says, and let the record hold',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.hearing', value: 'record' },
                  { type: 'resources', effects: { standing: -1, wellbeing: -1 } },
                ],
              },
              {
                id: 'withdraw',
                label: 'Decline the proceeding entirely and let the clearance lapse in silence',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.hearing', value: 'withdraw' },
                  { type: 'resources', effects: { standing: -2, exposure: -1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1954-hearing' },
          { type: 'resources', effects: { standing: -3, exposure: 2 } },
        ],
        historicalNote:
          'The 1954 proceeding and its outcome are documented, as is the advice from colleagues that he should refuse to take part. The interior reasoning here is dramatized.',
      },
      {
        id: 'anywhere',
        conditions: [{ type: 'yearAtLeast', year: 1953 }],
        title: 'The File Comes Due',
        image: {
          setting: 'a hallway table with a registered envelope, a hat and a closed front door',
          year: 1954,
          characters: ['oppenheimer'],
          mood: 'the past presenting its account',
          details: ['a registered envelope', 'a hat on a table', 'a closed front door', 'a key still in the lock', 'winter light in a fanlight'],
          alt: 'A hallway table holding a registered envelope and a hat beside a closed front door.',
        },
        pages: [
          {
            id: 'envelope',
            narration:
              'It arrives by registered post and has to be signed for, which is the first indication of what it is. Twenty-four numbered paragraphs, going back to 1937: the committees, the donations, the friends, the brother, one badly told story from the middle of a war.',
          },
          {
            id: 'weather',
            narration:
              'The country has changed its weather. Things that were ordinary decency in a bad decade have been renamed, retrospectively, by people who were not asked to do anything at the time.',
          },
          {
            id: 'inside',
            speaker: 'ROBERT',
            dialogue: 'They are not accusing me of anything I did. They are accusing me of who I was willing to be seen with while I did it.',
            narration: 'The hat stays on the hall table for a long time. The key is still in the lock at seven o’clock.',
          },
          {
            id: 'decide',
            narration: 'There is a proceeding, and it is optional, in the way that things are optional when refusing them is also an answer.',
            choices: [
              {
                id: 'fight',
                label: 'Answer every question for as long as they ask, and let it all be written down',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.hearing', value: 'fight' },
                  { type: 'resources', effects: { wellbeing: -2, standing: -1 } },
                ],
              },
              {
                id: 'record',
                label: 'Say only what the record already says, and let the record hold',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.hearing', value: 'record' },
                  { type: 'resources', effects: { standing: -1, wellbeing: -1 } },
                ],
              },
              {
                id: 'withdraw',
                label: 'Decline the proceeding entirely and let the clearance lapse in silence',
                effects: [
                  { type: 'flag', flag: 'oppenheimer.hearing', value: 'withdraw' },
                  { type: 'resources', effects: { standing: -2, exposure: -1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'oppenheimer-card-1954-hearing' },
          { type: 'resources', effects: { standing: -3, exposure: 2 } },
        ],
        historicalNote:
          'The 1954 security proceeding drew on Oppenheimer’s 1930s associations and on wartime interviews, and ended with the revocation of his clearance. The scene is dramatized; witnesses are unnamed.',
      },
    ],
  },
  {
    id: 'oppenheimer-late-years',
    characterId: 'oppenheimer',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 54 },
    once: true,
    variants: [
      {
        id: 'frail',
        conditions: [
          { type: 'yearAtLeast', year: 1959 },
          { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
        ],
        title: 'The Cough at the Lectern',
        image: {
          setting: 'an empty lecture hall after a talk with a glass of water and a scarf over a chair',
          year: 1962,
          characters: ['oppenheimer'],
          mood: 'depletion carried gracefully',
          details: ['a half-drunk glass of water', 'a scarf over a chair back', 'a lectern with a lamp', 'an ashtray on the front row', 'empty tiered seats'],
          alt: 'An empty tiered lecture hall after a talk, a glass of water and a scarf left on a chair.',
        },
        pages: [
          {
            id: 'after',
            narration:
              'He can still hold a hall for an hour. Afterwards he sits in the front row for ten minutes before he can face the corridor, and the cough goes on a little longer each season, and he lights another one against it.',
          },
          {
            id: 'young',
            speaker: 'ROBERT',
            dialogue: 'They ask me about the desert. They never ask me about the stars, and the stars were the better piece of work.',
            narration: 'The students are polite and have read about him in a way that has nothing to do with physics. He looks a decade older than he is, and has for some time.',
          },
        ],
        effects: [{ type: 'resources', effects: { health: -1, wellbeing: -1 } }],
        historicalNote:
          'Oppenheimer lectured widely in his later years and was a lifelong heavy smoker. The scene is a dramatized composite.',
      },
      {
        id: 'steady',
        conditions: [
          { type: 'yearAtLeast', year: 1959 },
          { type: 'resourceAtLeast', resource: 'health', value: 6 },
        ],
        title: 'Evenings on the Porch',
        image: {
          setting: 'a wooden porch at evening with two chairs, a book face-down and a lamp inside the doorway',
          year: 1962,
          characters: ['oppenheimer'],
          mood: 'unexpected calm',
          details: ['two chairs', 'a book face-down', 'a lamp in the doorway', 'a cooling cup', 'insects at the screen'],
          alt: 'A wooden porch at evening with two chairs, a book face-down and a lamp lit inside the doorway.',
        },
        pages: [
          {
            id: 'porch',
            narration:
              'The famous part is over and what is left is unexpectedly liveable: a porch, a book, a manageable amount of correspondence, and the sea somewhere beyond the screens making the only argument nobody needs to win.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'I have been consulted about everything and asked about almost nothing. This is better.',
            narration: 'The paper on the second chair stays folded, unread, which is new, and he says so to nobody in particular before the light goes.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 2 } }],
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1959 }],
        title: 'Late Correspondence',
        image: {
          setting: 'a desk of answered and unanswered letters with a photograph of mountain country propped behind',
          year: 1962,
          characters: ['oppenheimer'],
          mood: 'settled, slightly out of time',
          details: ['two stacks of letters', 'a propped photograph of mountains', 'a pipe', 'a reading lamp', 'a window on bare trees'],
          alt: 'A desk with two stacks of letters and a propped photograph of mountain country behind them.',
        },
        pages: [
          {
            id: 'stacks',
            narration:
              'Two stacks now: the ones he answers, and the ones from strangers who want him to tell them whether it was worth it. The second stack is taller and he reads every one of them, and answers none.',
          },
          {
            id: 'line',
            speaker: 'ROBERT',
            dialogue: 'They want a verdict. I have only ever had a description.',
            narration: 'The photograph of the high meadow is propped against the books where he can see it from the chair.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
      },
    ],
  },
  {
    id: 'oppenheimer-legacy-closing',
    characterId: 'oppenheimer',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'after-hearing',
        conditions: [{ type: 'narrativeFlag', flag: 'oppenheimer.hearing' }],
        title: 'Consulted About Nothing',
        image: {
          setting: 'an institute office with a blackboard half written and an award case unopened on the desk',
          year: 1963,
          characters: ['oppenheimer'],
          mood: 'rehabilitation that arrives too late to be one',
          details: ['a half-written blackboard', 'a closed award case', 'a stack of reprints', 'a hat on a hook', 'winter light on a wooden floor'],
          alt: 'An institute office with a half-written blackboard and a closed award case on the desk.',
        },
        pages: [
          {
            id: 'medal',
            narration:
              'Years after the folding chairs, a committee of the same government votes him a prize, and there is a room and a photographer and a short citation. Nobody anywhere uses the word apology. The case stays shut on his desk for a week before he opens it, alone, and shuts it again.',
          },
          {
            id: 'what-remains',
            narration:
              'He still has an office with a blackboard in it, and people still write to ask him things. What was taken was never the clearance; it was the assumption that a man who says what he thinks may go on being trusted, and no medal has ever been minted that gives that back.',
          },
        ],
        historicalNote:
          'Oppenheimer received the Enrico Fermi Award in 1963, nine years after the revocation of his clearance; the clearance itself was never restored in his lifetime.',
      },
      {
        id: 'full-life',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['oppenheimer-atomic-control-advocacy', 'oppenheimer-ias-directorship'],
            count: 2,
          },
        ],
        title: 'The Ledger at the End of the Desk',
        image: {
          setting: 'a director’s office at the end of a working day, papers squared, blackboard wiped',
          year: 1965,
          characters: ['oppenheimer'],
          mood: 'ordered completion',
          details: ['squared papers', 'a wiped blackboard', 'a hat and coat', 'a lamp being switched off', 'lit windows across a lawn'],
          alt: 'A tidy director’s office at the end of the day, papers squared and the blackboard wiped clean.',
        },
        pages: [
          {
            id: 'squared',
            narration:
              'The papers are squared and the blackboard is wiped and there is a young man in the next building doing something with fields that he does not entirely follow and finds enormously cheering.',
          },
          {
            id: 'accounts',
            narration:
              'A school on one coast; a laboratory on a mesa; an argument about the material that was correct and lost; a room where people who have nowhere else to be are paid to think. Two of those he would put his name to gladly. He does not get to choose which two the century remembers.',
          },
        ],
      },
      {
        id: 'default',
        title: 'The Quiet Part of the Century',
        image: {
          setting: 'a study with the lamp off and the last light on a wall of books',
          year: 1965,
          characters: ['oppenheimer'],
          mood: 'unfinished, unresentful',
          details: ['a wall of books', 'a lamp switched off', 'an open notebook', 'a cold pipe', 'the last light through a blind'],
          alt: 'A study wall of books in the last light of the day with a lamp switched off.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'The century did most of its shouting elsewhere. He has a notebook that is two-thirds full, a reputation among four hundred people, and a set of questions he never got to the end of.',
          },
          {
            id: 'quiet',
            narration:
              'It is not the life anyone would have predicted for the boy on the stairs with the feldspar in his pocket. It is, on the evidence, a life. He shuts the notebook and leaves the last light where it is.',
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────── epilogue
  {
    id: 'oppenheimer-epilogue',
    characterId: 'oppenheimer',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'refused-the-laboratory',
        conditions: [{ type: 'narrativeFlag', flag: 'oppenheimer.direction', value: 'refuse' }],
        title: 'The Man Who Said No',
        image: {
          setting: 'a lecture room with a blackboard of stellar equations and an empty front row',
          year: 1967,
          characters: ['oppenheimer'],
          mood: 'a life measured against an absence',
          details: ['equations of stellar collapse', 'an empty front row', 'chalk stubs', 'a coat over a chair', 'grey daylight'],
          alt: 'A lecture room blackboard covered with equations of stellar collapse before an empty front row.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'He taught for thirty years and was, in the estimation of the four hundred people qualified to judge, one of the two or three finest teachers the subject has had. The other thing was built by somebody else, at another address, on schedule.',
          },
          {
            id: 'question',
            narration:
              'Strangers still write to ask him what he thinks of it. He answers courteously and at length and never once says the thing he thinks at four in the morning, which is that being spared a choice is not the same as making one.',
          },
          {
            id: 'last',
            speaker: 'ROBERT',
            dialogue: 'I kept my hands clean. I have never been able to decide whether that was a decision or an accident of the post.',
            narration: 'The blackboard behind him is covered with a star that closes itself off from the universe. It is still the best thing he ever did.',
          },
        ],
        historicalNote:
          'Oppenheimer did direct the wartime laboratory; this ending follows a life that turned the role down.',
      },
      {
        id: 'full-arc',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'oppenheimer-gottingen-training',
              'oppenheimer-born-oppenheimer',
              'oppenheimer-berkeley-school',
              'oppenheimer-gravitational-collapse',
              'oppenheimer-los-alamos-direction',
              'oppenheimer-atomic-control-advocacy',
              'oppenheimer-ias-directorship',
            ],
            count: 5,
          },
        ],
        title: 'What the Century Kept',
        image: {
          setting: 'a high desert horizon at first light with a fence line running out of frame',
          year: 1967,
          characters: ['oppenheimer'],
          mood: 'wide, unsentimental, final',
          details: ['a fence line', 'blue ranges at distance', 'first light on scrub', 'a dirt road', 'a windless morning'],
          alt: 'A high desert horizon at first light with a fence line running toward distant blue ranges.',
        },
        pages: [
          {
            id: 'inventory',
            narration:
              'A separation of motions that chemistry has used ever since without knowing whose it was. A school on the west coast that emptied itself into a war. A star, folded shut, that waited thirty years for anyone to want it. And the mesa.',
          },
          {
            id: 'weight',
            narration:
              'He was told, at nine years old, that he was exceptional, and he spent sixty-three years finding out what the word costs when the century takes you up on it. The bill was itemised in a room with folding chairs.',
          },
          {
            id: 'last',
            speaker: 'ROBERT',
            dialogue: 'We did not make the world dangerous. We made the danger legible. I would like to think that is different, and on most days I do.',
            narration:
              'The high country is still there and does not care, which was always the best thing about it. The light comes up over the ranges in the order it has always come up in.',
          },
        ],
      },
      {
        id: 'partial',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'oppenheimer-gottingen-training',
              'oppenheimer-born-oppenheimer',
              'oppenheimer-berkeley-school',
              'oppenheimer-gravitational-collapse',
              'oppenheimer-los-alamos-direction',
              'oppenheimer-atomic-control-advocacy',
              'oppenheimer-ias-directorship',
            ],
            count: 2,
          },
        ],
        title: 'A Partial Account',
        image: {
          setting: 'a desk with a notebook open at a half-finished page and a window on winter trees',
          year: 1967,
          characters: ['oppenheimer'],
          mood: 'honest incompleteness',
          details: ['a notebook open mid-page', 'a pen laid across it', 'winter trees beyond glass', 'a cold pipe', 'a stack of offprints tied with string'],
          alt: 'A notebook open at a half-finished page on a desk beside a window onto winter trees.',
        },
        pages: [
          {
            id: 'account',
            narration:
              'Some of it got finished. A good deal of it did not, and the unfinished part is tied with string in the corner where it has been for eleven years, and every so often he unties it and reads a page and ties it up again.',
          },
          {
            id: 'last',
            speaker: 'ROBERT',
            dialogue: 'I was very quick and I was not always right about which room to be quick in.',
            narration: 'The trees outside do the only thing trees do in February. The pen lies across the open page where he will leave it.',
          },
        ],
      },
      {
        id: 'default',
        title: 'The Boy on the Stairs',
        image: {
          setting: 'a stone stair in winter light with a book left face-down on the step',
          year: 1967,
          characters: ['oppenheimer'],
          mood: 'quiet return',
          details: ['a stone stair', 'a book face-down on a step', 'a small labelled stone', 'winter light through glass', 'a coat over an arm'],
          alt: 'A book left face-down on a stone stair in winter light beside a small labelled stone.',
        },
        pages: [
          {
            id: 'return',
            narration:
              'All of it began on a stone stair with a book and a labelled scrap of feldspar and a boy who had already worked out that being ahead is a kind of loneliness with good manners.',
          },
          {
            id: 'last',
            speaker: 'ROBERT',
            dialogue: 'Ask a better question than the one they expect. That is the whole of it. It was the whole of it at nine.',
            narration: 'The stone is still in a drawer somewhere, still labelled, in a careful adult hand that was not, at the time, an adult’s.',
          },
        ],
      },
    ],
  },
];
