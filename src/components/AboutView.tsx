import { TEAM_MEMBERS } from '../data';
import { Camera, Compass, Award, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

export default function AboutView() {
  const milestones = [
    { year: '2018', title: 'The Genesis', desc: 'Kashif Ali launches "The Creative Picture" with a single vintage camera sensor focusing on gritty street documentary and raw black-and-white portraits.' },
    { year: '2020', title: 'The Palace Breakthrough', desc: 'Securing our first destination wedding assignment at Rambagh Palace, Jaipur, redefining royal slow-motion cinema.' },
    { year: '2022', title: 'The 4K Cinematic Leap', desc: 'Upgrading the entire lens kit to premium cinema prime glass, introducing high fidelity spatial audio recorders.' },
    { year: '2025', title: 'Vogue Recognition', desc: 'Earning visual design awards for our high-fashion bridal capsule catalog shoots.' }
  ];

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-[#D4AF37] font-[#600] text-xs uppercase tracking-widest font-mono">The Studio Legacy</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-3">
            About <span className="italic font-normal text-[#D4AF37]">Our Vision</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* Backstory & Founder Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/10 via-[#D4AF37]/30 to-yellow-500/10 rounded-2xl blur-md opacity-80" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                alt="Head Director Kashif Ali"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-xs uppercase tracking-widest font-mono text-[#D4AF37] mb-1 block">FOUNDER & DIRECTOR</span>
                <h3 className="text-2xl font-serif font-light text-white">Kashif Ali</h3>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Behind The Lens</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase">
              The History of <span className="italic font-normal text-[#D4AF37]">The Creative Picture</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Founded in 2018 in Mumbai, The Creative Picture was built on a singular premise: that luxury wedding archives shouldn't resemble sterile home videos, but should instead look like magnificent global cinema.
            </p>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Under the creative supervision of Kashif Ali, our boutique studio limits bookings to just 15 grand wedding assignments per year. This strict capacity guarantees that every project is given meticulous custom lighting, customized composition notes, and personal post-production color mastering.
            </p>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Today, our teams cover royal destination alliances across Rajasthan, the pristine backwaters of Kerala, historical hubs in Europe, and high-fashion catalogs for international luxury bridal designers.
            </p>
          </div>
        </div>

        {/* Timeline milestones */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-semibold text-xs font-mono uppercase tracking-widest">A Chronicle of Growth</span>
            <h3 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase mt-2">
              Our Journey <span className="italic font-normal text-[#D4AF37]">Timeline</span>
            </h3>
          </div>

          <div className="border-l border-[#D4AF37]/30 ml-4 md:ml-1/2 space-y-12 relative">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 md:w-1/2 md:even:translate-x-[100%] md:even:pl-8 md:odd:pr-8 md:odd:-translate-x-[100%] md:odd:text-right">
                {/* Golden point dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-1.5 -translate-x-[50%] md:translate-x-[50%] w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-black" />
                
                <div>
                  <span className="text-lg font-mono text-[#D4AF37] font-semibold block mb-1">
                    {ms.year}
                  </span>
                  <h4 className="text-base font-semibold text-white tracking-wide mb-2">
                    {ms.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed md:max-w-sm ml-auto">
                    {ms.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-semibold text-xs font-mono uppercase tracking-widest">THE BRAINS IN THE TEAM</span>
            <h3 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase mt-2">
              Meet The <span className="italic font-normal text-[#D4AF37]">Visual Artists</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((tm) => (
              <div 
                key={tm.id}
                className="group p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#D4AF37]/35 transition-all text-center"
              >
                <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-6 border border-[#D4AF37]/40 shadow-xl bg-zinc-950">
                  <img
                    src={tm.imageUrl}
                    alt={tm.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest">
                  {tm.role}
                </span>
                <h4 className="text-lg font-serif font-semibold text-white tracking-wide mt-2">
                  {tm.name}
                </h4>
                <p className="text-xs text-slate-400 font-light mt-4 leading-relaxed px-2">
                  {tm.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
