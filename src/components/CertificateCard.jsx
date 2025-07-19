import React, { useEffect, useState } from 'react'

const CertificateCard = ({info , id}) => {

  const [cert, setCert] = useState(false)
  
  const certificate_function_on = () => {
    setCert(true)
  }
  const certificate_function_off = () => {
    setCert(false)
  }

  const source = cert? `${info.QR}` : `${info.image}`

  useEffect(
    () => {
      document.getElementById(`${id}`).addEventListener("mouseover" , certificate_function_on)
      document.getElementById(`${id}`).addEventListener("mouseout" , certificate_function_off)
    } , []
  )


  return (
    <div id={id} className={`certificate_card hidden_2`}>
      <h4 className='certificate_title'>{info.title}</h4>

      <div className={`c c_${id}`}>
        {info.link?
          <a href={info.link} target={'_blank'} className='certificate_btn'>
            <img className='link_btn' src='buttons/link-btn.png'/>
          </a>
            :
          <></>
        }
      </div>

    </div>
  )
}

export default CertificateCard