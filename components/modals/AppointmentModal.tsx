"use client";

import { useState, useEffect } from "react";
import { X, Calendar as CalendarIcon, Clock, AlertCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/context/LanguageContext";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

// US Holidays 2026 (adjust yearly)
const HOLIDAYS_2026 = [
  "2026-01-01", // New Year's Day
  "2026-01-19", // MLK Day
  "2026-02-16", // Presidents Day
  "2026-05-25", // Memorial Day
  "2026-07-03", // Independence Day (observed)
  "2026-09-07", // Labor Day
  "2026-11-26", // Thanksgiving
  "2026-11-27", // Day after Thanksgiving
  "2026-12-25", // Christmas
];

export default function AppointmentModal({ isOpen, onClose, onSuccess }: AppointmentModalProps) {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "09:00",
    reason: "",
    message: "",
  });

  const content = {
    en: {
      title: "Request Appointment",
      subtitle: "Fill out the form below and we'll contact you to confirm.",
      fullName: "Full Name *",
      phone: "Cell Phone (optional)",
      email: "Email *",
      date: "Preferred Date *",
      time: "Preferred Time *",
      reason: "Reason for Visit *",
      message: "Additional Notes (optional)",
      submit: "Request Appointment",
      submitting: "Sending...",
      orCall: "Or call us directly",
      reasonOptions: [
        "Select a reason...",
        "Routine Cleaning",
        "Tooth Pain / Emergency",
        "New Patient Exam",
        "Cosmetic Consultation",
        "Follow-up Visit",
        "Other"
      ],
      errors: {
        fullName: "Please enter your name",
        email: "Please enter your email",
        invalidEmail: "Please enter a valid email",
        phone: "Please enter a valid phone number",
        date: "Please select a date",
        reason: "Please select a reason",
        invalidDate: "This date is unavailable",
      }
    },
    es: {
      title: "Solicitar Cita",
      subtitle: "Complete el formulario y nos comunicaremos para confirmar.",
      fullName: "Nombre Completo *",
      phone: "Teléfono (opcional)",
      email: "Correo Electrónico *",
      date: "Fecha Preferida *",
      time: "Hora Preferida *",
      reason: "Motivo de la Visita *",
      message: "Notas Adicionales (opcional)",
      submit: "Solicitar Cita",
      submitting: "Enviando...",
      orCall: "O llámenos directamente",
      reasonOptions: [
        "Seleccione un motivo...",
        "Limpieza de Rutina",
        "Dolor de Diente / Emergencia",
        "Examen de Paciente Nuevo",
        "Consulta Cosmética",
        "Visita de Seguimiento",
        "Otro"
      ],
      errors: {
        fullName: "Por favor ingrese su nombre",
        email: "Por favor ingrese su correo",
        invalidEmail: "Correo electrónico inválido",
        phone: "Número de teléfono inválido",
        date: "Por favor seleccione una fecha",
        reason: "Por favor seleccione un motivo",
        invalidDate: "Esta fecha no está disponible",
      }
    }
  };

  const t = content[language];

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Generate time options (8 AM - 4 PM in 30-min intervals)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 16; hour++) {
      for (let min = 0; min < 60; min += 30) {
        if (hour === 16 && min > 0) break;
        const displayHour = hour > 12 ? hour - 12 : hour;
        const period = hour >= 12 ? "PM" : "AM";
        const timeStr = `${displayHour}:${min.toString().padStart(2, '0')}`;
        slots.push({ value: `${hour}:${min.toString().padStart(2, '0')}`, label: `${timeStr} ${period}` });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Validate date
  const isDateAvailable = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) return false;
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6) return false;
    if (HOLIDAYS_2026.includes(dateStr)) return false;

    return true;
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.errors.fullName;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errors.invalidEmail;
    }

    if (formData.phone.trim()) {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 10 || phoneDigits.length > 11) {
        newErrors.phone = t.errors.phone;
      }
    }

    if (!formData.date) {
      newErrors.date = t.errors.date;
    } else if (!isDateAvailable(formData.date)) {
      newErrors.date = t.errors.invalidDate;
    }

    if (!formData.reason || formData.reason === t.reasonOptions[0]) {
      newErrors.reason = t.errors.reason;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const dateObj = new Date(formData.date + 'T00:00:00');
      const formattedDate = dateObj.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: 'ritubhardwajdds@gmail.com',
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          date: formattedDate,
          time: timeSlots.find(s => s.value === formData.time)?.label || formData.time,
          reason: formData.reason,
          message: formData.message || 'No additional notes',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        date: "",
        time: "09:00",
        reason: "",
        message: "",
      });
      setErrors({});

      onSuccess();
      setTimeout(() => onClose(), 500);

    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send appointment request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    let formatted = value;
    
    if (value.length > 0) {
      if (value.length <= 3) {
        formatted = value;
      } else if (value.length <= 6) {
        formatted = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else {
        formatted = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
      }
    }
    
    setFormData(prev => ({ ...prev, phone: formatted }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>

          {/* Header */}
          <div className="px-6 pt-6 pb-4">
            <h2 className="text-2xl font-serif text-gray-900">{t.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{t.subtitle}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.fullName}
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm ${
                  errors.fullName ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm ${
                    errors.phone ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm ${
                    errors.email ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.date}
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={getMinDate()}
                    className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm ${
                      errors.date ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="mt-1 text-xs text-red-500">{errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.time}
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none bg-white text-sm"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Reason for Visit */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.reason}
              </label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none bg-white text-sm ${
                  errors.reason ? 'border-red-400' : 'border-gray-200'
                }`}
              >
                {t.reasonOptions.map((option, index) => (
                  <option key={index} value={index === 0 ? '' : option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.reason && (
                <p className="mt-1 text-xs text-red-500">{errors.reason}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>

            {/* Phone Fallback */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-500">{t.orCall}</p>
              <a
                href="tel:8314498363"
                className="inline-flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-semibold text-sm mt-1"
              >
                <Phone className="w-4 h-4" />
                831.449.8363
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
