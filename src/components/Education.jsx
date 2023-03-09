import React from 'react'

import '../styles/Education.css'
import CertificateCard from './CertificateCard'
import EdCard from './EdCard'

const Education = ({language}) => {

  const institution = language[2].content

  const certificates = language[2].certificates

  return (
    <section className='hidden' id='education'>
      <h2 className='section_title'>{language[2].title}</h2>

      <div className='education_container'>
        <EdCard image={'logos/BALogo.png'} language={institution.uba}/>
        <EdCard image={'logos/logo_academlo2.png'} language={institution.academlo}/>
      </div>

      <h3 className='certificate_main_title'>Certificates</h3>

      <div className='certificates_container'>
        {certificates?.map(certificate => 
          <CertificateCard key={certificate.id} id={certificate.id} info={certificate}/>
        )}
      </div>
    </section>
  )
}

export default Education