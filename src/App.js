import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SeeMore from './Components/SeeMore/SeeMore';
import Portfolio from './Components/Portfolio/Portfolio';
function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/SeeMore" element={<SeeMore />} />
    <Route exact path="/Our-Portfolio" element={<Portfolio />} />
    </Routes>
    </Router>
  );
}

export default App;
