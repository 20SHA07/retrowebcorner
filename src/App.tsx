import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Guestbook from './pages/Guestbook';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import MouseTrail from './components/MouseTrail';
import RetroAds from './components/RetroAds';
import { useRetroSound } from './hooks/useRetroSound';

function App() {
  const { playStartup } = useRetroSound();

  useEffect(() => {
    playStartup();
  }, [playStartup]);

  return (
    <BrowserRouter>
      <MouseTrail />
      <RetroAds />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;