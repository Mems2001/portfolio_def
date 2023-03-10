import React, { useEffect, useState } from 'react'

import '../styles/Nav.css'

const NavBar = ({language , changeLang}) => {

  // const [count, setCount] = useState(0);
  // function Timer() {
  
  //   useEffect(() => {
  //     if (count < 10) {
  //       setTimeout(() => {
  //         setCount((count) => count + 1);
  //       }, 500);
  //     } else {
  //       setCount(0)
  //     }
  //   });
  // }

  // Timer()

  // const [height, setHeight] = useState(0)
  // const [width, setWidth] = useState(0)

  // useEffect(
  //   () => {
  //     const y = window.innerHeight
  //     const x = window.innerWidth

  //     setHeight(y)
  //     setWidth(x)

  //     console.log(height , width)
  //   } , [count]
  // )

    return (
      // <nav className='navBar'>
      //   <ul className='navBar_list'>
      //    <li><button onClick={changeLang} className='cl1 lang_btn' id='spn_btn'>Español</button></li>
      //    <li><button onClick={changeLang} className='cl1 lang_btn' id='eng_btn'>English</button></li>
      //   </ul>
  
      //   <ul className='navBar_list'>
      //     <li><a className='cl1 navBar_btn link' href="#presentation">{language[1].title}</a></li>
      //     <li><a className='cl1 navBar_btn link' href="#education">{language[2].title}</a></li>
      //     <li><a className='cl1 navBar_btn link' href="#skillSet">{language[3].title}</a></li>
      //     <li><a className='cl1 navBar_btn link' href="#portfolio">{language[4].title}</a></li>
      //     <li><a className='cl1 navBar_btn link' href="#contact">{language[5].title}</a></li>
      //   </ul>
      // </nav>

      <nav className='navBar_mobile'>
        <ul className='navBar_list'>
         <li><button onClick={changeLang} className='cl1 lang_btn' id='spn_btn'>Español</button></li>
         <li><button onClick={changeLang} className='cl1 lang_btn' id='eng_btn'>English</button></li>
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