import React from 'react'

import '../styles/Nav.css'

const NavBar = ({language , changeLangEsp , changeLangEng}) => {

    return (
      <nav className='navBar'>
        <ul className='navBar_list'>
         <li><button onClick={changeLangEsp} className='cl1 lang_btn' id='spn_btn'>Español</button></li>
         <li><button onClick={changeLangEng} className='cl1 lang_btn' id='eng_btn'>English</button></li>
        </ul>
  
        <ul className='navBar_list'>
          <li><a className='cl1 navBar_btn link' href="#presentation">{language[1].title}</a></li>
          <li><a className='cl1 navBar_btn link' href="#education">{language[2].title}</a></li>
          <li><a className='cl1 navBar_btn link' href="#skillSet">{language[3].title}</a></li>
          <li><a className='cl1 navBar_btn link' href="#portfolio">{language[4].title}</a></li>
          <li><a className='cl1 navBar_btn link' href="#contact">{language[5].title}</a></li>
        </ul>
      </nav>
    )

}

export default NavBar