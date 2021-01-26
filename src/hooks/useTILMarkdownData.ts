import { graphql, useStaticQuery } from 'gatsby'
import produce from 'immer'
import { PostType } from '../constants/enums'

interface Data {
  fields: {
    slug: string
    filePath: string
    year: number
    month: number
    date: number
    dayOfWeek: string
  }
  id: string
  excerpt: string
}

export function useTILMarkdownData(): Data[] | undefined {
  const data = useStaticQuery(graphql`
      query TILMarkdownDataQuery {
          allMarkdownRemark(
              sort: { order: DESC, fields: fileAbsolutePath }
              filter: { fileAbsolutePath: { regex: "/tils/.*\\.md$/" } }
          ) {
              edges {
                  node {
                      fields {
                          slug
                          filePath
                      }
                      id
                      excerpt(truncate: true, pruneLength: 30)
                  }
              }
          }
      }`)

  return data.allMarkdownRemark.edges.map((edge: { node: any }) =>
    produce(edge.node, (node: any) => {
      const [year, month, date] = node.fields.filePath.split('/').slice(-4, -1)
      node.fields.year = year
      node.fields.month = month
      node.fields.date = date
    })
  )
}
