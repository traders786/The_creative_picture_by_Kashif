import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Video, Play, Compass, ArrowRight, ShieldCheck, CheckCircle, Clock, X } from 'lucide-react';
import { VIDEOGRAPHY_ITEMS } from '../data';

interface VideographyViewProps {
  onNavigate: (page: string) => void;
  onPlayVideo: (url: string) => void;
}

export default function VideographyView({ onNavigate, onPlayVideo }: VideographyViewProps) {
  const steps = [
    { number: '01', title: 'Private Creative Consultation', duration: 'Week -4', desc: 'Discussing locations, timelines, custom lights, and dress coordinates to synchronize cinematography profiles.' },
    { number: '02', title: 'Multi-Cam Live Capture', duration: 'The Event', desc: 'Capturing under high-end 10-bit cinema standards in redundant double memory-card slots.' },
    { number: '03', title: 'The Teaser Output', duration: 'Event + 72 Hrs', desc: 'Exporting the 60-second social media preview with pristine lighting profiles.' },
    { number: '04', title: 'Color Grading & Sound Master', duration: 'Week 4 - 6', desc: 'Finishing the final feature movie with theater-grade sound design and custom color corrections.' }
  ];

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden h-[36vh] flex items-center justify-center mb-16 border border-white/5">
          <div 
            className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          <div className="relative z-10 text-center px-4">
            <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block mb-2">GOLD RATIO CAPTURE</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mb-2">
              Videography <span className="italic font-normal text-[#D4AF37]">Masters</span>
            </h1>
          </div>
        </div>

        {/* Videography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {VIDEOGRAPHY_ITEMS.map((v) => (
            <div 
              key={v.id}
              className="group relative rounded-2xl overflow-hidden bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-all cursor-pointer"
              onClick={() => onPlayVideo(v.videoUrl)}
            >
              <img 
                src={v.img} 
                alt={v.title}
                className="w-full aspect-video object-cover opacity-60 group-hover:scale-105 group-hover:opacity-85 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-[#D4AF37] text-black rounded-full flex items-center justify-center scale-90 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-black translate-x-0.5" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black to-transparent">
                <span className="text-[9px] font-mono text-[#D4AF37]/80 uppercase">{v.location}</span>
                <p className="text-sm font-semibold text-white tracking-wide">{v.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Process section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest block">The Journey Blueprint</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase mt-2">
              Chronicle of <span className="italic font-normal text-[#D4AF37]">Creation Flow</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Visual connecting line */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-yellow-500/10 via-[#D4AF37]/50 to-yellow-500/10 z-0" />

            {steps.map((st, idx) => (
              <div key={st.number} className="relative z-10 p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#D4AF37]/20 transition-all text-center">
                <div className="w-14 h-14 rounded-full bg-black border border-[#D4AF37]/50 mx-auto mb-6 flex items-center justify-center text-lg font-serif italic text-[#D4AF37]">
                  {st.number}
                </div>
                <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-widest mb-1">
                  {st.duration}
                </span>
                <h3 className="text-base font-semibold text-white tracking-wide mb-3">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Master Videography spec banner */}
        <div className="rounded-3xl bg-white/[0.01] border border-white/5 p-8 md:p-12 text-center max-w-4xl mx-auto">
          <Video className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-xl font-serif uppercase text-white mb-2">Want to add cinematic live interviews to your films?</h3>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto mb-8">
            Our multi-mic audio setups capture crisp audio vows, heartfelt parent interviews, and the rhythmic beats of the dhol, layered beautifully over high-fidelity strings.
          </p>
          <button
            onClick={() => onNavigate('Book Now')}
            className="px-8 py-3.5 bg-[#D4AF37] text-black font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-white transition-all shadow-md shadow-yellow-500/20"
          >
            Schedule Private Interview Shoot
          </button>
        </div>

        {/* Video Overlay Modal handled globally in App.tsx */}

      </div>
    </div>
  );
}
