import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Sparkles, Camera, MapPin, Film, Play, X } from 'lucide-react';

interface PreWeddingViewProps {
  onSelectPhoto: (url: string, title?: string) => void;
  onNavigate: (page: string) => void;
  onPlayVideo: (url: string) => void;
}

export default function PreWeddingView({ onSelectPhoto, onNavigate, onPlayVideo }: PreWeddingViewProps) {
  const preweddingItems = GALLERY_ITEMS.filter((item) => item.category === 'prewedding');
  const [visibleCount, setVisibleCount] = useState(6);

  const currentItems = preweddingItems.slice(0, visibleCount);

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Hero */}
        <div className="relative rounded-3xl overflow-hidden h-[45vh] flex items-center justify-center mb-16 border border-white/5">
          <motion.div 
            initial={{ scale: 1.18, opacity: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: 1,
              scale: [1.18, 1.06, 1.18],
              x: [0, 15, -15, 0],
              y: [0, -10, 10, 0]
            }}
            transition={{ 
              opacity: { duration: 1.8, ease: 'easeOut' },
              scale: { duration: 32, ease: 'linear', repeat: Infinity },
              x: { duration: 40, ease: 'easeInOut', repeat: Infinity },
              y: { duration: 35, ease: 'easeInOut', repeat: Infinity }
            }}
            className="absolute inset-0 bg-cover bg-center brightness-[0.35]"
            style={{ backgroundImage: `url("/assets/images_and_videos/prewedding/Pre_wedding_page_cover_photo_at_the_top.jpg")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3
                }
              }
            }}
            className="relative z-10 text-center max-w-2xl px-4"
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block mb-3"
            >
              Cinematic Love Stories
            </motion.span>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mb-4"
            >
              Pre-Wedding <span className="italic font-normal text-[#D4AF37]">Shoot</span>
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-sm text-slate-300 font-light leading-relaxed"
            >
              Breathtaking visual tales of romance set in luxury destinations, crafted using bespoke lighting and art direction.
            </motion.p>
          </motion.div>
        </div>

        {/* Cinematic Video Showcase */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Teaser Films</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase mt-2 tracking-wide">
              Featured <span className="italic font-normal text-[#D4AF37]">Love Story Films</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Teaser Film 1 */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/20 bg-black aspect-[9/16] w-full max-w-[300px] mx-auto">
              <img 
                src="/assets/images_and_videos/prewedding/pre_wedding_1_cover_photo.jpg" 
                alt="Pre-wedding video 1 cover" 
                className="w-full h-full object-cover opacity-50 brightness-75 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/25 flex flex-col items-center justify-center p-6 text-center">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onPlayVideo('/assets/images_and_videos/prewedding/pre_wedding_1.mp4')}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4AF37] text-black shadow-lg shadow-yellow-500/30 flex items-center justify-center hover:bg-white cursor-pointer"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                </motion.button>

                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase bg-black/60 px-4 py-1.5 rounded-full border border-white/5 mt-6">
                  CINEMATIC SHOT
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-white tracking-wide uppercase mt-3">
                  Fairytale in Jodhpur Dunes
                </h3>
              </div>
            </div>

            {/* Teaser Film 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/20 bg-black aspect-[9/16] w-full max-w-[300px] mx-auto">
              <img 
                src="/assets/images_and_videos/prewedding/pre_wedding_2_cover_photo.jpg" 
                alt="Pre-wedding video 2 cover" 
                className="w-full h-full object-cover opacity-50 brightness-75 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/25 flex flex-col items-center justify-center p-6 text-center">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onPlayVideo('/assets/images_and_videos/prewedding/pre_wedding_2.mp4')}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4AF37] text-black shadow-lg shadow-yellow-500/30 flex items-center justify-center hover:bg-white cursor-pointer"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                </motion.button>

                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase bg-black/60 px-4 py-1.5 rounded-full border border-white/5 mt-6">
                  CINEMATIC SHOT
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-white tracking-wide uppercase mt-3">
                  Fairytales in Jaisalmer
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Bespoke Locations</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase mt-2 tracking-wide leading-tight">
              Where Your Story <span className="italic font-normal text-[#D4AF37]">Finds its Frame</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mt-6 mb-8" />
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
              Our pre-wedding shoots are designed to tell your unique story in a high-fashion, cinematic tone. We help you select and scout locations—from the royal courtyards of heritage forts to foggy hillsides—ensuring your style is matched by breathtaking scenery.
            </p>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Every detail is meticulously planned: wardrobe styling guidelines, lighting equipment, custom scripts for movie teasers, and personalized directing that lets you feel completely natural on camera.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop" 
              alt="Pre-wedding fort shoot" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest">Heritage Landmarks</span>
                <p className="text-sm font-semibold text-white">Grand Fort Corridor - Architectural Symmetry</p>
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
        {preweddingItems.length > visibleCount && (
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
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Destination Scouting</h4>
              <p className="text-xs text-slate-400 font-light">Custom scouting for unique sites.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] flex items-center justify-center shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Editorial Directing</h4>
              <p className="text-xs text-slate-400 font-light">High-fashion poses made easy.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] flex items-center justify-center shrink-0">
              <Film className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">4K Cinematic Teasers</h4>
              <p className="text-xs text-slate-400 font-light">Including stunning raw film reels.</p>
            </div>
          </div>
        </div>

        {/* Shoot CTA banner */}
        <div className="mt-20 p-10 rounded-3xl glassmorphism border border-[#D4AF37]/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 uppercase">
              Plan Your Dream Pre-Wedding Session
            </h3>
            <p className="text-xs text-slate-400 font-light max-w-xl">
              Collaborate with our art directors to choose the perfect location, select wardrobe themes, and create a custom storyboard.
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
