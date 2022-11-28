import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <nav>
        <Link to="/"><header >{data.site.siteMetadata.title}</header></Link>
        <ul>
          <li>
            PROJETS
          </li>
          <li>
            À PROPOS
          </li>
          <li >
            CONTACT
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
        <footer>© 2022</footer>
      </main>
    </div>
  )
}

export default Layout
