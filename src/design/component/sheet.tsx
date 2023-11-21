import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '../foundation'
import { Fill } from '../theme/default/fill'
import { MIN_BUTTON_SIZE } from '@/constant/ui'

interface Props {
  fill?: Fill
  children?: React.ReactNode
}

export const Sheet = View<Props>(({ fill = 'Secondary', children, ...props }) => {
  return (
    <Container {...props} fill={fill}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ fill: Fill }>`
  ${({ theme, fill }) => css`
    ${theme.elevation.L1}
    width: auto;
    min-height: ${MIN_BUTTON_SIZE}px;
    ${theme.fill[fill]}
  `}
`