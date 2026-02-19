
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Voices of Connection</h2>
        <div className="h-1 w-24 gold-bg mx-auto"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white/5 p-12 relative border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 flex flex-col">
            <Quote className="text-[#d4af37]/20 absolute top-10 right-10" size={48} />
            <p className="text-gray-400 italic mb-10 leading-relaxed z-10">"{t.text}"</p>
            <div className="mt-auto flex items-center space-x-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-[#d4af37]" />
              <div className="text-left">
                <h4 className="font-bold text-white text-sm uppercase tracking-wider">{t.name}</h4>
                <p className="text-xs text-[#d4af37]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
