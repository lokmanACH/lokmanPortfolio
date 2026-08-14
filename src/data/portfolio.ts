import avatar2 from "@/assets/avatar2.png";
import studentManagement from "@/assets/student_managment.jpg";

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
    /** Diploma picture: put the file in src/assets/, import it at the top of
     *  this file (e.g. import masterDiploma from "@/assets/master-diploma.jpg")
     *  and set image: masterDiploma. Leave null to hide. */
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

    skills: [
      "AWS",
      "Cloud Architecture",
      "Security",
      "AWS Core Services",
      "AWS Pricing",
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
    skills: ["Python", "Supervised Learning", "Neural Networks"],
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
    name: "Student Management & Academic Orientation System",

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
      "Kubernetes",
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
