import React, { useState } from 'react';
import { FileText, Download, Eye, ExternalLink, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeSection() {
  const [downloaded, setDownloaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDownload = () => {
    // Fire festive confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#0066ff', '#8b5cf6']
    });

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);

    // Create a plain text formatted resume download blob
    const resumeText = `================================================================
NITHISH K — FULL-STACK DEVELOPER × CYBERSECURITY ANALYST
Information Technology Student | Tamil Nadu, India
Brand: BUILD. SECURE. INNOVATE.
================================================================

SUMMARY
-------
Information Technology student at Annamalai University (Faculty of Engineering & Technology) with interests spanning Full-Stack Software Engineering (Python, Django, React), Cybersecurity Operations, Web Security, and Relational Databases.

ACADEMIC QUALIFICATIONS
----------------------
• B.E. Information Technology (2024 – 2028)
  Annamalai University – Faculty of Engineering and Technology, Tamil Nadu
• Higher Secondary Certificate (HSC) (2024)
  Kongu Matric Higher Secondary School, Tamil Nadu
• Secondary School Leaving Certificate (SSLC) (2022)
  Kongu Matric Higher Secondary School, Tamil Nadu

PRACTICAL EXPERIENCE
--------------------
• Software Trainee / Intern | TVK Technologies
  Worked on web development pipelines, API integration, and code debugging.

TECHNICAL SKILLS
----------------
• Development: Python, Django, React, JavaScript, HTML5/CSS3, REST APIs
• Database: PostgreSQL, MySQL
• Cybersecurity: Security Monitoring, Threat Detection, Log Analysis, Web Application Security, Secure Coding, Auth & Authorization, Network Security
• Tools: Git, GitHub, VS Code, Linux Terminal

FEATURED PROJECTS
-----------------
1. Tamil Nadu Sports Development Platform
   Full-stack sports administration system using React, Django REST, and PostgreSQL.
2. Real-Time Security Monitoring Dashboard
   Cybersecurity SIEM log stream visualization dashboard built with Python & Web technologies.
3. Password Generation & Strength Checker
   Cryptographic password evaluation tool assessing Shannon entropy and bit security.

CONTACT
-------
Email: nithishk.tech@gmail.com
GitHub: https://github.com
LinkedIn: https://linkedin.com
Location: Tamil Nadu, India
`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NITHISH_K_RESUME.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 relative border-t border-slate-800/60 bg-[#07090e] cyber-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="hud-box cyber-card rounded-2xl p-8 sm:p-12 border border-cyan-500/30 bg-[#0c1017]/90 text-center space-y-8 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />
            <span>VERIFIED RESUME & PROFILE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight">
            SOFTWARE DEVELOPER <br />
            <span className="text-gradient-cyan">WITH A SECURITY MINDSET.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Interested in internships, full-stack developer roles, or cybersecurity positions? Access my complete resume breakdown and project credentials.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs">
            <button
              onClick={handleDownload}
              className="px-8 py-4 rounded-md bg-[#00f0ff] text-black font-bold hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center gap-2"
            >
              {downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              <span>{downloaded ? 'RESUME DOWNLOADED!' : 'DOWNLOAD RESUME'}</span>
            </button>

            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 rounded-md bg-slate-900 border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-white transition-all flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>PREVIEW RESUME</span>
            </button>

            <a
              href="#projects"
              className="px-8 py-4 rounded-md bg-[#0c1017] text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center gap-2"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

      {/* Resume Preview Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-3xl bg-[#0c1017] border border-cyan-500/40 rounded-xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto font-mono text-xs">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-cyan-400 font-bold text-sm">NITHISH K // RESUME PREVIEW</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-3 py-1 rounded bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
              >
                CLOSE
              </button>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <div className="p-4 rounded bg-slate-900 border border-slate-800 space-y-2">
                <h3 className="text-base font-bold text-white font-syne">NITHISH K</h3>
                <p className="text-cyan-400">FULL-STACK DEVELOPER × CYBERSECURITY ANALYST</p>
                <p className="text-slate-400">B.E. IT Student @ Annamalai University | Tamil Nadu, India</p>
              </div>

              <div className="space-y-2">
                <span className="text-cyan-400 font-bold block">SUMMARY</span>
                <p>Full-Stack Web Developer and Cybersecurity Analyst specializing in building resilient software applications using React, Python, Django, PostgreSQL, and security monitoring techniques.</p>
              </div>

              <div className="space-y-2">
                <span className="text-cyan-400 font-bold block">EDUCATION</span>
                <p>• B.E. Information Technology (2024–2028) — Annamalai University (Faculty of Engg & Tech)</p>
                <p>• HSC & SSLC — Kongu Matric Higher Secondary School</p>
              </div>

              <div className="space-y-2">
                <span className="text-cyan-400 font-bold block">CORE STACK</span>
                <p>Python, Django, React, JavaScript, REST APIs, PostgreSQL, MySQL, Log Analysis, Security Monitoring, Git, Linux</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={handleDownload}
                className="px-6 py-2.5 rounded bg-[#00f0ff] text-black font-bold hover:bg-cyan-300"
              >
                DOWNLOAD FULL RESUME
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
