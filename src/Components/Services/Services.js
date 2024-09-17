// Portfolio.js
import React from 'react';
import './Services.css'; // Ensure your CSS file is correctly imported
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// Import your images
import Banner from '../../Assets/Images/About Banner.png'; // Your banner image
import P1 from '../../Assets/Images/Portfolio/P1.jpg';
import P2 from '../../Assets/Images/Portfolio/P2.jpg';
import P3 from '../../Assets/Images/Portfolio/P3.jpg';
import P4 from '../../Assets/Images/Portfolio/P4.jpg';
import P5 from '../../Assets/Images/Portfolio/P5.jpg';
import P6 from '../../Assets/Images/Portfolio/P6.jpg';
import P7 from '../../Assets/Images/Portfolio/P7.jpg';
import P8 from '../../Assets/Images/Portfolio/P8.jpg';

const Portfolio = () => {
  const projects = [
    { img: P1, title: 'Concept Design', description: 'Developing initial design ideas and architectural concepts.' },
    { img: P2, title: 'Schematic Design', description: 'Creating detailed plans and drawings for the layout and structure of a project.' },
    { img: P3, title: 'Design Development', description: 'Refining design details and materials, including structural, mechanical, and electrical systems.' },
    { img: P4, title: 'Construction Documents', description: 'Producing detailed drawings and specifications for construction.' },
    { img: P5, title: 'Project Management', description: 'Overseeing the construction process, coordinating with contractors, and ensuring project milestones are met.' },
    { img: P6, title: 'Feasibility Studies', description: 'Analyzing project viability and cost estimates.' },
    { img: P7, title: 'Contemporary Vision', description: 'A cutting-edge contemporary design that reflects the innovative spirit of Seattle.' },
    { img: P8, title: 'Space Planning', description: 'Arranging furniture and elements to optimize functionality and flow.' },
    { img: P8, title: 'Concept Development', description: 'Creating a vision for the interior design, including color schemes, materials, and finishes.' },
    { img: P8, title: 'Design Schemes', description: 'Developing detailed design plans, including furniture, fixtures, and equipment.' },
    { img: P8, title: 'Material and Finish Selection', description: 'A Choosing materials and finishes that align with the design vision and practical needs.' },
    { img: P8, title: 'Lighting Design', description: 'Designing lighting plans to enhance the atmosphere and functionality of spaces.' },
    { img: P8, title: 'Furniture and Decor', description: 'Selecting and sourcing furniture, artwork, and other decorative elements.' },
    { img: P8, title: 'Renovation and Remodeling', description: 'Managing interior renovations and upgrades.' },
    { img: P8, title: 'Project Coordination', description: 'Working with contractors, suppliers, and other professionals to ensure design execution.' },
  ];

  return (
    <div>
        <Navbar/>
    <section className="portfolio">
      <div className="banner">
        <img src={Banner} alt="Portfolio Banner" className="banner-image" />
      </div>
      <div className="container">
        <h2 className="portfolio-title">Our Works</h2>
        <p className="portfolio-intro">
          Explore some of our most notable projects. Each piece reflects our commitment to architectural excellence and creative design.
        </p>
        <div className="grid">
          {projects.map((project, index) => (
            <div className="grid-item" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Portfolio;
