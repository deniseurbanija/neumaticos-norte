"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  // Function to open WhatsApp chat
  const openWhatsAppChat = () => {
    window.open("https://wa.me/5493624649788", "_blank");
  };

  return (
    <div className="bg-white py-16" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="relative z-10">CONTACTO</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-600">+54 9 3624649788</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@neumaticos-norte.com</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Casa Central</h3>
              <p className="text-gray-600">Ruta 12 Km 5, Misiones</p>
            </div>
          </div>
          {/* WhatsApp Button */}
          <div className="flex justify-center mb-12">
            <Button
              onClick={openWhatsAppChat}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-6 rounded-lg flex items-center gap-2 text-lg transition-all hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chatea con nosotros</span>
            </Button>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">
              Síguenos en redes sociales
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/neumaticos.norte/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-4 rounded-full transition-all hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Neumaticosnortesrl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-4 rounded-full transition-all hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
