import { Project, Experience, Education, Certification, SkillCategory } from './types';

export const PROFILE = {
  name: "Soham Dey",
  role: "Aspiring Software Engineer",
  location: "Kolkata, India",
  phone: "+91 7363977016",
  email: "soham4707@gmail.com",
  linkedin: "https://linkedin.com/in/soham-dey-891332256",
  github: "https://github.com/7sohamd",
  summary: "Aspiring Software Engineer skilled in C, C++, Java, Python, JavaScript, Blockchain, Full-Stack Web/Mobile Apps, and AI-powered platforms. Proven success in hackathons, internships, and leadership roles. Experienced in building production-ready applications, scalable systems, and intuitive UI/UX. Seeking roles in software engineering, full-stack, and blockchain engineering."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C (Advanced)", "C++ (Advanced)", "Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Web Development",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    category: "Mobile",
    skills: ["React Native", "Flutter"]
  },
  {
    category: "Blockchain",
    skills: ["Solidity", "Move", "Avalanche", "Aptos"]
  },
  {
    category: "AI/ML",
    skills: ["Gemini API", "TensorFlow (Basics)", "NLP"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Firebase", "Figma", "Adobe XD"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "LoreChain",
    description: "AI-assisted collaborative storytelling platform with blockchain-authenticated authorship.",
    tech: ["Blockchain", "AI", "Web3"],
    liveLink: "https://lore-chain.vercel.app/",
    codeLink: "https://github.com/7sohamd/LoreChain"
  },
  {
    title: "Vaayu",
    description: "Decentralized AI-powered app for monitoring real-time air quality with personalized health alerts.",
    tech: ["DeFi", "AI", "IoT"],
    liveLink: "https://vaayu-web-umber.vercel.app/login",
    codeLink: "https://github.com/7sohamd/Vaayu-Web"
  },
  {
    title: "Pac-Rupt",
    description: "Multiplayer arcade game integrated with blockchain, where viewers sabotage gameplay in real-time.",
    tech: ["GameDev", "Blockchain"],
    liveLink: "https://maze-plum.vercel.app/",
    codeLink: "https://github.com/7sohamd/maze"
  },
  {
    title: "Mini Projects",
    description: "NoKeyboardGaming (gesture/facial recognition), Emotion Recognise (ML detection), TabTracker (AI Chrome extension).",
    tech: ["Python", "ML", "OpenCV"],
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Frontend Intern",
    company: "Infinity Bit",
    location: "Remote",
    period: "2025 – Present",
    details: [
      "Developed interactive dashboards using React.js and Tailwind, improving UI consistency and reducing page load time by 25%.",
      "Implemented responsive layouts and reusable components, enhancing scalability of the frontend codebase.",
      "Collaborated with backend engineers to integrate REST APIs for dynamic content rendering."
    ]
  },
  {
    role: "Co-Founder",
    company: "NooBuild Community",
    location: "Kolkata, India",
    period: "2023 – 2024",
    details: [
      "Built a 2K+ member community, leading 50+ core members and hosting 7+ technical events.",
      "Conducted workshops on Game Dev, UI/UX, Blockchain, training 100+ students."
    ]
  },
  {
    role: "Design Lead",
    company: "GDSC NSEC",
    location: "Kolkata, India",
    period: "Aug 2023 – Nov 2023",
    details: [
      "Created branding/promotional designs for 20+ workshops, increasing engagement.",
      "Led UI/UX training sessions for 100+ students."
    ]
  },
  {
    role: "Python Developer Intern",
    company: "CodeClause",
    location: "Remote",
    period: "2023",
    details: [
      "Developed a desktop music player with Tkinter, OOP, file handling, improving usability."
    ]
  }
];

export const AWARDS = [
  "2nd Runner-up at Hack0lution 2025 (IEM).",
  "Team Lead, qualified for 2nd round of Smart India Hackathon (2023, 2024).",
  "Finalist at Diversion 2k25, Status Code 1 (IIIT Kalyani), Hack4Bengal 2.0 & 4.0, Build on Aptos."
];

export const EDUCATION: Education[] = [
  {
    institution: "Netaji Subhash Engineering College",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2022 – 2026",
    details: "CGPA: 8.10"
  },
  {
    institution: "Sainik School Purulia",
    degree: "Higher Secondary (85%), Secondary (88%)",
    period: "2022"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Google Python Certification", issuer: "Google" },
  { name: "Certified AI Foundations Associate", issuer: "Oracle" },
  { name: "Certified Data Science Professional", issuer: "Oracle" },
  { name: "DevOps & Python Training", issuer: "DevTown" }
];

export const LANGUAGES = ["English (Fluent)", "Hindi (Fluent)", "Bengali (Native)"];