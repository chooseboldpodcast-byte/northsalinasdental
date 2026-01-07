"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function MeetTheDoctor() {
  const { language } = useLanguage();

  const content = {
    en: {
      subtitle: "YOUR TRUSTED DENTIST",
      location: "IN SALINAS, CALIFORNIA",
      doctorName: "Dr. Ritu Bhardwaj",
      bio: "Dr. Ritu builds her practice on confianza—a relationship rooted in genuine trust and clear education, helping you understand how oral health supports your overall well-being. Guided by deep family values, she treats every patient with the same respect and dedication she would offer her own relatives. Dr. Ritu is committed to listening to your individual needs and providing the dignified, high-quality care you deserve.",
      funFacts: "Fun Facts",
      favoriteSports: "Favorite Drink:",
      sportsText: "Starbucks Coffee",
      hobbies: "Hobbies:",
      hobbiesText: "include singing, hiking/travel and trying all sorts of different foods",
      favoriteMovies: "Favorite Movies:",
      moviesText: "Forrest Gump, The Pursuit of Happyness, and 3 Idiots",
      ctaButton: "Meet Our Team",
    },
    es: {
      subtitle: "SU DENTISTA DE CONFIANZA",
      location: "en Salinas, California",
      doctorName: "Dra. Ritu Bhardwaj",
      bio: "La Dra. Ritu basa su práctica en la confianza: una relación arraigada en la honestidad y la educación clara, ayudándole a entender cómo la salud oral apoya su bienestar general. Guiada por profundos valores familiares, trata a cada paciente con el mismo respeto y dedicación que ofrecería a su propia familia. La Dra. Ritu se compromete a escuchar sus necesidades individuales y a brindarle la atención digna y de alta calidad que usted se merece.",
      funFacts: "Datos Curiosos",
      favoriteSports: "Bebida favorita:",
      sportsText: "Café de Starbucks",
      hobbies: "Pasatiempos:",
      hobbiesText: "Cantar, hacer senderismo, viajar y probar todo tipo de comida",
      favoriteMovies: "Películas Favoritas:",
      moviesText: "Forrest Gump, En Busca de la Felicidad, y 3 Idiots",
      ctaButton: "Conozca Nuestro Equipo",
    },
  };

  const t = content[language];

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Doctor Image */}
        <div className="relative h-[400px] lg:h-[550px]">
          <Image
            src="/images/dr-ritu-bhardwaj.jpg"
            alt={t.doctorName}
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
                {t.subtitle}
              </h2>
              <p className="text-xl tracking-widest text-primary-100 mb-2">
                {t.location}
              </p>
              <div className="w-40 h-0.5 bg-white mx-auto rounded-full mb-6"></div>
            </div>

            {/* Doctor Name */}
            <h3 className="font-serif text-white text-xl lg:text-2xl mb-2">
              {t.doctorName}
            </h3>

            {/* Bio */}
            <p className="text-base text-primary-50 mb-6 leading-relaxed">
              {t.bio}
            </p>

            {/* Fun Facts */}
            <div className="mb-8">
              <h4 className="font-serif text-white text-lg mb-2">{t.funFacts}</h4>

              <div className="space-y-3">
                {/* Favorite Sports */}
                <div className="flex items-center gap-3">  {/* Changed items-start to items-center */}
                  <div className="flex items-center justify-center flex-shrink-0">  {/* Removed: w-8 h-8 bg-secondary-500 rounded-lg mt-0.5 */}
                    <svg className="w-6 h-6 text-primary-200" fill="currentColor" viewBox="0 0 24 24">  {/* Changed text-white to text-secondary-500 */}
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm">
                      <span className="font-semibold">{t.favoriteSports}</span> {t.sportsText}
                    </p>
                  </div>
                </div>


                {/* Hobbies */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm">
                      <span className="font-semibold">{t.hobbies}</span> {t.hobbiesText}
                    </p>
                  </div>
                </div>

                {/* Favorite Movies */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="ext-white text-sm">
                      <span className="font-semibold">{t.favoriteMovies}</span> {t.moviesText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="/our-team"
                className="hover:bg-secondary-50 text-primary-200 border-2 border-primary-200 hover:border-secondary-300 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                {t.ctaButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
