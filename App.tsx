import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Methodology from './components/Methodology';
import AIAdvisor from './components/AIAdvisor';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechTicker from './components/TechTicker';
import ChatWidget from './components/ChatWidget';
import ROICalculator from './components/ROICalculator';
import Results from './components/Results';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TechTicker />
        <Services />
        <Results />
        <ROICalculator />
        <Methodology />
        <About />
        <AIAdvisor />
        <Contact />
      </main>
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default App;