import React from 'react'

const EdCard = ({language , image}) => {
  return (
    <div className='ed_card hidden_2'>
      <div className='ed_img_container'>
        <img className='education_logo' src={image}/>
      </div>
      <div className='education_info'>
        <h3 className='education_title'>{language[0]}</h3>
        <p>{language[1]}</p>
        <p>{language[2]}</p>
      </div>
    </div>
  )
}

export default EdCard