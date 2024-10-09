import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const poppins = Poppins({ preload: true, weight: ["300", "400", "500", "600"], subsets: ['latin'], adjustFontFallback: true, display: "swap", fallback: ["sans-serif"], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "Diseño y desarrollo de páginas web a medida | Growiit",
  description: "Agencia de Diseño Web especializada en crear páginas web a medida, optimizadas para SEO, UX/UI y conversión, enfocadas en potenciar tu negocio online.",
  keywords: "disenos web, diseño de paginas web, diseño de pàginas web, diseño ux ui, diseño web, diseños web, agencia de diseño, agencia de diseño web, creacion de paginas web, diseño de web, diseño pagina web, sitios web profesionales, diseño web pequeñas empresas, paginas web corporativas, paginas web para inmobiliarias, paginas web para restaurantes, paginas web para abogados",
  robots: "follow, index",
  authors: [{
    name: "Growiit",
  }],
  alternates: {
    canonical: "https://growiit.com",
  },
  twitter: {
    title: "Diseño y desarrollo de páginas web a medida | Growiit",
    description: "Agencia de Diseño Web especializada en crear páginas web a medida, optimizadas para SEO, UX/UI y conversión, enfocadas en potenciar tu negocio online.",
    card: "summary_large_image",
    images: {
      url: "https://d1ssfwckvhk5up.cloudfront.net/public/og-image.jpg",
      alt: "Diseño y desarrollo de páginas web a medida | Growiit",
      type: "image/jpeg",
      width: 1200,
      height: 600,
    }
  },
  openGraph: {
    type: "website",
    title: "Diseño y desarrollo de páginas web a medida | Growiit",
    description: "Agencia de Diseño Web especializada en crear páginas web a medida, optimizadas para SEO, UX/UI y conversión, enfocadas en potenciar tu negocio online.",
    url: "https://growiit.com",
    siteName: "Growiit",
    images: {
      url: "https://d1ssfwckvhk5up.cloudfront.net/public/og-image.jpg",
      alt: "Diseño y desarrollo de páginas web a medida | Growiit",
      type: "image/jpeg",
      width: 1200,
      height: 600,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-PVRE45HLQ4"/>
    </html>
  );
}
