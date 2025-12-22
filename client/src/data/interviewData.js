export const interviewQuestions = {
  // --- SUB-DOMAINS FOR TECHNICAL ---
  "Web Development": [
    { id: 1, q: "What is the difference between localStorage and sessionStorage?", options: ["Storage limit", "Data expiration", "Data format", "Access scope"], answer: "Data expiration", explanation: "sessionStorage data is cleared when the page session ends. localStorage has no expiration time." },
    { id: 2, q: "What does CSS 'box-sizing: border-box' do?", options: ["Adds a border", "Includes padding/border in width", "Removes margins", "Nothing"], answer: "Includes padding/border in width", explanation: "It forces the browser to render the box with the specified width and height, placing padding and border inside the box." }
  ],
  "Backend Development": [
    { id: 1, q: "What is the purpose of middleware in Express?", options: ["Database connection", "Request processing", "Styling", "Testing"], answer: "Request processing", explanation: "Middleware functions have access to the request/response objects and can modify them or end the cycle." }
  ],
  "Databases": [
    { id: 1, q: "ACID properties stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Idempotency, Data", "None", "All"], answer: "Atomicity, Consistency, Isolation, Durability", explanation: "These properties guarantee that database transactions are processed reliably." }
  ],
  // ... Add dummy data for Cloud, System Design, Testing similarly

  // --- MAIN CATEGORIES ---
  "Behavioral": [
    { id: 1, q: "Tell me about a time you failed.", options: ["Blame others", "Describe failure & learning", "Say you never fail", "Skip question"], answer: "Describe failure & learning", explanation: "Employers want to see self-awareness, accountability, and a growth mindset." }
  ],
  "HR": [
    { id: 1, q: "Why do you want to join us?", options: ["Money", "Culture & Mission", "Short commute", "No other options"], answer: "Culture & Mission", explanation: "Align your personal goals with the company's vision." }
  ]
};

// Data for the Technical Domains Grid UI
export const technicalDomains = [
  { id: 'Web Development', icon: '🌐', desc: 'HTML, CSS, JS, React' },
  { id: 'Backend Development', icon: '🔙', desc: 'Node, Express, Auth' },
  { id: 'Programming Languages', icon: '💻', desc: 'Python, Java, C++' },
  { id: 'Databases', icon: '🗄️', desc: 'SQL, MongoDB' },
  { id: 'System Design', icon: '🏗️', desc: 'Scalability, Load Balancing' },
  { id: 'Cloud & DevOps', icon: '☁️', desc: 'AWS, CI/CD, Docker' },
  { id: 'Testing', icon: '✅', desc: 'Manual, Automation, Jest' }
];

export const salaryBaseData = {
  "Frontend Developer": { base: 60000, multiplier: 5000 },
  "Backend Developer": { base: 65000, multiplier: 6000 },
  "Full Stack Developer": { base: 70000, multiplier: 7000 },
  "UI/UX Designer": { base: 55000, multiplier: 4500 },
  "DevOps Engineer": { base: 75000, multiplier: 6500 }
};