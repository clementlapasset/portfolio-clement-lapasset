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
            <h2>PARCOURS</h2>
          </div>
          <div className="subsection-text">
            <ul>
              <li>2017 : DIPLÔMÉ DE L'EDHEC BUSINESS SCHOOL</li>
              <li>2017-2018 : CONSULTANT À SOPRA STERIA CONSULTING</li>
              <li>2018-2021 : SENIOR CONSULTANT À DELOITTE CONSEIL</li>
              <li>2022 : DÉVELOPPEUR WEB</li>
            </ul>
          </div>
        </div>
        <div className="subsection">
          <div className="subsection-title">
            <h2>MÉTHODE</h2>
          </div>
          <div className="subsection-text">
            <ul>
              <li>ÉCOUTE ACTIVE DES BESOINS CLIENT</li>
              <li>COMMUNICATION TRANSPARENTE ET RÉGULIÈRE</li>
              <li>OBJECTIF DE PERFORMANCE DES PROJETS LIVRÉS</li>
              <li>VEILLE DES MEILLEURES PRATIQUES & TECHNOLOGIES</li>
            </ul>
          </div>
        </div>
        <div className="subsection">
          <div className="subsection-title">
            <h2>APTITUDES</h2>
          </div>
          <div className="subsection-text">
            <ul>
              <li>LANGAGES : REACTJS, EXPRESSJS, PHP, SASS, STYLED COMPONENTS</li>
              <li>ATOUTS : RELATION CLIENT, RIGUEUR, CRÉATIVITÉ</li>
              <li>LANGUES : FRANÇAIS, ANGLAIS, ESPAGNOL, BOSNIEN-CROATE-SERBE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
