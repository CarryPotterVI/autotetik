import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Auto Tetik - Alle Rechte vorbehalten</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button 
              onClick={() => onNavigate('impressum')} 
              className="text-gray-400 hover:text-white"
            >
              Impressum
            </button>
            <button 
              onClick={() => onNavigate('datenschutz')} 
              className="text-gray-400 hover:text-white"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};