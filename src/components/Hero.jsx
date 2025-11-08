import React from 'react';
import { Utensils, ShoppingBag, Star } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/60 via-blue-100 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
            <Utensils className="h-4 w-4" />
            Fresh • Fast • Delicious
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl md:text-6xl">
            Taste the Blue Standard of Fresh Food
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Premium meals crafted with love, delivered to your door. Clean design, clean ingredients — always.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#menu" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <ShoppingBag className="h-5 w-5" /> Explore Menu
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-blue-700 ring-1 ring-blue-200 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
              Contact Us
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1 text-blue-700">
              <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
              <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
              <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
              <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
              <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
            </div>
            <span>Rated 5.0 by happy foodies</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
