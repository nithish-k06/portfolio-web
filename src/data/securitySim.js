export const initialSecurityStats = {
  status: 'SECURE',
  threatLevel: 'LOW',
  monitoredEvents: 1284,
  alerts: 7,
  systemsOnline: 12,
  cpuUsage: 14,
  memoryUsage: 38,
  networkIn: '1.2 MB/s',
  networkOut: '0.4 MB/s'
};

export const sampleSecurityLogs = [
  { id: 1, timestamp: '10:48:12', level: 'INFO', category: 'AUTH', message: 'JWT Session refresh token issued for admin context' },
  { id: 2, timestamp: '10:48:09', level: 'INFO', category: 'FIREWALL', message: 'TLS 1.3 handshake completed on port 443' },
  { id: 3, timestamp: '10:47:55', level: 'WARN', category: 'RATE_LIMIT', message: '3 failed login attempts flagged from IP 192.168.1.104' },
  { id: 4, timestamp: '10:47:40', level: 'INFO', category: 'MONITOR', message: 'System heartbeat pulse OK. 12/12 microservices active' },
  { id: 5, timestamp: '10:47:18', level: 'SUCCESS', category: 'WAF', message: 'SQL injection payload blocked in /api/v1/search endpoint' },
  { id: 6, timestamp: '10:46:50', level: 'INFO', category: 'AUDIT', message: 'PostgreSQL database query execution time: 14ms' },
  { id: 7, timestamp: '10:46:22', level: 'WARN', category: 'SECURITY', message: 'Script tags stripped in user input string' },
  { id: 8, timestamp: '10:45:59', level: 'INFO', category: 'NET', message: 'Zero unexpected open ports detected during interface scan' }
];

export const securityLabModules = [
  {
    id: 'web-sec',
    title: 'Web Application Security',
    badge: 'OWASP / DEFENSE',
    icon: 'ShieldCheck',
    description: 'Analyzing and mitigating common web vulnerabilities such as SQL injection, Cross-Site Scripting (XSS), and Broken Access Control.',
    topics: ['SQL Injection Prevention', 'XSS Sanitization', 'CSRF Protection', 'Secure Headers (HSTS, CSP)'],
    codeSnippet: `// Django Secure Query Pattern
// BAD (Vulnerable to SQLi):
// User.objects.raw(f"SELECT * FROM users WHERE username = '{username}'")

// GOOD (Parameterized ORM Query):
const user = await User.objects.filter(username=username).first();
// ORM automatically escapes special characters to mitigate injection.`
  },
  {
    id: 'net-sec',
    title: 'Network Security Fundamentals',
    badge: 'TRAFFIC / PROTOCOLS',
    icon: 'Network',
    description: 'Understanding TCP/IP handshakes, port listening states, subnet routing, firewall filtering, and packet inspection fundamentals.',
    topics: ['TCP/IP Protocol Stack', 'Port Scanning Analysis', 'Firewall Rules & Policies', 'Wireshark Packet Analysis'],
    codeSnippet: `# Linux UFW Firewall Rule Setup Example
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp comment 'SSH Secure Access'
sudo ufw allow 443/tcp comment 'HTTPS Encrypted Web Traffic'
sudo ufw enable`
  },
  {
    id: 'threat-det',
    title: 'Threat Detection & Logs',
    badge: 'SIEM / LOGS',
    icon: 'Terminal',
    description: 'Parsing server access logs, auth logs, and system audit trails to identify brute force patterns and unauthorized privilege escalation.',
    topics: ['Log Pattern Recognition', 'Failed Auth Correlation', 'SIEM Alert Rules', 'Anomaly Scoring'],
    codeSnippet: `# Python Auth Log Failed Login Counter Script
import re
from collections import Counter

log_data = open('/var/log/auth.log').read()
failed_ips = re.findall(r'Failed password for.*from (\\d+\\.\\d+\\.\\d+\\.\\d+)', log_data)
ip_counts = Counter(failed_ips)

for ip, count in ip_counts.items():
    if count > 5:
        print(f"[ALERT] Flagged IP {ip} with {count} failed login attempts")`
  },
  {
    id: 'secure-dev',
    title: 'Secure Development (SDLC)',
    badge: 'DEVSECOPS',
    icon: 'Lock',
    description: 'Embedding security into every stage of software engineering: dependency vulnerability scanning, secrets management, and safe state handling.',
    topics: ['Secrets Management (.env)', 'Dependency Vulnerability Audits', 'Principle of Least Privilege', 'Output Encoding'],
    codeSnippet: `// JWT Verification with Expiration & Issuer Validation
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY, {
      algorithms: ['HS256'],
      issuer: 'nithish-secure-auth'
    });
  } catch (err) {
    console.error("Token verification failed:", err.message);
    return null;
  }
};`
  },
  {
    id: 'ai-sec',
    title: 'AI + Cybersecurity Integration',
    badge: 'EMERGING TECH',
    icon: 'Cpu',
    description: 'Exploring how machine learning algorithms aid in automated anomaly detection and evaluating LLM application security risks (Prompt Injection).',
    topics: ['ML Anomaly Detection', 'Prompt Injection Defense', 'Automated Vulnerability Triage', 'Log Classification Models'],
    codeSnippet: `# Python Scikit-Learn Isolation Forest for Log Anomaly Detection
from sklearn.ensemble import IsolationForest
import numpy as np

# Feature vector: [request_length, frequency_per_sec, status_code]
features = np.array([[240, 1.2, 200], [18000, 45.0, 500], [210, 0.8, 200]])
clf = IsolationForest(contamination=0.1, random_state=42)
clf.fit(features)

preds = clf.predict(features) # -1 indicates anomaly
print("Anomaly Indicators:", preds)`
  }
];
