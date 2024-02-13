import React from 'react'
import handWaveImg from '../assets/handWave.png'

const About = () => {
  return (
    <div>
      <div className='card-section'>
            <div className='about-container'>
                    <div className='card-container-header'>
                        <h4>About <img className='icon'  src={handWaveImg} alt="" /></h4>
                    </div>

                    <div className='shadow about-card'>
                        <div className='about-card-content'>
                            <h1>Hello</h1>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
 
export default About
