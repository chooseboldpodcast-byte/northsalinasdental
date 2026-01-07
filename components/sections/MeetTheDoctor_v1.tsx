"use client";

import Image from "next/image";
import { Trophy, Camera, Film } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MeetTheDoctor() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        {/* Left Side - Doctor Image */}
        <div className="relative h-[400px] lg:h-auto">
          <Image
            src="/images/dr-ritu-bhardwaj.jpg"
            alt="Dr. Ritu Bhardwaj DDS"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Side - Content */}
        <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white px-8 py-4 lg:px-16 lg:py-4 flex items-center">
          <div className="max-w-xl">
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-sm font-bold tracking-widest uppercase text-secondary-300 mb-2">
                Your Trusted Dentist
              </h2>
              <p className="text-md tracking-wide text-primary-200">
                in Salinas, California
              </p>
            </div>

            {/* Doctor Name */}
            <h3 className="font-serif text-2xl lg:text-5xl mb-6">
              Dr. Ritu Bhardwaj
            </h3>

            {/* Bio */}
            <p className="text-md text-primary-100 mb-10 leading-relaxed">
              Dr. Ritu strongly believes in forming a trusted patient-doctor relationship through 
              patient education and dental care that restores the patient's oral health as well as 
              overall health. Dr. Ritu also believes in strong family values and will never treat 
              you like just another patient but as part of the dental family. She will always address 
              your individual needs and provide the care that you deserve.
            </p>

            {/* Fun Facts */}
            <div className="mb-10">
              <h4 className="font-serif text-2xl mb-6">Fun Facts</h4>

              <div className="space-y-4">
                {/* Favorite Sports */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Favorite Sports</p>
                    <p className="text-primary-200">
                      Basketball | Cricket | Tennis
                    </p>
                  </div>
                </div>

                {/* Hobbies */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Hobbies</p>
                    <p className="text-primary-200">
                      Include photography, hiking/travel and trying all sorts of different foods
                    </p>
                  </div>
                </div>

                {/* Favorite Movies */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Film className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Favorite Movies</p>
                    <p className="text-primary-200">
                      Forrest Gump, The Pursuit of Happyness, and 3 Idiots
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/our-team"
              className="inline-block bg-white text-primary-900 hover:bg-secondary-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
