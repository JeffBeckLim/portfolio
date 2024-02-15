import React from 'react'

import PhoneImg from '../assets/phone.png'

const Contact = () => {
  return (
    <div className='contact-section'>
        <div className='contact-container'>
              <div className='contact-container-header'>
                  <h4>Contacts <img className='icon' src={PhoneImg} alt="" /></h4>
              </div>

              <div className=' shadow contact-content'>
                  <h1>limjeff64@gmail.com</h1>
                  
                  <h4>Jeff Beck M. Lim</h4>
                  <h4>Travesia, Guinobatan, Albay, Philippines</h4>
              </div>
        </div>
    </div>
  )
}

export default Contact
