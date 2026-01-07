"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesGrid() {
  const { language } = useLanguage();

  const content = {
    en: {
      overline: "Comprehensive Care",
      heading: "Everything your smile needs.",
      subheading: "From routine prevention to complete makeovers, we offer a full spectrum of dental services under one roof.",
      learnMore: "Learn more",
      services: [
        {
          title: "Cleaning and Prevention",
          description: "Regular cleanings and preventive care are the foundation of excellent oral health. Our proactive approach helps you avoid costly procedures while keeping your smile healthy and bright for years to come.",
          href: "/services#cleaning",
          image: "/images/services/cleaning.jpg"
        },
        {
          title: "Family Dentistry",
          description: "From toddlers to grandparents, we provide comprehensive dental care for every member of your family. Our warm, welcoming environment makes dental visits comfortable and stress-free for patients of all ages.",
          href: "/services#family",
          image: "/images/services/family.jpg"
        },
        {
          title: "Cosmetic Dentistry",
          description: "Your smile is one of your most powerful assets. Whether you want whiter teeth, a straighter appearance, or a complete smile makeover, our cosmetic treatments help you feel confident in every interaction.",
          href: "/services#cosmetic",
          image: "/images/services/cosmetic.jpg"
        },
        {
          title: "Tooth Replacement",
          description: "Missing teeth affect both function and appearance. We offer advanced solutions including dental implants, bridges, and dentures to restore your complete smile and ability to eat, speak, and laugh without hesitation.",
          href: "/services#replacement",
          image: "/images/services/replacement.jpg"
        },
        {
          title: "Extraction and Preservation",
          description: "Sometimes removing a tooth is necessary for your overall oral health. From wisdom teeth to overcrowded teeth, we perform extractions with precision and care, always prioritizing bone preservation for future treatment options.",
          href: "/services#extraction",
          image: "/images/services/extraction.jpg"
        },
        {
          title: "Orthodontics",
          description: "Straight teeth aren't just about aesthetics—proper alignment improves your bite, oral hygiene, and long-term dental health. We offer modern orthodontic solutions that blend beauty with functional results.",
          href: "/services#orthodontics",
          image: "/images/services/orthodontics.jpg"
        },
        {
          title: "Sedation Dentistry",
          description: "Dental anxiety shouldn't keep you from the care you need. We offer multiple sedation options tailored to your comfort level, ensuring a relaxed and anxiety-free experience during your treatment.",
          href: "/services#sedation",
          image: "/images/services/sedation.jpg"
        },
        {
          title: "Technology",
          description: "We invest in proven, state-of-the-art technology that enhances accuracy, comfort, and treatment outcomes. From digital imaging to laser dentistry, our advanced tools deliver superior care with minimal discomfort.",
          href: "/services#technology",
          image: "/images/services/technology.jpg"
        }
      ]
    },
    es: {
      overline: "Atención Integral",
      heading: "Todo lo que su sonrisa necesita.",
      subheading: "Desde prevención de rutina hasta transformaciones completas, ofrecemos un espectro completo de servicios dentales bajo un mismo techo.",
      learnMore: "Más información",
      services: [
        {
          title: "Limpieza y Prevención",
          description: "Las limpiezas regulares y el cuidado preventivo son la base de una excelente salud bucal. Nuestro enfoque proactivo le ayuda a evitar procedimientos costosos mientras mantiene su sonrisa saludable y brillante durante años.",
          href: "/services#cleaning",
          image: "/images/services/cleaning.jpg"
        },
        {
          title: "Odontología Familiar",
          description: "Desde niños pequeños hasta abuelos, brindamos atención dental integral para cada miembro de su familia. Nuestro ambiente cálido y acogedor hace que las visitas dentales sean cómodas y sin estrés para pacientes de todas las edades.",
          href: "/services#family",
          image: "/images/services/family.jpg"
        },
        {
          title: "Odontología Cosmética",
          description: "Su sonrisa es uno de sus activos más poderosos. Ya sea que desee dientes más blancos, una apariencia más recta o una transformación completa de la sonrisa, nuestros tratamientos cosméticos le ayudan a sentirse seguro en cada interacción.",
          href: "/services#cosmetic",
          image: "/images/services/cosmetic.jpg"
        },
        {
          title: "Reemplazo de Dientes",
          description: "Los dientes faltantes afectan tanto la función como la apariencia. Ofrecemos soluciones avanzadas que incluyen implantes dentales, puentes y dentaduras para restaurar su sonrisa completa y su capacidad de comer, hablar y reír sin dudarlo.",
          href: "/services#replacement",
          image: "/images/services/replacement.jpg"
        },
        {
          title: "Extracción y Preservación",
          description: "A veces es necesario extraer un diente para su salud bucal general. Desde muelas del juicio hasta dientes apiñados, realizamos extracciones con precisión y cuidado, siempre priorizando la preservación ósea para futuras opciones de tratamiento.",
          href: "/services#extraction",
          image: "/images/services/extraction.jpg"
        },
        {
          title: "Ortodoncia",
          description: "Los dientes rectos no son solo estética: la alineación adecuada mejora su mordida, higiene bucal y salud dental a largo plazo. Ofrecemos soluciones ortodónticas modernas que combinan belleza con resultados funcionales.",
          href: "/services#orthodontics",
          image: "/images/services/orthodontics.jpg"
        },
        {
          title: "Odontología con Sedación",
          description: "La ansiedad dental no debe impedirle recibir la atención que necesita. Ofrecemos múltiples opciones de sedación adaptadas a su nivel de comodidad, asegurando una experiencia relajada y sin ansiedad durante su tratamiento.",
          href: "/services#sedation",
          image: "/images/services/sedation.jpg"
        },
        {
          title: "Tecnología",
          description: "Invertimos en tecnología de vanguardia comprobada que mejora la precisión, comodidad y resultados del tratamiento. Desde imágenes digitales hasta odontología láser, nuestras herramientas avanzadas brindan atención superior con molestias mínimas.",
          href: "/services#technology",
          image: "/images/services/technology.jpg"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="services" className="py-24 bg-purple-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-lg font-semibold text-primary-600 uppercase tracking-wider mb-4">
            {t.overline}
          </span>
          <h2 className="text-display-2 font-serif text-gray-900 mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-gray-600 text-md max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={service.href}
                className="group block h-full rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-105"
              >
                {/* Card with Background Image and Overlay */}
                <div className="relative h-full min-h-[400px] flex flex-col">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/95 via-primary-900/75 to-primary-900/90 group-hover:from-primary-800/80 group-hover:via-primary-800/65 group-hover:to-primary-800/75 transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-secondary-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary-100 text-sm mb-6 flex-1 leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-secondary-300 font-semibold text-sm group-hover:text-secondary-200 group-hover:gap-2 transition-all mt-auto">
                      {t.learnMore}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
