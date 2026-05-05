"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <span>
              Spark<span className="text-orange-500">Shop</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/#products" className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
              Products
            </Link>
            <Link href="/#newsletter" className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
              Deals
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            <Link
              href="/cart"
              className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-500 rounded-full animate-pulse">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="text-sm font-medium text-gray-700 hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/#newsletter"
            className="text-sm font-medium text-gray-700 hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Deals
          </Link>
        </div>
      )}
    </nav>
  );
}
