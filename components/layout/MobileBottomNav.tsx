"use client";

import { useState } from "react";
import { Menu, Phone, Calendar, UserRound, Smile } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useAppointment } from "@/context/AppointmentContext";
import MobileMenuDrawer from "./MobileMenuDrawer";

export default function MobileBottomNav() {
  const { t } = useLanguage();
  const { openAppointmentModal } = useAppointment();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      id: "menu",
      label: t.menu || "Menu",
      icon: Menu,
      action: () => setIsMenuOpen(true),
      isButton: true,
    },
    {
      id: "doctor",
      label: t.ourDoctor || "Our Doctor",
      icon: UserRound,
      href: "/team",
      isButton: false,
    },
    {
      id: "call",
      label: t.call || "Call",
      icon: Phone,
      href: "tel:8314498363",
      isButton: false,
      isCenter: true,
    },
    {
      id: "newPatients",
      label: t.newPatients || "New Patients",
      icon: Smile,
      href: "/specials",
      isButton: false,
    },
    {
      id: "book",
      label: t.bookOnline || "Book Online",
      icon: Calendar,
      action: openAppointmentModal,
      isButton: true,
    },
  ];

  return (
    <>
      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-around h-16 px-2 pb-safe">
          {navItems.map((item) => {
            const Icon = item.icon;
            
            // Center call button (prominent)
            if (item.isCenter) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex flex-col items-center justify-center -mt-4"
                >
                  <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-medium text-gray-600 mt-1">
                    {item.label}
                  </span>
                </a>
              );
            }

            // Regular nav items
            if (item.isButton) {
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="flex flex-col items-center justify-center py-2 px-3 min-w-[60px]"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="text-[10px] font-medium text-gray-600 mt-1">
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <a
                key={item.id}
                href={item.href}
                className="flex flex-col items-center justify-center py-2 px-3 min-w-[60px]"
              >
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] font-medium text-gray-600 mt-1">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Menu Drawer */}
      <MobileMenuDrawer 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {/* Spacer for bottom nav on mobile */}
      <div className="lg:hidden h-16" />
    </>
  );
}
