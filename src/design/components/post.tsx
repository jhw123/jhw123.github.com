import * as React from 'react'
import { FC } from 'react'
import styled from '@emotion/styled'
import { Time } from './time'
import { Tag } from './tag'
import { Typeface, Typefaces } from '../foundation/typefaces'
import {
  BorderColor,
  BorderColors,
  HoverColor,
  HoverColors,
  TextColor,
  TextColors,
} from '../foundation/semantic-colors'
import { MOBILE_MODE_WIDTH } from '../../constants/constants'

interface Props {
  title: string
  dateTime: string
  tags: string[]
}

const Article = styled.section`
  ${BorderColors[BorderColor.Basic]};
  ${HoverColors[HoverColor.Basic]};
  border-width: 2px;
  border-right: none;
  border-bottom: none;
  border-top: none;
  padding: 0.2rem 1rem 1rem;
  margin-bottom: 1rem;
`

const Title = styled.h1`
  ${TextColors[TextColor.Primary]};
  ${Typefaces[Typeface.Bold24]};
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${MOBILE_MODE_WIDTH}px) {
    display: block;
    margin-bottom: 0.4rem;
  }
`

export const Post: FC<Props> = props => {
  return (
    <Article>
      <Header>
        <Title>{props.title}</Title>
        <Time dateTime={props.dateTime} format="Date" />
      </Header>
      {props.tags
        .filter(tag => tag.trim().length > 0)
        .map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
    </Article>
  )
}
