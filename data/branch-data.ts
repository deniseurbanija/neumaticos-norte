interface BranchProps {
  name: string;
  location: string;
  address: string;
  weekdayHours: string;
  weekendHours: string;
}

export const branches: BranchProps[] = [
  {
    name: "Posadas",
    location: "Misiones",
    address: "Ruta 12 Km 5",
    weekdayHours: "Lunes a viernes: 8:00 a 17:00",
    weekendHours: "Sábados: 8:00 a 12:00",
  },
  {
    name: "Resistencia",
    location: "Chaco",
    address: "Av. 25 de mayo 1170",
    weekdayHours: "Lunes a viernes: 8:00 a 12:00 - 16:00 a 20:00",
    weekendHours: "Sábados: 8:00 a 12:00",
  },
];
