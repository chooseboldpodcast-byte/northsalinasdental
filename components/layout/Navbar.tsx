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

interface NavLinks {
  en: NavLink[];
  es: NavLink[];
}

const navLinks: NavLinks = {
  en: [
    { href: "/", label: "Home" },
    {
      label: "Services",
      dropdown: [
        { href: "/services#cleaning", label: "Cleaning & Prevention" },
        { href: "/services#family", label: "Family Dentistry" },
        { href: "/services#cosmetic", label: "Cosmetic Dentistry" },
        { href: "/services#veneers", label: "Veneers" },
        { href: "/services#same-day-crowns", label: "Same-Day Crowns" },
        { href: "/services#invisalign", label: "Invisalign" },
        { href: "/services#orthodontics", label: "Orthodontics" },
        { href: "/services#replacement", label: "Tooth Replacement" },
        { href: "/services#extraction", label: "Extractions" },
        { href: "/services#sedation", label: "Sedation Dentistry" },
      ],
    },
    { href: "/team", label: "Our Team" },
    {
      label: "New Patients",
      dropdown: [
        { href: "/new-patient-forms", label: "New Patient Forms" },
        { href: "/financial-information", label: "Financial Information" },
      ],
    },
    { href: "/team", label: "Insurance" },
    { href: "/specials", label: "Specials" },
    { href: "/contact", label: "Contact" },
  ],
  es: [
    { href: "/", label: "Inicio" },
    {
      label: "Servicios",
      dropdown: [
        { href: "/services#cleaning", label: "Limpieza y Prevención" },
        { href: "/services#family", label: "Odontología Familiar" },
        { href: "/services#cosmetic", label: "Odontología Cosmética" },
        { href: "/services#veneers", label: "Carillas" },
        { href: "/services#same-day-crowns", label: "Coronas en el Mismo Día" },
        { href: "/services#invisalign", label: "Invisalign" },
        { href: "/services#orthodontics", label: "Ortodoncia" },
        { href: "/services#replacement", label: "Reemplazo de Dientes" },
        { href: "/services#extraction", label: "Extracciones" },
        { href: "/services#sedation", label: "Odontología con Sedación" },
      ],
    },
    { href: "/team", label: "Nuestro Equipo" },
    {
      label: "Nuevos Pacientes",
      dropdown: [
        { href: "/new-patient-forms", label: "Formularios para Nuevos Pacientes" },
        { href: "/financial-information", label: "Información Financiera" },
      ],
    },
    { href: "/team", label: "Seguro" },
    { href: "/specials", label: "Ofertas Especiales" },
    { href: "/contact", label: "Contacto" },
  ],
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const { language } = useLanguage();

  const links = language === "es" ? navLinks.es : navLinks.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
