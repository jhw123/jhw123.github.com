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
    title: 'Simulated Students as Test Cases: Evaluating the Coverage of Pedagogical Agents with Mock Conversations',
    startDate: new Date(2023, 12),
    imagePath: '/projects/teachyou2.png',
    description: `Large language models (LLMs) empowered educators to build pedagogical conversational agents (PCAs) for their students. As students have different knowledge levels and learning attitudes, educators have to test their PCAs against diverse cases, such as students showing disinterest or competence. Although educators can assess their PCAs through direct chats and test cases, those methods are either manually intensive for multiple iterations or limited to testing only single-turn interactions. We present \sysname{}, where educators can create virtual students and evaluate PCAs by observing mock conversations between PCAs and virtual students. `,
  }),
  new Project({
    title: 'Helping Students Abstract Subgoals from Code Examples',
    startDate: new Date(2023, 11),
    imagePath: '/projects/subgoal-learning.png',
    description:
      "This project builds a system that supports programming novices to abstract generalizable subgoals from code examples. We elicit abstract thinking by asking learners to write down subgoals common to interrelated code examples. We use code-generation AI models to create feedback on the generalizability and abstraction level of learners' subgoals by testing if the models can generate code examples from learners' descriptions.",
  }),
])
