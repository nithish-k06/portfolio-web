import React, { useState } from 'react';
import { Shield, Network, Eye, Terminal, Search, FileCode, Code, Globe, Palette, Server, Layers, Smartphone, Share2, Database, GitBranch, Laptop, HardDrive, Cpu, Sparkles } from 'lucide-react';
import { skillUniverse } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

const iconMap = {
  Shield: Shield,
  Network: Network,
  Eye: Eye,
  Terminal: Terminal,
  Search: Search,
  FileCode: FileCode,
  Code: Code,
  Globe: Globe,
  Palette: Palette,
  Server: Server,
  Layers: Layers,
  Smartphone: Smartphone,
  Share2: Share2,
  Database: Database,
  GitBranch: GitBranch,
  Laptop: Laptop,
  HardDrive: HardDrive,
};

export default function SkillUniverse() {
  const [activeCategoryKey, setActiveCategoryKey] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(skillUniverse.cybersecurity.items[0]);

  const categories = [
    { key: 'all', title: 'ALL CATEGORIES', color: '#FFFFFF' },
    { key: 'cybersecurity', title: 'CYBERSECURITY', color: '#E50914' },
    { key: 'programming', title: 'PROGRAMMING', color: '#3b82f6' },
    { key: 'webDevelopment', title: 'WEB DEVELOPMENT', color: '#00f0ff' },
    { key: 'databaseAndTools', title: 'DATABASE & TOOLS', color: '#10b981' },
  ];

  const getFilteredSkills = () => {
    if (activeCategoryKey === 'all') {
      return Object.entries(skillUniverse).flatMap(([catKey, catVal]) =>
        catVal.items.map((item) => ({ ...item, category: catVal.categoryTitle, catColor: catVal.color }))
      );
    }
    const cat = skillUniverse[activeCategoryKey];
    return cat ? cat.items.map((item) => ({ ...item, category: cat.categoryTitle, catColor: cat.color })) : [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-white/10 bg-[#08090d] cyber-grid-pattern">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-red-500 tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // CAPABILITY MATRIX</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight leading-tight">
            MY SKILL <span className="text-gradient-red">UNIVERSE.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of demonstrated technical abilities across defensive cybersecurity, core programming languages, web architecture, and database tooling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 font-mono text-xs border-b border-white/10 pb-4">
          {categories.map((cat) => {
            const isActive = activeCategoryKey === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  sound.playHover();
                  setActiveCategoryKey(cat.key);
                }}
                className={`px-4 py-2 rounded-lg transition-all duration-200 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-red-950/60 border-red-500 text-white font-bold shadow-[0_0_15px_rgba(229,9,20,0.25)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Quick Inspector Banner */}
        {selectedSkill && (
          <div className="netflix-card rounded-xl p-5 sm:p-6 border border-red-500/30 bg-gradient-to-r from-red-950/20 via-black to-[#0e1017] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-red-600/20 border border-red-500/40 text-red-300 font-bold">
                  {selectedSkill.name}
                </span>
                <span className="text-slate-400">LEVEL: {selectedSkill.level}</span>
              </div>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                VERIFIED STUDENT COMPETENCY
              </span>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {selectedSkill.description}
            </p>
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Shield;
            const isSelected = selectedSkill?.name === skill.name;

            return (
              <div
                key={index}
                onClick={() => {
                  sound.playHover();
                  setSelectedSkill(skill);
                }}
                className={`netflix-card rounded-xl p-5 border cursor-pointer transition-all duration-300 group ${
                  isSelected
                    ? 'border-red-500 bg-red-950/30 shadow-[0_0_20px_rgba(229,9,20,0.2)]'
                    : 'border-white/10 hover:border-red-500/40 bg-[#0e1017]'
                }`}
              >
                {/* Top Row: Icon & Category */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div
                    className="w-10 h-10 rounded-lg bg-black/60 border border-white/15 flex items-center justify-center group-hover:scale-105 transition-transform"
                    style={{ color: skill.catColor || '#E50914' }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                    {skill.category || 'Skill'}
                  </span>
                </div>

                {/* Skill Name & Level */}
                <div className="pt-3 space-y-1.5">
                  <h3 className="font-syne font-bold text-base text-white group-hover:text-red-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    {skill.level}
                  </p>
                </div>

                {/* Animated Progress Meter */}
                <div className="pt-4 space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>PROFICIENCY</span>
                    <span className="text-slate-300 font-semibold">{skill.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/80 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-red-600 to-rose-400 group-hover:from-red-500 group-hover:to-white"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
