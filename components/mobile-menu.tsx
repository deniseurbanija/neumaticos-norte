"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menú</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/productos"
            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            NUESTROS NEUMÁTICOS
          </Link>
          <Link
            href="/consejos"
            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            CONSEJOS
          </Link>
          <Link
            href="/promociones"
            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            PROMOCIONES
          </Link>
          <Link
            href="/nosotros"
            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            NOSOTROS
          </Link>
          <Link
            href="/contacto"
            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            CONTACTO
          </Link>

          <div className="border-t border-gray-200 my-4 pt-4">
            <Button
              variant="outline"
              className="w-full justify-start mb-3 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Cómo llegar
            </Button>

            <Button className="w-full justify-start bg-red-600 hover:bg-red-700 text-white">
              <Search className="mr-2 h-4 w-4" />
              Buscar neumáticos
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
