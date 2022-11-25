import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const Contactpage = () => {
  return (
    <Layout pageTitle="À PROPOS">
      <p>CONTACT</p>
    </Layout>
  )
}

export default Contactpage

export const Head = () => <Seo title="À PROPOS" />
