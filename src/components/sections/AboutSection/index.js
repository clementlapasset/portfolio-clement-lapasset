import React from 'react'
import "../../../../css/main.css"

const AboutSection = () => {
  return (
    <div className='about-section g-section' id='about'>
      <h1 className='g-title'>À PROPOS</h1>
      <div className="container">
        <div className="subsection">
          <div className="subsection-title">
            <p>*</p>
            <h2>PARCOURS</h2>
          </div>
          <div className="subsection-text">
            DIPLÔMÉ DE L’EDHEC BUSINESS SCHOOL EN 2017, J'AI TRAVAILLÉ DANS LE SECTEUR DU CONSEIL PENDANT 4 ANS, D'ABORD À SOPRA STERIA CONSULTING PUIS À DELOITTE CONSEIL, JUSQU'À L'OBTENTION DU GRADE DE SENIOR CONSULTANT. <br />
            PASSIONNÉ PAR LE CODE DEPUIS MES ÉTUDES, JE SUIS DEVENU DÉVELOPPEUR EN 2022 AFIN D'ACCOMPLIR MA VOLONTÉ D'INDÉPENDANCE ET DE CRÉATIVITÉ.
          </div>
        </div>
        <div className="subsection">
          <div className="subsection-title">
            <p>*</p>
            <h2>MÉTHODE</h2>
          </div>
          <div className="subsection-text">
            FORT DE CE PARCOURS VARIÉ, J'ACCOMPAGNE MES CLIENTS EN M'APPUYANT SUR UNE ÉCOUTE ACTIVE DE LEURS BESOINS, UNE COMMUNICATION TRANSPARENTE ET RÉGULIÈRE, ET ENFIN UN TRAVAIL RIGOUREUX AFIN DE LIVRER DES SITES FONCTIONNELS ET PERFORMANTS. <br />
            PRÊTANT UNE ATTENTION CONSTANTE À LA QUALITÉ, JE M'APPLIQUE À PRODUIRE UN CODE STRUCTURÉ ET LISIBLE, CE QUI FACILITE SA MAINTENABILITÉ ET SA RÉAPPROPRIATION.
          </div>
        </div>
        <div className="subsection">
          <div className="subsection-title">
            <p>*</p>
            <h2>APTITUDES</h2>
          </div>
          <div className="subsection-text">
            LANGAGES : REACTJS, EXPRESSJS, PHP, SASS, STYLED COMPONENTS <br />
            ATOUTS : RELATION CLIENT, RIGUEUR, CRÉATIVITÉ
            LANGUES : FRANÇAIS, ANGLAIS, ESPAGNOL, BOSNIEN-CROATE-SERBE
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
