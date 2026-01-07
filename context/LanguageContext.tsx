// context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface Translations {
  // TopBar
  requestAppointment: string;
  scheduleNow: string;
  visitUs: string;
  contactUs: string;
  address: string;
  phone: string;

  // Add more as needed for other components
  home: string;
  services: string;
  ourTeam: string;
  patientEducation: string;
  insurance: string;
  specials: string;
  contact: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const translations: Record<Language, Translations> = {
  en: {
    // TopBar
    requestAppointment: "Request Appointment",
    scheduleNow: "Schedule Now",
    visitUs: "Visit Us",
    contactUs: "Contact Us",
    address: "620 E. Alvin Dr. #E, Salinas, CA 93906",
    phone: "831.449.8363",

    // Navigation
    home: "Home",
    services: "Services",
    ourTeam: "Our Team",
    patientEducation: "Patient Education",
    insurance: "Insurance",
    specials: "Specials",
    contact: "Contact",
  },
  es: {
    // TopBar
    requestAppointment: "Solicitar Cita",
    scheduleNow: "Agendar Ahora",
    visitUs: "Visítenos",
    contactUs: "Contáctenos",
    address: "620 E. Alvin Dr. #E, Salinas, CA 93906",
    phone: "831.449.8363",

    // Navigation
    home: "Inicio",
    services: "Servicios",
    ourTeam: "Nuestro Equipo",
    patientEducation: "Educación del Paciente",
    insurance: "Seguro",
    specials: "Especiales",
    contact: "Contacto",
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
