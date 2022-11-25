import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ProjectPage = ({ data, children }) => {
  const heroImg = getImage(data.mdx.frontmatter.hero_img)
  const desktopImg1 = getImage(data.mdx.frontmatter.desktop_img_1)
  return (
    < main >
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <GatsbyImage
          image={heroImg}
          alt={data.mdx.frontmatter.hero_img_alt}
        />
        {children}
        <p>{data.mdx.frontmatter.number}</p>
        <GatsbyImage
          image={desktopImg1}
          alt={data.mdx.frontmatter.desktop_img_1_alt}
        />
      </Layout>
    </main >
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
        hero_img {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_img_alt
        desktop_img_1 {
          childImageSharp {
            gatsbyImageData
          }
        }
        desktop_img_1_alt
      }
    }
  }
`

export default ProjectPage
