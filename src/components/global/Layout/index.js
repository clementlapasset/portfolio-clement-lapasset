import * as React from 'react'
import { Link } from 'gatsby'
import "../../../../css/main.css"

const Layout = ({ children }) => {

  return (
    <div className='layout'>
      <header>
        <nav className='navbar'>
          <div className="container">
            <Link className='home-btn' to="/">CL</Link>
            <ul className='menu'>
              <Link className='menu-item' to="/">
                <li>PROJETS</li>
              </Link>
              <Link className='menu-item' to="/">
                <li>À PROPOS</li>
              </Link>
              <Link className='menu-item' to="/">
                <li>CONTACT</li>
              </Link>
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
