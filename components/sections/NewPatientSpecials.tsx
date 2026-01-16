"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

// Define types for our props to make it robust
type SpecialProps = {
  type: 'standard' | 'image';
  title?: string;
  price?: string;
  details?: string;
  disclaimer?: string;
  buttonText: string;
  imageUrl?: string;
  imageAlt?: string;
};

export default function NewPatientSpecials() {
  const { language } = useLanguage();

  const content = {
    en: {
      header: "New Patient Specials",
      subtext: "We want your visits to be efficient and gentle. North Salinas Dental is dedicated to being your trusted partner in oral health.",
      expiry: "Offers Expire: 01/21/2026",
      card1: {
        title: "Dental Consultation or Second Opinion",
        details: "This special includes a consultation with the Doctor. It does not include any procedure or cleaning. X-rays are not included.",
        disclaimer: "New patients only. Cannot be combined with insurance or other offers."
      },
      buttons: {
        schedule: "Schedule Appointment",
        claim: "Claim This Offer"
      }
    },
    es: {
      header: "Especiales para Pacientes Nuevos",
      subtext: "Queremos que sus visitas sean eficientes y amables. North Salinas Dental se dedica a ser su socio de confianza en salud bucal.",
      expiry: "Las ofertas vencen: 21/01/2026",
      card1: {
        title: "Consulta Dental o Segunda Opinión",
        details: "Este especial incluye una consulta con el doctor. No incluye ningún procedimiento ni limpieza. Radiografías no incluidas.",
        disclaimer: "Solo para pacientes nuevos. No se puede combinar con seguro u otras ofertas."
      },
      buttons: {
        schedule: "Programar Cita",
        claim: "Reclamar Oferta"
      }
    }
  };

  const t = content[language];

  return (
    <section className="py-16 px-4 md:px-8 bg-primary-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-900 mb-4">
            {t.header}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-2">
            {t.subtext}
          </p>
          <p className="font-semibold text-secondary-500">
            {t.expiry}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          
          {/* OPTION 1: The Standard Code-Based Card */}
          <SpecialCard 
            type="standard"
            title={t.card1.title}
            price="99"
            details={t.card1.details}
            disclaimer={t.card1.disclaimer}
            buttonText={t.buttons.schedule}
          />

          {/* OPTION 2: The Image-Based Card */}
          <SpecialCard 
            type="image"
            imageUrl="/images/specials/january-promo.jpg" 
            imageAlt="New Patient Special"
            buttonText={t.buttons.claim}
          />
          
        </div>
      </div>
    </section>
  );
}

// Flexible Card Component
const SpecialCard = ({ type, title, price, details, disclaimer, imageUrl, imageAlt, buttonText }: SpecialProps) => {
  
  // RENDER IMAGE CARD
  if (type === 'image' && imageUrl) {
    return (
      <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-primary-100 hover:shadow-xl transition-shadow duration-300">
        <div className="w-full bg-gray-100">
             <Image 
               src={imageUrl} 
               alt={imageAlt || "Special Offer"}
               width={1000}
               height={1000}
               className="w-full h-auto object-contain"
             />
        </div>
      </div>
    );
  }

  // RENDER STANDARD CARD (Default)
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-primary-100 hover:shadow-xl transition-shadow duration-300 h-full">
      {/* Card Header */}
      <div className="bg-primary-900 p-12 text-center relative h-48 flex items-start justify-center">
        <h3 className="text-white text-2xl font-medium tracking-wide z-10 px-4">
          {title}
        </h3>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-primary-500 to-primary-700 opacity-50"></div>
      </div>

      {/* Price Circle */}
      <div className="relative -mt-12 flex justify-center mb-12">
        <div className="bg-white p-4 rounded-full shadow-md">
          <div className="w-24 h-24 rounded-full border-6 border-primary-100 flex items-center justify-center bg-white">
            <div className="text-center">
              <span className="text-xl text-primary-400 align-top relative top-1">$</span>
              <span className="text-7xl font-serif text-primary-700">{price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-8 pb-8 flex-1 flex flex-col text-center">
        <p className="text-gray-600 mb-8 flex-1">
          {details}
        </p>

        <button className="w-full py-3 px-6 rounded-full border-2 border-primary-500 text-primary-600 font-semibold hover:bg-primary-500 hover:text-white transition-colors duration-300 mb-6">
          {buttonText}
        </button>

        <p className="text-xs text-gray-400 italic leading-tight">
          {disclaimer}
        </p>
      </div>
    </div>
  );
};
