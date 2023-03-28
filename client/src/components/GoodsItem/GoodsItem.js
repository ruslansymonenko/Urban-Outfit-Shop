import React, { useState } from 'react';

import './GoodsItem.css';

function GoodsItem ({title, price, imgURL}) {

  return(
    <div className='goods-card'>
      <h4 className='goods-card__title'>
        New Balance 725 Radically classic 
      </h4>
      <img 
        className='goods-card__img' 
        // src={`http://localhost:3001/goods/${imgURL}`} 
        alt={title} />
      <span className='goods-card__brand'>
        Jordan
      </span>
      <span className='goods-card__price'>
        100$
      </span>
    </div>
  )
}

export {GoodsItem}