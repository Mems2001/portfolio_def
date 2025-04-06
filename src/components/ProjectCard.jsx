import React, { useEffect } from 'react'
import { useState } from 'react'

import english from '../json/english.json'

const ProjectCard = ({project , language , theme}) => {

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

  if (display) {
    return (
      <div className='extended_details'>
        <div className='extended_images'>
          <button on className='prev_btn' onClick={prevImage}>
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
              {project.languages.map(language => 
                <li>{language}</li>
                )}
            </ul>
          </div>

          <div className='spec_container'>
            <h4>{language === english? 'Compatibility: ' : 'Compatibilidad: '}</h4>
            <ul>
              {project.compatibility.map(element => 
                <li>{element}</li>
              )}
            </ul>
          </div>
        </div>

        <div className='description'>
          <p>{project.description}</p>
        </div>

        <div className='links_container'>
          <a href={project.links.gitHub} target={'_blank'}>
            <img className='link_logo' src={`logos/github-logo-144${theme==='Dark'?'D':'L'}.png`}/>
          </a>
          {project.links.other?
            <a href={project.links.other} target={'_black'}>
              <img className='link_logo' src={`logos/github-logo-144${theme==='Dark'?'D':'L'}.png`}/>
            </a>: ''
          }
          {project.links.netlify ? 
          <a href={project.links.netlify} target={'_blank'}>
            <img className='link_logo' src={`logos/netlify-logo-144${theme==='Dark'?'D':'L'}.png`}/>
          </a> : ''
          }
        </div>
        
        <button onClick={showDetails} className='project_close_btn'></button>
      </div>
    )
  } else {
    return (
      <div className='hidden_2 project_card'>
        <div className='project_img_container'>
          <img className='project_image' src={project?.images[0]}/>
        </div> 
  
        <div className='project_details'>
            <p>{project?.description}</p>
        </div> 
  
        <button className='project_det_btn' onClick={showDetails}>{language[4].content.button}</button>
      </div>
    )
  }

}

export default ProjectCard