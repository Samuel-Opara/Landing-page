import React from 'react';
import Cards from './card';

const servicecard = () => {
  return (
    <div className='service'>
        <h2>Our Services</h2>
        <div className='cards'>
            <Cards />
        </div>
    </div>
  )
}

export default servicecard