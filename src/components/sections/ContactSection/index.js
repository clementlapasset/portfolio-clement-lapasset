import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import "../../../../css/main.css"

const ContactSection = () => {
  return (
    <div className='contact-section g-section'>
      <h1 className='g-title'>CONTACT</h1>
      <div className="email">
        clement.lapasset@gmail.com
      </div>
      <footer>
        <div>Design & développement par Clément Lapasset</div>
        <Link to="#">
          <StaticImage className='footer-logo'
            src="../../../images/malt-logo.png"
            alt="Mon profil Malt"
          />
        </Link>
        <Link to="#">
          <StaticImage className='footer-logo'
            src="../../../images/linkedin-logo.png"
            alt="Mon profil LinkedIn"
          />
        </Link>
        <Link to="#">
          <StaticImage className='footer-logo'
            src="../../../images/soundcloud-logo.png"
            alt="Ecoutez ma musique sur SoundCloud"
          />
        </Link>
        <div>© 2022</div>
      </footer>
    </div>
  )
}

export default ContactSection
