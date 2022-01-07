// @flow strict
import React from 'react'
import styled from '@emotion/styled'
import ICONS from '../../constants/icons'
import { GreyColors } from '../foundation/base-colors'

type Props = {
  name: string
}

const StyledSvg = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: ${GreyColors.Grey100};
  fill: ${GreyColors.Grey100};
  @media (prefers-color-scheme: dark) {
    stroke: ${GreyColors.Grey010};
    fill: ${GreyColors.Grey010};
  }
  font-style: normal;
  font-weight: normal;
  speak: none;
  margin-right: 0.2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: 0.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const ContactIcon = ({ name }: Props) => {
  const icon = getIcon(name)
  return (
    <StyledSvg viewBox={icon.viewBox}>
      <title>{name}</title>
      <path d={icon.path} />
    </StyledSvg>
  )
}

const getIcon = (name: string): { viewBox?: string; path?: string } => {
  let icon

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER
      break
    case 'github':
      icon = ICONS.GITHUB
      break
    case 'vkontakte':
      icon = ICONS.VKONTAKTE
      break
    case 'telegram':
      icon = ICONS.TELEGRAM
      break
    case 'email':
      icon = ICONS.EMAIL
      break
    case 'rss':
      icon = ICONS.RSS
      break
    case 'linkedin':
      icon = ICONS.LINKEDIN
      break
    case 'instagram':
      icon = ICONS.INSTAGRAM
      break
    case 'line':
      icon = ICONS.LINE
      break
    case 'facebook':
      icon = ICONS.FACEBOOK
      break
    case 'gitlab':
      icon = ICONS.GITLAB
      break
    case 'weibo':
      icon = ICONS.WEIBO
      break
    case 'codepen':
      icon = ICONS.CODEPEN
      break
    case 'youtube':
      icon = ICONS.YOUTUBE
      break
    case 'soundcloud':
      icon = ICONS.SOUNDCLOUD
      break
    case 'medium':
      icon = ICONS.MEDIUM
      break
    default:
      icon = {}
      break
  }

  return icon
}
