/*
  Portfolio content source
  ------------------------
  Replace the example entries with your verified work before publishing. Do not
  include flags, credentials, private targets, client details, or confidential reports.
*/
window.PORTFOLIO_DATA = {
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username/"
  },
  projects: [
    {
      category: "web",
      label: "Web security lab",
      title: "Web Application Testing Practice",
      description: "A structured, authorised practice environment for mapping attack surfaces, validating common web vulnerabilities, and recording remediation-focused observations.",
      tags: ["HTTP", "OWASP", "Burp Suite"],
      status: "Lab in progress",
      link: "#notes"
    },
    {
      category: "network",
      label: "Network fundamentals",
      title: "Network Reconnaissance Methodology",
      description: "A repeatable workflow for asset discovery and service enumeration in deliberately vulnerable lab networks — built around careful scoping and evidence collection.",
      tags: ["Nmap", "TCP/IP", "Enumeration"],
      status: "Learning project",
      link: "#notes"
    },
    {
      category: "automation",
      label: "Scripting practice",
      title: "Security Workflow Automation",
      description: "Small scripts and templates designed to reduce repetitive lab tasks, organise findings, and reinforce reproducible testing habits.",
      tags: ["Python", "Bash", "Reporting"],
      status: "In development",
      link: "#notes"
    },
    {
      category: "web",
      label: "Secure development",
      title: "OWASP Top 10 Study Notes",
      description: "A practical study collection connecting common web risks to observable application behaviour, testing approaches, and defensive controls.",
      tags: ["AppSec", "Threat modeling", "Notes"],
      status: "Study collection",
      link: "#notes"
    }
  ],
  notes: [
    { number: "01", type: "Methodology", title: "How I approach an authorised web-security lab", description: "Scope first, then map, test, validate, and communicate." },
    { number: "02", type: "Fundamentals", title: "A practical mental model for network enumeration", description: "Turning services, ports, and protocols into useful hypotheses." },
    { number: "03", type: "Practice", title: "What good security notes look like", description: "Evidence, impact, reproducibility, and restraint — without sensitive details." }
  ],
  learning: [
    { number: "01", title: "Web application security", detail: "Studying authentication, access control, input handling, and modern application attack surfaces." },
    { number: "02", title: "Offensive-security foundations", detail: "Building a disciplined workflow for reconnaissance, enumeration, exploitation concepts, and reporting." },
    { number: "03", title: "Scripting & automation", detail: "Using Python and shell tooling to understand systems and streamline repeatable tasks." }
  ],
  toolkit: [
    { title: "Foundations", items: ["Linux", "Windows", "Networking", "HTTP / DNS"] },
    { title: "Security practice", items: ["Nmap", "Burp Suite", "Wireshark", "OWASP guidance"] },
    { title: "Build & automate", items: ["Python", "Bash", "Git", "Markdown"] },
    { title: "Professional skills", items: ["Technical writing", "Risk thinking", "Scope discipline", "Continuous learning"] }
  ],
  timeline: [
    { period: "Now", title: "Build a verifiable body of work", detail: "Publishing safe, high-level summaries of authorised labs and learning projects." },
    { period: "Next", title: "Deepen practical specialisation", detail: "Expanding web-security testing, scripting, and security reporting capability." },
    { period: "Ongoing", title: "Document what matters", detail: "Maintaining clear notes, an honest skills inventory, and evidence of growth." }
  ]
};
