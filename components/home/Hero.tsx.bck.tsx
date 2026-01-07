"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Modern dental office interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 text-sm font-medium rounded-full mb-6">
              Accepting New Patients
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-display-1 font-serif text-slate-800 mb-6"
          >
            Dentistry reimagined
            <br />
            for <em className="text-sage-600">wellness</em>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
          >
            Welcome to North Salinas Dental, where we create beautiful and healthy smiles by combining advanced technology with patient comfort and personalized care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link href="/contact" className="btn-primary">
              Request Appointment
            </Link>
            <Link href="#services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-sage-200 overflow-hidden"
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      i === 1
                        ? "1494790108377-be9c29b29330"
                        : i === 2
                        ? "1507003211169-0a1dd7228f2d"
                        : i === 3
                        ? "1438761681033-6461ffad8d80"
                        : "1472099645785-5658abf4ff4e"
                    }?w=100&h=100&fit=crop&crop=face`}
                    alt="Happy patient"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Rating */}
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <strong className="text-slate-800">500+</strong> Happy Patients
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
