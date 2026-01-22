"use client";

import Image from "next/image";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

interface StaffMember {
  name: string;
  role: string;
  image: string;
}

export default function TeamPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      pageTitle: "Meet Our Team",
      pageSubtitle: "Dedicated professionals committed to your smile",
      doctorSection: {
        overline: "MEET THE DOCTOR",
        name: "Dr. Ritu Bhardwaj, DDS",
        bio: [
          "Looking for high quality dentist in a happy, healthy, family-oriented environment? If so, North Salinas Dental is the place for all your and your family's dental needs. Dr Ritu Bhardwaj and her staff realizes dentistry is not just about providing excellent dental care but creating life-long relationships with their patients. Through her expert advice, you are sure to reach a state of optimal dental health.",
          "Smile makeovers is one of Dr. Ritu's favorite aspects of dentistry. Her clinic specializes in Invisalign technology and both cosmetic and restorative dentistry. Dr. Ritu is an expert in crowns, bridges, onlays, and veneers and also specializes in both components of implant dentistry, which includes placing implants and restoring them with crowns.",
          "Dr. Ritu, began her dental career as an associate dentist in Monterey County. Now she is thrilled to open doors to her new practice, North Salinas dental to serve her local community. Her work philosophy evolves from her own personality; she is a zealous precision-oriented dentist who strives for perfection while providing a comforting atmosphere and gentle care for her patients. She is a mom to two lovely boys. Dr Ritu loves spending time with her two sons and her husband. Come join our family at North Salinas Dental.",
        ],
        specialties: "Specialties",
        specialtiesList: [
          "Invisalign Certified Provider",
          "Cosmetic Dentistry",
          "Restorative Dentistry",
          "Implant Placement & Restoration",
          "Crowns, Bridges & Veneers",
        ],
      },
      staffSection: {
        title: "Our Friendly Staff",
        subtitle: "Meet the team that makes your visit comfortable and enjoyable",
        members: [
          { name: "Maria Garcia", role: "Office Manager", image: "/images/placeholder-staff-1.jpg" },
          { name: "Jennifer Lopez", role: "Dental Hygienist", image: "/images/placeholder-staff-2.jpg" },
          { name: "Sarah Johnson", role: "Dental Assistant", image: "/images/placeholder-staff-3.jpg" },
          { name: "Emily Chen", role: "Front Desk Coordinator", image: "/images/placeholder-staff-4.jpg" },
        ] as StaffMember[],
      },
      cta: {
        title: "Ready to Join Our Family?",
        subtitle: "Schedule your appointment today and experience the difference",
        button: "Book Appointment",
      },
    },
    es: {
      pageTitle: "Conozca Nuestro Equipo",
      pageSubtitle: "Profesionales dedicados comprometidos con su sonrisa",
      doctorSection: {
        overline: "CONOZCA A LA DOCTORA",
        name: "Dra. Ritu Bhardwaj, DDS",
        bio: [
          "¿Busca un dentista de alta calidad en un ambiente feliz, saludable y familiar? Si es así, North Salinas Dental es el lugar para todas las necesidades dentales suyas y de su familia. La Dra. Ritu Bhardwaj y su personal entienden que la odontología no se trata solo de proporcionar una excelente atención dental, sino de crear relaciones de por vida con sus pacientes. A través de sus consejos expertos, seguramente alcanzará un estado de salud dental óptima.",
          "Las transformaciones de sonrisa son uno de los aspectos favoritos de la Dra. Ritu en la odontología. Su clínica se especializa en tecnología Invisalign y en odontología cosmética y restauradora. La Dra. Ritu es experta en coronas, puentes, incrustaciones y carillas, y también se especializa en ambos componentes de la odontología de implantes, que incluye la colocación de implantes y su restauración con coronas.",
          "La Dra. Ritu comenzó su carrera dental como dentista asociada en el Condado de Monterey. Ahora está emocionada de abrir las puertas de su nueva práctica, North Salinas Dental, para servir a su comunidad local. Su filosofía de trabajo evoluciona de su propia personalidad; es una dentista entusiasta y orientada a la precisión que se esfuerza por la perfección mientras proporciona un ambiente reconfortante y atención gentil para sus pacientes. Es madre de dos encantadores niños. A la Dra. Ritu le encanta pasar tiempo con sus dos hijos y su esposo. Únase a nuestra familia en North Salinas Dental.",
        ],
        specialties: "Especialidades",
        specialtiesList: [
          "Proveedor Certificado de Invisalign",
          "Odontología Cosmética",
          "Odontología Restauradora",
          "Colocación y Restauración de Implantes",
          "Coronas, Puentes y Carillas",
        ],
      },
      staffSection: {
        title: "Nuestro Amable Personal",
        subtitle: "Conozca al equipo que hace su visita cómoda y agradable",
        members: [
          { name: "Maria Garcia", role: "Gerente de Oficina", image: "/images/placeholder-staff-1.jpg" },
          { name: "Jennifer Lopez", role: "Higienista Dental", image: "/images/placeholder-staff-2.jpg" },
          { name: "Sarah Johnson", role: "Asistente Dental", image: "/images/placeholder-staff-3.jpg" },
          { name: "Emily Chen", role: "Coordinadora de Recepción", image: "/images/placeholder-staff-4.jpg" },
        ] as StaffMember[],
      },
      cta: {
        title: "¿Lista para Unirse a Nuestra Familia?",
        subtitle: "Programe su cita hoy y experimente la diferencia",
        button: "Reservar Cita",
      },
    },
  };

  const t = content[language];

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              {t.pageSubtitle}
            </p>
          </div>
        </section>

        {/* Doctor Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left - Doctor Image */}
              <div className="relative">
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-elevated">
                  <Image
                    src="/images/dr-ritu-bhardwaj.jpg"
                    alt={t.doctorSection.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-300 rounded-full opacity-50 -z-10 hidden lg:block"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-200 rounded-full opacity-50 -z-10 hidden lg:block"></div>
              </div>

              {/* Right - Doctor Info */}
              <div className="lg:pl-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-2">
                  {t.doctorSection.overline}
                </p>
                <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6">
                  {t.doctorSection.name}
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  {t.doctorSection.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Specialties */}
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="font-serif text-lg text-gray-900 mb-4">
                    {t.doctorSection.specialties}
                  </h3>
                  <ul className="space-y-2">
                    {t.doctorSection.specialtiesList.map((specialty, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary-600 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4">
                {t.staffSection.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.staffSection.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.staffSection.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Placeholder Image */}
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-primary-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-serif text-lg text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-full transition-all duration-300 hover:bg-primary-50 hover:scale-105 hover:shadow-lg"
            >
              {t.cta.button}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
