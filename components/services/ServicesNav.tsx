"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesNav() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("cleaning");
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      services: [
        { id: "cleaning", label: "Cleaning & Prevention" },
        { id: "family", label: "Family Dentistry" },
        { id: "cosmetic", label: "Cosmetic Dentistry" },
        { id: "replacement", label: "Tooth Replacement" },
        { id: "extraction", label: "Extraction" },
        { id: "veneers", label: "Veneers" },
        { id: "same-day-crowns", label: "Same Day Crowns" },
        { id: "invisalign", label: "Invisalign" },
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
        { id: "veneers", label: "Carillas" },
        { id: "same-day-crowns", label: "Coronas Mismo Día" },
        { id: "invisalign", label: "Invisalign" },
        { id: "orthodontics", label: "Ortodoncia" },
        { id: "sedation", label: "Sedación" },
        { id: "technology", label: "Tecnología" }
      ]
    }
  };

  const t = content[language];

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftFade(container.scrollLeft > 0);
      setShowRightFade(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

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
      const offset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollNav = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-32 z-30 bg-white shadow-md border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:block relative py-4">
          {/* Left fade and arrow */}
          {showLeftFade && (
            <div className="absolute left-0 top-0 bottom-0 flex items-center z-10">
              <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <button
                onClick={() => scrollNav("left")}
                className="relative z-10 p-1 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors ml-1"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {t.services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeSection === service.id
                    ? "bg-primary-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Right fade and arrow */}
          {showRightFade && (
            <div className="absolute right-0 top-0 bottom-0 flex items-center z-10">
              <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
              <button
                onClick={() => scrollNav("right")}
                className="relative z-10 p-1 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors mr-1"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}
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
