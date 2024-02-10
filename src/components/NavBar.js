import React from 'react'

const NavBar = () => {
  return (
    <div className="container">
        <div className="header header__title">
            <h2> Jeffbeck.lim</h2>
        </div>
        <div className="header header__menu">
            <i className="fa-solid fa-bars"></i>
            <span>Home</span>
            <span>About</span>
            <span>Project</span>
            <span>Contacts</span>
        </div>
    </div>
  )
}

export default NavBar
