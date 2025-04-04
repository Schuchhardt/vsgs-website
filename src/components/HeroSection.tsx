
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://plus.unsplash.com/premium_photo-1661963927439-26e74bee3674?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-vsgs-black/70 to-transparent"></div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Tecnología y Potencia para Construcción y Minería
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-vsgs-white/90">
            Arriendo de maquinaria pesada y movimiento de tierras con operadores calificados.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-vsgs-yellow text-vsgs-black font-bold py-3 px-8 rounded-full hover:shadow-xl transition-all duration-800 animate-pulse-subtle text-lg"
          >
            Cotiza tu proyecto
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
