import React, { FC } from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import styled from '@emotion/styled'
import { Typeface, Typefaces } from '../foundation/typefaces'
import { PagePath } from '../page-paths'
import { BorderColor, BorderColors, TextColor, TextColors } from '../foundation/semantic-colors'
import { Link } from 'gatsby'
import isNil from 'lodash/isNil'
import { useMarkdownData } from '../hooks/useMarkdownData'
import { PostType } from '../constants/enums'
import { ContactIcon } from './contactIcon'
import { css } from '@emotion/react'
import { ExternalLink } from './externalLink'
import { UL } from './list'

const LinkWithoutDecoration = styled(Link)`
  text-decoration: none;
`

const H1 = styled.h1`
  ${TextColors[TextColor.Primary]};
  ${Typefaces[Typeface.Bold24]};
`

const Description = styled.p`
  ${TextColors[TextColor.Secondary]};
  ${Typefaces[Typeface.Regular16]};
  margin-bottom: 1.2rem;
`

const LinkStyle = css`
  ${TextColors[TextColor.Primary]};
  ${Typefaces[Typeface.Regular16]};
  display: block;
  margin-bottom: 0.5rem;
  text-decoration: none;

  &.active,
  &:hover {
    ${TextColors[TextColor.Main020]};
  }
`

const StyledLink = styled(Link)`
  ${LinkStyle};
`
const StyledExternalLink = styled(ExternalLink)`
  ${LinkStyle};
`

const DATA = styled.data`
  margin-bottom: 1.45rem;
`

const IconLink = styled(ExternalLink)`
  ${BorderColors[BorderColor.Basic]};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
`

const NavH1 = styled.h1`
  ${TextColors[TextColor.Secondary]};
  ${Typefaces[Typeface.Bold14]};
  margin-top: 1.33333rem;
  margin-bottom: 0.5rem;
`

const ComingSoon = styled.div`
  ${TextColors[TextColor.Secondary]};
  margin-bottom: 0.5rem;
  cursor: not-allowed;

  &:after {
    ${Typefaces[Typeface.Regular10]};
    ${TextColors[TextColor.Red]};
    margin-left: 6px;
    position: absolute;
    content: 'coming soon';
    transform: rotate(-5deg) translateY(3px);
  }
`

export const HeaderContents: FC = () => {
  const siteMetadata = useSiteMetadata()
  const articlesData = useMarkdownData(PostType.Articles)
  const miscData = useMarkdownData(PostType.Miscs)

  if (isNil(siteMetadata)) {
    return null
  }

  return (
    <>
      <LinkWithoutDecoration rel={'author'} to={PagePath.root.build()}>
        <H1>{siteMetadata.author}</H1>
      </LinkWithoutDecoration>
      <Description>{siteMetadata.description}</Description>
      <DATA>
        {Object.keys(siteMetadata?.contacts).map((contact, idx) => (
          <IconLink key={contact} href={Object.values(siteMetadata?.contacts)[idx] ?? PagePath.root.build()}>
            <ContactIcon name={contact} />
          </IconLink>
        ))}
      </DATA>

      <nav>
        <NavH1>소개</NavH1>
        <UL>
          <li>
            <StyledLink to={PagePath.projects.build()} activeClassName={'active'}>
              프로젝트
            </StyledLink>
          </li>
          <li>
            <StyledExternalLink href={'/files/hyoungwook_jin_cv.pdf'}>이력서</StyledExternalLink>
          </li>
        </UL>
      </nav>

      <nav>
        <NavH1>글</NavH1>
        <UL>
          <li>
            <ComingSoon>개발</ComingSoon>
            {/*<StyledLink to={PagePath.articles.build()} activeClassName={'active'} partiallyActive>*/}
            {/*  {`개발 (${articlesData?.length})`}*/}
            {/*</StyledLink>*/}
          </li>
          <li>
            <StyledLink to={PagePath.miscs.build()} activeClassName={'active'} partiallyActive>
              {`잡다구리 (${miscData?.length})`}
            </StyledLink>
          </li>
          <li>
            <StyledLink to={PagePath.tils.build()} activeClassName={'active'} partiallyActive>
              Today I Learned
            </StyledLink>
          </li>
        </UL>
      </nav>
    </>
  )
}
