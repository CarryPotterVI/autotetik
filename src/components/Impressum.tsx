import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ImpressumProps {
  onBack: () => void;
}

export const Impressum: React.FC<ImpressumProps> = ({ onBack }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Zurück zur Startseite
      </button>
      
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="space-y-2">
            <div>
              <p className="font-semibold">Firma:</p>
              <p>Auto Tetik</p>
            </div>
            <div>
              <p className="font-semibold">Inhaber:</p>
              <p>Gökhan Tetik</p>
            </div>
            <div>
              <p className="font-semibold">Leistungsspektrum:</p>
              <p>KFZ-Werkstatt & Kieler Autoverwertung</p>
              <p>StID: 20/147/00591</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Adresse</h2>
          <p>Segeberger Landstraße 4a</p>
          <p>24145 Kiel</p>
          <p>Deutschland</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
          <p>Telefon: 0431-728896</p>
          <p>Mobil: 0151-47493818</p>
          <p>E-Mail: auto-tetik@gmx.de</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <div className="space-y-2">
            <div>
              <p className="font-semibold">Berufsbezeichnung:</p>
              <p>KFZ-Meisterbetrieb</p>
            </div>
            <div>
              <p className="font-semibold">Zuständige Kammer:</p>
              <p>Handwerkskammer Lübeck</p>
            </div>
            <div>
              <p className="font-semibold">Berufsrechtliche Regelungen:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Handwerksordnung (HwO)</li>
                <li>Gesetz über die Ordnung des Handwerks (Handwerksgesetz)</li>
              </ul>
              <p className="text-sm mt-2">
                Die berufsrechtlichen Regelungen können bei der Handwerkskammer Lübeck eingesehen werden.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt gemäß § 55 RStV</h2>
          <p>Gökhan Tetik</p>
          <p>Auto Tetik</p>
          <p>Segeberger Landstraße 4a</p>
          <p>24145 Kiel</p>
          <p>Deutschland</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Haftungsausschluss (Disclaimer)</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Haftung für Inhalte</h3>
              <p className="text-sm">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Haftung für Links</h3>
              <p className="text-sm">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};