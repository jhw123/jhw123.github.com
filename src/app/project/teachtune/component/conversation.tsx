import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CaptionText, CollapsibleLayout, ColorIcon, ListItem, TextButton, View } from '@wookiejin/react-component'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { KnowledgeState } from '../type/knowledgeState'
import { findLast } from 'lodash'

export interface Props {
  conversation: { role: 'assistant' | 'user'; content: string; knowledgeState?: KnowledgeState }[]
  isReplying?: boolean
  showKnowledgeState?: boolean
  onRewind?: (index: number) => () => void
}

export const Conversation = View<Props>(
  ({ conversation, onRewind, isReplying = false, forwardedRef, showKnowledgeState = false, ...props }) => {
    const [isOpen, setIsOpen] = useState(Array(conversation.length).fill(false))

    const onOpen = (i: number) => () => {
      setIsOpen(isOpen => isOpen.map((v, j) => (i === j ? !v : v)))
    }

    useEffect(() => {
      if (conversation.length) {
        setIsOpen(isOpen =>
          Array(conversation.length)
            .fill(false)
            .map((_, i) => isOpen[i] ?? false)
        )
      }
    }, [conversation.length])

    return (
      <div {...props}>
        {conversation.map(({ role, content, knowledgeState }, i) => {
          const prevKnowledgeState = findLast(conversation, m => Boolean(m.knowledgeState), i - 1)?.knowledgeState
          const newKnowledge = knowledgeState?.filter(
            kc => kc.on && prevKnowledgeState?.find(k => k.knowledge === kc.knowledge)?.on !== true
          )
          return (
            <Message key={i} marginBottom={role === 'assistant' && knowledgeState && showKnowledgeState ? 0 : 16}>
              <MessageRow>
                <Profile>
                  <Image
                    src={role === 'assistant' ? `/images/teachtune/student.png` : `/images/teachtune/chatbot.png`}
                    width={24}
                    height={24}
                    alt=""
                  />
                  <CaptionText>{role === 'assistant' ? 'Student' : 'Chatbot'}</CaptionText>
                </Profile>
                <Bubble>{content}</Bubble>
                {role === 'assistant' && onRewind && (
                  <TextButton onClick={onRewind(i)}>
                    <Image src={'/images/rewind.png'} width={24} height={24} alt="" />
                  </TextButton>
                )}
              </MessageRow>
              {showKnowledgeState && knowledgeState && (
                <MessageRow>
                  <Invisible>
                    <CaptionText>{role === 'assistant' ? 'Student' : 'Chatbot'}</CaptionText>
                  </Invisible>

                  <div>
                    <KnowledgeStatus onClick={onOpen(i)}>
                      Check knowledge state{' '}
                      <ColorIcon
                        src={isOpen[i] ? '/icons/arrow-up.png' : '/icons/arrow-down.png'}
                        type="Contrast"
                        size={12}
                        alt="expand"
                      />
                      {0 < (newKnowledge?.length ?? 0) && prevKnowledgeState && (
                        <CaptionText color="Success" marginLeft={4}>
                          Learned {newKnowledge?.length} new items!
                        </CaptionText>
                      )}
                    </KnowledgeStatus>
                    <CollapsibleLayout checked={isOpen[i] ?? false}>
                      <KnowledgeStateBox>
                        <CaptionText>
                          Learned {knowledgeState.reduce((s, { on }) => s + (on ? 1 : 0), 0)} / {knowledgeState.length}{' '}
                          items
                        </CaptionText>
                        {knowledgeState?.map(({ knowledge, on }, i) => (
                          <CaptionText key={i} color={on ? 'Success' : 'Secondary'}>
                            <ListItem>
                              {newKnowledge?.some(kc => kc.knowledge === knowledge) && '✨ '}
                              {knowledge}
                            </ListItem>
                          </CaptionText>
                        ))}
                      </KnowledgeStateBox>
                    </CollapsibleLayout>
                  </div>
                </MessageRow>
              )}
            </Message>
          )
        })}
      </div>
    )
  }
)

const Message = styled.div<{ marginBottom: number }>`
  ${({ marginBottom }) => css`
    margin-bottom: ${marginBottom}px;
  `}
`

const KnowledgeStatus = styled(TextButton)`
  min-height: 16px;
  align-items: center;
`

const MessageRow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 8px;
  justify-content: flex-start;
  align-items: start;
`

const Bubble = styled.div`
  ${({ theme }) => css`
    ${theme.fill.Secondary}
    padding: 8px;
    border-radius: 8px;
    white-space: pre-wrap;
    min-height: 24px;
    display: flex;
    align-items: center;
  `}
`

const Invisible = styled.div`
  visibility: hidden;
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const KnowledgeStateBox = styled.div`
  ${({ theme }) => css`
    ${theme.border.Secondary}
    padding: 8px;
    margin-bottom: 8px;
    margin-left: 4px;
    border-radius: 8px;
  `}
`
