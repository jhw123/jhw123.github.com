import styled from '@emotion/styled'
import MDEditor from '@uiw/react-md-editor'
import { View } from '@wookiejin/react-component'
import { memo } from 'react'

type Props =
  | (React.ComponentProps<typeof MDEditor.Markdown> & { readOnly: true; colorMode?: 'light' | 'dark' })
  | (React.ComponentProps<typeof MDEditor> & { readOnly: false; colorMode?: 'light' | 'dark' })

export const Markdown = memo(
  View<Props>(({ style, forwardedRef, colorMode = 'light', ...props }) => {
    return (
      <Container style={style} data-color-mode={colorMode}>
        {props.readOnly ? (
          <MDEditor.Markdown {...props} ref={forwardedRef} />
        ) : (
          <MDEditor {...props} ref={forwardedRef} />
        )}
      </Container>
    )
  })
)

const Container = styled.div`
  li {
    list-style: initial;
  }

  .wmde-markdown {
    background-color: transparent;
    white-space: normal;
  }
`
