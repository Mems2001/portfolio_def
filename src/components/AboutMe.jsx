import React from 'react'

import '../styles/AboutMe.css'

const AboutMe = ({language}) => {
  return (
    <section className='hidden' id='aboutMe'>
      <div className='aboutMe'>
        <h2>{language[1].title}</h2>

        <p>{language[1].content}</p>
      </div>
    </section>
  )
}

export default AboutMe