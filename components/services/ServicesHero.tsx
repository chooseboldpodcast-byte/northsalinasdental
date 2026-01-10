"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Comprehensive Care",
      heading: "Everything your smile needs,",
      headingAccent: "under one roof.",
      description: "From routine prevention to complete smile makeovers, we offer a full spectrum of dental services designed to keep you healthy, confident, and comfortable. Our advanced technology and compassionate approach ensure you receive the highest quality care at every visit.",
      stats: [
        { number: "8+", label: "Service Categories" },
        { number: "15+", label: "Years Experience" },
        { number: "1000+", label: "Happy Patients" }
      ]
    },
    es: {
      badge: "Atención Integral",
      heading: "Todo lo que su sonrisa necesita,",
      headingAccent: "bajo un mismo techo.",
      description: "Desde prevención de rutina hasta transformaciones completas de sonrisa, ofrecemos un espectro completo de servicios dentales diseñados para mantenerlo saludable, seguro y cómodo. Nuestra tecnología avanzada y enfoque compasivo aseguran que reciba atención de la más alta calidad en cada visita.",
      stats: [
        { number: "8+", label: "Categorías de Servicios" },
        { number: "15+", label: "Años de Experiencia" },
        { number: "1000+", label: "Pacientes Felices" }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-neutral-lavender to-secondary-50 py-20">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></span>
              {t.badge}
            </div>

            {/* Heading */}
            <h1 className="font-serif text-display-1 text-primary-900">
              {t.heading}{" "}
              <span className="text-primary-600 italic">{t.headingAccent}</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {t.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-700 font-serif">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="/images/services/services-hero.jpg"
                alt="Comprehensive dental services"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Suggested image: https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800 (Modern dental office) */}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-400 rounded-full blur-3xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
