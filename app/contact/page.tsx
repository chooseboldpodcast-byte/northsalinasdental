"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail, Clock, AlertCircle, Calendar as CalendarIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/lib/utils";

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

export default function ContactPage() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
      title: "Get in Touch",
      subtitle:
        "We're here to help you achieve your healthiest smile. Reach out to schedule a visit or ask a question.",
      visitUs: "Visit Us",
      callUs: "Call Us",
      emailUs: "Email",
      hours: "Hours",
      monFri: "Mon - Thu, 8am - 5pm",
      formTitle: "Request an Appointment",
      formSubtitle:
        "Fill out the form below and our team will get back to you within 24 hours.",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      preferredDate: "Preferred Date",
      preferredTime: "Preferred Time",
      reasonForVisit: "Reason for Visit",
      additionalNotes: "Additional Notes (Optional)",
      additionalNotesPlaceholder:
        "Any specific concerns or questions? (e.g., preferred time of day)",
      submit: "Submit Request",
      submitting: "Sending...",
      successMessage: "Thank you! We'll contact you shortly to confirm your appointment.",
      reasonOptions: [
        "Select a service",
        "Routine Cleaning",
        "Tooth Pain / Emergency",
        "New Patient Exam",
        "Cosmetic Consultation",
        "Follow-up Visit",
        "Other",
      ],
      errors: {
        fullName: "Please enter your name",
        email: "Please enter your email",
        invalidEmail: "Please enter a valid email",
        phone: "Please enter a valid phone number",
        date: "Please select a date",
        invalidDate: "This date is unavailable",
        reason: "Please select a reason",
      },
    },
    es: {
      title: "Contáctenos",
      subtitle:
        "Estamos aquí para ayudarle a lograr su sonrisa más saludable. Comuníquese para programar una visita o hacer una pregunta.",
      visitUs: "Visítenos",
      callUs: "Llámenos",
      emailUs: "Correo",
      hours: "Horario",
      monFri: "Lun - Jue, 8am - 5pm",
      formTitle: "Solicitar una Cita",
      formSubtitle:
        "Complete el formulario a continuación y nuestro equipo se comunicará con usted dentro de las 24 horas.",
      fullName: "Nombre Completo",
      phoneNumber: "Número de Teléfono",
      emailAddress: "Correo Electrónico",
      preferredDate: "Fecha Preferida",
      preferredTime: "Hora Preferida",
      reasonForVisit: "Motivo de la Visita",
      additionalNotes: "Notas Adicionales (Opcional)",
      additionalNotesPlaceholder:
        "¿Alguna inquietud o pregunta específica? (ej. hora preferida del día)",
      submit: "Enviar Solicitud",
      submitting: "Enviando...",
      successMessage: "¡Gracias! Nos comunicaremos pronto para confirmar su cita.",
      reasonOptions: [
        "Seleccione un servicio",
        "Limpieza de Rutina",
        "Dolor de Diente / Emergencia",
        "Examen de Paciente Nuevo",
        "Consulta Cosmética",
        "Visita de Seguimiento",
        "Otro",
      ],
      errors: {
        fullName: "Por favor ingrese su nombre",
        email: "Por favor ingrese su correo",
        invalidEmail: "Correo electrónico inválido",
        phone: "Número de teléfono inválido",
        date: "Por favor seleccione una fecha",
        invalidDate: "Esta fecha no está disponible",
        reason: "Por favor seleccione un motivo",
      },
    },
  };

  const t = content[language];

  // Generate time options (8 AM - 4 PM in 30-min intervals)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 16; hour++) {
      for (let min = 0; min < 60; min += 30) {
        if (hour === 16 && min > 0) break;
        const displayHour = hour > 12 ? hour - 12 : hour;
        const period = hour >= 12 ? "PM" : "AM";
        const timeStr = `${displayHour}:${min.toString().padStart(2, "0")}`;
        slots.push({
          value: `${hour}:${min.toString().padStart(2, "0")}`,
          label: `${timeStr} ${period}`,
        });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Validate date
  const isDateAvailable = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
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
    return tomorrow.toISOString().split("T")[0];
  };

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
      const phoneDigits = formData.phone.replace(/\D/g, "");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const dateObj = new Date(formData.date + "T00:00:00");
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: "ritubhardwajdds@gmail.com",
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          date: formattedDate,
          time: timeSlots.find((s) => s.value === formData.time)?.label || formData.time,
          reason: formData.reason,
          message: formData.message || "No additional notes",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

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
      setIsSuccess(true);

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(
        "Failed to send request. Please try again or call us directly at " +
          siteConfig.phone
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
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

    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {t.title}
            </h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="pt-4 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Column - Contact Info Card (Combined) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Combined Contact Card */}
                <div className="bg-primary-700 rounded-2xl p-6 text-white">
                  {/* Visit Us */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-serif text-white">{t.visitUs}</h3>
                    </div>
                    <a
                      href={siteConfig.address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-white transition-colors block pl-[52px]"
                    >
                      <p>{siteConfig.address.street}</p>
                      <p>
                        {siteConfig.address.city}, {siteConfig.address.state}{" "}
                        {siteConfig.address.zip}
                      </p>
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/20 my-5"></div>

                  {/* Call Us */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-serif text-white">{t.callUs}</h3>
                    </div>
                    <div className="pl-[52px]">
                      <a
                        href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
                        className="text-lg font-semibold hover:text-white/90 transition-colors"
                      >
                        {siteConfig.phoneFormatted}
                      </a>
                      <p className="text-white/70 text-sm mt-1">{t.monFri}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/20 my-5"></div>

                  {/* Email */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-serif text-white">{t.emailUs}</h3>
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white/90 hover:text-white transition-colors break-all block pl-[52px]"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-serif text-gray-900">
                      {t.hours}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(siteConfig.hours).map(([day, time]) => (
                      <div
                        key={day}
                        className="flex justify-between text-sm border-b border-gray-100 pb-2 last:border-0"
                      >
                        <span className="text-gray-600">{day}</span>
                        <span className="font-medium text-gray-900">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Appointment Form */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-serif text-gray-900 mb-2">
                    {t.formTitle}
                  </h2>
                  <p className="text-gray-500 mb-6">{t.formSubtitle}</p>

                  {isSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                      {t.successMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name and Phone Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t.fullName}
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                            errors.fullName ? "border-red-400" : "border-gray-200"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t.phoneNumber}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="(555) 123-4567"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                            errors.phone ? "border-red-400" : "border-gray-200"
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email and Reason Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t.emailAddress}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                            errors.email ? "border-red-400" : "border-gray-200"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t.reasonForVisit}
                        </label>
                        <select
                          name="reason"
                          value={formData.reason}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none bg-white ${
                            errors.reason ? "border-red-400" : "border-gray-200"
                          }`}
                        >
                          {t.reasonOptions.map((option, index) => (
                            <option key={index} value={index === 0 ? "" : option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.reason && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.reason}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Date and Time Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t.preferredDate}
                        </label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={getMinDate()}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                              errors.date ? "border-red-400" : "border-gray-200"
                            }`}
                          />
                        </div>
                        {errors.date && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.date}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t.preferredTime}
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none bg-white"
                          >
                            {timeSlots.map((slot) => (
                              <option key={slot.value} value={slot.value}>
                                {slot.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t.additionalNotes}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder={t.additionalNotesPlaceholder}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t.submitting : t.submit}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
