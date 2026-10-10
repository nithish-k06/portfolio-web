import React, { useState } from 'react';
import { Play, Info, Mail, Shield, Terminal, Activity, Lock, Code2, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function Hero({ activeProfile }) {
  const [pulseActive, setPulseActive] = useState(false);
  const [terminalTab, setTerminalTab] = useState('defense'); // 'defense' | 'code' | 'specs'

  const triggerDiagnostic = () => {
    sound.playHover();
    setPulseActive(true);
    setTimeout(() => {
      sound.playSuccess();
      setPulseActive(false);
    }, 1800);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-44 md:pb-28 flex items-center overflow-hidden cyber-grid-pattern netflix-gradient-bg"
    >
      {/* Ambient Red & Blue Atmospheric Light Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-ambient-glow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Billboard Headlines & CTA */}
          <div className="lg:col-span-7 space-y-7">

            {/* Small Label / Top 10 Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/50 border border-red-500/40 text-red-400 font-mono text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(229,9,20,0.2)]">
                <span className="w-4 h-4 rounded bg-[#E50914] text-white flex items-center justify-center font-black text-[10px] leading-none shadow-sm">
                  N
                </span>
                <span>{personalInfo.badge}</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE FOCUS: {activeProfile?.name?.toUpperCase() || 'CYBER ANALYST'}</span>
              </div>
            </div>

            {/* Large Heading: NITHISH K */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-syne font-black text-white tracking-tight leading-[1.02]">
                {personalInfo.name}
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-syne font-semibold text-gradient-red">
                {personalInfo.title}
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              An Information Technology student at <strong className="text-white font-semibold">Annamalai University</strong> with a deep passion for <span className="text-white underline decoration-red-500/50 underline-offset-4">cybersecurity operations</span>, defensive systems, Python programming, and building secure, resilient full-stack web applications.
            </p>

            {/* Action Buttons: Netflix Play style & Info buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs tracking-wider">
              
              {/* Explore My Work (Play Button) */}
              <a
                href="#projects"
                onClick={() => sound.playHover()}
                className="px-8 py-4 rounded-md bg-white text-black font-extrabold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center gap-2.5 group"
              >
                <Play className="w-4 h-4 fill-black text-black" />
                <span>EXPLORE MY WORK</span>
              </a>

              {/* View Skills (Info Button) */}
              <a
                href="#skills"
                onClick={() => sound.playHover()}
                className="px-7 py-4 rounded-md bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center gap-2.5"
              >
                <Info className="w-4 h-4 text-red-500" />
                <span>VIEW SKILLS</span>
              </a>

              {/* Contact Me (Red Outline Button) */}
              <a
                href="#contact"
                onClick={() => sound.playHover()}
                className="px-7 py-4 rounded-md bg-red-950/30 text-red-400 border border-red-500/40 hover:bg-red-900/40 hover:border-red-400 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>CONTACT ME</span>
              </a>

            </div>

            {/* Social Links & Location Badge */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-slate-500">CONNECT:</span>
                
                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playHover()}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-red-500 hover:text-white text-slate-300 transition-colors flex items-center gap-2"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="text-[11px]">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playHover()}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500 hover:text-white text-slate-300 transition-colors flex items-center gap-2"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span className="text-[11px]">LinkedIn</span>
                </a>
              </div>

              <div className="text-slate-400 text-[11px]">
                <span>BASE: </span>
                <span className="text-white font-medium">{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-tech Cybersecurity Identity & Telemetry Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Red Rim Glow Overlay */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-red-600/30 via-red-900/10 to-blue-600/20 blur-xl opacity-70 pointer-events-none" />

            {/* Terminal HUD Container */}
            <div className="relative netflix-card rounded-2xl p-6 sm:p-8 space-y-6 border border-red-500/30 shadow-2xl overflow-hidden red-rim-glow">
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none animate-scanline" />

              {/* Identity Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/30 via-black to-red-950 border border-red-500/60 flex items-center justify-center text-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.4)]">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-bold text-white tracking-wide">
                      {personalInfo.name}
                    </h3>
                    <p className="font-mono text-xs text-red-400">ID // NK-2026-CYBER</p>
                  </div>
                </div>

                <div className="text-right font-mono text-xs">
                  <span className="text-slate-500 block">SYSTEM STATUS</span>
                  <span className="text-emerald-400 font-semibold flex items-center justify-end gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> ONLINE
                  </span>
                </div>
              </div>

              {/* Telemetry Tabs */}
              <div className="flex rounded-lg bg-black/50 p-1 border border-white/10 font-mono text-xs">
                <button
                  onClick={() => {
                    sound.playHover();
                    setTerminalTab('defense');
                  }}
                  className={`flex-1 py-1.5 rounded text-center transition-all ${
                    terminalTab === 'defense'
                      ? 'bg-red-600 text-white font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  DEFENSE
                </button>
                <button
                  onClick={() => {
                    sound.playHover();
                    setTerminalTab('code');
                  }}
                  className={`flex-1 py-1.5 rounded text-center transition-all ${
                    terminalTab === 'code'
                      ? 'bg-red-600 text-white font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CODE BASE
                </button>
                <button
                  onClick={() => {
                    sound.playHover();
                    setTerminalTab('specs');
                  }}
                  className={`flex-1 py-1.5 rounded text-center transition-all ${
                    terminalTab === 'specs'
                      ? 'bg-red-600 text-white font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ACADEMIC
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="space-y-3 font-mono text-xs">
                {terminalTab === 'defense' && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-red-500" /> THREAT DETECTION
                      </span>
                      <span className="text-emerald-400 font-medium">ACTIVE SCANNER</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-blue-400" /> LOG ANALYSIS
                      </span>
                      <span className="text-slate-200">PARSED & FILTERED</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-red-400" /> ETHICS PROTOCOL
                      </span>
                      <span className="text-slate-200">DEFENSIVE ENGINEERING</span>
                    </div>
                  </div>
                )}

                {terminalTab === 'code' && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-amber-400" /> PYTHON CORE
                      </span>
                      <span className="text-amber-300 font-semibold">3.11+ / DJANGO REST</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-cyan-400" /> FRONTEND TECH
                      </span>
                      <span className="text-cyan-300">REACT 19 / TAILWIND</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-purple-400" /> DATA PERSISTENCE
                      </span>
                      <span className="text-slate-200">POSTGRESQL / SQL</span>
                    </div>
                  </div>
                )}

                {terminalTab === 'specs' && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400">DEGREE</span>
                      <span className="text-white font-semibold">B.E. INFORMATION TECH</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400">INSTITUTION</span>
                      <span className="text-slate-200">ANNAMALAI UNIVERSITY</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-400">HORIZON</span>
                      <span className="text-red-400 font-bold">CLASS OF 2028</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Diagnostic Button & Telemetry Progress */}
              <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Activity className={`w-3.5 h-3.5 ${pulseActive ? 'text-red-500 animate-spin' : 'text-slate-400'}`} />
                    SYSTEM TELEMETRY
                  </span>
                  <button
                    onClick={triggerDiagnostic}
                    className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors"
                  >
                    {pulseActive ? 'TESTING INTEGRITY...' : 'RUN DIAGNOSTIC'}
                  </button>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>SECURE CODE INTEGRITY</span>
                      <span className="text-red-400">99.8%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-red-600 to-rose-400 rounded-full transition-all duration-700 ${
                          pulseActive ? 'w-full' : 'w-[99.8%]'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>DEFENSIVE LOG COVERAGE</span>
                      <span className="text-blue-400">97.4%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700 ${
                          pulseActive ? 'w-full' : 'w-[97.4%]'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-2 text-[10px] font-mono text-slate-500 text-center uppercase tracking-widest border-t border-white/5">
                [ SECURE SYSTEM INTERFACE • NETFLIX CINEMATIC PORTFOLIO ]
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
