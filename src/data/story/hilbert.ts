import type { StoryScene } from '../../types/story';

const sourceIds = ['hilbert'];

/** Board context cards told in full by scenes in this file. */
export const HILBERT_REPLACED_CONTEXT_CARDS: string[] = [
  'hilbert-card-1888',
  'hilbert-card-1900-problems',
  'hilbert-card-1915-noether',
  'hilbert-card-1933-purge',
];

export const HILBERT_STORY_SCENES: StoryScene[] = [
  // -------------------------------------------------------------------------
  // Prologue
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-prologue-bridges',
    characterId: 'hilbert',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Seven Bridges',
        locationLabel: 'Königsberg',
        yearLabel: '1862',
        image: {
          setting: 'the river Pregel at Königsberg in winter, low bridges and brick warehouses',
          year: 1862,
          characters: ['hilbert'],
          mood: 'cold clarity, civic order',
          details: ['stone bridges', 'river barges under ice', 'gas lamps', 'cathedral spire', 'a judge’s narrow townhouse'],
          alt: 'A winter view of the river and bridges of nineteenth-century Königsberg.',
        },
        pages: [
          {
            id: 'city',
            narration:
              'Seven bridges cross the Pregel, and every child in Königsberg is told that no walk can cross them all exactly once. The impossibility is civic property here, like the cathedral clock and the customs house. It is a city that keeps its proofs where other cities keep their statues.',
          },
          {
            id: 'birth',
            narration:
              'In January a boy is born in a judge’s house near the river. His father believes a life is a set of rules correctly applied. The boy will spend sixty years asking what a rule actually is. Outside, the ice on the river cracks and resettles.',
          },
          {
            id: 'mother',
            speaker: 'HIS MOTHER',
            dialogue: 'Seven. Eleven. Thirteen. They do not arrive when you call them, David. That is the whole interest of them.',
            narration:
              'She keeps a star chart and a list of primes in the same drawer, and she is the only person in this house who speaks to the boy as though he might one day be worth telling something.',
          },
        ],
        historicalNote:
          'Hilbert was born in Königsberg in 1862 to a judge and a mother with recorded interests in astronomy and prime numbers. The Königsberg bridge problem is the famous eighteenth-century result associated with the city. All dialogue here is dramatized.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter I — Formation
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-formation-opening',
    characterId: 'hilbert',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Slow Boy',
        locationLabel: 'Königsberg',
        yearLabel: '1870s',
        image: {
          setting: 'a Prussian gymnasium classroom with high windows and slate boards',
          year: 1872,
          characters: ['hilbert'],
          mood: 'dutiful, restless',
          details: ['inkwells', 'Latin primer', 'slate and chalk', 'iron stove', 'grey window light'],
          alt: 'A boy at a desk in a nineteenth-century Prussian classroom of high windows and slates.',
        },
        pages: [
          {
            id: 'latin',
            narration:
              'The Latin master wants the declensions back exactly as they went in. David gives them back slowly, a half beat behind the other boys, because he is still checking whether the rule holds in every case. The reports come home saying he is not quick.',
          },
          {
            id: 'river',
            narration:
              'On the walk home the river is doing arithmetic with barges: so many out, so many in, the difference tied up at the quay. He counts them without deciding to. Numbers are the only subject at this school that never asks him to take anything on trust.',
          },
          {
            id: 'father',
            speaker: 'HIS FATHER',
            dialogue: 'A judge’s son learns the rule first and the reason afterwards. That is the order of things.',
            narration: 'At supper his father folds the paper away and delivers the household doctrine, which is short and has never once been questioned under this roof.',
          },
          {
            id: 'decision',
            narration: 'David does not argue; he simply cannot make his head work in that order. Winter afternoons are long, and there are three ways to spend them.',
            choices: [
              {
                id: 'count',
                label: 'Count things until they confess a pattern',
                effects: [
                  { type: 'flag', flag: 'hilbert.counting', value: true },
                  { type: 'theme', theme: 'proofVsIntuition', amount: 1 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'obey',
                label: 'Learn exactly what the master wants and hand it back',
                effects: [
                  { type: 'flag', flag: 'hilbert.obedientSchoolboy', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'ahead',
                label: 'Read the next book on the shelf instead of this one',
                effects: [
                  { type: 'flag', flag: 'hilbert.readsAhead', value: true },
                  { type: 'theme', theme: 'proofVsIntuition', amount: 1 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Hilbert’s early schooling at a classics-heavy Königsberg gymnasium, his reputation for slowness, and his later transfer to a more scientific school are documented. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-personal-slow-boy',
    characterId: 'hilbert',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 55 },
    once: true,
    variants: [
      {
        id: 'settled',
        conditions: [
          { type: 'yearAtLeast', year: 1868 },
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 5 },
        ],
        title: 'What the Reports Say',
        locationLabel: 'Königsberg',
        yearLabel: '1870s',
        image: {
          setting: 'a modest Prussian parlour with a table of school reports',
          year: 1876,
          characters: ['hilbert'],
          mood: 'private stubbornness',
          details: ['school report on the table', 'oil lamp', 'a slate', 'heavy curtains', 'a stopped clock'],
          alt: 'A school report and a slate lying on a lamplit table in a nineteenth-century parlour.',
        },
        pages: [
          {
            id: 'report',
            narration:
              'The report sits on the table with the word "adequate" in it three times. He reads it, agrees with it in the parts about Greek, and puts it down.',
          },
          {
            id: 'master',
            speaker: 'THE MASTER',
            dialogue: 'You will not memorise. Very well. Then tell me why the rule is true.',
            narration:
              'The master keeps him behind after the others have gone and does not reach for the punishment book. What he asks is the first question anyone in this building has put to him that he actually wants to answer.',
          },
        ],
        effects: [{ type: 'flag', flag: 'hilbert.foundTheQuestion', value: true }],
        historicalNote:
          'Hilbert was an unremarkable pupil in the classical curriculum and strong in mathematics. This particular exchange is dramatized.',
      },
      {
        id: 'grinding',
        conditions: [{ type: 'yearAtLeast', year: 1868 }],
        title: 'Recitation',
        locationLabel: 'Königsberg',
        yearLabel: '1870s',
        image: {
          setting: 'a cold classroom at the end of a long winter term',
          year: 1876,
          characters: ['hilbert'],
          mood: 'grey endurance',
          details: ['chalk dust', 'wet wool coats', 'a stove gone out', 'exercise books', 'sleet on glass'],
          alt: 'An empty cold classroom with chalk dust and wet coats at the end of a winter term.',
        },
        pages: [
          {
            id: 'recite',
            narration:
              'Term after term he recites what he has been given and forgets it by the tram stop. Nothing is asked of him that requires him to be himself. He gets through it the way one gets through weather.',
          },
          {
            id: 'promise',
            speaker: 'DAVID',
            dialogue: 'Somewhere there is a subject where nothing must be taken on anyone’s word. I intend to find it.',
            narration: 'There is nobody to say it to, so he says it to the window, which is the only listener the room provides.',
          },
        ],
        effects: [{ type: 'flag', flag: 'hilbert.foundTheQuestion', value: false }],
        historicalNote: 'A dramatized composite of Hilbert’s documented indifference to the classical curriculum.',
      },
    ],
  },
  {
    id: 'hilbert-formation-closing',
    characterId: 'hilbert',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'konigsberg',
        conditions: [{ type: 'locationIs', locationId: 'konigsberg' }],
        title: 'The Last Term',
        locationLabel: 'Königsberg',
        yearLabel: '1880',
        image: {
          setting: 'a school corridor on the last day of term, coats and cases by the door',
          year: 1880,
          characters: ['hilbert'],
          mood: 'quiet release',
          details: ['leaving certificate', 'stacked chairs', 'a satchel', 'spring light on stone', 'lime trees'],
          alt: 'A satchel and a leaving certificate in an empty school corridor in spring.',
        },
        pages: [
          {
            id: 'certificate',
            narration:
              'The certificate says he may proceed. He folds it into his coat and walks the long way round, over three of the seven bridges, because the walk is not required and therefore is his.',
          },
          {
            id: 'university',
            narration:
              'The university is eight minutes from the house he was born in. He has never been further from home than a summer coast, and he is about to find that he does not need to be.',
          },
        ],
        historicalNote: 'Hilbert completed his schooling in Königsberg in 1880 and enrolled at the local university. Details of the walk are dramatized.',
      },
      {
        id: 'default',
        title: 'A Boyhood Somewhere Else',
        yearLabel: '1880',
        image: {
          setting: 'a railway platform in a provincial German town at the end of winter',
          year: 1880,
          characters: ['hilbert'],
          mood: 'unsettled, provisional',
          details: ['a trunk', 'timetable board', 'steam', 'a folded certificate', 'wet platform stone'],
          alt: 'A trunk and a folded certificate on a wet railway platform in winter.',
        },
        pages: [
          {
            id: 'away',
            narration:
              'The schooling finishes far from the Pregel, in a town where nobody has ever mentioned the bridges to him. He has learned the same declensions and the same theorems and nothing in the walls has told him where he belongs.',
          },
          {
            id: 'open',
            narration:
              'A young man with a folded certificate and no city of his own can go anywhere. That sounds like freedom until the train actually comes.',
          },
        ],
        historicalNote:
          'Hilbert in fact remained in Königsberg through his schooling and his student years. This variant follows a life that left earlier.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter II — Education
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-education-opening',
    characterId: 'hilbert',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'counted',
        conditions: [{ type: 'choiceWas', choiceKey: 'hilbert-formation-opening:decision', choiceId: 'count' }],
        title: 'Five O’Clock',
        locationLabel: 'Königsberg',
        yearLabel: '1880–1881',
        image: {
          setting: 'a university lecture room and the tree-lined walk outside it',
          year: 1881,
          characters: ['hilbert'],
          mood: 'sudden belonging',
          details: ['long chalkboard', 'wooden benches', 'lecture notebooks', 'an apple tree', 'gravel path'],
          alt: 'A long chalkboard in a university lecture room with wooden benches and notebooks.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'The habit of counting things until they confess turns out to have a name and a building. In the first week here somebody uses the word "proof" to mean exactly what he has always meant by it, and he nearly laughs out loud.',
          },
          {
            id: 'minkowski',
            narration:
              'There is a boy two years younger with a face like a closed book and a reputation already leaking in from abroad. Hermann Minkowski does not boast. He simply answers, and the answer is always further along than the question.',
          },
          {
            id: 'walk',
            speaker: 'MINKOWSKI',
            dialogue: 'Every afternoon at five, then. As far as the apple tree and back, and we do not stop until one of us understands.',
            narration: 'Hurwitz joins them, three years older and twice as widely read. On the second Tuesday of term the arrangement is proposed once and never afterwards discussed.',
          },
          {
            id: 'decision',
            narration: 'The faculty expects a young man to attach himself to a direction. There is more than one way to be a student here.',
            choices: [
              {
                id: 'walks',
                label: 'Give the afternoons to the walks with Minkowski and Hurwitz',
                effects: [
                  { type: 'flag', flag: 'hilbert.walksWithFriends', value: true },
                  { type: 'theme', theme: 'communityVsSolitude', amount: 2 },
                  { type: 'resources', effects: { network: 2, wellbeing: 1 } },
                ],
              },
              {
                id: 'library',
                label: 'Take the reading room and work the problems alone',
                effects: [
                  { type: 'flag', flag: 'hilbert.solitary', value: true },
                  { type: 'theme', theme: 'communityVsSolitude', amount: -1 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
              {
                id: 'lindemann',
                label: 'Work to the direction Lindemann sets and finish the doctorate cleanly',
                effects: [
                  { type: 'flag', flag: 'hilbert.advisorPath', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Hilbert studied at Königsberg from 1880, formed lifelong friendships with Hermann Minkowski and Adolf Hurwitz, and took his doctorate under Ferdinand von Lindemann. The daily afternoon walks are documented; the wording is dramatized.',
      },
      {
        id: 'default',
        title: 'The University at the End of the Street',
        locationLabel: 'Königsberg',
        yearLabel: '1880–1881',
        image: {
          setting: 'a university lecture room and the tree-lined walk outside it',
          year: 1881,
          characters: ['hilbert'],
          mood: 'careful appraisal',
          details: ['long chalkboard', 'wooden benches', 'lecture notebooks', 'an apple tree', 'gravel path'],
          alt: 'A long chalkboard in a university lecture room with wooden benches and notebooks.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'The lecture rooms smell of chalk and wet wool. Nobody here asks him to memorise anything; they ask him whether the step follows. It takes him a month to trust that the question is sincere.',
          },
          {
            id: 'minkowski',
            narration:
              'There is a boy two years younger with a face like a closed book and a reputation already leaking in from abroad. Hermann Minkowski does not boast. He simply answers, and the answer is always further along than the question.',
          },
          {
            id: 'walk',
            speaker: 'MINKOWSKI',
            dialogue: 'Every afternoon at five, then. As far as the apple tree and back, and we do not stop until one of us understands.',
            narration: 'Hurwitz joins them, three years older and twice as widely read. On the second Tuesday of term the arrangement is proposed once and never afterwards discussed.',
          },
          {
            id: 'decision',
            narration: 'The faculty expects a young man to attach himself to a direction. There is more than one way to be a student here.',
            choices: [
              {
                id: 'walks',
                label: 'Give the afternoons to the walks with Minkowski and Hurwitz',
                effects: [
                  { type: 'flag', flag: 'hilbert.walksWithFriends', value: true },
                  { type: 'theme', theme: 'communityVsSolitude', amount: 2 },
                  { type: 'resources', effects: { network: 2, wellbeing: 1 } },
                ],
              },
              {
                id: 'library',
                label: 'Take the reading room and work the problems alone',
                effects: [
                  { type: 'flag', flag: 'hilbert.solitary', value: true },
                  { type: 'theme', theme: 'communityVsSolitude', amount: -1 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
              {
                id: 'lindemann',
                label: 'Work to the direction Lindemann sets and finish the doctorate cleanly',
                effects: [
                  { type: 'flag', flag: 'hilbert.advisorPath', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Hilbert studied at Königsberg from 1880 alongside Minkowski and Hurwitz and took his doctorate under Lindemann. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-personal-apple-tree',
    characterId: 'hilbert',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'together',
        conditions: [
          { type: 'yearAtLeast', year: 1882 },
          { type: 'resourceAtLeast', resource: 'network', value: 3 },
        ],
        title: 'As Far as the Apple Tree',
        locationLabel: 'Königsberg',
        yearLabel: '1882–1884',
        image: {
          setting: 'a gravel walk beside an orchard on the edge of a Baltic town, late afternoon',
          year: 1883,
          characters: ['hilbert'],
          mood: 'unhurried exhilaration',
          details: ['an apple tree', 'walking sticks', 'notebooks in coat pockets', 'low sun', 'dust on boots'],
          alt: 'A gravel walk beside an orchard in late afternoon light, with an apple tree at the far end.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'They have worn a path to the apple tree. Nothing is written down out here; the rule is that whatever cannot be said while walking is not yet understood. Between the gate and the tree, three men divide up the whole of mathematics as if it were an estate.',
          },
          {
            id: 'hurwitz',
            speaker: 'HURWITZ',
            dialogue: 'Not the parts we are good at. Every corner of it, in order, until there is none of it left that frightens us.',
            narration:
              'Hilbert asks, half joking, which parts of the subject the three of them mean to take for themselves.',
          },
          {
            id: 'prize',
            narration:
              'He takes the answer as a work plan rather than a joke, and forty years later he will still be executing it. Word comes that Paris has noticed Minkowski. The two of them walk it off in the usual direction and say nothing much about it, which is how they say a great deal.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.appleTree', value: true },
          { type: 'resources', effects: { network: 1, wellbeing: 1 } },
        ],
        historicalNote:
          'The daily walks with Minkowski and Hurwitz, and their stated intention to explore every part of mathematics, are documented; Minkowski’s early recognition by the Paris Academy is documented. The dialogue is dramatized.',
      },
      {
        id: 'alone',
        conditions: [{ type: 'yearAtLeast', year: 1882 }],
        title: 'The Reading Room',
        locationLabel: 'Königsberg',
        yearLabel: '1882–1884',
        image: {
          setting: 'a university reading room at dusk with green-shaded lamps',
          year: 1883,
          characters: ['hilbert'],
          mood: 'concentrated isolation',
          details: ['green lamp shades', 'stacked journals', 'a single chair pushed back', 'inkwell', 'closed shutters'],
          alt: 'A green-shaded lamp over stacked journals in a nearly empty university reading room.',
        },
        pages: [
          {
            id: 'lamps',
            narration:
              'He works until the porter comes round to put out the lamps. The journals are French and Italian and slow going, and there is nobody to say the sentence out loud to and find out whether it survives being spoken.',
          },
          {
            id: 'window',
            speaker: 'DAVID',
            dialogue: 'It holds. I think it holds. I would rather someone told me it does not.',
            narration: 'He has read the step nine times and it still will not settle, and there is nobody in the building to hand it to. Outside, three sets of footsteps go past towards the orchard road and do not stop.',
          },
        ],
        effects: [{ type: 'flag', flag: 'hilbert.appleTree', value: false }],
        historicalNote: 'A dramatized alternative to Hilbert’s documented habit of working out mathematics in company.',
      },
    ],
  },
  {
    id: 'hilbert-education-closing',
    characterId: 'hilbert',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'walks',
        conditions: [{ type: 'choiceWas', choiceKey: 'hilbert-education-opening:decision', choiceId: 'walks' }],
        title: 'Doctor of Philosophy',
        locationLabel: 'Königsberg',
        yearLabel: '1885',
        image: {
          setting: 'a small university hall after an examination, chairs at angles',
          year: 1885,
          characters: ['hilbert'],
          mood: 'earned lightness',
          details: ['a bound dissertation', 'academic gowns over chair backs', 'water glass', 'open window', 'summer dust'],
          alt: 'A bound dissertation and gowns draped over chairs in a small university hall.',
        },
        pages: [
          {
            id: 'exam',
            narration:
              'The examiners ask their questions and he answers them, and the strange part is how little it resembles the afternoons. Nothing said in this room has been argued with properly.',
          },
          {
            id: 'after',
            narration:
              'Afterwards the three of them walk to the apple tree with the dissertation still under his arm. Hurwitz is going to Zürich soon; Minkowski will go where he is called. The walk will have to be continued by post, and it will be.',
          },
        ],
        historicalNote: 'Hilbert received his doctorate at Königsberg in 1885. The scene is dramatized around documented friendships.',
      },
      {
        id: 'alone',
        conditions: [{ type: 'choiceWas', choiceKey: 'hilbert-education-opening:decision', choiceId: 'library' }],
        title: 'A Quiet Examination',
        locationLabel: 'Königsberg',
        yearLabel: '1885',
        image: {
          setting: 'an empty examination hall with a single bound dissertation on the table',
          year: 1885,
          characters: ['hilbert'],
          mood: 'flat achievement',
          details: ['bound dissertation', 'one chair', 'dust in a sunbeam', 'inkstand', 'closed door'],
          alt: 'A single bound dissertation on a table in an empty examination hall.',
        },
        pages: [
          {
            id: 'pass',
            narration:
              'He passes without difficulty, which is the trouble. A proof nobody has attacked is only a proof he has not yet tested, and he is the only person in the building who thinks so.',
          },
          {
            id: 'street',
            narration:
              'On the street afterwards he finds himself walking towards the orchard road out of habit, alone, and turns back before the tree.',
          },
        ],
        historicalNote: 'Dramatized. Hilbert in fact worked out most of his early mathematics in constant conversation.',
      },
      {
        id: 'default',
        title: 'The Direction Set for Him',
        locationLabel: 'Königsberg',
        yearLabel: '1885',
        image: {
          setting: 'a professor’s study with a dissertation and a letter of recommendation',
          year: 1885,
          characters: ['hilbert'],
          mood: 'competent restraint',
          details: ['letter of recommendation', 'sealing wax', 'bookshelves', 'a bound dissertation', 'ticking clock'],
          alt: 'A letter of recommendation and sealing wax beside a dissertation in a professor’s study.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The doctorate is granted and a letter of recommendation is written in the correct terms. He has done what was asked of him, on the subject he was pointed at, and done it well.',
          },
          {
            id: 'restless',
            narration:
              'Walking home he catches himself resenting the neatness of it. Somewhere out there is a problem nobody has assigned. He wants that one.',
          },
        ],
        historicalNote: 'Hilbert’s doctorate under Lindemann in 1885 is documented; the interior mood is dramatized.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter III — Entry into the Profession
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-entry-opening',
    characterId: 'hilbert',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Gordan’s Problem',
        locationLabel: 'Königsberg',
        yearLabel: '1886–1888',
        image: {
          setting: 'a junior lecturer’s room stacked with algebraic computation sheets',
          year: 1887,
          characters: ['hilbert'],
          mood: 'daunted determination',
          details: ['towers of computation sheets', 'a narrow desk', 'unlit stove', 'pencil stubs', 'a single window'],
          alt: 'A narrow desk buried under towers of handwritten algebraic computation sheets.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'The unsolved thing in algebra has a shape you can see from the doorway: stacks of computation, each stack a special case, each case taking years. Gordan has settled one family of forms by pure calculation and it cost him a decade and a hundred pages.',
          },
          {
            id: 'stacks',
            narration:
              'Hilbert reads the hundred pages twice. What strikes him is not the difficulty. It is that every page is trying to build the object, and nobody has asked the prior question of whether the object must exist at all.',
          },
          {
            id: 'lindemann',
            speaker: 'LINDEMANN',
            dialogue: 'A young man makes his name by finishing what the great men began, not by declaring that their method was the wrong one.',
            narration: 'His old supervisor hears what he is planning and comes to the door with the kindest available version of the objection.',
          },
          {
            id: 'decision',
            narration: 'It is good advice. Hilbert thanks him for it and does not take it. There are two roads into the finiteness question and they do not meet.',
            choices: [
              {
                id: 'existence',
                label: 'Prove a finite basis must exist, without producing one',
                effects: [
                  { type: 'flag', flag: 'hilbert.existenceProof', value: true },
                  { type: 'theme', theme: 'proofVsIntuition', amount: 2 },
                  { type: 'resources', effects: { theory: 1, standing: -1 } },
                ],
              },
              {
                id: 'compute',
                label: 'Do it Gordan’s way: build the basis explicitly, however long it takes',
                effects: [
                  { type: 'flag', flag: 'hilbert.computeFirst', value: true },
                  { type: 'theme', theme: 'proofVsIntuition', amount: -1 },
                  { type: 'resources', effects: { proof: 1, standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Gordan’s computational results in invariant theory and Hilbert’s decision to attack the finiteness problem by an existence argument are documented. Lindemann’s line is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-project-finiteness',
    characterId: 'hilbert',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'hilbert-finiteness-theorem', priority: 88 },
    once: true,
    variants: [
      {
        id: 'existence',
        conditions: [{ type: 'choiceWas', choiceKey: 'hilbert-entry-opening:decision', choiceId: 'existence' }],
        title: 'It Must Be There',
        yearLabel: '1888',
        image: {
          setting: 'a lamplit desk at night with one short page of writing among discarded sheets',
          year: 1888,
          characters: ['hilbert'],
          mood: 'startled quiet',
          details: ['one short page', 'crumpled sheets on the floor', 'oil lamp', 'cold coffee', 'frost on the pane'],
          alt: 'A single short page of writing on a lamplit desk among discarded sheets.',
        },
        pages: [
          {
            id: 'page',
            narration:
              'The argument takes a page and a half. It does not build the basis. It shows that supposing there is no finite basis leads you somewhere you cannot stand, and therefore the basis is there, in the dark, whether or not anyone ever writes it down.',
          },
          {
            id: 'cost',
            narration:
              'He reads it back four times looking for the place where he cheated. There is no such place. The decade of computation upstairs in the stacks is not wrong; it is simply no longer necessary, and that is a harder thing to tell a man than that he was mistaken.',
          },
          {
            id: 'aloud',
            speaker: 'DAVID',
            dialogue: 'We are not obliged to make a thing in order to know it is there. That is not weakness. That is the whole of mathematics.',
            narration: 'At two in the morning he rehearses, out loud, to an empty room, the sentence he is going to need for the fight he knows is coming.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.finitenessProved', value: true },
          { type: 'resources', effects: { standing: 1, exposure: 1 } },
        ],
        historicalNote:
          'Hilbert’s 1888 finiteness theorem was a nonconstructive existence proof, and it superseded long computational programmes in invariant theory. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Basis, Written Out',
        yearLabel: '1888',
        image: {
          setting: 'a desk covered in completed algebraic tables, a clean copy on top',
          year: 1888,
          characters: ['hilbert'],
          mood: 'exhausted satisfaction',
          details: ['ruled tables of invariants', 'a fair copy', 'worn pen nib', 'blotting paper', 'grey morning light'],
          alt: 'Neat ruled tables of algebraic results with a fair copy laid on top of them.',
        },
        pages: [
          {
            id: 'tables',
            narration:
              'It is finished the long way, in tables, in a hand that grew smaller as the year went on. Every object is there where anyone can pick it up and weigh it.',
          },
          {
            id: 'doubt',
            narration:
              'And yet, closing the folder, he keeps returning to the thought he set aside in the spring: that the whole mountain might have been walked around instead of climbed. He writes the thought on a slip and puts it in the drawer.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.finitenessProved', value: true },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'Hilbert’s actual 1888 result was nonconstructive. This variant follows a life that took the computational road instead.',
      },
    ],
  },
  {
    id: 'hilbert-card-gordan',
    characterId: 'hilbert',
    chapterId: 'entry',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 74 },
    once: true,
    replacesContextCardId: 'hilbert-card-1888',
    variants: [
      {
        id: 'compute-path',
        conditions: [
          { type: 'yearAtLeast', year: 1888 },
          { type: 'choiceWas', choiceKey: 'hilbert-entry-opening:decision', choiceId: 'compute' },
        ],
        title: 'The Sentence in the Drawer',
        yearLabel: '1888–1893',
        image: {
          setting: 'a desk with a finished folder of tables and one small slip of paper set apart from it',
          year: 1890,
          characters: ['hilbert'],
          mood: 'vindicated and unsatisfied at once',
          details: ['a closed folder of tables', 'a single slip of paper', 'an opened letter of congratulation', 'a paperknife', 'winter light'],
          alt: 'A closed folder of tables on a desk beside one small slip of paper set apart from it.',
        },
        pages: [
          {
            id: 'praise',
            narration:
              'The letters of congratulation come from the men who wanted it done this way, and the warmest of them is from Erlangen. They are pleased with him. He reads the compliments and keeps returning to the slip in the drawer.',
          },
          {
            id: 'verdict',
            narration:
              'Somebody at a conference has heard what the slip says — that the object might be shown to exist without ever being built — and has come back with the verdict already made.',
            speaker: 'THE VERDICT REPORTED FROM ERLANGEN',
            dialogue: 'That would not be mathematics. That would be theology.',
          },
          {
            id: 'answer',
            narration:
              'He puts the slip back under the folder, where it will sit for years being right. A man can be praised for the road he took and remain quietly certain that the other road was shorter.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1888' },
          { type: 'flag', flag: 'hilbert.gordanDispute', value: true },
          { type: 'resources', effects: { standing: 1, network: 1 } },
        ],
        historicalNote:
          'Paul Gordan is widely reported to have dismissed nonconstructive existence arguments in invariant theory as theology rather than mathematics. This variant follows a life that took the computational road and kept the existence argument private.',
      },
      {
        id: 'after-theorem',
        conditions: [
          { type: 'yearAtLeast', year: 1888 },
          { type: 'projectCompleted', projectId: 'hilbert-finiteness-theorem' },
        ],
        title: 'Theology, Not Mathematics',
        yearLabel: '1888–1893',
        image: {
          setting: 'a desk with an opened referee’s letter and a journal proof sheet',
          year: 1890,
          characters: ['hilbert'],
          mood: 'stung, then stubborn',
          details: ['an opened letter', 'journal proof sheets', 'a paperknife', 'spectacles', 'winter light'],
          alt: 'An opened letter and journal proof sheets lying on a desk beside a paperknife.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter is short and it is from the man whose life’s work he has just made unnecessary. The verdict travels faster than the paper does; by spring it is being repeated in three countries.',
          },
          {
            id: 'verdict',
            speaker: 'THE VERDICT REPORTED FROM ERLANGEN',
            dialogue: 'This is not mathematics. This is theology.',
            narration: 'He opens it at the desk without sitting down. The whole of the objection turns out to be one sentence long.',
          },
          {
            id: 'answer',
            narration:
              'He is not angry, which annoys him; he is interested. The correct reply is not a letter. Over the next years he goes back into the problem and comes out the other side with the construction as well, handed over without commentary. The objection dies of having been answered.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1888' },
          { type: 'flag', flag: 'hilbert.gordanDispute', value: true },
          { type: 'resources', effects: { standing: -1, network: 1 } },
        ],
        historicalNote:
          'Paul Gordan is widely reported to have dismissed Hilbert’s nonconstructive proof as theology rather than mathematics, and Hilbert later supplied constructive results in the same area. The remark is reported in the literature rather than verified verbatim; the surrounding scene is dramatized.',
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1891 }],
        title: 'The Word from Erlangen',
        yearLabel: '1888–1893',
        image: {
          setting: 'a common room where a journal is being passed between hands',
          year: 1890,
          characters: ['hilbert'],
          mood: 'gossip and appraisal',
          details: ['a passed journal', 'coffee cups', 'tobacco smoke', 'a hat stand', 'rain on windows'],
          alt: 'A journal being passed around a common room with coffee cups and a hat stand.',
        },
        pages: [
          {
            id: 'gossip',
            narration:
              'The talk in the common room is about a young man from the east who says the old computations were beside the point. The talk has reached Erlangen, and Erlangen has answered in one sentence.',
          },
          {
            id: 'verdict',
            speaker: 'A COLLEAGUE, REPEATING IT',
            dialogue: 'Not mathematics, he says. Theology.',
            narration:
              'Somebody has carried the sentence back from a conference and repeats it now for the third time this week, enjoying it. Hilbert listens the way one listens to a bill being read out: the work it refers to is not finished, and now it will have to be very good indeed.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1888' },
          { type: 'flag', flag: 'hilbert.gordanDispute', value: true },
          { type: 'resources', effects: { standing: -1, network: 1 } },
        ],
        historicalNote:
          'The reported Gordan remark is documented in the literature on Hilbert’s finiteness theorem. This variant places it before the work is complete; the scene is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-entry-closing',
    characterId: 'hilbert',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'The Call',
        locationLabel: 'Göttingen',
        yearLabel: '1895–1899',
        image: {
          setting: 'a small university town of steep roofs and a hall with a long wall of blackboards',
          year: 1896,
          characters: ['hilbert'],
          mood: 'arrival, appetite',
          details: ['a long wall of blackboards', 'steep tiled roofs', 'a removal crate', 'a lecture list', 'lime trees'],
          alt: 'A hall with a long wall of blackboards in a small university town of steep tiled roofs.',
        },
        pages: [
          {
            id: 'arrive',
            narration:
              'Göttingen is a smaller town than Königsberg and a larger place. Klein has been assembling it for years the way a man assembles an orchestra, and the chair he has arranged is not a reward. It is a commission.',
          },
          {
            id: 'plan',
            speaker: 'DAVID',
            dialogue: 'Then we will not run a department here. We will run a workshop, and the doors stay open, and anyone who can do the work belongs in it.',
            narration:
              'In his first month he stands up in a half-empty room — within fifteen years it will not hold the people who come — and tells them what the place is going to be.',
          },
        ],
        historicalNote:
          'Hilbert was appointed professor at Göttingen in 1895, in a department Felix Klein was deliberately building into a world centre. The dialogue is dramatized.',
      },
      {
        id: 'stayed',
        conditions: [{ type: 'projectCompleted', projectId: 'hilbert-finiteness-theorem' }],
        title: 'The Letter He Did Not Answer',
        yearLabel: '1895–1899',
        image: {
          setting: 'a study in a Baltic town with an unanswered letter propped against the inkstand',
          year: 1896,
          characters: ['hilbert'],
          mood: 'settled, faintly haunted',
          details: ['an unanswered letter', 'inkstand', 'sea light', 'a stove', 'a shelf of offprints'],
          alt: 'An unanswered letter propped against an inkstand in a quiet study.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The theorem has travelled further than he has. Letters come from towns he has never seen, asking him to come and build something there, and they stand against the inkstand until the ink on them fades.',
          },
          {
            id: 'stay',
            narration:
              'He has the river, the walks, the same seven bridges. The work goes on and it goes on alone, and he tells himself that a good problem does not care what town it is solved in.',
          },
        ],
        historicalNote:
          'Hilbert moved to Göttingen in 1895. This variant follows a life that stayed in Königsberg and did the work without the institution that grew around him.',
      },
      {
        id: 'default',
        title: 'Fourteen Years of Lecturing',
        yearLabel: '1899',
        image: {
          setting: 'an empty lecture room after the last class of a long term',
          year: 1899,
          characters: ['hilbert'],
          mood: 'unfinished business',
          details: ['a wiped blackboard', 'stacked benches', 'a lecture list', 'a coat on a peg', 'evening light'],
          alt: 'A wiped blackboard and stacked benches in an empty lecture room in the evening.',
        },
        pages: [
          {
            id: 'terms',
            narration:
              'Fourteen years of terms, and the good years are the ones with a problem in them. He has taught well, been liked, been paid, and kept a drawer of beginnings.',
          },
          {
            id: 'ahead',
            narration:
              'The century has one year left to run. Somewhere the mathematicians of Europe are planning to gather and say what has been achieved, and it strikes him as exactly the wrong thing to say.',
          },
        ],
        historicalNote: 'A dramatized summary of a life that had not yet made its move by 1899.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter IV — Breakthrough
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-breakthrough-opening',
    characterId: 'hilbert',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'What to Say to the Century',
        locationLabel: 'Göttingen',
        yearLabel: '1899',
        image: {
          setting: 'a professor’s study in a small German town with an invitation card on the desk',
          year: 1899,
          characters: ['hilbert'],
          mood: 'gathering resolve',
          details: ['a printed invitation card', 'a fresh notebook', 'geometry figures pinned to a wall', 'a bicycle against the porch', 'autumn light'],
          alt: 'A printed invitation card on a desk beside a fresh notebook and pinned geometry figures.',
        },
        pages: [
          {
            id: 'invitation',
            narration:
              'The card invites him to Paris in the summer of 1900 to address the congress. The expectation is obvious and everyone has said it out loud at least once: a survey. What we have achieved. A garland laid on the century as it goes out.',
          },
          {
            id: 'geometry',
            narration:
              'On the wall behind him are the figures for the geometry book, the one that takes Euclid apart to the last hinge and asks what is actually being assumed. That work has taught him something he did not expect: the interesting sentence is never the one that closes a subject.',
          },
          {
            id: 'minkowski',
            speaker: 'MINKOWSKI, BY POST',
            dialogue: 'Give them something they cannot applaud and go home from. Give them work.',
            narration: 'The reply from his oldest friend comes back by return of post and runs to four lines.',
          },
          {
            id: 'decision',
            narration: 'He reads it twice and starts a new notebook the same evening. The congress will have him for one hour, and there is more than one thing an hour can be spent on.',
            choices: [
              {
                id: 'problems',
                label: 'Stand up and read out what nobody has solved',
                effects: [
                  { type: 'flag', flag: 'hilbert.problemsPromised', value: true },
                  { type: 'theme', theme: 'openQuestionsVsAchievement', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, theory: 1 } },
                ],
              },
              {
                id: 'geometry',
                label: 'Present the axioms of geometry and let the method speak',
                effects: [
                  { type: 'flag', flag: 'hilbert.geometryLecture', value: true },
                  { type: 'theme', theme: 'proofVsIntuition', amount: 2 },
                  { type: 'resources', effects: { proof: 1, standing: 1 } },
                ],
              },
              {
                id: 'defer',
                label: 'Send apologies and keep the summer for the work itself',
                effects: [
                  { type: 'flag', flag: 'hilbert.noAddress', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 1, exposure: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Hilbert was invited to address the 1900 International Congress of Mathematicians in Paris and chose to speak on unsolved problems rather than deliver a retrospective. His correspondence with Minkowski about the address is documented; the wording is dramatized.',
      },
      {
        id: 'default',
        title: 'An Invitation Arrives',
        yearLabel: '1899',
        image: {
          setting: 'a working study with an invitation card standing against a pile of offprints',
          year: 1899,
          characters: ['hilbert'],
          mood: 'gathering resolve',
          details: ['a printed invitation card', 'a fresh notebook', 'stacked offprints', 'a stove', 'autumn light'],
          alt: 'An invitation card standing against a pile of offprints on a working desk.',
        },
        pages: [
          {
            id: 'invitation',
            narration:
              'The card invites him to Paris in the summer of 1900 to address the congress. The expectation is a survey: what the century achieved, said warmly, to men who already know it.',
          },
          {
            id: 'refusal',
            narration:
              'He has spent this decade discovering that a subject is only alive where it is unfinished. A list of triumphs would be a wreath. He does not much care for wreaths.',
          },
          {
            id: 'minkowski',
            speaker: 'MINKOWSKI, BY POST',
            dialogue: 'Give them something they cannot applaud and go home from. Give them work.',
            narration: 'The reply from his oldest friend comes back by return of post and runs to four lines.',
          },
          {
            id: 'decision',
            narration: 'He reads it twice and starts a new notebook the same evening. The congress will have him for one hour, and there is more than one thing an hour can be spent on.',
            choices: [
              {
                id: 'problems',
                label: 'Stand up and read out what nobody has solved',
                effects: [
                  { type: 'flag', flag: 'hilbert.problemsPromised', value: true },
                  { type: 'theme', theme: 'openQuestionsVsAchievement', amount: 2 },
                  { type: 'resources', effects: { exposure: 1, theory: 1 } },
                ],
              },
              {
                id: 'geometry',
                label: 'Present the axioms of geometry and let the method speak',
                effects: [
                  { type: 'flag', flag: 'hilbert.geometryLecture', value: true },
                  { type: 'theme', theme: 'proofVsIntuition', amount: 2 },
                  { type: 'resources', effects: { proof: 1, standing: 1 } },
                ],
              },
              {
                id: 'defer',
                label: 'Send apologies and keep the summer for the work itself',
                effects: [
                  { type: 'flag', flag: 'hilbert.noAddress', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -2 },
                  { type: 'resources', effects: { wellbeing: 1, exposure: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The 1900 Paris congress invitation and Hilbert’s choice of subject are documented. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-project-geometry',
    characterId: 'hilbert',
    chapterId: 'breakthrough',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'hilbert-foundations-of-geometry', priority: 86 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Tables, Chairs, Beer Mugs',
        yearLabel: '1899',
        image: {
          setting: 'a lecture room with geometric figures drawn and then deliberately rubbed out',
          year: 1899,
          characters: ['hilbert'],
          mood: 'clean severity',
          details: ['half-erased geometric figures', 'a list of axioms in chalk', 'a ruler unused on the ledge', 'gaslight', 'wooden benches'],
          alt: 'A chalk list of axioms beside half-erased geometric figures in a lecture room.',
        },
        pages: [
          {
            id: 'erase',
            narration:
              'Euclid drew a picture and asked you to believe your eyes. Hilbert takes the picture down. What is left on the wall is a list of sentences, and rules for putting sentences together, and nothing that can be seen.',
          },
          {
            id: 'beer',
            speaker: 'DAVID',
            dialogue: 'Say tables, chairs and beer mugs instead of points, lines and planes. If a single proof notices the difference, the proof was never finished.',
            narration:
              'He turns from the board with the chalk still in his hand and puts it as plainly as he knows how.',
          },
          {
            id: 'cost',
            narration:
              'Half the room laughs; the other half has gone very quiet, having understood that he means it. The cost is intimacy. Geometry was the last piece of mathematics you could hold in your hands, and he has just proved that holding it was never the point. He walks home past the lime trees feeling both lighter and slightly bereaved.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.axiomaticMethod', value: true },
          { type: 'resources', effects: { standing: 2, proof: 1 } },
        ],
        historicalNote:
          'Hilbert’s Foundations of Geometry (1899) rebuilt Euclidean geometry from explicit axioms, and the remark about tables, chairs and beer mugs is widely attributed to him in this connection. The wording here is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-card-paris',
    characterId: 'hilbert',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 82 },
    once: true,
    replacesContextCardId: 'hilbert-card-1900-problems',
    variants: [
      {
        id: 'in-paris',
        conditions: [
          { type: 'yearAtLeast', year: 1900 },
          { type: 'locationIs', locationId: 'paris' },
        ],
        title: 'The Paris Address',
        locationLabel: 'Paris',
        yearLabel: '1900',
        image: {
          setting: 'a crowded university lecture hall in Paris in high summer',
          year: 1900,
          characters: ['hilbert'],
          mood: 'formal heat, held attention',
          details: ['a raked hall of dark benches', 'a lectern', 'summer light through tall windows', 'programme sheets', 'water carafe'],
          alt: 'A lectern in a crowded raked lecture hall lit by tall summer windows.',
        },
        pages: [
          {
            id: 'hall',
            narration:
              'August in Paris, and the hall is too warm, and the men in it have come to hear a century summed up. He begins by asking what the next hundred years will find worth doing, and the fans stop moving.',
          },
          {
            id: 'list',
            narration:
              'Then he reads the list. Not results: questions, numbered, each one stated so precisely that it can be handed to a stranger. Men in the rows are already writing numbers in their programmes as though claiming seats.',
          },
          {
            id: 'spoken',
            speaker: 'DAVID',
            dialogue: 'A subject is alive as long as it has an abundance of problems. Take these. They are not mine after today.',
            narration:
              'The hall has not moved in fifty minutes. He comes to the end of the list and does not finish with a peroration.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1900-problems' },
          { type: 'flag', flag: 'hilbert.parisAddress', value: true },
          { type: 'resources', effects: { standing: 2, network: 2, exposure: 1 } },
        ],
        historicalNote:
          'Hilbert addressed the International Congress of Mathematicians in Paris in 1900, presenting ten problems in the lecture and twenty-three in the published version. His argument that a living science is rich in problems is documented in that address; the wording here is a dramatization, not a quotation.',
      },
      {
        id: 'sent',
        conditions: [
          { type: 'yearAtLeast', year: 1900 },
          { type: 'projectCompleted', projectId: 'hilbert-problems' },
        ],
        title: 'The List, Sent',
        yearLabel: '1900',
        image: {
          setting: 'a study with a numbered manuscript being wrapped for the post',
          year: 1900,
          characters: ['hilbert'],
          mood: 'deliberate transmission',
          details: ['a numbered manuscript', 'brown paper and string', 'a postal label', 'ink drying', 'summer window'],
          alt: 'A numbered manuscript being wrapped in brown paper and string for the post.',
        },
        pages: [
          {
            id: 'wrap',
            narration:
              'The congress meets without him. The list goes instead, numbered, wrapped, addressed, with a covering note that says only that these are the questions and that he does not expect to answer most of them.',
          },
          {
            id: 'print',
            narration:
              'Print is slower than a hall and it carries further. By winter the numbers are being used as names — someone is working on the seventh, someone else has abandoned the tenth — and a list has quietly become an agenda.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1900-problems' },
          { type: 'flag', flag: 'hilbert.parisAddress', value: true },
          { type: 'resources', effects: { standing: 1, network: 1 } },
        ],
        historicalNote:
          'The problems were published as well as delivered; this variant follows a life where the printed list travelled without the Paris lecture.',
      },
      {
        id: 'default',
        conditions: [{ type: 'yearAtLeast', year: 1904 }],
        title: 'The Summer of the Congress',
        yearLabel: '1900',
        image: {
          setting: 'a quiet garden with a newspaper folded to a congress report',
          year: 1900,
          characters: ['hilbert'],
          mood: 'unresolved quiet',
          details: ['a folded newspaper', 'a garden chair', 'an untouched notebook', 'bees', 'long grass'],
          alt: 'A folded newspaper and an untouched notebook on a garden chair in long grass.',
        },
        pages: [
          {
            id: 'report',
            narration:
              'The report of the congress runs to a column and a half. Speeches were given; the century was praised; the delegates dined well. He reads it in the garden and folds it over twice.',
          },
          {
            id: 'drawer',
            narration:
              'The notebook with the numbered questions in it is upstairs in the drawer, where it has been since spring. Nobody has asked for it. He tells himself the questions will keep, and knows that questions are the one thing that does not.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1900-problems' },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'The 1900 congress and Hilbert’s address are documented. This variant follows a life in which the list was never presented.',
      },
    ],
  },
  {
    id: 'hilbert-project-problems',
    characterId: 'hilbert',
    chapterId: 'breakthrough',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'hilbert-problems', priority: 90 },
    once: true,
    variants: [
      {
        id: 'promised',
        conditions: [{ type: 'choiceWas', choiceKey: 'hilbert-breakthrough-opening:decision', choiceId: 'problems' }],
        title: 'Twenty-Three',
        yearLabel: '1900',
        image: {
          setting: 'a desk at night with a numbered list, most numbers followed by empty space',
          year: 1900,
          characters: ['hilbert'],
          mood: 'exhilaration under discipline',
          details: ['a numbered list in ink', 'blank space after each number', 'a lamp turned low', 'a pen laid across the page', 'open window'],
          alt: 'A numbered list in ink with wide empty space left after each entry.',
        },
        pages: [
          {
            id: 'numbering',
            narration:
              'The hard part was never finding open questions. The hard part was choosing which ones a stranger could take up tomorrow without permission and without him. Anything requiring his help got struck out.',
          },
          {
            id: 'giving',
            narration:
              'Twenty-three survive the striking out. He numbers them, leaves a hand’s width of white space under each, and understands what he is doing: he is giving away the next hundred years of his own subject to people he will never meet.',
          },
          {
            id: 'aloud',
            speaker: 'DAVID',
            dialogue: 'We must know. Whatever it costs and however long it takes, we must know — and I say that we will.',
            narration:
              'He blots the last number. What he says then, to nobody, is the sentence he will come back to for the rest of his life, the way other men come back to a prayer.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.problemsGiven', value: true },
          { type: 'resources', effects: { standing: 2, network: 1 } },
        ],
        historicalNote:
          'Hilbert’s twenty-three problems were published in 1900. The conviction that every mathematical problem is answerable runs through his work and is condensed in his later Königsberg motto; the wording here is dramatized.',
      },
      {
        id: 'default',
        title: 'The Numbered Page',
        yearLabel: '1900',
        image: {
          setting: 'a desk with a numbered list of questions and no audience',
          year: 1900,
          characters: ['hilbert'],
          mood: 'private ambition',
          details: ['numbered questions in ink', 'a blotter', 'a lamp', 'stacked correspondence', 'night window'],
          alt: 'A list of numbered questions written in ink on a blotter beside a lamp.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'The list gets made anyway, because he cannot stop making it. Twenty-three questions, each one stated tightly enough that a stranger could pick it up and start.',
          },
          {
            id: 'reach',
            narration:
              'What a list needs is a room, or a journal, or one loud afternoon. He has the questions and he is still working out how to hand them over. The white space under each number waits.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.problemsGiven', value: true },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote: 'The list of twenty-three problems is documented; its route into circulation is dramatized here.',
      },
    ],
  },
  {
    id: 'hilbert-personal-garden-blackboard',
    characterId: 'hilbert',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'flourishing',
        conditions: [
          { type: 'yearAtLeast', year: 1902 },
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 6 },
        ],
        title: 'The Blackboard in the Garden',
        yearLabel: '1900s',
        image: {
          setting: 'a domestic garden with a long covered blackboard fixed along a wall',
          year: 1905,
          characters: ['hilbert'],
          mood: 'informal, generous',
          details: ['a long outdoor blackboard', 'a bicycle leaning on a fence', 'garden chairs', 'chalk in a tin', 'fruit trees'],
          alt: 'A long blackboard fixed along a garden wall with a bicycle leaning nearby.',
        },
        pages: [
          {
            id: 'garden',
            narration:
              'There is a blackboard eighteen paces long fixed to the garden wall, under a little roof against the rain. He works at it in shirtsleeves, walks the length of it, rides the bicycle up and down the path when a step will not come.',
          },
          {
            id: 'students',
            narration:
              'Students come through the gate without knocking, which is the arrangement. The chalk tin empties twice a week, and nobody out here calls him Professor unless a stranger is present.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'Don’t apologise for the question. If it is a bad question we shall find that out in four minutes and be better off.',
            narration: 'A student stops in the middle of a question to apologise for it. Hilbert waves the chalk at him.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.openDoor', value: true },
          { type: 'resources', effects: { network: 2, wellbeing: 1 } },
        ],
        historicalNote:
          'Hilbert’s outdoor blackboard, bicycle, informality with students, and open household at Göttingen are documented features of his working life. The dialogue is dramatized.',
      },
      {
        id: 'strained',
        conditions: [{ type: 'yearAtLeast', year: 1902 }],
        title: 'A Board Under Rain',
        yearLabel: '1900s',
        image: {
          setting: 'a wet garden with a covered blackboard, unread chalk marks running',
          year: 1905,
          characters: ['hilbert'],
          mood: 'weariness, held ground',
          details: ['rain on a covered blackboard', 'a bicycle under a tarpaulin', 'empty garden chairs', 'a wet chalk tin', 'bare fruit trees'],
          alt: 'Rain running over chalk marks on a covered outdoor blackboard beside empty chairs.',
        },
        pages: [
          {
            id: 'rain',
            narration:
              'The rain gets under the little roof and takes the top line of the argument with it. He stands there in his coat and rewrites it, then rewrites it again, and does not go in.',
          },
          {
            id: 'quiet',
            speaker: 'DAVID',
            dialogue: 'It is not the work that tires a man. It is doing it where nobody will contradict him.',
            narration: 'The garden chairs stay stacked against the wall and the gate has not been opened since Tuesday. He says it to the wet board.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote: 'The garden blackboard is documented. The mood of this variant is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-project-integral',
    characterId: 'hilbert',
    chapterId: 'breakthrough',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'hilbert-integral-equations', priority: 84 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A Word Borrowed Early',
        yearLabel: '1904–1910',
        image: {
          setting: 'a seminar room with a long derivation on the board and a physics journal open on a bench',
          year: 1907,
          characters: ['hilbert'],
          mood: 'absorbed pattern-finding',
          details: ['a long derivation in chalk', 'an open physics journal', 'stacked seminar chairs', 'an oil lamp', 'winter afternoon'],
          alt: 'A long chalk derivation on a seminar board with an open physics journal on a bench below.',
        },
        pages: [
          {
            id: 'equations',
            narration:
              'An equation with the unknown function buried inside an integral does not care what it is a model of. He builds the theory the way he builds everything, from the properties up, until infinitely many variables behave as decently as three.',
          },
          {
            id: 'spectrum',
            narration:
              'For one family of values he needs a word and borrows one from optics: spectrum. It is a metaphor, chosen for convenience on a Tuesday. He has no idea that in twenty years the physicists will need exactly this machinery and find it already built, waiting, with their own word on it.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'Build it properly and do not ask what it is for. What it is for will arrive on its own and be grateful.',
            narration: 'The seminar wants to know what any of it is for. He wipes the board, puts on his coat, and answers on the way out.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.spectralTheory', value: true },
          { type: 'resources', effects: { theory: 1, standing: 1 } },
        ],
        historicalNote:
          'Hilbert developed the theory of integral equations and infinitely many variables between roughly 1904 and 1910, introducing spectral terminology long before quantum mechanics made the apparatus indispensable. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-personal-minkowski',
    characterId: 'hilbert',
    chapterId: 'breakthrough',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 80 },
    once: true,
    variants: [
      {
        id: 'close',
        conditions: [
          { type: 'yearAtLeast', year: 1909 },
          { type: 'narrativeFlag', flag: 'hilbert.appleTree', value: true },
        ],
        title: 'January',
        yearLabel: '1909',
        image: {
          setting: 'a winter street outside a lecture building, snow trodden into ice',
          year: 1909,
          characters: ['hilbert'],
          mood: 'grief held very still',
          details: ['trodden snow', 'a closed lecture-hall door', 'a black-edged notice', 'bare lime trees', 'lamplight on ice'],
          alt: 'A black-edged notice on a closed lecture hall door in a snowy winter street.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'It takes a few days in January and it is over. Twenty-eight years of the same conversation, from a gravel path in Königsberg to the chair he arranged for him afterwards, and now the notice is pinned to the door in someone else’s handwriting.',
          },
          {
            id: 'clock',
            narration:
              'At five in the afternoon he puts on his coat out of habit, gets as far as the gate, and stands there. There is nowhere in particular to walk to when the walk was the other person.',
          },
          {
            id: 'obituary',
            speaker: 'DAVID',
            dialogue: 'We agreed to leave no corner of it unexplored. I shall have to do his corners as well now.',
            narration:
              'The memorial address falls to him. He writes it himself and reads it aloud twice before he can get through it once without stopping.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.minkowskiGone', value: true },
          { type: 'resources', effects: { wellbeing: -2, network: -1 } },
        ],
        historicalNote:
          'Hermann Minkowski died suddenly in January 1909 at Göttingen, where Hilbert had helped bring him. Hilbert wrote and delivered a memorial tribute. The dialogue is dramatized.',
      },
      {
        id: 'distant',
        conditions: [{ type: 'yearAtLeast', year: 1909 }],
        title: 'A Letter with a Black Edge',
        yearLabel: '1909',
        image: {
          setting: 'a hall table with an unopened black-edged letter on a salver',
          year: 1909,
          characters: ['hilbert'],
          mood: 'delayed grief',
          details: ['a black-edged envelope', 'a brass salver', 'gloves', 'winter coats on pegs', 'a stopped hall clock'],
          alt: 'An unopened black-edged envelope lying on a brass salver in a hallway.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The black edge on the envelope tells him before the paper does. They had written less this last while — a term is long, and there was always going to be time.',
          },
          {
            id: 'after',
            speaker: 'DAVID',
            dialogue: 'We were going to divide the subject between us. I have his half now and no one to argue with about it.',
            narration: 'He reads it twice standing in the hall, puts it in the drawer with the old ones, and finds only one thing to say.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.minkowskiGone', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote: 'Minkowski’s death in January 1909 is documented; the distance in this variant follows the life as it has been lived here.',
      },
    ],
  },
  {
    id: 'hilbert-breakthrough-closing',
    characterId: 'hilbert',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'agenda',
        conditions: [{ type: 'projectCompleted', projectId: 'hilbert-problems' }],
        title: 'Other People’s Work',
        yearLabel: '1910',
        image: {
          setting: 'a desk covered with offprints from many countries, each annotated with a number',
          year: 1910,
          characters: ['hilbert'],
          mood: 'satisfaction at one remove',
          details: ['offprints in several languages', 'pencil numbers in the margins', 'a paperknife', 'a full wastebasket', 'morning light'],
          alt: 'Offprints in several languages with pencilled numbers written in their margins.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'The post now brings other men’s solutions. He opens them with a paperknife and writes the problem number in the margin, and about one in five is right, and about one in twenty is beautiful.',
          },
          {
            id: 'ledger',
            narration:
              'A decade ago he stood up and handed out work. The ledger is coming back to him a page at a time, in Italian and Hungarian and bad German, and none of it is his, and all of it is.',
          },
        ],
        historicalNote: 'Hilbert’s problems began attracting solutions from across Europe within a few years of publication.',
      },
      {
        id: 'method',
        conditions: [{ type: 'projectCompleted', projectId: 'hilbert-foundations-of-geometry' }],
        title: 'The Method Travels',
        yearLabel: '1910',
        image: {
          setting: 'a seminar room where a visiting mathematician writes an axiom list on the board',
          year: 1910,
          characters: ['hilbert'],
          mood: 'quiet propagation',
          details: ['a numbered axiom list in chalk', 'visitors’ hats on a bench', 'a seminar timetable', 'gaslight', 'wet umbrellas'],
          alt: 'A numbered axiom list chalked on a seminar board with visitors’ hats on a bench.',
        },
        pages: [
          {
            id: 'seminar',
            narration:
              'A visitor from another country writes out his primitives and his axioms in the correct order, without being asked and without crediting anyone, because that is now simply how one begins. The method has stopped having an author.',
          },
          {
            id: 'ahead',
            narration:
              'He sits at the back and finds he wants to do it to something larger than geometry. Something that would cover the whole of it. The thought is enormous and he does not say it out loud yet.',
          },
        ],
        historicalNote: 'The axiomatic method spread rapidly after 1899 and led Hilbert towards his later foundational programme.',
      },
      {
        id: 'default',
        title: 'The Decade That Did Not Turn',
        yearLabel: '1910',
        image: {
          setting: 'a study at the end of a decade, notebooks shelved and unopened',
          year: 1910,
          characters: ['hilbert'],
          mood: 'flat competence',
          details: ['shelved notebooks', 'a full inkwell', 'an unposted parcel', 'a swept hearth', 'grey daylight'],
          alt: 'Rows of shelved notebooks and an unposted parcel in a tidy, quiet study.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The decade ends the way decades do when nothing was risked in them: tidily. The notebooks are shelved in order, the lectures were good, the students were adequately taught.',
          },
          {
            id: 'itch',
            narration:
              'He stands in the doorway of his own study with the lamp still burning and feels the specific discomfort of a man who has been careful. Whatever comes next is going to have to be larger.',
          },
        ],
        historicalNote: 'A dramatized closing for a life that had not yet spent its decade.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter V — Crisis and Responsibility
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-crisis-opening',
    characterId: 'hilbert',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds: ['hilbert', 'noether'],
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'A Question of Admission',
        locationLabel: 'Göttingen',
        yearLabel: '1915',
        image: {
          setting: 'a faculty meeting room with a long table and a war-thinned attendance',
          year: 1915,
          characters: ['hilbert'],
          mood: 'institutional cold, private fury',
          details: ['a long green baize table', 'empty chairs', 'a printed statute book', 'blackout of winter dusk', 'inkstand'],
          alt: 'A long baize meeting table with several empty chairs and a statute book open on it.',
        },
        pages: [
          {
            id: 'war',
            narration:
              'Half the benches are empty and the names of the missing are read out at the start of term. The war has taken the young men and left the paperwork, and the faculty still meets on Thursdays to defend the statutes.',
          },
          {
            id: 'candidate',
            narration:
              'The candidate has done work on invariants that nobody else in Germany could have done, and the objection on the table is not about the work. The objection is that soldiers returning from the front cannot be expected to sit at the feet of a woman.',
          },
          {
            id: 'colleague',
            speaker: 'A MEMBER OF THE FACULTY',
            dialogue: 'It is not a question of her ability, Herr Geheimrat. It is a question of what the university is.',
            narration: 'A colleague on the far side of the table puts the objection in its most reasonable form, believing it to be reasonable.',
          },
          {
            id: 'decision',
            narration: 'Hilbert looks at him a long moment, because the man has accidentally said something true. There is a way to win this, and there are two ways to survive it.',
            choices: [
              {
                id: 'fight',
                label: 'Take it to the senate and make them say the reason out loud',
                effects: [
                  { type: 'flag', flag: 'hilbert.foughtForNoether', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 2, flag: 'gottingen-1915' },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'sideDoor',
                label: 'Announce the lectures under his own name and let her give them',
                effects: [
                  { type: 'flag', flag: 'hilbert.lecturesUnderHisName', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 1, tension: 1, flag: 'gottingen-1915' },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
              {
                id: 'wait',
                label: 'Let the statute stand and wait for the war to change the faculty',
                effects: [
                  { type: 'flag', flag: 'hilbert.waitedOnNoether', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'In 1915 Hilbert and Klein brought Emmy Noether to Göttingen; the philosophy faculty resisted her habilitation, and Hilbert announced courses under his own name that she in fact delivered. Habilitation came in 1919. The faculty dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Thursdays and the Statutes',
        yearLabel: '1915',
        image: {
          setting: 'a war-year committee room with a statute book and a thin attendance',
          year: 1915,
          characters: ['hilbert'],
          mood: 'institutional cold, private fury',
          details: ['a statute book', 'empty chairs', 'a casualty list on the noticeboard', 'inkstand', 'winter dusk'],
          alt: 'A statute book open on a committee table beside a noticeboard bearing a casualty list.',
        },
        pages: [
          {
            id: 'war',
            narration:
              'The casualty lists go up on the noticeboard every Monday and the committees meet every Thursday, and the committees are winning. Whole subjects are being suspended for the duration.',
          },
          {
            id: 'candidate',
            narration:
              'There is a mathematician out there whose work on invariants he has read three times, and the rules of every faculty in Germany say she cannot be given a post. The rules are perfectly clear and perfectly stupid, which is a combination he has met before.',
          },
          {
            id: 'colleague',
            speaker: 'A MEMBER OF THE FACULTY',
            dialogue: 'It is not a question of her ability. It is a question of what the university is.',
            narration: 'A colleague on the far side of the table puts the objection in its most reasonable form, believing it to be reasonable.',
          },
          {
            id: 'decision',
            narration: 'Hilbert looks at him a long moment, because the man has accidentally said something true. There is a way to win this, and there are two ways to survive it.',
            choices: [
              {
                id: 'fight',
                label: 'Take it to the senate and make them say the reason out loud',
                effects: [
                  { type: 'flag', flag: 'hilbert.foughtForNoether', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 2, flag: 'gottingen-1915' },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'sideDoor',
                label: 'Announce the lectures under his own name and let her give them',
                effects: [
                  { type: 'flag', flag: 'hilbert.lecturesUnderHisName', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 1, tension: 1, flag: 'gottingen-1915' },
                  { type: 'resources', effects: { network: 1 } },
                ],
              },
              {
                id: 'wait',
                label: 'Let the statute stand and wait for the war to change the faculty',
                effects: [
                  { type: 'flag', flag: 'hilbert.waitedOnNoether', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Noether’s exclusion from a paid post and Hilbert’s campaign on her behalf are documented. Dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-card-bathhouse',
    characterId: 'hilbert',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: ['hilbert', 'noether'],
    trigger: { event: 'afterAction', priority: 83 },
    once: true,
    replacesContextCardId: 'hilbert-card-1915-noether',
    variants: [
      {
        id: 'fought',
        conditions: [
          { type: 'yearAtLeast', year: 1916 },
          { type: 'choiceWas', choiceKey: 'hilbert-crisis-opening:decision', choiceId: 'fight' },
        ],
        title: 'Not a Bathhouse',
        yearLabel: '1916–1919',
        image: {
          setting: 'a panelled university senate room during a formal session',
          year: 1917,
          characters: ['hilbert'],
          mood: 'contained anger, plain speech',
          details: ['dark panelling', 'a printed agenda', 'water glasses', 'a raised speaker’s place', 'heavy curtains'],
          alt: 'A panelled senate room with a printed agenda and water glasses on the table.',
        },
        pages: [
          {
            id: 'floor',
            narration:
              'He has sat through forty minutes of men explaining that the difficulty is regrettable, that the statute is the statute, that of course nobody doubts the candidate’s gifts.',
          },
          {
            id: 'line',
            speaker: 'DAVID',
            dialogue: 'I do not see that the candidate’s sex is an argument against admitting her. This is a university. It is not a bathhouse.',
            narration:
              'He stands, and every man at that table can see he has decided not to soften it.',
          },
          {
            id: 'after',
            narration:
              'Somebody laughs before he can stop himself and it goes very badly for the room. The vote is lost anyway; the sentence is not. It takes four more years and the fall of an empire before the habilitation is granted. She lectures the whole time regardless, and the students come, and by the end nobody can quite remember what the objection had been.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1915-noether' },
          { type: 'flag', flag: 'hilbert.bathhouse', value: true },
          { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 2, flag: 'habilitation' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Hilbert is widely reported to have told the faculty that the senate was not a bathhouse when Noether’s habilitation was opposed on grounds of sex. The remark is reported rather than verbatim record; Noether’s habilitation came in 1919. The surrounding scene is dramatized.',
      },
      {
        id: 'side-door',
        conditions: [
          { type: 'yearAtLeast', year: 1916 },
          { type: 'choiceWas', choiceKey: 'hilbert-crisis-opening:decision', choiceId: 'sideDoor' },
        ],
        title: 'The Lecture List',
        yearLabel: '1916–1919',
        image: {
          setting: 'a noticeboard in a university corridor bearing a printed lecture list',
          year: 1917,
          characters: ['hilbert'],
          mood: 'wry, provisional',
          details: ['a printed lecture list', 'drawing pins', 'a corridor of doors', 'chalk dust on a sill', 'winter coats'],
          alt: 'A printed lecture list pinned to a noticeboard in a university corridor.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'The printed list says the course is his. Everyone who attends knows within one minute that it is not. She will use the arrangement for four years, and the seminar it produces will be the best thing in Germany, and his name will be on the door.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'It is a shabby arrangement and I am ashamed of it. It is also the only door in the building that opens. Use it.',
            narration:
              'He tells her the arrangement himself, in his own office, because it is not a thing to put in a letter.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1915-noether' },
          { type: 'flag', flag: 'hilbert.bathhouse', value: true },
          { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 1, tension: 1, flag: 'habilitation' },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Noether lectured at Göttingen under courses announced in Hilbert’s name before her 1919 habilitation. The dialogue is dramatized.',
      },
      {
        id: 'carried-anyway',
        conditions: [
          { type: 'yearAtLeast', year: 1916 },
          { type: 'projectCompleted', projectId: 'hilbert-recruits-noether' },
        ],
        title: 'Someone Else Says It',
        yearLabel: '1916–1919',
        image: {
          setting: 'a committee room seen from a seat at the far end of the table',
          year: 1917,
          characters: ['hilbert'],
          mood: 'relief and a small private shame',
          details: ['a seat at the far end of the table', 'a passed minute book', 'water glasses', 'a closed statute book', 'grey window'],
          alt: 'A committee table seen from the far end, with a minute book being passed along it.',
        },
        pages: [
          {
            id: 'silence',
            narration:
              'He lets the statute stand and says nothing on the day, and tells himself the war will change the faculty faster than he can. It does, eventually. It is simply that somebody else is standing up while he waits.',
          },
          {
            id: 'settled',
            narration:
              'Klein carries it in the end, over four years and a lost empire, and the appointment goes through. Hilbert votes for it, warmly, from a seat at the far end of the table.',
            speaker: 'DAVID',
            dialogue: 'I was right about the timing and wrong about everything else. It should have been my voice and it was not.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1915-noether' },
          { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 1, tension: 1, flag: 'habilitation' },
          { type: 'resources', effects: { network: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Noether’s habilitation in 1919 followed advocacy by both Hilbert and Felix Klein. This variant follows a life in which Hilbert left the argument to his colleague.',
      },
      {
        id: 'default',
        title: 'The Statute Stands',
        yearLabel: '1916–1919',
        image: {
          setting: 'an office where a rejected application is being filed away',
          year: 1917,
          characters: ['hilbert'],
          mood: 'bureaucratic quiet, private discomfort',
          details: ['a filed application', 'a stamped decision', 'a wooden filing drawer', 'a dry inkpad', 'grey light'],
          alt: 'A stamped decision being filed into a wooden drawer of documents.',
        },
        pages: [
          {
            id: 'filed',
            narration:
              'The application is stamped, filed and correctly disposed of. Nobody in the building has done anything wrong; the rule was applied as written, by men who will sleep well. He will take the bicycle out in the dark tonight, which is what he does instead of shouting.',
          },
          {
            id: 'regret',
            speaker: 'DAVID',
            dialogue: 'We have just kept the best algebraist in Germany out of a building we are not using properly anyway. Write that in the minutes.',
            narration:
              'The decision is minuted, correctly, and the chairman asks whether there is any other business. What Hilbert says next does not go into the minutes.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1915-noether' },
          { type: 'resources', effects: { wellbeing: -1, network: -1 } },
        ],
        historicalNote:
          'Hilbert did in fact intervene on Noether’s behalf. This variant follows a life in which the intervention was never made.',
      },
    ],
  },
  {
    id: 'hilbert-encounter-noether',
    characterId: 'hilbert',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['hilbert', 'noether'],
    trigger: { event: 'afterAction', priority: 77 },
    once: true,
    variants: [
      {
        id: 'human-present',
        conditions: [
          { type: 'yearAtLeast', year: 1917 },
          { type: 'yearAtMost', year: 1930 },
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'otherCharacterIsHuman', characterId: 'noether' },
          { type: 'otherCharacterAt', characterId: 'noether', locationId: 'gottingen', yearTolerance: 2 },
        ],
        title: 'The Conservation Question',
        locationLabel: 'Göttingen',
        yearLabel: '1918–1919',
        image: {
          setting: 'a seminar room with two people at one blackboard and the benches empty',
          year: 1918,
          characters: ['hilbert', 'noether'],
          mood: 'fast, unceremonious collaboration',
          details: ['a single long blackboard', 'two sticks of chalk', 'empty benches', 'a rain-streaked window', 'a coat over a chair'],
          alt: 'Two mathematicians working at one long blackboard in an otherwise empty seminar room.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'The new theory of gravitation has a hole in its bookkeeping: energy will not sit still the way it does in every other part of physics. Two mathematicians and one blackboard, and the physicists in the next building have been arguing about it for a year.',
          },
          {
            id: 'answer',
            speaker: 'NOETHER',
            dialogue: 'Stop asking where the energy went. Ask what the equations are indifferent to, and the conservation law falls out of the indifference.',
            narration:
              'She takes the second stick of chalk without asking and goes at the thing from the side nobody has tried.',
          },
          {
            id: 'after',
            narration:
              'Hilbert puts down his chalk. It is not a repair; it is a statement about symmetry that will outlive the theory that provoked it. He walks her to the gate afterwards, still arguing, and thinks with some grimness that the faculty which will not pay her has just been handed a theorem it could not have produced in a hundred years.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'noether', familiarity: 2, respect: 2, flag: 'invariants' },
          { type: 'resources', effects: { theory: 1, network: 1 } },
        ],
        historicalNote:
          'Noether worked at Göttingen from 1915 on the conservation-law problems raised by general relativity, and her symmetry theorem dates from 1918. The dialogue is dramatized.',
      },
      {
        id: 'npc-present',
        conditions: [
          { type: 'yearAtLeast', year: 1917 },
          { type: 'yearAtMost', year: 1930 },
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'otherCharacterIsNpc', characterId: 'noether' },
          { type: 'otherCharacterAt', characterId: 'noether', locationId: 'gottingen', yearTolerance: 2 },
        ],
        title: 'The Algebraist Upstairs',
        locationLabel: 'Göttingen',
        yearLabel: '1918–1919',
        image: {
          setting: 'a stairwell outside a seminar room with an argument audible through the door',
          year: 1918,
          characters: ['hilbert', 'noether'],
          mood: 'admiring, slightly rueful',
          details: ['a heavy seminar door ajar', 'chalk-dusted stair treads', 'a stack of dissertations', 'a bicycle in the hallway', 'rain outside'],
          alt: 'A seminar door left ajar on a chalk-dusted stairwell with dissertations stacked nearby.',
        },
        pages: [
          {
            id: 'through-door',
            narration:
              'Through the door there is a woman’s voice going at speed and six young men trying to keep up, and losing. He stands in the stairwell a moment longer than he needs to.',
          },
          {
            id: 'conservation',
            speaker: 'NOETHER, THROUGH THE DOOR',
            dialogue: 'No — stop hunting for the missing energy. Ask what the equations do not notice. The law is hiding inside the symmetry.',
            narration:
              'The voice does not pause for him. What it says next settles in one sentence the thing the physicists have been fighting over since the war began.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 2, flag: 'invariants' },
          { type: 'resources', effects: { theory: 1 } },
        ],
        historicalNote:
          'Noether’s Göttingen years, her lecturing style, and her 1918 symmetry theorem are documented. The overheard dialogue is dramatized.',
      },
      {
        id: 'at-a-distance',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'projectCompleted', projectId: 'hilbert-recruits-noether' },
        ],
        title: 'Reports of a Seminar',
        yearLabel: '1922–1925',
        image: {
          setting: 'a desk far from the seminar it hears about, offprints and letters stacked by postmark',
          year: 1922,
          characters: ['hilbert'],
          mood: 'proud, and too far off to enjoy it',
          details: ['offprints stacked by postmark', 'a student’s letter in a careful hand', 'a railway timetable', 'an untouched chair', 'lamplight'],
          alt: 'Offprints and letters stacked by postmark on a desk beside a railway timetable.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'He fought four years to get her a room and a lecture list, and now he is not in the building where the lecturing happens. What reaches him is second-hand: offprints, a student’s enthusiastic letter, the seminar described by people who were there.',
          },
          {
            id: 'theorem',
            narration:
              'The symmetry theorem comes in the post in a plain wrapper. He reads it standing at the desk with his coat still on, and it settles in one page the thing the physicists have been fighting over since the war began.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'I made room for it and then went away from the room. That is a stupid way to arrange a life.',
            narration: 'He puts the offprint in the middle of the desk where he cannot avoid it, and looks up the times of the trains.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 2, flag: 'invariants-by-post' },
          { type: 'resources', effects: { theory: 1, wellbeing: -1 } },
        ],
        historicalNote:
          'Noether’s 1918 symmetry theorem and her Göttingen seminar are documented. This variant follows a life that secured her post and then worked elsewhere.',
      },
      {
        id: 'absent',
        conditions: [{ type: 'yearAtLeast', year: 1922 }],
        title: 'The Correspondence That Does Not Take',
        yearLabel: '1922–1925',
        image: {
          setting: 'a desk with an outgoing letter, a second copy, and no reply',
          year: 1922,
          characters: ['hilbert'],
          mood: 'a door that stayed shut',
          details: ['two copies of the same letter', 'a stamp book', 'an open journal on invariants', 'cold tea', 'winter window'],
          alt: 'Two copies of the same outgoing letter beside an open journal on a desk.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'He writes to her twice. The invariants problem raised by the new gravitation is exactly hers and he says so plainly, and the second letter is a little shorter and a little less certain than the first.',
          },
          {
            id: 'nothing',
            speaker: 'DAVID',
            dialogue: 'The one person in Germany who could settle this is not in the room and has never been paid to be, and here we sit failing at her problem. Somebody explain the arrangement to me.',
            narration:
              'The letters are answered late or not at all, because a correspondence is not a seminar. Two years on, the conservation question is still open on the desk, and the physicists have patched it, and the patch holds and satisfies nobody.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'noether', familiarity: 1, respect: 1, tension: 1, flag: 'never-came' },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote:
          'Noether taught unpaid at Erlangen before her 1915 move to Göttingen. This variant follows a life where the move never happened.',
      },
    ],
  },
  {
    id: 'hilbert-project-noether',
    characterId: 'hilbert',
    chapterId: 'crisis',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds: ['hilbert', 'noether'],
    trigger: { event: 'projectCompleted', projectId: 'hilbert-recruits-noether', priority: 85 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Her Own Name on the List',
        yearLabel: '1919',
        image: {
          setting: 'a corridor noticeboard where a new lecture list has just been pinned up',
          year: 1919,
          characters: ['hilbert'],
          mood: 'plain, hard-won',
          details: ['a freshly pinned lecture list', 'drawing pins in a tin', 'a corridor of closed doors', 'spring light', 'a swept floor'],
          alt: 'A freshly pinned lecture list on a corridor noticeboard beside a tin of drawing pins.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'The new list goes up in the corridor with her name on it, printed the same size as everyone else’s. It has taken four years, a lost war, a new constitution and a great deal of correspondence to achieve this piece of small type.',
          },
          {
            id: 'cost',
            narration:
              'It has cost him standing with men whose opinion used to matter to him, and he finds he does not miss them. It has cost her four years she is never getting back, and she does not mention it, which is worse.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'It is not a favour and it never was. We are simply no longer refusing to use what we have.',
            narration: 'Someone in the corridor calls it generous of him, and he turns round to correct them. Afterwards he goes to the first lecture and sits at the back like a student, taking notes.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.noetherSecured', value: true },
          { type: 'relationship', characterId: 'noether', familiarity: 2, respect: 2, flag: 'habilitation-granted' },
          { type: 'resources', effects: { network: 2, standing: 1 } },
        ],
        historicalNote:
          'Noether received her habilitation at Göttingen in 1919 after sustained advocacy by Hilbert and Klein, and later a small salaried position. The dialogue is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-encounter-einstein',
    characterId: 'hilbert',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['hilbert', 'einstein'],
    trigger: { event: 'afterAction', priority: 79 },
    once: true,
    variants: [
      {
        id: 'human-present',
        conditions: [
          { type: 'yearAtLeast', year: 1916 },
          { type: 'yearAtMost', year: 1924 },
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'otherCharacterIsHuman', characterId: 'einstein' },
          { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'gottingen', yearTolerance: 2 },
        ],
        title: 'Six Lectures and a Near Collision',
        locationLabel: 'Göttingen',
        yearLabel: '1916',
        image: {
          setting: 'a lecture hall with a week’s worth of gravitational field equations left on the boards',
          year: 1916,
          characters: ['hilbert', 'einstein'],
          mood: 'exhilaration edged with rivalry',
          details: ['boards crowded with tensor equations', 'a jug of water', 'chalk-marked cuffs', 'summer dust', 'open high windows'],
          alt: 'A lecture hall with boards crowded in chalk equations and an open high window.',
        },
        pages: [
          {
            id: 'lectures',
            narration:
              'He gives the visitor a week and the whole hall. The physicist talks for six afternoons about falling and curvature, and by the fourth Hilbert has stopped taking notes because he can see where the mathematics has to go.',
          },
          {
            id: 'race',
            narration:
              'What follows is not comfortable. Two men in two cities arrive at very nearly the same equations within days of one another, and for a fortnight the post between them is careful in a way that neither enjoys.',
          },
          {
            id: 'settled',
            speaker: 'DAVID',
            dialogue: 'Any boy in this town could have handed you the geometry. It took you to know it was about gravity. That is the harder half and it is yours.',
            narration:
              'They meet in a corridor with nobody else present, and he settles it in two sentences before they go and eat a bad lunch together.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 2, respect: 2, tension: 1, flag: 'field-equations' },
          { type: 'resources', effects: { theory: 1, exposure: 1 } },
        ],
        historicalNote:
          'Einstein lectured at Göttingen in 1915 and he and Hilbert arrived at field equations for general relativity within days of each other in November 1915, after which their friendly relations resumed. Hilbert’s remark about Göttingen’s command of geometry is reported in various forms; the wording here is dramatized.',
      },
      {
        id: 'npc-berlin',
        conditions: [
          { type: 'yearAtLeast', year: 1916 },
          { type: 'yearAtMost', year: 1924 },
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'otherCharacterIsNpc', characterId: 'einstein' },
          { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin', yearTolerance: 2 },
        ],
        title: 'The Post from Berlin',
        locationLabel: 'Göttingen',
        yearLabel: '1916',
        image: {
          setting: 'a desk with letters from Berlin arranged by date beside a page of tensor calculation',
          year: 1916,
          characters: ['hilbert'],
          mood: 'competitive intimacy at a distance',
          details: ['letters arranged by postmark', 'a page of tensor calculation', 'a paperknife', 'a railway timetable', 'lamplight'],
          alt: 'Letters arranged by postmark beside a page of dense tensor calculation on a desk.',
        },
        pages: [
          {
            id: 'letters',
            narration:
              'The letters come from Berlin every few days, and last summer the man himself stood at that board for a week and would not be interrupted. The mathematics he needs exists here and he knows it, and neither of them says the word priority out loud.',
          },
          {
            id: 'november',
            narration:
              'For one fortnight they are working on the same equations two hundred miles apart, and the postmarks matter more than either would like. Then it is over, and both sets of pages say the same thing, and the theory does not care who wrote it down first.',
          },
          {
            id: 'letter',
            speaker: 'DAVID, WRITING',
            dialogue: 'The geometry was lying about here for anyone to pick up. Knowing it was gravity — that was never going to come from this building. Come back in the summer.',
            narration: 'He writes the reply at midnight and seals it before he can improve it, which is how he knows it is honest.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 2, tension: 1, flag: 'field-equations' },
          { type: 'resources', effects: { theory: 1 } },
        ],
        historicalNote:
          'The 1915 Göttingen lectures, the near-simultaneous field equations and the subsequent correspondence are documented. The letter is dramatized.',
      },
      {
        id: 'absent',
        conditions: [{ type: 'yearAtLeast', year: 1921 }],
        title: 'Geometry Without a Physicist',
        yearLabel: '1916–1921',
        image: {
          setting: 'a study with differential geometry notes and no correspondence',
          year: 1917,
          characters: ['hilbert'],
          mood: 'unclaimed capability',
          details: ['pages of curvature calculations', 'an empty letter rack', 'a closed atlas of the heavens', 'a cold stove', 'evening'],
          alt: 'Pages of curvature calculations beside an empty letter rack on a desk.',
        },
        pages: [
          {
            id: 'ready',
            narration:
              'The geometry is here, finished, waiting, and nobody has come to ask it what it is for. He builds it out further because building is what he does, and the pages go into the drawer with the others.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'We have the whole apparatus of curvature sitting on the shelf and not one physicist in Germany has walked through that door to ask about gravity. Somebody will. Eventually somebody always does.',
            narration:
              'The pages go back in the drawer with the others, and what he says to the empty room turns out to be true — only not in the year he expects, and by then the shelf has a great deal of dust on it.',
          },
        ],
        effects: [{ type: 'resources', effects: { theory: 1, exposure: -1 } }],
        historicalNote:
          'Einstein and Hilbert were in close contact over general relativity in 1915–1916. This variant follows a life in which that contact never occurred.',
      },
    ],
  },
  {
    id: 'hilbert-personal-illness',
    characterId: 'hilbert',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'frail',
        conditions: [
          { type: 'yearAtLeast', year: 1925 },
          { not: { type: 'resourceAtLeast', resource: 'health', value: 5 } },
        ],
        title: 'The Thin Year',
        locationLabel: 'Göttingen',
        yearLabel: '1925–1926',
        image: {
          setting: 'a sickroom with a chair drawn to the window and papers pushed to the far side of the bed',
          year: 1925,
          characters: ['hilbert'],
          mood: 'diminishment, refusal',
          details: ['a chair at the window', 'papers at the foot of the bed', 'a medicine bottle', 'a folded rug', 'thin winter light'],
          alt: 'A chair drawn up to a sickroom window with papers pushed to the foot of the bed.',
        },
        pages: [
          {
            id: 'diagnosis',
            narration:
              'The blood is wrong and there is not much that anyone in Europe can do about it. He is sixty-three, and for the first time in his life the difficulty is not in the problem.',
          },
          {
            id: 'treatment',
            narration:
              'Word comes of a treatment being tried across the ocean. It is arranged by colleagues who tell him nothing about the arranging, which is fortunate, because he would have refused to be a burden and then died of it.',
          },
          {
            id: 'return',
            speaker: 'DAVID',
            dialogue: 'Put the seminar back on the timetable. I shall sit down for it, but I will not have it cancelled.',
            narration:
              'In the spring he sends word to the department in his own hand, before anyone has dared to ask. He will come back thinner and slower and entirely himself, and the first lecture will overrun by twenty minutes.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.illness', value: true },
          { type: 'resources', effects: { health: 2, wellbeing: -1 } },
        ],
        historicalNote:
          'Hilbert developed pernicious anaemia in the mid-1920s and benefited from a newly developed treatment obtained with the help of colleagues abroad. The dialogue is dramatized.',
      },
      {
        id: 'steady',
        conditions: [{ type: 'yearAtLeast', year: 1925 }],
        title: 'Sixty-Three',
        yearLabel: '1925–1926',
        image: {
          setting: 'a study at night with a mirror, spectacles, and an unfinished page',
          year: 1925,
          characters: ['hilbert'],
          mood: 'first intimation of limit',
          details: ['spectacles laid on a page', 'a mirror', 'a stopped pocket watch', 'a shawl on a chair', 'low lamp'],
          alt: 'Spectacles laid on an unfinished page beside a mirror and a stopped pocket watch.',
        },
        pages: [
          {
            id: 'age',
            narration:
              'The stairs take longer than they did. He notices it at the third landing and stands still until it passes, and then goes up and works until two.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'There is a fixed quantity of time and an unlimited quantity of mathematics. Only one of those is my business.',
            narration: 'He puts the spectacles down on the unfinished page and leaves it open, so that tomorrow starts in the middle.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote: 'Dramatized. Hilbert’s serious illness of the mid-1920s is documented.',
      },
    ],
  },
  {
    id: 'hilbert-project-program',
    characterId: 'hilbert',
    chapterId: 'crisis',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'hilbert-formalist-program', priority: 87 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Paradise We Will Not Leave',
        yearLabel: '1920s',
        image: {
          setting: 'a lecture hall with a short list of rules of inference chalked at the top of an empty board',
          year: 1925,
          characters: ['hilbert'],
          mood: 'defiant construction',
          details: ['a short list of inference rules', 'an otherwise empty board', 'a full hall', 'a pointer', 'winter coats'],
          alt: 'A short chalked list of inference rules at the top of an otherwise empty lecture board.',
        },
        pages: [
          {
            id: 'threat',
            narration:
              'There are men now saying that half of mathematics must be given up: the infinite sets, the existence proofs, everything that cannot be built by hand in finitely many steps. They are serious, they are not fools, and they are gaining ground.',
          },
          {
            id: 'program',
            narration:
              'His answer is to make the whole of it into an object. Write down the symbols, write down the rules for pushing them, and then prove — by methods so plain that even the objectors must accept them — that pushing them can never produce a contradiction. Secure the foundations from below and nothing above needs surrendering.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'Cantor built us a paradise. No one is going to drive us out of it. Not by argument, and certainly not by decree.',
            narration:
              'He reaches the end of the hour and drops the technical voice for the last minute of it. The hall will applaud; and in Vienna a student who has not yet published anything is reading the programme very carefully indeed.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'hilbert.programLaunched', value: true },
          { type: 'resources', effects: { standing: 2, proof: 1 } },
        ],
        historicalNote:
          'Hilbert’s programme sought finitary consistency proofs for mathematics against intuitionist restrictions, and his defence of Cantor’s set theory in these terms is documented. The wording of the dialogue is dramatized, not quoted.',
      },
    ],
  },
  {
    id: 'hilbert-encounter-godel',
    characterId: 'hilbert',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['hilbert', 'godel'],
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'human-godel',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { type: 'otherCharacterIsHuman', characterId: 'godel' },
          { type: 'otherCharacterAt', characterId: 'godel', locationId: 'konigsberg', yearTolerance: 2 },
        ],
        title: 'We Must Know',
        locationLabel: 'Königsberg',
        yearLabel: '1930',
        image: {
          setting: 'a municipal hall in a Baltic city with a radio microphone on the speakers’ table',
          year: 1930,
          characters: ['hilbert', 'godel'],
          mood: 'ceremony with something moving underneath it',
          details: ['a radio microphone', 'a civic scroll', 'rows of chairs', 'a glass of water', 'September light'],
          alt: 'A radio microphone and a civic scroll on a speakers’ table in a municipal hall.',
        },
        pages: [
          {
            id: 'homecoming',
            narration:
              'He has come east for it. They have made him an honorary citizen of the city he was born in, and there is a microphone on the table because the address will go out on the wireless. He is sixty-eight and he has travelled a day and a night to say one thing.',
          },
          {
            id: 'motto',
            speaker: 'DAVID',
            dialogue: 'There is no such thing as an unsolvable problem. In mathematics there is no ignorabimus. We must know — we will know.',
            narration:
              'He sets the civic scroll down on the table, leans in to the microphone, and does not read from the paper.',
          },
          {
            id: 'sideroom',
            narration:
              'The engineer says afterwards that he laughed at the end of it, on the disc, without meaning to. That same week, in a side room of the same conference, a very thin young logician reads out a result in a voice barely above conversation. Any system large enough for arithmetic contains true statements it cannot prove. Almost nobody in the room understands what has just happened.',
          },
          {
            id: 'after',
            speaker: 'GÖDEL',
            dialogue: 'It does not say the mathematics is wrong, Herr Geheimrat. It says the proof of its safety cannot come from inside.',
            narration: 'In the corridor afterwards the young man from Vienna is waiting, very thin, with his hat in both hands. What Hilbert does in the next minute will matter more than anything he says.',
            choices: [
              {
                id: 'we-will-know',
                label: 'Hold the line: the aim stands, the method must be widened',
                effects: [
                  { type: 'flag', flag: 'hilbert.weWillKnow', value: true },
                  { type: 'theme', theme: 'certaintyVsLimit', amount: 2 },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 1, tension: 1, flag: 'incompleteness' },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'reconsider',
                label: 'Take the young man’s pages home and read them properly',
                effects: [
                  { type: 'flag', flag: 'hilbert.foundationsShaken', value: true },
                  { type: 'theme', theme: 'certaintyVsLimit', amount: -1 },
                  { type: 'relationship', characterId: 'godel', familiarity: 2, respect: 2, flag: 'incompleteness' },
                  { type: 'resources', effects: { proof: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Hilbert delivered his "we must know, we will know" address on being made an honorary citizen of Königsberg in 1930, in the same week and city as the conference at which Gödel first announced incompleteness. There is no record of a private conversation between them; that exchange is invented, and the motto is rendered here in dramatized form.',
      },
      {
        id: 'npc-godel',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { type: 'otherCharacterIsNpc', characterId: 'godel' },
          { type: 'otherCharacterAt', characterId: 'godel', locationId: 'konigsberg', yearTolerance: 1 },
        ],
        title: 'The Week in Königsberg',
        locationLabel: 'Königsberg',
        yearLabel: '1930',
        image: {
          setting: 'a municipal hall in a Baltic city with a radio microphone and, beyond it, a small side room',
          year: 1930,
          characters: ['hilbert'],
          mood: 'ceremony with something moving underneath it',
          details: ['a radio microphone', 'a civic scroll', 'a half-open side door', 'a glass of water', 'September light'],
          alt: 'A radio microphone on a speakers’ table with a half-open side door beyond it.',
        },
        pages: [
          {
            id: 'homecoming',
            narration:
              'He has come east for it, a day and a night on the train. The city of the seven bridges has made him an honorary citizen and the address will go out on the wireless, and he is sixty-eight, retired this year, home for the first time in a long while.',
          },
          {
            id: 'motto',
            speaker: 'DAVID',
            dialogue: 'For us there is no ignorabimus. Not in mathematics. We must know — we will know.',
            narration: 'He leans in to the microphone. He means what follows as a working instruction, and it will be received as a benediction, which is not the same thing.',
          },
          {
            id: 'after',
            narration:
              'In a side room the same week, a young logician from Vienna reads out three sentences in a quiet voice. Nobody comes and tells Hilbert. The result will reach him in print, months later, and it will say that no system big enough for arithmetic can prove its own consistency from inside.',
            choices: [
              {
                id: 'we-will-know',
                label: 'Hold the line: the aim stands, the method must be widened',
                effects: [
                  { type: 'flag', flag: 'hilbert.weWillKnow', value: true },
                  { type: 'theme', theme: 'certaintyVsLimit', amount: 2 },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 1, tension: 1, flag: 'incompleteness' },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'reconsider',
                label: 'Send for everything the young man has written and read it properly',
                effects: [
                  { type: 'flag', flag: 'hilbert.foundationsShaken', value: true },
                  { type: 'theme', theme: 'certaintyVsLimit', amount: -1 },
                  { type: 'relationship', characterId: 'godel', familiarity: 2, respect: 2, flag: 'incompleteness' },
                  { type: 'resources', effects: { proof: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Hilbert’s Königsberg address and Gödel’s announcement of incompleteness took place in the same city in the same week of 1930. The motto is rendered in dramatized form and the interior reaction is invented.',
      },
      {
        id: 'by-post',
        conditions: [{ type: 'yearAtLeast', year: 1931 }],
        title: 'Three Sentences in the Post',
        yearLabel: '1931–1933',
        image: {
          setting: 'a study with an offprint open at a numbered theorem and a cold cup beside it',
          year: 1931,
          characters: ['hilbert'],
          mood: 'the ground moving',
          details: ['an offprint open at a theorem', 'a cold cup', 'a pencil snapped in two', 'the programme notes underneath', 'grey morning'],
          alt: 'An offprint open at a numbered theorem beside a cold cup and a broken pencil.',
        },
        pages: [
          {
            id: 'offprint',
            narration:
              'The offprint arrives in the ordinary post from Vienna, thirty pages, no covering letter of consequence. He reads it standing up in the hall with his coat still on and does not get past the first theorem before he has to sit down.',
          },
          {
            id: 'meaning',
            narration:
              'It does not say that mathematics is false. It says something quieter and harder: that the safety of the house cannot be established from inside the house. Ten years of work, answered — not refuted, answered — by a young man he has never met.',
          },
          {
            id: 'after',
            speaker: 'DAVID',
            dialogue: 'He is right. That is the annoying part. He is entirely right, and now we must find out what is still possible.',
            narration: 'He puts the offprint on top of the programme notes rather than under them, and stands looking at the pile.',
            choices: [
              {
                id: 'we-will-know',
                label: 'Hold the line: the aim stands, the method must be widened',
                effects: [
                  { type: 'flag', flag: 'hilbert.weWillKnow', value: true },
                  { type: 'theme', theme: 'certaintyVsLimit', amount: 2 },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 1, tension: 1, flag: 'incompleteness' },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'reconsider',
                label: 'Rebuild the programme around what can still be proved',
                effects: [
                  { type: 'flag', flag: 'hilbert.foundationsShaken', value: true },
                  { type: 'theme', theme: 'certaintyVsLimit', amount: -1 },
                  { type: 'relationship', characterId: 'godel', familiarity: 1, respect: 2, flag: 'incompleteness' },
                  { type: 'resources', effects: { proof: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Gödel published the incompleteness theorems in 1931; work on Hilbert’s programme continued afterwards in modified, weaker forms. Hilbert’s immediate private reaction is not on record and is dramatized here.',
      },
    ],
  },
  {
    id: 'hilbert-crisis-closing',
    characterId: 'hilbert',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'program',
        conditions: [{ type: 'projectCompleted', projectId: 'hilbert-formalist-program' }],
        title: 'What Survives the Answer',
        yearLabel: '1933',
        image: {
          setting: 'a desk where a programme’s pages have been re-sorted into two piles',
          year: 1933,
          characters: ['hilbert'],
          mood: 'sober continuation',
          details: ['two unequal piles of paper', 'a pencil', 'a closed inkwell', 'a coat on the chair', 'late light'],
          alt: 'Two unequal piles of paper sorted on a desk beside a closed inkwell.',
        },
        pages: [
          {
            id: 'sorting',
            narration:
              'He sorts the programme into what is dead and what is not, and the second pile is larger than he feared in the first week and smaller than he claimed in public. Proof itself has become an object you can study. That was his idea and it survives.',
          },
          {
            id: 'ahead',
            narration:
              'He is seventy-one and retired and the town is changing colour outside the window. He has spent his life making mathematics safe from mathematicians. Nobody warned him which direction the danger would actually come from.',
          },
        ],
        historicalNote:
          'Hilbert’s programme was not abandoned after 1931 but continued in modified forms; proof theory survives as a field. The closing mood is dramatized.',
      },
      {
        id: 'school',
        conditions: [
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'projectCompleted', projectId: 'hilbert-recruits-noether' },
        ],
        title: 'The Best Two Hundred Yards in the World',
        yearLabel: '1933',
        image: {
          setting: 'a departmental corridor with many named doors, seen from one end',
          year: 1933,
          characters: ['hilbert'],
          mood: 'pride with a shadow on it',
          details: ['a corridor of named doors', 'a noticeboard thick with seminars', 'bicycles outside', 'worn linoleum', 'late light'],
          alt: 'A long departmental corridor lined with named doors and a crowded noticeboard.',
        },
        pages: [
          {
            id: 'corridor',
            narration:
              'Every door on this corridor has somebody behind it who came here because of something he started. Americans, Hungarians, a Japanese analyst, half the algebra of the coming century arguing in three languages by the stairs.',
          },
          {
            id: 'shadow',
            narration:
              'He walks the length of it at the end of the day, out of vanity, and enjoys it. Outside, on the noticeboard by the porter’s lodge, there is a new kind of announcement pinned up, and he has not read it yet.',
          },
        ],
        historicalNote: 'Göttingen under Hilbert became the leading international centre of mathematics before 1933.',
      },
      {
        id: 'default',
        title: 'A Smaller Department',
        yearLabel: '1933',
        image: {
          setting: 'a quiet department at the end of term, few doors open',
          year: 1933,
          characters: ['hilbert'],
          mood: 'stalled ambition',
          details: ['a thin noticeboard', 'two open doors', 'a swept corridor', 'an unused seminar room', 'late light'],
          alt: 'A nearly empty corridor with a thin noticeboard and two open doors.',
        },
        pages: [
          {
            id: 'quiet',
            narration:
              'The seminar rooms are booked twice a week instead of six times. The work he has done is good and it has stayed in his own hands, which is where good work goes to be forgotten.',
          },
          {
            id: 'outside',
            narration:
              'Outside there are more uniforms on the street this spring than last. He notices it the way one notices weather, and goes in, and it will not be possible to keep doing that for much longer.',
          },
        ],
        historicalNote: 'A dramatized closing for a life that did not build the Göttingen school.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Chapter VI — Legacy
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-legacy-opening',
    characterId: 'hilbert',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds: ['hilbert', 'noether'],
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'The Lists',
        locationLabel: 'Göttingen',
        yearLabel: '1933',
        image: {
          setting: 'a university noticeboard in spring with a typed official notice pinned to it',
          year: 1933,
          characters: ['hilbert'],
          mood: 'cold disbelief',
          details: ['a typed official notice', 'drawing pins', 'a cleared pigeonhole', 'a packing crate in a corridor', 'April light'],
          alt: 'A typed official notice pinned to a university noticeboard beside cleared pigeonholes.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'The notice is typed, correctly spelled, and signed by the ministry. It says which of his colleagues may no longer teach. It is not long. He reads it twice because the first time he cannot make the sentences mean what they mean.',
          },
          {
            id: 'leaving',
            narration:
              'Within a year the corridor empties. Some go to America, some to England; the algebraist he fought four years for takes a post at a women’s college across an ocean and writes to say the students are good. Packing crates stand outside doors for weeks.',
          },
          {
            id: 'porter',
            speaker: 'THE PORTER',
            dialogue: 'Shall I take the names off the doors, Herr Geheimrat, or leave them?',
            narration: 'The porter finds him standing in the corridor with his hat in his hand, and asks the practical question, because somebody has to.',
          },
          {
            id: 'decision',
            narration:
              'He is seventy-one, retired, honoured, and still asked to functions by men who do not read. Sooner or later one of them will ask him how the mathematics here is getting on.',
            choices: [
              {
                id: 'answer',
                label: 'Answer the question exactly, whoever is asking',
                effects: [
                  { type: 'flag', flag: 'hilbert.answersPlainly', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'silence',
                label: 'Say nothing at all and let the empty rooms speak',
                effects: [
                  { type: 'flag', flag: 'hilbert.keepsSilent', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -1 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
              {
                id: 'plead',
                label: 'Write letters for individuals, one name at a time',
                effects: [
                  { type: 'flag', flag: 'hilbert.writesLetters', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { network: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The 1933 dismissals removed most of Göttingen’s mathematical faculty; Noether emigrated to Bryn Mawr. The porter’s line is dramatized.',
      },
      {
        id: 'default',
        title: 'Notices, 1933',
        yearLabel: '1933',
        image: {
          setting: 'a street with a newspaper stand and official notices freshly pasted on a wall',
          year: 1933,
          characters: ['hilbert'],
          mood: 'cold disbelief',
          details: ['freshly pasted notices', 'a newspaper stand', 'a bicycle', 'wet paste on stone', 'April light'],
          alt: 'Freshly pasted official notices on a wall beside a newspaper stand.',
        },
        pages: [
          {
            id: 'notice',
            narration:
              'The notices go up on walls all over the country in the same week, in the same typeface. They say which people may no longer teach. He reads one through twice, standing in the street with his bicycle.',
          },
          {
            id: 'letters',
            narration:
              'The letters start arriving soon after: colleagues asking whether he knows of anything, anywhere, for a man of forty with two children and no post. He answers every one of them and can do almost nothing.',
          },
          {
            id: 'friend',
            speaker: 'A COLLEAGUE, WRITING',
            dialogue: 'I am told my subject continues without me. I should like to know where.',
            narration: 'One of the letters he does not put in the drawer. It is a single sentence long, and he reads it several times before he folds it into his coat.',
          },
          {
            id: 'decision',
            narration:
              'He is seventy-one and still asked to functions by men who do not read. Sooner or later one of them will ask him how German mathematics is getting on.',
            choices: [
              {
                id: 'answer',
                label: 'Answer the question exactly, whoever is asking',
                effects: [
                  { type: 'flag', flag: 'hilbert.answersPlainly', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 2 },
                  { type: 'resources', effects: { standing: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'silence',
                label: 'Say nothing at all and let the empty rooms speak',
                effects: [
                  { type: 'flag', flag: 'hilbert.keepsSilent', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: -1 },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
              {
                id: 'plead',
                label: 'Write letters for individuals, one name at a time',
                effects: [
                  { type: 'flag', flag: 'hilbert.writesLetters', value: true },
                  { type: 'theme', theme: 'dutyVsConscience', amount: 1 },
                  { type: 'resources', effects: { network: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote: 'The 1933 dismissals of Jewish and politically suspect academics are documented. Correspondence here is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-card-empty-table',
    characterId: 'hilbert',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 84 },
    once: true,
    replacesContextCardId: 'hilbert-card-1933-purge',
    variants: [
      {
        id: 'answered',
        conditions: [
          { type: 'yearAtLeast', year: 1934 },
          { type: 'choiceWas', choiceKey: 'hilbert-legacy-opening:decision', choiceId: 'answer' },
        ],
        title: 'A Table Nearly Empty',
        yearLabel: '1934',
        image: {
          setting: 'a formal banquet table with several places conspicuously unoccupied',
          year: 1934,
          characters: ['hilbert'],
          mood: 'polite room, unbearable question',
          details: ['unoccupied place settings', 'folded napkins', 'a menu card', 'candlelight', 'dark panelling'],
          alt: 'A formal banquet table with several place settings left conspicuously unoccupied.',
        },
        pages: [
          {
            id: 'dinner',
            narration:
              'The minister is seated beside him because that is what protocol requires when the state honours a subject it has just dismembered. The soup is good. Four chairs at this table have nobody in them and everybody knows why.',
          },
          {
            id: 'question',
            speaker: 'THE MINISTER',
            dialogue: 'And so, Herr Professor — has mathematics here really suffered by the removal of the Jewish influence?',
            narration: 'It is asked pleasantly, as small talk, in the expectation of being reassured.',
          },
          {
            id: 'answer',
            speaker: 'DAVID',
            dialogue: 'Suffered? It has not suffered, Herr Minister. It no longer exists.',
            narration:
              'He puts down his spoon. Whatever the table is expecting, it is not the plain answer, and the plain answer is the only kind he has given anybody in seventy years.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1933-purge' },
          { type: 'flag', flag: 'hilbert.saidItAloud', value: true },
          { type: 'resources', effects: { wellbeing: -1, network: -2 } },
        ],
        historicalNote:
          'Hilbert is widely reported to have told the Nazi education minister at a banquet that mathematics at Göttingen no longer existed. The exchange is a well-known report rather than a verified transcript; the surrounding detail is dramatized.',
      },
      {
        id: 'silent',
        conditions: [
          { type: 'yearAtLeast', year: 1934 },
          { type: 'choiceWas', choiceKey: 'hilbert-legacy-opening:decision', choiceId: 'silence' },
        ],
        title: 'The Question at Dinner',
        yearLabel: '1934',
        image: {
          setting: 'a formal banquet table seen past an untouched glass, several places empty',
          year: 1934,
          characters: ['hilbert'],
          mood: 'silence chosen and regretted',
          details: ['an untouched wine glass', 'empty place settings', 'a menu card', 'candlelight', 'dark panelling'],
          alt: 'An untouched wine glass in the foreground of a banquet table with empty places.',
        },
        pages: [
          {
            id: 'question',
            speaker: 'THE MINISTER',
            dialogue: 'Has mathematics here really suffered by the removal of the Jewish influence?',
            narration:
              'The question arrives between courses, pleasantly, in the expectation of being reassured. Four chairs at this table have nobody in them.',
          },
          {
            id: 'silence',
            narration:
              'He looks at the man and says nothing at all, for long enough that the table hears the nothing. Then he asks after the minister’s journey. On the way home he decides that he was a coward and that the empty chairs had said it better anyway, and neither thought lets him sleep.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1933-purge' },
          { type: 'flag', flag: 'hilbert.saidNothing', value: true },
          { type: 'resources', effects: { wellbeing: -2 } },
        ],
        historicalNote:
          'The reported exchange with the education minister is documented in the literature. This variant follows a life in which the answer was withheld.',
      },
      {
        id: 'default',
        title: 'What Remains of It',
        yearLabel: '1934',
        image: {
          setting: 'a departmental corridor where most nameplates have been unscrewed from the doors',
          year: 1934,
          characters: ['hilbert'],
          mood: 'quiet devastation',
          details: ['bare screw holes on doors', 'one remaining nameplate', 'a stack of forwarding addresses', 'an unswept floor', 'winter light'],
          alt: 'Doors along a corridor showing bare screw holes where nameplates have been removed.',
        },
        pages: [
          {
            id: 'doors',
            narration:
              'The nameplates come off the doors with a screwdriver, four screws each, and leave four small holes. He counts the doors on his way out because counting is what he does when he cannot do anything.',
          },
          {
            id: 'sum',
            speaker: 'DAVID',
            dialogue: 'People ask whether the mathematics here has suffered. It has not suffered. There is none of it left to suffer.',
            narration:
              'There is nobody in the corridor to say it to, which is the only audience the building has left.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'hilbert-card-1933-purge' },
          { type: 'resources', effects: { wellbeing: -1, network: -2 } },
        ],
        historicalNote:
          'The dismantling of Göttingen mathematics in 1933–1934 and Hilbert’s reported verdict on it are documented. The corridor scene is dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-personal-empty-hall',
    characterId: 'hilbert',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'isolated',
        conditions: [
          { type: 'yearAtLeast', year: 1936 },
          { not: { type: 'resourceAtLeast', resource: 'network', value: 3 } },
        ],
        title: 'The Walk, Alone',
        yearLabel: '1936–1942',
        image: {
          setting: 'a small-town street in wartime with shuttered shops and an old man walking',
          year: 1939,
          characters: ['hilbert'],
          mood: 'reduced world, unbroken habit',
          details: ['shuttered shopfronts', 'a walking stick', 'ration notices', 'bare lime trees', 'flat winter light'],
          alt: 'A shuttered small-town street with bare lime trees under flat winter light.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'He still goes out at five. The route is the same and there is nobody on it. The bookshop has different books in the window now and he has stopped looking in.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'They asked me once whether a problem can be beyond us. I said no, and I say no now, and there is no one left in this town to argue with me about it.',
            narration: 'At the corner where the walk used to turn he stops. The wind is off the north and he will go home earlier than he once did, but first he says it out loud, to the street.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1 } }],
        historicalNote: 'Hilbert’s last years in an emptied Göttingen are documented in outline. This scene is dramatized.',
      },
      {
        id: 'visited',
        conditions: [{ type: 'yearAtLeast', year: 1936 }],
        title: 'Visitors',
        yearLabel: '1936–1942',
        image: {
          setting: 'a front room with two chairs, tea, and a suitcase by the door',
          year: 1939,
          characters: ['hilbert'],
          mood: 'brief warmth, imminent departure',
          details: ['two chairs and a low table', 'a suitcase by the door', 'a tea service', 'an offprint from abroad', 'lace curtain'],
          alt: 'Two chairs and a tea service in a front room with a suitcase standing by the door.',
        },
        pages: [
          {
            id: 'visit',
            narration:
              'They come through when they can, on their way out of the country: a former student with a visa in his coat, a colleague with two hours between trains. The suitcase never leaves the hallway.',
          },
          {
            id: 'said',
            speaker: 'DAVID',
            dialogue: 'Take the seventh problem with you. It is no use here. It has never been anybody’s property anyway.',
            narration:
              'He sees them to the gate every time and stands there until the corner takes them. At the gate he gives them something to carry, because there is nothing else in the house worth taking.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1, network: 1 } }],
        historicalNote: 'Emigrating mathematicians did pass through Göttingen in the later 1930s. The scene and dialogue are dramatized.',
      },
    ],
  },
  {
    id: 'hilbert-legacy-closing',
    characterId: 'hilbert',
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
              'hilbert-finiteness-theorem',
              'hilbert-foundations-of-geometry',
              'hilbert-problems',
              'hilbert-integral-equations',
              'hilbert-recruits-noether',
              'hilbert-formalist-program',
            ],
            count: 4,
          },
        ],
        title: 'February',
        locationLabel: 'Göttingen',
        yearLabel: '1943',
        image: {
          setting: 'a small winter funeral procession in a university town, very few figures',
          year: 1943,
          characters: ['hilbert'],
          mood: 'immense quiet',
          details: ['a handful of mourners', 'snow on a gravel path', 'bare lime trees', 'a closed church door', 'grey sky'],
          alt: 'A handful of figures on a snowy gravel path beneath bare lime trees.',
        },
        pages: [
          {
            id: 'funeral',
            narration:
              'A dozen people come. The men who would have filled the church are in America, or England, or dead, and the ones who are still here have found reasons. The town clock does what it always does.',
          },
          {
            id: 'stone',
            narration:
              'The stone, when it is cut, carries six words and no titles. We must know. We will know. Half the world is at war and the sentence sits there on a slab in a provincial cemetery, waiting, in the imperative.',
          },
        ],
        historicalNote:
          'Hilbert died in Göttingen in February 1943 and few people attended the funeral; his gravestone carries his Königsberg motto.',
      },
      {
        id: 'default',
        title: 'A Grave with Fewer Words',
        yearLabel: '1943',
        image: {
          setting: 'a winter cemetery path with a plain unmarked plot',
          year: 1943,
          characters: ['hilbert'],
          mood: 'plain ending',
          details: ['a plain plot', 'snow on gravel', 'a wooden marker', 'bare trees', 'grey sky'],
          alt: 'A plain plot with a wooden marker on a snowy cemetery path.',
        },
        pages: [
          {
            id: 'end',
            narration:
              'He dies in February in the middle of a war, in a town he taught in for a long time, and the announcement runs to four lines in a paper nobody outside the district reads.',
          },
          {
            id: 'quiet',
            narration:
              'The mathematics he did is real and is used, and the men who use it mostly do not know whose it was. That is not the worst fate available in 1943, and part of him — the part that gave away twenty-three questions and never asked for them back — would have said it was the right one.',
          },
        ],
        historicalNote: 'Hilbert died in February 1943. This closing follows a life whose public work stayed smaller.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Epilogue
  // -------------------------------------------------------------------------
  {
    id: 'hilbert-epilogue',
    characterId: 'hilbert',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'the-agenda',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'hilbert-finiteness-theorem',
              'hilbert-foundations-of-geometry',
              'hilbert-problems',
              'hilbert-integral-equations',
              'hilbert-recruits-noether',
              'hilbert-formalist-program',
            ],
            count: 5,
          },
        ],
        title: 'Numbers Without an Owner',
        yearLabel: 'after',
        image: {
          setting: 'a lecture hall in another country and another decade, a numbered problem chalked at the top of the board',
          year: 1960,
          characters: ['hilbert'],
          mood: 'continuation beyond a life',
          details: ['a single chalked problem number', 'unfamiliar handwriting', 'rows of young listeners', 'a modern clock', 'wide windows'],
          alt: 'A single problem number chalked at the top of a board in a crowded modern lecture hall.',
        },
        pages: [
          {
            id: 'after',
            narration:
              'Long after the funeral, in halls he never entered, someone still writes a number at the top of a board and everyone knows what it means. The tenth falls. The seventh falls. Some of them turn out to be the wrong question, which is its own kind of answer.',
          },
          {
            id: 'limits',
            narration:
              'The young logician’s theorem stands beside the programme rather than on top of it: proof itself became a thing you could hold up to the light, and the tool for holding it up was his. The certainty did not survive. The method did, and it went further than the certainty could have.',
          },
          {
            id: 'voice',
            speaker: 'DAVID',
            dialogue: 'I never wanted to be the man who finished it. I wanted to be the one who wrote out the list and left the room.',
            narration: 'Six words on a stone in a provincial cemetery, in the imperative, addressed to everyone who comes after. He had said the plainer version years earlier, to a room, and meant it exactly as it sounded.',
          },
        ],
        historicalNote:
          'Hilbert’s problems drove much of twentieth-century mathematics, and proof theory outlived the finitary programme. The closing line is dramatized.',
      },
      {
        id: 'held-the-line',
        conditions: [{ type: 'choiceWas', choiceKey: 'hilbert-encounter-godel:after', choiceId: 'we-will-know' }],
        title: 'No Ignorabimus',
        yearLabel: 'after',
        image: {
          setting: 'a gravestone cut with six words, seen in low winter light',
          year: 1950,
          characters: ['hilbert'],
          mood: 'stubborn conviction outliving its author',
          details: ['a plain cut gravestone', 'six words in the stone', 'frost in the letters', 'a bare hedge', 'low sun'],
          alt: 'A plain gravestone cut with a short inscription, frost caught in the letters.',
        },
        pages: [
          {
            id: 'stone',
            narration:
              'He never withdrew the sentence. The result from Vienna showed that the safety of the house cannot be certified from within it, and he answered by widening the methods rather than lowering the aim, and went on issuing instructions to a century that had stopped listening.',
          },
          {
            id: 'after',
            narration:
              'Which turned out to be the correct response, though not for the reason he gave. Everything he asked for was harder than he thought and more of it was possible than the pessimists claimed.',
          },
          {
            id: 'voice',
            speaker: 'DAVID',
            dialogue: 'We must know. Say it as an order and not a hope, and then go and do the work.',
            narration: 'Six words on a stone, in the imperative, addressed to strangers who will read them without knowing whose they were.',
          },
        ],
        historicalNote:
          'Hilbert’s motto is carved on his grave in Göttingen. His response to the incompleteness results was to continue the programme in modified form. The dialogue is dramatized.',
      },
      {
        id: 'the-quiet-answer',
        conditions: [{ type: 'choiceWas', choiceKey: 'hilbert-legacy-opening:decision', choiceId: 'silence' }],
        title: 'What He Did Not Say',
        yearLabel: 'after',
        image: {
          setting: 'an empty seminar room preserved unchanged, chairs squared to the table',
          year: 1950,
          characters: ['hilbert'],
          mood: 'unfinished conscience',
          details: ['chairs squared to a table', 'a wiped board', 'a closed shutter', 'dust in still air', 'one book left behind'],
          alt: 'Chairs squared neatly to a table in an empty seminar room with a wiped board.',
        },
        pages: [
          {
            id: 'silence',
            narration:
              'The mathematics stands and will stand. The other ledger does not balance, and he knew it before the end: a table with empty chairs at it, and a question asked politely, and a man of seventy-one who had spent his life insisting that every question has an answer choosing not to give one.',
          },
          {
            id: 'after',
            narration:
              'The people who left carried his subject out with them in their luggage. It survived. He is not the reason it survived, and he would have wanted that noted.',
          },
          {
            id: 'voice',
            speaker: 'DAVID',
            dialogue: 'Ask me about a theorem and I will tell you exactly. Ask me about that evening and I will tell you I said nothing.',
            narration: 'The stone says six words all the same, because he wrote them long before that dinner, and stone does not revise.',
          },
        ],
        historicalNote:
          'Hilbert’s reported reply to the education minister is well known; this variant follows a life in which it was never given.',
      },
      {
        id: 'default',
        title: 'The Drawer',
        yearLabel: 'after',
        image: {
          setting: 'a desk drawer standing open on bundled notebooks tied with tape',
          year: 1945,
          characters: ['hilbert'],
          mood: 'quiet accounting',
          details: ['bundled notebooks tied with tape', 'an open drawer', 'faded ink', 'a paper label', 'afternoon light'],
          alt: 'An open desk drawer containing notebooks bundled and tied with tape.',
        },
        pages: [
          {
            id: 'drawer',
            narration:
              'The drawer is opened after the war by somebody sorting a house. Notebooks in a small hard hand, tied in bundles, most of them beginnings: questions numbered and never sent anywhere.',
          },
          {
            id: 'after',
            narration:
              'Some of the questions in that drawer get asked again by other people in other countries, in ignorance, decades later, and are hard for exactly the reasons he suspected. A problem does not need a signature to be worth working on.',
          },
          {
            id: 'voice',
            speaker: 'DAVID',
            dialogue: 'Write it so a stranger can take it up without me. If you have done that, it does not matter much what happens next.',
            narration: 'The tape on the bundles is dry and gives way at the first pull. Inside the cover of the first notebook there is an instruction, written to himself thirty years earlier.',
          },
        ],
        historicalNote: 'A dramatized closing for a life whose work stayed largely unpublished.',
      },
    ],
  },
];
