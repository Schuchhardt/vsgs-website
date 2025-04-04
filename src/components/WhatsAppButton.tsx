import React from 'react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/56999993084', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group flex items-center justify-center">
        {/* Tooltip */}
        <div className="absolute bottom-16 hidden group-hover:flex items-center justify-center bg-black text-white text-xs rounded px-2 py-1">
          Contáctanos
        </div>

        {/* WhatsApp Button */}
        <button 
          onClick={openWhatsApp}
          className="bg-green-500 rounded-full p-3 shadow-lg"
          aria-label="Contactar por WhatsApp"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            alt="WhatsApp Logo"
            className="w-12 h-12 object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
