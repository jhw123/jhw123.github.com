import styled from '@emotion/styled'
import { TextColor, TextColors } from '../foundation/semantic-colors'
import { Typeface, Typefaces } from '../foundation/typefaces'

export const PageTitle = styled.h1`
  ${Typefaces[Typeface.Bold32]};
  ${TextColors[TextColor.Primary]};
  margin-bottom: 2rem;
`
