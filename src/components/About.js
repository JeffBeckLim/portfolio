import React from 'react'
import handWaveImg from '../assets/handWave.png'

const About = () => {
  return (
      <div className='about-section'>
          <div className='about-container'>
                <div className='about-container-header'>
                    <h4>About <img className='icon'  src={handWaveImg} alt="" /></h4>
                </div>
                
                <div className='about-card-parent'>
                    <div className='shadow about-card'>
                        <div className='about-card-content'>
                            <h1>Hello</h1>
                            <h4>Jeff Beck M. Lim</h4>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, necessitatibus. 
                            Facere laboriosam reprehenderit maxime iusto et unde alias at voluptas delectus, quo quasi 
                            illum modi. Id amet ratione explicabo error!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, necessitatibus. 
                            Facere laboriosam reprehenderit maxime iusto et unde alias at voluptas delectus, quo quasi 
                            illum modi. Id amet ratione explicabo error!
                            </p>
                        </div>
                    </div>
                </div>
                
          </div>
      </div>
  )
}
 
export default About
