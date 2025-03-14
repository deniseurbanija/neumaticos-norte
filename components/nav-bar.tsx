import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="m-auto px-8 py-3 flex w-full items-center">
        <div className="flex w-full justify-between items-center">
          <MobileMenu />
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={130} height={100} />
          </Link>
        </div>
        <div className="flex items-center justify-between lg:space-x-3">
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="#mision-valores"
              className="text-black  hover:text-red-600 transition-colors text-sm lg:text-lg"
            >
              Nosotros
            </Link>
            <Link
              href="#servicios"
              className="text-black  hover:text-red-600 transition-colors text-sm lg:text-lg"
            >
              Servicios
            </Link>
            <Link
              href="#sucursales"
              className="text-black font-medium hover:text-red-600 transition-colors text-sm lg:text-lg"
            >
              Sucursales
            </Link>
            <Link
              href="#contacto"
              className="text-black font-medium hover:text-red-600 transition-colors mr-4 text-sm lg:text-lg"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
