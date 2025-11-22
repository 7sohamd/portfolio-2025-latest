export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  codeLink?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}