// src/components/ServiceIcons.jsx
import React, { useRef, useEffect, useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
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
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  // Auto-scroll every 4 seconds unless hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && scrollRef.current) {
        scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="service-icons-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="scroll-btn left" onClick={scrollLeft} aria-label="Scroll Left">
        <ChevronLeft size={24} />
      </button>

      <div className="service-icons" ref={scrollRef}>
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

      <button className="scroll-btn right" onClick={scrollRight} aria-label="Scroll Right">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ServiceIcons;
