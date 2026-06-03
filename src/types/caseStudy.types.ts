export type CaseStudyDomain =
  | "ecommerce"
  | "banca"
  | "operaciones"
  | "liderazgo-tecnico"
  | "formacion-tecnica";

export type CaseStudyConfidentiality = "public" | "anonimized" | "confidential";

export interface CaseStudyResult {
  description: string;
  metric?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  domain: CaseStudyDomain;
  industry?: string;
  period?: string;
  context: string;
  problem: string;
  contribution: string;
  results: CaseStudyResult[];
  stack?: string[];
  confidentiality: CaseStudyConfidentiality;
  featured?: boolean;
  relatedServiceId?: string;
}
