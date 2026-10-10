import React, { useState } from 'react';
import { ShieldAlert, Code2, FolderGit2, UserCheck, ChevronRight } from 'lucide-react';
import { profiles, personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Code2: Code2,
  FolderGit2: FolderGit2,
  UserCheck: UserCheck,
};

export default function ProfilePicker({ onSelectProfile }) {
  const [hoveredProfile, setHoveredProfile] = useState(null);

  const handleSelect = (profile) => {
    sound.playProfileSelect();
    onSelectProfile(profile);
  };

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#08090d] text-white px-4 py-8 overflow-y-auto netflix-gradient-bg">
      {/* Background Cyber Dots & Ambient Red Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center space-y-10 sm:space-y-14 animate-in fade-in duration-500">
        
        {/* Header: "Who's watching?" */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 font-mono text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(229,9,20,0.15)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] animate-ping" />
            <span>PORTFOLIO SELECTION HUD</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-syne font-black text-white tracking-tight leading-tight">
            Who's watching?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto font-sans">
            Choose your persona to explore <span className="text-white font-semibold">{personalInfo.name}</span>’s work from your perspective.
          </p>
        </div>

        {/* 4 Interactive Profile Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl px-2">
          {profiles.map((profile) => {
            const Icon = iconMap[profile.avatarIcon] || ShieldAlert;
            const isHovered = hoveredProfile === profile.id;

            return (
              <div
                key={profile.id}
                onClick={() => handleSelect(profile)}
                onMouseEnter={() => {
                  setHoveredProfile(profile.id);
                  sound.playHover();
                }}
                onMouseLeave={() => setHoveredProfile(null)}
                className="group flex flex-col items-center cursor-pointer space-y-4 focus:outline-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSelect(profile);
                  }
                }}
              >
                {/* Avatar Box with Glowing Border & Hover Scale */}
                <div
                  className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl p-1 transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:-translate-y-2"
                  style={{
                    boxShadow: isHovered
                      ? `0 15px 35px -5px ${profile.glowColor}`
                      : '0 8px 20px -5px rgba(0,0,0,0.7)',
                  }}
                >
                  {/* Outer Glowing Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                      isHovered
                        ? 'opacity-100 p-[2px] bg-gradient-to-br from-white via-red-500 to-red-900'
                        : 'opacity-40 p-[1px] bg-white/20'
                    }`}
                  />

                  {/* Inner Card Artwork */}
                  <div className={`relative w-full h-full rounded-[14px] bg-gradient-to-br ${profile.accentGradient} flex flex-col items-center justify-center p-4 overflow-hidden border border-white/10 group-hover:border-white/30`}>
                    
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none" />

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon
                        className="w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300"
                        style={{ color: isHovered ? '#FFFFFF' : profile.themeColor }}
                      />
                    </div>

                    {/* Role Tag Pill */}
                    <div className="relative z-10 mt-3 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-[9px] font-mono tracking-wider text-slate-300 uppercase">
                      {profile.roleTag}
                    </div>
                  </div>
                </div>

                {/* Animated Label */}
                <div className="text-center space-y-1 transition-colors">
                  <h3 className="font-syne text-base sm:text-lg font-bold text-slate-300 group-hover:text-white transition-colors duration-200">
                    {profile.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-red-400 flex items-center justify-center gap-1 transition-colors">
                    <span>ENTER VIEW</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Actions: Manage Profiles & Enter Directly */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-white/10 w-full max-w-xl font-mono text-xs">
          <button
            onClick={() => handleSelect(profiles[0])}
            className="px-8 py-3 rounded-md bg-transparent border border-white/20 text-slate-400 hover:text-white hover:border-white hover:bg-white/5 tracking-widest uppercase transition-all duration-200"
          >
            ENTER FULL PORTFOLIO
          </button>
        </div>

      </div>
    </div>
  );
}
