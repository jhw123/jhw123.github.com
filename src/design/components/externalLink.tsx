import { FC } from 'react'
import * as React from 'react'

interface Props {
  href: string
  className?: string
}

export const ExternalLink: FC<Props> = props => (
  <a className={props.className} href={props.href} rel="noopener noreferrer" target="_blank">
    {props.children}
  </a>
)
