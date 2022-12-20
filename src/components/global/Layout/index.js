import * as React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "../../../../css/main.css"

const Layout = ({ children }) => {

  return (
    <div className='layout'>
      <header>
        <nav className='navbar'>
          <div className="container">
            <Link className='home-btn' to="/">CL</Link>
            <ul className='menu'>
              <AnchorLink className='menu-item' to="/#projects">
                <li>PROJETS</li>
              </AnchorLink>
              <AnchorLink className='menu-item' to="/#about">
                <li>A PROPOS</li>
              </AnchorLink>
              <AnchorLink className='menu-item' to="/#contact">
                <li>CONTACT</li>
              </AnchorLink>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
