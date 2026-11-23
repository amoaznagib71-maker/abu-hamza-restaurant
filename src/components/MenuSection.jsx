import React, { useState } from 'react';
import { 
  Flame, UtensilsCrossed, Beef, Drumstick, Crown, Soup, 
  Coffee, Search, Plus, Info, Clock, Star, Sparkles, AlertCircle 
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function MenuSection({ onAddToCart, onSelectDish }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    Flame: <Flame className="w-4 h-4" />,
    UtensilsCrossed: <UtensilsCrossed className="w-4 h-4" />,
    Beef: <Beef className="w-4 h-4" />,
    Drumstick: <Drumstick className="w-4 h-4" />,
    Crown: <Crown className="w-4 h-4" />,
    Soup: <Soup className="w-4 h-4" />,
    Coffee: <Coffee className="w-4 h-4" />,
  };

  // Filter items based on category and search query
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-charcoal-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-ember-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold mb-3">
            <Flame className="w-3.5 h-3.5 text-ember-500" />
            <span>منيو على أصوله</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            قائمة مشويات <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">أبو حمزة</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            كل صنف في منيو أبو حمزة بيتحضر يومياً من لحوم بلدية طازجة، متبلة بخلطتنا الخاصة ومستوية على نار هادية بالفحم البلدي.
          </p>
        </div>

        {/* Indicative Pricing Disclaimer Box */}
        <div className="max-w-2xl mx-auto mb-10 p-3.5 rounded-xl bg-charcoal-900 border border-gold-500/30 flex items-center gap-3 text-xs sm:text-sm text-amber-200/90 text-right">
          <AlertCircle className="w-5 h-5 text-gold-400 shrink-0" />
          <span>
            <strong>تنويه استرشادي:</strong> جميع الأصناف والأسعار الموضحة أدناه هي بيانات تجريبية واسترشادية [Placeholders] لأغراض العرض والتصميم الفني، وتخضع للتحديث الفعلي لاحقاً.
          </span>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن كفتة، كباب، ريش، طرب، طواجن..."
              className="w-full py-3.5 pr-11 pl-4 rounded-xl bg-charcoal-900 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors text-sm shadow-inner"
            />
            <Search className="w-5 h-5 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none justify-start sm:justify-center">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-ember-600 to-red-600 text-white shadow-lg shadow-ember-700/30 border border-ember-500'
                    : 'bg-charcoal-900 text-gray-300 hover:text-white hover:bg-charcoal-800 border border-white/5'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-gold-400'}>
                  {categoryIcons[cat.icon]}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-charcoal-card rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
              >
                {/* Item Image with Overlay and Badges */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-charcoal-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-black/30" />
                  
                  {/* Item Badges */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
                    {item.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-ember-600/95 text-white shadow-md border border-ember-400/40 backdrop-blur-sm">
                        {item.badge}
                      </span>
                    )}
                    {item.isChefSpecial && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gold-500 text-charcoal-950 shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>مخصوص</span>
                      </span>
                    )}
                  </div>

                  {/* Rating & Prep Time Bar on Image */}
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-xs text-gray-200">
                    <div className="flex items-center gap-1 bg-charcoal-950/80 px-2 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      <span className="font-bold">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-charcoal-950/80 px-2 py-1 rounded-lg backdrop-blur-sm border border-white/10 text-gray-300">
                      <Clock className="w-3.5 h-3.5 text-ember-400" />
                      <span>{item.prepTime}</span>
                    </div>
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {item.name}
                    </h3>
                    
                    <p className="text-xs text-amber-400 font-medium mb-3">
                      🍽️ {item.portion}
                    </p>

                    <p className="text-sm text-gray-300 leading-relaxed mb-5 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing and Action Area */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-gray-400 block -mb-0.5">سعر استرشادي</span>
                      <span className="text-base sm:text-lg font-black text-gold-400 font-mono">
                        {item.pricePlaceholder}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Dish Details Trigger */}
                      <button
                        onClick={() => onSelectDish(item)}
                        className="p-2.5 rounded-xl bg-charcoal-800 text-gray-300 hover:text-white hover:bg-charcoal-700 border border-white/10 transition-colors"
                        title="تفاصيل الطبق ومكوناته"
                        aria-label="تفاصيل الطبق"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      {/* Add to Order Button */}
                      <button
                        onClick={() => onAddToCart(item)}
                        className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-ember-600 to-red-600 hover:from-ember-500 hover:to-red-500 text-white shadow-md shadow-ember-900/40 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                        <span>أضف للطلب</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-charcoal-900/40 rounded-2xl border border-white/5">
            <UtensilsCrossed className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-gray-300 mb-1">لم نجد أطباقاً تطابق بحثك</h4>
            <p className="text-sm text-gray-500">جرب كتابة اسم صنف آخر مثل كفتة، كباب، ريش، أو اختر فئة مختلفة</p>
          </div>
        )}

      </div>
    </section>
  );
}
