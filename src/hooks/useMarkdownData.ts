import { graphql, useStaticQuery } from 'gatsby'
import produce from 'immer'
import { PostType } from '../constants/enums'

interface Data {
  frontmatter: {
    title: string
    dateTime: string
    tags: string[]
    keywords: string[]
  }
  fields: {
    slug: string
    filePath: string
  }
  id: string
}

export function useMarkdownData(path: PostType | ''): Data[] | undefined {
  const data = useStaticQuery(graphql`
      query MarkdownDataQuery {
          allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___dateTime] }
              filter: { fileAbsolutePath: { regex: "/.*/.*\\.md$/" } }
          ) {
              edges {
                  node {
                      frontmatter {
                          title
                          dateTime
                          tags
                          keywords
                      }
                      fields {
                          slug
                          filePath
                      }
                      id
                  }
              }
          }
      }`)

  return data.allMarkdownRemark.edges
    .filter((edge: any) => edge.node.fields.filePath.includes(path))
    .map((edge: { node: any }) =>
      produce(edge.node, (node: any) => {
        node.frontmatter.tags = node.frontmatter.tags.split(', ')
        node.frontmatter.keywords = node.frontmatter.keywords.split(', ')
      })
    )
}
