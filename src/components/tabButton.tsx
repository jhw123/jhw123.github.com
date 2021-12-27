import styled from '@emotion/styled'
import React, { FC } from 'react'
import { FillColor, FillColors, ShadowColor, ShadowColors, TextColor, TextColors } from '../foundation/semantic-colors'
import { MOBILE_HEADER_BAR_HEIGHT } from '../constants/constants'
import { GreyColors } from '../foundation/base-colors'
import { opacify } from '../foundation/color-utils'
import { Typeface, Typefaces } from '../foundation/typefaces'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

interface Props {
  opened: boolean
  onClick: () => void
}

const Container = styled.div`
  ${ShadowColors[ShadowColor.Basic0y4b]};
  width: 100vw;
  margin-bottom: 10px;
  display: flex;
  transform: translateX(-20px);

  background-color: ${opacify(GreyColors.Grey000, 0.95)};
  @media (prefers-color-scheme: dark) {
    background-color: ${opacify(GreyColors.Grey090, 0.95)};
  }
`

const Button = styled.button`
  ${FillColors[FillColor.Transparent]};
  border: none;
  width: ${MOBILE_HEADER_BAR_HEIGHT}px;
  height: ${MOBILE_HEADER_BAR_HEIGHT}px;
  position: relative;
  padding: 0;
  outline: none;

  &:before,
  &:after {
    ${FillColors[FillColor.Float]};
    top: 23px;
    left: 9px;
    width: 32px;
    height: 4px;
    content: '';
    position: absolute;
    transition: all 0.2s;
  }
  &:before {
    transform: translateY(-6px);
  }
  &:after {
    transform: translateY(6px);
  }
  &.close {
    &:before {
      transform: translateY(0) rotate(45deg);
    }
    &:after {
      transform: translateY(0) rotate(-45deg);
    }
  }
`

const Title = styled.div`
  ${TextColors[TextColor.Secondary]};
  ${Typefaces[Typeface.Regular16]};
  width: calc(100vw - ${MOBILE_HEADER_BAR_HEIGHT}px * 2);
  margin-left: ${MOBILE_HEADER_BAR_HEIGHT}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TabButton: FC<Props> = props => {
  const metadata = useSiteMetadata()

  return (
    <Container>
      <Title>{metadata?.title}</Title>
      <Button className={props.opened ? 'close' : ''} onClick={props.onClick} />
    </Container>
  )
}
