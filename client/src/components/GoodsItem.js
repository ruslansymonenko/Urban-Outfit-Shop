import React, { useState } from 'react';

function GoodsItem ({name, price, imgURL}) {

  return(
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <img src={`http://localhost:3001/goods/${imgURL}`} alt={name} />
    </div>
  )
}

export {GoodsItem}