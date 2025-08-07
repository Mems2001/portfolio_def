import { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

import english from '../json/english.json'

const ProjectCard = ({project , language , theme, iconColor}) => {

  const [display, setDisplay] = useState(false)

  const showDetails = () => {
    if (display) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }
  
  useEffect(
    () => {  
      document.querySelectorAll('.hidden_2').forEach(o => {
        o.classList.add('show_2')
        o.classList.remove('hidden_2')
      })

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              setDisplay(false)
            }
          })
        } , {
          threshold: 0.1
        }
      )

      observer.observe(document.querySelector('#portfolio'))

    }, [display]
  )

  const images = project.images
  const [n, setN] = useState(0)

  const nextImage = () => {
    if (n < images.length-1) {
      setN(n+1)
    }
  }
  const prevImage = () => {
    if (n > 0) {
      setN(n-1)
    }
  }

  return (
    <>
        {display? (
          <div
            className='extended_details expand'>
            <div className='extended_images'>
              <button className='prev_btn' onClick={prevImage}>
                <box-icon name='caret-left' size='lg' color={theme==='Dark'?'#951d20':'#a8dadc'}></box-icon>
              </button>
              <img className='extended_image' src={images[n]}/>
              <button className='next_btn' onClick={nextImage}>
              <box-icon name='caret-right' size='lg' color={theme==='Dark'?'#951d20':'#a8dadc'}></box-icon>
              </button>
            </div>
            <div className='specifications'>
              <div className='spec_container'>
                <h4>{language === english? 'Name: ' : 'Nombre: '}</h4>
                <p>{project.name}</p>
              </div>
              <div className='spec_container'>
                <h4>{language === english? 'Tools: ' : 'Herramientas: '}</h4>
                <ul>
                  {project.languages.map((language, index) => 
                    <li key={index}>{language}</li>
                    )}
                </ul>
              </div>
              <div className='spec_container'>
                <h4>{language === english? 'Platforms: ' : 'Plataformas: '}</h4>
                <ul>
                  {project.compatibility.map((element, index) => 
                    <li key={index}>{element}</li>
                  )}
                </ul>
              </div>
            </div>
            <div className='description'>
              <p>{project.description}</p>
            </div>
            <div className='links_container'>
              <div className='link_info'>
                <a href={project.links.gitHub} target={'_blank'}>
                  <img className='link_logo' src={`logos/github-logo-144${theme==='Dark'?'D':'L'}.png`}/>
                </a>
                <span>Front-end</span>
              </div>
              {project.links.other?
                <div className='link_info'>
                  <a href={project.links.other} target={'_black'}>
                    <img className='link_logo' src={`logos/github-logo-144${theme==='Dark'?'D':'L'}.png`}/>
                  </a>
                  <span>Back-end</span>
                </div>
                : ''
              }
              {project.links.netlify ? 
              <div className='link_info'>
                <a href={project.links.netlify} target={'_blank'}>
                  <img className='link_logo' src={`logos/netlify-logo-144${theme==='Dark'?'D':'L'}.png`}/>
                </a> 
                <span>Web</span>
              </div>
              : ''
              }
            </div>
            
            <button onClick={showDetails} className='project_close_btn'>
              <box-icon name='x' size='md' color={iconColor} ></box-icon>
            </button>
          </div> 
        ): (
          <div 
          className='hidden_2 project_card'>
            <div className='project_img_container'>
              <img className='project_image' src={project?.images[0]}/>
            </div> 
      
            <div className='project_details'>
                <p>{project?.description}</p>
            </div> 
      
            <button className='project_det_btn' onClick={showDetails}>{language[4].content.button}</button>
          </div> 
        )}
    </>
  )
}
    
export default ProjectCard