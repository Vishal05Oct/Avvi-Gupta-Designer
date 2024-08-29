import React, { useState } from 'react';
import './Navbar.css'; // Ensure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('has-offcanvas', !isOpen); // Toggle body class
  };

  return (
    <div className="header">
      <div className="header-row row">
        <button className="hamburger-toggle" onClick={toggleOffcanvas}>
          <span className="hamburger-menu">
            <span className="line line--top"></span>
            <span className="line line--middle"></span>
            <span className="line line--bottom"></span>
          </span>
        </button>
      </div>

      <div className={`Site-interface ${isOpen ? 'has-offcanvas' : ''}`}>
        <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
          <nav className="offcanvas-nav">
            <ul className="offcanvas-nav__list">
              <li className="offcanvas-nav__item">
                <a href="#" className="offcanvas-nav__link">Home</a>
              </li>
              <li className="offcanvas-nav__item">
                <a href="#" className="offcanvas-nav__link">About</a>
              </li>
              <li className="offcanvas-nav__item">
                <a href="#" className="offcanvas-nav__link">Portfolio</a>
              </li>
              <li className="offcanvas-nav__item">
                <a href="#" className="offcanvas-nav__link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="toggle-circle">
          <div className="row">
            <svg className="hamburger-toggle__circle" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
