import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import { PostType } from '../constants/enums'
import { PageTitle } from '../design/components/pagetitle'
import { Post } from '../design/components/post'
import Layout from '../design/layout/layout'
import { useMarkdownData } from '../hooks/useMarkdownData'
import { PagePath } from '../page-paths'
import SEO from '../seo'

const MiscsPage = (props: PageProps) => {
  const micsData = useMarkdownData(PostType.Miscs)

  return (
    <Layout>
      <SEO title={PagePath.miscs.title()} />
      <PageTitle>📚 Miscellaneous Articles</PageTitle>
      {micsData?.map(misc => (
        <Link key={misc.id} style={{ textDecoration: 'none' }} to={PagePath.misc.build(misc.fields.filePath)}>
          <Post title={misc.frontmatter.title} dateTime={misc.frontmatter.dateTime} tags={misc.frontmatter.tags} />
        </Link>
      ))}
    </Layout>
  )
}

export default MiscsPage
