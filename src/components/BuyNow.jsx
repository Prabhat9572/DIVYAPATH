import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BuyNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;

    script.onload = () => {
      setRazorpayLoaded(true);
    };

    script.onerror = () => {
      console.error('Failed to load Razorpay SDK');
      setRazorpayLoaded(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!product) return;
    if (!razorpayLoaded) {
      alert('Payment SDK is not loaded yet. Please try again in a moment.');
      return;
    }

    if (!window.Razorpay) {
      alert('Razorpay SDK not available.');
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
      amount: product.price * 100,
      currency: 'INR',
      name: 'DivyaPath',
      description: `Purchase for ${product.name}`,
      image: product.image,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#8B4513',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!product)
    return (
      <p style={{ textAlign: 'center', padding: '20px' }}>No product selected.</p>
    );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.left}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>

        <div style={styles.right}>
          <h2 style={styles.title}>{product.name}</h2>
          <p style={styles.price}>₹{product.price}</p>
          <p style={styles.description}>{product.description}</p>

          <div style={styles.buttonGroup}>
            <button
              style={{
                ...styles.button,
                opacity: razorpayLoaded ? 1 : 0.6,
                cursor: razorpayLoaded ? 'pointer' : 'not-allowed',
              }}
              onClick={handlePayment}
              disabled={!razorpayLoaded}
            >
              Pay Now with Razorpay
            </button>
            <button
              style={{ ...styles.button, backgroundColor: '#ccc', color: '#333' }}
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    minHeight: '100vh',
  },
  card: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    width: '100%',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  left: {
    flex: '1 1 300px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: '100%',
    maxWidth: '250px',
    borderRadius: '10px',
  },
  right: {
    flex: '2 1 400px',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  price: {
    fontSize: '20px',
    color: '#8B4513',
    marginBottom: '15px',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.4',
    marginBottom: '25px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  button: {
    flex: '1',
    padding: '12px 20px',
    backgroundColor: '#8B4513',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default BuyNow;
