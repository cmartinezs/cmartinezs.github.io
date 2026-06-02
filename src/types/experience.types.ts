export interface ExperienceItem {
  id: string;
  badge: string;
  title: string;
  body: string;
  learning: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  featured?: boolean;
  description?: string;
}

export interface CourseItem {
  id: string;
  code: string;
  title: string;
  topics: string[];
  active: boolean;
}
