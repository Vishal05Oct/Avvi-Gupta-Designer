import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
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
            <p>Shop no-208, A-market, sector-6, bhilai,<br /> Chhattisgarh, 490006</p>
            {/* <button className="map-button">Find us on the map</button> */}
            <p className='contact-no'><a href="tel:+917509999007">+91 7509999007</a></p>
            {/* <p className='email'><a href="mailto:connect@theagencyway.co.in">connect@theagencyway.co.in</a></p> */}
          </div>
        </div>
        <div className="right-section">
          <form className="contact-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Contact number" required />
            <input type="text" placeholder="Company Name" required />
            <textarea placeholder="Write something yourself" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactPage;
