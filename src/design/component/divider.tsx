import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { View } from '@/design/foundation'
import { Fill } from '@/design/theme/default/fill'

interface Props {
  fill?: Fill
}

export const Divider = View<Props>(({ fill = 'Inactive', ...props }) => {
  return <Container {...props} fill={fill}></Container>
})

const Container = styled.div<{ fill: Fill }>`
  ${({ fill, theme }) => css`
    height: 1px;
    width: auto;
    ${theme.fill[fill]}
  `}
`
