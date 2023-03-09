import React from 'react'

import '../styles/Portfolio.css'
import ProjectCard from './ProjectCard'

const Portfolio = ({language}) => {

  const p = language[4].content.projects

  return (
    <section className='hidden' id='portfolio'>
      <h2 className='section_title'>{language[4].title}</h2>

      <div className='portfolio_container'>
        <ProjectCard project={p[0]} language={language} />
        <ProjectCard project={p[1]} language={language} />
        <ProjectCard project={p[2]} language={language} />
        <ProjectCard project={p[3]} language={language} />
      </div>
    </section>
  )
}

export default Portfolio