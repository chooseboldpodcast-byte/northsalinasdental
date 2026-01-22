"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, config } = useLanguage();

  // Format phone for tel: link
  const phoneLink = config.phone.replace(/[.\-\s]/g, "");

  const content = {
    en: {
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { href: "/services#cosmetic", label: "Cosmetic Dentistry" },
        { href: "/services#cleaning", label: "General Care" },
        { href: "/services#replacement", label: "Dental Implants" },
        { href: "/team", label: "Our Team" },
      ],
      contactTitle: "Contact",
      hoursTitle: "Hours",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
    es: {
      quickLinksTitle: "Enlaces Rápidos",
      quickLinks: [
        { href: "/services#cosmetic", label: "Odontología Cosmética" },
        { href: "/services#cleaning", label: "Cuidado General" },
        { href: "/services#replacement", label: "Implantes Dentales" },
        { href: "/team", label: "Nuestro Equipo" },
      ],
      contactTitle: "Contacto",
      hoursTitle: "Horario",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
    },
  };

  const t = content[language];

  // Build hours display from config
  const hoursDisplay = Object.entries(config.hoursShort).map(([day, time]) => ({
    day: language === "es" ? translateDay(day) : day,
    time: language === "es" ? translateTime(time) : time,
  }));

  function translateDay(day: string): string {
    const translations: Record<string, string> = {
      "Mon - Thu": "Lun - Jue",
      "Mon - Fri": "Lun - Vie",
      "Fri - Sun": "Vie - Dom",
      "Saturday": "Sábado",
      "Sunday": "Domingo",
    };
    return translations[day] || day;
  }

  function translateTime(time: string): string {
    if (time === "Closed") return "Cerrado";
    return time;
  }

  return (
    <footer className="bg-primary-700 text-white">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">{t.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {t.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sage-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">{t.contactTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={config.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sage-200 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    {config.address.street}
                    <br />
                    {config.address.city}, {config.address.state}{" "}
                    {config.address.zip}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phoneLink}`}
                  className="flex items-center gap-3 text-sage-200 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{config.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">{t.hoursTitle}</h4>
            <ul className="space-y-2">
              {hoursDisplay.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between text-sage-200"
                >
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sage-600">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sage-300">
            <p>
              © {currentYear} {config.practiceName}.{" "}
              {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
            <div className="flex gap-6">
              {config.legal.showPrivacyPolicy && (
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  {t.privacyPolicy}
                </Link>
              )}
              {config.legal.showTermsOfService && (
                <Link href="/terms" className="hover:text-white transition-colors">
                  {t.termsOfService}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
