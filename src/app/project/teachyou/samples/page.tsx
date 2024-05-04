'use client'
import { ChatBox } from '@/app/demo/teachyou/component/chatbox'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BodyText,
  DEFAULT_THEME,
  Divider,
  FillButton,
  HeaderText,
  LinearLayout,
  ResetStyle,
} from '@wookiejin/react-component'
import { useState } from 'react'
import { SAMPLE1 } from '../data/sample1'
import { SAMPLE2 } from '../data/sample2'
import { SAMPLE3 } from '../data/sample3'
import Image from 'next/image'

export default function Page() {
  const [chatLogs, setChatLogs] = useState(SAMPLE1)

  const onClickSample = (i: number) => () => {
    if (i === 1) setChatLogs(SAMPLE1)
    if (i === 2) setChatLogs(SAMPLE2)
    // if (i === 3) setChatLogs(SAMPLE3)
  }

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Global styles={ResetStyle} />
      <Global
        styles={css`
          body {
            color: #333333;
            background-color: #ffffff;
            @media (prefers-color-scheme: dark) {
              color: #e6e6e6;
              background-color: #333333;
            }
          }
        `}
      />
      <main>
        <Container>
          <h1>
            <HeaderText marginBottom={4}>
              <Image src="/icons/data.png" width={32} height={32} alt="data icon" style={{ marginRight: 8 }} />
              Conversation Samples
            </HeaderText>
          </h1>
          <BodyText>
            These are the conversations that students had with AlgoBo in our study. Click the buttons below to see the
            conversation samples.
          </BodyText>

          <Divider marginVertical={16} />

          <LinearLayout gap={12} marginBottom={12}>
            <FillButton fill="Focus" onClick={onClickSample(1)}>
              Sample 1
            </FillButton>
            <FillButton fill="Focus" onClick={onClickSample(2)}>
              Sample 2
            </FillButton>
            <FillButton fill="Focus" onClick={onClickSample(3)}>
              Sample 3
            </FillButton>
          </LinearLayout>

          <ChatBox chatLogs={chatLogs} />
        </Container>
      </main>
    </ThemeProvider>
  )
}

const Container = styled.div`
  max-width: 800px;
  margin: 24px auto 60px auto;
`
