'use client'
import { IconLink } from '@/app/component/iconLink'
import { MOBILE_BREAKPOINT } from '@/ui'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BodyText,
  CaptionText,
  DEFAULT_THEME,
  Divider,
  HeaderText,
  ResetStyle,
  SelectInput,
  TextInput,
} from '@wookiejin/react-component'
import { useCallback, useState } from 'react'
import { ChatBox } from '../component/chatbox'
import { PUBLICATION } from '@/data/publication'
import { Chat, usePipeline } from '../hook/usePipeline'
import { useOpenAIModels } from '../hook/useOpenAIModels'
import { ExternalLink } from '@/app/component/externalLink'

export default function Page() {
  const [apiKey, setApiKey] = useState('')
  const [chatLogs, setChatLogs] = useState<Chat[]>([
    { role: 'tutee', message: 'Hello! Can you explain binary search to me?' },
  ])
  const { models } = useOpenAIModels(apiKey, 'gpt-4')
  const [model, setModel] = useState<string>('gpt-4')
  const {
    knowledgeState,
    respond,
    setKnowledgeState,
    extractData,
    updateData,
    retrieveData,
    composeData,
    isResponding,
  } = usePipeline(apiKey, model)

  const enterKey = useCallback((s: string) => {
    setApiKey(s.trim())
  }, [])

  const send = useCallback(
    async (message: string) => {
      const newChatLogs = [...chatLogs, { role: 'tutor' as const, message }]
      setChatLogs(newChatLogs)
      const response = await respond(newChatLogs)
      setChatLogs([...newChatLogs, { role: 'tutee' as const, message: response }])
    },
    [chatLogs, respond]
  )

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Global styles={ResetStyle} />
      <Global
        styles={css`
          body {
            background-color: #ffffff;
            @media (prefers-color-scheme: dark) {
              background-color: #333333;
            }
          }
        `}
      />
      <Container>
        <Side>
          <h1>
            <HeaderText marginBottom={12}>TeachYou Interactive Demo</HeaderText>
          </h1>
          {PUBLICATION.teachyou.links
            ?.filter(([label]) => label !== 'Demo')
            .map(([label, href], i) => (
              <IconLink key={i} href={href} title={`TeachYou ${label}`} marginRight={8} marginBottom={8}>
                {label}
              </IconLink>
            ))}

          <BodyText marginVertical={12}>
            This page provides a demo of the Reflect-Respond pipeline. Try to teach AlgoBo how to write a binary search
            algorithm. You will see how it learns from the conversation and the intermediate results for each step in
            the pipeline. You can also edit the knowledge state directly and see how AlgoBo responds differently!
          </BodyText>

          <CaptionText color="Focus" marginBottom={4}>
            This demo requires the access to{' '}
            <ExternalLink href="https://platform.openai.com/docs/quickstart/step-2-set-up-your-api-key">
              OpenAI API
            </ExternalLink>
            .
          </CaptionText>
          <TextInput value={apiKey} onChange={enterKey} placeholder="Your OpenAI API Key" marginBottom={16} />

          <CaptionText color="Focus" marginBottom={4}>
            Model
          </CaptionText>
          <SelectInput options={models.map(model => model.id)} onSelect={i => setModel(models[i].id)} />

          <Divider marginVertical={24} />

          <CaptionText color="Focus" marginBottom={4}>
            AlgoBo&apos;s Knowledge State
          </CaptionText>
          <TextInput value={knowledgeState} onChange={setKnowledgeState} disabled={isResponding} marginBottom={16} />

          <CaptionText color="Focus" marginBottom={4}>
            1. Extract useful knowledge from the conversation.
          </CaptionText>
          <TextInput disabled value={extractData} marginBottom={16} />

          <CaptionText color="Focus" marginBottom={4}>
            2. Update the knowledge state.
          </CaptionText>
          <TextInput disabled value={updateData} marginBottom={16} />

          <CaptionText color="Focus" marginBottom={4}>
            3. Retrieve knowledge relevant to the conversation.
          </CaptionText>
          <TextInput disabled value={retrieveData} marginBottom={16} />

          <CaptionText color="Focus" marginBottom={4}>
            4. Compose a responsed based on retrieved knowledge.
          </CaptionText>
          <TextInput disabled value={composeData} />
        </Side>

        <ChatBox chatLogs={chatLogs} onSend={send} isOpponentTyping={isResponding} margin={16} />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.main`
  ${({ theme }) => css`
    ${theme.color.Primary}
    ${theme.font.Body}
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      grid-template-rows: 1fr minmax(auto, 100vh);
      grid-template-columns: auto;
      overflow: auto;
    }
  `}
`

const Side = styled.div`
  height: 100vh;
  padding: 16px;
  box-sizing: border-box;
  overflow: auto;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: auto;
  }
`
