import styled from '@emotion/styled'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  opensInNewTab?: boolean
}

export const ExternalLink = ({ href, children, opensInNewTab = true, ...props }: Props) => {
  return (
    <a
      {...props}
      href={href}
      target={opensInNewTab ? '_blank' : undefined}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
    >
      {children}
      {opensInNewTab && <VisuallyHidden> (opens in a new tab)</VisuallyHidden>}
    </a>
  )
}

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
