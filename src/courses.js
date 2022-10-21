import React from 'react';
import Image from './image/image.png';
import './courses.css';
import Deco from './image/design2.png'

const courses = () => {
  return (
    <div className='course'>
        <div>
            <img src={Image} alt="" />
        </div>
        <div>
            <h2>Courses</h2>
            <ul>
                <li>front end web development</li>
                <li>back end web development</li>
                <li>graphics design</li>
                <li>motion graphics</li>
                <li>mobile app development</li>
            </ul>
            <button>More details</button>
        </div>
        <div className="dec">
          <img src={Deco} alt="" id="deco" />
        </div>
    </div>
  )
}

export default courses