import React, { useEffect, useState } from 'react'

const NavBarMobile = ({language , changeLangEsp , changeLangEng}) => {


  return (
    <nav className='navBar_mobile'>
        <ul className='navBar_list_lang'>
         <li><button onClick={changeLangEsp} className='cl1 lang_btn' id='spn_btn_2'>Español</button></li>
         <li><button onClick={changeLangEng} className='cl1 lang_btn' id='eng_btn_2'>English</button></li>
        </ul>
  
        <ul className='navBar_list_mobile'>
          <li><a className='cl1 navBar_btn mob_link link' href="#aboutMe">{language[1].title}</a></li>
          <li><a className='cl1 navBar_btn mob_link link' href="#portfolio">{language[4].title}</a></li>
          <li><a className='cl1 navBar_btn mob_link link' href="#skillSet">{language[3].title}</a></li>
          <li><a className='cl1 navBar_btn mob_link link' href="#education">{language[2].title}</a></li>
          <li><a className='cl1 navBar_btn mob_link link' href="#contact">{language[5].title}</a></li>
        </ul>
      </nav>
  )
}

export default NavBarMobile