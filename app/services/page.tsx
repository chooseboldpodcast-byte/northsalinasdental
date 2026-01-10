import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesNav from "@/components/services/ServicesNav";
import ServiceSection from "@/components/services/ServiceSection";
import FloatingCTA from "@/components/services/FloatingCTA";

export const metadata = {
  title: "Comprehensive Dental Services",
  description: "From routine prevention to complete makeovers, we offer a full spectrum of dental services under one roof in Salinas, CA.",
};

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesNav />
        
        {/* Service Sections */}
        <ServiceSection serviceId="cleaning" />
        <ServiceSection serviceId="family" />
        <ServiceSection serviceId="cosmetic" />
        <ServiceSection serviceId="replacement" />
        <ServiceSection serviceId="extraction" />
        <ServiceSection serviceId="orthodontics" />
        <ServiceSection serviceId="sedation" />
        <ServiceSection serviceId="technology" />
        
        <FloatingCTA />
      </main>
      <Footer />
    </>
  );
}
