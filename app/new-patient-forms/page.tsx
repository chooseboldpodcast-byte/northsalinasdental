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

  const content = {
    en: {
      title: "New Patient Forms",
      subtitle: "Welcome to North Salinas Dental",
      intro: "The first visit to our office is designed to get you better acquainted with all we offer as well as introduce you to Dr. Ritu Bhardwaj and our caring staff.",
      instructions: "We encourage questions and do our best to always deliver quality care. Please take a moment prior to your scheduled appointment to download our patient forms. We ask that you complete the forms and bring them with you to your appointment so we may better assist you in a timely manner. Thank you for your confidence in our office, we look forward to assisting you with all your dental needs.",
      formsTitle: "Patient Forms",
      forms: [
        { name: "New Patient Registration", file: "/forms/new-patient-registration.pdf" },
        { name: "HIPPA - Patient Consent of Information", file: "/forms/hippa-patient-consent.pdf" },
        { name: "Notice of Privacy Practices", file: "/forms/notice-of-privacy-practices.pdf" },
        { name: "Financial Policy, Scheduling of Appointments, and Patient Communications", file: "/forms/financial-policy-scheduling-communications.pdf" },
      ],
      additionalFormsTitle: "Additional Forms",
      additionalForms: [
        { name: "Adult Patient English Form", file: "/forms/adult-patient-english.pdf" },
        { name: "Adult Patient Spanish Form", file: "/forms/adult-patient-spanish.pdf" },
        { name: "Child Patient English Form", file: "/forms/child-patient-english.pdf" },
        { name: "Child Patient Spanish Form", file: "/forms/child-patient-spanish.pdf" },
      ],
      privacyNotice: "Privacy Notice",
      trustTitle: "Patient Forms in Salinas",
      trustText: "Building a foundation of trust by treating our patients as special individuals is vital to our success. We understand how uneasy some patients may feel about their dental visits, and how we can make a difference in providing a relaxing and positive experience. Dr. Ritu Bhardwaj and her entire team are dedicated to providing you with excellent, personalized care and service to make your visits to our Salinas family dental office as comfortable and pleasant as possible.",
      ctaButton: "Schedule Your Appointment Today",
      downloadText: "Download",
    },
    es: {
      title: "Formularios para Nuevos Pacientes",
      subtitle: "Bienvenido a North Salinas Dental",
      intro: "La primera visita a nuestra oficina está diseñada para que conozca mejor todo lo que ofrecemos, así como para presentarle a la Dra. Ritu Bhardwaj y a nuestro atento personal.",
      instructions: "Alentamos las preguntas y hacemos todo lo posible para brindar siempre atención de calidad. Por favor, tómese un momento antes de su cita programada para descargar nuestros formularios de pacientes. Le pedimos que complete los formularios y los traiga a su cita para que podamos asistirle de manera oportuna. Gracias por su confianza en nuestra oficina, esperamos poder ayudarle con todas sus necesidades dentales.",
      formsTitle: "Formularios de Pacientes",
      forms: [
        { name: "Registro de Nuevo Paciente", file: "/forms/new-patient-registration.pdf" },
        { name: "HIPPA - Consentimiento de Información del Paciente", file: "/forms/hippa-patient-consent.pdf" },
        { name: "Aviso de Prácticas de Privacidad", file: "/forms/notice-of-privacy-practices.pdf" },
        { name: "Política Financiera, Programación de Citas y Comunicaciones con el Paciente", file: "/forms/financial-policy-scheduling-communications.pdf" },
      ],
      additionalFormsTitle: "Formularios Adicionales",
      additionalForms: [
        { name: "Formulario de Paciente Adulto en Inglés", file: "/forms/adult-patient-english.pdf" },
        { name: "Formulario de Paciente Adulto en Español", file: "/forms/adult-patient-spanish.pdf" },
        { name: "Formulario de Paciente Infantil en Inglés", file: "/forms/child-patient-english.pdf" },
        { name: "Formulario de Paciente Infantil en Español", file: "/forms/child-patient-spanish.pdf" },
      ],
      privacyNotice: "Aviso de Privacidad",
      trustTitle: "Formularios de Pacientes en Salinas",
      trustText: "Construir una base de confianza tratando a nuestros pacientes como individuos especiales es vital para nuestro éxito. Entendemos lo incómodos que algunos pacientes pueden sentirse con sus visitas dentales, y cómo podemos marcar la diferencia al proporcionar una experiencia relajante y positiva. La Dra. Ritu Bhardwaj y todo su equipo están dedicados a brindarle una atención y servicio excelentes y personalizados para hacer que sus visitas a nuestra oficina dental familiar en Salinas sean lo más cómodas y agradables posible.",
      ctaButton: "Programe Su Cita Hoy",
      downloadText: "Descargar",
    },
  };

  const t = content[language];

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {t.title}
            </h1>
            <p className="text-primary-200 text-lg">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
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
              <ul className="space-y-4">
                {t.forms.map((form, index) => (
                  <li key={index}>
                    <a
                      href={form.file}
                      download
                      className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                    >
                      <FileDown className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="hover:underline">{form.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Forms */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">
                {t.additionalFormsTitle}
              </h2>
              <ul className="space-y-4">
                {t.additionalForms.map((form, index) => (
                  <li key={index}>
                    <a
                      href={form.file}
                      download
                      className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                    >
                      <FileDown className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="hover:underline">{form.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 italic">
                {t.privacyNotice}
              </p>
            </div>

            {/* Trust Section */}
            <div className="bg-primary-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-serif text-primary-900 mb-4">
                {t.trustTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.trustText}
              </p>
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
