import Person, { PERSON } from './person'
import { DataUtil } from './utils'

type PaperType = 'full paper' | 'poster' | 'workshop' | 'host'

interface Props {
  title: string
  authors: Person[]
  startDate: Date
  endDate?: Date
  link?: Record<string, string>
  conference: string
  type: PaperType
  imagePath?: string
  awards?: string[]
}

interface Publication extends Props {}
class Publication {
  constructor(props: Props) {
    Object.assign(this, props)
  }

  get links(): [string, string][] {
    return Object.keys(this.link || {}).map(key => [key, this.link![key]])
  }
}

export const PUBLICATION = {
  knowSim: new Publication({
    title: 'KnowSim: Evaluating Information Calibration in LLM Assistants with User Simulators that Learn',
    authors: [
      PERSON.yoonjooLee,
      PERSON.hyoungwook,
      PERSON.taesooKim,
      PERSON.shaoyangZhang,
      PERSON.philippeLaban,
      PERSON.veraLiao,
    ],
    startDate: new Date('2026-03'),
    endDate: new Date('2026-08'),
    conference: "EMNLP'26",
    type: 'full paper',
    imagePath: '/posters/knowsim.webp',
    link: {
      Paper: 'https://arxiv.org/abs/2608.17150',
      Website: 'https://yoonjoolee.com/knowsim/',
      Dataset: 'https://huggingface.co/datasets/yjlee36/knowchat-multi-turn-dialogues',
    },
  }),
  relianceScope: new Publication({
    title:
      "RelianceScope: An Analytical Framework for Examining Students' Reliance on Generative AI Chatbots in Problem Solving",
    authors: [PERSON.hyoungwook, PERSON.minjuYoo, PERSON.jieunHan, PERSON.zixinChen, PERSON.soYeonAhn, PERSON.xuWang],
    startDate: new Date('2025-08'),
    endDate: new Date('2026-02'),
    conference: "L@S'26",
    type: 'full paper',
    imagePath: '/posters/reliancescope.webp',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3774398.3811612',
      Website: '/project/reliancescope',
      Slides: 'https://docs.google.com/presentation/d/19R1vGbe9taKw28-d0zZJgYcf5a5lR3VCM961T_aZZ7Q/edit?usp=sharing',
      Dataset: 'https://osf.io/27ec5/overview?view_only=a8234a17f908464297d35d5ca1ef476c',
    },
    awards: ['Best Paper'],
  }),
  scaffoldingBreaks: new Publication({
    title:
      'When Scaffolding Breaks: Investigating Student Interaction with LLM-Based Writing Support in Real-Time K-12 EFL Classrooms',
    authors: [
      PERSON.junhoMyung,
      PERSON.hyunseungLim,
      PERSON.hanaOh,
      PERSON.hyoungwook,
      PERSON.nayeonKang,
      PERSON.soYeonAhn,
      PERSON.hwajungHong,
      PERSON.aliceOh,
      PERSON.juhoKim,
    ],
    startDate: new Date('2024-07'),
    endDate: new Date('2025-03'),
    imagePath: '/posters/scaffolding-breaks.webp',
    conference: "CHI'26",
    type: 'full paper',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3772318.3791517',
      Dataset: 'https://github.com/JunhoMyung/WriteAid-Data',
    },
    awards: ['Best Paper'],
  }),
  teachcraftWorkshop: new Publication({
    title: 'How Do Teachers Create Pedagogical Chatbots?: Current Practices and Challenges',
    authors: [PERSON.minjuYoo, PERSON.hyoungwook, PERSON.juhoKim],
    startDate: new Date('2024-10'),
    endDate: new Date('2025-03'),
    conference: "CHI'25 Workshop on Augmented Educators and AI",
    type: 'workshop',
    link: {
      Paper: 'https://arxiv.org/abs/2503.00967',
    },
  }),
  teachtune: new Publication({
    title: 'TeachTune: Reviewing Pedagogical Agents Against Diverse Student Profiles with Simulated Students',
    authors: [
      PERSON.hyoungwook,
      PERSON.minjuYoo,
      PERSON.jeongeonPark,
      PERSON.yokyungLee,
      PERSON.xuWang,
      PERSON.juhoKim,
    ],
    startDate: new Date('2023-12'),
    endDate: new Date('2025-01'),
    imagePath: '/posters/teachtune.webp',
    conference: "CHI'25",
    type: 'full paper',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3706598.3714054',
      Website: '/project/teachtune',
      Slides: 'https://docs.google.com/presentation/d/1U0MKm-wsd0e18SokBuylmbxD2Pdv8pZ5aEP1tOj6jcs/edit?usp=sharing',
    },
  }),
  teachyou: new Publication({
    title: 'Teach AI How to Code: Using Large Language Models as Teachable Agents for Programming Education',
    authors: [PERSON.hyoungwook, PERSON.seongheeLee, PERSON.hyungyuShin, PERSON.juhoKim],
    startDate: new Date('2023-05'),
    endDate: new Date('2024-01'),
    conference: "CHI'24",
    type: 'full paper',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3613904.3642349',
      Website: '/project/teachyou',
      Demo: '/project/teachyou/demo',
      Slides: 'https://docs.google.com/presentation/d/1zBuMDBlXCRtb9cLOgbnu8oLqWDEtNuj_s5Y8-VVv5S0/edit?usp=sharing',
      Dataset: 'https://github.com/TeachYou-org',
    },
    imagePath: '/posters/teachyou.webp',
    awards: ['Honorable Mention'],
  }),
  codeTree: new Publication({
    title: 'CodeTree: Learnersourcing Subgoal Hierarchies in Code Examples',
    authors: [PERSON.hyoungwook, PERSON.juhoKim],
    startDate: new Date('2021-10'),
    endDate: new Date('2023-09'),
    conference: "CSCW'24",
    type: 'full paper',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3637308',
      Website: '/project/codetree',
      Slides: 'https://docs.google.com/presentation/d/16gyYuJMdnoS4WgNY6zmWtY_NMSINaMfunGW0TnK71k4/edit?usp=sharing',
    },
    imagePath: '/posters/codetree.webp',
  }),
  processGallery: new Publication({
    title:
      'ProcessGallery: An Online Gallery that Highlights Improvements by Principles through Contrasting Pairs of Examples',
    authors: [
      PERSON.graceYen,
      PERSON.janeE,
      PERSON.hyoungwook,
      PERSON.mingyiLi,
      PERSON.graceLin,
      PERSON.isabellePan,
      PERSON.stevenDow,
    ],
    startDate: new Date('2022-06'),
    endDate: new Date('2023-09'),
    conference: "CSCW'24",
    type: 'full paper',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3637389',
    },
    imagePath: '/posters/processgallery.webp',
  }),
  inActionFeedback: new Publication({
    title: 'When to Give Feedback: Exploring Tradeoffs in the Timing of Design Feedback',
    authors: [
      PERSON.janeE,
      PERSON.graceYen,
      PERSON.isabellePan,
      PERSON.graceLin,
      PERSON.mingyiLi,
      PERSON.hyoungwook,
      PERSON.mengyiChen,
      PERSON.haijunXia,
      PERSON.stevenDow,
    ],
    startDate: new Date('2022-06'),
    endDate: new Date('2024-05'),
    conference: "C&C'24",
    type: 'full paper',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3635636.3656183',
      Website: 'https://ejane.me/inactionfeedback.html',
    },
    imagePath: '/posters/realtime-feedback.webp',
  }),
  subgoalHierarchies: new Publication({
    title: 'Learnersourcing Subgoal Hierarchies of Code Examples',
    authors: [PERSON.hyoungwook, PERSON.juhoKim],
    startDate: new Date('2021-10'),
    endDate: new Date('2022-05'),
    type: 'workshop',
    link: {
      Paper: '/files/L@S2022 Learnersourcing Subgoal Hierarchies of Code Examples.pdf',
      Slides: 'https://docs.google.com/presentation/d/1QLr-jHf4tTPvcdJF4GBrO47A10fGkWSdBQVZb2ts2Sc/edit?usp=sharing',
    },
    conference: "L@S'22 Workshop on Learnersourcing: Student-generated Content @ Scale",
  }),
  kuizWorkshop: new Publication({
    title: 'KUIZ: Encouraging Modular Learnersourcing of Multiple Choice Questions through LLM Interventions',
    authors: [PERSON.hyoungwook, PERSON.haesooKim, PERSON.nathanHaile, PERSON.soyeongMin, PERSON.juhoKim],
    startDate: new Date('2022-11'),
    endDate: new Date('2024-07'),
    type: 'workshop',
    link: {
      Paper: '/files/L@S2024 KUIZ.pdf',
      Slides: 'https://docs.google.com/presentation/d/1eG-Q3W8q_SVBAVDnQaQDXmBOasveJbHt-6_RSlN4hI4/edit?usp=sharing',
    },
    conference: "L@S'24 Workshop on Learnersourcing: Student-generated Content @ Scale",
  }),
  learnersourcingWorkshop: new Publication({
    title: 'Learnersourcing: Student-generated Content @ Scale: Annual Workshop',
    authors: [
      PERSON.stevenMoore,
      PERSON.anjaliSingh,
      PERSON.xinyiLu,
      PERSON.hyoungwook,
      PERSON.hassanKhosravi,
      PERSON.paulDenny,
      PERSON.christopherBrooks,
      PERSON.xuWang,
      PERSON.juhoKim,
      PERSON.johnStamper,
    ],
    startDate: new Date('2024-03'),
    endDate: new Date('2024-07'),
    type: 'host',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3657604.3664643',
      Website: 'https://sites.google.com/andrew.cmu.edu/learnersourcing',
    },
    conference: "L@S'24, L@S'25",
  }),
  hamamathWIP: new Publication({
    title: 'Using Large Language Models to Diagnose Math Problem-Solving Skills at Scale',
    authors: [
      PERSON.hyoungwook,
      PERSON.yoonsuKim,
      PERSON.yeonsuPark,
      PERSON.bekzatTilekbay,
      PERSON.jinhoSon,
      PERSON.juhoKim,
    ],
    startDate: new Date('2023-11'),
    endDate: new Date('2024-05'),
    type: 'poster',
    conference: "L@S'24 Work-in-Progress",
    link: { Paper: 'https://dl.acm.org/doi/10.1145/3657604.3664697' },
  }),
  ExGPTer: new Publication({
    title:
      'Moderating Customer Inquiries and Responses to Alleviate Stress and Reduce Emotional Dissonance of Customer Service Representatives',
    authors: [PERSON.hyungkwonKo, PERSON.kihoonSon, PERSON.hyoungwook, PERSON.yoonseoChoi, PERSON.anthonyChen],
    type: 'workshop',
    startDate: new Date('2022-11'),
    endDate: new Date('2023-05'),
    conference: "CHI'23 Generative AI and HCI Workshop",
    link: { Paper: '/files/CHI2023 ExGPTer.pdf' },
  }),
  automaTA: new Publication({
    title: 'automaTA: Human-Machine Interaction for Answering Context-Specific Questions',
    authors: [PERSON.hyoungwook, PERSON.changyoonLee, PERSON.donghoonHan, PERSON.aliceOh],
    startDate: new Date('2018-09'),
    endDate: new Date('2019-05'),
    type: 'poster',
    link: { Paper: 'https://dl.acm.org/doi/10.1145/3330430.3333658' },
    conference: "L@S'19 Work-in-Progress",
  }),
  solveDeep: new Publication({
    title: 'SolveDeep: Support Subgoal Learning in Online Math Problem Solving',
    authors: [PERSON.hyoungwook, PERSON.minsukChang, PERSON.juhoKim],
    startDate: new Date('2017-11'),
    endDate: new Date('2019-04'),
    type: 'poster',
    link: { Paper: 'https://dl.acm.org/doi/10.1145/3290607.3312822' },
    conference: "CHI'19 Extended Abstract",
  }),
} as const
export const PUBLICATIONS = DataUtil.sortByTime(Object.values(PUBLICATION))
