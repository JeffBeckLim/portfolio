import React from 'react'

const NavBar = () => {
  return (
    // <div className='header-fixed'>
      <div className="container">
          <div className="header header__title">
              <span><i class="fa-solid fa-circle-notch"></i> Jeffbeck.lim</span>
          </div>
          <div className="header header__menu">
              <i className="fa-solid fa-bars"></i>
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
