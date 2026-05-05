"use client";

import { useState } from "react";
import { ShoppingCart, Star, Eye, Check } from 'lucide-react';
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

type Props = { product: Product };

const badgeStyles: Record<string, string> = {
  sale: "bg-red-500 text-white",
  new: "bg-green-500 text-white",
  hot: "bg-orange-500 text-white",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={
            i <= Math.round(rating)
              ? "w-3.5 h-3.5 fill-amber-400 text-amber-400"
              : "w-3.5 h-3.5 fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const overlayClass = hovered
    ? "absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 transition-opacity duration-300"
    : "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300";

  const btnClass = added
    ? "mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-green-500 text-white transition-all duration-200"
    : "mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-gray-900 hover:bg-orange-500 text-white transition-all duration-200";

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {product.badge && (
          <span className={"absolute top-3 left-3 text-xs font-bold uppercase px-2.5 py-1 rounded-full " + badgeStyles[product.badge]}>
            {product.badge === "sale" && discount ? "-" + discount + "%" : product.badge}
          </span>
        )}

        <div className={overlayClass}>
          <button className="flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-colors duration-200">
            <Eye className="w-4 h-4" />
            Quick View
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-xs font-medium text-orange-500 uppercase tracking-wide">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 flex-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-400">({product.reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button onClick={handleAdd} className={btnClass}>
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
