export const skillsData = {
  development: [
    {
      id: 'python',
      name: 'Python',
      level: 'Advanced',
      desc: 'Primary language for backend APIs, cybersecurity automation scripts, data processing, and security lab tooling.',
      connections: ['django', 'rest-api', 'security-monitoring', 'log-analysis', 'vscode', 'linux']
    },
    {
      id: 'django',
      name: 'Django',
      level: 'Advanced',
      desc: 'Robust Python web framework used for scalable REST APIs, secure user authentication, ORM database querying, and admin backends.',
      connections: ['python', 'rest-api', 'postgresql', 'mysql', 'authentication', 'web-security']
    },
    {
      id: 'react',
      name: 'React',
      level: 'Advanced',
      desc: 'Frontend library for building dynamic, stateful UI components, high-performance dashboards, and interactive web applications.',
      connections: ['javascript', 'html-css', 'rest-api', 'git']
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      level: 'Advanced',
      desc: 'Core language for frontend interactivity, async API communication, client-side encryption modules, and DOM manipulation.',
      connections: ['react', 'html-css', 'rest-api']
    },
    {
      id: 'html-css',
      name: 'HTML5 / CSS3',
      level: 'Advanced',
      desc: 'Semantic web structure, responsive flexbox/grid layouts, modern CSS variables, glassmorphism, and cyber HUD styling.',
      connections: ['react', 'javascript']
    },
    {
      id: 'rest-api',
      name: 'REST APIs',
      level: 'Advanced',
      desc: 'Architecting JSON endpoints, HTTP status codes, stateless authentication tokens (JWT), and API request validation.',
      connections: ['django', 'react', 'python', 'authentication']
    }
  ],
  database: [
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      level: 'Intermediate',
      desc: 'Relational database for storing production application state, complex joins, index optimization, and transaction safety.',
      connections: ['django', 'mysql', 'secure-coding']
    },
    {
      id: 'mysql',
      name: 'MySQL',
      level: 'Intermediate',
      desc: 'Popular open-source relational database management system for web applications and backend databases.',
      connections: ['postgresql', 'django', 'python']
    }
  ],
  cybersecurity: [
    {
      id: 'security-monitoring',
      name: 'Security Monitoring',
      level: 'Core Focus',
      desc: 'Observing network traffic, active connections, and system event streams to identify abnormal operational behaviors.',
      connections: ['threat-detection', 'log-analysis', 'python', 'linux']
    },
    {
      id: 'threat-detection',
      name: 'Threat Detection',
      level: 'Core Focus',
      desc: 'Analyzing attack vectors, intrusion signatures, brute-force patterns, and suspicious command execution.',
      connections: ['security-monitoring', 'log-analysis', 'web-security']
    },
    {
      id: 'log-analysis',
      name: 'Log Analysis',
      level: 'Core Focus',
      desc: 'Parsing syslog, auth.log, and HTTP access logs using regex and Python scripts to reconstruct incident timelines.',
      connections: ['python', 'linux', 'security-monitoring', 'threat-detection']
    },
    {
      id: 'web-security',
      name: 'Web Application Security',
      level: 'Core Focus',
      desc: 'Understanding OWASP Top 10 vulnerabilities (XSS, SQLi, CSRF, IDOR) and enforcing defense-in-depth mitigations.',
      connections: ['secure-coding', 'authentication', 'react', 'django']
    },
    {
      id: 'secure-coding',
      name: 'Secure Coding',
      level: 'Core Focus',
      desc: 'Writing defensive code: input sanitization, parameterized SQL queries, secure session handling, and avoiding hardcoded secrets.',
      connections: ['django', 'python', 'web-security', 'postgresql']
    },
    {
      id: 'authentication',
      name: 'Auth & Authorization',
      level: 'Core Focus',
      desc: 'Implementing JWT access/refresh tokens, password hashing (Bcrypt/Argon2), role-based permission control (RBAC).',
      connections: ['django', 'rest-api', 'web-security']
    },
    {
      id: 'network-security',
      name: 'Network Security Fundamentals',
      level: 'Core Focus',
      desc: 'Understanding TCP/IP models, OSI layers, firewall rule configurations, port scanning, and packet inspection fundamentals.',
      connections: ['linux', 'security-monitoring', 'python']
    }
  ],
  tools: [
    {
      id: 'git',
      name: 'Git',
      level: 'Proficient',
      desc: 'Distributed version control, branch workflows, commit history auditing, and merge conflict resolution.',
      connections: ['github', 'vscode']
    },
    {
      id: 'github',
      name: 'GitHub',
      level: 'Proficient',
      desc: 'Code repository hosting, project management, issue tracking, pull requests, and CI/CD workflow triggers.',
      connections: ['git', 'vscode']
    },
    {
      id: 'vscode',
      name: 'VS Code',
      level: 'Proficient',
      desc: 'Primary IDE for full-stack web development, Python debugging, Git integration, and terminal operations.',
      connections: ['git', 'python', 'javascript']
    },
    {
      id: 'linux',
      name: 'Linux',
      level: 'Proficient',
      desc: 'Command line terminal navigation, shell scripting, permission management, service control, and system monitoring.',
      connections: ['python', 'log-analysis', 'security-monitoring', 'network-security']
    }
  ]
};
