import React from 'react';
import { Flame, Instagram, Facebook, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-white/5 py-16 px-4 sm:px-6 lg:px-8 text-right">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Info Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Restaurant Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-charcoal-900 border border-gold-500/40 flex items-center justify-center">
              <Flame className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <span className="text-2xl font-black text-white block">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-xs text-gray-400">
                {RESTAURANT_INFO.tagline}
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-400" />
              <span>هاتف: <strong className="text-white font-mono">{RESTAURANT_INFO.phone}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-ember-400" />
              <span>الخط الساخن: <strong className="text-white font-mono">{RESTAURANT_INFO.hotline}</strong></span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a
              href={RESTAURANT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/10 hover:border-gold-500 flex items-center justify-center text-gray-300 hover:text-gold-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={RESTAURANT_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/10 hover:border-gold-500 flex items-center justify-center text-gray-300 hover:text-gold-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={RESTAURANT_INFO.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/10 hover:border-gold-500 flex items-center justify-center text-gray-300 hover:text-gold-400 transition-colors"
              aria-label="TikTok"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Prominent Legal & Design Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-charcoal-900/90 border border-amber-900/50 mb-10 shadow-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-gold-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-gold-400 text-sm block mb-1">
                تنبيه هام وإخلاء مسؤولية تجارية وقانونية:
              </strong>
              هذا الموقع الإلكتروني هو نموذج تصميم أولي وتطوير برمجيات مقترح لمطعم "مشويات أبو حمزة". جميع الأسعار، الصور، أرقام الهواتف، العناوين، والبيانات المعروضة هي بيانات استرشادية وافتراضية [Placeholders] لأغراض العرض والتصميم الفني فقط، ولا يمثل هذا الموقع موقعاً رسمياً قائماً للمطعم أو التزاماً تجارياً حقيقياً.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 text-center text-xs text-gray-500">
          <p>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} — نموذج تصميم رقمي مقترح لمطعم {RESTAURANT_INFO.name}
          </p>
        </div>

      </div>
    </footer>
  );
}
