
import React from 'react';
import { Phone, MessageSquare, ArrowRight, Star } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
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

  return (
    <section id="over-ons" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 rounded-[4rem] overflow-hidden shadow-2xl relative border border-white/10">
          {/* Decorative shapes with more 'Berry' vibe */}
          <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-purple-500/30 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-pink-500/30 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>

          <div className="relative p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-purple-300 text-xs font-black uppercase tracking-widest mb-8 border border-white/10">
                <Star size={14} fill="currentColor" /> Direct Contact
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                Samen bouwen we aan uw <span className="text-purple-400">online succes.</span>
              </h2>
              <p className="text-xl text-purple-100/70 mb-12 font-medium leading-relaxed">
                Geen ingewikkelde formulieren. Gewoon direct contact en een eerlijk advies. 
                Bel of WhatsApp ons en ontdek wat JelloBerry voor u kan betekenen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a 
                  href="tel:+31620151648" 
                  className="flex flex-col items-center lg:items-start p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white hover:text-slate-900 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div className="text-purple-300 text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-purple-600">Bel ons</div>
                  <div className="text-2xl font-black">+31 6 20151648</div>
                </a>
                
                <a 
                  href="https://wa.me/31620151648" 
                  className="flex flex-col items-center lg:items-start p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-green-500 hover:border-green-400 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <MessageSquare size={28} />
                  </div>
                  <div className="text-purple-300 text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-white/80">WhatsApp</div>
                  <div className="text-2xl font-black text-white">Stuur bericht</div>
                </a>
              </div>
            </div>

            <div className="w-full lg:w-[400px] bg-white rounded-[3rem] p-10 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-400 rounded-3xl rotate-12 -z-10 animate-pulse"></div>
              <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">Waarom JelloBerry?</h3>
              <ul className="space-y-6">
                {[
                  "Specialisten in WordPress & PHP",
                  "Geen verborgen kosten",
                  "Persoonlijk & Dichtbij",
                  "SEO Focus vanaf de start",
                  "Support die écht helpt"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 font-bold">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={14} strokeWidth={4} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="w-full mt-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-purple-600 transition-all flex items-center justify-center gap-3 group"
              >
                Portfolio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
