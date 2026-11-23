import React from 'react';
import { Flame, ShieldCheck, Sparkles, HeartHandshake, CheckCircle2, Award } from 'lucide-react';
import { PILLARS_OF_QUALITY } from '../data/restaurantData';

export default function About() {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-7 h-7 text-gold-400" />,
    Flame: <Flame className="w-7 h-7 text-ember-500" />,
    Sparkles: <Sparkles className="w-7 h-7 text-gold-400" />,
    HeartHandshake: <HeartHandshake className="w-7 h-7 text-ember-500" />
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-charcoal-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-ember-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold mb-3">
            <Flame className="w-3.5 h-3.5 text-ember-500" />
            <span>قصتنا وأصول المهنة</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            سر طعم المشاوي عند <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">أبو حمزة</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            في عالم المشويات، السر مش بس في اللحمة.. السر في الأمانة، التتبيلة اللي اتعلمناها من أجدادنا، والنار اللي بتعرف تطلع أحلى طعم من غير حرق ولا نشاف.
          </p>
        </div>

        {/* Story Grid: Image & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Images Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/20 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80" 
                alt="شواء اللحوم على الفحم عند أبو حمزة" 
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
              
              {/* Floating Quality Badge on image */}
              <div className="absolute bottom-6 right-6 left-6 p-4 rounded-xl bg-charcoal-950/90 border border-gold-500/30 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-ember-600/20 border border-ember-600/30">
                    <Award className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">ضمان الجودة البلدي 100%</h4>
                    <p className="text-xs text-gray-400">نختار اللحوم الطازجة بأنفسنا يومياً لضمان أعلى مستوى</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small decorative sub-card */}
            <div className="hidden sm:block absolute -top-5 -left-5 bg-charcoal-850 p-4 rounded-xl border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-ember-400 font-bold text-sm">
                <Flame className="w-4 h-4 fill-ember-500" />
                <span>فحم السنديان والبلدي الطبيعي</span>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              من حارة الحاتي الأصيلة إلى تجربة شواء عصرية متكاملة
            </h3>
            
            <p className="text-gray-300 text-base leading-relaxed">
              بدأت حكايتنا من حب الأكل المصري الدسم وأصول الكبابجي الأصيل. اخترنا نرجع بالأصل للمشويات المصرية: قطع اللحم البلدي المنقاة بعناية فائقة، التتبيل الخفيف اللي يبرز طعم اللحم من غير ما يغطيه، والتسوية الهادية على الفحم الطبيعي عشان كل قضمة تفضل طرية ومليانة عصارة.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              سواء كنت بتدور على عزومة تشرفك قدام ضيوفك، أو غدوة عائلية دافية مع ملوخية سخنة وعيش لسه طالع من الفرن، أو وجبة دليفري توصلك حرارية كأنها لسه نازلة من على الشواية.. أبو حمزة دايمًا جاهز يفرشلك أحلى سفرة.
            </p>

            {/* Key Quality Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span>تتبيلات خالية من أي مكسبات طعم</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span>عيش بلدي طازج مخبوز أولاً بأول</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span>طحينة وسلطات مصرية بيور 100%</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span>إشراف بيطري وصحي صارم يومياً</span>
              </div>
            </div>

            {/* Chef Signature Quote */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-ember-950/60 via-charcoal-900 to-charcoal-900 border-r-4 border-ember-600 border-t border-b border-l border-white/5 mt-6">
              <p className="text-sm italic text-amber-200 font-amiri text-lg leading-relaxed">
                "المشاوي مش مجرد لحمة عالفحم.. المشاوي نفس وحرفة وأصول بنحافظ عليها في كل سيخ يخرج من شوايتنا."
              </p>
              <div className="mt-2 text-xs font-bold text-gray-400">
                — أسرة مشويات أبو حمزة
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Excellence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_OF_QUALITY.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-charcoal-card p-6 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-charcoal-800 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold-500/50 transition-all">
                {iconMap[pillar.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
