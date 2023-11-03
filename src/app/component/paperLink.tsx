import { View } from '@/design/foundation'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { last } from 'lodash'
import Image from 'next/image'

interface Props {
  href: string
  title: string
  children: React.ReactNode
}

export const PaperLink = View<Props>(({ href, children, title, ...props }) => {
  const icon = (() => {
    switch (true) {
      case last(href.split('.')) === 'pdf':
        return '/icons/pdf.png'
      case href.includes('arxiv.org'):
        return '/icons/arxiv.png'
      case href.includes('dl.acm.org'):
        return '/icons/dl.png'
      default:
        return ''
    }
  })()

  return (
    <Container {...props} href={href} target={'_blank'} rel="noreferrer">
      {0 < icon.length && <Image width={20} height={20} src={icon} alt={`The paper link for ${title}`} />}
      {children}
    </Container>
  )
})

const Container = styled.a`
  ${({ theme }) => css`
    padding: 4px 8px;
    border-radius: 4px;
    ${theme.border.Secondary}
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    min-height: 40px;
    box-sizing: border-box;
    gap: 4px;
  `}
`
