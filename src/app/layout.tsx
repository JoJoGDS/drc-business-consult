import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "./fonts";
import { UIProvider } from "@/contexts/UIContext";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export const metadata: Metadata = {
  title: "DRC BUSINESS CONSULT",
  description: "DRC Business Consult - Votre partenaire en RDC",
  icons: {
    icon: "/images/logo.png",
  },
  themeColor: "#FFA500",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} font-body antialiased [font-smooth:always]`}>
      <body className="font-body text-[#111418] overflow-x-hidden">
        <UIProvider>
          <ParticlesBackground />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
