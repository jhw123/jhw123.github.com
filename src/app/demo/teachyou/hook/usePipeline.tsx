import { JSONparse } from '@/utils/json'
import { useCallback, useState } from 'react'
import { COMPOSE_KNOWLEDGE_SYSTEM_PROMPT_EN, COMPOSE_KNOWLEDGE_USER_PROMPT } from '../prompts/composeKnowledge'
import { EXTRACT_KNOWLEDGE_SYSTEM_PROMPT_EN, EXTRACT_KNOWLEDGE_USER_PROMPT } from '../prompts/extractKnowledge'
import { RETRIEVE_KNOWLEDGE_SYSTEM_PROMPT_EN, RETRIEVE_KNOWLEDGE_USER_PROMPT } from '../prompts/retrieveKnowledge'
import { UPDATE_KNOWLEDGE_SYSTEM_PROMPT_EN, UPDATE_KNOWLEDGE_USER_PROMPT } from '../prompts/updateKnowledge'
import { useOpenAIStream } from './useOpenAI'

export interface Chat {
  role: 'tutor' | 'tutee'
  message: string
}

const NONE = 'NONE'

export function usePipeline(apiKey: string) {
  const [knowledgeState, setKnowledgeState] = useState('{facts: [], code_implementation: []}')
  const [extractData, completeExtract] = useOpenAIStream()
  const [updateData, completeUpdate] = useOpenAIStream()
  const [retrieveData, completeRetrieve] = useOpenAIStream()
  const [composeData, completeCompose] = useOpenAIStream()
  const [isResponding, setIsResponding] = useState(false)

  const extract = useCallback(
    async (context: Chat[]) => {
      return await completeExtract({
        apiKey,
        messages: [
          {
            role: 'system',
            content: EXTRACT_KNOWLEDGE_SYSTEM_PROMPT_EN(),
          },
          { role: 'user', content: EXTRACT_KNOWLEDGE_USER_PROMPT(context) },
        ],
        stop: '---',
        temperature: 0,
      })
    },
    [apiKey, completeExtract]
  )

  const update = useCallback(
    async (knowledgeStore: string, newKnowldge: string) => {
      if (newKnowldge === NONE) {
        return knowledgeStore
      } else {
        return await completeUpdate({
          apiKey,
          messages: [
            {
              role: 'system',
              content: UPDATE_KNOWLEDGE_SYSTEM_PROMPT_EN(),
            },
            { role: 'user', content: UPDATE_KNOWLEDGE_USER_PROMPT(knowledgeStore, newKnowldge) },
          ],
          stop: '---',
          temperature: 0,
        })
      }
    },
    [apiKey, completeUpdate]
  )

  const perceive = useCallback((chatLogs: Chat[]) => {
    const latestChatLogs = chatLogs.slice(-3)
    return latestChatLogs
  }, [])

  const retrieve = useCallback(
    async (knowledgeStore: string, context: Chat[]) => {
      return await completeRetrieve({
        apiKey,
        messages: [
          {
            role: 'system',
            content: RETRIEVE_KNOWLEDGE_SYSTEM_PROMPT_EN(),
          },
          { role: 'user', content: RETRIEVE_KNOWLEDGE_USER_PROMPT(context, knowledgeStore) },
        ],
        stop: '---',
        temperature: 0,
      })
    },
    [apiKey, completeRetrieve]
  )

  const compose = useCallback(
    async (knowledgeSet: string, chatLogs: Chat[]) => {
      const { facts, code_implementation } = JSONparse<{ facts?: string[]; code_implementation?: string[] }>(
        knowledgeSet
      )
      const statement = (() => {
        if ((facts?.length ?? 0) === 0) {
          return 'I do not know.'
        } else {
          return (
            facts?.join(' ') +
            (code_implementation && 0 < (code_implementation.length ?? 0) ? code_implementation.join('\n') : '')
          )
        }
      })()

      return await completeCompose({
        apiKey,
        messages: [
          {
            role: 'system',
            content: COMPOSE_KNOWLEDGE_SYSTEM_PROMPT_EN(),
          },
          {
            role: 'user',
            content: COMPOSE_KNOWLEDGE_USER_PROMPT(chatLogs, statement),
          },
        ],
        stop: '---',
        temperature: 0,
      })
    },
    [apiKey, completeCompose]
  )

  const respond = useCallback(
    async (chatLogs: Chat[]) => {
      setIsResponding(true)
      const extracted = await extract(perceive(chatLogs))
      const updated = await update(knowledgeState, extracted)
      setKnowledgeState(updated)
      const retrieved = await retrieve(updated, perceive(chatLogs))
      const composed = await compose(retrieved, perceive(chatLogs))
      setIsResponding(false)
      return composed
    },
    [compose, extract, knowledgeState, perceive, retrieve, update]
  )

  return {
    knowledgeState,
    extractData,
    updateData,
    retrieveData,
    composeData,
    respond,
    isResponding,
    setKnowledgeState,
  }
}
