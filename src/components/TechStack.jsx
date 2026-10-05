import React, { useState } from 'react';
import { Cpu, Code, Database, Shield, Wrench, Share2, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skills';

export default function TechStack() {
  const [selectedSkill, setSelectedSkill] = useState(skillsData.development[0]);
  const [hoveredSkillId, setHoveredSkillId] = useState(null);

  const categories = [
    { key: 'development', title: 'DEVELOPMENT', icon: Code, color: 'text-[#00f0ff]', border: 'hover:border-cyan-500/40' },
    { key: 'database', title: 'DATABASE', icon: Database, color: 'text-violet-400', border: 'hover:border-violet-500/40' },
    { key: 'cybersecurity', title: 'CYBERSECURITY', icon: Shield, color: 'text-blue-400', border: 'hover:border-blue-500/40' },
    { key: 'tools', title: 'TOOLS & ENVIRONMENT', icon: Wrench, color: 'text-emerald-400', border: 'hover:border-emerald-500/40' }
  ];

  // Check if a skill node is connected to the currently hovered skill
  const isConnected = (skillId) => {
    if (!hoveredSkillId) return false;
    if (hoveredSkillId === skillId) return true;
    
    // Find active hovered skill across categories
    const allSkills = [
      ...skillsData.development,
      ...skillsData.database,
      ...skillsData.cybersecurity,
      ...skillsData.tools
    ];
    const activeHovered = allSkills.find((s) => s.id === hoveredSkillId);
    return activeHovered?.connections?.includes(skillId);
  };

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/60 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>03 // TECH STACK</span>
            <div className="w-12 h-[1px] bg-cyan-500/40"></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight leading-tight">
            INTERACTIVE TECHNOLOGY <br />
            <span className="text-gradient-cyan">ECOSYSTEM.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Hover over any technology node to reveal description insights and highlight connected stack relationships.
          </p>
        </div>

        {/* Selected Skill Active Detail Inspector Bar */}
        {selectedSkill && (
          <div className="hud-box cyber-card rounded-xl p-6 border border-cyan-500/40 bg-[#0c1017] space-y-3 animate-in fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-[#00f0ff] font-bold">
                  {selectedSkill.name}
                </span>
                <span className="text-slate-400">LEVEL: {selectedSkill.level}</span>
              </div>
              <span className="text-slate-500 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                {selectedSkill.connections?.length || 0} CONNECTED NODES
              </span>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {selectedSkill.desc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-400">
              <span className="text-slate-500">LINKED TECH:</span>
              {selectedSkill.connections?.map((conn) => (
                <span key={conn} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-300">
                  #{conn}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Ecosystem Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const skillsList = skillsData[cat.key];

            return (
              <div key={cat.key} className="space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-800 font-mono text-xs">
                  <Icon className={`w-4 h-4 ${cat.color}`} />
                  <h3 className="font-bold text-white tracking-wider">{cat.title}</h3>
                  <span className="ml-auto text-slate-500">({skillsList.length})</span>
                </div>

                <div className="space-y-3">
                  {skillsList.map((skill) => {
                    const activeConnected = isConnected(skill.id);
                    const isSelected = selectedSkill?.id === skill.id;

                    return (
                      <div
                        key={skill.id}
                        onMouseEnter={() => setHoveredSkillId(skill.id)}
                        onMouseLeave={() => setHoveredSkillId(null)}
                        onClick={() => setSelectedSkill(skill)}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 font-mono text-xs border ${
                          isSelected
                            ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                            : activeConnected
                            ? 'bg-blue-950/40 border-cyan-500/60 text-cyan-200 scale-[1.02]'
                            : 'bg-[#0c1017] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{skill.name}</span>
                          {activeConnected && (
                            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
                          )}
                        </div>

                        <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
                          <span>{skill.level}</span>
                          <span className="text-slate-500 font-normal">Inspect →</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
