import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import { HeaderContents } from '../header-contents'
import { MOBILE_MODE_WIDTH, SIDE_BAR_WIDTH_RATIO } from '../../constants/constants'
import { FillColor, FillColors } from '../../foundation/semantic-colors'
import { GreyColors } from '../../foundation/base-colors'
import { opacify } from '../../foundation/color-utils'
import { GlobalStyles } from '../../foundation/global-styles'

const ASIDE = styled.aside`
  padding: 20px 20px 20px;
  position: sticky;
  top: 0;

  @media screen and (min-width: ${MOBILE_MODE_WIDTH + 1}px) {
    width: ${SIDE_BAR_WIDTH_RATIO}%;
    display: inline-block;
    vertical-align: top;
  }

  @media screen and (max-width: ${MOBILE_MODE_WIDTH}px) {
    ${FillColors[FillColor.Elevated]};
  }
`

const MAIN = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 2;

  @media screen and (min-width: ${MOBILE_MODE_WIDTH + 1}px) {
    ${FillColors[FillColor.Base]};
    width: ${100 - 2 * SIDE_BAR_WIDTH_RATIO}%;
    display: inline-block;
    vertical-align: top;
    margin-right: ${SIDE_BAR_WIDTH_RATIO}%;
  }

  @media screen and (max-width: ${MOBILE_MODE_WIDTH}px) {
    background-color: ${opacify(GreyColors.Grey000, 0.95)};
    @media (prefers-color-scheme: dark) {
      background-color: ${opacify(GreyColors.Grey090, 0.95)};
    }
  }
`

const FRAME = styled.div`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
`

const Content = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem 4rem;
`

const Layout: FC = props => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <FRAME>
        <ASIDE>
          <HeaderContents />
        </ASIDE>
        <MAIN>
          <Content>{props.children}</Content>
        </MAIN>
      </FRAME>
    </>
  )
}

export default Layout
