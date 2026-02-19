
import React, { useState, useEffect } from 'react';
import { ArtPiece } from '../types';
import { X, Maximize2, Loader2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedPiece, setSelectedPiece] = useState<ArtPiece | null>(null);
  const [drawings, setDrawings] = useState<ArtPiece[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDrawings = async () => {
    try {
      const response = await fetch('/api/drawings');
      const data = await response.json();
      setDrawings(data);
    } catch (error) {
      console.error('Error fetching drawings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrawings();
    
    // Listen for custom event to refresh gallery
    window.addEventListener('refresh-gallery', fetchDrawings);
    return () => window.removeEventListener('refresh-gallery', fetchDrawings);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-[#050505]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl font-serif font-bold mb-4">The Collection</h2>
            <div className="h-1 w-24 gold-bg"></div>
          </div>
          <p className="text-gray-500 max-w-md text-right">
            A curated selection of portrait drawings. Each piece explores the delicate balance between light and shadow.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <Loader2 className="animate-spin text-[#d4af37]" size={48} />
            <p className="text-gray-500 font-serif italic">Loading collection...</p>
          </div>
        ) : (
          <div className="masonry-grid">
            {drawings.map((piece) => (
              <div 
                key={piece.id} 
                className="masonry-item group relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedPiece(piece)}
              >
                <img 
                  src={piece.imageUrl} 
                  alt={piece.title} 
                  className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <Maximize2 className="absolute top-6 right-6 text-[#d4af37]" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">{piece.title}</h3>
                  <p className="text-[#d4af37] text-sm font-medium tracking-widest">{piece.year} • {piece.medium}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      {selectedPiece && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedPiece(null)}></div>
          <div className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-6xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white z-10"
              onClick={() => setSelectedPiece(null)}
            >
              <X size={32} />
            </button>
            
            <div className="md:w-2/3 bg-black flex items-center justify-center p-4">
              <img 
                src={selectedPiece.imageUrl} 
                alt={selectedPiece.title} 
                className="max-h-[80vh] w-auto shadow-2xl"
              />
            </div>
            
            <div className="md:w-1/3 p-12 flex flex-col justify-center">
              <span className="text-[#d4af37] uppercase tracking-[0.2em] text-xs font-bold mb-4">{selectedPiece.year} Release</span>
              <h2 className="text-4xl font-serif font-bold mb-6">{selectedPiece.title}</h2>
              <div className="h-px w-full bg-white/10 mb-8"></div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {selectedPiece.description}
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500 text-sm">Medium</span>
                  <span className="text-white text-sm">{selectedPiece.medium}</span>
                </div>
              </div>
              <a 
                href="#contact" 
                onClick={() => setSelectedPiece(null)}
                className="gold-bg text-black py-4 font-bold uppercase tracking-widest hover:brightness-110 transition-all text-center"
              >
                Inquire About Piece
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
