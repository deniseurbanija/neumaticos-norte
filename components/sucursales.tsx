import Image from "next/image";
import { Button } from "@/components/ui/button";

const sucursales = [
  {
    id: 1,
    city: "Posadas, Misiones",
    ubication:
      "Ruta 50",
    description: "8:00 a 18:00",
  },
  {
    id: 2,
    city: "Resistencia, Chaco",
    ubication:
      "Av. 25 de mayo 1170",
    description: "8:00 a 12:00 - 16:00 a 20:00",
  },
];

export default function Sucursales() {
  return (
    <div id="sucursales">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-center">
        NUESTRAS SUCURSALES
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-8">
        {sucursales.map((sucursal) => (
          <div
            key={sucursal.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {sucursal.city}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                {sucursal.ubication}
              </p>
              <p>{sucursal.description}</p>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Ver detalles
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-12 text-center">
        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 md:px-8 md:py-6 text-base md:text-lg">
          Ver todos los productos
        </Button>
      </div>
    </div>
  );
}
