import React from 'react';
import cardpic from './image/cardpic.png';



const card = () => {
    let service = ['Tech Education', 'Web Development', 'Brand Design']
    let content = ['We teach beyond limits, so you can learn beyond limits','We teach beyond limits, so you can learn beyond limits','We teach beyond limits, so you can learn beyond limits']

  return (
    <div className='card'>
        <div className='cad'>
            <img src={cardpic} alt='' />
            <h5>{service[0]}</h5>
            <p>{content[0]}</p>
            <button>view services</button>
        </div>
        <div className='cad'>
            <img src={cardpic} alt='' />
            <h5>{service[1]}</h5>
            <p>{content[1]}</p>
            <button>view services</button>
        </div>
        <div className='cad'>
            <img src={cardpic} alt='' />
            <h5>{service[2]}</h5>
            <p>{content[2]}</p>
            <button>view services</button>
        </div>
    </div>
    
  )
}

export default card