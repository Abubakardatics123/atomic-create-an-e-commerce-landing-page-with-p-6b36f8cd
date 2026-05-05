import Link from "next/link";
import { Sparkles, Code2 as Github, MessageCircle as Twitter, Globe as Facebook, Camera as Instagram } from 'lucide-react';

const footerLinks = {
  Shop: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"],
  Support: ["Help Center", "Shipping Info", "Returns", "Track Order"],
  Company: ["About Us", "Careers", "Press", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/5 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <Sparkles className="w-6 h-6 text-orange-500" />
              Spark<span className="text-orange-500">Shop</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Your one-stop destination for premium products at unbeatable prices. Shop smarter,
              live better.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-500 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-orange-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} SparkShop. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
