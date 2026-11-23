import React from 'react';
import { 
  Utensils, ShoppingBag, Bike, PartyPopper, CheckCircle2, ArrowLeft, Phone 
} from 'lucide-react';
import { RESTAURANT_SERVICES, RESTAURANT_INFO } from '../data/restaurantData';

export default function ServicesSection({ onOpenReservation, onOpenCart }) {
  const serviceIcons = {
    Utensils: <Utensils className="w-8 h-8 text-gold-400" />,
    ShoppingBag: <ShoppingBag className="w-8 h-8 text-ember-400" />,
    Bike: <Bike className="w-8 h-8 text-gold-400" />,
    PartyPopper: <PartyPopper className="w-8 h-8 text-ember-400" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-charcoal-900/60 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ember-600/10 border border-ember-600/20 text-ember-400 text-xs font-bold mb-3">
            <span>خدماتنا المتميزة</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            في الصالة أو في بيتك.. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">أبو حمزة</span> معاك
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            نقدم لكم حلول ضيافة متكاملة تضمن أعلى درجات الراحة والجودة، سواء قررت تشرفنا في صالتنا أو تطلب مشوياتك لحد باب بيتك.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-charcoal-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
            >
              {/* Top Accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-ember-600/10 rounded-bl-full pointer-events-none group-hover:bg-gold-500/20 transition-all duration-300" />

              <div>
                {/* Service Tag */}
                <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-charcoal-800 text-gold-400 border border-gold-500/20 mb-5">
                  {service.tag}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-charcoal-800/90 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-gold-500/50 transition-all">
                  {serviceIcons[service.icon]}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <span className="text-xs text-gray-500 font-medium block mb-3 font-mono">
                  {service.subtitle}
                </span>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5">
                {service.id === 'dine-in' && (
                  <button
                    onClick={onOpenReservation}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-charcoal-950 border border-gold-500/30 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>احجز طاولتك الآن</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                )}

                {service.id === 'takeaway' && (
                  <button
                    onClick={onOpenCart}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-charcoal-800 hover:bg-ember-600 text-gray-200 hover:text-white border border-white/10 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>تجهيز أوردر استلام</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                )}

                {service.id === 'delivery' && (
                  <button
                    onClick={onOpenCart}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-ember-600/20 hover:bg-ember-600 text-ember-300 hover:text-white border border-ember-600/40 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>اطلب دليفري سريع</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                )}

                {service.id === 'catering' && (
                  <a
                    href="#contact"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-gold-600/20 hover:bg-gold-500 text-gold-300 hover:text-charcoal-950 border border-gold-600/40 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>استفسار عن العزومات</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Quick Contact Strip for Urgent Orders */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-ember-950/80 via-charcoal-850 to-charcoal-850 border border-ember-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 rounded-xl bg-ember-600 flex items-center justify-center shrink-0 shadow-lg shadow-ember-600/30">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">هل لديك مناسبة أو عزومة عائلية كبيرة؟</h4>
              <p className="text-xs sm:text-sm text-gray-400">تواصل مع قسم الحفلات والعزومات لتجهيز منيو مخصص بأسعار الجملة</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-amber-300 font-mono bg-charcoal-900 px-3 py-1.5 rounded-lg border border-white/10">
              {RESTAURANT_INFO.phones.hotline}
            </span>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-gold-500 to-amber-600 text-charcoal-950 hover:from-gold-400 hover:to-amber-500 transition-all shadow-md shrink-0"
            >
              تواصل مع الشيف
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
