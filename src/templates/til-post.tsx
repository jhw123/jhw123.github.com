import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../design/layout/layout'
import SEO from '../seo'
import styled from '@emotion/styled'
import { Typeface, Typefaces } from '../design/foundation/typefaces'
import isNil from 'lodash/isNil'
import { useTILMarkdownData } from '../hooks/useTILMarkdownData'
import { HoverColor, HoverColors, TextColor, TextColors } from '../design/foundation/semantic-colors'
import { PagePath } from '../page-paths'

interface Props {
  data: {
    markdownRemark: {
      html: string
      fields: {
        filePath: string
      }
      id: string
    }
  }
}

const H1 = styled.h1`
  ${Typefaces[Typeface.Bold22]};
  margin-bottom: 1rem;
`

const Nav = styled.nav`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
`

const Navigator = styled(Link)`
  ${TextColors[TextColor.Secondary]};
  ${Typefaces[Typeface.Bold14]};
  ${HoverColors[HoverColor.Basic]};
  text-decoration: none;
  padding: 4px;
  display: block;
`

export default function TILPost({ data }: Props) {
  const post = data.markdownRemark
  const title = (() => {
    const [year, month, date] = post.fields.filePath.split('/').slice(-4, -1)
    return `${year}년 ${month}월 ${date}일 Today I Learned`
  })()

  const markdownData = useTILMarkdownData()

  const [prev, next] = (() => {
    const curIdx = markdownData?.findIndex(misc => misc.id === post.id)
    if (isNil(curIdx)) {
      return [undefined, undefined]
    } else {
      return [markdownData?.[curIdx + 1], markdownData?.[curIdx - 1]]
    }
  })()

  return (
    <Layout>
      <SEO title={title} />
      <article>
        <H1>{title}</H1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Nav>
          {prev && (
            <Navigator to={PagePath.til.build(prev.fields.filePath)}>
              {`이전: ${prev.fields.year}년 ${prev.fields.month}월 ${prev.fields.date}일 - ${prev.excerpt}`}
            </Navigator>
          )}
          {next && (
            <Navigator to={PagePath.til.build(next.fields.filePath)}>
              {`다음: ${next.fields.year}년 ${next.fields.month}월 ${next.fields.date}일 - ${next.excerpt}`}
            </Navigator>
          )}
        </Nav>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($filePath: String!) {
    markdownRemark(fields: { filePath: { eq: $filePath } }) {
      html
      fields {
        filePath
      }
      id
    }
  }
`
