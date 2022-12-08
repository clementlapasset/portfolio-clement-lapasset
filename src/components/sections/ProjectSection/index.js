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
      <h1 className='g-title'>PROJETS</h1>
      <ul>
        {data.allMdx.nodes.map(node => (
          <li key={node.frontmatter.title}>
            <div className="project-container" style={{ backgroundColor: node.frontmatter.bg_color, color: node.frontmatter.text_color }}>
              <div className="project-info">
                <h1 className='project-number'>{node.frontmatter.number}</h1>
                <div className="col">
                  <h2 className='project-title'>{node.frontmatter.title}</h2>
                  <div className="project-description">
                    <p> <span>CLIENT</span> - {node.frontmatter.client}</p>
                    <p> <span>SECTEUR</span> - {node.frontmatter.domain}</p>
                    <p> <span>RÔLE</span> - {node.frontmatter.role}</p>
                    <p> <span>CATÉGORIE</span>  {node.frontmatter.type}</p>
                  </div>
                </div>
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
