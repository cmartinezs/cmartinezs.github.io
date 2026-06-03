export interface CollaborationProfile {
  id: string;
  icon: string;
  title: string;
  description: string;
  formats: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface CollaborationContent {
  profiles: CollaborationProfile[];
  notAFit: string[];
}
