import type { StoryScene } from '../../types/story';

const sourceIds = ['einstein'];

export const EINSTEIN_REPLACED_CONTEXT_CARDS = [
  'einstein-card-1905',
  'einstein-card-1914-war',
  'einstein-card-1919-fame',
  'einstein-card-1933-emigration',
  'einstein-card-1939-letter',
] as const;

export const EINSTEIN_STORY_SCENES: StoryScene[] = [
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
        locationLabel: 'Europe',
        yearLabel: '1879',
        image: {
          setting: 'industrial Europe at the end of the nineteenth century',
          year: 1879,
          characters: ['einstein'],
          mood: 'quiet anticipation, grounded historical realism',
          details: ['rail lines', 'telegraph wires', 'gaslit streets', 'a modest middle-class household'],
          alt: 'A restrained historical illustration of late nineteenth-century Europe and a modest household.',
        },
        pages: [
          {
            id: 'world',
            narration:
              'Factories, railways, telegraph lines, and electric experiments are changing Europe. Physics seems powerful enough to describe nearly everything people can see, yet light, matter, space, and time still hide contradictions.',
          },
          {
            id: 'ulm',
            narration:
              'In Ulm, Germany, a child is born into an ordinary family. No one in the room knows what he will become. More importantly, no one knows what kind of century he has entered.',
          },
        ],
        historicalNote: 'The setting and date are historical. The narration is dramatized connective writing, not a quotation.',
      },
    ],
  },
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
        title: 'The Hidden Force',
        locationLabel: 'Munich',
        yearLabel: '1880s',
        image: {
          setting: 'a middle-class home in Munich in the 1880s',
          year: 1885,
          characters: ['einstein'],
          mood: 'intimate curiosity',
          details: ['small magnetic compass', 'wooden table', 'period clothing', 'soft window light'],
          alt: 'Young Albert Einstein examining a small compass in a nineteenth-century home.',
        },
        pages: [
          {
            id: 'compass',
            narration:
              'The needle turns although no hand touches it. For a child fascinated by causes, the little compass suggests something unsettling and wonderful: the world can be governed by forces that cannot be seen.',
          },
          {
            id: 'question',
            speaker: 'ALBERT',
            dialogue: 'If nothing is touching it, then what tells it where to point?',
            narration: 'The line is dramatized. The remembered fascination with the compass is historical.',
          },
        ],
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
    trigger: { event: 'afterAction', priority: 55 },
    once: true,
    variants: [
      {
        id: 'aarau',
        conditions: [
          { type: 'yearAtLeast', year: 1895 },
          { type: 'resourceAtLeast', resource: 'theory', value: 1 },
        ],
        title: 'Chasing Light',
        locationLabel: 'Aarau',
        yearLabel: '1895–1896',
        image: {
          setting: 'a quiet Swiss schoolroom and hillside near Aarau',
          year: 1895,
          characters: ['einstein'],
          mood: 'restless imagination',
          details: ['notebook', 'sunlight through windows', 'Swiss town beyond the glass'],
          alt: 'A teenage Einstein thinking beside a sunlit schoolroom window in Aarau.',
        },
        pages: [
          {
            id: 'thought',
            narration:
              'A question keeps returning: what would happen if someone could move beside a beam of light? It is not yet a theory, only the sort of impossible question that refuses to leave.',
          },
        ],
        effects: [{ type: 'flag', flag: 'einstein.lightBeamThread', value: true }],
      },
      {
        id: 'divergent',
        title: 'A Persistent Question',
        image: {
          setting: 'a late nineteenth-century European study',
          year: 1896,
          characters: ['einstein'],
          mood: 'quiet intellectual restlessness',
          details: ['notebook', 'window light', 'simple desk'],
          alt: 'A teenage Einstein writing alone at a simple desk.',
        },
        pages: [
          {
            id: 'thought',
            narration:
              'Whatever route his education has taken, Albert keeps returning to questions about light, motion, and what an observer can actually measure.',
          },
        ],
        effects: [{ type: 'flag', flag: 'einstein.lightBeamThread', value: true }],
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
        id: 'default',
        title: 'Toward Zürich',
        locationLabel: 'Switzerland',
        yearLabel: '1896',
        image: {
          setting: 'a Swiss railway platform in the 1890s',
          year: 1896,
          characters: ['einstein'],
          mood: 'forward motion and uncertainty',
          details: ['travel case', 'steam train', 'school books'],
          alt: 'A young Einstein on a Swiss railway platform with books and a travel case.',
        },
        pages: [
          {
            id: 'close',
            narration:
              'Childhood questions are becoming professional ambitions. The next problem is less romantic: entering the world of universities, professors, examinations, and reputations.',
          },
        ],
      },
    ],
  },
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
        title: 'The Polytechnic',
        locationLabel: 'Zürich',
        yearLabel: '1896',
        image: {
          setting: 'Swiss Federal Polytechnic in Zürich at the end of the nineteenth century',
          year: 1896,
          characters: ['einstein'],
          mood: 'busy academic life, slightly austere',
          details: ['lecture hall', 'chalkboard', 'students in period clothing', 'mathematical notes'],
          alt: 'Einstein entering a crowded late nineteenth-century lecture hall in Zürich.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'Zürich offers what Albert has wanted: serious physics, mathematics, laboratories, and classmates who can challenge him. It also asks for something he has never enjoyed very much—fitting smoothly into an institution.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-grossmann-notes',
    characterId: 'einstein',
    chapterId: 'education',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 45 },
    once: true,
    variants: [
      {
        id: 'zurich',
        conditions: [
          { type: 'locationIs', locationId: 'zurich' },
          { type: 'resourceAtLeast', resource: 'network', value: 2 },
        ],
        title: 'A Friend Who Keeps Better Notes',
        locationLabel: 'Zürich',
        image: {
          setting: 'student study room in Zürich around 1899',
          year: 1899,
          characters: ['einstein'],
          mood: 'friendly academic concentration',
          details: ['careful mathematics notes', 'coffee cups', 'books', 'chalkboard'],
          alt: 'Two university students comparing mathematical notes in a Zürich study room.',
        },
        pages: [
          {
            id: 'exchange',
            narration:
              'Marcel Grossmann is methodical where Albert is improvisational. Their friendship becomes useful precisely because their strengths are not the same.',
          },
          {
            id: 'dialogue',
            speaker: 'GROSSMANN',
            dialogue: 'You might find the mathematics easier if you attended the mathematics lectures.',
            narration: 'Dramatized dialogue based on their documented student friendship and contrasting academic habits.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 0 },
          { type: 'flag', flag: 'einstein.grossmannThread', value: true },
          { type: 'theme', theme: 'intuitionVsFormalism', amount: 1 },
        ],
      },
      {
        id: 'fallback',
        title: 'Different Strengths',
        image: {
          setting: 'a Zürich student study room around 1899',
          year: 1899,
          characters: ['einstein'],
          mood: 'academic concentration',
          details: ['mathematical notes', 'books', 'chalkboard'],
          alt: 'Einstein studying mathematics in a Zürich student room.',
        },
        pages: [
          {
            id: 'exchange',
            narration:
              'Einstein discovers that independence is useful, but so are colleagues whose mathematical habits differ from his own.',
          },
        ],
        effects: [{ type: 'flag', flag: 'einstein.grossmannThread', value: true }],
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
        id: 'outsider',
        conditions: [{ type: 'resourceAtLeast', resource: 'standing', value: 0 }],
        title: 'A Diploma Is Not a Job',
        locationLabel: 'Zürich',
        yearLabel: '1900',
        image: {
          setting: 'a Zürich university corridor after graduation',
          year: 1900,
          characters: ['einstein'],
          mood: 'uncertain professional future',
          details: ['diploma folder', 'empty corridor', 'letters'],
          alt: 'Einstein holding papers in a quiet university corridor after graduation.',
        },
        pages: [
          {
            id: 'job',
            narration:
              'The diploma settles one question and opens another. Academic physics is a profession, and professions have gatekeepers. Albert now needs someone willing to hire him.',
          },
        ],
      },
    ],
  },
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
        id: 'bern',
        conditions: [{ type: 'locationIs', locationId: 'bern' }],
        title: 'Ideas After Office Hours',
        locationLabel: 'Bern',
        yearLabel: '1900s',
        image: {
          setting: 'Swiss patent office in Bern in the early twentieth century',
          year: 1902,
          characters: ['einstein'],
          mood: 'quiet routine with intellectual energy underneath',
          details: ['wooden desks', 'patent drawings', 'mechanical diagrams', 'stacks of paper'],
          alt: 'Einstein at a wooden desk surrounded by patent drawings in early twentieth-century Bern.',
        },
        pages: [
          {
            id: 'office',
            narration:
              'The work is technical, regular, and far from a university chair. It also leaves Albert outside the hierarchy of academic physics, with problems of light, atoms, and motion waiting for the hours he can claim as his own.',
          },
        ],
      },
      {
        id: 'alternate-career',
        title: 'A Different Beginning',
        image: {
          setting: 'an early twentieth-century European academic office',
          year: 1902,
          characters: ['einstein'],
          mood: 'promising but demanding professional life',
          details: ['blackboard', 'lecture notes', 'student papers'],
          alt: 'A young Einstein preparing physics notes in an early twentieth-century academic office.',
        },
        pages: [
          {
            id: 'different',
            narration:
              'Historically, Einstein spent these years at the Bern Patent Office. This timeline has placed him elsewhere. The questions are familiar; the daily life surrounding them is not.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-photoelectric-breakthrough',
    characterId: 'einstein',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-photoelectric', priority: 75 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Light in Quanta',
        image: {
          setting: 'a modest early twentieth-century study with optical notes',
          year: 1905,
          characters: ['einstein'],
          mood: 'focused discovery',
          details: ['handwritten equations', 'lamp light', 'papers about light and energy'],
          alt: 'Einstein working through equations about light and energy at a modest desk.',
        },
        pages: [
          {
            id: 'idea',
            narration:
              'A troublesome possibility becomes a scientific claim: under the right description, light itself must be treated as arriving in discrete packets of energy. The idea is useful—and deeply uncomfortable for existing theory.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-brownian-breakthrough',
    characterId: 'einstein',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-brownian-motion', priority: 72 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Evidence for the Invisible',
        image: {
          setting: 'a turn-of-the-century physics study with microscopic-motion sketches',
          year: 1905,
          characters: ['einstein'],
          mood: 'analytical clarity',
          details: ['statistical notes', 'sketched particles', 'paper-covered desk'],
          alt: 'Einstein studying statistical notes and sketches of microscopic motion.',
        },
        pages: [
          {
            id: 'atoms',
            narration:
              'Random motion on a visible scale can carry evidence about particles too small to see directly. Mathematics becomes a bridge between restless grains and the molecular world beneath them.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-special-relativity-breakthrough',
    characterId: 'einstein',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-special-relativity', priority: 80 },
    once: true,
    variants: [
      {
        id: 'bern-1905',
        conditions: [
          { type: 'locationIs', locationId: 'bern' },
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1906 },
        ],
        title: 'Two Clocks',
        locationLabel: 'Bern',
        yearLabel: '1905',
        image: {
          setting: 'Bern at dusk, with clock towers and a patent-office desk',
          year: 1905,
          characters: ['einstein'],
          mood: 'quiet conceptual breakthrough',
          details: ['two clocks', 'train line', 'patent papers', 'evening light'],
          alt: 'Einstein in Bern surrounded by clocks, train imagery, and handwritten physics notes.',
        },
        pages: [
          {
            id: 'clocks',
            narration:
              'The problem is no longer how to make moving clocks agree. It is whether there is any universal “now” for them to agree about. Space and time begin to trade their old absoluteness for rules tied to measurement and motion.',
          },
          {
            id: 'payoff',
            narration:
              'A question about chasing light, carried for years, has finally become part of a theory. The childhood puzzle did not contain the answer. It taught him not to stop asking the question.',
          },
        ],
      },
      {
        id: 'divergent',
        title: 'Relativity, Elsewhere',
        image: {
          setting: 'an early twentieth-century European study with clocks and train diagrams',
          characters: ['einstein'],
          mood: 'breakthrough in an altered timeline',
          details: ['clocks', 'train diagrams', 'equations', 'no modern objects'],
          alt: 'Einstein working with clock and train diagrams in a non-canonical early twentieth-century setting.',
        },
        pages: [
          {
            id: 'different',
            narration:
              'Historically, this work appeared from Bern in 1905. In this timeline the same conceptual revolution has arrived under different circumstances. The century has reached relativity, but by a different route.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-miracle-year',
    characterId: 'einstein',
    chapterId: 'entry',
    kind: 'breakthrough',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 68 },
    once: true,
    variants: [
      {
        id: 'multiple-1905',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['einstein-photoelectric', 'einstein-brownian-motion', 'einstein-special-relativity'],
            count: 2,
          },
          { type: 'yearAtMost', year: 1907 },
        ],
        title: 'A Remarkable Cluster of Papers',
        image: {
          setting: 'a desk covered in several completed physics manuscripts',
          year: 1905,
          characters: ['einstein'],
          mood: 'exhausted productivity rather than triumphalism',
          details: ['multiple manuscripts', 'ink pen', 'patent-office era papers'],
          alt: 'Einstein looking over several physics manuscripts spread across a desk.',
        },
        pages: [
          {
            id: 'cluster',
            narration:
              'One result would have been enough to redirect a career. Several arrive close together. The papers do not make Albert instantly famous, but they make it increasingly difficult for academic physics to ignore him.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 1 } },
          { type: 'markContextCardSeen', cardId: 'einstein-card-1905' },
        ],
      },
      {
        id: 'later',
        title: 'Recognition Builds',
        image: {
          setting: 'an early twentieth-century physics correspondence desk',
          characters: ['einstein'],
          mood: 'growing professional attention',
          details: ['letters', 'journal pages', 'handwritten equations'],
          alt: 'A desk of scientific correspondence and journals showing growing professional attention.',
        },
        pages: [
          {
            id: 'later',
            narration:
              'Einstein has assembled several important results, though not in the historical pattern of 1905. Recognition grows around the work that actually exists in this timeline.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-entry-closing',
    characterId: 'einstein',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'relativity-done',
        conditions: [{ type: 'projectCompleted', projectId: 'einstein-special-relativity' }],
        title: 'The Door Opens',
        image: {
          setting: 'a European railway platform and university correspondence around 1909',
          year: 1909,
          characters: ['einstein'],
          mood: 'career transition',
          details: ['letters', 'train', 'academic papers'],
          alt: 'Einstein preparing to leave one stage of his career with scientific papers and travel luggage.',
        },
        pages: [
          {
            id: 'close',
            narration:
              'The outsider is becoming a professional physicist. The next problems will demand more mathematics, more colleagues, and a closer relationship with the institutions he once stood outside.',
          },
        ],
      },
      {
        id: 'relativity-missed',
        title: 'A Different 1900s',
        image: {
          setting: 'a quiet early twentieth-century study at the end of a decade',
          year: 1909,
          characters: ['einstein'],
          mood: 'unfinished possibility',
          details: ['uncompleted equations', 'letters', 'calendar pages'],
          alt: 'Einstein at a desk with unfinished equations as the decade closes.',
        },
        pages: [
          {
            id: 'close',
            narration:
              'Historically, Special Relativity had already changed physics by this point. Here, that work remains unfinished. The century does not erase the missing possibility; it simply keeps moving.',
          },
        ],
      },
    ],
  },
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
        title: 'Gravity Becomes the Problem',
        image: {
          setting: 'a European university physics office in the 1910s',
          year: 1912,
          characters: ['einstein'],
          mood: 'professional confidence meeting a difficult problem',
          details: ['chalkboard geometry', 'tensor-like notation', 'books', 'letters'],
          alt: 'Einstein facing a chalkboard dense with geometry in a 1910s physics office.',
        },
        pages: [
          {
            id: 'gravity',
            narration:
              'Relativity has unsettled space and time. Gravity now refuses to fit cleanly into the new picture. The problem is physical, but solving it will require mathematical tools Einstein once treated as somebody else’s specialty.',
          },
        ],
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
    trigger: { event: 'afterAction', priority: 85 },
    once: true,
    replacesContextCardId: 'einstein-card-1914-war',
    variants: [
      {
        id: 'berlin',
        conditions: [
          { type: 'yearAtLeast', year: 1914 },
          { type: 'yearAtMost', year: 1915 },
          { type: 'locationIs', locationId: 'berlin' },
        ],
        title: 'War Fever',
        locationLabel: 'Berlin',
        yearLabel: '1914',
        image: {
          setting: 'Berlin academic district at the outbreak of World War I',
          year: 1914,
          characters: ['einstein'],
          mood: 'tense public atmosphere, non-graphic',
          details: ['newspapers', 'university corridor', 'military posters at a distance', 'colleagues in discussion'],
          alt: 'A tense but non-graphic Berlin academic scene in 1914 with newspapers and arguing colleagues.',
        },
        pages: [
          {
            id: 'war',
            narration:
              'War changes the meaning of public speech. Colleagues sign patriotic declarations; others stay quiet. Einstein’s opposition to the prevailing mood places scientific friendships inside a political crisis they cannot avoid.',
          },
          {
            id: 'choice',
            narration: 'How publicly should Einstein respond?',
            choices: [
              {
                id: 'speak',
                label: 'Join the small public opposition to war fever',
                effects: [
                  { type: 'theme', theme: 'pacifismVsThreat', amount: 2 },
                  { type: 'resources', effects: { standing: -1, network: 1 } },
                ],
              },
              {
                id: 'private',
                label: 'Keep the opposition mostly private',
                effects: [{ type: 'theme', theme: 'pacifismVsThreat', amount: 1 }],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1914-war' }],
      },
      {
        id: 'elsewhere',
        conditions: [{ type: 'yearAtLeast', year: 1914 }, { type: 'yearAtMost', year: 1916 }],
        title: 'Europe at War',
        yearLabel: '1914',
        image: {
          setting: 'European railway and newspaper stand during World War I',
          year: 1914,
          characters: ['einstein'],
          mood: 'anxious, non-graphic wartime atmosphere',
          details: ['newspapers', 'interrupted rail travel', 'civilian crowds', 'no combat imagery'],
          alt: 'A non-graphic wartime European scene with newspapers and disrupted travel.',
        },
        pages: [
          {
            id: 'war',
            narration:
              'The war reaches Einstein from a different city in this timeline, but it still reshapes institutions, travel, correspondence, and scientific loyalties across Europe.',
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'einstein-card-1914-war' }],
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
        title: 'Göttingen, This Time',
        locationLabel: 'Göttingen',
        yearLabel: '1915',
        image: {
          setting: 'mathematics institute in Göttingen in 1915',
          year: 1915,
          characters: ['einstein', 'hilbert'],
          mood: 'intense collegial competition',
          details: ['chalkboards', 'geometric equations', 'lecture papers'],
          alt: 'Einstein and Hilbert discussing equations at a Göttingen chalkboard in 1915.',
        },
        pages: [
          {
            id: 'meet',
            narration:
              'Hilbert is here because another player actually brought him here. The famous exchange of ideas is no longer guaranteed by the history book; it is happening because both lives have intersected in this game.',
          },
          {
            id: 'dialogue',
            speaker: 'HILBERT',
            dialogue: 'Then show me which part of the physics the mathematics must preserve.',
            narration: 'Dramatized dialogue. The scientific contact is historical; the exact wording is invented for the game.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, tension: 1, flag: 'relativity-1915' },
        ],
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
        locationLabel: 'Göttingen',
        yearLabel: '1915',
        image: {
          setting: 'mathematics institute in Göttingen in 1915',
          year: 1915,
          characters: ['einstein', 'hilbert'],
          mood: 'intense collegial competition',
          details: ['chalkboards', 'lecture room', 'geometric field equations'],
          alt: 'Einstein and Hilbert in a Göttingen lecture room surrounded by chalkboard equations.',
        },
        pages: [
          {
            id: 'historical',
            narration:
              'Hilbert is not controlled by a player, so his simplified canonical timeline places him in Göttingen. Einstein’s lectures and the later exchange around gravitation can therefore unfold close to the historical setting.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, tension: 1, flag: 'relativity-1915' },
        ],
      },
      {
        id: 'human-hilbert-elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1917 },
          { type: 'otherCharacterIsHuman', characterId: 'hilbert' },
        ],
        title: 'The Meeting That Does Not Happen',
        yearLabel: '1915',
        image: {
          setting: 'a 1915 physics office with unanswered correspondence',
          year: 1915,
          characters: ['einstein'],
          mood: 'historical divergence and unfinished correspondence',
          details: ['letters', 'chalkboard', 'empty second chair'],
          alt: 'Einstein beside an empty chair and scientific correspondence in 1915.',
        },
        pages: [
          {
            id: 'absence',
            narration:
              'Historically, Hilbert was in Göttingen during Einstein’s decisive work on gravitation. In this game, the human-controlled Hilbert is somewhere else. The famous intellectual contact cannot be assumed.',
          },
        ],
        effects: [{ type: 'flag', flag: 'einstein.hilbertMeetingDisrupted', value: true }],
      },
    ],
  },
  {
    id: 'einstein-general-relativity-breakthrough',
    characterId: 'einstein',
    chapterId: 'breakthrough',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-general-relativity', priority: 88 },
    once: true,
    variants: [
      {
        id: 'berlin-1915',
        conditions: [
          { type: 'locationIs', locationId: 'berlin' },
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1916 },
        ],
        title: 'Gravity as Geometry',
        locationLabel: 'Berlin',
        yearLabel: '1915',
        image: {
          setting: 'Berlin study with dense geometric field equations',
          year: 1915,
          characters: ['einstein'],
          mood: 'exhausted concentration and resolution',
          details: ['chalkboard geometry', 'manuscript pages', 'wartime newspapers kept peripheral'],
          alt: 'Einstein finishing geometric field equations in a Berlin study in 1915.',
        },
        pages: [
          {
            id: 'field',
            narration:
              'After years of false starts, mathematical detours, and physical demands, gravity is no longer treated as a force acting inside a fixed stage. The stage itself becomes part of the dynamics.',
          },
        ],
      },
      {
        id: 'divergent',
        title: 'A Different Route to Curved Space-Time',
        image: {
          setting: 'an early twentieth-century study filled with geometric physics equations',
          characters: ['einstein'],
          mood: 'major alternate-history scientific breakthrough',
          details: ['geometry', 'manuscripts', 'period desk'],
          alt: 'Einstein completing a geometric theory of gravitation in an alternate historical setting.',
        },
        pages: [
          {
            id: 'field',
            narration:
              'General Relativity exists in this timeline, but not under the same circumstances as history. The theory survives the divergence; the network of people, places, and pressures around it has changed.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-breakthrough-closing',
    characterId: 'einstein',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'gr-complete',
        conditions: [{ type: 'projectCompleted', projectId: 'einstein-general-relativity' }],
        title: 'Waiting for the Sky',
        image: {
          setting: 'European observatory planning desk near the end of World War I',
          year: 1918,
          characters: ['einstein'],
          mood: 'scientific uncertainty after theoretical work',
          details: ['eclipse charts', 'telescope plans', 'letters'],
          alt: 'Eclipse charts and telescope plans beside Einstein’s relativity papers.',
        },
        pages: [
          {
            id: 'wait',
            narration:
              'A theory can be mathematically beautiful and still be wrong. The next chapter will bring a different kind of test: what the sky itself appears to do.',
          },
        ],
      },
      {
        id: 'gr-missing',
        title: 'The Unfinished Theory',
        image: {
          setting: 'a 1918 physics office with unfinished geometry',
          year: 1918,
          characters: ['einstein'],
          mood: 'unfinished work at the close of war',
          details: ['unfinished chalkboard', 'letters', 'dim winter light'],
          alt: 'An unfinished relativity chalkboard in a quiet 1918 physics office.',
        },
        pages: [
          {
            id: 'wait',
            narration:
              'The historical Einstein had completed General Relativity by now. This Einstein has not. The missing theory will change which opportunities the next decade can offer.',
          },
        ],
      },
    ],
  },
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
        id: 'gr-ready',
        conditions: [{ type: 'projectCompleted', projectId: 'einstein-general-relativity' }],
        title: 'A Prediction Meets the Sky',
        yearLabel: '1919',
        image: {
          setting: 'astronomers preparing eclipse observations in 1919, seen through reports arriving in Europe',
          year: 1919,
          characters: ['einstein'],
          mood: 'scientific suspense',
          details: ['eclipse photographs', 'telegrams', 'newspaper office'],
          alt: 'Einstein examining eclipse reports and astronomical plates in 1919.',
        },
        pages: [
          {
            id: 'test',
            narration:
              'The war has ended. An eclipse expedition offers a public test of a prediction from General Relativity. If the observations agree, Einstein’s private mathematical struggle may become international news.',
          },
        ],
      },
      {
        id: 'no-gr',
        title: 'The World Moves On',
        yearLabel: '1919',
        image: {
          setting: 'postwar European physics community in 1919',
          year: 1919,
          characters: ['einstein'],
          mood: 'reconstruction and altered scientific opportunity',
          details: ['journals', 'letters', 'rail timetables'],
          alt: 'A postwar European scientific office in 1919 with journals and correspondence.',
        },
        pages: [
          {
            id: 'different',
            narration:
              'Historically, 1919 turned Einstein into a world-famous figure because General Relativity had made a testable prediction. Without that completed theory here, the new decade opens much more quietly.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-eclipse-confirmation-story',
    characterId: 'einstein',
    chapterId: 'crisis',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-eclipse-confirmation', priority: 90 },
    once: true,
    replacesContextCardId: 'einstein-card-1919-fame',
    variants: [
      {
        id: 'default',
        title: 'Sudden World Fame',
        yearLabel: '1919',
        image: {
          setting: 'European newspaper office and physics study after the 1919 eclipse results',
          year: 1919,
          characters: ['einstein'],
          mood: 'astonishment and unwanted celebrity',
          details: ['newspaper presses', 'telegrams', 'eclipse plate', 'crowded correspondence'],
          alt: 'Einstein surrounded by telegrams, newspapers, and an eclipse plate after the 1919 results.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The observations are reported as supporting the predicted bending of starlight. Newspapers turn a difficult theory into a public event. Einstein’s problem is suddenly no longer getting physicists to notice him—it is living with everyone else noticing him too.',
          },
        ],
        effects: [
          { type: 'resources', effects: { standing: 2, network: 1 } },
          { type: 'markContextCardSeen', cardId: 'einstein-card-1919-fame' },
          { type: 'theme', theme: 'fameVsPrivacy', amount: 2 },
        ],
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
          { type: 'yearAtMost', year: 1931 },
          { type: 'otherCharacterIsHuman', characterId: 'bohr' },
          { type: 'otherCharacterAt', characterId: 'bohr', locationId: 'brussels', yearTolerance: 1 },
        ],
        title: 'The Argument Belongs to Both Players',
        locationLabel: 'Brussels',
        yearLabel: '1927',
        image: {
          setting: 'international physics conference in Brussels in the late 1920s',
          year: 1927,
          characters: ['einstein', 'bohr'],
          mood: 'respectful but intense scientific argument',
          details: ['conference table', 'chalkboard', 'formal period clothing'],
          alt: 'Einstein and Bohr in a respectful but intense scientific discussion at a Brussels conference.',
        },
        pages: [
          {
            id: 'actual',
            narration:
              'Bohr is a human-controlled scientist in this game. The debate uses the scientific world that player has actually helped create rather than assuming every canonical development occurred on schedule.',
          },
          {
            id: 'choice',
            narration: 'How does Einstein approach the disagreement?',
            choices: [
              {
                id: 'probe',
                label: 'Press the conceptual objection carefully',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 1, tension: 1, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsQuantum', amount: 2 },
                ],
              },
              {
                id: 'listen',
                label: 'Listen longer before challenging the interpretation',
                effects: [
                  { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 2, tension: 0, flag: 'quantum-debate' },
                  { type: 'theme', theme: 'determinismVsQuantum', amount: 1 },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'npc-bohr',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1931 },
          { type: 'otherCharacterIsNpc', characterId: 'bohr' },
        ],
        title: 'Einstein and Bohr',
        locationLabel: 'Brussels',
        yearLabel: 'Late 1920s',
        image: {
          setting: 'international physics conference in Brussels in the late 1920s',
          year: 1927,
          characters: ['einstein', 'bohr'],
          mood: 'respectful scientific disagreement',
          details: ['conference room', 'chalkboard', 'formal period clothing'],
          alt: 'Einstein and Bohr debating quantum theory at a late-1920s physics conference.',
        },
        pages: [
          {
            id: 'npc',
            narration:
              'Bohr is not controlled by a player, so his canonical scientific trajectory supplies the other side of the famous dispute. Respect and disagreement can grow at the same time.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'bohr', familiarity: 1, respect: 1, tension: 1, flag: 'quantum-debate' },
          { type: 'theme', theme: 'determinismVsQuantum', amount: 2 },
        ],
      },
      {
        id: 'human-bohr-elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1932 },
          { type: 'otherCharacterIsHuman', characterId: 'bohr' },
        ],
        title: 'A Debate Delayed',
        yearLabel: 'Late 1920s',
        image: {
          setting: 'a physics conference with an empty place at a discussion table',
          year: 1927,
          characters: ['einstein'],
          mood: 'alternate-history absence',
          details: ['conference papers', 'empty chair', 'chalkboard'],
          alt: 'Einstein at a conference discussion table where an expected colleague is absent.',
        },
        pages: [
          {
            id: 'absent',
            narration:
              'The historical Einstein–Bohr debate cannot simply be pasted onto this timeline. Human-controlled Bohr is elsewhere, so the encounter is delayed or lost unless their lives cross later.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-emigration-1933',
    characterId: 'einstein',
    chapterId: 'crisis',
    kind: 'relocation',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 95 },
    once: true,
    replacesContextCardId: 'einstein-card-1933-emigration',
    variants: [
      {
        id: 'germany',
        conditions: [
          { type: 'yearAtLeast', year: 1933 },
          { type: 'yearAtMost', year: 1934 },
          { any: [{ type: 'locationIs', locationId: 'berlin' }, { type: 'visitedLocation', locationId: 'berlin' }] },
        ],
        title: 'A Country Becomes Unsafe',
        yearLabel: '1933',
        image: {
          setting: 'an academic office being packed for emigration in 1933',
          year: 1933,
          characters: ['einstein'],
          mood: 'urgent, sober, non-graphic political danger',
          details: ['suitcases', 'letters of dismissal and resignation', 'newspapers', 'closed office door'],
          alt: 'A sober, non-graphic 1933 scene of Einstein packing papers and luggage to leave Germany.',
        },
        pages: [
          {
            id: 'danger',
            narration:
              'The Nazi seizure of power is not an abstract change in government. Jewish scholars are pushed out of institutions, political threats sharpen, and Einstein’s German academic life becomes untenable.',
          },
        ],
        effects: [
          { type: 'resources', effects: { funds: -1, exposure: 1 } },
          { type: 'markContextCardSeen', cardId: 'einstein-card-1933-emigration' },
          { type: 'flag', flag: 'einstein.exileCrisisSeen', value: true },
        ],
      },
      {
        id: 'already-away',
        conditions: [{ type: 'yearAtLeast', year: 1933 }, { type: 'yearAtMost', year: 1935 }],
        title: 'The News Arrives From Germany',
        yearLabel: '1933',
        image: {
          setting: 'a study outside Germany with 1933 newspapers and letters from colleagues',
          year: 1933,
          characters: ['einstein'],
          mood: 'distance, concern, political rupture',
          details: ['newspapers', 'letters', 'travel documents', 'no graphic imagery'],
          alt: 'Einstein reading letters and newspapers from Germany in 1933 from a place of safety.',
        },
        pages: [
          {
            id: 'away',
            narration:
              'This Einstein is already away from the canonical setting, but the political rupture still reaches him through colleagues, institutions, and news. A place that once anchored his career is closing itself to people like him.',
          },
        ],
        effects: [
          { type: 'resources', effects: { exposure: 1 } },
          { type: 'markContextCardSeen', cardId: 'einstein-card-1933-emigration' },
        ],
      },
    ],
  },
  {
    id: 'einstein-crisis-closing',
    characterId: 'einstein',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A Life Divided by 1933',
        image: {
          setting: 'Atlantic travel papers and a scientific desk in the early 1930s',
          year: 1933,
          characters: ['einstein'],
          mood: 'loss, continuation, resolve',
          details: ['passport', 'letters', 'physics papers', 'travel case'],
          alt: 'Einstein’s travel papers and physics manuscripts arranged beside a packed case in the early 1930s.',
        },
        pages: [
          {
            id: 'close',
            narration:
              'Fame did not make Einstein independent of politics. The next part of his life will be shaped by exile, a new scientific community, another world war, and questions about what scientists owe the world their work helps create.',
          },
        ],
      },
    ],
  },
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
        id: 'princeton',
        conditions: [{ type: 'locationIs', locationId: 'princeton' }],
        title: 'Princeton',
        locationLabel: 'Princeton',
        yearLabel: '1933',
        image: {
          setting: 'Institute for Advanced Study environment in Princeton in the 1930s',
          year: 1933,
          characters: ['einstein'],
          mood: 'refuge and intellectual continuity',
          details: ['tree-lined path', 'papers', 'modest office', 'period bicycle'],
          alt: 'Einstein walking toward a quiet Princeton study in the 1930s.',
        },
        pages: [
          {
            id: 'ias',
            narration:
              'Princeton offers security and time to think, but not a return to the old world. Einstein enters his later career as a refugee, a celebrity, and an increasingly public symbol of science.',
          },
        ],
      },
      {
        id: 'elsewhere',
        title: 'Exile, Elsewhere',
        image: {
          setting: 'a safe 1930s academic study outside Nazi Germany',
          year: 1933,
          characters: ['einstein'],
          mood: 'alternate-history refuge',
          details: ['books', 'travel documents', 'physics papers'],
          alt: 'Einstein beginning a new academic life outside Germany in the 1930s.',
        },
        pages: [
          {
            id: 'different',
            narration:
              'Historically, Princeton became Einstein’s permanent home. This timeline has given him another refuge. The later scientific and political questions remain, but the community around him has changed.',
          },
        ],
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
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'human-godel-present',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'otherCharacterIsHuman', characterId: 'godel' },
          { type: 'otherCharacterAt', characterId: 'godel', locationId: 'princeton', yearTolerance: 2 },
        ],
        title: 'Walking Home',
        locationLabel: 'Princeton',
        image: {
          setting: 'tree-lined Princeton road in the 1940s',
          year: 1942,
          characters: ['einstein', 'godel'],
          mood: 'quiet intellectual companionship',
          details: ['autumn path', 'papers under arm', 'period coats'],
          alt: 'Einstein and Gödel walking together on a quiet Princeton road in the 1940s.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'Gödel is here because his player brought his life to Princeton. Their walks become a place where mathematics, physics, and the foundations of knowledge can meet without becoming another public performance.',
          },
        ],
        effects: [{ type: 'relationship', characterId: 'godel', familiarity: 1, respect: 2, flag: 'princeton-walks' }],
      },
      {
        id: 'npc-godel',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'otherCharacterIsNpc', characterId: 'godel' },
        ],
        title: 'Walking Home',
        locationLabel: 'Princeton',
        image: {
          setting: 'tree-lined Princeton road in the 1940s',
          year: 1942,
          characters: ['einstein', 'godel'],
          mood: 'quiet intellectual companionship',
          details: ['autumn path', 'period coats', 'papers'],
          alt: 'Einstein and Gödel walking together on a quiet Princeton road.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'Gödel’s canonical path has brought him to Princeton. Their friendship offers Einstein a rare kind of company: intellectually formidable, private, and largely outside the machinery of celebrity.',
          },
        ],
        effects: [{ type: 'relationship', characterId: 'godel', familiarity: 1, respect: 2, flag: 'princeton-walks' }],
      },
      {
        id: 'human-godel-away',
        conditions: [
          { type: 'yearAtLeast', year: 1940 },
          { type: 'locationIs', locationId: 'princeton' },
          { type: 'otherCharacterIsHuman', characterId: 'godel' },
        ],
        title: 'An Empty Path',
        locationLabel: 'Princeton',
        image: {
          setting: 'a quiet Princeton path in the 1940s with one figure walking alone',
          year: 1942,
          characters: ['einstein'],
          mood: 'gentle alternate-history absence',
          details: ['tree-lined path', 'papers', 'period coat'],
          alt: 'Einstein walking alone on a quiet Princeton path in the 1940s.',
        },
        pages: [
          {
            id: 'away',
            narration:
              'Historically, Gödel became one of Einstein’s closest Princeton companions. Human-controlled Gödel has not followed that route here, so those famous walks belong to another timeline.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-szilard-letter-story',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-szilard-letter', priority: 92 },
    once: true,
    replacesContextCardId: 'einstein-card-1939-letter',
    variants: [
      {
        id: 'default',
        title: 'A Warning',
        yearLabel: '1939',
        image: {
          setting: 'a quiet American study where a serious letter is being reviewed in 1939',
          year: 1939,
          characters: ['einstein'],
          mood: 'grave responsibility without sensationalism',
          details: ['typed letter', 'pen', 'scientific notes about fission', 'summer light'],
          alt: 'Einstein reviewing a serious typed letter about nuclear fission in 1939.',
        },
        pages: [
          {
            id: 'warning',
            narration:
              'Nuclear fission changes a political calculation. Einstein lends his name to a warning that the new physics may have military consequences. Signing a warning is not the same as building a weapon, but it ties scientific knowledge to public responsibility in a new way.',
          },
        ],
        effects: [
          { type: 'resources', effects: { exposure: 1 } },
          { type: 'markContextCardSeen', cardId: 'einstein-card-1939-letter' },
          { type: 'theme', theme: 'scienceVsResponsibility', amount: 2 },
          { type: 'flag', flag: 'einstein.signedSzilardLetter', value: true },
        ],
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
    trigger: { event: 'afterAction', priority: 88 },
    once: true,
    variants: [
      {
        id: 'signed',
        conditions: [
          { type: 'yearAtLeast', year: 1945 },
          { type: 'narrativeFlag', flag: 'einstein.signedSzilardLetter', value: true },
        ],
        title: 'August 1945',
        yearLabel: '1945',
        image: {
          setting: 'a Princeton study with 1945 newspapers reporting the atomic bomb',
          year: 1945,
          characters: ['einstein'],
          mood: 'somber reflection, non-graphic',
          details: ['newspaper headlines without readable text', 'radio', 'closed window', 'no victims or injuries'],
          alt: 'A somber, non-graphic Princeton study with newspapers and a radio reporting the atomic bomb in 1945.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'News of the atomic bomb arrives through newspapers and radio. Einstein did not work on the Manhattan Project, but the warning he signed in 1939 now sits behind him as part of a chain of decisions far larger than any one scientist.',
          },
        ],
        effects: [{ type: 'theme', theme: 'scienceVsResponsibility', amount: 2 }],
      },
      {
        id: 'not-signed',
        conditions: [{ type: 'yearAtLeast', year: 1945 }],
        title: 'August 1945',
        yearLabel: '1945',
        image: {
          setting: 'a Princeton study with 1945 newspapers reporting the atomic bomb',
          year: 1945,
          characters: ['einstein'],
          mood: 'somber reflection, non-graphic',
          details: ['newspapers without readable text', 'radio', 'physics papers', 'no victims or injuries'],
          alt: 'A somber, non-graphic study with 1945 newspapers and a radio.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The atomic bomb enters history whether or not this Einstein signed the 1939 warning. He did not work on the Manhattan Project. The event nevertheless forces the scientific community to confront how knowledge moves from theory into institutions, governments, and weapons.',
          },
        ],
        effects: [{ type: 'theme', theme: 'scienceVsResponsibility', amount: 2 }],
      },
    ],
  },
  {
    id: 'einstein-unified-field-story',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'einstein-unified-field', priority: 60 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Long Problem',
        locationLabel: 'Princeton',
        image: {
          setting: 'Einstein’s later-life study with unified-field equations',
          year: 1950,
          characters: ['einstein'],
          mood: 'persistent, solitary scientific work',
          details: ['chalkboard', 'older scientist', 'papers', 'quiet office'],
          alt: 'An older Einstein working alone on unified-field equations in a quiet study.',
        },
        pages: [
          {
            id: 'long',
            narration:
              'The search for a unified field does not deliver the kind of accepted revolution that relativity did. Its importance in this life lies partly in persistence: Einstein keeps trying to force a more unified picture from a physics that has moved in directions he does not fully accept.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-legacy-closing',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 82 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'The Last Pages',
        yearLabel: '1955',
        image: {
          setting: 'a quiet Princeton study in 1955',
          year: 1955,
          characters: ['einstein'],
          mood: 'reflective, calm, non-graphic',
          details: ['papers', 'chalkboard', 'window light', 'empty coat hook'],
          alt: 'A quiet Princeton study in 1955 with Einstein’s papers and chalkboard.',
        },
        pages: [
          {
            id: 'close',
            narration:
              'A scientific life does not end with every question solved. Some ideas became foundations; others remained arguments or unfinished programs. The final story now belongs to the particular path this game created.',
          },
        ],
      },
    ],
  },
  {
    id: 'einstein-epilogue',
    characterId: 'einstein',
    chapterId: 'legacy',
    kind: 'epilogue',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'Your Einstein',
        yearLabel: '1879–1955',
        image: {
          setting: 'a symbolic desk layered with objects from Einstein’s life across decades',
          year: 1955,
          characters: ['einstein'],
          mood: 'biographical reflection',
          details: ['compass', 'patent drawing', 'relativity equations', 'letters', 'Princeton papers'],
          alt: 'A reflective montage of a compass, patent papers, relativity equations, letters, and Princeton papers.',
        },
        pages: [
          {
            id: 'life',
            narration:
              'This was not a reenactment. The map, discoveries, missed opportunities, relationships, and political choices of this playthrough formed a different scientific life. The Chronicle now preserves the scenes that made it distinct.',
          },
          {
            id: 'legacy',
            narration:
              'The score that follows measures Legacy and Canon alignment. Neither number replaces the biography. History is the benchmark; your decisions are the story.',
          },
        ],
      },
    ],
  },
];
