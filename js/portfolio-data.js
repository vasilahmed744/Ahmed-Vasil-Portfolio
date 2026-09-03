/*
 * AHMED VASIL — PORTFOLIO CONTENT CONFIGURATION
 * =================================================
 * This is the primary source of truth for portfolio CONTENT.
 *
 * CONTENT    → edit this file
 * DESIGN     → index.html + css/styles.css
 * BEHAVIOUR  → js/main.js
 * ASSETS     → assets/
 *
 * Keep all public claims factual. Never add flags, passwords, credentials,
 * private targets, raw scan data, client information, or unreleased solutions.
 */
window.PORTFOLIO_DATA = {
  site: {
    name: "Ahmed Vasil",
    initials: "AV",
    url: "https://vasilahmed744.github.io/Ahmed-Vasil-Portfolio/",
    repository: "https://github.com/vasilahmed744/Ahmed-Vasil-Portfolio",
    basePath: "/Ahmed-Vasil-Portfolio/"
  },
  person: {
    name: "Ahmed Vasil",
    primaryTitle: "Aspiring Penetration Tester",
    targetRoles: ["Penetration Tester", "Red Team Operator"],
    focus: ["Offensive Security", "Penetration Testing", "Red Teaming", "Web Application Security"]
  },
  hero: {
    eyebrow: "Offensive security · practical learning",
    titleLead: "Building practical",
    titleAccent: "offensive-security",
    titleEnd: "experience.",
    summary: "Aspiring penetration tester focused on structured learning, authorised security labs, and responsible offensive-security methodology.",
    primaryAction: { label: "Explore my work", target: "#projects" },
    secondaryAction: { label: "Professional journey", target: "#journey" }
  },
  about: {
    eyebrow: "About me",
    title: "Technical curiosity, applied responsibly.",
    lead: "I am a Computer Science and Engineering diploma graduate focused on building a career in penetration testing and offensive security.",
    paragraphs: [
      "I am developing practical cybersecurity skills through professional training, hands-on security labs, CTF environments, custom projects, and web application security practice.",
      "My learning covers Linux and Windows privilege escalation, Active Directory security, networking, enumeration, and offensive-security methodology. I value building projects and working through labs alongside theoretical knowledge.",
      "My career direction is penetration testing and red-team operations. I aim to approach every environment with clear scope, careful validation, and useful documentation."
    ],
    principles: ["Stay inside scope", "Prove before claiming", "Document with care", "Keep learning publicly"]
  },
  contact: {
    // Leave blank until you have a professional public email. The email action hides automatically.
    email: "",
    professionalEmail: "",
    location: "",
    emailSubject: "Portfolio enquiry"
  },
  social: {
    github: { label: "GitHub", url: "https://github.com/vasilahmed744" },
    linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/ahamad-vasil-205590386" },
    tryHackMe: { label: "TryHackMe", url: "" },
    website: { label: "Website", url: "https://vasilahmed744.github.io/Ahmed-Vasil-Portfolio/" },
    hackTheBox: { label: "Hack The Box", url: "" },
    offsec: { label: "OffSec", url: "" },
    medium: { label: "Medium", url: "" },
    devto: { label: "Dev.to", url: "" },
    x: { label: "X / Twitter", url: "" }
  },
  profileImage: {
    // Set src to "assets/images/profile/ahmed-vasil.webp" after adding your real image.
    // A supplied image is displayed without alteration; this initial avatar is used while empty.
    src: "",
    alt: "Ahmed Vasil",
    fallbackInitials: "AV"
  },
  resume: {
    // Set enabled to true only after adding the real PDF at the path below.
    enabled: false,
    file: "assets/resume/Ahmed-Vasil-Resume.pdf",
    label: "Download resume"
  },
  education: [
    { degree: "Diploma in Computer Science and Engineering", institution: "Sahyadri Polytechnic, Thirthahalli", period: "2023–2026", status: "Completed in 2026", cgpa: "6.27" }
  ],
  training: [
    { name: "Certified Penetration Tester (CPT) training", institution: "RedTeam Hacker Academy, Bengaluru", status: "Currently undergoing training", areas: ["Penetration Testing", "Offensive Security", "Web Application Security", "Linux", "Windows Security", "Networking", "Active Directory", "Enumeration", "Privilege Escalation", "Practical Labs"] },
    { name: "OffSec / PEN-200 learning", institution: "Independent study", status: "Learning / OSCP preparation", areas: ["Penetration Testing Methodology", "Enumeration", "Linux", "Windows", "Privilege Escalation", "Active Directory"] }
  ],
  experience: [
    { role: "Data Science Intern", organization: "Zephyr Technology", period: "January 2026 – April 2026", project: "Intrusion Detection System using Machine Learning", description: "Worked on a machine-learning-based intrusion detection system project during the internship, applying data-science concepts within a cybersecurity context." }
  ],
  projects: [
    {
      id: "adversaryforge", name: "AdversaryForge", category: "offensive-security", categoryLabel: "Offensive security / Red Team", status: "Active · In development", featured: true,
      shortDescription: "An offensive-security project being developed around structured penetration-testing and red-team assessment workflows.",
      fullDescription: "The project explores reconnaissance, enumeration, Linux and Windows privilege escalation, post-exploitation concepts, operator workflows, and assessment methodology. Planned areas are presented as ongoing work rather than completed capabilities.",
      technologies: ["Python", "Linux", "Windows", "Git"], skills: ["Reconnaissance", "Enumeration", "Assessment methodology"], github: "https://github.com/vasilahmed744/AdversaryForge", liveDemo: "", documentation: "", writeup: "", image: "", screenshots: [], date: "2026", visibility: "public"
    },
    {
      id: "ferrow-dynamics", name: "Ferrow Dynamics", category: "security-labs", categoryLabel: "Custom cybersecurity lab / CTF", status: "Hard · Custom lab", featured: true,
      shortDescription: "A custom TryHackMe-style security challenge environment designed to support multi-stage offensive-security learning.",
      fullDescription: "The lab focuses on architecture, challenge design, reconnaissance, service and web enumeration, multiple footholds, Linux access, web exploitation, privilege escalation, and multiple attack paths. Public material intentionally excludes flags, credentials, private keys, and solution details.",
      technologies: ["Linux", "Web Security", "Networking", "Docker"], skills: ["Challenge design", "Enumeration", "Privilege escalation"], github: "", liveDemo: "", documentation: "", writeup: "", image: "", screenshots: [], date: "2026", visibility: "private-development"
    },
    {
      id: "ml-ids", name: "Intrusion Detection System using Machine Learning", category: "security-engineering", categoryLabel: "Cybersecurity / Machine Learning", status: "Internship project", featured: true,
      shortDescription: "A cybersecurity-oriented project exploring the application of data-science techniques to intrusion detection and security analysis.",
      fullDescription: "Completed in the context of a Data Science internship at Zephyr Technology. This portfolio intentionally does not claim specific algorithms, data sets, metrics, or production deployment details.",
      technologies: ["Python", "Machine Learning", "Security Analysis"], skills: ["Data science", "Intrusion detection", "Security context"], github: "", liveDemo: "", documentation: "", writeup: "", image: "", screenshots: [], date: "2026", visibility: "portfolio-summary"
    }
  ],
  skills: {
    "Offensive security": ["Penetration Testing", "Reconnaissance", "Enumeration", "Vulnerability Assessment", "Web Application Security", "Linux Privilege Escalation", "Windows Privilege Escalation", "Active Directory Security", "Post-Exploitation", "CTF / Security Labs"],
    Tools: ["Nmap", "Burp Suite", "Metasploit", "Netcat", "Hydra", "Nikto", "WPScan", "smbclient", "enum4linux-ng", "NetExec", "Evil-WinRM", "curl"],
    "Operating systems": ["Kali Linux", "Linux", "Ubuntu", "Windows"],
    "Networking / services": ["TCP/IP", "HTTP/HTTPS", "DNS", "SMB", "SSH", "FTP", "SMTP", "SNMP", "LDAP"],
    Infrastructure: ["VMware Workstation", "Docker", "Git", "GitHub"],
    "Programming / scripting": ["Python", "Bash", "HTML", "CSS", "JavaScript"]
  },
  labs: [
    { title: "TryHackMe learning", detail: "Linux Fundamentals, Cyber Security 101, CTF challenges, reconnaissance, enumeration, privilege escalation, security labs, and custom room development.", platform: "TryHackMe" },
    { title: "Offensive-security practice", detail: "Authorised labs focused on web application security, Linux and Windows privilege escalation, Active Directory, networking, and API security.", platform: "Practical labs" },
    { title: "Container security exploration", detail: "Learning Docker and container-security fundamentals through controlled environments and documented practice.", platform: "Docker / CTF labs" }
  ],
  platforms: {
    tryHackMe: { enabled: true, profileUrl: "", label: "TryHackMe" },
    offsec: { enabled: true, profileUrl: "", label: "OffSec / PEN-200" }
  },
  certifications: [
    { name: "Cyber Security Foundation & Overview", issuer: "Infosys Springboard", issued: "September 2025", credentialId: "", verificationUrl: "", certificateImage: "", certificatePdf: "" }
  ],
  writeups: [],
  achievements: [],
  availability: { label: "Building practical offensive-security experience", detail: "Open to entry-level opportunities, mentorship, and collaborative learning conversations." },
  navigation: [
    { label: "About", target: "#about" }, { label: "Projects", target: "#projects" }, { label: "Skills", target: "#skills" }, { label: "Journey", target: "#journey" }, { label: "Contact", target: "#contact", cta: true }
  ],
  seo: {
    title: "Ahmed Vasil | Penetration Testing & Offensive Security Portfolio",
    description: "Cybersecurity portfolio of Ahmed Vasil showcasing penetration-testing projects, offensive-security labs, web application security learning, CTF development and practical security work.",
    canonical: "https://vasilahmed744.github.io/Ahmed-Vasil-Portfolio/",
    socialImage: "https://vasilahmed744.github.io/Ahmed-Vasil-Portfolio/assets/og-preview.svg"
  },
  settings: {
    sections: { about: true, projects: true, skills: true, labs: true, journey: true, education: true, training: true, experience: true, certifications: true, writeups: true, achievements: false, contact: true }
  }
};
