import React from "react";
import "./Footer.css"
import instagram from "../../Assets/Images/socialMedia/instagram.png";
import facebook from "../../Assets/Images/socialMedia/facebook.png";
import linkedin from "../../Assets/Images/socialMedia/linkedin.png";
import twitter from "../../Assets/Images/socialMedia/twitter.png";

function Footer() {
    return (
      <footer>
        <div className="socialMedia text-center">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className="socialMedia social-media-icon" src={facebook} alt="Facebook Icon"></img>
          </a>
          <a href="https://www.instagram.com/avvi_gupta/?igsh=MWVqNmxnN2dvNnBzMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img className="socialMedia social-media-icon" src={instagram} alt="Instagram Icon"></img>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className="socialMedia social-media-icon" src={linkedin} alt="LinkedIn Icon"></img>
          </a>
        </div>
       <div className="text-center text-dark p-3">
          © {new Date().getFullYear()} Avvi Gupta Designer. All Rights Reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;