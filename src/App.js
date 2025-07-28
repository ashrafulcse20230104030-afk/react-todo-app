import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="main-container">
      <Navigation />
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
