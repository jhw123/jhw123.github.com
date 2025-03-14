'use client'
import styled from '@emotion/styled'
import { OutlineButton, View } from '@wookiejin/react-component'
import { useState } from 'react'
import { CollabpsibleModal } from '../../../component/collapsibleModal'
import { CONVERSATION_1 } from '../data/conversation1'
import { CONVERSATION_2 } from '../data/conversation2'
import { CONVERSATION_3 } from '../data/conversation3'
import { Conversation } from './conversation'
import { STUDENTS } from './profiles'
import { CONVERSATION_4 } from '../data/conversation4'
import { CONVERSATION_5 } from '../data/conversation5'
import { CONVERSATION_6 } from '../data/conversation6'
import { CONVERSATION_7 } from '../data/conversation7'

interface Props {}

const CONVERSATIONS = [
  CONVERSATION_1,
  CONVERSATION_2,
  CONVERSATION_3,
  CONVERSATION_4,
  CONVERSATION_5,
  CONVERSATION_6,
  CONVERSATION_7,
]

export const Conversations = View<Props>(({ forwardedRef, ...props }) => {
  const [conv, setConv] = useState(0)

  const onClickSample = (i: number) => () => {
    setConv(i)
  }

  return (
    <div {...props}>
      {STUDENTS.map((c, i) => (
        <StackButton key={i} color={conv === i ? 'Focus' : 'Secondary'} onClick={onClickSample(i)}>
          {c.name}
        </StackButton>
      ))}

      <CollabpsibleModal>
        <Conversation conversation={CONVERSATIONS[conv]} showKnowledgeState />
      </CollabpsibleModal>
    </div>
  )
})

const StackButton = styled(OutlineButton)`
  display: inline-block;
  width: fit-content;
  margin-right: 8px;
  margin-bottom: 8px;
`
