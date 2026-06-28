import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Category } from '../types';
import { Search, Grid, Eye, Sparkles, Filter, X, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

interface GalleryViewProps {
  onSelectPhoto: (url: string, title?: string) => void;
}

export default function GalleryView({ onSelectPhoto }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(8);

  const categories: { label: string; value: 'all' | Category }[] = [
    { label: 'All Collections', value: 'all' },
    { label: 'Royal Wedding', value: 'wedding' },
    { label: 'Pre-Wedding', value: 'prewedding' },
    { label: 'Baby Bloom', value: 'baby' },
    { label: 'Maternal Grace', value: 'maternity' },
    { label: 'Editorial Fashion', value: 'fashion' },
    { label: 'Fine Portraits', value: 'portrait' }
  ];

  // Filters combined
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const displayedItems = filteredItems.slice(0, displayCount);

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-[#600] text-xs uppercase tracking-widest font-mono">Pinterest Legacy Layout</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-2">
            The Infinite <span className="italic font-normal text-[#D4AF37]">Gallery</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* Search & Configuration Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 p-6 rounded-2xl bg-white/[0.01] border border-white/5 shadow-2xl">
          {/* Quick Selection search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
            <input
              type="text"
              placeholder="Search by monument, dress, style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-full bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 text-sm focus:outline-none placeholder-slate-500 text-white font-light transition-all"
            />
          </div>

          {/* Quick Category filter count */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {categories.map((cat) => {
              const count = cat.value === 'all' 
                ? GALLERY_ITEMS.length 
                : GALLERY_ITEMS.filter(item => item.category === cat.value).length;

              return (
                <button
                  key={cat.value}
                  onClick={() => {
                    setActiveCategory(cat.value);
                    setDisplayCount(8);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
                    activeCategory === cat.value
                      ? 'bg-[#D4AF37] text-black font-semibold shadow-md shadow-yellow-500/10'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat.value ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Masonry with dynamic reveal */}
        {displayedItems.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-white/5 hover:border-[#D4AF37]/40 transition-all shadow-xl cursor-zoom-in bg-zinc-950"
                  onClick={() => onSelectPhoto(item.imageUrl, item.title)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest">
                      {item.category} • {item.location}
                    </span>
                    <h4 className="text-base font-semibold text-white tracking-wide mt-1">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 uppercase mt-2 inline-flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#D4AF37]" /> Enlarge Lightbox
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 rounded-3xl bg-white/[0.01] border border-white/5 max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-serif text-white mb-2">No masterworks found</h3>
            <p className="text-xs text-slate-400 font-light px-6">
              There are no gallery portraits matching the search query "{searchQuery}". Try updating your categories or keyword parameters.
            </p>
          </div>
        )}

        {/* Infinite Scroll Load-More simulation */}
        {filteredItems.length > displayCount && (
          <div className="text-center mt-16 pb-12">
            <button
              onClick={() => setDisplayCount((prev) => prev + 4)}
              className="px-8 py-3.5 bg-transparent border border-white/10 rounded-full text-xs font-mono text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:border-yellow-500 transition-all uppercase tracking-widest cursor-pointer"
            >
              Reveal Next Set of Masterpieces
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
