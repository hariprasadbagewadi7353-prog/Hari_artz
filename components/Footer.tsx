
import React from 'react';
import { Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-serif font-bold tracking-widest mb-6 block">
              <span className="gold-gradient">Hari_ArtZ</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Professional portrait artist specializing in high-contrast charcoal and graphite drawings. Capturing the soul through every stroke.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/im_harsha__7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                <Instagram size={18} />
              </a>
              <a href="mailto:studio@hariartz.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#post" className="hover:text-white transition-colors">Admin Panel</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="https://www.instagram.com/im_harsha__7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="mailto:studio@hariartz.com" className="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Contact</h4>
            <ul className="space-y-6 text-sm text-gray-500">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#d4af37] flex-shrink-0" />
                <span>studio@hariartz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            &copy; 2024 Hari_ArtZ STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-[#d4af37]">Terms</a>
            <a href="#" className="hover:text-[#d4af37]">Cookies</a>
            <a href="#" className="hover:text-[#d4af37]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
