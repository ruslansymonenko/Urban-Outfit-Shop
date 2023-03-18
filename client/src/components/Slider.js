import { useState } from 'react';

import sliderImg1 from '../assets/images/slider/slider-1.jpg';
import sliderImg2 from '../assets/images/slider/slider-2.jpg';
import sliderImg3 from '../assets/images/slider/slider-3.jpg';

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
      <div className="slider-container">
        <div className="slider-contnent">
          <div className="slider-img">
            {sliderItems.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`slider-img-${index}`}
                  className={index === sliderItem ? "active" : "inactive"}
                />
              ))}
          </div>
          <button 
            className="slider-btn"
            onClick={prevSlide}
            >
            
          </button>
          <button 
            className="slider-btn"
            onClick={nextSlide}
            >

          </button>
        </div>
      </div>
    </div>
  )
}

export {Slider}