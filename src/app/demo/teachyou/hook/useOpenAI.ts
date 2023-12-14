import OpenAI from 'openai'
import { useCallback, useState } from 'react'

interface Props {
  apiKey: string
  messages: OpenAI.ChatCompletionMessageParam[]
  stop?: string
  max_tokens?: number
  temperature?: number
  model?: string
}

export function useOpenAIStream() {
  const [data, setData] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)

  const completion = useCallback(
    async ({ apiKey, messages, stop, max_tokens = 1000, temperature = 1, model = 'gpt-4-1106-preview' }: Props) => {
      setData('')
      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })
      let data = ''
      setIsStreaming(true)
      try {
        const stream = await openai.chat.completions.create({
          model,
          max_tokens,
          messages,
          stop,
          temperature,
          stream: true,
        })
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content ?? ''
          setData(prev => prev + content)
          data += content
        }
      } catch (e: any) {
        alert(e.message)
      }
      setIsStreaming(false)
      return data
    },
    []
  )

  return [data, completion, isStreaming] as const
}
