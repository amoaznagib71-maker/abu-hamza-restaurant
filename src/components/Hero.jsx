import React from 'react';
import { ArrowLeft, PhoneCall } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onOpenContact }) {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950 px-4"
    >
      {/* Full-Screen Mouth-Watering Grilled Meat Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2400&q=90"
          alt="مشويات أبو حمزة على الفحم"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Cinematic dark charcoal and ember overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-charcoal-950/50" />
        <div className="absolute inset-0 bg-radial-vignette opacity-90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content - Minimal text, maximum visual impact */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
        
        {/* Large Restaurant Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold-300 via-gold-400 to-amber-500">
            {RESTAURANT_INFO.name}
          </span>
        </h1>

        {/* Short Tagline */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-200 mb-12 tracking-wide">
          {RESTAURANT_INFO.tagline}
        </p>

        {/* Exactly Two Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Button 1: استعرض المنيو */}
          <button
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-ember-600 via-red-600 to-ember-700 hover:from-ember-500 hover:to-red-500 text-white shadow-xl shadow-ember-900/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>استعرض المنيو</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Button 2: تواصل معنا */}
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base bg-charcoal-900/80 hover:bg-charcoal-800 text-gold-400 border border-gold-500/40 hover:border-gold-400 hover:scale-105 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            <span>تواصل معنا</span>
          </button>
        </div>

      </div>

      {/* Clean bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal-950 to-transparent pointer-events-none" />
    </section>
  );
}
