import { DataUtil } from './utils'

type PaperType = 'full paper' | 'poster' | 'workshop'

interface Props {
  title: string
  authors: string[]
  startDate: Date
  endDate?: Date
  paperLink?: string
  conference: string
  type: PaperType
  imagePath: string
}

class Publication {
  title: string
  authors: string[]
  startDate: Date
  endDate: Date | undefined
  paperLink: string | undefined
  type: PaperType
  conference: string
  imagePath: string

  constructor(props: Props) {
    this.title = props.title
    this.authors = props.authors
    this.startDate = props.startDate
    this.endDate = props.endDate
    this.paperLink = props.paperLink
    this.type = props.type
    this.conference = props.conference
    this.imagePath = props.imagePath
  }
}

export const publicationData = DataUtil.sortByTime([
  new Publication({
    title: 'CodeTree: Learnersourcing Subgoal Hierarchies in Code Examples',
    authors: ['Hyoungwook Jin', 'Juho Kim'],
    startDate: new Date(2021, 10),
    endDate: new Date(2023, 9),
    conference: "CSCW'24 (to appear)",
    type: 'full paper',
    paperLink: '/files/CSCW2024 CodeTree.pdf',
    imagePath: '/projects/codetree.png',
  }),
  new Publication({
    title:
      'ProcessGallery: An Online Gallery that Highlights Improvements by Principles through Contrasting Pairs of Examples',
    authors: [
      'Grace Yu-Chun Yen',
      'Jane L E',
      'Hyoungwook Jin',
      'Mingyi Li',
      'Grace Lin',
      'Isabelle Yan Pan',
      'Steven P. Dow',
    ],
    startDate: new Date(2022, 6),
    endDate: new Date(2023, 9),
    conference: "CSCW'24 (to appear)",
    type: 'full paper',
    imagePath: '/projects/processgallery.png',
  }),
  new Publication({
    title: 'Exploring In-Action Feedback for Visual Design',
    authors: [],
    startDate: new Date(2022, 6),
    conference: "CHI'24",
    type: 'full paper',
    imagePath: '',
  }),
  new Publication({
    title: 'Learnersourcing Subgoal Hierarchies of Code Examples',
    authors: ['Hyoungwook Jin', 'Juho Kim'],
    startDate: new Date(2021, 10),
    endDate: new Date(2022, 5),
    type: 'workshop',
    paperLink: '/files/L@S2022 Learnersourcing Subgoal Hierarchies of Code Examples.pdf',
    conference: "L@S'22",
    imagePath: '/projects/learnersourcing-subgoals.png',
  }),
  new Publication({
    title: 'automaTA: Human-Machine Interaction for Answering Context-Specific Questions',
    authors: ['Changyoon Lee', 'Donghoon Han', 'Hyoungwook Jin', 'Alice Oh'],
    startDate: new Date(2018, 9),
    endDate: new Date(2019, 5),
    type: 'poster',
    paperLink: 'https://dl.acm.org/doi/10.1145/3330430.3333658',
    conference: "L@S'19",
    imagePath: '/projects/automata.png',
  }),
  new Publication({
    title: 'SolveDeep: Support Subgoal Learning in Online Math Problem Solving',
    authors: ['Hyoungwook Jin', 'Minsuk Chang', 'Juho Kim'],
    startDate: new Date(2017, 11),
    endDate: new Date(2019, 4),
    type: 'poster',
    paperLink: 'https://dl.acm.org/doi/10.1145/3290607.3312822',
    conference: "CHI'19",
    imagePath: '/projects/solvedeep.png',
  }),
])
