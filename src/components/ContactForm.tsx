import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  "Arriendo de Retroexcavadoras",
  "Corte y Perfilado de Terrenos",
  "Excavaciones para Fundaciones",
  "Relleno y Compactación de Terrenos",
  "Demoliciones Menores Controladas",
  "Habilitación de Caminos de Alto Tráfico",
  "Otro servicio"
];

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdkewwra"); // <-- tu ID de Formspree

  return (
    <section id="contact" className="py-20 bg-vsgs-yellow">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 after:bg-vsgs-black">
            Cotiza tu Proyecto en 1 Minuto
          </h2>
          <p className="text-lg text-vsgs-black/80 max-w-3xl mx-auto">
            Completa el formulario y te responderemos en menos de 24 horas
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          {state.succeeded ? (
            <div className="text-center py-10">
              <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">¡Gracias por contactarnos!</h3>
              <p className="text-lg text-vsgs-gray mb-6">
                Te responderemos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Tu nombre"
                  />
                  <ValidationError prefix="Nombre" field="name" errors={state.errors} />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Nombre de la empresa"
                  />
                  <ValidationError prefix="Empresa" field="company" errors={state.errors} />
                </div>

                {/* Cargo */}
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Cargo (opcional)
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Tu cargo en la empresa"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Teléfono (WhatsApp preferido) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Tu número de teléfono"
                  />
                  <ValidationError prefix="Teléfono" field="phone" errors={state.errors} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Tu correo electrónico"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Servicio */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Tipo de servicio requerido *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  >
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Ubicación */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Ubicación del proyecto *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Ej. Santiago, Región Metropolitana"
                  />
                  <ValidationError prefix="Ubicación" field="location" errors={state.errors} />
                </div>
              </div>

              {/* Comentarios adicionales */}
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-vsgs-gray mb-1">
                  Comentarios adicionales
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Detalles adicionales sobre tu proyecto"
                ></textarea>
                <ValidationError prefix="Comentarios" field="comments" errors={state.errors} />
              </div>

              {/* Botón */}
              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full py-4 rounded-lg font-bold text-lg ${
                    state.submitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-vsgs-yellow text-vsgs-black hover:shadow-lg transition-all'
                  }`}
                >
                  {state.submitting ? 'Enviando...' : 'Solicitar Cotización'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
