import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'

interface Props {
  children?: React.ReactNode
}

export const Banner = View<Props>(({ children, forwardedRef, ...props }) => {
  return <Container {...props}>{children}</Container>
})

const Container = styled.div`
  ${({ theme }) => css`
    color: white;
    ${theme.fill.Warning}
    background-color: #edab50;
    padding: 16px;
    border-radius: 8px;
    ${theme.font.Body}
    ${theme.elevation.L1}
    font-weight: bold;
    display: inline-block;
    text-align: center;

    @media (prefers-color-scheme: dark) {
      background-color: #ef9d29;
    }
  `}
`
