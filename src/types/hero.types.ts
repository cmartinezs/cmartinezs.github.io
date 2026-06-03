export interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: string;
  external?: boolean;
}

export interface HeroSignal {
  value: string;
  label: string;
  description?: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  tagline?: string;
  lead: string;
  actions: HeroAction[];
  signals: HeroSignal[];
}
