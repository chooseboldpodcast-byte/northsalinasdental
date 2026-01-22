"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { doctorContent } from "@/config/content";

export default function MeetTheDoctor() {
  const { language } = useLanguage();

  const content = doctorContent[language];

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Doctor Image */}
        <div className="relative h-[400px] lg:h-[550px]">
          <Image
            src={content.image}
            alt={content.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Side - Content */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white px-8 py-6 lg:px-12 lg:py-8 flex items-start">
          <div className="w-full">
            {/* Heading */}
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-semi-bold tracking-widest uppercase text-white mb-1">
                {content.overline}
              </h2>
              <p className="text-xl tracking-widest text-primary-100 mb-2">
                {content.location}
              </p>
              <div className="w-40 h-0.5 bg-white mx-auto rounded-full mb-6"></div>
            </div>

            {/* Doctor Name */}
            <h3 className="font-serif text-white text-xl lg:text-2xl mb-2">
              {content.name}
            </h3>

            {/* Bio */}
            <p className="text-base text-primary-50 mb-6 leading-relaxed">
              {content.shortBio}
            </p>

            {/* Fun Facts */}
            <div className="mb-8">
              <h4 className="font-serif text-white text-lg mb-2">{content.funFacts.title}</h4>

              <div className="space-y-3">
                {content.funFacts.items.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm">
                        <span className="font-semibold">{fact.label}</span> {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="/team"
                className="hover:bg-secondary-50 text-primary-200 border-2 border-primary-200 hover:border-secondary-300 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                {content.ctaButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
