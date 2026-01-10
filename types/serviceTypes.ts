export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceContent {
  title: string;
  description: string;
  treatmentsTitle: string;
  treatments: string[];
  benefitsTitle: string;
  benefits: string[];
  faqTitle: string;
  faqs: FAQ[];
  ctaButton: string;
  image: string;
}

export interface ServiceLanguageContent {
  en: ServiceContent;
  es: ServiceContent;
}

export interface ServiceContentMap {
  [serviceId: string]: ServiceLanguageContent;
}
