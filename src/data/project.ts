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
    title: 'Personalized Teachable Agents',
    startDate: new Date(2023, 12),
    imagePath: '/projects/personalized-teachable-agents.png',
    description:
      'Teachable agents are pedagogical AI agents that simulate a student role to help learners find gaps in their knowledge by teaching the agents. This project explores how the knowledge level of teachable agents affects the learning experience and aims to develop a technical pipeline for controlling and personalizing the knowledge level of teachable agents to individual learners.',
  }),
  new Project({
    title: 'Helping Students Abstract Subgoals from Code Examples',
    startDate: new Date(2023, 11),
    imagePath: '/projects/subgoal-learning.png',
    description:
      "This project builds a system that supports programming novices to abstract generalizable subgoals from code examples. We elicit abstract thinking by asking learners to write down subgoals common to interrelated code examples. We use code-generation AI models to create feedback on the generalizability and abstraction level of learners' subgoals by testing if the models can generate code examples from learners' descriptions.",
  }),
])
