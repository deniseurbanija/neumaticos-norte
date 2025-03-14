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
      <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-white">
        <SheetHeader>
          <SheetTitle className="text-left">Menú</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#mision-valores"
            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            NOSOTROS
          </Link>
          <Link
            href="#servicios"
            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            SERVICIOS
          </Link>
          <Link
            href="#sucursales"
            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            SUCURSALES
          </Link>
          <Link
            href="#contacto"
            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            CONTACTO
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
