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
  imagePath: string
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
  teachyou: new Publication({
    title: 'Teach AI How to Code: Using Large Language Models as Teachable Agents for Programming Education',
    authors: [PERSON.hyoungwook, PERSON.seonghee, PERSON.hyungyu, PERSON.juho],
    startDate: new Date(2023, 5),
    endDate: new Date(2024, 1),
    conference: "CHI'24",
    type: 'full paper',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3613904.3642349',
      Website: '/project/teachyou',
      Demo: '/project/teachyou/demo',
      Slides: 'https://docs.google.com/presentation/d/1zBuMDBlXCRtb9cLOgbnu8oLqWDEtNuj_s5Y8-VVv5S0/edit?usp=sharing',
      GitHub: 'https://github.com/TeachYou-org',
    },
    imagePath: '/projects/teachyou.png',
    awards: ['Honorable Mention'],
  }),
  codeTree: new Publication({
    title: 'CodeTree: Learnersourcing Subgoal Hierarchies in Code Examples',
    authors: [PERSON.hyoungwook, PERSON.juho],
    startDate: new Date(2021, 10),
    endDate: new Date(2023, 9),
    conference: "CSCW'24",
    type: 'full paper',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3637308',
      Website: '/project/codetree',
      Slides: 'https://docs.google.com/presentation/d/16gyYuJMdnoS4WgNY6zmWtY_NMSINaMfunGW0TnK71k4/edit?usp=sharing',
    },
    imagePath: '/projects/codetree.png',
  }),
  processGallery: new Publication({
    title:
      'ProcessGallery: An Online Gallery that Highlights Improvements by Principles through Contrasting Pairs of Examples',
    authors: [
      PERSON.graceyen,
      PERSON.janee,
      PERSON.hyoungwook,
      PERSON.mingyi,
      PERSON.gracelin,
      PERSON.isabellepan,
      PERSON.stevendow,
    ],
    startDate: new Date(2022, 6),
    endDate: new Date(2023, 9),
    conference: "CSCW'24",
    type: 'full paper',
    link: {
      'ACM DL': 'https://dl.acm.org/doi/10.1145/3637389',
      Paper: '/files/CSCW2024 ProcessGallery.pdf',
    },
    imagePath: '/projects/processgallery.png',
  }),
  inActionFeedback: new Publication({
    title: 'When to Give Feedback: Exploring Tradeoffs in the Timing of Design Feedback',
    authors: [
      PERSON.janee,
      PERSON.graceyen,
      PERSON.isabellepan,
      PERSON.gracelin,
      PERSON.mingyi,
      PERSON.hyoungwook,
      PERSON.mengyichen,
      PERSON.haijunxia,
      PERSON.stevendow,
    ],
    startDate: new Date(2022, 6),
    endDate: new Date(2024, 5),
    conference: "C&C'24",
    type: 'full paper',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3635636.3656183',
      Website: 'https://ejane.me/inactionfeedback.html',
    },
    imagePath: '/projects/realtime-feedback.png',
  }),
  subgoalHierarchies: new Publication({
    title: 'Learnersourcing Subgoal Hierarchies of Code Examples',
    authors: [PERSON.hyoungwook, PERSON.juho],
    startDate: new Date(2021, 10),
    endDate: new Date(2022, 5),
    type: 'workshop',
    link: {
      Paper: '/files/L@S2022 Learnersourcing Subgoal Hierarchies of Code Examples.pdf',
      Slides: 'https://docs.google.com/presentation/d/1QLr-jHf4tTPvcdJF4GBrO47A10fGkWSdBQVZb2ts2Sc/edit?usp=sharing',
    },
    conference: "L@S'22 Workshop on Learnersourcing: Student-generated Content @ Scale",
    imagePath: '/projects/learnersourcing-subgoals.png',
  }),
  kuizWorkshop: new Publication({
    title: 'KUIZ: Encouraging Modular Learnersourcing of Multiple Choice Questions through LLM Interventions',
    authors: [PERSON.hyoungwook, PERSON.haesookim, PERSON.nathanHaile, PERSON.soyeongMin, PERSON.juho],
    startDate: new Date(2022, 11),
    endDate: new Date(2024, 7),
    type: 'workshop',
    link: {
      Paper: '/files/L@S2024 KUIZ.pdf',
      Slides: 'https://docs.google.com/presentation/d/1eG-Q3W8q_SVBAVDnQaQDXmBOasveJbHt-6_RSlN4hI4/edit?usp=sharing',
    },
    conference: "L@S'24 Workshop on Learnersourcing: Student-generated Content @ Scale",
    imagePath: '/projects/kuiz.png',
  }),
  learnersourcingWorkshop: new Publication({
    title: 'Learnersourcing: Student-generated Content @ Scale: 2nd Annual Workshop',
    authors: [
      PERSON.stevenMoore,
      PERSON.anjaliSingh,
      PERSON.xinyiLu,
      PERSON.hyoungwook,
      PERSON.hassanKhosravi,
      PERSON.paulDenny,
      PERSON.christopherBrooks,
      PERSON.xuWang,
      PERSON.juho,
      PERSON.johnStamper,
    ],
    startDate: new Date(2024, 3),
    endDate: new Date(2024, 7),
    type: 'host',
    link: {
      Paper: 'https://dl.acm.org/doi/10.1145/3657604.3664643',
      Website: 'https://sites.google.com/andrew.cmu.edu/learnersourcing',
    },
    conference: "L@S'24",
    imagePath: '/projects/learnersourcing-workshop.png',
  }),
  hamamathWIP: new Publication({
    title: 'Using Large Language Models to Diagnose Math Problem-Solving Skills at Scale',
    authors: [
      PERSON.hyoungwook,
      PERSON.yoonsukim,
      PERSON.yeonsupark,
      PERSON.bekzattilekbay,
      PERSON.jinhoson,
      PERSON.juho,
    ],
    startDate: new Date(2023, 11),
    endDate: new Date(2024, 5),
    type: 'poster',
    conference: "L@S'24 Work-in-Progress",
    imagePath: '/projects/hamamath.png',
    link: { Paper: 'https://dl.acm.org/doi/10.1145/3657604.3664697' },
  }),
  ExGPTer: new Publication({
    title:
      'Moderating Customer Inquiries and Responses to Alleviate Stress and Reduce Emotional Dissonance of Customer Service Representatives',
    authors: [PERSON.hyungkwonko, PERSON.kihoonson, PERSON.hyoungwook, PERSON.yoonseochoi, PERSON.anthonychen],
    type: 'workshop',
    startDate: new Date(2022, 11),
    endDate: new Date(2023, 5),
    conference: "CHI'23 Generative AI and HCI Workshop",
    imagePath: '/projects/exgpter.png',
    link: { Paper: '/files/CHI2023 ExGPTer.pdf' },
  }),
  automaTA: new Publication({
    title: 'automaTA: Human-Machine Interaction for Answering Context-Specific Questions',
    authors: [PERSON.changyoon, PERSON.donghoon, PERSON.hyoungwook, PERSON.aliceoh],
    startDate: new Date(2018, 9),
    endDate: new Date(2019, 5),
    type: 'poster',
    link: { 'ACM DL': 'https://dl.acm.org/doi/10.1145/3330430.3333658', Paper: '/files/L@S2019 automaTA.pdf' },
    conference: "L@S'19 Work-in-Progress",
    imagePath: '/projects/automata.png',
  }),
  solveDeep: new Publication({
    title: 'SolveDeep: Support Subgoal Learning in Online Math Problem Solving',
    authors: [PERSON.hyoungwook, PERSON.minsuk, PERSON.juho],
    startDate: new Date(2017, 11),
    endDate: new Date(2019, 4),
    type: 'poster',
    link: { 'ACM DL': 'https://dl.acm.org/doi/10.1145/3290607.3312822', Paper: '/files/CHI2019 SolveDeep.pdf' },
    conference: "CHI'19 Extended Abstract",
    imagePath: '/projects/solvedeep.png',
  }),
} as const
export const PUBLICATIONS = DataUtil.sortByTime(Object.values(PUBLICATION))
