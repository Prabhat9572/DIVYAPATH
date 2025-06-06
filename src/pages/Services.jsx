// src/components/Services.jsx
import React from 'react';
import '../styles/Services.scss';
import { FaBook, FaStar, FaGem, FaJedi } from 'react-icons/fa'; // Replaced FaAsteroid with FaJedi

const servicesData = [
  {
    icon: <FaBook />,
    title: "Vedic Knowledge",
    description: "Explore the sacred Vedas, Upanishads, and scriptures with curated content and translations."
  },
  {
    icon: <FaGem />,
    title: "Buy Stones",
    description: "Purchase 100% original, energized gemstones with expert suggestions based on your horoscope."
  },
  {
    icon: <FaJedi />,
    title: "Horoscope & Kundali",
    description: "Get your detailed Janam Kundali, daily rashifal, and compatibility reports instantly."
  },
  {
    icon: <FaStar />,
    title: "Spiritual Guidance",
    description: "Book sessions with spiritual guides to get clarity and support on life’s path."
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
