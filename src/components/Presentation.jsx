import React from 'react'

import '../styles/Presentation.css'

const Presentation = ({language}) => {
  return (
    <section className='hidden' id='presentation'>
      <div>{language[0].title}</div>
    </section>
  )
}

export default Presentation