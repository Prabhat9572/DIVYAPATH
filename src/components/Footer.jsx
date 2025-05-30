import React from 'react';
import '../styles/Footer.scss';
import vedicImage from '../assets/image.png'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-image">
        <img src={vedicImage} alt="Vedic Path Banner" />
      </div>

      <div className="footer-content">
        <div className="footer-about">
          <h3>About VedRishi Foundation</h3>
          <p>
            We are dedicated to spreading the ancient Vedic wisdom and reconnecting humanity to its spiritual roots through digital platforms, community learning, and spiritual practices.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/vedas">Explore Vedas</a></li>
            <li><a href="/services">Spiritual Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@vedrishi.org</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Varanasi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VedRishi Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
