import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/global/Layout'
import Seo from '../../components/global/Seo'

import "../../../css/main.css"


const ProjectPage = ({ data, children }) => {
  const mobileImg = getImage(data.mdx.frontmatter.mobile_img)
  const desktopImg1 = getImage(data.mdx.frontmatter.desktop_img_1)
  const desktopImg2 = getImage(data.mdx.frontmatter.desktop_img_2)

  const url = data.mdx.frontmatter.url
  return (

    <Layout pageTitle={data.mdx.frontmatter.number}>
      <div className="project-page" style={{
        backgroundColor: data.mdx.frontmatter.bg_color
      }}>
        <div className="left-container">
          <GatsbyImage
            className='mobile-img'
            image={mobileImg}
            alt={data.mdx.frontmatter.mobile_img_alt}
          />
          <div className="project-text">
            <h2 className='project-title'>{data.mdx.frontmatter.title}</h2>
            <div className="project-description">{children}</div>
            <div className="row">
              {url ? (
                <Link className='project-link' to={data.mdx.frontmatter.url} target="_blank">Visiter le site</Link>
              ) : (
                <div>Site non-accessible</div>
              )}
              <Link className='next-project-link' to='/'>Projet suivant</Link>
            </div>
          </div>
        </div>
        <div className="right-container">
          <GatsbyImage
            className='desktop-img'
            image={desktopImg1}
            alt={data.mdx.frontmatter.desktop_img_1_alt}
          />
          <GatsbyImage
            className='desktop-img'
            image={desktopImg2}
            alt={data.mdx.frontmatter.desktop_img_2_alt}
          />
        </div>
      </div>
    </Layout >
  )
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.client} />

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id } ) {
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
        desktop_img_1 {
          childImageSharp {
            gatsbyImageData
          }
        }
        desktop_img_1_alt
        desktop_img_2 {
          childImageSharp {
            gatsbyImageData
          }
        }
        desktop_img_2_alt
      }
    }
  }
`

export default ProjectPage
