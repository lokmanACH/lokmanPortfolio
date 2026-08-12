import avatar2 from "@/assets/avatar2.png";
import aiPlatform from "@/assets/project-ai-platform.jpg";
import analytics from "@/assets/project-analytics.jpg";
import commerce from "@/assets/project-commerce.jpg";
import devtool from "@/assets/project-devtool.jpg";
import diplomaMaster from "@/assets/diploma-master.jpg";
import diplomaBachelor from "@/assets/diploma-bachelor.jpg";
import certAws from "@/assets/AWS_CERT.png";

import certMeta from "@/assets/cert-meta.jpg";
import googleIt from "@/assets/Google_IT.png";
import certML from "@/assets/ML_CERT.png"
export const profile = {
  name: "Loukmene Elhakim Achouche",
  shortName: "Loukmene",
  role: "Software Engineer",
  tagline:
    "I build modern, scalable, and intelligent software experiences that solve real world problems.",
  availability: "Available for opportunities",
  location: "Constantine, Algeria",
  email: "lokmanelhakimachouche0@gmail.com",
  phone: "+213 778603762",
  github: "https://github.com/lokmanACH",
  linkedin: "https://linkedin.com/in/lokman-elhakim-achouche-9a8189327",
  /** Use the profile photo from src/assets. */
  photo: avatar2,
  /** Place your CV at public/cv.pdf (or change this path). */
  cvUrl: "/cv.pdf",
  about: [
    "I'm a Software Engineer with a background in IT and Data Science, focused on building reliable, scalable and user friendly software systems.",
    "I enjoy combining software engineering, data and intelligent technologies to solve real world problems and turn ideas into useful products.",
  ],
};
export const whatIDo = [
  {
    title: "Software Engineering",
    description:
      "Designing and building scalable, maintainable software with clean architecture and modern development practices.",
    icon: "Code2",
  },
  {
    title: "IT & Systems",
    description:
      "Working with operating systems, networks, cloud infrastructure, troubleshooting and reliable IT environments.",
    icon: "Server",
  },
  {
    title: "Data Science",
    description:
      "Analyzing data, building machine learning models and transforming data into useful insights and intelligent solutions.",
    icon: "ChartNoAxesCombined",
  },
  {
    title: "AI & Intelligent Systems",
    description:
      "Building AI-powered applications, integrating machine learning models and developing intelligent features for real-world products.",
    icon: "BrainCircuit",
  },
];

export const education = [
  {
    degree: "Master's Degree",
    field: "Data Science & Intelligent Systems",
    school: "University of Constantine 2 - Abdelhamid Mehri",
    start: "2024",
    end: "2026",
    status: "Graduated",
    /** Diploma picture: put the file in src/assets/, import it at the top of
     *  this file (e.g. import masterDiploma from "@/assets/master-diploma.jpg")
     *  and set image: masterDiploma. Leave null to hide. */
    image: diplomaMaster,
    description:
      "Advanced coursework in machine learning, distributed data processing and intelligent systems, with a thesis on applied deep learning.",
  },
  {
    degree: "Bachelor's Degree",
    field: "Information Technology (IT)",
    school: "University of Constantine 2 - Abdelhamid Mehri",
    start: "2021",
    end: "2024",
    status: "Graduated",
    image: diplomaBachelor,
    description:
      "Strong foundation in software development, databases, operating systems, networking and IT systems, with practical experience building software solutions.",
  },
];

export const certificates = [
  {
    title: "Google IT Support Professional Certificate",
    organization: "Google",
    date: "2024",
    credentialId: "9YRL3U4YHXNE",
    category: "Information Technology",
    skills: [
      "Technical Support",
      "IT Support",
      "Desktop Support",
      "Help Desk Support",
      "Computer Networking",
      "Network Support",
      "Hardware Troubleshooting",
      "Computer Hardware",
      "Software Installation",
      "Package and Software Management",
      "Operating Systems",
      "Computer Systems",
      "Technical Documentation",
      "Technical Writing",
      "End User Training and Support",
      "Customer Support",
      "System Support",
      "Information Technology",
    ],
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/9YRL3U4YHXNE",
    image: googleIt,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2025",
    credentialId: "AWS-CCP-000000",
    category: "Cloud",
    

    skills: ["AWS", "Cloud Architecture", "Security", "AWS Core Services", "AWS Pricing"],
    url: "https://www.credly.com/badges/ede2461f-ba86-4908-b9e0-3e2183d7ce11/print",
    image: certAws,
  },
  {
    title: "Machine Learning Specialization",
    organization: "DeepLearning.AI",
    date: "2025",
    credentialId: "AZIS1ZQ1U772",
    category: "AI & Data",
    skills: ["Python", "Supervised Learning", "Neural Networks"],
    url: "https://www.coursera.org/account/accomplishments/specialization/AZIS1ZQ1U772",
    image: certML,
  }
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Company Name",
    type: "Full-time",
    location: "Remote",
    start: "2025",
    end: "Present",
    description:
      "Design and ship full-stack features for a production platform used daily by thousands of users.",
    responsibilities: [
      "Led the migration of core services to a modular, well-tested architecture.",
      "Built reusable UI systems that cut feature delivery time significantly.",
      "Collaborated with product and design to define scope and technical trade-offs.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Company Name",
    type: "Internship",
    location: "On-site",
    start: "2024",
    end: "2025",
    description:
      "Developed internal tools and data dashboards that supported operational decision-making.",
    responsibilities: [
      "Implemented REST APIs and integrated third-party services.",
      "Created analytics dashboards with real-time data visualisation.",
    ],
    technologies: ["JavaScript", "Express", "MongoDB", "Tailwind CSS"],
  },
];

export const projects = [
  {
    name: "AI Educational Platform",
    description:
      "An intelligent educational platform that uses AI to personalise learning paths, generate exercises and track student progress in real time.",
    image: aiPlatform,
    technologies: ["React", "Node.js", "PostgreSQL", "AI"],
    github: "https://github.com/yourusername",
    demo: "https://example.com",
    featured: true,
  },
  {
    name: "Realtime Analytics Suite",
    description:
      "A dashboard suite streaming millions of events into clear, actionable insights with sub-second queries.",
    image: analytics,
    technologies: ["TypeScript", "Express", "Redis", "Charts"],
    github: "https://github.com/yourusername",
    demo: "https://example.com",
    featured: true,
  },
  {
    name: "Commerce Starter Kit",
    description:
      "A modular e-commerce foundation with cart, checkout flow and admin tooling.",
    image: commerce,
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername",
    demo: "https://example.com",
    featured: false,
  },
  {
    name: "DevFlow CLI",
    description:
      "A developer productivity CLI that automates project scaffolding and release workflows.",
    image: devtool,
    technologies: ["Node.js", "CLI", "Git"],
    github: "https://github.com/yourusername",
    demo: "",
    featured: false,
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "LayoutDashboard",
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["Node.js", "Express", "REST APIs", "FastAPI", "PHP"],
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "ORACLE", "MariaDB"],
  },
  {
    category: "AI & Data",
    icon: "BrainCircuit",
    items: ["Python", "Machine Learning", "Deep Learning", "Data Science"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "AWS", "Docker", "Kubernetes", "Linux", "Power BI"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
