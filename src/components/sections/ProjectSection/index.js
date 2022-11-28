import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectSection = () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx {
        nodes {
          id
          frontmatter {
            client
            domain
            role
            title
            type
            slug
            hero_img {
              childImageSharp {
                gatsbyImageData
              }
            }
            hero_img_alt
          }
        }
    }
  }
`)

  return (
    <ul>
      {data.allMdx.nodes.map(node => (
        <li key={node.frontmatter.title}>
          <GatsbyImage
            image={getImage(node.frontmatter.hero_img)}
            alt={node.frontmatter.hero_img_alt}
          />
          <Link to={`/project/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
          <p>CLIENT : {node.frontmatter.client}</p>
          <p>SECTEUR : {node.frontmatter.domain}</p>
          <p>RÔLE : {node.frontmatter.role}</p>
          <p>CATÉGORIE : {node.frontmatter.type}</p>
        </li>
      ))}
    </ul>
  )
}

export default ProjectSection
