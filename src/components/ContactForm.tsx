
import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    phone: '',
    email: '',
    service: serviceOptions[0],
    location: '',
    comments: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'La empresa es requerida';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^\d{9,}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Ingrese un número de teléfono válido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingrese un email válido';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'La ubicación del proyecto es requerida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          company: '',
          position: '',
          phone: '',
          email: '',
          service: serviceOptions[0],
          location: '',
          comments: ''
        });
        
        // In a real implementation, you'd send the form data to a server here
      }, 1500);
    }
  };

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
          {isSubmitted ? (
            <div className="text-center py-10">
              <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">¡Gracias por contactarnos!</h3>
              <p className="text-lg text-vsgs-gray mb-6">
                Te responderemos en menos de 24 horas.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Nombre de la empresa"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Cargo (opcional)
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Tu cargo en la empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Teléfono (WhatsApp preferido) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Tu número de teléfono"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Tu correo electrónico"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Tipo de servicio requerido *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  >
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-vsgs-gray mb-1">
                    Ubicación del proyecto *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Ej. Santiago, Región Metropolitana"
                  />
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-vsgs-gray mb-1">
                  Comentarios adicionales
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Detalles adicionales sobre tu proyecto"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-vsgs-yellow text-vsgs-black hover:shadow-lg transition-all'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
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
