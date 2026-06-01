import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { BodyText, CaptionText, ColorIcon, TextButton, TextLoading } from '@wookiejin/react-component'
import { Color } from '@wookiejin/react-component/dist/cjs/themes/default/color'
import { Fill } from '@wookiejin/react-component/dist/cjs/themes/default/fill'
import Image from 'next/image'
import { Fragment } from 'react'
import { Markdown } from './markdown'

const PROFILE_SIZE = 40

interface Props {
  conversation: (
    | { role: 'assistant'; content: string; resourceIndex?: number }
    | { role: 'user' | 'system'; content: string }
    | { role: 'comment'; type: 'help-seeking' | 'response-use'; content: string }
  )[]
  assistantImg?: string
  assistantName?: string
  isReplying?: boolean
  onRewind?: (index: number) => () => void
}

export const ChatViewer = ({
  conversation,
  onRewind,
  isReplying = false,
  assistantImg = '/image/chatbot.png',
  assistantName,
}: Props) => {
  const assistant = assistantName
  return (
    <div>
      {conversation.map((message, i) => {
        if (message.role === 'assistant') {
          return (
            <Fragment key={i}>
              <MessageRow marginBottom={i < conversation.length - 1 ? 8 : 0}>
                <Profile>
                  <Image src={assistantImg} width={PROFILE_SIZE} height={PROFILE_SIZE} alt="" />
                  {assistant && <CaptionText>{assistant}</CaptionText>}
                </Profile>
                <Bubble fill="Secondary" color="Primary">
                  <Markdown readOnly source={message.content} />
                </Bubble>
                {onRewind && (
                  <TextButton onClick={onRewind(i)}>
                    <ColorIcon src={'/icon/rewind.png'} type="Contrast" size={24} alt="rewind" />
                  </TextButton>
                )}
              </MessageRow>
            </Fragment>
          )
        } else if (message.role === 'user') {
          return (
            <UserMessageRow key={i}>
              <Bubble fill="Contrast" color="Contrast">
                {message.content}
              </Bubble>
              <Profile>
                <Image src={'/images/reliancescope/student.png'} width={PROFILE_SIZE} height={PROFILE_SIZE} alt="" />
              </Profile>
            </UserMessageRow>
          )
        } else if (message.role === 'comment') {
          return (
            <Comment key={i}>
              <Image src={`/images/reliancescope/${message.type}.png`} width={20} height={20} alt={message.type} />
              {message.content}
            </Comment>
          )
        } else {
          return (
            <UserMessageRow key={i}>
              <SystemMessage>
                <Markdown readOnly source={message.content} />
              </SystemMessage>
              <Profile>
                <Image src={'/images/reliancescope/student.png'} width={PROFILE_SIZE} height={PROFILE_SIZE} alt="" />
              </Profile>
            </UserMessageRow>
          )
        }
      })}
      {isReplying && (
        <MessageRow>
          <Profile>
            <Image src={assistantImg} width={PROFILE_SIZE} height={PROFILE_SIZE} alt="" />
            <CaptionText>{assistant}</CaptionText>
          </Profile>
          <TextLoading fill="Contrast" marginTop={12} />
        </MessageRow>
      )}
    </div>
  )
}

const MessageRow = styled.div<{ marginBottom?: number }>`
  ${({ marginBottom = 0 }) => css`
    display: grid;
    grid-template-columns: auto fit-content(80%) auto;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: ${marginBottom}px;
  `}
`

const UserMessageRow = styled.div`
  display: grid;
  grid-template-columns: fit-content(80%) auto;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 8px;
`

const Bubble = styled.div<{ fill: Fill; color: Color }>`
  ${({ theme, fill, color }) => css`
    ${theme.fill[fill]}
    ${theme.color[color]}
    ${theme.font.Body}
    padding: 8px;
    border-radius: 8px;
    white-space: pre-wrap;
    min-width: 0;
  `}
`

const SystemMessage = styled.div`
  ${({ theme }) => css`
    ${theme.font.Body}
    background: #c9daf8ff;
    border-radius: 8px;
    padding: 8px;
    color: #4a86e8;
    border: 1px dashed #4a86e8;
    white-space: pre-wrap;
    min-width: 0;
  `}
`

const Comment = styled.div`
  ${({ theme }) => css`
    ${theme.font.Body}
    display: grid;
    grid-template-columns: auto auto;
    width: fit-content;
    gap: 4px;
    color: #6aa84fff;
    padding: 8px;
    margin-right: 40px;
    margin-bottom: 8px;
    margin-left: auto;
    text-align: right;
    align-items: center;
  `}
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`
