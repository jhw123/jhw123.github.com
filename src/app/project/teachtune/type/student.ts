import { KnowledgeState } from './knowledgeState'

export interface Student {
  id: string
  name: string
  profile: string
  knowledgeState: KnowledgeState
  selfEfficacy: { item: string; rating: number }[]
  motivation: { item: string; rating: number }[]
  stress: { item: string; rating: number }[]
  goalCommitment: { item: string; rating: number }[]
}
