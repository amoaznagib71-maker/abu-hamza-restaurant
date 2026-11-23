import React from 'react';
import { X, Flame, Star, Clock, Plus, ShieldCheck, Utensils, AlertCircle } from 'lucide-react';

export default function DishDetailModal({ dish, onClose, onAddToCart }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-charcoal-900 border border-gold-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2 rounded-full bg-charcoal-950/80 text-gray-300 hover:text-white border border-white/20 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full bg-charcoal-950">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-black/40" />
          
          {dish.badge && (
            <span className="absolute top-4 right-4 px-3.5 py-1 rounded-full text-xs font-black bg-ember-600 text-white shadow-lg border border-ember-400">
              {dish.badge}
            </span>
          )}

          <div className="absolute bottom-4 right-6 left-6 flex items-center justify-between">
            <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
              {dish.name}
            </h3>
            <div className="flex items-center gap-1 bg-charcoal-950/85 px-3 py-1 rounded-xl border border-white/10 text-gold-400 font-bold text-sm">
              <Star className="w-4 h-4 fill-gold-400" />
              <span>{dish.rating}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Indicative pricing disclaimer pill */}
          <div className="p-3 rounded-xl bg-charcoal-800/80 border border-gold-500/20 flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 block">السعر الاسترشادي التقديري</span>
              <span className="text-lg font-black text-gold-400 font-mono">
                {dish.pricePlaceholder}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Clock className="w-4 h-4 text-ember-400" />
              <span>وقت التسوية: {dish.prepTime}</span>
            </div>
          </div>

          {/* Portion and Serving info */}
          <div className="bg-charcoal-950 p-4 rounded-xl border border-white/5">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              محتويات وحجم الوجبة:
            </h4>
            <p className="text-sm font-semibold text-gold-300">
              {dish.portion}
            </p>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-ember-500" />
              <span>طريقة التحضير وسر التتبيلة:</span>
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Quality Guarantees */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-gray-300 bg-charcoal-800/50 p-2.5 rounded-lg border border-white/5">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>لحوم بلدية طازجة 100%</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 bg-charcoal-800/50 p-2.5 rounded-lg border border-white/5">
              <Utensils className="w-4 h-4 text-gold-400 shrink-0" />
              <span>يقدم مع خبز وسلطات وطحينة</span>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-charcoal-800 transition-colors"
            >
              إغلاق
            </button>
            <button
              onClick={() => {
                onAddToCart(dish);
                onClose();
              }}
              className="px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-ember-600 to-red-600 hover:from-ember-500 hover:to-red-500 text-white shadow-lg shadow-ember-900/50 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>أضف هذا الطبق إلى طلبك</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
