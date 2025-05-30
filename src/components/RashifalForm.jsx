import React, { useState } from 'react';
import '../styles/RashifalForm.scss'; // Import your CSS styles
import axios from 'axios';

const RashifalForm = () => {
  const [formData, setFormData] = useState({ name: '', gotra: '', dob: '' });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [zodiac, setZodiac] = useState('');

  const getZodiacSign = (dateStr) => {
    const date = new Date(dateStr);
    const d = date.getDate();
    const m = date.getMonth() + 1;

    if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return 'aquarius';
    if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) return 'pisces';
    if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return 'aries';
    if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return 'taurus';
    if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return 'gemini';
    if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return 'cancer';
    if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return 'leo';
    if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return 'virgo';
    if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return 'libra';
    if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return 'scorpio';
    if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return 'sagittarius';
    if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return 'capricorn';
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPrediction(null);

    const sign = getZodiacSign(formData.dob);
    if (!sign) {
      setError('Invalid Date of Birth');
      setLoading(false);
      return;
    }

    setZodiac(sign);

    const apiUrl = `https://json.astrologyapi.com/v1/sun_sign_prediction/daily/${sign}`;
    const userId = '641212';
    const apiKey = 'b2e0d3aef8e82f484f03d15c5ac2d79348857787';

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: 'Basic ' + btoa(`${userId}:${apiKey}`),
          'Content-Type': 'application/json',
        },
      });

      console.log('API Response:', response.data); // Debug

      if (response.data && response.data.prediction) {
        setPrediction(response.data.prediction);
      } else {
        setError('No prediction data received.');
      }

    } catch (err) {
      console.error(err);
      setError('❌ Error fetching Rashifal. Please check your credentials or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rashifal-container" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>🧘‍♂️ Know Your Rashifal</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" required onChange={handleChange} />
        <input name="gotra" placeholder="Your Gotra" required onChange={handleChange} />
        <input name="dob" type="date" required onChange={handleChange} />
        <button type="submit" disabled={loading}>
          {loading ? 'Getting...' : 'Get Rashifal'}
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {prediction && (
        <div className="rashifal-result" style={{ marginTop: '20px' }}>
          <h3>🔮 Today’s Rashifal for <span style={{ color: '#8B008B' }}>{zodiac.toUpperCase()}</span></h3>
          <ul>
            <li><b>💖 Personal Life:</b> {prediction.personal_life}</li>
            <li><b>💼 Profession:</b> {prediction.profession}</li>
            <li><b>🩺 Health:</b> {prediction.health}</li>
            <li><b>✈️ Travel:</b> {prediction.travel}</li>
            <li><b>🍀 Luck:</b> {prediction.luck}</li>
            <li><b>😊 Emotions:</b> {prediction.emotions}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RashifalForm;
