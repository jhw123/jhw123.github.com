import { View } from '@/design/foundation'
import { Color } from '@/design/theme/default/color'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

type Align = 'left' | 'center' | 'right'

interface Props {
  children: React.ReactNode
  align?: Align
  color?: Color
}

export const CaptionText = View<Props>(({ children, color = 'Secondary', align = 'left', ...props }) => {
  return (
    <Container {...props} color={color} align={align}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ color: Color; align: Align }>`
  ${({ color, align, theme }) => css`
    ${theme.font.Caption}
    ${theme.color[color]}
    text-align: ${align};
    white-space: pre-wrap;
    height: min-content;
  `}
`
