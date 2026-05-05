"use client";

import { useCart } from "@/context/CartContext";
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Link from "next/link";

export default function OrderSummary() {
  const { subtotal, items } = useCart();
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="font-medium text-green-600">Free</span>
          ) : (
            <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Estimated Tax (8%)</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>

        {subtotal > 0 && subtotal < 75 && (
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 text-xs text-orange-700">
            Add <strong>${(75 - subtotal).toFixed(2)}</strong> more to get free shipping!
          </div>
        )}

        <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-base text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="mt-6 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-orange-200 hover:-translate-y-0.5">
        Proceed to Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <Link
        href="/"
        className="mt-3 w-full flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors py-2"
      >
        <ShoppingCart className="w-4 h-4" />
        Continue Shopping
      </Link>

      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400">
        <span>&#128274; Secure Checkout</span>
        <span>&#10003; Free Returns</span>
      </div>
    </div>
  );
}
