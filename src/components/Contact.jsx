import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);

      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#10b981']
      });

      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/60 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // CONTACT</span>
            <div className="w-12 h-[1px] bg-cyan-500/40"></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight leading-tight">
            LET'S BUILD <br />
            <span className="text-gradient-cyan">SOMETHING SECURE.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Have an idea, project or opportunity? Let's connect and build reliable tech solutions together.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="hud-box cyber-card rounded-2xl p-6 sm:p-8 border border-slate-800 bg-[#0c1017] space-y-6">
              
              <div className="pb-3 border-b border-slate-800 font-mono text-xs text-cyan-400 flex items-center justify-between">
                <span>ENCRYPTED MESSAGE INPUT</span>
                <span>STATUS: READY</span>
              </div>

              {sent && (
                <div className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Message delivered! Thank you for reaching out to Nithish K.</span>
                </div>
              )}

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-400 mb-2">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#07090e] border border-slate-800 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-2">YOUR EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#07090e] border border-slate-800 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="name@domain.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-2">PROJECT / OPPORTUNITY MESSAGE *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#07090e] border border-slate-800 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Describe your project, internship, or opportunity..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-lg bg-[#00f0ff] text-black font-mono font-bold text-xs tracking-wider uppercase hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE →</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Info & Social Links */}
          <div className="lg:col-span-5 space-y-6 font-mono text-xs">
            
            <div className="hud-box cyber-card rounded-2xl p-6 sm:p-8 border border-slate-800 bg-[#0c1017] space-y-6">
              
              <div className="pb-3 border-b border-slate-800 text-cyan-400 font-bold">
                DIRECT CONTACT CHANNELS
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:nithishk.tech@gmail.com"
                  className="p-4 rounded-lg bg-[#07090e] border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#00f0ff]" />
                    <div>
                      <span className="text-[10px] text-slate-500 block">EMAIL ADDRESS</span>
                      <span className="text-xs font-semibold group-hover:text-[#00f0ff] transition-colors">
                        nithishk.tech@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
                </a>

                <div className="p-4 rounded-lg bg-[#07090e] border border-slate-800 flex items-center gap-3 text-slate-200">
                  <MapPin className="w-4 h-4 text-[#00f0ff]" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">LOCATION</span>
                    <span className="text-xs font-semibold">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Social Link Cards */}
              <div className="space-y-3 pt-2">
                <span className="text-slate-500 block">SOCIAL & PROFESSIONAL PROFILES:</span>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-cyan-400" /> GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-blue-400" /> LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
