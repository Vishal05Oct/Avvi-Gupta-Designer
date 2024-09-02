import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import bannerImage from '../../Assets/Images/contact banner.jpg'; // Replace with the correct path to your image

const ContactPage = () => {
  return (
    <div>
        <Navbar />
    <div className="contact-page">
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>
      <div className="content-container">
        <div className="left-section">
          <h2>Let’s connect us</h2>
          <div className="contact-info">
            <p className='india-text'><strong>India</strong></p>
            <p>D-65, Udyog Vihar, Phase-V, Sector-19,<br />Gurgaon, Haryana, 122016</p>
            <button className="map-button">Find us on the map</button>
            <p className='contact-no'><a href="tel:+918368163883">+91 8368163883</a></p>
            <p className='email'><a href="mailto:connect@theagencyway.co.in">connect@theagencyway.co.in</a></p>
          </div>
        </div>
        <div className="right-section">
          <form className="contact-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Contact number" required />
            <input type="text" placeholder="Company Name" required />
            <select required>
              <option value="" disabled selected>Choose a service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
            <textarea placeholder="Write something yourself" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
