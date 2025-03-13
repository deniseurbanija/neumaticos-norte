import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { Button } from "./ui/button";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";

export const NavBar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="m-auto px-8 py-3 flex w-full items-center justify-between">
        <div className="flex w-full justify-between items-center">
          <MobileMenu />
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={130} height={100}/>
          </Link>
        </div>
        <div className="flex items-center justify-between lg:space-x-3">
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="#mision-valores"
              className="text-black font-medium hover:text-red-600 transition-colors text-sm lg:text-base"
            >
              Nosotros
            </Link>
            <Link
              href="#sucursales"
              className="text-black font-medium hover:text-red-600 transition-colors text-sm lg:text-base"
            >
              Sucursales
            </Link>
            <Link
              href="/contacto"
              className="text-black font-medium hover:text-red-600 transition-colors mr-4 text-sm lg:text-base"
            >
              Contacto
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-xs lg:text-sm"
          >
            <MapPin size={16} />
            <span className="hidden lg:inline">Cómo llegar</span>
            <span className="lg:hidden">Ubicación</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
