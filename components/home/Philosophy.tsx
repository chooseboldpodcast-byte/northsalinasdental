"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Philosophy() {
  const { language } = useLanguage();

  const content = {
    en: {
      overline: "Who We Are",
      heading: "We treat the person,",
      headingLine2: "not just the teeth.",
      description1: "At North Salinas Dental, we believe oral health is the gateway to total body wellness. Our holistic approach considers how your smile affects your overall health, confidence, and life.",
      description2: "We're fluent in English, Spanish, Hindi, and Punjabi, so you can communicate comfortably and feel truly welcome.",
      benefits: [
        "Biocompatible, non-toxic materials",
        "Minimally invasive techniques",
        "Personalized wellness plans"
      ],
      testimonial: "\"Always a pleasant experience, they make me feel comfortable and the staff is always attentive and friendly!\"",
      testimonialAuthor: "— Makenna Hertsch, Patient",
      ctaButton: "Meet Dr. Ritu Bhardwaj",
      imageAlt: "Happy patient with beautiful smile"
    },
    es: {
      overline: "Quiénes Somos",
      heading: "Tratamos a la persona,",
      headingLine2: "no solo los dientes.",
      description1: "En North Salinas Dental, creemos que la salud bucal es la puerta de entrada al bienestar total del cuerpo. Nuestro enfoque holístico considera cómo su sonrisa afecta su salud general, confianza y vida.",
      description2: "Hablamos inglés, español, hindi y punjabi con fluidez, para que pueda comunicarse cómodamente y sentirse verdaderamente bienvenido.",
      benefits: [
        "Materiales biocompatibles y no tóxicos",
        "Técnicas mínimamente invasivas",
        "Planes de bienestar personalizados"
      ],
      testimonial: "\"¡Siempre es una experiencia agradable, me hacen sentir cómoda y el personal siempre es atento y amable!\"",
      testimonialAuthor: "— Makenna Hertsch, Paciente",
      ctaButton: "Conozca a la Dra. Bhardwaj",
      imageAlt: "Paciente feliz con una sonrisa hermosa"
    }
  };

  const t = content[language];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="/images/philosophy-patient.jpg"
                alt={t.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            {/* Testimonial Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-12 max-w-sm bg-white rounded-2xl p-6 shadow-elevated border border-primary-100"
            >
              <p className="font-serif text-md italic text-gray-700 mb-4">
                {t.testimonial}
              </p>
              <p className="text-xs font-semibold text-primary-800 uppercase tracking-wide">
                {t.testimonialAuthor}
              </p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
              {t.overline}
            </span>
            <h2 className="text-display-2 font-serif text-gray-900 mb-6">
              {t.heading}
              <br />
              {t.headingLine2}
            </h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              {t.description1}
            </p>
            <p className="text-sm text-gray-700 mb-8 leading-relaxed">
              {t.description2}
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-10">
              {t.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary-600" />
                  </span>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Link 
              href="/team" 
              className="inline-block bg-white hover:bg-secondary-50 text-primary-700 border-2 border-primary-600 hover:border-secondary-500 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              {t.ctaButton}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
