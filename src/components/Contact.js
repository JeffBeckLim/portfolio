import React from 'react'

// import PhoneImg from '../assets/phone.png'

const Contact = () => {
  return (
    <div className='contact-section'>
        <div className='contact-container'>
              <div className='contact-container-header'>
                  <h4>Contacts </h4>
              </div>

              <div className=' shadow contact-content'>
                  <h2><i class="fa-solid fa-circle-notch"></i> Jeffbeck.lim</h2>
                  <h1>limjeff64@gmail.com</h1>

                  <h4><i class="fa-solid fa-phone"></i> (+63) 915 0085 056</h4>
                  <h4><i class="fa-solid fa-location-dot"></i> Travesia, Guinobatan, Albay, Philippines</h4>

                    <div>
                      <i className="fa-brands fa-github"></i>
                      <i className="fa-brands fa-linkedin"></i>
                      <i className="fa-brands fa-artstation"></i>
                  </div>   
              </div>
        </div>
    </div>
  )
}

export default Contact
