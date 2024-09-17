import React from 'react';
import './SeeMore.css'; // Your CSS file
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Importing images
import Banner1 from './../../Assets/Images/Banner1.jpg';
import Banner2 from './../../Assets/Images/Banner2.jpg';
import P1 from '../../Assets/Images/Portfolio/P1.jpg';
import P2 from '../../Assets/Images/Portfolio/P2.jpg';
import P3 from '../../Assets/Images/Portfolio/P3.jpg';
import P4 from '../../Assets/Images/Portfolio/P4.jpg';
import P5 from '../../Assets/Images/Portfolio/P5.jpg';
import P6 from '../../Assets/Images/Portfolio/P6.jpg';
import P7 from '../../Assets/Images/Portfolio/P7.jpg';
import P8 from '../../Assets/Images/Portfolio/P8.jpg';

const SeeMore = () => {
  return (
    <div>
      <Navbar />
      {/* Banner Image */}
      <section className="banner">
        <img src={Banner1} alt="Project Banner" />
      </section>

      {/* Project Title & Description */}
      <section className="project-info">
        <div className="container">
          <h1 className="project-title">Architectural Masterpiece</h1>
          <p className="project-description">
            This architectural masterpiece represents the pinnacle of innovative design and sophisticated craftsmanship. Conceived by visionary architects, it seamlessly integrates cutting-edge technology with timeless elegance, setting a new standard in modern architecture. The structure's exterior is a harmonious blend of sleek lines and bold geometric forms, creating a dynamic and captivating visual impact. The façade, adorned with high-quality materials and intricate detailing, exudes a sense of grandeur and refinement. Large glass panels allow natural light to flood the interior, offering breathtaking views of the surrounding landscape and establishing a seamless connection between indoor and outdoor spaces. Inside, the layout is meticulously planned to enhance functionality and aesthetic appeal. Expansive open spaces are punctuated by elegant, bespoke finishes and state-of-the-art fixtures. The use of natural materials such as marble, wood, and stone creates a warm and inviting atmosphere, while innovative design elements, such as floating staircases and cantilevered terraces, add a sense of drama and sophistication.
            Every aspect of the interior design has been carefully curated to promote a harmonious living experience. From the grand entrance foyer to the luxurious living areas and serene private spaces, each room is a testament to the meticulous attention to detail and unparalleled quality. The integration of smart home technology ensures that every convenience is at the fingertips of its inhabitants, enhancing both comfort and efficiency.
            The architectural masterpiece also emphasizes sustainability, incorporating eco-friendly practices and materials. Energy-efficient systems, green roofs, and rainwater harvesting are seamlessly integrated into the design, reflecting a commitment to environmental stewardship without compromising on luxury or style.
            This structure is not merely a building; it is an artistic statement, a testament to architectural innovation, and a sanctuary that enriches the lives of those who dwell within its walls. Its design embodies the perfect fusion of form and function, creating an enduring legacy that will inspire and captivate for generations to come.
          </p>
        </div>
      </section>

      {/* Second Banner Image */}
      <section className="banner secondary">
        <img src={Banner2} alt="Secondary Banner" />
      </section>

      {/* Short Description */}
      <section className="short-description">
        <div className="container">
          <p>
            This project showcases an innovative design approach, incorporating modern aesthetics with sustainable practices. The integration of advanced technologies and materials highlights the unique vision of the architects.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio1">
        <div className="container">
          <h2 className="portfolio-title">Our Works</h2>
          <p className="portfolio-intro">
            Explore some of our most notable projects. Each piece reflects our commitment to architectural excellence and creative design.
          </p>
          <div className="grid">
            <div className="grid-item">
              <img src={P1} alt="Urban Oasis" />
              <div className="overlay">
                <h3>Urban Oasis</h3>
                <p>New York City</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={P2} alt="Modern Retreat" />
              <div className="overlay">
                <h3>Modern Retreat</h3>
                <p>Los Angeles</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={P3} alt="Seaside Haven" />
              <div className="overlay">
                <h3>Seaside Haven</h3>
                <p>Miami</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={P4} alt="Mountain Escape" />
              <div className="overlay">
                <h3>Mountain Escape</h3>
                <p>Denver</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={P5} alt="Minimalist Charm" />
              <div className="overlay">
                <h3>Minimalist Charm</h3>
                <p>San Francisco</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={P6} alt="Art Deco Delight" />
              <div className="overlay">
                <h3>Art Deco Delight</h3>
                <p>Chicago</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={P7} alt="Contemporary Vision" />
              <div className="overlay">
                <h3>Contemporary Vision</h3>
                <p>Seattle</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={P8} alt="Elegant Heights" />
              <div className="overlay">
                <h3>Elegant Heights</h3>
                <p>Boston</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SeeMore;
