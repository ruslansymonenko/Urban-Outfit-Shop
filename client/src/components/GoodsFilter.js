import searchImg from '../assets/icons/search.svg'

const GoodsFilter = () => {
  return(
    <div className="filter">
      <div className="filter-search">
        <input className="filter-search__input" type="text" />
        <button className="filter-search__btn">
          <img src={searchImg} alt="" />
        </button>
      </div>
      <h4 className="filter-amount">
        Were finded 250 items
      </h4>
      <div className="filter-options">
        <div className="filter-options__item">
          <h5 className="filter-options__title">Type</h5>
          <div className="filter-options__item-checkboxes">
            <label htmlFor="all-types">All types</label>
            <input type="checkbox" className="filter-options__item-checkbox" name="all-types"/>
          </div>
          <div className="filter-options__item-checkboxes">
            <label htmlFor="shoes">Shoes</label>
            <input type="checkbox" className="filter-options__item-checkbox" name="shoes"/>
          </div>
          <div className="filter-options__item-checkboxes">
            <label htmlFor="clothes">Clothes</label>
            <input type="checkbox" className="filter-options__item-checkbox" name="clothes"/>
          </div>
        </div>

        <div className="filter-options__item">
          <h5 className="filter-options__title">Brand</h5>
          <div className="filter-options__item-checkboxes">
            <label htmlFor="all-brands">All brands</label>
            <input type="checkbox" className="filter-options__item-checkbox" name="all-brands"/>
          </div>
          <div className="filter-options__item-checkboxes">
            <label htmlFor="nike">Nike</label>
            <input type="checkbox" className="filter-options__item-checkbox" name="nike"/>
          </div>
          <div className="filter-options__item-checkboxes">
            <label htmlFor="adidas">Adidas</label>
            <input type="checkbox" className="filter-options__item-checkbox" name="adidas"/>
          </div>
          <div className="filter-options__item-checkboxes">
            <label htmlFor="jordan">Jordan</label>
            <input type="checkbox" className="filter-options__item-checkbox" name="jordan"/>
          </div>
          <div className="filter-options__item-checkboxes">
            <label htmlFor="new-balance">New Balance</label>
            <input type="checkbox" className="filter-options__item-checkbox" name="new-balance"/>
          </div>
        </div>

        <div className="filter-options__item">
          <h5 className="filter-options__title">Price</h5>
          <span className="filter-options__price">200</span>
          <input className="filter-options__price-range" type="range" min="0" max="1000"/>
        </div>
      </div>
    </div>
  )
}

export {GoodsFilter};