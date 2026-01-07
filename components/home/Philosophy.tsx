"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Biocompatible, non-toxic materials",
  "Minimally invasive techniques",
  "Personalized wellness plans",
];

export default function Philosophy() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
                alt="Happy patient with beautiful smile"
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
              className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-12 max-w-sm bg-white rounded-2xl p-6 shadow-elevated"
            >
              <p className="font-serif text-lg italic text-slate-700 mb-4">
                "Always a pleasant experience, they make me feel comfortable and the staff is always attentive and friendly!"
              </p>
              <p className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
                — Makenna Hertsch, Patient
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
            <span className="section-overline mb-4 block">Who We Are</span>
            <h2 className="text-display-2 font-serif text-slate-800 mb-6">
              We treat the person,
              <br />
              not just the teeth.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At North Salinas Dental, we believe oral health is the gateway to
              total body wellness. Our holistic approach considers how your
              smile affects your overall health, confidence, and life.
              <br />
              We're fluent in English, Spanish, Hindi, and Punjabi, so you can communicate comfortably and feel truly welcome.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-sage-600" />
                  </span>
                  <span className="text-slate-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/team" className="btn-secondary">
              Meet Dr. Bhardwaj
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
