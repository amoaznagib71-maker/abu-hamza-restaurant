import React from 'react';
import { X, Phone, MessageSquare, MapPin, Clock, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-charcoal-900 border border-gold-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-charcoal-950 text-gray-400 hover:text-white transition-colors border border-white/10"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
          تواصل مع <span className="text-gold-400">أبو حمزة</span>
        </h3>
        <p className="text-xs text-gray-400 mb-6">
          أرقام التواصل ومواعيد الخدمة لطلبات المشاوي والحجوزات
        </p>

        {/* Demo Alert Box */}
        <div className="mb-6 p-3.5 rounded-2xl bg-charcoal-950 border border-gold-500/30 text-xs text-amber-200/90 flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
          <span>تنبيه: أرقام الهواتف والتواصل المعروضة هي أرقام تجريبية وافتراضية [Placeholders] للمعاينة الفنية فقط.</span>
        </div>

        {/* Contact Channels */}
        <div className="space-y-4">
          {/* Hotline */}
          <div className="p-4 rounded-2xl bg-charcoal-950 border border-ember-600/30 flex items-center justify-between">
            <div>
              <span className="text-xs text-ember-400 font-bold block mb-0.5">الخط الساخن (استرشادي)</span>
              <span className="text-xl font-black text-white font-mono">{RESTAURANT_INFO.hotline}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-ember-600/20 text-ember-400 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
          </div>

          {/* Branch Phone */}
          <div className="p-4 rounded-2xl bg-charcoal-950 border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 font-bold block mb-0.5">هاتف الفرع (استرشادي)</span>
              <span className="text-lg font-black text-white font-mono">{RESTAURANT_INFO.phone}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-charcoal-800 text-gold-400 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
          </div>

          {/* WhatsApp */}
          <div className="p-4 rounded-2xl bg-charcoal-950 border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 font-bold block mb-0.5">واتساب الطلبات (استرشادي)</span>
              <span className="text-lg font-black text-white font-mono">{RESTAURANT_INFO.whatsapp}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-charcoal-800 text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>

          {/* Address & Hours */}
          <div className="p-4 rounded-2xl bg-charcoal-800/40 border border-white/5 space-y-2 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400 shrink-0" />
              <span>{RESTAURANT_INFO.hours}</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-gold-500 to-amber-600 text-charcoal-950"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
