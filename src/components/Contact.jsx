import React from 'react'
import { useForm } from 'react-hook-form'

import '../styles/Contact.css'

const Contact = ({language}) => {

  const {register , handleSubmit , reset} = useForm()

  const encode = (info) => {
    return Object.keys(info)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(info[key]))
        .join("&");
  }

  const submit = data => {
    if(data.email_contact != '') {
      console.log(data)

      const defaultForm = {
        name_contact: '',
        email_contact: '',
        message_contact: ''
      }

      // WITH FORM SUBMIT
      // const mail = 'mems2001code@gmail.com'
      // const URL = `https://formsubmit.co/${mail}`

      window.fetch('/' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          // 'Accept': ['application/json','application/x-www-form-urlencoded']
        },
        body: encode({"form-name":"contactC" , ...this.data})
      })
        .then(data => {
          console.log(data)
          reset(defaultForm)
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <section className='hidden' id='contact'>
      <h2 className='section_title'>{language[5].title}</h2>

      <form name='contactC' className='form' onSubmit={handleSubmit(submit)} method='post'>
        <label htmlFor='nameC'>{language[5].content.name.title}:</label>
        <input type='text' name='nameC' id='nameC' {...register('name_contact')} placeholder={language[5].content.name.placeholder}/>
        <label htmlFor='emailC'>{language[5].content.email.title}:</label>
        <input type='email' name='emailC' id='emailC' {...register('email_contact')} placeholder={language[5].content.email.placeholder}/>
        <label htmlFor='messageC'>{language[5].content.message.title}:</label>
        <textarea name='messageC' id='messageC' {...register('message_contact')} placeholder={language[5].content.message.placeholder} rows='10'/>
        <button type='submit' className='form_btn'>{language[5].content.submit}</button>
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </section>
  )
}

export default Contact