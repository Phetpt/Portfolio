export type MetricIconType = 'Activity' | 'Zap' | 'ShieldCheck' | 'TrendingUp' | 'Network' | 'Users' | 'Layers' ;

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  change?: string;
  icon: MetricIconType;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  scale: string;
  summary: string;
  tags: string[];
  impactStats: { label: string; value: string }[];
  problem: string;
  architectureDetails: string[];
  tradeoffs: { choice: string; why: string; alternativeRejected: string }[];
  keyOutcomes: string[];

  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ADR {
  id: string;
  projectId: string,
  title: string;
  context: string;
  decision: string;
  consequencesPositive: string[];
  consequencesNegative: string[];
  alternativesConsidered: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  teamSize?: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface TechSkill {
  name: string;
  icon?: string;
}

export interface TechCategory {
  title: string;
  skills: TechSkill[];
}

export interface CandidateProfile {
  name: string;
  title: string;
  tagline: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
  targetRoles: string[];
  targetCompanies: string[];
  specializations: string[];
}