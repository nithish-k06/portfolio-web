import React, { useState } from 'react';
import { ExternalLink, Layers, Shield, Terminal, ArrowRight, Check, RefreshCw, KeyRound, Copy } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Password Interactive Demo State (Project 03 live component)
  const [passInput, setPassInput] = useState('NithishK@Secure2026!');
  const [passCopied, setPassCopied] = useState(false);

  const calculateStrength = (pwd) => {
    if (!pwd) return { score: 0, text: 'EMPTY', color: 'text-slate-500', bar: 'w-0 bg-slate-800' };
    let score = 0;
    if (pwd.length >= 8) score += 25;
    if (pwd.length >= 14) score += 25;
    if (/[A-Z]/.test(pwd)) score += 15;
    if (/[0-9]/.test(pwd)) score += 15;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 20;

    if (score < 40) return { score, text: 'WEAK', color: 'text-red-400', bar: 'w-1/4 bg-red-500' };
    if (score < 70) return { score, text: 'MODERATE', color: 'text-amber-400', bar: 'w-2/4 bg-amber-500' };
    if (score < 90) return { score, text: 'STRONG', color: 'text-emerald-400', bar: 'w-3/4 bg-emerald-400' };
    return { score, text: 'VERY STRONG', color: 'text-[#00f0ff]', bar: 'w-full bg-[#00f0ff]' };
  };

  const strength = calculateStrength(passInput);

  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    let res = '';
    for (let i = 0; i < 16; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassInput(res);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(passInput);
    setPassCopied(true);
    setTimeout(() => setPassCopied(false), 2000);
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>04 // SELECTED WORK</span>
            <div className="w-12 h-[1px] bg-cyan-500/40"></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight leading-tight">
            SOFTWARE WITH PURPOSE. <br />
            <span className="text-gradient-cyan">SECURITY BY DESIGN.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Real-world projects showcasing full-stack platform architecture, security monitoring systems, and utility algorithms.
          </p>
        </div>

        {/* Projects Stack List */}
        <div className="space-y-16">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="hud-box cyber-card rounded-2xl border border-slate-800 p-6 sm:p-8 lg:p-10 space-y-8 bg-[#0c1017]/90 hover:border-cyan-500/40"
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-[#00f0ff] font-bold">
                      PROJECT {project.number}
                    </span>
                    <span className="text-slate-400 uppercase">{project.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 font-mono text-xs text-slate-300">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 font-mono text-xs pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-3 rounded bg-[#00f0ff] text-black font-bold hover:bg-cyan-300 transition-colors flex items-center gap-2"
                    >
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Right Interactive Dashboard Preview Column */}
                <div className="lg:col-span-6">
                  
                  {project.id === 'tn-sports' && (
                    <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-cyan-400">
                        <span>TN SPORTS DASHBOARD PREVIEW</span>
                        <span className="text-emerald-400 font-bold">● ACTIVE REGISTRY</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded bg-slate-900 border border-slate-800 text-center">
                          <span className="text-[10px] text-slate-500 block">DISTRICTS</span>
                          <span className="text-lg font-bold text-white">38 / 38</span>
                        </div>
                        <div className="p-3 rounded bg-slate-900 border border-slate-800 text-center">
                          <span className="text-[10px] text-slate-500 block">ATHLETES</span>
                          <span className="text-lg font-bold text-cyan-400">14,280+</span>
                        </div>
                        <div className="p-3 rounded bg-slate-900 border border-slate-800 text-center">
                          <span className="text-[10px] text-slate-500 block">CLUBS</span>
                          <span className="text-lg font-bold text-violet-400">412</span>
                        </div>
                      </div>

                      {/* Tamil Nadu Map Data Visualization Representation */}
                      <div className="p-4 rounded bg-slate-900/80 border border-slate-800 space-y-2">
                        <div className="flex justify-between text-slate-400 text-[11px]">
                          <span>CHENNAI REGION</span>
                          <span className="text-cyan-400">3,420 Athletes</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full">
                          <div className="h-full bg-cyan-400 rounded-full w-4/5"></div>
                        </div>

                        <div className="flex justify-between text-slate-400 text-[11px]">
                          <span>COIMBATORE REGION</span>
                          <span className="text-cyan-400">2,890 Athletes</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full">
                          <div className="h-full bg-blue-400 rounded-full w-3/5"></div>
                        </div>

                        <div className="flex justify-between text-slate-400 text-[11px]">
                          <span>MADURAI REGION</span>
                          <span className="text-cyan-400">2,150 Athletes</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full">
                          <div className="h-full bg-violet-400 rounded-full w-2/5"></div>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-500 text-center uppercase tracking-widest">
                        [ TAMIL NADU DISTRICT MANAGEMENT SUITE • ROLE-BASED ACCESS ]
                      </div>
                    </div>
                  )}

                  {project.id === 'security-dashboard' && (
                    <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-cyan-400">
                        <span>SECURITY MONITORING METRICS</span>
                        <span className="text-amber-400 font-bold">● SIMULATED FEED</span>
                      </div>

                      <div className="space-y-3">
                        <div className="p-3 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-400">BRUTE-FORCE DETECTOR</span>
                          <span className="text-emerald-400 font-bold">ARMED & LISTENING</span>
                        </div>
                        <div className="p-3 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-400">INTRUSION ALERTS (24H)</span>
                          <span className="text-cyan-400 font-bold">03 RESOLVED</span>
                        </div>
                        <div className="p-3 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-400">LOG ANALYSIS PARSER</span>
                          <span className="text-violet-400 font-bold">SYSLOG / AUTH.LOG</span>
                        </div>
                      </div>

                      <div className="p-3 rounded bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                        <span className="text-slate-500 block">LATEST LOG STREAM:</span>
                        <p className="text-cyan-400">10:48:22 [ALERT_OK] JWT Auth validated for analyst context.</p>
                      </div>

                      <div className="text-[10px] text-slate-500 text-center uppercase tracking-widest">
                        [ REAL-TIME EVENT STREAM TELEMETRY ]
                      </div>
                    </div>
                  )}

                  {project.id === 'password-checker' && (
                    <div className="p-6 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-cyan-400">
                        <span className="flex items-center gap-1.5 font-bold">
                          <KeyRound className="w-4 h-4 text-[#00f0ff]" />
                          INTERACTIVE PASSWORD SECURITY WIDGET
                        </span>
                        <span className="text-slate-500">CLIENT-SIDE</span>
                      </div>

                      <div className="space-y-3">
                        <label className="text-slate-400 text-[11px] block">TEST PASSWORD STRENGTH LIVE:</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={passInput}
                            onChange={(e) => setPassInput(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                            placeholder="Type a test password..."
                          />
                          <button
                            onClick={generateRandomPassword}
                            title="Generate Random"
                            className="p-2 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-400 transition-colors"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                          <button
                            onClick={copyPassword}
                            title="Copy Password"
                            className="p-2 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 transition-colors"
                          >
                            {passCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>

                        {/* Visual Strength Meter */}
                        <div className="space-y-1.5 pt-2">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">PASSWORD SECURITY:</span>
                            <span className={`font-bold ${strength.color}`}>STRENGTH: {strength.text}</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                            <div className={`h-full rounded-full transition-all duration-300 ${strength.bar}`}></div>
                          </div>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-500 text-center uppercase tracking-widest pt-1 border-t border-slate-900">
                        [ NO CREDENTIALS STORED • LOCAL MEMORY ONLY ]
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
