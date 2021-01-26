import { Link, PageProps } from 'gatsby'

import * as React from 'react'
import { PagePath } from '../page-paths'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { Post } from '../components/post'
import { useMarkdownData } from '../hooks/useMarkdownData'
import { PostType } from '../constants/enums'

const MiscsPage = (props: PageProps) => {
  const micsData = useMarkdownData(PostType.Miscs)

  return (
    <Layout>
      <SEO title={PagePath.miscs.title()} />
      {micsData?.map(misc => (
        <Link key={misc.id} style={{ textDecoration: 'none' }} to={PagePath.misc.build(misc.fields.filePath)}>
          <Post title={misc.frontmatter.title} dateTime={misc.frontmatter.dateTime} tags={misc.frontmatter.tags} />
        </Link>
      ))}
    </Layout>
  )
}

export default MiscsPage
