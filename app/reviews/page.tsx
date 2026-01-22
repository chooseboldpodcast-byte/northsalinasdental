"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Star, Quote, ThumbsUp, MapPin } from "lucide-react";
import Link from "next/link";

// Placeholder reviews
const reviews = [
  {
    id: 1,
    name: "Maria G.",
    rating: 5,
    reviewEn: "Dr. Bhardwaj and her team are absolutely wonderful! They made me feel comfortable from the moment I walked in. The office is modern and clean, and everyone is so friendly. Highly recommend!",
    reviewEs: "¡La Dra. Bhardwaj y su equipo son absolutamente maravillosos! Me hicieron sentir cómoda desde el momento en que entré. La oficina es moderna y limpia, y todos son muy amables. ¡Altamente recomendado!",
    date: "2 weeks ago",
    dateEs: "hace 2 semanas",
    source: "Google",
  },
  {
    id: 2,
    name: "James R.",
    rating: 5,
    reviewEn: "Best dental experience I've ever had. The staff is incredibly professional and caring. They explained everything clearly and made sure I was comfortable throughout my procedure.",
    reviewEs: "La mejor experiencia dental que he tenido. El personal es increíblemente profesional y atento. Me explicaron todo claramente y se aseguraron de que estuviera cómodo durante todo el procedimiento.",
    date: "1 month ago",
    dateEs: "hace 1 mes",
    source: "Google",
  },
  {
    id: 3,
    name: "Sofia M.",
    rating: 5,
    reviewEn: "I was so nervous about my dental visit, but Dr. Bhardwaj was so patient and gentle. She took the time to answer all my questions. The bilingual staff is a huge plus for my family!",
    reviewEs: "Estaba muy nerviosa por mi visita dental, pero la Dra. Bhardwaj fue muy paciente y gentil. Se tomó el tiempo para responder todas mis preguntas. ¡El personal bilingüe es una gran ventaja para mi familia!",
    date: "1 month ago",
    dateEs: "hace 1 mes",
    source: "Yelp",
  },
  {
    id: 4,
    name: "Robert T.",
    rating: 5,
    reviewEn: "Outstanding service! The same-day crown technology saved me so much time. The results are amazing - my crown looks completely natural. Thank you, Dr. Bhardwaj!",
    reviewEs: "¡Servicio excepcional! La tecnología de coronas el mismo día me ahorró mucho tiempo. Los resultados son increíbles - mi corona se ve completamente natural. ¡Gracias, Dra. Bhardwaj!",
    date: "2 months ago",
    dateEs: "hace 2 meses",
    source: "Google",
  },
  {
    id: 5,
    name: "Elena P.",
    rating: 5,
    reviewEn: "My whole family comes here! From my kids to my elderly parents, everyone is treated with such care. The team goes above and beyond to make everyone comfortable.",
    reviewEs: "¡Toda mi familia viene aquí! Desde mis hijos hasta mis padres ancianos, todos son tratados con mucho cariño. El equipo hace todo lo posible para que todos se sientan cómodos.",
    date: "3 months ago",
    dateEs: "hace 3 meses",
    source: "Facebook",
  },
  {
    id: 6,
    name: "Michael K.",
    rating: 5,
    reviewEn: "I had an emergency toothache and they got me in the same day. The pain relief was immediate, and they followed up the next day to check on me. That's real care!",
    reviewEs: "Tuve un dolor de muelas de emergencia y me atendieron el mismo día. El alivio del dolor fue inmediato, y me llamaron al día siguiente para ver cómo estaba. ¡Eso es verdadero cuidado!",
    date: "3 months ago",
    dateEs: "hace 3 meses",
    source: "Google",
  },
];

export default function ReviewsPage() {
  const { language, config } = useLanguage();

  const content = {
    en: {
      title: "Patient Reviews",
      subtitle: "What Our Patients Say",
      description: "Read what our patients have to say about their experience at our practice.",
      overallRating: "Overall Rating",
      basedOn: "Based on patient reviews",
      leaveReview: "Leave a Review",
      leaveReviewDesc: "We'd love to hear about your experience!",
      googleReview: "Review on Google",
      yelpReview: "Review on Yelp",
    },
    es: {
      title: "Reseñas de Pacientes",
      subtitle: "Lo Que Dicen Nuestros Pacientes",
      description: "Lea lo que nuestros pacientes dicen sobre su experiencia en nuestra práctica.",
      overallRating: "Calificación General",
      basedOn: "Basado en reseñas de pacientes",
      leaveReview: "Deja una Reseña",
      leaveReviewDesc: "¡Nos encantaría saber sobre tu experiencia!",
      googleReview: "Reseña en Google",
      yelpReview: "Reseña en Yelp",
    },
  };

  const t = content[language];

  // Calculate average rating
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <main className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-primary-100 mb-2">{t.subtitle}</p>
          <p className="text-primary-200 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
      </section>

      {/* Overall Rating Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-600 mb-2">
                {avgRating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600">{t.overallRating}</p>
              <p className="text-sm text-gray-500">
                {t.basedOn} ({reviews.length})
              </p>
            </div>

            <div className="hidden md:block w-px h-24 bg-gray-200" />

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>{config.practiceName}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ThumbsUp className="w-5 h-5 text-primary-600" />
                <span>100% {language === "es" ? "Recomendado" : "Recommended"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary-100 mb-4" />

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {language === "es" ? review.reviewEs : review.reviewEn}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">
                      {language === "es" ? review.dateEs : review.date}
                    </p>
                  </div>
                  <span className="text-sm text-primary-600 font-medium">
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            {t.leaveReview}
          </h2>
          <p className="text-gray-600 mb-8">{t.leaveReviewDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={config.social.google || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Star className="w-5 h-5 mr-2" />
              {t.googleReview}
            </a>
            <a
              href={config.social.yelp || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-red-500 text-red-500 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-colors"
            >
              <Star className="w-5 h-5 mr-2" />
              {t.yelpReview}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            {language === "es" ? "Únete a Nuestra Familia de Pacientes" : "Join Our Family of Patients"}
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            {language === "es"
              ? "Experimente la diferencia de un cuidado dental excepcional."
              : "Experience the difference of exceptional dental care."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${config.phone.replace(/[.\-\s]/g, "")}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              {language === "es" ? "Llamar Ahora" : "Call Now"}: {config.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              {language === "es" ? "Programar una Cita" : "Schedule an Appointment"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
