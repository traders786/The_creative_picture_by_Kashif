import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Category } from '../types';
import { Sparkles, ArrowRight, Camera, Image as ImageIcon } from 'lucide-react';

interface PhotographyViewProps {
  onSelectPhoto: (url: string, title?: string) => void;
  onNavigate: (page: string) => void;
}

export default function PhotographyView({ onSelectPhoto, onNavigate }: PhotographyViewProps) {
  const [selectedSubCategory, setSelectedSubCategory] = useState<'all' | Category>('all');
  const [visibleItemsCount, setVisibleItemsCount] = useState(6);

  const subCategories: { label: string; value: 'all' | Category }[] = [
    { label: 'All Fields', value: 'all' },
    { label: 'Royal Wedding', value: 'wedding' },
    { label: 'Pre-Wedding', value: 'prewedding' },
    { label: 'Maternity', value: 'maternity' },
    { label: 'Baby Shoot', value: 'baby' },
    { label: 'High Fashion', value: 'fashion' },
    { label: 'Fine Portrait', value: 'portrait' }
  ];

  const filteredItems = selectedSubCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedSubCategory);

  const currentVisibleItems = filteredItems.slice(0, visibleItemsCount);

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Hero */}
        <div className="relative rounded-3xl overflow-hidden h-[45vh] flex items-center justify-center mb-16 border border-white/5">
          <div 
            className="absolute inset-0 bg-cover bg-center brightness-[0.35]"
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          <div className="relative z-10 text-center max-w-2xl px-4">
            <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block mb-3">FINE ART SHOTS</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mb-4">
              Photography <span className="italic font-normal text-[#D4AF37]">Portfolio</span>
            </h1>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Timeless composition, meticulous balance, and bespoke tone-grading designed to capture raw humanity.
            </p>
          </div>
        </div>

        {/* Narrative introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Sensory Immersion</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase mt-2 tracking-wide leading-tight">
              Captured With <span className="italic font-normal text-[#D4AF37]">Emotional Precision</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mt-6 mb-8" />
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
              Our standard philosophy rejects formulaic snapshots in favor of cinematic lighting, editorial postures, and raw human chemistry. We capture the delicate nuances—the trembling of the hands during vows, the soft gaze of maternal expectancy, and the sleek structure of fashion couture.
            </p>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Every final export is pixel-perfect and formatted to support physical gallery print framing or ultra-exclusive layout publications.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" 
              alt="Editorial close up" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest">Featured Lens work</span>
                <p className="text-sm font-semibold text-white">Chiaroscuro Portrait - Mumbai Studio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Switch Tab */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-white/10 pb-6">
          {subCategories.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setSelectedSubCategory(tab.value);
                setVisibleItemsCount(6); // reset
              }}
              className={`px-5 py-2.5 rounded-full text-xs uppercase font-mono tracking-wider transition-all ${
                selectedSubCategory === tab.value
                  ? 'bg-[#D4AF37] text-black font-semibold'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {currentVisibleItems.map((item) => (
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
                  <p className="text-xs text-slate-300 font-light mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More functionality */}
        {filteredItems.length > visibleItemsCount && (
          <div className="text-center">
            <button
              onClick={() => setVisibleItemsCount((prev) => prev + 3)}
              className="px-8 py-3.5 bg-transparent border border-white/15 hover:border-[#D4AF37] text-xs font-mono text-[#D4AF37] uppercase tracking-widest rounded-full transition-all"
            >
              Load Additional Visuals
            </button>
          </div>
        )}

        {/* Shoot CTA banner */}
        <div className="mt-32 p-10 rounded-3xl glassmorphism border border-[#D4AF37]/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 uppercase">
              Desire a Bespoke Visual Diary?
            </h3>
            <p className="text-xs text-slate-400 font-light max-w-xl">
              Let our senior creative directors and retouchers work with you to plan lighting, styling, and location details custom-built for your profile.
            </p>
          </div>

          <button
            onClick={() => onNavigate('Book Now')}
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest transition-all shadow-md shadow-yellow-500/20 hover:bg-white cursor-pointer"
          >
            Initiate Consultation Booking
          </button>
        </div>

      </div>
    </div>
  );
}
