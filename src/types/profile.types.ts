export interface ProfileStat {
  value: string;
  label: string;
}

export interface ProfilePillar {
  icon: string;
  title: string;
  description: string;
}

export interface ProfileContent {
  headline: string;
  paragraphs: string[];
  availability?: string;
  stats?: ProfileStat[];
  pillars?: ProfilePillar[];
  sectors?: string[];
}
