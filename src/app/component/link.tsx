import { MIN_BUTTON_SIZE } from '@/ui'
import styled from '@emotion/styled'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  title: string
  children: React.ReactNode
  marginRight?: number
  marginBottom?: number
}

export const Link = ({ href, children, title, marginRight, marginBottom, ...props }: Props) => {
  return (
    <Container
      $marginRight={marginRight}
      $marginBottom={marginBottom}
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} (opens in a new tab)`}
    >
      {children}
    </Container>
  )
}

const Container = styled.a<{ $marginRight?: number; $marginBottom?: number }>`
  margin-right: ${({ $marginRight = 0 }) => $marginRight}px;
  margin-bottom: ${({ $marginBottom = 0 }) => $marginBottom}px;
  padding: 4px 8px;
  border: 1px solid #495961;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  min-height: ${MIN_BUTTON_SIZE}px;
  box-sizing: border-box;

  @media (prefers-color-scheme: dark) {
    border-color: #647a85;
  }

  &:hover {
    background-image: linear-gradient(rgb(0 0 0 / 10%) 0 0);
    background-blend-mode: darken;
  }
`
