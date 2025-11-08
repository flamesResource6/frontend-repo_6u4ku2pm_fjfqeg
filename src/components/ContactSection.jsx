import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, subtitle, href }) => (
  <a href={href} className="group flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-blue-100 transition hover:bg-blue-50">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-sm font-medium text-blue-900">{title}</p>
      <p className="text-sm text-slate-600">{subtitle}</p>
    </div>
  </a>
);

const ContactSection = () => {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-blue-100/40 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-2 text-slate-600">Questions, custom orders, or catering? We’d love to hear from you.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ContactItem icon={Phone} title="Call us" subtitle="(555) 123-4567" href="tel:5551234567" />
          <ContactItem icon={Mail} title="Email" subtitle="hello@bluestandard.food" href="mailto:hello@bluestandard.food" />
          <ContactItem icon={MapPin} title="Visit" subtitle="123 Blue Street, Fresh City" href="#" />
        </div>
        <form className="mt-8 grid gap-4 rounded-2xl bg-white/80 p-6 ring-1 ring-blue-100 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Your name" className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2" />
            <input type="email" placeholder="Email" className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2" />
          </div>
          <textarea placeholder="Tell us what you crave..." rows="4" className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2" />
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
