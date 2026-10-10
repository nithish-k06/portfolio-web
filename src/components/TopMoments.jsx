import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Shield, Terminal, Cpu, Layout, Sparkles, TrendingUp } from 'lucide-react';
import { topMoments } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

const iconMap = {
  Shield: Shield,
  Terminal: Terminal,
  Cpu: Cpu,
  Layout: Layout,
  Sparkles: Sparkles,
};

export default function TopMoments() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    sound.playHover();
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="moments" className="py-20 md:py-28 relative border-t border-white/10 bg-[#08090d] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header with Left/Right Scroll Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-red-500 tracking-widest uppercase">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>01 // TRENDING HIGHLIGHTS</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight flex items-center gap-3">
              <span>TOP MOMENTS</span>
              <span className="text-xs px-2.5 py-1 rounded bg-red-950/60 border border-red-500/40 text-red-400 font-mono font-semibold tracking-normal">
                TODAY'S SELECTION
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Key milestones and technical pillars defining the cybersecurity and software journey.
            </p>
          </div>

          {/* Navigation Arrows for Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-red-500 hover:bg-white/10 text-white transition-all"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-red-500 hover:bg-white/10 text-white transition-all"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Row */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {topMoments.map((moment) => {
            const Icon = iconMap[moment.icon] || Shield;

            return (
              <div
                key={moment.rank}
                onMouseEnter={() => sound.playHover()}
                className="group relative flex-none w-[290px] sm:w-[350px] snap-start flex items-end select-none"
              >
                {/* Netflix Stylized Giant Ranking Number */}
                <div className="netflix-rank-number text-[110px] sm:text-[140px] -mr-6 sm:-mr-8 z-10 pointer-events-none drop-shadow-2xl">
                  {moment.rank}
                </div>

                {/* Card Artwork & Content Box */}
                <div className="relative flex-1 rounded-2xl overflow-hidden netflix-card border border-white/10 group-hover:border-red-500/60 transition-all duration-300 transform group-hover:scale-102 group-hover:-translate-y-1.5 shadow-xl bg-gradient-to-b from-[#141721] to-[#0c0d12]">
                  
                  {/* Top Banner Gradient Visual with Icon */}
                  <div className={`h-36 sm:h-40 bg-gradient-to-br ${moment.imageGradient} relative p-5 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
                    
                    {/* Ambient Glow Orb */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                    
                    {/* Top Row: Category badge & Icon */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="px-2.5 py-1 rounded bg-black/60 border border-white/15 text-[10px] font-mono tracking-wider text-slate-300 uppercase backdrop-blur-sm">
                        {moment.category}
                      </span>
                      
                      <div
                        className="w-9 h-9 rounded-lg bg-black/50 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-md group-hover:scale-110 transition-transform"
                        style={{ color: moment.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Bottom visual tag */}
                    <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                      <span className="text-white/80 font-semibold">{moment.tag}</span>
                      <span className="text-slate-400 text-[10px]">{moment.duration}</span>
                    </div>

                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-syne text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {moment.title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {moment.description}
                    </p>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>{moment.metrics}</span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center text-xs font-mono text-slate-500 flex items-center justify-center gap-1">
          <span>Swipe horizontally to view all 5 Top Moments →</span>
        </div>

      </div>
    </section>
  );
}
