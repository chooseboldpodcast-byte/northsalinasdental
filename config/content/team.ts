/**
 * Team Members Configuration
 *
 * Add your staff members here. Each team member needs English and Spanish content.
 * Images should be placed in public/images/team/
 */

export interface TeamMember {
  /** Unique identifier */
  id: string;

  /** Team member's name */
  name: string;

  /** Image path - place photos in public/images/team/ */
  image: string;

  /** Role/title in English */
  roleEn: string;

  /** Role/title in Spanish */
  roleEs: string;

  /** Optional short bio in English */
  bioEn?: string;

  /** Optional short bio in Spanish */
  bioEs?: string;

  /** Display order (lower numbers appear first) */
  order: number;

  /** Set to false to hide this team member */
  active: boolean;
}

export const teamMembers: TeamMember[] = [
  //============================================================================
  // Add your team members below
  // Copy and paste the template for each new team member
  //============================================================================

  {
    id: "maria-garcia",
    name: "Maria Garcia",
    image: "/images/team/placeholder-1.jpg",
    roleEn: "Office Manager",
    roleEs: "Gerente de Oficina",
    bioEn: "",
    bioEs: "",
    order: 1,
    active: true,
  },
  {
    id: "jennifer-lopez",
    name: "Jennifer Lopez",
    image: "/images/team/placeholder-2.jpg",
    roleEn: "Dental Hygienist",
    roleEs: "Higienista Dental",
    bioEn: "",
    bioEs: "",
    order: 2,
    active: true,
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    image: "/images/team/placeholder-3.jpg",
    roleEn: "Dental Assistant",
    roleEs: "Asistente Dental",
    bioEn: "",
    bioEs: "",
    order: 3,
    active: true,
  },
  {
    id: "emily-chen",
    name: "Emily Chen",
    image: "/images/team/placeholder-4.jpg",
    roleEn: "Front Desk Coordinator",
    roleEs: "Coordinadora de Recepción",
    bioEn: "",
    bioEs: "",
    order: 4,
    active: true,
  },

  //============================================================================
  // TEMPLATE - Copy this to add a new team member
  //============================================================================
  /*
  {
    id: "unique-id",
    name: "Full Name",
    image: "/images/team/filename.jpg",
    roleEn: "Job Title",
    roleEs: "Título del Trabajo",
    bioEn: "Optional short bio in English",
    bioEs: "Biografía corta opcional en español",
    order: 5,
    active: true,
  },
  */
];

//============================================================================
// SECTION CONTENT
//============================================================================

export const teamSectionContent = {
  en: {
    /** Page title */
    pageTitle: "Meet Our Team",

    /** Page subtitle */
    pageSubtitle: "Dedicated professionals committed to your smile",

    /** Staff section title */
    staffTitle: "Our Friendly Staff",

    /** Staff section subtitle */
    staffSubtitle: "Meet the team that makes your visit comfortable and enjoyable",

    /** CTA section */
    cta: {
      title: "Ready to Join Our Family?",
      subtitle: "Schedule your appointment today and experience the difference",
      button: "Book Appointment",
    },
  },

  es: {
    pageTitle: "Conozca Nuestro Equipo",
    pageSubtitle: "Profesionales dedicados comprometidos con su sonrisa",
    staffTitle: "Nuestro Amable Personal",
    staffSubtitle: "Conozca al equipo que hace su visita cómoda y agradable",
    cta: {
      title: "¿Lista para Unirse a Nuestra Familia?",
      subtitle: "Programe su cita hoy y experimente la diferencia",
      button: "Reservar Cita",
    },
  },
};

//============================================================================
// HELPER FUNCTIONS
//============================================================================

/**
 * Get all active team members sorted by order
 */
export function getActiveTeamMembers(): TeamMember[] {
  return teamMembers
    .filter((member) => member.active)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get a specific team member by ID
 */
export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id);
}
