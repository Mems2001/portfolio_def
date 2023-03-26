import React, { useEffect } from 'react'

import '../styles/Skills.css'
import SkillCard from './SkillCard'

const SkillSet = ({language}) => {

  const skills = language[3].content.web.all
  console.log(skills)

  // ANIMATIONS

  useEffect (
    () => {
      const spanishBar = document.querySelector('.bar_comp')
      const englishBar = document.querySelector('.bar_comp_2')

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('bar_comp')) {
              entry.target.classList.add('spanish')
            }
            if (entry.target.classList.contains('bar_comp_2')) {
              entry.target.classList.add('english')
            }
          } else {
            if (entry.target.classList.contains('bar_comp')) {
              entry.target.classList.remove('spanish')
            }
            if (entry.target.classList.contains('bar_comp_2')) {
              entry.target.classList.remove('english')
            }
          }
        })
      })

      observer.observe(spanishBar)
      observer.observe(englishBar)

    } , []
  )

  return (
    <section className='hidden' id='skillSet'>
      <h2 className='section_title'>{language[3].title}</h2>

      <div className='skills_container'>
        <h3 className='skills_title'>{language[3].content.web.title}</h3>

        <div className='skills_container_3'>

        {skills?.map(skill => 
          <SkillCard skill={skill} />
        )}

        </div>  
      </div>

      <div className='skills_container'>
        <h3 className='skills_title'>{language[3].content.lang.title}</h3>

        <div className='skills_container_2'>
              <ul>
                <li>
                  <div className='language_container'>
                    <span className='lang_titles'><b>{language[3].content.lang.content.spanish[0]}:</b></span>
                    <span className='lang_titles'>{language[3].content.lang.content.spanish[1]}</span>
                    <span className='language_bar b_spanish'>
                      <div data-progress='100' className='bar_comp'></div>
                    </span>
                  </div>
                </li>
                <br/>
                <li>
                  <div className='language_container'>
                    <span className='lang_titles'><b>{language[3].content.lang.content.english[0]}:</b></span>
                    <span className='lang_titles'>{language[3].content.lang.content.english[1]}</span>
                    <span className='language_bar'>
                      <div data-progress='75' className='bar_comp_2'></div>
                    </span>
                  </div>
                </li>
              </ul>
        </div>
      </div>
    </section>
  )
}

export default SkillSet