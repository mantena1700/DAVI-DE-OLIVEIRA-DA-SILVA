import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const extendedNavItems = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Calculadora ROI', href: '#roi-calculator' },
    { label: 'Metodologia', href: '#methodology' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollTo('#hero')}
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 rounded-lg shadow-[0_0_15px_rgba(167,139,250,0.5)] group-hover:shadow-[0_0_25px_rgba(232,121,249,0.8)] transition-all duration-300">
              <span className="text-white font-bold text-xl tracking-tighter font-sans">D7</span>
            </div>
            <span className="text-white font-bold text-lg tracking-wide font-sans group-hover:text-cyan-400 transition-colors">
              {COMPANY_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {extendedNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-sm font-medium text-slate-300 hover:text-white hover:tracking-wide transition-all uppercase font-sans tracking-wider"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(232,121,249,0.4)] uppercase tracking-wider"
            >
              Iniciar Projeto
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white p-2"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div 
        className={`fixed inset-0 z-[60] bg-black transform transition-transform duration-300 flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="flex flex-col space-y-8 text-center">
          {extendedNavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-3xl font-bold text-white hover:text-fuchsia-400 transition-colors font-sans"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;