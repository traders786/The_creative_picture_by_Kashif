import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, Film, Play, Pause, Heart, Star, Calendar, 
  MapPin, Clock, Award, ShieldCheck, Sparkles, 
  ChevronRight, ArrowRight, Video, Smile, Compass, Send, Check
} from 'lucide-react';
import { GALLERY_ITEMS, TESTIMONIALS, SERVICE_PACKAGES } from '../data';
import { Category } from '../types';

// ==========================================
// CONFIGURATION: HERO BACKGROUND VIDEO
// ==========================================
// To use your own video:
// 1. Upload your video file (e.g. "indian_bride.mp4") to your root folder or standard assets.
// 2. Put it in Vite's public folder if available, or just use a relative or direct URL.
// 3. Update the variable below to reference it, e.g. "/indian_bride.mp4".
const HERO_VIDEO_URL = "/indian_bride.mp4";

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onSelectPhoto: (url: string, title?: string) => void;
  onPlayVideo: (url: string) => void;
}

export default function HomeView({ onNavigate, onSelectPhoto, onPlayVideo }: HomeViewProps) {
  // Video Background States
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Fallback Hero Slides (for cover background and metadata)
  const heroSlides = [
    {
      title: 'Wedding Photography',
      sub: 'The Royal Saga',
      image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Pre-Wedding Celebration',
      sub: 'Fairytales in Jaisalmer',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'The Editorial Fashion',
      sub: 'Avant Garde Bridal Glamour',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Maternal Wonder',
      sub: 'Documenting the Symphony of Life',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Heirloom Baby Shoots',
      sub: 'Innocence Frozen in Time',
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1600&auto=format&fit=crop',
    }
  ];

  const [activeHeroIdx, setActiveHeroIdx] = useState(0);

  // Handler to toggle play state
  const togglePlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play().catch(err => console.log("Video play interrupted:", err));
        setIsVideoPlaying(true);
      }
    }
  };

  // Gallery view parameters
  const [galleryFilter, setGalleryFilter] = useState<'all' | Category>('all');
  const filteredGallery = galleryFilter === 'all' 
    ? GALLERY_ITEMS.slice(0, 8) 
    : GALLERY_ITEMS.filter((item) => item.category === galleryFilter).slice(0, 8);

  // Video Showreel interactive state handled globally in App.tsx

  // Instagram simulated heart likes
  const [likedInsta, setLikedInsta] = useState<Record<number, boolean>>({});
  const toggleLike = (id: number) => {
    setLikedInsta(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Simulated FAQ accordion state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Stats Counters state with animated hook (visual preview fallback)
  const [counters, setCounters] = useState({
    clients: 120,
    projects: 560,
    experience: 1,
    cities: 10
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        clients: prev.clients < 1000 ? prev.clients + 44 : 1000,
        projects: prev.projects < 5000 ? prev.projects + 220 : 5000,
        experience: prev.experience < 8 ? prev.experience + 1 : 8,
        cities: prev.cities < 50 ? prev.cities + 2 : 50,
      }));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-white bg-[#090909]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen xl:min-h-[96vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Main Video Element */}
          <video
            ref={videoRef}
            src={HERO_VIDEO_URL}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-45"
          />
          {/* Custom vignette gradient overlay to guarantee perfect text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/40 via-[#090909]/70 to-[#090909] z-0" />
        </div>

        {/* Cinematic Particles */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black pointer-events-none z-1" />

        {/* Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center select-none my-auto">
          {/* Premium Location & Title Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block text-xs sm:text-sm tracking-[0.25em] text-[#D4AF37] font-medium uppercase mb-4 font-sans"
          >
            Luxury Wedding Photography & Cinematography, Jharkhand
          </motion.div>

          {/* Majestic Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight leading-none mb-6 mt-4">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block font-serif italic text-yellow-500/90 text-3xl sm:text-5xl md:text-7xl mb-2"
            >
              Capturing Emotions
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block font-semibold uppercase tracking-wider text-white"
            >
              Creating Memories
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="block font-light text-slate-300 text-2xl sm:text-4xl md:text-5xl tracking-widest uppercase mt-3"
            >
              Telling Stories
            </motion.span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-light tracking-wide mb-10 leading-relaxed"
          >
            Luxury Wedding Photography & Cinematic Films That Turn Moments Into Timeless Art. Crafted for the connoisseurs of luxury, heritage, and genuine human connection.
          </motion.p>

          {/* Action Cams Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button
              onClick={() => onNavigate('Book Now')}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#D4AF37] text-black font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-yellow-500/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Your Shoot
            </button>
            <button
              onClick={() => onNavigate('Gallery')}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm lg:text-sm uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              Explore Portfolio
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Controls Bar (Guaranteed No Overlap!) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-12 flex justify-center items-center">
          {/* Minimalist Interactive Play/Pause Control */}
          <div className="flex items-center justify-center bg-black/45 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-full text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 transition-all active:scale-90 cursor-pointer flex items-center gap-2"
              title={isVideoPlaying ? "Pause Video Background" : "Play Video Background"}
            >
              {isVideoPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono pr-1">Pause Motion</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current text-[#D4AF37]" />
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-mono pr-1">Play Motion</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="relative py-10 bg-gradient-to-b from-black to-[#090909] border-y border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            
            <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-sans font-extralight text-[#D4AF37] mb-2 tracking-tight">
                {counters.clients >= 1000 ? '1000+' : `${counters.clients}+`}
              </span>
              <span className="uppercase tracking-widest text-[11px] text-slate-400 font-mono group-hover:text-white transition-colors">
                Happy Couples & Clients
              </span>
            </div>

            <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-sans font-extralight text-white mb-2 tracking-tight">
                {counters.projects >= 5000 ? '5000+' : `${counters.projects}+`}
              </span>
              <span className="uppercase tracking-widest text-[11px] text-slate-400 font-mono group-hover:text-[#D4AF37] transition-colors">
                Premium Creations Done
              </span>
            </div>

            <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-sans font-extralight text-[#D4AF37] mb-2 tracking-tight">
                {counters.experience}+
              </span>
              <span className="uppercase tracking-widest text-[11px] text-slate-400 font-mono group-hover:text-white transition-colors">
                Years of Mastercraft
              </span>
            </div>

            <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-sans font-extralight text-white mb-2 tracking-tight">
                {counters.cities}+
              </span>
              <span className="uppercase tracking-widest text-[11px] text-slate-400 font-mono group-hover:text-[#D4AF37] transition-colors">
                Indian & Global Cities
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SIGNATURE SERVICES */}
      <section className="relative py-14 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Our Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white uppercase mt-3 tracking-wide">
              Signature <span className="italic font-normal text-[#D4AF37]">Visual Styles</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
            <p className="max-w-md mx-auto text-sm text-slate-400 font-light mt-4 leading-relaxed">
              Crafting premium visual stories across a range of genres with peerless attention to light, elegance, and high-fashion aesthetics.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'wedding', name: 'Wedding Photography', desc: 'Regal preservation of heritage weddings, emotions, and precious vows.', icon: Camera, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop' },
              { id: 'prewedding', name: 'Pre-Wedding Shoot', desc: 'Pre-wedding fairytales captured visually at breathtaking luxury locations.', icon: Heart, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop' },
              { id: 'cinematography', name: 'Cinematography', desc: 'High-end Hollywood grain 4K wedding films featuring professional scriptwriting.', icon: Film, url: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=600&auto=format&fit=crop' },
              { id: 'videography', name: 'Videography', desc: 'Crystal clear documentation and multi-cam capture of premium celebrations.', icon: Video, url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=600&auto=format&fit=crop' },
              { id: 'baby', name: 'Baby Shoots', desc: 'Ultra-gentle heirloom baby style sessions preserving early pure innocence.', icon: Smile, url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop' },
              { id: 'drone', name: 'Drone Aerial Coverage', desc: 'Symmetry visual angles of palace complexes and vast setups.', icon: ShieldCheck, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop' }
            ].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-96 rounded-2xl overflow-hidden glassmorphism border border-white/5 hover:border-[#D4AF37]/50 transition-all shadow-xl"
                >
                  {/* Subtle dark filter image layer */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-110 opacity-30 group-hover:opacity-60"
                    style={{ backgroundImage: `url(${srv.url})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Icon & Details Content */}
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full z-10">
                    <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#D4AF37]/3s mb-4 flex items-center justify-center text-[#D4AF37]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white tracking-wide mb-2 group-hover:text-[#D4AF37] transition-all">
                      {srv.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed group-hover:text-white transition-all">
                      {srv.desc}
                    </p>

                    <button
                      onClick={() => onNavigate(srv.name)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-mono mt-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 duration-300 pointer-events-auto cursor-pointer hover:text-white hover:gap-2.5"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED GALLERY (PINTEREST MASONRY) */}
      <section className="relative py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Curated Frames</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white uppercase mt-2 tracking-wide">
                Featured <span className="italic font-normal text-[#D4AF37]">Heirlooms</span>
              </h2>
            </div>

            {/* Premium Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto pb-2">
              {[
                { label: 'All', value: 'all' },
                { label: 'Royal Wedding', value: 'wedding' },
                { label: 'Pre-Wedding', value: 'prewedding' },
                { label: 'Baby Bloom', value: 'baby' },
                { label: 'Maternity', value: 'maternity' },
                { label: 'High Fashion', value: 'fashion' }
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setGalleryFilter(tab.value as any)}
                  className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-mono transition-all ${
                    galleryFilter === tab.value
                      ? 'bg-[#D4AF37] text-black font-semibold shadow-md shadow-yellow-500/20'
                      : 'bg-white/5 text-slate-300 border border-white/5 hover:border-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid relative overflow-hidden rounded-2xl group transition-all border border-white/5 hover:border-[#D4AF37]/42 shadow-xl cursor-zoom-in"
                  onClick={() => onSelectPhoto(item.imageUrl, item.title)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full object-cover rounded-2xl transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Glass Card Caption and Hover reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                      {item.category} • {item.year}
                    </span>
                    <h4 className="text-lg font-semibold text-white tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    <span className="text-[10px] text-[#D4AF37] font-semibold uppercase font-mono mt-3 inline-flex items-center gap-1">
                      Enlarge Frame 
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('Gallery')}
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all space-x-2"
            >
              Browse Full Infinite Gallery
            </button>
          </div>
        </div>
      </section>

      {/* 5. PARALLAX SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background photo fixed or styled */}
        <div 
          className="absolute inset-0 bg-[#0c0c0c] bg-cover bg-center brightness-50 contrast-125"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1600&auto=format&fit=crop")`,
            backgroundAttachment: 'fixed'
          }}
        />

        <div className="relative z-10 text-center px-6">
          <span className="text-[#D4AF37] text-xs font-mono tracking-widest uppercase block mb-4">Philosophy of Craft</span>
          <h2 className="text-3xl sm:text-6xl font-serif font-light text-white italic tracking-wider leading-tight max-w-4xl mx-auto">
            "Every Picture Tells A Story, But We Aim To Make It <span className="text-[#D4AF37] font-normal not-italic">A Golden Memoir</span>."
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>
      </section>

      {/* 6. VIDEO SHOWREEL SECONT */}
      <section className="relative py-28 px-6 bg-[#090909]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Cinema Reels</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white uppercase mt-2">
              Cinematic <span className="italic font-normal text-[#D4AF37]">2026 Showreel</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video border border-white/5 bg-black">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
              alt="Cinematic cover"
              className="w-full h-full object-cover opacity-60"
            />
            {/* Real Play interaction */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/30">
              <motion.button
                onClick={() => onPlayVideo('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1')}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:bg-white transition-all cursor-pointer"
              >
                <Play className="w-8 h-8 fill-black translate-x-0.5" />
              </motion.button>
              <h3 className="text-xl font-serif font-light text-white mt-6 tracking-wide uppercase">
                The Creative Picture Teaser Film
              </h3>
              <p className="text-xs text-slate-300 font-mono tracking-widest uppercase mt-2">
                Directed by Kashif Ali • UHD 4K
              </p>
            </div>
          </div>
        </div>

        {/* Cinematic Video Showreel Modal Overlay handled globally in App.tsx */}
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="relative py-28 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">The Elite Standard</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white uppercase mt-2">
              Why Creative <span className="italic font-normal text-[#D4AF37]">Picture?</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '1', title: 'Professional Crew', desc: 'Renowned industry veteran directors who blend effortlessly into heritage spaces without noise.', icon: Award },
              { id: '2', title: 'Creative Art Direction', desc: 'Unique editorial framing styled specially for magazine-quality publishing layout aesthetics.', icon: Sparkles },
              { id: '3', title: 'Premium Fine-Art Albums', desc: 'Handcrafted layflat albums manufactured directly with Italian leather & moisture-proof technology.', icon: Camera },
              { id: '4', title: 'Masterful Retouching', desc: 'Custom high-contrast cinematic color grading calibrated with skin tone preservation.', icon: Film },
              { id: '5', title: 'Rapid Teaser Delivery', desc: 'Uncompromised visual teasers delivered under 72 hours for family sharing.', icon: Clock },
              { id: '6', title: '4K Cinematic Cameras', desc: 'Heavy visual narrative gears utilizing Cinema Line camera configurations.', icon: Video },
              { id: '7', title: 'Vast Country Footprint', desc: 'Traveled to over 50 Indian cities and 12 countries for destination assignments.', icon: MapPin },
              { id: '8', title: 'Premium Peace of Mind', desc: 'Fully contractual safety guidelines, redundant backups, and stellar client care.', icon: ShieldCheck }
            ].map((node) => {
              const Icon = node.icon;
              return (
                <div 
                  key={node.id}
                  className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#D4AF37]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/10 to-[#D4AF37]/30 mb-6 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-wide mb-3 group-hover:text-[#D4AF37] transition-all">
                    {node.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM FEED */}
      <section className="relative py-28 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[#D4AF37] font-semibold text-xs tracking-widest font-mono uppercase">Social Footprint</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light uppercase mt-2 text-white">
                The Journal on <span className="italic font-normal text-[#D4AF37]">Instagram</span>
              </h2>
              <a 
                href="https://www.instagram.com/the_creative_picture_027" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 text-xs font-mono lowercase hover:text-[#D4AF37] transition-colors mt-2 inline-block border-b border-white/10 pb-0.5"
              >
                @the_creative_picture_027
              </a>
            </div>

            <a
              href="https://www.instagram.com/the_creative_picture_027"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:border-yellow-500 transition-all flex items-center gap-2"
            >
              Follow On Instagram
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid of 12 Simulated Posts */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { id: 101, url: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=400&auto=format&fit=crop', likes: 1422 },
              { id: 102, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop', likes: 981 },
              { id: 103, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop', likes: 2190 },
              { id: 104, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop', likes: 871 },
              { id: 105, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=400&auto=format&fit=crop', likes: 1109 },
              { id: 106, url: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=400&auto=format&fit=crop', likes: 1612 },
              { id: 107, url: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&auto=format&fit=crop', likes: 782 },
              { id: 108, url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop', likes: 2311 },
              { id: 109, url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=400&auto=format&fit=crop', likes: 984 },
              { id: 110, url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=400&auto=format&fit=crop', likes: 1980 },
              { id: 111, url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=400&auto=format&fit=crop', likes: 1140 },
              { id: 112, url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400&auto=format&fit=crop', likes: 3102 }
            ].map((p, index) => (
              <div 
                key={p.id}
                className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-950 border border-white/5 hover:border-[#D4AF37]/50 transition-all cursor-pointer"
              >
                <img
                  src={p.url}
                  alt={`Simulated Instagram Post ${index+1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(p.id);
                    }}
                    className="flex flex-col items-center text-white hover:text-red-500 transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${likedInsta[p.id] ? 'fill-red-500 text-red-500' : ''}`} />
                    <span className="text-[10px] font-mono mt-1">
                      {likedInsta[p.id] ? p.likes + 1 : p.likes}
                    </span>
                  </button>

                  <button 
                    onClick={() => onSelectPhoto(p.url, `Simulated Reels Frame #${index + 1}`)}
                    className="flex flex-col items-center text-white hover:text-[#D4AF37] transition-colors"
                  >
                    <Compass className="w-5 h-5" />
                    <span className="text-[10px] font-mono mt-1">Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-slate-500 font-mono tracking-wide mt-6">
            Displaying simulated dynamic preview posts. Tap Heart key to interact.
          </p>
        </div>
      </section>

      {/* 9. INTUITIVE CLIENT TESTIMONIALS */}
      <section className="relative py-28 px-6 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Voices of Adoration</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white uppercase mt-2">
              Patron <span className="italic font-normal text-[#D4AF37]">Testimonials</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          </div>

          {/* Testimonials Slide Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((col) => (
              <div 
                key={col.id} 
                className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#D4AF37]/30 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-6">
                    {Array.from({ length: col.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-sm font-light text-slate-300 leading-relaxed italic mb-8">
                    "{col.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]/40"
                  />
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide text-white">
                      {col.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                      {col.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('Testimonials')}
              className="px-8 py-3 rounded-full border border-white/15 hover:border-[#D4AF37] text-xs font-mono text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Read Additional Reviews
            </button>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION SECTION */}
      <section className="relative py-28 px-6 bg-[#090909] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Curated Answers</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white uppercase mt-2">
              Frequently Asked <span className="italic font-normal text-[#D4AF37]">Inquiries</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {[
              { q: 'How early should we book our wedding shoot date?', a: 'Because we only shoot one premium grand wedding per week to guarantee the high focused luxury aesthetics, clients typically book their dates 6 to 12 months in advance. Retainers are 40% with a signed digital contract.', idx: 0 },
              { q: 'Do you travel outside Mumbai/Delhi NCR or globally?', a: 'Yes! We travel worldwide. All reasonable travel fare, local logistics, and modest hotel stay for our specialized crew are transparently covered by the client within our tailored proposals.', idx: 1 },
              { q: 'What is your editing turnaround time?', a: 'You receive 15 custom graded "First Glance" pictures within 72 hours. Your high-resolution master gallery goes live in 4-6 weeks, and luxury leather layflat photobooks are dispatched in 8 weeks.', idx: 2 },
              { q: 'Are your pricing packages customizable?', a: 'Yes. Our standard menu offers baseline parameters, but following our direct visual design call, we build customizable frameworks designed for your unique family itinerary.', idx: 3 },
              { q: 'Do we get the RAW unedited files?', a: 'Our master craft lies in curation, delicate highlights coloring, and editorial correction. Consequently, unedited raw artifacts are like an unfinished canvas and are not distributed as final product. For films, archive files can be requested for a secure retrieval archive fee.', idx: 4 },
              { q: 'Do you utilize high-end drone camera coverage?', a: 'Absolutely. Aerial drone mapping is included inside our Gold and Platinum schedules, assuming standard weather clearance and local aviation authorization limits.', idx: 5 }
            ].map((faq) => (
              <div 
                key={faq.idx}
                className="rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.idx ? null : faq.idx)}
                  className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium text-white tracking-wide pr-4">
                    {faq.q}
                  </span>
                  <span className="text-xl text-[#D4AF37] font-mono leading-none transition-transform duration-300">
                    {expandedFaq === faq.idx ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {expandedFaq === faq.idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-sm text-slate-400 font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('FAQ')}
              className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest hover:underline hover:text-white"
            >
              Browse Extended FAQ Panel & Legal Policies
            </button>
          </div>
        </div>
      </section>

      {/* 11. LUX CTA SECTION */}
      <section className="relative py-32 px-6 bg-black flex items-center justify-center overflow-hidden border-t border-white/5">
        {/* Subtle decorative grid background & overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block mb-4 animate-pulse">
            Secure Your Heirloom Art
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wide leading-tight mb-8">
            Let's Create Beautiful <br />
            <span className="italic font-normal text-[#D4AF37]">Memories Together</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-12">
            Allow us to transform your wedding saga, raw fashion concepts, or milestone portraits into breathtaking global cinema art files. Consultation lines are open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => onNavigate('Book Now')}
              className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] hover:bg-white text-black font-semibold text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation Now
            </button>

            <a
              href="https://wa.me/919999999999" // Custom mock premium whatsapp link
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-10 py-4 border border-white/20 hover:border-[#D4AF37] bg-transparent text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-green-500 fill-green-500" />
              WhatsApp Live Chat
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
