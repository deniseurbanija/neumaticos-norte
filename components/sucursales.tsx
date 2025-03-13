"use client"

import { MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"

interface BranchProps {
  name: string
  location: string
  address: string
  weekdayHours: string
  weekendHours: string
}

const branches: BranchProps[] = [
  {
    name: "Posadas",
    location: "Misiones",
    address: "Ruta 50",
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
]

export default function Sucursales() {
  return (
    <div className="bg-gray-100 py-16 my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="relative z-10">NUESTRAS SUCURSALES</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <Card key={index} className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow">
              <div className="h-3 bg-red-600"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{branch.name}</h3>
                    <Badge variant="outline" className="mt-1">
                      {branch.location}
                    </Badge>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <p className="text-gray-700">{branch.address}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-gray-700">{branch.weekdayHours}</p>
                    <p className="text-gray-700">{branch.weekendHours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}



