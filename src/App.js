import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Collection from './pages/Collection';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <BackToTop />
    </Router>
  );
}

export default App;
