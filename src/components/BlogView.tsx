import { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { Search, Calendar, User, Clock, ArrowLeft, Tag, BookOpen, ChevronRight } from 'lucide-react';

export default function BlogView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Palace Weddings', 'Coastal Celebrations', 'Grand Ballroom'];

  // Filters combined
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Back to Blog List toggle */}
        {selectedPost ? (
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] hover:text-white uppercase mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Love Stories
            </button>

            {/* Title / Hero */}
            <span className="text-xs uppercase tracking-widest font-mono text-[#D4AF37]">
              {selectedPost.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-white uppercase mt-4 mb-8 leading-tight">
              {selectedPost.title}
            </h1>

            {/* Author and metadata banner */}
            <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-white/[0.01] border border-white/5 mb-10 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-3">
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  className="w-8 h-8 rounded-full border border-[#D4AF37]/50"
                />
                <span className="text-white font-medium">{selectedPost.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                {selectedPost.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                {selectedPost.readTime}
              </div>
            </div>

            {/* Big cover photo */}
            <div className="rounded-3xl overflow-hidden aspect-video border border-white/5 bg-zinc-950 mb-12 shadow-2xl">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content formatted beautifully with magazine typography */}
            <div className="prose prose-invert max-w-none text-slate-300 font-light text-base leading-relaxed space-y-6">
              {selectedPost.content.split('\n\n').map((para, i) => (
                <p key={i} className="first-letter:text-3xl first-letter:font-serif first-letter:text-[#D4AF37] first-letter:mr-1 first-letter:float-left">
                  {para}
                </p>
              ))}
            </div>

            {/* Post Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-white/5">
              <Tag className="w-4 h-4 text-[#D4AF37]" />
              {selectedPost.tags.map(t => (
                <span key={t} className="text-[10px] font-mono uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5 text-slate-300">
                  #{t}
                </span>
              ))}
            </div>

            {/* Related Posts Panel */}
            <div className="mt-20 pt-12 border-t border-white/5">
              <h3 className="text-xl font-serif text-white mb-8 uppercase tracking-wide">
                Related <span className="italic font-normal text-[#D4AF37]">Reading Stories</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BLOG_POSTS.filter(p => p.id !== selectedPost.id).slice(0, 2).map((rel) => (
                  <div 
                    key={rel.id}
                    onClick={() => {
                      setSelectedPost(rel);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#D4AF37]/35 cursor-pointer flex gap-4 transition-all"
                  >
                    <img
                      src={rel.imageUrl}
                      alt={rel.title}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <span className="text-[9px] font-mono text-[#D4AF37] uppercase">{rel.category}</span>
                      <h4 className="text-sm font-semibold text-white tracking-wide mt-1 line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] font-[#600] text-xs uppercase tracking-widest font-mono">Curated Memoirs</span>
              <h1 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase tracking-wider mt-2">
                Stories of <span className="italic font-normal text-[#D4AF37]">Different Couples</span>
              </h1>
              <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
            </div>

            {/* Config bars */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/[0.01] border border-white/5 mb-12 shadow-xl">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                <input
                  type="text"
                  placeholder="Search couple stories, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-5 py-3 rounded-full bg-white/5 border border-white/5 focus:border-[#D4AF37]/50 focus:outline-none placeholder-slate-500 text-sm text-white"
                />
              </div>

              {/* Category buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#D4AF37] text-black font-semibold'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Feed Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id}
                  onClick={() => {
                    setSelectedPost(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group rounded-2xl overflow-hidden bg-black border border-white/5 hover:border-[#D4AF37]/40 transition-all cursor-pointer flex flex-col justify-between shadow-2xl h-full"
                >
                  <div>
                    {/* Cover block */}
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-black/60 border border-white/10 text-[9px] font-mono tracking-widest text-slate-300 px-3 py-1 rounded-full uppercase">
                        {post.category}
                      </span>
                    </div>

                    {/* Metadata summary */}
                    <div className="p-6 pb-2">
                      <div className="flex items-center gap-4 text-[10px] text-slate-400 font-mono mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-all tracking-wide line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-light mt-3 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-2 border-t border-white/5 mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest inline-flex items-center gap-1">
                      Read full story
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      By {post.author.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
