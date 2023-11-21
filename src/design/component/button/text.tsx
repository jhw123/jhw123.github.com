import { MIN_BUTTON_SIZE } from '@/constant/ui'
import { View } from '@/design/foundation'
import { ComponentState } from '@/design/foundation/componentState'
import { Color } from '@/design/theme/default/color'
import { Font } from '@/design/theme/default/font'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  state?: ComponentState
  children: React.ReactNode
  color?: Color
  font?: Font
  onClick?: () => void
}

export const TextButton = View<Props>(
  ({ children, color = 'Secondary', font = 'Caption', onClick, state = 'Default', ...props }) => {
    return (
      <Container {...props} color={color} font={font} onClick={onClick} disabled={state === 'Disabled'}>
        {children}
      </Container>
    )
  }
)

const Container = styled.button<{ color: Color; font: Font }>`
  ${({ color, font, theme }) => css`
    ${theme.font[font]}
    min-height: ${MIN_BUTTON_SIZE}px;
    ${theme.color[color]}
    border-radius: 8px;
    cursor: pointer;
    padding: 4px 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:not(:disabled):hover {
      filter: brightness(0.5);
    }

    &:disabled {
      cursor: not-allowed;
      filter: brightness(1.5);
    }
  `}
`