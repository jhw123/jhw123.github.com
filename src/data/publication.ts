import Person, { PERSON } from './person'
import { DataUtil } from './utils'

type PaperType = 'full paper' | 'poster' | 'workshop'

interface Props {
  title: string
  authors: Person[]
  startDate: Date
  endDate?: Date
  links?: [string, string][]
  conference: string
  type: PaperType
  imagePath: string
}

interface Publication extends Props {}
class Publication {
  constructor(props: Props) {
    Object.assign(this, props)
  }
}

export const PUBLICATION = {
  teachyou: new Publication({
    title: 'Teach AI How to Code: Using Large Language Models as Teachable Agents for Programming Education',
    authors: [PERSON.hyoungwook, PERSON.seonghee, PERSON.hyungyu, PERSON.juho],
    startDate: new Date(2023, 5),
    endDate: new Date(2024, 1),
    conference: "CHI'24 (to appear)",
    type: 'full paper',
    links: [
      ['Paper', 'https://arxiv.org/abs/2309.14534'],
      ['Website', '/project/teachyou'],
      ['GitHub', 'https://github.com/jhw123/TeachYou'],
    ],
    imagePath: '/projects/teachyou.png',
  }),
  codeTree: new Publication({
    title: 'CodeTree: Learnersourcing Subgoal Hierarchies in Code Examples',
    authors: [PERSON.hyoungwook, PERSON.juho],
    startDate: new Date(2021, 10),
    endDate: new Date(2023, 9),
    conference: "CSCW'24 (to appear)",
    type: 'full paper',
    links: [['Paper', '/files/CSCW2024 CodeTree.pdf']],
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
    conference: "CSCW'24 (to appear)",
    type: 'full paper',
    imagePath: '/projects/processgallery.png',
  }),
  inActionFeedback: new Publication({
    title: 'Exploring In-Action Feedback for Visual Design',
    authors: [],
    startDate: new Date(2022, 6),
    conference: "CHI'24",
    type: 'full paper',
    imagePath: '',
  }),
  subgoalHierarchies: new Publication({
    title: 'Learnersourcing Subgoal Hierarchies of Code Examples',
    authors: [PERSON.hyoungwook, PERSON.juho],
    startDate: new Date(2021, 10),
    endDate: new Date(2022, 5),
    type: 'workshop',
    links: [['Paper', '/files/L@S2022 Learnersourcing Subgoal Hierarchies of Code Examples.pdf']],
    conference: "L@S'22",
    imagePath: '/projects/learnersourcing-subgoals.png',
  }),
  automaTA: new Publication({
    title: 'automaTA: Human-Machine Interaction for Answering Context-Specific Questions',
    authors: [PERSON.changyoon, PERSON.donghoon, PERSON.hyoungwook, PERSON.aliceoh],
    startDate: new Date(2018, 9),
    endDate: new Date(2019, 5),
    type: 'poster',
    links: [['Paper', 'https://dl.acm.org/doi/10.1145/3330430.3333658']],
    conference: "L@S'19",
    imagePath: '/projects/automata.png',
  }),
  solveDeep: new Publication({
    title: 'SolveDeep: Support Subgoal Learning in Online Math Problem Solving',
    authors: [PERSON.hyoungwook, PERSON.minsuk, PERSON.juho],
    startDate: new Date(2017, 11),
    endDate: new Date(2019, 4),
    type: 'poster',
    links: [['Paper', 'https://dl.acm.org/doi/10.1145/3290607.3312822']],
    conference: "CHI'19",
    imagePath: '/projects/solvedeep.png',
  }),
} as const
export const PUBLICATIONS = DataUtil.sortByTime(Object.values(PUBLICATION))
