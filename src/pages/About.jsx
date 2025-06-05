import React, { useState } from 'react';
import '../styles/About.scss';
import astrologerImg from '../assets/astrologer.png'; // ✅ Replace with actual astrologer image

const About = () => {
  const [feedbackList, setFeedbackList] = useState([
    { name: 'Rohit Sharma', message: 'Amazing platform for spiritual guidance!' },
    { name: 'Anjali Verma', message: 'Very informative and easy to navigate.' },
    { name: 'Kiran Patel', message: 'The kundali report was highly accurate and helpful.' },
  ]);

  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim()) {
      setFeedbackList([formData, ...feedbackList]);
      setFormData({ name: '', message: '' });
    }
  };

  return (
    <div className="about-page">
      {/* Intro Section */}
      <section className="about-section">
        <h1>About DivyaPath</h1>
        <p>
          <strong>DivyaPath</strong> is your spiritual companion, offering a modern way to explore ancient Indian wisdom. 
          We bring together the essence of Vedic sciences, astrology, sacred scriptures, and spiritual practices 
          into one digital platform that’s easy to access and understand.
        </p>
        <p>
          With a commitment to authenticity and accuracy, DivyaPath provides tools, insights, and content rooted in
          the timeless teachings of the Vedas, Upanishads, and Puranas—empowering individuals to lead spiritually enriched lives.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be the most trusted spiritual and astrological platform that nurtures inner peace, wisdom, and cultural
          heritage for millions of seekers across the world.
        </p>

        <h2>Our Mission</h2>
        <p>
          - To simplify access to Vedic knowledge through digital technology. <br />
          - To provide accurate kundali reports, horoscopes, gemstone suggestions, and rituals. <br />
          - To connect people with trusted astrologers and gurus for personal guidance.
        </p>
      </section>

      {/* What We Offer */}
      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>📜 Vedic Texts: Explore the Rigveda, Samaveda, Upanishads, and Puranas.</li>
          <li>🔮 Kundali & Horoscope: Generate detailed kundali charts and daily predictions.</li>
          <li>💎 Gemstone Recommendations: Find the right stone based on your birth chart.</li>
          <li>🛕 Puja & Ritual Guidance: Learn how to perform traditional rituals at home.</li>
          <li>🧘 Spiritual Blogs & Mantras: Read inspiring content and sacred chants.</li>
        </ul>
      </section>

      {/* Chief Astrologer */}
      <section className="astrologer-section">
        <img src={astrologerImg} alt="Chief Astrologer" className="astrologer-img" />
        <div className="astrologer-info">
          <h2>Meet Our Chief Astrologer</h2>
          <p>
            Guru Acharya Shri Vishal Ji is a renowned Vedic astrologer with over 8 years of experience in guiding
            individuals through cosmic insights. His wisdom in planetary movements, rituals, and karmic balance has
            changed the lives of thousands.
          </p>
        </div>
      </section>

      {/* App Download */}
      <section className="app-download">
        <h3>📲 Get Our App</h3>
        <p>Experience DivyaPath anytime, anywhere. Download our mobile app for personalized services on the go.</p>
        <div className="store-buttons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Download on Play Store"
              style={{ height: '60px' }}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on App Store"
              style={{ height: '60px' }}
            />
          </a>
        </div>
      </section>

      {/* Feedback & Testimonials */}
      <section className="feedback-section">
        <h2>Feedback from Users</h2>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Feedback"
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>

        <div className="feedback-list">
          {feedbackList.map((fb, index) => (
            <div className="feedback-card" key={index}>
              <h4>{fb.name}</h4>
              <p>{fb.message}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Engagement */}
      <section className="about-section">
        <h2>Join Our Spiritual Community</h2>
        <p>
          Whether you’re a seasoned devotee or just beginning your spiritual journey, DivyaPath welcomes you with open arms.
          Join our growing community to participate in online satsangs, pujas, festivals, and live Q&A sessions with astrologers.
        </p>
      </section>

      {/* Support Section */}
      <section className="about-section">
        <h2>Need Help or Have Questions?</h2>
        <p>
          Reach out to our support team at <strong>support@divyapath.com</strong>. We’re here to guide you with any queries related
          to astrology reports, orders, or spiritual services.
        </p>
      </section>
    </div>
  );
};

export default About;
