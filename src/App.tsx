import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Sparkles, X, ChevronLeft, ChevronRight, Send, Camera } from 'lucide-react';

// Core layout UI
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';

// View modules
import HomeView from './components/HomeView';
import PhotographyView from './components/PhotographyView';
import CinematographyView from './components/CinematographyView';
import VideographyView from './components/VideographyView';
import GalleryView from './components/GalleryView';
import ServicesView from './components/ServicesView';
import PricingView from './components/PricingView';
import BlogView from './components/BlogView';
import AboutView from './components/AboutView';
import TestimonialsView from './components/TestimonialsView';
import FAQView from './components/FAQView';
import BookNowView from './components/BookNowView';
import ContactView from './components/ContactView';
import WeddingView from './components/WeddingView';
import PreWeddingView from './components/PreWeddingView';
import BabyView from './components/BabyView';
import DroneView from './components/DroneView';

// Curated data
import { GALLERY_ITEMS } from './data';

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Lightbox visual overview
  const [lightboxPhotoUrl, setLightboxPhotoUrl] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  // Page Loader State (Aesthetic Entrance!)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll trackers
    const handleScroll = () => {
      // Back to top selector
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Height percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate luxury loader sequence
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  useEffect(() => {
    if (lightboxPhotoUrl || activeVideoUrl) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxPhotoUrl, activeVideoUrl]);

  const handleNavigation = (page: string) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const handleSelectPhoto = (url: string, title?: string) => {
    setLightboxPhotoUrl(url);
    setLightboxTitle(title || 'The Creative Picture Memoir Frame');
  };

  const nextLightboxPhoto = () => {
    if (!lightboxPhotoUrl) return;
    const currentIdx = GALLERY_ITEMS.findIndex(p => p.imageUrl === lightboxPhotoUrl);
    if (currentIdx !== -1) {
      const nextIdx = (currentIdx + 1) % GALLERY_ITEMS.length;
      setLightboxPhotoUrl(GALLERY_ITEMS[nextIdx].imageUrl);
      setLightboxTitle(GALLERY_ITEMS[nextIdx].title);
    }
  };

  const prevLightboxPhoto = () => {
    if (!lightboxPhotoUrl) return;
    const currentIdx = GALLERY_ITEMS.findIndex(p => p.imageUrl === lightboxPhotoUrl);
    if (currentIdx !== -1) {
      const prevIdx = (currentIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      setLightboxPhotoUrl(GALLERY_ITEMS[prevIdx].imageUrl);
      setLightboxTitle(GALLERY_ITEMS[prevIdx].title);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090909] text-white selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      
      {/* Dynamic Custom Halo Cursor */}
      <CustomCursor />

      {/* Luxury Cinematic Multi-Stage Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full border border-yellow-500/20 bg-yellow-500/5 flex items-center justify-center text-[#D4AF37] mx-auto mb-6 animate-pulse">
                <Camera className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-semibold tracking-widest text-white uppercase font-sans">
                THE CREATIVE PICTURE
              </h2>
              <p className="text-[10px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase mt-2">
                STUDIO FOTOME INSPIRATION • LUXURY INCEPTION
              </p>
              <div className="w-48 h-[1px] bg-white/10 mx-auto mt-8 relative overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 bg-[#D4AF37]"
                  initial={{ left: '-100%' }}
                  animate={{ left: '0%' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] h-[2px] z-50 transition-all duration-100 shadow-[0_0_8px_rgba(212,175,55,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Transparent Sticky Navbar Header */}
      <Navbar activePage={activePage} onNavigate={handleNavigation} />

      {/* Dynamic Animated Content Renderer */}
      <main className="relative z-10 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {activePage === 'Home' && (
              <HomeView onNavigate={handleNavigation} onSelectPhoto={handleSelectPhoto} onPlayVideo={setActiveVideoUrl} />
            )}
            {activePage === 'Photography' && (
              <PhotographyView onSelectPhoto={handleSelectPhoto} onNavigate={handleNavigation} />
            )}
            {activePage === 'Wedding Photography' && (
              <WeddingView onSelectPhoto={handleSelectPhoto} onNavigate={handleNavigation} />
            )}
            {activePage === 'Pre-Wedding Shoot' && (
              <PreWeddingView onSelectPhoto={handleSelectPhoto} onNavigate={handleNavigation} onPlayVideo={setActiveVideoUrl} />
            )}
            {activePage === 'Cinematography' && (
              <CinematographyView onNavigate={handleNavigation} onPlayVideo={setActiveVideoUrl} />
            )}
            {activePage === 'Videography' && (
              <VideographyView onNavigate={handleNavigation} onPlayVideo={setActiveVideoUrl} />
            )}
            {activePage === 'Baby Shoots' && (
              <BabyView onSelectPhoto={handleSelectPhoto} onNavigate={handleNavigation} />
            )}
            {activePage === 'Drone Aerial Coverage' && (
              <DroneView onSelectPhoto={handleSelectPhoto} onNavigate={handleNavigation} />
            )}
            {activePage === 'Gallery' && (
              <GalleryView onSelectPhoto={handleSelectPhoto} />
            )}
            {activePage === 'Services' && (
              <ServicesView onNavigate={handleNavigation} />
            )}
            {activePage === 'Pricing' && (
              <PricingView onNavigate={handleNavigation} />
            )}
            {activePage === 'Stories' && <BlogView />}
            {activePage === 'About Us' && <AboutView />}
            {activePage === 'Testimonials' && <TestimonialsView />}
            {activePage === 'FAQ' && <FAQView />}
            {activePage === 'Contact Us' && <ContactView />}
            {activePage === 'Book Now' && <BookNowView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Multi-Column Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* Floating Action WhatsApp Help Bubble */}
      <a
        href="https://wa.me/919999999999?text=Hello%20The%20Creative%20Picture,%20I'm%20interested%20in%20arranging%20a%20private%20portfolio%20consultation."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        title="Immediate WhatsApp Line"
      >
        <Send className="w-6 h-6 fill-white text-green-500 translate-x-px" />
      </a>

      {/* Back to Top Indicator trigger */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#D4AF37] hover:bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-yellow-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Luxury Lightbox Overlay Modal */}
      <AnimatePresence>
        {lightboxPhotoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-between p-6 lg:p-10 select-none cursor-zoom-out"
            onClick={() => setLightboxPhotoUrl(null)}
          >
            {/* Upper Action controls */}
            <div className="w-full flex items-center justify-between z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                {lightboxTitle}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxPhotoUrl(null); }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle slider box */}
            <div className="relative flex items-center justify-center max-w-5xl h-[70vh] w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={prevLightboxPhoto}
                className="absolute left-0 lg:-left-16 w-12 h-12 rounded-full bg-black/60 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={lightboxPhotoUrl}
                alt="Enlarged visual"
                className="max-w-full max-h-full object-contain rounded-2xl border border-white/5 shadow-2xl"
              />

              <button
                onClick={nextLightboxPhoto}
                className="absolute right-0 lg:-right-16 w-12 h-12 rounded-full bg-black/60 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-all z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lower Caption Details */}
            <div className="text-center max-w-xl z-10">
              <p className="text-sm font-serif italic text-white mb-2">{lightboxTitle}</p>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                Designed & Retouched by The Creative Picture
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Video Theater Overlay Modal (outside main context to prevent z-index stacking bugs) */}
      <AnimatePresence>
        {activeVideoUrl && (() => {
          const isEmbed = activeVideoUrl.startsWith('http') || activeVideoUrl.includes('youtube') || activeVideoUrl.includes('vimeo');
          const isPortrait = activeVideoUrl.includes('pre_wedding_1.mp4') || activeVideoUrl.includes('pre_wedding_2.mp4'); // Auto-detect portrait 9:16 layout
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setActiveVideoUrl(null)}
            >
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="fixed top-6 right-6 z-[1000] w-12 h-12 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white hover:text-[#D4AF37] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-2xl"
                title="Close Theater"
              >
                <X className="w-6 h-6" />
              </button>

              <div 
                className={`w-full ${isPortrait ? 'max-w-[340px] aspect-[9/16]' : 'max-w-5xl aspect-video'} max-h-[85vh] rounded-3xl overflow-hidden border border-yellow-500/20 bg-black shadow-2xl relative`}
                onClick={(e) => e.stopPropagation()}
              >
                {isEmbed ? (
                  <iframe
                    className="w-full h-full"
                    src={activeVideoUrl}
                    title="Cinematic Film Theater"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    className="w-full h-full object-cover"
                    src={activeVideoUrl}
                    controls
                    autoPlay
                    playsInline
                  />
                )}
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

    </div>
  );
}
