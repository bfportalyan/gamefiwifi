import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GamePage from './components/GamePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game/:id" element={<GamePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;