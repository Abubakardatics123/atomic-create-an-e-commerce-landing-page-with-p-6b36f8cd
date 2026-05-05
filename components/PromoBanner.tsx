"use client";

import { useState } from "react";
import { X } from 'lucide-react';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-orange-500 text-white text-sm font-medium py-2.5 px-4 flex items-center justify-center gap-3 relative">
      <span className="text-center">
        🎉 <strong>Summer Sale — Up to 40% OFF!</strong> Free shipping on orders over $75.{" "}
        <span className="underline cursor-pointer hover:no-underline">Shop now →</span>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-75 transition-opacity"
        aria-label="Dismiss banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
