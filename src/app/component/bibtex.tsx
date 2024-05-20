import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CaptionText, View } from '@wookiejin/react-component'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface Props {
  text: string
}

export const BibTex = View<Props>(({ text, forwardedRef, ...props }) => {
  const [copied, setCopied] = useState(false)

  return (
    <Container>
      {copied && (
        <CaptionText color="Success" marginBottom={4}>
          ✅ Copied!
        </CaptionText>
      )}
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
        <div {...props}>{text}</div>
      </CopyToClipboard>
    </Container>
  )
})

const Container = styled.div`
  ${({ theme }) => css`
    ${theme.fill.Secondary}
    ${theme.font.Caption}
    white-space: pre-wrap;
    padding: 16px;
    font-family: monospace;
    border-radius: 8px;
    cursor: copy;
  `}
`
