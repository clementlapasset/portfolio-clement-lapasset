import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="HOMEPAGE">
      <p>HOMEPAGE</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="HOMEPAGE" />
