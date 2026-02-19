
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-[#d4af37]/40 hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-[#d4af37]/40 hidden md:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?auto=format&fit=crop&w=800&q=80" 
            alt="The Artist Elias Thornwood" 
            className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
        </div>
        
        <div>
          <span className="text-[#d4af37] font-bold tracking-widest uppercase block mb-4">Behind the Pen</span>
          <h2 className="text-5xl font-serif font-bold mb-8 italic">Meet Elias Thornwood</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            With over two decades dedicated to the fine art of portraiture, Elias Thornwood has developed a signature style that focuses on the emotional truth rather than mere physical likeness.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            His technique blends traditional charcoal methods with modern mixed media, allowing for a unique textural depth that seems to pulse with life. Elias believes that every line drawn is a word spoken in the silent language of the human soul.
          </p>
          
          <div className="grid grid-cols-3 gap-8 text-center border-t border-white/10 pt-10">
            <div>
              <p className="text-3xl font-serif font-bold text-[#d4af37] mb-1">500+</p>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">Portraits Completed</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-[#d4af37] mb-1">12</p>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">Global Exhibitions</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-[#d4af37] mb-1">20y</p>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
