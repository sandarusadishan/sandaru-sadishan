// src/data/constants.js
import Svg from '../assets/projects/svg.png';
export const PROFILE = {
  name: "Sandaru Sadishan",
  headlineRoles: [
    "Software Engineer,",
    "Automation Engineer(n8n),",
    "Cloud Security Specialist,",
  ],
  email: "sandarusadishan0404@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/sandaru-sadishan-123405296/",
    github: "https://github.com/sandarusadishan",
    twitter: "https://twitter.com/yourusername",
    facebook: "https://facebook.com/yourprofile",
    whatsapp: "https://wa.me/yourphonenumber",
    youtube: "https://youtube.com/yourchannel",
    instagram: "https://instagram.com/yourprofile",
  },
};

export const SERVICES = [
  {
    title: "Web Development",
    icon: "Globe",
    description: "Responsive, scalable web apps with modern stacks.",
  },
  {
    title: "UI/UX Design",
    icon: "Palette",
    description: "Clean, accessible interfaces with delightful details.",
  },
  {
    title: "API Engineering",
    icon: "Server",
    description: "Robust backends, REST/GraphQL integrations.",
  },
  {
    title: "Mobile Apps",
    icon: "Smartphone",
    description: "Cross‑platform apps with React Native.",
  },
];

export const TECHNOLOGIES = {
  web_and_backend: [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 92,
      description: "Building interactive UIs with React & Next.js",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 90,
      description: "Dynamic and versatile frontend development",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 88,
      description: "Typed JavaScript for scalable apps",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 85,
      description: "Event-driven backend with Express.js",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 95,
      description: "Semantic markup & responsive layouts",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: 93,
      description: "Modern styling with Flexbox & Grid",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      level: 90,
      description: "Utility-first responsive design system",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: 80,
      description: "Data analysis, scripting & automation",
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      level: 85,
      description: "Building microservices and robust backends",
    },
  ],
  mobile: [
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      level: 80,
      description: "Cross-platform mobile development",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      level: 82,
      description: "Enterprise-level backend development",
    },
    {
      name: "Kotlin",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      level: 75,
      description: "Modern Android app development",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: 78,
      description: "NoSQL database design & aggregation",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: 82,
      description: "Relational database & query optimization",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      level: 80,
      description: "Database design & query building",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      level: 75,
      description: "Realtime mobile and web database solutions.",
    },
    {
      name: "Supabase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      level: 70,
      description: "Open-source Firebase alternative with a Postgres backend.",
    },
  ],
};
import SvgCover from '../assets/projects/svg.png';
import UniCover from '../assets/projects/uni.png';

// Add more imports for each of your project cover images 
export const PROJECTS = [
  {
    title: "Company Web site",
    description:
      "Collaborative task manager with real‑time updates, drag‑and‑drop boards, and role‑based auth.",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://svg.lk/",
    tags: ["React", "Java Script", "TailwindCSS"],
    cover: SvgCover,
  },
  {
    title: "E‑Commerce [University Project(Individual)]",
    description:
      "Admin dashboard with analytics, inventory, and order workflows. Fully responsive + theming.",
    github: "https://github.com/yourusername/ecommerce-dashboard",
    demo: "https://demo-ecommerce-dashboard.vercel.app",
    tags: ["React", "Node.js", "Express", "TailwindCSS", "MongoDB"],
    cover: UniCover,
  },
  {
    title: "Personal Blog",
    description:
      "MDX blog with syntax highlighting, RSS, and SEO best practices.",
    github: "https://github.com/yourusername/personal-blog",
    demo: "https://demo-personal-blog.vercel.app",
    tags: ["Next.js", "MDX", "Vercel"],
    cover:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Project 4",
    description:
      "MDX blog with syntax highlighting, RSS, and SEO best practices.",
    github: "https://github.com/yourusername/personal-blog",
    demo: "https://demo-personal-blog.vercel.app",
    tags: ["Next.js", "MDX", "Vercel"],
    cover:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Project 5",
    description:
      "MDX blog with syntax highlighting, RSS, and SEO best practices.",
    github: "https://github.com/yourusername/personal-blog",
    demo: "https://demo-personal-blog.vercel.app",
    tags: ["Next.js", "MDX", "Vercel"],
    cover:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Project 6",
    description:
      "MDX blog with syntax highlighting, RSS, and SEO best practices.",
    github: "https://github.com/yourusername/personal-blog",
    demo: "https://demo-personal-blog.vercel.app",
    tags: ["Next.js", "MDX", "Vercel"],
    cover:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
];

export const TIMELINE = [
  {
    year: "2025 – Present",
    title: "Internship as a Software Engineer",
    company: "SoftVision IT Group (Pvt) Ltd",
    description:
      "Developed and enhanced web applications, mobile apps, and cloud solutions to improve performance and user experience.",
  },
  {
    year: "2025 – Present",
    title: "BSc (Hons) Computer Science (Software Engineering) Final Year",
    company: "Kingston University London (UK)",
    description:
      "Currently pursuing a degree with a focus on software engineering principles, object-oriented programming, and large-scale system design. Gaining expertise in full-stack development and modern software methodologies.",
  },
  {
    year: "2025 – Present",
    title: "English Diploma",
    company: "ESOFT Uni [ESU]",
    description:
      "Currently pursuing an English Diploma to strengthen professional communication skills for collaborative software development.",
  },
  {
    year: "2024 - Present",
    title: "Diploma in Software Engineering",
    company: "International College of Excellence in Technology [iCET]",
    description:
      "Successfully completed an industry-focused, one-year diploma program. Gained practical, hands-on training in key software development concepts, providing a direct pathway into the IT sector.",
  },
  {
    year: "2022",
    title: "Higher National Diploma in Information Technology",
    company: "Institute of Universal Higher Studies [IUHS Campus]",
    description:
      "Explored machine learning models for tabular data. Contributed to building robust data pipelines and implementing experiment tracking systems to improve model efficiency and accuracy.",
  },
  {
    year: "2020/21",
    title: "G.C.E. A/L Examination",
    company: "Henegama Central College",
    description:
      "Successfully completed the G.C.E. Advanced Level Examination in the Physical Science stream, achieving passes in all three subjects and building a strong foundation in problem-solving and analytical thinking.",
  },
];
