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
  relianceScope: new Project({
    title:
      "RelianceScope: An Analytical Framework for Examining Students' Reliance on Generative AI Chatbots in Problem Solving",
    startDate: new Date(2025, 8),
    imagePath: '/projects/reliancescope.png',
    description: `This project introduces RelianceScope, an analytical framework that (1) operationalizes reliance into nine patterns based on combinations of engagement modes in help-seeking and response-use, and (2) situates these patterns within a knowledge-context lens that accounts for students' prior knowledge and the instructional significance of knowledge components.`,
    link: { Paper: 'https://arxiv.org/abs/2602.16251' },
  }),
  mathCog: new Project({
    title: "Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work",
    startDate: new Date(2024, 12),
    imagePath: '/projects/mathcog.png',
    description:
      "This project investigates whether large language models (LLMs) can diagnose students’ cognitive skills from handwritten math responses. By introducing the MathCog benchmark and evaluating 16 LLMs, we reveal that even advanced models struggle to infer students' thinking process from fragmented visual and textual cues.",
    link: { Paper: 'https://arxiv.org/abs/2504.00843' },
  }),
} as const
export const PROJECTS = DataUtil.sortByTime(Object.values(PROJECT))
