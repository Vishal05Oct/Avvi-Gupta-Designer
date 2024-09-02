import React, { useState, useRef } from 'react';
import './Home.css';
import Navbar from './../Navbar/Navbar';
import img2 from './../../Assets/Images/img2.jpg';
import img3 from './../../Assets/Images/img3.jpg';
import img4 from './../../Assets/Images/img4.jpg';
import videoSrc from './../../Assets/Videos/interiors.mp4'; // Path to your video file

const ImageSlider = () => {
  const [images] = useState([
    { src: videoSrc, isVideo: true },
    { src: img2, title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img4, title: 'MAGIC SLIDER', type: 'PLANT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img3, title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.', seeMoreLink: '/SeeMore', isVideo: false }
  ]);
  
const slider = document.querySelector('.slider')
const sliderList = slider.querySelector('.slider .list')
const thumbnail = document.querySelector('.slider .thumbnail')
const thumbnailItems = thumbnail.querySelectorAll('.item')
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  const moveSlider = (direction) => {
    const sliderItems = sliderList.querySelectorAll('.item')
    const thumbnailItems = document.querySelectorAll('.thumbnail .item')
    if(direction === 'next'){
      sliderList.appendChild(sliderItems[0])
      thumbnail.appendChild(thumbnailItems[0])
      slider.classList.add('next')
  } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1])
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
      slider.classList.add('prev')
  }


  slider.addEventListener('animationend', function() {
      if(direction === 'next'){
          slider.classList.remove('next')
      } else {
          slider.classList.remove('prev')
      }
  }, {once: true})
  };

  return (
    <div>
      <Navbar/>
      <div className="slider">
        <div className="list" ref={sliderRef}>
          {images.map((image, index) => (
            <div className="item" key={index}>
              {image.isVideo ? (
                <video 
                  src={image.src} 
                  muted 
                  loop 
                  autoPlay 
                  playsInline
                  className="video-slide"
                />
              ) : (
                <img src={image.src} alt="" />
              )}
              <div className="content">
                <div className="title">{image.title}</div>
                <div className="type">{image.type}</div>
                <div className="description">{image.description}</div>
                {/* Conditionally render the SEE MORE button only if it's not a video */}
                {!image.isVideo && (
                  <div className="see-more">
                    <a href={image.seeMoreLink} className="see-more-btn">
                      SEE MORE
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          {images.map((image, index) => (
            <div className="item" key={index}>
              {image.isVideo ? (
                <video 
                  src={image.src} 
                  muted 
                  loop 
                  autoPlay 
                  playsInline
                  className="thumbnail-video"
                />
              ) : (
                <img src={image.src} alt="" />
              )}
            </div>
          ))}
        </div>

        <div className="nextPrevArrows">
          <button className="prev" onClick={() => moveSlider('prev')}>&lt;</button>
          <button className="next" onClick={() => moveSlider('next')}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
