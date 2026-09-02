export type ProficiencyLevel = "Building With" | "Familiar" | "Learning";

export type SkillCategory =
  | "Programming"
  | "Frameworks / Web"
  | "Backend & Runtime"
  | "Databases"
  | "Auth & DevOps"
  | "GIS & Data Analysis";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  icon?: string;
  description?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: "client" | "api" | "service" | "db" | "auth" | "external";
  description: string;
  subNodes?: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: "Full Stack" | "Backend" | "GIS & Spatial Data" | "Data & Systems" | "Web Apps";
  featured: boolean;
  isFlagship?: boolean;
  shortDescription: string;
  problemStatement: string;
  solutionSummary: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  updatedAt?: string;
  stars?: number;
  forks?: number;
  architectureDiagram?: {
    flowDescription: string;
    nodes: ArchitectureNode[];
  };
  technicalHighlights: string[];
  challenges: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
}

export interface JourneyMilestone {
  period: string;
  phase: "Android & Termux" | "Setup & Tools" | "Building & ROTC System" | "Future Engineering";
  title: string;
  description: string;
  keySkills: string[];
  status: "Completed" | "Current Focus" | "Target Goal";
}

export interface RotcActivity {
  id: string;
  role: string;
  unit: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface ExploringTopic {
  id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: "ROTC Leadership" | "Academic Honor" | "Project Achievement" | "School Event";
  description: string;
  link?: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
}

export interface PortfolioConfig {
  person: {
    name: string;
    handle: string;
    university: string;
    degree: string;
    role: string;
    subRole: string;
    location: string;
    availability: string;
    bioSummary: string;
    heroHeadline: string;
    heroSubtext: string;
    photoUrl: string;
    githubUsername: string;
    githubUrl: string;
    linkedinUrl: string;
    email: string;
    resumeUrl: string;
    hardwareSpecs: {
      os: string;
      processor: string;
      ram: string;
      storage: string;
      tools: string[];
    };
  };
  terminalCommands: {
    command: string;
    response: string[];
  }[];
  featuredProjectSlugs: string[];
  projects: Project[];
  skills: SkillItem[];
  rotcExperience: RotcActivity[];
  journey: JourneyMilestone[];
  exploring: ExploringTopic[];
  achievements: Achievement[];
  techConstellationNodes: {
    id: string;
    label: string;
    group: "language" | "framework" | "database" | "tool" | "gis";
    connections: string[];
    details: string;
  }[];
}
