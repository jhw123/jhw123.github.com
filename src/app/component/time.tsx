import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'
import { format } from 'date-fns'

interface Props {
  date: Date | undefined
  formatStr?: string
}

export const Time = View<Props>(({ date, formatStr = 'LLL do yyyy', ...props }) => {
  return <Container {...props}>{date !== undefined ? format(date, formatStr) : 'Present'}</Container>
})

const Container = styled.span`
  white-space: pre-wrap;
  height: min-content;
`
