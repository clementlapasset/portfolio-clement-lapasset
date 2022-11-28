import * as React from "react"

import Layout from '../components/global/Layout'
import Seo from '../components/global/Seo'

import ProjectSection from "../components/sections/ProjectSection"
import AboutSection from "../components/sections/AboutSection"
import ContactSection from "../components/sections/ContactSection"



const IndexPage = () => {
  return (
    <Layout pageTitle="PROJETS">
      <p>DÉVELOPPEUR WEB REACT BASÉ À MARSEILLE DISPONIBLE EN FREELANCE</p>
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Portfolio" />
