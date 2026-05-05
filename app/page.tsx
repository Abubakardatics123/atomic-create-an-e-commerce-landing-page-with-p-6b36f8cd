export const dynamic = "force-dynamic";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Truck, RotateCcw, Headphones, Zap, TrendingUp } from 'lucide-react';
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-600 opacity-5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
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
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Exclusive Deals
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><span className="text-green-400 font-bold">&#10003;</span> Free Returns</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400 font-bold">&#10003;</span> Secure Checkout</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400 font-bold">&#10003;</span> 24/7 Support</span>
            </div>
          </div>

          {/* Image collage */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-700 shadow-xl">
                <img src="/images/wireless-noise-cancelling-headphones.jpg" alt="Wireless Headphones" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-gray-700 shadow-xl">
                <img src="/images/minimalist-leather-watch.jpg" alt="Leather Watch" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-gray-700 shadow-xl">
                <img src="/images/running-sneakers-pro.jpg" alt="Running Sneakers" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-700 shadow-xl">
                <img src="/images/organic-cotton-hoodie.jpg" alt="Cotton Hoodie" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "1,200+", label: "Products" },
            { value: "4.9 Stars", label: "Average Rating" },
            { value: "Free", label: "Shipping on $75+" },
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

/* ─── Trust / Features Strip ────────────────────────────────────────────── */
function FeaturesStrip() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "On all orders over $75. Express delivery available at checkout.",
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      desc: "Not happy? Return any item within 30 days, no questions asked.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      desc: "256-bit SSL encryption on every transaction. Your data is safe.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our team is always on hand via live chat, email, or phone.",
    },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center">
              <Icon className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Category Showcase ─────────────────────────────────────────────────── */
function CategoryShowcase() {
  const cats = [
    {
      name: "Electronics",
      count: "320+ items",
      image: "/images/smart-fitness-tracker-wristband.jpg",
      color: "from-blue-900/70",
    },
    {
      name: "Clothing",
      count: "210+ items",
      image: "/images/organic-cotton-hoodie.jpg",
      color: "from-emerald-900/70",
    },
    {
      name: "Accessories",
      count: "180+ items",
      image: "/images/leather-crossbody-bag.jpg",
      color: "from-purple-900/70",
    },
    {
      name: "Footwear",
      count: "95+ items",
      image: "/images/running-sneakers-pro.jpg",
      color: "from-rose-900/70",
    },
    {
      name: "Sports",
      count: "140+ items",
      image: "/images/canvas-hiking-backpack.jpg",
      color: "from-amber-900/70",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
            Browse by Category
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">Shop What You Need</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            From cutting-edge gadgets to everyday essentials — find exactly what you&apos;re
            looking for across our five curated departments.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {cats.map((cat) => (
            <Link
              key={cat.name}
              href="/#products"
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={"absolute inset-0 bg-gradient-to-t " + cat.color + " to-transparent"} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm">{cat.name}</p>
                <p className="text-white/70 text-xs mt-0.5">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trending / Social Proof Banner ───────────────────────────────────── */
function TrendingBanner() {
  const highlights = [
    {
      icon: Zap,
      label: "Flash Deal",
      title: "Wireless Headphones",
      subtitle: "40% off today only — ends midnight",
      image: "/images/wireless-noise-cancelling-headphones.jpg",
      price: "$79.99",
      original: "$129.99",
      tag: "Best Seller",
    },
    {
      icon: TrendingUp,
      label: "Trending Now",
      title: "Smart Fitness Tracker",
      subtitle: "Track every workout, sleep cycle & more",
      image: "/images/smart-fitness-tracker-wristband.jpg",
      price: "$99.99",
      original: null,
      tag: "New Arrival",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
            Handpicked for You
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">This Week&apos;s Highlights</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map(({ icon: Icon, label, title, subtitle, image, price, original, tag }) => (
            <div
              key={title}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 text-white flex flex-col sm:flex-row items-stretch min-h-[200px] shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Text side */}
              <div className="flex-1 p-7 flex flex-col justify-between z-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    <Icon className="w-3 h-3" />
                    {label}
                  </div>
                  <h3 className="text-xl font-extrabold leading-snug mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{subtitle}</p>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-2xl font-extrabold text-orange-400">{price}</span>
                  {original && (
                    <span className="text-sm text-gray-500 line-through mb-0.5">{original}</span>
                  )}
                  <span className="ml-auto text-xs font-semibold bg-white/10 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                </div>
                <Link
                  href="/#products"
                  className="mt-5 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 w-fit hover:-translate-y-0.5"
                >
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Image side */}
              <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 relative overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent sm:bg-gradient-to-l" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof / Reviews ────────────────────────────────────────────── */
function SocialProof() {
  const reviews = [
    {
      name: "Sarah M.",
      avatar: "/images/customer-sarah-portrait.jpg",
      rating: 5,
      product: "Wireless Headphones",
      text: "Absolutely incredible sound quality. The noise cancellation is a game-changer for my daily commute. Arrived in 2 days — will definitely shop here again.",
    },
    {
      name: "James T.",
      avatar: "/images/customer-james-portrait.jpg",
      rating: 5,
      product: "Running Sneakers Pro",
      text: "Best running shoes I have ever owned. Lightweight, supportive, and they look great. The return process was also super easy when I needed a different size.",
    },
    {
      name: "Priya K.",
      avatar: "/images/customer-priya-portrait.jpg",
      rating: 5,
      product: "Smart Fitness Tracker",
      text: "Tracks everything I need — steps, heart rate, sleep. Battery lasts a full week. The app integration is seamless. Highly recommend to anyone serious about fitness.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
            Customer Reviews
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">Loved by 50,000+ Shoppers</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-lg mx-auto">
            Real reviews from real customers. We&apos;re proud of our 4.9-star average across
            over 18,000 verified purchases.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-400">Verified buyer &middot; {r.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturesStrip />
      <CategoryShowcase />
      <TrendingBanner />
      <ProductGrid />
      <SocialProof />
      <Newsletter />
    </main>
  );
}
