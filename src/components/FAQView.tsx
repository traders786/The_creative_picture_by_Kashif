import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { Search, Info, HelpCircle, ChevronRight } from 'lucide-react';

export default function FAQView() {
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = FAQ_ITEMS.filter(item => 
    item.question.toLowerCase().includes(search.toLowerCase()) ||
    item.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[#D4AF37] font-[#600] text-xs uppercase tracking-widest font-mono">Detailed Policies</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-3">
            Inquiries <span className="italic font-normal text-[#D4AF37]">& FAQs</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* Search tool */}
        <div className="relative mb-12 p-4 rounded-full bg-white/[0.01] border border-white/5">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
          <input
            type="text"
            placeholder="Search booking deposit, raw images files, editing timeline, or copyright..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-2 bg-transparent text-sm focus:outline-none placeholder-slate-500 text-white"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium text-white tracking-wide pr-4">
                    {item.question}
                  </span>
                  <span className="text-xl text-[#D4AF37] font-mono transition-transform duration-300">
                    {expandedId === item.id ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-8 pb-6 text-sm text-slate-400 font-light leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className="text-center py-16 rounded-2xl bg-white/[0.01] border border-white/5">
              <HelpCircle className="w-8 h-8 text-slate-500 mx-auto mb-4" />
              <h3 className="text-base font-serif text-white mb-1">No matching question found</h3>
              <p className="text-xs text-slate-400 font-light">Try searching a different word such as "customization", "Udaipur", "contract", or "album".</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
