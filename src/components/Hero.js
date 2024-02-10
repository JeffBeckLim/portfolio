import React from 'react'
import Pencil from '../assets/3dPencil.png';
import ProfileImage from '../assets/profile.JPG';
import htmLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import bsLogo from '../assets/bs.png';
import laravelLogo from '../assets/laravel.png';
import reactLogo from '../assets/react.png';
import pgLogo from '../assets/pg.png';
const Hero = () => {
  return (
    <div className="main-container">
        <div className="main main__profile">
            <img src={ProfileImage} alt=""/>
        </div>

        <div className="main main__content">
            <h2>Web Developer <br /> 
                and Digital Artist 
                <img src={Pencil} alt="" style={{height: '36px', padding: '0px 0px 0px 10px'}} />
            </h2>
            <h6>
                Hello, I'm Jeff Beck M. Lim. A passionate Web Developer <br /> and Digital Artist Based in the Philippines
                🇵🇭
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
            <span>
                <img src={htmLogo} alt="" />
                <img src={cssLogo} alt="" />
                <img src={jsLogo} alt="" />
                <img src={bsLogo} alt="" />
                <img src={laravelLogo} alt="" />
                <img src={reactLogo} alt="" />
                <img src={pgLogo} alt="" />
            </span>
        </div>
   </div>
  )
}

export default Hero
