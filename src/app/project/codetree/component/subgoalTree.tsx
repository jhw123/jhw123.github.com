import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'
import React, { useMemo } from 'react'
import { CODE_LINE_GAP, CODE_LINE_HEIGHT } from './codeGrouper'
import { maxBy } from 'lodash'

export interface SubgoalNode {
  id: string
  label: string
  groups: number[][]
  parentId: string | null
  depth: number
  color: string
}

const BAR_WIDTH = 12

interface Props {
  subgoals: SubgoalNode[]
  codeNum: number
  onHoverBar?: (id: string) => () => void
}

export const SubgoalTree = View<Props>(({ subgoals, codeNum, forwardedRef, onHoverBar, ...props }) => {
  const goals = useMemo(() => {
    return subgoals.flatMap(subgoal =>
      subgoal.groups[codeNum].map(step => [step, subgoal.depth, subgoal.color ?? 'transparent', subgoal.id] as const)
    )
  }, [codeNum, subgoals])

  return (
    <Container {...props} depth={maxBy(goals, 1)?.[1] ?? -1}>
      {goals.map(([step, depth, color, id], i) => (
        <Bar key={i} color={color} index={step} depth={depth} onMouseEnter={onHoverBar?.(id)} />
      ))}
    </Container>
  )
})

const Container = styled.div<{ depth: number }>`
  ${({ depth }) => css`
    position: relative;
    width: ${0 <= depth ? (depth + 1) * (BAR_WIDTH + 4) + 8 : 0}px;
    flex-shrink: 0;
    transition: all 0.2s;
  `}
`

const Bar = styled.div<{ color: string; index: number; depth: number }>`
  ${({ color, index, depth }) => css`
    background-color: ${color};
    position: absolute;
    width: ${BAR_WIDTH}px;
    height: ${CODE_LINE_HEIGHT + CODE_LINE_GAP}px;
    top: ${index * (CODE_LINE_HEIGHT + CODE_LINE_GAP) - CODE_LINE_GAP / 2}px;
    left: ${depth * (BAR_WIDTH * 1.5)}px;
    cursor: pointer;
    z-index: 100;
  `}
`
