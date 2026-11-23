import React, { useState } from 'react';
import { 
  Phone, MessageSquare, Send, Mail, MapPin, Clock, 
  CheckCircle2, AlertCircle, Headphones 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'القاهرة الجديدة (التجمع الخامس)',
    inquiryType: 'حجز واستفسار عام',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-charcoal-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-ember-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ember-600/10 border border-ember-600/20 text-ember-400 text-xs font-bold mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>تواصل مع أبو حمزة</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            إحنا دايماً في <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">خدمتك</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            لطلبات الدليفري، حجز العزومات والولائم الكبرى، أو أي استفسار أو اقتراح.. فريق أبو حمزة بانتظارك.
          </p>
        </div>

        {/* Demo Disclaimer Box */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-xl bg-charcoal-900 border border-gold-500/30 flex items-center gap-3 text-xs sm:text-sm text-amber-200/90 text-right">
          <AlertCircle className="w-5 h-5 text-gold-400 shrink-0" />
          <span>
            <strong>تنويه:</strong> أرقام الهواتف ونماذج التواصل هنا هي بيانات نموذجية استرشادية [Placeholders]. النموذج أدناه تفاعلي لأغراض المعاينة والتجربة البرمجية.
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hotline Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-ember-950/70 to-charcoal-900 border border-ember-700/40 relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-ember-600 flex items-center justify-center shrink-0 shadow-lg shadow-ember-600/30">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xs text-ember-300 font-bold block mb-1">الخط الساخن الموحد (استرشادي)</span>
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-wider">
                    {RESTAURANT_INFO.phones.hotline}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile / WhatsApp Channels */}
            <div className="p-6 rounded-2xl bg-charcoal-card border border-white/10 space-y-4">
              <h4 className="text-base font-bold text-white mb-2">قنوات التواصل المباشر</h4>
              
              <div className="flex items-center gap-3 text-sm text-gray-300 pb-3 border-b border-white/5">
                <div className="w-9 h-9 rounded-lg bg-charcoal-800 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">إدارة الفرع والتوصيل</span>
                  <span className="font-mono text-white font-semibold">{RESTAURANT_INFO.phones.mobile1}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300 pb-3 border-b border-white/5">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">واتساب الطلبات والمقترحات</span>
                  <span className="font-mono text-emerald-300 font-semibold">{RESTAURANT_INFO.phones.whatsapp}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-9 h-9 rounded-lg bg-charcoal-800 flex items-center justify-center text-gold-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">ساعات العمل الرسمية</span>
                  <span className="text-xs text-gray-200">{RESTAURANT_INFO.workingHours.weekdays}</span>
                </div>
              </div>
            </div>

            {/* Quick Promise */}
            <div className="p-5 rounded-2xl bg-charcoal-900 border border-gold-500/20 text-xs text-gray-300 leading-relaxed">
              ⭐ <strong>وعد أبو حمزة:</strong> كل شكوى أو مقترح يوصلنا بيتم متابعته مباشرة من الإدارة العامة لضمان تقديم أعلى مستوى من الجودة والضيافة المصرية التي تليق بكم.
            </div>

          </div>

          {/* Contact / Inquiry Form */}
          <div className="lg:col-span-7 bg-charcoal-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-white">تم استلام رسالتك بنجاح!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  شكراً لتواصلك مع مشويات أبو حمزة. هذا نموذج تجريبي لتوضيح تدفق إرسال الرسائل، وفي الموقع الفعلي سيقوم فريق خدمة العملاء بالتواصل معك فوراً.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      branch: 'القاهرة الجديدة (التجمع الخامس)',
                      inquiryType: 'حجز واستفسار عام',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-charcoal-800 text-gold-400 hover:bg-charcoal-700 transition-colors border border-gold-500/30"
                >
                  إرسال رسالة جديدة
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-right">
                <h3 className="text-xl font-bold text-white mb-2">أرسل استفسارك أو طلبك الخاص</h3>
                <p className="text-xs text-gray-400 mb-6">
                  املأ البيانات وسيقوم الشيف وفريق الضيافة بالرد عليك في أقرب وقت.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      الاسم الكريم *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="مثال: أحمد محمود"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      رقم الهاتف / واتساب *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-500 transition-colors text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Branch */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      الفرع المفضل
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="القاهرة الجديدة (التجمع الخامس)">القاهرة الجديدة (التجمع الخامس)</option>
                      <option value="الشيخ زايد (قريباً)">الشيخ زايد (قريباً)</option>
                    </select>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      نوع الطلب
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="حجز واستفسار عام">حجز واستفسار عام</option>
                      <option value="تجهيز عزومة أو حفل كبير">تجهيز عزومة أو حفل كبير</option>
                      <option value="استفسار عن خدمة التوصيل">استفسار عن خدمة التوصيل</option>
                      <option value="مقترح أو شكوى للإدارة">مقترح أو شكوى للإدارة</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    تفاصيل رسالتك أو طلبك *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب هنا تفاصيل طلبك، عدد الأفراد في العزومة، أو أي ملاحظات ترغب في توضيحها..."
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-400 text-charcoal-950 shadow-xl shadow-gold-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>جارٍ الإرسال...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-charcoal-950" />
                      <span>إرسال الرسالة إلى إدارة المطعم</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
