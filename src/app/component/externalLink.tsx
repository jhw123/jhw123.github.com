import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'

interface Props {
  href: string
  children: React.ReactNode
}

export const ExternalLink = View<Props>(({ href, children, ...props }) => {
  return (
    <Container {...props} href={href} target={'_blank'} rel="noreferrer">
      {children}
    </Container>
  )
})

const Container = styled.a`
  display: inline-flex;
  align-items: center;
`
