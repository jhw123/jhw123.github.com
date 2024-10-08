import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Markdown } from '@/app/component/markdown'
import { FillButton, TextInput, TextLoading, View } from '@wookiejin/react-component'
import { TeachingHelper } from './teachingHelper'
import { Chat } from '../hook/usePipeline'
import React from 'react'

interface Props {
  children?: React.ReactNode
  onSend?: (message: string) => Promise<void>
  isOpponentTyping?: boolean
  chatLogs: Readonly<Chat[]>
  feedbackList?: {
    index: number
    pattern: string
    selected: number
  }[]
}

export const ChatBox = View<Props>(
  ({ children, feedbackList = [], chatLogs, onSend, isOpponentTyping = false, ...props }) => {
    const [message, setMessage] = useState('')
    const [logCnt, setLogCnt] = useState(chatLogs.length)
    const chatContainerRef = useRef<HTMLDivElement>(null)

    const send = useCallback(async () => {
      if (!isOpponentTyping && 0 < message.trim().length) {
        onSend?.(message.trim())
        setMessage('')
      }
    }, [isOpponentTyping, message, onSend])

    useEffect(() => {
      if (logCnt < chatLogs.length) {
        setLogCnt(chatLogs.length)
        chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight)
      }
    }, [logCnt, chatLogs.length])

    return (
      <Container hasGap={Boolean(onSend)} {...props}>
        <ChatContainer ref={chatContainerRef}>
          {chatLogs.map(({ message, role }, i) => {
            const feedback = feedbackList?.find(f => f.index === i)
            if (role === 'tutor') {
              return (
                <React.Fragment key={i}>
                  <TutorMessage>
                    <TutorBubble>{message}</TutorBubble>
                    <Image src="/images/teachyou/student.png" width={48} height={60} alt="Tutor" />
                  </TutorMessage>
                  {feedback && <TeachingHelper feedback={feedback} />}
                </React.Fragment>
              )
            } else if (role === 'tutee') {
              return (
                <React.Fragment key={i}>
                  <Message>
                    <Image src="/images/teachyou/algobo.png" width={48} height={60} alt="Tutee" />
                    <TuteeBubble>
                      <Markdown>{message}</Markdown>
                    </TuteeBubble>
                  </Message>
                  {feedback && <TeachingHelper feedback={feedback} />}
                </React.Fragment>
              )
            } else {
              return <SystemBubble key={i}>{message}</SystemBubble>
            }
          })}
          {isOpponentTyping && (
            <Message>
              <Image src="/images/teachyou/algobo.png" width={48} height={60} alt="Tutee" />
              <TuteeBubble>
                <TextLoading />
              </TuteeBubble>
            </Message>
          )}
          {children}
        </ChatContainer>

        {onSend && (
          <InputContainer>
            <TextInput
              value={message}
              onChange={setMessage}
              onEnter={send}
              placeholder="Teach AlgoBo how to write a binary search algorithm."
            />
            <FillButton fill="Focus" onClick={send} disabled={isOpponentTyping}>
              Send
            </FillButton>
          </InputContainer>
        )}
      </Container>
    )
  }
)

const Container = styled.div<{ hasGap: boolean }>`
  ${({ hasGap }) => css`
    min-height: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    gap: ${hasGap ? 16 : 0}px;
    max-height: 100%;
  `}
`

const ChatContainer = styled.div`
  ${({ theme }) => css`
    ${theme.border.Secondary}
    overflow: auto;
    padding: 8px;
  `}
`

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: top;
  gap: 16px;
`

const Message = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: flex-start;
`

const TutorMessage = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: flex-end;
  align-items: flex-start;
`

const Bubble = styled.div`
  ${({ theme }) => css`
    padding: 8px;
    width: fit-content;
    border-radius: 8px;
    max-width: 70%;
    word-break: break-all;
    position: relative;
    white-space: pre-wrap;
    word-break: keep-all;
    ${theme.fill.Secondary}
    ${theme.color.Primary}
    ${theme.font.Body}
  `}
`

const TutorBubble = styled(Bubble)`
  margin-right: 4px;
  align-self: flex-end;
`

const TuteeBubble = styled(Bubble)`
  margin-left: 4px;
`

const SystemBubble = styled.div`
  ${({ theme }) =>
    css`
      ${theme.color.Secondary}
      text-align: center;
      margin-bottom: 16px;
    `}
`
