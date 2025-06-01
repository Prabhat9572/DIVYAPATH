import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.scss';
import Hero from '../assets/hero.avif';
import RashifalForm from '../components/RashifalForm';
import ServiceIcons from '../pages/ServiceIcons';

// Veda Book Images
import RigvedaImg from '../assets/rigveda.jpg';
import SamavedaImg from '../assets/Samaveda.jpg';
import YajurvedaImg from '../assets/Yajurveda.jpg';
import AtharvavedaImg from '../assets/Atharvaveda.jpg';

// Spiritual Book Images
import gita from '../assets/gita.jpg';
import ramayana from '../assets/ramayana.jpg';
import mahabharata from '../assets/mahabharata.jpg';
import vishnuPurana from '../assets/vishnu-purana.jpg';
import shivaPurana from '../assets/shiva-purana.jpg';
import deviBhagavatam from '../assets/devi-bhagavatam.jpg';
import naradaBhaktiSutra from '../assets/narada-bhakti-sutra.jpg';
import upanishads from '../assets/upanishads.jpg';

const vedBooks = [
  { title: 'Rigveda', image: RigvedaImg, pdf: '/pdfs/rigveda.pdf', price: 499, description: 'Ancient Rigveda scripture.' },
  { title: 'Samaveda', image: SamavedaImg, pdf: '/pdfs/samved.pdf', price: 399, description: 'Melodic Samaveda chants.' },
  { title: 'Yajurveda', image: YajurvedaImg, pdf: '/pdfs/yajurved.pdf', price: 449, description: 'Yajurveda sacrificial mantras.' },
  { title: 'Atharvaveda', image: AtharvavedaImg, pdf: '/pdfs/Arthveda.pdf', price: 429, description: 'Prayers and magical formulas of Atharvaveda.' },
];

const spiritualBooks = [
  { title: 'Bhagavad Gita', image: gita, pdf: '/pdfs/gita.pdf', price: 299, description: 'The sacred dialogue of Bhagavad Gita.' },
  { title: 'Ramayana', image: ramayana, pdf: '/pdfs/ramayana.pdf', price: 599, description: 'Epic tale of Lord Rama.' },
  { title: 'Mahabharata', image: mahabharata, pdf: '/pdfs/mahabharata.pdf', price: 699, description: 'The great Indian epic.' },
  { title: 'Vishnu Purana', image: vishnuPurana, pdf: '/pdfs/vishnu-purana.pdf', price: 399, description: 'Stories from Vishnu Purana.' },
  { title: 'Shiva Purana', image: shivaPurana, pdf: '/pdfs/shiva-purana.pdf', price: 399, description: 'Tales of Lord Shiva.' },
  { title: 'Devi Bhagavatam', image: deviBhagavatam, pdf: '/pdfs/devi-bhagavatam.pdf', price: 499, description: 'Devi Bhagavatam scriptures.' },
  { title: 'Narada Bhakti Sutra', image: naradaBhaktiSutra, pdf: '/pdfs/narada-bhakti-sutra.pdf', price: 199, description: 'Teachings on Bhakti.' },
  { title: 'Upanishads', image: upanishads, pdf: '/pdfs/upanishads.pdf', price: 549, description: 'Philosophical Upanishads.' },
];

const Home = () => {
  const spiritualRef = useRef(null);
  const [showScrollMessage, setShowScrollMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollMessage(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReadClick = (e, pdfUrl) => {
    e.preventDefault();
    fetch(pdfUrl)
      .then((res) => {
        if (!res.ok) throw new Error('PDF not found');
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      })
      .catch(() => alert('Sorry, the PDF file could not be found.'));
  };

  // Navigate to BuyNow with product details on Buy Now click
  const handleBuyNowClick = (product) => {
    navigate('/buy-now', { state: { product } }); // <-- here use "/buy-now"
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Tapa, Svadhyaya and Dhyan</h1>
          <p><b>The Rishi tradition is a way of life that emphasizes the importance of self-discipline, study, and meditation.</b></p>
          <a href="/about" className="cta-button">Learn More</a>
        </div>
      </section>

      <ServiceIcons />

      {/* Rashifal Form */}
      <RashifalForm />

      {/* Ved Books Section */}
      <section className="ved-books-section">
        <h2>Explore Ved Books</h2>
        <p className="section-description">
          Discover the ancient wisdom of the Vedas—Hinduism’s oldest and most sacred Grantha.
        </p>

        <div className="ved-books-container horizontal-scroll">
          {vedBooks.map((book, index) => (
            <div className="book-card" key={index}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <div className="button-group">
                <button className="buy-button" onClick={() => handleBuyNowClick({
                  name: book.title,
                  image: book.image,
                  price: book.price,
                  description: book.description
                })}>
                  Buy Now
                </button>
                <a
                  href={book.pdf}
                  className="read-button"
                  onClick={(e) => handleReadClick(e, book.pdf)}
                >
                  Read
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spiritual Books Section */}
      <section className="spiritual-books-section" ref={spiritualRef}>
        <h2>Spiritual Books</h2>
        <div className="spiritual-books-container horizontal-scroll">
          {spiritualBooks.map((book, index) => (
            <div className="book-card" key={index}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <div className="button-group">
                <button className="buy-button" onClick={() => handleBuyNowClick({
                  name: book.title,
                  image: book.image,
                  price: book.price,
                  description: book.description
                })}>
                  Buy Now
                </button>
                <a
                  href={book.pdf}
                  className="read-button"
                  onClick={(e) => handleReadClick(e, book.pdf)}
                >
                  Read
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="more-books-button-container">
          <button className="more-books-button">
            View More
          </button>
        </div>
      </section>

      {/* Scroll Popup Message */}
      {showScrollMessage && (
        <div className="scroll-popup-message" onClick={scrollToTop}>
          Back to Top ↑
        </div>
      )}
    </div>
  );
};

export default Home;
