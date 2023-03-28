import { useState } from 'react';

import './Slider.css';

import sliderImg1 from '../../assets/images/slider/slider-1.jpg';
import sliderImg2 from '../../assets/images/slider/slider-2.jpg';
import sliderImg3 from '../../assets/images/slider/slider-3.jpg';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

const Slider = () => {
  const [sliderItem, setSliderItem] = useState(0);

  const sliderItems = [sliderImg1, sliderImg2, sliderImg3];

  function nextSlide () {
    if(sliderItem < (sliderItems.length - 1)) {
      setSliderItem(sliderItem + 1)
    } else {
      setSliderItem(0)
    }
  }

  function prevSlide () {
    if(sliderItem > 0) {
      setSliderItem(sliderItem - 1)
    } else {
      setSliderItem(sliderItems.length - 1)
    }
  }

  return (
    <div className="slider">
      <div className="container">
        <div className="slider-contnent">
          <div className="slider-imgs" 
          style={{transform: `translateX(${sliderItem * - 100}%)`}}>
            <img 
              className='slider-img' 
              src={sliderItems[0]} 
              alt="slider img" />
            <img 
              className='slider-img' 
              src={sliderItems[1]} 
              alt="slider img" />
            <img 
              className='slider-img' 
              src={sliderItems[2]} 
              alt="slider img" />
          </div>
        </div>
      </div>
      <button 
        className="slider-btn slider-btn__prev"
        onClick={prevSlide}
        >
        <img className='slider-btn__arrow' src={arrowLeft} alt="" />
      </button>
      <button 
        className="slider-btn slider-btn__next"
        onClick={nextSlide}
        >
        <img className='slider-btn__arrow' src={arrowRight} alt="" />
      </button>
    </div>
  )
}

export {Slider}