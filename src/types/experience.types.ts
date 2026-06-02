export interface ExperienceItem {
  id: string;
  badge: string;
  period?: string;
  company?: string;
  role?: string;
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
  credlyUrl?: string;
  badgeImageUrl?: string;
}

export interface CourseItem {
  id: string;
  code: string;
  title: string;
  description: string;
  topics: string[];
  url: string;
  active: boolean;
}
