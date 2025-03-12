import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
      <Image
        src="/public/neumaticos-ruta"
        alt="Neumáticos Norte - Distribuidor Bridgestone"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-4 md:px-16">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            NEUMÁTICOS NORTE
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-6">
            DISTRIBUIDOR OFICIAL BRIDGESTONE
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
            Ofrecemos la mejor selección de neumáticos Bridgestone con
            asesoramiento personalizado, servicio técnico especializado y los
            mejores precios del mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
