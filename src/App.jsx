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

// ---> LANGUAGES HANDLING <---
  let savedLanguage = localStorage.getItem('mems-cv-language')
  const [language, setLanguage] = useState(savedLanguage === 'english'? english: spanish)

  /**
   * Sets both localStorage for token for language persistance and useState for app reactivity
   */
  function changeLangEsp () {
    localStorage.setItem('mems-cv-language', 'español')
    setLanguage(spanish)
  }
  
  /**
   * Sets both localStorage token for for language persistance and useState for app reactivity
   */
  function changeLangEng () {
    localStorage.setItem('mems-cv-language', 'english')
    setLanguage(english)
  }

// ---> ANIMATIONS <---
  useEffect(
    () => {
      const hiddenElements = document.querySelectorAll('.hidden') //For elements like section containers
      const hiddenProjectCards = document.querySelectorAll('.hidden_2') //For elements contained in section containers
      const linkedElements = document.querySelectorAll('.link') //For menu items higlighting if the corresponding section is being currently displayed

      //Animates the menu items higlighting and section containers slides to screen
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.id 

          if (entry.isIntersecting) {
            //For section containers
            entry.target.classList.add('show')

            //For menu items
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

      //Animates section container elements slides to screen
      const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          
          if (entry.isIntersecting) {
            entry.target.classList.add('show_2')
            entry.target.classList.remove('hidden_2')
          } else {
            entry.target.classList.remove('show_2')
            entry.target.classList.add('hidden_2')

          }
        })
      })
      
      hiddenElements.forEach(element => observer.observe(element))
      hiddenProjectCards.forEach(element => observer1.observe(element))

      const spn_btn = document.querySelector('#spn_btn')
      const eng_btn = document.querySelector('#eng_btn')
      const spn_btn_2 = document.querySelector('#spn_btn_2')
      const eng_btn_2 = document.querySelector('#eng_btn_2')

      //Animantes language selection buttons on selection
      if (language === spanish) {
        spn_btn.classList.add('linked')
        spn_btn_2.classList.add('linked')
      } else {
        spn_btn.classList.remove('linked')
        spn_btn_2.classList.remove('linked')
      }

      if (language === english) {
        eng_btn.classList.add('linked')
        eng_btn_2.classList.add('linked')
      } else {
        eng_btn.classList.remove('linked')
        eng_btn_2.classList.remove('linked')
      }
    }
  )

// ---> NAVIGATOR MOBILE INTERACTIONS <---
const [showBar, setShowBar] = useState(false)
  
useEffect(
  () => {
    const navBar = document.querySelector('.navBar_mobile')
    const auxiliar = document.querySelector('.auxiliar-nav')
    const navBtn = document.querySelector('.navBar_btn_mobile')
    const links = document.querySelectorAll('.mob_link')

    function toggleMenu () {
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

// ---> LIGHT & DARK THEMES <---
let savedTheme = localStorage.getItem('mems-cv-theme') ?? 'Light'
const [theme, setTheme] = useState(savedTheme)
const [iconColor, setIconColor] = useState(savedTheme)

/**
 * When toggling themes the function sets both useState for app reactivity and localStorage token for theme persistance
 */
function toggleTheme () {
  // console.log('current theme:', theme)
  switch (theme) {
    case 'Dark':
      localStorage.setItem('mems-cv-theme', 'Light')
      setTheme('Light')
      setIconColor('#457b9d')
      break
    case 'Light':
      localStorage.setItem('mems-cv-theme', 'Dark')
      setTheme('Dark')
      setIconColor('#ea9595')
      break
  }
}

// ---> THEMES TOGGLING <---
useEffect(
  () => {
    const themeBtn = document.querySelector('.theme_btn')
    const theme_img = document.querySelector('.theme_img')

    //Since the dark theme is the default app index.css set of color varibles we need to check for a localStorage token to updated if needed. 
    switch (savedTheme) {
      case 'Light':
        document.body.classList.add('light_theme')
        theme_img.classList.add('light')
        break
      case 'Dark':
        document.body.classList.remove('light_theme')
        theme_img.classList.remove('light')
        break
    }
    
    /**
     * Since the dark mode is the default index.css color varibles configuration then light theme enters as an added classs to the document's body. Therefore, changing between themes reducts to add or remove the light theme class
     */
    function themeToggling () {
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

     <Portfolio theme={theme} language={language} iconColor={iconColor}/>

     <SkillSet language={language}/>
     
     <Education language={language}/>

     <Contact language={language}/>
     </main>

    </div>
  )
}

export default App