import styled from '@emotion/styled'
import { CaptionText, FillButton, TextInput } from '@wookiejin/react-component'
import Image from 'next/image'
import { css } from '@emotion/react'
import { Handle, Position } from 'reactflow'

interface Props {
  data: {
    label: string
    ifText: string
    thenText: string
    active: boolean
    onChangeStartMessage: (text: string) => void
    onChangeThen?: (text: string) => void
    onAddNode?: () => void
  }
}

export function StartMessageNode({
  data: { label, ifText, thenText, active, onChangeStartMessage, onChangeThen, onAddNode },
}: Props) {
  return (
    <>
      <Container className="react-flow__node-default">
        <CaptionText color="Primary" marginBottom={4}>
          The chatbot starts by saying:
        </CaptionText>
        <TextInput
          value={ifText}
          placeholder={'e.g., Hi! Do you have any questions?'}
          onChange={onChangeStartMessage}
          marginBottom={8}
        />

        <CaptionText color="Primary" marginBottom={4}>
          The chatbot behaves as:
        </CaptionText>
        <TextInput
          value={thenText}
          placeholder={'e.g., continue asking questions to the student'}
          onChange={onChangeThen}
          marginBottom={8}
        />

        <FillButton fill="Contrast" onClick={onAddNode}>
          Add Behavior
        </FillButton>
        <IdMarker>{label}</IdMarker>
        {active && (
          <ActiveMarker>
            <Image src={'/images/teachtune/chatbot.png'} width={40} height={40} alt="This block is active" />
          </ActiveMarker>
        )}
      </Container>
      <Handle type="source" position={Position.Bottom} />
    </>
  )
}

const Container = styled.div`
  min-width: 320px;
  position: relative;
`

const ActiveMarker = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -28px;
    left: -28px;
    ${theme.fill.Primary}
    ${theme.border.Primary}
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `}
`

const IdMarker = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -28px;
    left: -28px;
    ${theme.fill.Focus}
    ${theme.font.SubTitle}
    ${theme.color.Contrast}
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `}
`
