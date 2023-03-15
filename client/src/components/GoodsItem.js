import React, { useState } from 'react';

function GoodsItem ({name, price, img}) {
  

  return(
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <img src={img} alt={name} />
    </div>
  )
}

export {GoodsItem}