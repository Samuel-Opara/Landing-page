import React from 'react';
import Bpost from './blogpost';
import Bimg from './image/design2.png'

const blog = () => {
  return (
    <div className='blog'>
        <div className='intro'>
            <h2>Blog</h2>
            <p>Stay up to date with 
                our latest information
                and posts on everything tech as 
                the tech space grows beyond limits
            </p>
            <button>more details</button>
        </div>
        <div className='pos'>
            <Bpost />
        </div>
        <div className='bdesign'>
            <img src={Bimg} alt="" />
        </div>
    </div>
  )
}

export default blog