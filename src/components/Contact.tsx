import React from 'react';
import { Phone, Mail, Clock, MapPin, MessageSquare, Car, Camera } from 'lucide-react';

const galleryImages = [
  {
    url: "/images/carspray.jpg",
    alt: "Auto lackieren"
  },
  {
    url: "/images/foto2.png",
    alt: "Mechaniker bei der Arbeit"
  },
  {
    url: "/images/foto3.png",
    alt: "Auto in der Werkstatt"
  },
  {
    url: "/images/carabschlepp.jpg",
    alt: "Klassisches Auto abschleppen"
  }
];

export const Contact = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Red spotlight effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12">Kontakt</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6">Kontaktieren Sie uns</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p>Telefon:</p>
                    <a href="tel:0431728896" className="text-red-500 hover:text-red-400">0431-728896</a>
                    <br />
                    <a href="tel:015147493818" className="text-red-500 hover:text-red-400">0151-47493818</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p>WhatsApp 24/7:</p>
                    <a href="https://wa.me/017641507578" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                      0176-41507578
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p>E-Mail:</p>
                    <a href="mailto:auto-tetik@gmx.de" className="text-red-500 hover:text-red-400">
                      auto-tetik@gmx.de
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p>Öffnungszeiten:</p>
                    <p>Mo-Fr: 9:00 - 18:00 Uhr</p>
                    <p>Sa: 9:00 - 13:00 Uhr</p>
                    <a 
                      href="mailto:auto-tetik@gmx.de" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-red-500 hover:text-red-400 mt-2 inline-block"
                    >
                      → Terminbuchung 24/7
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Standort Bereich */}
          <div className="space-y-8">
            <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-red-600/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-red-600 mr-4" />
                <h3 className="text-xl font-semibold">Standort</h3>
              </div>
              
              <div className="space-y-4">
                <p>Auto Tetik</p>
                <p>Segeberger Landstrasse 4a</p>
                <p>24145 Kiel</p>

                <div className="mt-6">
                  <div className="flex items-center mb-3">
                    <Car className="w-5 h-5 text-red-600 mr-2" />
                    <h4 className="font-semibold">Wegbeschreibung</h4>
                  </div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <p><strong>Von der A215 kommend:</strong></p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Ausfahrt Kiel-Mitte nehmen</li>
                      <li>Auf die B76 Richtung Plön/Oldenburg</li>
                      <li>Der Segeberger Landstraße folgen</li>
                      <li>Wir befinden uns auf der rechten Seite</li>
                    </ul>

                    <p className="mt-4"><strong>Mit öffentlichen Verkehrsmitteln:</strong></p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Bus 45 bis Haltestelle "Alte Siedlung"</li>
                      <li>2 Minuten Fußweg</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a 
                    href="https://www.google.com/maps/dir//Auto+Tetik+Segeberger+Landstrasse+4a+24145+Kiel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Route planen
                  </a>
                  <a 
                    href="https://www.google.com/maps?q=Auto+Tetik+Segeberger+Landstrasse+4a+24145+Kiel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Auf Google Maps ansehen
                  </a>
                </div>
              </div>
            </div>
            {/* Kontaktbereich */}
            {/* <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Weitere Kontaktmöglichkeiten</h3>
              <p>Für Autoverwertung:</p>
              <a href="mailto:autoverwertung.tetik@gmail.com" className="text-red-500 hover:text-red-400 block mb-2">
              auto-tetik@gmx.de
              </a>
              <p>Für allgemeine Anfragen:</p>
              <a href="mailto:autoverwertungtetik@gmail.com" className="text-red-500 hover:text-red-400 block">
              auto-tetik@gmx.de
              </a>
            </div> */}
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <div className="flex items-center mb-8">
            <Camera className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-2xl font-semibold">Galerie</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl aspect-video bg-black/60 backdrop-blur-md border border-white/10 hover:border-red-600/50 transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-white">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center">
            {/* Placeholder text for when you want to add your own images */}
            Hier werden bald aktuelle Bilder unserer Werkstatt und Projekte zu sehen sein.
          </p>
        </div>
      </div>
    </section>
  );
};