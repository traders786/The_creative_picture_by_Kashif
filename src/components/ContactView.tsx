import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Instagram, Send, Sparkles, CheckCircle 
} from 'lucide-react';

export default function ContactView() {
  const [msgData, setMsgData] = useState({ name: '', email: '', text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMsgData({ name: '', email: '', text: '' });
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-[#600] text-xs uppercase tracking-widest font-mono">The Studio Contact</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-2">
            Establish <span className="italic font-normal text-[#D4AF37]">Connection</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left panel metrics */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest font-mono">THE CREATIVE PICTURE</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase mt-2">Central Headquarters</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed mt-4">
                Our central luxury consultations showroom welcomes private elite families and bridal designers by scheduling direct digital appointments.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Headquarters Venue</h4>
                  <p className="text-sm text-slate-300 font-medium">Penthouse #402, Signature Towers, Bandra West, Mumbai, MH - 400050</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Consultation Hotline</h4>
                  <p className="text-sm text-slate-300 font-medium">+91 99999 88888 • +91 98888 77777</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Stellar Client Care</h4>
                  <p className="text-sm text-slate-300 font-medium">info@thecreativepicture.com • press@thecreativepicture.com</p>
                </div>
              </div>
            </div>

            {/* Social credentials */}
            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-[#D4AF37]" />
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">Follow our updates</span>
                  <a href="https://www.instagram.com/the_creative_picture_027" target="_blank" rel="noreferrer" className="text-xs text-white hover:text-[#D4AF37]">
                    @the_creative_picture_027
                  </a>
                </div>
              </div>

              <a
                href="https://www.instagram.com/the_creative_picture_027"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#D4AF37] hover:bg-white text-black text-[10px] font-mono rounded-full text-center transition-all"
              >
                Journal Link
              </a>
            </div>
          </div>

          {/* Right panel Contact Form & Map */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Dispatch Message form */}
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 shadow-2xl">
              <h4 className="text-lg font-serif text-white uppercase mb-6">
                Transmit <span className="italic font-normal text-[#D4AF37]">Bespoke Message</span>
              </h4>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand"
                      value={msgData.name}
                      onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anand@domain.com"
                      value={msgData.email}
                      onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-2">Transmission Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your design inspirations..."
                    value={msgData.text}
                    onChange={(e) => setMsgData({ ...msgData, text: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#D4AF37] hover:bg-white text-black font-semibold font-mono text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Transmit Dispatch Telegram
                </button>
              </form>

              {/* Success state block */}
              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-mono flex items-center gap-2 animate-pulse">
                  <CheckCircle className="w-4 h-4" />
                  Your secret dispatch was routed to Kashif's personal log inbox!
                </div>
              )}
            </div>

            {/* Simulated Satellite coordinates Dark Map */}
            <div className="rounded-3xl border border-white/5 bg-zinc-950 aspect-video relative overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center p-6">
              
              {/* Subtle dark layout lines */}
              <div className="absolute inset-0 bg-[#090909] opacity-70 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:25px_25px]" />
              
              <div className="relative z-10 space-y-4">
                <span className="px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-xs font-mono text-[#D4AF37] uppercase tracking-widest border border-yellow-500/20 inline-block">
                  Latitude 19.0544° N, Longitude 72.8402° E
                </span>
                <h4 className="text-lg font-serif uppercase tracking-wider text-white">Central Bandra Showroom</h4>
                <p className="text-xs text-slate-400 font-light max-w-sm mx-auto">
                  Map coordinate visualization locked. Secure parking details will be transmitted with your invitation pass.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
