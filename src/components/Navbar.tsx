import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'Home' },
    { label: 'About', page: 'About Us' },
    { label: 'Photography', page: 'Photography' },
    { label: 'Videography', page: 'Videography' },
    { label: 'Cinematography', page: 'Cinematography' },
    { label: 'Portfolio', page: 'Gallery' },
    { label: 'Stories', page: 'Stories' },
    { label: 'Contact', page: 'Contact Us' }
  ];

  // Check if a link is active
  const isItemActive = (item: any) => {
    return activePage === item.page;
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#090909]/85 backdrop-blur-xl border-b border-[#D4AF37]/25 py-3.5 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.95)]' 
            : 'bg-[#090909]/45 backdrop-blur-md border-b border-white/10 py-5.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Large Elegant Logo */}
          <div 
            onClick={() => onNavigate('Home')}
            className="flex items-center cursor-pointer group select-none -my-3"
            id="navbar-logo-container"
          >
            <Logo size="sm" className="scale-90 md:scale-100 origin-left" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[11px] font-sans font-medium tracking-[0.18em] uppercase">
            {navItems.map((item) => {
              const active = isItemActive(item);

              return (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.page)}
                  className={`relative py-2 transition-colors duration-300 cursor-pointer hover:text-white ${
                    active ? 'text-[#D4AF37] font-semibold' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                  
                  {/* Active Underline Glow effect */}
                  {active && (
                    <motion.span
                      layoutId="navbar-active-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37]"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Premium Gold Rounded Book Now CTA Button */}
            <button
              onClick={() => onNavigate('Book Now')}
              className={`relative overflow-hidden group px-6 py-2.5 rounded-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] text-black font-semibold text-[10px] tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_22px_rgba(212,175,55,0.48)] hover:scale-[1.04] active:scale-95 cursor-pointer flex items-center gap-2 ${
                activePage === 'Book Now' ? 'ring-2 ring-white/50' : ''
              }`}
              id="navbar-book-now-button"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              <Sparkles className="w-3.5 h-3.5 text-black fill-black/10 animate-pulse" />
              <span>Book Now</span>
            </button>
          </nav>

          {/* Mobile responsive triggers */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => onNavigate('Book Now')}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] text-black text-[10px] font-sans font-bold tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full bg-white/5 text-[#D4AF37] border border-white/5 active:scale-90 transition-transform"
              title="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Screen Full Mobile Navigation Drawer list */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
            className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-50 flex flex-col justify-between p-8"
          >
            {/* Header drawer */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center select-none" onClick={() => { onNavigate('Home'); setMobileOpen(false); }}>
                <Logo size="sm" className="scale-75 origin-left -my-6 -ml-3" />
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links scroll container */}
            <nav className="flex flex-col gap-5 text-center mt-6 overflow-y-auto max-h-[60vh] py-4">
              {navItems.map((item) => {
                const active = isItemActive(item);

                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      onNavigate(item.page);
                      setMobileOpen(false);
                    }}
                    className={`py-2.5 transition-colors text-base font-sans tracking-widest uppercase ${
                      active 
                        ? 'text-[#D4AF37] font-semibold' 
                        : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Footer drawer */}
            <div className="border-t border-white/10 pt-6 space-y-4 text-center">
              <p className="text-xs text-slate-400 font-light">Luxury Wedding Photography & Cinematic Films</p>
              
              <button
                onClick={() => {
                  onNavigate('Book Now');
                  setMobileOpen(false);
                }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] text-black font-semibold text-xs tracking-widest uppercase shadow-md active:scale-95 transition-all"
              >
                Register Booking Consultation
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

