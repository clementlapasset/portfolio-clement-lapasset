import * as React from "react"

import Layout from '../components/global/Layout'
import Seo from '../components/global/Seo'

import ProjectSection from "../components/sections/ProjectSection"
import AboutSection from "../components/sections/AboutSection"
import ContactSection from "../components/sections/ContactSection"

import "../../css/main.css"




const IndexPage = () => {
  return (
    <Layout>
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Portfolio" />
