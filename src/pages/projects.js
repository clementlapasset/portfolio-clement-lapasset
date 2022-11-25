import * as React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout.js'
import Seo from "../components/seo.js"


const Projects = ({ data }) => {
  return (
    <main>
      <Layout pageTitle={"PROJETS"}>
        <ul>
          {
            data.allMdx.nodes.map(node => (
              <li key={node.frontmatter.title}>
                <Link to={`/project/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
                <p>CLIENT : {node.frontmatter.client}</p>
                <p>SECTEUR : {node.frontmatter.domain}</p>
                <p>RÔLE : {node.frontmatter.role}</p>
                <p>CATÉGORIE : {node.frontmatter.type}</p>
              </li>
            ))
          }
        </ul>
      </Layout>

    </main>
  )
}

export const Head = () => <Seo title="PROJETS" />

export const query = graphql`
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
          }
        }
    }
  }
`

export default Projects

