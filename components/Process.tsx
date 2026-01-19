
import React from 'react';
import { Coffee, PencilRuler, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Coffee size={32} />,
    title: "1. Kennismaking",
    description: "We bespreken uw wensen, doelen en doelgroep onder het genot van een (virtuele) kop koffie.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: <PencilRuler size={32} />,
    title: "2. Strategie & Design",
    description: "We maken een uniek ontwerp dat past bij uw huisstijl en focust op conversie.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <Code2 size={32} />,
    title: "3. Ontwikkeling",
    description: "Onze developers bouwen uw website met de nieuwste technieken in WordPress of PHP.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Rocket size={32} />,
    title: "4. Lancering & Groei",
    description: "We zetten uw site live en starten met de SEO en marketing om bezoekers aan te trekken.",
    color: "bg-pink-100 text-pink-600"
  }
];

const Process: React.FC = () => {
  return (
    <section id="werkwijze" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Hoe wij werken</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Een gestructureerd proces voor een feilloos resultaat. Van idee tot succesvolle lancering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Decorative line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={`w-24 h-24 ${step.color} rounded-[2rem] flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 border-4 border-white`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
