
import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
                Have a question about a drawing or want to discuss a project? 
                Send us a message and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#d4af37]">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Follow Me</p>
                    <a href="https://www.instagram.com/im_harsha__7" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d4af37] transition-colors">@im_harsha__7</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#d4af37]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Me</p>
                    <p className="text-white">studio@hariartz.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 p-8 md:p-10 border border-white/5 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black border border-white/10 p-4 focus:border-[#d4af37] outline-none transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black border border-white/10 p-4 focus:border-[#d4af37] outline-none transition-all text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-2">Message</label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full h-32 bg-black border border-white/10 p-4 focus:border-[#d4af37] outline-none transition-all text-white resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-3 ${
                    isSuccess ? 'bg-emerald-600 text-white' : 'gold-bg text-black hover:brightness-110'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={20} />
                      <span>Message Sent</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
