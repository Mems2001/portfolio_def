import React from 'react'
import { useForm } from 'react-hook-form'

import '../styles/Contact.css'

const Contact = ({language}) => {

  const {register , handleSubmit , reset} = useForm()

  const submit = data => {
    if(data.email_contact != '') {
      console.log(data)

      const defaultForm = {
        name_contact: '',
        email_contact: '',
        message_contact: ''
      }

      const mail = 'f609a4528a2cb85f2aff02129596cb96'
      const URL = `https://formsubmit.co/${mail}`

      window.fetch(URL , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(data => {
          // console.log(data , data.body)
          reset(defaultForm)
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <section className='hidden' id='contact'>
      <h2 className='section_title'>{language[5].title}</h2>

      <form className='form' onSubmit={handleSubmit(submit)}>
        <label htmlFor='nameC'>{language[5].content.name.title}:</label>
        <input type='text' id='nameC' {...register('name_contact')} placeholder={language[5].content.name.placeholder}/>
        <label htmlFor='emailC'>{language[5].content.email.title}:</label>
        <input type='text' id='emailC' {...register('email_contact')} placeholder={language[5].content.email.placeholder}/>
        <label htmlFor='messageC'>{language[5].content.message.title}:</label>
        <textarea id='messageC' {...register('message_contact')} placeholder={language[5].content.message.placeholder} rows='10'/>
        <button className='form_btn'>{language[5].content.submit}</button>
      </form>
    </section>
  )
}

export default Contact