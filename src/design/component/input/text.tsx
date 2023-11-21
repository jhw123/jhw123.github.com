import { MIN_BUTTON_SIZE } from '@/constant/ui'
import { View } from '@/design/foundation'
import { ComponentState } from '@/design/foundation/componentState'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ChangeEvent, KeyboardEvent, useCallback } from 'react'

interface Props {
  value: string
  state?: ComponentState
  placeholder?: string
  rows?: number
  readonly?: boolean
  onChange?: (value: string) => void
  onEnter?: () => void
}

export const TextInput = View<Props>(
  ({ value, onChange, state = 'Default', placeholder, rows = 3, readonly = false, onEnter, ...props }) => {
    const onWrite = useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value)
      },
      [onChange]
    )

    const onKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()
          onEnter?.()
        }
      },
      [onEnter]
    )

    return (
      <Container
        {...props}
        onChange={onWrite}
        value={value}
        disabled={state === 'Disabled'}
        placeholder={placeholder}
        rows={rows}
        readOnly={readonly}
        onKeyUp={onKeyDown}
      />
    )
  }
)

const Container = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    resize: vertical;
    box-sizing: border-box;
    font-family: inherit;
    ${theme.font.Body}
    border-radius: 8px;
    ${theme.border.Secondary}
    padding: 8px;
    line-height: inherit;
    min-height: ${MIN_BUTTON_SIZE}px;
    ${theme.fill.Secondary}
    outline: none;

    &:focus {
      ${theme.color.Primary}
      ${theme.border.Focus}
    }

    ::placeholder {
      ${theme.color.Secondary}
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`