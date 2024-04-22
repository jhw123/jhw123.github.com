import { python } from '@codemirror/lang-python'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'
import CM from '@uiw/react-codemirror'
import { basicLight, basicDark } from '@uiw/codemirror-theme-basic'
import React from 'react'
import { isWindowDarkMode } from '@/utils/isWindowDarkMode'

interface Props {
  code: string
  readOnly?: boolean
  lineNumbers?: boolean
  onChange?: (code: string) => void
}

export const CodeEditor = React.memo(
  View<Props>(({ code, readOnly = false, onChange, lineNumbers = true, forwardedRef, ...props }) => {
    return (
      <Container {...props} readOnly={readOnly}>
        <CM
          value={code}
          extensions={[isWindowDarkMode() ? basicDark : basicLight, python()]}
          indentWithTab
          readOnly={readOnly}
          basicSetup={{ lineNumbers, tabSize: 4 }}
          onChange={onChange}
        />
      </Container>
    )
  })
)

const Container = styled.div<{ readOnly: boolean }>`
  ${({ theme, readOnly }) => css`
    ${theme.border.Secondary}
    border-radius: 8px;
    overflow: hidden;

    .cm-editor {
      background: transparent;
      ${theme.fill.Secondary}
    }

    .cm-line {
      ${readOnly ? 'padding: 0' : ''};
      background: transparent;
    }

    .cm-gutters {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      background-color: transparent;
    }

    .cm-activeLineGutter {
      background-color: initial;
    }

    .cm-focused {
      outline: none;
    }
  `}
`
