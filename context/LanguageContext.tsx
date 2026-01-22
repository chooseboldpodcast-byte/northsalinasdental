// context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { siteConfig } from "@/config";

type Language = "en" | "es";

interface Translations {
  // TopBar
  requestAppointment: string;
  scheduleNow: string;
  visitUs: string;
  contactUs: string;

  // Navigation
  home: string;
  services: string;
  ourTeam: string;
  newPatients: string;
  newPatientForms: string;
  financialInfo: string;
  insurance: string;
  specials: string;
  reviews: string;
  blog: string;
  contact: string;

  // Mobile Bottom Nav
  menu: string;
  ourDoctor: string;
  call: string;
  bookOnline: string;

  // Common
  hours: string;
  learnMore: string;
  bookAppointment: string;
  callNow: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  /** Site configuration - for non-translated values like phone, address */
  config: typeof siteConfig;
}

const translations: Record<Language, Translations> = {
  en: {
    // TopBar
    requestAppointment: "Request Appointment",
    scheduleNow: "Schedule Now",
    visitUs: "Visit Us",
    contactUs: "Contact Us",

    // Navigation
    home: "Home",
    services: "Services",
    ourTeam: "Our Team",
    newPatients: "New Patients",
    newPatientForms: "New Patient Forms",
    financialInfo: "Financial Information",
    insurance: "Insurance",
    specials: "Specials",
    reviews: "Reviews",
    blog: "Blog",
    contact: "Contact",

    // Mobile Bottom Nav
    menu: "Menu",
    ourDoctor: "Our Doctor",
    call: "Call",
    bookOnline: "Book Online",

    // Common
    hours: "Hours",
    learnMore: "Learn More",
    bookAppointment: "Book Appointment",
    callNow: "Call Now",
  },
  es: {
    // TopBar
    requestAppointment: "Solicitar Cita",
    scheduleNow: "Agendar Ahora",
    visitUs: "Visítenos",
    contactUs: "Contáctenos",

    // Navigation
    home: "Inicio",
    services: "Servicios",
    ourTeam: "Nuestro Equipo",
    newPatients: "Nuevos Pacientes",
    newPatientForms: "Formularios para Nuevos Pacientes",
    financialInfo: "Información Financiera",
    insurance: "Seguro",
    specials: "Especiales",
    reviews: "Reseñas",
    blog: "Blog",
    contact: "Contacto",

    // Mobile Bottom Nav
    menu: "Menú",
    ourDoctor: "Doctora",
    call: "Llamar",
    bookOnline: "Reservar",

    // Common
    hours: "Horario",
    learnMore: "Más Información",
    bookAppointment: "Reservar Cita",
    callNow: "Llamar Ahora",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load saved language preference on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      if (saved === "en" || saved === "es") {
        setLanguage(saved);
      }
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    config: siteConfig,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
