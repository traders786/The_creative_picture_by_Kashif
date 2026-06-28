import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Play, Sparkles, Monitor, Disc, Award, ChevronRight, X } from 'lucide-react';
import { CINEMATOGRAPHY_ITEMS } from '../data';

interface CinematographyViewProps {
  onNavigate: (page: string) => void;
  onPlayVideo: (url: string) => void;
}

export default function CinematographyView({ onNavigate, onPlayVideo }: CinematographyViewProps) {

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Hollywood Standards</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-3">
            Cinematography <span className="italic font-normal text-[#D4AF37]">Teasers</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          <p className="max-w-xl mx-auto text-sm text-slate-400 font-light mt-4 leading-relaxed">
            Delivering high-fidelity cinematic masterpieces calibrated in 4K resolution, using prime lenses, dynamic gimbal movements, and Hollywood-grade spatial mixing files.
          </p>
        </div>

        {/* Master Showcase Cinema Player */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/20 bg-black aspect-video mb-24">
          <img 
            src="https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200&auto=format&fit=crop" 
            alt="UHD cinematic background" 
            className="w-full h-full object-cover opacity-50 brightness-75 transition-all"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/25 flex flex-col items-center justify-center p-6 text-center">
            
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPlayVideo('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1')}
              className="w-24 h-24 rounded-full bg-[#D4AF37] text-black shadow-lg shadow-yellow-500/30 flex items-center justify-center hover:bg-white cursor-pointer"
            >
              <Play className="w-10 h-10 fill-black translate-x-1" />
            </motion.button>

            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase bg-black/60 px-4 py-1.5 rounded-full border border-white/5 mt-8">
              DIRECTORS CUT REEL
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-wide uppercase mt-4 max-w-2xl">
              The Grand Heritage Anthem: A Decade of Love
            </h2>
            <p className="text-xs text-slate-300 font-light max-w-lg mt-3 leading-relaxed">
              Experience the cinematic narrative of our signature luxury Indian wedding movies. Sound design by national award winners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {CINEMATOGRAPHY_ITEMS.map((ep) => (
            <div 
              key={ep.id}
              className="group relative rounded-2xl overflow-hidden bg-black border border-white/5 hover:border-[#D4AF37]/40 transition-all shadow-xl"
            >
              {/* Cover block */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={ep.cover} 
                  alt={ep.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <button
                  onClick={() => onPlayVideo(ep.videoUrl)}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/80 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:border-transparent flex items-center justify-center shadow-md transition-colors"
                >
                  <Play className="w-5 h-5 fill-current translate-x-0.5" />
                </button>
                <span className="absolute top-4 left-4 bg-black/60 border border-white/5 text-[9px] font-mono tracking-widest text-slate-300 px-3 py-1 rounded-full">
                  {ep.duration}
                </span>
              </div>

              {/* Text metadata */}
              <div className="p-6">
                <span className="block text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase mb-1">
                  Directed by {ep.director}
                </span>
                <h3 className="text-lg font-serif font-semibold text-white tracking-wide group-hover:text-[#D4AF37] transition-all">
                  {ep.title}
                </h3>
                <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">
                  {ep.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fine-art technical details */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.01] border border-white/5 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] flex items-center justify-center shrink-0">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">RED/ARRI Elite Cameras</h4>
              <p className="text-xs text-slate-400 font-light">Industry-best raw captures.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] flex items-center justify-center shrink-0">
              <Disc className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Dolby Atmos Stereo</h4>
              <p className="text-xs text-slate-400 font-light">Immersive theatrical acoustics.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Bespoke Color Profiles</h4>
              <p className="text-xs text-slate-400 font-light">Tailored lut calibrations.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
