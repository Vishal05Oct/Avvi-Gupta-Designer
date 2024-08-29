// src/Logo.js
import React from 'react';
import logo from '../../Assets/Images/logo-wbg.png'; // Update path as needed
import './Logo.css'; // Import the CSS file for styling

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Logo;
