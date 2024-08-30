import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import bannerImage from '../../Assets/Images/Banner2.jpg';
import aboutImage from '../../Assets/Images/Renovations.jpg';
import './About.css';

const AboutUs = () => {
  return (
    <div>
        <Navbar />
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="about-us-container"
    >
      {/* Banner Section */}
      <div className="banner-container">
        <img src={bannerImage} alt="About Us Banner" className="banner-image" />
        <div className="banner-overlay">
          <h1 className="banner-title">About Us</h1>
        </div>
      </div>

      {/* Left-Side Image and Right-Side Text Section */}
      <div className="about-us-section">
        <div className="about-us-content">
          <motion.div
            className="about-us-image"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={aboutImage} alt="About Us" />
          </motion.div>
          <div className="about-us-text">
            <h2>About Our Company</h2>
            <p>
              We are a cutting-edge architecture design firm dedicated to transforming ideas into reality.
              Our mission is to create spaces that inspire and resonate with those who experience them.
              With a commitment to innovation and excellence, our team of experts works tirelessly
              to deliver projects that exceed expectations.
            </p>
            <p>
              From residential to commercial projects, we take pride in our ability to understand
              our clients' needs and turn their visions into tangible, breathtaking structures.
              Our design philosophy centers around sustainability, aesthetics, and functionality,
              ensuring that each project is not only beautiful but also environmentally responsible.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-box">
            <h3>Residential Design</h3>
            <p>We create unique and personalized residential spaces that reflect your lifestyle and taste.</p>
          </div>
          <div className="service-box">
            <h3>Commercial Design</h3>
            <p>Our commercial designs are innovative, functional, and tailored to meet business needs.</p>
          </div>
          <div className="service-box">
            <h3>Landscape Design</h3>
            <p>We design sustainable and aesthetically pleasing landscapes that blend with the environment.</p>
          </div>
          <div className="service-box">
            <h3>Interior Design</h3>
            <p>Our interior design solutions are both functional and visually striking, tailored to your needs.</p>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default AboutUs;
