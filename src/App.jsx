import { useState , useEffect } from 'react'
import './App.css'
import spanish from './json/spanish.json'
import english from './json/english.json'

import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import SkillSet from './components/SkillSet'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  
  const [language, setLanguage] = useState(english)

  const changeLang = () => {
    if (language === spanish) {
      setLanguage(english)
    } else if (language === english) {
      setLanguage(spanish)
    }
  }

// ANIMATIONS
  useEffect(
    () => {
      const hiddenElements = document.querySelectorAll('.hidden')
      const hiddenProjectCards = document.querySelectorAll('.hidden_2')
      const linkedElements = document.querySelectorAll('.link')

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.id 

          if (entry.isIntersecting) {
            entry.target.classList.add('show')

            linkedElements.forEach(linked => {
              const href = linked.getAttribute('href').split('#')[1]

              if (href === id) {
                linked.classList.add('linked')
              } else {
                linked.classList.remove('linked')
              }
            })
          } else {
            entry.target.classList.remove('show')
          }
        })
      } , {
        threshold: 0.25
      })

      const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          
          if (entry.isIntersecting) {
            entry.target.classList.add('show_2')
          } else {
            entry.target.classList.remove('show_2')
          }
        })
      } , {})
      
      hiddenElements.forEach(element => observer.observe(element))
      hiddenProjectCards.forEach(element => observer1.observe(element))

      const spn_btn = document.querySelector('#spn_btn')
      const eng_btn = document.querySelector('#eng_btn')

      if (language === spanish) {
        spn_btn.classList.add('linked')
        // console.log('español')
      } else {
        spn_btn.classList.remove('linked')
      }

      if (language === english) {
        eng_btn.classList.add('linked')
        // console.log('english')
      } else {
        eng_btn.classList.remove('linked')
      }
    } , [language]
  )
  return (
    <div className="App">
     <NavBar changeLang={changeLang} language={language}/>

     <main className='main_container'>
     <Presentation language={language}/>

     <AboutMe language={language}/>

     <Education language={language}/>

     <SkillSet language={language}/>

     <Portfolio language={language}/>

     <Contact language={language}/>
     </main>

    </div>
  )
}

export default App