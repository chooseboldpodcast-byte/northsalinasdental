"use client";

import { useState, useEffect } from "react";
import { X, Calendar as CalendarIcon, Clock, AlertCircle } from "lucide-react";
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
    time: "08:00",
    period: "AM",
    reason: "",
    message: "",
  });

  const content = {
    en: {
      title: "Book Appointment",
      fullName: "Full Name",
      phone: "Enter Cell Phone",
      email: "Email (required)",
      date: "Select Date",
      time: "Select Time",
      reason: "Reason for Visit",
      message: "Message (optional)",
      submit: "Submit",
      submitting: "Sending...",
      reasonOptions: [
        "Select reason",
        "Routine Cleaning",
        "Tooth Pain",
        "New Patient Exam",
        "Cosmetic Consultation",
        "Emergency",
        "Follow-up",
        "Other"
      ],
      errors: {
        fullName: "Full name is required",
        email: "Valid email is required",
        invalidEmail: "Please enter a valid email address",
        phone: "Please enter a valid phone number",
        date: "Please select an appointment date",
        reason: "Please select a reason for visit",
        invalidDate: "Selected date is not available",
      }
    },
    es: {
      title: "Reservar Cita",
      fullName: "Nombre Completo",
      phone: "Ingrese Teléfono Celular",
      email: "Correo Electrónico (requerido)",
      date: "Seleccionar Fecha",
      time: "Seleccionar Hora",
      reason: "Motivo de la Visita",
      message: "Mensaje (opcional)",
      submit: "Enviar",
      submitting: "Enviando...",
      reasonOptions: [
        "Seleccionar motivo",
        "Limpieza de Rutina",
        "Dolor de Diente",
        "Examen de Paciente Nuevo",
        "Consulta Cosmética",
        "Emergencia",
        "Seguimiento",
        "Otro"
      ],
      errors: {
        fullName: "El nombre completo es requerido",
        email: "El correo electrónico es requerido",
        invalidEmail: "Por favor ingrese un correo electrónico válido",
        phone: "Por favor ingrese un número de teléfono válido",
        date: "Por favor seleccione una fecha de cita",
        reason: "Por favor seleccione un motivo de visita",
        invalidDate: "La fecha seleccionada no está disponible",
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
        if (hour === 16 && min > 0) break; // Stop at 4:00 PM
        const displayHour = hour > 12 ? hour - 12 : hour;
        const period = hour >= 12 ? "PM" : "AM";
        const timeStr = `${displayHour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
        slots.push({ value: `${hour}:${min.toString().padStart(2, '0')}`, label: `${timeStr} ${period}` });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Validate date is not past, weekend, or holiday
  const isDateAvailable = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if past date
    if (date < today) return false;

    // Check if weekend (0 = Sunday, 5 = Friday, 6 = Saturday)
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6) return false;

    // Check if holiday
    if (HOLIDAYS_2026.includes(dateStr)) return false;

    return true;
  };

  // Get min date (tomorrow or next available date)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.errors.fullName;
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = t.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errors.invalidEmail;
    }

    // Phone (optional but validate if provided)
    if (formData.phone.trim()) {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 10 || phoneDigits.length > 11) {
        newErrors.phone = t.errors.phone;
      }
    }

    // Date
    if (!formData.date) {
      newErrors.date = t.errors.date;
    } else if (!isDateAvailable(formData.date)) {
      newErrors.date = t.errors.invalidDate;
    }

    // Reason
    if (!formData.reason || formData.reason === t.reasonOptions[0]) {
      newErrors.reason = t.errors.reason;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Format date for display
      const dateObj = new Date(formData.date + 'T00:00:00');
      const formattedDate = dateObj.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });

      // Send email to practice
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: 'ritubhardwajdds@gmail.com',
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          appointment_date: formattedDate,
          appointment_time: timeSlots.find(slot => slot.value === formData.time)?.label,
          reason: formData.reason,
          message: formData.message || 'No additional message',
          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Send confirmation email to patient
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID!,
        {
          to_email: formData.email,
          to_name: formData.fullName,
          appointment_date: formattedDate,
          appointment_time: timeSlots.find(slot => slot.value === formData.time)?.label,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        date: "",
        time: "08:00",
        period: "AM",
        reason: "",
        message: "",
      });
      setErrors({});

      // Show success and close
      onSuccess();
      setTimeout(() => onClose(), 500);

    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send appointment request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Format phone number as user types
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-3xl">
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-serif text-gray-900">{t.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
            {/* Full Name & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t.fullName}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder={t.phone}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.email}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={getMinDate()}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                      errors.date ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none bg-white"
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
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none ${
                  errors.reason ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                {t.reasonOptions.map((option, index) => (
                  <option key={index} value={index === 0 ? '' : option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.reason && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.reason}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.message}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
