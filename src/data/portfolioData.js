// Centralized portfolio data repository for NITHISH K
// All personal information, projects, skills, and timeline entries are maintained here for easy updates.

export const personalInfo = {
  name: 'NITHISH K',
  title: 'Cyber Analyst | Python Developer | IT Student',
  badge: 'PORTFOLIO 2026',
  tagline: 'CYBER ANALYST IN THE MAKING',
  bio: 'Information Technology undergraduate student at Annamalai University (Faculty of Engineering and Technology) with a core focus on cybersecurity operations, defensive engineering, Python programming, and secure full-stack software development.',
  education: 'B.E. Information Technology',
  university: 'Annamalai University, Faculty of Engineering and Technology',
  graduationYear: '2028',
  location: 'Dharmapuri, Tamil Nadu, India',
  email: 'nithish.k.cyber@gmail.com',
  github: 'https://github.com/nithish-k06',
  linkedin: 'https://linkedin.com/in/nithish-k-cyber', // Placeholder link
  statusText: 'AVAILABLE FOR INTERNSHIPS & RESEARCH',
  resumeFileName: 'NITHISH_K_RESUME.pdf',
};

// 4 Interactive Profiles for Netflix "Who's watching?" Screen
export const profiles = [
  {
    id: 'cyber',
    name: 'Cyber Analyst',
    roleTag: 'THREAT INTEL & DEFENSE',
    targetSection: '#security',
    themeColor: '#E50914', // Netflix Red
    accentGradient: 'from-red-600 via-rose-700 to-black',
    glowColor: 'rgba(229, 9, 20, 0.45)',
    avatarIcon: 'ShieldAlert',
    description: 'Explore defensive security, threat monitoring, vulnerability research, and security lab tooling.',
    initialFocus: 'cybersecurity'
  },
  {
    id: 'developer',
    name: 'Developer',
    roleTag: 'PYTHON & FULL-STACK',
    targetSection: '#skills',
    themeColor: '#0070F3', // Electric Blue
    accentGradient: 'from-blue-600 via-indigo-700 to-black',
    glowColor: 'rgba(0, 112, 243, 0.45)',
    avatarIcon: 'Code2',
    description: 'Inspect full-stack web applications, Python Django backends, and modern React interfaces.',
    initialFocus: 'programming'
  },
  {
    id: 'projects',
    name: 'Projects',
    roleTag: 'SHOWCASE ARCHIVE',
    targetSection: '#projects',
    themeColor: '#FF9900', // Amber / Gold
    accentGradient: 'from-amber-500 via-orange-600 to-black',
    glowColor: 'rgba(255, 153, 0, 0.45)',
    avatarIcon: 'FolderGit2',
    description: 'Browse featured projects, case studies, interactive password security tools, and state platforms.',
    initialFocus: 'projects'
  },
  {
    id: 'about',
    name: 'About Me',
    roleTag: 'BIO & MILESTONES',
    targetSection: '#about',
    themeColor: '#00F0FF', // Cyber Cyan
    accentGradient: 'from-cyan-500 via-teal-600 to-black',
    glowColor: 'rgba(0, 240, 255, 0.45)',
    avatarIcon: 'UserCheck',
    description: 'Learn about academic journey at Annamalai University, certifications, and career aspirations.',
    initialFocus: 'about'
  }
];

// Top Moments (Netflix Trending/Top 10 Style Horizontal Carousel)
export const topMoments = [
  {
    rank: 1,
    title: 'Cybersecurity Journey',
    category: 'SECURITY RESEARCH',
    tag: 'CORE INTEREST',
    description: 'Building deep foundations in network security, threat detection, Linux system defense, log analysis, and digital forensics principles.',
    duration: 'Ongoing Milestone',
    metrics: 'Defensive Engineering • Ethical Mindset',
    imageGradient: 'from-red-950 via-red-900 to-black',
    accent: '#E50914',
    icon: 'Shield'
  },
  {
    rank: 2,
    title: 'Python Development',
    category: 'SYSTEMS & SCRIPTING',
    tag: 'PRIMARY CODEBASE',
    description: 'Developing cryptographic utilities, password entropy analyzers, backend automation scripts, and Django REST web architectures.',
    duration: 'Production Scripts',
    metrics: 'Python 3 • Django REST • Automation',
    imageGradient: 'from-blue-950 via-indigo-950 to-black',
    accent: '#3b82f6',
    icon: 'Terminal'
  },
  {
    rank: 3,
    title: 'Problem Solving',
    category: 'ALGORITHMIC FOUNDATIONS',
    tag: 'LOGICAL THINKING',
    description: 'Tackling complex computing challenges through data structure analysis, algorithmic efficiency, and structured debugging workflows.',
    duration: 'Continuous Practice',
    metrics: 'Algorithms • Data Structures • Clean Logic',
    imageGradient: 'from-purple-950 via-violet-950 to-black',
    accent: '#a855f7',
    icon: 'Cpu'
  },
  {
    rank: 4,
    title: 'Web Development',
    category: 'FULL-STACK APPLICATIONS',
    tag: 'RESPONSIVE SYSTEMS',
    description: 'Architecting modern user experiences with React and connecting them to robust RESTful APIs with PostgreSQL database backends.',
    duration: 'Full-Stack Workflows',
    metrics: 'React • Modern CSS • State Management',
    imageGradient: 'from-cyan-950 via-teal-950 to-black',
    accent: '#00f0ff',
    icon: 'Layout'
  },
  {
    rank: 5,
    title: 'Learning and Innovation',
    category: 'CONTINUOUS GROWTH',
    tag: 'ACADEMIC ADVANCE',
    description: 'Staying curious, exploring AI capabilities for decision support systems, experimenting with new libraries, and industry internship training.',
    duration: '2024 - 2028 Horizon',
    metrics: 'B.E. IT @ Annamalai University • TVK Tech',
    imageGradient: 'from-emerald-950 via-green-950 to-black',
    accent: '#10b981',
    icon: 'Sparkles'
  }
];

// Skill Universe: Exact categories & skills requested
export const skillUniverse = {
  cybersecurity: {
    categoryTitle: 'Cybersecurity',
    subtitle: 'Defensive systems, protocol analysis, and security principles',
    color: '#E50914',
    items: [
      { name: 'Cybersecurity fundamentals', level: 'Core Knowledge', progress: 85, icon: 'Shield', description: 'Understanding CIA triad, attack vectors, defense-in-depth, and security hygiene.' },
      { name: 'Networking fundamentals', level: 'Strong Foundation', progress: 80, icon: 'Network', description: 'TCP/IP architecture, OSI model, packet routing, ports, and DNS protocols.' },
      { name: 'Security awareness', level: 'High Focus', progress: 90, icon: 'Eye', description: 'Identifying social engineering, phishing vectors, and security policy adherence.' },
      { name: 'Linux fundamentals', level: 'Practical Shell', progress: 85, icon: 'Terminal', description: 'Terminal navigation, permission control, bash scripting, and process monitoring.' },
      { name: 'Digital forensics fundamentals', level: 'Research Focus', progress: 75, icon: 'Search', description: 'Log preservation, timeline reconstruction, and forensic analysis basics.' }
    ]
  },
  programming: {
    categoryTitle: 'Programming',
    subtitle: 'Core languages for systems, logic, and web structure',
    color: '#3b82f6',
    items: [
      { name: 'Python', level: 'Primary Language', progress: 90, icon: 'FileCode', description: 'Object-oriented programming, string manipulation, randomization, scripts, and API engineering.' },
      { name: 'JavaScript', level: 'Advanced Concepts', progress: 85, icon: 'Code', description: 'ES6+ standards, asynchronous promises, DOM manipulation, and dynamic client interactions.' },
      { name: 'HTML5', level: 'Semantic Markup', progress: 95, icon: 'Globe', description: 'Clean semantic structure, modern accessibility standards, and SEO best practices.' },
      { name: 'CSS3', level: 'Modern Styling', progress: 90, icon: 'Palette', description: 'Responsive Grid/Flexbox, CSS variables, glassmorphism, animations, and micro-interactions.' }
    ]
  },
  webDevelopment: {
    categoryTitle: 'Web Development',
    subtitle: 'Architectures, frontend frameworks, and API integrations',
    color: '#00f0ff',
    items: [
      { name: 'Django', level: 'Full-Featured Backend', progress: 85, icon: 'Server', description: 'Scalable MVC/MVT architecture, ORM data queries, secure authentication, and admin panel.' },
      { name: 'React', level: 'Component Architecture', progress: 88, icon: 'Layers', description: 'Functional components, hooks, reactive state workflows, and fast virtual DOM.' },
      { name: 'Responsive web design', level: 'Cross-Device Mastery', progress: 92, icon: 'Smartphone', description: 'Mobile-first layouts, adaptive viewports, touch optimizations, and fluid typography.' },
      { name: 'REST API fundamentals', level: 'Robust Endpoints', progress: 86, icon: 'Share2', description: 'JSON serialization, HTTP status conventions, stateless tokens, and endpoint documentation.' }
    ]
  },
  databaseAndTools: {
    categoryTitle: 'Database and Tools',
    subtitle: 'Data persistence, version control, and development environments',
    color: '#10b981',
    items: [
      { name: 'SQL fundamentals', level: 'Structured Queries', progress: 82, icon: 'Database', description: 'Relational data modeling, table normalization, JOIN operations, and parameterized statements.' },
      { name: 'Git and GitHub', level: 'Version Control', progress: 88, icon: 'GitBranch', description: 'Branch management, pull requests, commit hygiene, and collaborative code reviews.' },
      { name: 'VS Code', level: 'Primary IDE', progress: 92, icon: 'Laptop', description: 'Configured workflows, linters, Python & React debugging, and integrated terminal extensions.' },
      { name: 'PostgreSQL & MySQL', level: 'Relational DBMS', progress: 80, icon: 'HardDrive', description: 'Relational databases applied per project needs, schema constraints, and transactional consistency.' }
    ]
  }
};

// Featured Projects: Strict compliance with prompt requirements
export const featuredProjects = [
  {
    id: 'password-checker',
    number: '01',
    title: 'Password Generation and Strength Checker',
    category: 'Cybersecurity',
    tag: 'CRYPTOGRAPHIC TOOL',
    badge: 'SECURITY UTILITY',
    featured: true,
    thumbnail: 'password',
    shortDescription: 'Generates cryptographically secure, customizable passwords and evaluates password entropy, character variance, and brute-force resistance in real-time.',
    tech: ['Python', 'Entropy Algorithm', 'String Handling', 'Randomization', 'React GUI'],
    githubLink: 'https://github.com/nithish-k06',
    demoLink: '#projects',
    overview: 'Developed as a security utility to combat weak credential patterns. Utilizes Python randomization and string handling concepts to generate unpredictable passphrases and calculates Shannon bit-entropy to give instant security grading.',
    keyFeatures: [
      'Generates configurable passwords (length, numbers, uppercase, special characters)',
      'Analyzes entropy and crack-time resistance against brute-force attacks',
      'Demonstrates Python randomization logic and secure string handling',
      'Zero server-side persistence — executes entirely in memory for privacy',
      'Live interactive tester with instant visual strength feedback'
    ],
    architecture: 'Modular Python logic translated into high-performance client module. Entropy evaluated via logarithmic character space calculations: E = L * log2(R).',
    isConcept: false
  },
  {
    id: 'tn-sports',
    number: '02',
    title: 'Tamil Nadu Sports Development Platform',
    category: 'Web Development',
    tag: 'GOVERNMENT ARCHITECTURE',
    badge: 'FLAGSHIP PROJECT',
    featured: true,
    thumbnail: 'sports',
    shortDescription: 'Full-stack sports platform built for athletes, sports clubs, tournaments, and district-level sports administration across all 38 districts of Tamil Nadu.',
    tech: ['Django', 'React', 'REST API', 'PostgreSQL', 'Tailwind CSS'],
    githubLink: 'https://github.com/nithish-k06',
    demoLink: '#projects',
    overview: 'Designed to streamline athletic administration across Tamil Nadu. Features athlete registration, verified profiles, district-based information filtering, club directories, and administrative dashboards.',
    keyFeatures: [
      'Athlete digital registration & verification workflow',
      'District-level sports administration for 38 Tamil Nadu districts',
      'Sports club and certified coach enrollment directory',
      'Interactive district data visualization and analytics',
      'Secure Django REST Framework backend with PostgreSQL database'
    ],
    architecture: 'Decoupled modern architecture with Django backend serving secure RESTful JSON APIs, connected to a responsive React frontend with interactive district filtering.',
    isConcept: false
  },
  {
    id: 'ai-career-counselling',
    number: '03',
    title: 'AI-Enabled Career Counselling & Family Decision-Support Platform',
    category: 'AI',
    tag: 'CONCEPT / PROTOTYPE',
    badge: 'INNOVATION CONCEPT',
    featured: true,
    thumbnail: 'career',
    shortDescription: 'A visionary concept platform designed to help vocational learners and families explore personalized education pathways and career opportunities through guided data insights.',
    tech: ['AI Concept', 'React Prototype', 'Decision Trees', 'Data Modeling', 'Python'],
    githubLink: 'https://github.com/nithish-k06',
    demoLink: '#projects',
    overview: 'A conceptual prototype addressing career discovery in vocational and regional education. Evaluates how algorithmic matching and accessible family-friendly dashboards can demystify career paths.',
    keyFeatures: [
      'Exploration of vocational education streams and industry pathways',
      'Family decision-support matrix comparing skill investments and career longevity',
      'Multi-variable decision support algorithm concept',
      'Accessible, multilingual-ready interface prototype designed for students and parents',
      'Clear architecture mapping for future AI inference integration'
    ],
    architecture: 'Interactive React prototype demonstrating user journey flows, decision question trees, and career recommendation layouts.',
    isConcept: true
  }
];

// Education & Certifications Timeline
export const educationTimeline = [
  {
    type: 'EDUCATION',
    period: '2024 – 2028 (Expected)',
    degree: 'B.E. Information Technology',
    institution: 'Annamalai University, Faculty of Engineering and Technology',
    location: 'Chidambaram, Tamil Nadu, India',
    description: 'Bachelor of Engineering program covering Computer Networks, Data Structures, Operating Systems, Database Management Systems, Web Technology, and Information Security principles.',
    status: 'Currently Pursuing'
  },
  {
    type: 'INTERNSHIP',
    period: 'Practical Training',
    degree: 'Software Trainee / Intern',
    institution: 'TVK Technologies',
    location: 'Tamil Nadu, India',
    description: 'Hands-on exposure to practical software development workflows, technical problem-solving, application debugging, and modern web technologies.',
    status: 'Completed'
  },
  {
    type: 'EDUCATION',
    period: 'Completed 2024',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Kongu Matric Hr Sec School',
    location: 'Tamil Nadu, India',
    description: 'Higher secondary schooling with strong focus in Mathematics, Physics, Chemistry, and Computer Science fundamentals.',
    status: 'Completed'
  },
  {
    type: 'EDUCATION',
    period: 'Completed 2022',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Kongu Matric Hr Sec School',
    location: 'Tamil Nadu, India',
    description: 'Secondary education with consistent academic record and early enthusiasm for computers and technology.',
    status: 'Completed'
  }
];
