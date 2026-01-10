"use client";

import { Calendar, MapPin, Phone, X, Globe } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAppointment } from "@/context/AppointmentContext";

export default function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { openAppointmentModal } = useAppointment();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="bg-white border-b border-primary-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="North Salinas Dental"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
                quality={100}
                priority
              />
            </a>

            {/* Desktop Actions + Language Toggle */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* Request Appointment */}
              <button
                onClick={openAppointmentModal}
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-50 group-hover:bg-primary-100 rounded-lg flex items-center justify-center transition-colors">
                  <Calendar className="w-5 h-5 text-primary-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">{t.requestAppointment}</p>
                  <p className="text-xs text-gray-600">{t.scheduleNow}</p>
                </div>
              </button>

              {/* Visit Us */}
              <a
                href="https://maps.app.goo.gl/kK8myGLgssuPVk4H8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-50 group-hover:bg-primary-100 rounded-lg flex items-center justify-center transition-colors">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">{t.visitUs}</p>
                  <p className="text-xs text-gray-600">{t.address}</p>
                </div>
              </a>

              {/* Contact Us */}
              <a
                href="tel:8314498363"
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-50 group-hover:bg-primary-100 rounded-lg flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">{t.contactUs}</p>
                  <p className="text-xs text-gray-600">{t.phone}</p>
                </div>
              </a>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-200"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">
                  {language === "en" ? "Español" : "English"}
                </span>
              </button>
            </div>

            {/* Mobile: Language Toggle + Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Language Toggle - Mobile */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-200"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4 text-primary-600" />
                <span className="text-xs font-semibold text-primary-700">
                  {language === "en" ? "ES" : "EN"}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
            {/* Request Appointment - Mobile */}
            <button
              onClick={() => {
                openAppointmentModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors w-full text-left"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.requestAppointment}</p>
                <p className="text-sm text-gray-600">{t.scheduleNow}</p>
              </div>
            </button>

            {/* Visit Us - Mobile */}
            <a
              href="https://maps.app.goo.gl/kK8myGLgssuPVk4H8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.visitUs}</p>
                <p className="text-sm text-gray-600">{t.address}</p>
              </div>
            </a>

            {/* Contact Us - Mobile */}
            <a
              href="tel:8314498363"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.contactUs}</p>
                <p className="text-sm text-gray-600">{t.phone}</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
