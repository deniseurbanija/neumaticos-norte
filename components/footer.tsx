"use client";

import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import Link from "next/link";

// Branch data
const branches = [
  {
    name: "Posadas",
    location: "Misiones",
    address: "Ruta 50",
    phone: "+54 9 11 1234-5678",
    instagramHandle: "neumaticos_norte_posadas",
  },
  {
    name: "Resistencia",
    location: "Chaco",
    address: "Av. 25 de mayo 1170",
    phone: "+54 9 11 8765-4321",
    instagramHandle: "neumaticos_norte_resistencia",
  },
];

// Services data
const services = [
  "Alineado",
  "Balanceo",
  "Reparación llantas",
  "Tren delantero",
  "Frenos",
  "Decapado",
  "Parches",
  "Servicios para motos",
];

// Products data
const products = ["Baterías", "Escobilla", "Insumo gomerias", "Cámaras"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Neumáticos Norte
            </h3>
            <p className="mb-4">
              Somos especialistas en neumáticos y servicios automotrices con más
              de 20 años de experiencia en el mercado.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-red-500" />
              <span>neumaticosnortesrl@hotmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-500" />
              <span>+54 9 3624649788</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>Noticias</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>Sucursales</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>Servicios</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Nuestros Servicios
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index} className="flex items-center gap-1">
                  <ChevronRight className="h-4 w-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-white text-lg font-bold mt-4 mb-2">
              Productos
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2">
              {products.map((product, index) => (
                <li key={index} className="flex items-center gap-1">
                  <ChevronRight className="h-4 w-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Nuestras Sucursales
            </h3>
            <div className="space-y-4">
              {branches.map((branch, index) => (
                <div key={index} className="border-l-2 border-red-500 pl-3">
                  <h4 className="text-white font-medium">
                    {branch.name}, {branch.location}
                  </h4>
                  <div className="text-sm space-y-1 mt-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-red-500" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3 text-red-500" />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                      <a
                        href={`https://instagram.com/${branch.instagramHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition-colors"
                      >
                        @{branch.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black py-4 text-gray-300 flex justify-center">
        <p className=" text-sm text-center md:text-left">
          &copy; {currentYear} Neumáticos Norte. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
