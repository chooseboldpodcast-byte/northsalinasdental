"use client";

import { useLanguage } from "@/context/LanguageContext";
import { tickerItems } from "@/data/tickerContent";

export default function NewsTicker() {
  const { language } = useLanguage();

  // Get translated items
  const items = tickerItems.map((item) =>
    language === "es" ? item.es : item.en
  );

  // Render a single set of promotions
  const PromoSet = ({ keyPrefix = "" }: { keyPrefix?: string }) => (
    <>
      {items.map((text, index) => (
        <span key={`${keyPrefix}${index}`} className="px-12 shrink-0">
          <span className="text-secondary-500">★</span> {text}
        </span>
      ))}
    </>
  );

  return (
    <div className="bg-primary-50 h-8 overflow-hidden relative border-b border-primary-100">
      <div className="flex items-center h-full">
        <div
          className="flex items-center whitespace-nowrap text-primary-700 text-base font-medium will-change-transform animate-ticker-smooth"
          style={{ gap: '3rem', backfaceVisibility: 'hidden' }}
        >
          {/* Two identical sets for seamless loop */}
          <PromoSet keyPrefix="a-" />
          <PromoSet keyPrefix="b-" />
        </div>
      </div>
    </div>
  );
}
