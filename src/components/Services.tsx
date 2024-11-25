import React, { useState, useEffect } from 'react';
import { Car, Wrench, Settings, Truck, PaintBucket, FileSearch, Navigation, Gauge, Cog, CreditCard, Tool } from 'lucide-react';

const services = [
  {
    id: 'ankauf',
    icon: Car,
    title: 'An- & Verkauf',
    description: 'Professionelle Beratung beim Autokauf und -verkauf. Faire Preise und transparente Abwicklung.',
    details: ['Gebrauchtwagen', 'Unfallwagen', 'Ankauf aller Marken', 'Faire Preisermittlung']
  },
  {
    id: 'verwertung',
    icon: Truck,
    title: 'Autoverwertung',
    description: 'Fachgerechte Entsorgung und Verwertung von Altfahrzeugen aller Art.',
    details: ['Abholung auf anfrage', 'Umweltgerechte Entsorgung', 'Verwertungsnachweis', 'Abmeldung möglich']
  },
  {
    id: 'wartung',
    icon: Settings,
    title: 'Wartung & Inspektion',
    description: 'Regelmäßige Wartungen und Inspektionen nach Herstellervorgaben.',
    details: ['Ölwechsel', 'Bremsflüssigkeit', 'Filterservice', 'Jahrescheck' ,'Klimaservice']
  },
  {
    id: 'lack',
    icon: PaintBucket,
    title: 'Lack & Karosserie',
    description: 'Professionelle Lackier- und Karosseriearbeiten.',
    details: ['Lackierung', 'Karosseriearbeiten', 'Unfallinstandsetzung', 'Smart Repair']
  },
  {
    id: 'diagnose',
    icon: FileSearch,
    title: 'Diagnose & Fehlerauslesen',
    description: 'Professionelle Fehlerdiagnose mit modernster Technik.',
    details: ['Computerdiagnose', 'Fehlerauslesen', 'Fehlerbehebung', 'Elektronik-Check','Codierung','abschleppen','Reparatur','Achsvermessung']
  },
  {
    id: 'tuev',
    icon: Gauge,
    title: 'TÜV / AU',
    description: 'Hauptuntersuchung und Abgasuntersuchung nach aktuellen Standards.',
    details: ['HU-Vorbereitung', 'AU-Durchführung', 'Mängelbeseitigung', 'Terminvereinbarung']
  },
  {
    id: 'reparatur',
    icon: Wrench,
    title: 'Reparaturen',
    description: 'Umfassende Reparaturen aller Art für Ihr Fahrzeug.',
    details: ['Motor', 'Bremsen', 'Fahrwerk', 'Elektronik']
  },
  /* {
    id: 'import',
    icon: Navigation,
    title: 'Import & Export',
    description: 'Professionelle Abwicklung von Import- und Exportgeschäften.',
    details: ['EU-Import', 'Weltweiter Export', 'Zollabwicklung', 'Dokumentation']
  }, */
  {
    id: 'reifen',
    icon: Cog,
    title: 'Reifenservice',
    description: 'Kompletter Reifenservice und fachgerechte Montage.',
    details: ['Reifenwechsel', 'Auswuchten', 'Einlagerung', 'Reparatur']
  },
  {
    id: 'abschleppdienst',
    icon: Navigation,
    title: '24/7 Abschleppdienst',
    description: 'Schnelle und zuverlässige Unterstützung bei Pannen oder Unfällen – rund um die Uhr.',
    details: ['Fahrzeugbergung', 'Pannenhilfe', 'Transport zu Werkstätten', 'Abschleppen von Unfallfahrzeugen']
  },
];

export const Services = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTouchDevice) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = -(x - centerX) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTouchDevice) {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              id={service.id}
              className={`relative group transition-all duration-300 ease-out ${isTouchDevice ? 'touch-action-pan-y' : 'touch-none'}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                transformStyle: isTouchDevice ? 'flat' : 'preserve-3d',
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className={`relative bg-black/60 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/10 hover:border-red-600/50 transition-all duration-300 h-full ${
                isTouchDevice ? 'transform-none' : ''
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                <div style={{ transform: isTouchDevice ? 'none' : 'translateZ(20px)' }}>
                  <service.icon className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-500">• {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 space-y-4">
          <div className="p-4 md:p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
            <div className="flex items-center text-gray-300 gap-2">
              <p className="text-sm">Preise für unsere Leistungen teilen wir Ihnen gerne auf Anfrage mit.</p>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CreditCard className="w-6 h-6 text-red-600 mr-2" />
              Zahlungsmöglichkeiten
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Aktuell akzeptieren wir Barzahlung. Weitere Zahlungsmöglichkeiten folgen in Kürze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};