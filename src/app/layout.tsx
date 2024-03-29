import "./globals.css";
import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ukUA } from "@clerk/localizations";

import { cn } from "../lib/utils";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Providers from "../Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const bitter = Bitter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Eppo",
  description: "Інтернет-магазин біжутерії",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ukUA}>
      <html lang="uk" className={cn("antialiased", bitter.className)}>
        <body className="flex flex-col min-h-screen antialiased bg-slate-50">
          <Providers>
            <Header />
            <main className="container flex-grow pb-20 mx-auto max-w-7xl">
              {children}
            </main>
            <Footer />
            <SpeedInsights />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
