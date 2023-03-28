import React, { useState } from 'react';
import { GoodsItem } from '../GoodsItem/GoodsItem';

import './GoodsList.css';

import testImage from '../../assets/test-image.jpg';

const GoodsList = ({goods}) => {
  const [goodsData, setGoodsData] = useState(goods);

  return(

    <GoodsItem/>
    // <div className='goods-list'>
    //   <div className="goods-card">
    //     <h4 className='goods-card__title'>
    //       New Balance 725 Radically classic 
    //     </h4>
    //     <img className='goods-card__img' src={testImage} alt="goodImg" />
    //     <span className='goods-card__brand'>
    //       Jordan
    //     </span>
    //     <span className='goods-card__price'>
    //       100$
    //     </span>
    //   </div>
    // </div>
    // goods.map(good => {
    //   return(
    //     <GoodsItem
    //       key={good.id}
    //       name={good.name}
    //       price={good.price}
    //       imgURL={good.imgURL}
    //     />
    //   )
    // })
  )
}

export {GoodsList}