import OpenAI from 'openai'
import { useCallback, useEffect, useState } from 'react'

export function useOpenAIModels(apiKey: string, prefix: string) {
  const [models, setModels] = useState<OpenAI.Model[]>([])

  const listModels = useCallback(async (apiKey: string) => {
    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })
    return (await openai.models.list()).data
  }, [])

  useEffect(() => {
    if (10 < apiKey.length) {
      listModels(apiKey).then(models => setModels(models.filter(model => model.id.startsWith(prefix))))
    }
  }, [apiKey, listModels, prefix])

  return { models }
}
