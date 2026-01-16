import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import NewsTicker from "@/components/layout/NewsTicker";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Philosophy from "@/components/home/Philosophy";
import ServicesGrid from "@/components/home/ServicesGrid";
import CTABanner from "@/components/home/CTABanner";
import MeetTheDoctor from "@/components/sections/MeetTheDoctor";
import NewPatientSpecials from "@/components/sections/NewPatientSpecials";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <NewsTicker />
      <main>
        <Hero />
        <MeetTheDoctor />
        <NewPatientSpecials />
        {/*<Philosophy /> */}
        <ServicesGrid />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
