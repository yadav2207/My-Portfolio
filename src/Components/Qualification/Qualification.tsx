import React, { useState } from 'react'
import "./Qualification.css"

const Qualification = () => {
  const [toggleState,setToggleState] = useState(1)

  const toggleTab =(index:any)=>{
    setToggleState(index)
  }
  return (
   <section className="qualification section" id='portfolio'>
    <h2 className='section__title'>Qualification</h2>
    <span className="section__subtitle">My Personel Journey</span>
    <div className="qualification__container container">
      <div className="qualification__tabs">
        <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
        <i className='uil uil-graduation-cap qualification__icon'>Education</i>
        </div>
        <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}onClick={()=> toggleTab(2)}>
        <i className='uil uil-briefcase-alt qualification__icon'>Experience</i>
        </div>

      </div>

      <div className="qualification__section">
        <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Graduation</h3>
              <span className="qualification__subtitle">Mumbai University</span>
              <div className="qualification__calendar">
                <i className='uil uil-calendar-alt'>2021</i>
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <div className="qualification__line"></div>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">  Web Design</h3>
              <span className="qualification__subtitle">CI</span>
              <div className="qualification__calendar">
                <i className='uil uil-calendar-alt'>2023</i>
              </div>
            </div>
          
          </div>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">HSC </h3>
              <span className="qualification__subtitle">Maharashtra Board</span>
              <div className="qualification__calendar">
                <i className='uil uil-calendar-alt'>2018</i>
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <div className="qualification__line"></div>
            </div>
            <div>
              <h3 className="qualification__title">Web Developer</h3>
              <span className="qualification__subtitle">CI</span>
              <div className="qualification__calendar">
                <i className='uil uil-calendar-alt'>2023</i>
              </div>
            </div>
          
          </div>
        
        </div>
        <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Product Design</h3>
              <span className="qualification__subtitle">CI</span>
              <div className="qualification__calendar">
                <i className='uil uil-calendar-alt'>2023</i>
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <div className="qualification__line"></div>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">  Web Developer</h3>
              <span className="qualification__subtitle">CI</span>
              <div className="qualification__calendar">
                <i className='uil uil-calendar-alt'>2023</i>
              </div>
            </div>
          
          </div>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">User Interface Application </h3>
              <span className="qualification__subtitle">CI</span>
              <div className="qualification__calendar">
                <i className='uil uil-calendar-alt'>2013</i>
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <div className="qualification__line"></div>
            </div>
            <div>
              <h3 className="qualification__title">website building</h3>
              <span className="qualification__subtitle">CI</span>
              <div className="qualification__calendar">
                <i className='uil uil-calendar-alt'>2023</i>
              </div>
            </div>
           
          </div>
        
        </div>
      </div>
    </div>
   </section>
  )
}

export default Qualification
