import React from 'react'
import image from './image/pic.png';

const section = () => {
  return (
    <div className='section'>
        <div>
            <h3>Welcome to</h3>
            <h1>Mejor Tech World</h1>
            <h2>We <span>Teach.</span> We <span>Build.</span></h2>
            <button>view services</button>
        </div>
        <div>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default section