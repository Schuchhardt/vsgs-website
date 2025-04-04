
import React from 'react';

// In a real implementation, you would replace these with actual client logos
const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Nuestros Clientes</h2>
          <p className="text-lg text-vsgs-gray max-w-3xl mx-auto">
            Empresas que confían en nuestros servicios
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Placeholder client logos - replace with actual client logos */}
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className="bg-white p-6 rounded-lg shadow-sm h-24 w-full max-w-xs flex items-center justify-center"
            >
              <div className="text-vsgs-gray text-lg font-medium">
                Cliente {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
