import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://www.senegaldrive.com"),
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
    url: "https://www.senegaldrive.com",
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KH6GVHBN');`,
          }}
        />
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ye8furuy6u");`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KH6GVHBN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
