import ReactMarkdown from 'react-markdown'
import React from 'react'
import { BodyText, HeaderText, SubHeaderText, SubSubHeaderText, View } from '@wookiejin/react-component'
import { CodeEditor } from './codeEditor'

interface Props {
  children: string
}

export const Markdown = React.memo(
  View<Props>(({ children, ...props }) => {
    return (
      <ReactMarkdown
        {...props}
        components={{
          h1({ children, ref, ...props }) {
            return (
              <HeaderText {...props} color="Primary" marginBottom={16}>
                {children}
              </HeaderText>
            )
          },
          h2({ children, ref, ...props }) {
            return (
              <SubHeaderText {...props} color="Primary" marginBottom={16}>
                {children}
              </SubHeaderText>
            )
          },
          h3({ children, ref, ...props }) {
            return (
              <SubSubHeaderText {...props} color="Primary" marginBottom={16}>
                {children}
              </SubSubHeaderText>
            )
          },
          p({ children, ref, ...props }) {
            return (
              <BodyText {...props} color="Primary">
                {children}
              </BodyText>
            )
          },
          code({ children, ref, ...props }) {
            return <CodeEditor {...props} code={children?.toString() ?? ''} onChange={undefined} readOnly />
          },
        }}
      >
        {children}
      </ReactMarkdown>
    )
  })
)
