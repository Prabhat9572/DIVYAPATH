import React, { useState } from 'react';
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
  const [selectedSign, setSelectedSign] = useState('');
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    tob: '',
    ampm: 'AM',
    birthPlace: '',
    reportType: 'South Indian',
    language: 'English',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    console.log('Form Data:', formData);
    window.open('https://srv.clickastro.com/online-horoscope-results.php', '_blank');
  };

  // Validation function to check if required fields are filled
  const isFormComplete = () => {
    const {
      name,
      gender,
      dob,
      tob,
      birthPlace,
      email,
      phone
    } = formData;
    return (
      name.trim() !== '' &&
      gender.trim() !== '' &&
      dob.trim() !== '' &&
      tob.trim() !== '' &&
      birthPlace.trim() !== '' &&
      email.trim() !== '' &&
      phone.trim() !== ''
    );
  };

  const fetchHoroscope = async (sign) => {
    // Validate form before fetching horoscope
    if (!isFormComplete()) {
      alert('कृपया राशिफल देखने के लिए सभी फॉर्म विवरण भरें।'); // Please fill all form details to see horoscope.
      return;
    }

    setLoading(true);
    setSelectedSign(sign);
    setHoroscope('');
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/horoscope?zodiac=${sign.toLowerCase()}`, {
        headers: {
          'X-Api-Key': 'myj4eVbgPJUCTLe4+i4iWA==ZG3ku3sZJhZuDqOf',
        },
      });
      const data = await response.json();
      setHoroscope(data.horoscope || 'Horoscope not found for this sign.');
    } catch (error) {
      console.error('Error fetching horoscope:', error);
      setHoroscope('⚠️ क्षमा करें, राशिफल लोड करने में समस्या हुई।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="astrology-page">
      <header className="astro-header">
        <div className="astro-bg" />
        <div className="astro-overlay">
          <h1>Explore the World of Astrology</h1>
          <p>Unlock the secrets of your stars. Get daily horoscopes, planetary insights, and personal guidance.</p>
        </div>
      </header>

      {/* Always-visible Birth Details Form */}
      <section className="form-section">
        <h2>Enter Your Birth Details</h2>
        <div className="astro-form">
          <input
            type="text"
            name="name"
            placeholder="Your full name here"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <select
            name="gender"
            onChange={handleChange}
            value={formData.gender}
            required
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            value={formData.dob}
            required
          />
          <input
            type="time"
            name="tob"
            onChange={handleChange}
            value={formData.tob}
            required
          />
          <div>
            <label>
              <input
                type="radio"
                name="ampm"
                value="AM"
                checked={formData.ampm === 'AM'}
                onChange={handleChange}
              />{' '}
              AM
            </label>
            <label>
              <input
                type="radio"
                name="ampm"
                value="PM"
                checked={formData.ampm === 'PM'}
                onChange={handleChange}
              />{' '}
              PM
            </label>
          </div>
          <input
            type="text"
            name="birthPlace"
            placeholder="Birth Place"
            onChange={handleChange}
            value={formData.birthPlace}
            required
          />
          <select
            name="reportType"
            onChange={handleChange}
            value={formData.reportType}
          >
            <option value="South Indian">South Indian</option>
            <option value="North Indian">North Indian</option>
          </select>
          <select
            name="language"
            onChange={handleChange}
            value={formData.language}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Your email here"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your phone number here"
            onChange={handleChange}
            value={formData.phone}
            required
          />
          <button className="submit-btn" onClick={handleFormSubmit}>
            Show my horoscope
          </button>
        </div>
      </section>

      {/* Zodiac Horoscope Section */}
      <section className="zodiac-section">
        <h2>12 Zodiac Signs</h2>
        <p>
          Tap on any zodiac to reveal its daily horoscope. Understand how each
          sign guides your life with cosmic energy.
        </p>
        <div className="zodiac-grid">
          {zodiacSigns.map((sign, index) => {
            const zodiac = sign.split(' ')[0];
            return (
              <div
                key={index}
                className="zodiac-card"
                onClick={() => fetchHoroscope(zodiac)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: selectedSign === zodiac ? '#ffe6cc' : 'white',
                }}
              >
                <span>{sign}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Horoscope Result */}
      <section className="horoscope-section">
        {loading ? (
          <p>🔄 Loading horoscope for {selectedSign}...</p>
        ) : horoscope ? (
          <>
            <h2>{selectedSign} का दैनिक राशिफल</h2>
            <p>{horoscope}</p>
          </>
        ) : null}
      </section>

      {/* Info Section */}
      <section className="about-astrology">
        <h2>What is Astrology?</h2>
        <p>
          Astrology is the study of celestial bodies and their influence on
          human lives. By interpreting the movement and position of stars,
          planets, and the moon, astrologers provide insight into personality,
          relationships, and future events.
        </p>
      </section>
    </div>
  );
};

export default Astrology;
