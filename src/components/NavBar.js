import React from 'react';
import { useState, useEffect } from 'react';

import Drawer from './Drawer';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640 && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDrawerOpen]);

  return (
    // <div className='header-fixed'>
      <div className="container">
          <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} /> 
          <div className="header header__title">
              <span style={{fontWeight: 'bold'}}><i className="fa-solid fa-circle-notch"></i> Jeffbeck.lim</span>
          </div>
          <div className="header header__menu">
              <button onClick={toggleDrawer} className='text-decoration-none btn-primary'><i className="fa-solid fa-bars"></i></button>
              <span>Home</span>
              <span>Project</span>
              <span>About</span>
              <span>Contacts</span>
          </div>
      </div>
    // </div>
  )
}


export default NavBar
