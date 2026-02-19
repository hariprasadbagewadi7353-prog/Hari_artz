
import React, { useState } from 'react';
import { Upload, Sparkles, Loader2, CheckCircle } from 'lucide-react';
import { analyzeCommissionRequest } from '../services/geminiService';

const CommissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    budget: '1500',
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleConsult = async () => {
    if (!formData.description) return;
    setLoading(true);
    const result = await analyzeCommissionRequest(formData.description);
    setFeedback(result);
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="commissions" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-white/5 border border-[#d4af37]/30 p-16 rounded-sm">
            <CheckCircle className="mx-auto text-[#d4af37] mb-6" size={64} />
            <h2 className="text-4xl font-serif font-bold mb-4">Request Received</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Your artistic journey with SoulSketch has begun. Elias will review your reference and description personally and reach out within 48 hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-10 py-4 border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Back to Studio
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="commissions" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-serif font-bold mb-6">Commission a Legacy</h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Allow us to immortalize your story. We specialize in custom portrait commissions from high-resolution reference photos. Each piece is hand-drawn over 40-60 hours of focused dedication.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gold-bg flex items-center justify-center flex-shrink-0 text-black font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Consultation</h4>
                  <p className="text-sm text-gray-500">We discuss the vision, emotional tone, and scale of your piece.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gold-bg flex items-center justify-center flex-shrink-0 text-black font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Sketching Phase</h4>
                  <p className="text-sm text-gray-500">Elias provides a preliminary rough sketch for composition approval.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gold-bg flex items-center justify-center flex-shrink-0 text-black font-bold">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">The Rendering</h4>
                  <p className="text-sm text-gray-500">The meticulous process of layering charcoal and light begins.</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 p-10 border border-white/10 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-black border border-white/10 p-4 focus:border-[#d4af37] outline-none transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-black border border-white/10 p-4 focus:border-[#d4af37] outline-none transition-colors"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Tell us the story</label>
                <button 
                  type="button"
                  onClick={handleConsult}
                  disabled={loading || !formData.description}
                  className="text-xs text-[#d4af37] flex items-center hover:underline disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin mr-1" size={12} /> : <Sparkles className="mr-1" size={12} />}
                  Get Artistic Feedback
                </button>
              </div>
              <textarea 
                rows={4}
                required
                className="w-full bg-black border border-white/10 p-4 focus:border-[#d4af37] outline-none transition-colors"
                placeholder="Describe the mood, the subject, and why this piece matters..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
              {feedback && (
                <div className="p-4 bg-[#d4af37]/10 border-l-2 border-[#d4af37] text-sm italic text-gray-300 animate-in fade-in duration-500">
                  " {feedback} "
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Reference Photo</label>
              <div className="relative group">
                <input 
                  type="file" 
                  className="hidden" 
                  id="file-upload" 
                  onChange={handleFileChange}
                />
                <label 
                  htmlFor="file-upload" 
                  className="w-full bg-black border border-dashed border-white/20 p-8 flex flex-col items-center justify-center cursor-pointer group-hover:border-[#d4af37] transition-colors"
                >
                  <Upload className="text-gray-500 mb-2 group-hover:text-[#d4af37]" size={32} />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {file ? file.name : 'Upload reference photo (High res preferred)'}
                  </span>
                </label>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full gold-bg text-black py-5 font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all text-sm"
            >
              Submit Commission Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CommissionForm;
