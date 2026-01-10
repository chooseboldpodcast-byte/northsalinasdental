"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesNav() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("cleaning");

  const content = {
    en: {
      services: [
        { id: "cleaning", label: "Cleaning & Prevention" },
        { id: "family", label: "Family Dentistry" },
        { id: "cosmetic", label: "Cosmetic Dentistry" },
        { id: "replacement", label: "Tooth Replacement" },
        { id: "extraction", label: "Extraction" },
        { id: "orthodontics", label: "Orthodontics" },
        { id: "sedation", label: "Sedation" },
        { id: "technology", label: "Technology" }
      ]
    },
    es: {
      services: [
        { id: "cleaning", label: "Limpieza y Prevención" },
        { id: "family", label: "Odontología Familiar" },
        { id: "cosmetic", label: "Odontología Cosmética" },
        { id: "replacement", label: "Reemplazo de Dientes" },
        { id: "extraction", label: "Extracción" },
        { id: "orthodontics", label: "Ortodoncia" },
        { id: "sedation", label: "Sedación" },
        { id: "technology", label: "Tecnología" }
      ]
    }
  };

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = t.services.map(s => s.id);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [t.services]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-32 z-30 bg-white shadow-md border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-1 py-4 overflow-x-auto">
          {t.services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeSection === service.id
                  ? "bg-primary-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-primary-50 hover:text-primary-700"
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden py-3">
          <select
            value={activeSection}
            onChange={(e) => scrollToSection(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-2 border-primary-200 focus:border-primary-500 focus:outline-none font-medium text-gray-700"
          >
            {t.services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
