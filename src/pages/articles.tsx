import { Link, PageProps } from 'gatsby'

import * as React from 'react'
import { PagePath } from '../page-paths'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { Post } from '../components/post'
import { useMarkdownData } from '../hooks/useMarkdownData'
import { PostType } from '../constants/enums'

const ArticlesPage = (props: PageProps) => {
  const articlesData = useMarkdownData(PostType.Articles)

  return (
    <Layout>
      <SEO title={PagePath.articles.title()} />
      {articlesData?.map(article => (
        <Link key={article.id} style={{ textDecoration: 'none' }} to={PagePath.article.build(article.fields.filePath)}>
          <Post
            title={article.frontmatter.title}
            dateTime={article.frontmatter.dateTime}
            tags={article.frontmatter.tags}
          />
        </Link>
      ))}
    </Layout>
  )
}

export default ArticlesPage
