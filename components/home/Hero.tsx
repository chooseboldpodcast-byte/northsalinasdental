"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useAppointment } from "@/context/AppointmentContext";

export default function HeroExample() {
  const { language } = useLanguage();
  const { openAppointmentModal } = useAppointment();

  const content = {
    en: {
      badge: "Accepting New Patients",
      heading: "Dentistry reimagined for",
      headingAccent: "wellness",
      description: "Welcome to North Salinas Dental, Office of Dr. Ritu Bhardwaj DDS, where we create beautiful and healthy smiles by combining advanced technology with patient comfort and personalized care.",
      ctaPrimary: "Request Appointment",
      ctaSecondary: "Explore Services",
      socialProof: "5-star Customer Rating",
      floatingCard: {
        title: "Same-Day Appointments",
        subtitle: "Available for urgent care"
      }
    },
    es: {
      badge: "Aceptamos Nuevos Pacientes",
      heading: "Odontología reinventada para el",
      headingAccent: "bienestar",
      description: "Bienvenido a North Salinas Dental, donde creamos sonrisas hermosas y saludables combinando tecnología avanzada con comodidad del paciente y atención personalizada.",
      ctaPrimary: "Solicitar Cita",
      ctaSecondary: "Explorar Servicios",
      socialProof: "Calificación de 5 Estrellas",
      floatingCard: {
        title: "Citas el Mismo Día",
        subtitle: "Disponible para atención urgente"
      }
    }
  };

  const t = content[language];

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-neutral-lavender to-secondary-50">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></span>
              {t.badge}
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-display-1 text-primary-900">
              {t.heading}{" "}
              <span className="text-primary-600 italic">{t.headingAccent}</span>.
            </h1>

            {/* Description */}
            <p className="text-md text-gray-700 leading-relaxed max-w-xl">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openAppointmentModal}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-105"
              >
                {t.ctaPrimary}
              </button>

              <a
                href="/services"
                className="bg-white hover:bg-secondary-50 text-primary-700 border-2 border-primary-200 hover:border-secondary-300 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block"
              >
                {t.ctaSecondary}
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  <span className="text-primary-700 font-bold">{t.socialProof}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-4xl overflow-hidden shadow-elevated">
              {/* Replace with actual image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/hero-image1.jpg"
                  alt="North Salinas Dental Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                  priority
                />
              </div>

              {/* Floating card overlay */}
              <div className="absolute bottom-6 left-8 right-8 bg-white/95 backdrop-blur-sm p-2 rounded-2xl shadow-card">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">{t.floatingCard.title}</p>
                    <p className="text-xs text-gray-600">{t.floatingCard.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-18 h-24 bg-secondary-400 rounded-full blur-3xl opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-18 h-12 bg-primary-400 rounded-full blur-3xl opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
