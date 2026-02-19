
import React, { useState, useEffect } from 'react';
import { Upload, Send, CheckCircle2, Lock, Unlock, AlertCircle, Trash2 } from 'lucide-react';

interface Drawing {
  id: string;
  title: string;
  imageUrl: string;
  medium: string;
  description: string;
}

interface PostDrawingProps {
  onSuccess: () => void;
}

const PostDrawing: React.FC<PostDrawingProps> = ({ onSuccess }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    medium: 'Charcoal & Graphite'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      fetchDrawings();
    }
  }, [isAdmin]);

  const fetchDrawings = async () => {
    try {
      const response = await fetch('/api/drawings');
      const data = await response.json();
      setDrawings(data);
    } catch (error) {
      console.error('Error fetching drawings:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this drawing?')) return;
    
    try {
      const response = await fetch(`/api/drawings/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        fetchDrawings();
        onSuccess();
      }
    } catch (error) {
      console.error('Error deleting drawing:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAdmin(true);
      setAuthError(false);
    } else {
      setAuthError(true);
      setTimeout(() => setAuthError(false), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/drawings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ title: '', description: '', imageUrl: '', medium: 'Charcoal & Graphite' });
        fetchDrawings();
        onSuccess();
        setTimeout(() => setIsSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error posting drawing:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAdmin) {
    return (
      <section id="post" className="py-32 bg-[#050505] relative overflow-hidden">
        {/* Artistic Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Lock className="text-[#d4af37]" size={32} />
            </div>
            <h2 className="text-4xl font-serif font-bold mb-4">Admin Login</h2>
            <p className="text-gray-500 mb-10 font-light">Only authorized users can upload new drawings to the gallery.</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className={`w-full bg-black border ${authError ? 'border-red-500/50' : 'border-white/10'} p-5 focus:border-[#d4af37] outline-none transition-all text-white text-center tracking-[0.5em]`}
                />
                {authError && (
                  <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center text-red-500 text-xs uppercase tracking-widest animate-bounce">
                    <AlertCircle size={12} className="mr-2" /> Incorrect Password
                  </div>
                )}
              </div>
              <button 
                type="submit"
                className="w-full py-5 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-500 font-bold uppercase tracking-[0.2em] text-sm mt-8"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="post" className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <Unlock className="text-[#d4af37]" size={20} />
                <span className="text-[#d4af37] uppercase tracking-[0.3em] text-[10px] font-bold">Admin Mode Active</span>
              </div>
              <h2 className="text-6xl font-serif font-bold">Admin Panel</h2>
            </div>
            <button 
              onClick={() => setIsAdmin(false)}
              className="text-gray-500 hover:text-white text-xs uppercase tracking-widest border-b border-transparent hover:border-white transition-all pb-1"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Upload Form */}
            <div className="lg:col-span-12 mb-20">
              <h3 className="text-2xl font-serif font-bold mb-10 border-b border-white/5 pb-4">Upload New Drawing</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-10">
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-4 group-focus-within:text-[#d4af37] transition-colors">Drawing Title</label>
                    <input 
                      type="text" 
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#d4af37] outline-none transition-all text-3xl font-serif text-white placeholder:text-white/5"
                      placeholder="Artwork Title"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-4 group-focus-within:text-[#d4af37] transition-colors">Art Medium</label>
                      <select 
                        value={formData.medium}
                        onChange={(e) => setFormData({...formData, medium: e.target.value})}
                        className="w-full bg-black border border-white/5 p-5 focus:border-[#d4af37] outline-none transition-all text-white appearance-none cursor-pointer"
                      >
                        <option>Charcoal & Graphite</option>
                        <option>Oil on Canvas</option>
                        <option>Ink & Wash</option>
                        <option>Mixed Media</option>
                        <option>Pencil on Paper</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-4 group-focus-within:text-[#d4af37] transition-colors">Upload from Device</label>
                      <div className="relative">
                        <input 
                          type="file" 
                          accept="image/*"
                          required={!formData.imageUrl}
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                        />
                        <label 
                          htmlFor="file-upload"
                          className="w-full bg-black border border-white/5 p-5 focus:border-[#d4af37] outline-none transition-all text-white flex items-center justify-between cursor-pointer hover:border-[#d4af37]/50"
                        >
                          <span className="text-sm text-gray-400 truncate">
                            {formData.imageUrl ? 'Image Selected' : 'Choose Drawing File'}
                          </span>
                          <Upload size={18} className="text-[#d4af37]" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-4 group-focus-within:text-[#d4af37] transition-colors">Drawing Description</label>
                    <textarea 
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full h-64 bg-black border border-white/5 p-6 focus:border-[#d4af37] outline-none transition-all text-white resize-none leading-relaxed font-light"
                      placeholder="Tell the story behind this drawing..."
                    ></textarea>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="sticky top-32 space-y-8">
                    <div className="aspect-[3/4] bg-black border border-white/5 flex items-center justify-center relative overflow-hidden group">
                      {formData.imageUrl ? (
                        <img 
                          src={formData.imageUrl} 
                          alt="Preview" 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/error/800/1000')}
                        />
                      ) : (
                        <div className="text-center p-12">
                          <Upload className="mx-auto text-white/10 mb-4" size={48} />
                          <p className="text-white/20 text-xs uppercase tracking-widest">Preview Area</p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em] mb-2">Live Preview</p>
                        <h3 className="text-2xl font-serif font-bold text-white truncate">{formData.title || 'Untitled Drawing'}</h3>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full py-6 font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center space-x-4 text-sm ${
                        isSuccess ? 'bg-emerald-600 text-white' : 'gold-bg text-black hover:tracking-[0.4em]'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Uploading...</span>
                      ) : isSuccess ? (
                        <>
                          <CheckCircle2 size={20} />
                          <span>Drawing Uploaded</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Post Drawing</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Manage Drawings List */}
            <div className="lg:col-span-12">
              <h3 className="text-2xl font-serif font-bold mb-10 border-b border-white/5 pb-4">Manage Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {drawings.map((drawing) => (
                  <div key={drawing.id} className="bg-black/40 border border-white/5 p-4 flex items-center space-x-4 group">
                    <img src={drawing.imageUrl} alt={drawing.title} className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div className="flex-grow min-w-0">
                      <h4 className="text-white font-serif font-bold truncate">{drawing.title}</h4>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest">{drawing.medium}</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => handleDelete(drawing.id)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors p-2 border border-transparent hover:border-red-500/20 rounded"
                      title="Delete Post"
                    >
                      <Trash2 size={18} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDrawing;
