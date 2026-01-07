"use client";

import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export default function TopBar() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      hours: "Mon-Thu: 8am - 5pm",
    },
    es: {
      hours: "Lun-Jue: 8am - 5pm",
    },
  };

  return (
    <div className="bg-navy-900 text-white py-2 hidden md:block">
      <div className="container-wide">
        <div className="flex items-center justify-between py-1 text-sm">
          <div className="flex-1"></div>

          <div className="flex items-center gap-24">
            <a
              href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
              className="flex items-center gap-2 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                siteConfig.address.full
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold-300 transition-colors"
            >
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>{siteConfig.address.full}</span>
            </a>
            <div className="flex items-center gap-2 text-navy-100">
              <Clock className="w-4 h-4 text-gold-400" />
              <span>{content[language].hours}</span>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            {/* Language Pill: Darker Navy background for subtle contrast */}
            <div className="flex items-center gap-2 bg-navy-800 rounded-full px-1 py-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full transition-colors text-xs font-medium ${
                  language === "en"
                    ? "bg-white text-navy-900"
                    : "text-navy-200 hover:text-white"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded-full transition-colors text-xs font-medium ${
                  language === "es"
                    ? "bg-white text-navy-900"
                    : "text-navy-200 hover:text-white"
                }`}
              >
                Español
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
