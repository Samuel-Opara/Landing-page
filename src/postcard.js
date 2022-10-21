import React from 'react';
import Bimg from './image/blog.png';

const postcard = () => {
  return (
    <div className='pcard'>
        <img src={Bimg} alt=""/>
        <h3>What you need to know about WEB3</h3>
        <p>Stay up to date with 
                our latest information
                and posts on everything tech as 
                the tech space grows beyond limits</p>
    </div>
  )
}

export default postcard