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

export const HeaderText = View<Props>(({ children, color = 'Primary', align = 'left', ...props }) => {
  return (
    <Container color={color} align={align} {...props}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ color: Color; align: Align }>`
  ${({ color, theme, align }) => css`
    ${theme.font.Title}
    ${theme.color[color]}
    text-align: ${align};
    white-space: pre-wrap;
    height: min-content;
  `}
`
