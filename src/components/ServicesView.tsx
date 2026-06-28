import { Sparkles, Camera, Film, Award, MapPin, Heart, Clock, Video } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data';

interface ServicesViewProps {
  onNavigate: (page: string) => void;
}

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  const serviceHighlights = [
    {
      title: 'Wedding Package',
      tagline: 'Capturing the grand narrative of heritage alliances',
      desc: 'Our flagship wedding experience captures every tear, smile, and heavy traditional detail in premium gold colors.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Pre-Wedding Package',
      tagline: 'Romantic fairytales written through luxury cinematography',
      desc: 'A premium location shoot celebrating your story in desert dunes, royal palaces, or European canals.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Maternity Package',
      tagline: 'Sleek editorial focus on gorgeous transitions',
      desc: 'Styled studio setups capturing the maternal glow in elegant velvet fabrics and professional chiaroscuro side lighting.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Baby Shoot Package',
      tagline: 'Preserving raw early childhood innocence forever',
      desc: 'Gentle, high key soft-lighting portraiture focusing of precious smiles, cute yawns, and tiny fingers.',
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Corporate & Commercial',
      tagline: 'High-caliber corporate styling & elite profiles',
      desc: 'Top-tier executive profiles, high-fashion catalogs, and cinematic office workspace showreels.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Drone Aerial Package',
      tagline: 'Cinematic three-dimensional symmetry overhead views',
      desc: 'Dynamic aerial flybys mapping luxury palace setups, shoreline waves, and beautiful grand entrances.',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">The Elite Catalog</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-3">
            Bespoke <span className="italic font-normal text-[#D4AF37]">Visual Services</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* Dynamic Service Sections wrapper */}
        <div className="space-y-24 mb-28">
          {serviceHighlights.map((srv, idx) => (
            <div 
              key={srv.title}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image box with golden halo border */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-500/10 via-[#D4AF37]/20 to-yellow-500/10 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>
              </div>

              {/* Text content details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-[#D4AF37] font-mono text-[10px] tracking-widest uppercase bg-white/5 py-1.5 px-4 rounded-full border border-white/5">
                  Category Style • {srv.title.split(' ')[0]}
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase">
                  {srv.title.split(' ').slice(0, -1).join(' ')} <span className="italic font-normal text-[#D4AF37]">{srv.title.split(' ').pop()}</span>
                </h3>
                <p className="text-xs uppercase tracking-wider font-mono text-slate-300">
                  {srv.tagline}
                </p>
                <div className="w-12 h-[1px] bg-yellow-500/50" />
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {srv.desc}
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <button
                    onClick={() => onNavigate('Pricing')}
                    className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
                  >
                    View Pricing Structure
                  </button>
                  <button
                    onClick={() => onNavigate('Book Now')}
                    className="text-xs text-white hover:text-[#D4AF37] font-mono tracking-wider flex items-center gap-1 border-b border-white/10 pb-1"
                  >
                    Book Consultation
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
