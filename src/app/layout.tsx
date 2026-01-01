import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "SalaTrack Health",
  description: "Smart medical scheduling and clinical workflow management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-zinc-50 text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}