import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, Upload, Sparkles, Send, CheckCircle, 
  MapPin, ShieldCheck, Mail, Phone, Clock, Plus, Trash2, Globe 
} from 'lucide-react';
import { SERVICE_PACKAGES } from '../data';
import { Category } from '../types';

export default function BookNowView() {
  // Booking Form parameters
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    location: '',
    shootType: 'wedding' as Category,
    packageId: 'pkg-gold',
    message: ''
  });

  const [references, setReferences] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [submittedBookings, setSubmittedBookings] = useState<any[]>([]);

  // Custom Calendar picker parameters
  const [showCalendarGrid, setShowCalendarGrid] = useState(false);
  const [currentMonth, setCurrentMonth] = useState('June 2026');
  const daysInJune = Array.from({ length: 30 }, (_, i) => i + 1);

  useEffect(() => {
    // Load local storage bookings
    const loc = localStorage.getItem('creative_picture_bookings');
    if (loc) {
      try {
        setSubmittedBookings(JSON.parse(loc));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (day: number) => {
    const formattedDate = `2026-06-${day < 10 ? '0' : ''}${day}`;
    setFormData((prev) => ({ ...prev, eventDate: formattedDate }));
    setShowCalendarGrid(false);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setReferences((prev) => [...prev, url]);
    }
  };

  const removeReference = (idx: number) => {
    setReferences((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store booking
    const newBooking = {
      id: `booking-${Date.now()}`,
      ...formData,
      references,
      createdAt: new Date().toLocaleDateString()
    };

    const nextBookings = [newBooking, ...submittedBookings];
    setSubmittedBookings(nextBookings);
    localStorage.setItem('creative_picture_bookings', JSON.stringify(nextBookings));

    // Prepare live WhatsApp send
    const textMsg = `Hello The Creative Picture, I would like to book a luxury consultation:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Event Date: ${formData.eventDate}
Location: ${formData.location}
Shoot Style: ${formData.shootType}
Package Selected: ${formData.packageId}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(textMsg);
    
    // Set success modal & clear state
    setSuccess(true);
    setReferences([]);

    // Open whatsapp in background
    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${encodedText}`, '_blank');
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-[#600] text-xs uppercase tracking-widest font-mono">RESERVE A GRAND DATE</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-2">
            Luxury Shoot <span className="italic font-normal text-[#D4AF37]">Reservation</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Booking Form */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white/[0.01] border border-white/5 shadow-2xl relative">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#D4AF37] text-black text-[9px] font-mono tracking-widest px-4 py-1 rounded-full uppercase font-bold">
              Secure Direct Retowner
            </div>

            <h3 className="text-2xl font-serif font-light text-white uppercase mb-8">
              Consultation <span className="italic font-normal text-[#D4AF37]">Registration</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Meera Singhania"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 99999 88888"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. meera@domain.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white"
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Target Event Date *</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="eventDate"
                      required
                      placeholder="e.g. 2026-06-15"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCalendarGrid(!showCalendarGrid)}
                      className="px-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center transition-all"
                    >
                      <CalendarIcon className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Calendar Grid Box preview */}
                  <AnimatePresence>
                    {showCalendarGrid && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 p-5 rounded-2xl bg-zinc-950 border border-[#D4AF37]/30 z-30 shadow-2xl w-72"
                      >
                        <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                          <span className="text-xs font-mono text-[#D4AF37]">{currentMonth}</span>
                          <span className="text-[10px] text-slate-500 font-mono">Select Day</span>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-mono mb-2 text-slate-400">
                          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {/* empty offsets for June 2026 starting on Monday (1 offset) */}
                          <span />
                          {daysInJune.map((day) => (
                            <button
                              key={day}
                              type="button"
                              onClick={() => handleDateSelect(day)}
                              className="p-1.5 rounded text-center text-xs font-mono hover:bg-[#D4AF37] hover:text-black transition-colors bg-white/5 text-slate-300"
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Shoot Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Suryagarh Palace, Jaisalmer"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Style Genre *</label>
                  <select
                    name="shootType"
                    value={formData.shootType}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white font-mono"
                  >
                    <option value="wedding">Royal Wedding Photography</option>
                    <option value="prewedding">Pre-Wedding Shoot & Cinema</option>
                    <option value="couple">Couple Highlights</option>
                    <option value="baby">Baby Bloom Shoot</option>
                    <option value="maternity">Fine-Art Maternity</option>
                    <option value="fashion">High Editorial Fashion</option>
                    <option value="portrait">Studio Portraiture</option>
                    <option value="drone">Drone Aerial Mapping</option>
                    <option value="corporate">Corporate Profile</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Baseline Package Selection *</label>
                  <select
                    name="packageId"
                    value={formData.packageId}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white font-mono"
                  >
                    {SERVICE_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} ({pkg.price})
                      </option>
                    ))}
                    <option value="custom">Bespoke Fully Custom Itinerary</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Inspirational Message / Special Requests</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share details about your outfit colors, heritage locations, family traditions, or custom styling inputs..."
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none text-sm font-light text-white resize-none"
                />
              </div>

              {/* Upload reference visual previews */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Upload Reference Imagery Panels (Inspirational board)</label>
                <div className="flex flex-wrap items-center gap-4">
                  <label className="cursor-pointer px-6 py-4 rounded-xl border border-dashed border-white/10 hover:border-[#D4AF37]/50 bg-white/5 text-slate-400 hover:text-white transition-all text-center text-xs flex items-center gap-2">
                    <Upload className="w-4 h-4 text-[#D4AF37]" />
                    Choose JPG/PNG References
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileChange}
                      className="hidden"
                    />
                  </label>

                  {references.map((url, idx) => (
                    <div key={idx} className="relative w-16 h-16 rounded-xl overflow-hidden border border-[#D4AF37]/40">
                      <img src={url} alt="upload preview" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeReference(idx)}
                        className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit triggers dispatch */}
              <button
                type="submit"
                className="w-full py-4 bg-[#D4AF37] hover:bg-white text-black font-semibold text-xs tracking-widest uppercase rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-yellow-500/10"
              >
                <Send className="w-4 h-4" />
                Submit Reservation & Open WhatsApp Direct Connection
              </button>
            </form>
          </div>

          {/* Guidelines Sidebar & submitted list log */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Direct consultation lines */}
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
              <h4 className="text-lg font-serif text-white uppercase mb-6 flex items-center gap-1">
                Luxury <span className="italic font-normal text-[#D4AF37]">Guidelines</span>
              </h4>
              
              <ul className="space-y-4 text-xs text-slate-400 font-light leading-relaxed">
                <li className="flex gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>Reserve dates 6-12 months ahead to ensure exclusive attention during the holiday/shoot seasons.</span>
                </li>
                <li className="flex gap-2">
                  <Globe className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>Full contracts are generated on our client care portal upon deposit realization.</span>
                </li>
                <li className="flex gap-2">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>Support emails: <br /><strong className="text-white hover:text-[#D4AF37]">info@thecreativepicture.com</strong></span>
                </li>
              </ul>
            </div>

            {/* Submitted log panel */}
            {submittedBookings.length > 0 && (
              <div className="p-8 rounded-3xl bg-zinc-950 border border-yellow-500/10">
                <h4 className="text-sm font-mono text-[#D4AF37] uppercase mb-4 tracking-widest">
                  Your Action Log ({submittedBookings.length})
                </h4>
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  {submittedBookings.map((b) => (
                    <div key={b.id} className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[9px] text-[#D4AF37] font-mono uppercase">{b.shootType} • {b.createdAt}</span>
                      <p className="text-xs font-semibold text-white mt-1">{b.name}</p>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">{b.location}</p>
                      <span className="inline-block px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 text-[8px] font-mono font-semibold uppercase mt-2">
                        WhatsApp Active
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <div className="max-w-md w-full bg-zinc-950 rounded-3xl p-8 border border-yellow-500/30 text-center relative shadow-2xl">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-serif text-white uppercase mb-2">Reservation Submitted!</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                  Thank you for placing a premium inquiry log with The Creative Picture. We are now establishing a live transmission redirect to our principal booking coordinator via WhatsApp.
                </p>
                <div className="w-full aspect-video rounded-xl bg-white/5 p-4 border border-white/5 mb-6 text-left text-xs font-mono">
                  <span className="text-[#D4AF37] uppercase text-[9px]">Submitted Parameters:</span>
                  <p className="text-white mt-1">Client: {formData.name}</p>
                  <p className="text-slate-400">Date: {formData.eventDate}</p>
                  <p className="text-slate-400">Venue: {formData.location}</p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2 bg-[#D4AF37] hover:bg-white text-black font-semibold font-mono text-xs uppercase tracking-widest rounded-full transition-all"
                >
                  Dismiss Overlay
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
