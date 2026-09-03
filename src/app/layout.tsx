import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
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

const seoDescription =
  "Transferts aéroport AIBD, location avec chauffeur et excursions en van ou SUV confortables, spacieux et climatisés. Vans 7 places et SUV haut de gamme. Prix fixe annoncé à l'avance, aucune négociation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://private-driver-premium.vercel.app"),
  title: "SenegalDrive — Transferts & location avec chauffeur à Dakar et au Sénégal",
  description: seoDescription,
  keywords: [
    "chauffeur privé Dakar",
    "transfert aéroport AIBD",
    "location avec chauffeur Sénégal",
    "van avec chauffeur Dakar",
    "SUV avec chauffeur Dakar",
    "SUV climatisé Sénégal",
    "excursion Sénégal chauffeur",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://private-driver-premium.vercel.app",
    siteName: "SenegalDrive",
    title: "SenegalDrive — Transferts & location avec chauffeur au Sénégal",
    description:
      "Transferts aéroport, location avec chauffeur et excursions. Van ou SUV climatisé, prix fixe, réponse sous 15 minutes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SenegalDrive — Transferts & location avec chauffeur au Sénégal",
    description:
      "Transferts aéroport, location avec chauffeur et excursions. Van ou SUV climatisé, prix fixe, réponse sous 15 minutes.",
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
