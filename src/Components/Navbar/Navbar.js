import React, { useState } from 'react';
import './Navbar.css'; // Ensure this path is correct
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('has-offcanvas', !isOpen); // Toggle body class
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleOffcanvas(); // Close the menu if it's open
    }
  };

  return (
    <div>
      <div className="header">
        <Logo />
        <div className="header-row row">
          <button
            className="hamburger-toggle"
            onClick={toggleOffcanvas}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
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
                  <Link
                    to="/"
                    className="offcanvas-nav__link"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="offcanvas-nav__item">
                  <Link
                    to="/About-us"
                    className="offcanvas-nav__link"
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                </li>
                <li className="offcanvas-nav__item">
                  {/* <Link
                    to="/Services"
                    className="offcanvas-nav__link"
                    onClick={handleLinkClick}
                  >
                  Services
                  </Link> */}
                </li>
                <li className="offcanvas-nav__item">
                  <Link
                    to="/Our-Portfolio"
                    className="offcanvas-nav__link"
                    onClick={handleLinkClick}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="offcanvas-nav__item">
                  <Link
                    to="/Contact-us"
                    className="offcanvas-nav__link"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="toggle-circle">
            <div className="row">
              <svg className="hamburger-toggle__circle" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
