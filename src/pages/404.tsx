import styled from '@emotion/styled'
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { PagePath } from '../page-paths'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Center>
      <h2>404: Not Found</h2>
      <p>You just hit a route that doesn&#39;t exist.</p>
      <Link to={PagePath.root.build()}>🛠️ Go back to main</Link>
    </Center>
  </Layout>
)

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default NotFoundPage
