import { FillButton } from '@/design/component/button/fill'
import { TextInput } from '@/design/component/input/text'
import { TextLoading } from '@/design/component/loading/text'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Chat } from '../hook/usePipeline'
import { Markdown } from '@/design/component/markdown'

interface Props {
  onSend?: (message: string) => Promise<void>
  isOpponentTyping?: boolean
  chatLogs: Chat[]
}

export function ChatBox({ chatLogs, onSend, isOpponentTyping = false }: Props) {
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
    <Container>
      <ChatContainer ref={chatContainerRef}>
        {chatLogs.map(({ message, role }, i) => {
          if (role === 'tutor') {
            return (
              <TutorChat key={i}>
                <TutorBubble>{message}</TutorBubble>
                <Image src="/images/tutor.png" width={20} height={20} alt="Tutor" />
              </TutorChat>
            )
          } else {
            return (
              <Chat key={i}>
                <Image src="/images/tutee.png" width={20} height={20} alt="Tutee" />
                <TuteeBubble>
                  <Markdown>{message}</Markdown>
                </TuteeBubble>
              </Chat>
            )
          }
        })}
        {isOpponentTyping && (
          <Chat>
            <Image src="/images/tutee.png" width={20} height={20} alt="Tutee" />
            <TuteeBubble>
              <TextLoading />
            </TuteeBubble>
          </Chat>
        )}
      </ChatContainer>

      {onSend && (
        <InputContainer>
          <TextInput value={message} onChange={setMessage} rows={3} onEnter={send} />
          <FillButton fill="Focus" onClick={send} state={isOpponentTyping ? 'Disabled' : 'Default'}>
            Send
          </FillButton>
        </InputContainer>
      )}
    </Container>
  )
}

const Container = styled.div`
  min-height: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 16px;
  padding: 16px;
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

const Chat = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const TutorChat = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: flex-end;
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
    ${theme.fill.Inactive}
    ${theme.color.Primary}
  `}
`

const TutorBubble = styled(Bubble)`
  margin-right: 4px;
  align-self: flex-end;
`

const TuteeBubble = styled(Bubble)`
  margin-left: 4px;
`
