import React, { useState } from 'react';
import { Shield, Eye, AlertTriangle, Terminal, Cpu, Activity, Play, RefreshCw, CheckCircle, Lock, Server } from 'lucide-react';
import { initialSecurityStats, sampleSecurityLogs } from '../data/securitySim';

export default function SecurityFocus() {
  const [logs, setLogs] = useState(sampleSecurityLogs);
  const [stats, setStats] = useState(initialSecurityStats);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const addSimulatedLog = (level, category, message) => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    const newEntry = {
      id: Date.now(),
      timestamp: time,
      level,
      category,
      message
    };
    setLogs((prev) => [newEntry, ...prev.slice(0, 7)]);
    setStats((prev) => ({
      ...prev,
      monitoredEvents: prev.monitoredEvents + 1,
      alerts: level === 'WARN' || level === 'CRITICAL' ? prev.alerts + 1 : prev.alerts
    }));
  };

  const securityFocusItems = [
    { title: 'Security Monitoring', desc: 'Observing network traffic, active sessions, and anomalous operational behavior.' },
    { title: 'Threat Detection', desc: 'Analyzing attack signatures, brute-force login attempts, and suspicious commands.' },
    { title: 'Network Security Fundamentals', desc: 'Understanding TCP/IP handshakes, port state management, and firewall packet rules.' },
    { title: 'Web Application Security', desc: 'Protecting applications against OWASP Top 10 vulnerabilities (XSS, SQLi, CSRF).' },
    { title: 'Vulnerability Awareness', desc: 'Identifying unpatched software dependencies and exposed API endpoint vectors.' },
    { title: 'Log Analysis', desc: 'Parsing syslog, auth.log, and HTTP access logs using Python scripts to reconstruct events.' },
    { title: 'Incident Response Fundamentals', desc: 'Triage methodology, containing suspicious IPs, and auditing system state.' },
    { title: 'Secure Coding', desc: 'Input sanitization, parameterized queries, and defensive programming standards.' },
    { title: 'Authentication & Authorization', desc: 'JWT access token handling, password hashing, and role-based permissions.' },
    { title: 'Security Dashboards', desc: 'Designing operational metrics UI to present threat telemetry to analysts.' }
  ];

  const filteredLogs = logs.filter((log) => {
    if (activeFilter === 'ALL') return true;
    return log.level === activeFilter;
  });

  return (
    <section id="security" className="py-24 relative border-t border-slate-800/60 bg-[#07090e] cyber-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] tracking-widest uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>02 // SECURITY</span>
            <div className="w-12 h-[1px] bg-cyan-500/40"></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight leading-tight">
            THINK LIKE A BUILDER. <br />
            <span className="text-gradient-blue">DEFEND LIKE AN ANALYST.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
            My cybersecurity journey centers on understanding how systems are compromised so I can build software that stands resilient against real-world attack vectors.
          </p>
        </div>

        {/* Security Operations Visual Dashboard */}
        <div className="hud-box cyber-card rounded-xl border border-cyan-500/30 p-6 sm:p-8 space-y-6 bg-[#0c1017]/90 shadow-2xl">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                <h3 className="font-syne text-xl font-bold text-white tracking-wider">
                  PORTFOLIO SECURITY SIMULATION
                </h3>
              </div>
              <p className="font-mono text-xs text-slate-400 mt-1">
                * Simulated operational telemetry for visual portfolio presentation only.
              </p>
            </div>

            {/* Metric Status Pills */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <div className="px-3 py-1.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>STATUS: {stats.status}</span>
              </div>
              <div className="px-3 py-1.5 rounded bg-blue-950/60 border border-blue-500/40 text-cyan-400 flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>THREAT: {stats.threatLevel}</span>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
            <div className="p-4 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-xs text-slate-500 block">MONITORED EVENTS</span>
              <span className="text-2xl font-bold text-white">{stats.monitoredEvents.toLocaleString()}</span>
            </div>
            <div className="p-4 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-xs text-slate-500 block">FLAGS / ALERTS</span>
              <span className="text-2xl font-bold text-amber-400">{stats.alerts}</span>
            </div>
            <div className="p-4 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-xs text-slate-500 block">SYSTEMS ONLINE</span>
              <span className="text-2xl font-bold text-emerald-400">{stats.systemsOnline}/12</span>
            </div>
            <div className="p-4 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-xs text-slate-500 block">NETWORK TRAFFIC</span>
              <span className="text-2xl font-bold text-cyan-400">{stats.networkIn}</span>
            </div>
          </div>

          {/* Interactive Log Console & Action Controls */}
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Terminal className="w-4 h-4 text-[#00f0ff]" />
                <span>LIVE EVENT LOG FEED</span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2">
                {['ALL', 'INFO', 'WARN', 'SUCCESS'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                      activeFilter === filter
                        ? 'bg-cyan-500/20 text-[#00f0ff] border border-cyan-500/40'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Log Stream Box */}
            <div className="p-4 rounded-lg bg-[#07090e] border border-slate-800 font-mono text-xs space-y-2.5 max-h-60 overflow-y-auto">
              {filteredLogs.map((log) => (
                <div key={log.id} className="flex items-start gap-3 py-1 border-b border-slate-900/80 last:border-0 hover:bg-slate-900/40 px-2 rounded">
                  <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] shrink-0 font-bold ${
                      log.level === 'WARN'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : log.level === 'SUCCESS'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    }`}
                  >
                    {log.level}
                  </span>
                  <span className="text-slate-400 font-semibold shrink-0">[{log.category}]</span>
                  <span className="text-slate-200">{log.message}</span>
                </div>
              ))}
            </div>

            {/* Simulation Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="text-slate-500 text-[11px]">SIMULATE EVENT:</span>
              <button
                onClick={() => addSimulatedLog('SUCCESS', 'WAF', 'Blocked malicious SQL script payload on /api/login')}
                className="px-3 py-1.5 rounded bg-slate-900 hover:bg-cyan-950 border border-slate-700 hover:border-cyan-500/50 text-cyan-300 transition-colors flex items-center gap-1.5"
              >
                <Play className="w-3 h-3 text-[#00f0ff]" />
                <span>Simulate SQLi Block</span>
              </button>
              <button
                onClick={() => addSimulatedLog('WARN', 'RATE_LIMIT', 'Triggered rate-limiter: 10 API requests / sec from 203.0.113.45')}
                className="px-3 py-1.5 rounded bg-slate-900 hover:bg-amber-950 border border-slate-700 hover:border-amber-500/50 text-amber-300 transition-colors flex items-center gap-1.5"
              >
                <AlertTriangle className="w-3 h-3 text-amber-400" />
                <span>Simulate Rate Limit</span>
              </button>
              <button
                onClick={() => setLogs(sampleSecurityLogs)}
                className="px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 transition-colors flex items-center gap-1.5 ml-auto"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Feed</span>
              </button>
            </div>

          </div>

        </div>

        {/* Security Focus Areas Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between font-mono text-xs border-b border-slate-800 pb-3">
            <span className="text-slate-400 uppercase tracking-wider">CYBERSECURITY AREAS OF FOCUS & INTEREST</span>
            <span className="text-cyan-400">10 SPECIALIZATIONS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {securityFocusItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#0c1017] border border-slate-800 hover:border-cyan-500/40 transition-all space-y-2 group"
              >
                <div className="font-mono text-[11px] text-cyan-400 flex items-center justify-between">
                  <span>0{idx + 1}</span>
                  <Shield className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#00f0ff] transition-colors" />
                </div>
                <h4 className="font-syne text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
