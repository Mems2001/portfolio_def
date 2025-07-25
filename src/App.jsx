import { useState , useEffect } from 'react'
import './App.css'
import spanish from './json/spanish.json'
import english from './json/english.json'

import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import SkillSet from './components/SkillSet'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NavBarMobile from './components/NavBarMobile'

function App() {
  
  const [language, setLanguage] = useState(english)

  const changeLangEsp = () => {  
     setLanguage(spanish)
  }

  const changeLangEng = () => {
    setLanguage(english)
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
        threshold: 0.1
      })

      const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          
          if (entry.isIntersecting) {
            entry.target.classList.add('show_2')
          } else {
            entry.target.classList.remove('show_2')
          }
        })
      })
      
      hiddenElements.forEach(element => observer.observe(element))
      hiddenProjectCards.forEach(element => observer1.observe(element))

      const spn_btn = document.querySelector('#spn_btn')
      const eng_btn = document.querySelector('#eng_btn')
      const spn_btn_2 = document.querySelector('#spn_btn_2')
      const eng_btn_2 = document.querySelector('#eng_btn_2')

      if (language === spanish) {
        spn_btn.classList.add('linked')
        spn_btn_2.classList.add('linked')
        // console.log('español')
      } else {
        spn_btn.classList.remove('linked')
        spn_btn_2.classList.remove('linked')
      }

      if (language === english) {
        eng_btn.classList.add('linked')
        eng_btn_2.classList.add('linked')
        // console.log('english')
      } else {
        eng_btn.classList.remove('linked')
        eng_btn_2.classList.remove('linked')
      }
    }
  )

// NAVIGATOR MOBILE INTERACTIONS
const [showBar, setShowBar] = useState(false)
  
useEffect(
  () => {
    const navBar = document.querySelector('.navBar_mobile')
    const auxiliar = document.querySelector('.auxiliar-nav')
    const navBtn = document.querySelector('.navBar_btn_mobile')
    const links = document.querySelectorAll('.mob_link')

    const toggleMenu = () => {
      if (showBar) {
        setShowBar(false)
        navBar.classList.remove("show_nav")
        auxiliar.classList.remove("show_aux")
      } else {
        setShowBar(true)
        navBar.classList.add('show_nav')
        auxiliar.classList.add('show_aux')
      }
    }

    navBtn.addEventListener("click" , toggleMenu)
    links.forEach(link => link.addEventListener('click' , toggleMenu))

    return () => {
      navBtn.removeEventListener('click' , toggleMenu)
      links.forEach(link => link.removeEventListener('click' , toggleMenu))
    }
  } , [showBar]
)

// LIGHT/DARK THEMES
const [theme, setTheme] = useState('Light')
const [iconColor, setIconColor] = useState('#457b9d')

const toggleTheme = () => {
  if (theme === 'Dark') {
    setTheme('Light')
    setIconColor('#457b9d')
  } else {
    setTheme('Dark')
    setIconColor('#ea9595')
  }
}

// Themes toggling
useEffect(
  () => {
    const themeBtn = document.querySelector('.theme_btn')
    const theme_img = document.querySelector('.theme_img')
    
    const themeToggling = () => {
    
        document.body.classList.toggle('light_theme')
        theme_img.classList.toggle('light')
        toggleTheme()
      
    }

    themeBtn.addEventListener('click' , themeToggling)

    return () => {
      themeBtn.removeEventListener('click' , themeToggling)
    }
  } , [theme]
)

  return (
    <div className="App">
     <NavBar changeLangEsp={changeLangEsp} changeLangEng={changeLangEng} language={language}/>
     <NavBarMobile changeLangEsp={changeLangEsp} changeLangEng={changeLangEng} language={language} setShowBar={setShowBar} showBar={showBar}/>
     <button className='navBar_btn_mobile'>
      {
        showBar?
        <box-icon type='solid' size='lg' name='x-circle' color={iconColor} ></box-icon> :
        <box-icon name='menu' size='lg' color={iconColor} ></box-icon>
      }
     </button>

     <button className='theme_btn'>
      <div className='theme_backgrounds'>
        <box-icon type='solid' name='moon'></box-icon>
      </div>
      <div className='theme_backgrounds'>
        <box-icon type='solid' name='sun' color='#457b9d'></box-icon>
      </div>
      <div className='theme_img light'></div>
     </button>

     <main className='main_container'>
     <AboutMe language={language}/>

     <Portfolio theme={theme} language={language}/>

     <SkillSet language={language}/>
     
     <Education language={language}/>

     <Contact language={language}/>
     </main>

    </div>
  )
}

export default App