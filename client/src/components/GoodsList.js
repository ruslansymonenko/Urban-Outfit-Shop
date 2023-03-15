import React, { useState } from 'react';
import { GoodsItem } from './GoodsItem';

function GoodsList({goods}) {
  return(
    goods.map(good => {
      return(
        <GoodsItem
          key={good.id}
          name={good.name}
          price={good.price}
          img={good.img}
        />
      )
    })
  )
}

export {GoodsList}