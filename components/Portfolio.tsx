
import React from 'react';
import { ExternalLink, Globe, Layout } from 'lucide-react';

const projects = [
  {
    name: "KTI AI",
    url: "https://kti-ai.nl",
    description: "Geavanceerde AI-oplossingen voor moderne bedrijven.",
    tag: "AI & Tech",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Instanotes",
    url: "https://instanotes.nl",
    description: "Slimme notitie-optimalisatie aangedreven door kunstmatige intelligentie.",
    tag: "Productiviteit",
    color: "from-purple-600 to-pink-600"
  },
  {
    name: "Marokkaans Feest",
    url: "https://MarokkaansFeest.nl",
    description: "Event-platform voor de meest authentieke Marokkaanse ervaringen.",
    tag: "Events & Culture",
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Therapy AI",
    url: "https://therapyai.nl",
    description: "Innovatieve AI-ondersteuning voor de mentale gezondheidszorg.",
    tag: "Health Tech",
    color: "from-emerald-500 to-teal-600"
  },
  {
    name: "School Bots",
    url: "https://school-bots.nl",
    description: "Educatieve bots die het leerproces transformeren voor studenten.",
    tag: "E-Learning",
    color: "from-cyan-500 to-blue-600"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-xs font-black uppercase tracking-widest mb-6 border border-purple-200">
              <Layout size={14} /> Onze Trots
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-none tracking-tighter">Recent Werk.</h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Van AI-gestuurde applicaties tot culturele platformen. Wij bouwen digitale ervaringen die blijven hangen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-purple-300 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Background Glow on Hover */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-100 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg`}>
                  {project.tag}
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-500 font-medium mb-12 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-400 group-hover:text-purple-600 font-bold transition-colors">
                  <Globe size={18} />
                  <span className="text-sm tracking-tight">{project.url.replace('https://', '')}</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <ExternalLink size={20} />
                </div>
              </div>
            </a>
          ))}

          {/* Call to Action Card */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center text-white shadow-2xl shadow-purple-200">
            <h3 className="text-3xl font-black mb-6">Uw project hier?</h3>
            <p className="text-purple-100 mb-10 font-medium">
              Klaar om uw digitale visie werkelijkheid te maken? Laten we samen iets legendarisch bouwen.
            </p>
            <a 
              href="tel:+31620151648" 
              className="px-8 py-4 bg-white text-purple-700 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl shadow-black/10"
            >
              Start Vandaag
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
