import React from 'react';
import { X, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { sound } from '../utils/soundEffects';

export default function NetflixProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0c0d12] border border-white/20 rounded-2xl shadow-2xl my-8 overflow-hidden font-sans border-t-4 border-t-[#E50914]">
        
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playHover();
            onClose();
          }}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/70 border border-white/20 text-slate-400 hover:text-white hover:border-red-500 transition-colors"
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Cinematic Banner */}
        <div className="relative p-6 sm:p-10 bg-gradient-to-b from-red-950/40 via-[#10121a] to-[#0c0d12] border-b border-white/10 space-y-4">
          
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 rounded bg-[#E50914] text-white font-extrabold tracking-wider">
              PROJECT {project.number}
            </span>
            <span className="text-slate-400 uppercase tracking-widest">{project.category}</span>
            {project.isConcept && (
              <span className="px-2.5 py-1 rounded bg-amber-950/60 border border-amber-500/40 text-amber-300 font-bold flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                CONCEPT PROTOTYPE
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-4xl font-syne font-black text-white leading-tight">
            {project.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Technology Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded bg-black/70 border border-white/15 text-red-200">
                {t}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3 font-mono text-xs">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHover()}
              className="px-6 py-3 rounded-md bg-white text-black font-extrabold hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg"
            >
              <GithubIcon className="w-4 h-4" />
              <span>VIEW SOURCE CODE</span>
            </a>

            <button
              onClick={() => {
                sound.playHover();
                onClose();
              }}
              className="px-6 py-3 rounded-md bg-white/5 border border-white/20 text-slate-300 hover:text-white hover:border-white transition-colors"
            >
              CLOSE
            </button>
          </div>

        </div>

        {/* Modal Detailed Body Grid */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[60vh] overflow-y-auto font-sans">
          
          {/* Project Overview */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-red-500 font-bold flex items-center gap-2 tracking-wider">
              <span>01 // PROJECT OVERVIEW</span>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.overview}
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-red-500 font-bold flex items-center gap-2 tracking-wider">
              <Cpu className="w-4 h-4 text-red-500" />
              <span>02 // ARCHITECTURAL APPROACH</span>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.architecture}
            </div>
          </div>

          {/* Core Features */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-red-500 font-bold flex items-center gap-2 tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              <span>03 // IMPLEMENTED & CONCEPTUAL FEATURES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-black/60 border border-white/10 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status Note */}
          <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-xs font-mono text-slate-300 space-y-1">
            <span className="text-red-400 font-bold block">VERIFIED ACADEMIC & PRACTICAL REPOSITORY:</span>
            <p className="text-slate-400 leading-relaxed">
              All project architectures represent genuine technical implementations and learning milestones developed by Nithish K. No fabricated user metrics, commercial deployment claims, or artificial statistics.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:px-10 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-500 bg-black/80">
          <span>NITHISH K // PORTFOLIO ARCHIVE</span>
          <button
            onClick={() => {
              sound.playHover();
              onClose();
            }}
            className="text-slate-400 hover:text-white underline underline-offset-2"
          >
            Back to Catalog
          </button>
        </div>

      </div>
    </div>
  );
}
