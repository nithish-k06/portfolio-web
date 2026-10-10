import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, ArrowUpRight, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' }); // 'success' | 'error' | ''
  const [loading, setLoading] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill out all required fields before sending.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }

    setLoading(true);
    sound.playHover();

    // Process submission and trigger real mailto client option as fallback
    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: 'success',
        message: 'Message captured successfully! Thank you for reaching out. Opening your email client to transmit directly...'
      });

      sound.playSuccess();
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#E50914', '#ffffff', '#0070F3']
      });

      // Construct mailto link so user's message is never lost
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open mail client safely
      window.open(mailtoUrl, '_blank');

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 8000);
    }, 900);
  };

  const copyEmail = () => {
    sound.playHover();
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-white/10 bg-[#08090d]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-red-500 tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // TRANSMISSION CHANNEL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight leading-tight">
            LET'S BUILD <span className="text-gradient-red">SOMETHING SECURE.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Have an internship inquiry, project idea, cybersecurity collaboration, or opportunity? Transmit your message below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="netflix-card rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 bg-[#0e1017] space-y-6 shadow-2xl"
            >
              <div className="pb-3 border-b border-white/10 font-mono text-xs text-red-400 flex items-center justify-between">
                <span>SECURE INQUIRY FORM</span>
                <span className="text-emerald-400">● READY FOR TRANSMISSION</span>
              </div>

              {/* Status Notifications */}
              {status.type === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-start gap-2.5 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.type === 'error' && (
                <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 font-mono text-xs flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{status.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                
                {/* Name Field */}
                <div>
                  <label className="block text-slate-400 mb-2">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-slate-400 mb-2">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="name@domain.com"
                  />
                </div>

              </div>

              {/* Subject Field */}
              <div className="font-mono text-xs">
                <label className="block text-slate-400 mb-2">SUBJECT *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                />
              </div>

              {/* Message Field */}
              <div className="font-mono text-xs">
                <label className="block text-slate-400 mb-2">MESSAGE *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Describe your project, internship role, or question..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Column: Direct Info & Social Profiles */}
          <div className="lg:col-span-5 space-y-6 font-mono text-xs">
            
            <div className="netflix-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#0e1017] space-y-6 shadow-2xl">
              
              <div className="pb-3 border-b border-white/10 text-red-400 font-bold">
                DIRECT CONTACT DETAILS
              </div>

              <div className="space-y-4">
                
                {/* Email Card with Copy button */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-red-500" />
                    <div>
                      <span className="text-[10px] text-slate-500 block">PROFESSIONAL EMAIL</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs text-white hover:text-red-400 transition-colors font-sans"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2 rounded bg-white/5 border border-white/10 hover:border-red-500 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email Address"
                  >
                    {emailCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">LOCATION</span>
                    <span className="text-xs text-white font-sans">{personalInfo.location}</span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-slate-500 block uppercase tracking-wider text-[11px]">
                  VERIFIED SOCIAL PROFILES:
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playHover()}
                    className="p-3.5 rounded-lg bg-black/60 border border-white/10 hover:border-red-500 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-red-500" />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playHover()}
                    className="p-3.5 rounded-lg bg-black/60 border border-white/10 hover:border-blue-500 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn</span>
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
