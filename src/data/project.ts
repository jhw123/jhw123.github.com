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
