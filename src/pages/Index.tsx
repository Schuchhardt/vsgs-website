
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ClientsSection from '../components/ClientsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'VSGS - Maquinaria Pesada y Movimiento de Tierras';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ClientsSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
