import React, { useState } from 'react';
import { Shield, Code, Cpu, MapPin, Terminal, Activity, ArrowRight, Zap, Lock } from 'lucide-react';

export default function Hero() {
  const [pulseActive, setPulseActive] = useState(false);

  const triggerDiagnostic = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden cyber-grid-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] animate-ping"></span>
              <Terminal className="w-3.5 h-3.5" />
              <span>INFORMATION TECHNOLOGY / SOFTWARE + SECURITY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-extrabold text-white tracking-tight leading-[1.08]">
              I <span className="text-gradient-cyan drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">BUILD</span> SOFTWARE. <br />
              I <span className="text-gradient-blue drop-shadow-[0_0_20px_rgba(0,102,255,0.4)]">SECURE</span> SYSTEMS.
            </h1>

            {/* Subtitle Bio */}
            <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              I’m <span className="text-white font-semibold underline decoration-cyan-400/40 underline-offset-4">Nithish K</span>, an Information Technology student and aspiring Full-Stack Developer & Cybersecurity Analyst focused on building reliable, secure and practical technology solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs tracking-wider">
              <a
                href="#projects"
                className="px-7 py-4 rounded-md bg-[#00f0ff] text-black font-bold hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] flex items-center gap-2 group"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#security"
                className="px-7 py-4 rounded-md bg-[#0c1017] text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center gap-2"
              >
                <Shield className="w-4 h-4 text-[#00f0ff]" />
                <span>VIEW SECURITY WORK</span>
              </a>
            </div>

            {/* Brand Pillars */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-slate-500 block">01 / DEV</span>
                <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-[#00f0ff]" /> Full-Stack
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 block">02 / DEFENSE</span>
                <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-400" /> Cyber Ops
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 block">03 / TECH</span>
                <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-violet-400" /> AI & Data
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Digital Security Identity Visualization */}
          <div className="lg:col-span-5 relative">
            
            {/* HUD Container */}
            <div className="hud-box cyber-card rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden border border-cyan-500/30">
              
              {/* Scanline element */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none animate-scanline"></div>

              {/* Identity Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/50 flex items-center justify-center text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#07090e] animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-bold text-white tracking-wide">NITHISH K</h3>
                    <p className="font-mono text-xs text-cyan-400">ID // NK-2026-SEC</p>
                  </div>
                </div>

                <div className="text-right font-mono text-xs">
                  <span className="text-slate-500 block">SYSTEM STATUS</span>
                  <span className="text-emerald-400 font-semibold flex items-center justify-end gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> ONLINE
                  </span>
                </div>
              </div>

              {/* Technical Telemetry */}
              <div className="space-y-4 font-mono text-xs">
                
                <div className="p-3 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" /> FOCUS
                  </span>
                  <span className="text-slate-200 font-medium">SOFTWARE / SECURITY / AI</span>
                </div>

                <div className="p-3 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" /> LOCATION
                  </span>
                  <span className="text-slate-200 font-medium">TAMIL NADU, INDIA</span>
                </div>

                <div className="p-3 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" /> ACADEMIC BASE
                  </span>
                  <span className="text-slate-200 font-medium">B.E. IT @ ANNAMALAI UNIV</span>
                </div>

              </div>

              {/* Animated Radar & Meter Visual */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Activity className={`w-4 h-4 ${pulseActive ? 'text-emerald-400 animate-spin' : 'text-cyan-400'}`} />
                    SYSTEM TELEMETRY
                  </span>
                  <button
                    onClick={triggerDiagnostic}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
                  >
                    {pulseActive ? 'DIAGNOSTICS RUNNING...' : 'RUN DIAGNOSTIC'}
                  </button>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-2 font-mono text-[11px]">
                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>SECURE CODE INTEGRITY</span>
                      <span className="text-cyan-400">99.8%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700 ${pulseActive ? 'w-full' : 'w-[99.8%]'}`}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>LOG ANALYSIS EFFICIENCY</span>
                      <span className="text-cyan-400">96.4%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-700 ${pulseActive ? 'w-full' : 'w-[96.4%]'}`}></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Security Disclaimers */}
              <div className="pt-2 text-[10px] font-mono text-slate-500 text-center uppercase tracking-widest border-t border-slate-900">
                [ SECURE SYSTEM INTERFACE • VERIFIED CREATIVE PORTFOLIO ]
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
