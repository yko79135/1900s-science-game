import type { StoryScene } from '../../types/story';

const sourceIds = ['noether'];

/** Board context cards told in full by scenes in this file. */
export const NOETHER_REPLACED_CONTEXT_CARDS: string[] = [
  'noether-card-1907',
  'noether-card-1915-invitation',
  'noether-card-1918-theorem',
  'noether-card-1933-dismissal',
];

export const NOETHER_STORY_SCENES: StoryScene[] = [
  {
    id: 'noether-prologue-erlangen',
    characterId: 'noether',
    kind: 'prologue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'gameStart', priority: 100 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'A House Where the Mathematics Comes Through the Wall',
        locationLabel: 'Erlangen',
        yearLabel: '1882',
        image: {
          setting: 'a small Bavarian university town in early spring, 1882',
          year: 1882,
          characters: ['noether'],
          mood: 'quiet, domestic, expectant',
          details: ['cobbled street', 'shuttered windows', 'a lecture hall door', 'inkwell and dictation paper', 'church bells'],
          alt: 'A restrained illustration of a small German university town street in the early 1880s.',
        },
        pages: [
          {
            id: 'town',
            narration:
              'Erlangen is one long street with a university at one end and a brewery at the other. In March the air smells of hops and wet stone, and a lecture carries out of an open window into the road.',
          },
          {
            id: 'house',
            narration:
              'In a house near the university a mathematician works from a chair, because standing at a blackboard costs him more than he can spend. He dictates. His wife keeps the house quiet around the dictation.',
          },
          {
            id: 'century',
            narration:
              'A daughter is born and called Emmy from the first week. Brothers will follow. The century she has arrived in has already decided, without troubling to discuss it, what she may not be: not a student, not a lecturer, not a professor. It has not thought to forbid her from being right.',
          },
        ],
        historicalNote:
          'Emmy Noether was born in Erlangen in 1882, the daughter of the mathematician Max Noether, whose mobility was permanently impaired by a childhood illness. The scene-setting is dramatized; the household and the date are documented.',
      },
    ],
  },

  {
    id: 'noether-formation-opening',
    characterId: 'noether',
    chapterId: 'formation',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'default',
        title: 'What a Respectable Girl May Hold',
        locationLabel: 'Erlangen',
        yearLabel: '1889–1900',
        image: {
          setting: 'a girls’ school room and a family study in 1890s Erlangen',
          year: 1895,
          characters: ['noether'],
          mood: 'domestic, restless, warm',
          details: ['French grammar primer', 'upright piano', 'a closed study door', 'dictation papers', 'lamplight'],
          alt: 'A young woman in 1890s clothing standing beside a closed study door with schoolbooks under one arm.',
        },
        pages: [
          {
            id: 'school',
            narration:
              'The girls’ school teaches French, English, piano, and how to enter a room. Emmy is quick at the languages, indifferent to the piano, and near-sighted enough that she leans in on everything. At the dances she laughs too loudly at her own jokes and does not mind.',
          },
          {
            id: 'wall',
            narration:
              'The mathematics comes through the wall. Her father dictates in the next room, and the sentences on that side of the wall do not have to be about anything: not about weather, not about marriages, not about her. They only have to be true.',
          },
          {
            id: 'doorway',
            speaker: 'MAX NOETHER',
            dialogue: 'Stand in the doorway if you like, Emmy. But shut the door behind you — the draught takes the papers.',
            narration: 'He says it without looking up. She shuts the door, on the inside, and stays.',
          },
          {
            id: 'choice',
            narration:
              'She is eighteen. There is a certificate a respectable young woman may hold, permitting her to teach English and French to other girls. And there is the room across the hall.',
            choices: [
              {
                id: 'certificate',
                label: 'Sit the examination and take the language certificate.',
                effects: [
                  { type: 'flag', flag: 'noether.languageCertificate', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 1 },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'lectures',
                label: 'Ask her father whether she may sit at the back of his lectures.',
                effects: [
                  { type: 'flag', flag: 'noether.fathersLectures', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'quiet',
                label: 'Do both, and tell nobody which one matters.',
                effects: [
                  { type: 'flag', flag: 'noether.quietDouble', value: true },
                  { type: 'resources', effects: { network: 1, wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Noether trained at a girls’ school and qualified in 1900 as a teacher of English and French — a credential she never used professionally. The dialogue is dramatized; the choice frames a decision the record shows her making by degrees rather than in one moment.',
      },
    ],
  },

  {
    id: 'noether-formation-first-proof',
    characterId: 'noether',
    chapterId: 'formation',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'back-of-the-lecture',
        conditions: [
          { type: 'narrativeFlag', flag: 'noether.fathersLectures' },
          { type: 'yearAtLeast', year: 1895 },
          { type: 'yearAtMost', year: 1900 },
        ],
        title: 'The Back of Her Father’s Lecture',
        locationLabel: 'Erlangen',
        yearLabel: '1897',
        image: {
          setting: 'a small university lecture room in the 1890s seen from the last bench',
          year: 1897,
          characters: ['noether'],
          mood: 'concentrated, unnoticed, greedy',
          details: ['a last bench near the door', 'a lecturer seated rather than standing', 'a borrowed exercise book', 'winter coats'],
          alt: 'A view from the last bench of a small lecture room where the lecturer is seated.',
        },
        pages: [
          {
            id: 'bench',
            narration:
              'She sits on the last bench with her coat on, near enough to the door that leaving would be easy and near enough to the front that leaving is out of the question. Nobody objects. Nobody says good morning either.',
          },
          {
            id: 'error',
            narration:
              'Halfway through the hour he makes a small mistake in a sign and carries it forward for four lines. She sees it happen the way one sees a step missing on a stair.',
          },
          {
            id: 'after',
            speaker: 'MAX NOETHER',
            dialogue: 'You are pulling a face at the second blackboard, Emmy. Say it out loud or stop doing it.',
            narration: 'She says it out loud. He looks, and thanks her, and rubs out four lines, and the room turns round to see who spoke.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.firstCorrection', value: true },
          { type: 'resources', effects: { standing: 1 } },
        ],
        historicalNote:
          'Noether grew up inside her father’s mathematics and was auditing university lectures within a few years of this. The specific lecture and the exchange are dramatized.',
      },
      {
        id: 'both-lives',
        conditions: [
          { type: 'narrativeFlag', flag: 'noether.quietDouble' },
          { type: 'yearAtLeast', year: 1895 },
          { type: 'yearAtMost', year: 1900 },
        ],
        title: 'Two Exercise Books',
        locationLabel: 'Erlangen',
        yearLabel: '1897',
        image: {
          setting: 'a bedroom desk with two exercise books, 1890s',
          year: 1897,
          characters: ['noether'],
          mood: 'secretive, amused',
          details: ['two exercise books side by side', 'French irregular verbs', 'a page of algebra', 'a candle burnt low'],
          alt: 'Two exercise books open side by side, one of French verbs and one of algebra.',
        },
        pages: [
          {
            id: 'books',
            narration:
              'One exercise book holds French irregular verbs in a careful hand for the examiners. The other holds algebra in a hand nobody has ever had to read, and is twice as thick.',
          },
          {
            id: 'caught',
            speaker: 'MAX NOETHER',
            dialogue: 'Which of the two are you doing at this hour?',
            narration: 'She says the verbs. He looks at the candle, and at the thickness of the wrong book, and does not press it.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.firstCorrection', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Noether took the language qualification while living inside a mathematical household. The double life shown here is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1895 },
          { type: 'yearAtMost', year: 1900 },
        ],
        title: 'A Proof Nobody Asked For',
        locationLabel: 'Erlangen',
        yearLabel: '1897',
        image: {
          setting: 'a corner of a family sitting room used as a desk, 1890s',
          year: 1897,
          characters: ['noether'],
          mood: 'private appetite',
          details: ['a corner table', 'a borrowed textbook', 'a page worked and reworked', 'lamp turned low'],
          alt: 'A corner table with a borrowed textbook and a page of working turned face down.',
        },
        pages: [
          {
            id: 'exercise',
            narration:
              'The textbook is borrowed and the exercise at the foot of the page is starred, meaning that it is for the reader who is interested. She is interested. It takes her three evenings.',
          },
          {
            id: 'done',
            speaker: 'EMMY',
            dialogue: 'There. And nobody set it, and nobody will mark it, and it is still right.',
            narration: 'She turns the page face down on the table, which is the closest thing to boasting she will ever do, and blows out the lamp.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.firstCorrection', value: true },
          { type: 'resources', effects: { wellbeing: 1 } },
        ],
        historicalNote:
          'Noether had no formal mathematical schooling as a girl. Her early self-directed work is inferred from what followed, and this scene is dramatized.',
      },
    ],
  },

  {
    id: 'noether-formation-close',
    characterId: 'noether',
    chapterId: 'formation',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'certificate',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.languageCertificate' }],
        title: 'Qualified',
        locationLabel: 'Erlangen',
        yearLabel: '1900',
        image: {
          setting: 'a bedroom desk in an Erlangen house at the turn of the century',
          year: 1900,
          characters: ['noether'],
          mood: 'wry, unsettled',
          details: ['an official certificate', 'a drawer', 'French and English readers', 'winter window'],
          alt: 'An official teaching certificate lying in an open desk drawer beside language readers.',
        },
        pages: [
          {
            id: 'paper',
            narration:
              'The certificate arrives with a seal on it. She is now permitted, by the state, to teach girls exactly what she was taught. She reads it twice, the way she reads everything, and puts it in the drawer.',
          },
          {
            id: 'drawer',
            narration:
              'The drawer stays shut for the rest of her life. What she takes from the year is smaller and harder: she now knows precisely what the world is willing to give her without an argument.',
          },
        ],
        historicalNote: 'Noether qualified as a language teacher in 1900 and never took such a post. The drawer is dramatization.',
      },
      {
        id: 'erlangen',
        conditions: [
          { type: 'locationIs', locationId: 'erlangen' },
          { not: { type: 'visitedLocation', locationId: 'gottingen' } },
        ],
        title: 'The Door on the Inside',
        locationLabel: 'Erlangen',
        yearLabel: '1900',
        image: {
          setting: 'a study doorway in an Erlangen house, winter light',
          year: 1900,
          characters: ['noether'],
          mood: 'settled resolve',
          details: ['dictation papers', 'a chair pulled to a desk', 'lamp', 'stacked offprints'],
          alt: 'A woman seated at the far end of a study while papers are stacked on a desk.',
        },
        pages: [
          {
            id: 'stay',
            narration:
              'She has stopped pretending the room across the hall is her father’s room only. She sits in it in the evenings, after the dictation is done, and reads the papers he has finished with.',
          },
          {
            id: 'edge',
            narration:
              'Nobody has invited her to anything. Nobody has forbidden her, either, because nobody has imagined she would want it. That gap is the whole of her opportunity, and she can see the edges of it.',
          },
        ],
      },
      {
        id: 'default',
        title: 'Away From the Long Street',
        yearLabel: '1900',
        image: {
          setting: 'a European railway carriage and a distant university town, 1900',
          year: 1900,
          characters: ['noether'],
          mood: 'unsettled, curious',
          details: ['travelling trunk', 'timetable', 'a bundle of letters', 'winter fields'],
          alt: 'A travelling trunk and a folded timetable on a railway carriage seat.',
        },
        pages: [
          {
            id: 'elsewhere',
            narration:
              'The years have taken her away from the long street, and away from the wall with the mathematics behind it. What she has instead is her own hearing: she has learned to listen for the one sentence in a room that is actually load-bearing.',
          },
          {
            id: 'return',
            narration:
              'Letters come from home with the university news in them. She reads the mathematics first and the family second, and is not sorry about the order.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-education-opening',
    characterId: 'noether',
    chapterId: 'education',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'with-certificate',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.languageCertificate' }],
        title: 'Two of a Thousand',
        locationLabel: 'Erlangen',
        yearLabel: '1900',
        image: {
          setting: 'a crowded university lecture hall in 1900 Erlangen',
          year: 1900,
          characters: ['noether'],
          mood: 'exposed, determined',
          details: ['tiered wooden benches', 'chalk dust', 'a register book', 'gas lamps', 'overcoats on hooks'],
          alt: 'A woman seated alone at the edge of a crowded tiered lecture hall in 1900.',
        },
        pages: [
          {
            id: 'register',
            narration:
              'The register lists close to a thousand students. Two of them are women, and neither is enrolled: they are guests, present at the pleasure of each professor, one signature at a time.',
          },
          {
            id: 'certificate',
            narration:
              'She has a certificate in her drawer that says she is qualified to teach French. She has walked past three lecture halls to reach the one where the algebra is, and she is carrying no certificate at all for that.',
          },
          {
            id: 'permission',
            speaker: 'A PROFESSOR',
            dialogue: 'You may attend, Fräulein. You understand that attending is not the same as being here.',
            narration: 'She thanks him. She writes down everything he says for the next two hours, including the part he gets wrong.',
          },
          {
            id: 'choice',
            narration: 'There are more doors than there are hours in the day, and each one has a man behind it who must be asked.',
            choices: [
              {
                id: 'ask-each',
                label: 'Ask every professor in turn, and keep asking.',
                effects: [
                  { type: 'flag', flag: 'noether.askedEachProfessor', value: true },
                  { type: 'resources', effects: { network: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'back-row',
                label: 'Take the back row and give nobody a reason to look up.',
                effects: [
                  { type: 'flag', flag: 'noether.backRow', value: true },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'gordan',
                label: 'Go to Gordan and ask him for a problem of her own.',
                effects: [
                  { type: 'flag', flag: 'noether.gordanProblem', value: true },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Women could audit at Erlangen only with each lecturer’s individual consent, and were a tiny minority of the student body. Paul Gordan, a family friend, became her doctoral supervisor. The professor’s line is dramatized.',
      },
      {
        id: 'default',
        title: 'Permission, One Signature at a Time',
        locationLabel: 'Erlangen',
        yearLabel: '1900',
        image: {
          setting: 'a university corridor of closed office doors, 1900',
          year: 1900,
          characters: ['noether'],
          mood: 'patient, stubborn',
          details: ['brass door plates', 'a notebook held against the chest', 'winter coat', 'corridor bench'],
          alt: 'A woman waiting on a bench in a university corridor lined with closed office doors.',
        },
        pages: [
          {
            id: 'corridor',
            narration:
              'The corridor has eleven doors and a bench. She sits on the bench with a notebook against her chest and works out, while she waits, how many of the eleven she can afford to annoy.',
          },
          {
            id: 'two',
            narration:
              'Nearly a thousand students are enrolled here. Two women attend, and neither is enrolled at all. They are guests. A guest may be uninvited without a reason being given.',
          },
          {
            id: 'permission',
            speaker: 'A PROFESSOR',
            dialogue: 'You may attend, Fräulein. You understand that attending is not the same as being here.',
            narration: 'She thanks him, sits at the end of the bench nearest the door, and writes down everything — including the part he gets wrong.',
          },
          {
            id: 'choice',
            narration: 'Eleven doors. Not enough hours. She has to decide what kind of nuisance she intends to be.',
            choices: [
              {
                id: 'ask-each',
                label: 'Ask every professor in turn, and keep asking.',
                effects: [
                  { type: 'flag', flag: 'noether.askedEachProfessor', value: true },
                  { type: 'resources', effects: { network: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'back-row',
                label: 'Take the back row and give nobody a reason to look up.',
                effects: [
                  { type: 'flag', flag: 'noether.backRow', value: true },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
              {
                id: 'gordan',
                label: 'Go to Gordan and ask him for a problem of her own.',
                effects: [
                  { type: 'flag', flag: 'noether.gordanProblem', value: true },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Women could audit at Erlangen only with each lecturer’s individual consent. Paul Gordan, a family friend, became her doctoral supervisor. The professor’s line is dramatized.',
      },
    ],
  },

  {
    id: 'noether-gottingen-first-winter',
    characterId: 'noether',
    chapterId: 'education',
    kind: 'personal',
    classification: 'Documented',
    sourceIds: ['noether', 'hilbert'],
    trigger: { event: 'afterAction', priority: 62 },
    once: true,
    variants: [
      {
        id: 'visited',
        conditions: [
          { type: 'visitedLocation', locationId: 'gottingen' },
          { type: 'yearAtLeast', year: 1902 },
        ],
        title: 'A Winter of Lectures She Is Not Enrolled In',
        locationLabel: 'Göttingen',
        yearLabel: '1903',
        image: {
          setting: 'a mathematics lecture room in Göttingen in winter, early 1900s',
          year: 1903,
          characters: ['noether'],
          mood: 'exhilarated, cold, awake',
          details: ['snow on the window ledge', 'a long blackboard', 'wet overcoats', 'a borrowed notebook'],
          alt: 'Snow on the ledge of a tall window beside a long blackboard in a lecture room.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'Göttingen in winter is colder than Erlangen and louder about mathematics. The lecture rooms fill and empty like tides. Nobody here has heard of her, which is restful.',
          },
          {
            id: 'difference',
            narration:
              'What she notices is not the difficulty. It is the habit: these men do not ask what a formula computes. They ask what kind of object it is, and then they ask what other objects behave the same way.',
          },
          {
            id: 'keeping',
            narration:
              'She goes back to the long street with a notebook that will not close properly and a question she cannot put down. Structure first. Formulas afterwards, if at all.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.structureFirst', value: true }],
        historicalNote:
          'Noether spent a semester auditing at Göttingen in 1903–04, hearing Hilbert and Klein among others. Its influence on her later structural approach is a reasonable reading of the record; the interior detail is dramatized.',
      },
      {
        id: 'read-instead',
        conditions: [{ type: 'yearAtLeast', year: 1903 }],
        title: 'Reading Göttingen From a Distance',
        locationLabel: 'Erlangen',
        yearLabel: '1903',
        image: {
          setting: 'a desk in Erlangen stacked with journals and lecture announcements',
          year: 1903,
          characters: ['noether'],
          mood: 'hungry, patient',
          details: ['printed lecture announcements', 'journal offprints', 'a pen with a bent nib', 'a cold cup'],
          alt: 'A desk stacked with journals and printed university lecture announcements.',
        },
        pages: [
          {
            id: 'announcements',
            narration:
              'The Göttingen lecture announcements arrive with the journals. She reads the titles the way other people read timetables for cities they have never visited.',
          },
          {
            id: 'inference',
            narration:
              'From the titles alone she can tell what they are doing up there: not computing, but sorting — asking what kind of thing a thing is before asking what it equals. She starts doing it at her own desk, without permission, which is the only way she has ever started anything.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.structureFirst', value: true }],
        historicalNote:
          'The Göttingen school’s structural style is documented; whether Noether encountered it in person or in print depends on the road her life takes here.',
      },
    ],
  },

  {
    id: 'noether-invariant-breakthrough',
    characterId: 'noether',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'noether-invariant-theory', priority: 84 },
    once: true,
    variants: [
      {
        id: 'gordan',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.gordanProblem' }],
        title: 'A Jungle of Formulas',
        locationLabel: 'Erlangen',
        yearLabel: '1907',
        image: {
          setting: 'a desk buried in handwritten calculation sheets, Erlangen 1907',
          year: 1907,
          characters: ['noether'],
          mood: 'exhausted triumph, faint disgust',
          details: ['hundreds of handwritten symbols', 'a bound dissertation', 'inkstained fingers', 'a guttering lamp'],
          alt: 'A bound dissertation resting on a desk covered in dense handwritten calculation.',
        },
        pages: [
          {
            id: 'finish',
            narration:
              'The problem Gordan gave her is finished. It runs to hundreds of explicit invariants, every one of them checked, and she has computed the lot by hand over two winters.',
          },
          {
            id: 'verdict',
            speaker: 'EMMY',
            dialogue: 'A jungle of formulas. Every branch of it correct, and not one of them tells me why.',
            narration: 'She says it to the lamp. The examiners will pass it summa cum laude, and she will spend the rest of her life doing the opposite of it.',
          },
          {
            id: 'turn',
            narration:
              'Somewhere under the undergrowth is the shape she actually wants: the reason the invariants exist at all. She marks the page where the jungle is thickest, and does not go back to it.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.jungleOfFormulas', value: true }],
        historicalNote:
          'Noether’s 1907 dissertation under Paul Gordan was a computational treatment of invariants; she later dismissed it in terms very close to "a jungle of formulas." The scene dramatizes the moment of finishing.',
      },
      {
        id: 'erlangen',
        conditions: [{ type: 'locationIs', locationId: 'erlangen' }],
        title: 'Summa Cum Laude',
        locationLabel: 'Erlangen',
        yearLabel: '1907',
        image: {
          setting: 'an examination room in a small German university, 1907',
          year: 1907,
          characters: ['noether'],
          mood: 'formal, quietly absurd',
          details: ['a long examiners’ table', 'a bound thesis', 'dark panelling', 'a ceremonial ledger'],
          alt: 'A bound thesis lying on a long examination table in a panelled room.',
        },
        pages: [
          {
            id: 'examined',
            narration:
              'Four men at a long table examine her for an afternoon. She answers plainly, corrects one of them, apologises for it, and does not withdraw the correction.',
          },
          {
            id: 'verdict',
            speaker: 'EMMY',
            dialogue: 'A jungle of formulas. All of it correct. None of it necessary.',
            narration: 'The verdict is the highest they can award. She walks home along the long street and thinks about what the calculation was standing in front of.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.jungleOfFormulas', value: true }],
        historicalNote:
          'Noether received her doctorate summa cum laude at Erlangen in 1907. The examination scene and dialogue are dramatized; her later low opinion of the dissertation is documented.',
      },
      {
        id: 'default',
        title: 'The Calculation, Finished',
        yearLabel: '1907',
        image: {
          setting: 'a lamplit desk with a completed manuscript, 1907',
          year: 1907,
          characters: ['noether'],
          mood: 'tired satisfaction',
          details: ['a stack of numbered sheets', 'a ribbon tie', 'blotting paper', 'a cold room'],
          alt: 'A completed manuscript tied with ribbon on a lamplit desk.',
        },
        pages: [
          {
            id: 'done',
            narration:
              'It is done, and it is enormous, and it is right. Every invariant accounted for, every coefficient carried through by hand.',
          },
          {
            id: 'cost',
            narration:
              'She ties the sheets and sits back. What the work has taught her is not a result. It is an aversion: never again this way, never again one formula at a time.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.jungleOfFormulas', value: true }],
      },
    ],
  },

  {
    id: 'noether-card-doctorate',
    characterId: 'noether',
    chapterId: 'education',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 76 },
    once: true,
    replacesContextCardId: 'noether-card-1907',
    variants: [
      {
        id: 'earned',
        conditions: [
          { type: 'projectCompleted', projectId: 'noether-invariant-theory' },
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1908 },
        ],
        title: 'A Doctorate With Nowhere To Put It',
        locationLabel: 'Erlangen',
        yearLabel: '1907',
        image: {
          setting: 'a university noticeboard of posted appointments, 1907',
          year: 1907,
          characters: ['noether'],
          mood: 'flat, clear-eyed',
          details: ['posted lists of appointments', 'a doctoral certificate rolled in the hand', 'rain on the glass', 'a porter’s lodge'],
          alt: 'A woman holding a rolled certificate before a noticeboard of posted university appointments.',
        },
        pages: [
          {
            id: 'list',
            narration:
              'The appointments are posted in the entrance hall each term: assistantships, lectureships, the ladder that a doctorate is supposed to be the first rung of. She reads the whole list twice out of habit.',
          },
          {
            id: 'rule',
            narration:
              'There is no rule anywhere on the wall that says a woman may not hold these posts. There does not need to be. The rule is in the fact that the question has never been asked, and she has just become the reason it will have to be.',
          },
          {
            id: 'choose',
            narration:
              'She is twenty-five, with the highest doctoral mark the faculty awards and no income of any kind.',
            choices: [
              {
                id: 'stay-unpaid',
                label: 'Stay in Erlangen and lecture for nothing.',
                effects: [
                  { type: 'flag', flag: 'noether.unpaidErlangen', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { funds: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'school-post',
                label: 'Take a girls’ school post and keep mathematics for the evenings.',
                effects: [
                  { type: 'flag', flag: 'noether.schoolPost', value: true },
                  { type: 'resources', effects: { funds: 2, wellbeing: -1 } },
                ],
              },
              {
                id: 'wrote-out',
                label: 'Write to mathematicians who might not care that she is a woman.',
                effects: [
                  { type: 'flag', flag: 'noether.wroteOut', value: true },
                  { type: 'resources', effects: { network: 2 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'noether-card-1907' }],
        historicalNote:
          'Noether earned her doctorate in 1907 summa cum laude. German universities did not appoint women to faculty posts, and she worked without salary for years afterwards. The noticeboard is dramatization.',
      },
      {
        id: 'asked',
        conditions: [
          { type: 'narrativeFlag', flag: 'noether.askedEachProfessor' },
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1908 },
        ],
        title: 'The Ladder With the Bottom Rung Removed',
        yearLabel: '1907',
        image: {
          setting: 'a university corridor with a posted appointments list, 1907',
          year: 1907,
          characters: ['noether'],
          mood: 'wry, unresigned',
          details: ['posted appointment lists', 'a stack of unanswered letters', 'winter coat', 'gaslight'],
          alt: 'A posted list of university appointments beside a stack of letters.',
        },
        pages: [
          {
            id: 'signatures',
            narration:
              'She has collected signatures from every professor in the corridor, one at a time, for years. She has become, in a modest way, difficult to refuse.',
          },
          {
            id: 'rung',
            narration:
              'It turns out the signatures were only for the doors. Beyond the doors there is a ladder — assistant, lecturer, professor — and the bottom rung has simply been taken off for her, without malice and without discussion.',
          },
          {
            id: 'choose',
            narration: 'She has more permission than any woman in the faculty and no position at all.',
            choices: [
              {
                id: 'stay-unpaid',
                label: 'Stay in Erlangen and lecture for nothing.',
                effects: [
                  { type: 'flag', flag: 'noether.unpaidErlangen', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { funds: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'school-post',
                label: 'Take a girls’ school post and keep mathematics for the evenings.',
                effects: [
                  { type: 'flag', flag: 'noether.schoolPost', value: true },
                  { type: 'resources', effects: { funds: 2, wellbeing: -1 } },
                ],
              },
              {
                id: 'wrote-out',
                label: 'Write to mathematicians who might not care that she is a woman.',
                effects: [
                  { type: 'flag', flag: 'noether.wroteOut', value: true },
                  { type: 'resources', effects: { network: 2 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'noether-card-1907' }],
        historicalNote:
          'German universities did not appoint women to faculty positions in 1907, whatever a candidate’s qualifications. The corridor of signatures is dramatized from the documented requirement of individual consent to attend.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1905 },
          { type: 'yearAtMost', year: 1908 },
        ],
        title: 'No Career Path Attached',
        yearLabel: '1907',
        image: {
          setting: 'a plain desk with an official envelope, 1907',
          year: 1907,
          characters: ['noether'],
          mood: 'clear, unsentimental',
          details: ['an official envelope', 'a household account book', 'a pen', 'grey daylight'],
          alt: 'An official envelope and a household account book on a plain desk.',
        },
        pages: [
          {
            id: 'accounts',
            narration:
              'The household account book is in her hand because someone has to keep it and she is faster at it than anyone else in the house. Her own column is blank. There is no column for what she does.',
          },
          {
            id: 'plain',
            narration:
              'The universities of the empire appoint no women. That is not a judgement on her work; it is simply the shape of the wall, and she has walked into it at speed.',
          },
          {
            id: 'choose',
            narration: 'She is twenty-five. Something has to be decided about the next ten years.',
            choices: [
              {
                id: 'stay-unpaid',
                label: 'Stay in Erlangen and lecture for nothing.',
                effects: [
                  { type: 'flag', flag: 'noether.unpaidErlangen', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: -1 },
                  { type: 'resources', effects: { funds: -1, wellbeing: 1 } },
                ],
              },
              {
                id: 'school-post',
                label: 'Take a girls’ school post and keep mathematics for the evenings.',
                effects: [
                  { type: 'flag', flag: 'noether.schoolPost', value: true },
                  { type: 'resources', effects: { funds: 2, wellbeing: -1 } },
                ],
              },
              {
                id: 'wrote-out',
                label: 'Write to mathematicians who might not care that she is a woman.',
                effects: [
                  { type: 'flag', flag: 'noether.wroteOut', value: true },
                  { type: 'resources', effects: { network: 2 } },
                ],
              },
            ],
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'noether-card-1907' }],
        historicalNote:
          'The exclusion of women from paid academic posts in Germany applied regardless of where Noether was or what she had finished. This variant carries the card wherever her life has taken her.',
      },
    ],
  },

  {
    id: 'noether-education-close',
    characterId: 'noether',
    chapterId: 'education',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'doctorate',
        conditions: [{ type: 'projectCompleted', projectId: 'noether-invariant-theory' }],
        title: 'Dr Noether, Of No Fixed Position',
        locationLabel: 'Erlangen',
        yearLabel: '1908',
        image: {
          setting: 'an Erlangen street in early evening, 1908',
          year: 1908,
          characters: ['noether'],
          mood: 'level, unbowed',
          details: ['gas lamps being lit', 'a rolled certificate', 'shop shutters', 'wet cobbles'],
          alt: 'A woman walking a lamplit street in 1908 carrying a rolled document.',
        },
        pages: [
          {
            id: 'title',
            narration:
              'She has a title now. It is the only thing anyone will give her: two letters in front of her name and nothing behind it — no post, no salary, no room with her name on the door.',
          },
          {
            id: 'ahead',
            narration:
              'On the walk home she is not thinking about the injustice, which is old news. She is thinking about invariants, and about how much of the jungle would fall down if you asked the right question first.',
          },
        ],
      },
      {
        id: 'backrow',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.backRow' }],
        title: 'The Back Row Empties',
        yearLabel: '1908',
        image: {
          setting: 'an emptying lecture hall at the end of term, 1908',
          year: 1908,
          characters: ['noether'],
          mood: 'quiet, unfinished',
          details: ['empty tiered benches', 'chalk ghosts on a board', 'a satchel', 'late afternoon light'],
          alt: 'Empty tiered benches in a lecture hall with faint chalk marks remaining on the board.',
        },
        pages: [
          {
            id: 'empty',
            narration:
              'Eight years of the back row. She knows every lecturer’s tic and every gap in every course, and not one register anywhere records that she was in the room.',
          },
          {
            id: 'unfinished',
            narration:
              'The dissertation is not finished. She tells herself that is a choice about timing. In the corridor a student she has never spoken to asks her, mistaking her for staff, when the algebra examination is. She knows the answer.',
          },
        ],
      },
      {
        id: 'default',
        title: 'Eight Years, No Register',
        yearLabel: '1908',
        image: {
          setting: 'a study with a decade of notebooks stacked on a shelf, 1908',
          year: 1908,
          characters: ['noether'],
          mood: 'plain, resolute',
          details: ['stacked notebooks', 'a candle stub', 'journals with cut pages', 'a shuttered window'],
          alt: 'A shelf of stacked handwritten notebooks beside journals with cut pages.',
        },
        pages: [
          {
            id: 'stack',
            narration:
              'The notebooks make a stack as high as her forearm. That is what the decade has produced, and none of it is in anyone’s catalogue.',
          },
          {
            id: 'next',
            narration:
              'She is not owed anything and she knows it, and she goes on anyway, which turns out to be the durable version of hope.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-entry-opening',
    characterId: 'noether',
    chapterId: 'entry',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'unpaid',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.unpaidErlangen' }],
        title: 'Lecturing Under Another Man’s Name',
        locationLabel: 'Erlangen',
        yearLabel: '1908–1915',
        image: {
          setting: 'a printed university course catalogue on a table, 1910',
          year: 1910,
          characters: ['noether'],
          mood: 'ironic patience',
          details: ['a printed course catalogue', 'a name in bold type', 'chalk in a coat pocket', 'a coffee ring on the page'],
          alt: 'A printed university course catalogue open on a table with a lecturer’s name in bold type.',
        },
        pages: [
          {
            id: 'catalogue',
            narration:
              'The catalogue for the coming term lists the algebra course, the hours, the room, and the lecturer. The lecturer’s name is her father’s. The lecturer, on eleven of those mornings, will be her.',
          },
          {
            id: 'room',
            narration:
              'She teaches fast, too fast, chalk snapping, hairpins working loose, correcting herself out loud and thinking that the correction is the interesting part. The students who can keep up get very good very quickly.',
          },
          {
            id: 'father',
            speaker: 'MAX NOETHER',
            dialogue: 'They will say it is my course, Emmy. Let them say it. The mathematics will not be confused about whose it is.',
            narration: 'It is meant kindly and it is a small consolation, and both of them know which of those it mostly is.',
          },
        ],
        historicalNote:
          'From 1908 Noether lectured at Erlangen without salary or title, frequently substituting for her father and appearing in the catalogue under his name. The dialogue is dramatized.',
      },
      {
        id: 'school',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.schoolPost' }],
        title: 'Evenings Only',
        yearLabel: '1908–1915',
        image: {
          setting: 'a schoolroom at dusk with exercise books stacked for marking',
          year: 1910,
          characters: ['noether'],
          mood: 'tired, divided',
          details: ['stacks of exercise books', 'a schoolroom clock', 'a satchel of journals', 'an oil lamp'],
          alt: 'Stacked exercise books beside a satchel of journals in a dim schoolroom.',
        },
        pages: [
          {
            id: 'marking',
            narration:
              'Thirty exercise books a night, and every one of them the same four mistakes. She marks them quickly and badly and feels guilty about it, and then works until two.',
          },
          {
            id: 'salary',
            narration:
              'There is a salary. It is the first money she has earned and it buys journals, which is the only reason she notices it.',
          },
          {
            id: 'cost',
            speaker: 'EMMY',
            dialogue: 'I have four hours a night. In four hours a night you cannot lose an argument with yourself — you have to be right the first time.',
            narration: 'She says it to no one, and finds it is nearly true, and that the discipline is doing something to how she thinks.',
          },
        ],
        historicalNote:
          'Noether never in fact took a schoolteaching post; this is the road not taken, written from inside it. Her documented years from 1908 were unpaid lecturing at Erlangen.',
      },
      {
        id: 'default',
        title: 'Seven Years Without a Title',
        yearLabel: '1908–1915',
        image: {
          setting: 'a desk with outgoing letters and a blotter, around 1910',
          year: 1910,
          characters: ['noether'],
          mood: 'steady, unrewarded',
          details: ['addressed envelopes', 'a blotter', 'journal offprints', 'a small stove'],
          alt: 'Addressed envelopes and offprints stacked beside a blotter on a working desk.',
        },
        pages: [
          {
            id: 'years',
            narration:
              'Seven years pass in a way that no register records. She lectures where she is allowed to lecture, publishes where she is allowed to publish, and is thanked in footnotes.',
          },
          {
            id: 'work',
            narration:
              'The work changes underneath her without announcing itself. She has stopped asking what a calculation gives and started asking what it is a calculation about.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'If a thing is true of every ring, then stop talking about the ring. Talk about the truth.',
            narration: 'Nobody in the room takes it down. In six years it will be the most important sentence in German mathematics.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-personal-unpaid',
    characterId: 'noether',
    chapterId: 'entry',
    kind: 'personal',
    classification: 'Plausible',
    sourceIds,
    trigger: { event: 'afterAction', priority: 58 },
    once: true,
    variants: [
      {
        id: 'thin',
        conditions: [
          { type: 'yearAtLeast', year: 1909 },
          { type: 'yearAtMost', year: 1915 },
          { not: { type: 'resourceAtLeast', resource: 'funds', value: 2 } },
        ],
        title: 'Board and Lodging, Provided',
        locationLabel: 'Erlangen',
        yearLabel: '1911',
        image: {
          setting: 'a modest German dining room laid for a family meal, around 1911',
          year: 1911,
          characters: ['noether'],
          mood: 'affectionate, constrained',
          details: ['a laid table', 'a mended tablecloth', 'a housekeeping tin', 'winter dusk at the window'],
          alt: 'A family dining table laid for a meal in a modest household in the 1910s.',
        },
        pages: [
          {
            id: 'table',
            narration:
              'She eats at her father’s table because she has no money to eat anywhere else. Her clothes are practical and she does not notice them. Her shoes she notices, because she walks.',
          },
          {
            id: 'arithmetic',
            narration:
              'The arithmetic is not complicated: a woman lecturing for nothing lives on a household that was not enlarged to hold her. She does the sum once, decides it is survivable, and refuses to do it again.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.livedThin', value: true }],
        historicalNote: 'Noether had no salary during her Erlangen years and depended on family support. The domestic detail is dramatized.',
      },
      {
        id: 'steady',
        conditions: [
          { type: 'yearAtLeast', year: 1909 },
          { type: 'yearAtMost', year: 1915 },
        ],
        title: 'Enough To Buy Journals',
        yearLabel: '1911',
        image: {
          setting: 'a bookseller’s counter with mathematical journals, around 1911',
          year: 1911,
          characters: ['noether'],
          mood: 'small pleasure, appetite',
          details: ['stacked journals', 'brown paper and string', 'coins on a counter', 'a shop bell'],
          alt: 'Mathematical journals wrapped in brown paper and string on a bookseller’s counter.',
        },
        pages: [
          {
            id: 'counter',
            narration:
              'She counts the coins onto the counter for a run of back numbers and carries the parcel home under her arm like bread.',
          },
          {
            id: 'appetite',
            narration:
              'Money, she has decided, is a subscription to other people’s thinking. She has never wanted any of the other things it buys, and this is the only kind of comfort that has ever made her impatient to get home.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-entry-close',
    characterId: 'noether',
    chapterId: 'entry',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'wrote-out',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.wroteOut' }],
        title: 'The Letters Come Back',
        yearLabel: '1915',
        image: {
          setting: 'a hallway table with a stack of arrived correspondence, 1915',
          year: 1915,
          characters: ['noether'],
          mood: 'anticipation, sharpening',
          details: ['stacked envelopes with foreign postmarks', 'a paper knife', 'a hall mirror', 'coats on a stand'],
          alt: 'A stack of arrived letters with varied postmarks on a hallway table beside a paper knife.',
        },
        pages: [
          {
            id: 'replies',
            narration:
              'Some of the letters she sent out are answered. Not many, and not by the men she expected — but the ones who answer, argue, and an argument by post is still an argument.',
          },
          {
            id: 'known',
            narration:
              'Somewhere in the small world of German algebra she has stopped being nobody’s student and become a correspondent. It is the first professional thing she has ever been.',
          },
        ],
      },
      {
        id: 'known',
        conditions: [{ type: 'resourceAtLeast', resource: 'network', value: 4 }],
        title: 'Known To the People Who Matter',
        yearLabel: '1915',
        image: {
          setting: 'a mathematical society meeting room after a talk, 1915',
          year: 1915,
          characters: ['noether'],
          mood: 'collegial, earned',
          details: ['stacked chairs', 'a lectern', 'programme cards', 'coats over arms'],
          alt: 'A meeting room after a talk, with stacked chairs and programme cards on a lectern.',
        },
        pages: [
          {
            id: 'after',
            narration:
              'After the talk three men wait to argue with her about the last ten minutes of it. This is what recognition looks like in her profession, and she prefers it to applause.',
          },
          {
            id: 'still',
            narration:
              'She is still not on any payroll. But the invitation that will change everything is going to be written by somebody who was in a room like this one.',
          },
        ],
      },
      {
        id: 'default',
        title: 'The Term Ends As Every Term Ends',
        yearLabel: '1915',
        image: {
          setting: 'a lecture room being locked at the end of term, 1915',
          year: 1915,
          characters: ['noether'],
          mood: 'plain, unresolved',
          details: ['a key in a door', 'a cleaned board', 'an empty lectern', 'grey afternoon'],
          alt: 'A key turning in the door of an emptied lecture room.',
        },
        pages: [
          {
            id: 'lock',
            narration:
              'The term ends, the blackboard is washed, the room is locked by a porter who has never learned her name. Seven of these now.',
          },
          {
            id: 'nothing',
            narration:
              'Nothing has changed in her position and a great deal has changed in her mathematics, and only one of those two things is visible from outside.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-breakthrough-opening',
    characterId: 'noether',
    chapterId: 'breakthrough',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds: ['noether', 'hilbert'],
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'Summoned',
        locationLabel: 'Göttingen',
        yearLabel: '1915',
        image: {
          setting: 'the mathematics institute at Göttingen in 1915',
          year: 1915,
          characters: ['noether'],
          mood: 'charged, unwelcoming, alive',
          details: ['long blackboards', 'a seminar table', 'wet umbrellas in a stand', 'stacked reprints'],
          alt: 'A seminar room with long blackboards and a table stacked with reprints.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'She is inside the building she used to read the lecture announcements of. It smells of wet wool and chalk. Every man in the corridor knows who she is before she says anything, which is new and not entirely pleasant.',
          },
          {
            id: 'problem',
            narration:
              'They want her for a specific reason. The new gravitation theory has a problem with energy: the conservation laws will not sit still. Invariants are her subject, and the problem is an invariance problem wearing physics clothes.',
          },
          {
            id: 'faculty',
            speaker: 'HILBERT',
            dialogue: 'Ignore the faculty, Fräulein Noether. They will object for a year and then they will need you.',
            narration: 'The faculty does object. She discovers she can hear the objections through two doors and go on working anyway.',
          },
          {
            id: 'choice',
            narration:
              'There is a letter to answer and a question inside the letter that nobody has put in writing: on what terms.',
            choices: [
              {
                id: 'go',
                label: 'Answer yes, and go, and settle the rest later.',
                effects: [
                  { type: 'flag', flag: 'noether.answeredYes', value: true },
                  { type: 'resources', effects: { network: 1, funds: -1 } },
                ],
              },
              {
                id: 'ask-title',
                label: 'Answer yes — and ask, in the same letter, for the title.',
                effects: [
                  { type: 'flag', flag: 'noether.askedForTitle', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'let-argue',
                label: 'Let them finish their argument before she packs anything.',
                effects: [
                  { type: 'flag', flag: 'noether.letThemArgue', value: true },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Hilbert and Klein brought Noether to Göttingen in 1915 to work on invariance problems arising from general relativity, over the objections of the non-mathematical faculty. Hilbert’s line here is dramatized.',
      },
      {
        id: 'default',
        title: 'A Letter From Göttingen',
        yearLabel: '1915',
        image: {
          setting: 'a kitchen table with an opened letter, Germany 1915',
          year: 1915,
          characters: ['noether'],
          mood: 'suspended, enormous',
          details: ['an opened letter with a university crest', 'a cooling cup', 'a bread board', 'a folded newspaper with war news'],
          alt: 'An opened letter bearing a university crest lying on a kitchen table beside a folded newspaper.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter has a crest on it. Two of the most powerful mathematicians in Europe are asking her — not offering her, asking her — to come and solve a problem they cannot solve.',
          },
          {
            id: 'problem',
            narration:
              'The problem is that the new gravitation theory will not keep its energy accounts straight. She reads the description twice and sees, immediately and without being able to prove it yet, that it is not a physics problem at all. It is a question about symmetry.',
          },
          {
            id: 'house',
            speaker: 'MAX NOETHER',
            dialogue: 'Well. They have taken a long time to think of you.',
            narration: 'The house has been quieter this year than any year before it. She folds the letter along its creases and does not answer at once.',
          },
          {
            id: 'choice',
            narration: 'There is the letter, and there is the question inside the letter that nobody has put in writing: on what terms.',
            choices: [
              {
                id: 'go',
                label: 'Answer yes, and go, and settle the rest later.',
                effects: [
                  { type: 'flag', flag: 'noether.answeredYes', value: true },
                  { type: 'resources', effects: { network: 1, funds: -1 } },
                ],
              },
              {
                id: 'ask-title',
                label: 'Answer yes — and ask, in the same letter, for the title.',
                effects: [
                  { type: 'flag', flag: 'noether.askedForTitle', value: true },
                  { type: 'theme', theme: 'institutionVsIndependence', amount: 2 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'let-argue',
                label: 'Let them finish their argument before she packs anything.',
                effects: [
                  { type: 'flag', flag: 'noether.letThemArgue', value: true },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'The 1915 invitation from Hilbert and Klein is documented. Noether’s mother died in 1915 and her father was in poor health; the household’s quiet is drawn from that without insisting on a date. The dialogue is dramatized.',
      },
    ],
  },

  {
    id: 'noether-card-invitation',
    characterId: 'noether',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds: ['hilbert', 'noether'],
    trigger: { event: 'afterAction', priority: 82 },
    once: true,
    replacesContextCardId: 'noether-card-1915-invitation',
    variants: [
      {
        id: 'senate',
        conditions: [
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'The Senate Is Not a Bathhouse',
        locationLabel: 'Göttingen',
        yearLabel: '1915–1919',
        image: {
          setting: 'a university senate chamber with empty chairs, 1915',
          year: 1915,
          characters: ['noether'],
          mood: 'absurd, infuriating, comic',
          details: ['a long committee table', 'inkstands', 'minute books', 'high windows', 'an empty chair at the end'],
          alt: 'A long university committee table with inkstands and minute books, one chair standing empty.',
        },
        pages: [
          {
            id: 'objection',
            narration:
              'The mathematicians want her habilitated. The philologists and historians object, at length, in writing. What will our soldiers think, they ask, when they come home from the front and find they must learn at the feet of a woman.',
          },
          {
            id: 'retort',
            speaker: 'HILBERT',
            dialogue: 'I do not see that the candidate’s sex is an argument against her admission. After all, we are a university senate, not a bathhouse.',
            narration: 'The remark goes round Göttingen within a week, improving slightly at each telling. It does not change the vote.',
          },
          {
            id: 'workaround',
            narration:
              'So the courses appear in the catalogue under Hilbert’s name, with a line beneath saying that Fräulein Dr Noether will assist. She lectures. Everyone knows. The paperwork does not.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'noether-card-1915-invitation' },
          { type: 'relationship', characterId: 'hilbert', familiarity: 2, respect: 2, flag: 'gottingen-1915' },
          { type: 'flag', flag: 'noether.underHilbertsName', value: true },
          { type: 'flag', flag: 'noether.gottingenYears', value: true },
        ],
        historicalNote:
          'Hilbert’s "not a bathhouse" retort is widely reported but not verbatim-documented; it is given here as the remark it is remembered as. The workaround of listing her courses under Hilbert’s name is documented.',
      },
      {
        id: 'asked-title',
        conditions: [
          { type: 'narrativeFlag', flag: 'noether.askedForTitle' },
          { type: 'yearAtLeast', year: 1916 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'The Sentence She Put In Writing',
        yearLabel: '1915',
        image: {
          setting: 'a desk with a draft letter and crossed-out lines, 1915',
          year: 1915,
          characters: ['noether'],
          mood: 'nerve, calculation',
          details: ['a draft letter with deletions', 'a blotter', 'a university crest on an envelope', 'lamplight'],
          alt: 'A draft letter with several crossed-out lines beside an envelope bearing a university crest.',
        },
        pages: [
          {
            id: 'draft',
            narration:
              'She drafts the sentence four times. Each version is politer than the last and each one says the same thing: she will come, and she would like the right to lecture in her own name.',
          },
          {
            id: 'answer',
            narration:
              'The answer, when it comes, is warm about the mathematics and evasive about the title. The faculty has objected. There is a committee. There will be a further committee.',
          },
          {
            id: 'comic',
            speaker: 'EMMY',
            dialogue: 'They have written four pages to avoid one word. That is not mathematics — in mathematics we shorten.',
            narration: 'She laughs, which is her habit under pressure, and goes anyway, because the problem is more interesting than the insult.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'noether-card-1915-invitation' },
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, tension: 1, flag: 'gottingen-1915' },
        ],
        historicalNote:
          'Noether’s habilitation was blocked by non-mathematical faculty in 1915 and only granted in 1919. The drafted letter and dialogue are dramatized around that documented refusal.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1917 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'What the Committee Decided',
        yearLabel: '1915–1919',
        image: {
          setting: 'a hallway table with an official envelope, 1915',
          year: 1915,
          characters: ['noether'],
          mood: 'distant, ironic',
          details: ['an official envelope', 'a minute-book extract', 'a hall clock', 'grey daylight'],
          alt: 'An official envelope and an extract from a minute book on a hall table.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The news travels the way academic news travels — third-hand, mangled, and enjoyable. Göttingen has spent a term arguing about whether a woman may hold a lectureship, and has decided, magnificently, to argue about it for another term.',
          },
          {
            id: 'retort',
            speaker: 'HILBERT',
            dialogue: 'I do not see that the candidate’s sex is an argument. After all, we are a university senate, not a bathhouse.',
            narration: 'The remark reaches her by way of two letters and one very pleased colleague. It does not change the vote, and she keeps it anyway.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'noether-card-1915-invitation' },
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, flag: 'gottingen-1915' },
        ],
        historicalNote:
          'The 1915 faculty dispute over Noether’s habilitation is documented and reached her wherever she was. Hilbert’s remark is given as it is remembered rather than as a verbatim quotation.',
      },
    ],
  },

  {
    id: 'noether-hilbert-encounter',
    characterId: 'noether',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds: ['noether', 'hilbert'],
    trigger: { event: 'afterAction', priority: 78 },
    once: true,
    variants: [
      {
        id: 'human-together',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1923 },
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'otherCharacterIsHuman', characterId: 'hilbert' },
          { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen', yearTolerance: 1 },
        ],
        title: 'Two People At One Blackboard',
        locationLabel: 'Göttingen',
        yearLabel: '1915–1919',
        image: {
          setting: 'a Göttingen seminar room at a long blackboard, 1916',
          year: 1916,
          characters: ['noether', 'hilbert'],
          mood: 'fast, competitive, delighted',
          details: ['a long blackboard half erased', 'two pieces of chalk', 'a stopped clock', 'reprints on a bench'],
          alt: 'Two mathematicians working at opposite ends of a long, half-erased blackboard.',
        },
        pages: [
          {
            id: 'board',
            narration:
              'He works from the left end of the blackboard and she from the right, and they meet in the middle with two different notations for the same object. She wins the notation argument in under a minute.',
          },
          {
            id: 'exchange',
            speaker: 'HILBERT',
            dialogue: 'Then say it again more slowly, and this time tell me which part is the physics and which part is only bookkeeping.',
            narration: 'She says it again more slowly. Halfway through she stops, because saying it slowly has shown her which part is which.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 2, respect: 2, flag: 'blackboard-1916' },
          { type: 'flag', flag: 'noether.hilbertBlackboard', value: true },
          { type: 'flag', flag: 'noether.gottingenYears', value: true },
        ],
        historicalNote: 'Noether worked closely with Hilbert at Göttingen from 1915. The exchange is dramatized.',
      },
      {
        id: 'npc-together',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1923 },
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'otherCharacterIsNpc', characterId: 'hilbert' },
          { type: 'otherCharacterAt', characterId: 'hilbert', locationId: 'gottingen', yearTolerance: 1 },
        ],
        title: 'The Old Man At the Back of the Room',
        locationLabel: 'Göttingen',
        yearLabel: '1915–1919',
        image: {
          setting: 'a Göttingen lecture room with one listener at the back, 1916',
          year: 1916,
          characters: ['noether', 'hilbert'],
          mood: 'watchful, respectful, sharp',
          details: ['a hat on a bench', 'chalk dust in a shaft of light', 'a half-full lecture room', 'an open notebook'],
          alt: 'A lecture room with a single older listener seated at the back beneath a shaft of light.',
        },
        pages: [
          {
            id: 'listener',
            narration:
              'He sits at the back with his hat on the bench beside him and does not take notes, which unnerves the students far more than it unnerves her.',
          },
          {
            id: 'after',
            speaker: 'HILBERT',
            dialogue: 'You went too fast in the middle and too slowly at the end. The middle was the good part. Go fast there again.',
            narration: 'It is the most useful criticism she has ever received, and she takes it, and the next lecture is worse and the one after that is much better.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 2, respect: 2, flag: 'blackboard-1916' },
          { type: 'flag', flag: 'noether.hilbertBlackboard', value: true },
          { type: 'flag', flag: 'noether.gottingenYears', value: true },
        ],
        historicalNote: 'Hilbert’s advocacy and close working contact with Noether at Göttingen are documented. The dialogue is dramatized.',
      },
      {
        id: 'said-yes-not-gone',
        conditions: [
          { type: 'yearAtLeast', year: 1918 },
          { type: 'yearAtMost', year: 1923 },
          { type: 'locationIsNot', locationId: 'gottingen' },
          { any: [
              { type: 'choiceWas', choiceKey: 'noether-breakthrough-opening:choice', choiceId: 'go' },
              { type: 'choiceWas', choiceKey: 'noether-breakthrough-opening:choice', choiceId: 'ask-title' },
            ] },
        ],
        title: 'The Fare',
        yearLabel: '1918–1919',
        image: {
          setting: 'a hall table with an accepted invitation and a household account book, 1918',
          year: 1918,
          characters: ['noether'],
          mood: 'furious patience',
          details: ['an accepted invitation', 'a household account book', 'a railway fare table', 'a coat that will do another winter'],
          alt: 'An accepted invitation lying beside a household account book and a printed fare table.',
        },
        pages: [
          {
            id: 'sum',
            narration:
              'She said she would come. The sum between here and there is a fare, a room, and a winter’s coal, and the sum has not changed in three years of trying to make it change.',
          },
          {
            id: 'letters',
            narration:
              'So they argue by post. Four days out, four days back: a blackboard quarrel of twenty minutes takes six weeks, and she numbers her objections so that he cannot answer only the easy ones.',
          },
          {
            id: 'margin',
            narration:
              'He answers three of five. In the margin of the third he has written a single word — Yes — beside the step she was least sure of, and she reads it about eleven times.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 2, flag: 'letters' },
          { type: 'flag', flag: 'noether.fareTooHigh', value: true },
        ],
        historicalNote:
          'Noether did move to Göttingen in 1915. This variant belongs to the life that accepted the invitation without being able to act on it; the working relationship then survives only as correspondence.',
      },
      {
        id: 'apart-elsewhere',
        conditions: [
          { type: 'yearAtLeast', year: 1918 },
          { type: 'yearAtMost', year: 1923 },
          { type: 'locationIsNot', locationId: 'gottingen' },
        ],
        title: 'An Argument Conducted By Post',
        yearLabel: '1917–1919',
        image: {
          setting: 'a writing desk with a long letter in progress, 1917',
          year: 1917,
          characters: ['noether'],
          mood: 'patient, thwarted, undeterred',
          details: ['a letter of many sheets', 'a Göttingen postmark', 'a pen resting across an inkwell', 'a cold stove'],
          alt: 'A many-page letter in progress on a desk beside an envelope with a university postmark.',
        },
        pages: [
          {
            id: 'post',
            narration:
              'The letters take four days each way, which means an argument that would take twenty minutes at a blackboard takes six weeks. She numbers her objections so that he cannot answer only the easy ones.',
          },
          {
            id: 'gap',
            narration:
              'He answers three of five. In the margin of the third he has written a single word — Yes — beside the step she was least sure of, and she reads it about eleven times.',
          },
        ],
        effects: [{ type: 'relationship', characterId: 'hilbert', familiarity: 1, respect: 1, flag: 'letters' }],
        historicalNote:
          'If this life never reaches Göttingen, the documented working relationship becomes correspondence instead. The letters here are dramatized.',
      },
      {
        id: 'apart-hilbert-away',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1923 },
          { type: 'locationIs', locationId: 'gottingen' },
        ],
        title: 'The Chair At the End of the Table',
        locationLabel: 'Göttingen',
        yearLabel: '1917',
        image: {
          setting: 'a Göttingen seminar room with one empty chair, 1917',
          year: 1917,
          characters: ['noether'],
          mood: 'undiminished solitude',
          details: ['an empty chair at the head of a table', 'a full blackboard', 'stacked reprints', 'winter light'],
          alt: 'A seminar table with one empty chair at its head and a fully written blackboard behind.',
        },
        pages: [
          {
            id: 'empty',
            narration:
              'The chair at the head of the table is empty this term and nobody says where he is. The seminar meets anyway, because she is the one who books the room.',
          },
          {
            id: 'carry',
            narration:
              'She fills the blackboard without him and finds that the argument holds. It is the first time she has proved something important with nobody senior in the room to confirm it, and the confirmation turns out to have been decoration all along.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.stoodAlone', value: true },
          { type: 'flag', flag: 'noether.gottingenYears', value: true },
        ],
      },
    ],
  },

  {
    id: 'noether-wwi',
    characterId: 'noether',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 64 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1918 },
        ],
        title: 'The Benches Thin Out',
        locationLabel: 'Göttingen',
        yearLabel: '1916–1918',
        image: {
          setting: 'a university lecture room with many empty places, 1917',
          year: 1917,
          characters: ['noether'],
          mood: 'sombre, restrained, no combat imagery',
          details: ['half-empty benches', 'a posted list on a door', 'coats too thin for the season', 'a cold stove'],
          alt: 'A lecture room with many empty benches and a posted notice on the door.',
        },
        pages: [
          {
            id: 'benches',
            narration:
              'The benches thin out term by term. The posted list by the door is not an examination timetable. Nobody reads it aloud.',
          },
          {
            id: 'ration',
            narration:
              'The town is cold and thin. She lectures in her coat, and the mathematics goes on being true, which is not a consolation exactly, but is the only thing in the building that has not got worse.',
          },
        ],
        effects: [
          { type: 'resources', effects: { wellbeing: -1, funds: -1 } },
          { type: 'flag', flag: 'noether.gottingenYears', value: true },
        ],
        historicalNote: 'German university life during 1914–18 was severely disrupted by conscription and shortage. The scene is dramatized and deliberately non-graphic.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1915 },
          { type: 'yearAtMost', year: 1918 },
        ],
        title: 'Four Winters',
        yearLabel: '1916–1918',
        image: {
          setting: 'a queue outside a shuttered shop in a German town, 1917',
          year: 1917,
          characters: ['noether'],
          mood: 'grey, enduring, no combat imagery',
          details: ['a ration queue', 'shuttered shop fronts', 'a folded newspaper', 'thin winter coats'],
          alt: 'People queueing outside a shuttered shop front on a grey winter street.',
        },
        pages: [
          {
            id: 'queue',
            narration:
              'The queue for bread is the length of the street and she does her thinking in it, because it is an hour and she has never learned to waste one.',
          },
          {
            id: 'gone',
            narration:
              'Two of the students who used to argue with her after lectures do not come back. She does not write about it anywhere. She simply stops saying their names when she lists who once asked the good questions.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: -1 } }],
        historicalNote: 'Shortage, conscription and bereavement reached every German academic household in 1914–18. Details are dramatized and non-graphic.',
      },
    ],
  },

  {
    id: 'noether-theorem-breakthrough',
    characterId: 'noether',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'noether-theorem', priority: 90 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'yearAtMost', year: 1921 },
        ],
        title: 'Every Symmetry Has a Debt',
        locationLabel: 'Göttingen',
        yearLabel: '1918',
        image: {
          setting: 'a night desk in Göttingen with a finished proof, 1918',
          year: 1918,
          characters: ['noether'],
          mood: 'clean, enormous, quiet',
          details: ['a short handwritten proof', 'a guttering lamp', 'an unread stack of physics offprints', 'a window at first light'],
          alt: 'A short handwritten proof lying under a lamp beside a window showing first light.',
        },
        pages: [
          {
            id: 'moment',
            narration:
              'It comes out short. That is the first surprise: after three years of a problem the physicists could not close, the answer fits on a few pages and does not need a single coordinate system.',
          },
          {
            id: 'statement',
            speaker: 'EMMY',
            dialogue: 'Wherever the laws do not care about a change, something is conserved. That is all it is. Every symmetry is somebody keeping an account.',
            narration: 'Energy, momentum, angular momentum — not separate accidents of nature, but the same fact seen from three sides.',
          },
          {
            id: 'cost',
            narration:
              'She has done it as an unpaid guest lecturing under another man’s name in a hungry town in the fourth winter of a war. The proof does not record any of that. It records only what follows from what.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.theoremProved', value: true },
          { type: 'theme', theme: 'structureOverCalculation', amount: 2 },
        ],
        historicalNote:
          'Noether’s 1918 paper established the correspondence between continuous symmetries and conservation laws. The wording of her spoken summary here is dramatized.',
      },
      {
        id: 'late',
        title: 'Late, and Still True',
        image: {
          setting: 'a plain desk with a finished proof and older dated notes, 1920s',
          year: 1922,
          characters: ['noether'],
          mood: 'vindication without an audience',
          details: ['a finished short proof', 'older notes dated years earlier', 'a paperweight', 'afternoon light'],
          alt: 'A short finished proof lying on top of older dated notes on a plain desk.',
        },
        pages: [
          {
            id: 'moment',
            narration:
              'It comes out short, which is the first surprise, and years late, which is the second. The dated pages underneath it show her circling the same statement for a long time without quite closing it.',
          },
          {
            id: 'statement',
            speaker: 'EMMY',
            dialogue: 'Wherever the laws do not care about a change, something is conserved. It was always going to be that. It only had to be said properly.',
            narration: 'The physicists who needed it most needed it some years ago. She writes it out anyway, because a thing that is true does not stop being useful for being late.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.theoremProved', value: true },
          { type: 'flag', flag: 'noether.theoremLate', value: true },
          { type: 'theme', theme: 'structureOverCalculation', amount: 2 },
        ],
        historicalNote:
          'The documented proof dates from 1918 at Göttingen. If this life reaches it by another road or later, the mathematics is unchanged and its reception is not.',
      },
    ],
  },

  {
    id: 'noether-card-theorem',
    characterId: 'noether',
    chapterId: 'breakthrough',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 80 },
    once: true,
    replacesContextCardId: 'noether-card-1918-theorem',
    variants: [
      {
        id: 'read',
        conditions: [
          { type: 'projectCompleted', projectId: 'noether-theorem' },
          { type: 'yearAtLeast', year: 1917 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'The Physicists Read It',
        locationLabel: 'Göttingen',
        yearLabel: '1918',
        image: {
          setting: 'a pile of arrived correspondence around a journal offprint, 1918',
          year: 1918,
          characters: ['noether'],
          mood: 'quiet recognition',
          details: ['a stitched offprint', 'letters with different hands', 'a paper knife', 'a lamp'],
          alt: 'A stitched journal offprint surrounded by opened letters in different handwriting.',
        },
        pages: [
          {
            id: 'offprints',
            narration:
              'The offprints go out and the letters come back. Not many, but the right ones: men who have spent three years failing at this, writing to say that they have read it twice and it is correct and it is not what they expected.',
          },
          {
            id: 'penetrating',
            narration:
              'One of them writes that he had not thought such general things could be said so exactly. She reads that sentence, decides it is the nicest thing anyone has said about her work, and files it with the household accounts because she has nowhere else to put paper.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'noether-card-1918-theorem' },
          { type: 'resources', effects: { standing: 1 } },
          { type: 'flag', flag: 'noether.gottingenYears', value: true },
        ],
        historicalNote:
          'Einstein and Hilbert both recognised the 1918 result as fundamental, and Einstein wrote admiringly of it to Hilbert. The letters here are paraphrase, not quotation.',
      },
      {
        id: 'working',
        conditions: [
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'yearAtLeast', year: 1917 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'The Accounts That Will Not Balance',
        locationLabel: 'Göttingen',
        yearLabel: '1918',
        image: {
          setting: 'a blackboard crowded with tensor notation, Göttingen 1918',
          year: 1918,
          characters: ['noether'],
          mood: 'absorbed, frustrated, close',
          details: ['a crowded blackboard', 'chalk stubs', 'physics offprints on a bench', 'a stopped clock'],
          alt: 'A crowded blackboard of dense notation with chalk stubs on the ledge.',
        },
        pages: [
          {
            id: 'problem',
            narration:
              'The gravitation theory will not keep its energy accounts. Everyone in the building agrees it is embarrassing and nobody can say why it happens.',
          },
          {
            id: 'suspicion',
            speaker: 'EMMY',
            dialogue: 'You are all asking what the energy is. Ask instead what the theory refuses to notice, and the answer will fall out of the refusal.',
            narration: 'She is nearly there. Nearly there, in her case, means she can see the shape of the finished thing through the frosted glass of a proof she has not written yet.',
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'noether-card-1918-theorem' },
          { type: 'flag', flag: 'noether.gottingenYears', value: true },
        ],
        historicalNote:
          'The energy-conservation difficulty in general relativity is what brought Noether to Göttingen. The dialogue is dramatized.',
      },
      {
        id: 'asked-not-arrived',
        conditions: [
          { type: 'yearAtLeast', year: 1918 },
          { type: 'yearAtMost', year: 1919 },
          { type: 'locationIsNot', locationId: 'gottingen' },
          { any: [
              { type: 'choiceWas', choiceKey: 'noether-breakthrough-opening:choice', choiceId: 'go' },
              { type: 'choiceWas', choiceKey: 'noether-breakthrough-opening:choice', choiceId: 'ask-title' },
            ] },
        ],
        title: 'Working On It From Here',
        yearLabel: '1918',
        image: {
          setting: 'a crowded provincial desk with physics offprints and a train timetable, 1918',
          year: 1918,
          characters: ['noether'],
          mood: 'held back, working anyway',
          details: ['physics offprints', 'an unused railway timetable', 'a page of invariance conditions', 'a low lamp'],
          alt: 'Physics offprints and a folded railway timetable beside a page of handwritten conditions.',
        },
        pages: [
          {
            id: 'accepted',
            narration:
              'She has written that she will come. The fare is not in the house and the war has made the fare worse, and so the problem comes to her instead, in offprints, three weeks after everyone at Göttingen has read them.',
          },
          {
            id: 'work',
            speaker: 'EMMY',
            dialogue: 'They are asking what the energy is. That is the wrong question. Ask what the theory refuses to notice — the answer falls out of the refusal.',
            narration: 'She says it to a room with nobody in it. Then she writes it in a letter, which takes four days, and by then somebody there has said something else.',
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'noether-card-1918-theorem' }],
        historicalNote:
          'Noether was invited to Göttingen in 1915 and went. This variant belongs to the life that accepted and could not afford the move; the conservation problem itself was public in the 1918 literature.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1918 },
          { type: 'yearAtMost', year: 1919 },
        ],
        title: 'Somebody Should Ask Her',
        yearLabel: '1918',
        image: {
          setting: 'a reading table with journals opened to a physics paper, 1918',
          year: 1918,
          characters: ['noether'],
          mood: 'clear sight, no invitation',
          details: ['open journals', 'a pencilled margin note', 'a reading lamp', 'a cold room'],
          alt: 'Open journals on a reading table with a pencilled note in the margin.',
        },
        pages: [
          {
            id: 'journal',
            narration:
              'The problem is in the journals for anyone to read: the new gravitation theory cannot make its conservation laws behave. Three papers this year have circled it and none has closed it.',
          },
          {
            id: 'margin',
            narration:
              'In the margin of the third she writes six words about invariance and underlines two of them. Nobody has written to ask her. The margin note stays in the margin.',
          },
        ],
        effects: [{ type: 'markContextCardSeen', cardId: 'noether-card-1918-theorem' }],
        historicalNote:
          'The conservation-law problem was public in the physics literature of 1917–18 wherever a reader sat. Whether Noether was asked to solve it depended on being at Göttingen.',
      },
    ],
  },

  {
    id: 'noether-breakthrough-close',
    characterId: 'noether',
    chapterId: 'breakthrough',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'habilitated',
        conditions: [{ type: 'projectCompleted', projectId: 'noether-theorem' }],
        title: 'Her Own Name In the Catalogue',
        locationLabel: 'Göttingen',
        yearLabel: '1919',
        image: {
          setting: 'a printed course catalogue with a name newly set in type, 1919',
          year: 1919,
          characters: ['noether'],
          mood: 'sober victory',
          details: ['a fresh course catalogue', 'a name in new type', 'a chalk-marked sleeve', 'an open window'],
          alt: 'A newly printed course catalogue open to a page listing a lecturer’s name.',
        },
        pages: [
          {
            id: 'print',
            narration:
              'The habilitation comes through in the end, four years late, from a country that has lost a war and rewritten some of its rules in the confusion. Her name is set in type as the lecturer. She looks at it for a while.',
          },
          {
            id: 'plain',
            narration:
              'It brings no salary worth the word. It brings the right to be listed, and she finds that after eleven years of not being listed she is not too proud to want it.',
          },
        ],
        historicalNote:
          'Noether was granted habilitation in 1919 after the political changes at the end of the war; the post carried no proper salary for several more years.',
      },
      {
        id: 'gottingen',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.gottingenYears' }],
        title: 'Assisting, Still',
        locationLabel: 'Göttingen',
        yearLabel: '1919',
        image: {
          setting: 'a course catalogue entry naming another lecturer, 1919',
          year: 1919,
          characters: ['noether'],
          mood: 'patient, unresolved',
          details: ['a catalogue entry', 'a smaller line of type beneath it', 'chalk on a cuff', 'a shut office door'],
          alt: 'A course catalogue entry with a smaller supporting line of type beneath the lecturer’s name.',
        },
        pages: [
          {
            id: 'line',
            narration:
              'Her name is still the small line under somebody else’s. The war has ended, the empire has ended, and the line of type has not moved.',
          },
          {
            id: 'students',
            narration:
              'The students, though, come to her door and not to his, and they have started saying that they do it Noether’s way, as if it were a technique rather than a person. That is a kind of listing too.',
          },
          {
            id: 'porter',
            speaker: 'THE PORTER',
            dialogue: 'Room fourteen, Fräulein Doktor. I have put you down in the book as the lecturer, since somebody has to be.',
            narration: 'It is the first time her name has been written next to a room by anyone with the authority to write it, and the man has no authority at all.',
          },
        ],
      },
      {
        id: 'default',
        title: 'The Decade Turns Without Her',
        yearLabel: '1919',
        image: {
          setting: 'a provincial German street at the end of the war, 1919',
          year: 1919,
          characters: ['noether'],
          mood: 'quiet, unrecorded',
          details: ['a newspaper hoarding', 'shuttered windows', 'a bundle of journals under an arm', 'winter rain'],
          alt: 'A provincial street with a newspaper hoarding and shuttered windows in winter rain.',
        },
        pages: [
          {
            id: 'news',
            narration:
              'The empire ends in the newspapers and the rules change slightly for everyone, including for women who wish to lecture. She reads it standing up, in the rain, outside the vendor’s stall.',
          },
          {
            id: 'unmoved',
            narration:
              'Four years too late for the problem she had been watching, and worded so carefully that it names nobody at all. She reads it twice and folds the paper into her coat.',
          },
          {
            id: 'porter',
            speaker: 'THE PORTER',
            dialogue: 'Room fourteen again, Fräulein Doktor. I have stopped asking anyone whether I may give it to you.',
            narration: 'It is the only appointment she holds. She takes room fourteen and fills the blackboard in it, and the term begins.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-crisis-opening',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'habilitated',
        conditions: [{ type: 'projectCompleted', projectId: 'noether-theorem' }],
        title: 'What To Do With a Room',
        locationLabel: 'Göttingen',
        yearLabel: '1919',
        image: {
          setting: 'a small university office newly occupied, 1919',
          year: 1919,
          characters: ['noether'],
          mood: 'possibility, appetite',
          details: ['a bare desk', 'a stack of offprints on the floor', 'a borrowed chair', 'a key on the desk'],
          alt: 'A small bare office with offprints stacked on the floor and a key lying on the desk.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'She has a room, a key, and the right to announce a course. It has taken nineteen years from the first corridor bench to the key.',
          },
          {
            id: 'thought',
            narration:
              'What she wants to do with it is not a theorem. It is a rebuilding: take algebra apart down to its joints and put it back together so that the proofs are about the joints and not about the furniture.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'Do not compute it. Say what kind of thing it is, and then the computation will be obvious or unnecessary.',
            narration: 'The students who hear her say it that first year will spend their careers repeating it, some of them without remembering where they got it.',
          },
          {
            id: 'choice',
            narration: 'Fourteen years of teaching lie ahead of her, and only so many hours in them.',
            choices: [
              {
                id: 'build-school',
                label: 'Gather students, and build something that outlasts her.',
                effects: [
                  { type: 'flag', flag: 'noether.buildSchool', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: 2 },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                ],
              },
              {
                id: 'work-alone',
                label: 'Push the abstraction as far as it will go, alone.',
                effects: [
                  { type: 'flag', flag: 'noether.workAlone', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'walks',
                label: 'Teach in the mornings and argue on long walks in the afternoons.',
                effects: [
                  { type: 'flag', flag: 'noether.walksAndTeaching', value: true },
                  { type: 'resources', effects: { wellbeing: 1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'From 1919 Noether lectured in her own name and began the work that reoriented algebra around rings, ideals and modules. Her characteristic teaching slogan is paraphrased here rather than quoted.',
      },
      {
        id: 'gottingen-no-title',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'A Room She Has To Borrow',
        locationLabel: 'Göttingen',
        yearLabel: '1919',
        image: {
          setting: 'a borrowed seminar room in Göttingen at an unlisted hour, 1919',
          year: 1919,
          characters: ['noether'],
          mood: 'thwarted, undeterred, busy',
          details: ['a room-booking sheet', 'chairs carried in from elsewhere', 'a blackboard someone else has half filled', 'a coat hung on a window latch'],
          alt: 'A borrowed seminar room with chairs carried in and a half-filled blackboard.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'She has the town, the library, the students and the argument. What she does not have is a room with her name on the booking sheet, so she teaches in whichever one is free at an hour nobody wants.',
          },
          {
            id: 'thought',
            narration:
              'What she means to do is not a theorem. It is a rebuilding: take algebra apart down to its joints and put it back so that the proofs are about the joints and not about the furniture. Nobody has commissioned it. Nobody is going to.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'Do not compute it. Say what kind of thing it is, and then the computation will be obvious or unnecessary.',
            narration: 'Nine people are in the room and four of them will spend their careers repeating that sentence, some without remembering where they got it.',
          },
          {
            id: 'choice',
            narration: 'Fourteen years lie ahead of her in this town, and no institution intends to structure any of them.',
            choices: [
              {
                id: 'build-school',
                label: 'Gather students, and build something that outlasts her.',
                effects: [
                  { type: 'flag', flag: 'noether.buildSchool', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: 2 },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                ],
              },
              {
                id: 'work-alone',
                label: 'Push the abstraction as far as it will go, alone.',
                effects: [
                  { type: 'flag', flag: 'noether.workAlone', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'walks',
                label: 'Teach in the mornings and argue on long walks in the afternoons.',
                effects: [
                  { type: 'flag', flag: 'noether.walksAndTeaching', value: true },
                  { type: 'resources', effects: { wellbeing: 1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Noether taught at Göttingen for years without a proper post or salary. Her characteristic teaching slogan is paraphrased rather than quoted.',
      },
      {
        id: 'still-waiting',
        title: 'No Key, No Room',
        yearLabel: '1919',
        image: {
          setting: 'a private study with a growing stack of manuscripts, 1919',
          year: 1919,
          characters: ['noether'],
          mood: 'undeterred, unofficial',
          details: ['manuscripts tied in bundles', 'a borrowed table', 'journals with cut pages', 'a small stove'],
          alt: 'Manuscripts tied into bundles on a borrowed table beside journals.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'She has no room and no key. She has a table, and the run of a library where the porter has decided, on his own authority, that she counts.',
          },
          {
            id: 'thought',
            narration:
              'What she wants to do is not a theorem. It is a rebuilding: take algebra apart down to its joints and reassemble it so that the proofs are about the joints. Nobody has commissioned this. Nobody will.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'Do not compute it. Say what kind of thing it is, and the computation becomes obvious or unnecessary.',
            narration: 'She says it to two students who found her by asking around, in a room that is not hers, at an hour that is on no timetable.',
          },
          {
            id: 'choice',
            narration: 'Fourteen years lie ahead of her, and no institution intends to structure any of them.',
            choices: [
              {
                id: 'build-school',
                label: 'Gather students, and build something that outlasts her.',
                effects: [
                  { type: 'flag', flag: 'noether.buildSchool', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: 2 },
                  { type: 'resources', effects: { network: 2, funds: -1 } },
                ],
              },
              {
                id: 'work-alone',
                label: 'Push the abstraction as far as it will go, alone.',
                effects: [
                  { type: 'flag', flag: 'noether.workAlone', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: -1 },
                  { type: 'resources', effects: { standing: 1, wellbeing: -1 } },
                ],
              },
              {
                id: 'walks',
                label: 'Teach in the mornings and argue on long walks in the afternoons.',
                effects: [
                  { type: 'flag', flag: 'noether.walksAndTeaching', value: true },
                  { type: 'resources', effects: { wellbeing: 1, network: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Noether’s structural programme is documented; whether she had an official position from which to pursue it depends on the road taken here.',
      },
    ],
  },

  {
    id: 'noether-father-death',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 60 },
    once: true,
    variants: [
      {
        id: 'erlangen',
        conditions: [
          { type: 'locationIs', locationId: 'erlangen' },
          { type: 'yearAtLeast', year: 1920 },
          { type: 'yearAtMost', year: 1925 },
        ],
        title: 'The Study, Afterwards',
        locationLabel: 'Erlangen',
        yearLabel: '1921',
        image: {
          setting: 'a quiet study with papers left in order, early 1920s',
          year: 1921,
          characters: ['noether'],
          mood: 'restrained grief',
          details: ['a chair pushed back from a desk', 'dictation papers squared into a pile', 'a shuttered window', 'a stopped clock'],
          alt: 'A study with a chair pushed back from a desk and papers squared into a neat pile.',
        },
        pages: [
          {
            id: 'chair',
            narration:
              'Her father dies that winter. She squares the papers on his desk into a pile, because they are unfinished and somebody ought to know where they stopped, and then she sits in the chair for a while.',
          },
          {
            id: 'wall',
            narration:
              'The wall she used to listen through is only a wall now. She had thought the mathematics came from the other side of it. It turns out she has been the source of the sound in that house for some years without noticing.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.fatherGone', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote: 'Max Noether died in 1921. The interior detail is dramatized; the loss is documented.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1920 },
          { type: 'yearAtMost', year: 1925 },
        ],
        title: 'A Telegram, and Then Work',
        yearLabel: '1921',
        image: {
          setting: 'a desk with an opened telegram, early 1920s',
          year: 1921,
          characters: ['noether'],
          mood: 'restrained grief',
          details: ['an opened telegram', 'a train timetable', 'a black coat over a chair', 'lamplight'],
          alt: 'An opened telegram lying beside a train timetable on a working desk.',
        },
        pages: [
          {
            id: 'telegram',
            narration:
              'The telegram comes in the middle of a term. She goes home, and comes back, and takes the Thursday lecture as advertised, and the students who did not know say afterwards that she seemed exactly as usual.',
          },
          {
            id: 'after',
            narration:
              'What she has lost is not only a father. It is the last person who knew her before she was anybody, and who used to say her name in the tone people use for the weather.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.fatherGone', value: true },
          { type: 'resources', effects: { wellbeing: -1 } },
        ],
        historicalNote: 'Max Noether died in 1921. The scene is dramatized around the documented fact.',
      },
    ],
  },

  {
    id: 'noether-ideal-theory-breakthrough',
    characterId: 'noether',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'noether-ideal-theory', priority: 86 },
    once: true,
    variants: [
      {
        id: 'axiomatic',
        conditions: [{ type: 'insightAcquired', insightId: 'axiomatic-method' }],
        title: 'Down To the Joints',
        image: {
          setting: 'a blackboard holding a short list of conditions, early 1920s',
          year: 1921,
          characters: ['noether'],
          mood: 'austere satisfaction',
          details: ['a nearly empty blackboard', 'four numbered conditions', 'a chalk stub', 'an attentive empty room'],
          alt: 'A nearly empty blackboard carrying four short numbered conditions.',
        },
        pages: [
          {
            id: 'board',
            narration:
              'The blackboard that used to be black with symbols now holds four lines. Four conditions on a ring, and from them the whole apparatus of factorisation comes out like a drawer sliding open.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'You see? We have thrown away the numbers and kept the reason. Now it is true of things nobody has invented yet.',
            narration: 'It will be true of things nobody has invented yet. That is the part she cares about and the part that will take twenty years to become obvious.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.ringsRebuilt', value: true },
          { type: 'theme', theme: 'structureOverCalculation', amount: 2 },
        ],
        historicalNote:
          'Noether’s ideal-theory papers of the early 1920s recast algebra around chain conditions on rings. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Conditions On a Ring',
        image: {
          setting: 'a working desk with a short manuscript and many discarded drafts, early 1920s',
          year: 1921,
          characters: ['noether'],
          mood: 'concentrated, austere',
          details: ['a short final manuscript', 'a heap of discarded sheets', 'an inkwell', 'winter light'],
          alt: 'A short final manuscript sitting on top of a heap of discarded drafts.',
        },
        pages: [
          {
            id: 'discard',
            narration:
              'The discarded sheets outnumber the kept ones twenty to one, and every discard is a special case she has managed to stop needing.',
          },
          {
            id: 'result',
            narration:
              'What is left is a handful of conditions and a proof that does not mention a single number. Colleagues who were trained on explicit computation read it and complain that there is nothing there. That is the point; she has taken the nothing out.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.ringsRebuilt', value: true },
          { type: 'theme', theme: 'structureOverCalculation', amount: 2 },
        ],
        historicalNote: 'Noether’s ideal-theory work of the early 1920s is documented; the workroom detail is dramatized.',
      },
    ],
  },

  {
    id: 'noether-vanderwaerden-encounter',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 74 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'yearAtLeast', year: 1924 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'The Dutchman Takes Notes',
        locationLabel: 'Göttingen',
        yearLabel: '1924',
        image: {
          setting: 'a crowded seminar room with a young man writing rapidly, mid 1920s',
          year: 1924,
          characters: ['noether'],
          mood: 'fast, generous, contagious',
          details: ['a notebook filling quickly', 'chalk dust', 'students standing at the back', 'a loose hairpin on the floor'],
          alt: 'A crowded seminar room where a young man at the front writes rapidly in a notebook.',
        },
        pages: [
          {
            id: 'pace',
            narration:
              'She lectures too fast. Everyone says so. The young Dutchman in the second row has solved it by writing down not the sentences but the architecture, and he is keeping up.',
          },
          {
            id: 'ask',
            speaker: 'VAN DER WAERDEN',
            dialogue: 'Fräulein Professor — nobody has written this down in order. May I try?',
            narration: 'She says yes immediately and without conditions, and never afterwards suggests that any of it was hers.',
          },
          {
            id: 'consequence',
            narration:
              'The book he makes of it will teach algebra to the world for fifty years. Her name will be in the preface. She thinks that is the correct arrangement and says so whenever anyone raises it.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.waerdenNotes', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'B. L. van der Waerden studied with Noether from 1924 and codified her methods in his textbook of modern algebra, crediting her lectures. The dialogue is dramatized. She was never a full professor; the students’ form of address here is a dramatized courtesy.',
      },
      {
        id: 'he-finds-her',
        conditions: [
          { type: 'narrativeFlag', flag: 'noether.buildSchool' },
          { type: 'yearAtLeast', year: 1924 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'He Comes Anyway',
        yearLabel: '1924',
        image: {
          setting: 'a small borrowed room with too many chairs carried in, mid 1920s',
          year: 1924,
          characters: ['noether'],
          mood: 'improvised, delighted',
          details: ['chairs carried in from a corridor', 'a notebook filling quickly', 'a travelling case by the door', 'chalk in a saucer'],
          alt: 'A small room with borrowed chairs and a travelling case standing by the door.',
        },
        pages: [
          {
            id: 'arrival',
            narration:
              'The young Dutchman finds her by asking three people and being told twice that she does not exist. He arrives with a case, sits at the front, and writes down not her sentences but the architecture under them.',
          },
          {
            id: 'ask',
            speaker: 'VAN DER WAERDEN',
            dialogue: 'Nobody has written this down in order. May I try?',
            narration: 'She says yes immediately and without conditions, and never afterwards suggests that any of it was hers.',
          },
          {
            id: 'consequence',
            narration:
              'The book he makes of it will teach algebra to the world for fifty years. Her name will be in the preface. She thinks that is the correct arrangement and says so whenever anyone raises it.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.waerdenNotes', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Van der Waerden came to Noether at Göttingen in 1924. If she is teaching elsewhere, the meeting is dramatized onto the road her life actually took; his textbook credit is documented.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1924 },
          { type: 'yearAtMost', year: 1932 },
          { type: 'projectNotCompleted', projectId: 'noether-algebra-school' },
        ],
        title: 'A Letter From a Young Man Who Cannot Find Her',
        yearLabel: '1924',
        image: {
          setting: 'a desk with an enquiring letter in a foreign hand, mid 1920s',
          year: 1924,
          characters: ['noether'],
          mood: 'wistful, wry',
          details: ['a letter in unfamiliar handwriting', 'a foreign stamp', 'an unopened journal', 'a cold cup'],
          alt: 'A letter in unfamiliar handwriting with a foreign stamp lying on a desk.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'A young Dutchman writes to ask where she lectures, because he has read two of her papers and can find no course announced anywhere under her name.',
          },
          {
            id: 'reply',
            narration:
              'She writes back with an address, an hour, and a warning that the hour is not official and the room is not hers. He does not come. Somebody advises him that the future of algebra is elsewhere, and he goes there, and takes a slower road to it.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.schoolNeverFormed', value: true }],
        historicalNote:
          'Van der Waerden’s arrival at Göttingen in 1924 is documented. Without that meeting his textbook — the main channel through which her methods reached the world — takes a different shape.',
      },
    ],
  },

  {
    id: 'noether-algebra-school-breakthrough',
    characterId: 'noether',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'noether-algebra-school', priority: 82 },
    once: true,
    variants: [
      {
        id: 'chosen',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.buildSchool' }],
        title: 'Her Students, Which Is To Say Her Work',
        image: {
          setting: 'a group walking a country road outside a university town, late 1920s',
          year: 1928,
          characters: ['noether'],
          mood: 'noisy, happy, unstoppable',
          details: ['a country road', 'walking sticks', 'a group in overcoats', 'a distant town spire'],
          alt: 'A group of walkers in overcoats on a country road outside a small town.',
        },
        pages: [
          {
            id: 'walk',
            narration:
              'On Sundays they walk out of town, eight or ten of them, and she talks the whole way and does not lower her voice for passing farmers. Somebody has to run ahead to open gates. The mathematics does not stop at gates.',
          },
          {
            id: 'method',
            speaker: 'EMMY',
            dialogue: 'It is not my result. If you can only get it from me, then it is not a result at all — it is a trick.',
            narration: 'She gives away theorems the way other people give away opinions. Several of her best ideas will appear under other names and she will be pleased about it in print.',
          },
          {
            id: 'sum',
            narration:
              'What she is building is not a book and not a chair. It is a way of thinking with legs, walking out of town on a Sunday in eight or ten pairs of shoes.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.schoolBuilt', value: true },
          { type: 'theme', theme: 'legacyThroughOthers', amount: 2 },
        ],
        historicalNote:
          'Noether’s students — the "Noether boys" — and her Sunday walking seminars are documented, as is her habit of giving ideas away without claiming credit. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Ones Who Kept Up',
        image: {
          setting: 'a small seminar room with more chairs than occupants, late 1920s',
          year: 1928,
          characters: ['noether'],
          mood: 'warm, unofficial',
          details: ['mismatched chairs', 'a small blackboard', 'a coat rack', 'notebooks left open'],
          alt: 'A small seminar room with mismatched chairs and open notebooks left on them.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'They come because somebody told them to. There is no credit attached, the hour is inconvenient, and the lecturer talks too fast and rubs the blackboard out before anyone has finished copying it.',
          },
          {
            id: 'why',
            speaker: 'EMMY',
            dialogue: 'Do not write down what I say. Write down what it would have to be true of.',
            narration: 'The ones who understand that instruction stop being students within about a year, and start arguing with her, which is the outcome she was after.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.schoolBuilt', value: true },
          { type: 'theme', theme: 'legacyThroughOthers', amount: 1 },
        ],
      },
    ],
  },

  {
    id: 'noether-representation-breakthrough',
    characterId: 'noether',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'noether-representation-theory', priority: 80 },
    once: true,
    variants: [
      {
        id: 'gottingen',
        conditions: [{ type: 'locationIs', locationId: 'gottingen' }],
        title: 'When Order Stops Mattering',
        locationLabel: 'Göttingen',
        image: {
          setting: 'a seminar blackboard with two products written side by side, late 1920s',
          year: 1929,
          characters: ['noether'],
          mood: 'sly delight',
          details: ['two products written side by side', 'an unequal sign', 'chalk in three colours', 'an evening room'],
          alt: 'A blackboard showing two products written side by side with an unequal sign between them.',
        },
        pages: [
          {
            id: 'swap',
            narration:
              'She writes the same two things multiplied in both orders and puts a line between them to say they are not the same. Half the room relaxes, because that is the world they live in, and half stiffens, because it is the world they had been promised did not exist.',
          },
          {
            id: 'consequence',
            speaker: 'EMMY',
            dialogue: 'Good. Now everything you knew is a special case, and the general case is easier. It usually is.',
            narration: 'Representations, algebras, the way a group can be made to act on something and be understood by watching what it does — the whole subject moves an inch and never moves back.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.noncommutative', value: true }],
        historicalNote:
          'Noether’s late-1920s work extended her structural methods to noncommutative algebras and representation theory. The dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The General Case Is Easier',
        image: {
          setting: 'a private desk with a completed noncommutative argument, late 1920s',
          year: 1929,
          characters: ['noether'],
          mood: 'absorbed, unshowy',
          details: ['a finished argument in a fair hand', 'reference offprints', 'a green desk lamp', 'a closed door'],
          alt: 'A finished mathematical argument written in a neat hand under a desk lamp.',
        },
        pages: [
          {
            id: 'done',
            narration:
              'She drops the assumption that multiplication does not care about order, expecting the machinery to break, and instead it gets simpler. She checks it twice, because that is not how the day usually goes.',
          },
          {
            id: 'reach',
            narration:
              'It reaches further than she can follow: into the algebra of matrices, into the description of groups by how they act. She writes down the general statement, and leaves the applications for people with more time.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.noncommutative', value: true }],
      },
    ],
  },

  {
    id: 'noether-einstein-letters',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'encounter',
    classification: 'Plausible',
    sourceIds: ['noether', 'einstein'],
    trigger: { event: 'afterAction', priority: 72 },
    once: true,
    variants: [
      {
        id: 'human-berlin',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1928 },
          { type: 'otherCharacterIsHuman', characterId: 'einstein' },
          { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin', yearTolerance: 2 },
        ],
        title: 'A Physicist Writes From Berlin',
        yearLabel: '1922',
        image: {
          setting: 'a desk with a letter in a physicist’s hand, early 1920s',
          year: 1922,
          characters: ['noether', 'einstein'],
          mood: 'warm, slightly astonished',
          details: ['a letter with a Berlin postmark', 'an offprint with pencilled ticks', 'a pen', 'morning light'],
          alt: 'A letter with a Berlin postmark lying on an offprint marked with pencilled ticks.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'The letter comes from Berlin, in a hand that does not bother with formalities, and it is about her theorem. He has been using it. He says so plainly, and asks a question about the boundary terms that shows he has read every line.',
          },
          {
            id: 'reply',
            speaker: 'EMMY',
            dialogue: 'You are worrying about the wrong end of it. The invariance decides the accounting. If the accounting looks strange, ask what the invariance was.',
            narration: 'She writes back the same evening. Neither of them mentions that they have never met.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 2, flag: 'conservation-letters' },
          { type: 'flag', flag: 'noether.berlinCorrespondence', value: true },
        ],
        historicalNote:
          'Einstein read and admired Noether’s work on conservation laws and praised it in correspondence. This particular exchange is dramatized.',
      },
      {
        id: 'npc-berlin',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1928 },
          { type: 'otherCharacterIsNpc', characterId: 'einstein' },
          { type: 'otherCharacterAt', characterId: 'einstein', locationId: 'berlin', yearTolerance: 2 },
        ],
        title: 'Praised In Somebody Else’s Post',
        yearLabel: '1922',
        image: {
          setting: 'a colleague’s office with a letter being read aloud, early 1920s',
          year: 1922,
          characters: ['noether', 'einstein'],
          mood: 'second-hand pride, amusement',
          details: ['a letter held up to a window', 'an office of stacked journals', 'two cups', 'a Berlin postmark'],
          alt: 'A letter held up to the window light in an office stacked with journals.',
        },
        pages: [
          {
            id: 'aloud',
            narration:
              'A colleague reads her a sentence out of his own post: a physicist in Berlin, writing about something else entirely, has broken off to say that Fräulein Noether’s work is penetrating and that he is astonished such general things can be said so exactly.',
          },
          {
            id: 'response',
            speaker: 'EMMY',
            dialogue: 'He might have written it to me. Still — read it again, and slowly, and I shall enjoy it twice.',
            narration: 'She laughs, and means both halves of it, and goes back to the seminar room.',
          },
        ],
        effects: [
          { type: 'relationship', characterId: 'einstein', familiarity: 1, respect: 2, flag: 'conservation-letters' },
          { type: 'flag', flag: 'noether.berlinCorrespondence', value: true },
        ],
        historicalNote:
          'Einstein wrote admiringly of Noether’s work to Hilbert rather than to her. The paraphrase here reflects the sense of what he wrote, not its wording.',
      },
      {
        id: 'no-letter',
        conditions: [
          { type: 'yearAtLeast', year: 1922 },
          { type: 'yearAtMost', year: 1928 },
        ],
        title: 'Cited, Not Written To',
        yearLabel: '1922',
        image: {
          setting: 'a library table with a journal open at a footnote, early 1920s',
          year: 1922,
          characters: ['noether'],
          mood: 'level, unsurprised',
          details: ['a journal open at a page of footnotes', 'a reading lamp', 'a pencil', 'a library clock'],
          alt: 'A journal open at a page of dense footnotes under a library reading lamp.',
        },
        pages: [
          {
            id: 'footnote',
            narration:
              'Her name appears in the physics literature that year, in the small type at the bottom of the page, attached to a result three authors are using without difficulty.',
          },
          {
            id: 'shrug',
            narration:
              'No letter comes. She has been in footnotes before. She notes, without bitterness and with some professional interest, that the third author has used it slightly wrong.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.citedNotAsked', value: true }],
      },
    ],
  },

  {
    id: 'noether-personal-walks',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 54 },
    once: true,
    variants: [
      {
        id: 'walks',
        conditions: [
          { type: 'narrativeFlag', flag: 'noether.walksAndTeaching' },
          { type: 'yearAtLeast', year: 1925 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'Talking All the Way To the Next Village',
        image: {
          setting: 'a muddy country lane in autumn, mid 1920s',
          year: 1926,
          characters: ['noether'],
          mood: 'happy, loud, unselfconscious',
          details: ['a muddy lane', 'walking boots', 'a hat carried rather than worn', 'an inn sign in the distance'],
          alt: 'A muddy country lane in autumn with an inn sign visible in the distance.',
        },
        pages: [
          {
            id: 'lane',
            narration:
              'Eleven kilometres to the inn and back, and she talks for all twenty-two of them. Her hat is carried rather than worn. Her hair comes down somewhere around the fourth kilometre and stays down.',
          },
          {
            id: 'joy',
            narration:
              'This is what she does instead of holidays, instead of concerts, instead of most of the things her contemporaries put in their memoirs. She has never understood why anyone would want the other kind of afternoon.',
          },
          {
            id: 'road',
            speaker: 'A STUDENT',
            dialogue: 'Fräulein Doktor — there is a farmer behind us and he has heard everything about ideals.',
            narration: 'She looks back, waves at the farmer, and picks the sentence up exactly where she dropped it.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
        historicalNote: 'Noether’s long walking seminars with her students are documented; the specific outing is dramatized.',
      },
      {
        id: 'strong',
        conditions: [
          { type: 'resourceAtLeast', resource: 'wellbeing', value: 6 },
          { type: 'yearAtLeast', year: 1925 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'Loud In a Quiet Town',
        image: {
          setting: 'a small-town café table covered in written-on paper, mid 1920s',
          year: 1926,
          characters: ['noether'],
          mood: 'gusto, appetite, noise',
          details: ['a café table', 'paper napkins written on', 'coffee cups', 'a disapproving neighbouring table'],
          alt: 'A café table covered in written-on paper napkins beside coffee cups.',
        },
        pages: [
          {
            id: 'cafe',
            narration:
              'She argues at full volume in the café and writes on the napkins. The neighbouring table moves. She notices about ten minutes later and is briefly, genuinely sorry.',
          },
          {
            id: 'body',
            narration:
              'She is heavy, near-sighted, badly dressed by any standard the town recognises, and the most cheerful person in the room. Nobody has ever seen her wish to be anyone else.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'Do not apologise to them. We are three lines from the end and they have coffee.',
            narration: 'They get to the end of it. The napkin goes into a coat pocket and is copied out properly that night.',
          },
        ],
        effects: [{ type: 'resources', effects: { wellbeing: 1 } }],
      },
      {
        id: 'tired',
        conditions: [
          { type: 'yearAtLeast', year: 1925 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'The Cost of Doing It Twice',
        image: {
          setting: 'a rented room at night with unmarked work still waiting, mid 1920s',
          year: 1926,
          characters: ['noether'],
          mood: 'weary, unbroken',
          details: ['an unmade bed', 'a stack of student sheets', 'a lamp turned low', 'boots by the door'],
          alt: 'A stack of student work beside a low lamp in a small rented room at night.',
        },
        pages: [
          {
            id: 'night',
            narration:
              'She teaches for nothing and thinks for herself and does both in the same twenty-four hours, and by the middle of the decade the arithmetic of it has started to show in her face.',
          },
          {
            id: 'anyway',
            narration:
              'She does not complain, exactly. She has simply stopped mentioning tiredness, in the way that people stop mentioning weather they cannot change.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'I am not tired of it. I am tired in it. Those are different, and only one of them is anybody’s business.',
            narration: 'She says it once, to a student who asked kindly, and then never again to anyone.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-moscow-winter',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 56 },
    once: true,
    variants: [
      {
        id: 'moscow',
        conditions: [
          { type: 'locationIs', locationId: 'moscow' },
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'A Term In the Snow',
        locationLabel: 'Moscow',
        image: {
          setting: 'a lecture room in Moscow in deep winter, late 1920s',
          year: 1929,
          characters: ['noether'],
          mood: 'foreign, welcomed, invigorated',
          details: ['frost on tall windows', 'a stove in the corner', 'a blackboard with mixed alphabets', 'heavy coats on hooks'],
          alt: 'A lecture room with frost on tall windows and a blackboard carrying two alphabets.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'The window frost does not melt all day. She lectures in a coat, in German, with a student translating a beat behind her, and writes in two alphabets because half the room reads one and half the other.',
          },
          {
            id: 'welcome',
            speaker: 'EMMY',
            dialogue: 'They put my name on the door here. On the door. I have been looking at it in passing for a week.',
            narration: 'It is the first place that has given her a room with her name on it without an argument first, and she is honest enough to admit that it matters.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.moscowTerm', value: true },
          { type: 'resources', effects: { network: 1, wellbeing: 1 } },
        ],
        historicalNote: 'Noether spent a visiting term in Moscow in 1928–29. The interior detail and dialogue are dramatized.',
      },
      {
        id: 'visited',
        conditions: [
          { type: 'visitedLocation', locationId: 'moscow' },
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'What She Brought Back From the East',
        image: {
          setting: 'a study with a foreign-language algebra text among German ones, around 1930',
          year: 1930,
          characters: ['noether'],
          mood: 'expanded, restless',
          details: ['a Cyrillic title on a spine', 'a stack of German offprints', 'a travel case still unpacked', 'a low fire'],
          alt: 'A book with a Cyrillic spine standing among German offprints beside a travel case.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'One spine on her shelf is in an alphabet none of her colleagues read. She takes it down more often than the others, partly for the mathematics and partly for the memory of a room where nobody was surprised to see her at the front of it.',
          },
          {
            id: 'talk',
            narration:
              'She speaks well of the visit, at length, to people who would rather she did not. There are already colleagues who flinch at the name of the city. She goes on saying it.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.moscowTerm', value: true }],
        historicalNote:
          'Noether’s Moscow visit and her warmth toward Russian colleagues were noted at Göttingen and by later authorities. Her private opinions are not documented in detail and are not put in her mouth here.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1927 },
          { type: 'yearAtMost', year: 1932 },
        ],
        title: 'An Invitation She Reads Twice',
        image: {
          setting: 'a desk with an invitation in a foreign hand, late 1920s',
          year: 1929,
          characters: ['noether'],
          mood: 'tempted, tethered',
          details: ['an invitation letter with foreign stamps', 'a railway map', 'a term timetable', 'winter dusk'],
          alt: 'An invitation letter with foreign stamps lying on top of a railway map.',
        },
        pages: [
          {
            id: 'invite',
            narration:
              'The invitation comes from a long way east and offers her, in plain language, a term as a professor. Not an assistantship. Not an assisting line under someone else’s name.',
          },
          {
            id: 'stay',
            narration:
              'She reads it twice, works out what the term would cost the students she has here, and puts it in the drawer with the language certificate. The drawer is now the archive of every life she did not take.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-prize-and-congress',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 50 },
    once: true,
    variants: [
      {
        id: 'standing',
        conditions: [
          { type: 'resourceAtLeast', resource: 'standing', value: 4 },
          { type: 'yearAtLeast', year: 1930 },
          { type: 'yearAtMost', year: 1933 },
        ],
        title: 'The Largest Room She Has Been Given',
        yearLabel: '1932',
        image: {
          setting: 'a large congress hall before a plenary lecture, 1932',
          year: 1932,
          characters: ['noether'],
          mood: 'arrival, plainness, no vanity',
          details: ['rows of seats filling', 'a wide platform', 'a printed programme', 'a glass of water on a lectern'],
          alt: 'A large congress hall filling with seated delegates before a lecture.',
        },
        pages: [
          {
            id: 'hall',
            narration:
              'The international congress gives her the big hall and an hour. The programme has her name in the same size type as everyone else’s, which she notices and then feels foolish for noticing.',
          },
          {
            id: 'speech',
            speaker: 'EMMY',
            dialogue: 'I shall not tell you any new theorems this morning. I shall tell you which questions have stopped being difficult, and why.',
            narration: 'She overruns by nine minutes. Nobody leaves. A prize is shared with her the same year, and the money is small and the fact of it is not.',
          },
        ],
        effects: [{ type: 'resources', effects: { standing: 1 } }],
        historicalNote:
          'Noether gave a plenary address at the 1932 International Congress of Mathematicians and shared a memorial prize the same year. The spoken line is dramatized.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1930 },
          { type: 'yearAtMost', year: 1933 },
        ],
        title: 'Peak Year',
        yearLabel: '1932',
        image: {
          setting: 'a desk with a congress programme and a small prize envelope, 1932',
          year: 1932,
          characters: ['noether'],
          mood: 'quiet high-water mark',
          details: ['a congress programme', 'a small envelope', 'stacked offprints', 'spring light through a window'],
          alt: 'A congress programme and a small envelope lying among stacked offprints.',
        },
        pages: [
          {
            id: 'year',
            narration:
              'For one year the profession behaves as though she had always been part of it: a large lecture, a shared prize, letters that begin without explaining who she is.',
          },
          {
            id: 'level',
            narration:
              'She is nearly fifty and assumes, reasonably, that this is the beginning of the part where it gets easier. She is wrong, and the year that proves it is already printed in the calendars.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-erlangen-decade',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'divergence',
    classification: 'Speculative',
    sourceIds,
    trigger: { event: 'afterAction', priority: 52 },
    once: true,
    variants: [
      {
        id: 'quiet-decade',
        conditions: [
          { type: 'locationIs', locationId: 'erlangen' },
          { type: 'yearAtLeast', year: 1926 },
          { type: 'projectNotCompleted', projectId: 'noether-algebra-school' },
          { type: 'narrativeFlag', flag: 'noether.workAlone' },
        ],
        title: 'The Quiet Decade',
        locationLabel: 'Erlangen',
        yearLabel: '1920s',
        image: {
          setting: 'a private study with a full shelf of unpublished notebooks, 1920s',
          year: 1926,
          characters: ['noether'],
          mood: 'still, undiminished, unwitnessed',
          details: ['a shelf of identical notebooks', 'a dated spine', 'an unopened letter tray', 'afternoon dust in the light'],
          alt: 'A shelf of identical handwritten notebooks with dates on their spines.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The notebooks are dated on the spine now, because there are too many to tell apart. Nineteen twenty-three is thicker than the others. Nobody has asked to read any of them.',
          },
          {
            id: 'papers',
            narration:
              'Twice a year a paper appears in the journals from somewhere else, doing a quarter of what is in her shelf, and doing it badly, and she reads it without envy and with a great deal of irritation.',
          },
          {
            id: 'still',
            speaker: 'EMMY',
            dialogue: 'It does not need me to be famous. It only needs somebody to write it down correctly. I can do that here.',
            narration: 'She says it to the shelf. The shelf is a poor audience but it does not interrupt, and she has had worse.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.quietDecade', value: true }],
        historicalNote:
          'This is the life that does not reach Göttingen. Her documented years from 1915 were spent there; the isolated decade shown here is the shape of the alternative.',
      },
    ],
  },

  {
    id: 'noether-card-dismissal',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'historicalEvent',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    replacesContextCardId: 'noether-card-1933-dismissal',
    variants: [
      {
        id: 'gottingen',
        conditions: [
          { type: 'locationIs', locationId: 'gottingen' },
          { type: 'yearAtLeast', year: 1931 },
          { type: 'yearAtMost', year: 1933 },
        ],
        title: 'The Letter With the Paragraph Number',
        locationLabel: 'Göttingen',
        yearLabel: '1933',
        image: {
          setting: 'an office doorway with an official notice, spring 1933',
          year: 1933,
          characters: ['noether'],
          mood: 'cold administrative violence, restrained',
          details: ['a typed official letter', 'a stamped paragraph number', 'a key on a desk', 'an emptied corridor'],
          alt: 'A typed official letter bearing a stamped paragraph number lying on a desk beside a key.',
        },
        pages: [
          {
            id: 'letter',
            narration:
              'It is one page, typed, correctly spelled, and it cites a paragraph number. Her permission to teach is withdrawn. The paragraph does not mention her mathematics because her mathematics is not what is at issue.',
          },
          {
            id: 'corridor',
            narration:
              'By summer the corridor has emptied. Colleagues she has argued with for eighteen years are packing, or not packing, or being quiet in a way she has not heard from them before. The institute that made this town the centre of the mathematical world takes about four months to stop being that.',
          },
          {
            id: 'choose',
            narration:
              'She is fifty-one, without a post, in a country that has just put the reason in writing.',
            choices: [
              {
                id: 'apartment',
                label: 'Hold the seminar in her flat, and let whoever comes, come.',
                effects: [
                  { type: 'flag', flag: 'noether.apartmentSeminar', value: true },
                  { type: 'theme', theme: 'dutyVsSafety', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'america',
                label: 'Answer the letter from across the ocean.',
                effects: [
                  { type: 'flag', flag: 'noether.answeredAmerica', value: true },
                  { type: 'resources', effects: { funds: 1, network: 1 } },
                ],
              },
              {
                id: 'wait',
                label: 'Wait. Orders like this have been reversed before.',
                effects: [
                  { type: 'flag', flag: 'noether.waited', value: true },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'noether-card-1933-dismissal' },
          { type: 'resources', effects: { funds: -2, exposure: 2 } },
        ],
        historicalNote:
          'Noether, who was Jewish, was barred from teaching by the April 1933 civil service law and dismissed from Göttingen. She continued to hold classes in her apartment. The letter is dramatized from the documented mechanism.',
      },
      {
        id: 'default',
        conditions: [
          { type: 'yearAtLeast', year: 1931 },
          { type: 'yearAtMost', year: 1933 },
        ],
        title: 'A Paragraph That Applies To Her',
        yearLabel: '1933',
        image: {
          setting: 'a kitchen table with a newspaper and an official gazette, spring 1933',
          year: 1933,
          characters: ['noether'],
          mood: 'restrained, clear-eyed, no violence shown',
          details: ['a folded newspaper', 'an official gazette', 'a cooling cup', 'a chair pushed back'],
          alt: 'A folded newspaper and an official gazette lying open on a kitchen table.',
        },
        pages: [
          {
            id: 'gazette',
            narration:
              'The law is printed in the gazette in the ordinary type used for ordinary laws. She reads the paragraph twice, the way she reads everything, and then a third time, which is not her habit.',
          },
          {
            id: 'apply',
            narration:
              'It does not matter which room she is standing in when she reads it. The paragraph reaches her there. Whatever position she holds, she does not hold it after this spring; whatever room she has been teaching in, it is not hers now.',
          },
          {
            id: 'choose',
            narration: 'She is fifty-one, in a country that has put the reason in writing, and the post still runs to other countries.',
            choices: [
              {
                id: 'apartment',
                label: 'Hold the seminar in her flat, and let whoever comes, come.',
                effects: [
                  { type: 'flag', flag: 'noether.apartmentSeminar', value: true },
                  { type: 'theme', theme: 'dutyVsSafety', amount: 2 },
                  { type: 'resources', effects: { wellbeing: 1, exposure: 1 } },
                ],
              },
              {
                id: 'america',
                label: 'Answer the letter from across the ocean.',
                effects: [
                  { type: 'flag', flag: 'noether.answeredAmerica', value: true },
                  { type: 'resources', effects: { funds: 1, network: 1 } },
                ],
              },
              {
                id: 'wait',
                label: 'Wait. Orders like this have been reversed before.',
                effects: [
                  { type: 'flag', flag: 'noether.waited', value: true },
                  { type: 'resources', effects: { wellbeing: -1 } },
                ],
              },
            ],
          },
        ],
        effects: [
          { type: 'markContextCardSeen', cardId: 'noether-card-1933-dismissal' },
          { type: 'resources', effects: { funds: -2, exposure: 2 } },
        ],
        historicalNote:
          'The April 1933 civil service law applied throughout Germany, wherever this life has taken her. The scene is written from inside the day the paragraph is read.',
      },
    ],
  },

  {
    id: 'noether-crisis-close',
    characterId: 'noether',
    chapterId: 'crisis',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'school-standing',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: ['noether-ideal-theory', 'noether-algebra-school', 'noether-representation-theory'],
            count: 2,
          },
        ],
        title: 'Fourteen Years, and a Locked Door',
        yearLabel: '1933',
        image: {
          setting: 'an emptied institute corridor in summer, 1933',
          year: 1933,
          characters: ['noether'],
          mood: 'grief without display',
          details: ['open office doors', 'crates half filled', 'a swept blackboard', 'summer light in an empty corridor'],
          alt: 'An emptied institute corridor with open doors and half-filled packing crates.',
        },
        pages: [
          {
            id: 'built',
            narration:
              'She rebuilt a subject in fourteen years, mostly without a salary, entirely without a chair. The proof of it is not on her shelf; it is in the way a generation of younger people now begin every sentence.',
          },
          {
            id: 'end',
            narration:
              'They cannot take that back. They can take the room, the students, the country, and the language she thinks in — and they do — and the sentences will still start that way.',
          },
        ],
      },
      {
        id: 'default',
        title: 'What the Spring Took',
        yearLabel: '1933',
        image: {
          setting: 'a room with belongings sorted into two piles, 1933',
          year: 1933,
          characters: ['noether'],
          mood: 'quiet dispossession',
          details: ['two sorted piles', 'a travelling case', 'string and brown paper', 'an unlit lamp'],
          alt: 'Belongings sorted into two piles beside an open travelling case.',
        },
        pages: [
          {
            id: 'piles',
            narration:
              'Two piles: what a case will hold, and what it will not. Books lose to papers. Papers lose to notebooks. The winter coat goes in and comes out twice.',
          },
          {
            id: 'quiet',
            narration:
              'What she has finished in this decade is hers and stays hers. What she has not finished will have to be finished somewhere else, or by somebody else, and she does not yet know which of those it will be.',
          },
        ],
      },
    ],
  },

  {
    id: 'noether-legacy-opening',
    characterId: 'noether',
    chapterId: 'legacy',
    kind: 'chapterOpening',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterOpening', priority: 90 },
    once: true,
    variants: [
      {
        id: 'crossing',
        conditions: [{ type: 'locationIs', locationId: 'brynMawr' }],
        title: 'Nine Days of Ocean',
        yearLabel: '1933',
        image: {
          setting: 'a ship’s deck in the north Atlantic, autumn 1933',
          year: 1933,
          characters: ['noether'],
          mood: 'suspended, forward-facing',
          details: ['a deck rail', 'a folded blanket on a deck chair', 'grey water', 'a notebook held against the wind'],
          alt: 'A deck rail and a folded blanket on a deck chair above grey Atlantic water.',
        },
        pages: [
          {
            id: 'deck',
            narration:
              'Nine days of grey water. She works on deck with the notebook held flat against the wind and gives up on the wind about noon each day.',
          },
          {
            id: 'language',
            narration:
              'She is going to a country whose language she learned to teach thirty-three years ago and has never once used for mathematics. She spends the crossing translating her own vocabulary and finds that several of her best words do not cross.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'Ring. Ideal. Module. Three words, and I must persuade a new set of students that they mean exactly what they say and nothing else.',
            narration: 'It is the same lecture she has given for fourteen years. She is looking forward to it, which surprises her.',
          },
          {
            id: 'choice',
            narration: 'Land in a week. Something has to be decided about what she is carrying and what she is not.',
            choices: [
              {
                id: 'wrote-students',
                label: 'Write ahead to every student, and tell them where to find her.',
                effects: [
                  { type: 'flag', flag: 'noether.wroteStudents', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: 2 },
                  { type: 'resources', effects: { network: 2 } },
                ],
              },
              {
                id: 'packed-work',
                label: 'Pack the offprints and leave the furniture.',
                effects: [
                  { type: 'flag', flag: 'noether.packedWork', value: true },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'started-over',
                label: 'Take almost nothing, and start the next lecture from the beginning.',
                effects: [
                  { type: 'flag', flag: 'noether.startedOver', value: true },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Noether emigrated to the United States in late 1933. Her language qualification of 1900 was in English and French. The crossing is dramatized.',
      },
      {
        id: 'apartment',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.apartmentSeminar' }],
        title: 'The Seminar In the Front Room',
        yearLabel: '1933',
        image: {
          setting: 'a private flat with chairs pulled into a circle, 1933',
          year: 1933,
          characters: ['noether'],
          mood: 'defiant domesticity',
          details: ['mismatched chairs in a circle', 'a small blackboard propped on a sideboard', 'coats piled on a bed', 'a teapot'],
          alt: 'Mismatched chairs pulled into a circle around a small blackboard propped on a sideboard.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'They come to the flat. Six, then nine, then eleven. There is a small blackboard propped against the sideboard and a teapot that is never quite hot enough and the mathematics is exactly the same mathematics.',
          },
          {
            id: 'who',
            narration:
              'Some of them arrive in uniforms. She teaches them. She has decided, apparently once and without discussion, that the algebra is not going to start asking who people are at the door.',
          },
          {
            id: 'letter',
            speaker: 'EMMY',
            dialogue: 'There is a women’s college in America that has written to me. I have been told the winters are mild and the students are serious. One of those will be a lie.',
            narration: 'She reads the letter aloud to the room, because the room is what she has instead of a faculty.',
          },
          {
            id: 'choice',
            narration: 'There is a letter to answer, and there is the case in the hall, and the case will not hold a life.',
            choices: [
              {
                id: 'wrote-students',
                label: 'Write ahead to every student, and tell them where to find her.',
                effects: [
                  { type: 'flag', flag: 'noether.wroteStudents', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: 2 },
                  { type: 'resources', effects: { network: 2 } },
                ],
              },
              {
                id: 'packed-work',
                label: 'Pack the offprints and leave the furniture.',
                effects: [
                  { type: 'flag', flag: 'noether.packedWork', value: true },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'started-over',
                label: 'Take almost nothing, and start the next lecture from the beginning.',
                effects: [
                  { type: 'flag', flag: 'noether.startedOver', value: true },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'After her dismissal Noether held classes in her Göttingen apartment, reportedly including students who came in Nazi uniform, before accepting the Bryn Mawr position. The dialogue is dramatized.',
      },
      {
        id: 'answered',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.answeredAmerica' }],
        title: 'A Berth Booked In Advance',
        yearLabel: '1933',
        image: {
          setting: 'a shipping office counter with a passage booked, 1933',
          year: 1933,
          characters: ['noether'],
          mood: 'brisk, undeceived',
          details: ['a printed ticket', 'a sailing schedule', 'a stamped document folder', 'a queue behind'],
          alt: 'A printed passenger ticket and sailing schedule on a shipping office counter.',
        },
        pages: [
          {
            id: 'ticket',
            narration:
              'She answered the letter within the week and the passage is booked before most of her colleagues have finished being outraged. Being right early is a habit and this time it is worth money.',
          },
          {
            id: 'college',
            narration:
              'A women’s college outside Philadelphia has found a salary for her out of an emergency fund. It is the first proper salary of her life, and she is fifty-one, and she notes the arithmetic without comment.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'They are paying me to teach algebra. Simply that. I have waited thirty years to be bored by a sentence like this one.',
            narration: 'She is not bored. She is packing at four in the morning and writing to three people about a proof.',
          },
          {
            id: 'choice',
            narration: 'A crossing takes nine days. Something has to be decided about what goes into the case.',
            choices: [
              {
                id: 'wrote-students',
                label: 'Write ahead to every student, and tell them where to find her.',
                effects: [
                  { type: 'flag', flag: 'noether.wroteStudents', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: 2 },
                  { type: 'resources', effects: { network: 2 } },
                ],
              },
              {
                id: 'packed-work',
                label: 'Pack the offprints and leave the furniture.',
                effects: [
                  { type: 'flag', flag: 'noether.packedWork', value: true },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'started-over',
                label: 'Take almost nothing, and start the next lecture from the beginning.',
                effects: [
                  { type: 'flag', flag: 'noether.startedOver', value: true },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Bryn Mawr College funded Noether’s appointment through emergency relief arrangements for dismissed European scholars. It was the first salaried academic position of her career. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'The Last German Winter',
        yearLabel: '1933',
        image: {
          setting: 'a room with the furniture still in it and the shelves half empty, winter 1933',
          year: 1933,
          characters: ['noether'],
          mood: 'suspended, clear-eyed, quiet',
          details: ['half-empty shelves', 'a stack of foreign envelopes', 'a coat on a hook', 'an unlit stove'],
          alt: 'Half-empty shelves beside a stack of envelopes with foreign stamps and a coat on a hook.',
        },
        pages: [
          {
            id: 'letters',
            narration:
              'The envelopes with foreign stamps come in twos and threes: a college outside Philadelphia, a committee in London, an institute nobody has heard of yet. Every one of them is a stranger offering her a country.',
          },
          {
            id: 'shelves',
            narration:
              'The shelves are going down faster than the year is. She takes books off them in the evenings and puts most of them back, which is not indecision but arithmetic: a case holds what a case holds.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'They have not taken the algebra. They cannot — it is not in the building. It is in about forty people, and most of them are already packing.',
            narration: 'She says it cheerfully, which is how she says everything, and it is the truest sentence anybody in that room says all winter.',
          },
          {
            id: 'choice',
            narration: 'Whatever the year does next, the case in the hall holds what it holds, and she is the one packing it.',
            choices: [
              {
                id: 'wrote-students',
                label: 'Write ahead to every student, and tell them where to find her.',
                effects: [
                  { type: 'flag', flag: 'noether.wroteStudents', value: true },
                  { type: 'theme', theme: 'legacyThroughOthers', amount: 2 },
                  { type: 'resources', effects: { network: 2 } },
                ],
              },
              {
                id: 'packed-work',
                label: 'Pack the offprints and leave the furniture.',
                effects: [
                  { type: 'flag', flag: 'noether.packedWork', value: true },
                  { type: 'resources', effects: { standing: 1 } },
                ],
              },
              {
                id: 'started-over',
                label: 'Take almost nothing, and start the next lecture from the beginning.',
                effects: [
                  { type: 'flag', flag: 'noether.startedOver', value: true },
                  { type: 'resources', effects: { wellbeing: 1 } },
                ],
              },
            ],
          },
        ],
        historicalNote:
          'Dismissed academics in 1933 were courted by relief committees and foreign institutions while still in Germany. Noether accepted Bryn Mawr; this variant covers the winter before any departure is settled.',
      },
    ],
  },

  {
    id: 'noether-atlantic-crossing',
    characterId: 'noether',
    chapterId: 'legacy',
    kind: 'relocation',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 86 },
    once: true,
    variants: [
      {
        id: 'arrived',
        conditions: [
          { type: 'locationIs', locationId: 'brynMawr' },
          { type: 'yearAtLeast', year: 1933 },
        ],
        title: 'Landfall',
        locationLabel: 'Bryn Mawr',
        yearLabel: '1933',
        image: {
          setting: 'a college gate on a Pennsylvania campus in late autumn, 1933',
          year: 1933,
          characters: ['noether'],
          mood: 'arrival, plain gratitude, disorientation',
          details: ['a stone gatepost', 'a travelling case set down on gravel', 'oak leaves', 'a lit window in a stone building'],
          alt: 'A travelling case set down on gravel beside a stone gatepost on an autumn campus.',
        },
        pages: [
          {
            id: 'gate',
            narration:
              'The case goes down on the gravel and she straightens up and looks at the building for longer than the woman who has come to meet her expects. Stone, ivy, a lit window on the first floor. It is quieter than any place she has worked in her life.',
          },
          {
            id: 'terms',
            speaker: 'EMMY',
            dialogue: 'You have written to me twice and neither letter explained who I am. Do you know how rare that is, to be simply expected?',
            narration: 'The woman laughs, not understanding, and carries the smaller of the two cases. The larger one holds paper and Emmy will not let go of it.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.crossedAtlantic', value: true },
          { type: 'resources', effects: { funds: 1, wellbeing: 1 } },
        ],
        historicalNote:
          'Noether arrived at Bryn Mawr College in the autumn of 1933, her position funded through emergency arrangements for dismissed European scholars. The arrival scene is dramatized.',
      },
      {
        id: 'berth-unused',
        conditions: [
          { type: 'narrativeFlag', flag: 'noether.answeredAmerica' },
          { type: 'yearAtLeast', year: 1934 },
          { not: { type: 'visitedLocation', locationId: 'brynMawr' } },
        ],
        title: 'The Sailing She Does Not Make',
        yearLabel: '1934',
        image: {
          setting: 'a hall table with a booked ticket and official forms, 1934',
          year: 1934,
          characters: ['noether'],
          mood: 'bureaucratic slow suffocation, no despair',
          details: ['a printed passage ticket', 'stamped and unstamped forms', 'a sailing schedule with a date circled', 'a hall clock'],
          alt: 'A printed passage ticket lying among stamped and unstamped official forms.',
        },
        pages: [
          {
            id: 'ticket',
            narration:
              'The ticket is real and the date on it is circled, and each time the date comes round something is missing: a stamp from one office, a fee to another, a signature from a man who is on leave.',
          },
          {
            id: 'method',
            narration:
              'She learns the offices the way she learns anything — by finding the structure. There are four of them and each requires a paper that one of the others will not issue until the first has issued its own. It is a beautiful little system and she is inside it.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'It is a closed loop. If it were algebra I could show you in one line why nothing can leave it.',
            narration: 'She says it laughing, because that is what she does, and then goes back to the table and takes the Tuesday class.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.stillInGermany', value: true }],
        historicalNote:
          'Noether reached the United States in 1933. Exit paperwork and funding did trap many dismissed academics; this variant belongs to the life in which the accepted post is never taken up.',
      },
      {
        id: 'packed-and-waiting',
        conditions: [
          { type: 'narrativeFlag', flag: 'noether.packedWork', value: true },
          { type: 'yearAtLeast', year: 1934 },
          { not: { type: 'visitedLocation', locationId: 'brynMawr' } },
        ],
        title: 'The Case By the Door',
        yearLabel: '1934',
        image: {
          setting: 'a hallway with a packed case standing ready, 1934',
          year: 1934,
          characters: ['noether'],
          mood: 'suspended, orderly, unbroken',
          details: ['a strapped travelling case', 'string and brown paper', 'a folded sailing schedule', 'an unlit hall lamp'],
          alt: 'A strapped travelling case standing ready in an unlit hallway beside a folded schedule.',
        },
        pages: [
          {
            id: 'case',
            narration:
              'The case has been packed since spring and stands by the door where she can trip over it, which she does, twice a week, and does not move it.',
          },
          {
            id: 'papers',
            narration:
              'The offprints went in first and the clothes went in around them. Whatever the papers of the country decide about her, the papers in the case are hers and are already sorted.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'I am not waiting to be allowed. I am waiting for a fare. Those look the same from outside and they are not the same at all.',
            narration: 'She says it to whoever is in the kitchen, and goes back to the table, and works.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.stillInGermany', value: true }],
        historicalNote:
          'Noether left for the United States in 1933. This variant belongs to the life in which the departure has not yet been possible.',
      },
      {
        id: 'still-here',
        conditions: [
          { type: 'yearAtLeast', year: 1934 },
          { not: { type: 'visitedLocation', locationId: 'brynMawr' } },
        ],
        title: 'A Country That Has Written It Down',
        yearLabel: '1934',
        image: {
          setting: 'a window over a quiet German street at dusk, 1934',
          year: 1934,
          characters: ['noether'],
          mood: 'narrowing, undramatic, watchful',
          details: ['a window over an empty street', 'a stack of unanswered foreign letters', 'a shaded lamp', 'a coat on a hook'],
          alt: 'A window over an empty street at dusk with a stack of letters on the sill.',
        },
        pages: [
          {
            id: 'street',
            narration:
              'The street below is the same street. That is the strange part: nothing is on fire, the trams run, the baker opens at six, and she is not permitted to stand in front of a class. The whole of it is one paragraph in one drawer in one office.',
          },
          {
            id: 'letters',
            narration:
              'The foreign letters go into a stack and the stack stops growing. People who wrote in the spring do not write in the autumn, not from unkindness but because they have found somebody else, or given up, or been given the same paragraph in their own language.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'Do not write to me about my situation. Write to me about the ascending chain condition, and I shall know how you are.',
            narration: 'She sends that sentence to four people in three countries. Three of them take the hint. The fourth writes about her situation anyway, and she answers that letter first.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.stillInGermany', value: true }],
        historicalNote:
          'Noether emigrated in 1933. This variant belongs to the life that did not get out, and is written from inside a narrowing rather than a catastrophe.',
      },
    ],
  },

  {
    id: 'noether-american-classroom',
    characterId: 'noether',
    chapterId: 'legacy',
    kind: 'personal',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'afterAction', priority: 78 },
    once: true,
    variants: [
      {
        id: 'students-followed',
        conditions: [
          { type: 'narrativeFlag', flag: 'noether.wroteStudents' },
          { type: 'locationIs', locationId: 'brynMawr' },
          { type: 'yearAtLeast', year: 1934 },
        ],
        title: 'The Ones Who Wrote Back',
        locationLabel: 'Bryn Mawr',
        yearLabel: '1934',
        image: {
          setting: 'a college study with letters pinned above a desk, 1934',
          year: 1934,
          characters: ['noether'],
          mood: 'scattered, tenacious, warm',
          details: ['letters pinned in a row above a desk', 'stamps from four countries', 'a train timetable', 'a dictionary held open with a paperweight'],
          alt: 'A row of letters pinned above a desk, bearing stamps from several countries.',
        },
        pages: [
          {
            id: 'wall',
            narration:
              'The letters go up in a row above the desk, and the stamps on them come from four countries. Her students are in Amsterdam, in Moscow, in two English towns, and one of them is not answering.',
          },
          {
            id: 'work',
            narration:
              'She answers all of them, at length, with mathematics in the middle and the practical questions at the end, which is the order she has always thought correct.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'They scattered the school. They did not scatter the algebra — it is in about forty heads and it does not need a building.',
            narration: 'On Thursdays she takes the train north and lectures to a room of men who crossed the same ocean, and comes back the same night.',
          },
        ],
        effects: [
          { type: 'flag', flag: 'noether.americanRoom', value: true },
          { type: 'resources', effects: { network: 1 } },
        ],
        historicalNote:
          'Noether’s Göttingen students were dispersed across Europe and America after 1933; she lectured weekly at the Institute for Advanced Study while teaching at Bryn Mawr. The letters are dramatized.',
      },
      {
        id: 'brynMawr',
        conditions: [
          { type: 'locationIs', locationId: 'brynMawr' },
          { type: 'yearAtLeast', year: 1934 },
        ],
        title: 'Prepositions, In Mid-Theorem',
        locationLabel: 'Bryn Mawr',
        yearLabel: '1934',
        image: {
          setting: 'a small American seminar room in spring, 1934',
          year: 1934,
          characters: ['noether'],
          mood: 'effortful, funny, alive',
          details: ['a dictionary open on a chair', 'a small blackboard', 'four notebooks', 'blossom at the window'],
          alt: 'A small seminar room with a dictionary open on a chair beside a low blackboard.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'Four young women and a dictionary. Her English is fluent, formal, and thirty years out of date, and she teaches straight through it at speed, correcting her prepositions in the middle of a theorem.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'Ring. Ideal. Module. Three words — and they mean exactly what they say and nothing else, which is more than can be said for the rest of your language.',
            narration: 'They laugh. Somebody writes the three words at the top of a fresh page, and the year starts properly from there.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.americanRoom', value: true }],
        historicalNote:
          'Noether taught a small group at Bryn Mawr from 1933, lecturing in English she had learned as a girl. The dialogue is dramatized.',
      },
      {
        id: 'front-room',
        conditions: [
          { type: 'yearAtLeast', year: 1935 },
          { not: { type: 'visitedLocation', locationId: 'brynMawr' } },
        ],
        title: 'A Class of Four, Then Three, Then Two',
        yearLabel: '1935',
        image: {
          setting: 'a kitchen table used as a seminar table, spring 1935',
          year: 1935,
          characters: ['noether'],
          mood: 'thinning, obstinate, tender',
          details: ['two cups where there were six', 'a page of working between them', 'a pencil worn short', 'an open window on a spring street'],
          alt: 'Two cups and a page of working on a kitchen table beside an open window.',
        },
        pages: [
          {
            id: 'thinning',
            narration:
              'It was four in the autumn and three by Christmas. One went to England, one stopped coming without saying why, and the third writes from a town she has to look up on a map.',
          },
          {
            id: 'two',
            narration:
              'So it is two of them at the kitchen table, the pencil worn down to a stub, doing modules because modules are what they were doing when the room emptied and neither of them can think of a reason to stop.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'Two is a seminar. One is a seminar, if the one argues back. Go on — you were about to tell me why the chain terminates.',
            narration: 'The window is open because it is spring. Outside, the trams run on time, and inside, somebody is about to be corrected, which is the only ordinary thing left in the country.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.frontRoomSchool', value: true }],
        historicalNote:
          'After her dismissal Noether held classes in her apartment, reportedly including students in Nazi uniform, before leaving Germany. This variant extends that arrangement into the life that never left.',
      },
    ],
  },

  {
    id: 'noether-brynmawr-breakthrough',
    characterId: 'noether',
    kind: 'breakthrough',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'projectCompleted', projectId: 'noether-bryn-mawr', priority: 84 },
    once: true,
    variants: [
      {
        id: 'students',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.wroteStudents' }],
        title: 'Four Young Women and a Train Timetable',
        locationLabel: 'Bryn Mawr',
        yearLabel: '1934',
        image: {
          setting: 'a college seminar room in Pennsylvania, mid 1930s',
          year: 1934,
          characters: ['noether'],
          mood: 'renewal, warmth, momentum',
          details: ['a small round table', 'a railway timetable pinned to a board', 'autumn light through leaded glass', 'chalk in a saucer'],
          alt: 'A small round seminar table in a college room with autumn light through leaded glass.',
        },
        pages: [
          {
            id: 'room',
            narration:
              'Four young women around a table, and a fifth who commutes. They are not afraid of her, which takes about three weeks, and then they are not afraid of the abstraction either, which takes longer.',
          },
          {
            id: 'train',
            narration:
              'Once a week she takes the train up to a new institute in a small town in New Jersey and lectures to a room of men who have crossed the same ocean. The timetable is pinned to the wall. She is, for the first time in her life, expected somewhere.',
          },
          {
            id: 'said',
            speaker: 'EMMY',
            dialogue: 'Begin again from the axioms. Not because you are beginners — because I am, in this language, and I refuse to be the only one.',
            narration: 'The letters from Göttingen still come, with worse news in each. She answers every one of them and then goes back to the table.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.brynMawrCircle', value: true }],
        historicalNote:
          'At Bryn Mawr Noether taught a small group including graduate students and postdoctoral fellows, and lectured weekly at the Institute for Advanced Study in Princeton. Dialogue is dramatized.',
      },
      {
        id: 'default',
        title: 'Beginning Again In Another Language',
        locationLabel: 'Bryn Mawr',
        yearLabel: '1934',
        image: {
          setting: 'a college study with a German–English dictionary open beside notes, mid 1930s',
          year: 1934,
          characters: ['noether'],
          mood: 'effortful renewal',
          details: ['an open dictionary', 'a lecture plan in two languages', 'a radiator', 'a window on a green campus'],
          alt: 'An open dictionary beside lecture notes written in two languages.',
        },
        pages: [
          {
            id: 'dictionary',
            narration:
              'The dictionary lives open on the desk. Her English is fluent and formal and thirty years out of date, and she teaches through it by sheer velocity, correcting her prepositions in mid-theorem.',
          },
          {
            id: 'again',
            narration:
              'She is fifty-two and starting a school from nothing for the second time. The difference is that this time somebody is paying her to do it, and she keeps mentioning that, and it keeps being funny to her.',
          },
        ],
        effects: [{ type: 'flag', flag: 'noether.brynMawrCircle', value: true }],
      },
    ],
  },

  {
    id: 'noether-legacy-close',
    characterId: 'noether',
    chapterId: 'legacy',
    kind: 'chapterClosing',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'chapterClosing', priority: 80 },
    once: true,
    variants: [
      {
        id: 'brynMawr',
        conditions: [{ type: 'projectCompleted', projectId: 'noether-bryn-mawr' }],
        title: 'Spring Term, Unfinished',
        locationLabel: 'Bryn Mawr',
        yearLabel: '1935',
        image: {
          setting: 'a college seminar room with a lecture left mid-course, spring 1935',
          year: 1935,
          characters: ['noether'],
          mood: 'abrupt quiet, tenderness',
          details: ['a lecture plan open at the next week’s topic', 'chairs left as they were', 'blossom outside the window', 'chalk unused in a saucer'],
          alt: 'A seminar room with chairs left as they were and a lecture plan open on the table.',
        },
        pages: [
          {
            id: 'plan',
            narration:
              'The lecture plan on the table is open at next week. There is an operation, which is described as routine, and she goes into it in the manner of someone clearing a small obstacle out of a busy term.',
          },
          {
            id: 'after',
            narration:
              'She does not come back. It takes four days and it is entirely unexpected, and the room stays as it was for a while because nobody in it can think what else to do with the chairs.',
          },
        ],
        historicalNote:
          'Noether died in April 1935 at the age of fifty-three, four days after surgery, unexpectedly. The account here is restrained and follows the documented outline.',
      },
      {
        id: 'crossed',
        conditions: [{ type: 'narrativeFlag', flag: 'noether.crossedAtlantic' }],
        title: 'Two Years',
        locationLabel: 'Bryn Mawr',
        yearLabel: '1935',
        image: {
          setting: 'a quiet campus path in spring, 1935',
          year: 1935,
          characters: ['noether'],
          mood: 'gentle, unresolved',
          details: ['a gravel path', 'blossom', 'a satchel of papers', 'a distant stone building'],
          alt: 'A gravel path across a spring campus with a stone building beyond.',
        },
        pages: [
          {
            id: 'two',
            narration:
              'Two years in the new country: a salary, a small circle, a weekly train, and the beginnings of a plan for what to do with noncommutative algebra when there is finally time.',
          },
          {
            id: 'stop',
            narration:
              'It stops in the spring, quickly and without warning, in the middle of a term she had every intention of finishing.',
          },
        ],
        historicalNote: 'Noether died unexpectedly in April 1935 following surgery, two years after emigrating.',
      },
      {
        id: 'default',
        title: 'Wherever the Last Room Was',
        yearLabel: '1935',
        image: {
          setting: 'a desk with an unfinished argument and a pen laid across it, 1935',
          year: 1935,
          characters: ['noether'],
          mood: 'quiet, unfinished',
          details: ['an unfinished page', 'a pen laid across it', 'a shaded lamp', 'a window at evening'],
          alt: 'An unfinished handwritten page with a pen laid across it beneath a shaded lamp.',
        },
        pages: [
          {
            id: 'page',
            narration:
              'The page stops in the middle of a line. It is not a dramatic line. It is the third step of something she expected to finish before supper.',
          },
          {
            id: 'end',
            narration:
              'She is fifty-three, and the room is quiet, and everything she has thought that anybody wrote down is now in other people’s handwriting.',
          },
        ],
        historicalNote: 'Noether died suddenly in April 1935 at fifty-three. Wherever this life placed her, the ending came at the same age and as abruptly.',
      },
    ],
  },

  {
    id: 'noether-epilogue',
    characterId: 'noether',
    kind: 'epilogue',
    classification: 'Documented',
    sourceIds,
    trigger: { event: 'epilogue', priority: 100 },
    once: true,
    variants: [
      {
        id: 'school-and-work',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'noether-invariant-theory',
              'noether-theorem',
              'noether-ideal-theory',
              'noether-algebra-school',
              'noether-representation-theory',
              'noether-bryn-mawr',
            ],
            count: 4,
          },
          { type: 'projectCompleted', projectId: 'noether-theorem' },
          { type: 'narrativeFlag', flag: 'noether.buildSchool' },
        ],
        title: 'In Other People’s Handwriting',
        yearLabel: '1935 and after',
        image: {
          setting: 'a shelf of algebra textbooks in many languages, later twentieth century',
          year: 1950,
          characters: ['noether'],
          mood: 'wide, quiet, continuing',
          details: ['textbooks in several languages', 'a worn spine', 'a lecture list on a noticeboard', 'a window onto a campus'],
          alt: 'A shelf of algebra textbooks in several languages, one spine visibly worn.',
        },
        pages: [
          {
            id: 'books',
            narration:
              'The books come out in one language and then in six. Her name is in the prefaces and rarely in the titles, and inside, on every page, is her way of asking the question: what kind of thing is this, and what else behaves the same way.',
          },
          {
            id: 'theorem',
            narration:
              'In physics her theorem stops being a result and becomes a habit of mind. Whole fields are built by looking for a symmetry first and reading off what must be conserved. Students learn it in a fortnight and are surprised to hear it once needed proving.',
          },
          {
            id: 'letter',
            narration:
              'A physicist she knew in Göttingen writes to a New York newspaper the week after she dies, to say to a general audience what her colleagues already knew: that she was the most significant creative mathematical genius so far produced since the higher education of women began.',
          },
          {
            id: 'voice',
            speaker: 'EMMY',
            dialogue: 'It is not mine. It never was. It is only true, and true things do not belong to anyone.',
            narration: 'She said something like it most weeks, to most people, and meant it every time.',
          },
        ],
        historicalNote:
          'Einstein published a letter about Noether in the New York Times shortly after her death in 1935; the phrase paraphrased here is close to his. Her practice of giving results away is documented. Her closing line is dramatized.',
      },
      {
        id: 'full',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'noether-invariant-theory',
              'noether-theorem',
              'noether-ideal-theory',
              'noether-algebra-school',
              'noether-representation-theory',
              'noether-bryn-mawr',
            ],
            count: 3,
          },
          { type: 'projectCompleted', projectId: 'noether-theorem' },
        ],
        title: 'The Shape Underneath',
        yearLabel: '1935 and after',
        image: {
          setting: 'a lecture hall decades later with her results on the board, mid twentieth century',
          year: 1955,
          characters: ['noether'],
          mood: 'continuation, matter-of-fact permanence',
          details: ['a board of ring axioms', 'a modern lecture hall', 'a stack of exercise sheets', 'daylight'],
          alt: 'A lecture board carrying a short list of ring axioms in a later twentieth-century hall.',
        },
        pages: [
          {
            id: 'axioms',
            narration:
              'Twenty years on, a lecturer somewhere writes four conditions on a blackboard and does not say where they came from, because by then they are simply how the subject begins.',
          },
          {
            id: 'physics',
            narration:
              'And in another building, a physicist writes down a symmetry and reads a conservation law straight off it, and calls the step by her name without pausing, the way one says a street name without thinking of the person.',
          },
          {
            id: 'voice',
            speaker: 'EMMY',
            dialogue: 'Good. Then it is finished properly. If they still had to remember me to use it, I should have written it badly.',
            narration: 'That is the only kind of immortality she ever argued for, and she argued for it loudly, on country roads, to anyone who would keep up.',
          },
        ],
        historicalNote:
          'The absorption of Noether’s methods into the standard vocabulary of algebra and physics is documented. Her closing line is dramatized in her known idiom.',
      },
      {
        id: 'algebra-legacy',
        conditions: [
          {
            type: 'completedProjectCountAtLeast',
            projectIds: [
              'noether-invariant-theory',
              'noether-theorem',
              'noether-ideal-theory',
              'noether-algebra-school',
              'noether-representation-theory',
              'noether-bryn-mawr',
            ],
            count: 3,
          },
        ],
        title: 'Four Conditions On a Blackboard',
        yearLabel: '1935 and after',
        image: {
          setting: 'a later twentieth-century lecture hall with a short list of axioms on the board',
          year: 1955,
          characters: ['noether'],
          mood: 'matter-of-fact permanence',
          details: ['four short numbered conditions', 'a stack of exercise sheets', 'a worn textbook spine', 'daylight'],
          alt: 'A lecture board carrying four short numbered conditions above a stack of exercise sheets.',
        },
        pages: [
          {
            id: 'axioms',
            narration:
              'Twenty years on, a lecturer somewhere chalks up four conditions and does not say where they came from, because by then they are simply how the subject begins.',
          },
          {
            id: 'students',
            narration:
              'Her students carried it out in their luggage, into six languages and four countries, and taught it to people who never knew there had been a woman at the front of the room it started in. The textbooks put her in the preface.',
          },
          {
            id: 'voice',
            speaker: 'EMMY',
            dialogue: 'Good. Then it is finished properly. If they still had to remember me to use it, I should have written it badly.',
            narration: 'That is the only kind of immortality she ever argued for, and she argued for it loudly, on country roads, to anyone who could keep up.',
          },
        ],
        historicalNote:
          'Noether’s algebraic methods reached the world mainly through her students and through van der Waerden’s textbook. This ending belongs to the life whose physics theorem was never closed. The closing line is dramatized in her known idiom.',
      },
      {
        id: 'theorem-only',
        conditions: [{ type: 'projectCompleted', projectId: 'noether-theorem' }],
        title: 'One Result, and What It Held Up',
        yearLabel: '1935 and after',
        image: {
          setting: 'a physics seminar board with a symmetry argument, mid twentieth century',
          year: 1950,
          characters: ['noether'],
          mood: 'narrow beam, long reach',
          details: ['a symmetry written on a board', 'a stack of physics preprints', 'a lamp', 'an evening room'],
          alt: 'A symmetry argument written on a seminar board beside a stack of preprints.',
        },
        pages: [
          {
            id: 'one',
            narration:
              'The algebra she meant to rebuild stayed mostly in her notebooks. The theorem did not. It went out into physics and quietly became load-bearing, and everything built after it leaned on it without asking.',
          },
          {
            id: 'name',
            narration:
              'People who could not have told you a single fact about her life used her name every working day, as the name of a step in an argument. She would have thought that a reasonable trade and said so.',
          },
        ],
        historicalNote: 'Noether’s theorem is the single most widely used of her results in physics, independent of her algebraic programme.',
      },
      {
        id: 'default',
        title: 'The Notebooks On the Shelf',
        yearLabel: '1935 and after',
        image: {
          setting: 'a shelf of handwritten notebooks in a quiet room, later 1930s',
          year: 1938,
          characters: ['noether'],
          mood: 'still, unclaimed, dignified',
          details: ['a shelf of dated notebooks', 'dust in low light', 'a chair left back from a desk', 'a shut window'],
          alt: 'A shelf of dated handwritten notebooks in a quiet, dim room.',
        },
        pages: [
          {
            id: 'shelf',
            narration:
              'The notebooks stay on the shelf, dated on the spine, in a hand that got faster every year. In them, decades early, are the questions that other people will spend careers arriving at by longer roads.',
          },
          {
            id: 'later',
            narration:
              'Some of it is found later and some of it is not. The parts that are found are published under other names by people who had never heard hers, and who are not lying: they did think of it themselves. She only thought of it first, in a room nobody gave her.',
          },
          {
            id: 'voice',
            speaker: 'EMMY',
            dialogue: 'It does not need me to be famous. It only needs somebody to write it down correctly.',
            narration: 'She said it more than once, usually to a room with nobody in it, and was right about the mathematics and wrong about how much the rest of it costs.',
          },
        ],
        historicalNote:
          'This ending belongs to the life that never reached Göttingen. Noether’s documented career ran through Göttingen from 1915 and Bryn Mawr from 1933.',
      },
    ],
  },
];
