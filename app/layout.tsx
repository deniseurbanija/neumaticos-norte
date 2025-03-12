import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neumáticos Norte - Distribuidor Oficial Bridgestone",
  description:
    "Distribuidor oficial de neumáticos Bridgestone con los mejores precios y servicio técnico especializado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
