import React from 'react';
import { MapPin, Navigation, Clock, Phone, AlertCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-charcoal-900 relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>فروعنا وموقعنا</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            شرفنا في <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">أقرب فرع</span> ليك
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            نسعد باستقبالكم يومياً في صالتنا، كما نغطي بالتوصيل الساخن كافة المناطق المحيطة بكل فرع.
          </p>
        </div>

        {/* Demo Location Disclaimer Notice */}
        <div className="max-w-2xl mx-auto mb-10 p-4 rounded-xl bg-charcoal-950 border border-gold-500/30 flex items-start gap-3 text-xs sm:text-sm text-amber-200/90 text-right">
          <AlertCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
          <div>
            <strong>ملاحظة استرشادية هامة:</strong> العناوين والأرقام المذكورة هي مواقع افتراضية نموذجية [Placeholders] لأغراض العرض والتصميم التجاري، ويتم ربط الخريطة الحقيقية والموقع الفعلي للمطعم لاحقاً عند التدشين الرسمي.
          </div>
        </div>

        {/* Map and Branches Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Branch Cards List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {RESTAURANT_INFO.branches.map((branch) => (
              <div 
                key={branch.id}
                className={`p-6 sm:p-7 rounded-2xl bg-charcoal-card border transition-all duration-300 relative overflow-hidden ${
                  branch.isMain 
                    ? 'border-gold-500/40 shadow-xl shadow-gold-950/20' 
                    : 'border-white/10 opacity-90'
                }`}
              >
                {branch.isMain && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-black bg-gold-500 text-charcoal-950 shadow">
                    الفرع الرئيسي
                  </div>
                )}
                {!branch.isMain && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-charcoal-800 text-amber-400 border border-white/10">
                    افتتاح تجريبي قريباً
                  </div>
                )}

                <h3 className="text-xl font-black text-white mb-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ember-500" />
                  <span>فرع {branch.city} ({branch.area})</span>
                </h3>

                <p className="text-sm text-gold-300 font-mono mt-2 mb-4">
                  {branch.address}
                </p>

                <div className="space-y-2 text-xs text-gray-300 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>مواعيد العمل: {branch.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-ember-400 shrink-0" />
                    <span>هاتف الفرع: {branch.phone}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3">
                  <a
                    href={branch.mapCoordinates}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 text-gray-200 border border-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>فتح في خرائط Google</span>
                  </a>
                </div>
              </div>
            ))}

            {/* General Delivery Info Card */}
            <div className="p-5 rounded-2xl bg-charcoal-950 border border-ember-600/30">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>خدمة التوصيل السريع (الدليفري)</span>
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                خدمة التوصيل تغطي التجمع الخامس، التجمع الأول، الرحاب، مدينتي، والشيخ زايد وأكتوبر بحقائب حرارية خاصة لحفظ حرارة المشاوي.
              </p>
            </div>
          </div>

          {/* Embedded Google Maps Container */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-gold-500/20 shadow-2xl relative min-h-[400px] lg:min-h-full bg-charcoal-950">
            {/* Real Interactive Google Maps Embed with Dark Charcoal Style */}
            <iframe
              title="موقع مطعم مشويات أبو حمزة على الخريطة"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110532.74837583689!2d31.428784384462184!3d30.02492167448839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c1380cba7ef%3A0xd541260e3e1f019c!2sNew%20Cairo%201%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
              className="w-full h-full min-h-[420px] filter invert-[90%] hue-rotate-180 brightness-[85%] contrast-[110%]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay badge */}
            <div className="absolute bottom-4 right-4 bg-charcoal-950/90 border border-gold-500/40 p-3 rounded-xl backdrop-blur-md text-right">
              <div className="flex items-center gap-2 text-xs font-bold text-gold-400">
                <MapPin className="w-4 h-4 text-ember-500" />
                <span>موقع الفرع المرجعي (القاهرة الجديدة)</span>
              </div>
              <span className="text-[11px] text-gray-400 block mt-0.5">
                يمكن ضبط الإحداثيات الدقيقة عند التجهيز
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
