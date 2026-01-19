
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Diensten', id: 'diensten' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Werkwijze', id: 'werkwijze' },
    { name: 'Prijzen', id: 'prijzen' },
    { name: 'Over Ons', id: 'over-ons' }
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-white/80 backdrop-blur-2xl border-b border-slate-200 shadow-xl shadow-purple-500/5' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-3xl font-black tracking-tighter bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg animate-logo-wiggle group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out">
                JB
              </div>
              <span className="group-hover:tracking-normal transition-all duration-300">JelloBerry</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)} 
                className="text-slate-800 hover:text-purple-600 font-bold text-xs uppercase tracking-[0.2em] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all group-hover:w-full rounded-full"></span>
              </a>
            ))}
            <a 
              href="tel:+31620151648" 
              className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-2xl hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-200 transition-all font-bold text-sm tracking-wide"
            >
              <Phone size={16} />
              <span>+31 6 20151648</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-3 rounded-2xl transition-all ${scrolled ? 'bg-purple-50 text-purple-600' : 'bg-white/20 backdrop-blur-md text-slate-900 border border-white/50'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-slate-200 py-10 px-8 space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)} 
              className="block text-3xl font-black text-slate-900 hover:text-purple-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-4"></div>
          <a 
            href="tel:+31620151648" 
            className="flex items-center justify-center gap-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-5 rounded-[2rem] font-black text-xl shadow-2xl shadow-purple-200"
          >
            <Phone size={24} />
            <span>Bel direct</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
