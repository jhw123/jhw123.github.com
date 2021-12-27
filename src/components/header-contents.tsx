import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import isNil from 'lodash/isNil'
import React, { FC } from 'react'
import { PostType } from '../constants/enums'
import { BorderColor, BorderColors, TextColor, TextColors } from '../foundation/semantic-colors'
import { Typeface, Typefaces } from '../foundation/typefaces'
import { useMarkdownData } from '../hooks/useMarkdownData'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { PagePath } from '../page-paths'
import { ContactIcon } from './contactIcon'
import { ExternalLink } from './externalLink'
import { UL } from './list'

const LinkWithoutDecoration = styled(Link)`
  text-decoration: none;
`

const H1 = styled.h1`
  ${TextColors[TextColor.Primary]};
  ${Typefaces[Typeface.Bold24]};
  margin-bottom: 0.5rem;
`

const LinkStyle = css`
  ${TextColors[TextColor.Primary]};
  ${Typefaces[Typeface.Regular20]};
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const HeaderContents: FC = () => {
  const siteMetadata = useSiteMetadata()
  // const articlesData = useMarkdownData(PostType.Articles)
  const miscData = useMarkdownData(PostType.Miscs)

  if (isNil(siteMetadata)) {
    return null
  }

  return (
    <Container>
      <LinkWithoutDecoration rel="author" to={PagePath.root.build()}>
        <H1>{siteMetadata.author}</H1>
      </LinkWithoutDecoration>
      {/* <Description>{siteMetadata.description}</Description> */}
      <DATA>
        {Object.keys(siteMetadata?.contacts).map((contact, idx) => (
          <IconLink key={contact} href={Object.values(siteMetadata?.contacts)[idx] ?? PagePath.root.build()}>
            <ContactIcon name={contact} />
          </IconLink>
        ))}
      </DATA>

      <nav>
        <UL>
          <li>
            <StyledLink to={PagePath.root.build()} activeClassName="active">
              WHO AM I
            </StyledLink>
          </li>
          <li>
            <StyledLink to={PagePath.projects.build()} activeClassName="active">
              PROJECTS
            </StyledLink>
          </li>
          <li>
            <StyledExternalLink href="/files/hyoungwook_jin_cv.pdf">CV</StyledExternalLink>
          </li>
          <li>
            <ComingSoon>DEV.</ComingSoon>
            {/* <StyledLink to={PagePath.articles.build()} activeClassName={'active'} partiallyActive> */}
            {/*  {`개발 (${articlesData?.length})`} */}
            {/* </StyledLink> */}
          </li>
          <li>
            <StyledLink to={PagePath.miscs.build()} activeClassName="active" partiallyActive>
              {`MISC. (${miscData?.length})`}
            </StyledLink>
          </li>
        </UL>
      </nav>
    </Container>
  )
}
