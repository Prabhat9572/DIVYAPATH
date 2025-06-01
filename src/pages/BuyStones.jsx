// src/pages/BuyStones.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BuyStones.scss';
import bannerImage from '../assets/stone.jpg';

// Importing all local images from assets/stones
import emerald from '../assets/emerald.jpg';
import ruby from '../assets/ruby.jpg';
import sapphireBlue from '../assets/sapphire-blue.jpg';
import sapphireYellow from '../assets/sapphire-yellow.jpg';
import coral from '../assets/coral.jpg';
import hessonite from '../assets/hessonite.jpg';
import catsEye from '../assets/cats-eye.jpg';
import diamond from '../assets/diamond.jpg';
import opal from '../assets/opal.jpg';
import turquoise from '../assets/turquoise.jpg';
import lapis from '../assets/lapis.jpg';
import amethyst from '../assets/amethyst.jpg';

// New Stones
import sunstone from '../assets/sunstone.jpg';
import peridot from '../assets/peridot.jpg';

const stones = [
  { id: 'emerald', name: 'Emerald (Panna)', price: '₹3,000', image: emerald, description: 'Boosts intellect and communication.' },
  { id: 'ruby', name: 'Ruby (Manik)', price: '₹5,000', image: ruby, description: 'Improves leadership and confidence.' },
  { id: 'blue-sapphire', name: 'Blue Sapphire (Neelam)', price: '₹7,500', image: sapphireBlue, description: 'Brings wealth and success quickly.' },
  { id: 'yellow-sapphire', name: 'Yellow Sapphire (Pukhraj)', price: '₹4,500', image: sapphireYellow, description: 'Promotes wisdom and prosperity.' },
  { id: 'coral', name: 'Coral (Moonga)', price: '₹2,500', image: coral, description: 'Strengthens physical health and courage.' },
  { id: 'hessonite', name: 'Hessonite (Gomed)', price: '₹2,000', image: hessonite, description: 'Protects against enemies and evil.' },
  { id: 'cats-eye', name: 'Cat’s Eye (Lehsunia)', price: '₹3,800', image: catsEye, description: 'Guards against misfortune.' },
  { id: 'diamond', name: 'Diamond (Heera)', price: '₹12,000', image: diamond, description: 'Brings luxury and artistic ability.' },
  { id: 'opal', name: 'Opal (Doodhiya)', price: '₹6,200', image: opal, description: 'Improves love and relationships.' },
  { id: 'turquoise', name: 'Turquoise (Firoza)', price: '₹3,300', image: turquoise, description: 'Guards against accidents and injury.' },
  { id: 'lapis', name: 'Lapis Lazuli', price: '₹1,700', image: lapis, description: 'Increases wisdom and truth.' },
  { id: 'amethyst', name: 'Amethyst', price: '₹1,900', image: amethyst, description: 'Reduces stress and anxiety.' },
  { id: 'sunstone', name: 'Sunstone', price: '₹2,200', image: sunstone, description: 'Brings joy and empowerment.' },
  { id: 'peridot', name: 'Peridot', price: '₹2,600', image: peridot, description: 'Heals emotional wounds and anger.' },
];

const BuyStones = () => {
  const navigate = useNavigate();

  const handleImageClick = (stone) => {
    navigate(`/stone/${stone.id}`, { state: { stone } });
  };

  return (
    <div className="buy-stones-page">
      <div
        className="banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>

      <h1>Buy Vedic Stones</h1>
      <p>
        <strong style={{ color: 'black' }}>
          Explore our collection of authentic Vedic stones, each handpicked for
          its astrological significance and healing properties.
        </strong>
      </p>

      <div className="stones-grid">
        {stones.map((stone) => (
          <div key={stone.id} className="stone-card">
            <img
              src={stone.image}
              alt={stone.name}
              onClick={() => handleImageClick(stone)}
              style={{ cursor: 'pointer' }}
            />
            <h3>{stone.name}</h3>
            <p className="price">{stone.price}</p>
            <button onClick={() => handleImageClick(stone)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyStones;
