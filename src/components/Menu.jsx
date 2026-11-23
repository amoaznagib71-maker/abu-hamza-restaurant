import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function Menu({ onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-charcoal-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            قائمة <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">المشويات</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-ember-600 mx-auto rounded-full" />
        </div>

        {/* Indicative Pricing Disclaimer Box */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-charcoal-900/90 border border-gold-500/30 flex items-center gap-3 text-xs sm:text-sm text-amber-200/90 text-right shadow-lg">
          <AlertCircle className="w-5 h-5 text-gold-400 shrink-0" />
          <span>
            <strong>تنويه استرشادي:</strong> جميع الأصناف والأسعار الموضحة أدناه هي بيانات تجريبية واسترشادية [Placeholders] لأغراض المعاينة والتصميم الفني، وتخضع للتأكيد الفعلي لاحقاً وليست قائمة رسمية قائمة.
          </span>
        </div>

        {/* Simple Categories Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-16">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-ember-600 to-red-600 text-white shadow-lg shadow-ember-900/40 scale-105'
                  : 'bg-charcoal-900 text-gray-400 hover:text-white hover:bg-charcoal-800 border border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Beautiful Food Cards: Large Images, Food Name and Price Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              onClick={() => onSelectImage(dish.image, dish.name)}
              className="card-luxury rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              {/* Large Mouth-Watering Image */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-charcoal-900">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-black/20" />
              </div>

              {/* Food Name and Price ONLY */}
              <div className="p-6 flex items-center justify-between border-t border-white/5 bg-charcoal-900/90">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-gold-400 transition-colors">
                  {dish.name}
                </h3>
                <span className="text-sm sm:text-base font-black text-gold-400 font-mono tracking-wider shrink-0 mr-3">
                  {dish.price}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
