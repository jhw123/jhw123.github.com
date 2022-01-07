import React, { FC } from 'react'
import styled from '@emotion/styled'
import { TextColor, TextColors } from '../foundation/semantic-colors'
import { Typeface, Typefaces } from '../foundation/typefaces'

interface Props {
  dateTime: string
  format: 'Date' | 'Time' | 'DateTime'
}

const StyledTime = styled.time`
  ${TextColors[TextColor.Secondary]};
  ${Typefaces[Typeface.Regular16]};
  flex-shrink: 0;
`

export const Time: FC<Props> = props => {
  const presentation = (format => {
    switch (true) {
      case format === 'Date':
        return new Date(props.dateTime).toLocaleDateString()
      case format === 'Time':
        return new Date(props.dateTime).toLocaleTimeString()
      default:
        return new Date(props.dateTime).toLocaleString()
    }
  })(props.format)
  return <StyledTime dateTime={`${props.dateTime}+09:00`}>{presentation}</StyledTime>
}
