import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="À PROPOS">
      <p>À PROPOS</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <Seo title="À PROPOS" />
