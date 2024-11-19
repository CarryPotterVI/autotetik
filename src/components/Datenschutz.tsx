import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface DatenschutzProps {
  onBack: () => void;
}

export const Datenschutz: React.FC<DatenschutzProps> = ({ onBack }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Zurück zur Startseite
      </button>
      
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Verantwortlicher für die Datenverarbeitung</h2>
          <p className="mb-4">Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO):</p>
          <div className="space-y-1">
            <p>Gökhan Tetik</p>
            <p>Auto Tetik - KFZ-Werkstatt & Kieler Autoverwertung</p>
            <p>Segeberger Landstrasse 4a</p>
            <p>24145 Kiel</p>
            <p>E-Mail: auto-tetik@gmx.de</p>
            <p>Telefon: 0431-728896</p>
            <p>Mobil: 0151-47493818</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
          
          <h3 className="text-lg font-semibold mb-2">a) Beim Besuch der Webseite</h3>
          <p className="mb-4">
            Beim Aufrufen unserer Webseite werden durch den Browser automatisch Informationen an den Server unserer Webseite gesendet. 
            Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Daten werden dabei erfasst:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Webseite, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            <li>Name Ihres Access-Providers</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">b) Bei Kontaktaufnahme</h3>
          <p className="mb-4">
            Bei Kontaktaufnahme über Telefon oder E-Mail werden folgende Daten verarbeitet:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer (falls angegeben)</li>
            <li>Ihr Anliegen</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Weitergabe von Daten</h2>
          <p className="mb-4">
            Eine Übermittlung Ihrer Daten an Dritte zu anderen als den folgenden Zwecken findet nicht statt:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Weitergabe an Dienstleister (z.B. Abschleppdienste)</li>
            <li>Gesetzlich vorgeschriebene Weitergabe</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Ihre Rechte</h2>
          <p className="mb-4">Sie haben folgende Rechte:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            <li>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Beschwerderecht</h2>
          <p className="mb-4">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Änderungen der Datenschutzerklärung</h2>
          <p className="mb-4">
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf unter Beachtung der geltenden Datenschutzvorschriften anzupassen.
          </p>
          <p className="text-sm text-gray-400">Stand: November 2024</p>
        </section>
      </div>
    </div>
  );
};