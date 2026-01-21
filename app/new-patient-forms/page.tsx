"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useAppointment } from "@/context/AppointmentContext";
import { FileDown } from "lucide-react";

export default function NewPatientFormsPage() {
  const { language } = useLanguage();
  const { openAppointmentModal } = useAppointment();

  // Bilingual forms data - always shows both languages
  const forms = [
    {
      nameEn: "New Patient Registration",
      nameEs: "Registro de Nuevo Paciente",
      file: "/forms/new-patient-registration.pdf"
    },
    {
      nameEn: "HIPPA - Patient Consent of Information",
      nameEs: "HIPPA - Consentimiento de Información del Paciente",
      file: "/forms/hippa-patient-consent.pdf"
    },
    {
      nameEn: "Notice of Privacy Practices",
      nameEs: "Aviso de Prácticas de Privacidad",
      file: "/forms/notice-of-privacy-practices.pdf"
    },
    {
      nameEn: "Financial Policy, Scheduling of Appointments, and Patient Communications",
      nameEs: "Política Financiera, Programación de Citas y Comunicaciones con el Paciente",
      file: "/forms/financial-policy-scheduling-communications.pdf"
    },
  ];

  const content = {
    en: {
      title: "New Patient Forms",
      subtitle: "Welcome to North Salinas Dental",
      intro: "The first visit to our office is designed to get you better acquainted with all we offer as well as introduce you to Dr. Ritu Bhardwaj and our caring staff.",
      instructions: "We encourage questions and do our best to always deliver quality care. Please take a moment prior to your scheduled appointment to download our patient forms. We ask that you complete the forms and bring them with you to your appointment so we may better assist you in a timely manner. Thank you for your confidence in our office, we look forward to assisting you with all your dental needs.",
      formsTitle: "Patient Forms",
      trustTitle: "Patient Forms in Salinas",
      trustText: "Building a foundation of trust by treating our patients as special individuals is vital to our success. We understand how uneasy some patients may feel about their dental visits, and how we can make a difference in providing a relaxing and positive experience. Dr. Ritu Bhardwaj and her entire team are dedicated to providing you with excellent, personalized care and service to make your visits to our Salinas family dental office as comfortable and pleasant as possible.",
      ctaButton: "Schedule Your Appointment Today",
    },
    es: {
      title: "Formularios para Nuevos Pacientes",
      subtitle: "Bienvenido a North Salinas Dental",
      intro: "La primera visita a nuestra oficina está diseñada para que conozca mejor todo lo que ofrecemos, así como para presentarle a la Dra. Ritu Bhardwaj y a nuestro atento personal.",
      instructions: "Alentamos las preguntas y hacemos todo lo posible para brindar siempre atención de calidad. Por favor, tómese un momento antes de su cita programada para descargar nuestros formularios de pacientes. Le pedimos que complete los formularios y los traiga a su cita para que podamos asistirle de manera oportuna. Gracias por su confianza en nuestra oficina, esperamos poder ayudarle con todas sus necesidades dentales.",
      formsTitle: "Formularios de Pacientes",
      trustTitle: "Formularios de Pacientes en Salinas",
      trustText: "Construir una base de confianza tratando a nuestros pacientes como individuos especiales es vital para nuestro éxito. Entendemos lo incómodos que algunos pacientes pueden sentirse con sus visitas dentales, y cómo podemos marcar la diferencia al proporcionar una experiencia relajante y positiva. La Dra. Ritu Bhardwaj y todo su equipo están dedicados a brindarle una atención y servicio excelentes y personalizados para hacer que sus visitas a nuestra oficina dental familiar en Salinas sean lo más cómodas y agradables posible.",
      ctaButton: "Programe Su Cita Hoy",
    },
  };

  const t = content[language];

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="bg-cream py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-gray-600 text-lg">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-4 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t.intro}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.instructions}
              </p>
            </div>

            {/* Patient Forms List */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">
                {t.formsTitle}
              </h2>
              <ul className="space-y-6">
                {forms.map((form, index) => (
                  <li key={index}>
                    <a
                      href={form.file}
                      download
                      className="flex items-start gap-3 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                    >
                      <FileDown className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform mt-1" />
                      <div className="flex flex-col">
                        <span className="hover:underline text-base">{form.nameEn}</span>
                        <span className="text-gray-500 text-xs font-normal italic">{form.nameEs}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={openAppointmentModal}
                className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                {t.ctaButton}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
