
import React from 'react';
import { ChevronRight, Smartphone, Globe, BarChart, Code, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-200/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-100/30 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Floating Icons for 'Fill' */}
        <div className="hidden lg:block absolute -left-10 top-20 text-purple-400 opacity-20 animate-float">
          <Code size={80} />
        </div>
        <div className="hidden lg:block absolute -right-10 bottom-20 text-pink-400 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Rocket size={80} />
        </div>

        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-bold mb-8 border border-purple-200 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
          </span>
          Webdesign & Online Marketing Specialist
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
          Professioneel Webdesign<br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
            & SEO voor ZZP & MKB.
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
          Wij bouwen converterende WordPress websites en PHP maatwerk die uw bedrijf laten groeien. 
          Van snelle one-pagers tot complete marketingstrategieën die resultaat garanderen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="tel:+31620151648" 
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-purple-300 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
          >
            Vraag Offerte Aan <ChevronRight size={24} />
          </a>
          <a 
            href="#prijzen" 
            onClick={(e) => scrollToSection(e, 'prijzen')}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-800 border-2 border-slate-200 rounded-2xl font-bold text-xl hover:border-purple-300 hover:bg-purple-50 transition-all flex items-center justify-center"
          >
            Bekijk Onze Pakketten
          </a>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: <Globe />, title: "WordPress & PHP", sub: "Websites die converteren" },
            { icon: <BarChart />, title: "SEO & Vindbaarheid", sub: "Scoren in Google" },
            { icon: <Smartphone />, title: "Maatwerk Design", sub: "Uniek voor uw merk" }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl shadow-lg border border-white/50 flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform duration-300">
              <div className={`p-4 rounded-2xl mb-2 ${idx === 0 ? 'bg-purple-100 text-purple-600' : idx === 1 ? 'bg-pink-100 text-pink-600' : 'bg-orange-100 text-orange-600'}`}>
                {item.icon}
              </div>
              <h3 className="font-black text-slate-900 text-lg leading-tight">{item.title}</h3>
              <p className="text-sm text-slate-500 font-medium">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
