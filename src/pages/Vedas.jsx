import React, { useState } from 'react';
import '../styles/Vedas.scss';

import rigvedaImg from '../assets/rigveda.jpg';
import samavedaImg from '../assets/Samaveda.jpg';
import yajurvedaImg from '../assets/Yajurveda.jpg';
import atharvavedaImg from '../assets/Atharvaveda.jpg';

import { useNavigate } from 'react-router-dom';

const vedBooks = [
  {
    id: 'rigveda',
    title: 'Rigveda',
    image: rigvedaImg,
    pdf: '/pdfs/rigveda.pdf',
    price: 499,
    description: 'Ancient Rigveda scripture.',
  },
  {
    id: 'samaveda',
    title: 'Samaveda',
    image: samavedaImg,
    pdf: '/pdfs/samved.pdf',
    price: 399,
    description: 'Melodic Samaveda chants.',
  },
  {
    id: 'yajurveda',
    title: 'Yajurveda',
    image: yajurvedaImg,
    pdf: '/pdfs/yajurved.pdf',
    price: 449,
    description: 'Yajurveda sacrificial mantras.',
  },
  {
    id: 'atharvaveda',
    title: 'Atharvaveda',
    image: atharvavedaImg,
    pdf: '/pdfs/Arthveda.pdf',
    price: 429,
    description: 'Prayers and magical formulas of Atharvaveda.',
  },
];

const vedasData = [
  {
    id: 'rigveda',
    name: 'Rigveda',
    description:
      'Rigveda is the oldest of the four Vedas and forms the foundation of Vedic literature. It contains over 1,000 hymns (suktas) dedicated to various deities such as Agni, Indra, Varuna, and Soma...',
    image: rigvedaImg,
  },
  {
    id: 'samaveda',
    name: 'Samaveda',
    description:
      'Samaveda is primarily a liturgical text that is meant to be sung. It draws heavily from Rigvedic hymns but arranges them musically for chanting during Soma sacrifices and other rituals...',
    image: samavedaImg,
  },
  {
    id: 'yajurveda',
    name: 'Yajurveda',
    description:
      'Yajurveda is known as the "Veda of Sacrificial Formulas." It provides the prose mantras and ritual formulas necessary for conducting yajnas (Vedic rituals)...',
    image: yajurvedaImg,
  },
  {
    id: 'atharvaveda',
    name: 'Atharvaveda',
    description:
      'Atharvaveda stands out from the other Vedas due to its practical and worldly focus. It includes hymns and incantations related to everyday life...',
    image: atharvavedaImg,
  },
];

const Vedas = () => {
  const [selectedVed, setSelectedVed] = useState(vedasData[0]);
  const navigate = useNavigate();

  const handleReadClick = (e, pdfUrl) => {
    e.preventDefault();
    fetch(pdfUrl)
      .then((res) => {
        if (!res.ok) throw new Error('PDF not found');
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      })
      .catch(() => alert('Sorry, the PDF file could not be found.'));
  };

  const handleBuyNowClick = (product) => {
    navigate('/buy-now', { state: { product } });
  };

  const getPdfLink = (vedId) => {
    const book = vedBooks.find((b) => b.id === vedId);
    return book?.pdf;
  };

  return (
    <div className="vedas-section">
      <h1>Vedas</h1>

      <div className="ved-list">
        {vedasData.map((ved) => (
          <button
            key={ved.id}
            className={`ved-button ${selectedVed.id === ved.id ? 'active' : ''}`}
            onClick={() => setSelectedVed(ved)}
          >
            {ved.name}
          </button>
        ))}
      </div>

      <div className="ved-details">
        <img src={selectedVed.image} alt={selectedVed.name} />
        <div className="ved-text">
          <h2>{selectedVed.name}</h2>
          <p>{selectedVed.description}</p>
          <button
            className="read-button"
            onClick={(e) => handleReadClick(e, getPdfLink(selectedVed.id))}
          >
            Read {selectedVed.name}
          </button>
        </div>
      </div>

      <h3>Recommended Books</h3>
      <div className="book-cards-container horizontal-scroll">
        {vedBooks.map((book) => (
          <div className="book-card" key={book.title}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p className="book-description">{book.description}</p>
            <div className="button-group">
              <button
                className="buy-button"
                onClick={() =>
                  handleBuyNowClick({
                    name: book.title,
                    image: book.image,
                    price: book.price,
                    description: book.description,
                  })
                }
              >
                Buy Now - ₹{book.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vedas;
