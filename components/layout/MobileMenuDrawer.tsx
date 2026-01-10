"use client";

import { useEffect } from "react";
import { X, Home, Stethoscope, Users, GraduationCap, Shield, Sparkles, Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  const { t } = useLanguage();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuLinks = [
    { href: "/", label: t.home, icon: Home },
    { href: "/services", label: t.services, icon: Stethoscope },
    { href: "/team", label: t.ourTeam, icon: Users },
    { href: "/patient-education", label: t.patientEducation, icon: GraduationCap },
    { href: "/insurance", label: t.insurance, icon: Shield },
    { href: "/specials", label: t.specials, icon: Sparkles },
    { href: "/contact", label: t.contact, icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden"
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-4 border-b border-gray-100">
              <h2 className="text-lg font-serif text-gray-900">
                {t.menu || "Menu"}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-80px)] pb-safe">
              {/* Navigation Links */}
              <nav className="px-4 py-4">
                <ul className="space-y-1">
                  {menuLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary-600" />
                          </div>
                          <span className="text-base font-medium text-gray-800">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Contact Info Section */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {t.contactUs || "Contact Us"}
                </h3>
                
                <div className="space-y-3">
                  {/* Address */}
                  <a
                    href="https://maps.app.goo.gl/kK8myGLgssuPVk4H8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">620 E. Alvin Dr. #E<br />Salinas, CA 93906</span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:8314498363"
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-sm font-medium">831.449.8363</span>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium">{t.hours || "Hours"}</p>
                      <p className="text-gray-500">Mon - Thu: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-500">Fri - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
