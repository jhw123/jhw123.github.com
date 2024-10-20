import { CodeEditor } from '@/app/component/codeEditor'
import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'
import { useState } from 'react'

interface Props {
  code: string
  onClickLine?: (id: number) => void
}

export const CODE_LINE_HEIGHT = 32

export const CODE_LINE_GAP = 4

export const CodeGrouper = View<Props>(({ code, onClickLine, ...props }) => {
  const [onDrag, setOnDrag] = useState(false)

  const onDragStart = (i: number) => () => {
    setOnDrag(true)
    onClickLine?.(i)
  }

  const onDragEnter = (i: number) => () => {
    if (onDrag) {
      onClickLine?.(i)
    }
  }

  return (
    <Container {...props} onMouseUp={() => setOnDrag(false)}>
      {code.split('\n').map((line, i) => {
        return (
          <Line key={i} onMouseDown={onDragStart(i)} disabled={!onClickLine} onMouseEnter={onDragEnter(i)}>
            <Text>
              <CodeEditor code={line} lineNumbers={false} readOnly />
            </Text>
          </Line>
        )
      })}
    </Container>
  )
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  gap: ${CODE_LINE_GAP}px;
`

const Line = styled.button`
  cursor: 'pointer';
  width: 100%;
  height: ${CODE_LINE_HEIGHT}px;
  text-align: left;
  align-items: center;
  transition: all 0.2s;
  border-radius: 4px;
`

const Text = styled.div`
  user-select: none;
  pointer-events: none;
`
