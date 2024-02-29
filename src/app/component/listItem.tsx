import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'

interface Props {
  children: React.ReactNode
}

export const ListItem = View<Props>(({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
})

const Container = styled.div`
  margin-left: 12px;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: -12px;
  }
`
