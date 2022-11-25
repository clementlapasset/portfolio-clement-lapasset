import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

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
    <div className={container}>
      <nav>
        <Link to="/" className={navLinkText}><header className={siteTitle}>{data.site.siteMetadata.title}</header></Link>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/projects" className={navLinkText}>PROJETS</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>À PROPOS</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>CONTACT</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
