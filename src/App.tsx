import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Impressum } from './components/Impressum';
import { Datenschutz } from './components/Datenschutz';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  if (currentPage === 'impressum') {
    return (
      <div className="min-h-screen bg-black text-white">
        <Impressum onBack={() => setCurrentPage('home')} />
        <Footer onNavigate={setCurrentPage} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'datenschutz') {
    return (
      <div className="min-h-screen bg-black text-white">
        <Datenschutz onBack={() => setCurrentPage('home')} />
        <Footer onNavigate={setCurrentPage} />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer onNavigate={setCurrentPage} />
      <ScrollToTop />
    </div>
  );
}

export default App;