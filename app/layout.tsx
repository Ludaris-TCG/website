import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ludaris",
    template: "%s | Ludaris",
  },

  description: "Tu tienda online de TCGs",

  applicationName: "Ludaris",

  keywords: [
    "Ludaris",
    "TCG",
    "juegos de cartas",
    "cartas coleccionables",
    "Star Wars",
    "Unlimited",
    "SWU",
    "Lorcana",
  ],

  authors: [{ name: "Ludaris" }],

  creator: "Ludaris",
  publisher: "Ludaris",

  metadataBase: new URL("https://ludaris.es"),

  openGraph: {
    title: "Ludaris",
    description: "Donde comienza tu próxima colección.",
    url: "https://ludaris.es",
    siteName: "Ludaris",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ludaris",
    description: "Donde comienza tu próxima colección.",
    creator: "@ludaris_tcg",
  },

  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
