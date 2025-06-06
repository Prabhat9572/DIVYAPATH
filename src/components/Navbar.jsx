import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import space from '../assets/space.mp4'; // Adjust path if needed

const GeneratedLogo = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="VedRishi Logo"
  >
    <circle cx="50" cy="50" r="45" fill="#A47551" stroke="black" strokeWidth="5" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="white"
      fontSize="28"
      fontFamily="Georgia"
      dy=".3em"
    >
      ॐ
    </text>
  </svg>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();  // useNavigate hook

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  // New function for Donate button click
  const handleDonateClick = () => {
    closeMenu();            // Close mobile menu if open
    navigate('/donate');    // Navigate to Donate page route
  };

  return (
    <header className="navbar-container">
      <div className="top-bar">
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="top-bar-video-bg">
            <source src={space} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="logo-title">
          <GeneratedLogo />
          <div className="title">
            <h1>DIVYAPATH</h1>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="social-icons">
          <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/vedas" onClick={closeMenu}>
              Vedas
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        <button
          className="donate-btn"
          aria-label="Donate Button"
          onClick={handleDonateClick}  // Use the new function here
        >
          Donate
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
