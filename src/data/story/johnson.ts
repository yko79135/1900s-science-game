import type { StoryScene } from '../../types/story';

const sourceIds = ['johnson'];

/** Board context cards told in full by scenes in this file. */
export const JOHNSON_REPLACED_CONTEXT_CARDS: string[] = [
  'johnson-card-1928',
  'johnson-card-1939-integration',
  'johnson-card-1953-westcomputing',
  'johnson-card-1961-shepard',
  'johnson-card-1962-glenn',
];

export const JOHNSON_STORY_SCENES: StoryScene[] = [
  // -------------------------------------------------------------------------
  // Prologue
  // -------------------------------------------------------------------------
  {
    id: 'johnson-prologue-counting',
    characterId: 'johnson',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Everything Countable',
        locationLabel: 'White Sulphur Springs',
        yearLabel: '1918–1924',
        image: {
          setting: 'a small frame house on a mountain road in West Virginia in the early 1920s',
          year: 1923,
          characters: ['johnson'],
          mood: 'warm, precise, expectant',
          details: ['tin washbasin', 'coal scuttle by the stove', 'clothesline in a side yard', 'kerosene lamp', 'a brother’s schoolbook left open'],
          alt: 'A small mountain-town house at dusk with a lamp lit in the kitchen window.',
        },
        pages: [
          {
            id: 'steps',
            narration:
              'The porch has eleven planks. The walk to church is four hundred and eighty steps, or four hundred and sixty if she is late and taking the long stride. There are six plates and she washes them in the same order every night, smallest to largest, because that way none of them can be missed.',
          },
          {
            id: 'town',
            narration:
              'It is a mountain town of clapboard and coal smoke, a hotel up the valley where her father takes work when the farm will not carry them, and a schoolhouse that stops at the eighth grade for children like her. Nobody explains this to her. It is simply the shape of the road, the way the ridge is the shape of the sky.',
          },
          {
            id: 'mother',
            narration:
              'Her mother taught school before there were four children in the house, and she knows the look of a child doing arithmetic where nobody asked her to. She finds Katherine at the basin with her hands gone still and her lips moving.',
            speaker: 'HER MOTHER',
            dialogue: 'That is twice you have counted those dishes, and there were never going to be seven.',
          },
        ],
        historicalNote:
          'Katherine Johnson was born in White Sulphur Springs, West Virginia, in 1918; her father worked at a resort hotel and on the land, and her mother had been a teacher. She often described a childhood spent counting everything around her. The dialogue is dramatized wording, not a quotation.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Formation, 1918-1928
  // -------------------------------------------------------------------------
  {
    id: 'johnson-formation-opening',
    characterId: 'johnson',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Number of Steps to School',
        yearLabel: '1922–1928',
        image: {
          setting: 'a one-room schoolhouse on a West Virginia hillside in the early 1920s',
          year: 1924,
          characters: ['johnson'],
          mood: 'bright, impatient, watchful',
          details: ['slate and chalk', 'a stove with a bent pipe', 'benches worn pale', 'a wall map with a torn corner', 'lunch pails on a shelf'],
          alt: 'A hillside schoolhouse with children’s coats on pegs and a chalked sum on the slate.',
        },
        pages: [
          {
            id: 'school',
            narration:
              'The schoolhouse has one room and one stove and a teacher who cannot decide what to do with her. She is put in with the older children because the sums she is given come back finished before the chalk is dry. She likes the smell of chalk. She likes better the moment when a column of figures stops being a column and becomes an answer.',
          },
          {
            id: 'father',
            narration:
              'Her father can read a field the way she reads a sum — how many bushels, how many days, what it will cost to be wrong. He has a sixth-grade education and an arithmetic in his head that never misses. He tells her the thing he tells all four of them, and he does not soften it.',
            speaker: 'HER FATHER',
            dialogue: 'You are as good as anybody in this valley. You are no better than anybody. Now say the second part back to me.',
          },
          {
            id: 'ceiling',
            narration:
              'There is a ceiling in the town and everyone can see it. The county will teach a Black child through the eighth grade and then the schoolhouse door is simply a door. Her brothers talk about it the way you talk about winter coming. She has already worked out how many years she has left inside the building: not enough.',
          },
          {
            id: 'decide',
            narration:
              'She is small enough that grown people talk over her head and quick enough to keep the whole conversation. There is a way to be in this town, and a way to be in the arithmetic, and she is beginning to understand that she cannot have both all day long.',
            choices: [
              {
                id: 'count',
                label: 'Count everything, and keep the count to yourself',
                effects: [
                  { type: 'flag', flag: 'johnson.counts', value: true },
                  { type: 'theme', theme: 'curiosityVsCaution', amount: 1 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'ask',
                label: 'Ask the questions out loud, in front of everyone',
                effects: [
                  { type: 'flag', flag: 'johnson.asksAloud', value: true },
                  { type: 'theme', theme: 'curiosityVsCaution', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'help',
                label: 'Put the numbers down and be useful at home',
                effects: [
                  { type: 'flag', flag: 'johnson.helpsAtHome', value: true },
                  { type: 'resources', effects: { funds: 1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Johnson advanced through the local school unusually fast, and her county offered no public schooling for Black students past the eighth grade. Her parents’ insistence on her education is documented; the dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-skipping-grades',
    characterId: 'johnson',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 90 },
    once: true,
    variants: [
      {
        id: 'out-loud',
        conditions: [
          { type: 'choiceWas', choiceKey: 'johnson-formation-opening:decide', choiceId: 'ask' },
          { type: 'yearAtLeast', year: 1923 },
          { type: 'yearAtMost', year: 1926 },
        ],
        title: 'Two Rows Forward',
        yearLabel: 'the middle twenties',
        image: {
          setting: 'the front row of a country classroom in the mid-1920s',
          year: 1925,
          characters: ['johnson'],
          mood: 'proud, exposed, quick',
          details: ['inkwell in a desk lid', 'a primer for older pupils', 'a coat too big on a peg', 'chalk dust in a sunbeam'],
          alt: 'A small child at a desk built for a bigger one, hand raised, in a country classroom.',
        },
        pages: [
          {
            id: 'moved',
            narration:
              'She asks her question, and the room goes quiet in the way rooms do when a small person has asked the thing the big people were avoiding. The teacher moves her desk two rows forward that same week. Her feet no longer touch the floor.',
          },
          {
            id: 'older',
            narration:
              'The older children are not cruel about it, only careful, the way you are careful of a wasp in the house. She learns to do the work fast and then sit very straight, because being finished early looks like showing off and being wrong looks like proof.',
          },
          {
            id: 'again',
            narration:
              'By the end of the year they move her again. She keeps a private tally of the grades she has skipped and the ones remaining, and both numbers are getting smaller, and only one of them is good news.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 1 } }],
        historicalNote:
          'Johnson skipped several grades and began high school years ahead of her age group. The classroom detail is dramatized around that documented fact.',
      },
      {
        id: 'quiet',
        conditions: [
          { type: 'yearAtLeast', year: 1923 },
          { type: 'yearAtMost', year: 1926 },
        ],
        title: 'Two Rows Forward',
        yearLabel: 'the middle twenties',
        image: {
          setting: 'a country classroom at the end of a school day in the mid-1920s',
          year: 1925,
          characters: ['johnson'],
          mood: 'quiet, watchful, determined',
          details: ['a slate wiped clean', 'benches pushed back', 'a stove going grey', 'a copybook filled to the margins'],
          alt: 'An empty country classroom at day’s end with one copybook still open on a bench.',
        },
        pages: [
          {
            id: 'finished',
            narration:
              'She does not raise her hand. She finishes the page, turns it over, and does the next page, which nobody assigned. The copybook fills up faster than the year does.',
          },
          {
            id: 'noticed',
            narration:
              'A teacher going through the desks after school finds the extra pages and stands there a while with them. On Monday Katherine is moved two rows forward without any discussion at all, which is how she prefers most things to happen.',
          },
          {
            id: 'tally',
            narration:
              'She keeps a private tally of the grades she has skipped and the grades the county will still let her have. Both numbers are getting smaller. Only one of them is good news.',
          },
        ],
        historicalNote:
          'Johnson skipped several grades and began high school years ahead of her age group. The classroom detail is dramatized around that documented fact.',
      },
    ],
  },
  {
    id: 'johnson-card-no-high-school',
    characterId: 'johnson',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 95 },
    once: true,
    replacesContextCardId: 'johnson-card-1928',
    variants: [
      {
        id: 'at-home',
        conditions: [
          { type: 'locationIs', locationId: 'whiteSulphurSprings' },
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1930 },
        ],
        title: 'The Door at the Eighth Grade',
        locationLabel: 'White Sulphur Springs',
        yearLabel: '1928',
        image: {
          setting: 'a kitchen table in a West Virginia farmhouse at night, 1928',
          year: 1928,
          characters: ['johnson'],
          mood: 'grave, resolved, close',
          details: ['a lamp turned low', 'a folded county school notice', 'a rent figure worked on the back of an envelope', 'coats on a hook by the door'],
          alt: 'A lamplit kitchen table with an envelope covered in pencilled arithmetic.',
        },
        pages: [
          {
            id: 'table',
            narration:
              'The lamp is turned low to save oil and her parents are doing arithmetic she is not supposed to be listening to. Rent in one town, food in two, a hundred and twenty miles of road between them, and one wage that was never meant to cover any of it.',
          },
          {
            id: 'plan',
            narration:
              'The plan is this: for the school months the four children and their mother will live in Institute, near the college, where a Black child may attend high school. Their father will stay behind with the work and drive the road when he can. Her mother says it flat, the way you say a sum that has already been checked.',
            speaker: 'HER MOTHER',
            dialogue: 'We are not asking the county to change. We are going where the school already is.',
          },
          {
            id: 'cost',
            narration:
              'Katherine does the figure herself, later, in bed, because she cannot help it: two households, eight or nine years, four children. It comes out to an amount she cannot repay and is not being asked to. That is a different kind of number and she has not met one before.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1928' },
          { type: 'flag', flag: 'johnson.twoHouseholds', value: true },
          { type: 'resources', effects: { funds: -1, network: 1 } },
        ],
        historicalNote:
          'Because White Sulphur Springs offered no high school for Black students, the Coleman family arranged to live in Institute, West Virginia during the school year so the children could continue their education. Dialogue is dramatized.',
      },
      {
        id: 'anywhere',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1930 },
        ],
        title: 'The Door at the Eighth Grade',
        yearLabel: '1928',
        image: {
          setting: 'a lamplit room where a family decision is being worked out on paper, 1928',
          year: 1928,
          characters: ['johnson'],
          mood: 'grave, resolved, close',
          details: ['a lamp turned low', 'a school notice folded twice', 'pencilled figures on an envelope', 'a packed grip by the wall'],
          alt: 'A folded school notice and pencilled arithmetic on an envelope beside a low lamp.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'The notice from the county is short and entirely polite. Schooling for Black children is provided through the eighth grade. There is no sentence after that one, and the blank space where it should be is the whole problem.',
          },
          {
            id: 'plan',
            narration:
              'So the family will keep two homes: one where the work is, one where the school is, a hundred and twenty miles apart, for as many years as it takes to get four children through. Her mother says it flat, the way you say a sum that has already been checked.',
            speaker: 'HER MOTHER',
            dialogue: 'We are not asking the county to change. We are going where the school already is.',
          },
          {
            id: 'cost',
            narration:
              'Katherine does the figure herself, later, because she cannot help it: two households, eight or nine years, four children. It comes out to an amount she cannot repay and is not being asked to. That is a different kind of number and she has not met one before.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1928' },
          { type: 'flag', flag: 'johnson.twoHouseholds', value: true },
          { type: 'resources', effects: { funds: -1, network: 1 } },
        ],
        historicalNote:
          'Because her home county offered no high school for Black students, Johnson’s family arranged seasonal housing in Institute, West Virginia so the children could continue their schooling. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-formation-closing',
    characterId: 'johnson',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'road-taken',
        conditions: [{ type: 'visitedLocation', locationId: 'instituteWV' }],
        title: 'A Hundred and Twenty Miles',
        yearLabel: '1928',
        image: {
          setting: 'a loaded car on a mountain road in West Virginia at the end of summer, 1928',
          year: 1928,
          characters: ['johnson'],
          mood: 'unsettled, forward-leaning',
          details: ['a rope over a case on the roof', 'a folded road map', 'quilt across a child’s knees', 'a valley falling away behind'],
          alt: 'A loaded family car climbing a mountain road with the valley falling away behind it.',
        },
        pages: [
          {
            id: 'road',
            narration:
              'The car is loaded past sense and the road out of the valley turns eleven times before the ridge. She counts the turns. It is not a long road by the map, but it is the whole distance between a life that ends at the eighth grade and one that does not.',
          },
          {
            id: 'behind',
            narration:
              'Her father grows smaller in the mirror, standing where the lane meets the road, not waving, because he will see them at Christmas and there is work to do before then. She has understood something about what it costs the people around her when she is allowed to keep going. She will be paying attention to that figure for the rest of her life.',
          },
        ],
        historicalNote:
          'The family’s seasonal move to Institute so the children could attend high school is documented. The detail of the departure is dramatized.',
      },
      {
        id: 'stayed',
        title: 'The Valley in Winter',
        yearLabel: '1928',
        image: {
          setting: 'a farmhouse window in a West Virginia valley in late autumn, 1928',
          year: 1928,
          characters: ['johnson'],
          mood: 'held, restless, unresolved',
          details: ['frost on the inside of a pane', 'a schoolbook returned to a shelf', 'a stack of borrowed newspapers', 'the road empty below'],
          alt: 'A frosted farmhouse window looking down on an empty mountain road in late autumn.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The eighth-grade reader goes back on the shelf and nothing comes down to replace it. She reads the newspapers her father brings up from the hotel, three days old and full of markets, and works out the percentages in the margins because the margins are what is left.',
          },
          {
            id: 'winter',
            narration:
              'Winter closes the valley the way it always does. She is ten years old and has arrived early at the place the county intended her to stop, which turns out to be an entirely ordinary room with an entirely ordinary stove. She keeps counting anyway. Nobody has found a way to stop that.',
          },
        ],
        historicalNote:
          'A divergence from the documented life, in which the family did relocate for schooling. Local schooling for Black students in her county genuinely ended at the eighth grade.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Education, 1928-1939
  // -------------------------------------------------------------------------
  {
    id: 'johnson-education-opening',
    characterId: 'johnson',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'institute',
        conditions: [{ type: 'locationIs', locationId: 'instituteWV' }],
        title: 'A Town Built Around a College',
        locationLabel: 'Institute, West Virginia',
        yearLabel: '1928',
        image: {
          setting: 'the green of a small historically Black college campus in West Virginia at the start of a term, 1928',
          year: 1928,
          characters: ['johnson'],
          mood: 'astonished, hungry, formal',
          details: ['brick halls along a green', 'a bell rope in a porch', 'students in coats and hats', 'a bicycle against a railing', 'the Kanawha River beyond the trees'],
          alt: 'A small college green in early autumn with brick halls and students crossing between them.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'The rented rooms smell of other people’s winters, and out of the window is a green with brick buildings around it and grown men walking across it carrying books. In her old town the building where you learned things had one room. Here the buildings are a plural.',
          },
          {
            id: 'highschool',
            narration:
              'The high school sits on the campus, which means the high-school pupils walk past professors on their way to a lesson. She is ten years old and enrolled with the fourteen-year-olds, and she has already read ahead to the end of the book they were given on Monday.',
          },
          {
            id: 'teacher',
            narration:
              'A teacher keeps her back after the last bell, not to scold her, and lays two books on the desk between them: the one for the class, and one that is not.',
            speaker: 'A TEACHER',
            dialogue: 'You will finish this school early. That is not a compliment, child, it is a warning. Decide now what you mean to do with the years you are saving.',
          },
          {
            id: 'path',
            narration:
              'She takes the second book home under her coat. There is more here than a person can take at once, and taking it will cost something: hours, sleep, the ordinary company of people her own age, who are all four years older than she is.',
            choices: [
              {
                id: 'everything',
                label: 'Take every course they will let you into',
                effects: [
                  { type: 'flag', flag: 'johnson.takesEverything', value: true },
                  { type: 'theme', theme: 'curiosityVsCaution', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'french',
                label: 'Take the languages as well as the mathematics',
                effects: [
                  { type: 'flag', flag: 'johnson.frenchToo', value: true },
                  { type: 'resources', effects: { network: 1, wellbeing: 1 } },
                ],
              },
              {
                id: 'careful',
                label: 'Take fewer, and be twice as correct in each',
                effects: [
                  { type: 'flag', flag: 'johnson.twiceCorrect', value: true },
                  { type: 'theme', theme: 'curiosityVsCaution', amount: 1 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Johnson attended the high school on the campus of West Virginia State in Institute, entering years younger than her classmates, and later took both mathematics and French there. The teacher and the dialogue are dramatized.',
      },
      {
        id: 'default',
        title: 'The Years She Is Saving',
        yearLabel: '1928',
        image: {
          setting: 'a school-age girl reading at a kitchen table by lamplight in West Virginia, 1928',
          year: 1928,
          characters: ['johnson'],
          mood: 'contained, impatient, bright',
          details: ['a borrowed textbook', 'an oilcloth table cover', 'a lamp with a smoked chimney', 'a pencil worn to a stub'],
          alt: 'A girl reading a borrowed textbook at a kitchen table under a lamp.',
        },
        pages: [
          {
            id: 'ahead',
            narration:
              'Wherever the family is this autumn, she is ahead of the book. She has a habit of finishing a chapter and then working out what the next chapter has to say before it says it, and being right often enough that it has stopped feeling like guessing.',
          },
          {
            id: 'older',
            narration:
              'Everyone she studies beside is older than she is. They are patient with her the way you are patient with weather. She is not lonely exactly; she simply has nobody to be exactly her age with, and she has decided this is a price rather than a wound.',
          },
          {
            id: 'teacher',
            narration:
              'A teacher who has run out of things to set her lays two books down: the one for the class, and one that is not.',
            speaker: 'A TEACHER',
            dialogue: 'You will finish this school early. That is not a compliment, child, it is a warning. Decide now what you mean to do with the years you are saving.',
          },
          {
            id: 'path',
            narration:
              'She takes the second book home under her coat. There is more here than a person can take at once, and taking it will cost something: hours, sleep, the ordinary company of people her own age, who are all four years older than she is.',
            choices: [
              {
                id: 'everything',
                label: 'Take every course they will let you into',
                effects: [
                  { type: 'flag', flag: 'johnson.takesEverything', value: true },
                  { type: 'theme', theme: 'curiosityVsCaution', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'french',
                label: 'Take the languages as well as the mathematics',
                effects: [
                  { type: 'flag', flag: 'johnson.frenchToo', value: true },
                  { type: 'resources', effects: { network: 1, wellbeing: 1 } },
                ],
              },
              {
                id: 'careful',
                label: 'Take fewer, and be twice as correct in each',
                effects: [
                  { type: 'flag', flag: 'johnson.twiceCorrect', value: true },
                  { type: 'theme', theme: 'curiosityVsCaution', amount: 1 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Johnson began high school at around ten and finished it at fourteen. The setting here is dramatized for a life that stayed in the mountains rather than moving to Institute.',
      },
    ],
  },
  {
    id: 'johnson-highschool-at-ten',
    characterId: 'johnson',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 88 },
    once: true,
    variants: [
      {
        id: 'thriving',
        conditions: [
          {
            any: [
              { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 },
              { type: 'choiceWas', choiceKey: 'johnson-education-opening:path', choiceId: 'french' },
            ],
          },
          { type: 'yearAtLeast', year: 1929 },
          { type: 'yearAtMost', year: 1933 },
        ],
        title: 'Youngest in the Room',
        yearLabel: 'the early thirties',
        image: {
          setting: 'a college-town street at the end of a school day in the early 1930s',
          year: 1931,
          characters: ['johnson'],
          mood: 'happy, quick, belonging',
          details: ['a satchel too big for its owner', 'brick steps worn hollow', 'sheet music under an arm', 'a piano heard through an open window'],
          alt: 'A child with an oversized satchel on the brick steps of a college-town building.',
        },
        pages: [
          {
            id: 'street',
            narration:
              'Every second person on this street can do algebra, and several of them can play the piano, and one of them is her brother. She walks home the long way most days because the long way passes the practice rooms.',
          },
          {
            id: 'younger',
            narration:
              'Being four years younger than everyone stops being a problem the moment they discover she is useful before an examination. She is small, she is quick, and she has never once been sorry to be asked a question.',
          },
          {
            id: 'ahead',
            narration:
              'She finishes the high school with time to spare and walks straight across the same green to the college, which she has been treating as a very large lending library for two years already.',
          },
        ],
        effects: [{ type: 'resources', effects: { network: 1 } }],
        historicalNote:
          'Johnson finished high school at fourteen and entered West Virginia State College the same year. The street detail is dramatized.',
      },
      {
        id: 'lonely',
        conditions: [
          { type: 'yearAtLeast', year: 1929 },
          { type: 'yearAtMost', year: 1933 },
        ],
        title: 'Youngest in the Room',
        yearLabel: 'the early thirties',
        image: {
          setting: 'a schoolroom at the end of a winter afternoon in the early 1930s',
          year: 1931,
          characters: ['johnson'],
          mood: 'solitary, stubborn, cold',
          details: ['a coat kept on indoors', 'a copybook open to the last page', 'a window gone dark at four', 'a radiator ticking'],
          alt: 'A single copybook open on a schoolroom desk beside a dark winter window.',
        },
        pages: [
          {
            id: 'alone',
            narration:
              'The others are fourteen and fifteen and have things to talk about that have nothing to do with her. She waits for them to finish and then asks the teacher the question she has been holding since Tuesday.',
          },
          {
            id: 'work',
            narration:
              'She is not unhappy. Unhappy is a word for people with time. She is simply always the youngest thing in the room, which means she is never quite in the conversation and always exactly in the work.',
          },
          {
            id: 'faster',
            narration:
              'The remedy she finds is the only one available to her: go faster. If the years are going to be strange, let there be fewer of them.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1, standing: 1 } }],
        historicalNote:
          'Johnson was several years younger than her classmates throughout her schooling. Her interior experience of that is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-claytor-encounter',
    characterId: 'johnson',
    chapterId: 'education',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'courses-made',
        conditions: [
          { type: 'locationIs', locationId: 'instituteWV' },
          { type: 'yearAtLeast', year: 1934 },
          { type: 'yearAtMost', year: 1938 },
        ],
        title: 'A Course Invented for One Student',
        locationLabel: 'Institute, West Virginia',
        yearLabel: 'the middle thirties',
        image: {
          setting: 'a small college mathematics classroom late in the day, mid-1930s',
          year: 1936,
          characters: ['johnson'],
          mood: 'exacting, generous, electric',
          details: ['a chalked surface in three dimensions', 'a folded course schedule', 'a professor’s worn attaché', 'winter light through high windows'],
          alt: 'A college classroom blackboard covered with a chalked three-dimensional surface at dusk.',
        },
        pages: [
          {
            id: 'runsout',
            narration:
              'By her third year she has taken every mathematics course the college offers, which is a sentence the college has not previously had occasion to say about anybody. She asks what is next. She is told, kindly, that there is no next.',
          },
          {
            id: 'claytor',
            narration:
              'The professor is one of very few Black Americans then holding a doctorate in mathematics, and he does not treat the shortage as an argument. The following term the schedule has a course on it that was not there before, in analytic geometry of space, and it has one student.',
            speaker: 'PROFESSOR CLAYTOR',
            dialogue: 'You will make a good research mathematician. I will see that you are ready. Nobody is going to hand you the reason you needed it.',
          },
          {
            id: 'ready',
            narration:
              'He teaches her as if the post she cannot yet apply for already exists and she is late for it. She learns to see a surface before she has the equation and then go back and find the equation to keep the surface honest.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'johnson.claytor', value: true },
          { type: 'resources', effects: { network: 1, standing: 1 } },
        ],
        historicalNote:
          'W. W. Schieffelin Claytor, the third Black American to earn a doctorate in mathematics, taught Johnson at West Virginia State and added advanced courses, including analytic geometry of space, specifically for her. He is recorded as telling her she would make a good research mathematician. The wording of the dialogue is dramatized.',
      },
      {
        id: 'no-one-to-ask',
        conditions: [
          { type: 'yearAtLeast', year: 1934 },
          { type: 'yearAtMost', year: 1938 },
        ],
        title: 'Nobody to Ask',
        yearLabel: 'the middle thirties',
        image: {
          setting: 'a kitchen table stacked with borrowed mathematics books at night, mid-1930s',
          year: 1936,
          characters: ['johnson'],
          mood: 'determined, unaccompanied',
          details: ['library books with due-date slips', 'a page of worked figures', 'a cold cup', 'a lamp burning late'],
          alt: 'Borrowed mathematics books stacked on a kitchen table beside a page of worked figures.',
        },
        pages: [
          {
            id: 'books',
            narration:
              'The books come from wherever books come from — lent, borrowed, kept too long. She teaches herself the way you ford a river you cannot see the bottom of: carefully, and only forward.',
          },
          {
            id: 'gap',
            narration:
              'What she has no way to get is the other thing a teacher gives you, which is not the material at all. It is somebody older saying the sentence that tells you what you are for. She has decided not to wait to be told.',
          },
          {
            id: 'alone',
            narration:
              'So she checks her own work twice, since there is nobody else to check it, and she gets very good at the second check. Years later people will call that a method. Tonight it is simply what is available.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1 } }],
        historicalNote:
          'A divergence: in the documented life Johnson was mentored at West Virginia State by W. W. Schieffelin Claytor, who created advanced courses for her.',
      },
    ],
  },
  {
    id: 'johnson-analytic-geometry-breakthrough',
    characterId: 'johnson',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'johnson-analytic-geometry', priority: 85 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Geometry of Space',
        yearLabel: 'the middle thirties',
        image: {
          setting: 'a blackboard carrying a curve traced through three dimensions, mid-1930s',
          year: 1937,
          characters: ['johnson'],
          mood: 'lucid, unhurried, complete',
          details: ['chalk held sideways for a long line', 'a duster leaving a grey band', 'an open notebook', 'late afternoon light'],
          alt: 'A blackboard with a long chalked curve running through a set of three axes.',
        },
        pages: [
          {
            id: 'surface',
            narration:
              'The trick of it is refusing to let the picture and the algebra live in separate rooms. She draws the surface, then writes the equation that has to be true of it, then bends one and watches the other bend.',
          },
          {
            id: 'sees',
            narration:
              'On a Thursday afternoon she stops mid-line because she can see where the curve is going three steps before her hand gets there. It is not a feeling of cleverness. It is the feeling of a road being where you thought it was.',
          },
          {
            id: 'use',
            narration:
              'She has no idea what this will ever be used for. That question has not been put to her and will not be for twenty years, and when it is, it will arrive in the shape of a capsule falling out of the sky toward a particular patch of ocean.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 1, wellbeing: 1 } }],
        historicalNote:
          'Johnson graduated from West Virginia State College summa cum laude in 1937, at eighteen, with degrees in mathematics and French, after advanced work in the geometry of space. The forward glance to orbital work is authorial framing, not something she is recorded as thinking.',
      },
    ],
  },
  {
    id: 'johnson-graduation',
    characterId: 'johnson',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 74 },
    once: true,
    variants: [
      {
        id: 'lean',
        conditions: [
          { not: { type: 'resourceAtLeast', resource: 'funds', value: 2 } },
          { type: 'yearAtLeast', year: 1937 },
          { type: 'yearAtMost', year: 1939 },
        ],
        title: 'Eighteen, With Honors',
        yearLabel: '1937',
        image: {
          setting: 'a college commencement seen from the back of a modest hall, 1937',
          year: 1937,
          characters: ['johnson'],
          mood: 'proud, thin-pocketed, resolved',
          details: ['a borrowed gown taken up at the hem', 'folding chairs on a wooden floor', 'a printed order of ceremony', 'a family in Sunday coats'],
          alt: 'Rows of folding chairs at a modest college commencement with a family seated at the back.',
        },
        pages: [
          {
            id: 'gown',
            narration:
              'The gown is borrowed and taken up four inches at the hem because she is eighteen and small and the person it was cut for was neither. Her mother did the stitching last night by lamp.',
          },
          {
            id: 'honors',
            narration:
              'They read the honors out and the family does not make a sound, because they are not people who make sounds in halls, and afterwards on the steps her father shakes her hand as if she were a man he had done business with and respected.',
          },
          {
            id: 'after',
            narration:
              'The degrees are in mathematics and in French, and there is no laboratory in this state waiting for either. There is a schoolhouse in Virginia that needs a teacher, and it pays, and there are still two households.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 1, funds: 1 } }],
        historicalNote:
          'Johnson graduated from West Virginia State College at eighteen with highest honors in mathematics and French, and went on to teach school. Research positions were effectively closed to Black women mathematicians at the time.',
      },
      {
        id: 'steady',
        conditions: [
          { type: 'yearAtLeast', year: 1937 },
          { type: 'yearAtMost', year: 1939 },
        ],
        title: 'Eighteen, With Honors',
        yearLabel: '1937',
        image: {
          setting: 'a college hall after a commencement, chairs still in rows, 1937',
          year: 1937,
          characters: ['johnson'],
          mood: 'accomplished, forward-looking',
          details: ['a folded gown over an arm', 'a printed order of ceremony', 'lilac in a jar', 'sunlight through tall windows'],
          alt: 'An emptying hall after a commencement, with a folded gown draped over a chair back.',
        },
        pages: [
          {
            id: 'read',
            narration:
              'They read the honors out. She is eighteen. Two subjects, both of them finished early, and a professor at the back with his arms folded looking exactly like a man whose arithmetic has come out right.',
          },
          {
            id: 'ask',
            narration:
              'On the steps somebody asks her what she will do with it, meaning the question kindly, and she gives the only true answer available in 1937 to a Black woman with a mathematics degree.',
            speaker: 'KATHERINE',
            dialogue: 'I will teach. And I will keep the mathematics for myself in the evenings until somebody wants it in the daytime.',
          },
          {
            id: 'wait',
            narration:
              'It is not resignation. She has simply measured the door and found it shut, and she is a person who waits at doors the way she counts steps: exactly, and without dropping the total.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 1 } }],
        historicalNote:
          'Johnson graduated at eighteen with highest honors and taught school afterward, as research work was closed to Black women mathematicians. Her line here is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-education-closing',
    characterId: 'johnson',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'finished',
        conditions: [{ type: 'projectCompleted', projectId: 'johnson-analytic-geometry' }],
        title: 'Ready for a Post That Does Not Exist',
        yearLabel: '1937–1939',
        image: {
          setting: 'a college classroom being emptied at the end of a term, late 1930s',
          year: 1938,
          characters: ['johnson'],
          mood: 'complete, unspent, waiting',
          details: ['a board wiped to a grey smear', 'a chair up on a desk', 'a stack of returned papers', 'a corridor light left on'],
          alt: 'An emptied classroom with one chair upturned on a desk and a wiped blackboard.',
        },
        pages: [
          {
            id: 'wiped',
            narration:
              'The last board is wiped and the geometry of space goes with it, into the notebooks, into her hands. She is trained for research and there is no research to be had, which is a fact about the country and not about the training.',
          },
          {
            id: 'keep',
            narration:
              'So she packs the notebooks. Whatever comes next will be a classroom, and she will be good in it, and every evening she will keep the other thing warm the way you bank a fire you intend to use in the morning.',
          },
        ],
        historicalNote:
          'Johnson finished her degree in 1937 and taught school. Her advanced training had no professional outlet available to her at the time.',
      },
      {
        id: 'default',
        title: 'The Books Go Back',
        yearLabel: '1937–1939',
        image: {
          setting: 'a shelf of returned schoolbooks in a small house, late 1930s',
          year: 1938,
          characters: ['johnson'],
          mood: 'unfinished, patient',
          details: ['books squared on a shelf', 'a pencil laid across a closed cover', 'a window with the curtain half drawn', 'a chair pushed in'],
          alt: 'A shelf of neatly squared schoolbooks with a pencil laid across the top cover.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The books go back where books go, squared at the spines because she cannot leave a row crooked. Whatever was going to be finished in these years is not finished. She knows exactly how far she got, to the page.',
          },
          {
            id: 'ahead',
            narration:
              'She is not yet twenty and has more arithmetic in her head than the county has any use for. That is a surplus, not a loss. Surpluses keep. She turns the lamp down and starts working out what to do with hers.',
          },
        ],
        historicalNote:
          'A divergence from the documented life, in which Johnson completed advanced mathematics at West Virginia State under Claytor and graduated in 1937.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Entry into the Profession, 1939-1953
  // -------------------------------------------------------------------------
  {
    id: 'johnson-entry-opening',
    characterId: 'johnson',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Three Names on a List',
        yearLabel: '1939',
        image: {
          setting: 'a hallway table with an opened letter from a state university, 1939',
          year: 1939,
          characters: ['johnson'],
          mood: 'weighed, formal, charged',
          details: ['a typed letter with a state seal', 'a hat on a hall stand', 'a telephone on a doily', 'rain on a porch window'],
          alt: 'An opened typed letter lying on a hallway table beside a hat stand.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter is typed and short and the seal at the top belongs to a state that has spent its whole existence keeping her out of the building it names. A court has said the state must let some students in. The state has decided that some means three.',
          },
          {
            id: 'chosen',
            narration:
              'The president of her college puts her name forward. Three students, and she is the only woman among them, and none of this is being framed as an honour so much as an assignment. Somebody has to be first and be flawless while doing it.',
          },
          {
            id: 'spoken',
            narration:
              'He tells her what the arrangement really is, sitting behind a desk with his hands flat on it, because he will not insult her by pretending.',
            speaker: 'THE COLLEGE PRESIDENT',
            dialogue: 'You will not be a student there the way the others are students. You will be an argument. If you are willing to be one, they cannot say the argument failed.',
          },
          {
            id: 'seat',
            narration:
              'Twenty-one years old, a summer to decide in, and a graduate seat in mathematics on the far side of the decision. She thinks about her father counting bushels and her mother stitching a hem at midnight.',
            choices: [
              {
                id: 'take',
                label: 'Take the seat, and let them look',
                effects: [
                  { type: 'flag', flag: 'johnson.tookTheSeat', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'quiet',
                label: 'Take the seat, say nothing, do the mathematics',
                effects: [
                  { type: 'flag', flag: 'johnson.tookTheSeat', value: true },
                  { type: 'flag', flag: 'johnson.quietSeat', value: true },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'teach',
                label: 'Stay in the classroom, where the children are',
                effects: [
                  { type: 'flag', flag: 'johnson.stayedTeaching', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -1 },
                  { type: 'resources', effects: { funds: 1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'In 1939 Johnson was selected as one of three Black students, and the only woman, to integrate the graduate school at West Virginia University following a state court order. The college president who put her name forward is documented; the wording here is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-card-integration',
    characterId: 'johnson',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 95 },
    once: true,
    replacesContextCardId: 'johnson-card-1939-integration',
    variants: [
      {
        id: 'in-morgantown',
        conditions: [
          { type: 'locationIs', locationId: 'morgantown' },
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'A Test Case, With a Seat in It',
        locationLabel: 'Morgantown',
        yearLabel: '1939',
        image: {
          setting: 'a university lecture room seen from a seat near the door, late 1930s',
          year: 1939,
          characters: ['johnson'],
          mood: 'formal, exposed, contained',
          details: ['tiered wooden seats', 'a lectern with a water glass', 'a notebook squared on a fold-down desk', 'radiators under tall windows'],
          alt: 'A tiered university lecture room with one notebook squared on a fold-down desk near the door.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'She walks across a campus that has been told about her before it has met her. Some of the looking is hostile and some of it is only curious, and from the inside of it the two are surprisingly hard to tell apart.',
          },
          {
            id: 'seat',
            narration:
              'In the lecture room she takes a seat and opens a notebook and is, for fifty minutes, exactly what she came here to be: a graduate student in mathematics, taking down an argument about analysis, checking the professor’s third line because the third line is wrong.',
          },
          {
            id: 'cost',
            narration:
              'The cost is not in the lecture. It is in the corridor afterwards, and the walk to the rooms she is permitted to rent, and the arithmetic she does every single day about which of a hundred small things is worth saying out loud.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1939-integration' },
          { type: 'flag', flag: 'johnson.wasFirst', value: true },
          { type: 'resources', effects: { standing: 1, exposure: 1 } },
        ],
        historicalNote:
          'Johnson entered the West Virginia University graduate school in 1939 as one of three Black students admitted under a court order, and the only woman. The specific classroom moment is dramatized.',
      },
      {
        id: 'took-it',
        conditions: [
          {
            any: [
              { type: 'projectCompleted', projectId: 'johnson-integrating-wvu' },
              { type: 'choiceWas', choiceKey: 'johnson-entry-opening:seat', choiceId: 'take' },
              { type: 'choiceWas', choiceKey: 'johnson-entry-opening:seat', choiceId: 'quiet' },
            ],
          },
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'A Test Case, With a Seat in It',
        yearLabel: '1939',
        image: {
          setting: 'a suitcase packed for a term at a state university, 1939',
          year: 1939,
          characters: ['johnson'],
          mood: 'braced, deliberate, quiet',
          details: ['a strapped case by a door', 'a folded admission letter', 'a good coat brushed and hung', 'an early train timetable'],
          alt: 'A strapped travelling case standing by a door beside a brushed coat on a hook.',
        },
        pages: [
          {
            id: 'pack',
            narration:
              'She packs as though she has been asked to represent a county rather than attend a term. Two good dresses, because one will be looked at. The admission letter folded in the lining, because a letter is the difference between a student and a trespasser.',
          },
          {
            id: 'told',
            narration:
              'Everyone she loves tells her the same thing in different words, and the words all mean: be perfect. Nobody says what happens if she is merely very good, because everybody knows.',
          },
          {
            id: 'go',
            narration:
              'She goes. The state has opened a door the width of three people and she intends to walk through the middle of it with her shoulders square and her arithmetic correct to the last decimal place.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1939-integration' },
          { type: 'flag', flag: 'johnson.wasFirst', value: true },
          { type: 'resources', effects: { standing: 1, exposure: 1 } },
        ],
        historicalNote:
          'The 1939 selection of three Black students to integrate West Virginia University’s graduate school is documented. The departure is dramatized.',
      },
      {
        id: 'not-taken',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'yearAtMost', year: 1945 },
        ],
        title: 'The Seat Somebody Else Sat In',
        yearLabel: '1939–1940',
        image: {
          setting: 'a rural schoolroom with a newspaper folded on the teacher’s desk, about 1940',
          year: 1940,
          characters: ['johnson'],
          mood: 'measured, wistful, unbroken',
          details: ['a newspaper folded to an inside page', 'a class register', 'a jar of pencils', 'chalk in a wooden tray'],
          alt: 'A folded newspaper lying on a rural schoolteacher’s desk beside a class register.',
        },
        pages: [
          {
            id: 'paper',
            narration:
              'The item is on an inside page, three inches long: the state has admitted its first Black graduate students, and there are the names. She reads it twice at her own desk, between the register and the spelling papers.',
          },
          {
            id: 'room',
            narration:
              'Thirty-one children come in at the bell and one of them has worked the extra problem she chalked in the corner, which is the best news she will get this month. She teaches. It is not a small thing and she has never once pretended it was.',
          },
          {
            id: 'later',
            narration:
              'But she keeps the clipping in the drawer with the register, and she is honest enough with herself to know why, and she does not take it out again for a long time.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1939-integration' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'A divergence: in the documented life Johnson was one of the three students selected in 1939 and did enrol. The integration of the graduate school itself is on the record.',
      },
    ],
  },
  {
    id: 'johnson-wvu-breakthrough',
    characterId: 'johnson',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'johnson-integrating-wvu', priority: 85 },
    once: true,
    variants: [
      {
        id: 'on-campus',
        conditions: [{ type: 'locationIs', locationId: 'morgantown' }],
        title: 'The First Term',
        locationLabel: 'Morgantown',
        yearLabel: '1939',
        image: {
          setting: 'a university corridor with a departmental noticeboard, late 1930s',
          year: 1939,
          characters: ['johnson'],
          mood: 'steady, watched, unyielding',
          details: ['a departmental noticeboard with pinned slips', 'polished floorboards', 'a satchel against a wall', 'winter coats on a rack'],
          alt: 'A university corridor with a pinned noticeboard and a satchel resting against the wall.',
        },
        pages: [
          {
            id: 'term',
            narration:
              'A term is fourteen weeks and she gets through all fourteen of them without giving anybody the thing they might have been waiting for. Her work comes back marked and correct. Her name stays on the list.',
          },
          {
            id: 'weight',
            narration:
              'What nobody puts in the record is how heavy it is to be a precedent all day and a person only after dark. She sleeps badly, does the reading anyway, and finds that the mathematics is the one place in the state where nothing at all depends on who is doing it.',
          },
          {
            id: 'open',
            narration:
              'The door stays open behind her. That was the point; that was always the point. Whoever comes next will not have to be the first, which is the only kind of gift a first can leave.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'johnson.wasFirst', value: true },
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
        ],
        historicalNote:
          'Johnson enrolled in the West Virginia University graduate mathematics programme in 1939 and left it before completing a degree, as she and her husband began a family. The interior detail is dramatized.',
      },
      {
        id: 'default',
        title: 'The First Term',
        yearLabel: '1939',
        image: {
          setting: 'a graduate reading list and a stamped enrolment card on a desk, 1939',
          year: 1939,
          characters: ['johnson'],
          mood: 'formal, hard-won',
          details: ['a stamped enrolment card', 'a typed reading list', 'a fountain pen uncapped', 'a lamp on a bare desk'],
          alt: 'A stamped enrolment card lying beside a typed graduate reading list on a bare desk.',
        },
        pages: [
          {
            id: 'card',
            narration:
              'The card is stamped and the name on it is hers and the institution printed above it did not, two years ago, admit anybody who looked like her. She holds it a moment longer than a card requires.',
          },
          {
            id: 'weight',
            narration:
              'She does the term. Her work comes back marked and correct, and what nobody puts in the record is how heavy it is to be a precedent all day and a person only after dark.',
          },
          {
            id: 'open',
            narration:
              'The door stays open behind her. Whoever comes next will not have to be the first, which is the only kind of gift a first can leave.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'johnson.wasFirst', value: true },
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
        ],
        historicalNote:
          'Johnson was among the first Black students admitted to West Virginia University’s graduate school in 1939 under a court order. The scene is dramatized around that documented fact.',
      },
    ],
  },
  {
    id: 'johnson-teaching-years',
    characterId: 'johnson',
    chapterId: 'entry',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 78 },
    once: true,
    variants: [
      {
        id: 'stretched',
        conditions: [
          { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
          { type: 'yearAtLeast', year: 1943 },
          { type: 'yearAtMost', year: 1948 },
        ],
        title: 'Thirteen Years of Somebody Else’s Children',
        yearLabel: 'the forties',
        image: {
          setting: 'a small-town schoolroom after hours with a coal stove and three daughters’ coats, 1940s',
          year: 1946,
          characters: ['johnson'],
          mood: 'tired, warm, stretched thin',
          details: ['three small coats on one peg', 'a stack of arithmetic papers', 'a stove with the door open', 'a kettle on a ring'],
          alt: 'Three small coats hanging on one peg in a schoolroom beside a stack of arithmetic papers.',
        },
        pages: [
          {
            id: 'evening',
            narration:
              'Three daughters, a schoolroom, and a stack of arithmetic papers that has to be gone through before the stove goes out. She marks with one hand and rocks with the other and it is not a hardship, exactly; it is simply the whole of the available time, used.',
          },
          {
            id: 'money',
            narration:
              'The money is thin in the way teachers’ money is always thin. She keeps the household accounts in a hand small enough that a year fits on one page, and she can tell you to the dollar what any month of the last five cost.',
          },
          {
            id: 'keeps',
            narration:
              'And every so often, at the bottom of a page of somebody’s long division, she writes a problem nobody set and works it for the pleasure of it, and then rubs it out before morning.',
          },
        ],
        effects: [{ type: 'resources', effects: { funds: 1, wellbeing: -1 } }],
        historicalNote:
          'Johnson taught school for over a decade and raised three daughters during these years. The domestic detail is dramatized.',
      },
      {
        id: 'settled',
        conditions: [
          { type: 'yearAtLeast', year: 1943 },
          { type: 'yearAtMost', year: 1948 },
        ],
        title: 'Thirteen Years of Somebody Else’s Children',
        yearLabel: 'the forties',
        image: {
          setting: 'a porch in the evening with three girls doing homework, 1940s',
          year: 1946,
          characters: ['johnson'],
          mood: 'full, companionable, unfinished',
          details: ['three homework books on a porch step', 'a radio heard through a screen door', 'a glass of iced tea', 'moths at a porch bulb'],
          alt: 'Three homework books open on a porch step under a lit bulb in the evening.',
        },
        pages: [
          {
            id: 'porch',
            narration:
              'Three daughters on the porch steps with three books, and their mother going along the row like a woman checking fence posts. This one has the method and the wrong answer. This one has the answer and no idea how it got there.',
          },
          {
            id: 'good',
            narration:
              'She is a very good teacher, which is not a consolation prize. Children who were told they could not do arithmetic come out of her room able to do arithmetic, and that is not a small trade for thirteen years of a life.',
          },
          {
            id: 'still',
            narration:
              'Still. At the bottom of somebody’s long division she sometimes writes a problem nobody set, and works it for the pleasure of it, and rubs it out before morning.',
          },
        ],
        effects: [{ type: 'resources', effects: { network: 1 } }],
        historicalNote:
          'Johnson taught in public schools for more than a decade while raising three daughters before joining NACA in 1953.',
      },
    ],
  },
  {
    id: 'johnson-word-from-langley',
    characterId: 'johnson',
    chapterId: 'entry',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1950 },
          { type: 'yearAtMost', year: 1953 },
        ],
        title: 'They Are Hiring Women Who Can Do the Mathematics',
        yearLabel: '1952',
        image: {
          setting: 'a crowded family front room after a summer gathering, early 1950s',
          year: 1952,
          characters: ['johnson'],
          mood: 'electric, ordinary, pivotal',
          details: ['plates stacked on a sideboard', 'a fan turning in a corner', 'a screen door propped open', 'a folded envelope used for notes'],
          alt: 'Stacked plates on a sideboard in a crowded front room with a fan turning in the corner.',
        },
        pages: [
          {
            id: 'gathering',
            narration:
              'It comes the way the important things come: sideways, at a family gathering, between the plates being cleared and somebody looking for a hat. A relative mentions a laboratory down in Virginia that is taking on women to do computing by hand, and that some of the women they are taking on are Black.',
          },
          {
            id: 'listen',
            narration:
              'The room goes on talking. She does not. She is thirty-four years old, she has been ready since 1937, and somebody has just said, in passing, that there is a building where they pay you to do this.',
          },
          {
            id: 'said',
            narration:
              'She asks the question twice to be sure she has it right, and the relative laughs at her for it and answers anyway.',
            speaker: 'A RELATIVE',
            dialogue: 'Aeronautics. They want people who are quick and don’t make mistakes. I said to myself, well, that is one person I know of.',
          },
          {
            id: 'apply',
            narration:
              'There is a school year with her name against it and children who expect her in September. There is also an envelope on the sideboard and a pen in her bag.',
            choices: [
              {
                id: 'apply',
                label: 'Write the application tonight',
                effects: [
                  { type: 'flag', flag: 'johnson.appliedAtOnce', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'resources', effects: { exposure: 1, wellbeing: 1 } },
                ],
              },
              {
                id: 'finish',
                label: 'Finish the school year first, then write',
                effects: [
                  { type: 'flag', flag: 'johnson.finishedTheYear', value: true },
                  { type: 'resources', effects: { standing: 1, network: 1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay with the children; this is somebody else’s door',
                effects: [
                  { type: 'flag', flag: 'johnson.stayedTeaching', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { funds: 1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Johnson learned at a family gathering in 1952 that the laboratory at Langley was hiring Black women as mathematicians, and applied. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-entry-closing',
    characterId: 'johnson',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'first-and-onward',
        conditions: [{ type: 'projectCompleted', projectId: 'johnson-integrating-wvu' }],
        title: 'What the Fourteen Years Were For',
        yearLabel: '1953',
        image: {
          setting: 'a kitchen table at first light with a case packed and a school register closed, 1953',
          year: 1953,
          characters: ['johnson'],
          mood: 'decided, late-arriving, bright',
          details: ['a case tied with twine', 'a road map folded to the coast', 'three sets of school shoes', 'a closed class register'],
          alt: 'A case tied with twine standing beside a folded road map and a closed class register.',
        },
        pages: [
          {
            id: 'sum',
            narration:
              'Add it up: a term as a precedent, a marriage, three daughters, thirteen years of long division, and a degree she was told would make her a research mathematician by a man who was not wrong, only early.',
          },
          {
            id: 'go',
            narration:
              'She is thirty-four, which is old for a beginning and young for an ending, and she has been standing at a shut door for fourteen years without once putting the case down. Whichever door opens next, she intends to be already dressed for it.',
          },
        ],
        historicalNote:
          'Johnson taught school through the 1940s and joined NACA Langley in 1953, fourteen years after her graduate term at West Virginia University.',
      },
      {
        id: 'applied',
        conditions: [{ type: 'choiceWas', choiceKey: 'johnson-word-from-langley:apply', choiceId: 'apply' }],
        title: 'The Letter in the Post Box',
        yearLabel: '1953',
        image: {
          setting: 'a street post box at dusk with a letter just posted, early 1950s',
          year: 1953,
          characters: ['johnson'],
          mood: 'committed, waiting, quietly hopeful',
          details: ['a cast-iron post box', 'a collection plate on its face', 'a coat buttoned against wind', 'a street light coming on'],
          alt: 'A cast-iron street post box at dusk under a street light just coming on.',
        },
        pages: [
          {
            id: 'posted',
            narration:
              'The application went into the box on a Tuesday and the box was emptied on a Wednesday and after that it belongs to other people. She has written down what she can do in the plainest sentences she owns, because dressing it up would only give somebody a reason.',
          },
          {
            id: 'wait',
            narration:
              'Then the waiting, which she does the way she does everything: by counting. Fourteen days for it to arrive somewhere. Twenty for a person to read it. She teaches through all of them and does not mention it to the children, who would ask every morning.',
          },
        ],
        historicalNote:
          'Johnson applied to NACA after learning at a family gathering in 1952 that the laboratory was hiring Black women mathematicians. The detail of the posting is dramatized.',
      },
      {
        id: 'default',
        title: 'The Chalk and the Drawer',
        yearLabel: '1953',
        image: {
          setting: 'a schoolroom cupboard being closed at the end of a term, early 1950s',
          year: 1953,
          characters: ['johnson'],
          mood: 'settled, unspent, quietly wondering',
          details: ['a cupboard door half shut', 'boxed chalk', 'a class photograph pinned crooked', 'a drawer with a folded clipping'],
          alt: 'A schoolroom cupboard half closed on boxes of chalk beside a crookedly pinned class photograph.',
        },
        pages: [
          {
            id: 'cupboard',
            narration:
              'Another term ends and the cupboard shuts on the chalk. In the drawer under the register there is a clipping about a graduate school and, more recently, a folded envelope with the address of a laboratory in Virginia on it, unsent.',
          },
          {
            id: 'weigh',
            narration:
              'She is very good at this room. That is the trouble with being good at a room: it makes a reason to stay, and reasons accumulate, and she has always been able to see exactly how many she has.',
          },
        ],
        historicalNote:
          'A divergence from the documented life, in which Johnson applied to and joined NACA Langley in 1953.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1953-1961
  // -------------------------------------------------------------------------
  {
    id: 'johnson-breakthrough-opening',
    characterId: 'johnson',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'langley',
        conditions: [{ type: 'locationIs', locationId: 'hamptonLangley' }],
        title: 'Two Weeks in Another Building',
        locationLabel: 'Hampton / Langley',
        yearLabel: '1953',
        image: {
          setting: 'a hand-computing room of desks, calculating machines and data sheets, 1953',
          year: 1953,
          characters: ['johnson'],
          mood: 'crisp, purposeful, watchful',
          details: ['mechanical calculators on steel desks', 'rolls of oscillograph film', 'sharpened pencils in a jar', 'a wall clock with a sweep hand', 'flight-test data sheets in a wire tray'],
          alt: 'A room of steel desks with mechanical calculators and trays of flight-test data sheets.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The room smells of machine oil and pencil shavings and it makes a sound like rain: twenty women turning the handles of twenty calculators, converting the wobble of an aeroplane into columns anybody can use.',
          },
          {
            id: 'work',
            narration:
              'The work is arithmetic with the stakes left in. A number here becomes a wing loading there, and if it is wrong somebody flies on it. She has been waiting sixteen years for a sum that mattered this much and she is not going to hurry it.',
          },
          {
            id: 'loan',
            narration:
              'After a fortnight she is loaned to another division to help with the data from an aircraft accident. The loan is meant to last two weeks. Nobody in the other building says anything at the end of the two weeks. Nobody says anything at the end of the third.',
            speaker: 'A SECTION HEAD',
            dialogue: 'They keep asking when we are sending you back. I keep forgetting to answer. That is your business now, not mine.',
          },
          {
            id: 'assignment',
            narration:
              'There is a desk in that building with her name taped to the edge of it in somebody else’s handwriting, and a chair that nobody has asked her to leave.',
            choices: [
              {
                id: 'stay',
                label: 'Say nothing, and simply not go back',
                effects: [
                  { type: 'flag', flag: 'johnson.simplyStayed', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'ask',
                label: 'Ask the branch chief to make it permanent, in writing',
                effects: [
                  { type: 'flag', flag: 'johnson.askedInWriting', value: true },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'return',
                label: 'Go back to the pool when the loan is up',
                effects: [
                  { type: 'flag', flag: 'johnson.wentBack', value: true },
                  { type: 'resources', effects: { network: 1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Johnson joined NACA Langley in June 1953 in the segregated West Area Computing unit and was loaned within about two weeks to the Flight Research Division; the temporary assignment became permanent. The section head and dialogue are dramatized.',
      },
      {
        id: 'default',
        title: 'The Building She Has Not Walked Into',
        yearLabel: '1953',
        image: {
          setting: 'a kitchen table with a folded aeronautics recruitment notice, 1953',
          year: 1953,
          characters: ['johnson'],
          mood: 'suspended, alert, unspent',
          details: ['a government recruitment notice', 'a pencil and a ruled pad', 'a radio with the dial lit', 'a coffee cup gone cold'],
          alt: 'A folded government recruitment notice on a kitchen table beside a ruled pad and pencil.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'The notice has been folded and unfolded enough times that it is soft at the creases. A laboratory in Virginia, hand computing, women wanted who are quick and do not make mistakes.',
          },
          {
            id: 'ready',
            narration:
              'She is thirty-four and she has been ready since she was eighteen. Readiness, it turns out, is not a thing that expires; it is a thing that sits in a drawer and gets heavier.',
          },
          {
            id: 'said',
            narration:
              'Somebody who loves her says the thing everybody says, and means it kindly, and is also wrong.',
            speaker: 'SOMEBODY WHO LOVES HER',
            dialogue: 'You have a good place here. Why go and be the only one of you in a whole building?',
          },
        ],
        historicalNote:
          'A divergence from the documented life, in which Johnson joined NACA Langley in 1953. NACA did recruit Black women mathematicians into the segregated West Area Computing unit from 1943.',
      },
    ],
  },
  {
    id: 'johnson-card-west-computing',
    characterId: 'johnson',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 95 },
    once: true,
    replacesContextCardId: 'johnson-card-1953-westcomputing',
    variants: [
      {
        id: 'west-area',
        conditions: [
          { type: 'locationIs', locationId: 'hamptonLangley' },
          { type: 'yearAtLeast', year: 1954 },
          { type: 'yearAtMost', year: 1959 },
        ],
        title: 'The West Area',
        locationLabel: 'Hampton / Langley',
        yearLabel: 'the middle fifties',
        image: {
          setting: 'a plain government building at the west end of a research campus, mid-1950s',
          year: 1955,
          characters: ['johnson'],
          mood: 'plain, unsentimental, undefeated',
          details: ['a low brick building set apart', 'a cafeteria table by a window', 'a wire tray of computing sheets', 'a bus stop with a bench', 'bicycles on a rack'],
          alt: 'A low brick building at the far end of a research campus with bicycles on a rack outside.',
        },
        pages: [
          {
            id: 'geography',
            narration:
              'The laboratory has a geography and everybody in it can read a map. There is the east side, and there is the west side, and the women who work in the west building eat at their own table and use their own facilities, and none of this is written anywhere she can point to.',
          },
          {
            id: 'women',
            narration:
              'What is also true, and gets written down far less often, is that the west building holds the best mathematicians she has ever been in a room with. They check each other’s work. They cover for each other’s children. They are, several of them, better than the men whose names go on the reports.',
          },
          {
            id: 'meetings',
            narration:
              'The engineers hold editorial meetings where the numbers get argued into conclusions. Women do not go. She has now produced, unaided, the figures under discussion at three of them.',
            speaker: 'KATHERINE',
            dialogue: 'Is there a law against it?',
          },
          {
            id: 'choose',
            narration:
              'The man she asks does not have an answer, which is itself an answer, and the silence after it belongs to her to fill or to let alone.',
            choices: [
              {
                id: 'ask',
                label: 'Keep asking, every time, until somebody says yes',
                effects: [
                  { type: 'flag', flag: 'johnson.askedForTheRoom', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { standing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'wait',
                label: 'Be so correct that the numbers have to be explained by you',
                effects: [
                  { type: 'flag', flag: 'johnson.letWorkSpeak', value: true },
                  { type: 'resources', effects: { wellbeing: 1, standing: 1 } },
                ],
              },
              {
                id: 'both',
                label: 'Ask, and be so correct they cannot answer no twice',
                effects: [
                  { type: 'flag', flag: 'johnson.askedForTheRoom', value: true },
                  { type: 'flag', flag: 'johnson.letWorkSpeak', value: true },
                  { type: 'resources', effects: { standing: 1, network: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1953-westcomputing' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'The West Area Computing unit at Langley was a segregated section of Black women mathematicians with separate facilities. Johnson repeatedly asked to attend the engineers’ editorial meetings, from which women were excluded, and eventually did attend; the question "Is there a law against it?" is close to the wording she is recorded as using. She often said afterwards that she declined to be limited by the segregation around her.',
      },
      {
        id: 'from-outside',
        conditions: [
          { type: 'yearAtLeast', year: 1954 },
          { type: 'yearAtMost', year: 1959 },
        ],
        title: 'A Building She Has Only Heard Described',
        yearLabel: 'the middle fifties',
        image: {
          setting: 'a letter from a friend spread on a kitchen table, mid-1950s',
          year: 1955,
          characters: ['johnson'],
          mood: 'wistful, admiring, held back',
          details: ['a handwritten letter of several pages', 'a government envelope', 'a pencil resting in the fold', 'evening light on an oilcloth'],
          alt: 'A several-page handwritten letter spread open on an oilcloth-covered table.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter runs to five pages because the woman writing it has nobody else to tell. A room of Black women mathematicians in a low brick building at the west end of a research campus, turning aeroplane data into columns, eating at their own table because that is the arrangement.',
          },
          {
            id: 'both',
            narration:
              'Both halves of it are true at once and her friend writes both: the separate facilities, and the fact that she has never worked among cleverer people in her life. Katherine reads it standing up and then sits down to read it again.',
          },
          {
            id: 'reply',
            narration:
              'She writes back a good, warm, encouraging letter and does not put in the one sentence she is thinking, which is that she can do that work, that she could have done it in 1937, and that nobody has ever asked her.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1953-westcomputing' },
          { type: 'resources', effects: { network: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'The segregated West Area Computing unit and its separate facilities are documented. This variant belongs to a life that never joined it.',
      },
    ],
  },
  {
    id: 'johnson-vaughan-encounter',
    characterId: 'johnson',
    chapterId: 'breakthrough',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 87 },
    once: true,
    variants: [
      {
        id: 'section-head',
        conditions: [
          { type: 'locationIs', locationId: 'hamptonLangley' },
          { type: 'yearAtLeast', year: 1954 },
          { type: 'yearAtMost', year: 1958 },
        ],
        title: 'The Woman Who Runs the Room',
        locationLabel: 'Hampton / Langley',
        yearLabel: 'the middle fifties',
        image: {
          setting: 'a supervisor’s desk at the end of a hand-computing room, mid-1950s',
          year: 1956,
          characters: ['johnson'],
          mood: 'shrewd, warm, strategic',
          details: ['an assignment sheet on a clipboard', 'a manual for a new machine', 'a desk fan', 'a row of numbered pigeonholes'],
          alt: 'A supervisor’s desk with a clipboard of assignments and a machine manual at the end of a computing room.',
        },
        pages: [
          {
            id: 'desk',
            narration:
              'Dorothy Vaughan runs the west building the way a good foreman runs a line: she knows who is quick, who is careful, who is going through something at home, and she moves people accordingly and never explains why.',
          },
          {
            id: 'manual',
            narration:
              'On her desk this month there is a manual for an electronic machine that nobody in the building has been trained on. She is reading it in the evenings. She intends to be the person who already knows it when the room they are all sitting in is made obsolete.',
            speaker: 'MRS VAUGHAN',
            dialogue: 'They will replace this room. Not out of spite — out of arithmetic. So we learn the machine before it learns us, and then they need us twice.',
          },
          {
            id: 'lend',
            narration:
              'It is Vaughan who lends Katherine out to the engineers and does not chase her back. Every woman in that building understands the trade: one of us in that building is worth more than all of us together in this one.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'johnson.vaughan', value: true },
          { type: 'resources', effects: { network: 2 } },
        ],
        historicalNote:
          'Dorothy Vaughan supervised the West Area Computing unit and taught herself and her staff programming as electronic computers arrived at Langley. Her strategy of moving her people into new work is documented; the dialogue is dramatized.',
      },
      {
        id: 'no-one-above',
        conditions: [
          { type: 'yearAtLeast', year: 1954 },
          { type: 'yearAtMost', year: 1958 },
        ],
        title: 'Nobody Ahead of Her on This Road',
        yearLabel: 'the middle fifties',
        image: {
          setting: 'a table of worked figures under a hanging lamp late at night, mid-1950s',
          year: 1956,
          characters: ['johnson'],
          mood: 'solitary, capable, unwitnessed',
          details: ['sheets of worked figures squared at the corners', 'a hanging lamp', 'a clock past midnight', 'a shut window'],
          alt: 'Sheets of worked figures squared at the corners on a table under a hanging lamp at night.',
        },
        pages: [
          {
            id: 'alone',
            narration:
              'The figures are correct. She knows they are correct because she has done them twice by two different routes, which is what you do when there is nobody in the house who could tell you otherwise.',
          },
          {
            id: 'missing',
            narration:
              'What is missing is not skill. It is the woman one rung up who has already had this argument with the institution and can tell you which sentence works. There is no such woman within a hundred miles of her.',
          },
          {
            id: 'becomes',
            narration:
              'So she becomes careful in a particular way — the way of a person who cannot afford one public mistake — and she teaches it, eventually, to her daughters, who did not ask.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1 } }],
        historicalNote:
          'A divergence: in the documented life Johnson worked under Dorothy Vaughan, the supervisor of the West Area Computing unit, from 1953.',
      },
    ],
  },
  {
    id: 'johnson-machine-encounter',
    characterId: 'johnson',
    chapterId: 'breakthrough',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 83 },
    once: true,
    variants: [
      {
        id: 'in-person',
        conditions: [
          { type: 'otherCharacterIsHuman', characterId: 'vonneumann' },
          { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'hamptonLangley', yearTolerance: 2 },
          { type: 'locationIs', locationId: 'hamptonLangley' },
          { type: 'yearAtLeast', year: 1955 },
          { type: 'yearAtMost', year: 1958 },
        ],
        title: 'The Man Who Wrote the Machine Down',
        locationLabel: 'Hampton / Langley',
        yearLabel: 'the middle fifties',
        image: {
          setting: 'a laboratory conference room after a visiting lecture on machine computation, mid-1950s',
          year: 1956,
          characters: ['johnson', 'vonneumann'],
          mood: 'quick, courteous, mutually appraising',
          details: ['a chalked flow of operations on a board', 'chairs pushed back at angles', 'a carafe and tumblers', 'a stack of mimeographed handouts'],
          alt: 'A conference room after a lecture, chairs at angles, a chalked sequence of operations still on the board.',
        },
        pages: [
          {
            id: 'lecture',
            narration:
              'The visitor talks for an hour about machines that keep their instructions in the same store as their numbers, and he talks fast, and half the room is pretending to follow. She is following, and she has one objection.',
          },
          {
            id: 'ask',
            narration:
              'She puts it to him afterwards while the chairs are still warm: if the instructions live in the same place as the data, then a fault in the data can eat the instructions, and what checks the machine?',
            speaker: 'THE VISITOR',
            dialogue: 'Another machine. Or a person with a pencil and no illusions. Madam, I would rather have the person.',
          },
          {
            id: 'after',
            narration:
              'He is gone the same afternoon. She keeps the handout, and the objection, and files both under the heading she has been building since she was ten: things that must be checked by somebody who can be held responsible.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'vonneumann', familiarity: 1, respect: 1 },
          { type: 'flag', flag: 'johnson.metTheDesigner', value: true },
          { type: 'resources', effects: { network: 1, standing: 1 } },
        ],
        historicalNote:
          'Speculative: there is no record of a meeting between Johnson and von Neumann. The stored-program architecture he described did underlie the electronic computers Langley used, and Johnson’s insistence on hand verification of machine results is documented. The dialogue is invented.',
      },
      {
        id: 'the-machine-arrives',
        conditions: [
          { type: 'locationIs', locationId: 'hamptonLangley' },
          { type: 'yearAtLeast', year: 1955 },
          { type: 'yearAtMost', year: 1959 },
        ],
        title: 'The Machine Arrives Instead',
        locationLabel: 'Hampton / Langley',
        yearLabel: 'the late fifties',
        image: {
          setting: 'a newly fitted machine room with raised flooring and cabinets, late 1950s',
          year: 1958,
          characters: ['johnson'],
          mood: 'cool, humming, faintly adversarial',
          details: ['grey cabinets in a row', 'a tape reel half wound', 'a raised floor with cable runs', 'a temperature gauge on a wall'],
          alt: 'A row of grey computing cabinets in a cooled machine room with a half-wound tape reel.',
        },
        pages: [
          {
            id: 'delivered',
            narration:
              'It comes in crates and takes a fortnight to assemble and the room they give it is colder than any room in the building where a person works. The engineers speak about it the way people speak about a new colleague they have not yet decided to like.',
          },
          {
            id: 'design',
            narration:
              'Somebody explains the design over the noise of the fans: instructions and numbers held in the same store, so the thing can be told to do anything without being rebuilt. The man who set that out most clearly is at an institute several hundred miles north and will not be coming down.',
          },
          {
            id: 'verdict',
            narration:
              'She watches it work through a case she has already done by hand. It is faster than she is by an order of magnitude and it agrees with her exactly, and neither of those facts tells her whether to trust it, which is the only question she actually has.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 1 } }],
        historicalNote:
          'Electronic computers arrived at Langley in the later 1950s. Johnson’s scepticism about accepting machine output without verification is documented.',
      },
      {
        id: 'in-a-magazine',
        conditions: [
          { type: 'yearAtLeast', year: 1955 },
          { type: 'yearAtMost', year: 1959 },
        ],
        title: 'A Machine in a Magazine',
        yearLabel: 'the late fifties',
        image: {
          setting: 'a magazine open at a photograph of a computing installation, late 1950s',
          year: 1958,
          characters: ['johnson'],
          mood: 'curious, distant, undeterred',
          details: ['a magazine folded back on itself', 'a lamp on a side table', 'a pencil marking a margin', 'a chair by a window'],
          alt: 'A magazine folded back on a page showing a photograph of a large computing installation.',
        },
        pages: [
          {
            id: 'photo',
            narration:
              'The photograph shows a room of grey cabinets and a man in shirtsleeves who is not looking at the camera. The caption says the thing stores its instructions where it stores its numbers, which she reads three times, because that is either trivial or enormous and she cannot yet tell which.',
          },
          {
            id: 'work',
            narration:
              'She works out on the margin of the page what such a machine would have to do to solve the sort of problem she solves, and it comes to a great many steps, and none of the steps is beyond her. It is only that there are so many of them.',
          },
          {
            id: 'trust',
            narration:
              'Whoever ends up feeding such a thing, she thinks, had better keep a pencil. A machine that can be told anything can be told something wrong, and will not hesitate, and will not be sorry.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote:
          'The stored-program design was widely reported in the 1950s. This variant belongs to a life that stayed outside the laboratories where such machines were installed.',
      },
    ],
  },
  {
    id: 'johnson-husband-illness',
    characterId: 'johnson',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 80 },
    once: true,
    variants: [
      {
        id: 'hard',
        conditions: [
          { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
          { type: 'yearAtLeast', year: 1956 },
          { type: 'yearAtMost', year: 1960 },
        ],
        title: 'The Winter of the Illness',
        yearLabel: '1956',
        image: {
          setting: 'a hallway at home in the small hours with a coat still on its hook, 1956',
          year: 1956,
          characters: ['johnson'],
          mood: 'grave, exhausted, tender',
          details: ['a coat left on a hook all night', 'a hall light left burning', 'a folded blanket on a chair', 'three school satchels by the stairs'],
          alt: 'A dim hallway with a coat on a hook, a burning lamp, and three school satchels at the foot of the stairs.',
        },
        pages: [
          {
            id: 'hall',
            narration:
              'Her husband is ill in the way that does not turn around. It takes most of a year and she does not miss a working day in it, which is not heroism; it is that the household needs the wage and the daughters need the ordinary morning.',
          },
          {
            id: 'nights',
            narration:
              'She learns the geometry of the small hours: the hall light, the hook where the coat stays all night, the two hours between the hospital and the alarm clock. She does the figures at work with the same accuracy as before. She checks them three times now instead of twice.',
          },
          {
            id: 'after',
            narration:
              'He dies and the three girls are still in school and the aeroplanes still have to be understood. Grief, she discovers, is a thing you can carry through a doorway if you keep both hands free.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1, health: -1, funds: -1 } }],
        historicalNote:
          'Johnson’s first husband died of a brain tumour in 1956, leaving her with three school-age daughters while she continued at Langley. The domestic detail is dramatized; no more is depicted than the record supports.',
      },
      {
        id: 'held',
        conditions: [
          { type: 'yearAtLeast', year: 1956 },
          { type: 'yearAtMost', year: 1960 },
        ],
        title: 'The Winter of the Illness',
        yearLabel: '1956',
        image: {
          setting: 'a kitchen at first light with three lunch tins on the counter, 1956',
          year: 1956,
          characters: ['johnson'],
          mood: 'steady, sorrowful, held together',
          details: ['three lunch tins in a row', 'a church fan on the sill', 'a kettle just off the boil', 'a note in a mother’s handwriting'],
          alt: 'Three lunch tins lined up on a kitchen counter at first light beside a kettle.',
        },
        pages: [
          {
            id: 'morning',
            narration:
              'Three lunch tins in a row on the counter, filled the night before. Her husband is ill in the way that does not turn around, and the mornings go on happening, and she has decided the mornings are hers to keep intact.',
          },
          {
            id: 'people',
            narration:
              'The church sends people. The women from the west building send people. Somebody is always in the kitchen and nobody makes a speech about it, which is exactly the correct way to do this and she is grateful in a manner she will never say aloud.',
          },
          {
            id: 'after',
            narration:
              'When it is over she goes back on the Monday. Grief, she discovers, is a thing you can carry through a doorway if you keep both hands free, and she has had a lifetime of practice at keeping both hands free.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1, network: 1 } }],
        historicalNote:
          'Johnson’s first husband died of a brain tumour in 1956. She continued working at Langley and raising their three daughters; the surrounding detail is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-first-report',
    characterId: 'johnson',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 82 },
    once: true,
    variants: [
      {
        id: 'asked-for-it',
        conditions: [
          {
            any: [
              { type: 'choiceWas', choiceKey: 'johnson-card-west-computing:choose', choiceId: 'ask' },
              { type: 'choiceWas', choiceKey: 'johnson-breakthrough-opening:assignment', choiceId: 'ask' },
            ],
          },
          { type: 'locationIs', locationId: 'hamptonLangley' },
          { type: 'yearAtLeast', year: 1959 },
          { type: 'yearAtMost', year: 1961 },
        ],
        title: 'Two Names on the Cover',
        locationLabel: 'Hampton / Langley',
        yearLabel: '1960',
        image: {
          setting: 'a technical report fresh from the duplicating room, 1960',
          year: 1960,
          characters: ['johnson'],
          mood: 'level, vindicated, matter-of-fact',
          details: ['a stapled technical report', 'a duplicating machine still warm', 'a distribution list on a slip', 'a desk with two chairs at it'],
          alt: 'A freshly stapled technical report lying on a desk beside a duplication slip.',
        },
        pages: [
          {
            id: 'cover',
            narration:
              'The report is about where to aim: given a spot on the turning Earth you want a satellite to pass over, at what angle do you burn out. She did the mathematics. The cover carries two names, and the second one is hers.',
          },
          {
            id: 'first',
            narration:
              'No woman in the division has been credited as an author of a report before. She noticed that some years ago, said so out loud on several occasions, and has now made the observation redundant.',
            speaker: 'AN ENGINEER',
            dialogue: 'She did the work. I am not putting my name over the top of it and neither is anybody else. That is the whole argument and I am tired of having it.',
          },
          {
            id: 'copy',
            narration:
              'She takes a copy home and does not frame it. It goes in the drawer with the register and the clipping, because that drawer is where she keeps the evidence, and a person who deals in verification keeps her own.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 2, exposure: 1 } }],
        historicalNote:
          'In 1960 Johnson co-authored a report on the azimuth angle for placing a satellite over a selected position — the first time a woman in her division received author credit. The engineer’s line is dramatized.',
      },
      {
        id: 'credited',
        conditions: [
          { type: 'locationIs', locationId: 'hamptonLangley' },
          { type: 'yearAtLeast', year: 1959 },
          { type: 'yearAtMost', year: 1961 },
        ],
        title: 'Two Names on the Cover',
        locationLabel: 'Hampton / Langley',
        yearLabel: '1960',
        image: {
          setting: 'a stapled technical report on a desk at the end of a working day, 1960',
          year: 1960,
          characters: ['johnson'],
          mood: 'quiet, exact, satisfied',
          details: ['a stapled report squared to a desk edge', 'a slide rule set aside', 'an anglepoise lamp', 'a wire tray of drafts'],
          alt: 'A stapled technical report squared against a desk edge beside a slide rule and lamp.',
        },
        pages: [
          {
            id: 'cover',
            narration:
              'The report is about where to aim: given a spot on the turning Earth you want a satellite to pass over, at what angle do you burn out. She did the mathematics, and the cover carries two names, and the second one is hers.',
          },
          {
            id: 'first',
            narration:
              'No woman in the division has been credited as an author of a report before. Nobody makes a ceremony of it. The distribution list goes out, the copies go into pigeonholes, and the fact quietly becomes a precedent, which is the only way facts of this kind ever become anything.',
          },
          {
            id: 'copy',
            narration:
              'She takes a copy home and does not frame it. It goes in the drawer where she keeps the evidence, because a person who deals in verification keeps her own.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 2 } }],
        historicalNote:
          'Johnson co-authored a 1960 technical report on satellite azimuth — the first woman in her division credited as an author.',
      },
      {
        id: 'unwritten',
        conditions: [
          { type: 'yearAtLeast', year: 1959 },
          { type: 'yearAtMost', year: 1961 },
        ],
        title: 'The Report Nobody Asked Her to Write',
        yearLabel: '1960',
        image: {
          setting: 'a ruled pad of private calculations under a lamp at home, 1960',
          year: 1960,
          characters: ['johnson'],
          mood: 'private, undiminished, unwitnessed',
          details: ['a ruled pad of dense working', 'a lamp with a paper shade', 'a slide rule', 'a radio talking quietly'],
          alt: 'A ruled pad of dense handwritten calculations under a lamp with a slide rule beside it.',
        },
        pages: [
          {
            id: 'pad',
            narration:
              'The radio is saying that a satellite passed over the coast last night. She has the pad out and is working, for nobody, the question of what angle you would have to leave the atmosphere at to be over a chosen town at a chosen hour.',
          },
          {
            id: 'answer',
            narration:
              'It takes her four evenings and it comes out clean. There is no cover to put it on, no distribution list, no pigeonhole. There is a pad on a kitchen table, and it is correct, and correctness does not require an audience to be true.',
          },
          {
            id: 'drawer',
            narration:
              'She puts it in the drawer with the register and the clipping. The drawer is getting full. She has never once thrown any of it away.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote:
          'A divergence: in the documented life Johnson was working on exactly this problem inside the laboratory and was credited as co-author of the 1960 report on it.',
      },
    ],
  },
  {
    id: 'johnson-west-computing-breakthrough',
    characterId: 'johnson',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'johnson-west-computing', priority: 85 },
    once: true,
    variants: [
      {
        id: 'at-langley',
        conditions: [{ type: 'locationIs', locationId: 'hamptonLangley' }],
        title: 'Out of the Pool',
        locationLabel: 'Hampton / Langley',
        yearLabel: 'the late fifties',
        image: {
          setting: 'a flight research office with wind-tunnel data pinned along a wall, late 1950s',
          year: 1958,
          characters: ['johnson'],
          mood: 'arrived, precise, unshowy',
          details: ['data plots pinned in a row', 'a slide rule and a mechanical calculator side by side', 'a model aircraft on a filing cabinet', 'a desk by a window'],
          alt: 'A flight research office with data plots pinned along the wall and a slide rule on the desk.',
        },
        pages: [
          {
            id: 'work',
            narration:
              'The gust-load data comes in as wiggles on film and goes out as a number an engineer can build to. Between those two states there is a woman with a pencil doing four hundred operations without dropping one, and the number is right, and it keeps being right.',
          },
          {
            id: 'question',
            narration:
              'What moves her out of the pool for good is not the arithmetic. It is that she asks why. Why is the manoeuvre entered at that speed, why does the correction go that way, what is the aeroplane actually doing. Nobody in the pool is expected to ask. She asks anyway and the answers turn out to be interesting to the men who have to give them.',
          },
          {
            id: 'stays',
            narration:
              'The temporary desk stops being temporary. Her name stays on the west building’s roll for years afterwards, because paperwork is slower than people, but she does not sit there any more.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'johnson.inFlightResearch', value: true },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Johnson moved from the West Area Computing unit into the Flight Research Division, where her habit of asking why the numbers were wanted was noted as what kept her there. Her formal assignment to the segregated pool lagged behind the practical move.',
      },
      {
        id: 'default',
        title: 'Out of the Pool',
        yearLabel: 'the late fifties',
        image: {
          setting: 'a stack of finished computing sheets tied with string, late 1950s',
          year: 1958,
          characters: ['johnson'],
          mood: 'competent, understated',
          details: ['computing sheets tied in a bundle', 'a sharpened pencil laid across them', 'a wire tray', 'a window with venetian blinds'],
          alt: 'A tied bundle of finished computing sheets with a sharpened pencil laid across the top.',
        },
        pages: [
          {
            id: 'work',
            narration:
              'Four hundred operations and not one dropped. The wiggles on the film become a number, and the number becomes something an engineer can build to, and the whole transformation happens inside one woman’s head and one column of pencil.',
          },
          {
            id: 'question',
            narration:
              'What sets her apart is not speed. It is that she asks what the number is for. People who compute are not expected to ask. She asks, and finds that the answer changes how she computes, which is the entire argument for letting her ask.',
          },
          {
            id: 'next',
            narration:
              'When a division needs somebody who understands the aeroplane and not merely the arithmetic, somebody remembers her name, and that is the whole mechanism by which a career like hers ever moves at all.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'johnson.inFlightResearch', value: true },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Johnson’s move into flight research is documented; she credited her questions about why the data was wanted with keeping her in that division.',
      },
    ],
  },
  {
    id: 'johnson-breakthrough-closing',
    characterId: 'johnson',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'moved',
        conditions: [{ type: 'projectCompleted', projectId: 'johnson-west-computing' }],
        title: 'The Word Changes to Space',
        yearLabel: '1958–1961',
        image: {
          setting: 'a research office at night with a new agency notice on the wall, about 1959',
          year: 1959,
          characters: ['johnson'],
          mood: 'accelerating, sober, alert',
          details: ['a wall notice freshly pinned', 'a globe with a pencilled arc across it', 'stacked orbital tables', 'a lamp burning after hours'],
          alt: 'A globe on a desk with a pencilled arc drawn across it beside stacked tables at night.',
        },
        pages: [
          {
            id: 'renamed',
            narration:
              'A committee on aeronautics becomes an administration for space, and overnight the words on everybody’s door change and the problems on everybody’s desk change with them. The air is no longer the medium. The air is the thing you leave.',
          },
          {
            id: 'ready',
            narration:
              'She is already in the room where this is being worked out, at a desk somebody once loaned her for two weeks. Ahead of her is a decade in which the arithmetic will decide whether men come home. She sharpens a pencil and pulls the tables across.',
          },
        ],
        historicalNote:
          'NACA became NASA in 1958 and Langley’s flight research turned toward spaceflight. Johnson was by then working in the Flight Research Division.',
      },
      {
        id: 'default',
        title: 'The Word Changes to Space',
        yearLabel: '1958–1961',
        image: {
          setting: 'a kitchen radio and an evening newspaper reporting a satellite launch, about 1959',
          year: 1959,
          characters: ['johnson'],
          mood: 'restless, attentive, apart',
          details: ['an evening newspaper folded to the front page', 'a radio with the dial lit', 'a cup left half drunk', 'a pencilled arc on the newspaper margin'],
          alt: 'An evening newspaper folded beside a lit radio dial with an arc pencilled in the margin.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The word in the newspapers this year is not aeronautics. It is space, and satellites, and a race being run by two countries at once. She reads it standing at the counter with the radio on and a pencil in her hand out of habit.',
          },
          {
            id: 'margin',
            narration:
              'In the margin she works out how fast a thing must go to stay up, which takes her about four minutes, and then she stands there for rather longer with the paper in her hand. Somewhere there is a room where people are doing this all day, and she is not in it.',
          },
        ],
        historicalNote:
          'A divergence from the documented life, in which Johnson was inside Langley’s flight research work as NACA became NASA in 1958.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Crisis and Responsibility, 1961-1963
  // -------------------------------------------------------------------------
  {
    id: 'johnson-crisis-opening',
    characterId: 'johnson',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'cape',
        conditions: [{ type: 'locationIs', locationId: 'capeCanaveral' }],
        title: 'A Man Will Be Sitting On It',
        locationLabel: 'Cape Canaveral',
        yearLabel: '1961',
        image: {
          setting: 'a launch operations room with plotting tables and a window onto a coastal pad, 1961',
          year: 1961,
          characters: ['johnson'],
          mood: 'taut, exact, enormous',
          details: ['a plotting table with a chart of the Atlantic', 'headsets on hooks', 'a countdown clock', 'palmetto scrub beyond a wire fence', 'a tray of range tables'],
          alt: 'A plotting table spread with an Atlantic chart in a coastal launch operations room.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The room smells of sea air and cigarettes and hot electrical insulation. On the plotting table is a chart of the Atlantic with a pencilled arc across it, and at the end of the arc is a small circle, and the circle is where a man is going to come down.',
          },
          {
            id: 'stakes',
            narration:
              'Every number she has ever produced could be checked afterwards against the world. These cannot. These have to be right the first time, in front, before anybody has flown, and the confirmation arrives as a capsule in the water or does not arrive at all.',
          },
          {
            id: 'engineer',
            narration:
              'An engineer says it plainly, in the way people say the enormous thing quietly, while looking at the chart and not at her.',
            speaker: 'AN ENGINEER',
            dialogue: 'We can be late. We can be over budget. We cannot be approximately right. There is a man sitting on top of it.',
          },
          {
            id: 'pressure',
            narration:
              'The schedule is not hers to set and the pressure is being applied from a great height. She has a pencil, a desk calculator, a chart, and the knowledge that a rounding error at the third decimal is a hundred miles of ocean.',
            choices: [
              {
                id: 'check',
                label: 'Check everything twice, however long it takes',
                effects: [
                  { type: 'flag', flag: 'johnson.checksTwice', value: true },
                  { type: 'theme', theme: 'precisionVsSpeed', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'fast',
                label: 'Give them the numbers on their schedule',
                effects: [
                  { type: 'flag', flag: 'johnson.metTheSchedule', value: true },
                  { type: 'theme', theme: 'precisionVsSpeed', amount: -1 },
                  { type: 'resources', effects: { funds: 1, exposure: 1 } },
                ],
              },
              {
                id: 'room',
                label: 'Insist on being in the room when the decision is taken',
                effects: [
                  { type: 'flag', flag: 'johnson.inTheRoom', value: true },
                  { type: 'resources', effects: { standing: 1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Johnson worked on trajectory analysis for the first American crewed flights under intense Space Race schedule pressure. The engineer and the dialogue are dramatized.',
      },
      {
        id: 'langley',
        conditions: [{ type: 'locationIs', locationId: 'hamptonLangley' }],
        title: 'A Man Will Be Sitting On It',
        locationLabel: 'Hampton / Langley',
        yearLabel: '1961',
        image: {
          setting: 'a research office with orbital tables and a wall chart of the Atlantic, 1961',
          year: 1961,
          characters: ['johnson'],
          mood: 'taut, exact, enormous',
          details: ['a wall chart with a pencilled arc', 'stacked range tables', 'a mechanical calculator', 'a telephone off its cradle'],
          alt: 'A wall chart of the Atlantic with a pencilled arc, beside stacked tables and a calculator.',
        },
        pages: [
          {
            id: 'desk',
            narration:
              'The chart is pinned above the desk and the arc across it was drawn by her own hand this morning. At the end of the arc is a small circle in the ocean, and the circle is where a man is going to come down.',
          },
          {
            id: 'stakes',
            narration:
              'Every number she has ever produced could be checked afterwards against the world. These cannot. These must be right in front, before anybody flies, and the confirmation arrives as a capsule in the water or does not arrive at all.',
          },
          {
            id: 'engineer',
            narration:
              'A colleague puts it plainly, in the way people say the enormous thing quietly, while looking at the chart and not at her.',
            speaker: 'A COLLEAGUE',
            dialogue: 'We can be late. We can be over budget. We cannot be approximately right. There is a man sitting on top of it.',
          },
          {
            id: 'pressure',
            narration:
              'The schedule is not hers to set and the pressure is being applied from a great height. She has a pencil, a desk calculator, a chart, and the knowledge that a rounding error at the third decimal is a hundred miles of ocean.',
            choices: [
              {
                id: 'check',
                label: 'Check everything twice, however long it takes',
                effects: [
                  { type: 'flag', flag: 'johnson.checksTwice', value: true },
                  { type: 'theme', theme: 'precisionVsSpeed', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'fast',
                label: 'Give them the numbers on their schedule',
                effects: [
                  { type: 'flag', flag: 'johnson.metTheSchedule', value: true },
                  { type: 'theme', theme: 'precisionVsSpeed', amount: -1 },
                  { type: 'resources', effects: { funds: 1, exposure: 1 } },
                ],
              },
              {
                id: 'room',
                label: 'Insist on being in the room when the decision is taken',
                effects: [
                  { type: 'flag', flag: 'johnson.inTheRoom', value: true },
                  { type: 'resources', effects: { standing: 1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Much of the Mercury trajectory work was done at Langley. The colleague and the dialogue are dramatized.',
      },
      {
        id: 'default',
        title: 'Somebody Is Going Up',
        yearLabel: '1961',
        image: {
          setting: 'a front room with a television set showing a launch bulletin, 1961',
          year: 1961,
          characters: ['johnson'],
          mood: 'distant, gripped, calculating',
          details: ['a television with a rounded screen', 'an armchair pulled close', 'a newspaper diagram of a capsule', 'a pencil on the arm of the chair'],
          alt: 'A rounded-screen television showing a bulletin, with a newspaper diagram of a capsule beside it.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The country has decided to put a man on top of a rocket and it has decided this out loud, in public, with a date attached. The newspapers print a diagram of the capsule. She looks at it the way a builder looks at somebody else’s roof.',
          },
          {
            id: 'sum',
            narration:
              'On the arm of the chair she works out, for her own satisfaction, roughly where a thing launched at that angle would come down. It takes her most of an evening because she does not have the tables, only the physics and the patience.',
          },
          {
            id: 'quiet',
            narration:
              'Somewhere there is a room where this is being done properly, by people with the tables. She turns the television off before the analysis and sits for a while in the dark, which is not a thing she often does.',
          },
        ],
        historicalNote:
          'A divergence from the documented life, in which Johnson computed the trajectory for the first American crewed flight in 1961.',
      },
    ],
  },
  {
    id: 'johnson-freedom7-breakthrough',
    characterId: 'johnson',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'johnson-freedom-7-trajectory', priority: 88 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Where It Comes Down',
        yearLabel: '1961',
        image: {
          setting: 'a desk of trajectory tables with a chart of the Atlantic and a marked recovery area, 1961',
          year: 1961,
          characters: ['johnson'],
          mood: 'absolute, contained, immense',
          details: ['a chart with a small pencilled circle offshore', 'range tables', 'a mechanical calculator mid-figure', 'an ashtray somebody else filled', 'a clock reading past two'],
          alt: 'A chart of the Atlantic with a small pencilled circle offshore, surrounded by range tables.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'The problem is stated backwards, which is the only sensible way to state it. Here is where he must land. Now work back through the fall, the burn, the tilt of the Earth underneath him, to the second at which the thing must leave the ground.',
          },
          {
            id: 'method',
            narration:
              'It is the geometry of space, which she learned in a classroom built for one student, applied to a body falling out of the sky toward a moving planet. There is nothing in it she has not seen before. There is only more of it, and no margin.',
          },
          {
            id: 'launch',
            narration:
              'On the morning he goes up she is not looking at the sky. She is looking at a clock, because the whole of her contribution is compressed into the question of whether the ignition happens at the second her arithmetic said it should. It does. Fifteen minutes later he is in the water inside the circle.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'johnson.trajectoryFlown', value: true },
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
        ],
        historicalNote:
          'Johnson computed the trajectory and launch window for Alan Shepard’s 1961 Freedom 7 flight, America’s first crewed spaceflight, working the problem backwards from the intended splashdown. The bedside detail of the morning is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-card-shepard',
    characterId: 'johnson',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    replacesContextCardId: 'johnson-card-1961-shepard',
    variants: [
      {
        id: 'in-the-water',
        conditions: [
          { type: 'projectCompleted', projectId: 'johnson-freedom-7-trajectory' },
          { type: 'yearAtLeast', year: 1962 },
          { type: 'yearAtMost', year: 1963 },
        ],
        title: 'Fifteen Minutes and Twenty-Eight Seconds',
        yearLabel: '1961',
        image: {
          setting: 'an operations room emptying after a successful recovery, 1961',
          year: 1961,
          characters: ['johnson'],
          mood: 'released, exhausted, unsentimental',
          details: ['a chart with a circle and a fresh pencil cross inside it', 'cold coffee in paper cups', 'headsets down on a table', 'a window going bright'],
          alt: 'A chart with a pencilled circle offshore and a fresh cross marked inside it.',
        },
        pages: [
          {
            id: 'cross',
            narration:
              'Somebody marks the recovery position on the chart with a cross, and the cross lands inside the circle she drew weeks ago, and the room does the thing rooms do: a noise, and then a great deal of standing about not knowing what to do with the hands.',
          },
          {
            id: 'her',
            narration:
              'She looks at the distance between her circle and their cross and converts it, silently, into miles, because that is the only number she actually wants. It is a small number. She writes it down. Nobody asks her what she is writing.',
          },
          {
            id: 'after',
            narration:
              'The country will remember the man and the capsule and the fifteen minutes. That is correct; he is the one who went. But somebody had to say in advance where the ocean would be underneath him, and she is the one who said it, and she knows it, and that is sufficient.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1961-shepard' },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'Alan Shepard’s Freedom 7 suborbital flight in May 1961 lasted about fifteen minutes and splashed down close to the predicted point. Johnson’s trajectory work supported it. The operations-room detail is dramatized.',
      },
      {
        id: 'watched',
        conditions: [
          { type: 'yearAtLeast', year: 1962 },
          { type: 'yearAtMost', year: 1963 },
        ],
        title: 'The Flight She Watched Like Everybody Else',
        yearLabel: '1961',
        image: {
          setting: 'a room with a television set and a folded newspaper during a launch broadcast, 1961',
          year: 1961,
          characters: ['johnson'],
          mood: 'thrilled, removed, wistful',
          details: ['a television with a bright rounded screen', 'a newspaper with a launch diagram', 'a cup on a saucer', 'curtains half drawn against the morning'],
          alt: 'A brightly lit television screen in a curtained room beside a newspaper launch diagram.',
        },
        pages: [
          {
            id: 'watch',
            narration:
              'It goes up on a Friday morning and the whole country stops, and she stops with it, standing in front of a television with a cup going cold in her hand. Fifteen minutes. He is in the water almost before she has finished being frightened.',
          },
          {
            id: 'numbers',
            narration:
              'The announcer says the capsule landed within a few miles of the predicted point, and she thinks: somebody worked that out. Somebody sat with the tables and did it backwards from the ocean. She knows exactly how that is done and she has never been asked.',
          },
          {
            id: 'proud',
            narration:
              'She is proud anyway. It is possible to be proud of a country that has not made room for you; she has been managing it since she was ten. But she washes the cup rather harder than the cup requires.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1961-shepard' },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Shepard’s 1961 flight is documented. This variant belongs to a life in which Johnson was not the person who computed its trajectory.',
      },
    ],
  },
  {
    id: 'johnson-card-glenn',
    characterId: 'johnson',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 94 },
    once: true,
    replacesContextCardId: 'johnson-card-1962-glenn',
    variants: [
      {
        id: 'get-the-girl',
        conditions: [
          {
            any: [
              { type: 'projectCompleted', projectId: 'johnson-freedom-7-trajectory' },
              { type: 'choiceWas', choiceKey: 'johnson-crisis-opening:pressure', choiceId: 'check' },
            ],
          },
          { type: 'yearAtLeast', year: 1962 },
          { type: 'yearAtMost', year: 1963 },
        ],
        title: 'Get the Girl to Check the Numbers',
        yearLabel: '1962',
        image: {
          setting: 'a desk cleared for a long hand computation beside a printout from an electronic computer, 1962',
          year: 1962,
          characters: ['johnson'],
          mood: 'grave, focused, honoured',
          details: ['a continuous printout folded at the perforations', 'a desk calculator', 'sharpened pencils in a row', 'a flask and a sandwich untouched', 'a clock past midnight'],
          alt: 'A folded computer printout beside a desk calculator and a row of sharpened pencils.',
        },
        pages: [
          {
            id: 'request',
            narration:
              'The orbital flight is a different animal: three times round the world, and the numbers come from an electronic machine that nobody in the building entirely trusts, including the people who run it. The astronaut has read the room correctly.',
          },
          {
            id: 'asked',
            narration:
              'The request comes down through the engineers, and it is specific, and it names no title and no grade because he does not know either. It names a capability.',
            speaker: 'THE ASTRONAUT, RELAYED',
            dialogue: 'Get the girl to check the numbers. If she says the numbers are good, I am ready to go.',
          },
          {
            id: 'accepts',
            narration:
              'She is forty-three years old and has been a mathematician for twenty-five of them, and the word "girl" travels the length of the corridor to reach her. She notices it. She sets it down. Then she asks for the printout, and clears the desk, and begins.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1962-glenn' },
          { type: 'flag', flag: 'johnson.askedByName', value: true },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Before his 1962 orbital flight John Glenn asked engineers to have Johnson check the electronic computer’s figures by hand, saying words to the effect that if she said they were good, he was ready to go. The relayed wording here is the commonly recorded version; her private reaction is dramatized.',
      },
      {
        id: 'heard-about-it',
        conditions: [
          { type: 'yearAtLeast', year: 1962 },
          { type: 'yearAtMost', year: 1963 },
        ],
        title: 'The Request That Went Somewhere Else',
        yearLabel: '1962',
        image: {
          setting: 'a newspaper spread on a table reporting an orbital flight, 1962',
          year: 1962,
          characters: ['johnson'],
          mood: 'attentive, wry, unresigned',
          details: ['a newspaper opened wide', 'a photograph of a capsule on a deck', 'a pencil in the fold', 'a cup and saucer pushed aside'],
          alt: 'A newspaper opened wide on a table showing a photograph of a recovered capsule.',
        },
        pages: [
          {
            id: 'story',
            narration:
              'The story runs on the front and then, four days later, in a paragraph on an inside page: before he flew, the astronaut asked for the electronic machine’s figures to be checked over by hand, by a person, because he did not care to bet his life on a machine.',
          },
          {
            id: 'agrees',
            narration:
              'She reads the paragraph twice and finds that she agrees with him entirely, which is a strange thing to feel about a man in Ohio she has never met. A machine will give you an answer at any hour of the night and will never once be uneasy about it.',
          },
          {
            id: 'pencil',
            narration:
              'She folds the paper. Somewhere a person sat down with a pencil and did that check, and she hopes they did it twice, and she is fairly sure she could have done it in a day and a half.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'johnson-card-1962-glenn' },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Glenn’s request for a hand check before his 1962 orbital flight is documented. This variant belongs to a life in which the request did not reach Johnson.',
      },
    ],
  },
  {
    id: 'johnson-glenn-breakthrough',
    characterId: 'johnson',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'johnson-glenn-verification', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A Day and a Half by Hand',
        yearLabel: '1962',
        image: {
          setting: 'a desk at dawn after a night of hand computation, printout and worked sheets side by side, 1962',
          year: 1962,
          characters: ['johnson'],
          mood: 'spent, certain, quiet',
          details: ['worked sheets in a long row', 'a folded printout', 'a pencil worn to the metal', 'a window going grey with morning', 'a cold cup with a ring under it'],
          alt: 'Rows of hand-worked sheets beside a folded printout on a desk at first light.',
        },
        pages: [
          {
            id: 'begin',
            narration:
              'The machine produced these figures in minutes. To check them she must become the machine: the same equations, the same eleven-place accuracy, the same orbit round the same turning Earth, done by hand, in order, without once losing the thread.',
          },
          {
            id: 'night',
            narration:
              'It takes a day and a half. Somewhere in the second night she reaches the point where a small disagreement appears in a late decimal place and she has to decide whether it is the machine or herself, and she goes back and does that section again rather than assume.',
          },
          {
            id: 'good',
            narration:
              'By morning the two columns agree all the way down. She squares the sheets, puts the printout on top, and says the sentence a man three hundred miles away has been waiting for, and does not embellish it.',
            speaker: 'KATHERINE',
            dialogue: 'The numbers are good. Tell him he can go.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'johnson.verifiedTheOrbit', value: true },
          { type: 'resources', effects: { standing: 3, network: 1, exposure: 1 } },
        ],
        historicalNote:
          'Johnson spent about a day and a half hand-checking the electronic computer’s orbital calculations for Glenn’s 1962 flight, working to eleven decimal places, before confirming the figures. The wording of her confirmation is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-crisis-closing',
    characterId: 'johnson',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'both',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['johnson-freedom-7-trajectory', 'johnson-glenn-verification'],
            count: 2,
          },
        ],
        title: 'The Woman They Send For',
        yearLabel: '1963',
        image: {
          setting: 'a corridor of offices with a name newly stencilled on a door, about 1963',
          year: 1963,
          characters: ['johnson'],
          mood: 'established, sober, forward',
          details: ['a door with fresh lettering', 'a wire tray of mission tables', 'a coat on a hook', 'a corridor window onto a launch complex'],
          alt: 'An office door with newly stencilled lettering along a corridor of research offices.',
        },
        pages: [
          {
            id: 'known',
            narration:
              'Two flights have gone up on her arithmetic and both men are alive, and inside the buildings that matter she has stopped being the woman in the west unit and become the person you send for when the number has to be right.',
          },
          {
            id: 'cost',
            narration:
              'Outside those buildings nothing whatever has changed. The same country, the same signs on the same doors in the same towns. She carries both facts at once, without dropping either, which is a kind of arithmetic nobody has ever given her credit for.',
          },
        ],
        historicalNote:
          'By 1963 Johnson’s trajectory and verification work had made her a trusted figure within NASA. Segregation in American public life persisted until the civil rights legislation of the mid-1960s.',
      },
      {
        id: 'one',
        conditions: [{ type: 'projectCompleted', projectId: 'johnson-freedom-7-trajectory' }],
        title: 'One Flight, and the Next One Coming',
        yearLabel: '1963',
        image: {
          setting: 'a desk with a completed mission file and an unopened new one, about 1963',
          year: 1963,
          characters: ['johnson'],
          mood: 'steady, unfinished, capable',
          details: ['a closed mission folder', 'an unopened folder squared beside it', 'a sharpened pencil', 'a wall chart with one arc drawn'],
          alt: 'A closed mission folder beside an unopened one squared to the same edge on a desk.',
        },
        pages: [
          {
            id: 'file',
            narration:
              'One folder closed, one folder not yet opened, squared to the same edge of the desk because she cannot leave a row crooked. The flight she computed came down inside the circle. That is the whole of what she will claim.',
          },
          {
            id: 'next',
            narration:
              'The next problem is longer: three orbits instead of an arc, a machine producing the figures instead of a woman, and the question of who is willing to stand behind them. She has views on that question and expects to be asked eventually.',
          },
        ],
        historicalNote:
          'Johnson’s trajectory work supported the 1961 Freedom 7 flight; the orbital verification for Glenn followed in 1962.',
      },
      {
        id: 'default',
        title: 'What the Radio Said',
        yearLabel: '1963',
        image: {
          setting: 'a kitchen with a radio and a wall calendar in early 1963',
          year: 1963,
          characters: ['johnson'],
          mood: 'watchful, private, undiminished',
          details: ['a wall calendar with launch dates ringed', 'a radio on a shelf', 'a jar of pencils', 'a pad with dense working'],
          alt: 'A wall calendar with several dates ringed in pencil beside a kitchen radio.',
        },
        pages: [
          {
            id: 'calendar',
            narration:
              'The launch dates are ringed on the kitchen calendar in her handwriting, which is a thing she has never explained to anybody in the house. Two men have gone up and come back and she has followed both of them by radio, doing the arithmetic in parallel, alone, for nobody.',
          },
          {
            id: 'right',
            narration:
              'Both times her figures agreed with the announcements to within the accuracy the announcements were given in. She has no way to publish that and no wish to. She only wanted to know whether she still had it. She has.',
          },
        ],
        historicalNote:
          'A divergence from the documented life, in which Johnson computed the Freedom 7 trajectory and verified the orbital figures for Glenn’s flight.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Legacy, 1963-1970
  // -------------------------------------------------------------------------
  {
    id: 'johnson-legacy-opening',
    characterId: 'johnson',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'space-work',
        conditions: [
          {
            any: [
              { type: 'locationIs', locationId: 'capeCanaveral' },
              { type: 'locationIs', locationId: 'hamptonLangley' },
            ],
          },
        ],
        title: 'Now Do It to the Moon',
        yearLabel: '1963',
        image: {
          setting: 'an office wall covered with lunar trajectory sketches and a photograph of the Moon, mid-1960s',
          year: 1964,
          characters: ['johnson'],
          mood: 'expansive, sobering, methodical',
          details: ['a figure-of-eight sketched across a sheet', 'a photographic plate of the lunar surface', 'stacked ephemeris tables', 'a desk lamp on late', 'a slide rule in its case'],
          alt: 'A sheet pinned to a wall showing a looping trajectory sketch beside a photograph of the Moon.',
        },
        pages: [
          {
            id: 'brief',
            narration:
              'The problem on the wall is a figure of eight drawn between two moving bodies. Send men to the Moon; put one craft in orbit around it and drop another to the surface; then have the two find each other again, out there, with nobody to ask for directions.',
          },
          {
            id: 'scale',
            narration:
              'The arithmetic is the same arithmetic. It is simply that everything in it is now moving, including the destination, including the thing you are trying to get back to, and the tolerance for error has gone from miles to yards.',
          },
          {
            id: 'said',
            narration:
              'A young man who has just arrived asks her, with real anxiety, how anybody is supposed to be sure. It is the best question anybody has asked her in a decade.',
            speaker: 'A YOUNG ENGINEER',
            dialogue: 'What if the computer is wrong and we do not find out until they are already up there?',
          },
          {
            id: 'after',
            narration:
              'She is in her middle forties and has become, without applying for it, a person whose opinion changes what a room does. There are several things one can do with that.',
            choices: [
              {
                id: 'name',
                label: 'Put your name on the reports, every time',
                effects: [
                  { type: 'flag', flag: 'johnson.signsHerWork', value: true },
                  { type: 'resources', effects: { standing: 2, exposure: 1 } },
                ],
              },
              {
                id: 'teach',
                label: 'Teach the young ones coming in behind you',
                effects: [
                  { type: 'flag', flag: 'johnson.teachesTheNext', value: true },
                  { type: 'theme', theme: 'legacyVsWork', amount: 2 },
                  { type: 'resources', effects: { network: 2 } },
                ],
              },
              {
                id: 'numbers',
                label: 'Keep to the numbers; the rest is noise',
                effects: [
                  { type: 'flag', flag: 'johnson.keepsToTheNumbers', value: true },
                  { type: 'theme', theme: 'legacyVsWork', amount: -1 },
                  { type: 'resources', effects: { wellbeing: 1, health: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'From the mid-1960s Johnson worked on lunar trajectory and rendezvous problems for Apollo, including backup procedures. The young engineer and the dialogue are dramatized.',
      },
      {
        id: 'default',
        title: 'They Are Going to the Moon',
        yearLabel: '1963',
        image: {
          setting: 'a front room with a magazine diagram of a lunar mission spread open, mid-1960s',
          year: 1964,
          characters: ['johnson'],
          mood: 'absorbed, distant, alive',
          details: ['a magazine cutaway diagram', 'a pencil and a ruled pad', 'reading glasses folded on the arm of a chair', 'a lamp on in the afternoon'],
          alt: 'A magazine cutaway diagram of a lunar mission spread open beside a ruled pad and pencil.',
        },
        pages: [
          {
            id: 'diagram',
            narration:
              'The magazine has printed a cutaway of the whole plan: out to the Moon, one craft left in orbit, another down to the surface, and then the two of them finding each other again with a quarter of a million miles between them and home.',
          },
          {
            id: 'sums',
            narration:
              'She reads it the way other people read a mystery, working ahead of the text. The hard part is not the going. The hard part is the meeting. Two objects, both moving, both burning fuel they cannot replace, and one chance.',
          },
          {
            id: 'said',
            narration:
              'One of her daughters asks whether it will work, and she answers as she answers everything, which is by describing what would have to be true.',
            speaker: 'KATHERINE',
            dialogue: 'It will work if somebody has done the arithmetic backwards from the part where they come home. Forwards is how you get lost.',
          },
          {
            id: 'after',
            narration:
              'She is in her middle forties. There is a great deal of life left and she has never once been idle with any of it.',
            choices: [
              {
                id: 'name',
                label: 'Put your name on your work, wherever it appears',
                effects: [
                  { type: 'flag', flag: 'johnson.signsHerWork', value: true },
                  { type: 'resources', effects: { standing: 2, exposure: 1 } },
                ],
              },
              {
                id: 'teach',
                label: 'Teach the young ones coming up behind you',
                effects: [
                  { type: 'flag', flag: 'johnson.teachesTheNext', value: true },
                  { type: 'theme', theme: 'legacyVsWork', amount: 2 },
                  { type: 'resources', effects: { network: 2 } },
                ],
              },
              {
                id: 'numbers',
                label: 'Keep to the numbers; the rest is noise',
                effects: [
                  { type: 'flag', flag: 'johnson.keepsToTheNumbers', value: true },
                  { type: 'theme', theme: 'legacyVsWork', amount: -1 },
                  { type: 'resources', effects: { wellbeing: 1, health: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The Apollo lunar-orbit rendezvous plan was publicly reported through the 1960s. This variant belongs to a life outside the programme.',
      },
    ],
  },
  {
    id: 'johnson-apollo-breakthrough',
    characterId: 'johnson',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'johnson-apollo-rendezvous', priority: 88 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Meeting Above the Moon',
        yearLabel: '1969',
        image: {
          setting: 'a desk of lunar rendezvous calculations with a chart of two orbits intersecting, 1969',
          year: 1969,
          characters: ['johnson'],
          mood: 'concentrated, immense, calm',
          details: ['two orbital paths drawn crossing at one point', 'a stack of ephemeris tables', 'a mechanical calculator', 'a photograph of the lunar surface pinned above the desk'],
          alt: 'A chart showing two orbital paths crossing at a single marked point, surrounded by tables.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'Two craft, one above the Moon and one on it, and a single instant at which the lower must leave in order for the upper to be where it will be. Miss it and there is no second attempt, and no rescue, and nothing anyone at a desk can do about it afterwards.',
          },
          {
            id: 'backup',
            narration:
              'She also does the version nobody wants: what the crew does when the machines fail. Charts and procedures that let men navigate by the stars and a wristwatch, worked out in advance by somebody sitting still, so that they may never be needed.',
          },
          {
            id: 'pride',
            narration:
              'It is the work she is proudest of, and it is invisible by design. A backup that gets used is a disaster; a backup that does not is a filing cabinet. She would rather build the filing cabinet and be right.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'johnson.apolloBackup', value: true },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Johnson worked on lunar rendezvous calculations and on backup navigation procedures for Apollo, which she named among the work she was proudest of.',
      },
    ],
  },
  {
    id: 'johnson-lunar-return',
    characterId: 'johnson',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 88 },
    once: true,
    variants: [
      {
        id: 'backup-used',
        conditions: [
          { type: 'projectCompleted', projectId: 'johnson-apollo-rendezvous' },
          { type: 'yearAtLeast', year: 1969 },
          { type: 'yearAtMost', year: 1970 },
        ],
        title: 'The Filing Cabinet Opens',
        yearLabel: '1970',
        image: {
          setting: 'an operations room at night during a spacecraft emergency, charts spread open, 1970',
          year: 1970,
          characters: ['johnson'],
          mood: 'urgent, controlled, sleepless',
          details: ['a star chart opened flat', 'procedure cards fanned out', 'a telephone held against a shoulder', 'a clock reading the small hours', 'cold coffee in a paper cup'],
          alt: 'A star chart opened flat on a table with procedure cards fanned beside a telephone.',
        },
        pages: [
          {
            id: 'call',
            narration:
              'A craft on its way to the Moon loses the power to do its own thinking and there are three men inside it a very long way from the ocean. Somebody pulls out the procedures that were written for the day this happened.',
          },
          {
            id: 'stars',
            narration:
              'They navigate by taking sightings on stars, exactly as the charts describe, exactly as she worked it out at a desk years ago while the machines were still being trusted. Nothing in the folder is new. That is the entire point of a folder.',
          },
          {
            id: 'water',
            narration:
              'They come down in the Pacific. She hears it on the same kind of radio she has been hearing these things on since 1961, and she does not say anything to anybody, and she puts the kettle on.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 2, wellbeing: 1 } }],
        historicalNote:
          'Johnson’s backup navigation and return procedures contributed to the safe return of the Apollo 13 crew in 1970 after an in-flight failure. Her personal reaction is dramatized.',
      },
      {
        id: 'heard-it',
        conditions: [
          { type: 'yearAtLeast', year: 1969 },
          { type: 'yearAtMost', year: 1970 },
        ],
        title: 'Three Men and a Long Way Home',
        yearLabel: '1970',
        image: {
          setting: 'a kitchen radio left on through the night during a spaceflight emergency, 1970',
          year: 1970,
          characters: ['johnson'],
          mood: 'anxious, wakeful, praying',
          details: ['a radio left on all night', 'a chair drawn up to it', 'a pad with figures worked in the margin', 'a window dark until it is not'],
          alt: 'A kitchen radio with a chair drawn up to it and a pad of figures on the table beside it.',
        },
        pages: [
          {
            id: 'night',
            narration:
              'The radio stays on all night because a craft on the way to the Moon has lost the power to do its own thinking and there are three men inside it. She sits with a pad and does not so much calculate as keep her hands busy.',
          },
          {
            id: 'stars',
            narration:
              'The announcer says the crew are taking sightings on stars to steer by, which is the oldest navigation there is and the newest thing she has heard all year. Somebody, somewhere, wrote that procedure down in advance and put it in a folder.',
          },
          {
            id: 'water',
            narration:
              'They come down in the Pacific a little after dawn. She turns the radio off and stands in a quiet kitchen for a while, and then puts the kettle on, because there is a household to get moving.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote:
          'The Apollo 13 crew returned safely in 1970, navigating in part by star sightings under procedures prepared in advance. In the documented life Johnson helped produce those backup procedures.',
      },
    ],
  },
  {
    id: 'johnson-legacy-personal',
    characterId: 'johnson',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 70 },
    once: true,
    variants: [
      {
        id: 'full-house',
        conditions: [
          {
            any: [
              { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 },
              { type: 'choiceWas', choiceKey: 'johnson-legacy-opening:after', choiceId: 'teach' },
            ],
          },
          { type: 'yearAtLeast', year: 1965 },
          { type: 'yearAtMost', year: 1970 },
        ],
        title: 'Sunday, and the Alto Line',
        yearLabel: 'the late sixties',
        image: {
          setting: 'a church choir loft after a Sunday service, mid-1960s',
          year: 1967,
          characters: ['johnson'],
          mood: 'warm, communal, unhurried',
          details: ['hymnals stacked on a rail', 'robes over the backs of chairs', 'an upright piano with the lid open', 'sunlight through a coloured window'],
          alt: 'A church choir loft after a service, with robes over chairs and hymnals stacked on the rail.',
        },
        pages: [
          {
            id: 'choir',
            narration:
              'She has sung in this choir for years and has views about the alto line that she expresses with the same precision she brings to a trajectory. The tenors are flat again. The tenors are always flat.',
          },
          {
            id: 'ask',
            narration:
              'Nobody in this building asks her about rockets, which is exactly why she comes. Here she is a woman who can be relied on to bring a dish and hold a part, and that turns out to be a load-bearing kind of respect too.',
          },
          {
            id: 'home',
            narration:
              'At home there are daughters grown and coming back at weekends and a husband who does the crossword badly and out loud. She has a life on both sides of the laboratory gate. Very few people in that laboratory manage it.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1, network: 1 } }],
        historicalNote:
          'Johnson sang in and helped lead her church choir for decades and remarried in 1959. The domestic scene is dramatized.',
      },
      {
        id: 'worn',
        conditions: [
          { type: 'yearAtLeast', year: 1965 },
          { type: 'yearAtMost', year: 1970 },
        ],
        title: 'The Hours It Actually Takes',
        yearLabel: 'the late sixties',
        image: {
          setting: 'a kitchen table late at night with work brought home, mid-1960s',
          year: 1967,
          characters: ['johnson'],
          mood: 'tired, dogged, human',
          details: ['a folder of tables opened at the table', 'a plate pushed to one side', 'a clock past eleven', 'a coat still over the chair back'],
          alt: 'A folder of tables open on a kitchen table late at night beside a pushed-aside plate.',
        },
        pages: [
          {
            id: 'late',
            narration:
              'The folder comes home more often than it should and gets opened after the plates are cleared. It is not that anybody demands it. It is that a number left half-checked will keep her awake more effectively than the checking will.',
          },
          {
            id: 'cost',
            narration:
              'Her hands ache in the cold now, which is a new thing and an unwelcome one for a woman whose profession is a pencil. She has started doing the long computations in the morning and the reading at night, and has told nobody why.',
          },
          {
            id: 'still',
            narration:
              'On Sunday she sings, and does not think about any of it for two hours, and comes home and opens the folder again. It is a life with two halves and she is not willing to give up either one.',
          },
        ],
        effects: [{ type: 'resources', effects: { health: -1, wellbeing: 1 } }],
        historicalNote:
          'Johnson combined a demanding technical career with family life and long involvement in her church choir. The physical detail is dramatized.',
      },
    ],
  },
  {
    id: 'johnson-legacy-closing',
    characterId: 'johnson',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'apollo',
        conditions: [{ type: 'projectCompleted', projectId: 'johnson-apollo-rendezvous' }],
        title: 'Footprints and Arithmetic',
        yearLabel: '1969–1970',
        image: {
          setting: 'a desk with a photograph of the lunar surface and a stack of completed tables, 1969',
          year: 1969,
          characters: ['johnson'],
          mood: 'quiet, complete, unboastful',
          details: ['a photograph of the lunar surface', 'a completed stack of tables squared at the corners', 'a pencil laid parallel to the edge', 'a window at evening'],
          alt: 'A photograph of the lunar surface propped against a squared stack of completed tables.',
        },
        pages: [
          {
            id: 'watch',
            narration:
              'They land, and walk about, and come home. She watches it like everybody else, in a room with the lights off, and what she feels most sharply is not triumph. It is the specific relief of a person whose figures have just been tested by the universe and not found wanting.',
          },
          {
            id: 'return',
            narration:
              'The going was never the frightening part. The frightening part was always the return: a small craft leaving a rock to meet another small craft above it, on one attempt, on numbers somebody worked out years earlier at a desk. She worked out some of those numbers. That will do.',
          },
        ],
        historicalNote:
          'Johnson contributed trajectory, rendezvous and backup navigation work across the Apollo programme through the lunar landings.',
      },
      {
        id: 'default',
        title: 'Watching From the Room She Was Not In',
        yearLabel: '1969–1970',
        image: {
          setting: 'a darkened front room with a television showing a lunar broadcast, 1969',
          year: 1969,
          characters: ['johnson'],
          mood: 'moved, distant, unregretful',
          details: ['a grey television image in a dark room', 'a pad on a lap', 'a lamp switched off', 'a window with the curtains open to the night'],
          alt: 'A darkened room lit only by a television showing a grey lunar broadcast.',
        },
        pages: [
          {
            id: 'watch',
            narration:
              'The pictures are grey and jumping and it is the middle of the night and she is not going to bed. Men are walking about on the Moon, which she has been able to see from her own porch her whole life without once believing anybody would go and stand on it.',
          },
          {
            id: 'sum',
            narration:
              'On the pad in her lap is a rough calculation of the return, done for no reason at all except that she wanted to know, and it agrees with the announcer to the accuracy the announcer is speaking to. She was never in that room. She would have been good in it.',
          },
        ],
        historicalNote:
          'A divergence from the documented life, in which Johnson worked on Apollo trajectory and rendezvous calculations.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Epilogue
  // -------------------------------------------------------------------------
  {
    id: 'johnson-epilogue',
    characterId: 'johnson',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'named-and-known',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'johnson-analytic-geometry',
              'johnson-integrating-wvu',
              'johnson-west-computing',
              'johnson-freedom-7-trajectory',
              'johnson-glenn-verification',
              'johnson-apollo-rendezvous',
            ],
            count: 4,
          },
          { type: 'narrativeFlag', flag: 'johnson.askedForTheRoom' },
        ],
        title: 'The Name on the Building',
        yearLabel: 'after 1970',
        image: {
          setting: 'a computing research building with a dedication plaque, twenty-first century',
          year: 2017,
          characters: ['johnson'],
          mood: 'expansive, vindicated, gentle',
          details: ['a modern research building at dusk', 'a bronze dedication plaque', 'schoolchildren at a glass door', 'a lit atrium'],
          alt: 'A modern research building at dusk with a bronze dedication plaque beside the entrance.',
        },
        pages: [
          {
            id: 'later',
            narration:
              'She works until she is sixty-eight and then stops, and the work goes on without her the way it is supposed to. The reports stay in the files. The procedures stay in the folders. Nobody outside the buildings knows her name for another thirty years.',
          },
          {
            id: 'medal',
            narration:
              'Then, late, the country catches up. A medal at the White House. A building at the laboratory with her name cut into the front of it, and inside it, machines doing in a second what once took her a day and a half, and every one of them checked by somebody.',
          },
          {
            id: 'children',
            narration:
              'Schoolchildren are brought through in groups and told that a woman who was not allowed to eat at the same table calculated the way to the Moon. They ask her what the hardest part was. She is nearly a hundred and she does not hesitate.',
            speaker: 'KATHERINE',
            dialogue: 'Getting into the room. The arithmetic was never the hard part. The arithmetic was the part I was good at.',
          },
        ],
        historicalNote:
          'Johnson retired from NASA in 1986, received the Presidential Medal of Freedom in 2015, had a NASA computational research facility named for her, and died in 2020 at 101. Her closing line is dramatized in her known idiom.',
      },
      {
        id: 'full-career',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'johnson-analytic-geometry',
              'johnson-integrating-wvu',
              'johnson-west-computing',
              'johnson-freedom-7-trajectory',
              'johnson-glenn-verification',
              'johnson-apollo-rendezvous',
            ],
            count: 3,
          },
        ],
        title: 'Checked by Hand',
        yearLabel: 'after 1970',
        image: {
          setting: 'a shelf of bound technical reports in a research library, later twentieth century',
          year: 1990,
          characters: ['johnson'],
          mood: 'durable, quiet, continuing',
          details: ['bound report volumes in a row', 'a call-number label', 'a reading lamp on a long table', 'a window at the end of the stacks'],
          alt: 'A row of bound technical reports on a library shelf beside a lit reading table.',
        },
        pages: [
          {
            id: 'reports',
            narration:
              'The reports go on the shelf and stay there, which is what reports are for. Two dozen of them over the years, and the mathematics inside is not hers in any possessive sense; it is only correct, and correct things get used by strangers.',
          },
          {
            id: 'machines',
            narration:
              'The machines get faster every year until nobody would dream of doing by hand what she did by hand. But the habit she insisted on outlives the pencil: somebody verifies. Somebody who can be held responsible looks at the answer and says whether it is good.',
          },
          {
            id: 'voice',
            narration:
              'Asked, late in a very long life, what she would want said about the work, she gives an answer that disappoints people hoping for something grander.',
            speaker: 'KATHERINE',
            dialogue: 'That the numbers were right. That is what they hired me for and that is what they got.',
          },
        ],
        historicalNote:
          'Johnson co-authored or authored more than twenty technical reports over her NASA career and consistently described her contribution in terms of accuracy rather than acclaim. The closing line is dramatized.',
      },
      {
        id: 'one-flight',
        conditions: [{ type: 'projectCompleted', projectId: 'johnson-glenn-verification' }],
        title: 'A Day and a Half, and the Rest of the Century',
        yearLabel: 'after 1970',
        image: {
          setting: 'a desk drawer of kept papers opened many years later, later twentieth century',
          year: 1985,
          characters: ['johnson'],
          mood: 'private, settled, warm',
          details: ['a drawer of kept papers', 'a folded printout gone yellow', 'a class register', 'a newspaper clipping soft at the folds'],
          alt: 'An opened desk drawer holding a yellowed printout, a register, and a soft newspaper clipping.',
        },
        pages: [
          {
            id: 'drawer',
            narration:
              'The drawer is still there and still full: the register, the clipping about a graduate school, a printout gone yellow at the folds with a column of her own figures beside it agreeing all the way down.',
          },
          {
            id: 'one',
            narration:
              'Of everything she did, the one the world eventually fixes on is that day and a half. She thinks that is a slightly odd choice — it was not the hardest thing she ever solved — but she understands why. It is the one where a man’s life was set against her arithmetic and her arithmetic held.',
          },
          {
            id: 'voice',
            speaker: 'KATHERINE',
            dialogue: 'They wanted to know if the machine was right. Somebody had to be able to say so. I could say so.',
            narration: 'She says it without any particular emphasis, in the manner of a woman reporting a measurement.',
          },
        ],
        historicalNote:
          'Johnson’s hand verification of the orbital figures before Glenn’s 1962 flight became the best-known episode of her career. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Long Arithmetic',
        yearLabel: 'after 1970',
        image: {
          setting: 'a schoolroom cupboard and a shelf of filled notebooks at the end of a career, later twentieth century',
          year: 1980,
          characters: ['johnson'],
          mood: 'quiet, undiminished, unrecorded',
          details: ['a shelf of dated notebooks', 'a class photograph', 'chalk boxed and squared', 'afternoon light across an empty room'],
          alt: 'A shelf of dated notebooks beside a class photograph in an empty schoolroom.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The notebooks are dated on the spine and there are a great many of them. Inside are thirty years of problems nobody set: orbits, ranges, the angle at which a thing leaving the atmosphere would pass over a chosen town, all correct, all unread.',
          },
          {
            id: 'children',
            narration:
              'And there are the other numbers, the ones that do not go in a notebook: how many children learned to do long division in her room, how many of them believed for the first time that they could. She has never been able to work that total exactly and it has never stopped her trying.',
          },
          {
            id: 'voice',
            speaker: 'KATHERINE',
            dialogue: 'I counted everything. It was never wasted. Somebody has to know what the answer is, even if nobody comes to ask.',
            narration: 'She says it to a room with the chairs already up on the desks, in the manner of a woman closing a ledger she has kept honestly.',
          },
        ],
        historicalNote:
          'This ending belongs to a life that never reached Langley. In the documented life Johnson joined NACA in 1953 and worked on American spaceflight until 1986. Her lifelong habit of counting everything is well attested.',
      },
    ],
  },
];
