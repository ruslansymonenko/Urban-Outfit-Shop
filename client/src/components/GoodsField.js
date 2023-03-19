import { GoodsFilter } from "./GoodsFilter";
import { GoodsList } from "./GoodsList";

const GoodsField = ({goods}) => {
  console.log(goods)

  return (
    <section className="goods">
      <div className="container">
        <div className="goods-content">
          <GoodsFilter/>
          <GoodsList/>
        </div>
      </div>
    </section>
  )
}

export {GoodsField};

