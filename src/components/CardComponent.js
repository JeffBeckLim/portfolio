import React from 'react'
import ThumbnailImg from '../assets/profile.JPG'

const CardComponent = () => {
  return (
    <div className='card-parent'>
         <div className='card'>
            <div className='card-img'>
                <img src={ThumbnailImg} alt="" />
            </div>
            <div className='card-content shadow'>
                <h4>My Title</h4>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa recusandae nam.
                </p>
                <button className='btn-primary'>More Details</button>
            </div>
        </div>
    </div>
  )
}

export default CardComponent
