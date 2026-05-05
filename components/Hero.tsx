import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Star className="w-3.5 h-3.5 fill-orange-400" />
              Rated #1 Online Store 2024
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Discover Products{" "}
              <span className="text-orange-500">You&apos;ll Love</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Shop the latest trends in electronics, fashion, and lifestyle. Curated collections,
              unbeatable prices, and fast delivery — all in one place.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Deals
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">&#10003;</span> Free Returns
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">&#10003;</span> Secure Checkout
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">&#10003;</span> 24/7 Support
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-700">
                <img
                  src="/images/wireless-noise-cancelling-headphones.jpg"
                  alt="Headphones"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-gray-700">
                <img
                  src="/images/minimalist-leather-watch.jpg"
                  alt="Watch"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-gray-700">
                <img
                  src="/images/running-sneakers-pro.jpg"
                  alt="Sneakers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-700">
                <img
                  src="/images/organic-cotton-hoodie.jpg"
                  alt="Hoodie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "1,200+", label: "Products" },
            { value: "4.9 Stars", label: "Average Rating" },
            { value: "Free", label: "Shipping $75+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-orange-400">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
