import Link from "next/link";
import HeroSection from "@/components/hero-section";
import MisionValores from "@/components/mision-valores";
import ProductosDestacados from "@/components/productos-destacados";
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />

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
