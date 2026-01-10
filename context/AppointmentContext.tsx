"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import AppointmentModal from "@/components/modals/AppointmentModal";
import Toast from "@/components/ui/Toast";
import { useLanguage } from "@/context/LanguageContext";

interface AppointmentContextType {
  openAppointmentModal: () => void;
  closeAppointmentModal: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const content = {
    en: {
      successMessage: "Appointment request sent successfully! We'll contact you soon to confirm."
    },
    es: {
      successMessage: "¡Solicitud de cita enviada con éxito! Nos pondremos en contacto pronto para confirmar."
    }
  };

  const t = content[language];

  const openAppointmentModal = () => setIsModalOpen(true);
  const closeAppointmentModal = () => setIsModalOpen(false);
  
  const handleSuccess = () => {
    setShowToast(true);
  };

  return (
    <AppointmentContext.Provider value={{ openAppointmentModal, closeAppointmentModal }}>
      {children}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={closeAppointmentModal}
        onSuccess={handleSuccess}
      />
      <Toast
        isVisible={showToast}
        message={t.successMessage}
        onClose={() => setShowToast(false)}
      />
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error("useAppointment must be used within AppointmentProvider");
  }
  return context;
}
