import React from 'react';
import { MapPin, PhoneCall, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Location({ onOpenContact }) {
  return (
    <section id="location" className="py-24 sm:py-32 bg-charcoal-950 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            موقعنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">والعنوان</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-ember-600 mx-auto rounded-full" />
        </div>

        {/* Demo Notice Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-charcoal-900/90 border border-gold-500/30 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-amber-200/90 text-right shadow-lg">
          <AlertCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>ملاحظة استرشادية:</strong> العنوان وإحداثيات الخريطة الموضحة أدناه هي بيانات نموذجية وافتراضية [Placeholders] لأغراض المعاينة والتصميم الهندسي وسيتم تحديثها بالفرع الفعلي عند الافتتاح الرسمي.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Restaurant Address and Contact Button Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl card-luxury space-y-8 text-right">
            <div>
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-2">
                العنوان الافتراضي
              </span>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-ember-500 shrink-0 mt-1" />
                <p className="text-xl sm:text-2xl font-bold text-white font-mono leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <span className="text-xs font-bold text-gray-400 block mb-1">
                ساعات العمل والضيافة:
              </span>
              <p className="text-base font-semibold text-gray-200">
                {RESTAURANT_INFO.hours}
              </p>
            </div>

            {/* Contact Button */}
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-charcoal-950 shadow-xl shadow-gold-500/20 hover:scale-102 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5 text-charcoal-950" />
                <span>تواصل معنا الآن</span>
              </button>
            </div>
          </div>

          {/* Embedded Google Maps */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-charcoal-900">
            <iframe
              title="موقع مطعم مشويات أبو حمزة"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110532.74837583689!2d31.428784384462184!3d30.02492167448839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c1380cba7ef%3A0xd541260e3e1f019c!2sNew%20Cairo%201%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
              className="w-full h-full filter invert-[90%] hue-rotate-180 brightness-[85%] contrast-[110%]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
