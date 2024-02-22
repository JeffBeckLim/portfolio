import React from 'react'


const Drawer  = ({ isOpen, onClose }) => {

  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button className='btn-primary' style={{margin: '10px'}} onClick={onClose}>Close</button>
    </div>
  )
}

export default Drawer
