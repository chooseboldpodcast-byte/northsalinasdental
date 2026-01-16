"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewPatientSpecials from "@/components/sections/NewPatientSpecials";
import { useLanguage } from "@/context/LanguageContext";

export default function SpecialsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Specials & Offers",
      subtitle: "Affordable Care for Your Smile in Salinas, CA",
    },
    es: {
      title: "Especiales y Ofertas",
      subtitle: "Cuidado Accesible para Su Sonrisa en Salinas, CA",
    },
  };

  const t = content[language];

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {t.title}
            </h1>
            <p className="text-primary-200 text-lg">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* New Patient Specials Section */}
        <NewPatientSpecials />
      </main>
      <Footer />
    </>
  );
}
