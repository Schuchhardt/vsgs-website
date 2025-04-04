
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/ce51183b-5388-4ab5-9edf-af095e0ffd7d.png" 
            alt="VSGS Logo" 
            className="h-12 md:h-14" 
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-vsgs-black hover:text-vsgs-yellow transition-colors font-medium"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-vsgs-black hover:text-vsgs-yellow transition-colors font-medium"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('clients')}
            className="text-vsgs-black hover:text-vsgs-yellow transition-colors font-medium"
          >
            Clientes
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-vsgs-black hover:text-vsgs-yellow transition-colors font-medium"
          >
            Sobre Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Solicitar Cotización
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-vsgs-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-vsgs-black hover:text-vsgs-yellow transition-colors font-medium py-2"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-vsgs-black hover:text-vsgs-yellow transition-colors font-medium py-2"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-vsgs-black hover:text-vsgs-yellow transition-colors font-medium py-2"
            >
              Clientes
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-vsgs-black hover:text-vsgs-yellow transition-colors font-medium py-2"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full text-center py-3"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
