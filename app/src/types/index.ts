export interface SectionConfig {
  id: string;
  pin: boolean;
  end?: string;
  settleRatio?: number;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Milestone {
  month: string;
  title: string;
  status: 'locked' | 'unlocked' | 'completed';
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  note: string;
  highlighted?: boolean;
}