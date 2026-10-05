import React from 'react';
import { X, ShieldAlert, Cpu, CheckCircle2, ArrowRight, ExternalLink, Lock, Award } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0c1017] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl my-8 space-y-8 font-sans border-t-2 border-t-[#00f0ff]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 rounded bg-cyan-500/20 text-[#00f0ff] font-bold">
              PROJECT CASE STUDY //{project.number}
            </span>
            <span className="text-slate-400">{project.category}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-syne font-extrabold text-white leading-tight">
            {project.title}
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Case Study Grid */}
        <div className="space-y-8 pt-4 border-t border-slate-800 font-sans">
          
          {/* 01 PROBLEM */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#00f0ff] font-bold flex items-center gap-2">
              <span>01 // PROBLEM STATEMENT</span>
            </div>
            <p className="text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-lg border border-slate-800">
              {cs.problem}
            </p>
          </div>

          {/* 02 APPROACH */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#00f0ff] font-bold flex items-center gap-2">
              <span>02 // ARCHITECTURAL APPROACH</span>
            </div>
            <p className="text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-lg border border-slate-800">
              {cs.approach}
            </p>
          </div>

          {/* 03 TECHNOLOGY */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#00f0ff] font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00f0ff]" />
              <span>03 // TECHNOLOGY STACK & PIPELINE</span>
            </div>
            <p className="text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-lg border border-slate-800">
              {cs.technology}
            </p>
          </div>

          {/* 04 SECURITY CONSIDERATIONS */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-amber-400 font-bold flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>04 // SECURITY CONSIDERATIONS & CONTROLS</span>
            </div>
            <p className="text-slate-300 leading-relaxed bg-amber-950/20 p-4 rounded-lg border border-amber-500/30 text-amber-100/90">
              {cs.securityConsiderations}
            </p>
          </div>

          {/* 05 FEATURES */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#00f0ff] font-bold flex items-center gap-2">
              <span>05 // CORE SYSTEM FEATURES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {cs.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-slate-900 border border-slate-800 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 06 RESULT */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>06 // IMPACT & OUTCOME</span>
            </div>
            <p className="text-slate-200 leading-relaxed bg-emerald-950/20 p-4 rounded-lg border border-emerald-500/30">
              {cs.result}
            </p>
          </div>

          {/* 07 FUTURE IMPROVEMENTS */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-violet-400 font-bold flex items-center gap-2">
              <span>07 // FUTURE IMPROVEMENTS & ROADMAP</span>
            </div>
            <p className="text-slate-300 leading-relaxed bg-violet-950/20 p-4 rounded-lg border border-violet-500/30">
              {cs.futureImprovements}
            </p>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="text-slate-500">
            NITHISH K // CASE STUDY ARCHIVE
          </div>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-md bg-[#00f0ff] text-black font-bold hover:bg-cyan-300 transition-colors"
          >
            CLOSE CASE STUDY
          </button>
        </div>

      </div>
    </div>
  );
}
