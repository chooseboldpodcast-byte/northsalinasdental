"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useAppointment } from "@/context/AppointmentContext";
import { CreditCard, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function FinancialInformationPage() {
  const { language } = useLanguage();
  const { openAppointmentModal } = useAppointment();

  const content = {
    en: {
      title: "Financial Information",
      subtitle: "Flexible Payment Options for Your Dental Care",

      // Insurance Section
      insuranceTitle: "Insurance",
      insuranceIntro: "As a service to our patients, our practice will gladly bill all dental insurance programs, including non-managed care, indemnity (traditional) and PPO out-of-network. We are not part of any managed care network. Our accounting staff will prepare all the necessary forms for your dental benefits.",
      insuranceReminder: "However, we remind you that your specific policy is an agreement between you and your insurance company. Please keep in mind that you are responsible for your total obligation should your insurance benefits result in less coverage than anticipated. Our staff will gladly submit a pre-treatment estimate to your insurance company so that you will know what your benefits will be.",
      insuranceFees: "The fees charged for services rendered to those who are insured are the usual and customary fees charged to all our patients for similar services. Your policy may base its allowances on a fixed fee schedule, which may or may not coincide with our usual fees. You should be aware that different insurance companies vary greatly in the types of coverage available. Also, some companies take care of claims promptly while others delay payment for several months.",

      // Financing Section
      financingTitle: "Financing",
      financingIntro: "We're pleased to offer our patients CareCredit, North America's leader in patient payment plans. CareCredit lets you begin your treatment immediately – then pay for it over time with low monthly payments that fit easily into your monthly budget.",
      financingDetails: "CareCredit works like a credit card, but is exclusive for healthcare services. With no up-front costs, no pre-payment penalties, and no annual fees, CareCredit lets you pay over time and frees up cash and credit cards for the other things you want or need. CareCredit offers low monthly payment plans for healthcare procedures not commonly covered by insurance, including dental treatment. Plus, you can use your card again and again to pay for additional treatment for yourself or family members in any CareCredit practice.",

      // CareCredit Benefits
      careCreditBenefits: [
        "Low minimum monthly payments",
        "No-interest financing if paid within 12 months (Additional plans may be available)",
        "No up-front costs, pre-payment penalties or annual fees",
      ],
      careCreditLearnMore: "Learn more by visiting CareCredit.com or contacting our office.",
      careCreditApply: "It only takes a few minutes to apply for CareCredit and you may receive an online decision in seconds! For more information or to apply now, just click on the link below.",
      careCreditButtonText: "Apply for CareCredit",
      careCreditUrl: "https://www.carecredit.com",

      // Bottom Section
      convenienceText: "FOR YOUR CONVENIENCE, WE ACCEPT CASH, CHECKS AND MOST MAJOR CREDIT CARDS. PAYMENT IS EXPECTED AT THE TIME SERVICES ARE PERFORMED.",

      ctaButton: "Schedule Your Appointment",
    },
    es: {
      title: "Información Financiera",
      subtitle: "Opciones de Pago Flexibles para Su Cuidado Dental",

      // Insurance Section
      insuranceTitle: "Seguro",
      insuranceIntro: "Como servicio a nuestros pacientes, nuestra práctica facturará con gusto todos los programas de seguro dental, incluyendo atención no administrada, indemnización (tradicional) y PPO fuera de la red. No somos parte de ninguna red de atención administrada. Nuestro personal de contabilidad preparará todos los formularios necesarios para sus beneficios dentales.",
      insuranceReminder: "Sin embargo, le recordamos que su póliza específica es un acuerdo entre usted y su compañía de seguros. Por favor tenga en cuenta que usted es responsable de su obligación total si sus beneficios de seguro resultan en menos cobertura de la anticipada. Nuestro personal enviará con gusto una estimación de pre-tratamiento a su compañía de seguros para que sepa cuáles serán sus beneficios.",
      insuranceFees: "Los honorarios cobrados por los servicios prestados a los asegurados son los honorarios usuales y acostumbrados cobrados a todos nuestros pacientes por servicios similares. Su póliza puede basar sus asignaciones en un programa de tarifas fijas, que puede o no coincidir con nuestras tarifas habituales. Debe saber que las diferentes compañías de seguros varían mucho en los tipos de cobertura disponibles. Además, algunas compañías procesan las reclamaciones rápidamente mientras que otras retrasan el pago durante varios meses.",

      // Financing Section
      financingTitle: "Financiamiento",
      financingIntro: "Nos complace ofrecer a nuestros pacientes CareCredit, el líder de Norteamérica en planes de pago para pacientes. CareCredit le permite comenzar su tratamiento inmediatamente – y luego pagarlo con el tiempo con pagos mensuales bajos que se ajustan fácilmente a su presupuesto mensual.",
      financingDetails: "CareCredit funciona como una tarjeta de crédito, pero es exclusivo para servicios de salud. Sin costos iniciales, sin penalidades por pago anticipado y sin cuotas anuales, CareCredit le permite pagar con el tiempo y libera efectivo y tarjetas de crédito para las otras cosas que desea o necesita. CareCredit ofrece planes de pago mensual bajo para procedimientos de salud no comúnmente cubiertos por el seguro, incluyendo tratamiento dental. Además, puede usar su tarjeta una y otra vez para pagar tratamientos adicionales para usted o miembros de su familia en cualquier práctica de CareCredit.",

      // CareCredit Benefits
      careCreditBenefits: [
        "Pagos mensuales mínimos bajos",
        "Financiamiento sin intereses si se paga dentro de 12 meses (Planes adicionales pueden estar disponibles)",
        "Sin costos iniciales, penalidades por pago anticipado o cuotas anuales",
      ],
      careCreditLearnMore: "Aprenda más visitando CareCredit.com o contactando nuestra oficina.",
      careCreditApply: "¡Solo toma unos minutos solicitar CareCredit y puede recibir una decisión en línea en segundos! Para más información o para aplicar ahora, simplemente haga clic en el enlace a continuación.",
      careCreditButtonText: "Solicitar CareCredit",
      careCreditUrl: "https://www.carecredit.com",

      // Bottom Section
      convenienceText: "PARA SU CONVENIENCIA, ACEPTAMOS EFECTIVO, CHEQUES Y LA MAYORÍA DE LAS TARJETAS DE CRÉDITO PRINCIPALES. SE ESPERA EL PAGO EN EL MOMENTO EN QUE SE REALIZAN LOS SERVICIOS.",

      ctaButton: "Programe Su Cita",
    },
  };

  const t = content[language];

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="bg-cream py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-gray-600 text-lg">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-4 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Insurance Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-serif text-gray-900">
                  {t.insuranceTitle}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t.insuranceIntro}</p>
                <p>{t.insuranceReminder}</p>
                <p>{t.insuranceFees}</p>
              </div>
            </div>

            {/* Financing Section - CareCredit Highlighted */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl shadow-lg p-8 mb-12 border-2 border-primary-200">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-serif text-gray-900">
                  {t.financingTitle}
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  {t.financingIntro.split("CareCredit").map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <strong className="text-primary-700">CareCredit</strong>
                      )}
                    </span>
                  ))}
                </p>
                <p>
                  {t.financingDetails.split("CareCredit").map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <strong className="text-primary-700">CareCredit</strong>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* CareCredit Benefits */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">CareCredit Benefits:</h3>
                <ul className="space-y-3">
                  {t.careCreditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-700 mb-4">{t.careCreditLearnMore}</p>
              <p className="text-gray-700 mb-6">{t.careCreditApply}</p>

              {/* CareCredit Logo Placeholder & Apply Button */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Logo placeholder - replace with actual CareCredit logo */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <img
                    src="/images/carecredit-logo.png"
                    alt="CareCredit Patient Payment Plans"
                    className="h-12 w-auto"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-center">
                    <span className="text-2xl font-bold text-[#006B54]">CareCredit</span>
                    <span className="block text-sm text-[#006B54]">Patient Payment Plans</span>
                  </div>
                </div>
                <Link
                  href={t.careCreditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#006B54] text-white hover:bg-[#005544] px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  {t.careCreditButtonText}
                </Link>
              </div>
            </div>

            {/* Convenience Notice */}
            <div className="bg-gray-100 rounded-2xl p-8 mb-12 text-center">
              <p className="text-gray-800 font-semibold text-sm md:text-base tracking-wide">
                {t.convenienceText}
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={openAppointmentModal}
                className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                {t.ctaButton}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
