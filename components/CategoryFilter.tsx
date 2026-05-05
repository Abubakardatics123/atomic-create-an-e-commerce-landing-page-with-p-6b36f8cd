"use client";

import { categories } from "@/lib/products";

type Props = {
  active: string;
  onChange: (cat: string) => void;
};

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            active === cat
              ? "px-4 py-2 rounded-full text-sm font-semibold bg-orange-500 text-white shadow-md shadow-orange-200 transition-all duration-200"
              : "px-4 py-2 rounded-full text-sm font-semibold bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500 transition-all duration-200"
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
