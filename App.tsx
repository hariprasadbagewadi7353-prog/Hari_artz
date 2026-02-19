
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PostDrawing from './components/PostDrawing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const handlePostSuccess = () => {
    // Dispatch a custom event to notify Gallery to refresh
    window.dispatchEvent(new CustomEvent('refresh-gallery'));
  };

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
        <PostDrawing onSuccess={handlePostSuccess} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
