"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavLink {
  href?: string;
  label: string;
  dropdown?: { href: string; label: string }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const { language, t, config } = useLanguage();

  // Build navigation links dynamically based on config
  const buildNavLinks = (): NavLink[] => {
    const links: NavLink[] = [];

    // Home
    if (config.navigation.showHome) {
      links.push({ href: "/", label: language === "es" ? "Inicio" : "Home" });
    }

    // Services (with dropdown)
    if (config.navigation.showServices) {
      links.push({
        label: t.services,
        dropdown: [
          { href: "/services#cleaning", label: language === "es" ? "Limpieza y Prevención" : "Cleaning & Prevention" },
          { href: "/services#family", label: language === "es" ? "Odontología Familiar" : "Family Dentistry" },
          { href: "/services#cosmetic", label: language === "es" ? "Odontología Cosmética" : "Cosmetic Dentistry" },
          { href: "/services#veneers", label: language === "es" ? "Carillas" : "Veneers" },
          { href: "/services#same-day-crowns", label: language === "es" ? "Coronas en el Mismo Día" : "Same-Day Crowns" },
          { href: "/services#invisalign", label: "Invisalign" },
          { href: "/services#orthodontics", label: language === "es" ? "Ortodoncia" : "Orthodontics" },
          { href: "/services#replacement", label: language === "es" ? "Reemplazo de Dientes" : "Tooth Replacement" },
          { href: "/services#extraction", label: language === "es" ? "Extracciones" : "Extractions" },
          { href: "/services#sedation", label: language === "es" ? "Odontología con Sedación" : "Sedation Dentistry" },
        ],
      });
    }

    // Our Team
    if (config.navigation.showTeam) {
      links.push({ href: "/team", label: t.ourTeam });
    }

    // New Patients (with dropdown)
    if (config.navigation.showNewPatients) {
      const dropdown: { href: string; label: string }[] = [];

      if (config.navigation.showNewPatientForms) {
        dropdown.push({ href: "/new-patient-forms", label: t.newPatientForms });
      }
      if (config.navigation.showFinancialInfo) {
        dropdown.push({ href: "/financial-information", label: t.financialInfo });
      }

      if (dropdown.length > 0) {
        links.push({
          label: t.newPatients,
          dropdown,
        });
      }
    }

    // Insurance
    if (config.navigation.showInsurance) {
      links.push({ href: "/insurance", label: t.insurance });
    }

    // Specials
    if (config.navigation.showSpecials) {
      links.push({ href: "/specials", label: t.specials });
    }

    // Reviews
    if (config.navigation.showReviews) {
      links.push({ href: "/reviews", label: t.reviews });
    }

    // Blog
    if (config.navigation.showBlog) {
      links.push({ href: "/blog", label: t.blog });
    }

    // Contact
    if (config.navigation.showContact) {
      links.push({ href: "/contact", label: t.contact });
    }

    return links;
  };

  const links = buildNavLinks();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMobileDropdown = (label: string) => {
    setExpandedDropdown(expandedDropdown === label ? null : label);
  };

  return (
    <>
      <nav className="sticky top-20 z-40 bg-primary-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-12">
            <div className="hidden lg:flex items-center justify-center space-x-8">
              {links.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative group">
                    <button className="text-white hover:text-primary-200 transition-colors duration-200 text-sm font-bold flex items-center gap-1">
                      {link.label}
                      <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href! + link.label}
                    href={link.href!}
                    className="text-white hover:text-primary-200 transition-colors duration-200 text-sm font-bold"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 hover:bg-primary-800 rounded-lg transition-colors ml-auto"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed top-32 left-0 right-0 z-40 bg-primary-800 shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="flex items-center justify-between w-full text-white hover:text-primary-200 transition-colors duration-200 text-base font-medium py-2"
                  >
                    {link.label}
                    {expandedDropdown === link.label ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedDropdown === link.label && (
                    <div className="pl-4 space-y-2 mt-2">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-primary-200 hover:text-white transition-colors duration-200 text-sm py-2"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href! + link.label}
                  href={link.href!}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-primary-200 transition-colors duration-200 text-base font-medium py-2"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
