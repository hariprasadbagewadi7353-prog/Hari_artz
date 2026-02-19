
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#030303] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-20">
        <div className="flex flex-col justify-center max-w-2xl">
          <p className="text-[#d4af37] font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in">Hari_ArtZ Studio</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 font-serif">
            Portraits <br /> 
            <span className="italic font-normal">That Speak</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
            Specializing in high-contrast portraiture. Every drawing is a journey through light and shadow, capturing the raw essence of the human spirit in charcoal and graphite.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#gallery" className="gold-bg text-black px-10 py-4 font-bold flex items-center justify-center hover:scale-105 transition-transform tracking-widest uppercase text-xs">
              Explore Gallery <ArrowRight className="ml-2" size={16} />
            </a>
            <a href="#post" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-4 font-bold flex items-center justify-center hover:bg-white/10 transition-colors tracking-widest uppercase text-xs">
              Admin Panel
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-end items-center">
            <div className="relative p-4 border border-[#d4af37]/30">
                <img 
                    src="https://picsum.photos/seed/harsha-artist/600/800" 
                    alt="Harsha - Portrait Artist" 
                    className="w-[450px] h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-10 -left-10 bg-[#d4af37] text-black p-8 max-w-[200px]">
                    <p className="text-xs uppercase font-bold tracking-widest mb-2">The Artist</p>
                    <p className="font-serif italic text-xl">Harsha</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
