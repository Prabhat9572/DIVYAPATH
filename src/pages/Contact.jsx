import React, { useState } from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setStatus('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or want to collaborate, feel free to reach out. We're here to help!</p>
      
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Your full name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="you@example.com" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Subject of your message" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="6" 
            placeholder="Write your message here..." 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>

          <button type="submit" className="submit-btn">Send Message</button>

          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="contact-info">
          <h2>Our Contact Information</h2>
          <p><strong>Address:</strong> 123 Spiritual Lane, Divine City, Country</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Email:</strong> support@divyapath.com</p>
          <p><strong>Working Hours:</strong> Mon - Fri: 9 AM to 6 PM</p>
          
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
