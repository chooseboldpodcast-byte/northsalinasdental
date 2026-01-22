/**
 * Services Configuration
 *
 * Define all dental services offered by your practice.
 * Toggle services on/off in config/site.config.ts
 */

export interface Service {
  /** Unique identifier (used for URL anchors) */
  id: string;

  /** Icon name from Lucide icons (https://lucide.dev/icons) */
  icon: string;

  /** Service name in English */
  nameEn: string;

  /** Service name in Spanish */
  nameEs: string;

  /** Short description for cards (English) */
  shortDescEn: string;

  /** Short description for cards (Spanish) */
  shortDescEs: string;

  /** Full description for service page (English) - can use multiple paragraphs */
  fullDescEn: string[];

  /** Full description for service page (Spanish) */
  fullDescEs: string[];

  /** Optional image for service page */
  image?: string;

  /** Display order (lower numbers appear first) */
  order: number;
}

export const services: Service[] = [
  //============================================================================
  // CLEANING & PREVENTION
  //============================================================================
  {
    id: "cleaning",
    icon: "Sparkles",
    nameEn: "Cleaning & Prevention",
    nameEs: "Limpieza y Prevención",
    shortDescEn: "Regular cleanings and preventive care to maintain your healthy smile.",
    shortDescEs: "Limpiezas regulares y cuidado preventivo para mantener su sonrisa saludable.",
    fullDescEn: [
      "Professional dental cleanings are essential for maintaining optimal oral health. Our hygienists use the latest techniques to remove plaque and tartar buildup that regular brushing can't reach.",
      "We recommend cleanings every six months, along with comprehensive exams to catch any issues early.",
    ],
    fullDescEs: [
      "Las limpiezas dentales profesionales son esenciales para mantener una salud oral óptima. Nuestros higienistas utilizan las últimas técnicas para eliminar la acumulación de placa y sarro que el cepillado regular no puede alcanzar.",
      "Recomendamos limpiezas cada seis meses, junto con exámenes completos para detectar cualquier problema a tiempo.",
    ],
    order: 1,
  },

  //============================================================================
  // FAMILY DENTISTRY
  //============================================================================
  {
    id: "family",
    icon: "Users",
    nameEn: "Family Dentistry",
    nameEs: "Odontología Familiar",
    shortDescEn: "Comprehensive dental care for patients of all ages, from children to seniors.",
    shortDescEs: "Atención dental integral para pacientes de todas las edades, desde niños hasta adultos mayores.",
    fullDescEn: [
      "We welcome patients of all ages and provide comprehensive dental care for the whole family. From your child's first dental visit to caring for aging teeth, we're here for every stage of life.",
    ],
    fullDescEs: [
      "Damos la bienvenida a pacientes de todas las edades y brindamos atención dental integral para toda la familia. Desde la primera visita dental de su hijo hasta el cuidado de los dientes en la vejez, estamos aquí para cada etapa de la vida.",
    ],
    order: 2,
  },

  //============================================================================
  // COSMETIC DENTISTRY
  //============================================================================
  {
    id: "cosmetic",
    icon: "Star",
    nameEn: "Cosmetic Dentistry",
    nameEs: "Odontología Cosmética",
    shortDescEn: "Transform your smile with our range of cosmetic treatments and procedures.",
    shortDescEs: "Transforme su sonrisa con nuestra gama de tratamientos y procedimientos cosméticos.",
    fullDescEn: [
      "A beautiful smile can boost your confidence and change your life. We offer a full range of cosmetic services including teeth whitening, bonding, and smile makeovers.",
      "Dr. Ritu will work with you to create a personalized treatment plan that achieves your dream smile.",
    ],
    fullDescEs: [
      "Una sonrisa hermosa puede aumentar su confianza y cambiar su vida. Ofrecemos una gama completa de servicios cosméticos que incluyen blanqueamiento dental, bonding y transformaciones de sonrisa.",
      "La Dra. Ritu trabajará con usted para crear un plan de tratamiento personalizado que logre la sonrisa de sus sueños.",
    ],
    order: 3,
  },

  //============================================================================
  // VENEERS
  //============================================================================
  {
    id: "veneers",
    icon: "Smile",
    nameEn: "Veneers",
    nameEs: "Carillas",
    shortDescEn: "Custom porcelain veneers to perfect your smile's appearance.",
    shortDescEs: "Carillas de porcelana personalizadas para perfeccionar la apariencia de su sonrisa.",
    fullDescEn: [
      "Dental veneers are thin, custom-made shells designed to cover the front surface of teeth. They're an excellent solution for discolored, worn, chipped, or misaligned teeth.",
    ],
    fullDescEs: [
      "Las carillas dentales son láminas delgadas y personalizadas diseñadas para cubrir la superficie frontal de los dientes. Son una excelente solución para dientes descoloridos, desgastados, astillados o desalineados.",
    ],
    order: 4,
  },

  //============================================================================
  // SAME-DAY CROWNS
  //============================================================================
  {
    id: "same-day-crowns",
    icon: "Clock",
    nameEn: "Same-Day Crowns",
    nameEs: "Coronas en el Mismo Día",
    shortDescEn: "Get your dental crown in a single visit with our advanced CEREC technology.",
    shortDescEs: "Obtenga su corona dental en una sola visita con nuestra tecnología avanzada CEREC.",
    fullDescEn: [
      "With CEREC technology, we can design, create, and place your custom crown in a single appointment. No temporary crowns, no second visits—just beautiful, permanent results in one day.",
    ],
    fullDescEs: [
      "Con la tecnología CEREC, podemos diseñar, crear y colocar su corona personalizada en una sola cita. Sin coronas temporales, sin segundas visitas—solo resultados hermosos y permanentes en un día.",
    ],
    order: 5,
  },

  //============================================================================
  // INVISALIGN
  //============================================================================
  {
    id: "invisalign",
    icon: "AlignCenter",
    nameEn: "Invisalign",
    nameEs: "Invisalign",
    shortDescEn: "Straighten your teeth discreetly with clear, removable aligners.",
    shortDescEs: "Enderece sus dientes discretamente con alineadores transparentes y removibles.",
    fullDescEn: [
      "Invisalign uses a series of clear, custom-made aligners to gradually shift your teeth into place. They're virtually invisible, removable for eating and cleaning, and more comfortable than traditional braces.",
      "Dr. Ritu is a certified Invisalign provider and will create a customized treatment plan for your perfect smile.",
    ],
    fullDescEs: [
      "Invisalign utiliza una serie de alineadores transparentes y personalizados para mover gradualmente sus dientes a su lugar. Son prácticamente invisibles, removibles para comer y limpiar, y más cómodos que los frenos tradicionales.",
      "La Dra. Ritu es proveedora certificada de Invisalign y creará un plan de tratamiento personalizado para su sonrisa perfecta.",
    ],
    order: 6,
  },

  //============================================================================
  // ORTHODONTICS
  //============================================================================
  {
    id: "orthodontics",
    icon: "GitMerge",
    nameEn: "Orthodontics",
    nameEs: "Ortodoncia",
    shortDescEn: "Comprehensive orthodontic solutions for a straighter, healthier smile.",
    shortDescEs: "Soluciones ortodónticas integrales para una sonrisa más recta y saludable.",
    fullDescEn: [
      "We offer various orthodontic treatments to correct misaligned teeth and bite issues. Straight teeth aren't just about aesthetics—they're easier to clean and reduce the risk of dental problems.",
    ],
    fullDescEs: [
      "Ofrecemos varios tratamientos ortodónticos para corregir dientes desalineados y problemas de mordida. Los dientes rectos no son solo cuestión de estética—son más fáciles de limpiar y reducen el riesgo de problemas dentales.",
    ],
    order: 7,
  },

  //============================================================================
  // TOOTH REPLACEMENT / IMPLANTS
  //============================================================================
  {
    id: "replacement",
    icon: "PlusCircle",
    nameEn: "Tooth Replacement",
    nameEs: "Reemplazo de Dientes",
    shortDescEn: "Restore missing teeth with implants, bridges, or dentures.",
    shortDescEs: "Restaure dientes perdidos con implantes, puentes o dentaduras.",
    fullDescEn: [
      "Missing teeth can affect your confidence, your ability to eat, and your oral health. We offer several tooth replacement options including dental implants, bridges, and dentures.",
      "Dr. Ritu specializes in both placing dental implants and restoring them with natural-looking crowns.",
    ],
    fullDescEs: [
      "Los dientes perdidos pueden afectar su confianza, su capacidad para comer y su salud oral. Ofrecemos varias opciones de reemplazo de dientes, incluyendo implantes dentales, puentes y dentaduras.",
      "La Dra. Ritu se especializa tanto en colocar implantes dentales como en restaurarlos con coronas de aspecto natural.",
    ],
    order: 8,
  },

  //============================================================================
  // EXTRACTIONS
  //============================================================================
  {
    id: "extraction",
    icon: "MinusCircle",
    nameEn: "Extractions",
    nameEs: "Extracciones",
    shortDescEn: "Safe and comfortable tooth extractions when necessary.",
    shortDescEs: "Extracciones dentales seguras y cómodas cuando sean necesarias.",
    fullDescEn: [
      "Sometimes a tooth extraction is the best option for your oral health. We perform extractions with care and precision, ensuring your comfort throughout the procedure.",
    ],
    fullDescEs: [
      "A veces una extracción dental es la mejor opción para su salud oral. Realizamos extracciones con cuidado y precisión, asegurando su comodidad durante todo el procedimiento.",
    ],
    order: 9,
  },

  //============================================================================
  // SEDATION DENTISTRY
  //============================================================================
  {
    id: "sedation",
    icon: "Moon",
    nameEn: "Sedation Dentistry",
    nameEs: "Odontología con Sedación",
    shortDescEn: "Relaxed, anxiety-free dental care with sedation options.",
    shortDescEs: "Atención dental relajada y sin ansiedad con opciones de sedación.",
    fullDescEn: [
      "Dental anxiety shouldn't keep you from getting the care you need. We offer sedation options to help you feel relaxed and comfortable during your treatment.",
    ],
    fullDescEs: [
      "La ansiedad dental no debería impedirle obtener la atención que necesita. Ofrecemos opciones de sedación para ayudarle a sentirse relajado y cómodo durante su tratamiento.",
    ],
    order: 10,
  },
];

//============================================================================
// SECTION CONTENT
//============================================================================

export const servicesSectionContent = {
  en: {
    pageTitle: "Our Services",
    pageSubtitle: "Comprehensive dental care for your whole family",
    viewAll: "View All Services",
    learnMore: "Learn More",
  },
  es: {
    pageTitle: "Nuestros Servicios",
    pageSubtitle: "Atención dental integral para toda su familia",
    viewAll: "Ver Todos los Servicios",
    learnMore: "Más Información",
  },
};

//============================================================================
// HELPER FUNCTIONS
//============================================================================

/**
 * Get all services sorted by order
 */
export function getAllServices(): Service[] {
  return services.sort((a, b) => a.order - b.order);
}

/**
 * Get a specific service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
