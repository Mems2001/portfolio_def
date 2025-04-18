import React from 'react'
import { useForm } from 'react-hook-form'

import emailjs from '@emailjs/browser'

import '../styles/Contact.css'

const Contact = ({language}) => {

  const {register , handleSubmit , reset} = useForm()

  // const encode = (info) => {
  //   console.log(info)
  //   return Object.keys(info)
  //       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(info[key]))
  //       .join("&");
  // }

  function submit (data) {
    if(data.email != '') {
      console.log(data)

      const defaultForm = {
        name: '',
        email: '',
        message: ''
      }

      // WITH FORM SUBMIT
      // const mail = 'mems2001code@gmail.com'
      // const URL = `https://formsubmit.co/${mail}`
      // window.fetch('/' , {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //     // 'Accept': ['application/json','application/x-www-form-urlencoded']
      //   },
      //   body: `form-name=contact&name=${data.name_contact}&email=${data.email_contact}&message=${data.message_contact}`
      // })
      //   .then(data => {
      //     console.log(data)
      //     reset(defaultForm)
      //   })
      //   .catch(err => console.log(err))

      emailjs.sendForm(
        'service_evb9l8s',
        'template_m3pc904',
        data, 
        {
          publicKey: 'iSgjq1cFAJCi7K34B'
        }
      )
      .then(() => {
        reset(defaultForm)
        console.log('email sent')
      },
        (error) => {
          console.error('Error:' , error.text)
        })
    }
  }

  return (
    <section className='hidden' id='contact'>
      <h2 className='section_title'>{language[5].title}</h2>

      <form name='contact' className='form' onSubmit={handleSubmit(submit)}>
        <label htmlFor='nameC'>{language[5].content.name.title}:</label>
        <input type='text' name='name' id='nameC' {...register('name')} placeholder={language[5].content.name.placeholder}/>
        <label htmlFor='emailC'>{language[5].content.email.title}:</label>
        <input type='email' name='email' id='emailC' {...register('email')} placeholder={language[5].content.email.placeholder}/>
        <label htmlFor='messageC'>{language[5].content.message.title}:</label>
        <textarea name='message' id='messageC' {...register('message')} placeholder={language[5].content.message.placeholder} rows='10'/>
        <button type='submit' className='form_btn'>{language[5].content.submit}</button>
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </section>
  )
}

export default Contact