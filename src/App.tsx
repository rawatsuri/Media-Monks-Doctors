import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DoctorsCarousel from './components/DoctorsCarousel';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <DoctorsCarousel />
      <Testimonials />
      <BookingSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;