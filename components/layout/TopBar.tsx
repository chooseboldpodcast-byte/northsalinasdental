"use client";

import { Calendar, MapPin, Phone, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useAppointment } from "@/context/AppointmentContext";

export default function TopBar() {
  const { language, toggleLanguage, t, config } = useLanguage();
  const { openAppointmentModal } = useAppointment();

  // Format address for display
  const addressDisplay = `${config.address.street}, ${config.address.city}, ${config.address.state} ${config.address.zip}`;

  // Format phone for tel: link (remove dots and dashes)
  const phoneLink = config.phone.replace(/[.\-\s]/g, "");

  return (
    <div className="bg-white border-b border-primary-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt={config.practiceName}
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
            {config.features.enableAppointmentModal && (
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
            )}

            {/* Visit Us */}
            <a
              href={config.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary-50 group-hover:bg-primary-100 rounded-lg flex items-center justify-center transition-colors">
                <MapPin className="w-5 h-5 text-primary-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">{t.visitUs}</p>
                <p className="text-xs text-gray-600">{addressDisplay}</p>
              </div>
            </a>

            {/* Contact Us */}
            <a
              href={`tel:${phoneLink}`}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary-50 group-hover:bg-primary-100 rounded-lg flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5 text-primary-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">{t.contactUs}</p>
                <p className="text-xs text-gray-600">{config.phone}</p>
              </div>
            </a>

            {/* Language Toggle - Desktop */}
            {config.features.enableSpanish && (
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
            )}
          </div>

          {/* Mobile: Language Toggle Only */}
          {config.features.enableSpanish && (
            <div className="lg:hidden flex items-center">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
