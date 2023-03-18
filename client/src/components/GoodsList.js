import React, { useState } from 'react';
import { GoodsItem } from './GoodsItem';

const GoodsList = ({goods}) => {
  return(
    goods.map(good => {
      return(
        <GoodsItem
          key={good.id}
          name={good.name}
          price={good.price}
          imgURL={good.imgURL}
        />
      )
    })
  )
}

export {GoodsList}