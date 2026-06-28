import { Camera, Mail, Phone, MapPin, Instagram, ArrowUpRight, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', page: 'Home' },
    { label: 'Photography', page: 'Photography' },
    { label: 'Videography', page: 'Videography' },
    { label: 'Cinematography', page: 'Cinematography' },
    { label: 'Portfolio', page: 'Gallery' },
    { label: 'Stories', page: 'Stories' },
    { label: 'About Us', page: 'About Us' },
    { label: 'Testimonials', page: 'Testimonials' },
    { label: 'FAQ', page: 'FAQ' }
  ];

  const services = [
    'Wedding Photography', 'Pre Wedding Shoot', 'Cinematography', 
    'Videography', 'Baby Shoot', 'Maternity Shoot', 'Fashion Photography', 'Drone Coverage'
  ];

  const miniInstagram = [
    'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=150&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=150&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=150&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=150&auto=format&fit=crop'
  ];

  return (
    <footer className="bg-black text-white border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper content columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div 
              onClick={() => onNavigate('Home')}
              className="flex items-center cursor-pointer select-none"
            >
              <Logo size="sm" className="scale-95 origin-left -ml-2 -mb-2" />
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              We capture magnificent destination weddings, bespoke pre-shoots, and premium fashion catalogs under peerless cinema-grade details.
            </p>

            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/the_creative_picture_027" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black transition-all flex items-center justify-center border border-white/10"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-1">
              <span className="block text-[9px] text-[#D4AF37] uppercase tracking-widest font-mono">Current Shoot Venue</span>
              <span className="block text-xs font-medium text-slate-200">Taj Fort Aguada, Goa</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-xs text-slate-400 font-light">
              {quickLinks.map((lnk) => (
                <li key={lnk.page}>
                  <button 
                    onClick={() => onNavigate(lnk.page)}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {lnk.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-6">Visual Services</h4>
            <ul className="space-y-3 text-xs text-slate-400 font-light">
              {services.map((srv) => (
                <li key={srv}>
                  <button 
                    onClick={() => onNavigate('Services')}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-6">Contact Info</h4>
            <ul className="space-y-4 text-xs text-slate-400 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Penthouse #402, Signature Towers, Bandra West, Mumbai, MH - 400050</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+91 99999 88888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>info@thecreativepicture.com</span>
              </li>
            </ul>
          </div>

          {/* Instagram Mini Feed column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-6">Instagram Feed</h4>
            <div className="grid grid-cols-2 gap-2">
              {miniInstagram.map((url, i) => (
                <a 
                  key={i}
                  href="https://www.instagram.com/the_creative_picture_027"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg overflow-hidden border border-white/10 aspect-square group block"
                >
                  <img
                    src={url}
                    alt={`Mini inst ${i+1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </a>
              ))}
            </div>
            <a 
              href="https://www.instagram.com/the_creative_picture_027" 
              target="_blank" 
              rel="noreferrer"
              className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider hover:underline flex items-center gap-1 mt-4"
            >
              Browse @the_creative_picture_027
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} The Creative Picture. All Cinematic Rights Reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('FAQ')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('FAQ')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
