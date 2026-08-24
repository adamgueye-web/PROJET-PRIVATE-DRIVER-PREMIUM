import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// General Sans n'est pas sur Google Fonts : les fichiers viennent de la maquette.
const generalSans = localFont({
  variable: "--font-general-sans",
  src: [
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Transferts privés avec chauffeur à Dakar et au Sénégal`,
  description:
    "Transferts aéroport AIBD, mises à disposition et excursions en van climatisé avec chauffeur privé. Prix fixe annoncé à l'avance, aucune négociation.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `${site.name} — Chauffeur privé au Sénégal`,
    description:
      "Transferts aéroport, mises à disposition et excursions en van climatisé. Prix fixe, réponse sous 15 minutes.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1721",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${instrumentSerif.variable} ${generalSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
