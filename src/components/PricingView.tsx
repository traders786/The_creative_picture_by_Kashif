import { Check, Star, Zap, Info, Calendar } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data';

interface PricingViewProps {
  onNavigate: (page: string) => void;
}

export default function PricingView({ onNavigate }: PricingViewProps) {
  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">Bespoke Investment</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-3">
            Pricing <span className="italic font-normal text-[#D4AF37]">Packages</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
          <p className="max-w-xl mx-auto text-sm text-slate-400 font-light mt-4 leading-relaxed">
            Transparent, uncompromised rates designed for elite storytelling. Invest in heirloom art pieces that preserve your family saga for generations.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SERVICE_PACKAGES.slice(0, 3).map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between h-full border ${
                pkg.isPopular 
                  ? 'bg-gradient-to-b from-zinc-900 to-black border-[#D4AF37] shadow-xl shadow-yellow-500/5' 
                  : 'bg-white/[0.01] border-white/5 hover:border-[#D4AF37]/30 transition-all'
              }`}
            >
              {/* Popular Flag */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#D4AF37] text-black text-[9px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-black" />
                  Most Requested
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">
                  {pkg.category}
                </span>
                <h3 className="text-2xl font-serif text-white tracking-wide uppercase mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                  {pkg.tagline}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl sm:text-4xl font-mono text-[#D4AF37] font-semibold">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-500 font-light">/ Flat Retowner</span>
                </div>

                <div className="w-full h-[1px] bg-white/5 mb-8" />

                {/* Features list */}
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 font-light leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onNavigate('Book Now')}
                className={`w-full py-3.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-[#D4AF37] text-black font-semibold hover:bg-white'
                    : 'bg-white/5 border border-white/10 hover:border-[#D4AF37] text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Select this Schedule
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.01] border border-white/5 overflow-x-auto shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-serif text-white mb-8 uppercase text-center">
            Comprehensive <span className="italic font-normal text-[#D4AF37]">Feature Comparison</span>
          </h3>

          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 text-xs font-mono uppercase tracking-wider text-slate-400">Services Highlight</th>
                <th className="py-4 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">Silver Schedule</th>
                <th className="py-4 text-xs font-mono uppercase tracking-wider text-white">Gold Cinematic</th>
                <th className="py-4 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">Platinum Grand</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Lead Photographers', s: '1 Senior', g: '2 Seniors', p: 'Kashif Ali + 2 Seniors' },
                { name: 'Lead Cinematographers', s: 'None', g: '1 Chief Director', p: '2 Chief Directors' },
                { name: 'Average Shoot Hours', s: '8 Hours', g: '12 Hours (Full Day)', p: 'Multi-Day (Up to 3 days)' },
                { name: 'Output Portrait Files', s: '300 Fine-art edits', g: '500+ Fully graded', p: 'Unlimited master assets' },
                { name: '4K Cinema Teaser', s: 'None', g: '3 - 5 Mins UHD Highlight', p: '30-40 Mins full docu film' },
                { name: 'Handcrafted Albums', s: 'None', g: '1 Elite Leather Album', p: '2 Premium customized albums' },
                { name: 'Drone Flyby Coverage', s: 'Optional Addon', g: 'Included (Weather safe)', p: 'All-inclusive multi-cam' }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-4 text-xs font-medium text-slate-300">{row.name}</td>
                  <td className="py-4 text-xs font-light text-slate-400">{row.s}</td>
                  <td className="py-4 text-xs font-light text-slate-300 font-semibold">{row.g}</td>
                  <td className="py-4 text-xs font-light text-[#D4AF37] font-semibold">{row.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
