
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    // Replace with the actual phone number
    window.open('https://wa.me/56912345678', '_blank');
  };

  return (
    <button 
      onClick={openWhatsApp}
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </button>
  );
};

export default WhatsAppButton;
