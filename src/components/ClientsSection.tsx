
import React from 'react';

const clientes = [
  {
    nombre: "Gesvial",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/Gesvial.fw_-1.png",
    url: "https://gesvial.cl/"
  },
  {
    nombre: "CBB",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/cbb.fw_-1.png",
    url: "https://cbb.cl/"
  },
  {
    nombre: "Besalco",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/besalco.fw_-1.png",
    url: "http://www.besalco.cl/"
  },
  {
    nombre: "Scavo",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/avo.fw_-1.png",
    url: "https://www.scavo.cl/"
  },
  {
    nombre: "Novatec",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/novatec.fw_-1.png",
    url: "http://www.novatec.cl/"
  },
  {
    nombre: "Brotec",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/brotec.fw_-2.png",
    url: "http://www.brotec.cl/"
  },
  {
    nombre: "Metro de Santiago",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/metro.fw_-1.png",
    url: "http://www.metrosantiago.cl/"
  },
  {
    nombre: "Copergo",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/copergo.fw_-2.png",
    url: null
  },
  {
    nombre: "Colas Rail",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/colas.fw_-2.png",
    url: "http://www.colasrail.com/en/company/subsidiary.php?id=19"
  },
  {
    nombre: "Caserones",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/caserones.fw_-1.png",
    url: "http://www.caserones.cl/"
  },
  {
    nombre: "Santa Laura",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/santa-laura.fw_-1.png",
    url: "http://www.agrocreces.cl/"
  },
  {
    nombre: "Icafal",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/icafal.fw_-2.png",
    url: "http://www.icafal.cl/"
  },
  {
    nombre: "Conpax",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/conpax.fw_.png",
    url: "http://www.conpax.cl/"
  },
  {
    nombre: "Ebco",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/ebco.fw_.png",
    url: "http://www.ebco.cl/"
  },
  {
    nombre: "Anglo American",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/angloamerican.fw_.png",
    url: "http://www.angloamerican-chile.cl/"
  },
  {
    nombre: "EMIN",
    logo: "https://www.maquinariacarran.cl/wp-content/uploads/2020/12/emin.fw_.png",
    url: "http://www.emin.cl/"
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            Nuestros Clientes
          </h2>
          <p className="text-lg text-vsgs-gray max-w-3xl mx-auto">
            Empresas que confían en nuestros servicios
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {clientes.map((cliente, index) => (
              <div
              key={index}
              className="bg-white p-2 rounded-lg shadow-sm h-32 w-full max-w-xs flex items-center justify-center"
            >
              {cliente.url ? (
                <a href={cliente.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cliente.logo}
                    alt={cliente.nombre}
                    className="max-h-24 object-contain"
                  />
                </a>
              ) : (
                <img
                  src={cliente.logo}
                  alt={cliente.nombre}
                  className="max-h-24 object-contain"
                />
              )}
            </div>
         
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
