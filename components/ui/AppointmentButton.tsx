"use client";

import { Calendar } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { useLanguage } from "@/context/LanguageContext";

interface AppointmentButtonProps {
  variant?: "primary" | "secondary" | "text";
  className?: string;
}

export default function AppointmentButton({ variant = "primary", className = "" }: AppointmentButtonProps) {
  const { openAppointmentModal } = useAppointment();
  const { language } = useLanguage();

  const content = {
    en: { text: "Request Appointment" },
    es: { text: "Solicitar Cita" }
  };

  const t = content[language];

  const baseStyles = "inline-flex items-center gap-2 font-semibold transition-all duration-300 rounded-full";
  
  const variantStyles = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 shadow-card hover:shadow-elevated transform hover:scale-105",
    secondary: "bg-white hover:bg-secondary-50 text-primary-700 border-2 border-primary-200 hover:border-secondary-300 px-8 py-4",
    text: "text-primary-600 hover:text-primary-700 px-4 py-2"
  };

  return (
    <button
      onClick={openAppointmentModal}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <Calendar className="w-5 h-5" />
      <span>{t.text}</span>
    </button>
  );
}
