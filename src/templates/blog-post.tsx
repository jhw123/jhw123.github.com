import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../design/layout/layout'
import SEO from '../seo'
import { Time } from '../design/components/time'
import styled from '@emotion/styled'
import { Tag } from '../design/components/tag'
import { Typeface, Typefaces } from '../design/foundation/typefaces'
import { PagePath } from '../page-paths'
import { HoverColor, HoverColors, TextColor, TextColors } from '../design/foundation/semantic-colors'
import isNil from 'lodash/isNil'
import { useMarkdownData } from '../hooks/useMarkdownData'
import { PostType } from '../constants/enums'
import { UL } from '../design/components/list'

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        dateTime: string
        image?: string
        tags?: string
        keywords?: string
      }
      fields: {
        filePath: string
      }
      id: string
    }
  }
}

const H1 = styled.h1`
  ${Typefaces[Typeface.Bold32]};
`

const HEADER = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`

const NAV = styled.nav`
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
`

export default function BlogPost({ data }: Props) {
  const post = data.markdownRemark
  const frontMatter = post.frontmatter
  const type = (() => {
    switch (true) {
      case post.fields.filePath.includes('miscs'):
        return PostType.Miscs
      case post.fields.filePath.includes('articles'):
        return PostType.Articles
      default:
        return ''
    }
  })()
  const markdownData = useMarkdownData(type)

  const [prev, next] = (() => {
    const curIdx = markdownData?.findIndex(misc => misc.id === post.id)
    if (isNil(curIdx)) {
      return [undefined, undefined]
    } else {
      return [markdownData?.[curIdx + 1], markdownData?.[curIdx - 1]]
    }
  })()

  const pagePath = (type => {
    if (type === PostType.Miscs) {
      return PagePath.misc
    } else if (type === PostType.Articles) {
      return PagePath.article
    } else {
      return PagePath.root
    }
  })(type)

  return (
    <Layout>
      <SEO title={frontMatter.title} keywords={frontMatter.keywords?.split(', ')} />
      <article>
        <HEADER>
          <H1>{frontMatter.title}</H1>
          <Time dateTime={frontMatter.dateTime} format={'Date'} />
          <br />
          {frontMatter.tags?.split(', ').map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </HEADER>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <NAV>
          <UL>
            {prev && (
              <li>
                <Navigator
                  to={pagePath.build(prev.fields.filePath)}
                >{`Prev article: ${prev.frontmatter.title}`}</Navigator>
              </li>
            )}
            {next && (
              <li>
                <Navigator
                  to={pagePath.build(next.fields.filePath)}
                >{`Next article: ${next.frontmatter.title}`}</Navigator>
              </li>
            )}
          </UL>
        </NAV>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($filePath: String!) {
    markdownRemark(fields: { filePath: { eq: $filePath } }) {
      html
      frontmatter {
        title
        dateTime
        image
        tags
        keywords
      }
      fields {
        filePath
      }
      id
    }
  }
`
