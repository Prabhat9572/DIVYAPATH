// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import space from '../assets/space.mp4'; // adjust the path based on file location


const GeneratedLogo = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="VedRishi Logo"
  >
    <circle cx="50" cy="50" r="45" fill="#A47551" stroke="black" strokeWidth="5" />
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="28" fontFamily="Georgia" dy=".3em">
      ॐ
    </text>
  </svg>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="navbar-container">
      <div className="top-bar">
        {/* Universe Video Background */}
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="top-bar-video-bg">
           <source src={space} type="video/mp4" />

            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content on Top of Video */}
        <div className="logo-title">
          <GeneratedLogo />
          <div className="title">
            <h1>DIVYAPATH</h1>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/ashram" onClick={() => setMobileMenuOpen(false)}>Vedas</Link></li>
          <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          <li><Link to="/join" onClick={() => setMobileMenuOpen(false)}>Join Us</Link></li>
        </ul>

        <button className="donate-btn" aria-label="Donate Button">Donate</button>
      </nav>
    </header>
  );
};

export default Navbar;
