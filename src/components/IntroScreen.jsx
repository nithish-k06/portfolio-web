import React, { useEffect, useState } from 'react';
import { FastForward, Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: initial black, 1: NITHISH K glow, 2: subtitle reveal, 3: fade out
  const [muted, setMuted] = useState(sound.isMuted());

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Sequence the cinematic reveal
    const t0 = setTimeout(() => {
      sound.playTadum();
      setStage(1);
    }, 400);

    const t1 = setTimeout(() => {
      setStage(2);
    }, 1800);

    const t2 = setTimeout(() => {
      setStage(3);
    }, 3800);

    const t3 = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sound.playHover();
    onComplete();
  };

  const toggleSound = () => {
    const next = sound.toggleMute();
    setMuted(next);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050608] transition-opacity duration-700 ${
        stage === 3 ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Top Controls: Sound & Skip Intro */}
      <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
        <button
          onClick={toggleSound}
          className="p-2.5 rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:border-red-600/50 backdrop-blur-md transition-all text-xs flex items-center gap-2"
          title={muted ? 'Unmute intro audio' : 'Mute intro audio'}
        >
          {muted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-red-500" />}
        </button>

        <button
          onClick={handleSkip}
          className="px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white/80 hover:text-white hover:border-red-500 hover:bg-red-950/40 backdrop-blur-md font-mono text-xs tracking-wider transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(0,0,0,0.8)]"
        >
          <span>SKIP INTRO</span>
          <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-red-500" />
        </button>
      </div>

      {/* Cinematic Ambient Red Backlight Glow */}
      <div
        className={`absolute w-[450px] sm:w-[650px] h-[350px] rounded-full bg-red-600/20 blur-[130px] pointer-events-none transition-all duration-1000 ${
          stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />

      {/* Floating Ambient Particles Canvas/Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e50914_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      {/* Centerpiece Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
        
        {/* Iconic Netflix-Inspired Red N Emblem */}
        <div
          className={`flex justify-center transition-all duration-700 transform ${
            stage >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'
          }`}
        >
          <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-red-600/30 to-black border border-red-500/50 shadow-[0_0_40px_rgba(229,9,20,0.6)]">
            <span className="font-syne text-4xl sm:text-5xl font-extrabold text-[#E50914] tracking-tighter drop-shadow-[0_0_20px_rgba(229,9,20,0.9)]">
              N
            </span>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black animate-pulse" />
          </div>
        </div>

        {/* Large Uppercase Name: NITHISH K with subtle red glow */}
        <div className="overflow-hidden">
          <h1
            className={`text-5xl sm:text-7xl md:text-8xl font-syne font-black text-white tracking-wider uppercase transition-all duration-1000 transform ${
              stage >= 1
                ? 'opacity-100 translate-y-0 blur-0 drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]'
                : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            NITHISH K
          </h1>
        </div>

        {/* Underneath: CYBER ANALYST IN THE MAKING */}
        <div className="overflow-hidden">
          <div
            className={`transition-all duration-700 delay-200 transform ${
              stage >= 2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-950/40 border border-red-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(229,9,20,0.2)]">
              <span className="h-2 w-2 rounded-full bg-[#E50914] animate-ping" />
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-red-200 uppercase">
                CYBER ANALYST IN THE MAKING
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Cinematic Bottom Progress Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-red-600 via-rose-500 to-[#E50914] transition-all duration-[3600ms] ease-out ${
            stage >= 1 ? 'w-full' : 'w-0'
          }`}
        />
      </div>

    </div>
  );
}
