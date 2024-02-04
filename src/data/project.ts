import { DataUtil } from './utils'

interface Props {
  title: string
  startDate: Date
  endDate?: Date
  imagePath: string
  description: string
  arxivLink?: string
}

interface Project extends Props {}
class Project {
  constructor(props: Props) {
    Object.assign(this, props)
  }
}

export const PROJECTS = DataUtil.sortByTime([
  new Project({
    title: '"Teach AI How to Code": Using Large Language Models as Teachable Agents for Programming Education',
    startDate: new Date(2023, 5),
    imagePath: '/projects/teachyou.png',
    description: `This project investigates large language models (LLMs) as teachable agents for learning by teaching (LBT). LBT with teachable agents helps learners identify their knowledge gaps and discover new knowledge. However, teachable agents require expensive programming of subject-specific knowledge. We explore the design, cost-efficiency, and personalization of LLM-based teachable agents.`,
    arxivLink: 'https://arxiv.org/abs/2309.14534',
  }),
])
