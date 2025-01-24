import { DataUtil } from './utils'

interface Props {
  title: string
  startDate: Date
  endDate?: Date
  imagePath: string
  description: string
  link?: Record<string, string>
}

interface Project extends Props {}
class Project {
  constructor(props: Props) {
    Object.assign(this, props)
  }

  get links(): [string, string][] {
    return Object.keys(this.link || {}).map(key => [key, this.link![key]])
  }
}

export const PROJECT = {
  stepwise: new Project({
    title: 'Helping Students Abstract Subgoals from Code Examples',
    startDate: new Date(2023, 11),
    imagePath: '/projects/subgoal-learning.png',
    description:
      "This project builds a system that supports programming novices to abstract generalizable subgoals from code examples. We elicit abstract thinking by asking learners to write down subgoals common to interrelated code examples. We use code-generation AI models to create feedback on the generalizability and abstraction level of learners' subgoals by testing if the models can generate code examples from learners' descriptions.",
  }),
} as const
export const PROJECTS = DataUtil.sortByTime(Object.values(PROJECT))
