import React from 'react';
import { BookOpen, Hammer, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CurrentFocus() {
  const focusAreas = [
    {
      title: 'CURRENTLY LEARNING',
      icon: BookOpen,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20',
      items: [
        'Advanced Django REST & Async Views',
        'React State Architecture & Performance',
        'Cybersecurity Threat Hunting & SIEM',
        'AI & LLM Integration in Web Apps',
        'Database Optimization & Indexing',
        'Cloud Deployment & Linux Containers'
      ]
    },
    {
      title: 'CURRENTLY BUILDING',
      icon: Hammer,
      color: 'text-blue-400 border-blue-500/30 bg-blue-950/20',
      items: [
        'Full-stack sports & community platforms',
        'Real-time security monitoring dashboards',
        'AI-powered text & code analytics tools',
        'Competitive hackathon engineering projects',
        'Defensive cryptographic helper utilities'
      ]
    },
    {
      title: 'LONG-TERM GOAL',
      icon: Compass,
      color: 'text-violet-400 border-violet-500/30 bg-violet-950/20',
      items: [
        'Become a high-impact Software Engineer',
        'Master defense-in-depth secure systems',
        'Architect software trusted by millions',
        'Bridge the gap between Dev & Security'
      ]
    }
  ];

  return (
    <section className="py-20 relative border-t border-slate-800/60 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] tracking-widest uppercase">
            <span>ACTIVE HORIZON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-syne font-bold text-white">
            WHERE MY FOCUS IS HEADED
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className={`hud-box cyber-card rounded-xl p-6 sm:p-8 border space-y-6 ${col.color}`}
              >
                <div className="flex items-center gap-3 font-mono text-sm font-bold text-white border-b border-slate-800 pb-4">
                  <Icon className="w-5 h-5 text-[#00f0ff]" />
                  <span>{col.title}</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-slate-300">
                  {col.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {col.title === 'LONG-TERM GOAL' && (
                  <div className="pt-4 border-t border-slate-800/80 font-mono text-xs text-cyan-300 italic">
                    "Building reliable software with a cybersecurity mindset."
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
