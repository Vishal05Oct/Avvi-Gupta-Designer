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
  { title: 'Modern Villa', location: 'Miami, USA', description: 'A luxury modern villa with a sleek design.', image: project1 },
  { title: 'Urban Apartment', location: 'New York, USA', description: 'Contemporary urban apartment in the heart of NYC.', image: project2 },
  { title: 'Eco-Friendly House', location: 'Vancouver, Canada', description: 'A sustainable and eco-friendly residential project.', image: project3 },
  { title: 'Corporate Office', location: 'Tokyo, Japan', description: 'An innovative and modern office space for a tech company.', image: project4 },
  { title: 'Luxury Hotel', location: 'Paris, France', description: 'A five-star luxury hotel in the heart of Paris.', image: project5 },
  { title: 'Beachfront Villa', location: 'Malibu, USA', description: 'An exclusive villa overlooking the Pacific Ocean.', image: project6 },
  { title: 'Historical Renovation', location: 'Rome, Italy', description: 'Restoration of a historic building in central Rome.', image: project7 },
  { title: 'Luxury Penthouse', location: 'London, UK', description: 'A top-floor penthouse with panoramic views.', image: project8 },
  { title: 'Commercial Complex', location: 'Dubai, UAE', description: 'A futuristic commercial complex in downtown Dubai.', image: project9 },
  { title: 'Suburban Home', location: 'Sydney, Australia', description: 'A spacious suburban family home with modern amenities.', image: project10 },
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
