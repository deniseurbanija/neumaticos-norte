import Image from "next/image";
import { Button } from "@/components/ui/button";

const productos = [
  {
    id: 1,
    nombre: "Bridgestone Turanza T005",
    descripcion:
      "Neumático premium para turismos con excelente rendimiento en mojado y alta durabilidad.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    nombre: "Bridgestone Potenza Sport",
    descripcion:
      "Máximo rendimiento deportivo con excelente respuesta y agarre en todas las condiciones.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    nombre: "Bridgestone Dueler A/T 001",
    descripcion:
      "Neumático todo terreno para SUVs y 4x4 con excelente tracción en cualquier superficie.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
];

export default function ProductosDestacados() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-center">
        PRODUCTOS DESTACADOS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48 sm:h-56 md:h-64 w-full">
              <Image
                src={producto.imagen || "/placeholder.svg"}
                alt={producto.nombre}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {producto.nombre}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                {producto.descripcion}
              </p>
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
