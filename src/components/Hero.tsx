import React, { useState } from 'react';
import { Clock, Menu, X, ChevronDown } from 'lucide-react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const services = [
    { id: 'ankauf', name: 'An- & Verkauf' },
    { id: 'verwertung', name: 'Autoverwertung' },
    { id: 'wartung', name: 'Wartung & Inspektion' },
    { id: 'diagnose', name: 'Diagnose & Fehlerauslesen' },
    { id: 'lack', name: 'Lack & Karosserie' },
    { id: 'tuev', name: 'TÜV / AU' },
    { id: 'reparatur', name: 'Reparaturen' },
    { id: 'import', name: 'Import & Export' },
    { id: 'reifen', name: 'Reifenservice' }
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2583&auto=format&fit=crop")',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </div>

      {/* Red spotlight effects */}
      <div className="absolute top-0 left-0 right-0 w-full h-[800px] bg-gradient-to-b from-red-600/20 via-red-600/5 to-transparent blur-[100px]" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 before:absolute before:inset-0 before:bg-black/50 before:backdrop-blur-md">
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={scrollToTop}
              className="flex flex-col items-center hover:opacity-80 transition-opacity relative z-10"
            >
              {/* Replace the src with your actual logo image path */}
              <img 
                src="./images/logo.png" 
                alt="Auto Tetik Logo" 
                className="h-10 w-auto"
                // TODO: Add your logo image here. Replace "/logo.png" with the actual path
              />
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-red-500 transition-colors relative z-10"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 relative z-10">
              <button onClick={() => handleNavClick('home')} className="text-white hover:text-red-500 transition-colors">
                Home
              </button>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-white hover:text-red-500 transition-colors"
                >
                  Leistungen
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-md shadow-lg py-2 border border-white/10">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleNavClick(service.id)}
                        className="block w-full text-left px-4 py-2 text-white hover:bg-red-600/20 transition-colors text-sm"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => handleNavClick('contact')} className="text-white hover:text-red-500 transition-colors">
                Kontakt
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => handleNavClick('home')} 
                className="text-white hover:text-red-500 transition-colors text-left py-2"
              >
                Home
              </button>
              
              {/* Mobile Services Menu */}
              <div className="space-y-2">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-red-500 transition-colors py-2"
                >
                  Leistungen
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleNavClick(service.id)}
                        className="block w-full text-left py-2 text-gray-300 hover:text-red-500 transition-colors text-sm"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-white hover:text-red-500 transition-colors text-left py-2"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 animate-slideInLeft">
            Ihre vertrauenswürdige KFZ-Werkstatt & Autoverwertung in Kiel
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slideInLeft delay-100">
            Professioneller Service, faire Preise und kompetente Beratung für alle Fahrzeugmarken
          </p>
          <div className="flex flex-wrap gap-4 animate-slideInLeft delay-200">
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md transition-colors flex items-center justify-center text-lg group"
            >
              <Clock className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};