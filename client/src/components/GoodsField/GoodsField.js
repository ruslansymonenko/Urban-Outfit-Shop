import { useState } from "react";
import { GoodsFilter } from "../GoodsFilter/GoodsFilter";
import { GoodsList } from "../GoodsList/GoodsList";

import './GoodsField.css';

const GoodsField = ({goods}) => {
  const [goodsData, setGoodsData] = useState([goods]);

  console.log(goodsData)

  return (
    <section className="goods">
      <div className="container">
        <div className="goods-content">
          <GoodsFilter/>
          <GoodsList goods={goodsData}/>
        </div>
      </div>
    </section>
  )
}

export {GoodsField};

