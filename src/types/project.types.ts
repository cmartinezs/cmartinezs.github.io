export type LabProjectStatus = "active" | "in-progress" | "archived" | "concept";

export interface LabProject {
  id: string;
  badge?: string;
  title: string;
  tagline: string;
  description: string;
  status: LabProjectStatus;
  statusLabel: string;
  features: string[];
  stack: string[];
  learnings?: string[];
  href: string;
  linkLabel: string;
  githubHref?: string;
  featured?: boolean;
}
