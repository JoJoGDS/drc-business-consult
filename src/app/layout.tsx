import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UIProvider } from "@/contexts/UIContext";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "DRC Business Consult",
  description: "Services de conseil en gestion d'entreprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <UIProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </UIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
