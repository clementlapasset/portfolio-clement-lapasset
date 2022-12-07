import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../../../../css/main.css"

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
            number
            bg_color
            text_color
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
    <div className='project-section g-section'>
      <h1>PROJETS</h1>
      <ul>
        {data.allMdx.nodes.map(node => (
          <li key={node.frontmatter.title}>
            <div className="project-container" style={{ backgroundColor: node.frontmatter.bg_color, color: node.frontmatter.text_color }}>
              <h1 className='project-number'>{node.frontmatter.number}</h1>
              <h2 className='project-title'>{node.frontmatter.title}</h2>
              <div className="project-info">
                <p>CLIENT : {node.frontmatter.client}</p>
                <p>SECTEUR : {node.frontmatter.domain}</p>
                <p>RÔLE : {node.frontmatter.role}</p>
                <p>CATÉGORIE : {node.frontmatter.type}</p>
              </div>
              <Link className='project-link' to={`/project/${node.frontmatter.slug}`}>
                <GatsbyImage className='project-image'
                  image={getImage(node.frontmatter.hero_img)}
                  alt={node.frontmatter.hero_img_alt}
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectSection
