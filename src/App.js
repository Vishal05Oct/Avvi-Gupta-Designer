import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SeeMore from './Components/SeeMore/SeeMore';
import Portfolio from './Components/Portfolio/Portfolio';
import AboutUs from './Components/About Us/About';
import ContactUs from './Components/Contact Us/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-detail" element={<SeeMore />} />
        <Route path="/Our-Portfolio" element={<Portfolio />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
