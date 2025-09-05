import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import MissionVision from './components/MissionVision';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Highlights />
      <MissionVision />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;