"use client";

import {
  Settings,
  RotateCw,
  Disc,
  Wrench,
  Gauge,
  Sparkles,
  Scissors,
  Bike,
  Battery,
  Droplets,
  Package,
  Circle,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    { name: "Alineado", icon: <Settings className="h-8 w-8" /> },
    { name: "Balanceo", icon: <RotateCw className="h-8 w-8" /> },
    { name: "Reparación llantas", icon: <Disc className="h-8 w-8" /> },
    { name: "Tren delantero", icon: <Wrench className="h-8 w-8" /> },
    { name: "Frenos", icon: <Gauge className="h-8 w-8" /> },
    { name: "Recapado", icon: <Sparkles className="h-8 w-8" /> },
    { name: "Parches", icon: <Scissors className="h-8 w-8" /> },
    {
      name: "Armé, desarmé y balanceo de motos",
      icon: <Bike className="h-8 w-8" />,
    },
  ];

  const products = [
    { name: "Baterías", icon: <Battery className="h-8 w-8" /> },
    { name: "Escobilla", icon: <Droplets className="h-8 w-8" /> },
    { name: "Insumo gomerias", icon: <Package className="h-8 w-8" /> },
    { name: "Cámaras", icon: <Circle className="h-8 w-8" /> },
  ];

  return (
    <div className="py-16" id="servicios">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="relative z-10">SERVICIOS</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Services */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
                >
                  <div className="bg-red-50 p-4 rounded-full mb-4 text-red-600">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-lg">{service.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Nuestros Productos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
                >
                  <div className="bg-red-50 p-4 rounded-full mb-4 text-red-600">
                    {product.icon}
                  </div>
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
