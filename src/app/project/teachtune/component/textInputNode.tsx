import styled from '@emotion/styled'
import { CaptionText, FillButton, LinearLayout, OutlineButton, TextInput } from '@wookiejin/react-component'
import Image from 'next/image'
import { css } from '@emotion/react'
import { Handle, Position } from 'reactflow'

interface Props {
  data: {
    label: string
    ifText: string
    thenText: string
    active: boolean
    onChangeIf?: (text: string) => void
    onChangeThen?: (text: string) => void
    onAddNode?: () => void
    onDeleteNode?: () => void
  }
}

export function TextInputNode({
  data: { label, ifText, thenText, active, onChangeIf, onChangeThen, onAddNode, onDeleteNode },
}: Props) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Container className="react-flow__node-default">
        <CaptionText color="Secondary" marginBottom={4}>
          If the student ...
        </CaptionText>
        <TextInput
          value={ifText}
          placeholder={'e.g., the student asks a question'}
          onChange={onChangeIf}
          marginBottom={8}
        />

        <CaptionText color="Secondary" marginBottom={4}>
          Then, the chatbot ...
        </CaptionText>
        <TextInput
          value={thenText}
          placeholder={'e.g., induce interest through real-life examples'}
          onChange={onChangeThen}
          marginBottom={8}
        />
        <LinearLayout gap={8}>
          <FillButton fill="Contrast" onClick={onAddNode}>
            Add Behavior
          </FillButton>
          <OutlineButton color="Danger" onClick={onDeleteNode}>
            Delete
          </OutlineButton>
        </LinearLayout>
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
