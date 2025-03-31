import { MIN_BUTTON_SIZE } from '@/ui'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'

interface Props {
  href: string
  title: string
  children: React.ReactNode
}

export const Link = View<Props>(({ href, children, title, forwardedRef, ...props }) => {
  return (
    <Container {...props} href={href} target={'_blank'} rel="noreferrer">
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
    min-height: ${MIN_BUTTON_SIZE}px;
    box-sizing: border-box;

    &:hover {
      background-image: linear-gradient(rgb(0 0 0/10%) 0 0);
      background-blend-mode: darken;
    }
  `}
`
