'use client'
import { ChatBox } from '@/app/project/teachyou/component/chatbox'
import { LinearLayout, OutlineButton, View } from '@wookiejin/react-component'
import { useState } from 'react'
import { SAMPLE1, SAMPLE_FEEDBACK1 } from '../data/sample1'
import { SAMPLE2, SAMPLE_FEEDBACK2 } from '../data/sample2'
import { SAMPLE3, SAMPLE_FEEDBACK3 } from '../data/sample3'

interface Props {}

export const Sample = View<Props>(({ forwardedRef, ...props }) => {
  const [chatLogs, setChatLogs] = useState(SAMPLE1)
  const [feedback, setFeedback] = useState(SAMPLE_FEEDBACK1)

  const onClickSample = (i: number) => () => {
    if (i === 1) {
      setChatLogs(SAMPLE1)
      setFeedback(SAMPLE_FEEDBACK1)
    }
    if (i === 2) {
      setChatLogs(SAMPLE2)
      setFeedback(SAMPLE_FEEDBACK2)
    }
    if (i === 3) {
      setChatLogs(SAMPLE3)
      setFeedback(SAMPLE_FEEDBACK3)
    }
  }

  return (
    <div {...props}>
      <LinearLayout gap={16} marginBottom={16}>
        <OutlineButton color={chatLogs === SAMPLE1 ? 'Warning' : 'Secondary'} onClick={onClickSample(1)}>
          Sample 1
        </OutlineButton>
        <OutlineButton color={chatLogs === SAMPLE2 ? 'Warning' : 'Secondary'} onClick={onClickSample(2)}>
          Sample 2
        </OutlineButton>
        <OutlineButton color={chatLogs === SAMPLE3 ? 'Warning' : 'Secondary'} onClick={onClickSample(3)}>
          Sample 3
        </OutlineButton>
      </LinearLayout>

      <ChatBox chatLogs={chatLogs} feedbackList={feedback} />
    </div>
  )
})
