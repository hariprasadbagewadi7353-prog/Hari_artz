
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import CommissionForm from './components/CommissionForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Artistic Separator */}
        <div className="container mx-auto px-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
        </div>

        <Gallery />
        <About />
        <CommissionForm />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
