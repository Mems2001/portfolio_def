import React from 'react'

import '../styles/AboutMe.css'

const AboutMe = ({language}) => {
  return (
    <section className='hidden aboutMe_container' id='aboutMe'>
      <div className='aboutMe hidden_2' id='fewWords'>
        <h2>{language[1].title}</h2>

        <p>Hi, <strong>{language[0].content}</strong>, {language[1].content}</p>
      </div>

      <div className='presentation hidden_2' id='presentation'>
        <div></div>
        <div className='photo_container'>
          <div className='personal_photo'/> 
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default AboutMe