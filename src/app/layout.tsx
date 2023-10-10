import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ukUA } from "@clerk/localizations";
import { cn } from "../lib/utils";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

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
      <ReduxProvider>
        <html lang="uk" className={cn("antialiased", inter.className)}>
          <body className="flex flex-col min-h-screen pt-20 antialiased bg-slate-50">
            <Header />
            <main className="container flex-grow mx-auto max-w-7xl flex flex-col items-center p-4">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      </ReduxProvider>
    </ClerkProvider>
  );
}
