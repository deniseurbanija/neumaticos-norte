import Image from "next/image";

export default function MisionValores() {
  return (
    <section className="bg-gray-50  mx-auto px-4 py-16" id="mision-valores">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden order-2 md:order-1">
          <Image
            src="/working.jpg"
            alt="Neumáticos Norte - Nuestro local"
            fill
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            <span className="relative z-10">MISION Y VALORES</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-red-600"></span>
          </h2>
          <p className="text-base md:text-lg mb-3 md:mb-4">
            En Neumáticos Norte, como distribuidor oficial de Bridgestone y
            Firestone, compartimos la visión del fundador Shojiro Ishibashi de
            "servir a la sociedad con calidad superior".
          </p>
          <p className="text-base md:text-lg mb-3 md:mb-4">
            Nuestra misión es brindar a nuestros clientes los mejores productos
            y servicios, con un asesoramiento personalizado y profesional que
            garantice su seguridad y satisfacción.
          </p>
          <p className="text-base md:text-lg mb-3 md:mb-4">
            Nos comprometemos con:
          </p>
          <ul className="list-disc pl-6 space-y-1 md:space-y-2 text-base md:text-lg">
            <li>Excelencia en el servicio al cliente</li>
            <li>Productos de la más alta calidad</li>
            <li>Asesoramiento técnico especializado</li>
            <li>Compromiso con el medio ambiente</li>
            <li>Precios justos y competitivos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
