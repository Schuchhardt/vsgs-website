
import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vsgs-black text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/logo_black.png" 
              alt="VSGS Logo" 
              className="h-12 mb-4" 
            />
            <p className="text-gray-300 mt-4">
              Soluciones de maquinaria pesada y movimiento de tierras para construcción y minería.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-vsgs-yellow" />
                <span>+56 9 9999 3084</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-vsgs-yellow" />
                <span>contacto@vsgs.cl</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="hover:text-vsgs-yellow transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:text-vsgs-yellow transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#clients" 
                  className="hover:text-vsgs-yellow transition-colors"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-vsgs-yellow transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-vsgs-yellow transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/vsgs_maquinaria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-vsgs-gray/20 hover:bg-vsgs-yellow hover:text-vsgs-black p-3 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VSGS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
