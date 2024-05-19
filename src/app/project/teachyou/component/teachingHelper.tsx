import { ListItem } from '@/app/component/listItem'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { BodyText, OutlineButton, RadioInput, StrongText } from '@wookiejin/react-component'
import { useEffect, useState } from 'react'

interface Props {
  feedback: {
    pattern: string
    selected: number
  }
}

export const TeachingHelper = ({ feedback: { pattern, selected } }: Props) => {
  const [optionIndex, setOptionIndex] = useState(selected)
  const [feedback, setFeedback] = useState('')
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    if (pattern) {
      if (pattern === 'Commanding') {
        setFeedback('Instead of directly telling it what to fix, why not help AlgoBo grasp "why?"')
        setOptions([
          'I\'ll explain "why" when I tell where to fix.',
          "I'll ask  why it's good to fix.",
          'I have a better way.',
        ])
      } else if (pattern === 'SpoonFeeding') {
        setFeedback('Instead of telling everything, why not let AlgoBo think?')
        setOptions([
          "I'll ask questions to help AlgoBo find answers himself.",
          "I'll AlgoBo what to do next.",
          'I have a better way.',
        ])
      }
    }
  }, [pattern])

  return (
    <Container>
      {['Commanding', 'SpoonFeeding'].some(p => p === pattern) ? (
        <Box>
          <BodyText marginBottom={8}>
            <StrongText>❗ {feedback}</StrongText>
          </BodyText>
          {selected === -1 && (
            <>
              {options.map((k, i) => (
                <RadioInput
                  key={i}
                  checked={optionIndex === i}
                  fill="Focus"
                  onCheck={() => setOptionIndex(i)}
                  marginTop={4}
                >
                  {k}
                </RadioInput>
              ))}
              <OutlineButton disabled={0 === optionIndex} marginTop={16}>
                Resume the conversation
              </OutlineButton>
            </>
          )}
          {0 <= selected && <RadioInput fill="Secondary">{options[selected]}</RadioInput>}
        </Box>
      ) : pattern === 'HoveringAround' ? (
        <GreenBox>
          <BodyText marginBottom={8}>
            <StrongText>✅ AlgoBo is catching up well. Help him expand his knowledge.</StrongText>
          </BodyText>
          <ListItem marginBottom={4}>Explain advanced content to AlgoBo.</ListItem>
          <ListItem>Ask AlgoBo hard questions.</ListItem>
        </GreenBox>
      ) : (
        <GreenBox>
          <BodyText marginBottom={8}>
            <StrongText>✅ Keep the following in mind while teaching!</StrongText>
          </BodyText>
          <ListItem marginBottom={4}>Always tell &quot;why&quot; and &quot;how.&quot;</ListItem>
          <ListItem>Relate what AlgoBo knows when explaining.</ListItem>
        </GreenBox>
      )}
    </Container>
  )
}

const Container = styled.div`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`

const Box = styled.div`
  ${({ theme }) => css`
    ${theme.border.Danger}
    border-width: 4px;
    padding: 8px;
  `}
`

const GreenBox = styled.div`
  ${({ theme }) => css`
    ${theme.border.Success}
    border-width: 4px;
    padding: 8px;
  `}
`
