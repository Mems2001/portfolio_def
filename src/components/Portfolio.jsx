import React from 'react'

import '../styles/Portfolio.css'

import ProjectCard from './ProjectCard'

const Portfolio = ({theme , language, iconColor}) => {

  const p = language[4].content.projects

  return (
    <section className='hidden' id='portfolio'>
      <h2 className='section_title'>{language[4].title}</h2>

      <div className='portfolio_container'>
        {p?.map(
          element => <ProjectCard key={element.name} project={element} language={language} theme={theme} iconColor={iconColor}/>
        )}
      </div>
    </section>
  )
}

export default Portfolio