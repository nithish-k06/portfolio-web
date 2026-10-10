import React, { useState } from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { featuredProjects } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function ProjectGateway({ onExploreProject }) {
  // Flagship project: Tamil Nadu Sports Development Platform
  const flagship = featuredProjects.find((p) => p.id === 'tn-sports') || featuredProjects[0];
  const [activeDistrict, setActiveDistrict] = useState('Dharmapuri');

  const districts = ['Dharmapuri', 'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'];

  return (
    <section id="gateway" className="py-20 md:py-28 relative border-t border-white/10 bg-[#08090d] overflow-hidden">
      
      {/* Dark Red and Blue Ambient Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-blue-950/25 pointer-events-none" />
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-red-500 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // FLAGSHIP BILLBOARD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight leading-tight">
            PROJECT <span className="text-gradient-red">GATEWAY.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Spotlighting the largest full-stack architectural system designed for multi-tier state sports administration.
          </p>
        </div>

        {/* Wide Cinematic Billboard Feature Panel */}
        <div className="netflix-card rounded-3xl border border-red-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#181a24] via-[#0f1118] to-[#08090d]">
          
          {/* Subtle animated scanline / grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(229,9,20,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="px-3.5 py-1.5 rounded-full bg-red-600 text-white font-extrabold tracking-wider shadow-md">
                  FEATURED SPOTLIGHT
                </span>
                <span className="text-slate-400 uppercase tracking-widest">STATE-SCALE PLATFORM</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-syne font-black text-white leading-tight">
                {flagship.title}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {flagship.shortDescription}
              </p>

              {/* Key Features List */}
              <div className="space-y-2.5 font-mono text-xs text-slate-300 pt-1">
                {flagship.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Technology Stack Badges */}
              <div className="space-y-2 pt-2 font-mono text-xs">
                <span className="text-slate-500 block uppercase tracking-wider text-[11px]">TECH STACK ARCHITECTURE:</span>
                <div className="flex flex-wrap gap-2">
                  {flagship.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded bg-black/60 border border-white/15 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
                <button
                  onClick={() => {
                    sound.playProfileSelect();
                    onExploreProject(flagship);
                  }}
                  className="px-8 py-4 rounded-md bg-white text-black font-extrabold hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105"
                >
                  <span>EXPLORE PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={flagship.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playHover()}
                  className="px-7 py-4 rounded-md bg-white/5 border border-white/20 text-slate-300 hover:text-white hover:border-red-500 transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW SOURCE CODE</span>
                </a>
              </div>

            </div>

            {/* Right Interactive Visual Preview Column */}
            <div className="lg:col-span-5">
              
              <div className="p-6 rounded-2xl bg-black/90 border border-white/15 space-y-5 font-mono text-xs shadow-2xl">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="font-bold text-white">TN DISTRICT PREVIEW HUD</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[11px]">38 DISTRICTS</span>
                </div>

                {/* Interactive District Selector */}
                <div className="space-y-2">
                  <span className="text-slate-400 text-[11px] block">SELECT DISTRICT PORTAL:</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {districts.map((d) => (
                      <button
                        key={d}
                        onClick={() => {
                          sound.playHover();
                          setActiveDistrict(d);
                        }}
                        className={`py-1.5 px-2 rounded text-[11px] truncate transition-colors border ${
                          activeDistrict === d
                            ? 'bg-red-600 text-white font-bold border-red-500'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active District Card Preview */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white font-syne text-sm uppercase">{activeDistrict} HUB</span>
                    <span className="text-red-400 font-bold">ONLINE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded bg-black/60 border border-white/10">
                      <span className="text-slate-500 block text-[9px]">ATHLETE ENROLLMENT</span>
                      <span className="text-white font-bold text-sm">Active Queue</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/60 border border-white/10">
                      <span className="text-slate-500 block text-[9px]">CLUB VERIFICATION</span>
                      <span className="text-emerald-400 font-bold text-sm">Verified</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-black/60 border border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
                    <span className="text-slate-400">DATABASE BACKEND</span>
                    <span className="text-red-400 font-bold">POSTGRESQL // REST</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 text-center uppercase tracking-widest pt-1 border-t border-white/5">
                  [ TAMIL NADU SPORTS INFRASTRUCTURE SUITE • ROLE-BASED ACCESS ]
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
