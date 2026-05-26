export interface Service {
  id: string;
  title: string;
  description: string;
  detailText: string;
  imageUrl: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'structural' | 'concept';
  categoryLabel: string;
  description: string;
  location: string;
  imageUrl: string;
  completionYear: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  review: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CounterItem {
  id: string;
  value: number;
  label: string;
  suffix: string;
}
