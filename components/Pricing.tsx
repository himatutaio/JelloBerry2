
import React from 'react';
import { Check, PhoneCall, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: "One-page / Klein",
    price: "€500 – €900",
    description: "Focus op conversie en snelheid.",
    color: "purple",
    features: [
      "Maatwerk One-page design",
      "Razendsnelle laadtijd",
      "Geoptimaliseerd voor Mobiel",
      "Contact & WhatsApp link",
      "Basis SEO inrichting"
    ]
  },
  {
    name: "Standaard WordPress",
    price: "€800 – €1.500",
    description: "Hét visitekaartje voor uw bedrijf.",
    recommended: true,
    color: "indigo",
    features: [
      "Volledige website (meerdere pag's)",
      "Eigen Beheer (CMS)",
      "Uitgebreide SEO optimalisatie",
      "Blog & Nieuws functionaliteit",
      "Social Media Integraties",
      "Google Analytics koppeling"
    ]
  },
  {
    name: "Maatwerk / Pro",
    price: "€1.500 – €3.000+",
    description: "Complexe web-apps en shops.",
    color: "pink",
    features: [
      "Uniek & Exclusief design",
      "PHP & Database Maatwerk",
      "E-commerce & Betalingen",
      "API & CRM Koppelingen",
      "Geavanceerde interacties",
      "Priority VIP Support"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="prijzen" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-100/20 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 text-center">Investering</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-pink-500 to-orange-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Kwaliteit is een keuze. Wij hanteren transparante tarieven voor elk budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-10 rounded-[3rem] transition-all duration-500 border-2 ${
                plan.recommended 
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10 border-purple-500' 
                  : 'bg-white border-slate-100 text-slate-900 shadow-xl shadow-slate-200/50 hover:border-purple-200'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                  Populairste keuze
                </div>
              )}
              
              <div className="mb-10 text-center">
                <h3 className={`text-2xl font-black mb-3 ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={plan.recommended ? 'text-slate-400' : 'text-slate-500'}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-10 text-center">
                <div className={`text-4xl font-black mb-2 ${plan.recommended ? 'text-purple-400' : 'text-purple-600'}`}>
                  {plan.price}
                </div>
                <div className="text-xs font-bold opacity-60 uppercase tracking-tighter">Vanaf prijs (Excl. BTW)</div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-4">
                    <div className={`mt-1 p-1 rounded-full ${plan.recommended ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="tel:+31620151648" 
                className={`w-full py-5 rounded-2xl font-black text-lg text-center transition-all flex items-center justify-center gap-3 shadow-lg ${
                  plan.recommended 
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:brightness-110' 
                    : 'bg-slate-100 text-slate-900 hover:bg-purple-600 hover:text-white'
                }`}
              >
                <PhoneCall size={20} />
                Offerte Aanvragen
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 glass-card rounded-[3rem] border border-purple-200 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-purple-600"></div>
          <div className="flex items-center gap-6">
            <div className="p-4 bg-purple-100 text-purple-600 rounded-2xl hidden sm:block">
              <HelpCircle size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">Maandelijks Onderhoud & Hosting</h4>
              <p className="text-slate-600 font-medium max-w-xl leading-relaxed">
                Wij nemen al het technische werk uit handen. Updates, backups, security en razendsnelle servers.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right bg-white p-6 rounded-2xl border border-slate-100 shadow-sm min-w-[200px]">
            <div className="text-3xl font-black text-purple-600 mb-1">€20 – €50</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Per maand</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
