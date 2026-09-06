import type { StoryScene } from '../../types/story';

const sourceIds = ['godel'];

/** Board context cards told in full by scenes in this file. */
export const GODEL_REPLACED_CONTEXT_CARDS: string[] = [
  'godel-card-1930',
  'godel-card-1938-anschluss',
  'godel-card-1940-emigration',
  'godel-card-1948-citizenship',
];

export const GODEL_STORY_SCENES: StoryScene[] = [
  // -------------------------------------------------------------------------
  // Prologue
  // -------------------------------------------------------------------------
  {
    id: 'godel-prologue-brunn',
    characterId: 'godel',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Boy Who Was Called Mr Why',
        locationLabel: 'Brno',
        yearLabel: '1906',
        image: {
          setting: 'a textile manufacturing town in Moravia under a low April sky, 1906',
          year: 1906,
          characters: ['godel'],
          mood: 'orderly, damp, watchful',
          details: ['a mill chimney', 'bolts of woollen cloth on a handcart', 'a wet cobbled hill', 'a brass door plate', 'starlings on a wire'],
          alt: 'A restrained illustration of a Moravian mill town with chimneys and wet cobbled streets in 1906.',
        },
        pages: [
          {
            id: 'town',
            narration:
              'Brünn makes cloth. The looms start before six and the whole valley hums at a pitch you stop hearing by the age of two. A German-speaking family keeps a good house on the hill above a Czech-speaking city, and in April a second son arrives, small and quiet, into a household where everything already has its place.',
          },
          {
            id: 'why',
            narration:
              'He learns to talk and then will not stop. Not chatter — questions, one after another, each one waiting properly for its answer before the next is allowed out. The household gives him a name for it and uses the name at dinner.',
            speaker: 'HIS MOTHER',
            dialogue: 'That is enough now, Herr Warum. Some things are simply how they are.',
          },
          {
            id: 'answer',
            narration:
              'He files that sentence away without arguing. It is the first thing he has been told that is plainly not true, and he can tell it is not true, and nobody in the room seems troubled by it. He decides, without knowing that he has decided anything, that he will find out where the answers are actually kept.',
          },
        ],
        historicalNote:
          'Kurt Gödel was born in Brünn (now Brno) in April 1906 into a German-speaking family in the Moravian textile industry; the family nickname der Herr Warum — Mr Why — for his persistent childhood questioning is reported in standard biographies. The dialogue is dramatized wording.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Formation, 1906-1924
  // -------------------------------------------------------------------------
  {
    id: 'godel-formation-opening',
    characterId: 'godel',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A Year in Bed with a Medical Dictionary',
        locationLabel: 'Brno',
        yearLabel: '1912–1924',
        image: {
          setting: 'a child’s sickroom in a comfortable Moravian house, curtains half drawn, winter 1912',
          year: 1912,
          characters: ['godel'],
          mood: 'hushed, feverish, meticulous',
          details: ['a thick medical dictionary', 'a thermometer in a glass', 'a folded quilt', 'a school slate', 'weak light through net curtains'],
          alt: 'A heavy medical dictionary open on a quilt in a dim child’s sickroom.',
        },
        pages: [
          {
            id: 'fever',
            narration:
              'He is six when the rheumatic fever comes. Weeks of it: the ceiling rose counted and recounted, the doctor’s boots on the stair twice a day, his mother’s hand cool and then not cool enough. Then it passes, the way weather passes, and everyone downstairs is relieved.',
          },
          {
            id: 'dictionary',
            narration:
              'He is not relieved. He takes the family medical dictionary up to the sickroom and reads the entry through twice, and the entry says that this fever can damage the heart. Nobody has told him it did not. Nobody, he notices, has told him anything he could check.',
          },
          {
            id: 'school',
            narration:
              'He recovers and goes back to school and is faultless there, in every subject, in a way that makes teachers slightly uneasy. His brother, who will become a doctor, tells him plainly that his heart is sound.',
            speaker: 'HIS BROTHER',
            dialogue: 'The physician says you are well, Kurt. You must simply take his word for it.',
          },
          {
            id: 'decide',
            narration:
              'There it is again: take the word for it. He is eight years old and standing in a corridor that smells of floor wax, and he understands that the whole world is asking him to accept things on somebody else’s say-so. He will have to decide what he does about that.',
            choices: [
              {
                id: 'proof',
                label: 'Accept nothing he cannot follow to the end himself',
                effects: [
                  { type: 'flag', flag: 'godel.provesEverything', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
              {
                id: 'watch',
                label: 'Keep his own record of his own body',
                effects: [
                  { type: 'flag', flag: 'godel.watchesHimself', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 1 },
                  { type: 'resources', effects: { health: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'trust',
                label: 'Take his brother’s word and put it away',
                effects: [
                  { type: 'flag', flag: 'godel.tookTheWord', value: true },
                  { type: 'resources', effects: { wellbeing: 2 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Gödel suffered rheumatic fever as a young child and afterwards read about it and became convinced his heart had been permanently damaged — a conviction that outlasted every medical reassurance and is treated by biographers as the beginning of his lifelong preoccupation with his health. His elder brother Rudolf became a physician. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-personal-heart',
    characterId: 'godel',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'frail',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1924 },
          { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
        ],
        title: 'Two Fingers on His Own Wrist',
        yearLabel: '1918',
        image: {
          setting: 'a schoolboy’s desk at night with a pocket watch laid beside a notebook, around 1918',
          year: 1918,
          characters: ['godel'],
          mood: 'private, exact, uneasy',
          details: ['an open pocket watch', 'a ruled notebook of figures', 'a candle stub', 'a folded scarf', 'frost on the pane'],
          alt: 'An open pocket watch beside a ruled notebook of figures on a night desk.',
        },
        pages: [
          {
            id: 'count',
            narration:
              'The watch goes on the desk face up and he finds the pulse in his wrist and counts for a quarter of a minute, four times, and writes down all four numbers because an average would hide something. The column runs down the page. It has run down many pages.',
          },
          {
            id: 'winter',
            narration:
              'It is the last winter of the war and the town is cold and thin and everyone is coughing. The numbers are within the range the dictionary gives. He does not find this as reassuring as the dictionary evidently expects him to.',
          },
          {
            id: 'said',
            narration:
              'His mother stands in the doorway with a lamp and looks at the columns and does not read them, which he appreciates.',
            speaker: 'HIS MOTHER',
            dialogue: 'Kurtele. A number is not a promise. Come and eat something warm.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.countsHimself', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Gödel kept meticulous personal records for most of his life, including notes on his own health, and his anxiety about his heart dates from childhood. This particular evening is dramatized.',
      },
      {
        id: 'steady',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1924 },
        ],
        title: 'The Quietest Boy in the Room',
        yearLabel: '1918',
        image: {
          setting: 'a Gymnasium classroom emptying at the end of a lesson, around 1918',
          year: 1918,
          characters: ['godel'],
          mood: 'contained, observant',
          details: ['chalk dust in low light', 'an inkwell', 'a satchel of books', 'a wall map of a vanished empire', 'a stove in the corner'],
          alt: 'An emptying classroom with chalk dust hanging in low winter light.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The bell goes and thirty boys go with it, and he stays to copy the last two lines off the board properly. He is not slow. He simply refuses to carry an unfinished sentence out of a room.',
          },
          {
            id: 'empire',
            narration:
              'On the wall a map still shows an empire that stopped existing in the autumn. Nobody has taken it down. He thinks that if a thing has ceased to be true, someone ought at minimum to remove it from the wall.',
          },
          {
            id: 'said',
            narration:
              'The master gathers his papers and pauses at the door, half amused, half wary of him, the way they all are.',
            speaker: 'THE MASTER',
            dialogue: 'You have never once made an error in this subject, Gödel. What do you do with an examination that cannot frighten you?',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.countsHimself', value: true },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'Gödel’s school record in Brünn was outstanding across subjects, and the collapse of Austria-Hungary in 1918 left him, at twelve, a citizen of a new state. The classroom exchange is dramatized.',
      },
    ],
  },

  {
    id: 'godel-formation-closing',
    characterId: 'godel',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'proof-road',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.provesEverything' }],
        title: 'The Trunk and the Two Certificates',
        yearLabel: '1924',
        image: {
          setting: 'a packed travelling trunk in a hallway with a train timetable on top, 1924',
          year: 1924,
          characters: ['godel'],
          mood: 'orderly, forward-leaning',
          details: ['a strapped trunk', 'a printed timetable', 'a leaving certificate in an envelope', 'an umbrella stand', 'a hall clock'],
          alt: 'A strapped travelling trunk in a hallway with a printed railway timetable resting on the lid.',
        },
        pages: [
          {
            id: 'trunk',
            narration:
              'The trunk is packed the night before and then unpacked and packed again, because the books were in the wrong order for the order in which he intends to need them. On top go the leaving certificate and a timetable he has already memorised.',
          },
          {
            id: 'ahead',
            narration:
              'He is eighteen. He intends to read physics, because physics is where the world is, and he intends to accept nothing in it that he cannot follow from the beginning to the end without help. He has no idea yet how expensive that intention is going to be.',
          },
        ],
        historicalNote:
          'Gödel completed his schooling in Brünn and left for the University of Vienna in 1924, initially intending to study theoretical physics.',
      },
      {
        id: 'default',
        title: 'What the Hill Above the Mills Is For',
        yearLabel: '1924',
        image: {
          setting: 'a hillside above a Moravian mill town at dusk, 1924',
          year: 1924,
          characters: ['godel'],
          mood: 'still, unresolved',
          details: ['mill chimneys below', 'a lit tram crossing a bridge', 'a coat over an arm', 'a folded letter', 'evening mist'],
          alt: 'A view down a hillside over mill chimneys and a lit tram at dusk.',
        },
        pages: [
          {
            id: 'view',
            narration:
              'From the hill the town is all chimneys and one lit tram crossing the river. He has been up here often enough to know exactly how long the tram takes. That is the sort of thing he knows.',
          },
          {
            id: 'question',
            narration:
              'Somewhere beyond the last chimney there are rooms where people argue about what a proof is, and he has a letter in his pocket about one of them. He has not answered it yet. He has a habit of not answering things until the answer is complete, and this one is not complete.',
          },
        ],
        historicalNote:
          'Gödel’s departure from Brünn for Vienna in 1924 is documented. This variant describes the passage of these years without that departure yet settled.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Education, 1924-1929
  // -------------------------------------------------------------------------
  {
    id: 'godel-education-opening',
    characterId: 'godel',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'vienna',
        conditions: [{ type: 'locationIs', locationId: 'vienna' }],
        title: 'A Man Who Cannot Write on the Blackboard',
        locationLabel: 'Vienna',
        yearLabel: '1924–1926',
        image: {
          setting: 'a raked university lecture theatre in Vienna with an assistant writing at the blackboard, mid-1920s',
          year: 1925,
          characters: ['godel'],
          mood: 'crowded, cold, electric',
          details: ['tiered wooden benches', 'a long blackboard', 'a lecture list pinned by the door', 'wet overcoats on hooks', 'a brass handbell'],
          alt: 'A raked lecture theatre with a long blackboard and rows of wooden benches.',
        },
        pages: [
          {
            id: 'city',
            narration:
              'Vienna in the autumn smells of coal, wet wool and coffee, and everybody in it is arguing. He takes a room, memorises the tram lines in an afternoon, and enrols to read physics, because physics is where the world is kept.',
          },
          {
            id: 'lecture',
            narration:
              'In the second year he goes, out of curiosity, to a course in number theory. The professor cannot use his hands. He sits and speaks and an assistant writes what he says, and nothing reaches the blackboard that was not already finished, perfectly, inside a man’s head.',
          },
          {
            id: 'said',
            narration:
              'The hall empties around him and he stays in his seat with his notes open, and the assistant, packing up the chalk, notices the one student who has not moved.',
            speaker: 'THE ASSISTANT',
            dialogue: 'He has not looked at a page in eleven years, you know. It is all in there, whole. Physics cannot do that.',
          },
          {
            id: 'choose',
            narration:
              'That is the sentence that does the damage. Physics is full of things that are true so far, as far as anyone has looked. Here is a subject where a thing is either finished or it is not, and where the finishing can be carried in a man’s head across eleven years without losing a comma. He has a form to fill in by Friday.',
            choices: [
              {
                id: 'physics',
                label: 'Stay with physics — the world is the thing worth explaining',
                effects: [
                  { type: 'flag', flag: 'godel.cameForPhysics', value: true },
                  { type: 'theme', theme: 'worldVsSystem', amount: 2 },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
              {
                id: 'mathematics',
                label: 'Change faculties: follow the subject that finishes',
                effects: [
                  { type: 'flag', flag: 'godel.turnedToMathematics', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'logic',
                label: 'Go behind mathematics and ask what a proof is',
                effects: [
                  { type: 'flag', flag: 'godel.wentStraightToLogic', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Gödel went to Vienna in 1924 intending to study theoretical physics and moved to mathematics after about two years, drawn in part by number theory lectures given by a professor who was paralysed and lectured entirely from memory while an assistant wrote. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Lecture List, Read Like a Menu',
        yearLabel: '1924–1926',
        image: {
          setting: 'a small desk with a printed university lecture list and a railway timetable, mid-1920s',
          year: 1925,
          characters: ['godel'],
          mood: 'deliberate, deferred, quiet',
          details: ['a printed lecture list', 'a folded timetable', 'a fountain pen', 'a coffee glass', 'a curtained window'],
          alt: 'A printed lecture list and a folded railway timetable on a small writing desk.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'The lecture list comes by post, sixty pages of it, and he reads it the way other people read a menu in a restaurant they cannot afford. Physics on Mondays. Number theory on Thursdays at five. A seminar on the foundations of mathematics that meets, apparently, in the evening and in private.',
          },
          {
            id: 'weigh',
            narration:
              'He is eighteen and then he is nineteen. The trains run four times a day and he does not take one. What holds him is not fear; it is that he has not yet finished deciding, and he does not begin things he has not finished deciding.',
          },
          {
            id: 'said',
            narration:
              'His brother, home from his own studies, finds the list annotated in three colours and left open at the same page for a month.',
            speaker: 'HIS BROTHER',
            dialogue: 'Kurt. Nobody chooses a life by reading about it. At some point you get on the train.',
          },
          {
            id: 'choose',
            narration:
              'That is fair and he knows it is fair. Somewhere the decision has to be cut off and made, and the only question left is which subject he cuts it off in favour of.',
            choices: [
              {
                id: 'physics',
                label: 'Stay with physics — the world is the thing worth explaining',
                effects: [
                  { type: 'flag', flag: 'godel.cameForPhysics', value: true },
                  { type: 'theme', theme: 'worldVsSystem', amount: 2 },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
              {
                id: 'mathematics',
                label: 'Change faculties: follow the subject that finishes',
                effects: [
                  { type: 'flag', flag: 'godel.turnedToMathematics', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'logic',
                label: 'Go behind mathematics and ask what a proof is',
                effects: [
                  { type: 'flag', flag: 'godel.wentStraightToLogic', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Gödel’s move from physics to mathematics during his first years as a student is documented. This variant describes those years spent still deciding, away from the lecture halls. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-education-circle',
    characterId: 'godel',
    chapterId: 'education',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 75 },
    once: true,
    variants: [
      {
        id: 'vienna',
        conditions: [
          { type: 'yearAtLeast', year: 1926 },
          { type: 'yearAtMost', year: 1929 },
          { type: 'locationIs', locationId: 'vienna' },
        ],
        title: 'Thursday Evenings, and the Word He Does Not Say',
        locationLabel: 'Vienna',
        yearLabel: '1926–1929',
        image: {
          setting: 'a small seminar room above a shop, chairs in a rough circle, cigarette smoke, evening',
          year: 1927,
          characters: ['godel'],
          mood: 'clever, close, faintly hostile',
          details: ['mismatched chairs in a ring', 'an ashtray filled past its capacity', 'a duplicated pamphlet', 'a gas lamp', 'coats piled on a table'],
          alt: 'A ring of mismatched chairs in a small smoke-filled seminar room with a gas lamp.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'They meet on Thursdays in a room reached by a back stair, and by nine the smoke is a solid thing at head height. Physicists, mathematicians, one economist. Their programme is simple and very nearly beautiful: a sentence that cannot be checked against the world is not a sentence at all, only a noise arranged to look like one.',
          },
          {
            id: 'said',
            narration:
              'Schlick puts it to him directly one evening, kindly, the way you offer a chair to someone standing at the edge of a room.',
            speaker: 'SCHLICK',
            dialogue: 'Mathematics says nothing about the world, Herr Gödel. It is a convention, an excellent one. Surely you do not think the numbers are somewhere, waiting?',
          },
          {
            id: 'thinks',
            narration:
              'He thinks exactly that. He thinks the numbers were there before anyone counted and will be there after, that a mathematician discovers rather than invents, and that the whole brilliant room has mistaken the rules of the notation for the thing the notation is about. He is twenty-one and he is in a minority of one.',
          },
          {
            id: 'choose',
            narration:
              'The circle turns to him for an answer. He has an answer. He has had it for two years and it is fully formed.',
            choices: [
              {
                id: 'speak',
                label: 'Say plainly that he believes the numbers are real',
                effects: [
                  { type: 'flag', flag: 'godel.spokeInCircle', value: true },
                  { type: 'theme', theme: 'worldVsSystem', amount: 2 },
                  { type: 'resources', effects: { standing: 1, network: -1 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say nothing, and keep the disagreement for the work',
                effects: [
                  { type: 'flag', flag: 'godel.platonistInSecret', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'From about 1926 Gödel attended the Vienna Circle meetings chaired by Moritz Schlick, and although he was present for years he spoke rarely and did not share the circle’s view that mathematics is empty convention; his mathematical Platonism is documented in his later writings. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1926 },
          { type: 'yearAtMost', year: 1929 },
        ],
        title: 'The Pamphlet That Arrives by Post',
        yearLabel: '1926–1929',
        image: {
          setting: 'a reading table with a duplicated philosophical pamphlet and a mathematics journal, late 1920s',
          year: 1927,
          characters: ['godel'],
          mood: 'solitary, argumentative, still',
          details: ['a stapled pamphlet', 'a journal cut open with a knife', 'a cold cup', 'annotations in pencil', 'lamplight on a bare table'],
          alt: 'A duplicated pamphlet and an uncut journal on a bare reading table under a lamp.',
        },
        pages: [
          {
            id: 'pamphlet',
            narration:
              'The pamphlet comes in a grey envelope: a manifesto, from a circle of very clever people in a capital he has not moved to. Their claim is that a sentence which cannot be checked against the world is not a sentence at all, and that mathematics, therefore, says nothing.',
          },
          {
            id: 'margin',
            narration:
              'He reads it three times and fills the margins. He does not think mathematics says nothing. He thinks the numbers were there before anyone counted, and that this whole brilliant argument has confused the rules of a notation with the thing the notation is about.',
          },
          {
            id: 'said',
            narration:
              'A fellow student who has borrowed the pamphlet back finds it returned in a state that alarms him.',
            speaker: 'A FELLOW STUDENT',
            dialogue: 'You have written more in the margins than they printed on the page. Why not go and tell them so, to their faces?',
          },
          {
            id: 'choose',
            narration:
              'It is a fair question, and the answer costs something either way: a letter that commits him in writing to a position no one around him holds, or a drawer, and years, and the work itself as the only argument he ever makes.',
            choices: [
              {
                id: 'speak',
                label: 'Say plainly that he believes the numbers are real',
                effects: [
                  { type: 'flag', flag: 'godel.spokeInCircle', value: true },
                  { type: 'theme', theme: 'worldVsSystem', amount: 2 },
                  { type: 'resources', effects: { standing: 1, network: -1 } },
                ],
              },
              {
                id: 'silent',
                label: 'Say nothing, and keep the disagreement for the work',
                effects: [
                  { type: 'flag', flag: 'godel.platonistInSecret', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The Vienna Circle published its manifesto in 1929 and its ideas circulated widely in print. Gödel’s disagreement with its account of mathematics is documented; this variant imagines that disagreement conducted at a distance. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-personal-adele',
    characterId: 'godel',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 55 },
    once: true,
    variants: [
      {
        id: 'thin',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1929 },
          { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
        ],
        title: 'A Woman Who Is Not Impressed by Mathematics',
        yearLabel: '1927',
        image: {
          setting: 'a small night café with a low stage and half the chairs upended on the tables, late evening',
          year: 1927,
          characters: ['godel'],
          mood: 'tired, warm, unexpected',
          details: ['chairs upended on tables', 'a low stage with a dark curtain', 'a plate pushed across a table', 'a coat with the collar up', 'a wet window'],
          alt: 'A near-empty night café with chairs upended on the tables and a small dark stage.',
        },
        pages: [
          {
            id: 'late',
            narration:
              'He has worked until the trams stopped and eaten nothing since morning, which is not deliberate, only what happens when a proof will not close. The place is warm and nearly empty and they are stacking the chairs around him.',
          },
          {
            id: 'plate',
            narration:
              'A woman who works there, older than him, brings food he did not order and puts it down in front of him and stands there until he starts on it. She has watched him not eat for a fortnight and has evidently reached a decision about it.',
            speaker: 'ADELE',
            dialogue: 'Eat. I do not care what it is you are thinking about. It will still be there in ten minutes and you will not.',
          },
          {
            id: 'after',
            narration:
              'His family, when they hear of her, will have a great deal to say: she is older, she has been married before, she dances for a living. He finds he does not care. She is the first person he has met who treats his mind as an interesting inconvenience rather than a reason to be careful around him.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.adeleFeedsHim', value: true },
          { type: 'resources', effects: { wellbeing: 2 } },
        ],
        historicalNote:
          'Gödel met Adele Nimbursky, who was some years older, had been married before and worked in a Viennese night establishment, in the late 1920s; his parents disapproved and they did not marry until 1938. Dialogue is dramatized.',
      },
      {
        id: 'steady',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1929 },
        ],
        title: 'Someone Who Talks Through the Silences',
        yearLabel: '1927',
        image: {
          setting: 'two people walking a wet city street at night past a lit café window, late 1920s',
          year: 1927,
          characters: ['godel'],
          mood: 'companionable, plain, glad',
          details: ['a lit café window', 'wet pavement reflecting lamps', 'a shared umbrella', 'a paper cone of chestnuts', 'a closed tram shelter'],
          alt: 'A wet night street with lamps reflected on the pavement outside a lit café window.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'They walk because the trams have stopped, and she does most of the talking, which suits them both. He can go eleven minutes without a word and she does not experience this as a rebuke, which no one else he knows has managed.',
          },
          {
            id: 'said',
            narration:
              'She asks what it is he actually does, and he tries, and gets four sentences in before he can see her deciding to be patient with him.',
            speaker: 'ADELE',
            dialogue: 'So: nobody has checked the foundations, and you would like to check them. There. That was not so difficult, Kurtele.',
          },
          {
            id: 'after',
            narration:
              'Nobody has ever summarised him correctly before. His family will object to her on every ground they can think of — her age, her first marriage, the hours she keeps — and he will listen to all of it and change nothing.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.adeleFeedsHim', value: true },
          { type: 'resources', effects: { wellbeing: 1, network: 1 } },
        ],
        historicalNote:
          'Gödel met Adele Nimbursky in Vienna in the late 1920s and remained attached to her over a decade of family opposition. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-project-completeness',
    characterId: 'godel',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'godel-completeness-theorem', priority: 80 },
    once: true,
    variants: [
      {
        id: 'vienna',
        conditions: [{ type: 'locationIs', locationId: 'vienna' }],
        title: 'Everything True Can Be Proved',
        locationLabel: 'Vienna',
        image: {
          setting: 'a bound dissertation lying squared on a desk beside a candle-dark window, 1929',
          year: 1929,
          characters: ['godel'],
          mood: 'exact, quietly triumphant, uneasy',
          details: ['a thin bound dissertation', 'a blotter', 'a ruler set square to the page edge', 'an inkwell', 'rain on dark glass'],
          alt: 'A thin bound dissertation squared exactly on a desk beside a rain-dark window.',
        },
        pages: [
          {
            id: 'thin',
            narration:
              'The dissertation is thin enough to read in an evening. In it he proves the good news: within the logic of ordinary reasoning, every statement that is true under all interpretations can, in fact, be derived. The rules reach everything they are supposed to reach.',
          },
          {
            id: 'said',
            narration:
              'His supervisor reads it in a single sitting and looks up with the expression of a man who has found the year’s best result in a folder handed in by someone of twenty-three.',
            speaker: 'HIS SUPERVISOR',
            dialogue: 'You have closed a question that has been open since Aristotle, and you have written it as though apologising for the length. Do you understand what you have done?',
          },
          {
            id: 'shadow',
            narration:
              'He does, and it is not the part that interests him. All evening a second thought has been standing at the edge of the desk: he has shown that the rules of logic reach everything logic promises. He has shown nothing at all about whether the rules of arithmetic reach everything that is true about numbers. Those are different sentences. He has begun to suspect they have different answers.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.completenessDone', value: true },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Gödel’s 1929 doctoral dissertation at Vienna, supervised by Hans Hahn, proved the completeness of first-order predicate logic. The distinction he draws here between that result and the question about arithmetic is the one his next work answered. Dialogue is dramatized.',
      },
      {
        id: 'elsewhere',
        title: 'A Thin Manuscript in an Unfamiliar Room',
        image: {
          setting: 'a plain lodging room with a manuscript stacked square on a table under a bare lamp, 1929',
          year: 1929,
          characters: ['godel'],
          mood: 'solitary, precise, unwitnessed',
          details: ['a hand-stacked manuscript', 'a lamp with a paper shade', 'a bag of chalk', 'a folded map', 'a narrow bed'],
          alt: 'A neatly stacked manuscript on a plain table under a lamp with a paper shade.',
        },
        pages: [
          {
            id: 'done',
            narration:
              'He finishes it far from any faculty that could examine it: within the logic of ordinary reasoning, every statement true under all interpretations can be derived. The rules reach everything they are supposed to reach. There is nobody in the building to tell.',
          },
          {
            id: 'said',
            narration:
              'He reads the last page aloud to the room, once, to hear whether it holds when spoken.',
            speaker: 'GÖDEL',
            dialogue: 'Complete. Which means only that logic keeps its promise. It does not mean arithmetic keeps its.',
          },
          {
            id: 'shadow',
            narration:
              'He squares the pages and puts them in the case. The second thought has already arrived and it will not leave: those are two different sentences, and there is no reason on earth why they must have the same answer.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.completenessDone', value: true },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'The completeness theorem was Gödel’s Vienna doctoral work of 1929. This variant places the same result outside the university that examined it.',
      },
    ],
  },

  {
    id: 'godel-education-closing',
    characterId: 'godel',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'doctor',
        conditions: [{ type: 'projectCompleted', projectId: 'godel-completeness-theorem' }],
        title: 'Twenty-Three, and Already at the Edge',
        yearLabel: '1929',
        image: {
          setting: 'a university corridor with a noticeboard of examination results, autumn 1929',
          year: 1929,
          characters: ['godel'],
          mood: 'quiet arrival, private disquiet',
          details: ['a glazed noticeboard', 'a list pinned with brass tacks', 'a stone stair', 'a wet umbrella', 'lamplight through high windows'],
          alt: 'A glazed corridor noticeboard with a pinned list of results beneath high windows.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'His name goes up on the glazed noticeboard with three others and he reads it once and walks on. It is done, it was correct, and being told so on a pinned sheet adds nothing to it.',
          },
          {
            id: 'edge',
            narration:
              'What stays with him is the shape of the gap. He has proved that logic delivers what it advertises. The whole world of mathematicians is currently trying to prove the same thing about arithmetic, and he has begun to feel, the way you feel a step missing in the dark, that they are going to be disappointed.',
          },
        ],
        historicalNote:
          'Gödel took his doctorate in Vienna in 1929, at twenty-three. The problem he turned to next — the consistency and completeness of arithmetic — was the central open question of Hilbert’s programme.',
      },
      {
        id: 'mathematician',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.turnedToMathematics' }],
        title: 'The Faculty He Changed To',
        yearLabel: '1929',
        image: {
          setting: 'a study table stacked with mathematics journals and one unfinished sheet, 1929',
          year: 1929,
          characters: ['godel'],
          mood: 'unfinished, patient',
          details: ['stacked journals', 'a single unfinished sheet', 'a paper knife', 'a cold stove', 'a curtain drawn against the street'],
          alt: 'A study table stacked with journals and one unfinished handwritten sheet.',
        },
        pages: [
          {
            id: 'stack',
            narration:
              'Five years, and the physics is gone from the table entirely; what is left is a subject in which a thing is either finished or it is not. He has read everything the great men have published about the foundations and he can now see, quite clearly, where they are all standing.',
          },
          {
            id: 'gap',
            narration:
              'They are standing on the assumption that arithmetic, properly set out, will eventually prove itself sound. Nobody has shown that it will. Nobody, as far as he can find, has seriously entertained the possibility that it cannot.',
          },
        ],
        historicalNote:
          'Gödel’s transfer from physics to mathematics and his early immersion in the foundations literature are documented; this variant describes those years without the doctorate completed.',
      },
      {
        id: 'default',
        title: 'Five Years of Reading',
        yearLabel: '1929',
        image: {
          setting: 'a room with a wall of borrowed books and a single ruled notebook open, 1929',
          year: 1929,
          characters: ['godel'],
          mood: 'accumulated, unspent',
          details: ['borrowed books with library slips', 'one ruled notebook', 'a shaded lamp', 'a stopped clock', 'a chair nobody else uses'],
          alt: 'A wall of borrowed books with library slips beside a single open ruled notebook.',
        },
        pages: [
          {
            id: 'books',
            narration:
              'The books come and go with their library slips and the notebook fills, and nothing goes out of the room. He is twenty-three. He has read further into the foundations of mathematics than most people who are paid to teach it.',
          },
          {
            id: 'unspent',
            narration:
              'What he has not done is show anyone. There is a difference between knowing where a step is missing and standing up in a hall and saying so, and the second of those is a thing he has not yet found a way to do.',
          },
        ],
        historicalNote:
          'Gödel completed his Vienna doctorate in 1929. This variant describes the same years spent in private study without that public step.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Entry into the Profession, 1929-1931
  // -------------------------------------------------------------------------
  {
    id: 'godel-entry-opening',
    characterId: 'godel',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'vienna',
        conditions: [{ type: 'locationIs', locationId: 'vienna' }],
        title: 'The Second Problem',
        locationLabel: 'Vienna',
        yearLabel: '1929',
        image: {
          setting: 'a mourning household in a city flat with the shutters half closed, early 1929',
          year: 1929,
          characters: ['godel'],
          mood: 'subdued, decisive, cold',
          details: ['half-closed shutters', 'a black armband on a chair', 'an unopened stack of offprints', 'a coffee tray untouched', 'a clock under a glass dome'],
          alt: 'A city flat with half-closed shutters, an untouched coffee tray and a clock under a glass dome.',
        },
        pages: [
          {
            id: 'father',
            narration:
              'His father dies in the winter, quickly, of something the doctors name confidently. The household is moved to the city and rearranged around the absence, and he sits in it for a fortnight, correct in all his duties, and then goes back to the desk because the desk is the only room where the rules do not change.',
          },
          {
            id: 'problem',
            narration:
              'On the desk is the problem the whole profession has been set. Arithmetic must be shown to be consistent — proved, by plain finite steps that no one can quibble with, never to contradict itself. Do that, and the foundations are secured for good.',
          },
          {
            id: 'said',
            narration:
              'His supervisor puts a hand on the back of the chair, the way one does with the very young and very promising.',
            speaker: 'HIS SUPERVISOR',
            dialogue: 'Hilbert has told the world we must know, and we shall know. Bring him the consistency of arithmetic, Herr Gödel, and you will be twenty-four and finished with the century.',
          },
          {
            id: 'aim',
            narration:
              'He turns the sentence over for a week. There are two ways to walk at a wall: you try to get over it, or you first establish, honestly, whether it has a top.',
            choices: [
              {
                id: 'finish',
                label: 'Give them the proof they are waiting for',
                effects: [
                  { type: 'flag', flag: 'godel.aimsAtConsistency', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'test',
                label: 'First ask whether such a proof can exist at all',
                effects: [
                  { type: 'flag', flag: 'godel.testsTheProgram', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Gödel’s father died in 1929 and the family moved to Vienna. The problem described is the second of Hilbert’s 1900 problems, the centre of the formalist programme; Hilbert’s public declaration that there is no ignorabimus in mathematics dates from 1930. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Wall, and Whether It Has a Top',
        yearLabel: '1929',
        image: {
          setting: 'a desk beside a shuttered window with an offprint slit open and a black armband folded on the corner',
          year: 1929,
          characters: ['godel'],
          mood: 'bereaved, contained, resolving',
          details: ['a slit-open offprint', 'a folded armband', 'a shuttered window', 'a pen laid parallel to the page', 'an untouched tray'],
          alt: 'A slit-open offprint and a folded black armband on a desk beside a shuttered window.',
        },
        pages: [
          {
            id: 'father',
            narration:
              'His father dies in the winter and the household reorganises itself around the gap. He does what is required of him, exactly and without complaint, and then he goes back to the desk, because the desk is the only room in the world where the rules do not change without notice.',
          },
          {
            id: 'problem',
            narration:
              'The offprints keep coming, slit open with a paper knife, all of them circling the same task: show that arithmetic can never contradict itself, and show it by plain finite steps nobody can quibble with. The best men alive are working on it. None of them has it.',
          },
          {
            id: 'said',
            narration:
              'His brother, visiting, reads a page over his shoulder and gives up on it in the honest way of a man in another profession entirely.',
            speaker: 'HIS BROTHER',
            dialogue: 'And if it turns out that nobody can do this thing, Kurt? Who would you even tell?',
          },
          {
            id: 'aim',
            narration:
              'That is the question, and it has been sitting there all winter. There are two ways to walk at a wall: you try to get over it, or you first establish, honestly, whether it has a top.',
            choices: [
              {
                id: 'finish',
                label: 'Give them the proof they are waiting for',
                effects: [
                  { type: 'flag', flag: 'godel.aimsAtConsistency', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'test',
                label: 'First ask whether such a proof can exist at all',
                effects: [
                  { type: 'flag', flag: 'godel.testsTheProgram', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The death of Gödel’s father in 1929 and the centrality of Hilbert’s consistency problem to the mathematics of the period are documented. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-entry-selfreference',
    characterId: 'godel',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 90 },
    once: true,
    variants: [
      {
        id: 'testing',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { type: 'yearAtMost', year: 1931 },
          { type: 'narrativeFlag', flag: 'godel.testsTheProgram' },
        ],
        title: 'A Sentence That Talks About Itself',
        yearLabel: '1930',
        image: {
          setting: 'a night desk covered in numbered lines, one sheet turned face down, a cold lamp',
          year: 1930,
          characters: ['godel'],
          mood: 'vertiginous, silent, certain',
          details: ['sheets ruled into numbered lines', 'one sheet turned face down', 'a shorthand notebook', 'a lamp turned low', 'a window black with rain'],
          alt: 'Sheets of numbered lines on a night desk with one page turned face down beside a low lamp.',
        },
        pages: [
          {
            id: 'trick',
            narration:
              'The trick, when it comes, is so simple that he checks it four times before he will let himself sit back. Give every symbol a number. Give every string of symbols a number. Then arithmetic — plain, honest arithmetic about whole numbers — is talking about strings of symbols, which is to say it is talking about itself.',
          },
          {
            id: 'sentence',
            narration:
              'And if it can talk about itself, it can be made to say one particular thing. He writes the sentence out. It states, of itself, that it has no proof. If it is false, then it has a proof, and the system proves a falsehood. So it is true. And being true, it has no proof.',
          },
          {
            id: 'said',
            narration:
              'He sits with it in the dark for some time. It is not a paradox — that is the part that empties the room of air. A paradox could be excluded by a rule. This is simply a true sentence about numbers, sitting outside the reach of every rule anyone can write down.',
            speaker: 'GÖDEL',
            dialogue: 'It is not that we have not found the proof. It is that there is no proof to find. And it is still true.',
          },
          {
            id: 'after',
            narration:
              'He turns the top sheet face down out of an instinct he does not examine, and puts out the lamp, and does not sleep. He is twenty-four years old and he has just discovered a limit to what proof can do. Someone is going to have to tell them.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.hasTheSentence', value: true },
          { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'The device of numbering formulas so that a formal system can express statements about its own proofs, and the construction of a true but unprovable arithmetical sentence, are the core of Gödel’s 1931 paper. The night described is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { type: 'yearAtMost', year: 1931 },
        ],
        title: 'The Wrong Answer to the Right Question',
        yearLabel: '1930',
        image: {
          setting: 'a desk of abandoned attempts, pages crossed through, one clean new sheet begun',
          year: 1930,
          characters: ['godel'],
          mood: 'frustrated, then suddenly still',
          details: ['pages ruled through in ink', 'a fresh sheet squared to the blotter', 'a shorthand notebook', 'a cup gone cold', 'a lamp turned low'],
          alt: 'Crossed-through pages beside one clean fresh sheet squared to a blotter.',
        },
        pages: [
          {
            id: 'attempts',
            narration:
              'He goes at the consistency proof honestly, the way everyone else is going at it, and gets further than most, and every route ends in the same place: to certify the rules he needs a step that is not among the rules. Each failure is neat. That is what starts to bother him.',
          },
          {
            id: 'turn',
            narration:
              'Failures that neat are not accidents. So he stops trying to climb the wall and starts measuring it, and the measurement takes a fortnight: number every symbol, number every string of symbols, and arithmetic becomes a language that can speak about its own proofs.',
          },
          {
            id: 'said',
            narration:
              'Then it is only a matter of writing one sentence carefully. It states, of itself, that it has no proof. He checks it four times, aloud, in an empty room.',
            speaker: 'GÖDEL',
            dialogue: 'If it is false it is provable, and then the system lies. So it is true. And true, it cannot be proved. There is no error here. I have looked.',
          },
          {
            id: 'after',
            narration:
              'He is twenty-four. The answer everyone wants does not exist, and he can prove that it does not exist, which is a far stranger thing to be carrying home in the dark than the answer would have been.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.hasTheSentence', value: true },
          { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Gödel began by working within Hilbert’s programme and arrived at incompleteness in 1930. The sequence of failed attempts leading to the change of question is dramatized; the result is documented.',
      },
    ],
  },

  {
    id: 'godel-entry-closing',
    characterId: 'godel',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'carrying',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.hasTheSentence' }],
        title: 'Carrying It Around the City',
        yearLabel: '1930–1931',
        image: {
          setting: 'a man on a night tram with a locked document case on his knees, 1930',
          year: 1930,
          characters: ['godel'],
          mood: 'held, watchful, alone with it',
          details: ['a locked document case', 'a lit tram interior', 'condensation on glass', 'a folded evening paper unread', 'wet coats'],
          alt: 'A locked document case held on the knees of a passenger in a lit night tram.',
        },
        pages: [
          {
            id: 'tram',
            narration:
              'For months he carries it about with him in a case, and tells nobody, and goes to the seminars and listens to men he respects lay plans for a building he knows has no roof. He is not being cruel. He is checking, over and over, that he is right.',
          },
          {
            id: 'decide',
            narration:
              'By the end he cannot find the error because there is no error. The next thing is the hard part, and it is not mathematics: he has to say it out loud, in a room, to the people whose life’s work it changes.',
          },
        ],
        historicalNote:
          'Gödel arrived at the incompleteness result in 1930 and first stated it publicly, briefly, at a Königsberg meeting in September of that year, publishing the full paper in 1931.',
      },
      {
        id: 'default',
        title: 'Everyone Is Very Nearly There',
        yearLabel: '1930–1931',
        image: {
          setting: 'a reading room noticeboard of conference announcements and journal covers, 1930',
          year: 1930,
          characters: ['godel'],
          mood: 'crowded with other people’s certainty',
          details: ['pinned conference announcements', 'journal covers in a rack', 'a rain-marked hat on a hook', 'a radiator', 'a bell on a counter'],
          alt: 'A reading-room noticeboard of pinned conference announcements above a rack of journals.',
        },
        pages: [
          {
            id: 'notices',
            narration:
              'The announcements go up in September and the journals arrive every month, and all of them say the same confident thing in different words: the foundations will be secured, and soon, and probably by whoever is speaking.',
          },
          {
            id: 'held',
            narration:
              'He reads them all and says nothing. What he has is half-built and unshown, and half-built and unshown is worth exactly nothing at a conference. He puts the notebook back in the drawer and turns the key, which is a thing he does when a decision has been postponed rather than made.',
          },
        ],
        historicalNote:
          'The years around 1930 were the height of confidence in Hilbert’s formalist programme. This variant describes them passing without Gödel’s intervention.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Königsberg — replaces the 1930 context card
  // -------------------------------------------------------------------------
  {
    id: 'godel-konigsberg',
    characterId: 'godel',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 89 },
    once: true,
    replacesContextCardId: 'godel-card-1930',
    variants: [
      {
        id: 'in-the-hall',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { type: 'yearAtMost', year: 1934 },
          { type: 'locationIs', locationId: 'konigsberg' },
        ],
        title: 'One Remark on the Third Day',
        locationLabel: 'Königsberg',
        yearLabel: '1930',
        image: {
          setting: 'a municipal conference hall on the last afternoon of a meeting, chairs pushed out of line',
          year: 1930,
          characters: ['godel'],
          mood: 'end-of-conference, distracted, then arrested',
          details: ['rows of chairs pushed out of line', 'a water carafe with one glass', 'a stenographer’s pad', 'a folded programme', 'September light through high windows'],
          alt: 'A municipal hall with chairs pushed out of line, a water carafe and a folded programme.',
        },
        pages: [
          {
            id: 'discussion',
            narration:
              'It is the round-table on the last afternoon and half the delegates have gone for their trains. The talk is general, the coats are already on the arms of chairs, and when his turn comes he says his piece in about forty seconds, without preamble, because a preamble would not have made it truer.',
          },
          {
            id: 'nothing',
            narration:
              'One can, he says, exhibit sentences of arithmetic which are true and which the system cannot prove. Then he stops. The discussion moves on to a question about terminology. The stenographer keeps writing. Nothing whatever happens.',
          },
          {
            id: 'said',
            narration:
              'In the corridor afterwards a heavy-set man of about his own age blocks the way to the stairs, still holding his own unread notes.',
            speaker: 'VON NEUMANN',
            dialogue: 'Say that again. Slowly. — No. Do not soften it. You have just shown that the programme cannot be finished, and I do not think anyone in that room noticed.',
          },
          {
            id: 'wireless',
            narration:
              'The next morning the old man from Göttingen broadcasts his farewell to the city he was born in, and the whole meeting stands about a wireless to hear it: we must know, we will know. Gödel listens to the end with his hat in his hands. He does not feel triumphant. He feels sorry, and slightly sick, and entirely certain.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1930' },
          { type: 'relationship', characterId: 'vonneumann', familiarity: 1, respect: 2, flag: 'konigsberg-1930' },
          { type: 'flag', flag: 'godel.announced', value: true },
          { type: 'resources', effects: { network: 1, standing: 1 } },
        ],
        historicalNote:
          'At a Königsberg meeting in September 1930 Gödel stated his incompleteness result briefly during a discussion session; the announcement passed almost unnoticed except by John von Neumann, who grasped it at once. Hilbert delivered his "we must know, we will know" address in Königsberg at the same time. Dialogue is dramatized.',
      },
      {
        id: 'the-few',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { type: 'yearAtMost', year: 1934 },
        ],
        title: 'Told to Four People and a Marble Table',
        yearLabel: '1930',
        image: {
          setting: 'a corner table in a coffee house with four cups and a page of symbols weighted by a sugar bowl',
          year: 1930,
          characters: ['godel'],
          mood: 'understated, mis-heard, then heard',
          details: ['a marble table top', 'four cups', 'a page weighted by a sugar bowl', 'a newspaper on a wooden holder', 'coat-stand in the background'],
          alt: 'A marble coffee-house table with four cups and a page of symbols weighted under a sugar bowl.',
        },
        pages: [
          {
            id: 'table',
            narration:
              'He does not stand up in a hall. He puts one page on a marble table in front of four people who are willing to look, and says, in the tone of a man mentioning the weather, that there are true sentences of arithmetic which arithmetic cannot prove.',
          },
          {
            id: 'nothing',
            narration:
              'Two of them ask whether he means undecided as yet. One begins a story about a train. The page sits under the sugar bowl. He has just said the most disquieting thing anyone at the table will hear in their lives, and the conversation goes round it like water round a stone.',
          },
          {
            id: 'said',
            narration:
              'The fourth has not spoken for some minutes. He is reading the page a second time, and when he looks up he has gone slightly grey.',
            speaker: 'A COLLEAGUE',
            dialogue: 'Do you understand what this does to the consistency proof? Not that it delays it. That it forbids it. — Who else have you told?',
          },
          {
            id: 'after',
            narration:
              'Nobody, is the answer. He puts the page in the case, and walks home past the lit windows of a city full of people building on ground he has just measured, and he does not enjoy it at all.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1930' },
          { type: 'flag', flag: 'godel.announced', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Gödel’s first announcement of incompleteness, at Königsberg in September 1930, was so understated that almost no one present registered it; von Neumann was the exception. This variant relocates that near-silence to a smaller room. Dialogue is dramatized.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Breakthrough, 1930-1934
  // -------------------------------------------------------------------------
  {
    id: 'godel-breakthrough-opening',
    characterId: 'godel',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'spoke',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.spokeInCircle' }],
        title: 'The Man Who Said It Out Loud Once Already',
        yearLabel: '1930–1931',
        image: {
          setting: 'a writing desk with a paper begun in a very small hand, the margins wide',
          year: 1931,
          characters: ['godel'],
          mood: 'braced, meticulous, exposed',
          details: ['a paper begun in a small hand', 'wide margins left deliberately', 'a shorthand notebook', 'a fresh nib', 'a shuttered window'],
          alt: 'A manuscript begun in a very small hand with unusually wide margins.',
        },
        pages: [
          {
            id: 'known',
            narration:
              'They already know where he stands. He said it once in a room full of people who thought otherwise, and it has followed him since: the young man who thinks the numbers are somewhere, waiting. It made him no friends and it makes what comes next impossible to dismiss as a slip of the tongue.',
          },
          {
            id: 'write',
            narration:
              'So the paper has to be armour. Every step numbered. Every definition given twice. Wide margins, because a reader who wants to disagree should be given room to try and then discover there is nowhere to put the objection.',
          },
          {
            id: 'said',
            narration:
              'His supervisor reads the first eight pages standing up, without taking his coat off.',
            speaker: 'HIS SUPERVISOR',
            dialogue: 'Write it so that no one is able to be kind to you about it. Kindness is how a result like this gets buried.',
          },
        ],
        historicalNote:
          'Gödel’s 1931 paper is famously careful and formal in its construction, anticipating disbelief. Dialogue is dramatized.',
      },
      {
        id: 'vienna',
        conditions: [{ type: 'locationIs', locationId: 'vienna' }],
        title: 'A Paper Written in a Very Small Hand',
        locationLabel: 'Vienna',
        yearLabel: '1930–1931',
        image: {
          setting: 'a university writing room with a stove, one desk in use, snow on the sills',
          year: 1931,
          characters: ['godel'],
          mood: 'painstaking, wintry, private',
          details: ['a small iron stove', 'snow on the sill', 'a manuscript in a minute hand', 'a stack of numbered sheets', 'an inkwell with a glass lid'],
          alt: 'A single desk in use in a cold writing room, snow on the sill, a manuscript in a minute hand.',
        },
        pages: [
          {
            id: 'winter',
            narration:
              'It takes him the winter. The stove is lit at eight and out by four and he does not notice either. What he is building is not the result — the result took a fortnight — but a wall around it, so high and so plain that no one will be able to get at it from the side.',
          },
          {
            id: 'numbering',
            narration:
              'Forty-six numbered definitions before the theorem is even stated. He writes it in a hand so small the printers will complain. Every objection he can imagine is answered two pages before a reader could think of it.',
          },
          {
            id: 'said',
            narration:
              'A colleague from the seminar reads the opening and puts it down carefully, the way you put down something that might still be hot.',
            speaker: 'A COLLEAGUE',
            dialogue: 'You know what they will say. That you have found a curiosity. A trick sentence, like the Cretan and his lie.',
          },
          {
            id: 'reply',
            narration:
              'He does know. That is what the forty-six definitions are for. The liar’s sentence is a puzzle about language; his is a statement about whole numbers, and a statement about whole numbers cannot be dismissed as a manner of speaking.',
          },
        ],
        historicalNote:
          'Gödel’s 1931 paper "On Formally Undecidable Propositions" builds its result through a long sequence of numbered definitions precisely to forestall the objection that it is a mere linguistic paradox. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Writing It Where Nobody Is Waiting',
        yearLabel: '1930–1931',
        image: {
          setting: 'a plain table under a window with numbered sheets weighted against a draught',
          year: 1931,
          characters: ['godel'],
          mood: 'solitary, dogged, cold',
          details: ['numbered sheets under a paperweight', 'a draught-marked window', 'a blanket over the chair back', 'a shorthand notebook', 'one lamp'],
          alt: 'Numbered manuscript sheets held under a paperweight on a plain table by a draughty window.',
        },
        pages: [
          {
            id: 'alone',
            narration:
              'There is no seminar to try it on and no colleague to catch a slip, which means every step has to be checked as if an enemy had written it. He checks like an enemy. It takes the winter.',
          },
          {
            id: 'numbering',
            narration:
              'Forty-six numbered definitions before the theorem is even stated. He is not being pedantic. Anyone who wants to escape this result will try to call it a word-trick, and the only defence against that is to build it out of nothing but whole numbers, one plank at a time.',
          },
          {
            id: 'said',
            narration:
              'He reads a paragraph aloud to the room to hear where a reader would stumble, and hears himself say it, and stops.',
            speaker: 'GÖDEL',
            dialogue: 'True, and not provable. Not by me, not by anyone, not by a better system tomorrow. That is the sentence. It does not get gentler with repetition.',
          },
        ],
        historicalNote:
          'The construction of Gödel’s 1931 paper, with its long chain of numbered definitions, is documented. This variant places the writing outside any academic setting.',
      },
    ],
  },

  {
    id: 'godel-encounter-vonneumann',
    characterId: 'godel',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'human-here',
        conditions: [
          { type: 'yearAtLeast', year: 1931 },
          { type: 'yearAtMost', year: 1936 },
          { type: 'otherCharacterIsHuman', characterId: 'vonneumann' },
          { type: 'locationIs', locationId: 'vienna' },
          { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'vienna', yearTolerance: 2 },
        ],
        title: 'The Second Theorem, Arrived At Twice',
        locationLabel: 'Vienna',
        yearLabel: '1931',
        image: {
          setting: 'two men at a café table with one shared sheet between them and two hats on the third chair',
          year: 1931,
          characters: ['godel', 'vonneumann'],
          mood: 'quick, generous, competitive without malice',
          details: ['one shared sheet', 'two hats on a spare chair', 'a marble table', 'a pencil worn to a stub', 'a waiter keeping his distance'],
          alt: 'Two hats on a spare chair beside a café table where one sheet of working lies between two places.',
        },
        pages: [
          {
            id: 'arrives',
            narration:
              'He arrives in the city with an idea he is plainly delighted by and cannot hold in past the second cup: if no system can prove all the truths of arithmetic, then in particular no system can prove its own consistency. He has worked it out on a train.',
          },
          {
            id: 'said',
            narration:
              'Gödel lets him finish, because interrupting would be rude and because the man is enjoying himself, and then turns over the sheet already in his own case.',
            speaker: 'VON NEUMANN',
            dialogue: '— Ah. You have it. Of course you have it; it is your theorem, it was always going to be yours. Then I shall spend the rest of my life telling people what it means, which is the second best job in the room.',
          },
          {
            id: 'after',
            narration:
              'It is the most graceful thing anyone will do for him in this decade, and he does not know how to answer it, so he says thank you rather too formally and they talk about something else. From then on, wherever that man is in the world, the theorem has an advocate.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'vonneumann', familiarity: 2, respect: 2, flag: 'second-theorem' },
          { type: 'flag', flag: 'godel.hasAnAdvocate', value: true },
          { type: 'resources', effects: { network: 2, standing: 1 } },
        ],
        historicalNote:
          'Shortly after Königsberg, von Neumann independently derived the second incompleteness theorem and wrote to Gödel about it, only to learn that Gödel already had it; he ceded priority and became a lifelong champion of the result. Dialogue is dramatized.',
      },
      {
        id: 'human-elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1931 },
          { type: 'yearAtMost', year: 1936 },
          { type: 'otherCharacterIsHuman', characterId: 'vonneumann' },
        ],
        title: 'Two Letters Crossing in the Post',
        yearLabel: '1931',
        image: {
          setting: 'two envelopes crossing on a hall table, one franked abroad, a paper knife beside them',
          year: 1931,
          characters: ['godel'],
          mood: 'wry, respectful, distant',
          details: ['two envelopes with different frankings', 'a paper knife', 'a hall table', 'a shorthand notebook', 'a pocket watch face up'],
          alt: 'Two envelopes with different postmarks lying on a hall table beside a paper knife.',
        },
        pages: [
          {
            id: 'crossing',
            narration:
              'The letters cross somewhere over a border. His own is on its way out — a short addition, the corollary he has been sitting on — while another is already coming in, in a fast slanting hand, announcing exactly the same corollary as though it were a present.',
          },
          {
            id: 'said',
            narration:
              'The reply, when it arrives, has been written the same evening the crossing was discovered, and is not sulky in the least.',
            speaker: 'VON NEUMANN',
            dialogue: 'You had it first and you had it better. I withdraw my note, keep your priority, and put myself down as your loudest reader. Do not be modest in print; modesty in print gets a result ignored for thirty years.',
          },
          {
            id: 'after',
            narration:
              'He reads it twice and puts it in the drawer where he keeps things that are not calculations. It is the most generous letter he owns, and it means that somewhere, in a place he has never been, the theorem has someone shouting for it.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'vonneumann', familiarity: 1, respect: 2, flag: 'second-theorem' },
          { type: 'flag', flag: 'godel.hasAnAdvocate', value: true },
          { type: 'resources', effects: { network: 1, standing: 1 } },
        ],
        historicalNote:
          'The exchange in which von Neumann conceded priority on the second incompleteness theorem to Gödel is documented; the wording here is dramatized.',
      },
      {
        id: 'npc-princeton',
        conditions: [
          { type: 'yearAtLeast', year: 1931 },
          { type: 'yearAtMost', year: 1936 },
          { type: 'otherCharacterIsNpc', characterId: 'vonneumann' },
          { type: 'otherCharacterAt', characterId: 'vonneumann', locationId: 'princeton' },
        ],
        title: 'A Letter from the Other Side of the Ocean',
        yearLabel: '1931',
        image: {
          setting: 'a foreign-stamped envelope slit open on a desk beside a small stack of offprints',
          year: 1931,
          characters: ['godel'],
          mood: 'unexpected, warming, far off',
          details: ['a foreign-stamped envelope', 'a slit-open flap', 'a stack of offprints tied with string', 'a shorthand notebook', 'a lamp with a green shade'],
          alt: 'A foreign-stamped envelope slit open beside offprints tied with string.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The envelope has been eleven days at sea. Inside, in a fast slanting hand, a man he met once for four minutes in a corridor has worked out the corollary himself and writes to say so — and then, in the same paragraph, that of course it is Gödel’s, and that he is withdrawing his own note.',
          },
          {
            id: 'said',
            narration:
              'The last paragraph is not about mathematics at all.',
            speaker: 'VON NEUMANN',
            dialogue: 'They will not come to you. Send the offprints yourself, twenty of them, and to the people who will hate it most. A result this large cannot afford a modest author.',
          },
          {
            id: 'after',
            narration:
              'He does not send twenty. He sends nine, which for him is an act of flamboyance, and he keeps the letter. Somewhere across an ocean the theorem now has a voice louder than his own, which is a thing he had not thought to want.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'vonneumann', familiarity: 1, respect: 2, flag: 'second-theorem' },
          { type: 'flag', flag: 'godel.hasAnAdvocate', value: true },
          { type: 'resources', effects: { network: 1, exposure: 1 } },
        ],
        historicalNote:
          'Von Neumann, by then based in the United States, independently obtained the second incompleteness theorem, conceded priority to Gödel and promoted the result energetically. Dialogue is dramatized.',
      },
      {
        id: 'unheard',
        conditions: [
          { type: 'yearAtLeast', year: 1931 },
          { type: 'yearAtMost', year: 1936 },
        ],
        title: 'No One Writes Back',
        yearLabel: '1931–1933',
        image: {
          setting: 'a drawer of unanswered offprints with their string still tied, a bare desk above',
          year: 1932,
          characters: ['godel'],
          mood: 'flat, patient, unanswered',
          details: ['offprints still tied in string', 'an open drawer', 'a postal receipt book', 'a dry inkwell', 'a shuttered window'],
          alt: 'A drawer holding bundles of offprints still tied with string.',
        },
        pages: [
          {
            id: 'sent',
            narration:
              'He sends them out and keeps the postal receipts, which is how he knows precisely how many went and precisely how few came back. Two acknowledgements. One request for a reprint from a librarian.',
          },
          {
            id: 'said',
            narration:
              'The second theorem — that no such system can even certify its own soundness — he adds in a single paragraph, because there is no one to make a fuss with him about it.',
            speaker: 'GÖDEL',
            dialogue: 'It is not that they disagree. It is that nobody has read to the end. A thing can be entirely proved and still be waiting.',
          },
          {
            id: 'after',
            narration:
              'He is not bitter, exactly. He notes it, the way he notes his pulse: an observation about the world, filed, with the date. The result will keep. Results, unlike men, are not in a hurry.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.unheard', value: true },
          { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
        ],
        historicalNote:
          'Recognition of Gödel’s theorems spread slowly at first and depended heavily on a small number of readers who grasped them immediately. This variant describes the reception without those advocates.',
      },
    ],
  },

  {
    id: 'godel-project-incompleteness',
    characterId: 'godel',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'godel-incompleteness', priority: 85 },
    once: true,
    variants: [
      {
        id: 'tested',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.testsTheProgram' }],
        title: 'On Formally Undecidable Propositions',
        image: {
          setting: 'a journal issue lying open at the first page of a long paper, a paper knife across it',
          year: 1931,
          characters: ['godel'],
          mood: 'finished, irreversible, quiet',
          details: ['an opened journal issue', 'a paper knife', 'uncut pages further in', 'a string-tied bundle of offprints', 'a cold cup'],
          alt: 'A journal issue open at the first page of a long paper with a paper knife laid across it.',
        },
        pages: [
          {
            id: 'printed',
            narration:
              'It comes back from the printers in the spring, forty-odd pages, the definitions running like a staircase down the first eleven. He had asked the wall whether it had a top. The answer is in his hands and the answer is no.',
          },
          {
            id: 'what',
            narration:
              'Not that mathematics is broken. Not that anything anyone has proved is now in doubt. Only this: any system strong enough to talk about the whole numbers will contain truths about the whole numbers that it cannot reach, and will never be able to guarantee its own soundness from the inside.',
          },
          {
            id: 'said',
            narration:
              'A man from the seminar corners him on the stairs and wants to know whether he is not, at some level, pleased with himself.',
            speaker: 'A COLLEAGUE',
            dialogue: 'You have humbled the whole discipline at twenty-five. Surely tonight, at least, you allow yourself to enjoy it?',
          },
          {
            id: 'cost',
            narration:
              'He does not. What he feels, walking home, is closer to grief. He has spent a year among people who love mathematics because it is the one place where everything can be settled, and he has proved, in their own language, with their own rules, that it is not.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.incompletenessPublished', value: true },
          { type: 'resources', effects: { standing: 3, exposure: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Gödel’s "On Formally Undecidable Propositions of Principia Mathematica and Related Systems I" appeared in 1931. Its two theorems — the existence of true but unprovable arithmetical statements, and the unprovability of a system’s own consistency within it — reshaped the foundations of mathematics. Dialogue is dramatized.',
      },
      {
        id: 'aimed',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.aimsAtConsistency' }],
        title: 'The Opposite of the Result He Set Out For',
        image: {
          setting: 'a desk with an abandoned line of working on the left and a finished paper stacked on the right',
          year: 1931,
          characters: ['godel'],
          mood: 'reversed, rigorous, sober',
          details: ['abandoned working ruled through', 'a finished stack squared to the edge', 'a shorthand notebook', 'an inkwell', 'a lamp burning in daylight'],
          alt: 'Ruled-through working on one side of a desk and a finished, squared manuscript on the other.',
        },
        pages: [
          {
            id: 'set-out',
            narration:
              'He had set out to hand the profession its proof. Two years of honest work in the direction everyone agreed on, and at the end of it he is holding the exact opposite, written up carefully, forty-odd pages, unanswerable.',
          },
          {
            id: 'what',
            narration:
              'Any system strong enough to talk about the whole numbers contains truths about the whole numbers it cannot reach, and cannot certify its own soundness from within. He checked it as an enemy would. There is no crack in it. He looked for one for a year, hoping.',
          },
          {
            id: 'said',
            narration:
              'A colleague who knows what he was aiming for reads the abstract and understands immediately what it has cost him.',
            speaker: 'A COLLEAGUE',
            dialogue: 'You went out to build the roof and came back with a proof that the building has none. God in heaven, Gödel. Are you all right?',
          },
          {
            id: 'cost',
            narration:
              'He says that he is, which is true in the sense in which he uses the word. What he does not say is that he had wanted the other answer more than anyone in that faculty, and that being right about this is not the same as being glad.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.incompletenessPublished', value: true },
          { type: 'resources', effects: { standing: 3, exposure: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Gödel worked within the framework of Hilbert’s programme before establishing that its central goal was unattainable; the 1931 paper is the result. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'True, and Out of Reach',
        image: {
          setting: 'a completed manuscript tied with tape beside an addressed envelope, lamplight',
          year: 1931,
          characters: ['godel'],
          mood: 'complete, unaccompanied, exact',
          details: ['a manuscript tied with tape', 'an addressed envelope', 'a blotter', 'a shorthand notebook closed', 'a window with the shutter latched'],
          alt: 'A completed manuscript tied with tape beside a single addressed envelope.',
        },
        pages: [
          {
            id: 'done',
            narration:
              'The last page goes on the stack and he ties the tape and sits for a while with his hands flat on the desk. Forty-odd pages, and inside them a sentence about whole numbers which is true and which no rule anyone can write will ever reach.',
          },
          {
            id: 'said',
            narration:
              'He tests it once more the only way that is left to him: aloud, to a shuttered room, listening for the place where a listener would find the escape.',
            speaker: 'GÖDEL',
            dialogue: 'Strengthen the system as you like. The new system has its own sentence. There is no ladder that ends. That is not a defect of arithmetic. That is what arithmetic is.',
          },
          {
            id: 'cost',
            narration:
              'Then he addresses the envelope. Whatever happens to it after this, the thing itself is finished, and the world it was written into is a slightly smaller and much more honest place than it was in the morning.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.incompletenessPublished', value: true },
          { type: 'resources', effects: { standing: 3, exposure: 1 } },
        ],
        historicalNote:
          'The 1931 incompleteness paper and its extension to any sufficiently strong system are documented. This variant describes its completion in isolation.',
      },
    ],
  },

  {
    id: 'godel-project-limits',
    characterId: 'godel',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'godel-limits-of-system', priority: 82 },
    once: true,
    variants: [
      {
        id: 'advocate',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.hasAnAdvocate' }],
        title: 'What the Programme Is Now For',
        image: {
          setting: 'a lecture room after a talk, a blackboard half wiped, one row of chairs still occupied',
          year: 1932,
          characters: ['godel'],
          mood: 'contested, clarifying, oddly hopeful',
          details: ['a half-wiped blackboard', 'one occupied row', 'a duster grey with chalk', 'a jug and glass', 'a briefcase open on a chair'],
          alt: 'A half-wiped blackboard in a lecture room with one row of chairs still occupied.',
        },
        pages: [
          {
            id: 'talk',
            narration:
              'He states it plainly to a room that has come specifically to hear it stated plainly: no system of the kind Hilbert proposed can prove its own consistency by its own finite means. The thing that was to be the crown of the programme cannot be done.',
          },
          {
            id: 'said',
            narration:
              'The objection from the back is the one he has been waiting years for, and it is asked well, without malice.',
            speaker: 'A LISTENER',
            dialogue: 'Then the whole enterprise is dead, and you have killed it. What exactly are the rest of us to do on Monday?',
          },
          {
            id: 'answer',
            narration:
              'Not dead, he says — and it is the longest run of consecutive sentences anyone has heard from him in public. Redirected. You may still prove a system consistent; you must simply do it from outside, with means it does not itself contain. The programme was not a wall. It was a staircase, and he has merely shown that it has no last step.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.limitsStated', value: true },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'The second incompleteness theorem showed that Hilbert’s aim of a finitary consistency proof for arithmetic could not be achieved; proof theory continued, using stronger methods from outside the system. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Letter That Does Not Come',
        image: {
          setting: 'a hall table with a morning post of three envelopes, none in the expected hand',
          year: 1932,
          characters: ['godel'],
          mood: 'anticlimactic, patient, faintly sad',
          details: ['three envelopes on a hall table', 'a paper knife unused', 'a hat on a peg', 'a coat still damp', 'a hall clock'],
          alt: 'Three envelopes on a hall table beside an unused paper knife.',
        },
        pages: [
          {
            id: 'sent',
            narration:
              'He sends it to Göttingen himself, properly bound, with a covering note of four lines that took him two evenings. Then he waits, and checks the hall table every morning for a season, which is not a thing he would admit to doing.',
          },
          {
            id: 'said',
            narration:
              'What comes back instead is a rumour, third-hand, from someone who was in the room when the old man read it.',
            speaker: 'A COLLEAGUE',
            dialogue: 'Angry, they say. For about a day. And then he sat down and began working out what could still be saved. Which, if you think about it, is the highest compliment that man has ever paid anyone.',
          },
          {
            id: 'answer',
            narration:
              'It is, and he takes it as one. He has not demolished the programme; he has shown where its edge is. Everything up to the edge still stands, and the people who go on working there are working, now, with an honest map.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.limitsStated', value: true },
          { type: 'resources', effects: { standing: 2 } },
        ],
        historicalNote:
          'Hilbert is reported to have been angry on first learning of Gödel’s result before engaging with it; the formalist programme continued in modified form. The report reaching Gödel third-hand here is dramatized.',
      },
    ],
  },

  {
    id: 'godel-breakthrough-reception',
    characterId: 'godel',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 76 },
    once: true,
    variants: [
      {
        id: 'in-print',
        conditions: [
          { type: 'yearAtLeast', year: 1931 },
          { type: 'yearAtMost', year: 1934 },
          { type: 'projectCompleted', projectId: 'godel-incompleteness' },
        ],
        title: 'Wrong in Two Languages',
        yearLabel: '1932–1934',
        image: {
          setting: 'a table of newspaper cuttings and journal reviews, one paragraph ringed in pencil',
          year: 1933,
          characters: ['godel'],
          mood: 'exasperated, patient, tired',
          details: ['newspaper cuttings', 'a journal review with a ringed paragraph', 'a pencil', 'an offprint with the pages uncut', 'a cold cup'],
          alt: 'Newspaper cuttings and a journal review with one paragraph ringed in pencil.',
        },
        pages: [
          {
            id: 'cuttings',
            narration:
              'The cuttings arrive from three countries and he reads them all, which is a mistake he goes on making. One review says he has shown that mathematics is uncertain. One says he has proved that human beings are cleverer than machines. A third says that reason has failed.',
          },
          {
            id: 'said',
            narration:
              'He rings the third paragraph in pencil and reads it aloud to Adele across the table, in the flat voice he keeps for absurdities.',
            speaker: 'GÖDEL',
            dialogue: 'Reason has not failed. Reason has just told you, in writing, exactly where it stops. That is the most reliable thing reason has ever done.',
          },
          {
            id: 'invite',
            narration:
              'Underneath the cuttings there is one letter that has read the paper properly: an invitation to lecture, from a long way off, at an institute that does not exist yet in any building. He puts it on top of the pile and leaves it there for a week.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.misread', value: true },
          { type: 'resources', effects: { exposure: 1, network: 1 } },
        ],
        historicalNote:
          'Gödel’s theorems were widely misdescribed in popular and philosophical writing from the outset; he was invited to lecture in the United States in the years after 1931. Dialogue is dramatized.',
      },
      {
        id: 'unpublished',
        conditions: [
          { type: 'yearAtLeast', year: 1931 },
          { type: 'yearAtMost', year: 1934 },
        ],
        title: 'The Habilitation Committee',
        yearLabel: '1932–1934',
        image: {
          setting: 'a faculty ante-room with three chairs, a bell push, and a folder on a side table',
          year: 1933,
          characters: ['godel'],
          mood: 'formal, wearying, minor',
          details: ['three chairs against a wall', 'a bell push', 'a folder on a side table', 'a framed portrait', 'polished floorboards'],
          alt: 'Three chairs against a wall in a faculty ante-room beside a folder on a side table.',
        },
        pages: [
          {
            id: 'waiting',
            narration:
              'To lecture at all he must be examined again, by men whose subject is not his and who will spend eleven minutes on it. He waits in the ante-room with the folder on his knees and counts the boards in the floor twice.',
          },
          {
            id: 'said',
            narration:
              'One of them, at least, has read what is in the folder, and stops him at the door on the way out.',
            speaker: 'A PROFESSOR',
            dialogue: 'The committee will pass you, of course. But do you understand that if that folder is right, half of what I have taught for twenty years was a hope rather than a fact?',
          },
          {
            id: 'after',
            narration:
              'Yes, he says, and does not soften it, and immediately wishes he had said something else — not because it was untrue, but because the man was being honest with him and honesty deserved more than a yes.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.habilitated', value: true },
          { type: 'resources', effects: { standing: 1, funds: 1 } },
        ],
        historicalNote:
          'Gödel habilitated at Vienna in 1932 and became a Privatdozent, an unsalaried lecturing position. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-breakthrough-closing',
    characterId: 'godel',
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
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['godel-incompleteness', 'godel-limits-of-system'],
            count: 2,
          },
        ],
        title: 'Twenty-Eight, and Finished with the Thing He Is Known For',
        yearLabel: '1934',
        image: {
          setting: 'a desk cleared to the wood with one closed shorthand notebook at its centre',
          year: 1934,
          characters: ['godel'],
          mood: 'emptied, exact, unsettled',
          details: ['a desk cleared to bare wood', 'one closed notebook', 'a chair pushed square', 'a shuttered window', 'a single unlit lamp'],
          alt: 'A desk cleared to bare wood with one closed notebook at its centre.',
        },
        pages: [
          {
            id: 'cleared',
            narration:
              'The desk is bare by the spring. Both theorems are in print, the objections have been made and answered, and the offprints have gone out to nine countries. He is twenty-eight and the work that will carry his name for two hundred years is behind him.',
          },
          {
            id: 'ahead',
            narration:
              'Nobody warns you about that. He sits in the cleared room with his hands flat on the wood and finds, underneath the satisfaction, something colder: he has proved that no system can secure itself from within, and he has to go on living inside one.',
          },
        ],
        historicalNote:
          'Gödel had completed and published both incompleteness theorems by 1931–32 and habilitated in Vienna in 1932; his most famous work was done before he was thirty.',
      },
      {
        id: 'one',
        conditions: [{ type: 'projectCompleted', projectId: 'godel-incompleteness' }],
        title: 'The Result Is Out and the Ground Has Moved',
        yearLabel: '1934',
        image: {
          setting: 'a journal rack where one issue has been taken out and left open on the reading slope',
          year: 1934,
          characters: ['godel'],
          mood: 'circulating, out of his hands',
          details: ['a journal rack', 'one issue left open', 'a reading slope', 'a chain-hung lamp', 'a card index drawer half open'],
          alt: 'A journal left open on a reading slope beside a rack of other issues.',
        },
        pages: [
          {
            id: 'out',
            narration:
              'It is out and it belongs to other people now: read in Warsaw, argued over in Cambridge, misquoted in two languages before the year is done. Half of what is said about it in print is wrong, and he has learned that he cannot correct all of it and stay sane.',
          },
          {
            id: 'rest',
            narration:
              'The second half — what it does to the programme itself — he has not yet set out in the form it deserves. It sits in the notebook in an obsolete shorthand only he can read, waiting for a year in which he is well.',
          },
        ],
        historicalNote:
          'Gödel wrote his notebooks in Gabelsberger shorthand, an obsolete system that delayed the reading of his unpublished work for decades. The reception of the 1931 paper was gradual and often garbled at first.',
      },
      {
        id: 'default',
        title: 'The Drawer, and the Key to the Drawer',
        yearLabel: '1934',
        image: {
          setting: 'a locked writing drawer with a small key beside it and dust on the desk top',
          year: 1934,
          characters: ['godel'],
          mood: 'withheld, quiet, unspent',
          details: ['a small brass key', 'a locked drawer', 'dust along a desk edge', 'a shorthand notebook', 'a shuttered window'],
          alt: 'A small brass key lying beside the lock of a closed writing drawer.',
        },
        pages: [
          {
            id: 'locked',
            narration:
              'The years go by and the notebook stays in the drawer, in a shorthand that went out of fashion before he was born, and he is one of perhaps a few hundred people alive who could read it if it were shown to them.',
          },
          {
            id: 'why',
            narration:
              'It is not cowardice. It is that he can already hear the reception — the word curiosity, the word trick — and he has not yet built the forty-six planks of numbered definitions that would make those words impossible. Until it is unanswerable it stays where it is.',
          },
        ],
        historicalNote:
          'Gödel’s working notebooks were kept in Gabelsberger shorthand. This variant describes these years with the result reached but not published.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Crisis and Responsibility, 1934-1940
  // -------------------------------------------------------------------------
  {
    id: 'godel-crisis-opening',
    characterId: 'godel',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'vienna',
        conditions: [{ type: 'locationIs', locationId: 'vienna' }],
        title: 'Men With Rifles at the End of the Street',
        locationLabel: 'Vienna',
        yearLabel: '1934',
        image: {
          setting: 'a city street corner with a tram halted and a barrier of trestles, February light',
          year: 1934,
          characters: ['godel'],
          mood: 'braced, wrong, ordinary',
          details: ['a halted tram', 'trestle barriers', 'shutters pulled down over a shop', 'a newspaper kiosk closed', 'wet grey snow'],
          alt: 'A halted tram beside trestle barriers on a shuttered city street in winter.',
        },
        pages: [
          {
            id: 'street',
            narration:
              'In February the trams stop for four days and there are trestles across the end of his street. In the summer the Chancellor is shot in his own office. The city he came to for the lecture lists has begun to conduct its arguments in a different medium.',
          },
          {
            id: 'inside',
            narration:
              'Something in him gives way that year, quietly and without drama, the way a floor gives way: he cannot eat, cannot sleep, cannot make the columns of figures mean what they used to mean. A doctor uses a word for it. He goes away to a quiet place in the hills for some months.',
          },
          {
            id: 'said',
            narration:
              'Adele comes up on the slow train on the days they allow it, and does not ask him about mathematics, and does not tell him he looks well when he does not.',
            speaker: 'ADELE',
            dialogue: 'The city will still be there. You are not obliged to be interesting this month, Kurtele. You are only obliged to come back.',
          },
          {
            id: 'decide',
            narration:
              'When he is well enough to sit at a desk again there is a decision waiting on it, and it is not a mathematical one. Vienna is where his work is. It is also, increasingly, a place where the rules are being rewritten by men who do not write them down.',
            choices: [
              {
                id: 'stay',
                label: 'Stay. This is where the seminar is, and the seminar is the work',
                effects: [
                  { type: 'flag', flag: 'godel.staysForNow', value: true },
                  { type: 'theme', theme: 'homeVsSafety', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, network: 1 } },
                ],
              },
              {
                id: 'papers',
                label: 'Quietly put the papers in order — passports, invitations, a route',
                effects: [
                  { type: 'flag', flag: 'godel.preparesPapers', value: true },
                  { type: 'theme', theme: 'homeVsSafety', amount: -1 },
                  { type: 'resources', effects: { funds: -1, network: 1 } },
                ],
              },
              {
                id: 'work',
                label: 'Refuse to look up from the desk at all',
                effects: [
                  { type: 'flag', flag: 'godel.buriesHimself', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 1 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Austria’s civil conflict of February 1934 and the assassination of Chancellor Dollfuss that July were followed, for Gödel, by the first of several severe breakdowns and stays in sanatoria. Adele Nimbursky’s support through these years is documented. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The News Gets Worse in Small Instalments',
        yearLabel: '1934',
        image: {
          setting: 'a folded newspaper on a table beside an untouched meal, winter light',
          year: 1934,
          characters: ['godel'],
          mood: 'distant, deteriorating, watchful',
          details: ['a folded newspaper', 'an untouched plate', 'a wireless set with a fabric grille', 'a clock', 'grey light on a wall'],
          alt: 'A folded newspaper beside an untouched plate in flat winter light.',
        },
        pages: [
          {
            id: 'paper',
            narration:
              'The newspaper comes every morning and gets worse in small instalments: four days of fighting in February, a Chancellor shot in his own office in July, and a new habit in the language, in which certain sorts of people are named as a category rather than as men.',
          },
          {
            id: 'inside',
            narration:
              'Something in him gives way that year, quietly, the way a floor gives way. He cannot eat, cannot sleep, cannot make the columns mean what they used to mean. A doctor gives it a name and sends him somewhere quiet for some months.',
          },
          {
            id: 'said',
            narration:
              'His brother, who is a physician and therefore knows exactly how little a physician can promise, sits with him without opening a bag.',
            speaker: 'HIS BROTHER',
            dialogue: 'You cannot check the world the way you check a proof, Kurt. Nobody can. The rest of us simply live inside it and hope.',
          },
          {
            id: 'decide',
            narration:
              'When he can sit at a desk again there is a decision on it and it is not a mathematical one. Everywhere he might work is inside the same continent, and the continent has begun to rewrite its rules without writing them down.',
            choices: [
              {
                id: 'stay',
                label: 'Stay where the work is and hope the weather passes',
                effects: [
                  { type: 'flag', flag: 'godel.staysForNow', value: true },
                  { type: 'theme', theme: 'homeVsSafety', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, network: 1 } },
                ],
              },
              {
                id: 'papers',
                label: 'Quietly put the papers in order — passports, invitations, a route',
                effects: [
                  { type: 'flag', flag: 'godel.preparesPapers', value: true },
                  { type: 'theme', theme: 'homeVsSafety', amount: -1 },
                  { type: 'resources', effects: { funds: -1, network: 1 } },
                ],
              },
              {
                id: 'work',
                label: 'Refuse to look up from the desk at all',
                effects: [
                  { type: 'flag', flag: 'godel.buriesHimself', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 1 },
                  { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The Austrian civil conflict and political assassinations of 1934, and Gödel’s breakdown and sanatorium stay in the same period, are documented. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-schlick',
    characterId: 'godel',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 92 },
    once: true,
    variants: [
      {
        id: 'vienna',
        conditions: [
          { type: 'yearAtLeast', year: 1936 },
          { type: 'yearAtMost', year: 1940 },
          { type: 'locationIs', locationId: 'vienna' },
        ],
        title: 'A Flight of Stone Steps in June',
        locationLabel: 'Vienna',
        yearLabel: '1936',
        image: {
          setting: 'an empty university stair with morning light and a caretaker’s bucket set at the bottom',
          year: 1936,
          characters: ['godel'],
          mood: 'stopped, hushed, unbearable',
          details: ['a broad stone stair', 'a caretaker’s bucket', 'a noticeboard with a lecture cancelled', 'summer light through tall glass', 'an unclaimed umbrella'],
          alt: 'An empty broad stone university stair in morning light with a caretaker’s bucket at the foot.',
        },
        pages: [
          {
            id: 'steps',
            narration:
              'It happens on a Monday morning on the main stair, on the way up to a lecture, and it is done by a man who was once his student. By the afternoon the notice is up: the course is cancelled. The stair is washed. The building goes on being a building.',
          },
          {
            id: 'papers',
            narration:
              'What finishes him is not the act. It is the newspapers afterwards, several of which explain, at length and in reasonable prose, why a philosopher of that kind might be expected to come to that end. He reads two of them and then stops buying papers for a year.',
          },
          {
            id: 'said',
            narration:
              'The circle does not meet again. Adele finds him at the desk at four in the morning with nothing written on the sheet in front of him.',
            speaker: 'ADELE',
            dialogue: 'From now on you eat what I cook and nothing else, and you sleep when I say. You are not to argue. You are not well and I am not asking.',
          },
          {
            id: 'after',
            narration:
              'He goes away again for some months, to another quiet place in the hills. He does not think of it as an illness so much as a correct response: he has been asked to go on treating the world as reliable, and he has run out of grounds.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.adeleFeedsHim', value: true },
          { type: 'flag', flag: 'godel.circleEnded', value: true },
          { type: 'resources', effects: { wellbeing: -2, network: -1 } },
        ],
        historicalNote:
          'Moritz Schlick, founder of the Vienna Circle, was killed on the university steps in June 1936 by a former student, and parts of the Viennese press justified the killing. Gödel suffered a severe breakdown afterwards and spent further time in a sanatorium. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1936 },
          { type: 'yearAtMost', year: 1940 },
        ],
        title: 'A Death Reported in Four Lines',
        yearLabel: '1936',
        image: {
          setting: 'a newspaper folded to a short column, a cup of coffee going cold beside it',
          year: 1936,
          characters: ['godel'],
          mood: 'flat, sickened, far away',
          details: ['a newspaper folded to a column', 'a cold cup', 'a chair pushed back', 'a window over a courtyard', 'summer dust in the air'],
          alt: 'A newspaper folded open to a short column beside a cup going cold.',
        },
        pages: [
          {
            id: 'column',
            narration:
              'The report is four lines long, on an inside page, between a shipping notice and an advertisement for a cure. A professor of philosophy, on a university stair, on a Monday morning, by a man who had once sat in his seminar.',
          },
          {
            id: 'papers',
            narration:
              'The next week other papers arrive and several of them explain, calmly, in respectable prose, why a philosopher of that kind might be expected to come to such an end. That is the part he cannot get past. Not the act — the explanations.',
          },
          {
            id: 'said',
            narration:
              'Adele finds him at the desk before dawn with a clean sheet in front of him and nothing on it.',
            speaker: 'ADELE',
            dialogue: 'You eat what I cook now, and nothing else, and you sleep when I say. I am not asking you, Kurtele. Look at your hands.',
          },
          {
            id: 'after',
            narration:
              'He goes away for some months to a quiet place. He does not experience it as an illness so much as an accurate response. He has been asked, all his life, to treat the world as basically reliable, and he has run out of grounds.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.adeleFeedsHim', value: true },
          { type: 'flag', flag: 'godel.circleEnded', value: true },
          { type: 'resources', effects: { wellbeing: -2, network: -1 } },
        ],
        historicalNote:
          'The killing of Moritz Schlick in 1936 and the press response to it are documented, as is the severe deterioration in Gödel’s health that followed. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-personal-sanatorium',
    characterId: 'godel',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 70 },
    once: true,
    variants: [
      {
        id: 'buried',
        conditions: [
          { type: 'yearAtLeast', year: 1935 },
          { type: 'yearAtMost', year: 1940 },
          { type: 'narrativeFlag', flag: 'godel.buriesHimself' },
        ],
        title: 'The Desk Wins for a While',
        yearLabel: '1935–1937',
        image: {
          setting: 'a work table at first light with the lamp still burning and a chair unslept-in behind it',
          year: 1936,
          characters: ['godel'],
          mood: 'depleted, driven, thinning',
          details: ['a lamp still burning at dawn', 'an unslept-in bed', 'a shorthand notebook filled edge to edge', 'a plate untouched', 'a coat still on the hook'],
          alt: 'A lamp still burning at first light over a work table, the bed behind it unslept in.',
        },
        pages: [
          {
            id: 'method',
            narration:
              'He works the way a man bails a boat. Ten hours, twelve, the shorthand crossing the page edge to edge in a system nobody under sixty can read, and the world outside the shutters simply does not get a vote.',
          },
          {
            id: 'cost',
            narration:
              'It holds for two years and then it does not. He begins to weigh what he is given before he eats it. He begins to count the pulse again, four times, writing all four figures. The columns come back like an old handwriting.',
          },
          {
            id: 'said',
            narration:
              'The doctor in the quiet place up in the hills is neither alarmed nor impressed, which he finds restful.',
            speaker: 'THE DOCTOR',
            dialogue: 'You are not the first clever man to try to out-think exhaustion, Herr Doktor. Six weeks. Walk in the mornings. Bring no papers and I shall pretend to believe you.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.sanatorium', value: true },
          { type: 'resources', effects: { health: -1, wellbeing: 1 } },
        ],
        historicalNote:
          'Gödel had repeated breakdowns and several stays in sanatoria during the 1930s, and worked in Gabelsberger shorthand. Dialogue is dramatized.',
      },
      {
        id: 'low',
        conditions: [
          { type: 'yearAtLeast', year: 1935 },
          { type: 'yearAtMost', year: 1940 },
          { not: { type: 'resourceAtLeast', resource: 'wellbeing', value: 4 } },
        ],
        title: 'Six Weeks in the Hills',
        yearLabel: '1935–1937',
        image: {
          setting: 'a sanatorium balcony with a wicker chair, a folded blanket and a valley below',
          year: 1936,
          characters: ['godel'],
          mood: 'suspended, cold air, recovering slowly',
          details: ['a wicker reclining chair', 'a folded blanket', 'a thermometer on a rail', 'pine slopes below', 'a tray with untouched bread'],
          alt: 'A wicker reclining chair and folded blanket on a sanatorium balcony above pine slopes.',
        },
        pages: [
          {
            id: 'balcony',
            narration:
              'The regime is a chair, a blanket, and four hours of cold air a day whether you want it or not. He is not permitted paper for the first fortnight, so he does the work in his head and files it, which is a thing he can do and the doctor cannot check.',
          },
          {
            id: 'weight',
            narration:
              'Meals are brought and taken away again nearly full. It is not stubbornness. It is that the act of eating requires a small unexamined trust, and his supply of unexamined trust has been running low for two years.',
          },
          {
            id: 'said',
            narration:
              'Adele comes up on the slow train on Sundays with a basket she has packed herself, and sits with him on the balcony, and eats the first mouthful of everything in front of him without comment.',
            speaker: 'ADELE',
            dialogue: 'There. It is only bread, Kurtele, and it is only me. Now yours.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.sanatorium', value: true },
          { type: 'flag', flag: 'godel.adeleTastesFirst', value: true },
          { type: 'resources', effects: { wellbeing: 2, health: 1 } },
        ],
        historicalNote:
          'Gödel spent periods in sanatoria in the 1930s and had difficulty eating during his breakdowns; Adele’s practice of tasting his food before he would eat it is reported by biographers of his later years. Dialogue is dramatized.',
      },
      {
        id: 'steady',
        conditions: [
          { type: 'yearAtLeast', year: 1935 },
          { type: 'yearAtMost', year: 1940 },
        ],
        title: 'The Sunday Walk, Timed to the Minute',
        yearLabel: '1935–1937',
        image: {
          setting: 'a wooded path with a bench, a pocket watch open on the slats, autumn',
          year: 1936,
          characters: ['godel'],
          mood: 'orderly, quietly well, contained',
          details: ['a bench with a watch open on the slats', 'a wooded path', 'a folded map', 'a walking stick', 'leaves in a drift'],
          alt: 'An open pocket watch resting on the slats of a bench beside a wooded path.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'Sundays he walks a route he established in the spring: fifty-one minutes, one bench, no variations. The regularity is not fussiness. It is the only instrument he has for telling whether a bad week is his own or the world’s.',
          },
          {
            id: 'good',
            narration:
              'This year the answer is the world’s. He is sleeping, he is eating what is put in front of him, and the shorthand notebook is filling at a rate he can be pleased about. It will not last. He knows the shape of these things now, which is itself a kind of health.',
          },
          {
            id: 'said',
            narration:
              'Adele meets him at the bench with the basket and looks at the open watch on the slats and says nothing about it for a full minute.',
            speaker: 'ADELE',
            dialogue: 'Fifty-one minutes. Every Sunday. — No, do not explain it. I like that you are exactly where you said you would be.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.sanatorium', value: true },
          { type: 'resources', effects: { wellbeing: 1, health: 1 } },
        ],
        historicalNote:
          'Gödel’s meticulous routines and record-keeping, and his periods of relative stability between breakdowns in the 1930s, are documented. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-marriage',
    characterId: 'godel',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 66 },
    once: true,
    variants: [
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1937 },
          { type: 'yearAtMost', year: 1940 },
        ],
        title: 'Two Witnesses and No Reception',
        yearLabel: '1938',
        image: {
          setting: 'a registry office corridor with two hats on a bench and a ledger on a table',
          year: 1938,
          characters: ['godel'],
          mood: 'plain, resolved, tender',
          details: ['an open ledger', 'two hats on a bench', 'a pen in a stand', 'a bunch of flowers still in paper', 'a clock high on the wall'],
          alt: 'An open ledger and a pen in a stand on a registry office table, two hats on a bench behind.',
        },
        pages: [
          {
            id: 'ledger',
            narration:
              'It takes eleven minutes, two witnesses and one signature each. She is older than him and she has been married before and she works at night, and his family has spent a decade explaining, in letters, what each of those facts means.',
          },
          {
            id: 'why',
            narration:
              'What each of those facts means, as far as he can establish, is that when the floor gave way she came up on the slow train every Sunday with a basket, for months, and never once told him he looked well when he did not.',
          },
          {
            id: 'said',
            narration:
              'Outside, the flags are up along the avenue and there is a great deal of shouting somewhere off to the east of the square. She takes his arm and turns them both the other way.',
            speaker: 'ADELE',
            dialogue: 'Not today. Today is ours and they can have every other day this year. Walk on the inside, you always drift.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.married', value: true },
          { type: 'resources', effects: { wellbeing: 2, health: 1 } },
        ],
        historicalNote:
          'Gödel married Adele Nimbursky in Vienna in September 1938, after years of his family’s opposition and in the year of the Anschluss. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-anschluss',
    characterId: 'godel',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 97 },
    once: true,
    replacesContextCardId: 'godel-card-1938-anschluss',
    variants: [
      {
        id: 'vienna',
        conditions: [
          { type: 'yearAtLeast', year: 1938 },
          { type: 'yearAtMost', year: 1940 },
          { type: 'locationIs', locationId: 'vienna' },
        ],
        title: 'The University Reorganises Itself',
        locationLabel: 'Vienna',
        yearLabel: '1938',
        image: {
          setting: 'a university noticeboard with a new list of posts pinned over an older one, March 1938',
          year: 1938,
          characters: ['godel'],
          mood: 'sudden, bureaucratic, cold',
          details: ['a new list pinned over an old one', 'brass tacks', 'a stone corridor', 'an unclaimed coat on a hook', 'rain on high glass'],
          alt: 'A new pinned list of posts overlapping an older one on a university noticeboard.',
        },
        pages: [
          {
            id: 'march',
            narration:
              'In March the flags go up in a single night and by the summer the noticeboard has been reorganised. His lecturing title has not been taken from him exactly; it has been abolished, along with the whole category it belonged to, and a new one has been created that must be applied for.',
          },
          {
            id: 'street',
            narration:
              'Walking home one evening a group of young men decide, from his coat and his glasses and his way of walking, what sort of intellectual he must be. They are wrong about him in every particular, which turns out to make no difference at all to what they do. Adele is beside him with an umbrella and she is not a woman who hesitates.',
          },
          {
            id: 'said',
            narration:
              'She gets them home. He sits on the edge of the bed with his glasses in his hand and finds he cannot make the evening resolve into anything he can file.',
            speaker: 'ADELE',
            dialogue: 'They did not know who you were, Kurtele. That is the whole of it. They did not need to know. Do you understand me? There is nothing to work out.',
          },
          {
            id: 'answer',
            narration:
              'There is a form on the hall table for the new title, and there is a drawer with the addresses of institutes across an ocean, and there is a third option which is to do nothing at all and see. Whatever he does, he must do it this month.',
            choices: [
              {
                id: 'apply',
                label: 'Fill in the form for the new title and keep teaching',
                effects: [
                  { type: 'flag', flag: 'godel.filedTheForm', value: true },
                  { type: 'theme', theme: 'homeVsSafety', amount: 1 },
                  { type: 'resources', effects: { funds: 1, exposure: 1 } },
                ],
              },
              {
                id: 'abroad',
                label: 'Write to the institute across the ocean',
                effects: [
                  { type: 'flag', flag: 'godel.writesAbroad', value: true },
                  { type: 'theme', theme: 'homeVsSafety', amount: -2 },
                  { type: 'resources', effects: { network: 1, funds: -1 } },
                ],
              },
              {
                id: 'nothing',
                label: 'Say nothing to anyone and go on with the work',
                effects: [
                  { type: 'flag', flag: 'godel.saysNothing', value: true },
                  { type: 'resources', effects: { wellbeing: -1, exposure: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1938-anschluss' },
          { type: 'resources', effects: { exposure: 2, wellbeing: -1 } },
        ],
        historicalNote:
          'After the March 1938 Anschluss the Austrian universities were reorganised and the Privatdozent title Gödel held was abolished, requiring a new application. Gödel, who was not Jewish, was assaulted in the street by youths who took him for a Jewish intellectual; Adele drove them off. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1938 },
          { type: 'yearAtMost', year: 1940 },
        ],
        title: 'A Country Ceases to Exist by Post',
        yearLabel: '1938',
        image: {
          setting: 'an official letter and a cancelled stamp beside a wireless set, March 1938',
          year: 1938,
          characters: ['godel'],
          mood: 'remote, irreversible, quiet',
          details: ['an official letter with a new heading', 'a cancelled stamp', 'a wireless set', 'a folded map', 'an unlit lamp'],
          alt: 'An official letter with a new heading lying beside a wireless set and a folded map.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter arrives with a heading that did not exist last spring. The country he holds papers from has been absorbed into another one, and the effect on him personally is a single paragraph: the position he held is abolished, together with the entire category it belonged to.',
          },
          {
            id: 'category',
            narration:
              'It is the word category that stays with him. He is not being dismissed for anything he has done or written. He has been re-sorted. Somewhere a man he will never meet decided which box he goes in, and the decision does not require his participation or even his presence.',
          },
          {
            id: 'said',
            narration:
              'Adele reads it over his shoulder and puts it face down on the table, which is her way of ending a discussion.',
            speaker: 'ADELE',
            dialogue: 'They did not need to know anything about you at all. That is what you are refusing to understand. There is nothing here to work out, Kurtele. There is only what we do next.',
          },
          {
            id: 'answer',
            narration:
              'There is a form to apply for the new title, and there is a drawer with the addresses of institutes across an ocean, and there is the option of doing nothing and seeing what the year brings. Whatever he chooses, it will not wait until he is certain.',
            choices: [
              {
                id: 'apply',
                label: 'Fill in the form for the new title and keep teaching',
                effects: [
                  { type: 'flag', flag: 'godel.filedTheForm', value: true },
                  { type: 'theme', theme: 'homeVsSafety', amount: 1 },
                  { type: 'resources', effects: { funds: 1, exposure: 1 } },
                ],
              },
              {
                id: 'abroad',
                label: 'Write to the institute across the ocean',
                effects: [
                  { type: 'flag', flag: 'godel.writesAbroad', value: true },
                  { type: 'theme', theme: 'homeVsSafety', amount: -2 },
                  { type: 'resources', effects: { network: 1, funds: -1 } },
                ],
              },
              {
                id: 'nothing',
                label: 'Say nothing to anyone and go on with the work',
                effects: [
                  { type: 'flag', flag: 'godel.saysNothing', value: true },
                  { type: 'resources', effects: { wellbeing: -1, exposure: 1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1938-anschluss' },
          { type: 'resources', effects: { exposure: 2, wellbeing: -1 } },
        ],
        historicalNote:
          'The 1938 Anschluss abolished the Austrian Privatdozent category and with it Gödel’s teaching position. This variant describes the same events reaching him away from Vienna. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-emigration',
    characterId: 'godel',
    kind: 'relocation',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 96 },
    once: true,
    replacesContextCardId: 'godel-card-1940-emigration',
    variants: [
      {
        id: 'journey',
        conditions: [
          { type: 'yearAtLeast', year: 1939 },
          { type: 'yearAtMost', year: 1940 },
          { type: 'visitedLocation', locationId: 'princeton' },
        ],
        title: 'East, to Go West',
        yearLabel: '1940',
        image: {
          setting: 'a snowbound railway platform in January with two suitcases and a folded route of transit visas',
          year: 1940,
          characters: ['godel'],
          mood: 'endless, cold, holding on',
          details: ['two suitcases', 'a folded sheaf of transit visas', 'frost on a carriage window', 'a station clock', 'steam under a canopy'],
          alt: 'Two suitcases on a snowbound railway platform beside a carriage frosted over.',
        },
        pages: [
          {
            id: 'wrong-way',
            narration:
              'The Atlantic is closed, so they go the other way round the world to reach a town in New Jersey. Two suitcases. A sheaf of transit permits, each one valid for a different number of days, each one issued by a country that may not be a country by the time they reach it.',
          },
          {
            id: 'rail',
            narration:
              'Then the railway east, and east, and east: eleven days of birch and snow and stations whose names he cannot read, a samovar at the end of the carriage, the same six phrases of Russian doing all the work. He keeps a note of every border crossing with the time to the minute. It is the only thing that helps.',
          },
          {
            id: 'said',
            narration:
              'On the ship across the Pacific he cannot eat and cannot sleep and stands at the rail for a long time in the dark. Adele finds him there with the collar of his coat up.',
            speaker: 'ADELE',
            dialogue: 'Six weeks and we are done. I have counted them too, you know. Come below, Kurtele, before the cold gets into you.',
          },
          {
            id: 'arrive',
            narration:
              'A ship, then a continent by train, then a small green town with elms in the streets and a bell somewhere. He is thirty-four. He has arrived at the place where he will spend the rest of his life, and behind him the whole of the world he grew up in has closed like a door.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1940-emigration' },
          { type: 'flag', flag: 'godel.emigrated', value: true },
          { type: 'resources', effects: { funds: -1, wellbeing: -1, health: -1 } },
        ],
        historicalNote:
          'In January 1940 Gödel and Adele left Vienna and travelled by the Trans-Siberian Railway across the Soviet Union, then by ship from Japan across the Pacific and by train across the United States, reaching Princeton in March. Dialogue is dramatized.',
      },
      {
        id: 'preparing',
        conditions: [
          { type: 'yearAtLeast', year: 1939 },
          { type: 'yearAtMost', year: 1940 },
          {
            any: [
              { type: 'narrativeFlag', flag: 'godel.writesAbroad' },
              { type: 'narrativeFlag', flag: 'godel.preparesPapers' },
            ],
          },
        ],
        title: 'A Route Drawn the Wrong Way Round the World',
        yearLabel: '1939–1940',
        image: {
          setting: 'a table with a world map, a ruler and a stack of consular forms under a paperweight',
          year: 1939,
          characters: ['godel'],
          mood: 'methodical, waiting, tense',
          details: ['a world map with a pencil line running east', 'consular forms under a paperweight', 'a ruler', 'two passports', 'an unlit lamp'],
          alt: 'A world map with a pencil line running eastward, weighted consular forms beside it.',
        },
        pages: [
          {
            id: 'map',
            narration:
              'The map is on the table every evening and the pencil line goes the wrong way: east, across a continent, then a sea, then another sea, then a third of the world again. Westward is shorter and westward is closed.',
          },
          {
            id: 'forms',
            narration:
              'Each leg needs a permit and each permit needs another, and none of them lasts long enough to overlap comfortably with the next. He builds the timetable the way he builds a proof — every step justified, nothing assumed — and even so the whole structure rests on offices staying open in cities he has never seen.',
          },
          {
            id: 'said',
            narration:
              'He is also, that winter, called up for a medical examination and found fit for service, which he receives as a piece of information about a system rather than about his heart.',
            speaker: 'ADELE',
            dialogue: 'Fit. After thirty years of your own arithmetic on your own pulse, a stranger writes fit. — Then we go, and we go before he changes his mind.',
          },
          {
            id: 'wait',
            narration:
              'The route exists on the table, complete, in pencil, with the times to the minute. Whether the doors along it are open when he reaches them is a thing no proof can settle in advance.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1940-emigration' },
          { type: 'flag', flag: 'godel.routePlanned', value: true },
          { type: 'resources', effects: { funds: -1, network: 1 } },
        ],
        historicalNote:
          'The eastward route via the Trans-Siberian Railway was the only practicable way out of central Europe for the Gödels in 1940; he was also examined and declared fit for military service in 1939, which sharpened the urgency of leaving. Dialogue is dramatized.',
      },
      {
        id: 'staying',
        conditions: [
          { type: 'yearAtLeast', year: 1939 },
          { type: 'yearAtMost', year: 1940 },
        ],
        title: 'The Timetable in the Bottom Drawer',
        yearLabel: '1939–1940',
        image: {
          setting: 'a bottom drawer holding a folded timetable and an unopened consular envelope',
          year: 1940,
          characters: ['godel'],
          mood: 'suspended, closing in, quiet',
          details: ['a folded timetable', 'an unopened consular envelope', 'a drawer half pulled out', 'a key on a ring', 'shuttered light'],
          alt: 'A folded railway timetable and an unopened consular envelope in a half-open drawer.',
        },
        pages: [
          {
            id: 'drawer',
            narration:
              'The timetable is in the bottom drawer, folded along its old creases, with the eastward route marked once in pencil in the spring and never marked again. Beside it, an envelope from a consulate that he has not opened, because opening it would commit him to having a view.',
          },
          {
            id: 'closing',
            narration:
              'Every month the route costs more days and more signatures and one more country that must be crossed while it still lets people cross it. Nobody sends a letter saying the door has shut. It simply becomes, week by week, a slightly longer sentence to say aloud.',
          },
          {
            id: 'said',
            narration:
              'Adele finds the drawer open one evening and does not touch anything in it.',
            speaker: 'ADELE',
            dialogue: 'You have been deciding this for two years, Kurtele. At some point the deciding is the decision. — Very well. Then we stay, and I will not raise it again.',
          },
          {
            id: 'after',
            narration:
              'He closes the drawer. There is work on the desk, and the work does not care which country he does it in, and that argument has held so far, and he goes on making it to himself for a long time after it has stopped being true.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1940-emigration' },
          { type: 'flag', flag: 'godel.stayed', value: true },
          { type: 'resources', effects: { wellbeing: -1, exposure: 1 } },
        ],
        historicalNote:
          'Gödel and Adele left Vienna in January 1940 by the eastward route. This variant describes those months with the departure never made.',
      },
    ],
  },

  {
    id: 'godel-late-crossing',
    characterId: 'godel',
    kind: 'relocation',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 94 },
    once: true,
    variants: [
      {
        id: 'route-followed',
        conditions: [
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1955 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'narrativeFlag', flag: 'godel.routePlanned' },
        ],
        title: 'Every Door on the Line, Open at Once',
        locationLabel: 'Princeton',
        yearLabel: '1941',
        image: {
          setting: 'a sheaf of transit permits fanned on a carriage seat with a frosted window behind',
          year: 1941,
          characters: ['godel'],
          mood: 'exacting, held-breath, moving at last',
          details: ['a fan of transit permits', 'a frosted carriage window', 'a pocket watch face up on a knee', 'two suitcases in a rack', 'snow beyond the glass'],
          alt: 'A fan of transit permits laid on a carriage seat beside a frosted window.',
        },
        pages: [
          {
            id: 'open',
            narration:
              'The timetable he built on the table, step by justified step, turns out to have one property he could not prove in advance: this month, every office along it is open at the same time. He does not wait to see whether that holds for a second month.',
          },
          {
            id: 'east',
            narration:
              'East, because west is closed. The railway through birch and snow, eleven days of stations whose names he cannot read, a samovar at the end of the carriage and the same six phrases doing all the work. He notes each border crossing with the time to the minute, and the notes are the only thing that helps.',
          },
          {
            id: 'said',
            narration:
              'A ship after that, and a continent by train. Adele has watched him build the route for two years and has never once asked him when he intends to walk it.',
            speaker: 'ADELE',
            dialogue: 'You checked every step of it, Kurtele, exactly as you said you would. And here we are, and the checking was not wasted. Now sleep.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.emigrated', value: true },
          { type: 'resources', effects: { funds: -1, health: -1, wellbeing: 1 } },
        ],
        historicalNote:
          'Gödel and Adele left Vienna in January 1940 by the eastward route — the Trans-Siberian Railway, a Pacific crossing and a train across the United States — on transit permits that had to align exactly. This scene places that journey after a longer period of preparation.',
      },
      {
        id: 'drawer-reopened',
        conditions: [
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1955 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'narrativeFlag', flag: 'godel.stayed' },
        ],
        title: 'The Pencil Line, Followed at Last',
        locationLabel: 'Princeton',
        yearLabel: '1941',
        image: {
          setting: 'a ship’s rail at night with a folded route of transit permits held against the wind',
          year: 1941,
          characters: ['godel'],
          mood: 'overdue, cold, holding on',
          details: ['a folded sheaf of transit permits', 'a ship’s rail wet with spray', 'two suitcases below deck', 'a station clock remembered', 'birch and snow through a carriage window'],
          alt: 'A folded sheaf of transit permits held at a ship’s rail at night.',
        },
        pages: [
          {
            id: 'open',
            narration:
              'The drawer is opened again on an ordinary Tuesday and the timetable comes out along its old creases, and the pencil line is still where he left it, running the wrong way round the world. He does not announce the decision. He simply begins buying the permits in the order the line requires.',
          },
          {
            id: 'east',
            narration:
              'East, then, because west is closed: the railway through birch and snow, eleven days of stations whose names he cannot read, a samovar at the end of the carriage and the same six phrases doing all the work. He notes every border crossing with the time to the minute, which is the only thing that helps.',
          },
          {
            id: 'said',
            narration:
              'A ship after that, and a continent by train, and Adele beside him for the whole of it. She has waited two years for him to finish deciding and she does not say so once.',
            speaker: 'ADELE',
            dialogue: 'No. Not one word from me, Kurtele. You got us here, in your own time, in your own way, and that is the end of the subject for ever.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.emigrated', value: true },
          { type: 'resources', effects: { funds: -1, health: -1, wellbeing: 1 } },
        ],
        historicalNote:
          'Gödel and Adele left Vienna in January 1940 by the eastward route — the Trans-Siberian Railway, a Pacific crossing and a train across the United States. This scene places that journey later, after years of deferral.',
      },
    ],
  },

  {
    id: 'godel-crisis-closing',
    characterId: 'godel',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'left',
        conditions: [{ type: 'visitedLocation', locationId: 'princeton' }],
        title: 'A Green Town with Elms',
        yearLabel: '1940',
        image: {
          setting: 'a rented room with two unopened suitcases and a window onto a wide quiet street',
          year: 1940,
          characters: ['godel'],
          mood: 'landed, unreal, safe',
          details: ['two unopened suitcases', 'a wide street with elms', 'a bare mantelpiece', 'a new key on a ring', 'afternoon light on floorboards'],
          alt: 'Two unopened suitcases in a bare rented room with a window onto a wide street.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The suitcases stand unopened in a rented room for three days because unpacking would mean this is where they are now. Outside, a street so wide and so quiet that the quiet itself is disorienting. Nobody in it is shouting about anything.',
          },
          {
            id: 'safe',
            narration:
              'He has crossed most of the surface of the earth to sit at a desk again. Everything he was is behind a door that has shut: the lecture lists, the Thursday room above the shop, the stone stair. He unpacks the notebooks first, and they are in a shorthand that nobody on this continent can read, which for the moment suits him exactly.',
          },
        ],
        historicalNote:
          'Gödel reached Princeton in March 1940 and remained there for the rest of his life.',
      },
      {
        id: 'form-filed',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.filedTheForm' }],
        title: 'The New Title, and What It Costs to Hold',
        yearLabel: '1940',
        image: {
          setting: 'a desk with a stamped certificate in a folder and a lecture list open beside it',
          year: 1940,
          characters: ['godel'],
          mood: 'compromised, functional, grey',
          details: ['a stamped certificate in a card folder', 'a lecture list', 'a fountain pen capped', 'a window onto a courtyard', 'a coat on a hook'],
          alt: 'A stamped certificate in a card folder lying open beside a printed lecture list.',
        },
        pages: [
          {
            id: 'stamped',
            narration:
              'The certificate comes back stamped and he puts it in a card folder in the drawer and does not look at it again. He may lecture. The lectures are the same lectures. The room they are given in has a different photograph on the wall.',
          },
          {
            id: 'cost',
            narration:
              'He tells himself, correctly, that arithmetic is indifferent to who is in the corridor. It goes on being correct and it goes on helping less. Some evenings he takes the folded timetable out of the bottom drawer and looks at the pencil line running east, and puts it back.',
          },
        ],
        historicalNote:
          'After the Anschluss, holders of the abolished Privatdozent title had to apply for a new one; Gödel did apply. He left Austria in 1940. This variant describes a life continuing under the new arrangements.',
      },
      {
        id: 'default',
        title: 'The Same Rooms, With the Windows Shut',
        yearLabel: '1940',
        image: {
          setting: 'a shuttered room with a lamp on in the afternoon and a stack of unposted letters',
          year: 1940,
          characters: ['godel'],
          mood: 'enclosed, diminished, stubborn',
          details: ['unposted letters in a stack', 'a lamp on in daylight', 'closed shutters', 'a shorthand notebook', 'a cold stove'],
          alt: 'A stack of unposted letters beside a lamp burning in the afternoon in a shuttered room.',
        },
        pages: [
          {
            id: 'shut',
            narration:
              'The circle is finished, the seminar is finished, and half the names in his address book are now addresses in other countries or no addresses at all. He works with the shutters closed and the lamp on at two in the afternoon.',
          },
          {
            id: 'stubborn',
            narration:
              'The letters he writes stack up unposted, because a letter is a thing that goes out into a system he can no longer model. What is left is the notebook and the shorthand, and the flat fact that the numbers are exactly where he left them, which on the worst days is the only sentence in his head that he is sure of.',
          },
        ],
        historicalNote:
          'Austrian academic life was broken up between 1934 and 1940 by political violence, emigration and dismissal. This variant describes those years without departure.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Legacy, 1940-1978
  // -------------------------------------------------------------------------
  {
    id: 'godel-legacy-opening',
    characterId: 'godel',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'A Room, a Desk, and No Duties Whatsoever',
        locationLabel: 'Princeton',
        yearLabel: '1940',
        image: {
          setting: 'a bare institute office with an empty blackboard, one chair and a window onto lawns',
          year: 1940,
          characters: ['godel'],
          mood: 'unnervingly quiet, spacious, foreign',
          details: ['an empty blackboard', 'one chair', 'a window onto mown lawns', 'an unfilled bookcase', 'a radiator ticking'],
          alt: 'A bare institute office with an empty blackboard and a window onto mown lawns.',
        },
        pages: [
          {
            id: 'office',
            narration:
              'They give him a room with a blackboard, a chair, a window onto grass, and no obligations of any kind: no lectures, no examinations, no committee. He stands in the middle of it for some time. He has never in his life been given a place with nothing to be afraid of in it.',
          },
          {
            id: 'others',
            narration:
              'The corridor is full of accents from cities that no longer work the way they did. Half the continent’s mathematics is here, in cardigans, eating institutional lunch. They call it a haven, ironically, and mean it.',
          },
          {
            id: 'said',
            narration:
              'An older man in a shapeless pullover stops in the doorway, having apparently walked the length of the building on the strength of one sentence in a journal.',
            speaker: 'EINSTEIN',
            dialogue: 'So you are the one who proved that we cannot have what we want. Good. Walk home with me and explain why I should not be upset about it.',
          },
          {
            id: 'settle',
            narration:
              'The offer is repeated the following week and the week after that. What he does with it will shape the next fifteen years more than any theorem on the blackboard behind him.',
            choices: [
              {
                id: 'work',
                label: 'Keep to the desk; the work is why he crossed the world',
                effects: [
                  { type: 'flag', flag: 'godel.keepsWorking', value: true },
                  { type: 'theme', theme: 'worldVsSystem', amount: 1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'walk',
                label: 'Say yes to the walk, and to the next one',
                effects: [
                  { type: 'flag', flag: 'godel.walksInstead', value: true },
                  { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 1 },
                  { type: 'resources', effects: { wellbeing: 2, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Gödel took up a position at the Institute for Advanced Study, which imposed no teaching duties, and became a close friend of Einstein there; their walks to and from the Institute are documented. Dialogue is dramatized.',
      },
      {
        id: 'vienna',
        conditions: [{ type: 'locationIs', locationId: 'vienna' }],
        title: 'The City That Is Left',
        locationLabel: 'Vienna',
        yearLabel: '1940',
        image: {
          setting: 'a half-empty faculty corridor with several doors unlabelled, 1940',
          year: 1940,
          characters: ['godel'],
          mood: 'depopulated, careful, enduring',
          details: ['doors with the name plates removed', 'a corridor lamp', 'a noticeboard with three notices', 'a bucket by a stair', 'blackout tape on glass'],
          alt: 'A faculty corridor with several name plates removed from the doors.',
        },
        pages: [
          {
            id: 'plates',
            narration:
              'The name plates have come off four of the doors on his corridor and nobody has put new ones on. The building is warm and functioning and roughly a third of the people who made it worth walking into are somewhere else, or nowhere.',
          },
          {
            id: 'work',
            narration:
              'The work is still possible. That is the strange thing, and he turns it over often: the whole numbers are entirely unaffected by any of this, and can be reached from any desk in any country under any flag whatsoever.',
          },
          {
            id: 'said',
            narration:
              'A colleague who is leaving on Thursday puts his head round the door with a box under his arm and does not sit down.',
            speaker: 'A COLLEAGUE',
            dialogue: 'There is still a place for you across the water, you know. They ask after you. — No, do not answer now. Answer while there is still a train.',
          },
          {
            id: 'settle',
            narration:
              'The door closes. The blackboard is clean and there are perhaps two people left in this city who could check what he writes on it. What he does with the next fifteen years is decided, in effect, this term.',
            choices: [
              {
                id: 'work',
                label: 'Keep to the desk; the numbers do not care where he sits',
                effects: [
                  { type: 'flag', flag: 'godel.keepsWorking', value: true },
                  { type: 'theme', theme: 'worldVsSystem', amount: 1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'walk',
                label: 'Get out of the room; find the one person still worth talking to',
                effects: [
                  { type: 'flag', flag: 'godel.walksInstead', value: true },
                  { type: 'resources', effects: { wellbeing: 2, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'By 1940 the Viennese mathematical and philosophical community had been dispersed by dismissal, emigration and murder. This variant describes Gödel remaining. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Thirty-Four, and the Rest of It Ahead',
        yearLabel: '1940',
        image: {
          setting: 'a desk under a window with a fresh notebook opened at the first page',
          year: 1940,
          characters: ['godel'],
          mood: 'level, beginning again, uncertain',
          details: ['a fresh notebook at the first page', 'a pen laid parallel', 'a window with the curtain half back', 'a pocket watch face up', 'a bare shelf'],
          alt: 'A fresh notebook opened at its first page on a desk under a curtained window.',
        },
        pages: [
          {
            id: 'first-page',
            narration:
              'A new notebook, opened at the first page, dated in the corner. He is thirty-four. Whatever the war does, it will take years, and the years will have to be spent somewhere, and he intends to spend them on the only questions he has ever found worth the trouble.',
          },
          {
            id: 'question',
            narration:
              'Two of them are waiting. Whether the size of the infinite can be settled at all. And, underneath that, the older one he has never stopped asking since a corridor that smelled of floor wax: what is it, exactly, that lets anyone be sure of anything.',
          },
          {
            id: 'said',
            narration:
              'Adele puts the coffee down beside the notebook and looks at the empty first page for a moment.',
            speaker: 'ADELE',
            dialogue: 'Good. Start something long, Kurtele. You are always better when the thing on the desk will take you ten years.',
          },
          {
            id: 'settle',
            narration:
              'She is right, and the choice underneath it is the same one he has been making since he was eight: how much of a life to spend inside the system, and how much of it out in the street where the answers cannot be checked.',
            choices: [
              {
                id: 'work',
                label: 'Keep to the desk; the work is the only reliable room',
                effects: [
                  { type: 'flag', flag: 'godel.keepsWorking', value: true },
                  { type: 'theme', theme: 'worldVsSystem', amount: 1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'walk',
                label: 'Take the walks, keep the company, let the days be ordinary',
                effects: [
                  { type: 'flag', flag: 'godel.walksInstead', value: true },
                  { type: 'resources', effects: { wellbeing: 2, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Gödel’s major later work concerned the continuum hypothesis and, after 1947, the philosophy of mathematics and relativistic cosmology. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-project-constructible',
    characterId: 'godel',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'godel-constructible-universe', priority: 84 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'Only the Sets You Are Forced to Build',
        locationLabel: 'Princeton',
        image: {
          setting: 'a lecture room blackboard carrying a single ascending sequence of stages',
          year: 1940,
          characters: ['godel'],
          mood: 'architectural, patient, satisfied',
          details: ['a blackboard with an ascending sequence', 'a chalk box', 'mimeographed lecture notes stapled', 'a window onto lawns', 'a stopped wall clock'],
          alt: 'A blackboard carrying a single ascending sequence of stages, chalk box on the ledge.',
        },
        pages: [
          {
            id: 'build',
            narration:
              'Cantor asked whether there is any size of infinity between the whole numbers and the continuum, and for sixty years the question has sat there, first on Hilbert’s list, refusing every attack. He does not attack it. He builds a smaller universe.',
          },
          {
            id: 'l',
            narration:
              'At each stage you may take only the sets you are forced to take — the ones that can be described from what you already have. Nothing decorative. Nothing assumed. Run that upward through all the stages and you get a world in which the axiom of choice holds, and the continuum hypothesis holds, and every other axiom is satisfied.',
          },
          {
            id: 'said',
            narration:
              'A visitor at the back of the room wants to know whether that settles it. He gives the answer that will be quoted at him for thirty years.',
            speaker: 'GÖDEL',
            dialogue: 'It settles half. You can no longer prove the hypothesis false. Whether you can prove it true — that is a different building, and I have not built it, and I am not certain it stands.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.builtL', value: true },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Between 1938 and 1940 Gödel proved that the axiom of choice and the generalized continuum hypothesis are consistent with the other axioms of set theory, by constructing the inner model of constructible sets. Independence in the other direction was proved by Paul Cohen in 1963. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Universe Made Only of What Is Forced',
        image: {
          setting: 'a private desk with a long ascending column of stages written out by hand',
          year: 1939,
          characters: ['godel'],
          mood: 'absorbed, austere, quietly grand',
          details: ['a long handwritten column of stages', 'a shorthand notebook', 'a ruler', 'an ashtray never used', 'lamplight at an odd hour'],
          alt: 'A long handwritten column of ascending stages on a private desk under a lamp.',
        },
        pages: [
          {
            id: 'build',
            narration:
              'Cantor’s question has stood for sixty years: is there a size of infinity between the counting numbers and the continuum? He gives up trying to answer it and instead builds a world, from the ground, admitting at each stage only the sets he is forced to admit.',
          },
          {
            id: 'l',
            narration:
              'Nothing decorative. Nothing assumed. And in that austere world every axiom of set theory holds, and so does the axiom of choice, and so does Cantor’s hypothesis. Which means nobody will ever prove them false. The question has lost one of its two possible answers.',
          },
          {
            id: 'said',
            narration:
              'He writes the summary sentence at the foot of the page and reads it back, and it says less than he wanted and exactly as much as he can defend.',
            speaker: 'GÖDEL',
            dialogue: 'Half an answer. You may no longer say it is false. Whether you may say it is true, I do not know — and I suspect the axioms will never decide it either way.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.builtL', value: true },
          { type: 'resources', effects: { standing: 2 } },
        ],
        historicalNote:
          'Gödel’s consistency proof for the axiom of choice and the continuum hypothesis dates from 1938–40 and used the constructible hierarchy. His suspicion that the continuum hypothesis was independent of the axioms was later confirmed.',
      },
    ],
  },

  {
    id: 'godel-encounter-einstein',
    characterId: 'godel',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 74 },
    once: true,
    variants: [
      {
        id: 'human-here',
        conditions: [
          { type: 'yearAtLeast', year: 1942 },
          { type: 'yearAtMost', year: 1952 },
          { type: 'otherCharacterIsHuman', characterId: 'einstein' },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton', yearTolerance: 2 },
        ],
        title: 'Two Men Walking Home Speaking German',
        locationLabel: 'Princeton',
        yearLabel: '1942–1950',
        image: {
          setting: 'a tree-lined suburban road in late afternoon with two long shadows and no traffic',
          year: 1946,
          characters: ['godel', 'einstein'],
          mood: 'companionable, argumentative, warm',
          details: ['a tree-lined road', 'two long shadows', 'a knitted cap', 'an overcoat buttoned in mild weather', 'fallen elm leaves'],
          alt: 'A quiet tree-lined road in late afternoon with two long shadows falling across it.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'They go the same way every afternoon, past the same hedges, at a pace set by the older of them. One is in shirtsleeves and a knitted cap in October. The other is in an overcoat buttoned to the throat in May. Neither has ever remarked on it.',
          },
          {
            id: 'disagree',
            narration:
              'They agree about almost nothing. Not about what a physical law is, not about whether the world is at bottom lawful, not about the war, not about God. The disagreements are conducted in the language they both grew up in, which neither of them will speak to anyone else on this continent.',
          },
          {
            id: 'said',
            narration:
              'Somebody at the Institute asks the older man why he bothers coming in at all, at his age, with his ailments.',
            speaker: 'EINSTEIN',
            dialogue: 'My own work no longer means very much. I come to the office for the privilege of walking home with Gödel.',
          },
          {
            id: 'after',
            narration:
              'It gets back to him, of course, everything does in a town this size. He does not know what to do with it, so he does what he always does with things he cannot check: he writes the date in the notebook, and nothing else, and keeps the page.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 3, respect: 3, flag: 'the-walks' },
          { type: 'flag', flag: 'godel.walksWithEinstein', value: true },
          { type: 'flag', flag: 'godel.einsteinFriendship', value: true },
          { type: 'resources', effects: { wellbeing: 2, network: 1 } },
        ],
        historicalNote:
          'Gödel and Einstein walked to and from the Institute together for years and were close friends despite deep philosophical disagreements. Einstein’s remark about coming to the Institute for the privilege of walking home with Gödel is reported by Oskar Morgenstern; the wording here is a paraphrase, not a quotation.',
      },
      {
        id: 'human-elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1942 },
          { type: 'yearAtMost', year: 1952 },
          { type: 'otherCharacterIsHuman', characterId: 'einstein' },
        ],
        title: 'The Correspondence of Two Difficult Men',
        yearLabel: '1942–1950',
        image: {
          setting: 'a writing table with a letter in a familiar hand and a photograph propped against the inkstand',
          year: 1946,
          characters: ['godel'],
          mood: 'affectionate at a distance, unhurried',
          details: ['a letter in a sloping hand', 'a photograph propped up', 'an inkstand', 'a folded newspaper', 'a window open two inches'],
          alt: 'A letter in a sloping hand propped beside an inkstand on a writing table.',
        },
        pages: [
          {
            id: 'letters',
            narration:
              'They write instead. Six pages at a time, in the language they were both raised in, about whether the world is at bottom lawful and whether that question is even the sort of thing evidence can touch.',
          },
          {
            id: 'said',
            narration:
              'The old man’s letters are shorter, funnier, and considerably ruder about philosophers, and always end with the same complaint.',
            speaker: 'EINSTEIN',
            dialogue: 'You argue better on paper than anyone I know, which is precisely the trouble. Come and be wrong at me in person, where I can wave my hands.',
          },
          {
            id: 'after',
            narration:
              'He answers every letter within two days and keeps every one he receives, in order, in a box. It is the closest thing to a friendship he has, and it is conducted almost entirely in the past tense of a country neither of them can go back to.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 2, respect: 3, flag: 'the-letters' },
          { type: 'flag', flag: 'godel.einsteinFriendship', value: true },
          { type: 'resources', effects: { wellbeing: 1, network: 1 } },
        ],
        historicalNote:
          'Gödel and Einstein were close friends and frequent interlocutors; this variant renders the same relationship conducted at a distance. Dialogue is dramatized.',
      },
      {
        id: 'npc-princeton',
        conditions: [
          { type: 'yearAtLeast', year: 1942 },
          { type: 'yearAtMost', year: 1952 },
          { type: 'otherCharacterIsNpc', characterId: 'einstein' },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'princeton' },
        ],
        title: 'The Only Man Here Who Argues Properly',
        locationLabel: 'Princeton',
        yearLabel: '1942–1950',
        image: {
          setting: 'an institute corridor at four in the afternoon with two coats being taken from hooks',
          year: 1946,
          characters: ['godel', 'einstein'],
          mood: 'habitual, fond, contrary',
          details: ['two coats on hooks', 'a corridor of closed doors', 'a blackboard glimpsed through a doorway', 'low afternoon light', 'a walking stick'],
          alt: 'Two coats on hooks in an institute corridor in low afternoon light.',
        },
        pages: [
          {
            id: 'four',
            narration:
              'At four o’clock the older man appears in the doorway without knocking, which nobody else in the building would dare, and they walk. It becomes the fixed point of the day: the one hour in which he is not checking anything.',
          },
          {
            id: 'said',
            narration:
              'The arguments are enormous and entirely unresolvable and neither of them ever concedes an inch.',
            speaker: 'EINSTEIN',
            dialogue: 'You want the world to be a proof. I want it to be a law. — Very well, tell me this: what would your kind of certainty even look like, out here, in the weather?',
          },
          {
            id: 'after',
            narration:
              'He does not have an answer that afternoon and he says so, which he has never done in a seminar in his life. It is not a defeat. It is that there is finally one person he can be unfinished in front of.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 3, respect: 3, flag: 'the-walks' },
          { type: 'flag', flag: 'godel.walksWithEinstein', value: true },
          { type: 'flag', flag: 'godel.einsteinFriendship', value: true },
          { type: 'resources', effects: { wellbeing: 2, network: 1 } },
        ],
        historicalNote:
          'The daily walks between Gödel and Einstein at the Institute for Advanced Study, and the philosophical disagreements they contained, are documented. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-personal-interlocutor',
    characterId: 'godel',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 77 },
    once: true,
    variants: [
      {
        id: 'alone',
        conditions: [
          { type: 'yearAtLeast', year: 1941 },
          { type: 'yearAtMost', year: 1945 },
          { type: 'projectNotCompleted', projectId: 'godel-einstein-conversations' },
        ],
        title: 'The Chair Across the Table Stays Empty',
        yearLabel: '1941',
        image: {
          setting: 'a table set for one with a second chair pushed in, a journal folded open beside the plate',
          year: 1941,
          characters: ['godel'],
          mood: 'self-contained, lonely, functioning',
          details: ['a table set for one', 'a second chair pushed in', 'a journal folded open', 'a pot of tea', 'net curtains'],
          alt: 'A table set for one with a second chair pushed in and a journal folded open beside the plate.',
        },
        pages: [
          {
            id: 'alone',
            narration:
              'He works and he eats and he walks the same route at the same hour, and there is nobody on the other side of the argument. The people around him are polite and busy and slightly afraid of him, and none of them will simply say no, that is wrong, at the top of their voice.',
          },
          {
            id: 'said',
            narration:
              'Adele, clearing the second place that has not been used in a month, delivers her assessment.',
            speaker: 'ADELE',
            dialogue: 'You need one person who is not frightened of you. One, Kurtele. Not a seminar. One.',
          },
          {
            id: 'after',
            narration:
              'She is right, and he knows the shape of the deficiency exactly, the way he knows the shape of a missing step in a proof. Knowing the shape of a gap has never once filled it. He goes back to the desk, where at least the objections are his own, and leaves the second place laid.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.walksAlone', value: true },
          { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
        ],
        historicalNote:
          'Gödel had very few close intellectual companions; the friendship with Einstein was exceptional in his life. This scene describes the years before it. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-project-conversations',
    characterId: 'godel',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'godel-einstein-conversations', priority: 78 },
    once: true,
    variants: [
      {
        id: 'walked',
        conditions: [
          { type: 'narrativeFlag', flag: 'godel.walksInstead' },
          { type: 'locationIs', locationId: 'princeton' },
        ],
        title: 'Fifteen Years of the Same Road',
        locationLabel: 'Princeton',
        yearLabel: '1942–1955',
        image: {
          setting: 'the same tree-lined road in four seasons, bare branches and full canopy in one frame',
          year: 1950,
          characters: ['godel', 'einstein'],
          mood: 'accumulated, easy, finite',
          details: ['bare branches and full canopy', 'a worn footpath at the verge', 'two overcoats', 'a low sun', 'a gate left open'],
          alt: 'A worn footpath at the verge of a tree-lined road under both bare and leafed branches.',
        },
        pages: [
          {
            id: 'years',
            narration:
              'It runs for fifteen years and it is never once arranged in advance. Four o’clock, the doorway, the same road. In that time they settle nothing at all, which both of them regard as the mark of a serious conversation.',
          },
          {
            id: 'said',
            narration:
              'What he gets from it is not mathematics. It is a man who treats his objections as interesting rather than alarming, and who says the unsayable thing out loud at a hedge on a Tuesday.',
            speaker: 'EINSTEIN',
            dialogue: 'We are two men who each believe the other is wrong about the most important thing there is, and would rather walk with each other than with anyone who agrees. That is not nothing, my friend. At our age that is almost everything.',
          },
          {
            id: 'after',
            narration:
              'He said yes to the first walk when he could easily have said no and gone back to the desk. Of all the decisions he has checked and re-checked in his life, it is the one he never once re-examines.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.friendship', value: true },
          { type: 'flag', flag: 'godel.walksWithEinstein', value: true },
          { type: 'flag', flag: 'godel.einsteinFriendship', value: true },
          { type: 'resources', effects: { wellbeing: 2, standing: 1 } },
        ],
        historicalNote:
          'Gödel and Einstein walked together at Princeton from the early 1940s until Einstein’s death in 1955. Dialogue is dramatized.',
      },
      {
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'The Conversation That Got Past the Desk',
        locationLabel: 'Princeton',
        yearLabel: '1942–1955',
        image: {
          setting: 'an office doorway seen from the desk, a coat sleeve and a walking stick just visible',
          year: 1950,
          characters: ['godel', 'einstein'],
          mood: 'interrupted, reluctantly glad',
          details: ['a doorway seen from a desk', 'a coat sleeve', 'a walking stick', 'a page half written', 'four o’clock light'],
          alt: 'A doorway seen from a desk with a coat sleeve and a walking stick just visible.',
        },
        pages: [
          {
            id: 'interrupt',
            narration:
              'He had meant to keep to the desk. The desk is the reliable room and he crossed most of the earth to sit at it. But at four o’clock the doorway is occupied by a man who has never in his life waited to be invited, and after some weeks it stops being an interruption and becomes the hour the rest of the day is arranged around.',
          },
          {
            id: 'said',
            narration:
              'They disagree about nearly everything and go on doing it for years, at a walking pace, in a language nobody else on the street speaks.',
            speaker: 'EINSTEIN',
            dialogue: 'You will not persuade me and I will not persuade you, and we shall do this again tomorrow at four. — Do not look so worried, Gödel. That is what a friendship between serious people is.',
          },
          {
            id: 'after',
            narration:
              'It is the only relationship of his adult life that is not conducted on paper and not checked afterwards. He would not have predicted it and could not have proved it was coming, and it turns out to be the thing that holds him together for fifteen years.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.friendship', value: true },
          { type: 'flag', flag: 'godel.walksWithEinstein', value: true },
          { type: 'flag', flag: 'godel.einsteinFriendship', value: true },
          { type: 'resources', effects: { wellbeing: 2, standing: 1 } },
        ],
        historicalNote:
          'The friendship between Gödel and Einstein at the Institute for Advanced Study, sustained by daily walks, is documented. Dialogue is dramatized.',
      },
      {
        id: 'by-post',
        title: 'A Friendship Conducted Across an Ocean',
        yearLabel: '1942–1955',
        image: {
          setting: 'a desk with a long letter in a sloping hand and a stack of previous ones tied together',
          year: 1950,
          characters: ['godel'],
          mood: 'sustained, distant, warm',
          details: ['a long letter in a sloping hand', 'a tied stack of earlier letters', 'a pen uncapped', 'a world map folded small', 'a lamp at a fixed hour'],
          alt: 'A long letter in a sloping hand beside a tied stack of earlier letters on a desk.',
        },
        pages: [
          {
            id: 'answer',
            narration:
              'The answer, when it comes, comes by post. Six pages at a time, from a man he has met perhaps twice, in the language they were both raised in and neither of them speaks any more in the street.',
          },
          {
            id: 'said',
            narration:
              'They disagree about almost everything — what a law of nature is, whether the world is at bottom lawful, God — and the disagreement runs for thirteen years without either of them conceding a paragraph.',
            speaker: 'EINSTEIN',
            dialogue: 'You will not persuade me and I will not persuade you, and I shall write again on Thursday. — Do not look so worried across all that water, Gödel. That is what a friendship between serious people is.',
          },
          {
            id: 'after',
            narration:
              'He answers every letter within two days and keeps every one he is sent, in order, in a card box. It is the only relationship of his adult life in which he is allowed to be unfinished, and it holds him together for as long as it lasts.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.friendship', value: true },
          { type: 'flag', flag: 'godel.einsteinFriendship', value: true },
          { type: 'resources', effects: { wellbeing: 2, network: 1 } },
        ],
        historicalNote:
          'Gödel and Einstein were close friends and constant interlocutors at Princeton. This variant renders the same intellectual friendship sustained at a distance. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-citizenship',
    characterId: 'godel',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 95 },
    once: true,
    replacesContextCardId: 'godel-card-1948-citizenship',
    variants: [
      {
        id: 'princeton',
        conditions: [
          { type: 'yearAtLeast', year: 1947 },
          { type: 'yearAtMost', year: 1953 },
          { type: 'locationIs', locationId: 'princeton' },
        ],
        title: 'A Logical Flaw in the Constitution',
        locationLabel: 'Princeton',
        yearLabel: '1948',
        image: {
          setting: 'a car parked outside a county courthouse with two men waiting and a folder on the back seat',
          year: 1948,
          characters: ['godel'],
          mood: 'comic, affectionate, one degree from disaster',
          details: ['a parked car with the door open', 'a courthouse portico', 'a folder of annotated pages', 'two hats on the rear shelf', 'winter sun'],
          alt: 'A car parked outside a courthouse portico with a folder of annotated pages on the seat.',
        },
        pages: [
          {
            id: 'study',
            narration:
              'He prepares for the citizenship examination the way he prepares for everything: he reads the whole constitution properly, from the beginning, with a pencil. Nobody has ever asked an applicant to do this. It takes him three weeks and by the end of it he is extremely agitated.',
          },
          {
            id: 'flaw',
            narration:
              'Because there is, he says, an inconsistency. A sequence of entirely lawful steps, each one permitted by the document itself, at the end of which the republic could be turned into precisely the sort of thing he left Europe to get away from. He has written it out. He has numbered the steps.',
          },
          {
            id: 'said',
            narration:
              'His two friends collect him in the car and spend the whole drive doing what neither has ever had to do before: keeping him off a subject.',
            speaker: 'MORGENSTERN',
            dialogue: 'Kurt. The judge will ask you about the branches of government and you will answer him about the branches of government. You will not, under any circumstances, offer to improve the document.',
          },
          {
            id: 'hearing',
            narration:
              'In the room the judge is friendly, and makes conversation, and asks — as an idle courtesy — whether such a thing as happened in Germany could ever happen here. There is a small silence in which two men on the bench stop breathing.',
            choices: [
              {
                id: 'raise',
                label: 'Tell him. He asked, and the answer is yes, and here is why',
                effects: [
                  { type: 'flag', flag: 'godel.raisedTheFlaw', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, standing: 1 } },
                ],
              },
              {
                id: 'hold',
                label: 'Let his friends steer it away, and say nothing',
                effects: [
                  { type: 'flag', flag: 'godel.heldItBack', value: true },
                  { type: 'resources', effects: { network: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1948-citizenship' },
          { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 1, flag: 'the-hearing' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Preparing for his United States citizenship examination, Gödel became convinced he had found a logical route by which the constitution could permit a dictatorship. Einstein and the economist Oskar Morgenstern accompanied him to the hearing, partly to keep him from raising it; accounts of what was said in the room differ. Dialogue is dramatized.',
      },
      {
        id: 'in-america',
        conditions: [
          { type: 'yearAtLeast', year: 1947 },
          { type: 'yearAtMost', year: 1953 },
          { type: 'visitedLocation', locationId: 'princeton' },
        ],
        title: 'Three Weeks with a Pencil and a Constitution',
        yearLabel: '1948',
        image: {
          setting: 'a hotel desk far from home with an annotated pamphlet of a constitution and a numbered list',
          year: 1948,
          characters: ['godel'],
          mood: 'obsessive, indignant, funny without meaning to be',
          details: ['an annotated pamphlet', 'a numbered list in a small hand', 'a pencil sharpened to a stub', 'a train ticket used as a bookmark', 'a lamp on in daylight'],
          alt: 'An annotated pamphlet of a constitution beside a numbered list written in a small hand.',
        },
        pages: [
          {
            id: 'study',
            narration:
              'The examination is a formality and everyone tells him so, which is exactly why he reads the entire constitution from the first line with a pencil. Three weeks. By the end he is not calm.',
          },
          {
            id: 'flaw',
            narration:
              'There is an inconsistency in it. A sequence of steps, each one lawful, each one permitted by the document itself, arriving at the end at precisely the arrangement he crossed the world to get away from. He numbers the steps. There are not many of them.',
          },
          {
            id: 'said',
            narration:
              'The letter from his friends, when he writes to tell them, is by return and unusually emphatic.',
            speaker: 'MORGENSTERN',
            dialogue: 'They will ask you how many branches of government there are. Answer that question. Answer only that question. I beg you not to offer to improve the document.',
          },
          {
            id: 'hearing',
            narration:
              'And at the hearing the official, making pleasant conversation, asks whether what happened in Germany could ever happen here. The pencilled list is folded in his inside pocket and it is not a long walk from there to his hand.',
            choices: [
              {
                id: 'raise',
                label: 'Tell him. He asked, and the answer is yes, and here is why',
                effects: [
                  { type: 'flag', flag: 'godel.raisedTheFlaw', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, standing: 1 } },
                ],
              },
              {
                id: 'hold',
                label: 'Leave it folded, and answer the question he was asked',
                effects: [
                  { type: 'flag', flag: 'godel.heldItBack', value: true },
                  { type: 'resources', effects: { network: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1948-citizenship' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Gödel’s discovery of what he considered a logical inconsistency in the United States constitution while preparing for his citizenship examination is documented, as is his friends’ anxiety that he would raise it at the hearing. Dialogue is dramatized.',
      },
      {
        id: 'never-went',
        conditions: [
          { type: 'yearAtLeast', year: 1947 },
          { type: 'yearAtMost', year: 1953 },
        ],
        title: 'Reading Another Country’s Rules for Pleasure',
        yearLabel: '1948',
        image: {
          setting: 'a desk with a foreign constitution in translation, heavily annotated, and no one to show it to',
          year: 1948,
          characters: ['godel'],
          mood: 'private, indignant, unheard',
          details: ['a translated constitution', 'annotations in a tiny hand', 'a numbered list', 'a cold cup', 'a drawn curtain'],
          alt: 'A translated constitution annotated in a tiny hand beside a short numbered list.',
        },
        pages: [
          {
            id: 'read',
            narration:
              'He reads it for pleasure, the way other men read timetables: a foreign republic’s constitution, in translation, with a pencil. It is a well-made document. It is, he thinks, the best-made document of its kind.',
          },
          {
            id: 'flaw',
            narration:
              'Which is why the flaw matters. A sequence of steps, each one permitted by the text, arriving lawfully at the arrangement the whole document was written to prevent. He numbers the steps. He checks them for a week and cannot break the chain.',
          },
          {
            id: 'said',
            narration:
              'He tries it out on Adele across the table, which is the entire audience available to him.',
            speaker: 'ADELE',
            dialogue: 'And who would you tell, Kurtele? It is not our country. There is no man whose job it is to receive this.',
          },
          {
            id: 'hearing',
            narration:
              'That is the difficulty exactly. He has found something true and there is no room in the world that is obliged to hear it. There is a drawer, and there is a letter he could write to a professor across an ocean who might read it or might not.',
            choices: [
              {
                id: 'raise',
                label: 'Write it out and send it anyway',
                effects: [
                  { type: 'flag', flag: 'godel.raisedTheFlaw', value: true },
                  { type: 'theme', theme: 'certaintyVsAuthority', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, network: 1 } },
                ],
              },
              {
                id: 'hold',
                label: 'File it with the other things nobody asked for',
                effects: [
                  { type: 'flag', flag: 'godel.heldItBack', value: true },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'godel-card-1948-citizenship' },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'Gödel found what he took to be a logical inconsistency in the United States constitution while preparing for citizenship in the late 1940s. This variant imagines the same discovery made without emigration. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-hearing-aftermath',
    characterId: 'godel',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 88 },
    once: true,
    variants: [
      {
        id: 'told-court',
        conditions: [
          { type: 'yearAtLeast', year: 1949 },
          { type: 'yearAtMost', year: 1958 },
          { type: 'choiceWas', choiceKey: 'godel-citizenship:hearing', choiceId: 'raise' },
          { type: 'visitedLocation', locationId: 'princeton' },
        ],
        title: 'Two Sentences In',
        yearLabel: '1948',
        image: {
          setting: 'a courthouse corridor after a hearing, three men walking out and one certificate in a folder',
          year: 1948,
          characters: ['godel'],
          mood: 'relieved, absurd, affectionate',
          details: ['a certificate in a card folder', 'a corridor of dark wood', 'three hats being put back on', 'a swing door', 'winter light on a step'],
          alt: 'A certificate in a card folder carried out along a dark wooden courthouse corridor.',
        },
        pages: [
          {
            id: 'said-it',
            narration:
              'He begins at the beginning, because there is no other place to begin: the first step is lawful, and the second follows from it, and by the third the judge has stopped smiling and is looking hard at the two men on the bench.',
            speaker: 'THE JUDGE',
            dialogue: 'Mr Gödel. I am going to rule that you have answered my question, and that we shall not be hearing the remainder of it today.',
          },
          {
            id: 'out',
            narration:
              'And that is the whole of it. He is a citizen by four o’clock. Nobody takes the folded list from his pocket and nobody asks for it, and the republic goes on containing, so far as he can establish, exactly the flaw he found in it.',
          },
          {
            id: 'car',
            narration:
              'In the car afterwards neither friend can decide whether to be furious with him or to laugh, and settles, in the end, on both. He looks out of the window at the elms and thinks that he was asked a plain question and gave the true answer, and that he would do it again, and that this is apparently not how the thing is done.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.citizen', value: true },
          { type: 'resources', effects: { standing: 1, network: 1 } },
        ],
        historicalNote:
          'Gödel became a United States citizen after the 1948 hearing; accounts agree that his friends feared he would raise his constitutional objection and differ on how far he got. Dialogue is dramatized.',
      },
      {
        id: 'held-court',
        conditions: [
          { type: 'yearAtLeast', year: 1949 },
          { type: 'yearAtMost', year: 1958 },
          { type: 'choiceWas', choiceKey: 'godel-citizenship:hearing', choiceId: 'hold' },
          { type: 'visitedLocation', locationId: 'princeton' },
        ],
        title: 'The List Stays in the Pocket',
        yearLabel: '1948',
        image: {
          setting: 'a folded pencilled list on a hall table beside a new certificate still in its envelope',
          year: 1948,
          characters: ['godel'],
          mood: 'wry, unsatisfied, kept',
          details: ['a folded pencilled list', 'a certificate in its envelope', 'a hall table', 'a hat set down', 'evening light through a fanlight'],
          alt: 'A folded pencilled list lying beside a certificate still in its envelope on a hall table.',
        },
        pages: [
          {
            id: 'steered',
            narration:
              'Somebody says something about the weather and somebody else agrees enthusiastically, and the moment is taken away from him with the smoothness of two men who have been rehearsing it in a car for forty minutes. He answers the questions he is asked. He is a citizen by four o’clock.',
          },
          {
            id: 'said',
            narration:
              'On the step outside, one of them finally exhales, and makes the mistake of congratulating himself out loud.',
            speaker: 'MORGENSTERN',
            dialogue: 'You see? Nothing happened. That is what a good day looks like, Kurt — a day on which nothing whatever happens.',
          },
          {
            id: 'kept',
            narration:
              'The list stays in his inside pocket and then in the drawer with the other things nobody asked for. He was asked a plain question and he did not give the true answer, and thirty years later he will still occasionally take the page out and check the steps, and they will still hold.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.citizen', value: true },
          { type: 'resources', effects: { network: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Gödel was granted citizenship after the 1948 hearing, at which Einstein and Morgenstern were present partly to keep his constitutional objection out of the room. Dialogue is dramatized.',
      },
      {
        id: 'told-letter',
        conditions: [
          { type: 'yearAtLeast', year: 1949 },
          { type: 'yearAtMost', year: 1958 },
          { type: 'choiceWas', choiceKey: 'godel-citizenship:hearing', choiceId: 'raise' },
        ],
        title: 'An Answer to a Letter Nobody Had to Send',
        yearLabel: '1949',
        image: {
          setting: 'a short typed reply on foreign letterhead lying on top of a much longer handwritten original',
          year: 1949,
          characters: ['godel'],
          mood: 'dry, unsurprised, faintly pleased',
          details: ['a short typed reply', 'a long handwritten original beneath it', 'a foreign letterhead', 'a paper knife', 'a lamp with a green shade'],
          alt: 'A short typed reply resting on top of a much longer handwritten letter.',
        },
        pages: [
          {
            id: 'sent',
            narration:
              'Eleven pages go into the envelope, numbered, with the steps set out so that a lawyer could follow them and a schoolboy could check them, and the envelope goes across the ocean to a professor he has never met.',
          },
          {
            id: 'said',
            narration:
              'The reply, four months later, is three paragraphs long and entirely courteous, and he reads it twice before he understands that it is a way of saying no.',
            speaker: 'A CORRESPONDENT',
            dialogue: 'A most ingenious construction, and I am grateful for it. But a constitution is not a formal system, Herr Professor, and nobody here would thank us for treating it as one.',
          },
          {
            id: 'after',
            narration:
              'He puts both letters in the drawer together, the long one and the short one. It is not a formal system. He knows it is not a formal system. It is nevertheless a set of rules, and rules permit what they permit, and one day somebody will follow the steps he numbered without ever having read them.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.saidItAnyway', value: true },
          { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Gödel’s constitutional objection is documented from the citizenship episode; this variant imagines it pressed from abroad, where he had no standing to raise it. Dialogue is dramatized.',
      },
      {
        id: 'held-letter',
        conditions: [
          { type: 'yearAtLeast', year: 1949 },
          { type: 'yearAtMost', year: 1958 },
          { type: 'choiceWas', choiceKey: 'godel-citizenship:hearing', choiceId: 'hold' },
        ],
        title: 'Filed with the Other Things Nobody Asked For',
        yearLabel: '1949',
        image: {
          setting: 'a drawer of numbered pages tied in bundles, one bundle newer than the rest',
          year: 1949,
          characters: ['godel'],
          mood: 'quiet, unspent, exact',
          details: ['bundles of numbered pages', 'one newer bundle on top', 'a tape and a knot', 'a drawer half open', 'a shuttered window'],
          alt: 'Bundles of numbered pages in a drawer, one newer bundle resting on top of the rest.',
        },
        pages: [
          {
            id: 'filed',
            narration:
              'He ties the pages with tape and puts them in the drawer with the other things nobody asked for: a note on the design of a courthouse he has never seen, a correction to a translation, four pages on why a certain census question cannot be answered truthfully.',
          },
          {
            id: 'said',
            narration:
              'Adele, who has heard the whole argument twice at the table, has one question about it and asks it while drying a plate.',
            speaker: 'ADELE',
            dialogue: 'And if you are right, Kurtele? In forty years, when nobody has the page — does being right in a drawer help anybody at all?',
          },
          {
            id: 'after',
            narration:
              'He does not have an answer for her that evening. He has one years later, and it is not comforting: the steps hold whether or not the page is read, because that is what steps do, and the drawer changes nothing about the building.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.filedItAway', value: true },
          { type: 'resources', effects: { wellbeing: -1, standing: 1 } },
        ],
        historicalNote:
          'Gödel kept extensive unpublished notes on questions outside mathematics, including the constitutional objection he raised while seeking citizenship. This variant imagines it never sent. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-project-rotating',
    characterId: 'godel',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'godel-rotating-universe', priority: 80 },
    once: true,
    variants: [
      {
        id: 'came-for-physics',
        conditions: [
          { type: 'narrativeFlag', flag: 'godel.cameForPhysics' },
          { type: 'narrativeFlag', flag: 'godel.walksWithEinstein' },
        ],
        title: 'The Subject He Came For, Twenty-Five Years Late',
        image: {
          setting: 'a desk with a page of field equations and a birthday volume in proof beside it',
          year: 1949,
          characters: ['godel'],
          mood: 'delighted, mischievous, vertiginous',
          details: ['a page of field equations', 'a bound volume in proof', 'a compass and a drawn circle', 'a birthday card unwritten', 'a lamp at an odd hour'],
          alt: 'A page of field equations beside a bound volume in proof and a compass with a drawn circle.',
        },
        pages: [
          {
            id: 'return',
            narration:
              'He went to the city at eighteen to read physics because physics was where the world was kept, and then spent a quarter of a century inside arithmetic instead. Now, for an old man’s seventieth birthday, he goes back to it — and does not write an appreciation. He writes a universe.',
          },
          {
            id: 'rotating',
            narration:
              'A universe that turns. Take the field equations at their word, set the whole of matter rotating, and they permit a solution in which a path may be drawn that curves round and returns to its own past. Not a paradox smuggled in from outside. A solution. Allowed by the equations, in their own language.',
          },
          {
            id: 'said',
            narration:
              'He hands it over at four o’clock at the usual hedge, on paper, without ceremony.',
            speaker: 'EINSTEIN',
            dialogue: 'You have given me, for my birthday, a proof that my own theory permits a man to visit his own past. — Gödel. Gödel. This is either the finest present I have ever had or the worst.',
          },
          {
            id: 'point',
            narration:
              'The point is not the journey; nobody could make it and he says so. The point is the same one he made at twenty-five, in another language. A system of rules can permit something its author never intended and would deny if asked, and it will permit it whether or not anyone approves.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.rotating', value: true },
          { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 2 },
          { type: 'resources', effects: { standing: 2, wellbeing: 1 } },
        ],
        historicalNote:
          'In 1949 Gödel found exact solutions of Einstein’s field equations describing a rotating universe containing closed timelike curves, and contributed them to the volume marking Einstein’s seventieth birthday. Dialogue is dramatized.',
      },
      {
        id: 'came-for-physics-post',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.cameForPhysics' }],
        title: 'The Subject He Came For, Sent By Post',
        image: {
          setting: 'a wrapped package of manuscript addressed abroad, a compass-drawn closed curve on the sheet beneath',
          year: 1949,
          characters: ['godel'],
          mood: 'delighted, mischievous, distant',
          details: ['a wrapped package addressed abroad', 'a compass-drawn closed curve', 'field equations in a small hand', 'string and sealing wax', 'a lamp at an odd hour'],
          alt: 'A wrapped package of manuscript addressed abroad, a compass-drawn closed curve on the sheet beneath it.',
        },
        pages: [
          {
            id: 'return',
            narration:
              'He went to the city at eighteen to read physics because physics was where the world was kept, and then spent a quarter of a century inside arithmetic instead. Now, for an old man’s seventieth birthday, he goes back to it — and does not write an appreciation. He writes a universe.',
          },
          {
            id: 'rotating',
            narration:
              'A universe that turns. Take the field equations at their word, set the whole of matter rotating, and they permit a solution in which a path may be drawn that curves round and returns to its own past. Not a paradox smuggled in from outside. A solution. Allowed by the equations, in their own language.',
          },
          {
            id: 'said',
            narration:
              'It goes into a package with string and sealing wax and crosses the ocean, and the reply comes back by return, in a hand he could pick out of a thousand.',
            speaker: 'EINSTEIN',
            dialogue: 'You have sent me, for my birthday, a proof that my own theory permits a man to visit his own past. — Gödel. Gödel. This is either the finest present I have ever had or the worst.',
          },
          {
            id: 'point',
            narration:
              'The point is not the journey; nobody could make it and he says so on the first page. The point is the same one he made at twenty-five, in another language. A system of rules can permit something its author never intended and would deny if asked, and it will permit it whether or not anyone approves.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.rotating', value: true },
          { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 2 },
          { type: 'resources', effects: { standing: 2, wellbeing: 1 } },
        ],
        historicalNote:
          'In 1949 Gödel found exact solutions of Einstein’s field equations describing a rotating universe containing closed timelike curves, and contributed them to the volume marking Einstein’s seventieth birthday. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'A Universe That Turns',
        image: {
          setting: 'a blackboard with a single rotating solution sketched and a compass-drawn closed curve',
          year: 1949,
          characters: ['godel'],
          mood: 'strange, elegant, unsettling',
          details: ['a compass-drawn closed curve', 'field equations in chalk', 'a duster', 'an offprint stack', 'evening light through a tall window'],
          alt: 'A compass-drawn closed curve chalked beside field equations on a blackboard.',
        },
        pages: [
          {
            id: 'solution',
            narration:
              'The equations of gravity have been in the world for thirty-odd years and nobody has asked them this. Set the whole of matter turning. Solve. What comes out is a universe in which a path can be drawn that curves round and arrives back at its own past.',
          },
          {
            id: 'said',
            narration:
              'The obvious objection arrives before he has finished writing it up, and he has the answer ready, because it is the answer he has been giving since he was twenty-five.',
            speaker: 'GÖDEL',
            dialogue: 'Of course no one could travel it. That is not the argument. The argument is that the equations permit it — and a system permits what it permits, whatever its author intended.',
          },
          {
            id: 'point',
            narration:
              'It is the incompleteness theorem again, wearing different clothes: write down rules precise enough to be useful and they will contain consequences you did not put there and cannot get out. He has now shown it twice, in two subjects, and he does not expect to be believed any faster the second time.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.rotating', value: true },
          { type: 'resources', effects: { standing: 2 } },
        ],
        historicalNote:
          'Gödel’s 1949 rotating-universe solutions of the field equations, which permit closed timelike curves, are documented, as is his philosophical use of them. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-einstein-death',
    characterId: 'godel',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 72 },
    once: true,
    variants: [
      {
        id: 'friend',
        conditions: [
          { type: 'yearAtLeast', year: 1955 },
          { type: 'yearAtMost', year: 1963 },
          { type: 'narrativeFlag', flag: 'godel.walksWithEinstein' },
          { type: 'locationIs', locationId: 'princeton' },
        ],
        title: 'Four O’Clock, and Nobody in the Doorway',
        locationLabel: 'Princeton',
        yearLabel: '1955',
        image: {
          setting: 'an office doorway at four in the afternoon, empty, with one coat on the hook',
          year: 1955,
          characters: ['godel'],
          mood: 'bereft, orderly, very quiet',
          details: ['one coat on a hook', 'an empty doorway', 'a clock at four', 'a page half written', 'April light on a floor'],
          alt: 'An empty office doorway in April light with a single coat left on the hook.',
        },
        pages: [
          {
            id: 'april',
            narration:
              'It happens in April, and it is not sudden, and he has known for a year that it was coming, and none of that is any use to him at four o’clock on the following Tuesday, when he puts his coat on out of habit and stands in the corridor for a while.',
          },
          {
            id: 'walk',
            narration:
              'He walks the road twice more, alone, at the same hour. The second time he turns back at the hedge where the arguments used to get loudest. After that he takes the other road, which is longer and has no associations, and he takes it for the rest of his life.',
          },
          {
            id: 'said',
            narration:
              'Adele asks him, weeks later, what it is he misses. He gives it more thought than the question expects, because he gives everything more thought than the question expects.',
            speaker: 'GÖDEL',
            dialogue: 'Being contradicted. There is nobody left who will tell me I am wrong and then walk another mile with me anyway.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.aloneNow', value: true },
          { type: 'resources', effects: { wellbeing: -2, network: -1 } },
        ],
        historicalNote:
          'Einstein died in April 1955. Gödel, who had walked with him almost daily for fifteen years, was deeply affected and became increasingly withdrawn afterwards. Dialogue is dramatized.',
      },
      {
        id: 'correspondent',
        conditions: [
          { type: 'yearAtLeast', year: 1955 },
          { type: 'yearAtMost', year: 1963 },
          { type: 'narrativeFlag', flag: 'godel.einsteinFriendship' },
        ],
        title: 'The Box of Letters Is Finished Now',
        yearLabel: '1955',
        image: {
          setting: 'a card box of letters with the lid off and one blank sheet on the blotter beside it',
          year: 1955,
          characters: ['godel'],
          mood: 'stopped, private, bereft',
          details: ['a card box of letters', 'the lid set aside', 'one blank sheet', 'a capped pen', 'April light on a wall'],
          alt: 'A card box of letters with the lid set aside beside one blank sheet of paper.',
        },
        pages: [
          {
            id: 'april',
            narration:
              'The news comes in April and he already knew it was coming, and the knowing turns out to be no help at all on the Thursday, which was the day he usually wrote.',
          },
          {
            id: 'box',
            narration:
              'The box holds every letter, in order, with the dates. He takes the lid off and puts it back on. Somewhere in the middle of it there is an argument about whether the world is at bottom lawful that has been running for eleven years and now stops in the middle of a sentence.',
          },
          {
            id: 'said',
            narration:
              'Adele asks him, weeks later, what it is that he misses about a man he met perhaps twice in his life.',
            speaker: 'GÖDEL',
            dialogue: 'Being contradicted. There is nobody left who will tell me I am wrong and then go on writing to me anyway.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.aloneNow', value: true },
          { type: 'resources', effects: { wellbeing: -2 } },
        ],
        historicalNote:
          'Einstein died in April 1955. This variant renders Gödel’s loss where the friendship was conducted by correspondence. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1955 },
          { type: 'yearAtMost', year: 1963 },
        ],
        title: 'The Decade in Which the Readers Die',
        yearLabel: '1955–1960',
        image: {
          setting: 'an address book open at a page with several entries ruled through',
          year: 1957,
          characters: ['godel'],
          mood: 'thinning, elegiac, contained',
          details: ['an address book with ruled-through entries', 'a fountain pen', 'a stack of journals unopened', 'a desk lamp', 'a shuttered window'],
          alt: 'An open address book with several entries neatly ruled through.',
        },
        pages: [
          {
            id: 'book',
            narration:
              'He keeps the address book properly, which means that when a man dies the entry is ruled through once, neatly, with the date in the margin. In the middle of the decade he goes several pages without finding a name he could still write to.',
          },
          {
            id: 'gone',
            narration:
              'The generation that could read his 1931 paper on the day it appeared is going, one entry at a time. What replaces them are people who learned the theorem as an established fact at nineteen and are not frightened by it, which is not the same as understanding it.',
          },
          {
            id: 'said',
            narration:
              'Adele finds him with the book open and the pen still capped in his hand.',
            speaker: 'ADELE',
            dialogue: 'Rule the line, Kurtele, and close the book. You cannot check on all of them from that chair.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.aloneNow', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'The generation of logicians and mathematicians who first received Gödel’s results largely died or dispersed by the late 1950s. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-encounter-cohen',
    characterId: 'godel',
    chapterId: 'legacy',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 64 },
    once: true,
    variants: [
      {
        id: 'other-half',
        conditions: [
          { type: 'yearAtLeast', year: 1964 },
          { type: 'yearAtMost', year: 1972 },
          { type: 'projectCompleted', projectId: 'godel-constructible-universe' },
        ],
        title: 'The Young Man Brings the Other Half',
        yearLabel: '1964',
        image: {
          setting: 'a window seat in a quiet house in autumn with a briefcase set down and two cups on a low table',
          year: 1964,
          characters: ['godel'],
          mood: 'generous, unexpected, complete',
          details: ['a briefcase set down by a chair', 'two cups on a low table', 'a manuscript in a folder', 'autumn leaves against a pane', 'a curtain held back'],
          alt: 'A briefcase set down beside two cups and a folder of manuscript at a window seat.',
        },
        pages: [
          {
            id: 'arrives',
            narration:
              'A young man from California comes to the house, having been told by everyone that the old man will not see anybody, and is let in, and puts a folder on the low table. Twenty-five years ago Gödel showed that Cantor’s hypothesis cannot be disproved. This is the other half: it cannot be proved either.',
          },
          {
            id: 'reads',
            narration:
              'He reads it at the window while the visitor sits there not drinking his tea. The method is entirely new and entirely correct and he can see, four pages in, that it will open a whole discipline. He is not a generous man about mathematics. He is about to be.',
          },
          {
            id: 'said',
            narration:
              'He closes the folder and squares it on the table and looks up.',
            speaker: 'GÖDEL',
            dialogue: 'You have finished it. Not extended it — finished it. The axioms do not decide the question and now we know why, and I have waited a quarter of a century to be told this by somebody.',
          },
          {
            id: 'after',
            narration:
              'He writes on the young man’s behalf, repeatedly, to people who listen to him. The question is closed in the only way it could be closed: not with an answer, but with a proof that the rules as they stand will never produce one. He finds, to his own surprise, that this pleases him enormously.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.continuumClosed', value: true },
          { type: 'resources', effects: { wellbeing: 1, standing: 1, network: 1 } },
        ],
        historicalNote:
          'In 1963 Paul Cohen proved the independence of the continuum hypothesis and of the axiom of choice, complementing Gödel’s consistency results; Gödel read the work, judged it correct, and supported Cohen energetically. Dialogue is dramatized.',
      },
      {
        id: 'logic-first',
        conditions: [
          { type: 'yearAtLeast', year: 1964 },
          { type: 'yearAtMost', year: 1972 },
          { type: 'narrativeFlag', flag: 'godel.wentStraightToLogic' },
        ],
        title: 'A Question He Never Got To',
        yearLabel: '1964',
        image: {
          setting: 'a journal issue left open at a paper by an unfamiliar name, a pencil across the page',
          year: 1964,
          characters: ['godel'],
          mood: 'admiring, wistful, unsentimental',
          details: ['a journal open at a paper', 'an unfamiliar author’s name', 'a pencil across the page', 'a cold cup', 'a lamp with a green shade'],
          alt: 'A journal left open at a paper with a pencil laid across the page.',
        },
        pages: [
          {
            id: 'issue',
            narration:
              'The issue arrives and the paper in it is by a name he does not know, from a university on the other coast, and it does in forty pages what he decided at twenty-three was the deepest open question in the subject: it shows that the axioms of set theory cannot settle Cantor’s hypothesis either way.',
          },
          {
            id: 'method',
            narration:
              'The method is new — genuinely new, not a rearrangement — and he reads it twice with a pencil looking for the place where it fails, which is his form of applause. It does not fail.',
          },
          {
            id: 'said',
            narration:
              'He writes to the young man the same week, four paragraphs, which for him is a torrent.',
            speaker: 'GÖDEL',
            dialogue: 'You have not answered the question. You have shown that it has no answer within the rules we have, which is the better result and the harder one. Do not let anyone tell you it is a negative achievement.',
          },
          {
            id: 'after',
            narration:
              'He went behind mathematics at nineteen to ask what a proof is, and here, at fifty-eight, is somebody else’s proof that a great question can be permanently out of reach of the rules. He recognises the shape of it the way you recognise your own handwriting on an envelope.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.continuumClosed', value: true },
          { type: 'resources', effects: { wellbeing: 1, network: 1 } },
        ],
        historicalNote:
          'Paul Cohen’s 1963 independence proof completed the answer to Cantor’s continuum problem begun by Gödel’s 1938–40 consistency results; Gödel corresponded with Cohen and praised the work. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1964 },
          { type: 'yearAtMost', year: 1972 },
        ],
        title: 'News of a Result He Did Not Make',
        yearLabel: '1964',
        image: {
          setting: 'a reading table with a foreign journal and a translated abstract clipped to it',
          year: 1964,
          characters: ['godel'],
          mood: 'attentive, distant, respectful',
          details: ['a foreign journal', 'a clipped abstract', 'reading glasses folded', 'a wireless off', 'net curtains and grey light'],
          alt: 'A foreign journal on a reading table with a translated abstract clipped to the cover.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The news comes in an abstract, three inches of small type: Cantor’s hypothesis cannot be settled by the axioms of set theory. Somebody young has proved the independence outright, with a method nobody has seen before.',
          },
          {
            id: 'reads',
            narration:
              'He obtains the paper and reads it twice with a pencil, looking for where it fails, which is the only form of praise he trusts. It does not fail. Sixty years of the deepest question in the subject, and the answer is that there is no answer inside the rules.',
          },
          {
            id: 'said',
            narration:
              'He says it out loud in the empty room, and hears in it the sentence he wrote at twenty-five, coming back around in a different subject and someone else’s hand.',
            speaker: 'GÖDEL',
            dialogue: 'Undecidable. Not unknown — undecidable. They will spend thirty years mistaking that for a defeat.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.continuumClosed', value: true },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'Cohen’s 1963 independence result is documented. This variant describes it reaching Gödel at a distance from the work.',
      },
    ],
  },

  {
    id: 'godel-personal-late-fear',
    characterId: 'godel',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 68 },
    once: true,
    variants: [
      {
        id: 'watched',
        conditions: [
          { type: 'yearAtLeast', year: 1966 },
          { type: 'yearAtMost', year: 1976 },
          { type: 'narrativeFlag', flag: 'godel.watchesHimself' },
        ],
        title: 'The Columns, Sixty Years On',
        yearLabel: '1970s',
        image: {
          setting: 'a kitchen table with a ruled notebook of daily figures and a thermometer in a glass',
          year: 1972,
          characters: ['godel'],
          mood: 'meticulous, closed-in, gentle',
          details: ['a ruled notebook of daily figures', 'a thermometer in a glass', 'a small covered dish', 'a folded newspaper unread', 'a drawn curtain in daylight'],
          alt: 'A ruled notebook of daily figures beside a thermometer standing in a glass on a kitchen table.',
        },
        pages: [
          {
            id: 'columns',
            narration:
              'The columns he started at twelve have never stopped: temperature, pulse, what was eaten and at what hour, in a hand that has not changed in sixty years. Nine notebooks now, on a shelf, in order.',
          },
          {
            id: 'system',
            narration:
              'The trouble is that the record only tells him what happened, never what may be relied upon. He knows this better than anyone alive. He proved it: no system can guarantee itself from the inside, and a man is inside the world, and there is no outside available to him.',
          },
          {
            id: 'said',
            narration:
              'So the circle of what he will accept without checking draws in, and in, until it contains one person. Adele lifts the cover off the dish and eats the first mouthful herself, as she has since a balcony in the hills forty years ago.',
            speaker: 'ADELE',
            dialogue: 'There. Now yours, Kurtele. — No, do not thank me. It is only how we eat in this house.',
          },
          {
            id: 'not-mad',
            narration:
              'He is not mad in the way people mean when they say it in the corridor. He is consistent. He has taken a true thing all the way to the end and gone on living there, and the tragedy is not that his reasoning failed him. It is that it did not.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.circleDrawnIn', value: true },
          { type: 'resources', effects: { health: -1, wellbeing: -1 } },
        ],
        historicalNote:
          'Gödel kept lifelong records of his health and diet, became increasingly convinced in his later years that his food might be contaminated, and would eat chiefly what Adele prepared and tasted. Dialogue is dramatized; the account is kept to what biographers report.',
      },
      {
        id: 'took-the-word',
        conditions: [
          { type: 'yearAtLeast', year: 1966 },
          { type: 'yearAtMost', year: 1976 },
          { type: 'narrativeFlag', flag: 'godel.tookTheWord' },
        ],
        title: 'A Man Who Once Took a Word for It',
        yearLabel: '1970s',
        image: {
          setting: 'a hallway with a telephone on a table and a list of names beside it, receiver in place',
          year: 1972,
          characters: ['godel'],
          mood: 'hesitant, courteous, closing in',
          details: ['a telephone with the receiver in place', 'a list of names', 'a chair drawn up to the table', 'a covered dish on a tray', 'daylight through a drawn blind'],
          alt: 'A telephone with the receiver in place beside a short handwritten list of names.',
        },
        pages: [
          {
            id: 'once',
            narration:
              'He took his brother’s word for it once, at eight years old, in a corridor that smelled of floor wax, and put the question away and was well for a while. He has been trying to make that trick work again ever since.',
          },
          {
            id: 'cannot',
            narration:
              'It will not work now. Taking a word for it requires a place to stand outside the thing you are checking, and he proved before he was thirty that no such place exists — not for arithmetic, and not, as far as he can see, for a man in a house in a country in a world.',
          },
          {
            id: 'said',
            narration:
              'The telephone rings and he lets Adele answer it, as he lets her open the post, and taste the food, and decide which of the doctors is telling the truth.',
            speaker: 'ADELE',
            dialogue: 'It is only the Institute, Kurtele. It is only Tuesday. I have taken the first bite and it is exactly what it was yesterday.',
          },
          {
            id: 'not-mad',
            narration:
              'He is not mad in the way people mean it in a corridor. He is consistent. He followed a true thing all the way down and then had to go on living at the bottom of it, and the difficulty was never that his reasoning failed.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.circleDrawnIn', value: true },
          { type: 'resources', effects: { health: -1, wellbeing: -1 } },
        ],
        historicalNote:
          'Gödel’s later years were marked by an increasing unwillingness to accept anything unverified, particularly regarding food and medicine, with Adele acting as his intermediary. Dialogue is dramatized and kept within what biographers report.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1966 },
          { type: 'yearAtMost', year: 1976 },
        ],
        title: 'What Cannot Be Checked from the Inside',
        yearLabel: '1970s',
        image: {
          setting: 'a warm room with the curtains drawn in the afternoon and one covered dish on a tray',
          year: 1972,
          characters: ['godel'],
          mood: 'enclosed, courteous, sad',
          details: ['curtains drawn in daylight', 'a covered dish on a tray', 'an overcoat worn indoors', 'a stack of unposted letters', 'a gas fire turned low'],
          alt: 'A tray with a single covered dish in a warm room with the curtains drawn in daylight.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The curtains are drawn at three in the afternoon and the fire is low and he wears his overcoat indoors from October. Visitors are received courteously, at the door, briefly. The letters he writes stack up unposted because a letter goes out into a system he cannot model.',
          },
          {
            id: 'system',
            narration:
              'What he cannot get past is a thing he proved when he was twenty-five and has never found a way around since. No system can certify itself from within. He is inside the world. There is no vantage point outside it from which a man may confirm that the ordinary arrangements are safe.',
          },
          {
            id: 'said',
            narration:
              'Adele takes the cover off, eats the first mouthful herself, and pushes the plate two inches towards him.',
            speaker: 'ADELE',
            dialogue: 'You have checked everything else in your life, Kurtele. Let me be the one thing you do not check.',
          },
          {
            id: 'not-mad',
            narration:
              'He is not mad in the way people mean it. He is consistent. He took a true thing all the way to the end and then had to live where it left him, and the hard part was never that his reasoning failed him. It is that it held.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.circleDrawnIn', value: true },
          { type: 'resources', effects: { health: -1, wellbeing: -1 } },
        ],
        historicalNote:
          'In his last years Gödel withdrew increasingly, relied on Adele to mediate between him and the world, and would eat only food she had prepared and tasted. The account here is kept to what biographers report; dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-professorship',
    characterId: 'godel',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 67 },
    once: true,
    variants: [
      {
        id: 'princeton',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1962 },
          { type: 'locationIs', locationId: 'princeton' },
        ],
        title: 'Thirteen Years a Member',
        locationLabel: 'Princeton',
        image: {
          setting: 'a letter of appointment on institute paper lying beside a nameplate still in its wrapping',
          year: 1953,
          characters: ['godel'],
          mood: 'belated, wry, unmoved',
          details: ['a letter on institute paper', 'a nameplate in tissue', 'a fountain pen uncapped', 'a window onto lawns', 'a chair pushed back'],
          alt: 'A letter of appointment beside a nameplate still wrapped in tissue.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The professorship arrives thirteen years after he did. Nobody explains the delay to him and he has worked out most of it himself: he is conscientious in a way that terrifies committees, and a man who reads the by-laws properly is not a restful colleague.',
          },
          {
            id: 'said',
            narration:
              'A colleague congratulates him in the corridor and makes the mistake of joking about how long it took.',
            speaker: 'A COLLEAGUE',
            dialogue: 'Thirteen years, Gödel! They were afraid you would read the statutes and find something in them.',
          },
          {
            id: 'after',
            narration:
              'He says that he did read them, in his second year, and that there are two things in them, and that he did not mention it at the time. The colleague laughs. He was not making a joke, but he lets it stand, which for him is an act of tact.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.professor', value: true },
          { type: 'resources', effects: { funds: 2, standing: 2 } },
        ],
        historicalNote:
          'Gödel was a member of the Institute for Advanced Study from 1940 but was not appointed a full professor until 1953; colleagues reportedly worried that his extreme conscientiousness would make administrative work impossible for him. Dialogue is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1953 },
          { type: 'yearAtMost', year: 1962 },
        ],
        title: 'The Title That Takes Thirteen Years',
        image: {
          setting: 'an official envelope opened on a desk with a short letter and a form to countersign',
          year: 1953,
          characters: ['godel'],
          mood: 'belated, dry, unsurprised',
          details: ['an official envelope', 'a short letter', 'a form to countersign', 'a pen in a stand', 'a shuttered window'],
          alt: 'An official envelope opened beside a short letter and a form awaiting a signature.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The appointment comes thirteen years late and in four lines. He has been doing the work throughout, unsalaried or nearly so, and the letter neither apologises nor explains.',
          },
          {
            id: 'said',
            narration:
              'Adele reads it and puts it down and asks the only question worth asking about it.',
            speaker: 'ADELE',
            dialogue: 'Thirteen years. And does it change one single thing you will do tomorrow morning, Kurtele?',
          },
          {
            id: 'after',
            narration:
              'No, is the honest answer. He will be at the desk at the same hour with the same question in front of him. But the money means she can stop counting, and he has watched her count for twenty years, and that is not nothing.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'godel.professor', value: true },
          { type: 'resources', effects: { funds: 2, standing: 1 } },
        ],
        historicalNote:
          'Gödel held no full professorship until 1953, thirteen years after joining the Institute for Advanced Study. Dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'godel-legacy-closing',
    characterId: 'godel',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'last-winter-quiet',
        conditions: [
          { type: 'visitedLocation', locationId: 'princeton' },
          { type: 'narrativeFlag', flag: 'godel.heldItBack' },
        ],
        title: 'The Winter Adele Is in Hospital',
        locationLabel: 'Princeton',
        yearLabel: '1977–1978',
        image: {
          setting: 'a chair drawn to a window in a quiet house, an overcoat over the back of it, January light',
          year: 1978,
          characters: ['godel'],
          mood: 'still, tender, closing',
          details: ['a chair drawn to a window', 'an overcoat over the chair back', 'a tray set down and not taken up', 'bare elms outside', 'a clock left unwound'],
          alt: 'A chair drawn up to a window with an overcoat over its back and bare elms outside.',
        },
        pages: [
          {
            id: 'alone',
            narration:
              'She is in hospital for six months and the house has nobody in it who tastes things first. He keeps the routine exactly — the walk, the columns, the letters he writes and does not post — and one by one the trays go back to the kitchen the way they came out.',
          },
          {
            id: 'quiet',
            narration:
              'He was asked once, in a warm room by a friendly official, whether the thing he feared could happen here, and he had the answer written out and numbered in his pocket, and he let it stay there. He has been letting things stay in his pocket ever since. In January he goes into the hospital in his overcoat, and sits in a chair by the window, and does not take the coat off.',
          },
        ],
        historicalNote:
          'Adele Gödel was hospitalized for several months in 1977; Gödel, who would eat almost nothing not prepared by her, declined severely and died in Princeton in January 1978. The account here keeps to what the record supports.',
      },
      {
        id: 'last-winter',
        conditions: [{ type: 'visitedLocation', locationId: 'princeton' }],
        title: 'The Winter Adele Is in Hospital',
        locationLabel: 'Princeton',
        yearLabel: '1977–1978',
        image: {
          setting: 'a kitchen with a covered tray untouched on the table and a coat still buttoned on its hook',
          year: 1978,
          characters: ['godel'],
          mood: 'quiet, thinning, dignified',
          details: ['a covered tray untouched', 'a buttoned overcoat on a hook', 'nine notebooks in order on a shelf', 'frost on a pane', 'an unwound clock'],
          alt: 'A covered tray left untouched on a kitchen table beside a row of notebooks on a shelf.',
        },
        pages: [
          {
            id: 'alone',
            narration:
              'She is in hospital for six months and there is nobody in the house to take the first mouthful. Friends come and are received at the door, courteously, briefly. The trays go out and come back and go out again.',
          },
          {
            id: 'january',
            narration:
              'He is very thin by Christmas and lighter by January and the arithmetic of it is not lost on him; he has been keeping the columns for sixty-six years. In the end he goes into the hospital in his overcoat and sits in a chair by the window and does not take it off, and it is quiet, and it is January, and the elms outside are bare.',
          },
        ],
        historicalNote:
          'Adele Gödel’s hospitalization in 1977 left Gödel unable to eat; he died in Princeton in January 1978. The description is kept to what biographers report, without further detail.',
      },
      {
        id: 'stayed-on',
        conditions: [
          {
            any: [
              { type: 'narrativeFlag', flag: 'godel.staysForNow' },
              { type: 'narrativeFlag', flag: 'godel.saysNothing' },
            ],
          },
        ],
        title: 'An Old Man Above a Courtyard',
        yearLabel: '1977–1978',
        image: {
          setting: 'a flat above a courtyard with shelves of shorthand notebooks and one chair at a window',
          year: 1978,
          characters: ['godel'],
          mood: 'small, exact, unwitnessed',
          details: ['shelves of shorthand notebooks', 'one chair at a window', 'a covered dish untouched', 'a courtyard below with a bare tree', 'a stopped clock'],
          alt: 'Shelves of notebooks and a single chair at a window overlooking a bare courtyard.',
        },
        pages: [
          {
            id: 'stayed',
            narration:
              'He stayed, in the end, because the numbers were the same here as anywhere and because deciding is a thing he has always been able to postpone. Forty years of the same rooms, the same route, the same nine o’clock. The shelves fill with notebooks in a shorthand that went out of use before he was born.',
          },
          {
            id: 'winter',
            narration:
              'In the last winter she is in hospital for months and there is nobody in the flat to take the first mouthful, and the trays go back to the kitchen as they came. He sits at the window in his overcoat with the columns finished for the day, and the courtyard tree is bare, and it is January, and it is quiet.',
          },
        ],
        historicalNote:
          'Gödel died in January 1978. This variant places the same last winter in the Europe he did not leave.',
      },
      {
        id: 'the-desk',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.keepsWorking' }],
        title: 'The Reliable Room, at the End',
        yearLabel: '1977–1978',
        image: {
          setting: 'a working desk with the last page dated and squared, a lamp burning at an odd hour',
          year: 1978,
          characters: ['godel'],
          mood: 'unbroken, solitary, exact',
          details: ['a dated last page squared to the blotter', 'a lamp at an odd hour', 'a shelf of notebooks in order', 'an overcoat worn indoors', 'a window with frost'],
          alt: 'A dated final page squared to a blotter beneath a lamp burning at an odd hour.',
        },
        pages: [
          {
            id: 'kept',
            narration:
              'He kept to the desk. It was the reliable room and he chose it, over and over, against every other room on offer, and it did not fail him: forty years of pages, every one dated, every one checked as an enemy would check it.',
          },
          {
            id: 'end',
            narration:
              'What the desk could not do was take the first mouthful for him. In the last winter the trays go back untouched and the columns run down the page as they have since he was twelve, and he sits at the window in his overcoat, and it is January, and it is very quiet, and the last page is squared to the edge of the blotter.',
          },
        ],
        historicalNote:
          'Gödel worked in near-total seclusion in his last years and died in January 1978. The description is kept to what the record supports.',
      },
      {
        id: 'default',
        title: 'January',
        yearLabel: '1977–1978',
        image: {
          setting: 'a bare room with an overcoat worn indoors and a window onto winter trees',
          year: 1978,
          characters: ['godel'],
          mood: 'hushed, spare, finished',
          details: ['an overcoat worn indoors', 'a window onto winter trees', 'a tray set down by a door', 'notebooks stacked in order', 'a clock left unwound'],
          alt: 'A window onto bare winter trees in a spare room, an overcoat worn indoors.',
        },
        pages: [
          {
            id: 'thin',
            narration:
              'The last winter is very quiet. The circle of what he will take on trust has drawn in over the years, patiently, one reasonable step at a time, until there is almost nothing standing inside it, and the woman who used to stand there is not well enough to.',
          },
          {
            id: 'end',
            narration:
              'He keeps the columns to the end, in the same hand as at twelve. Then a chair by a window in his overcoat, and the trees bare outside, and January, and the arithmetic finishes the way arithmetic does, without argument and without anybody having to agree to it.',
          },
        ],
        historicalNote:
          'Gödel died in January 1978. The account is deliberately restrained and keeps to what biographers report.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Epilogue
  // -------------------------------------------------------------------------
  {
    id: 'godel-epilogue',
    characterId: 'godel',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'spoke-out-walked',
        conditions: [
          { type: 'projectCompleted', projectId: 'godel-incompleteness' },
          { type: 'narrativeFlag', flag: 'godel.raisedTheFlaw' },
          { type: 'narrativeFlag', flag: 'godel.walksWithEinstein' },
        ],
        title: 'The Man Who Answered the Question He Was Asked',
        yearLabel: 'after',
        image: {
          setting: 'a modern lecture theatre with one line of symbols on a screen and a full room of young faces',
          year: 1990,
          characters: ['godel'],
          mood: 'continuing, undiminished, plain',
          details: ['one line of symbols on a screen', 'rows of young listeners', 'a lectern with a glass of water', 'notebooks open', 'high windows'],
          alt: 'A single line of symbols displayed above a lectern in a full modern lecture theatre.',
        },
        pages: [
          {
            id: 'habit',
            narration:
              'He never learned the trick of leaving a true thing unsaid because the room was not the right room. It cost him friendships, positions, a certain amount of peace, and it is the reason his name is attached to a limit rather than to a triumph.',
          },
          {
            id: 'taught',
            narration:
              'The limit is taught everywhere now, to nineteen-year-olds, in an hour, before lunch. Every machine anyone has ever built runs up against it. Every formal system anyone proposes is measured by it first and admired second.',
          },
          {
            id: 'voice',
            narration:
              'What he would say about it, if asked, he already said, at a hedge, on an ordinary afternoon, to the only man who ever argued with him properly.',
            speaker: 'GÖDEL',
            dialogue: 'I did not take anything away. The truths were always more than the proofs. I only wrote down which was which.',
          },
        ],
        historicalNote:
          'Gödel’s incompleteness theorems are foundational to modern logic and computer science. The closing line is dramatized, not a quotation.',
      },
      {
        id: 'spoke-out-post',
        conditions: [
          { type: 'projectCompleted', projectId: 'godel-incompleteness' },
          { type: 'narrativeFlag', flag: 'godel.raisedTheFlaw' },
          { type: 'narrativeFlag', flag: 'godel.einsteinFriendship' },
        ],
        title: 'The Man Who Answered the Question He Was Asked',
        yearLabel: 'after',
        image: {
          setting: 'a card box of letters on a shelf above a desk in a modern office, one line of symbols chalked behind it',
          year: 1990,
          characters: ['godel'],
          mood: 'continuing, undiminished, plain',
          details: ['a card box of letters', 'one line of symbols chalked on a board', 'a dated bundle of pages', 'an archive label', 'high windows'],
          alt: 'A card box of letters on a shelf beneath a single line of symbols chalked on a board.',
        },
        pages: [
          {
            id: 'habit',
            narration:
              'He never learned the trick of leaving a true thing unsaid because the room was not the right room. It cost him friendships, positions, a certain amount of peace, and it is the reason his name is attached to a limit rather than to a triumph.',
          },
          {
            id: 'taught',
            narration:
              'The limit is taught everywhere now, to nineteen-year-olds, in an hour, before lunch. Every machine anyone has ever built runs up against it. Every formal system anyone proposes is measured by it first and admired second.',
          },
          {
            id: 'voice',
            narration:
              'What he would say about it, if asked, he already wrote, on a Thursday, six pages at a time, to the only man who ever contradicted him.',
            speaker: 'GÖDEL',
            dialogue: 'I did not take anything away. The truths were always more than the proofs. I only wrote down which was which.',
          },
        ],
        historicalNote:
          'Gödel’s incompleteness theorems are foundational to modern logic and computer science. The closing line is dramatized, not a quotation.',
      },
      {
        id: 'spoke-out',
        conditions: [
          { type: 'projectCompleted', projectId: 'godel-incompleteness' },
          { type: 'narrativeFlag', flag: 'godel.raisedTheFlaw' },
        ],
        title: 'The Man Who Answered the Question He Was Asked',
        yearLabel: 'after',
        image: {
          setting: 'a modern lecture theatre with one line of symbols on a screen and a full room of young faces',
          year: 1990,
          characters: ['godel'],
          mood: 'continuing, undiminished, plain',
          details: ['one line of symbols on a screen', 'rows of young listeners', 'a lectern with a glass of water', 'notebooks open', 'high windows'],
          alt: 'A single line of symbols displayed above a lectern in a full modern lecture theatre.',
        },
        pages: [
          {
            id: 'habit',
            narration:
              'He never learned the trick of leaving a true thing unsaid because the room was not the right room. It cost him friendships, positions, a certain amount of peace, and it is the reason his name is attached to a limit rather than to a triumph.',
          },
          {
            id: 'taught',
            narration:
              'The limit is taught everywhere now, to nineteen-year-olds, in an hour, before lunch. Every machine anyone has ever built runs up against it. Every formal system anyone proposes is measured by it first and admired second.',
          },
          {
            id: 'voice',
            narration:
              'What he would say about it, if asked, he already wrote out, numbered, on a page that is still in the drawer where he left it.',
            speaker: 'GÖDEL',
            dialogue: 'I did not take anything away. The truths were always more than the proofs. I only wrote down which was which.',
          },
        ],
        historicalNote:
          'Gödel’s incompleteness theorems are foundational to modern logic and computer science. The closing line is dramatized, not a quotation.',
      },
      {
        id: 'complete',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'godel-completeness-theorem',
              'godel-incompleteness',
              'godel-limits-of-system',
              'godel-constructible-universe',
              'godel-einstein-conversations',
              'godel-rotating-universe',
            ],
            count: 4,
          },
        ],
        title: 'Numbers That Were There Before Anyone Counted',
        yearLabel: 'after',
        image: {
          setting: 'an archive table with nine shorthand notebooks opened by a reader with a magnifier',
          year: 1990,
          characters: ['godel'],
          mood: 'posthumous, patient, vindicated',
          details: ['shorthand notebooks under glass', 'a magnifier', 'archive gloves', 'a card index', 'daylight through a high window'],
          alt: 'Shorthand notebooks opened on an archive table beside a magnifier and archive gloves.',
        },
        pages: [
          {
            id: 'notebooks',
            narration:
              'It takes decades to read him. The notebooks are in a shorthand that died with the century he was born in, and scholars must first learn a dead script before they can find out what he thought. They find, when they get in, that he had gone further than anything he published.',
          },
          {
            id: 'reach',
            narration:
              'The theorems have gone everywhere in the meantime, without him: into logic, into philosophy, into the design of machines that could not exist while he lived and that run, all of them, up against the wall he measured at twenty-four.',
          },
          {
            id: 'voice',
            narration:
              'And the thing he was too careful to say in that Thursday room above the shop, when he was twenty-one and outnumbered, he says now, in his own hand, on a page nobody could read for forty years.',
            speaker: 'GÖDEL',
            dialogue: 'They are not marks that we agreed upon. They were there before anyone counted, and they will be there after, and a proof is only how a small creature reaches a little way towards them.',
          },
        ],
        historicalNote:
          'Gödel’s Nachlass, written largely in Gabelsberger shorthand, took decades to transcribe and revealed extensive unpublished philosophical work. His mathematical Platonism is documented in his own writings. The closing line is dramatized.',
      },
      {
        id: 'theorem',
        conditions: [{ type: 'projectCompleted', projectId: 'godel-incompleteness' }],
        title: 'One Sentence, and Everything After It',
        yearLabel: 'after',
        image: {
          setting: 'a library shelf where one thin offprint stands between two much thicker volumes',
          year: 1990,
          characters: ['godel'],
          mood: 'understated, permanent',
          details: ['a thin offprint between thick volumes', 'a shelf label', 'a reading lamp', 'a card pocket in a cover', 'dust in a beam of light'],
          alt: 'One thin offprint standing between two much thicker volumes on a library shelf.',
        },
        pages: [
          {
            id: 'thin',
            narration:
              'Forty pages, on cheap paper, published in a journal with a print run in the hundreds, and it ends a programme that the best mathematicians alive had given their working lives to. Nothing on the shelf beside it has done as much with as little.',
          },
          {
            id: 'after',
            narration:
              'Everything that comes after has to go round it. The machines, when they are built, inherit it directly: there are questions they cannot answer, not because the engineering is poor but because no engineering will ever be good enough. That is his sentence, in another material.',
          },
          {
            id: 'voice',
            narration:
              'He would object to being called a destroyer, if anyone put it to him, and he would object precisely, in the fewest possible words.',
            speaker: 'GÖDEL',
            dialogue: 'I did not take anything away. The truths were always more than the proofs. I only wrote down which was which.',
          },
        ],
        historicalNote:
          'The 1931 incompleteness paper is short, was published in a specialist journal, and became foundational to logic and to theoretical computer science. The closing line is dramatized.',
      },
      {
        id: 'platonist',
        conditions: [{ type: 'narrativeFlag', flag: 'godel.platonistInSecret' }],
        title: 'The Disagreement He Never Announced',
        yearLabel: 'after',
        image: {
          setting: 'a drawer of unpublished pages, tied in bundles, with dates in a corner of each',
          year: 1980,
          characters: ['godel'],
          mood: 'withheld, immense, quiet',
          details: ['bundles of pages tied with tape', 'dates in a corner', 'a drawer pulled fully out', 'a shorthand key half written', 'grey daylight'],
          alt: 'Bundles of dated, tied pages filling a fully opened drawer.',
        },
        pages: [
          {
            id: 'silent',
            narration:
              'He sat in that room for years among people who held that mathematics says nothing, and he did not argue, and he wrote instead. The disagreement went into the drawer, dated, tied in bundles, in a script nobody around him could read.',
          },
          {
            id: 'later',
            narration:
              'The bundles outlast the room, and the people in it, and the century. When they are finally opened, what is in them is not a system. It is one man, over fifty years, refusing steadily to accept that the most certain things we have are merely things we agreed to say.',
          },
          {
            id: 'voice',
            narration:
              'The position he would not state at twenty-one is written out plainly on the last pages, in his own hand, addressed to nobody.',
            speaker: 'GÖDEL',
            dialogue: 'They were there before anyone counted. I was never able to prove that, and I was never once in doubt about it, and I have come to think those two facts belong together.',
          },
        ],
        historicalNote:
          'Gödel rarely defended his Platonism publicly during the Vienna Circle years but set it out at length in later unpublished writings. The closing line is dramatized.',
      },
      {
        id: 'default',
        title: 'What He Leaves Behind Him',
        yearLabel: 'after',
        image: {
          setting: 'a closed writing drawer with a small brass key in the lock and dust along the desk edge',
          year: 1980,
          characters: ['godel'],
          mood: 'unspent, patient, unresolved',
          details: ['a small brass key in a lock', 'dust along a desk edge', 'a shorthand notebook just visible', 'a shuttered window', 'an unlit lamp'],
          alt: 'A small brass key left in the lock of a closed writing drawer beside a dusty desk edge.',
        },
        pages: [
          {
            id: 'drawer',
            narration:
              'What he leaves is a drawer. Notebooks in a shorthand that went out of use before he was born, dated, in order, complete, and unread by anyone for a very long time.',
          },
          {
            id: 'inside',
            narration:
              'Inside them is the same question he began asking in a corridor that smelled of floor wax: how does anyone come to be sure. He never once accepted an answer he had not followed to the end himself, and it cost him almost everything, and he would not have taken the other road if it had been offered twice.',
          },
          {
            id: 'voice',
            narration:
              'The last entry is dated, like all the others, and says what he has been saying since he was eight years old, in the fewest possible words.',
            speaker: 'GÖDEL',
            dialogue: 'Not proved. Still true. Both of those, at once, for ever — and everything I have done was only learning to hold them in one hand.',
          },
        ],
        historicalNote:
          'Gödel’s working notebooks, kept in Gabelsberger shorthand, remained largely unread for decades. This variant closes a life whose results stayed unpublished. The closing line is dramatized.',
      },
    ],
  },
];
