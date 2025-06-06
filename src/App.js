import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Ashram from './pages/Ashram';
import Contact from './pages/Contact';
import Astrology from './pages/Astrology';
import BuyStones from './pages/BuyStones';
import StoneDetail from './pages/StoneDetail';
import Vedas from './pages/Vedas';
import Services from './pages/Services';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BuyNow from './components/BuyNow';
import Donate from './components/Donate';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ashram" element={<Ashram />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/buy-stones" element={<BuyStones />} />
          <Route path="/stone/:id" element={<StoneDetail />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/vedas" element={<Vedas />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
