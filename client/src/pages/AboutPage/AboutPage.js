import { useState } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const [progress, setProgress] = useState(1);
  const [storyBar, setStoryBar] = useState(10);

  const points = [1, 2, 3, 4, 5];

  const handleProgressBar = (value) => {
    switch(value) {
      case 1:
        setStoryBar(10);
        break
      case 2:
        setStoryBar(30);
        break
      case 3:
        setStoryBar(50);
        break
      case 4:
        setStoryBar(70);
        break
      case 5:
        setStoryBar(100);
        break
      default:
        setStoryBar(10);
    }
  }

  const handleProgress = (event) => {
    let currentProgress = parseInt(event.target.textContent);
    setProgress(currentProgress);
    handleProgressBar(currentProgress);
  }

  return(
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-story">
          <h2 className="about-story__title">
            Our Story Timeline
          </h2>
          <div className="about-story__scale">
            <ul className='about-story__scale-points'>
              {points.map(point => {
                return progress === point ? (
                  <li 
                  className='about-story__scale-point about-story__scale-point--active'
                  onClick={handleProgress}
                  key={point}>
                  {point}
                  </li>
                ) : (
                  <li 
                  className='about-story__scale-point'
                  onClick={handleProgress}
                  key={point}>
                  {point}
                  </li>
                )
              })} 
            </ul>
            <div 
              className="about-story__scale-bar"
              style={{width: `${storyBar}%`}}></div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {AboutPage}