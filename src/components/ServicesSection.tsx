
import React from 'react';
import { 
  Tractor, 
  Ruler, 
  Construction, 
  Mountain, 
  Hammer, 
  Map
} from 'lucide-react';

const serviceData = [
  {
    icon: <Tractor size={48} className="text-vsgs-yellow mb-4" />,
    title: "Arriendo de Retroexcavadoras Certificadas",
    emoji: "🏗️",
    description: "Potencia y eficiencia para cada obra. Disponemos de retroexcavadoras modernas, mantenidas bajo altos estándares de seguridad, ideales para proyectos de construcción, infraestructura y minería."
  },
  {
    icon: <Ruler size={48} className="text-vsgs-yellow mb-4" />,
    title: "Corte y Perfilado de Terrenos",
    emoji: "🛤️",
    description: "Terrenos preparados con máxima precisión. Realizamos corte y perfilado de superficies para fundaciones, caminos de acceso, plataformas industriales y obras civiles, optimizando tiempos y calidad de ejecución."
  },
  {
    icon: <Construction size={48} className="text-vsgs-yellow mb-4" />,
    title: "Excavaciones para Fundaciones",
    emoji: "🏢",
    description: "Excavaciones estratégicas para grandes proyectos. Desarrollamos excavaciones específicas para fundaciones de edificios, naves industriales, centros logísticos y estructuras mineras, garantizando precisión y estabilidad."
  },
  {
    icon: <Mountain size={48} className="text-vsgs-yellow mb-4" />,
    title: "Relleno y Compactación de Terrenos",
    emoji: "🏜️",
    description: "Suelos listos para resistir cualquier desafío. Ejecutamos relleno de terrenos con materiales estabilizados y compactación técnica, asegurando la preparación de bases sólidas para proyectos exigentes."
  },
  {
    icon: <Hammer size={48} className="text-vsgs-yellow mb-4" />,
    title: "Demoliciones Menores Controladas",
    emoji: "🧱",
    description: "Demoliciones rápidas, seguras y limpias. Realizamos demoliciones menores de muros, estructuras antiguas y obras civiles, siguiendo estrictos protocolos de seguridad y minimizando impacto en el entorno."
  },
  {
    icon: <Map size={48} className="text-vsgs-yellow mb-4" />,
    title: "Habilitación de Caminos de Alto Tráfico",
    emoji: "🛣️",
    description: "Accesos robustos para faenas industriales y mineras. Diseñamos y ejecutamos caminos de acceso resistentes y eficientes, adaptados a condiciones de alto tránsito y terrenos exigentes, mejorando la logística y operatividad de cada proyecto."
  }
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Servicios VSGS</h2>
          <p className="text-lg text-vsgs-gray max-w-3xl mx-auto">
            Soluciones de alta calidad para proyectos de construcción y minería
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card flex flex-col">
              <div className="flex items-center">
                {service.icon}
                {/* <span className="text-3xl ml-2">{service.emoji}</span>  */}
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2 text-vsgs-black">
                {service.title}
              </h3>
              <p className="text-vsgs-gray mb-6 flex-grow">
                {service.description}
              </p>
              <button 
                onClick={scrollToContact}
                className="mt-auto text-vsgs-black border-2 border-vsgs-yellow rounded-full py-2 px-4 font-medium hover:bg-vsgs-yellow transition-colors"
              >
                Cotizar este servicio
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
