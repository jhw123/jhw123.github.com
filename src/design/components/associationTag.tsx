import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Typeface, Typefaces } from '../foundation/typefaces'
import { TextColor, TextColors } from '../foundation/semantic-colors'
import { ExternalLink } from './externalLink'

export const Association = {
  VCNC: {
    url: 'https://vcnccorp.notion.site/Value-Creators-Company-28a75434e6154bee87e2a624cf6d08fa',
    title: 'VCNC',
  },
  KIXLAB: {
    url: 'https://www.kixlab.org/',
    title: 'KIXLAB',
  },
}

interface Props {
  association: {
    url: string
    title: string
  }
}

const Tag = styled(ExternalLink)`
  ${Typefaces[Typeface.Bold16]};
  ${TextColors[TextColor.Primary]};
  text-decoration: none;
`

export const AssociationTag: FC<Props> = props => {
  return <Tag href={props.association.url}>{props.association.title}</Tag>
}
