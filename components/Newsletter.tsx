"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-orange-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Get Exclusive Deals in Your Inbox
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and be the first to know about flash sales, new arrivals,
          and members-only discounts up to 50% off.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-green-500/20 border border-green-500/30 text-green-400 font-semibold px-6 py-4 rounded-2xl max-w-md mx-auto">
            <Check className="w-5 h-5" />
            You&apos;re subscribed! Check your inbox for a welcome gift.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
              {error && <p className="text-red-400 text-xs mt-1.5 text-left">{error}</p>}
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap hover:-translate-y-0.5 shadow-lg shadow-orange-500/30"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-gray-600 text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
