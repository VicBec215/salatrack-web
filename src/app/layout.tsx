import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// IMPORTANTE:
// - Si ya tienes el dominio conectado, usa https://salatrack.app
// - Si aún no, puedes usar temporalmente tu URL de Vercel
const siteUrl = "https://salatrack.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "SalaTrack Health",
  description: "Smart medical scheduling and clinical workflow management",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "SalaTrack Health",
    description: "Smart medical scheduling and clinical workflow management",
    url: siteUrl,
    siteName: "SalaTrack Health",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SalaTrack Health",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SalaTrack Health",
    description: "Smart medical scheduling and clinical workflow management",
    images: ["/og.png"],
  },
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