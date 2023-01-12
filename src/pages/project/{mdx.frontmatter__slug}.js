import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/global/Layout'
import Seo from '../../components/global/Seo'

import "../../../css/main.css"


const ProjectPage = ({ data, children }) => {
  const mobileImg = getImage(data.mdx.frontmatter.mobile_img)
  const desktopImg = getImage(data.mdx.frontmatter.desktop_img)

  const url = data.mdx.frontmatter.url
  return (

    <Layout pageTitle={data.mdx.frontmatter.number}>
      <div className="project-page" style={{ backgroundColor: data.mdx.frontmatter.bg_color }}>
        <div className="grid-container">
          <div className="mobile-img">
            <GatsbyImage
              className='project-img'
              image={mobileImg}
              alt={data.mdx.frontmatter.mobile_img_alt}
            />
          </div>
          <h2 className="project-title">{data.mdx.frontmatter.title}</h2>
          <div className="project-description">
            {children}
            <div className="row">
              {url ? (
                <Link className='project-link' to={data.mdx.frontmatter.url} target="_blank">Visiter le site</Link>
              ) : (
                null
              )}
              <Link className='next-project-link' to='/'>Projet suivant</Link>
            </div>
          </div>
          <div className="desktop-img">
            <GatsbyImage
              className='project-img'
              image={desktopImg}
              alt={data.mdx.frontmatter.desktop_img_alt}
            />
          </div>
        </div>
      </div>
    </Layout >
  )
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.client} />

export const query = graphql`
  query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      client
      title
      url
      number
      bg_color
      mobile_img {
        childImageSharp {
          gatsbyImageData
        }
      }
      mobile_img_alt
      desktop_img {
        childImageSharp {
          gatsbyImageData
        }
      }
      desktop_img_alt
    }
  }
}
`

export default ProjectPage
