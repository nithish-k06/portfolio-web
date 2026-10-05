import React, { useState } from 'react';
import { Terminal, Shield, Network, Lock, Cpu, Code2, BookOpen, Copy, Check } from 'lucide-react';
import { securityLabModules } from '../data/securitySim';

export default function SecurityLab() {
  const [activeModule, setActiveModule] = useState(securityLabModules[0]);
  const [codeCopied, setCodeCopied] = useState(false);

  const copySnippet = () => {
    navigator.clipboard.writeText(activeModule.codeSnippet);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  return (
    <section id="security-lab" className="py-24 relative border-t border-slate-800/60 bg-[#07090e] cyber-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] tracking-widest uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // SECURITY LAB</span>
            <div className="w-12 h-[1px] bg-cyan-500/40"></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight leading-tight">
            LEARNING. TESTING. <br />
            <span className="text-gradient-cyan">DEFENDING.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Interactive research modules exploring defensive engineering concepts, vulnerability remediation, and security script tooling.
          </p>
        </div>

        {/* Interactive Lab Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Module Navigation List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="pb-2 border-b border-slate-800 font-mono text-xs text-slate-400 flex items-center justify-between">
              <span>EXPLORE LAB MODULES</span>
              <span className="text-cyan-400">{securityLabModules.length} TOPICS</span>
            </div>

            {securityLabModules.map((mod) => {
              const isActive = activeModule.id === mod.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  className={`p-4 rounded-lg cursor-pointer transition-all border font-mono text-xs ${
                    isActive
                      ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                      : 'bg-[#0c1017] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{mod.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-300">
                      {mod.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Code & Remediation Viewer Console */}
          <div className="lg:col-span-8">
            <div className="hud-box cyber-card rounded-xl p-6 sm:p-8 border border-cyan-500/30 bg-[#0c1017] space-y-6">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <span className="font-mono text-xs text-cyan-400 font-bold block">
                    MODULE: {activeModule.title}
                  </span>
                  <p className="text-slate-300 text-sm mt-1">
                    {activeModule.description}
                  </p>
                </div>
                <button
                  onClick={copySnippet}
                  className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 font-mono text-xs flex items-center gap-1.5 shrink-0"
                >
                  {codeCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{codeCopied ? 'COPIED!' : 'COPY CODE'}</span>
                </button>
              </div>

              {/* Topics Covered */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-slate-400 block">KEY RESEARCH CONCEPTS:</span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {activeModule.topics.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      • {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Code Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                    SECURE CODE PATTERN & SCRIPTS
                  </span>
                  <span className="text-[10px] text-slate-500">SYNTAX HIGHLIGHTED</span>
                </div>

                <div className="p-4 rounded-lg bg-[#07090e] border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto whitespace-pre leading-relaxed shadow-inner">
                  {activeModule.codeSnippet}
                </div>
              </div>

              {/* Lab Footer Disclaimer */}
              <div className="pt-2 text-[10px] font-mono text-slate-500 text-center uppercase tracking-widest border-t border-slate-900">
                [ EDUCATIONAL SECURITY LAB RESEARCH • ETHICAL & DEFENSIVE PRACTICES ONLY ]
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
