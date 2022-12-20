import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../../../../css/main.css"

const ProjectSection = () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx(sort: {frontmatter: {number: ASC}}) {
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
    <div className='project-section g-section' id='projects'>
      <div className="homepage-footer">
        <div className='g-title' text="PROJETS">
          PROJETS<div className="second-layer" text="PROJETS">PROJETS</div>
        </div>
        <div className="white-arrow-down">
          <StaticImage
            src='../../../images/white-arrow-down.svg'
            alt='white arrow down'
          />
        </div>
      </div>
      <ul>
        {data.allMdx.nodes.map(node => (
          <li key={node.frontmatter.title}>
            <div className="project-container" style={{ backgroundColor: node.frontmatter.bg_color, color: node.frontmatter.text_color }}>
              <div className="project-info">
                <h1 className='project-number' text={node.frontmatter.number}>{node.frontmatter.number}</h1>
                <div className="col">
                  <h2 className='project-title' text={node.frontmatter.client}>{node.frontmatter.client}</h2>
                  <div className="project-description">
                    <p> <span className='description-category'>CLIENT</span> <span>{node.frontmatter.client}</span> </p>
                    <p> <span className='description-category'>SECTEUR</span> <span>{node.frontmatter.domain}</span> </p>
                    <p> <span className='description-category'>ROLE</span> <span>{node.frontmatter.role}</span> </p>
                    <p> <span className='description-category'>CATEGORIE</span> <span>{node.frontmatter.type}</span> </p>
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
