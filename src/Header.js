import React from 'react';
import './App.css';

const Header = () => {
  return (
    <div className='header'><h4><em>MEJOR</em></h4>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
  )
}

export default Header