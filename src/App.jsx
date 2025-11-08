import React from 'react';
import Hero from './components/Hero.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-slate-800">
      <Hero />
      <ProductShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
