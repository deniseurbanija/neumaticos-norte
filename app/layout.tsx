import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']}
  );

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
      <body className={poppins.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
