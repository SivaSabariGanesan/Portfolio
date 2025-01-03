import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Scene from './components/Background/Scene';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import CustomCursor from './components/CustomCursor';
import Admin from './Admin'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative">
        <CustomCursor />
        <Scene />
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
