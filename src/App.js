// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Ashram from './pages/Ashram';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Join from './pages/Join';

// Optional: Logo component if you want to use it on top
// import Logo from './components/Logo';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Optional: Use <Logo /> if needed */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ashram" element={<Ashram />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
