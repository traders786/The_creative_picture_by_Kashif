import { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquareCode, Award, CheckCircle } from 'lucide-react';

export default function TestimonialsView() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Wedding', 'Destination', 'Fashion'];

  const filtered = filter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === filter);

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] font-[#600] text-xs uppercase tracking-widest font-mono">Heirloom Endorsements</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-3">
            Client <span className="italic font-normal text-[#D4AF37]">Testimonials</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
                filter === cat
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-md shadow-yellow-500/10'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filtered.map((t) => (
            <div 
              key={t.id}
              className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-[#D4AF37]/35 transition-all flex flex-col justify-between h-full shadow-2xl"
            >
              <div>
                <div className="flex items-center gap-1 mb-6 text-[#D4AF37]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-sm font-light text-slate-300 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]/40"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">{t.name}</h4>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block mt-0.5">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video testimonials list simulated / text */}
        <div className="rounded-3xl bg-white/[0.01] border border-white/5 p-8 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-serif text-white uppercase mb-8 text-center tracking-wide">
            Video <span className="italic font-normal text-[#D4AF37]">Testimonials</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-2xl overflow-hidden aspect-video border border-white/5 bg-zinc-950">
              <img
                src="https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=600&auto=format&fit=crop"
                alt="Testimonial cover 1"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
                <span className="text-[9px] font-mono text-[#D4AF37] uppercase mb-1">Pre-Wedding Client</span>
                <h4 className="text-base font-semibold text-white">"Their direction felt so easy & elegant"</h4>
                <p className="text-xs text-slate-400 font-light mt-1">Meera & Rohan share their Jaisalmer sands story.</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden aspect-video border border-white/5 bg-zinc-950">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop"
                alt="Testimonial cover 2"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
                <span className="text-[9px] font-mono text-[#D4AF37] uppercase mb-1">Destination Wedding</span>
                <h4 className="text-base font-semibold text-white">"Every second of our royal teaser pop!"</h4>
                <p className="text-xs text-slate-400 font-light mt-1">Siddharth & Rhea review their Udaipur grand cinematic.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
