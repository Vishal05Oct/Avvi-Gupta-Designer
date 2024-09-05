import React, { useState, useEffect } from 'react';
import './Home.css'; // Ensure CSS transitions are defined here
import Navbar from './../Navbar/Navbar';
import img2 from './../../Assets/Images/img2.jpg';
import img3 from './../../Assets/Images/img3.jpg';
import img4 from './../../Assets/Images/img4.jpg';
import videoSrc from './../../Assets/Videos/interiors.mp4';

const ImageSlider = () => {
  const images = [
    { src: videoSrc, isVideo: true },
    { src: img2, title: 'MAGIC SLIDER', type: 'Golden Image', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img4, title: 'MAGIC SLIDER', type: 'White Building', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img3, title: 'MAGIC SLIDER', type: 'Sketch', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.', seeMoreLink: '/SeeMore', isVideo: false }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('');

  const moveSlider = (direction) => {
    setAnimationDirection(direction);
    setCurrentIndex((prevIndex) => {
      const newIndex = direction === 'next'
        ? (prevIndex + 1) % images.length
        : (prevIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  };

  const getThumbnails = () => {
    // console.log(currentIndex)
    // const thumbnailsWithoutCurrent = images.filter((_, index) => index !== currentIndex);
    // return [...thumbnailsWithoutCurrent, images[currentIndex]];
    // Validate input
    
    // Create a copy of the original list

    const list2 = [...images];
    if (animationDirection === 'next' || animationDirection === ''){
    // Calculate the effective shift
    const effectiveShift = (currentIndex + 1) % list2.length;
    
    // Perform the shift
    const shiftedList = list2.slice(effectiveShift).concat(list2.slice(0, effectiveShift));
    return shiftedList;
    }
    else if(animationDirection === 'prev'){
      // Calculate the effective shift
    const effectiveShift = (currentIndex + 1) % list2.length;
    
    // Perform the shift
    const shiftedList = list2.slice(effectiveShift).concat(list2.slice(0, effectiveShift));
    return shiftedList;
    }
    };

  const thumbnails = getThumbnails();

  // Reset animation direction after transition
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationDirection('');
    }, 500); // Match this duration to your CSS animation duration
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div>
      <Navbar />
      <div className={`slider ${animationDirection}`}>
        <div className="list">
          <div className="item">
            {images[currentIndex].isVideo ? (
              <video
                src={images[currentIndex].src}
                muted
                loop
                autoPlay
                playsInline
                className="video-slide"
              />
            ) : (
              <img src={images[currentIndex].src} alt="" />
            )}
            <div className="content">
              <div className="title">{images[currentIndex].title}</div>
              <div className="type">{images[currentIndex].type}</div>
              <div className="description">{images[currentIndex].description}</div>
              {!images[currentIndex].isVideo && (
                <div className="see-more">
                  <a href={images[currentIndex].seeMoreLink} className="see-more-btn">
                    SEE MORE
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="thumbnail">
          {thumbnails.map((image, index) => (
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