// src/components/ServiceIcons.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServiceIcons.scss';
import {
  CircleDashed,
  Gem,
  Hash,
  Flame,
  Watch,
  Crown,
  Book,
  ScrollText,
  BookOpen,
  FileText,
  ShoppingBag,
  SunMoon,
} from 'lucide-react';

const services = [
  { icon: <CircleDashed />, label: 'Astrology', url: '/astrology' },
  { icon: <Hash />, label: 'Numerology', url: '/numerology' },
  { icon: <Gem />, label: 'Gemstone', url: '/gemstone' },
  { icon: <Crown />, label: 'Rudraksha', url: '/rudraksha' },
  { icon: <Watch />, label: 'Bracelets', url: '/bracelets' },
  { icon: <Flame />, label: 'Yagya | Puja', url: '/yagya-puja' },
  { icon: <BookOpen />, label: 'Vedas', url: '/vedas' },
  { icon: <ScrollText />, label: 'Puranas', url: '/puranas' },
  { icon: <Book />, label: 'Spiritual Books', url: '/spiritual-books' },
  { icon: <FileText />, label: 'Kundli Making', url: '/kundli-making' },
  { icon: <ShoppingBag />, label: 'Buy Stones', url: '/buy-stones' },
  { icon: <SunMoon />, label: 'Daily Horoscope', url: '/daily-horoscope' },
];

const ServiceIcons = () => {
  const navigate = useNavigate();

  return (
    <div className="service-icons-wrapper">
      <div className="service-icons">
        {services.map((item, index) => (
          <button
            key={index}
            type="button"
            className="icon-card"
            onClick={() => navigate(item.url)}
            aria-label={`Go to ${item.label}`}
          >
            <div className="icon-circle">{item.icon}</div>
            <p className="icon-label">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceIcons;
