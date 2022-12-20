import React from 'react'
import "../../../../css/main.css"

const AboutSection = () => {
  return (
    <div className='about-section g-section' id='about'>
      <div className='g-title' text="A PROPOS">
        A PROPOS<div className="second-layer" text="A PROPOS">A PROPOS</div>
      </div>
      <div className="container">
        <div className="subsection">
          <div className="subsection-title">
            <p>*</p>
            <h2>PARCOURS</h2>
          </div>
          <div className="subsection-text">
            DIPLOME DE L’EDHEC BUSINESS SCHOOL EN 2017, J'AI TRAVAILLE DANS LE SECTEUR DU CONSEIL PENDANT 4 ANS, D'ABORD A SOPRA STERIA CONSULTING PUIS A DELOITTE CONSEIL, JUSQU'A L'OBTENTION DU GRADE DE SENIOR CONSULTANT. <br />
            PASSIONNE PAR LE CODE DEPUIS MES ETUDES, JE SUIS DEVENU DEVELOPPEUR EN 2022 AFIN D'ACCOMPLIR MA VOLONTE D'INDEPENDANCE ET DE CREATIVITE.
          </div>
        </div>
        <div className="subsection">
          <div className="subsection-title">
            <p>*</p>
            <h2>METHODE</h2>
          </div>
          <div className="subsection-text">
            FORT DE CE PARCOURS VARIE, J'ACCOMPAGNE MES CLIENTS EN M'APPUYANT SUR UNE ECOUTE ACTIVE DE LEURS BESOINS, UNE COMMUNICATION TRANSPARENTE ET REGULIERE, ET ENFIN UN TRAVAIL RIGOUREUX AFIN DE LIVRER DES SITES FONCTIONNELS ET PERFORMANTS. <br />
            PRETANT UNE ATTENTION CONSTANTE A LA QUALITE, JE M'APPLIQUE A PRODUIRE UN CODE STRUCTURE ET LISIBLE, CE QUI FACILITE SA MAINTENABILITE ET SA REAPPROPRIATION.
          </div>
        </div>
        <div className="subsection">
          <div className="subsection-title">
            <p>*</p>
            <h2>APTITUDES</h2>
          </div>
          <div className="subsection-text">
            LANGAGES : REACTJS, EXPRESSJS, PHP, SASS, STYLED COMPONENTS <br />
            ATOUTS : RELATION CLIENT, RIGUEUR, CREATIVITE
            LANGUES : FRANCAIS, ANGLAIS, ESPAGNOL, BOSNIEN-CROATE-SERBE
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
