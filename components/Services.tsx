
import React from 'react';
import { Monitor, Search, Server, Settings, Zap, Layout, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Webdesign",
    description: "Wij bouwen professionele WordPress en PHP websites die converteren. Van one-pagers tot complexe maatwerk systemen.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Strategie",
    description: "Word beter gevonden in Google. Wij optimaliseren uw techniek, content en autoriteit voor maximale resultaten.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Hosting & Security",
    description: "Snelheid en stabiliteit zijn cruciaal. Onze hosting is geoptimaliseerd voor WordPress en 99.9% uptime.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Technisch Beheer",
    description: "Geen zorgen meer over updates of beveiliging. Wij houden uw website technisch up-to-date en veilig.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Online Marketing",
    description: "Help uw onderneming groeien met gerichte online marketing campagnes en social media strategieën.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Mobile Optimization",
    description: "Uw website ziet er fantastisch uit op desktop, tablet en mobiel. Geen compromissen meer.",
    color: "from-indigo-500 to-purple-500"
  }
];

const Services: React.FC = () => {
  return (
    <section id="diensten" className="py-32 relative bg-slate-950 overflow-hidden">
      {/* Decorative gradients for dark background */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-600/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-purple-400 text-xs font-black uppercase tracking-widest mb-6 border border-white/10">
              <Sparkles size={14} /> Full Service Bureau
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">Onze Expertise.</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Alles wat u nodig heeft voor een dominante online aanwezigheid. Van de eerste code tot de laatste klik.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <div className="text-8xl font-black text-white/5 select-none">SERVICES</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-500 relative overflow-hidden"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-[1.25rem] flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
