import ReactMarkdown from 'react-markdown'
import React from 'react'
import { SubSubHeaderText } from './text/subSubHeader'
import { BodyText } from './text/body'
import { HeaderText } from './text/header'
import { SubHeaderText } from './text/subHeader'
import { View } from '../foundation'

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
        }}
      >
        {children}
      </ReactMarkdown>
    )
  })
)
