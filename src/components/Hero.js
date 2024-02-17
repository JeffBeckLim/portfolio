import React from 'react'
import Pencil from '../assets/3dPencil.png';
import ProfileImage from '../assets/profile.JPG';

import htmLogo from '../assets/tinified/html.png';
import cssLogo from '../assets/tinified/css.png';
import jsLogo from '../assets/tinified/js.png';
import bsLogo from '../assets/tinified/bs.png';
import laravelLogo from '../assets/tinified/laravel.png';
import reactLogo from '../assets/tinified/react.png';
import pgLogo from '../assets/tinified/pg.png';
const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="main-container">
            <div className="main main__profile">
                <img className='shadow' src={ProfileImage} alt=""/>
            </div>

            <div className="main main__content">
                <h2>Web Developer <br /> 
                    and Digital Artist 
                    <img className='pencil-icon' src={Pencil} alt="" style={{height: '36px', padding: '0px 0px 0px 10px'}} />
                </h2>
                <h6>
                    Hello, I'm Jeff Beck M. Lim. A passionate Web Developer <br /> and Digital Artist Based in the Philippines.
                </h6>

                <span>
                    <i className="fa-brands fa-github"></i>
                </span>   
                <span>
                    <i className="fa-brands fa-linkedin"></i>
                </span>
                <span>
                    <i className="fa-brands fa-artstation"></i>
                </span>
            </div>

            <div className='main main__techStack'>
                <h2>Tech Stack </h2>
                <span className='animate-bot-top'>
                    <img className='fade-in' src={htmLogo} alt="" />
                    <img className='fade-in' src={cssLogo} alt="" />
                    <img className='fade-in' src={jsLogo} alt="" />
                    <img className='fade-in' src={bsLogo} alt="" />
                    <img className='fade-in' src={laravelLogo} alt="" />
                    <img className='fade-in' src={reactLogo} alt="" />
                    <img className='fade-in' src={pgLogo} alt="" />
                </span>
            </div>
        </div>
        


        <div class="hero-bottom-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>



   </div>
  )
}
export default Hero
