import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "DRC BUSINESS CONSULT",
  description: "DRC Business Consult - Votre partenaire en RDC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} font-body antialiased [font-smooth:always]`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <meta name="theme-color" content="#FFA500" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-body bg-white text-[#111418]">
        {children}
      </body>
    </html>
  );
}
