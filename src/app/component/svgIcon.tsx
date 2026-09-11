import { IconSvgs } from '@/constant/iconSvg'
import styled from '@emotion/styled'

interface Props {
  name: keyof typeof IconSvgs
}

export const SvgIcon = ({ name }: Props) => {
  const icon = IconSvgs[name]
  return (
    <Container viewBox={icon.viewBox} aria-hidden="true">
      <path d={icon.path} />
    </Container>
  )
}

const Container = styled.svg`
  display: inline-block;
  width: 70%;
  height: 70%;
  stroke-width: 0;
  color: #222222;
  fill: #222222;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
    fill: #ffffff;
  }
`
