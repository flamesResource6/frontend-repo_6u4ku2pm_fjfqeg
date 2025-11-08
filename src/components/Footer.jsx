import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-blue-100 bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-3 items-center justify-between text-sm text-slate-600 md:flex-row">
        <p className="order-2 md:order-1">© {new Date().getFullYear()} Blue Standard Foods. All rights reserved.</p>
        <nav className="order-1 flex items-center gap-6 md:order-2">
          <a href="#menu" className="text-blue-700 hover:underline">Menu</a>
          <a href="#contact" className="text-blue-700 hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
