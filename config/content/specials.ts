/**
 * Specials & Promotions Configuration
 *
 * Manage your current promotions and special offers.
 * These appear on the homepage and specials page.
 */

export interface Special {
  /** Unique identifier */
  id: string;

  /** Promotion title in English */
  titleEn: string;

  /** Promotion title in Spanish */
  titleEs: string;

  /** Short description in English */
  descriptionEn: string;

  /** Short description in Spanish */
  descriptionEs: string;

  /** Price or discount to display (e.g., "$99", "50% OFF") */
  price: string;

  /** Original price for comparison (optional, e.g., "$250") */
  originalPrice?: string;

  /** What's included - list of items in English */
  includesEn: string[];

  /** What's included - list of items in Spanish */
  includesEs: string[];

  /** Fine print / disclaimer in English */
  disclaimerEn: string;

  /** Fine print / disclaimer in Spanish */
  disclaimerEs: string;

  /** Highlight color: "primary" | "secondary" | "accent" */
  color: "primary" | "secondary" | "accent";

  /** Badge text (e.g., "MOST POPULAR", "LIMITED TIME") */
  badgeEn?: string;
  badgeEs?: string;

  /** Is this promotion currently active? */
  active: boolean;

  /** Display order (lower numbers appear first) */
  order: number;

  /** Start date (optional - for scheduling) */
  startDate?: string;

  /** End date (optional - for scheduling) */
  endDate?: string;
}

export const specials: Special[] = [
  //============================================================================
  // NEW PATIENT SPECIAL
  //============================================================================
  {
    id: "new-patient",
    titleEn: "New Patient Special",
    titleEs: "Especial para Nuevos Pacientes",
    descriptionEn: "Complete exam, X-rays, and cleaning for new patients",
    descriptionEs: "Examen completo, radiografías y limpieza para nuevos pacientes",
    price: "$99",
    originalPrice: "$350",
    includesEn: [
      "Comprehensive Dental Exam",
      "Full Set of X-Rays",
      "Professional Cleaning",
      "Personalized Treatment Plan",
    ],
    includesEs: [
      "Examen Dental Completo",
      "Juego Completo de Radiografías",
      "Limpieza Profesional",
      "Plan de Tratamiento Personalizado",
    ],
    disclaimerEn: "Valid for new patients only. Cannot be combined with insurance or other offers. Some restrictions may apply.",
    disclaimerEs: "Válido solo para nuevos pacientes. No se puede combinar con seguro u otras ofertas. Pueden aplicarse algunas restricciones.",
    color: "primary",
    badgeEn: "MOST POPULAR",
    badgeEs: "MÁS POPULAR",
    active: true,
    order: 1,
  },

  //============================================================================
  // TEETH WHITENING SPECIAL
  //============================================================================
  {
    id: "whitening",
    titleEn: "Teeth Whitening",
    titleEs: "Blanqueamiento Dental",
    descriptionEn: "Professional in-office whitening treatment",
    descriptionEs: "Tratamiento profesional de blanqueamiento en consultorio",
    price: "$299",
    originalPrice: "$500",
    includesEn: [
      "Professional Whitening Treatment",
      "Take-Home Touch-Up Kit",
      "Sensitivity-Free Formula",
    ],
    includesEs: [
      "Tratamiento Profesional de Blanqueamiento",
      "Kit de Retoque para Llevar",
      "Fórmula Sin Sensibilidad",
    ],
    disclaimerEn: "Results may vary. Consultation required before treatment.",
    disclaimerEs: "Los resultados pueden variar. Se requiere consulta antes del tratamiento.",
    color: "secondary",
    active: true,
    order: 2,
  },

  //============================================================================
  // FREE CONSULTATION
  //============================================================================
  {
    id: "consultation",
    titleEn: "Free Consultation",
    titleEs: "Consulta Gratis",
    descriptionEn: "Complimentary consultation for cosmetic or implant procedures",
    descriptionEs: "Consulta de cortesía para procedimientos cosméticos o de implantes",
    price: "FREE",
    originalPrice: "$150",
    includesEn: [
      "One-on-One with Dr. Ritu",
      "Treatment Options Review",
      "Cost Estimate",
      "No Obligation",
    ],
    includesEs: [
      "Consulta Individual con la Dra. Ritu",
      "Revisión de Opciones de Tratamiento",
      "Estimación de Costos",
      "Sin Compromiso",
    ],
    disclaimerEn: "For cosmetic dentistry and implant consultations only.",
    disclaimerEs: "Solo para consultas de odontología cosmética e implantes.",
    color: "accent",
    badgeEn: "NO COST",
    badgeEs: "SIN COSTO",
    active: true,
    order: 3,
  },

  //============================================================================
  // TEMPLATE - Copy this to add a new special
  //============================================================================
  /*
  {
    id: "unique-id",
    titleEn: "Special Title",
    titleEs: "Título del Especial",
    descriptionEn: "Short description of the offer",
    descriptionEs: "Descripción corta de la oferta",
    price: "$XX",
    originalPrice: "$XX",
    includesEn: ["Item 1", "Item 2"],
    includesEs: ["Artículo 1", "Artículo 2"],
    disclaimerEn: "Terms and conditions",
    disclaimerEs: "Términos y condiciones",
    color: "primary",
    badgeEn: "BADGE TEXT",
    badgeEs: "TEXTO DE INSIGNIA",
    active: true,
    order: 4,
  },
  */
];

//============================================================================
// SECTION CONTENT
//============================================================================

export const specialsSectionContent = {
  en: {
    pageTitle: "Specials & Offers",
    pageSubtitle: "Affordable Care for Your Smile",
    homepageTitle: "New Patient Specials",
    homepageSubtitle: "Welcome to North Salinas Dental",
    ctaButton: "Claim This Offer",
    viewAll: "View All Specials",
    limitedTime: "Limited Time Offer",
    callToBook: "Call to Book",
  },
  es: {
    pageTitle: "Especiales y Ofertas",
    pageSubtitle: "Cuidado Accesible para Su Sonrisa",
    homepageTitle: "Especiales para Nuevos Pacientes",
    homepageSubtitle: "Bienvenido a North Salinas Dental",
    ctaButton: "Reclamar Esta Oferta",
    viewAll: "Ver Todos los Especiales",
    limitedTime: "Oferta por Tiempo Limitado",
    callToBook: "Llame para Reservar",
  },
};

//============================================================================
// HELPER FUNCTIONS
//============================================================================

/**
 * Get all active specials sorted by order
 */
export function getActiveSpecials(): Special[] {
  const now = new Date();

  return specials
    .filter((special) => {
      if (!special.active) return false;

      // Check date range if specified
      if (special.startDate && new Date(special.startDate) > now) return false;
      if (special.endDate && new Date(special.endDate) < now) return false;

      return true;
    })
    .sort((a, b) => a.order - b.order);
}

/**
 * Get a specific special by ID
 */
export function getSpecialById(id: string): Special | undefined {
  return specials.find((special) => special.id === id);
}
