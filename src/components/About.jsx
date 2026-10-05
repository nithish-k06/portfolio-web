import React from 'react';
import { BookOpen, ShieldCheck, Database, Code2, Server, Cpu, CheckCircle2 } from 'lucide-react';

export default function About() {
  const competencies = [
    { title: 'Full-Stack Software Architecture', icon: Code2, desc: 'Crafting responsive user interfaces with React coupled to scalable Python Django REST backends.' },
    { title: 'Security Monitoring & Defense', icon: ShieldCheck, desc: 'Understanding threat vectors, log monitoring, and secure software development lifecycle (SDLC).' },
    { title: 'Database & Relational Modeling', icon: Database, desc: 'Designing optimized schema, indexes, and parameterized queries with PostgreSQL and MySQL.' },
    { title: 'AI & Machine Learning Focus', icon: Cpu, desc: 'Leveraging AI capabilities for automated log triage, smart user interfaces, and predictive analytics.' }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] tracking-widest uppercase">
            <span>01 // ABOUT</span>
            <div className="w-12 h-[1px] bg-cyan-500/40"></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight leading-tight">
            I LIKE BUILDING THINGS <br />
            <span className="text-gradient-cyan">THAT CAN BE TRUSTED.</span>
          </h2>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="p-6 rounded-xl bg-[#0c1017] border border-cyan-500/20 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs text-cyan-400">
                <BookOpen className="w-4 h-4 text-[#00f0ff]" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <p>
                I am an <strong className="text-white font-semibold">Information Technology student at Annamalai University – Faculty of Engineering and Technology</strong> (B.E. IT 2024–2028), passionate about full-stack engineering, cybersecurity analysis, and practical problem-solving.
              </p>
            </div>

            <p>
              Software development is not just about making things function—it is about crafting <span className="text-white font-semibold underline decoration-cyan-400/40">resilient, maintainable, and secure architectures</span> that users can rely on. My journey combines frontend artistry in <span className="text-[#00f0ff] font-mono">React</span>, backend precision in <span className="text-blue-400 font-mono">Python & Django</span>, and relational data management in <span className="text-violet-400 font-mono">PostgreSQL</span>.
            </p>

            <p>
              Simultaneously, my deep interest in cybersecurity drives me to approach software through a dual mindset: <strong className="text-white">how to build seamlessly, and how to defend rigorously</strong> against threats, authentication leaks, and data breaches.
            </p>

            {/* Core Pillars List */}
            <div className="grid grid-cols-2 gap-3 pt-4 font-mono text-xs">
              {[
                'Software Development',
                'Cybersecurity Analysis',
                'Secure App Engineering',
                'Python & Django APIs',
                'React Web Interfaces',
                'Database Systems',
                'Security Monitoring',
                'AI & Data Analytics'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Technical Identity Telemetry Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="hud-box cyber-card rounded-xl p-6 sm:p-8 border border-slate-800 space-y-6">
              
              <div className="pb-4 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
                <span className="text-cyan-400 font-bold flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#00f0ff]" /> CORE ENGINEERING VALUE
                </span>
                <span className="text-slate-500">REF: NK-CORE</span>
              </div>

              <div className="space-y-4">
                {competencies.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div key={i} className="p-4 rounded-lg bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all space-y-1.5 group">
                      <div className="flex items-center gap-2.5 font-mono text-sm font-semibold text-white group-hover:text-[#00f0ff] transition-colors">
                        <Icon className="w-4 h-4 text-[#00f0ff]" />
                        <span>{c.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 font-normal leading-normal">
                        {c.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>DEGREE GOAL</span>
                <span className="text-emerald-400 font-semibold">B.E. INFORMATION TECHNOLOGY</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
