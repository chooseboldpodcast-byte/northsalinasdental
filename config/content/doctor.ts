/**
 * Doctor Information
 *
 * Update this file with your doctor's information, bio, and credentials.
 * Supports both English and Spanish content.
 */

export const doctorContent = {
  en: {
    //==========================================================================
    // BASIC INFORMATION
    //==========================================================================

    name: "Dr. Ritu Bhardwaj",
    credentials: "DDS",
    fullTitle: "Dr. Ritu Bhardwaj, DDS",

    /** Image path - place your photo in public/images/ */
    image: "/images/dr-ritu-bhardwaj.jpg",

    //==========================================================================
    // HOMEPAGE SECTION (Short version)
    //==========================================================================

    /** Overline text above the name */
    overline: "YOUR TRUSTED DENTIST",
    location: "IN SALINAS, CALIFORNIA",

    /** Short bio for homepage (keep under 100 words) */
    shortBio:
      "Dr. Ritu builds her practice on confianza—a relationship rooted in genuine trust and clear education, helping you understand how oral health supports your overall well-being. Guided by deep family values, she treats every patient with the same respect and dedication she would offer her own relatives. Dr. Ritu is committed to listening to your individual needs and providing the dignified, high-quality care you deserve.",

    /** Fun facts for homepage section */
    funFacts: {
      title: "Fun Facts",
      items: [
        { label: "Favorite Drink:", value: "Starbucks Coffee" },
        {
          label: "Hobbies:",
          value:
            "include singing, hiking/travel and trying all sorts of different foods",
        },
        {
          label: "Favorite Movies:",
          value: "Forrest Gump, The Pursuit of Happyness, and 3 Idiots",
        },
      ],
    },

    /** CTA button text on homepage */
    ctaButton: "Meet Our Team",

    //==========================================================================
    // TEAM PAGE (Full version)
    //==========================================================================

    /** Section overline on team page */
    teamPageOverline: "MEET THE DOCTOR",

    /** Full bio for team page (can be multiple paragraphs) */
    fullBio: [
      "Looking for high quality dentist in a happy, healthy, family-oriented environment? If so, North Salinas Dental is the place for all your and your family's dental needs. Dr Ritu Bhardwaj and her staff realizes dentistry is not just about providing excellent dental care but creating life-long relationships with their patients. Through her expert advice, you are sure to reach a state of optimal dental health.",
      "Smile makeovers is one of Dr. Ritu's favorite aspects of dentistry. Her clinic specializes in Invisalign technology and both cosmetic and restorative dentistry. Dr. Ritu is an expert in crowns, bridges, onlays, and veneers and also specializes in both components of implant dentistry, which includes placing implants and restoring them with crowns.",
      "Dr. Ritu, began her dental career as an associate dentist in Monterey County. Now she is thrilled to open doors to her new practice, North Salinas dental to serve her local community. Her work philosophy evolves from her own personality; she is a zealous precision-oriented dentist who strives for perfection while providing a comforting atmosphere and gentle care for her patients. She is a mom to two lovely boys. Dr Ritu loves spending time with her two sons and her husband. Come join our family at North Salinas Dental.",
    ],

    /** Specialties/expertise list */
    specialties: {
      title: "Specialties",
      items: [
        "Invisalign Certified Provider",
        "Cosmetic Dentistry",
        "Restorative Dentistry",
        "Implant Placement & Restoration",
        "Crowns, Bridges & Veneers",
      ],
    },

    /** Education & certifications (optional) */
    education: [
      // { degree: "Doctor of Dental Surgery", school: "University of...", year: "2015" },
    ],

    /** Professional memberships (optional) */
    memberships: [
      // "American Dental Association",
      // "California Dental Association",
    ],
  },

  //============================================================================
  // SPANISH CONTENT
  //============================================================================

  es: {
    name: "Dra. Ritu Bhardwaj",
    credentials: "DDS",
    fullTitle: "Dra. Ritu Bhardwaj, DDS",
    image: "/images/dr-ritu-bhardwaj.jpg",

    overline: "SU DENTISTA DE CONFIANZA",
    location: "en Salinas, California",

    shortBio:
      "La Dra. Ritu basa su práctica en la confianza: una relación arraigada en la honestidad y la educación clara, ayudándole a entender cómo la salud oral apoya su bienestar general. Guiada por profundos valores familiares, trata a cada paciente con el mismo respeto y dedicación que ofrecería a su propia familia. La Dra. Ritu se compromete a escuchar sus necesidades individuales y a brindarle la atención digna y de alta calidad que usted se merece.",

    funFacts: {
      title: "Datos Curiosos",
      items: [
        { label: "Bebida favorita:", value: "Café de Starbucks" },
        {
          label: "Pasatiempos:",
          value: "Cantar, hacer senderismo, viajar y probar todo tipo de comida",
        },
        {
          label: "Películas Favoritas:",
          value: "Forrest Gump, En Busca de la Felicidad, y 3 Idiots",
        },
      ],
    },

    ctaButton: "Conozca Nuestro Equipo",

    teamPageOverline: "CONOZCA A LA DOCTORA",

    fullBio: [
      "¿Busca un dentista de alta calidad en un ambiente feliz, saludable y familiar? Si es así, North Salinas Dental es el lugar para todas las necesidades dentales suyas y de su familia. La Dra. Ritu Bhardwaj y su personal entienden que la odontología no se trata solo de proporcionar una excelente atención dental, sino de crear relaciones de por vida con sus pacientes. A través de sus consejos expertos, seguramente alcanzará un estado de salud dental óptima.",
      "Las transformaciones de sonrisa son uno de los aspectos favoritos de la Dra. Ritu en la odontología. Su clínica se especializa en tecnología Invisalign y en odontología cosmética y restauradora. La Dra. Ritu es experta en coronas, puentes, incrustaciones y carillas, y también se especializa en ambos componentes de la odontología de implantes, que incluye la colocación de implantes y su restauración con coronas.",
      "La Dra. Ritu comenzó su carrera dental como dentista asociada en el Condado de Monterey. Ahora está emocionada de abrir las puertas de su nueva práctica, North Salinas Dental, para servir a su comunidad local. Su filosofía de trabajo evoluciona de su propia personalidad; es una dentista entusiasta y orientada a la precisión que se esfuerza por la perfección mientras proporciona un ambiente reconfortante y atención gentil para sus pacientes. Es madre de dos encantadores niños. A la Dra. Ritu le encanta pasar tiempo con sus dos hijos y su esposo. Únase a nuestra familia en North Salinas Dental.",
    ],

    specialties: {
      title: "Especialidades",
      items: [
        "Proveedor Certificado de Invisalign",
        "Odontología Cosmética",
        "Odontología Restauradora",
        "Colocación y Restauración de Implantes",
        "Coronas, Puentes y Carillas",
      ],
    },

    education: [],
    memberships: [],
  },
};

// Type export
export type DoctorContent = typeof doctorContent;
