export type Language = 'bg' | 'en' | 'pt';

export interface LocalizedString {
  bg: string;
  en: string;
  pt?: string;
}

export interface LocalizedStringArray {
  bg: string[];
  en: string[];
  pt?: string[];
}

export interface Discipline {
  id: string;
  name: { bg: string; en: string; pt?: string };
  category: { bg: string; en: string; pt?: string };
  shortDesc: { bg: string; en: string; pt?: string };
  fullDesc: { bg: string; en: string; pt?: string };
  keyBenefits: { bg: string[]; en: string[]; pt?: string[] };
  technologiesUsed: string[];
  indications: { bg: string[]; en: string[]; pt?: string[] };
}

export interface Technology {
  id: string;
  name: string;
  type: { bg: string; en: string; pt?: string };
  tagline: { bg: string; en: string; pt?: string };
  description: { bg: string; en: string; pt?: string };
  clinicalAdvantage: { bg: string[]; en: string[]; pt?: string[] };
  specs: { bg: string[]; en: string[]; pt?: string[] };
  imageKey?: 'waterlase' | 'cbct' | 'scanner' | 'pbm' | 'diagnocam';
}

export interface Article {
  id: string;
  title: { bg: string; en: string; pt?: string };
  category: { bg: string; en: string; pt?: string };
  readTime: string;
  date: string;
  summary: { bg: string; en: string; pt?: string };
  content: { bg: string[]; en: string[]; pt?: string[] };
  scientificReferences: string[];
}

export interface MaintenanceProgram {
  id: string;
  title: { bg: string; en: string; pt?: string };
  targetGroup: { bg: string; en: string; pt?: string };
  frequency: { bg: string; en: string; pt?: string };
  description: { bg: string; en: string; pt?: string };
  procedures: { bg: string[]; en: string[]; pt?: string[] };
  clinicalAim: { bg: string; en: string; pt?: string };
}

export interface GalleryItem {
  id: string;
  title: { bg: string; en: string; pt?: string };
  category: 'operatory' | 'technology' | 'spaces';
  categoryLabel: { bg: string; en: string; pt?: string };
  description: { bg: string; en: string; pt?: string };
  imageUrl: string;
  isIllustrative: boolean;
}

export interface ScientificProtocol {
  id: string;
  code: string;
  trademark?: string;
  title: { bg: string; en: string; pt?: string };
  subtitle: { bg: string; en: string; pt?: string };
  accessibleSummary: { bg: string; en: string; pt?: string };
  clinicalPurpose: { bg: string; en: string; pt?: string };
  scientificDepth: { bg: string; en: string; pt?: string };
  pillars: { bg: string[]; en: string[]; pt?: string[] };
  indications: { bg: string[]; en: string[]; pt?: string[] };
}

export interface PatientNeedProfile {
  id: string;
  title: { bg: string; en: string; pt?: string };
  subtitle: { bg: string; en: string; pt?: string };
  symptoms: { bg: string[]; en: string[]; pt?: string[] };
  clinicSolution: { bg: string; en: string; pt?: string };
  recommendedProtocol: string;
  recommendedDisciplineId: string;
}

export interface CaseStudyFramework {
  id: string;
  discipline: { bg: string; en: string; pt?: string };
  clinicalScenario: { bg: string; en: string; pt?: string };
  diagnosticProtocol: { bg: string; en: string; pt?: string };
  treatmentPhases: { bg: string[]; en: string[]; pt?: string[] };
  stabilityMilestone: { bg: string; en: string; pt?: string };
}

export interface ReviewFramework {
  verifiedSource: string;
  demonstrationNotice: { bg: string; en: string; pt?: string };
  criteria: { bg: string[]; en: string[]; pt?: string[] };
}

