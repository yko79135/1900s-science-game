import type { StoryScene } from '../../types/story';

const sourceIds = ['curie'];

/** Board context cards told in full by scenes in this file. */
export const CURIE_REPLACED_CONTEXT_CARDS: string[] = [
  'curie-card-1891',
  'curie-card-1903',
  'curie-card-1906',
  'curie-card-1911',
  'curie-card-1914-war',
];

export const CURIE_STORY_SCENES: StoryScene[] = [
  // -------------------------------------------------------------------------
  // Prologue
  // -------------------------------------------------------------------------
  {
    id: 'curie-prologue-warsaw',
    characterId: 'curie',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A City That Is Not Allowed to Say Its Own Name',
        locationLabel: 'Warsaw',
        yearLabel: '1867',
        image: {
          setting: 'a Warsaw street of tall grey apartment houses under Russian administration in the 1860s',
          year: 1867,
          characters: ['curie'],
          mood: 'cold, watchful, quietly stubborn',
          details: ['Cyrillic street signs', 'a schoolmaster’s brass-locked instrument case', 'a coal stove', 'snow on iron railings'],
          alt: 'A restrained illustration of a grey Warsaw street in winter with Russian-language signs.',
        },
        pages: [
          {
            id: 'city',
            narration:
              'The street signs in Warsaw are in Russian and so are the inspectors. In the schools a teacher can lose a post for the wrong word in the wrong language, so children learn very early to say one thing when the door opens and another when it shuts. Into this city, in November, a fifth child is born to a schoolmaster and a headmistress.',
          },
          {
            id: 'cabinet',
            narration:
              'Her father teaches physics. When the authorities strip laboratory work out of the schools, the instruments come home and stand in a case with a brass lock: an electroscope, a barometer, glass tubes in a rack. The children are told not to touch them. Manya learns the name of every object behind the glass long before she is allowed to hold one.',
          },
          {
            id: 'losses',
            narration:
              'By the time she is eleven there have been two funerals in the family and the apartment has been let to boarders to pay for coal. She is first in her class in everything there is to be first in. There is no university in this city that will take her.',
            speaker: 'HER FATHER',
            dialogue: 'Learn it anyway, Manya. They can close a school. They cannot search a head.',
          },
        ],
        historicalNote:
          'Marie Skłodowska’s father taught physics and mathematics and kept school apparatus at home after Russian authorities curtailed laboratory instruction; the deaths in her immediate family and the family’s boarders are documented. The spoken line is dramatized wording, not a quotation.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Formation, 1867–1891
  // -------------------------------------------------------------------------
  {
    id: 'curie-formation-opening',
    characterId: 'curie',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Gold Medal and the Closed Door',
        locationLabel: 'Warsaw',
        yearLabel: '1883–1886',
        image: {
          setting: 'a borrowed back room in Warsaw used for clandestine evening classes',
          year: 1885,
          characters: ['curie'],
          mood: 'secretive, hungry, exact',
          details: ['an oil lamp', 'a borrowed chemistry text', 'chairs carried in from another room', 'a shuttered window'],
          alt: 'Young Marie Skłodowska studying by lamplight in a crowded borrowed room in Warsaw.',
        },
        pages: [
          {
            id: 'medal',
            narration:
              'The medal is gold and weighs almost nothing. She is sixteen, first in her year, and the ceremony is conducted in Russian. Four streets away the university stands with its doors open to every man in the city and to none of the women.',
          },
          {
            id: 'flying',
            narration:
              'The classes that will have her meet wherever they can — a back room, a borrowed apartment, a new address each week so that nothing can be raided twice. Chemistry from a shared book. Anatomy from a medical student barely older than she is.',
            speaker: 'BRONYA',
            dialogue: 'Paris asks nobody for permission. Paris only asks for money.',
          },
          {
            id: 'arithmetic',
            narration:
              'Marie does the sums on the back of an envelope, which is what she does with every problem that frightens her. A governess earns a few hundred roubles a year. Paris costs thousands of francs before a single lecture is attended. Two sisters, one purse: whichever goes first, the other waits years.',
          },
          {
            id: 'pact',
            narration: 'The envelope has two columns on it and one line still blank.',
            choices: [
              {
                id: 'bronya-first',
                label: 'Send Bronya first and earn her fare, year by year',
                effects: [
                  { type: 'flag', flag: 'curie.pactWithBronya', value: true },
                  { type: 'theme', theme: 'dutyVsAmbition', amount: 2 },
                  { type: 'resources', effects: { funds: -1, network: 1 } },
                ],
              },
              {
                id: 'myself-first',
                label: 'Keep the wages; buy her own ticket sooner',
                effects: [
                  { type: 'flag', flag: 'curie.wentAlone', value: true },
                  { type: 'theme', theme: 'independence', amount: 2 },
                  { type: 'resources', effects: { funds: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'books-first',
                label: 'Give the free evenings to the secret classes',
                effects: [
                  { type: 'flag', flag: 'curie.flyingUniversity', value: true },
                  { type: 'theme', theme: 'independence', amount: 1 },
                  { type: 'resources', effects: { network: 1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Skłodowska graduated first in her class with a gold medal, attended the clandestine "Flying University," and made an arrangement with her sister Bronisława by which each supported the other’s Paris studies in turn. The choice dramatizes a decision the record shows her making; the dialogue is invented wording.',
      },
    ],
  },
  {
    id: 'curie-governess-winters',
    characterId: 'curie',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'lean',
        conditions: [
          { type: 'yearAtLeast', year: 1885 },
          { not: { type: 'resourceAtLeast', resource: 'funds', value: 3 } },
        ],
        title: 'Snow on Somebody Else’s Windows',
        locationLabel: 'a country house north of Warsaw',
        yearLabel: '1886–1889',
        image: {
          setting: 'a provincial Polish country house in deep winter, seen from a governess’s upstairs room',
          year: 1887,
          characters: ['curie'],
          mood: 'cold, patient, far from everything',
          details: ['a lamp with a low wick', 'ruled exercise books', 'a frozen window pane', 'a folded railway timetable'],
          alt: 'A young governess reading by lamplight in an upstairs room of a snowbound country house.',
        },
        pages: [
          {
            id: 'house',
            narration:
              'The house is hours from Warsaw and the road is frozen from November. She wakes the children, teaches French until noon, and after supper teaches the estate’s own children to read Polish, which is not permitted and is therefore done in the kitchen with the door shut.',
          },
          {
            id: 'count',
            narration: 'She keeps the total in the back of a notebook, next to the chemistry.',
            speaker: 'MARIE',
            dialogue: 'Three more winters. I have counted them. Three is not so many.',
          },
          {
            id: 'lamp',
            narration:
              'At night she reads physics she does not entirely understand yet, in a language she is still learning, by a lamp she pays for out of her own wages. The envelope goes out on the first of the month. Her own arithmetic stays in the margin.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.governessYears', value: true },
          { type: 'resources', effects: { funds: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Skłodowska worked several years as a governess in the Polish countryside and taught local children to read Polish in defiance of Russian restrictions. The wording and the counted winters are dramatized.',
      },
      {
        id: 'steady',
        conditions: [{ type: 'yearAtLeast', year: 1885 }],
        title: 'Wages, and What They Are For',
        locationLabel: 'Warsaw and the country',
        yearLabel: '1886–1889',
        image: {
          setting: 'a modest Warsaw room with a desk, a ledger, and a small shelf of borrowed books',
          year: 1888,
          characters: ['curie'],
          mood: 'orderly, contained, forward-looking',
          details: ['a ledger', 'a stack of borrowed books', 'a tea glass', 'a sealed envelope'],
          alt: 'A young woman balancing a small ledger beside a shelf of borrowed books.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'The teaching pays, and paid work is a kind of quiet. She keeps a ledger the way other people keep a diary: dates, sums, what remains. What remains grows slowly and it grows.',
            speaker: 'MARIE',
            dialogue: 'It is not a sacrifice if you have written down the date it ends.',
          },
          {
            id: 'books',
            narration:
              'Between lessons she works through the mathematics twice — once to follow it and once to see whether she could have found it herself. She is beginning to suspect she could.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.governessYears', value: true },
          { type: 'resources', effects: { funds: 1 } },
        ],
        historicalNote:
          'The tutoring and governess income that funded her sister’s Paris studies and eventually her own is documented. The ledger and the dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'curie-museum-laboratory',
    characterId: 'curie',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 56 },
    once: true,
    variants: [
      {
        id: 'warsaw-bench',
        conditions: [
          { type: 'yearAtLeast', year: 1889 },
          { type: 'locationIs', locationId: 'warsaw' },
        ],
        title: 'Sunday Evenings at the Bench',
        locationLabel: 'Warsaw',
        yearLabel: '1890',
        image: {
          setting: 'a small teaching laboratory in a Warsaw institute on a Sunday evening, empty of students',
          year: 1890,
          characters: ['curie'],
          mood: 'private elation, chipped enamel, first competence',
          details: ['a scarred wooden bench', 'old reagent bottles', 'a brass balance', 'a stub of candle'],
          alt: 'A young woman alone at a scarred laboratory bench in the evening, weighing something on a small balance.',
        },
        pages: [
          {
            id: 'first',
            narration:
              'A relative runs a laboratory of sorts in a museum of industry on one of the wide streets, and on Sunday evenings, when it is empty, she is let in. The bench is chipped, the reagents are old, and nothing she tries on the first evening works.',
          },
          {
            id: 'again',
            narration:
              'She writes down what failed, in order, with the times. She comes back. By spring she can produce the result the book promised, and then produce it again, which is the part the book never mentions.',
            speaker: 'MARIE',
            dialogue: 'Forty times, and the fortieth is the one that counts. I do not mind the thirty-nine.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.firstBench', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Skłodowska received her first practical laboratory training in Warsaw at a museum of industry and agriculture before leaving for Paris. The detail of the Sunday evenings and the dialogue are dramatized.',
      },
      {
        id: 'anywhere',
        conditions: [{ type: 'yearAtLeast', year: 1889 }],
        title: 'The Fortieth Attempt',
        yearLabel: '1890',
        image: {
          setting: 'a plain nineteenth-century room converted for chemistry, late in the evening',
          year: 1890,
          characters: ['curie'],
          mood: 'quiet obstinacy',
          details: ['glass flasks', 'a hand-written procedure', 'an oil lamp', 'a small brass balance'],
          alt: 'A young woman repeating a chemical procedure alone by lamplight.',
        },
        pages: [
          {
            id: 'repeat',
            narration:
              'Wherever the bench is, the lesson is the same one. A procedure fails, and fails, and then does not. She discovers something about herself before she discovers anything about matter: her hands are steady, and repetition does not bore her.',
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.firstBench', value: true }],
        historicalNote: 'A dramatized composite of her first practical laboratory training.',
      },
    ],
  },
  {
    id: 'curie-formation-closing',
    characterId: 'curie',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'bound-for-paris',
        conditions: [{ type: 'resourceAtLeast', resource: 'funds', value: 3 }],
        title: 'A Trunk, a Stool, a Timetable',
        locationLabel: 'Warsaw',
        yearLabel: '1891',
        image: {
          setting: 'a Warsaw railway platform at dawn with a small trunk and a folding stool',
          year: 1891,
          characters: ['curie'],
          mood: 'departure, thrift, nerve',
          details: ['a small corded trunk', 'a folding wooden stool', 'a tin of tea', 'steam along the platform'],
          alt: 'A young woman on a railway platform at dawn beside a small trunk and a folding stool.',
        },
        pages: [
          {
            id: 'packing',
            narration:
              'The trunk is small because the fare is by weight. Blankets, one change of clothes, a tin of tea, and a folding stool, because the cheap carriage has no seats and the journey is three days.',
          },
          {
            id: 'leaving',
            narration:
              'Her father stands at the barrier with his hat in his hands. She has done the arithmetic on this too, and knows what it costs him, and gets on the train.',
          },
        ],
        historicalNote:
          'Skłodowska travelled to Paris in 1891 in the cheapest class, carrying her own food and a folding seat. The dialogue-free framing is dramatized around documented details.',
      },
      {
        id: 'default',
        title: 'The Trunk in the Corner',
        locationLabel: 'Warsaw',
        yearLabel: '1891',
        image: {
          setting: 'a rented Warsaw room with an empty trunk standing against the wall',
          year: 1891,
          characters: ['curie'],
          mood: 'held breath, deferral',
          details: ['an empty corded trunk', 'a folded railway timetable', 'a ledger', 'a cold stove'],
          alt: 'An empty trunk standing against the wall of a modest rented room.',
        },
        pages: [
          {
            id: 'sum',
            narration:
              'The trunk stands in the corner with nothing in it. Each month the envelope goes out and the sum in the back of the notebook rises by a little less than she planned for.',
          },
          {
            id: 'room',
            narration:
              'She is twenty-three, then twenty-four. Warsaw is not a small city. It has simply become a small room, and she has memorised the walls.',
          },
        ],
        historicalNote:
          'A divergent closing for a life that has not yet raised the fare for Paris. The years of delay before her departure are documented; this variant extends them.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Education, 1891–1895
  // -------------------------------------------------------------------------
  {
    id: 'curie-education-opening',
    characterId: 'curie',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'sorbonne',
        conditions: [{ type: 'locationIs', locationId: 'paris' }],
        title: 'Marie, in the Register',
        locationLabel: 'Paris',
        yearLabel: '1891',
        image: {
          setting: 'a crowded tiered lecture hall at the Sorbonne in the early 1890s',
          year: 1891,
          characters: ['curie'],
          mood: 'conspicuous, exhilarated, underfed',
          details: ['tiered wooden benches', 'a chalked blackboard', 'a registration ledger', 'winter coats kept on indoors'],
          alt: 'A tiered lecture hall of coated students with one young woman seated near the front.',
        },
        pages: [
          {
            id: 'register',
            narration:
              'She writes her name in the register as Marie, because the clerk cannot manage the other one and because an argument on the first morning would cost time she does not have.',
          },
          {
            id: 'hall',
            narration:
              'The hall holds a few hundred. She can count the women in it without turning her head. Her French is good enough for conversation and not yet good enough for a lecture on mechanics delivered at speed, so she copies everything and translates it at night.',
            speaker: 'BRONYA',
            dialogue: 'You may live with us. It is an hour each way, and there is soup.',
          },
          {
            id: 'refusal',
            narration:
              'An hour each way is two hours a day. She works it out on the back of the tram ticket and decides that soup is expensive.',
          },
          {
            id: 'francs',
            narration: 'What the next four years will be made of comes down to a small monthly sum.',
            choices: [
              {
                id: 'study-only',
                label: 'Live on bread and tea; give every hour to the lectures',
                effects: [
                  { type: 'flag', flag: 'curie.austerity', value: true },
                  { type: 'theme', theme: 'singleMindedness', amount: 2 },
                  { type: 'resources', effects: { funds: -1, wellbeing: -1 } },
                ],
              },
              {
                id: 'tutor',
                label: 'Take paid tutoring to keep the room warm',
                effects: [
                  { type: 'flag', flag: 'curie.tutoring', value: true },
                  { type: 'theme', theme: 'prudence', amount: 2 },
                  { type: 'resources', effects: { funds: 1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.inParis', value: true }],
        historicalNote:
          'Skłodowska enrolled at the Sorbonne under the name Marie, lived apart from her sister’s household in order to be near the lectures, and studied in considerable poverty. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Prospectus',
        yearLabel: '1891',
        image: {
          setting: 'a modest room with a foreign university prospectus open on the table',
          year: 1891,
          characters: ['curie'],
          mood: 'appetite at a distance',
          details: ['a printed prospectus', 'a French dictionary', 'a cold cup of tea', 'a ledger'],
          alt: 'A university prospectus and a French dictionary open on a plain table.',
        },
        pages: [
          {
            id: 'paper',
            narration:
              'The prospectus comes by post and is read until it is soft at the folds. Mechanics, analysis, experimental physics; the names of professors she has read and never seen. It is four hundred pages of somebody else’s year.',
          },
          {
            id: 'french',
            narration:
              'She learns the French anyway, out of a dictionary, in the evenings. A vocabulary is a thing nobody can confiscate at a border.',
            speaker: 'MARIE',
            dialogue: 'When I get there I will not lose a single week to the language. That is one week saved already.',
          },
          {
            id: 'francs',
            narration: 'What the next four years will be made of comes down to a small monthly sum.',
            choices: [
              {
                id: 'study-only',
                label: 'Live on bread and tea; give every hour to the books',
                effects: [
                  { type: 'flag', flag: 'curie.austerity', value: true },
                  { type: 'theme', theme: 'singleMindedness', amount: 2 },
                  { type: 'resources', effects: { funds: -1, wellbeing: -1 } },
                ],
              },
              {
                id: 'tutor',
                label: 'Take paid tutoring to keep the room warm',
                effects: [
                  { type: 'flag', flag: 'curie.tutoring', value: true },
                  { type: 'theme', theme: 'prudence', amount: 2 },
                  { type: 'resources', effects: { funds: 1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A divergent opening for a life still short of the fare to Paris. Her self-taught French and her long preparation for the Sorbonne are documented; the prospectus is dramatized.',
      },
    ],
  },
  {
    id: 'curie-leaving-warsaw',
    characterId: 'curie',
    chapterId: 'education',
    kind: 'relocation',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'curie-card-1891',
    trigger: { event: 'afterAction', priority: 88 },
    once: true,
    variants: [
      {
        id: 'arrived-on-the-pact',
        conditions: [
          { type: 'yearAtLeast', year: 1891 },
          { type: 'locationIs', locationId: 'paris' },
          { type: 'choiceWas', choiceKey: 'curie-formation-opening:pact', choiceId: 'bronya-first' },
        ],
        title: 'The Debt, Collected',
        locationLabel: 'Paris',
        yearLabel: '1891',
        image: {
          setting: 'a narrow Paris stairwell and a doorway on a winter afternoon in the early 1890s',
          year: 1891,
          characters: ['curie'],
          mood: 'arrival, relief, immediate impatience',
          details: ['a corded trunk on a landing', 'gas jets on the stair', 'a doctor’s brass plate', 'wet boots'],
          alt: 'A corded trunk on a narrow Paris stair landing outside a doorway with a brass plate.',
        },
        pages: [
          {
            id: 'door',
            narration:
              'Six years of envelopes end at a doorway with her sister’s new brass plate on it. Bronya is a doctor now; the arrangement has held on both sides, which is rarer than either of them says aloud.',
          },
          {
            id: 'terms',
            narration:
              'They embrace, and then Marie asks about tram routes and lecture hours, because the debt is settled and the clock is not.',
            speaker: 'BRONYA',
            dialogue: 'You have been here four minutes and you have already asked me about the timetable.',
          },
          {
            id: 'room',
            narration:
              'Within the season she has moved to a room of her own nearer the lecture halls. It is smaller, colder and closer, and closer is the only word in that sentence she cares about.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1891' },
          { type: 'flag', flag: 'curie.inParis', value: true },
          { type: 'resources', effects: { funds: -1, network: 1 } },
        ],
        historicalNote:
          'Skłodowska funded her sister Bronisława’s medical studies in Paris and was in turn supported by her on arrival in 1891, before moving into her own lodgings nearer the Sorbonne. The dialogue is dramatized.',
      },
      {
        id: 'arrived',
        conditions: [
          { type: 'yearAtLeast', year: 1891 },
          { type: 'locationIs', locationId: 'paris' },
        ],
        title: 'Three Days in the Cheap Carriage',
        locationLabel: 'Paris',
        yearLabel: '1891',
        image: {
          setting: 'a Paris railway terminus in winter, crowds and steam under an iron roof',
          year: 1891,
          characters: ['curie'],
          mood: 'exhaustion and appetite together',
          details: ['an iron train shed', 'a folding stool under one arm', 'a corded trunk', 'porters and steam'],
          alt: 'A young woman arriving under an iron train shed with a trunk and a folding stool.',
        },
        pages: [
          {
            id: 'journey',
            narration:
              'Three days sitting on a folding stool in a carriage with no seats, through a border where the language changes and an official reads her papers twice. She eats what she brought. She arrives with the stool still under her arm.',
          },
          {
            id: 'city',
            narration:
              'Paris is louder than she expected and no warmer. The city does not notice her at all, which after Warsaw is not an insult. It is a kind of permission.',
            speaker: 'MARIE',
            dialogue: 'Nobody here has asked me what I am allowed to study. I intend to keep it that way.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1891' },
          { type: 'flag', flag: 'curie.inParis', value: true },
          { type: 'resources', effects: { funds: -1 } },
        ],
        historicalNote:
          'The 1891 journey to Paris in fourth class with her own provisions and seat is documented. The dialogue is dramatized wording.',
      },
      {
        id: 'not-yet',
        conditions: [{ type: 'yearAtLeast', year: 1893 }],
        title: 'The Ticket Not Bought',
        yearLabel: '1891',
        image: {
          setting: 'a rented room with a folded railway timetable weighted under a book',
          year: 1892,
          characters: ['curie'],
          mood: 'deferral, unfinished arithmetic',
          details: ['a folded timetable', 'a corded trunk unopened', 'a ledger', 'a window with frost at the corners'],
          alt: 'A folded railway timetable weighted under a book beside an unopened trunk.',
        },
        pages: [
          {
            id: 'timetable',
            narration:
              'The timetable is folded into the back of a chemistry book and consulted more often than the chemistry. Departures at seven and at midnight; three days; a sum she does not yet have.',
          },
          {
            id: 'wait',
            narration:
              'Letters come from Paris describing lecture halls she can see perfectly well without having entered them. She answers every one, and asks for the reading lists, and works through them where she is.',
            speaker: 'MARIE',
            dialogue: 'Send me what they set. I would rather arrive late than arrive ignorant.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1891' },
          { type: 'flag', flag: 'curie.departureDeferred', value: true },
        ],
        historicalNote:
          'A divergent telling of the 1891 departure for a life that has not yet made the journey. Her years of delayed emigration and self-directed study are documented; the deferral here is dramatized.',
      },
    ],
  },
  {
    id: 'curie-latin-quarter-winter',
    characterId: 'curie',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 64 },
    once: true,
    variants: [
      {
        id: 'austere',
        conditions: [
          { type: 'yearAtLeast', year: 1892 },
          { type: 'locationIs', locationId: 'paris' },
          { type: 'choiceWas', choiceKey: 'curie-education-opening:francs', choiceId: 'study-only' },
        ],
        title: 'Ice on the Inside of the Glass',
        locationLabel: 'Paris',
        yearLabel: '1892–1894',
        image: {
          setting: 'a sixth-floor garret room in Paris in winter with frost inside the window',
          year: 1893,
          characters: ['curie'],
          mood: 'cold, luminous, self-imposed',
          details: ['frost on the inside of a pane', 'a single sack of coal', 'books stacked on the bed for warmth', 'a spirit lamp'],
          alt: 'A bare garret room with frost inside the window and books stacked on the bed.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'Sixth floor, one window, no stove worth the name. She carries the coal up herself when there is coal. On the coldest nights she piles everything she owns on the bed, including the books, and calculates that the books are the best of it.',
          },
          {
            id: 'faint',
            narration:
              'One afternoon the hall tilts and she sits down on the stairs until it stops. She has been eating bread and tea for eleven days and has not noticed, because she has been noticing something else.',
            speaker: 'BRONYA',
            dialogue: 'You will faint in a lecture hall, and they will not say you were hungry. They will say you were a woman.',
          },
          {
            id: 'answer',
            narration:
              'So she eats, for a week, under supervision, and returns to the garret. The lecture notes from those weeks are the neatest she will ever write.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.garretWinter', value: true },
          { type: 'resources', effects: { health: -1, wellbeing: -1 } },
        ],
        historicalNote:
          'Skłodowska lived in an unheated attic room in the Latin Quarter on very little food while studying, and her sister intervened over her health. The dialogue is dramatized.',
      },
      {
        id: 'warmer',
        conditions: [{ type: 'yearAtLeast', year: 1893 }],
        title: 'Paid Hours, Borrowed Hours',
        yearLabel: '1892–1894',
        image: {
          setting: 'a small student room with a desk, a stove, and a pupil’s exercise books',
          year: 1893,
          characters: ['curie'],
          mood: 'thin margins, workable',
          details: ['a small iron stove', 'a pupil’s exercise book', 'a tram ticket used as a bookmark', 'a lamp'],
          alt: 'A small student room with a lit stove, a lamp, and exercise books stacked on a desk.',
        },
        pages: [
          {
            id: 'hours',
            narration:
              'Four hours a week teaching somebody else’s daughter arithmetic buys coal, and coal buys the hours after midnight. She resents the four and would not give them up.',
            speaker: 'MARIE',
            dialogue: 'It is a bad exchange rate. It is still an exchange rate.',
          },
          {
            id: 'nights',
            narration:
              'The room stays just warm enough that her hand does not shake on the page. That is the whole specification. Everything else in the room is a means to it.',
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.garretWinter', value: true }],
        historicalNote:
          'She supported herself partly by tutoring during her Sorbonne years. The scene and the dialogue are dramatized around that.',
      },
    ],
  },
  {
    id: 'curie-meets-pierre',
    characterId: 'curie',
    chapterId: 'education',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'sitting-room',
        conditions: [
          { type: 'yearAtLeast', year: 1893 },
          { type: 'locationIs', locationId: 'paris' },
        ],
        title: 'A Man by the Window',
        locationLabel: 'Paris',
        yearLabel: '1894',
        image: {
          setting: 'a modest Paris sitting room on a spring evening with the window open to the street',
          year: 1894,
          characters: ['curie'],
          mood: 'unexpected recognition',
          details: ['an open sash window', 'tea things left untouched', 'a quartz crystal on a side table', 'lamplight on a bookcase'],
          alt: 'Two people talking beside an open window in a modest Paris sitting room.',
        },
        pages: [
          {
            id: 'invitation',
            narration:
              'A Polish physicist she knows invites her to a sitting room to meet a man who may have laboratory space going spare. She goes for the space.',
          },
          {
            id: 'window',
            narration:
              'He is tall and badly dressed and stands by the window because the room is full. He talks about crystals and symmetry the way other people describe weather they have walked through.',
            speaker: 'PIERRE',
            dialogue: 'I have not met anybody who wanted a laboratory the way you want one. It is not a comfortable thing to want.',
          },
          {
            id: 'answer',
            narration:
              'She tells him she is going home to Warsaw in the summer to teach. She means it. He asks her to stay in a way that is entirely about physics and not at all about physics, and she notices both halves.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.metPierre', value: true },
          { type: 'resources', effects: { network: 1, wellbeing: 1 } },
        ],
        historicalNote:
          'Marie Skłodowska and Pierre Curie were introduced in Paris in 1894 through a mutual acquaintance, initially over the question of laboratory space, and she had intended to return to Poland. The dialogue is dramatized wording.',
      },
      {
        id: 'reprint',
        conditions: [{ type: 'yearAtLeast', year: 1893 }],
        title: 'A Paper on Symmetry',
        yearLabel: '1894',
        image: {
          setting: 'a plain desk with an offprint of a physics paper and an unopened letter',
          year: 1894,
          characters: ['curie'],
          mood: 'contact at a distance',
          details: ['a stitched offprint', 'a quartz crystal', 'a postmark from Paris', 'a steel pen'],
          alt: 'An offprint of a scientific paper and a small quartz crystal on a plain desk.',
        },
        pages: [
          {
            id: 'offprint',
            narration:
              'The offprint arrives in the post with no covering letter to speak of: a few pages on symmetry in crystals, and an instrument for measuring very small electrical charges that she reads about twice and then draws from memory.',
          },
          {
            id: 'note',
            narration:
              'Somewhere there is a man who thinks about balance the way she thinks about counting. She writes to thank him for the paper and asks four questions about the instrument, which is not the letter one writes to a stranger.',
            speaker: 'MARIE',
            dialogue: 'Whoever built this cared more about the third decimal place than about being read. I should like to meet him.',
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.metPierre', value: true }],
        historicalNote:
          'Pierre Curie’s work on crystal symmetry and his piezoelectric electrometer are documented and would have reached her in print. This variant dramatizes contact by correspondence rather than the documented 1894 introduction in Paris.',
      },
    ],
  },
  {
    id: 'curie-education-closing',
    characterId: 'curie',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'first-in-physics',
        conditions: [{ type: 'locationIs', locationId: 'paris' }],
        title: 'First, and Then Second',
        locationLabel: 'Paris',
        yearLabel: '1893–1894',
        image: {
          setting: 'a university corridor where examination results are posted on a board',
          year: 1894,
          characters: ['curie'],
          mood: 'vindication kept private',
          details: ['a posted list of results', 'a corridor of coats', 'ink-stained fingers', 'a folded letter'],
          alt: 'A posted examination list in a university corridor with students reading it.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'The physics results go up on the board and her name is at the top of them. A year later the mathematics results go up and her name is second, which annoys her for approximately one afternoon.',
          },
          {
            id: 'repay',
            narration:
              'There is a scholarship she was given as a foreign student. She pays it back out of her first earnings, early, so that it can be given to somebody else — an act nobody asked for and nobody forgets.',
          },
        ],
        historicalNote:
          'She placed first in the physics licence in 1893 and second in mathematics in 1894, and repaid a scholarship awarded to her as a Polish student so that it could be reissued. Framing is dramatized.',
      },
      {
        id: 'default',
        title: 'The Examination Not Sat',
        yearLabel: '1895',
        image: {
          setting: 'a plain room with a completed set of study notes tied with string',
          year: 1895,
          characters: ['curie'],
          mood: 'competence without a certificate',
          details: ['notes tied with string', 'a dictionary', 'an unposted letter', 'a cold stove'],
          alt: 'A bundle of study notes tied with string beside an unposted letter.',
        },
        pages: [
          {
            id: 'notes',
            narration:
              'The notes are complete. She could sit the examination tomorrow if there were a hall that would seat her and a fee she could pay. There is no board in any corridor with her name on it.',
          },
          {
            id: 'own-list',
            narration:
              'So she keeps her own list, in the back of the notebook, of what she has finished and what she has not. Nobody countersigns it. She finds that she believes it anyway.',
          },
        ],
        historicalNote:
          'A divergent closing for a life that has not reached the Sorbonne. Her documented degrees came in 1893 and 1894; this variant narrates their absence.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Entry into the Profession, 1895–1902
  // -------------------------------------------------------------------------
  {
    id: 'curie-entry-opening',
    characterId: 'curie',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'the-shed',
        conditions: [{ type: 'locationIs', locationId: 'paris' }],
        title: 'A Shed Across the Courtyard',
        locationLabel: 'Paris',
        yearLabel: '1895–1897',
        image: {
          setting: 'a glass-roofed wooden shed in a Paris courtyard, fitted out as a makeshift laboratory',
          year: 1897,
          characters: ['curie'],
          mood: 'improvised, cold, entirely theirs',
          details: ['a leaking glazed roof', 'a cast-iron stove that does not reach the corners', 'deal tables', 'a wheeled cauldron'],
          alt: 'A glass-roofed wooden shed in a courtyard fitted out with plain tables and laboratory glassware.',
        },
        pages: [
          {
            id: 'wedding',
            narration:
              'They marry without a church and without a white dress. She buys a dark one, on the grounds that a dark dress can be worn in a laboratory afterwards, which it is, for years.',
          },
          {
            id: 'shed',
            narration:
              'The space the school can spare them is a shed across the courtyard: glazed roof, asphalt floor, used previously for dissections and then judged unfit for them. In winter the water in the basins freezes. In summer it is a greenhouse with acid in it.',
            speaker: 'PIERRE',
            dialogue: 'It leaks, and the roof is a scandal. But nobody will ever come in here and ask us what we are doing.',
          },
          {
            id: 'daughter',
            narration:
              'A daughter arrives, and a grandfather arrives with her to mind her, and the arithmetic of the household is rewritten in one evening. The hours in the shed are not reduced. They are moved.',
          },
          {
            id: 'thesis',
            narration: 'A doctorate needs a subject. Two lie on the table, and only one of them has been walked on before.',
            choices: [
              {
                id: 'becquerel-rays',
                label: 'Take the uranium rays — nobody has troubled to measure them',
                effects: [
                  { type: 'flag', flag: 'curie.thesisRays', value: true },
                  { type: 'theme', theme: 'newGround', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'magnetism-steel',
                label: 'Take the magnetism of tempered steels — safe, useful, funded',
                effects: [
                  { type: 'flag', flag: 'curie.thesisSteel', value: true },
                  { type: 'theme', theme: 'prudence', amount: 2 },
                  { type: 'resources', effects: { funds: 1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.inParis', value: true }],
        historicalNote:
          'The Curies married in 1895 without a religious ceremony, worked in a converted shed at the school where Pierre taught, and Marie chose Becquerel’s uranium rays as her doctoral subject over more conventional options. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Subject Nobody Wants',
        yearLabel: '1895–1896',
        image: {
          setting: 'a plain working room with a journal open at a short paper on uranium salts',
          year: 1896,
          characters: ['curie'],
          mood: 'appetite for the unfashionable',
          details: ['an open journal', 'a photographic plate in a wrapper', 'a lump of uranium ore', 'a steel pen'],
          alt: 'An open scientific journal beside a wrapped photographic plate and a piece of dark ore.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'A short paper reports that uranium salts fog a photographic plate through black paper, in the dark, without being lit first. It has been read by very few people and pursued by almost none. Everybody is busy with a more fashionable kind of ray.',
          },
          {
            id: 'appeal',
            narration:
              'She reads it three times. It is unglamorous, badly measured, and nobody has claimed it — which is a description of a field, if one is willing to be alone in it.',
            speaker: 'MARIE',
            dialogue: 'An empty subject is not a poor subject. It is only a subject with no queue.',
          },
          {
            id: 'thesis',
            narration: 'A doctorate needs a subject. Two lie on the table, and only one of them has been walked on before.',
            choices: [
              {
                id: 'becquerel-rays',
                label: 'Take the uranium rays — nobody has troubled to measure them',
                effects: [
                  { type: 'flag', flag: 'curie.thesisRays', value: true },
                  { type: 'theme', theme: 'newGround', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'magnetism-steel',
                label: 'Take the magnetism of tempered steels — safe, useful, funded',
                effects: [
                  { type: 'flag', flag: 'curie.thesisSteel', value: true },
                  { type: 'theme', theme: 'prudence', amount: 2 },
                  { type: 'resources', effects: { funds: 1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Becquerel’s 1896 report of uranium salts fogging photographic plates is documented, as is the general lack of interest in it. This variant places the decision away from the Paris shed; the dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'curie-electrometer',
    characterId: 'curie',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'curie-radiation-measurement', priority: 78 },
    once: true,
    variants: [
      {
        id: 'after-the-night',
        conditions: [{ type: 'narrativeFlag', flag: 'curie.anomalyNight' }],
        title: 'The Programme, Finished',
        yearLabel: '1897–1898',
        image: {
          setting: 'a bench where a long table of electrometer readings is being checked line by line against a fair copy',
          year: 1898,
          characters: ['curie'],
          mood: 'the unglamorous half of a discovery',
          details: ['a long table of readings', 'a fair copy in a second hand', 'the quartz balance under a cloth', 'a ruled line under a total'],
          alt: 'A long table of tabulated readings being checked against a fair copy beside a covered instrument.',
        },
        pages: [
          {
            id: 'copy',
            narration:
              'Between the night the ore misbehaved and a paper anybody will accept there are four hundred readings, and every one of them has to be taken twice by two people who do not consult each other until the end.',
          },
          {
            id: 'total',
            narration:
              'The columns close. Thorium behaves the same way, which means the property is not a curiosity of one element; it is a property of matter, and she has the only table in the world that says so in numbers.',
            speaker: 'MARIE',
            dialogue: 'It is not the interesting part. It is the part that makes the interesting part survive an argument.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.excessActivity', value: true },
          { type: 'resources', effects: { standing: 1, evidence: 1 } },
        ],
        historicalNote:
          'Curie’s systematic electrometer survey extended to thorium and established radioactivity as an atomic property measurable across substances. The dialogue is dramatized.',
      },
      {
        id: 'chosen-rays',
        conditions: [{ type: 'choiceWas', choiceKey: 'curie-entry-opening:thesis', choiceId: 'becquerel-rays' }],
        title: 'Counting Aloud',
        locationLabel: 'Paris',
        yearLabel: '1897',
        image: {
          setting: 'a makeshift laboratory bench with a quartz piezoelectric electrometer and a stopwatch',
          year: 1897,
          characters: ['curie'],
          mood: 'exacting, absorbed, physically demanding',
          details: ['a quartz balance with weights', 'a needle held at zero', 'a stopwatch', 'small trays of powdered ore'],
          alt: 'A pair of hands adjusting a delicate electrometer beside a stopwatch and trays of powder.',
        },
        pages: [
          {
            id: 'instrument',
            narration:
              'The instrument is a fussy thing: a quartz crystal, a scale pan, a screw under the thumb, and a needle that must be held exactly at zero while the seconds are counted. She holds it at zero. She counts the seconds. She does this for hours at a stretch and her arm aches at the shoulder for days.',
          },
          {
            id: 'result',
            narration:
              'Every uranium compound gives the same answer once she divides by how much uranium is in it. Heating does not change it. Chemistry does not change it. Whatever the effect is, it is coming from inside the atom and not from anything done to the outside of it.',
          },
          {
            id: 'anomaly',
            narration:
              'Then the pitchblende reads four times too high, and she does what she always does, which is the boring, decisive thing: she reads it again.',
            speaker: 'MARIE',
            dialogue: 'Either the instrument is lying to me, or this ore contains something nobody has named.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.excessActivity', value: true },
          { type: 'resources', effects: { standing: 1, exposure: 1 } },
        ],
        historicalNote:
          'Curie used Pierre Curie’s piezoelectric quartz electrometer to make quantitative measurements of uranium radiation, established that the effect was proportional to the quantity of the element and independent of its chemical state, and found pitchblende more active than its uranium content allowed. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Number That Will Not Behave',
        yearLabel: '1897',
        image: {
          setting: 'a sparse working room with a sensitive electrical instrument and a page of tabulated readings',
          year: 1897,
          characters: ['curie'],
          mood: 'methodical, faintly incredulous',
          details: ['a tabulated page of readings', 'a delicate electrical instrument', 'dark ore in a paper tray', 'a lamp'],
          alt: 'A page of tabulated readings beside a delicate electrical instrument and a tray of dark ore.',
        },
        pages: [
          {
            id: 'method',
            narration:
              'Whatever road she took to it, she has built a way of turning a mystery into a column of numbers: same instrument, same air, same operator, same count. Boring on purpose. Boring is what makes a number arguable.',
          },
          {
            id: 'excess',
            narration:
              'The column holds beautifully until the ore. The ore gives more than everything in it can account for, and gives it again on the second afternoon, and on the third.',
            speaker: 'MARIE',
            dialogue: 'Three times is not an error. Three times is an announcement.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.excessActivity', value: true },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'A location-neutral telling of the documented electrometer measurements and the anomalous activity of pitchblende. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'curie-new-elements',
    characterId: 'curie',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'curie-polonium-radium', priority: 90 },
    once: true,
    variants: [
      {
        id: 'already-named',
        conditions: [{ type: 'narrativeFlag', flag: 'curie.namedTheProperty' }],
        title: 'Two Names for Things Nobody Has Seen',
        yearLabel: '1898',
        image: {
          setting: 'a bench of fractionating dishes with a brass spectroscope at the end of it',
          year: 1898,
          characters: ['curie'],
          mood: 'a word already in use, and now two things to attach it to',
          details: ['rows of evaporating dishes', 'a brass spectroscope', 'a chalked tally on a board', 'a note to the academy half written'],
          alt: 'Rows of evaporating dishes on a bench ending in a brass spectroscope.',
        },
        pages: [
          {
            id: 'bismuth',
            narration:
              'The word is a year old now and other people have started using it, which she notices with more pleasure than she admits. What it still lacks is a thing to be a property of. The activity follows the bismuth through every separation she can devise, and where bismuth alone should be, something else is riding along.',
            speaker: 'MARIE',
            dialogue: 'Polonium. Let them learn to spell the name of a country that is not on their maps.',
          },
          {
            id: 'barium',
            narration:
              'The second one is harder and better. It stays with the barium, will not be shaken loose, and in the spectroscope puts down a line that belongs to nothing known. She calls it radium.',
          },
          {
            id: 'claim',
            narration:
              'The note to the academy goes off claiming two elements she cannot put on a table and show to anybody. She reads it over twice before sealing it, because it is the least provable thing she has ever written and every number in it is right.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.namedElements', value: true },
          { type: 'resources', effects: { standing: 2, network: 1, exposure: 1 } },
        ],
        historicalNote:
          'Polonium and radium were announced in 1898 on the basis of chemical fractionation and a new spectral line, years before either was isolated; Curie had coined the term radioactivity by then. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Two Names for Things Nobody Has Seen',
        locationLabel: 'Paris',
        yearLabel: '1898',
        image: {
          setting: 'a courtyard laboratory shed with fractionating dishes, a spectroscope, and sacks of dark ore',
          year: 1898,
          characters: ['curie'],
          mood: 'triumph in a leaking building',
          details: ['evaporating dishes in rows', 'a brass spectroscope', 'sacks of dark residue', 'a chalked tally on a board'],
          alt: 'Rows of evaporating dishes and a brass spectroscope in a makeshift shed laboratory.',
        },
        pages: [
          {
            id: 'word',
            narration:
              'First they need a word. "Uranium rays" will not do, because the property has stopped belonging to uranium. She writes radioactivity in the margin of a page, tries it in a sentence, and it stays.',
          },
          {
            id: 'polonium',
            narration:
              'The activity follows the bismuth through every separation, and where bismuth alone should be there is something else riding with it. In July she names it, and she does not name it for a mineral or a Greek adjective.',
            speaker: 'MARIE',
            dialogue: 'Polonium. Let them learn to spell the name of a country that is not on their maps.',
          },
          {
            id: 'radium',
            narration:
              'The second one is harder and better. It stays with the barium, it will not be shaken loose, and in the spectroscope it puts down a line that belongs to nothing known. They call it radium. They can name it, measure it and prove it, and they still cannot show a visible speck of it to anybody.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.namedElements', value: true },
          { type: 'resources', effects: { standing: 2, network: 1, exposure: 1 } },
        ],
        historicalNote:
          'Curie coined the term radioactivity, and in 1898 she and Pierre Curie announced polonium — named for Poland — and radium, identified through chemical fractionation and a new spectral line before either element had been isolated. The dialogue is dramatized wording.',
      },
    ],
  },
  {
    id: 'curie-entry-anomaly',
    characterId: 'curie',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 74 },
    once: true,
    variants: [
      {
        id: 'shed-bench',
        conditions: [
          { type: 'yearAtLeast', year: 1897 },
          { type: 'locationIs', locationId: 'paris' },
          { type: 'projectNotCompleted', projectId: 'curie-radiation-measurement' },
          { type: 'projectNotCompleted', projectId: 'curie-polonium-radium' },
        ],
        title: 'Four Times Too Much',
        locationLabel: 'Paris',
        yearLabel: '1897–1898',
        image: {
          setting: 'a shed bench at night with a quartz electrometer, a stopwatch and small paper trays of powdered ore',
          year: 1898,
          characters: ['curie'],
          mood: 'the exact moment a number stops behaving',
          details: ['a quartz balance with weights', 'a stopwatch', 'paper trays of dark powder', 'a page of readings with a line drawn under it'],
          alt: 'A quartz electrometer and stopwatch on a bench beside small paper trays of dark powder.',
        },
        pages: [
          {
            id: 'needle',
            narration:
              'The method is dull and she has made it duller on purpose. Thumb on the screw, needle held at zero, seconds counted aloud, the sample changed, the whole thing done again. Every uranium compound gives the same answer once she divides by how much uranium is in it. Heating does not change it. Chemistry does not change it.',
          },
          {
            id: 'ore',
            narration:
              'Then the pitchblende, out of curiosity, at the end of an evening. It reads four times what its uranium can account for. She works the arithmetic, and then works it again, because the arithmetic is always worked twice, and it comes out the same both times.',
            speaker: 'PIERRE',
            dialogue: 'Do it once more with a fresh tray and I will stop looking for your mistake.',
          },
          {
            id: 'word',
            narration:
              'It survives the fresh tray. Whatever this is, it is not something being done to the atom; it is something the atom is doing. She needs a word for that, because uranium rays has stopped being true, and she writes radioactivity in the margin and tries it in a sentence and it stays.',
            speaker: 'MARIE',
            dialogue: 'Four times too much. There is something in that ore that is not on anybody’s list, and I intend to have it in a bottle.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.anomalyNight', value: true },
          { type: 'flag', flag: 'curie.namedTheProperty', value: true },
          { type: 'resources', effects: { evidence: 1, standing: 1 } },
        ],
        historicalNote:
          'Curie established by electrometer that uranium activity is proportional to the quantity of the element and independent of its chemical state, found pitchblende far more active than its uranium content allowed, and coined the term radioactivity. The dialogue and the single evening are dramatized compressions.',
      },
      {
        id: 'borrowed-apparatus',
        conditions: [
          { type: 'yearAtLeast', year: 1897 },
          { type: 'projectNotCompleted', projectId: 'curie-radiation-measurement' },
          { type: 'projectNotCompleted', projectId: 'curie-polonium-radium' },
        ],
        title: 'The Ore That Reads Too High',
        yearLabel: '1897–1898',
        image: {
          setting: 'a corner of a borrowed laboratory at night with a sensitive electrical instrument and a small parcel of ore',
          year: 1898,
          characters: ['curie'],
          mood: 'discovery in a room she has to give back',
          details: ['a sensitive electrical instrument', 'a small parcel of dark ore with foreign customs marks', 'a stopwatch', 'a page of readings'],
          alt: 'A sensitive electrical instrument beside a small parcel of dark ore marked for foreign carriage.',
        },
        pages: [
          {
            id: 'parcel',
            narration:
              'The instrument is borrowed and has to be recalibrated every time somebody else moves it. The ore comes by post in a parcel the size of a loaf, with foreign carriage marks on it, and cost more to send than to buy.',
          },
          {
            id: 'reading',
            narration:
              'It reads four times what the uranium in it can account for. She does the arithmetic twice, then borrows the instrument again the following week to be certain it is not the instrument, and it is not the instrument.',
            speaker: 'MARIE',
            dialogue: 'Either every book on that shelf is wrong about this ore, or there is an element in it nobody has met.',
          },
          {
            id: 'word',
            narration:
              'She writes radioactivity in the margin, because uranium rays has stopped being true and the property plainly belongs to no single element. Then she works out what a proper separation would need — tons of the stuff, a yard, four years — and writes that in the margin too, in a smaller hand.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.anomalyNight', value: true },
          { type: 'flag', flag: 'curie.namedTheProperty', value: true },
          { type: 'resources', effects: { evidence: 1 } },
        ],
        historicalNote:
          'A divergent telling of the documented pitchblende anomaly and the coining of the term radioactivity, for a life working with borrowed apparatus rather than in the Paris shed.',
      },
    ],
  },
  {
    id: 'curie-shed-at-night',
    characterId: 'curie',
    chapterId: 'entry',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'glow',
        conditions: [
          { type: 'yearAtLeast', year: 1899 },
          { type: 'locationIs', locationId: 'paris' },
          { type: 'projectCompleted', projectId: 'curie-polonium-radium' },
        ],
        title: 'The Shelves After Dark',
        locationLabel: 'Paris',
        yearLabel: '1899–1902',
        image: {
          setting: 'a dark laboratory shed at night, faint pale light coming from tubes and capsules on the shelves',
          year: 1900,
          characters: ['curie'],
          mood: 'awe, intimacy, unwitting danger',
          details: ['two plain chairs against a wall', 'small glass tubes on shelves', 'faint pale outlines in the dark', 'a cold stove'],
          alt: 'Two empty chairs against the wall of a dark shed where small glass tubes give off a faint pale light.',
        },
        pages: [
          {
            id: 'return',
            narration:
              'They come back after supper without lighting the lamp. On the shelves and the tables the tubes and capsules stand in faint pale outline, each one drawing itself in the dark.',
          },
          {
            id: 'chairs',
            narration:
              'There are two plain chairs against the wall. They sit in them and do not talk very much, which for two people who talk about work at meals is remarkable.',
            speaker: 'PIERRE',
            dialogue: 'If it does that through glass, ask yourself what it does through a hand.',
          },
          {
            id: 'later',
            narration:
              'He has already burned his own arm on purpose, with a sealed tube, for ten hours, to see how the wound behaved. He wrote the result down carefully. Neither of them draws the obvious conclusion about the shed they are sitting in.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.sawTheGlow', value: true },
          { type: 'resources', effects: { wellbeing: 1, exposure: 1 } },
        ],
        historicalNote:
          'The Curies’ evening visits to see the faint luminosity of their preparations, and Pierre Curie’s deliberate experiment burning his own arm with radium, are documented. The dialogue is dramatized.',
      },
      {
        id: 'paris-waiting',
        conditions: [
          { type: 'yearAtLeast', year: 1899 },
          { type: 'locationIs', locationId: 'paris' },
        ],
        title: 'Late, and Nothing Glowing',
        locationLabel: 'Paris',
        yearLabel: '1900',
        image: {
          setting: 'a dark courtyard shed at night with an unlit lamp and cooling apparatus on the tables',
          year: 1900,
          characters: ['curie'],
          mood: 'stubborn patience',
          details: ['an unlit lamp', 'a cooling flask', 'a notebook left open', 'a chair turned to face the shelves'],
          alt: 'An open notebook and cooling apparatus on a bench in an unlit shed at night.',
        },
        pages: [
          {
            id: 'dark',
            narration:
              'She stays after the courtyard empties, because the shed is quietest then and because there is nothing at home that will not keep. She puts the lamp out and gives her eyes a full minute, the way one does at a telescope. The shelves stay dark.',
            speaker: 'MARIE',
            dialogue: 'One day something on that shelf will be bright enough to see. I intend to be in the room when it is.',
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.glowPromised', value: true }],
        historicalNote:
          'A variant for a life still short of a radioactive preparation strong enough to see. The habit of working late in the shed is documented; the scene is dramatized.',
      },
      {
        id: 'borrowed-corner',
        conditions: [{ type: 'yearAtLeast', year: 1899 }],
        title: 'The Borrowed Corner',
        yearLabel: '1900',
        image: {
          setting: 'a corner of somebody else’s teaching laboratory used after hours, apparatus pushed aside',
          year: 1900,
          characters: ['curie'],
          mood: 'patience without a room of her own',
          details: ['borrowed apparatus pushed to one end of a bench', 'a caretaker’s ring of keys', 'a notebook left open', 'a snuffed lamp'],
          alt: 'A corner of a shared laboratory bench after hours with borrowed apparatus pushed aside.',
        },
        pages: [
          {
            id: 'keys',
            narration:
              'The bench is not hers and the keys are lent, so the work happens between the caretaker locking up and the caretaker wanting to go home. She snuffs the lamp for a minute anyway and lets her eyes adjust, on the theory that one day it will be worth doing.',
            speaker: 'MARIE',
            dialogue: 'One day something on that shelf will be bright enough to see. I intend to be in the room when it is.',
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.glowPromised', value: true }],
        historicalNote:
          'A divergent variant for a life working in borrowed space rather than the Paris shed. Her years without a laboratory of her own are documented; the scene is dramatized.',
      },
    ],
  },
  {
    id: 'curie-entry-closing',
    characterId: 'curie',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'announced',
        conditions: [
          { type: 'projectCompleted', projectId: 'curie-polonium-radium' },
          { type: 'narrativeFlag', flag: 'curie.inParis' },
        ],
        title: 'Two Elements and a Leaking Roof',
        locationLabel: 'Paris',
        yearLabel: '1902',
        image: {
          setting: 'a courtyard shed at dusk with sacks of ore stacked against the outside wall',
          year: 1902,
          characters: ['curie'],
          mood: 'exhausted satisfaction, work not finished',
          details: ['sacks stacked against a wall', 'a wheeled cauldron', 'an iron stirring rod', 'rain on a glazed roof'],
          alt: 'Sacks of ore stacked outside a shed with a wheeled cauldron and a tall iron stirring rod.',
        },
        pages: [
          {
            id: 'note',
            narration:
              'Two elements exist because she can measure them. The academy has the note; the journals have the spectra; the world has a new word. What the shed has is a roof that lets in the rain onto a table nobody else would work at.',
          },
          {
            id: 'next',
            narration:
              'The next problem is the one that will take years and cost her something she has not been asked to price yet: to hold a piece of radium in a pair of tongs and put it on a balance.',
          },
        ],
        historicalNote:
          'By 1902 the Curies had announced polonium and radium and were still working in the converted shed. The framing is dramatized.',
      },
      {
        id: 'announced-elsewhere',
        conditions: [{ type: 'projectCompleted', projectId: 'curie-polonium-radium' }],
        title: 'Two Elements and a Borrowed Key',
        yearLabel: '1902',
        image: {
          setting: 'a borrowed bench at the end of a working day with a sealed note to a learned academy on it',
          year: 1902,
          characters: ['curie'],
          mood: 'a large claim made from a small room',
          details: ['a sealed note addressed to an academy', 'a borrowed bench cleared for the night', 'trays of dark residue', 'a caretaker’s keys on the sill'],
          alt: 'A sealed letter addressed to an academy lying on a cleared, borrowed laboratory bench.',
        },
        pages: [
          {
            id: 'note',
            narration:
              'Two elements exist because she can measure them, and the note that says so leaves from a room she does not own, past a caretaker who wants to lock up, in an envelope she paid for herself.',
          },
          {
            id: 'next',
            narration:
              'What comes next will take years and cost her something nobody has asked her to price: to hold a piece of it in a pair of tongs and put it on a balance. For that she will need a yard, a cauldron, and somebody to say yes.',
          },
        ],
        historicalNote:
          'A divergent closing for a life that announced polonium and radium from outside the Paris shed. The 1898 announcement preceding isolation by years is documented; the borrowed room is dramatized.',
      },
      {
        id: 'the-safe-road',
        conditions: [
          { type: 'choiceWas', choiceKey: 'curie-entry-opening:thesis', choiceId: 'magnetism-steel' },
          { type: 'projectNotCompleted', projectId: 'curie-radiation-measurement' },
        ],
        title: 'A Sound Piece of Work',
        yearLabel: '1902',
        image: {
          setting: 'a tidy laboratory with steel samples, a magnet, and a bound thesis on the bench',
          year: 1902,
          characters: ['curie'],
          mood: 'competence, and a door left unopened',
          details: ['tempered steel samples in a rack', 'a horseshoe magnet', 'a bound thesis', 'a tidy bench'],
          alt: 'Steel samples in a rack beside a magnet and a bound thesis on a tidy laboratory bench.',
        },
        pages: [
          {
            id: 'thesis',
            narration:
              'The work on tempered steels is good. It is careful, it is fundable, it will be cited by people who make things out of steel, and it is finished in a room with a working stove.',
          },
          {
            id: 'drawer',
            narration:
              'In the drawer there is a page of readings from a fortnight in 1897 when she measured some dark ore out of curiosity and it gave more than it should have. She has never gone back to it. She has never thrown it away either.',
          },
        ],
        historicalNote:
          'A divergent closing for a life that took the conventional doctoral subject. The uranium anomaly she pursued in fact is here left unexamined.',
      },
      {
        id: 'default',
        title: 'The Column of Readings',
        yearLabel: '1902',
        image: {
          setting: 'a working room with a long column of tabulated measurements pinned to the wall',
          year: 1902,
          characters: ['curie'],
          mood: 'unfinished, unbowed',
          details: ['a tabulated column pinned up', 'a delicate instrument under a cloth', 'ore in paper trays', 'a spent candle'],
          alt: 'A long column of tabulated measurements pinned to a wall above a covered instrument.',
        },
        pages: [
          {
            id: 'wall',
            narration:
              'The readings are pinned to the wall in one long column because she likes to see the whole shape of a question at once. The shape is not finished. It is not wrong, either, which is the more important half.',
          },
          {
            id: 'time',
            narration:
              'She is thirty-five. She has an instrument, a method, and an anomaly, and that is three of the four things anybody needs. The fourth is a building with a floor she is allowed to stand on.',
          },
        ],
        historicalNote:
          'A divergent closing for a life that has the method but not yet the discovery. Her measurement programme and her lack of proper laboratory space are documented.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1902–1911
  // -------------------------------------------------------------------------
  {
    id: 'curie-breakthrough-opening',
    characterId: 'curie',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'paris',
        conditions: [{ type: 'locationIs', locationId: 'paris' }],
        title: 'Tons, Reduced',
        locationLabel: 'Paris',
        yearLabel: '1902',
        image: {
          setting: 'a courtyard where a woman stirs a steaming cauldron of ore residue with a tall iron rod',
          year: 1902,
          characters: ['curie'],
          mood: 'physical labour at the edge of endurance',
          details: ['a wheeled cauldron', 'an iron rod nearly as tall as a person', 'sacks of brown residue with pine needles in it', 'steam in cold air'],
          alt: 'A cauldron of steaming residue in a courtyard with a tall iron stirring rod resting against it.',
        },
        pages: [
          {
            id: 'sacks',
            narration:
              'The residue comes by rail from a mine in Bohemia in sacks, with pine needles still in it from the forest floor where it was tipped. Tons of it, for a substance that will end up too small to see.',
          },
          {
            id: 'stirring',
            narration:
              'She works it twenty kilos at a time, out in the yard when the fumes are too much for the shed, stirring with an iron rod nearly her own height. Four years of this. She weighs less at the end of each summer than at the start of it.',
          },
          {
            id: 'refusal',
            narration: 'The dust settles into everything and everything is faintly active afterwards: the tables, the notebooks, the fingers.',
            speaker: 'PIERRE',
            dialogue: 'We could stop here and publish what we have. It would be enough for anyone.',
          },
          {
            id: 'answer',
            narration:
              'She does not answer him, which is an answer. A number that cannot be weighed is a claim. She intends to hand somebody a bottle.',
          },
        ],
        historicalNote:
          'The Curies processed tons of pitchblende residue from Joachimsthal in a courtyard and shed, stirring batches by hand with an iron rod, to obtain a fraction of a gram of radium salt. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Grams, Where There Should Be Tons',
        yearLabel: '1902',
        image: {
          setting: 'a small working room with a single sack of dark ore and a domestic-sized evaporating dish',
          year: 1902,
          characters: ['curie'],
          mood: 'scale as an obstacle',
          details: ['one sack of dark residue', 'a domestic evaporating dish', 'a freight tariff sheet', 'a carefully ruled inventory'],
          alt: 'A single sack of dark ore beside a small evaporating dish and a freight tariff sheet.',
        },
        pages: [
          {
            id: 'sack',
            narration:
              'The residue can be bought. That is the discovery of the year: a mine will sell the waste it has been tipping into a forest, and it will send as much of it as anybody can pay the freight on. She can pay the freight on one sack.',
          },
          {
            id: 'scale',
            narration:
              'A sack yields nothing she can weigh. She has worked out what the yield must be and the arithmetic is not encouraging: to hold the thing in a tube she would need a yard, a cauldron, four years, and somebody else’s money.',
            speaker: 'MARIE',
            dialogue: 'I do not need a better idea. I need a courtyard and a permit to make a stink in it.',
          },
          {
            id: 'letters',
            narration:
              'So she writes letters instead of boiling ore: to ministries, to mine offices, to two men who once answered her before. The letters go out. The sack stands in the corner where she can see it from the bench.',
          },
        ],
        historicalNote:
          'A divergent opening for a life without the Paris courtyard and shed in which the pitchblende was actually processed. The purchase of Joachimsthal residues and the scale of the task are documented; the constrained version here is dramatized.',
      },
    ],
  },
  {
    id: 'curie-nobel-physics',
    characterId: 'curie',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'curie-card-1903',
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    variants: [
      {
        id: 'paris',
        conditions: [
          { type: 'yearAtLeast', year: 1903 },
          { type: 'locationIs', locationId: 'paris' },
        ],
        title: 'Two Names on the List',
        locationLabel: 'Paris',
        yearLabel: '1903',
        image: {
          setting: 'a modest Paris apartment table with an opened letter bearing a Swedish postmark',
          year: 1903,
          characters: ['curie'],
          mood: 'anger held very still, then fatigue',
          details: ['an opened letter with a Swedish postmark', 'a pen and inkwell', 'a doorbell being rung outside', 'a cold supper going untouched'],
          alt: 'An opened letter with a foreign postmark lying on a plain kitchen table beside a pen.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'A friendly word reaches Paris before the announcement does: a prize is being considered for the work on radiation, and the list being circulated has two names on it. Neither of them is hers.',
          },
          {
            id: 'pierre',
            narration: 'Pierre writes back the same evening and does not soften it.',
            speaker: 'PIERRE',
            dialogue: 'There is not a page of this that is not also hers. Put her name beside mine or take mine off it.',
          },
          {
            id: 'corrected',
            narration:
              'The list is corrected. Neither of them is well enough to travel north that winter — the fatigue that neither will name has been growing for two years — so the ceremony happens without them and the money arrives before the medal does.',
          },
          {
            id: 'doorbell',
            narration:
              'The money buys a laboratory assistant and a winter in which she does not have to do arithmetic about coal. The visitors at the door want to know what a woman like her keeps in her kitchen. She wants them to go away so that she can weigh something.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1903' },
          { type: 'flag', flag: 'curie.firstPrize', value: true },
          { type: 'resources', effects: { standing: 2, network: 1, funds: 2 } },
        ],
        historicalNote:
          'The 1903 Nobel Prize in Physics was initially proposed for Becquerel and Pierre Curie; Pierre insisted that Marie be included, and the Curies were too unwell to travel to Stockholm for the ceremony. The dialogue and the doorstep detail are dramatized.',
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1903 }],
        title: 'A Letter From the North',
        yearLabel: '1903',
        image: {
          setting: 'a plain table with an official envelope and a newspaper folded open at a short column',
          year: 1903,
          characters: ['curie'],
          mood: 'recognition arriving from a great distance',
          details: ['an official envelope', 'a folded newspaper', 'a tea glass', 'a lamp'],
          alt: 'An official envelope and a folded newspaper on a plain table under a lamp.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The prize for the work on radiation is announced and the newspapers give it a column and a half. She reads the column twice, looking for a particular name and finding it exactly where she expected, which is to say in the third sentence rather than the first.',
          },
          {
            id: 'shrug',
            narration:
              'What matters more is what comes with it. A committee that has said a thing out loud is a committee that can be asked for a building.',
            speaker: 'MARIE',
            dialogue: 'Very well. Now let them give me a floor, a roof, and a drain that works.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1903' },
          { type: 'flag', flag: 'curie.prizeWentPast', value: true },
          { type: 'resources', effects: { standing: 1, network: 1 } },
        ],
        historicalNote:
          'A place-neutral telling of the 1903 Physics Prize. The prize and the initial omission of Marie Curie are documented; the dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'curie-radium-metal',
    characterId: 'curie',
    chapterId: 'breakthrough',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'curie-isolate-radium-metal', priority: 86 },
    once: true,
    variants: [
      {
        id: 'after-the-announcement',
        conditions: [{ type: 'projectCompleted', projectId: 'curie-polonium-radium' }],
        title: 'A Decigram, Weighed',
        locationLabel: 'Paris',
        yearLabel: '1902–1910',
        image: {
          setting: 'a laboratory bench with a small sealed glass tube of white salt on an analytical balance',
          year: 1910,
          characters: ['curie'],
          mood: 'quiet, decisive, hard-won',
          details: ['an analytical balance under glass', 'a small sealed tube', 'a page of atomic-weight determinations', 'brass tongs'],
          alt: 'A small sealed glass tube on the pan of an analytical balance under a glass case.',
        },
        pages: [
          {
            id: 'speck',
            narration:
              'Out of tons: a decigram. It is white, it darkens in air within the hour, and it sits in a tube small enough to be lost in a coat pocket. She does not put it in a coat pocket.',
          },
          {
            id: 'weight',
            narration:
              'The atomic weight comes out and holds where she said it would. Radium stops being an inference from a needle and becomes a number, a place in the table, and a piece of matter that a chemist in another country can be sent and can check.',
            speaker: 'MARIE',
            dialogue: 'Now it exists for the people who do not believe in electrometers.',
          },
          {
            id: 'standard',
            narration:
              'She prepares the standard against which every other sample in the world will be compared, and she does not sell it, patent it, or keep it. It goes into a safe with a number on it and anybody may write and ask.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.pureRadium', value: true },
          { type: 'resources', effects: { standing: 2, exposure: 1, health: -1 } },
        ],
        historicalNote:
          'Curie isolated radium as a pure salt and determined its atomic weight, later preparing the international radium standard; the Curies declined to patent their process. The dialogue is dramatized.',
      },
      {
        id: 'bottle-first',
        title: 'She Waited Until She Had the Bottle',
        yearLabel: '1902–1910',
        image: {
          setting: 'a bench where a small sealed tube of white salt sits on an analytical balance beside an unposted paper',
          year: 1910,
          characters: ['curie'],
          mood: 'a claim withheld for years and then made once',
          details: ['an analytical balance under glass', 'a small sealed tube of white salt', 'an unposted paper in a stiff envelope', 'brass tongs'],
          alt: 'A small sealed tube on an analytical balance beside a stiff unposted envelope.',
        },
        pages: [
          {
            id: 'withheld',
            narration:
              'She never sent the note. Year after year the draft stayed in the drawer, because a new element announced on a spectral line is a claim, and a claim is a thing other people get to argue with. Let them honour the property; she will announce the substance when there is a substance.',
          },
          {
            id: 'weighed',
            narration:
              'So there is no announcement until there is a decigram: white, darkening in air within the hour, small enough to lose in a coat pocket and never once put in one. The atomic weight comes out and holds where she said it would.',
            speaker: 'MARIE',
            dialogue: 'Now they may argue with it. It weighs something. Arguing with a weight is a shorter conversation.',
          },
          {
            id: 'standard',
            narration:
              'The paper goes out with the element behind it, and the sample she prepares as the standard for everybody else goes into a safe with a number on it. She does not sell it, patent it, or keep it. Anybody may write and ask.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.pureRadium', value: true },
          { type: 'flag', flag: 'curie.namedElements', value: true },
          { type: 'resources', effects: { standing: 3, exposure: 1, health: -1 } },
        ],
        historicalNote:
          'Curie in fact announced polonium and radium in 1898, years before isolating radium; this variant is written for a life that withheld the claim until the element could be weighed. The isolation, the atomic weight and the international standard are documented, as is the Curies’ refusal to patent.',
      },
    ],
  },
  {
    id: 'curie-pierre-death',
    characterId: 'curie',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'curie-card-1906',
    trigger: { event: 'afterAction', priority: 94 },
    once: true,
    variants: [
      {
        id: 'paris',
        conditions: [
          { type: 'yearAtLeast', year: 1906 },
          { type: 'locationIs', locationId: 'paris' },
        ],
        title: 'Rain, and a Street Not Crossed',
        locationLabel: 'Paris',
        yearLabel: '1906',
        image: {
          setting: 'a wet Paris street near the Pont Neuf in April, umbrellas and heavy dray traffic, seen from a distance',
          year: 1906,
          characters: ['curie'],
          mood: 'grief handled at arm’s length',
          details: ['rain standing on cobbles', 'closed umbrellas dripping in a hallway', 'a set of keys on a table', 'a notebook left open'],
          alt: 'A wet cobbled street under rain, seen at a distance, with umbrellas and carts.',
        },
        pages: [
          {
            id: 'street',
            narration:
              'It is raining on a Thursday in April. He is crossing a busy street near the Pont Neuf with an umbrella up and the traffic heavy, and he does not get across.',
          },
          {
            id: 'keys',
            narration:
              'Somebody brings her his keys and his pen. She goes into the shed that evening and stands in it, and later that week she begins writing in a notebook addressed to him, which she will keep up for a year and show to nobody.',
          },
          {
            id: 'offer',
            narration: 'Within the month the Faculty makes an offer that has never been made to a woman in that building.',
            speaker: 'A COLLEAGUE',
            dialogue: 'They are prepared to give you his chair. Understand what they are also giving you: every man in the room deciding whether you deserve it.',
          },
          {
            id: 'chair',
            narration: 'The lecture course stops at the sentence he stopped in.',
            choices: [
              {
                id: 'take-chair',
                label: 'Take the chair. Begin the next lecture where his ended',
                effects: [
                  { type: 'flag', flag: 'curie.tookTheChair', value: true },
                  { type: 'theme', theme: 'dutyVsGrief', amount: 2 },
                  { type: 'resources', effects: { standing: 2, wellbeing: -1 } },
                ],
              },
              {
                id: 'refuse-chair',
                label: 'Refuse it. Keep the laboratory and nothing else',
                effects: [
                  { type: 'flag', flag: 'curie.refusedTheChair', value: true },
                  { type: 'theme', theme: 'independence', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1906' },
          { type: 'resources', effects: { wellbeing: -2 } },
        ],
        historicalNote:
          'Pierre Curie was killed in a street accident in Paris in April 1906. Marie Curie kept a private mourning journal addressed to him and was appointed to his chair at the Sorbonne, becoming the university’s first woman professor; she resumed his lecture course at the point where it had stopped. The dialogue is dramatized wording.',
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1906 }],
        title: 'The News, Wherever It Finds Her',
        yearLabel: '1906',
        image: {
          setting: 'a plain room where a telegram lies unfolded on a table beside an untouched meal',
          year: 1906,
          characters: ['curie'],
          mood: 'stillness after a blow',
          details: ['an unfolded telegram', 'an untouched plate', 'a chair pushed back', 'grey light at a window'],
          alt: 'An unfolded telegram on a table beside an untouched plate and a chair pushed back.',
        },
        pages: [
          {
            id: 'telegram',
            narration:
              'The telegram is four lines long and one of them is unnecessary. A wet street, a heavy cart, a man who read the world attentively and did not look up.',
          },
          {
            id: 'after',
            narration:
              'She sits with it for a while. Then she does the only thing that has ever worked, which is to open a notebook and write down the date and what is true, in order, with the times.',
            speaker: 'MARIE',
            dialogue: 'I will not be able to think about this yet. I will be able to work, and then I will think about it.',
          },
          {
            id: 'own-work',
            narration:
              'The letters stop, which is how the loss actually arrives: not once, but every fortnight for a year, when the envelope in that hand does not come. There was a programme in those letters, half his and half hers, and now the whole of it is hers to carry or to put down.',
            choices: [
              {
                id: 'carry-on',
                label: 'Carry the whole programme alone and answer his last letter in the notebook',
                effects: [
                  { type: 'flag', flag: 'curie.carriedOn', value: true },
                  { type: 'theme', theme: 'dutyVsGrief', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, evidence: 1 } },
                ],
              },
              {
                id: 'put-it-down',
                label: 'Put the radiation work aside for a season and teach',
                effects: [
                  { type: 'flag', flag: 'curie.setItAside', value: true },
                  { type: 'theme', theme: 'independence', amount: 1 },
                  { type: 'resources', effects: { wellbeing: 1, funds: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1906' },
          { type: 'resources', effects: { wellbeing: -2 } },
        ],
        historicalNote:
          'A divergent telling of Pierre Curie’s death in 1906 for a life that never shared a laboratory with him. His death is documented; the Sorbonne chair was in fact offered to her and is told in the other variant of this scene. The telegram, the correspondence and the dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'curie-radiology-applications',
    characterId: 'curie',
    chapterId: 'breakthrough',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'curie-medical-radiology', priority: 76 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A Dose Written Down',
        yearLabel: '1906–1911',
        image: {
          setting: 'a measurement room with sealed radium needles, a lead-lined case, and a printed protocol sheet',
          year: 1910,
          characters: ['curie'],
          mood: 'careful, protective, unsentimental',
          details: ['sealed needles in a rack', 'a lead-lined case', 'a printed protocol sheet', 'a stopwatch'],
          alt: 'Sealed needles in a rack beside a lead-lined case and a printed sheet of instructions.',
        },
        pages: [
          {
            id: 'demand',
            narration:
              'The letters come from hospitals now, not laboratories. Surgeons want radium and want it this month. What they mostly want is somebody to tell them how much, for how long, sealed in what, at what distance.',
          },
          {
            id: 'protocol',
            narration:
              'So she writes it down: the quantities, the filtration, the times, the way to store a needle and the way to count what is left of it. It is not a discovery. It is the difference between a treatment and a burn.',
            speaker: 'MARIE',
            dialogue: 'A dose nobody has written down is not medicine. It is a guess with a wound at the end of it.',
          },
          {
            id: 'instruments',
            narration:
              'The instrument-makers she trains for this work — the tubes, the screens, the exact geometry of a source and a plate — will be building for a different science entirely within twenty years, and will not need to be taught twice.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.radiologyGroundwork', value: true },
          { type: 'resources', effects: { standing: 1, network: 1 } },
        ],
        historicalNote:
          'Curie established measurement standards and protocols for medical radium and X-ray work, and the instrumentation culture she built was later drawn on by X-ray crystallography. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'curie-second-nobel',
    characterId: 'curie',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'curie-card-1911',
    trigger: { event: 'afterAction', priority: 82 },
    once: true,
    variants: [
      {
        id: 'correction',
        conditions: [
          { type: 'yearAtLeast', year: 1909 },
          { type: 'narrativeFlag', flag: 'curie.prizeWentPast' },
        ],
        title: 'Eight Years Late',
        yearLabel: '1911',
        image: {
          setting: 'a plain desk with an envelope bearing a Swedish postmark and an old newspaper cutting pinned above it',
          year: 1911,
          characters: ['curie'],
          mood: 'dry amusement over an old injury',
          details: ['a Swedish envelope', 'a yellowed newspaper cutting', 'a pen laid across a ledger', 'a lamp lit in the afternoon'],
          alt: 'An envelope with a foreign postmark on a desk beneath a pinned, yellowed newspaper cutting.',
        },
        pages: [
          {
            id: 'cutting',
            narration:
              'The cutting from eight years ago is still pinned above the desk, third sentence and all. She kept it the way one keeps a bill that has not been paid: not out of bitterness, out of bookkeeping.',
          },
          {
            id: 'envelope',
            narration:
              'The envelope from Sweden is addressed to her, only to her, and it is for chemistry rather than physics, which means the committee has arrived at her by a different corridor and would prefer nobody mentioned the first one.',
            speaker: 'MARIE',
            dialogue: 'They have not given me a second prize. They have given me the first one, late, and changed the subject to cover it.',
          },
          {
            id: 'stockholm',
            narration: 'There is a ceremony to attend or to decline, and a lecture that would have to be written.',
            choices: [
              {
                id: 'go',
                label: 'Go north and give the lecture, whatever the papers print',
                effects: [
                  { type: 'flag', flag: 'curie.wentToStockholm', value: true },
                  { type: 'theme', theme: 'standingGround', amount: 2 },
                  { type: 'resources', effects: { standing: 2, health: -1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay. Let the prize find her at the bench',
                effects: [
                  { type: 'flag', flag: 'curie.stayedAtTheBench', value: true },
                  { type: 'theme', theme: 'independence', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1911' },
          { type: 'resources', effects: { standing: 2 } },
        ],
        historicalNote:
          'Curie received the 1911 Nobel Prize in Chemistry in her own name. This variant is written for a life in which the 1903 Physics Prize passed her by; in the record she was included in it after Pierre Curie intervened. The dialogue is dramatized.',
      },
      {
        id: 'paris',
        conditions: [
          { type: 'yearAtLeast', year: 1909 },
          { type: 'locationIs', locationId: 'paris' },
        ],
        title: 'Two Envelopes in One Winter',
        locationLabel: 'Paris',
        yearLabel: '1911',
        image: {
          setting: 'a shuttered Paris apartment with newspapers piled unread and a lamp burning in daytime',
          year: 1911,
          characters: ['curie'],
          mood: 'siege, then vindication that does not quite reach',
          details: ['newspapers piled unread', 'closed shutters', 'a lamp lit in the afternoon', 'two envelopes on a table'],
          alt: 'Closed shutters and a pile of unread newspapers in a room lit by a lamp in daytime.',
        },
        pages: [
          {
            id: 'pavement',
            narration:
              'There are men on the pavement outside the house and they are not there about physics. The newspapers have found a private matter and have decided that a foreign woman with a laboratory is a story they can run for a fortnight.',
          },
          {
            id: 'academy',
            narration:
              'That same season a learned academy in this city votes, narrowly, that no woman will sit among its members. She hears the result at second hand and goes back to a measurement she had left at the twelfth reading.',
          },
          {
            id: 'letter',
            narration: 'A letter comes from a physicist in Berlin who has no interest in newspapers and considerable interest in her.',
            speaker: 'A PHYSICIST IN BERLIN',
            dialogue: 'Do not read them. They are not written for anyone who weighs things.',
          },
          {
            id: 'stockholm',
            narration:
              'The second envelope is from Sweden. A prize in chemistry, for the isolation of radium and the naming of polonium: the first time anyone has been asked to come twice.',
            choices: [
              {
                id: 'go',
                label: 'Go north and give the lecture, whatever the papers print',
                effects: [
                  { type: 'flag', flag: 'curie.wentToStockholm', value: true },
                  { type: 'theme', theme: 'standingGround', amount: 2 },
                  { type: 'resources', effects: { standing: 2, health: -1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay. Let the prize find her at the bench',
                effects: [
                  { type: 'flag', flag: 'curie.stayedAtTheBench', value: true },
                  { type: 'theme', theme: 'independence', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1911' },
          { type: 'resources', effects: { standing: 2, exposure: 1 } },
        ],
        historicalNote:
          'In 1911 Curie was refused election to the Académie des sciences and was the target of a hostile press campaign over her private life, in the same year she was awarded the Nobel Prize in Chemistry — the first person honoured in two sciences. A colleague in Berlin wrote urging her to ignore the newspapers; the wording here is invented, not a quotation.',
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1909 }],
        title: 'Asked Twice',
        yearLabel: '1911',
        image: {
          setting: 'a plain desk with a Swedish envelope beside a stack of unopened newspapers',
          year: 1911,
          characters: ['curie'],
          mood: 'weariness and a hard-edged pride',
          details: ['a Swedish envelope', 'unopened newspapers', 'a spectroscope plate', 'a lamp'],
          alt: 'A foreign envelope on a desk beside a stack of unopened newspapers.',
        },
        pages: [
          {
            id: 'noise',
            narration:
              'The newspapers have been unkind for weeks about matters that are none of theirs, and she has stopped opening them, which is cheaper than answering them.',
          },
          {
            id: 'prize',
            narration:
              'Then an envelope from Sweden, and a second prize, in a different science from the first. Nobody has been asked twice before.',
            speaker: 'MARIE',
            dialogue: 'They can print what they like about the woman. The element is 226 and it will be 226 next year.',
          },
          {
            id: 'stockholm',
            narration: 'There is a ceremony to attend or to decline.',
            choices: [
              {
                id: 'go',
                label: 'Go north and give the lecture, whatever the papers print',
                effects: [
                  { type: 'flag', flag: 'curie.wentToStockholm', value: true },
                  { type: 'theme', theme: 'standingGround', amount: 2 },
                  { type: 'resources', effects: { standing: 2, health: -1 } },
                ],
              },
              {
                id: 'stay',
                label: 'Stay. Let the prize find her at the bench',
                effects: [
                  { type: 'flag', flag: 'curie.stayedAtTheBench', value: true },
                  { type: 'theme', theme: 'independence', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1911' },
          { type: 'resources', effects: { standing: 2 } },
        ],
        historicalNote:
          'A place-neutral telling of the 1911 Nobel Prize in Chemistry and the press campaign of that year. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'curie-the-shelf',
    characterId: 'curie',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 72 },
    once: true,
    variants: [
      {
        id: 'paid',
        conditions: [
          { type: 'yearAtLeast', year: 1903 },
          { type: 'narrativeFlag', flag: 'curie.glowPromised' },
          { not: { type: 'narrativeFlag', flag: 'curie.sawTheGlow' } },
          {
            any: [
              { type: 'projectCompleted', projectId: 'curie-isolate-radium-metal' },
              { type: 'projectCompleted', projectId: 'curie-polonium-radium' },
            ],
          },
        ],
        title: 'Bright Enough to See',
        yearLabel: '1903–1910',
        image: {
          setting: 'a dark laboratory at night where small sealed tubes on a shelf give off a faint pale light',
          year: 1904,
          characters: ['curie'],
          mood: 'a promise kept, and something under it that is not joy',
          details: ['small sealed tubes in faint pale outline', 'two plain chairs against a wall', 'an unlit lamp', 'a door left open to a dark corridor'],
          alt: 'Small sealed tubes on a shelf giving off a faint pale light in an otherwise dark room.',
        },
        pages: [
          {
            id: 'lamp',
            narration:
              'She comes back after supper and does not light the lamp. She has done this on perhaps two hundred evenings and it has never once been worth doing.',
          },
          {
            id: 'shelf',
            narration:
              'The shelf draws itself. Not brightly — nothing so vulgar as bright — but each tube standing in its own faint pale outline, the way a word comes up on paper held to a window. She sits down in the chair against the wall because her legs have decided the matter for her.',
            speaker: 'MARIE',
            dialogue: 'There. I said I would be in the room.',
          },
          {
            id: 'after',
            narration:
              'She stays until the cold moves her. Later she will write down that it was beautiful, and it was, and she will not write down what she also noticed: that the notebooks on the bench below the shelf were faintly drawing themselves too.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.sawTheGlow', value: true },
          { type: 'resources', effects: { wellbeing: 1, exposure: 1 } },
        ],
        historicalNote:
          'The faint luminosity of the Curies’ radium preparations and their evening visits to see it are documented, as is the contamination of their notebooks and workspace. The scene and dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'curie-breakthrough-closing',
    characterId: 'curie',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'alone-at-the-bench',
        conditions: [{ type: 'choiceWas', choiceKey: 'curie-pierre-death:own-work', choiceId: 'carry-on' }],
        title: 'Both Halves of the Correspondence',
        yearLabel: '1906–1911',
        image: {
          setting: 'a working room where a bundle of letters is tied and shelved above a bench still in use',
          year: 1908,
          characters: ['curie'],
          mood: 'grief converted into method',
          details: ['a bundle of letters tied with tape', 'a bench in mid-experiment', 'two sets of handwriting in one notebook', 'a cold cup of tea'],
          alt: 'A tied bundle of letters shelved above a working bench with an open notebook.',
        },
        pages: [
          {
            id: 'bundle',
            narration:
              'The letters go into a bundle and the bundle goes on the shelf where she can reach it without looking. The questions in them do not go anywhere. She answers them one at a time, in the notebook, in her own hand, and stops writing the salutation after the fourth.',
          },
          {
            id: 'method',
            narration:
              'Working an argument alone is slower and considerably lonelier and produces, she notices with some resentment, the same answers. It takes her five years to admit that she was always the one who checked them.',
          },
        ],
        historicalNote:
          'A closing for a life in which the partnership was conducted by correspondence and ended with it. Curie’s practice of writing to Pierre Curie in a private notebook after his death is documented; this variant dramatizes it for a life lived elsewhere.',
      },
      {
        id: 'in-his-chair',
        conditions: [{ type: 'choiceWas', choiceKey: 'curie-pierre-death:chair', choiceId: 'take-chair' }],
        title: 'Beginning at the Sentence He Stopped In',
        locationLabel: 'Paris',
        yearLabel: '1906–1911',
        image: {
          setting: 'a full university lecture theatre with a woman at the lectern and no ceremony at the start',
          year: 1906,
          characters: ['curie'],
          mood: 'composure under scrutiny',
          details: ['a crowded tiered lecture theatre', 'a lectern with a single sheet of notes', 'a chalked board', 'hats held in laps'],
          alt: 'A crowded tiered lecture theatre with a lone figure at the lectern and a chalked blackboard.',
        },
        pages: [
          {
            id: 'first-lecture',
            narration:
              'The theatre is full of people who have come to watch a woman stand at that lectern rather than to hear about ions. She does not make a speech. She picks up the course at the sentence where it stopped and carries on, and by the fourth minute half of them are taking notes.',
          },
          {
            id: 'after',
            narration:
              'Afterwards she walks back across the courtyard to the shed. The chair pays for the coal now. It has not changed a single thing about what she does between nine and midnight.',
          },
        ],
        historicalNote:
          'Curie succeeded to Pierre Curie’s Sorbonne chair in 1906 and resumed his lecture course at the point where it had ended, becoming the university’s first woman professor. The scene is dramatized.',
      },
      {
        id: 'default',
        title: 'The Ground Floor',
        yearLabel: '1911',
        image: {
          setting: 'an architect’s plan of a small research institute unrolled on a work table',
          year: 1911,
          characters: ['curie'],
          mood: 'planning past her own lifetime',
          details: ['an unrolled building plan', 'a weight holding down a corner', 'a pencil', 'a window onto a bare plot'],
          alt: 'An unrolled architectural plan of a small institute held flat on a work table.',
        },
        pages: [
          {
            id: 'plan',
            narration:
              'The plan on the table is for a building that does not exist: two wings, a garden between them, a room for measurement with walls thick enough to be trusted. She has been drawing the drains in herself because the architect keeps putting them where the benches go.',
          },
          {
            id: 'why',
            narration:
              'She has done the largest part of her work in rooms that were lent to her, on tables that were meant for something else. She does not intend anybody who comes after her to have to be as stubborn as she has had to be.',
          },
        ],
        historicalNote:
          'Curie planned and pressed for a permanent radium institute in this period after years of improvised laboratory space. The detail of her editing the plans is dramatized.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Crisis and Responsibility, 1914–1918
  // -------------------------------------------------------------------------
  {
    id: 'curie-crisis-opening',
    characterId: 'curie',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'paris',
        conditions: [{ type: 'locationIs', locationId: 'paris' }],
        title: 'One Gram, and a Country',
        locationLabel: 'Paris',
        yearLabel: '1914',
        image: {
          setting: 'an empty new laboratory building in August with dust sheets over the benches',
          year: 1914,
          characters: ['curie'],
          mood: 'emptied out, urgent',
          details: ['dust sheets over new benches', 'a heavy lead-lined case with a handle', 'a mobilisation notice on a wall', 'shuttered windows'],
          alt: 'A new laboratory with dust sheets over the benches and a heavy lead-lined case on the floor.',
        },
        pages: [
          {
            id: 'empty',
            narration:
              'The institute has been finished for a year and is empty. The researchers have gone to regiments; the technician has gone; the caretaker is going next week. In August the government leaves the city for Bordeaux and advises anybody with anything valuable to do likewise.',
          },
          {
            id: 'weight',
            narration:
              'What she has that is valuable weighs about a gram and sits in a lead-lined case she can lift only with both hands and a straight back.',
            speaker: 'MARIE',
            dialogue: 'A gram of radium and a country. I am able to carry one of them, so I shall carry that.',
          },
          {
            id: 'weighing',
            narration:
              'The case stands by the door with a label on it and no destination written yet. The timetable for the south is on the table beside it, and beside that the keys to a building that nobody is using.',
          },
          {
            id: 'radium',
            narration: 'The decision has to be made this week, and she is the only person who can make it.',
            choices: [
              {
                id: 'bordeaux',
                label: 'Take the radium south herself and come straight back',
                effects: [
                  { type: 'flag', flag: 'curie.radiumSouth', value: true },
                  { type: 'theme', theme: 'serviceVsScience', amount: 2 },
                  { type: 'resources', effects: { health: -1, standing: 1 } },
                ],
              },
              {
                id: 'keep-it',
                label: 'Keep it in the city and stay with the laboratory',
                effects: [
                  { type: 'flag', flag: 'curie.stayedWithTheLab', value: true },
                  { type: 'theme', theme: 'independence', amount: 2 },
                  { type: 'resources', effects: { network: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.gramInHand', value: true }],
        historicalNote:
          'At the outbreak of war in 1914 the Institut du Radium had just been completed and was emptied by mobilisation; Curie personally moved the French radium stock to Bordeaux for safekeeping and returned to Paris. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Armies Come Through Here',
        yearLabel: '1914',
        image: {
          setting: 'a working room being packed into crates while a mobilisation notice is pasted up outside',
          year: 1914,
          characters: ['curie'],
          mood: 'the world arriving uninvited',
          details: ['crates half packed with apparatus', 'a mobilisation notice', 'a strongbox on the floor', 'shutters half closed'],
          alt: 'Apparatus being packed into crates beside a strongbox, with shutters half closed.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'The notice goes up on the wall of the building in August and the young men are gone within the fortnight. Whatever else this city is about to be, it will not be a place where anybody is left alone to weigh things.',
          },
          {
            id: 'box',
            narration:
              'What she has worth guarding fits in a strongbox: a small stock of active material, the notebooks, and the certificates that say what the material is.',
            speaker: 'MARIE',
            dialogue: 'The notebooks first. Anyone can buy the material again. Nobody can buy back forty years of readings.',
          },
          {
            id: 'roads',
            narration:
              'The roads out are full and the trains are requisitioned. Everyone with anything worth moving is discovering, this week, exactly how much of it they can carry.',
          },
          {
            id: 'radium',
            narration: 'No ministry is going to decide this for her, and there is a week in which to decide it.',
            choices: [
              {
                id: 'bordeaux',
                label: 'Move the box out of the army’s road herself, and come straight back',
                effects: [
                  { type: 'flag', flag: 'curie.radiumSouth', value: true },
                  { type: 'theme', theme: 'serviceVsScience', amount: 2 },
                  { type: 'resources', effects: { health: -1, standing: 1 } },
                ],
              },
              {
                id: 'keep-it',
                label: 'Keep it where it is and stay with the work',
                effects: [
                  { type: 'flag', flag: 'curie.stayedWithTheLab', value: true },
                  { type: 'theme', theme: 'independence', amount: 2 },
                  { type: 'resources', effects: { network: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A place-neutral telling of the 1914 mobilisation and the decision to move radioactive stock to safety. Curie in fact moved the French radium to Bordeaux from Paris; this variant dramatizes the same decision elsewhere.',
      },
    ],
  },
  {
    id: 'curie-wartime-paris',
    characterId: 'curie',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    replacesContextCardId: 'curie-card-1914-war',
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'paris',
        conditions: [
          { type: 'yearAtLeast', year: 1914 },
          { type: 'locationIs', locationId: 'paris' },
        ],
        title: 'What the Surgeons Cannot See',
        locationLabel: 'Paris',
        yearLabel: '1914',
        image: {
          setting: 'a ministry corridor with requisition papers and a woman waiting with a folder',
          year: 1914,
          characters: ['curie'],
          mood: 'flat determination, official obstruction',
          details: ['requisition forms', 'a folder of specifications', 'a bench in a corridor', 'a wall clock'],
          alt: 'A folder of specifications on a bench in an official corridor beneath a wall clock.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'The hospitals behind the lines have surgeons and no way of seeing inside a man. There are X-ray sets in this city in university basements and private clinics, and almost none within two hundred kilometres of the place where they are needed.',
          },
          {
            id: 'ask',
            narration: 'She goes to the ministries with a folder and a list, and is told, in three offices in one week, that this is not the moment.',
            speaker: 'MARIE',
            dialogue: 'Then give me motor cars. I will find the tubes, the generators, and the women to run them.',
          },
          {
            id: 'turn',
            narration:
              'The institute stops being a laboratory for the duration. The benches go under sheets, the measurement room becomes a store, and the garden she planted is used for parking vehicles.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1914-war' },
          { type: 'flag', flag: 'curie.wartimeTurn', value: true },
          { type: 'resources', effects: { funds: -1, wellbeing: -1, network: 1 } },
        ],
        historicalNote:
          'Curie redirected the Institut du Radium toward wartime radiography, obtaining vehicles and equipment through appeals to officials and private donors. The dialogue and the corridor scene are dramatized.',
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1914 }],
        title: 'The War Arrives Anyway',
        yearLabel: '1914',
        image: {
          setting: 'a shuttered laboratory with a newspaper headline about mobilisation face-down on a bench',
          year: 1914,
          characters: ['curie'],
          mood: 'the world overtaking the work',
          details: ['a face-down newspaper', 'apparatus packed into crates', 'a ration notice', 'an unlit stove'],
          alt: 'Apparatus packed into crates in a shuttered laboratory beside a face-down newspaper.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The armies move in August and everything else stops. Students vanish into uniforms between one week and the next; the post takes eleven days; glassware cannot be had at any price because the works that made it are making something else.',
          },
          {
            id: 'use',
            narration:
              'She has spent twenty years insisting that a measurement is worth making. Now there are men on tables with metal inside them and nobody able to say where.',
            speaker: 'MARIE',
            dialogue: 'Physics can wait four years. A surgeon working blind cannot wait four minutes.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'curie-card-1914-war' },
          { type: 'flag', flag: 'curie.wartimeTurn', value: true },
          { type: 'resources', effects: { funds: -1, wellbeing: -1 } },
        ],
        historicalNote:
          'A place-neutral telling of the 1914 mobilisation and Curie’s decision to turn her work toward wartime radiography. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'curie-petites-curies',
    characterId: 'curie',
    chapterId: 'crisis',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'curie-wartime-radiology', priority: 88 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Twenty Cars and a Hundred and Fifty Women',
        locationLabel: 'Paris and the front',
        yearLabel: '1914–1918',
        image: {
          setting: 'a converted touring car fitted as a mobile radiography unit parked at a field hospital',
          year: 1916,
          characters: ['curie'],
          mood: 'practical, tireless, unglamorous',
          details: ['a touring car with the seats removed', 'a dynamo belted off the engine', 'a folding screen and dark curtain', 'a crate of glass plates'],
          alt: 'A converted touring car fitted as a mobile X-ray unit standing outside a field hospital.',
        },
        pages: [
          {
            id: 'vehicle',
            narration:
              'The vehicle is a touring body with the seats taken out, a generator belted off the engine, a tube, a screen, a curtain and a crate of plates. She begs the first from a countess, the second from a manufacturer, and the third from anyone who will listen.',
          },
          {
            id: 'driving',
            narration:
              'She learns to drive. She learns to change a tyre and to clean a carburettor in the road. She learns enough anatomy to place a fragment to within a centimetre. She is forty-seven and does none of it elegantly.',
            speaker: 'MARIE',
            dialogue: 'The surgeon does not need to know what I believe. He needs to know where the metal is.',
          },
          {
            id: 'school',
            narration:
              'Then the multiplication: two hundred fixed posts, and a school in the emptied institute that takes in a hundred and fifty women as clerks and typists and sends them out able to run a plate and read it. A million examinations before the armistice. No one keeps a list of their names.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.petitesCuries', value: true },
          { type: 'resources', effects: { standing: 1, health: -1, network: 2 } },
        ],
        historicalNote:
          'Curie equipped around twenty mobile radiography vehicles and some two hundred fixed installations, learned to drive and to operate the equipment herself, and trained roughly 150 women as radiographic technicians. Individual details of the scene are dramatized.',
      },
    ],
  },
  {
    id: 'curie-irene-front',
    characterId: 'curie',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 64 },
    once: true,
    variants: [
      {
        id: 'at-a-post',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'projectCompleted', projectId: 'curie-wartime-radiology' },
        ],
        title: 'Seventeen, and Holding the Plate',
        locationLabel: 'a field hospital',
        yearLabel: '1916',
        image: {
          setting: 'a field hospital darkroom with wet plates hanging and a young woman marking one with a grease pencil',
          year: 1916,
          characters: ['curie'],
          mood: 'pride kept firmly under control',
          details: ['wet plates on a line', 'a grease pencil', 'a red safelight', 'a duty log in two handwritings'],
          alt: 'Wet photographic plates hanging on a line in a field hospital darkroom under a dim lamp.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'Her daughter is seventeen and running a post of her own, which required a certificate, a permit, and a mother who signed both without a speech.',
          },
          {
            id: 'work',
            narration: 'In the darkroom Irène marks a plate with a grease pencil and hands it to a surgeon twice her age without being asked twice.',
            speaker: 'IRÈNE',
            dialogue: 'They argue with me until the first plate. After that they only ask how long it takes.',
          },
          {
            id: 'log',
            narration:
              'The duty log is in two handwritings, hers and her mother’s, and it is not obvious at a glance which is which. Marie notices this and says nothing about it for the rest of her life.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.ireneTrained', value: true },
          { type: 'resources', effects: { wellbeing: 1, network: 1 } },
        ],
        historicalNote:
          'Irène Curie worked alongside her mother on wartime radiography from the age of seventeen and ran installations herself. The dialogue and the shared log are dramatized.',
      },
      {
        id: 'in-the-cellar',
        conditions: [{ type: 'yearAtLeast', year: 1915 }],
        title: 'The Cellar Course',
        yearLabel: '1915',
        image: {
          setting: 'a basement teaching room with a demonstration X-ray set and rows of women taking notes',
          year: 1915,
          characters: ['curie'],
          mood: 'brisk instruction under a low ceiling',
          details: ['a demonstration tube and screen', 'rows of notebooks', 'a low vaulted ceiling', 'a hand-drawn anatomical chart'],
          alt: 'A basement teaching room with a demonstration X-ray set and rows of women taking notes.',
        },
        pages: [
          {
            id: 'class',
            narration:
              'The course runs six weeks in a cellar. Electricity, anatomy, the geometry of a shadow, and how to answer a colonel who says the equipment is not required. Her daughter takes the same course and is graded no differently.',
            speaker: 'IRÈNE',
            dialogue: 'You taught me the arithmetic. Do not now decide that I am too young to use it.',
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.ireneTrained', value: true }],
        historicalNote:
          'Curie ran a training course for women radiographic technicians in which her daughter also trained. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'curie-crisis-closing',
    characterId: 'curie',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'the-case-comes-home',
        conditions: [
          { type: 'narrativeFlag', flag: 'curie.gramInHand' },
          { type: 'choiceWas', choiceKey: 'curie-crisis-opening:radium', choiceId: 'bordeaux' },
        ],
        title: 'A Receipt for One Gram',
        yearLabel: '1918',
        image: {
          setting: 'a laboratory strong-room where a lead-lined case is being unlocked and checked against a receipt',
          year: 1918,
          characters: ['curie'],
          mood: 'closure, exhaustion, small ceremony',
          details: ['a lead-lined case', 'a stamped receipt', 'a strong-room door', 'a hand-written inventory'],
          alt: 'A lead-lined case open in a strong room beside a stamped paper receipt.',
        },
        pages: [
          {
            id: 'return',
            narration:
              'The case comes back on an ordinary train and goes into the strong room, and she checks it against the receipt she was given four years ago, because she is the sort of person who keeps a receipt for four years.',
          },
          {
            id: 'ledger',
            narration:
              'The bells go on all afternoon. Nobody records the radiography as a discovery; it is only a very large number of men who can still walk. She writes the total in the log and rules a line under it.',
          },
        ],
        historicalNote:
          'The French radium stock was moved to Bordeaux in 1914 and returned to Paris; Curie’s wartime radiography work received little formal recognition in France at the time. The receipt is dramatized.',
      },
      {
        id: 'the-notebooks-counted',
        conditions: [{ type: 'choiceWas', choiceKey: 'curie-crisis-opening:radium', choiceId: 'bordeaux' }],
        title: 'Forty Years, Counted Back In',
        yearLabel: '1918',
        image: {
          setting: 'a strongbox open on a table with stacks of laboratory notebooks being counted back onto a shelf',
          year: 1918,
          characters: ['curie'],
          mood: 'relief expressed as an inventory',
          details: ['an open strongbox', 'stacks of worn notebooks', 'a hand-written inventory with ticks against it', 'an empty shelf being filled'],
          alt: 'An open strongbox on a table beside stacks of worn notebooks and a ticked inventory list.',
        },
        pages: [
          {
            id: 'unpacking',
            narration:
              'The strongbox comes back on an ordinary train and she does not open it in the hall. She opens it upstairs, alone, with the inventory beside her, and counts the notebooks onto the shelf against the list.',
          },
          {
            id: 'total',
            narration:
              'All of them. She ticks the last line, writes the date, and finds that her hands are not quite steady, which she puts down to the cold in the room and to nothing else.',
            speaker: 'MARIE',
            dialogue: 'Anyone can buy the material again. This is the part that could not have been replaced.',
          },
        ],
        historicalNote:
          'A divergent closing for a life whose wartime evacuation moved notebooks and a small stock rather than the national radium. Curie in fact moved the French radium to Bordeaux; the inventory here is dramatized.',
      },
      {
        id: 'default',
        title: 'The Sheets Come Off',
        yearLabel: '1918',
        image: {
          setting: 'a laboratory where dust sheets are being pulled off benches in November light',
          year: 1918,
          characters: ['curie'],
          mood: 'return, with a cost not yet counted',
          details: ['dust sheets half-pulled from benches', 'crates being opened', 'a cracked window pane', 'a list pinned to a door'],
          alt: 'Dust sheets half pulled from laboratory benches as crates are opened.',
        },
        pages: [
          {
            id: 'quiet',
            narration:
              'The guns stop and the building goes quiet in a different key. The sheets come off the benches. Some of the people who will not be coming back to them were her students, and their names are on a list pinned inside the door.',
          },
          {
            id: 'cost',
            narration:
              'Four years of standing beside working tubes without shielding worth the name. She is fifty-one and she notices that stairs have become a subject. She does not write that in any log.',
          },
        ],
        historicalNote:
          'Curie and her wartime radiographers worked with minimal shielding for four years. The framing is dramatized; her later illness is documented.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Legacy, 1918–1934
  // -------------------------------------------------------------------------
  {
    id: 'curie-legacy-opening',
    characterId: 'curie',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'after-the-north',
        conditions: [
          { type: 'narrativeFlag', flag: 'curie.inParis' },
          { type: 'choiceWas', choiceKey: 'curie-second-nobel:stockholm', choiceId: 'go' },
        ],
        title: 'More Applications Than Benches',
        locationLabel: 'Paris',
        yearLabel: '1918–1919',
        image: {
          setting: 'a director’s office with a stack of application letters and a plan of laboratory benches',
          year: 1919,
          characters: ['curie'],
          mood: 'authority earned and expensive',
          details: ['a stack of letters in several hands', 'a bench allocation plan', 'two medals in a drawer, closed', 'a window onto a small garden'],
          alt: 'A stack of application letters beside a laboratory bench plan on a director’s desk.',
        },
        pages: [
          {
            id: 'weight',
            narration:
              'Two prizes and a war have made her a name that opens doors, which is a currency she has never enjoyed spending and spends daily. The medals are in a drawer. The drawer is shut.',
          },
          {
            id: 'letters',
            narration:
              'On the desk there are more applications than there are benches. Among them are hands that other laboratories in this city return unopened: women, Poles, Chinese, Brazilians, a Romanian who has written in three languages in case one of them works.',
            speaker: 'IRÈNE',
            dialogue: 'You cannot take everyone, Maman. There are twelve places.',
          },
          {
            id: 'doors',
            narration: 'Twelve places, and a decision that will decide what the building is for.',
            choices: [
              {
                id: 'open-to-women',
                label: 'Fill the benches with the people nobody else will take',
                effects: [
                  { type: 'flag', flag: 'curie.doorsOpen', value: true },
                  { type: 'theme', theme: 'openDoors', amount: 2 },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                ],
              },
              {
                id: 'best-only',
                label: 'Take the strongest candidates and let that argument make itself',
                effects: [
                  { type: 'flag', flag: 'curie.meritOnly', value: true },
                  { type: 'theme', theme: 'openDoors', amount: 1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The Institut du Radium under Curie trained an unusually international cohort and an unusually high proportion of women researchers for its period. The letters, the numbers and the dialogue are dramatized.',
      },
      {
        id: 'no-institute',
        conditions: [
          { not: { type: 'narrativeFlag', flag: 'curie.inParis' } },
          { type: 'projectNotCompleted', projectId: 'curie-radium-institute' },
        ],
        title: 'A Queue at a Door She Does Not Own',
        yearLabel: '1918–1919',
        image: {
          setting: 'a small room where letters of application are spread on a bed because the table is in use',
          year: 1919,
          characters: ['curie'],
          mood: 'authority without a building',
          details: ['letters spread across a bed', 'a borrowed key on a ring', 'a list of names with places crossed out', 'a cold stove'],
          alt: 'Letters of application spread across a bed beside a borrowed key and a crossed-through list of names.',
        },
        pages: [
          {
            id: 'letters',
            narration:
              'The war has left her a name, a daughter who can run a laboratory, and a body that reports for work each morning with complaints she declines to write down. It has not left her a building. The letters come anyway.',
          },
          {
            id: 'benches',
            narration:
              'They are asking for benches she does not have. What she has instead is a name that opens other people’s doors, and she has worked out that it will open about twelve of them before the novelty wears off.',
            speaker: 'IRÈNE',
            dialogue: 'You cannot place everyone, Maman. Twelve, if you spend the whole of it.',
          },
          {
            id: 'doors',
            narration: 'Twelve places, and a decision that will decide what the name is for.',
            choices: [
              {
                id: 'open-to-women',
                label: 'Spend it on the people nobody else will take',
                effects: [
                  { type: 'flag', flag: 'curie.doorsOpen', value: true },
                  { type: 'theme', theme: 'openDoors', amount: 2 },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                ],
              },
              {
                id: 'best-only',
                label: 'Spend it on the strongest candidates and let that argument make itself',
                effects: [
                  { type: 'flag', flag: 'curie.meritOnly', value: true },
                  { type: 'theme', theme: 'openDoors', amount: 1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A divergent opening for a life that never obtained a research institute of its own. Curie in fact directed the Institut du Radium from 1919 and placed an unusually international and largely female cohort; here the same patronage is exercised without a building.',
      },
      {
        id: 'default',
        title: 'Twelve Places',
        yearLabel: '1918–1919',
        image: {
          setting: 'a plain office with letters of application spread out and a bench allocation plan',
          year: 1919,
          characters: ['curie'],
          mood: 'weighing lives against benches',
          details: ['letters in several hands', 'a bench plan', 'a pen laid across a list', 'grey daylight'],
          alt: 'Letters of application spread across a desk beside a laboratory bench plan.',
        },
        pages: [
          {
            id: 'after',
            narration:
              'The war has left her a laboratory, a daughter who can run one, and a body that reports for work each morning with complaints she declines to write down.',
          },
          {
            id: 'letters',
            narration:
              'There are more applications than benches, and some of the envelopes have come a long way to be opened by somebody who will actually open them.',
            speaker: 'IRÈNE',
            dialogue: 'You cannot take everyone, Maman. There are twelve places.',
          },
          {
            id: 'doors',
            narration: 'Twelve places, and a decision that will decide what the building is for.',
            choices: [
              {
                id: 'open-to-women',
                label: 'Fill the benches with the people nobody else will take',
                effects: [
                  { type: 'flag', flag: 'curie.doorsOpen', value: true },
                  { type: 'theme', theme: 'openDoors', amount: 2 },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                ],
              },
              {
                id: 'best-only',
                label: 'Take the strongest candidates and let that argument make itself',
                effects: [
                  { type: 'flag', flag: 'curie.meritOnly', value: true },
                  { type: 'theme', theme: 'openDoors', amount: 1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'A place-neutral opening for the postwar years. Curie’s postwar laboratory leadership and her daughter’s role in it are documented; the specific letters are dramatized.',
      },
    ],
  },
  {
    id: 'curie-institute',
    characterId: 'curie',
    chapterId: 'legacy',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'curie-radium-institute', priority: 80 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Roses Between the Wings',
        yearLabel: '1919–1934',
        image: {
          setting: 'a small garden of roses and lime trees between two low laboratory wings',
          year: 1925,
          characters: ['curie'],
          mood: 'a life’s work made permanent',
          details: ['rose beds between two brick wings', 'young lime trees', 'open laboratory windows', 'a watering can left by a door'],
          alt: 'A small rose garden with young lime trees between two low brick laboratory wings.',
        },
        pages: [
          {
            id: 'garden',
            narration:
              'The institute is two wings and a garden between them, and the garden was hers to insist on. Roses, and limes for shade. Nobody who spends a day handling radium should have to look up at nothing but brick.',
          },
          {
            id: 'benches',
            narration:
              'A dozen benches, and before the decade is out more than a third of them are worked by women — a proportion no other laboratory she has ever set foot in can be bothered to reach. Half the names in the corridor are foreign and stay that way.',
            speaker: 'MARIE',
            dialogue: 'One does not build a laboratory for oneself. One builds it for whoever arrives the year after one has stopped.',
          },
          {
            id: 'measure',
            narration:
              'In the measurement room the standard sits in its safe and the world writes to compare itself against it. She signs the certificates herself, in a hand that is getting larger every year.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.instituteRunning', value: true },
          { type: 'resources', effects: { standing: 2, network: 2 } },
        ],
        historicalNote:
          'Curie directed the Institut du Radium, which trained a notably international and substantially female cohort of researchers, and maintained the international radium standard. The garden and the dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'curie-einstein-committee',
    characterId: 'curie',
    chapterId: 'legacy',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 66 },
    once: true,
    variants: [
      {
        id: 'einstein-arrives',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1930 },
          { type: 'otherCharacterIsHuman', characterId: 'einstein' },
          { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'paris', yearTolerance: 2 },
        ],
        title: 'The Committee, and the Man Without a Hat',
        locationLabel: 'Paris',
        yearLabel: '1922–1925',
        image: {
          setting: 'a committee room with a long table, headphones for interpretation, and a window onto a wet street',
          year: 1924,
          characters: ['curie', 'einstein'],
          mood: 'wry solidarity between two very tired people',
          details: ['a long table with blotters', 'a printed agenda in two languages', 'a coat dripping on a stand', 'a carafe of water'],
          alt: 'Two people at the end of a long committee table with a printed agenda between them.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'He has come by whatever road he has been travelling and arrives without a hat, having missed a train and been pleased about it. The committee is meant to make the scholars of Europe speak to one another again, and has so far succeeded in producing an agenda in two languages.',
          },
          {
            id: 'aside',
            narration: 'He sits down beside her and reads the agenda upside down.',
            speaker: 'EINSTEIN',
            dialogue: 'They have put us on a committee, Madame, because committees are cheaper than laboratories.',
          },
          {
            id: 'work',
            narration:
              'She does not laugh often and she laughs. Then she takes the meeting back through the agenda item by item until something is actually decided, and he lets her, and signs where she points.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 2, flag: 'intellectual-cooperation' },
          { type: 'flag', flag: 'curie.committeeYears', value: true },
          { type: 'resources', effects: { network: 1, standing: 1 } },
        ],
        historicalNote:
          'Curie and Einstein both served on the League of Nations’ International Committee on Intellectual Cooperation in the 1920s and were on cordial terms. The wording of the exchange is invented.',
      },
      {
        id: 'einstein-from-berlin',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1930 },
          { type: 'otherCharacterIsNpc', characterId: 'einstein' },
          { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin', yearTolerance: 2 },
        ],
        title: 'Two Signatures on a Thin Document',
        yearLabel: '1922–1925',
        image: {
          setting: 'a committee room with a long table and two chairs occupied at one end',
          year: 1924,
          characters: ['curie', 'einstein'],
          mood: 'exasperated collaboration',
          details: ['a long table', 'a resolution in draft with crossings-out', 'a carafe of water', 'winter light at high windows'],
          alt: 'A long committee table with a draft resolution and two occupied chairs at one end.',
        },
        pages: [
          {
            id: 'meeting',
            narration:
              'He comes in from Berlin for the session and is late, and half the room forgives him on sight, which she notes with the detachment of somebody who has never once been forgiven on sight.',
          },
          {
            id: 'exchange',
            narration: 'The draft resolution says almost nothing in four paragraphs. He pushes it back across the table to her.',
            speaker: 'EINSTEIN',
            dialogue: 'You cross out. I have no talent for it; I only add.',
          },
          {
            id: 'after',
            narration:
              'What is left afterwards is two paragraphs that commit somebody to something. Afterwards he asks about Irène’s work, in detail, and listens to the answer, which is why she keeps coming back to a committee she despises.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 2, flag: 'intellectual-cooperation' },
          { type: 'flag', flag: 'curie.committeeYears', value: true },
          { type: 'resources', effects: { network: 1, standing: 1 } },
        ],
        historicalNote:
          'Both served on the League of Nations committee on intellectual cooperation in the 1920s; Einstein was based in Berlin through that period. The dialogue is dramatized.',
      },
      {
        id: 'empty-chair',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'The Chair Beside Hers',
        yearLabel: '1922–1925',
        image: {
          setting: 'a committee room where one chair at the table stays empty and a letter lies on the blotter',
          year: 1924,
          characters: ['curie'],
          mood: 'obligation without company',
          details: ['an empty chair pushed in', 'a letter in a sloping hand', 'a printed agenda', 'a carafe and one glass'],
          alt: 'An empty chair at a committee table beside a blotter with an open letter on it.',
        },
        pages: [
          {
            id: 'session',
            narration:
              'The committee is supposed to persuade the scholars of Europe to speak to one another again. She attends because refusing would have looked like despair, and despair is not a position she is willing to be photographed in.',
          },
          {
            id: 'letter',
            narration:
              'The chair beside hers stays empty this session. There is a letter instead, in a hand that slopes downhill, complaining at length about committees and asking, at the end and almost in passing, whether her daughter is well.',
            speaker: 'MARIE',
            dialogue: 'He will not come, he will not resign, and he will send four pages about why. Read the last paragraph first; it is the only one he meant.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.committeeYears', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Curie served on the League of Nations committee for years; correspondence with colleagues elsewhere in Europe was routine. The letter and the dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'curie-gram-of-radium',
    characterId: 'curie',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'no-bench',
        conditions: [
          { type: 'yearAtLeast', year: 1921 },
          { type: 'yearAtMost', year: 1928 },
          { not: { type: 'narrativeFlag', flag: 'curie.inParis' } },
          { type: 'projectNotCompleted', projectId: 'curie-radium-institute' },
        ],
        title: 'Nowhere to Put a Gram',
        yearLabel: '1921',
        image: {
          setting: 'a modest room where a printed subscription appeal lies open beside a borrowed key on a ring',
          year: 1921,
          characters: ['curie'],
          mood: 'an honour that arrives at the wrong address',
          details: ['a printed appeal from abroad', 'a borrowed key on a ring', 'a strongbox too small for the purpose', 'an unfinished reply'],
          alt: 'A printed appeal from abroad open on a table beside a borrowed key and a small strongbox.',
        },
        pages: [
          {
            id: 'offer',
            narration:
              'A journalist across an ocean proposes a subscription: women who have never met her will buy her a gram of radium. The appeal is printed before anybody thinks to ask where she would keep it.',
          },
          {
            id: 'inventory',
            narration:
              'She sits down and makes the honest list. No strong room. No safe with a number on it. A bench she does not own, in a building she is let into, behind a door somebody else locks at seven.',
            speaker: 'MARIE',
            dialogue: 'They are offering me a gram of radium and I would have to carry it home in my coat. Ask them for the building first.',
          },
          {
            id: 'reply',
            narration:
              'She writes back accepting, on one condition that is not a condition at all but an invoice, and posts it, and goes on working in the borrowed room while an ocean decides what to do about her.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.americanGram', value: true },
          { type: 'resources', effects: { funds: 2, standing: 1, network: 1 } },
        ],
        historicalNote:
          'The 1921 American subscription that bought a gram of radium for Curie’s laboratory is documented. This variant is written for a life that has no institute to receive it; her refusal to profit personally from radium is documented.',
      },
      {
        id: 'short-of-funds',
        conditions: [
          { type: 'yearAtLeast', year: 1921 },
          { type: 'yearAtMost', year: 1928 },
          { not: { type: 'resourceAtLeast', resource: 'funds', value: 4 } },
        ],
        title: 'A Subscription of Strangers',
        locationLabel: 'across the Atlantic',
        yearLabel: '1921',
        image: {
          setting: 'a ship’s deck and, later, a reception hall with a lead casket on a plinth',
          year: 1921,
          characters: ['curie'],
          mood: 'gratitude and depletion in equal measure',
          details: ['a small lead casket on a plinth', 'a ship rail in fog', 'a printed programme of receptions', 'a wrist in a sling'],
          alt: 'A small lead casket on a plinth in a reception hall beside a printed programme.',
        },
        pages: [
          {
            id: 'offer',
            narration:
              'A journalist proposes a subscription: women across a country she has never visited will buy her a gram of radium, because her own laboratory cannot afford one. It costs a fortune and arrives as an invitation she cannot decline without insulting everybody who paid.',
          },
          {
            id: 'tour',
            narration:
              'Six weeks of halls, honorary degrees, and hands. Thousands of hands. By the third week her right wrist is strapped and her daughters shake for her while she stands and smiles at a photographer she cannot see properly.',
            speaker: 'MARIE',
            dialogue: 'They have given me a gram of an element I found. I would have settled for an assistant and a quiet fortnight.',
          },
          {
            id: 'casket',
            narration:
              'The gram travels home in a lead casket with a lock, and goes into the strong room, and is used. Every experiment done with it for a decade is done because several thousand women each sent what they could.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.americanGram', value: true },
          { type: 'resources', effects: { funds: 3, standing: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'In 1921 an American public subscription funded a gram of radium for Curie’s laboratory and she travelled to receive it, finding the tour physically exhausting. The dialogue is dramatized.',
      },
      {
        id: 'well-funded',
        conditions: [
          { type: 'yearAtLeast', year: 1921 },
          { type: 'yearAtMost', year: 1928 },
        ],
        title: 'The Price of a Gram',
        yearLabel: '1921',
        image: {
          setting: 'a desk with a subscription list, a printed appeal, and an accounts ledger',
          year: 1921,
          characters: ['curie'],
          mood: 'administration as a form of care',
          details: ['a subscription list', 'a printed appeal', 'an accounts ledger', 'a lead casket in the corner'],
          alt: 'A subscription list and printed appeal on a desk beside an open accounts ledger.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'A gram of radium costs more than the building it will live in. She knows the figure to the franc because she has written it at the top of every appeal she has signed for four years.',
            speaker: 'MARIE',
            dialogue: 'I have never once asked for money for myself. It is remarkable how much easier the other kind of asking is.',
          },
          {
            id: 'use',
            narration:
              'When it arrives it goes into the strong room and straight into use. She permits herself one look at it in the dark, and then it is a working stock like any other, entered in the log.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.americanGram', value: true },
          { type: 'resources', effects: { funds: 2, standing: 1 } },
        ],
        historicalNote:
          'Curie raised funds continually for radium stock for her laboratory and took no personal profit from radium. The scene is dramatized.',
      },
    ],
  },
  {
    id: 'curie-hands-and-eyes',
    characterId: 'curie',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'worn',
        conditions: [
          { type: 'yearAtLeast', year: 1925 },
          { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
        ],
        title: 'Write It Larger',
        yearLabel: '1925–1932',
        image: {
          setting: 'a desk with lecture notes written in very large letters and a pair of tinted spectacles',
          year: 1928,
          characters: ['curie'],
          mood: 'dignity maintained against evidence',
          details: ['notes in letters two centimetres high', 'tinted spectacles', 'a hospital appointment card with a false name', 'gloves left on the desk'],
          alt: 'Lecture notes written in unusually large letters beside a pair of tinted spectacles.',
        },
        pages: [
          {
            id: 'operations',
            narration:
              'The cataract operations are booked under a name that is not hers, so that no newspaper can print a sentence about the eyes of the woman who found radium. There are four of them across the decade.',
          },
          {
            id: 'notes',
            narration:
              'Afterwards she reads with the page held close to her face and lectures from notes written in letters two centimetres high, prepared the night before by somebody she has sworn to secrecy.',
            speaker: 'MARIE',
            dialogue: 'Write it larger. I can still do the arithmetic. I simply cannot see it.',
          },
          {
            id: 'hands',
            narration:
              'Her fingertips have been cracked and hard and half numb for twenty years, and she keeps her gloves on in company. In public she does not connect any of this to the work. In private she does not discuss it either.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'curie.bodyPayingUp', value: true },
          { type: 'resources', effects: { health: -1 } },
        ],
        historicalNote:
          'Curie underwent several cataract operations under an assumed name and had long-standing damage to her fingertips; she publicly resisted attributing her ill health to radium. The dialogue is dramatized.',
      },
      {
        id: 'steady',
        conditions: [{ type: 'yearAtLeast', year: 1925 }],
        title: 'Gloves On',
        yearLabel: '1928',
        image: {
          setting: 'a laboratory bench with a pair of worn gloves laid across a notebook',
          year: 1928,
          characters: ['curie'],
          mood: 'a private accounting',
          details: ['worn gloves across a notebook', 'a lead brick', 'a pair of long tongs', 'a page of dosimetry figures'],
          alt: 'A worn pair of gloves laid across a notebook beside a lead brick and long tongs.',
        },
        pages: [
          {
            id: 'tongs',
            narration:
              'There are tongs now, and lead bricks, and rules pinned to the wall about how long a person may stand where. She wrote the rules. She keeps them better for other people than for herself, and knows it.',
            speaker: 'MARIE',
            dialogue: 'The young ones will keep their hands. That is the part of this I intend to be proud of.',
          },
        ],
        effects: [{ type: 'flag', flag: 'curie.bodyPayingUp', value: true }],
        historicalNote:
          'Protective practice at the Institut du Radium tightened over the 1920s, largely at Curie’s insistence, though her own long exposure was already done. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'curie-legacy-closing',
    characterId: 'curie',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'the-corridor',
        conditions: [{ type: 'projectCompleted', projectId: 'curie-radium-institute' }],
        title: 'A Name on Every Door',
        yearLabel: '1934',
        image: {
          setting: 'a laboratory corridor with a hand-lettered name card on every door',
          year: 1934,
          characters: ['curie'],
          mood: 'succession, quietly complete',
          details: ['name cards in a dozen hands', 'coats on hooks', 'a corridor window onto the rose garden', 'a swing door propped open'],
          alt: 'A laboratory corridor lined with doors, each bearing a small hand-lettered name card.',
        },
        pages: [
          {
            id: 'doors',
            narration:
              'She walks the corridor slowly now, and it takes a while, because she stops at the doors. A dozen name cards in a dozen hands, several of which she cannot read at this distance and can recite anyway.',
          },
          {
            id: 'handover',
            narration:
              'Behind one of the doors her daughter is doing something with alpha particles that will turn out to matter enormously. Marie asks a question about the counting statistics, is answered properly, and goes back to her own room satisfied.',
          },
        ],
        historicalNote:
          'Curie directed the Institut du Radium until her death in 1934; Irène Joliot-Curie was by then conducting the work that would earn her own Nobel Prize. The corridor scene is dramatized.',
      },
      {
        id: 'default',
        title: 'The Notebooks',
        yearLabel: '1934',
        image: {
          setting: 'a desk with a stack of worn laboratory notebooks and a lead-lined box open beside them',
          year: 1934,
          characters: ['curie'],
          mood: 'summing up without ceremony',
          details: ['worn notebooks with dark fingerprints', 'a lead-lined box', 'a pen laid down', 'late afternoon light'],
          alt: 'A stack of worn laboratory notebooks beside an open lead-lined box on a desk.',
        },
        pages: [
          {
            id: 'stack',
            narration:
              'The notebooks go back forty years and the earliest of them still carry her fingerprints in the margins, dark where she turned the pages with the day’s work on her hands.',
          },
          {
            id: 'box',
            narration:
              'They are put in a lead-lined box, because they are still busy doing what they were written about. Anybody who wants to read them will have to sign for the privilege. She finds that reasonable, and rather likes it.',
          },
        ],
        historicalNote:
          'Curie’s laboratory notebooks remain radioactive and are consulted only under precaution. Her reaction to that fact is dramatized.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Epilogue
  // -------------------------------------------------------------------------
  {
    id: 'curie-epilogue',
    characterId: 'curie',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'full-and-open',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'curie-radiation-measurement',
              'curie-polonium-radium',
              'curie-isolate-radium-metal',
              'curie-medical-radiology',
              'curie-wartime-radiology',
              'curie-radium-institute',
            ],
            count: 4,
          },
          { type: 'choiceWas', choiceKey: 'curie-legacy-opening:doors', choiceId: 'open-to-women' },
        ],
        title: 'The People Who Came After',
        locationLabel: 'the mountains',
        yearLabel: '1934',
        image: {
          setting: 'a bright sanatorium room in the mountains in July with the window open',
          year: 1934,
          characters: ['curie'],
          mood: 'quiet, clear, unafraid',
          details: ['an open window onto pines', 'a thermometer on the sill', 'a blanket folded at the foot of the bed', 'a notebook and pencil'],
          alt: 'An open window onto pine trees in a bright, plain room with a notebook on the sill.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'A sanatorium in the mountains in July, the window open onto pines. She asks what the thermometer reads and is told, and corrects the reading, because whoever is holding it is standing in the sun.',
          },
          {
            id: 'ledger',
            narration:
              'Two elements. A word the whole subject uses. A gram weighed out of tons. A million examinations behind the lines. And a corridor of doors in Paris with the wrong sort of names on them, which is the entry she would rather have underlined.',
          },
          {
            id: 'last',
            narration:
              'Her daughter will win a prize of her own within the year, in the same building, using the same standard in the same safe.',
            speaker: 'MARIE',
            dialogue: 'One is never finished. One only runs out of afternoons.',
          },
        ],
        historicalNote:
          'Curie died in 1934 of aplastic anaemia, almost certainly caused by long exposure to radiation, at a sanatorium in the French Alps; Irène and Frédéric Joliot-Curie received the Nobel Prize in Chemistry the following year. The closing line is dramatized, not a quotation.',
      },
      {
        id: 'full',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'curie-radiation-measurement',
              'curie-polonium-radium',
              'curie-isolate-radium-metal',
              'curie-medical-radiology',
              'curie-wartime-radiology',
              'curie-radium-institute',
            ],
            count: 3,
          },
        ],
        title: 'What Is Left in the Safe',
        yearLabel: '1934',
        image: {
          setting: 'a laboratory strong-room with a sealed standard in its case and a signed certificate on the shelf',
          year: 1934,
          characters: ['curie'],
          mood: 'work outliving the worker',
          details: ['a sealed standard in a case', 'a signed certificate', 'a strong-room shelf', 'a single overhead lamp'],
          alt: 'A sealed measurement standard in its case on a strong-room shelf beside a signed certificate.',
        },
        pages: [
          {
            id: 'safe',
            narration:
              'What she leaves in the safe is a sealed tube that the rest of the world measures itself against, and a folder of certificates in her own handwriting, each one signed for somebody in another country who wrote and asked.',
          },
          {
            id: 'cost',
            narration:
              'The illness that takes her has no clean name yet and everybody in the building can name it anyway. She spent thirty-five years standing beside the thing she found, and she would tell you the figures were worth it, in that flat voice, as though it were a matter of arithmetic.',
          },
          {
            id: 'last',
            narration: 'The last log entry is in the large hand of her final years, and the columns still add up.',
            speaker: 'MARIE',
            dialogue: 'Read it back to me. If it is right, rule the line.',
          },
        ],
        historicalNote:
          'Curie maintained the international radium standard and issued certified comparisons; she died in 1934 of aplastic anaemia associated with long radiation exposure. The dialogue is dramatized.',
      },
      {
        id: 'set-aside',
        conditions: [{ type: 'choiceWas', choiceKey: 'curie-pierre-death:own-work', choiceId: 'put-it-down' }],
        title: 'The Season That Became a Decade',
        yearLabel: '1934',
        image: {
          setting: 'a shelf of tied notebooks above a desk laid out for teaching rather than for measurement',
          year: 1934,
          characters: ['curie'],
          mood: 'a reckoning without self-pity',
          details: ['tied notebooks on a high shelf', 'marked examination papers', 'a dry inkwell', 'late light on a wall'],
          alt: 'Tied notebooks on a high shelf above a desk stacked with marked examination papers.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'She put the radiation work aside for a season, and the season took the shape of a teaching post, and the post took the shape of a life. The notebooks stayed on the shelf. She dusted around them for twenty-eight years.',
          },
          {
            id: 'students',
            narration:
              'What she has instead is several hundred people who can hold a needle at zero and count aloud, and two of them have gone further with the question than she did. She reads their papers with a magnifying glass and marks the arithmetic.',
          },
          {
            id: 'last',
            narration: 'On the last afternoon she asks for the top shelf, and for the string to be cut, and for somebody to read her the first page.',
            speaker: 'MARIE',
            dialogue: 'I stopped for a winter. Write that down accurately. It was not the grief that stopped me, it was the coal.',
          },
        ],
        historicalNote:
          'A divergent ending for a life that set the radiation work aside after Pierre Curie’s death. In the record she did not; she took his chair and continued. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Column, Unfinished',
        yearLabel: '1934',
        image: {
          setting: 'a plain room with a long column of figures pinned to the wall and a chair drawn up to it',
          year: 1934,
          characters: ['curie'],
          mood: 'a life measured honestly',
          details: ['a long pinned column of figures', 'a chair drawn up close', 'a folded pair of spectacles', 'grey daylight'],
          alt: 'A long column of handwritten figures pinned to a wall with a chair drawn up close to it.',
        },
        pages: [
          {
            id: 'wall',
            narration:
              'The column on the wall is longer than it was and it still does not close. She sits close to it, because that is how she reads now, and follows it down with a finger to the place where the question is.',
          },
          {
            id: 'own',
            narration:
              'She was told, at sixteen, in Russian, that there was no room for her. She has spent every year since being difficult about that, in the most literal way available: by writing down numbers that other people had to answer.',
          },
          {
            id: 'last',
            narration: 'Whatever else the century did with her, nobody ever managed to take the notebook off the desk.',
            speaker: 'MARIE',
            dialogue: 'Nothing here is to be feared. It only has to be counted, and then counted again.',
          },
        ],
        historicalNote:
          'A closing for a life that did not reach the documented discoveries. Her exclusion from Warsaw University and her lifelong insistence on quantitative measurement are documented; the closing line is dramatized and is not a quotation.',
      },
    ],
  },
];
