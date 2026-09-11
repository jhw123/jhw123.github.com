import styled from '@emotion/styled'
import { format } from 'date-fns'

interface Props {
  date: Date | undefined
  formatStr?: string
}

export const Time = ({ date, formatStr = 'LLL do yyyy' }: Props) => {
  if (date === undefined) {
    return <Container>Present</Container>
  }

  // Date-only strings are parsed as UTC. Rebuilding this as a local date from
  // UTC fields keeps server and browser formatting consistent across time zones.
  const localDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())

  return <Container>{format(localDate, formatStr)}</Container>
}

const Container = styled.span`
  white-space: pre-wrap;
  height: min-content;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1.3;
  text-transform: uppercase;
`
