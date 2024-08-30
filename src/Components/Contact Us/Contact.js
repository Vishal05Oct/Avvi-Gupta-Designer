import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import bannerImage from '../../Assets/Images/Contactus.jpg';
import './Contact.css';

const ContactUs = () => {
  return (
    <div>
        <Navbar />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact-us-container"
    >
      {/* Banner Section */}
      <div className="contact-banner">
        <img src={bannerImage} alt="Contact Us Banner" className="contact-banner-image" />
        <div className="banner-overlay">
          <h1 className="banner-title">Contact Us</h1>
        </div>
      </div>
      
      {/* Contact Form and Information Section */}
      <div className="contact-content">
        <motion.div
          className="contact-form"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Get In Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="submit-btn"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        
        <motion.div
          className="contact-info"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 Architecture St, Design City, 45678</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@architecturefirm.com</p>
          <p><strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM</p>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default ContactUs;
