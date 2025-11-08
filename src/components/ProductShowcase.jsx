import React from 'react';
import { Leaf, Flame } from 'lucide-react';

const products = [
  {
    name: 'Blue Bowl Supreme',
    description: 'Quinoa, roasted veggies, herb chicken, citrus dressing.',
    price: 14.99,
    tag: 'Best Seller',
  },
  {
    name: 'Ocean Fresh Salad',
    description: 'Mixed greens, avocado, feta, blueberries, lemon vinaigrette.',
    price: 11.5,
    tag: 'Light & Fresh',
  },
  {
    name: 'Skyline Pasta',
    description: 'Al dente pasta, basil pesto, cherry tomatoes, parmesan.',
    price: 12.75,
    tag: 'Chef’s Pick',
  },
];

const ProductCard = ({ name, description, price, tag }) => (
  <div className="group rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-semibold text-blue-900">{name}</h3>
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">{tag}</span>
    </div>
    <p className="mt-2 text-slate-600">{description}</p>
    <div className="mt-4 flex items-center justify-between">
      <span className="text-2xl font-bold text-blue-700">${price.toFixed(2)}</span>
      <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Add to cart</button>
    </div>
  </div>
);

const ProductShowcase = () => {
  return (
    <section id="menu" className="relative">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-blue-50 to-blue-100/60" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
            <Leaf className="h-4 w-4" /> Clean ingredients
          </span>
          <h2 className="mt-3 text-3xl font-bold text-blue-900 sm:text-4xl">Featured Dishes</h2>
          <p className="mt-2 max-w-2xl text-slate-600">Simple, nutritious, and made to order. Pick your favorite and enjoy the freshness.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Flame className="h-4 w-4 text-blue-600" />
          Seasonal items rotate monthly — check back for new flavors.
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
