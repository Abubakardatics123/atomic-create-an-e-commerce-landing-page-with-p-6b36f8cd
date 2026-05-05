"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";

type Props = { item: CartItemType };

export default function CartItem({ item }: Props) {
  const { updateQty, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-5 border-b border-gray-100 last:border-0">
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-orange-500 uppercase tracking-wide mb-0.5">
          {item.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 mb-2">
          {item.name}
        </h3>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-1 py-1">
            <button
              onClick={() => updateQty(item.id, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:shadow transition-all"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <span className="text-sm font-semibold text-gray-900 w-5 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQty(item.id, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:shadow transition-all"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5 text-gray-600" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-gray-900">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
