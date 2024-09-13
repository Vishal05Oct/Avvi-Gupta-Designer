import React, { useState, useEffect } from 'react';
import './Home.css'; // Ensure CSS transitions are defined here
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img1 from './../../Assets/Images/First Banner.jpg';
import img2 from './../../Assets/Images/Slider Images/2.jpg';
import img3 from './../../Assets/Images/Slider Images/3.jpg';
import img4 from './../../Assets/Images/Slider Images/4.jpg';
import img5 from './../../Assets/Images/Slider Images/5.jpg';
import img6 from './../../Assets/Images/Slider Images/6.jpg';
import img7 from './../../Assets/Images/Slider Images/7.jpg';
import img8 from './../../Assets/Images/Slider Images/8.jpg';
import img9 from './../../Assets/Images/Slider Images/9.jpg';
import img10 from './../../Assets/Images/Slider Images/10.jpg';
// import videoSrc from './../../Assets/Videos/interiors.mp4';
import videoSrc1 from './../../Assets/Videos/Avvi Gupta.mp4';

const ImageSlider = () => {
  const images = [
    { src: videoSrc1, isVideo: true },
    { src: img1, title: '', type: 'BABINA BAR', description: ' Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img2, title: '', type: 'ANAND MANGAL', description: 'Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img3, title: '', type: 'ANURAG SONI PRESENTATION', description: 'Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img4, title: '', type: 'FERN SN PETEL', description: 'Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img5, title: '', type: 'GEHNA JEWELLERS', description: 'Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img6, title: '', type: 'KRISSH INTERRIORS ', description: 'Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img7, title: '', type: 'LA PINOZ', description: 'Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img8, title: '', type: 'MANOJ JEWELLERS', description: 'Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img9, title: '', type: 'NANKANI', description: 'Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },
    { src: img10, title:'', type: 'OLD TOWN CAFE', description:'Explore the Elegance of Architecture By Avvi Gupta Timeless Design Meets Modern Inspiration Our elegant property features innovative spaces that combine design with functionality, creating refined, upscale environments. Each project is a testament to architecture, enhancing luxury living and redefining design excellence. Each detail is meticulously curated to inspire and leave a lasting impression.', seeMoreLink: '/SeeMore', isVideo: false },  ];

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
      <Footer />
    </div>
  );
};

export default ImageSlider;