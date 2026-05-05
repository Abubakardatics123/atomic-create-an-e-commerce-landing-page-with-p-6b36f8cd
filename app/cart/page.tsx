"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import { ShoppingCart, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { items } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          Shopping Cart
        </h1>
        <p className="text-gray-500 mb-8">
          {items.length === 0
            ? "Your cart is empty"
            : items.length === 1
            ? "1 item in your cart"
            : items.length + " items in your cart"}
        </p>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-10 h-10 text-gray-300" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              Looks like you haven&apos;t added anything yet. Browse our collection and find
              something you love!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-orange-200 hover:-translate-y-0.5"
            >
              <ShoppingCart className="w-4 h-4" />
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
