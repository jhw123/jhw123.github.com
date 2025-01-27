import { KnowledgeState } from './knowledgeState'

export type Conversation = { role: 'assistant' | 'user'; content: string; knowledgeState?: KnowledgeState }[]
