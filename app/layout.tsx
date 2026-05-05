import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SparkShop — Discover Products You'll Love",
  description:
    "Shop the latest trends in electronics, fashion, and lifestyle. Curated collections, unbeatable prices, and fast delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white text-gray-900 antialiased"}>
        <CartProvider>
          <PromoBanner />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
