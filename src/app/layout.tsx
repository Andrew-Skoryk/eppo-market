import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "../lib/utils";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <ClerkProvider>
      <html
        lang="uk"
        className={cn("antialiased text-slate-900", inter.className)}
      >
        <body className="flex flex-col min-h-screen pt-24 antialiased bg-slate-50">
          <Header />
          <div className="container h-full mx-auto max-w-7xl">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
