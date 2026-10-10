import React, { useState } from 'react';
import { Layers, ArrowRight, KeyRound, RefreshCw, Copy, Check, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { featuredProjects } from '../data/portfolioData';
import NetflixProjectModal from './NetflixProjectModal';
import { sound } from '../utils/soundEffects';

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Live Interactive Password Checker Widget state
  const [passInput, setPassInput] = useState('NithishK@Cyber2026!');
  const [passCopied, setPassCopied] = useState(false);

  const categories = ['All', 'Cybersecurity', 'Web Development', 'AI'];

  const filteredProjects = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

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
    if (score < 90) return { score, text: 'STRONG', color: 'text-blue-400', bar: 'w-3/4 bg-blue-500' };
    return { score, text: 'VERY STRONG', color: 'text-emerald-400', bar: 'w-full bg-emerald-400' };
  };

  const strength = calculateStrength(passInput);

  const generateRandomPassword = () => {
    sound.playHover();
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    let res = '';
    for (let i = 0; i < 16; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassInput(res);
  };

  const copyPassword = () => {
    sound.playHover();
    navigator.clipboard.writeText(passInput);
    setPassCopied(true);
    setTimeout(() => setPassCopied(false), 2000);
  };

  const openDetails = (proj) => {
    sound.playProfileSelect();
    setActiveModalProject(proj);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-white/10 bg-[#08090d]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-red-500 tracking-widest uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>03 // CINEMATIC CATALOG</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight leading-tight">
              FEATURED <span className="text-gradient-red">PROJECTS.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Production architectures, cybersecurity utilities, and visionary prototypes built with clean engineering standards.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playHover();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-2 rounded-lg transition-all border ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white font-bold border-red-500 shadow-[0_0_15px_rgba(229,9,20,0.3)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="netflix-card rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 space-y-8 bg-gradient-to-b from-[#12141c] to-[#0a0b10] hover:border-red-500/50 shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Details & Narrative */}
                <div className="lg:col-span-6 space-y-5">
                  
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 font-bold">
                      PROJECT {project.number}
                    </span>
                    <span className="text-slate-400 uppercase tracking-wider">{project.category}</span>
                    {project.isConcept && (
                      <span className="px-2.5 py-0.5 rounded bg-amber-950/50 border border-amber-500/40 text-amber-300 text-[10px]">
                        CONCEPT / PROTOTYPE
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights / Features */}
                  <div className="space-y-2 font-mono text-xs text-slate-300">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 font-mono text-xs pt-1">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
                    <button
                      onClick={() => openDetails(project)}
                      className="px-6 py-3 rounded-md bg-white text-black font-extrabold hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playHover()}
                      className="px-5 py-3 rounded-md bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-red-500 transition-colors flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GITHUB</span>
                    </a>
                  </div>

                </div>

                {/* Right Column: Custom Interactive Visual Widget */}
                <div className="lg:col-span-6">
                  
                  {/* Project 1: Live Password Generator & Entropy Checker */}
                  {project.id === 'password-checker' && (
                    <div className="p-6 rounded-xl bg-black/80 border border-red-500/30 space-y-4 font-mono text-xs shadow-inner">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-red-400">
                        <span className="flex items-center gap-2 font-bold">
                          <KeyRound className="w-4 h-4 text-red-500" />
                          LIVE PASSWORD SECURITY ENGINE
                        </span>
                        <span className="text-slate-500 text-[10px]">CLIENT EVAL</span>
                      </div>

                      <div className="space-y-3">
                        <label className="text-slate-400 text-[11px] block">TEST ANY PASSWORD OR GENERATE RANDOM:</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={passInput}
                            onChange={(e) => setPassInput(e.target.value)}
                            className="w-full px-3 py-2.5 rounded bg-white/5 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-red-500"
                            placeholder="Type test password..."
                          />
                          <button
                            onClick={generateRandomPassword}
                            title="Generate Random"
                            className="p-2.5 rounded bg-white/5 border border-white/15 hover:border-red-500 text-red-400 transition-colors"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                          <button
                            onClick={copyPassword}
                            title="Copy Password"
                            className="p-2.5 rounded bg-white/5 border border-white/15 hover:border-emerald-500 text-slate-300 transition-colors"
                          >
                            {passCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>

                        {/* Entropy Meter */}
                        <div className="space-y-1.5 pt-2">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">ENTROPY STRENGTH:</span>
                            <span className={`font-bold ${strength.color}`}>{strength.text}</span>
                          </div>
                          <div className="w-full h-2.5 bg-black rounded-full overflow-hidden p-0.5 border border-white/10">
                            <div className={`h-full rounded-full transition-all duration-300 ${strength.bar}`} />
                          </div>
                        </div>

                        <div className="p-3 rounded bg-white/5 border border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
                          <span>SHANNON BIT ENTROPY</span>
                          <span className="text-red-400 font-bold">~ 95.6 BITS</span>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-500 text-center uppercase tracking-widest pt-1 border-t border-white/5">
                        [ ZERO DATA STORAGE • EXECUTED IN LOCAL MEMORY ]
                      </div>
                    </div>
                  )}

                  {/* Project 2: Tamil Nadu Sports Development Platform */}
                  {project.id === 'tn-sports' && (
                    <div className="p-6 rounded-xl bg-black/80 border border-white/10 space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-300">
                        <span className="font-bold flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-red-500" />
                          TAMIL NADU 38 DISTRICTS REGISTRY
                        </span>
                        <span className="text-emerald-400 font-bold text-[10px]">● DJANGO REST</span>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded bg-white/5 border border-white/10 text-center">
                          <span className="text-[10px] text-slate-500 block">DISTRICTS</span>
                          <span className="text-lg font-bold text-white">38</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10 text-center">
                          <span className="text-[10px] text-slate-500 block">MODULES</span>
                          <span className="text-lg font-bold text-red-400">CLUBS/ATHLETES</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10 text-center">
                          <span className="text-[10px] text-slate-500 block">SECURITY</span>
                          <span className="text-lg font-bold text-blue-400">RBAC / JWT</span>
                        </div>
                      </div>

                      <div className="p-4 rounded bg-white/5 border border-white/10 space-y-2">
                        <div className="flex justify-between text-slate-300 text-[11px]">
                          <span>CHENNAI CENTRAL REGION</span>
                          <span className="text-red-400">ACTIVE REGISTRY</span>
                        </div>
                        <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                          <div className="h-full bg-red-600 rounded-full w-4/5" />
                        </div>

                        <div className="flex justify-between text-slate-300 text-[11px]">
                          <span>DHARMAPURI & SALEM DISTRICTS</span>
                          <span className="text-red-400">DISTRICT PORTAL</span>
                        </div>
                        <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full w-3/5" />
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-500 text-center uppercase tracking-widest">
                        [ ATHLETE REGISTRATION & TOURNAMENT SCHEDULING PLATFORM ]
                      </div>
                    </div>
                  )}

                  {/* Project 3: AI-Enabled Career Counselling & Decision Platform */}
                  {project.id === 'ai-career-counselling' && (
                    <div className="p-6 rounded-xl bg-black/80 border border-white/10 space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-amber-400">
                        <span className="font-bold flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          DECISION-SUPPORT PROTOTYPE MATRIX
                        </span>
                        <span className="text-slate-500 text-[10px]">CONCEPT MODEL</span>
                      </div>

                      <div className="space-y-3">
                        <div className="p-3 rounded bg-white/5 border border-white/10 space-y-1">
                          <span className="text-[10px] text-slate-500 block">VOCATIONAL PATHWAYS ANALYZER</span>
                          <p className="text-slate-200">Maps vocational skill training to regional industry opportunities.</p>
                        </div>

                        <div className="p-3 rounded bg-white/5 border border-white/10 space-y-1">
                          <span className="text-[10px] text-slate-500 block">FAMILY COLLABORATION DASHBOARD</span>
                          <p className="text-slate-200">Empowers parents and students to evaluate career sustainability together.</p>
                        </div>

                        <div className="p-3 rounded bg-white/5 border border-white/10 space-y-1">
                          <span className="text-[10px] text-slate-500 block">ALGORITHMIC DECISION ENGINE</span>
                          <p className="text-amber-300">Weighted decision trees based on skills, interests, and economic demand.</p>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-500 text-center uppercase tracking-widest">
                        [ CONCEPT ARCHITECTURE & PROTOTYPE DEMONSTRATION ]
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Netflix Detail Modal */}
      <NetflixProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
}
