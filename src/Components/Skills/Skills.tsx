import React from 'react'
import "./skills.css"
import FrontEnd from './FrontEnd';
import Backend from './Backend';

const Skills = () => {
  return (
  <section className="skills section" id='skills' style={{marginTop:"-90px"}}>
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My technical level</span>
    <div className="skills__container container grid">
     <FrontEnd/>
     <Backend/>
    </div>
  </section>
  )
}

export default Skills
