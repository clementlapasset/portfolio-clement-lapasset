import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import "../../../../css/main.css"

const ContactSection = () => {
  return (
    <div className='contact-section g-section' id='contact'>
      <div className='g-title' text="CONTACT">
        CONTACT<div className="second-layer" text="CONTACT">CONTACT</div>
      </div>
      <div className="email">clement.lapasset@gmail.com</div>
      <footer>
        <div className='credits'>Design & développement par Clément Lapasset</div>
        <Link to="https://www.malt.fr/profile/clementlapasset" target="_blank">
          <StaticImage className='footer-logo'
            src="../../../images/malt-logo.png"
            alt="Malt"
          />
        </Link>
        <Link to="https://www.linkedin.com/in/cl%C3%A9ment-lapasset-646b49b3/" target="_blank">
          <StaticImage className='footer-logo'
            src="../../../images/linkedin-logo.png"
            alt="LinkedIn"
          />
        </Link>
        <Link to="https://soundcloud.com/user-557801017" target="_blank">
          <StaticImage className='footer-logo'
            src="../../../images/soundcloud-logo.png"
            alt="SoundCloud"
          />
        </Link>
        <div className='copyright'>© 2023</div>
      </footer>
    </div>
  )
}

export default ContactSection
