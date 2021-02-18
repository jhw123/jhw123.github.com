import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import { HeaderContents } from '../header-contents'
import { MOBILE_HEADER_BAR_HEIGHT, MOBILE_MODE_WIDTH, SIDE_BAR_WIDTH_RATIO } from '../../constants/constants'
import { FillColor, FillColors } from '../../foundation/semantic-colors'
import { GreyColors } from '../../foundation/base-colors'
import { opacify } from '../../foundation/color-utils'
import { GlobalStyles } from '../../foundation/global-styles'
import { TabButton } from '../tabButton'
import { useTabMode } from './0.hooks/useTabMode'
import { useTabClick } from './0.hooks/useTabClick'
import { useHeaderTranslationDistance } from './0.hooks/useHeaderTranslationDistance'
import { useAfterLoad } from './0.hooks/useAfterLoad'

const ASIDE = styled.aside`
  padding: 0 20px 20px;

  @media screen and (min-width: ${MOBILE_MODE_WIDTH}px) {
    width: ${SIDE_BAR_WIDTH_RATIO}%;
    display: inline-block;
    vertical-align: top;
    padding-top: 20px;
  }

  @media screen and (max-width: ${MOBILE_MODE_WIDTH}px) {
    ${FillColors[FillColor.Elevated]};
  }
`

const MAIN = styled.main`
  position: relative;
  width: 100%;
  z-index: 2;

  @media screen and (min-width: ${MOBILE_MODE_WIDTH}px) {
    ${FillColors[FillColor.Base]};
    width: ${100 - SIDE_BAR_WIDTH_RATIO}%;
    display: inline-block;
    vertical-align: top;
  }

  @media screen and (max-width: ${MOBILE_MODE_WIDTH}px) {
    background-color: ${opacify(GreyColors.Grey000, 0.95)};
    @media (prefers-color-scheme: dark) {
      background-color: ${opacify(GreyColors.Grey090, 0.95)};
    }
    position: absolute;
    top: ${MOBILE_HEADER_BAR_HEIGHT}px;
  }

  &.animate {
    transition: transform 0.2s, min-height 0.1s;
  }
`

const Content = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem 4rem;
`

const Layout: FC = props => {
  const { isTabMode } = useTabMode()
  const { tabOpened, tabClickHandler } = useTabClick()
  const { headerRef, translationDistance } = useHeaderTranslationDistance()
  const { mainRef } = useAfterLoad()

  return (
    <>
      <Global styles={GlobalStyles} />
      <ASIDE ref={headerRef}>
        {isTabMode && <TabButton opened={tabOpened} onClick={tabClickHandler} />}
        <HeaderContents />
      </ASIDE>
      <MAIN
        ref={mainRef}
        style={{
          transform: isTabMode && tabOpened ? `translateY(${translationDistance}px)` : 'none',
          minHeight: isTabMode && !tabOpened ? `${translationDistance}px` : 0,
        }}
      >
        <Content>{props.children}</Content>
      </MAIN>
    </>
  )
}

export default Layout
