import HeroSection from "@/components/hero-section";
import MisionValores from "@/components/mision-section";
import Sucursales from "@/components/badge-section";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <HeroSection />
      <MisionValores />
      <ServicesSection />
      <Sucursales />
      <ContactSection />
      <Footer />
    </main>
  );
}
