import React from 'react'
import coffeeImg from '../assets/coffee (2).png'
// import handWaveImg from '../assets/handWave.png'

const About = () => {
  return (
      <div className='about-section'>
          <div className='about-container'>
                <div className='about-container-header'>
                    <h4>About</h4>
                </div>
                
                <div className='about-card-parent'>
                    <div className='shadow about-card'>
                        <div className='about-card-content'>
                            <img src={coffeeImg} alt="" />
                            <p>
                            Hey there, I'm <strong>Jeff Beck M. Lim</strong>, a web developer and digital artist with a serious passion for creating visually stunning and user-friendly experiences. I love blending my artistic flair with my coding skills to push boundaries and bring my ideas to life. Whether I'm crafting a website or working on a digital masterpiece, I'm all about making things look awesome and function seamlessly. It's a journey of creativity and discovery that I'm thrilled to be on! 
                            </p>
                        </div>
                        <div className='cv-button-div'>
                            <button className='btn-primary'>Download my CV</button>
                        </div>
                    </div>
                </div>

          </div>
      </div>
  )
}

export default About
