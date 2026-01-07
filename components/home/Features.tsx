"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Technology",
    description:
      "State-of-the-art 3D imaging and laser dentistry for precise, pain-free treatments.",
  },
  {
    icon: Heart,
    title: "Anxiety-Free Care",
    description:
      "Comfort amenities, sedation options, and a gentle touch for nervous patients.",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description:
      "Early morning and evening appointments to fit your busy lifestyle.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-neutral-lavender to-secondary-50">
      <div className="container-wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 mb-6">
                <feature.icon className="w-7 h-7 text-sage-600" />
              </div>
              <h3 className="font-serif text-heading-3 text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
