// Single source of truth for all resume content.
// Edit this file to update the whole site.

export const profile = {
  name: "Farida Aghayeva",
  role: "Full-Stack Developer",
  location: "Budapest, Hungary",
  email: "farida.agayeva20@gmail.com",
  phone: "+36-20-441-00-22",
  linkedin: "https://www.linkedin.com/in/farida-aghayeva-553972248/",
  github: "https://github.com/FaridaAghayeva",
  summary:
    "Full-stack developer building with Vue, React, Laravel and the MERN stack — focused on functionality, security and user experience. Currently a full-time Master's student in Computer Science at Óbuda University, deepening my knowledge of software engineering and system architecture, with the goal of building innovative solutions inside strong, collaborative teams.",
};

// The stack that should be instantly, visually recognizable — these drive
// the floating chips on the homepage and the featured grid on /about.
export const featuredStack = [
  { name: "Vue.js", key: "vue" },
  { name: "React.js", key: "react" },
  { name: "Laravel", key: "laravel" },
  { name: "MERN", key: "node" },
];

export const skills = {
  Frontend: [
    { name: "React.js", key: "react" },
    { name: "Next.js", key: "react" },
    { name: "Vue.js", key: "vue" },
    { name: "Nuxt.js", key: "vue" },
    { name: "Pinia", key: "vue" },
    { name: "Redux", key: "react" },
    { name: "TypeScript", key: "ts" },
    { name: "JavaScript", key: "ts" },
    { name: "HTML5", key: "laravel" },
    { name: "CSS3 / SCSS", key: "laravel" },
    { name: "Tailwind", key: "vue" },
  ],
  Backend: [
    { name: "Node.js", key: "node" },
    { name: "Express.js", key: "node" },
    { name: "PHP", key: "laravel" },
    { name: "Laravel", key: "laravel" },
  ],
  Databases: [
    { name: "PostgreSQL", key: "ts" },
    { name: "MongoDB", key: "mongo" },
    { name: "MySQL", key: "laravel" },
    { name: "Supabase", key: "vue" },
    { name: "Firebase", key: "node" },
  ],
  Tools: [
    { name: "Git", key: "ts" },
    { name: "GitHub", key: "ts" },
    { name: "Docker", key: "react" },
    { name: "Postman", key: "laravel" },
    { name: "Vite", key: "vue" },
    { name: "Linux", key: "node" },
  ],
  Practices: [
    { name: "UI/UX Principles", key: "vue" },
    { name: "Responsive Design", key: "react" },
    { name: "API Integration", key: "node" },
  ],
};

export const experience = [
  {
    role: "Frontend Developer",
    company: "Irshi Co.",
    period: "Nov 2025 — Current",
    current: true,
    points: [
      "Developed and maintained responsive web applications using Vue 3 and Quasar, implementing features based on design requirements and user needs.",
      "Collaborated closely with designers and backend developers to integrate APIs and deliver cross-browser optimized interfaces.",
    ],
    stack: ["vue"],
  },
  {
    role: "Frontend Developer",
    company: "AZAI TECH",
    period: "May 2025 — Aug 2025",
    points: [
      "Built responsive interfaces using Vue.js and integrated APIs.",
      "Delivered cross-browser optimized UIs in collaboration with designers and backend developers.",
      "Focused on reusable components, SCSS structuring and performance tuning.",
    ],
    stack: ["vue"],
  },
  {
    role: "Junior Full-Stack Web Developer",
    company: "PRODATA",
    period: "Oct 2024 — May 2025",
    points: [
      "Developed full-stack apps using Laravel, Nuxt.js and Vue.js.",
      "Used Docker for containerization and deployment.",
      "Participated in design discussions, improved performance, and tested with Postman and GitLab.",
      "Worked and shipped products inside a collaborative team.",
    ],
    stack: ["laravel", "vue"],
  },
  {
    role: "Web Developer (Intern → Junior)",
    company: "ENGIN LTD",
    period: "Jul 2023 — Oct 2024",
    points: [
      "Built websites using React, the MERN stack and Laravel.",
      "Ensured responsive design and modular SCSS across devices.",
      "Maintained backend APIs and optimized the codebase with best practices.",
    ],
    stack: ["react", "node", "laravel"],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science Engineering",
    school: "Óbuda University",
    period: "Sep 2025 — Jul 2027",
    current: true,
    note: "Deepening knowledge of software engineering principles and system architecture.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Khazar University",
    period: "Sep 2020 — Jun 2024",
  },
  {
    degree: "Frontend Development",
    school: "Matrix Academy",
    period: "Jan 2024 — Aug 2024",
  },
  {
    degree: "Full-Stack Web Development",
    school: "Technest / IATC",
    period: "Dec 2022 — Jul 2023",
  },
];

export const awards = [
  {
    title: "Stipendium Hungaricum Scholarship",
    org: "Tempus Public Foundation",
    year: "2025",
    type: "scholarship",
  },
  {
    title: "British Council Women in STEM Scholarship",
    org: "Cardiff University",
    year: "2025",
    type: "scholarship",
  },
  {
    title: "Pasha Hackathon Finalist",
    org: "Pasha Holding",
    year: "2025",
    type: "award",
  },
  {
    title: "Girls Code Scholarship",
    org: "Matrix Academy",
    year: "2023",
    type: "scholarship",
  },
  {
    title: "Technest Full-Stack Scholarship",
    org: "IATC",
    year: "2022",
    type: "scholarship",
  },
];

export const languages = [
  { name: "English", note: "IELTS 7" },
  { name: "Azerbaijani", note: "Native" },
  { name: "Turkish", note: "" },
  { name: "German", note: "" },
  { name: "Korean", note: "" },
];

// Placeholder projects — swap in real repos/case studies from her GitHub.
export const projects = [
  {
    title: "Nuxt + Laravel Commerce Dashboard",
    description:
      "Full-stack admin dashboard built at PRODATA: Nuxt.js frontend, Laravel API, Dockerized for deployment, tested with Postman across environments.",
    stack: ["vue", "laravel", "node"],
    link: "https://github.com/FaridaAghayeva",
  },
  {
    title: "Vue 3 + Quasar Product Suite",
    description:
      "Responsive, cross-browser web application at Irshi Co. built with Vue 3 and Quasar, integrating REST APIs delivered by the backend team.",
    stack: ["vue"],
    link: "https://github.com/FaridaAghayeva",
  },
  {
    title: "MERN Portfolio & API Layer",
    description:
      "React front-end paired with a Node/Express/MongoDB backend at ENGIN LTD, with modular SCSS and a maintained, optimized API layer.",
    stack: ["react", "node", "mongo"],
    link: "https://github.com/FaridaAghayeva",
  },
];

export const socials = [
  { name: "GitHub", handle: "@FaridaAghayeva", url: "https://github.com/FaridaAghayeva", key: "github" },
  {
    name: "LinkedIn",
    handle: "farida-aghayeva",
    url: "https://www.linkedin.com/in/farida-aghayeva-553972248/",
    key: "linkedin",
  },
  { name: "Email", handle: "farida.agayeva20@gmail.com", url: "mailto:farida.agayeva20@gmail.com", key: "email" },
];
