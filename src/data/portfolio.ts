import avatar2 from "@/assets/avatar2.png";
import studentManagement from "@/assets/student_managment.jpg";
import easa from "@/assets/cover.jpg";
import pram from "@/assets/PRAM.jpeg";
import wolfBook from "@/assets/the_wolf_background.png"

import certAws from "@/assets/AWS_CERT.png";
import googleIt from "@/assets/Google_IT.png";
import certML from "@/assets/ML_CERT.png";
export const profile = {
  name: "Loukmene Elhakim Achouche",
  shortName: "Loukmene",
  role: "Computer Scientist",
  tagline:
    "Computer Scientist working across IT, Software Engineering, Data Science, and AI to build modern and intelligent solutions for real-world problems.",
  availability: "Available for opportunities",
  location: "Constantine, Algeria",
  email: "lokmanelhakimachouche0@gmail.com",
  phone: "+213778603762",
  github: "https://github.com/lokmanACH",
  linkedin: "https://linkedin.com/in/lokman-elhakim-achouche-9a8189327",
  photo: avatar2,
  cvUrl: "/cv.pdf",
  about: [
    "I'm a Computer Scientist with a multidisciplinary background in IT, Software Engineering, Data Science, and Artificial Intelligence.",
    "I build reliable and scalable software systems, work with data driven technologies, and develop intelligent solutions that transform ideas into practical products.",
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

    image: null,
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
    image: null,
    description:
      "Strong foundation in software development, databases, operating systems, networking and IT systems, with practical experience building software solutions.",
  },
];

export const certificates = [
  {
    title: "Google IT Support Professional Certificate",
    organization: "Google",
    date: "2026",
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
    credentialId: "ede2461f-ba86-4908-b9e0-3e2183d7ce11",
    category: "Cloud",

    skills: [
      "AWS",
      "Cloud Computing",
      "AWS Core Services",
      "Cloud Architecture",
      "Cloud Security",
      "AWS IAM",
      "AWS Networking",
      "AWS Storage",
      "AWS Compute",
      "AWS Databases",
      "AWS Monitoring",
      "Cloud Economics",
      "AWS Pricing",
      "AWS Billing",
      "AWS Shared Responsibility Model",
      "High Availability",
      "Scalability",
    ],
    url: "https://www.credly.com/badges/ede2461f-ba86-4908-b9e0-3e2183d7ce11/print",
    image: certAws,
  },
  {
    title: "Machine Learning Specialization",
    organization: "DeepLearning.AI",
    date: "2025",
    credentialId: "AZIS1ZQ1U772",
    category: "AI & Data",
    skills: [
      "Python",
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression",
      "Classification",
      "Neural Networks",
      "Decision Trees",
      "Clustering",
      "Anomaly Detection",
      "Recommender Systems",
      "Feature Engineering",
      "Model Evaluation",
      "Data Preprocessing",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
    ],
    url: "https://www.coursera.org/account/accomplishments/specialization/AZIS1ZQ1U772",
    image: certML,
  },
];

export const experience = [
  {
    title: "Tutor",
    company: "SoCode School",
    type: "Part-time",
    location: "On-site",
    start: "2026",
    end: "Present",
    description:
      "Deliver practical technical training in software development, databases, data analytics, and IT technologies.",
    responsibilities: [
      "Teach Python programming, backend development, MongoDB, and PostgreSQL.",
      "Guide students through practical projects, exercises, and real-world development workflows.",
      "Teach data analysis and business intelligence using Power BI.",
      "Explain software engineering concepts and help students build technical problem-solving skills.",
    ],
    technologies: [
      "Python",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Power BI",
    ],
  },
  {
    title: "Freelance Software Engineer",
    company: "Self-Employed",
    type: "Freelance",
    location: "Remote",
    start: "2024",
    end: "Present",
    description:
      "Design and develop software solutions for clients, including SaaS platforms, full-stack web applications, data solutions, and IT systems.",
    responsibilities: [
      "Build SaaS platforms and full-stack applications using MERN, FARM, and LAMP stacks.",
      "Develop web and desktop applications using JavaScript, TypeScript, Python, and modern frameworks.",
      "Design backend services, APIs, databases, and scalable application architectures.",
      "Perform data analysis and develop data-driven solutions using appropriate tools and technologies.",
      "Provide IT solutions and technical consulting based on project requirements.",
      "Apply DevOps practices to improve development, deployment, automation, and application reliability.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "JAVA",
      "Spring BOOT",
      "FastAPI",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "Docker",
      "DevOps",
      "AWS",
    ],
  },
];

export const projects = [
  {
    name: "Enterprise AI Support Agent (EASA)",

    description:
      "An open-source AI-powered enterprise support platform that allows organizations to upload their documentation and resources, then uses Retrieval-Augmented Generation (RAG) with embeddings and Gemini AI to provide clients with accurate answers based on the organization's own knowledge base.",

    image: easa,

    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "AWS RDS",
      "AWS S3",
      "Gemini API",
      "RAG",
      "Embeddings",
    ],

    github: "https://github.com/lokmanACH/Enterprise_AI_Support_Agent-EASA",

    demo: "https://drive.google.com/file/d/17UIeiiTICq1e1E54q2axOfFxprc56dvv/view?usp=sharing",

    featured: true,
  },
  {
    name: "Production-Ready Authentication Microservice (PRAM)",

    description:
      "A production-style authentication microservice built with Node.js that provides secure user authentication, OTP email verification, JWT-based authorization, RBAC, role and user management, and Redis-based authentication caching. The service is containerized with Docker, deployed behind Nginx with load balancing, connected to AWS RDS PostgreSQL, and monitored using Prometheus, Node Exporter, and Grafana.",

    image: pram,

    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "AWS RDS",
      "Redis",
      "Docker",
      "Nginx",
      "Prometheus",
      "Node Exporter",
      "Grafana",
      "JWT",
      "RBAC",
      "Nodemailer",
    ],

    github:
      "https://github.com/lokmanACH/Production-Ready-Authentication-Microservice_PRAM",

    demo: "https://drive.google.com/file/d/10A3U2vW4CUDOJsHBpjvJ05XY8GG1bLzZ/view?usp=sharing",

    featured: true,
  },
  {
  name: "THE WOLF BOOK 🐺",

  description:
    "An open-source, keyboard-first terminal troubleshooting knowledge base that allows developers to organize technical problems by categories, document how they solved them, and store reusable solution steps and commands. The application uses a simple filesystem and JSON-based storage model and can be distributed and run through Docker with persistent host-mounted data.",

  image: wolfBook,

  technologies: [
    "Python",
    "Textual",
    "JSON",
    "Filesystem Storage",
    "Docker",
  ],

  github: "https://github.com/lokmanACH/HOME-LAB/tree/main/THE_WOLF_BOOK_PROJECT",

  demo: "https://drive.google.com/file/d/19BXAQN8mEqLn6nPX8zYFj5XAu_47ga2H/view?usp=sharing",

  featured: true,
},
  {
    name: "Student Management & Academic Orientation System (SMAOS)",

    description:
      "A comprehensive student management system for managing student records, calculating academic grades, evaluating major eligibility, and automatically ranking students based on their academic performance and the available places in each major.",

    image: studentManagement,

    technologies: ["React.js", "Spring Boot", "MySQL"],

    github: "https://github.com/lokmanACH/student_management",

    demo: "https://drive.google.com/file/d/1lUq6dM7NzT5blYjk2Pb1WcHJuza47IlA/view?usp=sharing",

    featured: true,
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
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "FastAPI",
      "PHP",
      "Java",
      "Spring boot",
    ],
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
    items: [
      "Git",
      "GitHub",
      "AWS",
      "Docker",
      "Nginx",
      "Prometheus",
      "Grafana",
      "Linux",
      "Power BI",
    ],
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
