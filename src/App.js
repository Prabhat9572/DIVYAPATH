import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Ashram from './pages/Ashram';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Join from './pages/Join';
import Astrology from './pages/Astrology';
import BuyStones from './pages/BuyStones';
import StoneDetail from './pages/StoneDetail';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BuyNow from './components/BuyNow'; // BuyNow component
import Vedas from './pages/Vedas';  // Import Vedas without curly braces (default export)

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Make sure Navbar has link to /vedas */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ashram" element={<Ashram />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/buy-stones" element={<BuyStones />} />
          <Route path="/stone/:id" element={<StoneDetail />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/vedas" element={<Vedas />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
