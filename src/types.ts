export interface Modality {
  id: string;
  name: string;
  acronym: 'FLL' | 'FTC' | 'FRC';
  ageRange: string;
  shortDescription: string;
  badge: string;
  accentColor: string;
  tagline: string;
  features: string[];
  allianceNote?: string;
  highlight?: boolean;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ComparisonItem {
  acronym: 'FLL' | 'FTC' | 'FRC';
  level: string;
  emoji: string;
  keywords: string;
  accent: string;
}
