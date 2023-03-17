import React, { useEffect } from 'react'

import '../styles/Skills.css'

const SkillSet = ({language}) => {

  const css = language[3].content.web.all.css
  const javaScript = language[3].content.web.all.javaScript
  const react = language[3].content.web.all.react
  const node = language[3].content.web.all.node

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
            <div className='logo_container_2 hidden_2'>
              <img className='logo_image' src='https://cdn-icons-png.flaticon.com/512/5968/5968496.png'/>
            </div>
          {/* <div className='logo_container hidden_2'>
          </div> */}

          <div className='logo_container hidden_2'>
            <div className='logo_container_2'>
              <img className='logo_image' src='https://cdn-icons-png.flaticon.com/512/29/29600.png'/>
            </div>

            <div className='skills_list'>
              <span className='particular_skills'>{css[0]}</span>
              <span className='particular_skills'>{css[1]}</span>
              <span className='particular_skills'>{css[2]}</span>
              <span className='particular_skills'>{css[3]}</span>
            </div>
          </div>

          <div className='logo_container hidden_2'>
            <div className='logo_container_2'>
              <img className='logo_image' src='https://cdn-icons-png.flaticon.com/512/1/1492.png'/> 
            </div>

            <div className='skills_list'>
              <span className='particular_skills'>{javaScript[0]}</span>
              <span className='particular_skills'>{javaScript[1]}</span>
              <span className='particular_skills'>{javaScript[2]}</span>
            </div>
          </div>

          <div className='logo_container hidden_2'>
            <div className='logo_container_2'>
             <img className='logo_image' src='logos/reactLogo.png'/>
            </div>

            <div className='skills_list'>
              <span className='particular_skills'>{react[0]}</span>
              <span className='particular_skills'>{react[1]}</span>
              <span className='particular_skills'>{react[2]}</span>
              <span className='particular_skills'>{react[3]}</span>
              <span className='particular_skills'>{react[4]}</span>
              <span className='particular_skills'>{react[5]}</span>
              <span className='particular_skills'>{react[6]}</span>
              <span className='particular_skills'>{react[7]}</span>
            </div>
          </div>

          <div className='logo_container hidden_2'>
            <div className='logo_container_2'>
              <img className='logo_image' src='logos/nodejs-logo-144.png'/>
            </div>

            <div className='skills_list'>
              <span className='particular_skills'>{node[0]}</span>
              <span className='particular_skills'>{node[1]}</span>
              <span className='particular_skills'>{node[2]}</span>
              <span className='particular_skills'>{node[3]}</span>
              <span className='particular_skills'>{node[4]}</span>
              <span className='particular_skills'>{node[5]}</span>
              <span className='particular_skills'>{node[6]}</span>
              <span className='particular_skills'>{node[7]}</span>
              <span className='particular_skills'>{node[8]}</span>
              <span className='particular_skills'>{node[9]}</span>
              <span className='particular_skills'>{node[10]}</span>
              <span className='particular_skills'>{node[11]}</span>
            </div>
          </div>

            <div className='logo_container_2 hidden_2'>
              <img className='logo_image' src='logos/github-logo-144.png'/>
            </div>
          {/* <div className='logo_container hidden_2'>
          </div> */}
        </div>
      </div>

      <div className='skills_container'>
        <h3 className='skills_title'>{language[3].content.lang.title}</h3>

        <div className='skills_container_2'>
              <ul>
                <li>
                  <div className='language_container'>
                    <span className='lang_titles'><b>{language[3].content.lang.content.spanish[0]} :</b></span>
                    <span className='lang_titles'>{language[3].content.lang.content.spanish[1]}</span>
                    <span className='language_bar b_spanish'>
                      <div data-progress='100' className='bar_comp'></div>
                    </span>
                  </div>
                </li>
                <br/>
                <li>
                  <div className='language_container'>
                    <span className='lang_titles'><b>{language[3].content.lang.content.english[0]} :</b></span>
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