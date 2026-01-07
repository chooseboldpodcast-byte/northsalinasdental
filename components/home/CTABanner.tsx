"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-4  bg-white/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-primary-900 font-serif text-display-2 mb-2">
          Ready to love your dentist?
        </h2>
        <p className="text-primary-600 text-md mb-4">
          Join our dental family today and experience the difference of patient-centered care.
        </p>
        <a 
          href="#appointment" 
          className="inline-block bg-primary-600 text-white hover:bg-secondary-50 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Request Appointment
        </a>
      </div>
    </section>
  );
}
