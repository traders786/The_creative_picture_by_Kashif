import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Sparkles, Camera, Heart, ShieldCheck } from 'lucide-react';

interface WeddingViewProps {
  onSelectPhoto: (url: string, title?: string) => void;
  onNavigate: (page: string) => void;
}

export default function WeddingView({ onSelectPhoto, onNavigate }: WeddingViewProps) {
  const weddingItems = GALLERY_ITEMS.filter((item) => item.category === 'wedding');
  const [visibleCount, setVisibleCount] = useState(6);

  const currentItems = weddingItems.slice(0, visibleCount);

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Hero */}
        <div className="relative rounded-3xl overflow-hidden h-[45vh] flex items-center justify-center mb-16 border border-white/5">
          <div 
            className="absolute inset-0 bg-cover bg-center brightness-[0.35]"
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200&auto=format&fit=crop")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          <div className="relative z-10 text-center max-w-2xl px-4">
            <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block mb-3">Royal Memoirs</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mb-4">
              Wedding <span className="italic font-normal text-[#D4AF37]">Photography</span>
            </h1>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Regal preservation of heritage weddings, deep emotions, and precious vows through cinematic, fine-art documentation.
            </p>
          </div>
        </div>

        {/* Narrative introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Timeless Heritage</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase mt-2 tracking-wide leading-tight">
              Honoring Your <span className="italic font-normal text-[#D4AF37]">Legacy & Love</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mt-6 mb-8" />
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
              Our signature wedding documentation captures the true essence of heritage. We focus on natural human connection, architectural symmetry, and ambient lighting, ensuring every frame is a masterpiece ready for publication or premium print galleries.
            </p>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              From grand palace destination weddings to intimate vows, our team provides peerless attention to detail, preserving raw feelings and fleeting moments with absolute elegance.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" 
              alt="Luxury palace wedding scene" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest">Grand Celebrations</span>
                <p className="text-sm font-semibold text-white">Palace Mandap - Rajasthan Heritage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative h-96 rounded-2xl overflow-hidden glassmorphism border border-white/5 hover:border-[#D4AF37]/40 shadow-xl cursor-zoom-in"
                onClick={() => onSelectPhoto(item.imageUrl, item.title)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end" style={{ pointerEvents: 'none' }}>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                    {item.category} • {item.location}
                  </span>
                  <h4 className="text-xl font-serif text-white tracking-wide">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-xs text-slate-300 font-light mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {weddingItems.length > visibleCount && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-8 py-3.5 bg-transparent border border-white/15 hover:border-[#D4AF37] text-xs font-mono text-[#D4AF37] uppercase tracking-widest rounded-full transition-all cursor-pointer"
            >
              Load Additional Visuals
            </button>
          </div>
        )}

        {/* Features list */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.01] border border-white/5 grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] flex items-center justify-center shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Senior Crew Direction</h4>
              <p className="text-xs text-slate-400 font-light">Directing poses, frames, lighting.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Genuine Chemistry</h4>
              <p className="text-xs text-slate-400 font-light">Natural candids of key emotions.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Elite Archiving</h4>
              <p className="text-xs text-slate-400 font-light">100-year color preservation guarantee.</p>
            </div>
          </div>
        </div>

        {/* Shoot CTA banner */}
        <div className="mt-20 p-10 rounded-3xl glassmorphism border border-[#D4AF37]/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 uppercase">
              Schedule Your Wedding Visual Design
            </h3>
            <p className="text-xs text-slate-400 font-light max-w-xl">
              Get in touch with our senior wedding specialists to coordinate moodboards, custom schedules, and couture lighting.
            </p>
          </div>

          <button
            onClick={() => onNavigate('Book Now')}
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest transition-all shadow-md shadow-yellow-500/20 hover:bg-white cursor-pointer"
          >
            Initiate Booking Consultation
          </button>
        </div>

      </div>
    </div>
  );
}
