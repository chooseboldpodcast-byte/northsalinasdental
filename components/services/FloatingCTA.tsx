"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingCTA() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const content = {
    en: {
      buttonText: "Request Appointment"
    },
    es: {
      buttonText: "Solicitar Cita"
    }
  };

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a
            href="#appointment"
            className="flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-full font-semibold shadow-elevated hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            <span className="hidden sm:inline">{t.buttonText}</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
