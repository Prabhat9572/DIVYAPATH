import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/StoneDetail.scss';

const StoneDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', content: '', rating: 0 });

  if (!state?.stone) {
    return <p>Stone not found. Please go back.</p>;
  }

  const { name, price, image, description } = state.stone;

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.content && newReview.rating > 0) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', content: '', rating: 0 });
    }
  };

  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  // **New function for Buy Now button to navigate with product data**
  const handleBuyNowClick = () => {
    navigate('/buy-now', { state: { product: { name, price, image, description } } });
  };

  return (
    <div className="stone-detail">
      <div className="stone-container">
        <div className="image-section">
          <img src={image} alt={name} />
        </div>

        <div className="info-section">
          <h1>{name}</h1>
          <p className="price">₹{price}</p>
          <p className="desc">{description}</p>

          <ul className="stone-highlights">
            <li><strong>100% Authentic</strong> certified by top labs</li>
            <li>Astrologically effective for healing and luck</li>
            <li>Gemstone weight: 5 Carat (adjustable)</li>
            <li>Free shipping & returns</li>
          </ul>

          <button className="buy-now" onClick={handleBuyNowClick}>Buy Now</button>

          <div className="tabs">
            <button
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={activeTab === 'additional' ? 'active' : ''}
              onClick={() => setActiveTab('additional')}
            >
              Additional Information
            </button>
            <button
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="stone-paragraphs">
                <p>
                  <strong>{name}</strong> is widely recommended by astrologers for its unique vibrational properties and spiritual benefits.
                </p>
                <p>
                  Wearing {name} is believed to enhance emotional balance, clarity of mind, and physical well-being.
                </p>
                <p>
                  Each stone is lab-tested and certified for authenticity.
                </p>
                <p>
                  Consult an astrologer before wearing for best results.
                </p>
                <p>
                  Whether you seek health, peace, or success, {name} might be your ideal spiritual companion.
                </p>
              </div>
            )}

            {activeTab === 'additional' && (
              <div className="additional-info">
                <p><strong>Weight:</strong> 5 Carat (can be customized)</p>
                <p><strong>Certification:</strong> Included with purchase</p>
                <p><strong>Metal Recommendation:</strong> Silver or Panchdhatu</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-section">
                <h3>Reviews</h3>
                {reviews.length === 0 ? (
                  <p>There are no reviews yet.</p>
                ) : (
                  <ul>
                    {reviews.map((rev, index) => (
                      <li key={index}>
                        <strong>{rev.name}</strong> ({'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}): {rev.content}
                      </li>
                    ))}
                  </ul>
                )}

                <h4>Be the first to review “{name}”</h4>
                <form onSubmit={handleReviewSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    required
                  />
                  <textarea
                    placeholder="Your Review"
                    value={newReview.content}
                    onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    required
                  />
                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={star <= newReview.rating ? 'filled' : ''}
                        onClick={() => handleStarClick(star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <button type="submit">Submit Review</button>
                </form>
              </div>
            )}

            <div className="bottom-back-btn">
              <button onClick={() => navigate(-1)}>← Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoneDetail;
