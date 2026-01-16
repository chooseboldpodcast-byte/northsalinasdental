// Ticker content for the news ticker component
// To update the ticker, simply modify the items array below
// Each item needs both English (en) and Spanish (es) text

export interface TickerItem {
  id: string;
  en: string;
  es: string;
}

export const tickerItems: TickerItem[] = [
  {
    id: "new-patient-special",
    en: "$85 New Patient Special - Dental Exam and X-ray",
    es: "$85 Especial para Nuevos Pacientes - Examen Dental y Rayos X",
  },
  {
    id: "veneers-discount",
    en: "20% off Porcelain Veneers",
    es: "20% de descuento en Carillas de Porcelana",
  },
];
