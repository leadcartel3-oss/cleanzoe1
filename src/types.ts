export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  audience: 'Particuliers' | 'Professionnels' | 'Airbnb' | 'Tous';
  category: 'residential' | 'commercial' | 'airbnb' | 'renovation' | 'specialized';
  image: string;
  imageAlt: string;
  highlights: string[];
  includes: string[];
  process: { step: string; title: string; desc: string }[];
  targetAudience: string;
  idealFor: string[];
  faqs: { question: string; answer: string }[];
  estimatedStartingPrice: string;
}

export interface ZoneItem {
  name: string;
  slug: string;
  type: 'Quartier résidentiel' | 'Zone d’affaires' | 'Zone villas & riads' | 'Périphérie';
  description: string;
  servicesAvailable: string[];
  travelDelay: string;
  note?: string;
}

export interface QuoteConfig {
  serviceType: string;
  propertyType: 'villa' | 'appartement' | 'bureau' | 'airbnb' | 'immeuble';
  surfaceM2: number;
  frequency: 'once' | 'weekly' | 'biweekly' | 'monthly';
  extraVitres: boolean;
  extraTapis: boolean;
  extraPiscine: boolean;
  extraCristallisation: boolean;
}
