import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import { PostType } from '../constants/enums'
import { PageTitle } from '../design/components/pagetitle'
import { Post } from '../design/components/post'
import Layout from '../design/layout/layout'
import { useMarkdownData } from '../hooks/useMarkdownData'
import { PagePath } from '../page-paths'
import SEO from '../seo'

const ArticlesPage = (props: PageProps) => {
  const articlesData = useMarkdownData(PostType.Articles)?.filter(article => article.frontmatter.published)

  return (
    <Layout>
      <SEO title={PagePath.articles.title()} />
      <PageTitle>💻 Dev Articles</PageTitle>
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
