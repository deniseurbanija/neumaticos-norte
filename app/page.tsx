import HeroSection from "@/components/hero-section";
import MisionValores from "@/components/mision-valores";
import Sucursales from "@/components/sucursales";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <MisionValores />
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4">
          <Sucursales />
        </div>
      </div>
      <Footer/>
    </main>
  );
}
