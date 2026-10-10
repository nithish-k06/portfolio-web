import React from 'react';
import { GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

export default function EducationCertifications() {

  return (
    <section id="certifications" className="py-20 md:py-28 relative border-t border-white/10 bg-[#08090d]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-red-500 tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 // ACADEMIC & INDUSTRY PATH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight leading-tight">
            EDUCATION & <span className="text-gradient-red">TRAINING.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Verified academic milestones and practical software training shaping my development as an Information Technology engineer.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          
          {educationTimeline.map((item, index) => {
            const isInternship = item.type === 'INTERNSHIP';

            return (
              <div key={index} className="relative group">
                
                {/* Timeline Bullet Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#08090d] border-2 transition-all flex items-center justify-center ${
                    isInternship
                      ? 'border-red-500 group-hover:bg-[#E50914] shadow-[0_0_12px_rgba(229,9,20,0.5)]'
                      : 'border-white/40 group-hover:border-red-500 group-hover:bg-[#E50914]'
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-black" />
                </div>

                {/* Card Container */}
                <div className="netflix-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4 hover:border-red-500/50 bg-[#0e1017] transition-all duration-300">
                  
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-red-400 font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider border ${
                        isInternship
                          ? 'bg-red-950/60 border-red-500/40 text-red-400'
                          : 'bg-white/5 border-white/10 text-slate-300'
                      }`}
                    >
                      {item.type} • {item.status}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-syne font-bold text-white group-hover:text-red-400 transition-colors">
                      {item.degree}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <Building2 className="w-3.5 h-3.5 text-red-500" />
                        {item.institution}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
