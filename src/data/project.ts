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
  teachcraft: new Project({
    title: 'Helping Teachers Plan, Develop, and Monitor Chatbot-integrated Classes',
    startDate: new Date(2025, 2),
    imagePath: '/projects/teachcraft.png',
    description: `Teachers' interest in using chatbots in their classes is growing, but they often lack the necessary skills and knowledge to effectively integrate them into their teaching. This project aims to build an End-to-End education platform that supports teachers with lesson planning, chatbot development, and real-time monitoring of chatbot usage in the classroom.`,
    link: { Platform: 'https://teachyou.ddns.net/' },
  }),
  mathCog: new Project({
    title: "Investigating Large Language Models in Diagnosing Students' Cognitive Skills in Math Problem-solving",
    startDate: new Date(2024, 12),
    imagePath: '/projects/mathcog.png',
    description:
      "This project investigates whether large language models (LLMs) can diagnose students’ cognitive skills from handwritten math responses. By introducing the MathCog benchmark and evaluating 16 LLMs, we reveal that even advanced models struggle to infer students' thinking process from fragmented visual and textual cues.",
    link: { Paper: 'https://arxiv.org/abs/2504.00843' },
  }),
} as const
export const PROJECTS = DataUtil.sortByTime(Object.values(PROJECT))
