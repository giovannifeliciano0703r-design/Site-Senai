export type ModalityId = 'fll' | 'ftc' | 'frc';

export interface Modality {
  id: ModalityId;
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
