import { MIN_BUTTON_SIZE } from '@/constant/ui'
import { View } from '@/design/foundation'
import { ComponentState } from '@/design/foundation/componentState'
import { Fill } from '@/design/theme/default/fill'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  state?: ComponentState
  children: React.ReactNode
  onClick?: () => void
  fill: Fill
}

export const FillButton = View<Props>(({ children, fill, onClick, state = 'Default', ...props }) => {
  return (
    <Container {...props} fill={fill} onClick={onClick} disabled={state === 'Disabled'}>
      {children}
    </Container>
  )
})

const Container = styled.button<{ fill: Fill }>`
  ${({ fill, theme }) => css`
    ${theme.font.Body}
    min-height: ${MIN_BUTTON_SIZE}px;
    color: white;
    ${theme.fill[fill]}
    border-radius: 8px;
    cursor: pointer;
    padding: 4px 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:disabled):hover {
      background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
      background-blend-mode: darken;
    }

    &:disabled {
      ${theme.fill.Inactive}
      cursor: not-allowed;
    }
  `}
`