import { graphql, useStaticQuery } from 'gatsby'

interface SiteMetadata {
  title: string
  description: string
  author: string
  mainImg: string
  contacts: {
    email: string
    facebook: string
    linkedin: string
    github: string
  }
  keywords: string[]
}

export function useSiteMetadata(): SiteMetadata | undefined {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          author
          mainImg
          contacts {
            email
            facebook
            linkedin
            github
          }
          keywords
        }
      }
    }
  `)

  return data.site.siteMetadata
}
