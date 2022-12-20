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
        <div className='credits'>Design & developpement par <span>Clement Lapasset</span></div>
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
        <div className='copyright'>© 2022</div>
      </footer>
    </div>
  )
}

export default ContactSection
