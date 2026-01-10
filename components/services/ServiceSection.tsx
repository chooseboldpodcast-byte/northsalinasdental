"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { serviceContent } from "@/data/serviceContent";

interface ServiceSectionProps {
  serviceId: string;
}

export default function ServiceSection({ serviceId }: ServiceSectionProps) {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = serviceContent[serviceId]?.[language];

  if (!service) return null;

  const isEven = ["family", "replacement", "orthodontics", "technology"].includes(serviceId);

  return (
    <section id={serviceId} className="py-20 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-start ${isEven ? "lg:flex-row-reverse" : ""}`}>
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`relative ${isEven ? "lg:order-2" : ""}`}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative blob */}
            <div className={`absolute -top-4 ${isEven ? "-left-4" : "-right-4"} w-24 h-24 bg-secondary-400 rounded-full blur-3xl opacity-50`}></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={isEven ? "lg:order-1" : ""}
          >
            {/* Title */}
            <h2 className="text-display-2 font-serif text-primary-900 mb-6">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {service.description}
            </p>

            {/* Treatments List */}
            <div className="mb-8">
              <h3 className="text-xl font-serif text-primary-800 mb-4">
                {service.treatmentsTitle}
              </h3>
              <ul className="space-y-3">
                {service.treatments.map((treatment, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-secondary-600" />
                    </span>
                    <span className="text-gray-700">{treatment}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-serif text-primary-800 mb-4">
                {service.benefitsTitle}
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary-700" />
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <a
              href="#appointment"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-105"
            >
              {service.ctaButton}
            </a>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-serif text-primary-900 mb-8 text-center">
            {service.faqTitle}
          </h3>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-card overflow-hidden border border-primary-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-20 border-t border-gray-200"></div>
      </div>
    </section>
  );
}
