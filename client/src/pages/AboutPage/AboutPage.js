import { useState } from 'react';
import './AboutPage.css';

import openImg from '../../assets/images/aboutPageImgs/stories/open.jpg';
import onlineImg from '../../assets/images/aboutPageImgs/stories/online.jpg';
import creativityImg from '../../assets/images/aboutPageImgs/stories/creativity.jpg';
import styleImg from '../../assets/images/aboutPageImgs/stories/style.jpg';
import changeImg from '../../assets/images/aboutPageImgs/stories/change.jpg';

import startImg from '../../assets/icons/star.svg';

const AboutPage = () => {
  const [progress, setProgress] = useState(1);
  const [storyBar, setStoryBar] = useState(10);
  const [currentStory, setCurrentStory] = useState('0');

  const points = [1, 2, 3, 4, 5];
  const stories = [
    {title: '2010', text: 'Urban Outfit is founded with a mission to offer the best clothing and shoe options for people who want to express themselves with unique styles.', img: openImg},
    {title: '2015', text: 'Urban Outfit launches its online store, expanding its reach beyond the local community and making its products available to customers worldwide.', img: onlineImg},
    {title: '2017', text: 'We introduce our own in-house brand, featuring exclusive designs and collaborations with up-and-coming fashion designers.', img: creativityImg},
    {title: '2019', text: 'Urban Outfit is recognized as one of the top online clothing and shoe stores, thanks to our commitment to quality, style, and exceptional customer service.', img: styleImg},
    {title: '2023', text: 'We continue to innovate and expand, with new product lines, exclusive collections, and a growing community of loyal customers who share our passion for fashion.', img: changeImg},
  ];
  const reviews = [
    {user: 'Alex', grade: 5, review: 'Very cool store, I\'ve been shopping here for many years'},
    {user: 'Sara', grade: 4, review: 'I like their assortment, but I their like fast delivery'},
    {user: 'Garry', grade: 4.5, review: 'Good product, friendly staff'}
  ]


  const handleProgressBar = (value) => {
    switch(value) {
      case 1:
        setStoryBar(10);
        setCurrentStory('0');
        break
      case 2:
        setStoryBar(30);
        setCurrentStory('-100');
        break
      case 3:
        setStoryBar(50);
        setCurrentStory('-200');
        break
      case 4:
        setStoryBar(70);
        setCurrentStory('-300');
        break
      case 5:
        setStoryBar(100);
        setCurrentStory('-400');
        break
      default:
        setStoryBar(10);
        setCurrentStory('0');
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
                style={{width: `${storyBar}%`}}>
              </div>
            </div>
            <div className="about-story__stories">
                <div 
                  className="about-story__stories-container"
                  style={{transform: `translateX(${currentStory}%)`}}>
                  {
                    stories.map((story, index) => {
                      return (
                        <div 
                          className="about-story__stories-item"
                          key={index}>
                          <h3
                            className='about-story__stories-title'>
                            {story.title}
                          </h3>
                          <div className="about-story__stories-content">
                            <p className='about-story__stories-text'>
                              {story.text}
                            </p>
                            <img className='about-story__stories-img' src={story.img} alt="storiesImg" />
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
            </div>
          </div>
          <div className="about-reviews">
            <h2 className='about-reviews__title'>
              Let's read what our clients say about us
            </h2>
            <div className="about-reviews__items">
              {
                reviews.map(review => {
                  return(
                    <div className="about-reviews__item">
                      <h4 className="about-reviews__item-user">
                        {review.user}
                      </h4>
                      <div className="about-reviews__item-grade">
                        <span>
                          {review.grade}
                        </span>
                        <img src={startImg} alt="star"/>
                      </div>
                      <p className="about-reviews__item-text">
                        {review.review}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {AboutPage}