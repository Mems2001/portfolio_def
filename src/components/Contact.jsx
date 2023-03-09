import React from 'react'

import '../styles/Contact.css'

const Contact = ({language}) => {
  return (
    <section className='hidden' id='contact'>
      <h2 className='section_title'>{language[5].title}</h2>

      <form className='form'>
        <label htmlFor='nameC'>{language[5].content.name.title}:</label>
        <input type='text' id='nameC' placeholder={language[5].content.name.placeholder}/>
        <label htmlFor='emailC'>{language[5].content.email.title}:</label>
        <input type='text' id='emailC' placeholder={language[5].content.email.placeholder}/>
        <label htmlFor='messageC'>{language[5].content.message.title}:</label>
        <textarea id='messageC' placeholder={language[5].content.message.placeholder} rows='10'/>
        <button className='form_btn'>{language[5].content.submit}</button>
      </form>
    </section>
  )
}

export default Contact