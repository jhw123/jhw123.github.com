import React, { FC } from 'react'
import styled from '@emotion/styled'
import { BorderColor, BorderColors, TextColor, TextColors } from '../foundation/semantic-colors'
import { Typeface, Typefaces } from '../foundation/typefaces'

const Container = styled.div`
  ${BorderColors[BorderColor.Basic]};
  ${Typefaces[Typeface.Regular18]};
  ${TextColors[TextColor.Primary]};
  display: inline-block;
  padding: 3px 5px;
  border-radius: 10px;
  margin: 0 3px;
`

export const Tag: FC = props => {
  return <Container>{props.children}</Container>
}
