"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// Placeholder blog posts
const blogPosts = [
  {
    id: 1,
    titleEn: "5 Tips for Maintaining a Healthy Smile",
    titleEs: "5 Consejos para Mantener una Sonrisa Saludable",
    excerptEn: "Discover simple daily habits that can help keep your teeth and gums healthy for years to come.",
    excerptEs: "Descubre hábitos diarios simples que pueden ayudar a mantener tus dientes y encías saludables por años.",
    date: "2026-01-15",
    category: "Oral Health",
    categoryEs: "Salud Oral",
  },
  {
    id: 2,
    titleEn: "Understanding Invisalign: Is It Right for You?",
    titleEs: "Entendiendo Invisalign: ¿Es Adecuado para Ti?",
    excerptEn: "Learn about the benefits of Invisalign clear aligners and find out if they're the right choice for your smile.",
    excerptEs: "Conoce los beneficios de los alineadores transparentes Invisalign y descubre si son la opción correcta para tu sonrisa.",
    date: "2026-01-10",
    category: "Cosmetic Dentistry",
    categoryEs: "Odontología Cosmética",
  },
  {
    id: 3,
    titleEn: "The Importance of Regular Dental Checkups",
    titleEs: "La Importancia de los Chequeos Dentales Regulares",
    excerptEn: "Find out why scheduling regular dental visits is crucial for preventing serious oral health issues.",
    excerptEs: "Descubre por qué programar visitas dentales regulares es crucial para prevenir problemas serios de salud oral.",
    date: "2026-01-05",
    category: "Prevention",
    categoryEs: "Prevención",
  },
];

export default function BlogPage() {
  const { language, config } = useLanguage();

  const content = {
    en: {
      title: "Blog",
      subtitle: "Dental Tips & News",
      description: "Stay informed with the latest dental health tips, news, and updates from our team.",
      readMore: "Read More",
      comingSoon: "More articles coming soon!",
      subscribe: "Subscribe to Our Newsletter",
      subscribeDesc: "Get the latest dental tips and updates delivered to your inbox.",
      emailPlaceholder: "Enter your email",
      subscribeBtn: "Subscribe",
    },
    es: {
      title: "Blog",
      subtitle: "Consejos y Noticias Dentales",
      description: "Mantente informado con los últimos consejos de salud dental, noticias y actualizaciones de nuestro equipo.",
      readMore: "Leer Más",
      comingSoon: "¡Más artículos próximamente!",
      subscribe: "Suscríbete a Nuestro Boletín",
      subscribeDesc: "Recibe los últimos consejos dentales y actualizaciones en tu correo.",
      emailPlaceholder: "Ingresa tu correo",
      subscribeBtn: "Suscribirse",
    },
  };

  const t = content[language];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-primary-100 mb-2">{t.subtitle}</p>
          <p className="text-primary-200 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary-400" />
                </div>

                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
                      {language === "es" ? post.categoryEs : post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {language === "es" ? post.titleEs : post.titleEn}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {language === "es" ? post.excerptEs : post.excerptEn}
                  </p>

                  {/* Read More Link */}
                  <button className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    {t.readMore}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <p className="text-center text-gray-500 mt-12 text-lg">
            {t.comingSoon}
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            {t.subscribe}
          </h2>
          <p className="text-gray-600 mb-8">{t.subscribeDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent flex-1 max-w-md"
            />
            <button className="px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors">
              {t.subscribeBtn}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            {language === "es" ? "¿Listo para Tu Próxima Cita?" : "Ready for Your Next Appointment?"}
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            {language === "es"
              ? "Contáctenos hoy para programar su visita."
              : "Contact us today to schedule your visit."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${config.phone.replace(/[.\-\s]/g, "")}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              {language === "es" ? "Llamar Ahora" : "Call Now"}: {config.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              {language === "es" ? "Contáctenos" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
