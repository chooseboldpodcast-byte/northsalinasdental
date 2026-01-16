"use client";

import { motion } from "framer-motion";
import { useAppointment } from "@/context/AppointmentContext";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function CTABanner() {
  const { openAppointmentModal } = useAppointment();
  const { language } = useLanguage();

  const content = {
    en: {
      heading: "Looking for best dentist in Salinas?",
      subheading: "Join our dental family today and experience the difference of patient-centered care.",
      button: "Request Appointment",
      features: [
        {
          title: "SALINAS COSMETIC DENTISTRY",
          description: "It's possible to improve not only the health of your smile, but also its appearance. We offer ",
          links: [
            { text: "dental veneers", href: "/services#veneers" },
            { text: "teeth whitening", href: "/services#cosmetic" }
          ],
          suffix: ", and so much more."
        },
        {
          title: "SAME DAY CROWNS",
          description: "Our ",
          links: [
            { text: "CEREC Dental Crowns", href: "/services#same-day-crowns" }
          ],
          suffix: " are available same day, allowing you to walk out of the office with a smile that you can feel proud to display."
        },
        {
          title: "SALINAS INVISALIGN",
          description: "Invisalign is a clear ",
          links: [
            { text: "alternative to traditional metal braces", href: "/services#invisalign" }
          ],
          suffix: ". These plastic aligners make it possible to straighten your teeth discreetly and comfortably."
        }
      ]
    },
    es: {
      heading: "¿Busca el mejor dentista en Salinas?",
      subheading: "Únase a nuestra familia dental hoy y experimente la diferencia del cuidado centrado en el paciente.",
      button: "Solicitar Cita",
      features: [
        {
          title: "ODONTOLOGÍA COSMÉTICA EN SALINAS",
          description: "Es posible mejorar no solo la salud de su sonrisa, sino también su apariencia. Ofrecemos ",
          links: [
            { text: "carillas dentales", href: "/services#veneers" },
            { text: "blanqueamiento dental", href: "/services#cosmetic" }
          ],
          suffix: ", y mucho más."
        },
        {
          title: "CORONAS EN EL MISMO DÍA",
          description: "Nuestras ",
          links: [
            { text: "Coronas Dentales CEREC", href: "/services#same-day-crowns" }
          ],
          suffix: " están disponibles el mismo día, permitiéndole salir del consultorio con una sonrisa de la que puede sentirse orgulloso."
        },
        {
          title: "INVISALIGN EN SALINAS",
          description: "Invisalign es una ",
          links: [
            { text: "alternativa clara a los brackets metálicos tradicionales", href: "/services#invisalign" }
          ],
          suffix: ". Estos alineadores de plástico hacen posible enderezar sus dientes de manera discreta y cómoda."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Feature Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.features.map((feature, index) => (
            <div key={index} className="text-left">
              <h3 className="text-gray-900 font-bold text-sm tracking-wide mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
                {feature.links.map((link, linkIndex) => (
                  <span key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-primary-600 font-semibold hover:text-primary-700 hover:underline"
                    >
                      {link.text}
                    </Link>
                    {linkIndex < feature.links.length - 1 && ", "}
                  </span>
                ))}
                {feature.suffix}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-primary-900 font-serif text-display-2 mb-2">
            {t.heading}
          </h2>
          <p className="text-primary-600 text-md mb-6">
            {t.subheading}
          </p>
          <button
            onClick={openAppointmentModal}
            className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {t.button}
          </button>
        </div>
      </div>
    </section>
  );
}
