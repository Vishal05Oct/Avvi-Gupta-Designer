// src/Portfolio.js
import React from 'react';
import './Portfolio.css'; // Import the CSS file for styling
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Import images
import bannerImage from '../../Assets/Images/Portfolio- Banner.png'; // Adjust the path to your banner image
import project1 from '../../Assets/Images/First Banner.jpg';
import project2 from '../../Assets/Images/Slider Images/2.jpg';
import project3 from '../../Assets/Images/Slider Images/3.jpg';
import project4 from '../../Assets/Images/Slider Images/4.jpg';
import project5 from '../../Assets/Images/Slider Images/5.jpg';
import project6 from '../../Assets/Images/Slider Images/6.jpg';
import project7 from '../../Assets/Images/Slider Images/7.jpg';
import project8 from '../../Assets/Images/Slider Images/8.jpg';
import project9 from '../../Assets/Images/Slider Images/9.jpg';
import project10 from '../../Assets/Images/Slider Images/10.jpg';


// Define project data with imported images
const projects = [
  { title: 'BABINA BAR', location: '', description: '', image: project1 },
  { title: 'ANAND MANGAL', location: '', description: '', image: project2 },
  { title: 'ANURAG SONI PRESENTATION', location: '', description: '', image: project3 },
  { title: 'FERN SN PETEL', location: '', description: '', image: project4 },
  { title: 'GEHNA JEWELLERS', location: '', description: '', image: project5 },
  { title: 'KRISSH INTERRIORS', location: '', description: '', image: project6 },
  { title: 'LA PINOZ', location: '', description: '', image: project7 },
  { title: 'MANOJ JEWELLERS', location: '', description: '', image: project8 },
  { title: 'NANKANI', location: '', description: '', image: project9 },
  { title: 'OLD TOWN CAFE', location: '', description: '', image: project10 },
];

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className="portfolio-container">
        {/* Banner Section */}
        <div className="banner-section">
          <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>

        {/* Portfolio Section */}
        <h1 className="portfolio-heading">Our Portfolio</h1>
        <p className="portfolio-subtitle">Discover our latest architectural masterpieces</p>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-info">
                <h2 className="portfolio-item-title">{project.title}</h2>
                <p className="portfolio-location">{project.location}</p>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
