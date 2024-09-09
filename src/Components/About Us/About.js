import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
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
            We provide Interior and architecture consultancy involves providing expert advice and services in designing and planning spaces. This includes both interior design—focused on aesthetics, functionality, and layout of indoor spaces—and architecture, which encompasses the overall structure, form, and external appearance of buildings. Consultants in this field work with clients to understand their needs and preferences, create design concepts, and oversee the implementation of those designs to ensure they meet both aesthetic and functional requirements. Their work can range from residential and commercial spaces to public buildings and urban planning projects.
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
            <h3>Interior Design Services</h3>
            <p>Space Planning: Arranging furniture and elements to optimize functionality and flow.</p>
          </div>
          <div className="service-box">
            <h3>Concept Development</h3>
            <p>Creating a vision for the interior design, including color schemes, materials, and finishes.</p>
          </div>
          <div className="service-box">
            <h3>Design Schemes</h3>
            <p>Developing detailed design plans, including furniture, fixtures, and equipment.</p>
          </div>
          <div className="service-box">
            <h3>Material and Finish Selection </h3>
            <p>Choosing materials and finishes that align with the design vision and practical needs.</p>
          </div>
        </div>
      </div>
    </motion.div>
    <Footer />
    </div>
  );
};

export default AboutUs;
