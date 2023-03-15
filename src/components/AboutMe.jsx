import React from 'react'

import '../styles/AboutMe.css'

const AboutMe = ({language}) => {
  return (
    <section className='hidden' id='aboutMe'>
      <div className='presentation hidden_2' id='presentation'>
        <div></div>
        <div className='photo_container'>
          <div className='personal_photo'/> 
        </div>
        <div></div>
      </div>
      <div className='aboutMe hidden_2' id='fewWords'>
        <h2>{language[1].title}</h2>

        <p>{language[1].content}</p>
      </div>
    </section>
  )
}

export default AboutMe