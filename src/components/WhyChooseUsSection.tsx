
import React from 'react';
import { Truck, Target, Shield, MessageCircle, Laptop } from 'lucide-react';

const reasons = [
  {
    icon: <Truck size={36} className="text-vsgs-yellow" />,
    emoji: "🚜",
    title: "Maquinaria moderna certificada"
  },
  {
    icon: <Target size={36} className="text-vsgs-yellow" />,
    emoji: "🎯",
    title: "Cumplimiento de plazos garantizado"
  },
  {
    icon: <Shield size={36} className="text-vsgs-yellow" />,
    emoji: "🛡️",
    title: "Protocolos de seguridad estrictos"
  },
  {
    icon: <MessageCircle size={36} className="text-vsgs-yellow" />,
    emoji: "📡",
    title: "Contacto inmediato vía WhatsApp"
  },
  {
    icon: <Laptop size={36} className="text-vsgs-yellow" />,
    emoji: "🧑‍💻",
    title: "Gestión rápida de cotizaciones"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">¿Por qué elegirnos?</h2>
          <p className="text-lg text-vsgs-gray max-w-3xl mx-auto">
            Nos destacamos por ofrecer soluciones de alta calidad y eficiencia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <span className="text-2xl mb-2">{reason.emoji}</span>
              <h3 className="font-bold text-vsgs-black">{reason.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
