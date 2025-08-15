interface Props {
  href: string
  children: React.ReactNode
}

export const ExternalLink = ({ href, children, ...props }: Props) => {
  return (
    <a {...props} href={href} target={'_blank'} rel="noopener noreferrer">
      {children}
    </a>
  )
}
