import HeroSection from "@/components/hero-section";
import MisionValores from "@/components/mision-valores";
import Sucursales from "@/components/sucursales";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <HeroSection />
      <MisionValores />
      <Sucursales />
      <ContactSection />
      <Footer />
    </main>
  );
}
