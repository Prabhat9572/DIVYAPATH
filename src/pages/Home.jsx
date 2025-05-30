import React, { useRef, useState, useEffect } from 'react';
import '../styles/Home.scss';
import Hero from '../assets/hero.avif';
import RashifalForm from '../components/RashifalForm';

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
  { title: 'Rigveda', image: RigvedaImg, pdf: '/pdfs/rigveda.pdf' },
  { title: 'Samaveda', image: SamavedaImg, pdf: '/pdfs/samved.pdf' },
  { title: 'Yajurveda', image: YajurvedaImg, pdf: '/pdfs/yajurved.pdf' },
  { title: 'Atharvaveda', image: AtharvavedaImg, pdf: '/pdfs/Arthveda.pdf' },
];

const spiritualBooks = [
  { title: 'Bhagavad Gita', image: gita, pdf: '/pdfs/gita.pdf' },
  { title: 'Ramayana', image: ramayana, pdf: '/pdfs/ramayana.pdf' },
  { title: 'Mahabharata', image: mahabharata, pdf: '/pdfs/mahabharata.pdf' },
  { title: 'Vishnu Purana', image: vishnuPurana, pdf: '/pdfs/vishnu-purana.pdf' },
  { title: 'Shiva Purana', image: shivaPurana, pdf: '/pdfs/shiva-purana.pdf' },
  { title: 'Devi Bhagavatam', image: deviBhagavatam, pdf: '/pdfs/devi-bhagavatam.pdf' },
  { title: 'Narada Bhakti Sutra', image: naradaBhaktiSutra, pdf: '/pdfs/narada-bhakti-sutra.pdf' },
  { title: 'Upanishads', image: upanishads, pdf: '/pdfs/upanishads.pdf' },
];

const Home = () => {
  const spiritualRef = useRef(null);
  const [showScrollMessage, setShowScrollMessage] = useState(false);

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
                <button className="buy-button">Buy Now</button>
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
                <button className="buy-button">Buy Now</button>
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
            View More Spiritual Texts
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
