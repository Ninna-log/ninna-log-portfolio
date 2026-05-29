export const HERO_CONTENT = "DevOps-oriented Software Engineer with experience building scalable fintech platforms and production microservices. Bridging full-stack development with cloud infrastructure to deliver reliable, observable, and resilient systems.";

export const ABOUT_TEXT = "I'm a Software Engineer based in Buenos Aires, Argentina, passionate about building systems that are both reliable and scalable. My journey started in frontend development—crafting user interfaces with React, Vue, and TypeScript. Over time, I evolved into full-stack and DevOps roles, working on production microservices in high-traffic fintech environments. At Mercado Libre, I led the migration of a legacy Java-based WebView to a modern JavaScript/TypeScript architecture and contributed to centralized abuse prevention platforms. At AstroPay, I worked on core payment microservices—gateway, withdrawal, and purchase flows—integrating external payment providers and using Datadog and Kibana to investigate and resolve production incidents. I believe in building systems that are not just functional, but observable, maintainable, and resilient—whether I'm debugging a distributed system or implementing a new API.";

export const SKILLS = [
  // Cloud
  { name: 'AWS (IAM, EC2, S3)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 75 },
  { name: 'AWS Lambda', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 70 },

  // Observability
  { name: 'Datadog', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/datadog.svg', category: 'observability', level: 85 },
  { name: 'Kibana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kibana/kibana-original.svg', category: 'observability', level: 80 },
  { name: 'Distributed Systems', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'observability', level: 80 },

  // DevOps
  { name: 'CI/CD Pipelines', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 80 },
  { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'devops', level: 85 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 92 },

  // Backend
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'backend', level: 85 },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend', level: 80 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'backend', level: 75 },
  { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'backend', level: 90 },

  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend', level: 90 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'frontend', level: 80 },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'frontend', level: 75 },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', category: 'frontend', level: 75 },
  { name: 'Vuex', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'frontend', level: 70 },

  // Languages
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'languages', level: 92 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg', category: 'languages', level: 88 },
];

export const PROJECTS = [
  {
    title: 'WebView Architecture Migration — Mercado Libre',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Led the migration of a legacy Java-based WebView to a modern JavaScript/TypeScript architecture at Mercado Libre, improving service maintainability and operational scalability for millions of users.',
    technologies: ['JavaScript', 'TypeScript', 'Java', 'React', 'Node.js'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: 'https://www.mercadolibre.com.ar/',
  },
  {
    title: 'Browser Assessment Hub — Mercado Libre',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Designed and developed an internal platform to manage abuse prevention policies and signals across multiple clients, contributing to the Browser Assessment Hub for consistent abuse detection and scalable service orchestration.',
    technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Microservices', 'REST APIs'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Payment Microservices — AstroPay',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Contributed to core payment microservices supporting gateway, withdrawal, and purchase flows in a high-availability fintech environment. Integrated external APIs (Prisma, Mercado Pago) and resolved production incidents using Datadog and Kibana.',
    technologies: ['Node.js', 'Datadog', 'Kibana', 'REST APIs', 'Microservices', 'TypeScript'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'User Analytics Integration — AstroPay',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Increased user access and engagement by 40% by implementing tracking tools like Amplitude and Smartlook to improve UX and generate actionable product insights at scale.',
    technologies: ['React', 'Amplitude', 'JavaScript', 'TypeScript'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Telemedicine Platform — Osana Salud / CEPT',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Contributed to a peer-to-peer telemedicine platform for the Universidad de Buenos Aires featuring real-time video calls, screen sharing, file sharing, and media streaming for trauma recovery services.',
    technologies: ['React', 'WebRTC', 'Node.js', 'JavaScript', 'REST APIs'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Healthcare Dashboard — DOSUBA',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Built a healthcare management dashboard for DOSUBA (Dirección de Obra Social de la Universidad de Buenos Aires), enabling patient administration and coverage management.',
    technologies: ['React', 'Node.js', 'JavaScript', 'REST APIs'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },
];

export const CONTACT = {
  address: 'Buenos Aires, Argentina',
  phoneNo: '',
  email: 'giani.marquez2@gmail.com',
  social: {
    github: 'https://github.com/Ninna-log',
    linkedin: 'https://www.linkedin.com/in/gianinna-marquez/',
    twitter: '',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  observability: SKILLS.filter(skill => skill.category === 'observability'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  backend: SKILLS.filter(skill => skill.category === 'backend'),
  frontend: SKILLS.filter(skill => skill.category === 'frontend'),
  languages: SKILLS.filter(skill => skill.category === 'languages'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
