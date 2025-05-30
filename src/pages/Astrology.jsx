import React from 'react';
import '../styles/Astrology.scss';

const zodiacSigns = [
  'Aries ♈',
  'Taurus ♉',
  'Gemini ♊',
  'Cancer ♋',
  'Leo ♌',
  'Virgo ♍',
  'Libra ♎',
  'Scorpio ♏',
  'Sagittarius ♐',
  'Capricorn ♑',
  'Aquarius ♒',
  'Pisces ♓',
];

const Astrology = () => {
  return (
    <div className="astrology-page">
      <header className="astro-header">
        <div className="astro-bg" />
        <div className="astro-overlay">
          <h1>Explore the World of Astrology</h1>
          <p>Unlock the secrets of your stars. Get daily horoscopes, planetary insights, and personal guidance.</p>
          <button className="astro-btn">Check Your Horoscope</button>
        </div>
      </header>

      <section className="zodiac-section">
        <h2>12 Zodiac Signs</h2>
        <p>Explore the fascinating world of astrology to understand how each zodiac sign shapes your personality, influences your relationships, and guides your journey through life with cosmic insights.</p>
        <div className="zodiac-grid">
          {zodiacSigns.map((sign, index) => (
            <div key={index} className="zodiac-card">
              <span>{sign}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-astrology">
        <h2>What is Astrology ?</h2>
        <p>
          Astrology is the study of celestial bodies and their influence on human lives. By interpreting the movement and
          position of stars, planets, and the moon, astrologers provide insight into personality, relationships, and
          future events. Whether you're curious about your sun sign or seeking deeper astrological wisdom, this is the
          right place to begin.
        </p>
      </section>
    </div>
  );
};

export default Astrology;
