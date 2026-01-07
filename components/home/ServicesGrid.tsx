"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: "✨",
    title: "General Dentistry",
    description: "Cleanings, exams, and prevention.",
    href: "/services#general",
  },
  {
    icon: "💎",
    title: "Cosmetic Design",
    description: "Veneers, whitening, and smile makeovers.",
    href: "/services#cosmetic",
  },
  {
    icon: "🦷",
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions.",
    href: "/services#implants",
  },
  {
    icon: "🔧",
    title: "Restorative",
    description: "Crowns, bridges, and fillings.",
    href: "/services#restorative",
  },
  {
    icon: "🚑",
    title: "Emergency Care",
    description: "Same-day appointments for urgent needs.",
    href: "/services#emergency",
  },
  {
    icon: "🧸",
    title: "Pediatric",
    description: "Gentle care for your little ones.",
    href: "/services#pediatric",
  },
];

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
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-overline mb-4 block">Comprehensive Care</span>
          <h2 className="text-display-2 font-serif text-slate-800 mb-4">
            Everything your smile needs.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From routine prevention to complete makeovers, we offer a full
            spectrum of dental services under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={service.href}
                className="card group block h-full"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="font-serif text-heading-3 text-slate-800 mb-2 group-hover:text-sage-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-sage-600 font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
