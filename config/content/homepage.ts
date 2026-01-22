/**
 * Homepage Content Configuration
 *
 * All text content for the homepage sections.
 * Update these values to customize your homepage messaging.
 */

export const homepageContent = {
  //============================================================================
  // HERO SECTION
  //============================================================================

  hero: {
    en: {
      /** Main headline */
      headline: "Your family's dental home in Salinas",

      /** Subheadline / tagline */
      subheadline: "Welcome to North Salinas Dental, Office of Dr. Ritu Bhardwaj DDS, where we create beautiful and healthy smiles by combining advanced technology with patient comfort and personalized care.",

      /** Primary CTA button */
      primaryCta: "Request Appointment",

      /** Secondary CTA button */
      secondaryCta: "Explore Services",

      /** Trust badges / features below hero */
      badges: [
        "Accepting New Patients",
        "Se Habla Español",
      ],
    },
    es: {
      headline: "El hogar dental de su familia en Salinas",
      subheadline: "Bienvenido a North Salinas Dental, consultorio de la Dra. Ritu Bhardwaj DDS, donde creamos sonrisas hermosas y saludables combinando tecnología avanzada con comodidad del paciente y atención personalizada.",
      primaryCta: "Solicitar Cita",
      secondaryCta: "Explorar Servicios",
      badges: [
        "Aceptamos Nuevos Pacientes",
        "Se Habla Español",
      ],
    },
  },

  //============================================================================
  // FEATURES SECTION (Why Choose Us)
  //============================================================================

  features: {
    en: {
      overline: "WHY CHOOSE US",
      title: "Dental Care That Puts You First",
      subtitle: "We combine advanced technology with a gentle, patient-centered approach",
      items: [
        {
          icon: "Heart",
          title: "Patient-Centered Care",
          description: "We listen to your concerns and create personalized treatment plans that fit your needs and budget.",
        },
        {
          icon: "Shield",
          title: "Advanced Technology",
          description: "State-of-the-art equipment including digital X-rays, CEREC same-day crowns, and more.",
        },
        {
          icon: "Users",
          title: "Family Friendly",
          description: "We welcome patients of all ages and make every visit comfortable and stress-free.",
        },
        {
          icon: "Globe",
          title: "Bilingual Staff",
          description: "Our team speaks English and Spanish to serve our diverse community.",
        },
      ],
    },
    es: {
      overline: "POR QUÉ ELEGIRNOS",
      title: "Atención Dental que Lo Pone a Usted Primero",
      subtitle: "Combinamos tecnología avanzada con un enfoque suave y centrado en el paciente",
      items: [
        {
          icon: "Heart",
          title: "Atención Centrada en el Paciente",
          description: "Escuchamos sus inquietudes y creamos planes de tratamiento personalizados que se ajustan a sus necesidades y presupuesto.",
        },
        {
          icon: "Shield",
          title: "Tecnología Avanzada",
          description: "Equipos de última generación incluyendo radiografías digitales, coronas CEREC en el mismo día y más.",
        },
        {
          icon: "Users",
          title: "Amigable para Familias",
          description: "Damos la bienvenida a pacientes de todas las edades y hacemos cada visita cómoda y sin estrés.",
        },
        {
          icon: "Globe",
          title: "Personal Bilingüe",
          description: "Nuestro equipo habla inglés y español para servir a nuestra diversa comunidad.",
        },
      ],
    },
  },

  //============================================================================
  // SERVICES GRID SECTION
  //============================================================================

  servicesGrid: {
    en: {
      overline: "OUR SERVICES",
      title: "Comprehensive Dental Care",
      subtitle: "From routine cleanings to complete smile makeovers, we've got you covered",
      viewAllButton: "View All Services",
    },
    es: {
      overline: "NUESTROS SERVICIOS",
      title: "Atención Dental Integral",
      subtitle: "Desde limpiezas de rutina hasta transformaciones completas de sonrisa, lo tenemos cubierto",
      viewAllButton: "Ver Todos los Servicios",
    },
  },

  //============================================================================
  // CTA BANNER SECTION
  //============================================================================

  ctaBanner: {
    en: {
      title: "Ready for a Healthier Smile?",
      subtitle: "Schedule your appointment today and take the first step toward optimal dental health.",
      primaryCta: "Book Online",
      secondaryCta: "Call Us",
      phone: "(831) 449-8363",
    },
    es: {
      title: "¿Listo para una Sonrisa más Saludable?",
      subtitle: "Programe su cita hoy y dé el primer paso hacia una salud dental óptima.",
      primaryCta: "Reservar en Línea",
      secondaryCta: "Llámenos",
      phone: "(831) 449-8363",
    },
  },

  //============================================================================
  // NEWS TICKER
  //============================================================================

  newsTicker: {
    en: {
      items: [
        "Now Accepting New Patients!",
        "Same-Day Emergency Appointments Available",
        "$85 New Patient Special - Dental Exam and X-ray",
        "20% off Porcelain Veneers",
        "Invisalign Certified Provider",
        "Se Habla Español",
      ],
    },
    es: {
      items: [
        "¡Ahora Aceptamos Nuevos Pacientes!",
        "Citas de Emergencia el Mismo Día Disponibles",
        "$85 Especial para Nuevos Pacientes - Examen Dental y Radiografía",
        "20% de descuento en Carillas de Porcelana",
        "Proveedor Certificado de Invisalign",
        "Se Habla Español",
      ],
    },
  },
};

//============================================================================
// TYPE EXPORTS
//============================================================================

export type HomepageContent = typeof homepageContent;
export type HeroContent = typeof homepageContent.hero;
export type FeaturesContent = typeof homepageContent.features;
