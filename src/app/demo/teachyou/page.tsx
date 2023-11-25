'use client'
import { IconLink } from '@/app/component/iconLink'
import { MOBILE_BREAKPOINT } from '@/design/ui'
import { Divider } from '@/design/component/divider'
import { TextInput } from '@/design/component/input/text'
import { Sheet } from '@/design/component/sheet'
import { BodyText } from '@/design/component/text/body'
import { CaptionText } from '@/design/component/text/caption'
import { HeaderText } from '@/design/component/text/header'
import { ResetStyle } from '@/design/foundation'
import { DEFAULT_THEME } from '@/design/theme'
import { Fill } from '@/design/theme/default/fill'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import { useCallback, useState } from 'react'
import { ChatBox } from './component/chatbox'
import { Chat, usePipeline } from './hook/usePipeline'

export default function Page() {
  const [apiKey, setApiKey] = useState('')
  const [chatLogs, setChatLogs] = useState<Chat[]>([
    { role: 'tutee', message: 'Hello! Can you explain binary search to me?' },
  ])
  const {
    knowledgeState,
    respond,
    setKnowledgeState,
    extractData,
    updateData,
    retrieveData,
    composeData,
    isResponding,
  } = usePipeline(apiKey)

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
            ${Fill.Primary}
          }
        `}
      />
      <Container>
        <Side>
          <h1>
            <HeaderText marginBottom={12}>TeachYou Interactive Demo</HeaderText>
          </h1>
          <IconLink href="https://arxiv.org/abs/2309.14534" title="TeachYou Paper" marginBottom={12}>
            Paper
          </IconLink>
          <IconLink href="/project/teachyou" title="TeachYou Website" marginLeft={8} marginBottom={12}>
            Website
          </IconLink>

          <BodyText marginBottom={12}>
            This page provides a demo of the Reflect-Respond pipeline. Try to teach AlgoBo how to write a binary search
            algorithm. You will see how it learns from the conversation and the intermediate results for each step in
            the pipeline. You can also edit the knowledge state directly and see how AlgoBo responds differently!
          </BodyText>

          <CaptionText color="Focus" marginBottom={4}>
            This demo requires the access to OpenAI API.
          </CaptionText>
          <TextInput value={apiKey} onChange={enterKey} rows={1} placeholder="Your OpenAI API Key" />

          <Divider marginVertical={24} />

          <CaptionText color="Focus" marginBottom={4}>
            AlgoBo&apos;s Knowledge State
          </CaptionText>
          <TextInput
            value={knowledgeState}
            onChange={setKnowledgeState}
            state={isResponding ? 'Disabled' : 'Default'}
            marginBottom={16}
          />

          <CaptionText color="Focus" marginBottom={4}>
            1. Extract useful knowledge from the conversation.
          </CaptionText>
          <Sheet fill="Inactive" marginBottom={16}>
            {extractData}
          </Sheet>

          <CaptionText color="Focus" marginBottom={4}>
            2. Update the knowledge state.
          </CaptionText>
          <Sheet fill="Inactive" marginBottom={16}>
            {updateData}
          </Sheet>

          <CaptionText color="Focus" marginBottom={4}>
            3. Retrieve knowledge relevant to the conversation.
          </CaptionText>
          <Sheet fill="Inactive" marginBottom={16}>
            {retrieveData}
          </Sheet>

          <CaptionText color="Focus" marginBottom={4}>
            4. Compose a responsed based on retrieved knowledge.
          </CaptionText>
          <Sheet fill="Inactive">{composeData}</Sheet>
        </Side>

        <ChatBox chatLogs={chatLogs} onSend={send} isOpponentTyping={isResponding} />
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
  padding: 16px 16px 40px 16px;
  box-sizing: border-box;
  overflow: auto;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: auto;
  }
`
