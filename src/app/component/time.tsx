import styled from '@emotion/styled'
import { format } from 'date-fns'

interface Props {
  date: Date | undefined
  formatStr?: string
}

export function Time({ date, formatStr = 'LLL do yyyy' }: Props) {
  return <Container>{date !== undefined ? format(date, formatStr) : 'Present'}</Container>
}

const Container = styled.span`
  white-space: pre-wrap;
  height: min-content;
`
