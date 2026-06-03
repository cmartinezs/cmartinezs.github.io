export type ServiceTier = "primary" | "secondary" | "support";

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  linkLabel: string;
  tier?: ServiceTier;
  audience?: string[];
  problems?: string[];
  outcomes?: string[];
  formats?: string[];
  proof?: string;
}
