export const projectsData = [
  {
    id: 'tn-sports',
    number: '01',
    title: 'TAMIL NADU SPORTS DEVELOPMENT PLATFORM',
    category: 'FULL-STACK DEVELOPMENT',
    badge: 'GOVERNMENT ARCHITECTURE',
    shortDescription: 'A comprehensive full-stack platform designed to support sports development across Tamil Nadu through athlete registration, sports management, tournaments, clubs, districts and administrative analytics.',
    tech: ['React', 'Django', 'REST API', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      'Athlete Registration & Verification System',
      'District-wise Sports Management Engine',
      'Interactive Tamil Nadu District Map Visualization',
      'Coach & Club Enrollment Portal',
      'Admin Analytics & Tournament Scheduling'
    ],
    demoLink: '#',
    githubLink: 'https://github.com',
    caseStudy: {
      problem: 'Sports administration across Tamil Nadu districts lacked a centralized, secure digital platform for real-time athlete tracking, tournament registration, and transparent sports club governance.',
      approach: 'Architected a decoupled Full-Stack system using Django REST Framework for robust state management and role-based access control, coupled with a highly responsive React frontend featuring dynamic maps and analytics dashboards.',
      technology: 'Frontend built with React 18, Tailwind CSS, and custom interactive Geo-visualizers. Backend powered by Python 3.11, Django, PostgreSQL database with optimized index queries, and JWT authentication.',
      securityConsiderations: 'Implemented strict Role-Based Access Control (RBAC), CSRF protection, AES-256 password hashing, rate limiting on athlete login endpoints, and sanitized query params to prevent SQL injection and privilege escalation.',
      features: [
        'Centralized Athlete Digital Identity Profile',
        'District Administrator Dashboard & Verification Queue',
        'Real-time Tournament Bracket & Leaderboard Generator',
        'Certified Coach & Club Directory with District Filtering',
        'Tamil Nadu Geographical Data Analytics & Medal Tally Chart'
      ],
      result: 'Delivered a production-ready system architecture capable of scaling to manage thousands of registered athletes and coaches across all 38 districts of Tamil Nadu.',
      futureImprovements: 'Plan to integrate automated AI document verification for age/identity proofs and real-time SMS notifications for tournament match schedules.'
    }
  },
  {
    id: 'security-dashboard',
    number: '02',
    title: 'REAL-TIME SECURITY MONITORING DASHBOARD',
    category: 'CYBERSECURITY',
    badge: 'SECURITY OPERATIONS',
    shortDescription: 'A security operations monitoring dashboard concept designed to aggregate, parse, and visualize system events, security alerts, and network telemetry in real-time.',
    tech: ['Python', 'React', 'Security Analytics', 'WebSockets', 'Tailwind CSS'],
    highlights: [
      'Live Event Log Stream & Severity Color Coding',
      'Threat Level Dynamic Meter (Low / Elevated / High)',
      'Automated Brute-Force & Anomaly Event Detection',
      'Interactive Attack Vector & Port Activity Charts',
      'System Node Heartbeat Health Checks'
    ],
    demoLink: '#',
    githubLink: 'https://github.com',
    caseStudy: {
      problem: 'Small organizations struggle to digest raw syslog streams and detect potential intrusion attempts due to noisy log output and a lack of visual alert prioritization.',
      approach: 'Built a light-weight Python-driven event parsing pipeline that processes mock system events and streams actionable threat indicators to a high-density cyber operations web dashboard.',
      technology: 'Python event simulation and log parser, WebSockets for sub-millisecond stream delivery, React with SVG chart renders, and custom HUD CSS components for high contrast visualization.',
      securityConsiderations: 'Ensured dashboard endpoints require multi-factor session authorization, payload sanitization before DOM rendering to prevent stored XSS from malicious log strings, and audit logging of analyst actions.',
      features: [
        'Real-Time Live Event Log Feed with Filtering',
        'Visual Threat Alert Distribution Gauge',
        'Interactive Incident Response Trigger Action Buttons',
        'Host & Network Interface Telemetry Metrics',
        'Simulated Attack Scenario Simulator for Testing Analysts'
      ],
      result: 'Demonstrates deep understanding of SIEM (Security Information and Event Management) workflows, alert triage, and security telemetry representation.',
      futureImprovements: 'Integrate ML-driven anomaly detection models (Isolation Forest) to automatically flag outlier traffic patterns before explicit rules fire.'
    }
  },
  {
    id: 'password-checker',
    number: '03',
    title: 'PASSWORD GENERATION & STRENGTH CHECKER',
    category: 'PYTHON / SECURITY',
    badge: 'CRYPTOGRAPHIC TOOL',
    shortDescription: 'A Python security application that generates cryptographically strong customizable passwords and evaluates password entropy, character variance, and dictionary resistance.',
    tech: ['Python', 'Random Module', 'String Handling', 'Entropy Alg', 'React GUI'],
    highlights: [
      'Shannon Entropy Score Calculation',
      'Cryptographically Secure Pseudo-Random Generation (`secrets` / `random`)',
      'Custom Length & Character Set Selection',
      'Real-time Strength Indicator Meter',
      'Zero Server-side Storage (Privacy First)'
    ],
    demoLink: '#',
    githubLink: 'https://github.com',
    caseStudy: {
      problem: 'Users frequently rely on weak, predictable passwords or flawed generators that rely on non-cryptographic pseudo-random number generators.',
      approach: 'Developed an algorithmic utility utilizing Python string analysis and bit-entropy formulas to grade passwords while providing an automated generator enforcing high-entropy character distribution.',
      technology: 'Python core logic exported into web assembly / interactive React module for client-side evaluation without sending sensitive strings across the network.',
      securityConsiderations: 'Strictly zero persistence of input strings. All calculations execute in local client memory. Password inputs use masked secure memory buffers to prevent clipboard leakage.',
      features: [
        'Interactive Live Strength Evaluator with Progress Bar',
        'Bit Entropy Calculation & Crack Time Estimate',
        'Customizable Character Set Controls (Upper, Lower, Digits, Symbols)',
        'One-Click Copy to Clipboard with Auto-Clear Timer',
        'Common Pattern Detection (Keyboard Walks, Sequential Numbers)'
      ],
      result: 'Empowers users to generate resilient credentials and instantly evaluate exposure to brute-force and dictionary attacks.',
      futureImprovements: 'Add local HaveIBeenPwned k-Anonymity hash check API integration to check against known leaked password datasets.'
    }
  }
];
