import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AppointmentProvider } from "@/context/AppointmentContext";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://northsalinasdental.com"),
  title: {
    default: "North Salinas Dental | Dr. Ritu Bhardwaj DDS",
    template: "%s | North Salinas Dental",
  },
  description:
    "Creating beautiful and healthy smiles by combining advanced technology with patient comfort and care. Serving Salinas, CA.",
  keywords: [
    "dentist Salinas CA",
    "North Salinas Dental",
    "Dr. Ritu Bhardwaj",
    "cosmetic dentistry Salinas",
    "dental implants Salinas",
    "family dentist Salinas",
    "emergency dental care",
  ],
  authors: [{ name: "Dr. Ritu Bhardwaj DDS" }],
  creator: "North Salinas Dental",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://northsalinasdental.com",
    siteName: "North Salinas Dental",
    title: "North Salinas Dental | Modern Dentistry in Salinas, CA",
    description:
      "Creating beautiful and healthy smiles by combining advanced technology with patient comfort and care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "North Salinas Dental - Modern Dental Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Salinas Dental | Dr. Ritu Bhardwaj DDS",
    description:
      "Experience a calm, modern approach to dental health in Salinas, CA.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "North Salinas Dental",
              description:
                "A dental practice offering comprehensive dental care with a focus on patient comfort and advanced technology.",
              url: "https://northsalinasdental.com",
              telephone: "+1-831-449-8363",
              address: {
                "@type": "PostalAddress",
                streetAddress: "620 E. Alvin Dr. #E",
                addressLocality: "Salinas",
                addressRegion: "CA",
                postalCode: "93906",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.6777,
                longitude: -121.6555,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday", "Sunday"],
                  opens: "00:00",
                  closes: "00:00",
                },
              ],
              priceRange: "$$",
              image: "https://northsalinasdental.com/og-image.jpg",
              sameAs: [],
              medicalSpecialty: "Dentistry",
              availableService: [
                "General Dentistry",
                "Cosmetic Dentistry",
                "Dental Implants",
                "Emergency Dental Care",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <AppointmentProvider>
            {children}
            <MobileBottomNav />
          </AppointmentProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
