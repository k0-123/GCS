import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0B2F4A",
};

// Fonts are self-hosted (latin subset, downloaded from Google Fonts) so the
// build does not depend on fetching fonts.googleapis.com at build time.
const archivo = localFont({
  src: [{ path: "./fonts/Archivo-Variable-latin.woff2", weight: "400 900", style: "normal" }],
  variable: "--font-archivo",
  display: "swap",
});

const ibmPlexSans = localFont({
  src: [{ path: "./fonts/IBMPlexSans-Variable-latin.woff2", weight: "300 700", style: "normal" }],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = localFont({
  src: [
    { path: "./fonts/IBMPlexMono-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-500-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexMono-600-latin.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gangadhar Concrete Solution | Laser Screed Flooring Contractor, Jaipur",
  description:
    "Jaipur's first laser screed concrete flooring company. FM1/FM2 & VNA floors, jointless SFRC flooring, epoxy, polishing & densification — built to TR34, ASTM E1155 & DIN codes.",
  keywords: [
    "laser screed flooring Jaipur",
    "FM1 FM2 flooring",
    "VNA flooring DM1 DM2",
    "jointless SFRC flooring",
    "steel fiber reinforced concrete flooring",
    "concrete polishing and densification",
    "epoxy flooring",
    "TR34 floor certification",
    "industrial flooring contractor Rajasthan",
    "warehouse flooring India",
  ],
  openGraph: {
    title: "Gangadhar Concrete Solution | Laser Screed Flooring Contractor, Jaipur",
    description:
      "Jaipur's first laser screed concrete flooring company. FM1/FM2 & VNA floors, jointless SFRC flooring, epoxy, polishing & densification — built to TR34, ASTM E1155 & DIN codes.",
    type: "website",
    locale: "en_IN",
    siteName: "Gangadhar Concrete Solution",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-body antialiased bg-ink-navy overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main className="min-h-screen overflow-x-hidden w-full max-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
