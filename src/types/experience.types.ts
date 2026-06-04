export interface ExperienceItem {
  id: string;
  badge: string;
  period?: string;
  company?: string;
  role?: string;
  title: string;
  body: string;
  learning: string;
  domain?: string;
  impact?: string;
  scope?: string;
  stack?: string[];
  responsibilities?: string[];
  proofLevel?: "verified" | "inferred" | "qualitative";
  relatedCaseStudyIds?: string[];
}

export interface TechnicalCourse {
  id: string;
  title: string;
  issuer: string;
  year: string;
  date: string; // ISO: YYYY-MM-DD, YYYY-MM, or YYYY
  hours?: string;
  imageUrl?: string;
  verifyUrl?: string;
  downloadUrl?: string; // PDF preferred; falls back to imageUrl in the component
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  date: string; // ISO: YYYY-MM-DD, YYYY-MM, or YYYY
  category: string;
  featured?: boolean;
  description?: string;
  credlyUrl?: string;
  badgeImageUrl?: string;
  verifyUrl?: string;
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
