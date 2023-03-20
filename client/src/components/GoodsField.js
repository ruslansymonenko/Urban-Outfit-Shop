import { useState } from "react";
import { GoodsFilter } from "./GoodsFilter";
import { GoodsList } from "./GoodsList";

const GoodsField = ({goods}) => {
  const [goodsData, setGoodsData] = useState([]);

  function setAllGoods () {
    let allGoods = goods.map((item, index) => {
      let goodsObj = {...item};
      console.log(goodsObj);
      return goodsObj
    })

    // console.log(allGoods);
  }

  if(goods) {
    setAllGoods();
  }

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

