
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import { X } from 'lucide-react';

const App: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'voorwaarden' | null }>({
    isOpen: false,
    type: null,
  });

  const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openLegal = (e: React.MouseEvent, type: 'privacy' | 'voorwaarden') => {
    e.preventDefault();
    setLegalModal({ isOpen: true, type });
  };

  const closeLegal = () => setLegalModal({ isOpen: false, type: null });

  return (
    <div className="min-h-screen bg-white selection:bg-purple-200 selection:text-purple-900 relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      
      <footer className="bg-slate-950 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-20">
            <div>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                JelloBerry
              </span>
              <p className="text-slate-400 text-sm mt-6 leading-relaxed max-w-xs">
                Hét webdesign- en online marketingbureau voor de ondernemers van morgen. Wij bouwen digitale ervaringen die impact maken.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navigatie</h4>
                <div className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
                  <a href="#" onClick={(e) => scrollToId(e, 'home')} className="hover:text-purple-400 transition-colors">Home</a>
                  <a href="#diensten" onClick={(e) => scrollToId(e, 'diensten')} className="hover:text-purple-400 transition-colors">Diensten</a>
                  <a href="#portfolio" onClick={(e) => scrollToId(e, 'portfolio')} className="hover:text-purple-400 transition-colors">Portfolio</a>
                  <a href="#prijzen" onClick={(e) => scrollToId(e, 'prijzen')} className="hover:text-purple-400 transition-colors">Prijzen</a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact</h4>
                <div className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
                  <a href="tel:+31620151648" className="hover:text-purple-400 transition-colors">+31 6 20151648</a>
                  <p>Nederland</p>
                  <p>KvK: Geregistreerd</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-white font-bold mb-4">Direct een offerte?</h4>
              <p className="text-slate-400 text-sm mb-6">Stuur ons een bericht via WhatsApp voor een razendsnelle reactie.</p>
              <a href="https://wa.me/31620151648" className="block w-full py-4 bg-green-500 text-white rounded-2xl text-center font-black hover:bg-green-600 transition-all">WhatsApp ons</a>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-xs font-medium">
              © {new Date().getFullYear()} JelloBerry Webdesign. Alle rechten voorbehouden.
            </div>
            <div className="flex gap-8 text-xs text-slate-600 font-bold uppercase tracking-widest">
              <a href="#" onClick={(e) => openLegal(e, 'privacy')} className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" onClick={(e) => openLegal(e, 'voorwaarden')} className="hover:text-white transition-colors">Voorwaarden</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {legalModal.isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-12">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" onClick={closeLegal}></div>
          <div className="relative w-full max-w-3xl max-h-[80vh] bg-white rounded-[3rem] shadow-2xl shadow-purple-500/20 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0">
              <h3 className="text-2xl font-black text-slate-900">
                {legalModal.type === 'privacy' ? 'Privacy Policy' : 'Algemene Voorwaarden'}
              </h3>
              <button onClick={closeLegal} className="p-3 bg-slate-100 rounded-2xl text-slate-500 hover:bg-purple-600 hover:text-white transition-all">
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed font-medium space-y-6">
              {legalModal.type === 'privacy' ? (
                <>
                  <p>Bij JelloBerry nemen we uw privacy serieus. Deze policy legt uit hoe we omgaan met uw gegevens.</p>
                  <h4 className="text-slate-900 font-black">1. Gegevensverzameling</h4>
                  <p>Wij verzamelen enkel gegevens die u direct aan ons verstrekt via WhatsApp, telefoon of bij het aangaan van een samenwerking (zoals contactgegevens en factuurgegevens).</p>
                  <h4 className="text-slate-900 font-black">2. Doeleinden</h4>
                  <p>Uw gegevens worden uitsluitend gebruikt voor het uitvoeren van onze diensten, waaronder webdesign, hosting en facturatie.</p>
                  <h4 className="text-slate-900 font-black">3. Beveiliging</h4>
                  <p>Wij treffen passende technische maatregelen om uw gegevens te beschermen tegen verlies of onrechtmatige verwerking.</p>
                </>
              ) : (
                <>
                  <p>Welkom bij JelloBerry. Door gebruik te maken van onze diensten gaat u akkoord met de volgende voorwaarden.</p>
                  <h4 className="text-slate-900 font-black">1. Diensten</h4>
                  <p>JelloBerry levert webdesign, hosting en online marketing diensten. Elke opdracht wordt voorafgegaan door een duidelijke prijsafspraak.</p>
                  <h4 className="text-slate-900 font-black">2. Betaling</h4>
                  <p>Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan. Bij maatwerk trajecten werken we vaak met een aanbetaling van 50%.</p>
                  <h4 className="text-slate-900 font-black">3. Hosting & Onderhoud</h4>
                  <p>Hostingpakketten worden maandelijks of jaarlijks gefactureerd. Opzegging dient minimaal één maand voor het einde van de lopende termijn te geschieden.</p>
                </>
              )}
              <div className="pt-10 text-xs text-slate-400 border-t border-slate-50 italic">
                Laatst bijgewerkt op: 1 maart 2024
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Assistant Chat Widget */}
      <AIAssistant />
    </div>
  );
};

export default App;
