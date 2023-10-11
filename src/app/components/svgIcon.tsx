import { IconSvgs } from '@/constant/iconSvg'
import { View } from '@/design/foundation'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  name: keyof typeof IconSvgs
}

export const SvgIcon = View<Props>(({ name }) => {
  const icon = IconSvgs[name]
  return (
    <Container viewBox={icon.viewBox}>
      <title>{name}</title>
      <path d={icon.path} />
    </Container>
  )
})

const Container = styled.svg`
  ${({ theme }) => css`
    display: inline-block;
    width: 70%;
    height: 70%;
    stroke-width: 0;
    ${theme.color.Primary};
  `}
`
