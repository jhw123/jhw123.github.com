'use client'
import { BodyText, LinearLayout, OutlineButton, SubSubHeaderText, View } from '@wookiejin/react-component'
import { useMemo, useState } from 'react'
import { CODE_EXAMPLE_1 } from '../data/codeExample1'
import { CODE_EXAMPLE_2 } from '../data/codeExample2'
import { CODE_EXAMPLE_3 } from '../data/codeExample3'
import { QUALITY_1 } from '../data/quality1'
import { SUBGOAL_HIERARCHY_1 } from '../data/subgoalHierarchy1'
import { CodeGrouper } from './codeGrouper'
import { SubgoalTree } from './subgoalTree'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { SUBGOAL_HIERARCHY_2 } from '../data/subgoalHierarchy2'
import { SUBGOAL_HIERARCHY_3 } from '../data/subgoalHierarchy3'
import { QUALITY_2 } from '../data/quality2'
import { QUALITY_3 } from '../data/quality3'
import { MOBILE_BREAKPOINT } from '@/ui'

interface Props {}

export const Examples = View<Props>(({ forwardedRef, ...props }) => {
  const [hoveredSubgoal, setHoveredSubgoal] = useState('0')
  const [example, setExample] = useState(0)
  const CODE_EXAMPLE = useMemo(() => [CODE_EXAMPLE_1, CODE_EXAMPLE_2, CODE_EXAMPLE_3][example], [example])
  const SUBGOAL_HIERARCHY = useMemo(
    () => [SUBGOAL_HIERARCHY_1, SUBGOAL_HIERARCHY_2, SUBGOAL_HIERARCHY_3][example],
    [example]
  )
  const QUALITY = useMemo(() => [QUALITY_1, QUALITY_2, QUALITY_3][example], [example])

  return (
    <div {...props}>
      <LinearLayout gap={16} marginBottom={16}>
        <OutlineButton color={example === 0 ? 'Warning' : 'Secondary'} onClick={() => setExample(0)}>
          Example 1
        </OutlineButton>
        <OutlineButton color={example === 1 ? 'Warning' : 'Secondary'} onClick={() => setExample(1)}>
          Example 2
        </OutlineButton>
        <OutlineButton color={example === 2 ? 'Warning' : 'Secondary'} onClick={() => setExample(2)}>
          Example 3
        </OutlineButton>
      </LinearLayout>
      <Container>
        <div>
          <SubSubHeaderText>Subgoal Label:</SubSubHeaderText>
          <LinearLayout justifyContent="flex-start" gap={8} marginBottom={8}>
            <ColorBox color={SUBGOAL_HIERARCHY.find(s => s.id === hoveredSubgoal)?.color ?? ''} />
            <BodyText>{SUBGOAL_HIERARCHY.find(s => s.id === hoveredSubgoal)?.label}</BodyText>
          </LinearLayout>

          <SubSubHeaderText>Quality:</SubSubHeaderText>
          <BodyText>Code Group: {QUALITY.find(s => s.id === hoveredSubgoal)?.group}</BodyText>
          <BodyText>Subgoal Label: {QUALITY.find(s => s.id === hoveredSubgoal)?.label}</BodyText>
        </div>

        <CodeContainer>
          <SubgoalTree
            subgoals={SUBGOAL_HIERARCHY}
            codeNum={0}
            onHoverBar={(id: string) => () => setHoveredSubgoal(id)}
          />
          <CodeGrouper
            code={CODE_EXAMPLE}
            marginLeft={(SUBGOAL_HIERARCHY.reduce((m, { depth }) => Math.max(m, depth), 0) + 1) * 18}
          />
        </CodeContainer>
      </Container>
    </div>
  )
})

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 16px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: contents;
  }
`

const CodeContainer = styled.div`
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-top: 16px;
  }
`

const ColorBox = styled.div<{ color: string }>`
  ${({ color }) => css`
    background-color: ${color};
    width: 20px;
    height: 20px;
    border-radius: 4px;
    flex-shrink: 0;
  `}
`
