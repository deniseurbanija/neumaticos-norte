import Image from "next/image";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import MisionValores from "@/components/mision-valores";
import ProductosDestacados from "@/components/productos-destacados";
import MobileMenu from "@/components/mobile-menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <MobileMenu />
            <Link href="/">
              <div className="relative h-10 w-24 md:h-14 md:w-32">
                <Image
                  src="/placeholder.svg?height=56&width=128"
                  alt="Neumáticos Norte Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              href="/productos"
              className="text-black font-medium hover:text-red-600 transition-colors text-sm lg:text-base"
            >
              NUESTROS NEUMÁTICOS
            </Link>
            <Link
              href="/consejos"
              className="text-black font-medium hover:text-red-600 transition-colors text-sm lg:text-base"
            >
              CONSEJOS
            </Link>
            <Link
              href="/promociones"
              className="text-black font-medium hover:text-red-600 transition-colors text-sm lg:text-base"
            >
              PROMOCIONES
            </Link>
            <Link
              href="/nosotros"
              className="text-black font-medium hover:text-red-600 transition-colors text-sm lg:text-base"
            >
              NOSOTROS
            </Link>
            <Link
              href="/contacto"
              className="text-black font-medium hover:text-red-600 transition-colors text-sm lg:text-base"
            >
              CONTACTO
            </Link>
          </nav>

          <div className="flex items-center space-x-2 lg:space-x-3">
            <Button
              variant="outline"
              className="hidden md:flex items-center gap-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-xs lg:text-sm"
            >
              <MapPin size={16} />
              <span className="hidden lg:inline">Cómo llegar</span>
              <span className="lg:hidden">Ubicación</span>
            </Button>

            <Button className="bg-red-600 hover:bg-red-700 text-white text-xs lg:text-sm px-2 lg:px-4">
              <Search size={16} className="mr-1 lg:mr-2" />
              <span className="hidden sm:inline">Buscar neumáticos</span>
              <span className="sm:hidden">Buscar</span>
            </Button>
          </div>
        </div>
      </header>

      <HeroSection />

      <div className="container mx-auto px-4 py-16">
        <MisionValores />
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <ProductosDestacados />
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 md:mb-4">
                Neumáticos Norte
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Distribuidor oficial de Bridgestone con más de 15 años de
                experiencia brindando calidad y servicio.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 md:mb-4">
                Enlaces rápidos
              </h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <Link
                    href="/productos"
                    className="text-gray-300 hover:text-white"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="text-gray-300 hover:text-white"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/promociones"
                    className="text-gray-300 hover:text-white"
                  >
                    Promociones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-gray-300 hover:text-white"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 md:mb-4">Horarios</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Lunes a Viernes: 8:30 - 19:00
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Sábados: 9:00 - 13:00
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Domingos: Cerrado
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 md:mb-4">Contacto</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Av. Principal 1234
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Ciudad Norte, CP 12345
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Tel: (123) 456-7890
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                info@neumaticos-norte.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Neumáticos Norte - Distribuidor
              Oficial de Bridgestone. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
