import React from 'react'

import PhoneImg from '../assets/phone.png'

const Contact = () => {
  return (
    <div>
      <div className='card-section'>
            <div className='card-container'>
                    <div className='card-container-header'>
                        <h4>Contacts <img className='icon' src={PhoneImg} alt="" /></h4>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
