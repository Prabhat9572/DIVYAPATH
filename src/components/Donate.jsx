import React, { useState } from 'react';
import '../styles/Donate.scss';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleAmountChange = (e) => {
    // Allow only numbers and decimals
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleDonate = (e) => {
    e.preventDefault();

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setMessage('Please enter a valid donation amount greater than zero.');
      return;
    }

    // Here you can integrate payment gateway logic
    setMessage(`Thank you for your generous donation of ₹${numAmount.toFixed(2)}!`);
    setAmount('');
  };

  return (
    <div className="donate-page">
      <h1>Support Our Cause</h1>
      <p>
        Your donations help us continue our mission to spread spiritual knowledge and support the community.
        Every contribution, big or small, makes a difference.
      </p>

      <form className="donate-form" onSubmit={handleDonate}>
        <label htmlFor="donation-amount">Enter Donation Amount (₹)</label>
        <input
          type="text"
          id="donation-amount"
          name="donation-amount"
          placeholder="e.g. 500"
          value={amount}
          onChange={handleAmountChange}
          autoComplete="off"
        />
        <button type="submit" className="donate-submit-btn">Donate Now</button>
      </form>

      {message && <p className="donate-message">{message}</p>}
    </div>
  );
};

export default Donate;
