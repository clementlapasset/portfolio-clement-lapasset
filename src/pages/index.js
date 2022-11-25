import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="HOMEPAGE">
      <p>
        DÉVELOPPEUR WEB REACT
        BASÉ À MARSEILLE
        DISPONIBLE EN FREELANCE
      </p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="HOMEPAGE" />
