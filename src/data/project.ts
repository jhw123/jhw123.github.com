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
    startDate: new Date('2024-12'),
    imagePath: '/projects/mathcog.png',
    description:
      "This project investigates whether large language models (LLMs) can diagnose students’ cognitive skills from handwritten math responses. By introducing the MathCog benchmark and evaluating 16 LLMs, we reveal that even advanced models struggle to infer students' thinking process from fragmented visual and textual cues.",
    link: { Paper: 'https://arxiv.org/abs/2504.00843' },
  }),
  knowSim: new Project({
    title: 'KnowSim: Evaluating Information Calibration in LLM Assistants with User Simulators that Learn',
    startDate: new Date('2026-03'),
    imagePath: '/projects/knowsim.png',
    description:
      "This project aims to build a user simulator that uses a knowledge graph to track what the user knows and how their understanding evolves turn by turn. Such a user simulator enables fine-grained interaction metrics, such as temporal knowledge gain and cognitive overload. Our work contributes to assessing and developing sensitive AI agents that adapt their responses to users' cognitive states.",
    link: {
      Paper: 'https://arxiv.org/abs/2608.17150',
      Website: 'https://yoonjoolee.com/knowsim/',
      Dataset: 'https://huggingface.co/datasets/yjlee36/knowchat-multi-turn-dialogues',
    },
  }),
} as const
export const PROJECTS = DataUtil.sortByTime(Object.values(PROJECT))
