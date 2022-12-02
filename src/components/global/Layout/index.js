import * as React from 'react'
import { Link } from 'gatsby'
import "../../../../css/main.css"

const Layout = ({ children }) => {

  return (
    <div className='layout'>
      <nav className='navbar'>
        <div className="container">
          <Link className='logo' to="/"><header>CL</header></Link>
          <ul className='menu'>
            <Link to="/">
              <li>
                PROJETS
              </li>
            </Link>
            <Link to="/">
              <li>
                À PROPOS
              </li>
            </Link>
            <Link to="/">
              <li >
                CONTACT
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
