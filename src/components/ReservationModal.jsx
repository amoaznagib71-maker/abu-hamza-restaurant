import React, { useState } from 'react';
import { 
  X, Calendar, Clock, Users, CheckCircle2, Flame, MapPin, 
  UtensilsCrossed, AlertCircle, Sparkles, Printer 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    guests: '4 أفراد',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    branch: 'القاهرة الجديدة - التجمع الخامس',
    seatingArea: 'صالة العائلات الداخلية المكيفة',
    occasion: 'عشاء عائلي عادي',
    specialNotes: ''
  });

  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationCode = 'AH-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBooking({
      ...bookingData,
      code: reservationCode,
      createdAt: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-charcoal-900 border border-gold-500/30 rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2 rounded-full bg-charcoal-950/80 text-gray-300 hover:text-white border border-white/20 transition-colors"
          aria-label="إغلاق نافذة الحجز"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 bg-gradient-to-r from-ember-950/80 via-charcoal-900 to-charcoal-900 text-right">
          <div className="flex items-center gap-2 text-xs font-bold text-gold-400 mb-1">
            <Flame className="w-4 h-4 text-ember-500" />
            <span>ضيافة كبابجي مصرية على أصولها</span>
          </div>
          <h3 className="text-2xl font-black text-white">
            حجز طاولة في صالة مشويات أبو حمزة
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            احجز طاولتك مسبقاً لضمان عدم الانتظار وتجهيز أفضل مكان لاستقبالكم.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          
          {/* Reservation Confirmed State */}
          {confirmedBooking ? (
            <div className="space-y-6 animate-fadeIn text-right">
              <div className="p-5 rounded-2xl bg-charcoal-950 border border-gold-500/40 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs text-gold-400 font-bold block">كود الحجز المؤكد (تجريبي):</span>
                    <span className="text-2xl font-black text-white font-mono tracking-wider">
                      {confirmedBooking.code}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                  <div>
                    <span className="text-gray-500 block">اسم الضيف:</span>
                    <span className="font-bold text-white text-sm">{confirmedBooking.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">عدد الأفراد:</span>
                    <span className="font-bold text-white text-sm">{confirmedBooking.guests}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">التاريخ والموعد:</span>
                    <span className="font-bold text-gold-300">{confirmedBooking.date} في تمام {confirmedBooking.time}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">مكان الجلوس:</span>
                    <span className="font-bold text-white">{confirmedBooking.seatingArea}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-amber-200/80 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>
                    هذا نموذج حجز تجريبي للعرض الفني. في التشغيل الفعلي يتلقى العميل رسالة تأكيد عبر WhatsApp مع رابط الموقع والاتجاهات.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setConfirmedBooking(null)}
                  className="flex-1 py-3 rounded-xl text-xs font-bold bg-charcoal-800 text-gray-300 hover:text-white transition-colors"
                >
                  تعديل بيانات الحجز
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl text-xs font-bold bg-gold-500 text-charcoal-950 hover:bg-gold-400 transition-colors font-black"
                >
                  تم، شكراً جزيلاً
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-right">
              
              {/* Notice */}
              <div className="p-3 rounded-xl bg-charcoal-950 border border-gold-500/20 text-xs text-amber-200/90 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>جميع الخيارات هنا نموذجية لتجربة تجربة الحجز الرقمية.</span>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    الاسم بالكامل *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    placeholder="مثال: يوسف إبراهيم"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    رقم الهاتف لتأكيد الحجز *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    placeholder="010XXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-500 text-right"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    تاريخ الحجز *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    الوقت المفضل *
                  </label>
                  <select
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500"
                  >
                    <option value="13:30">01:30 ظهراً (غداء مبكر)</option>
                    <option value="15:00">03:00 عصراً (غداء رئيسي)</option>
                    <option value="17:00">05:00 مساءً</option>
                    <option value="19:00">07:00 مساءً (عشاء مبكر)</option>
                    <option value="21:00">09:00 مساءً (ذروة العشاء)</option>
                    <option value="23:00">11:00 مساءً (سهرة عشاء)</option>
                  </select>
                </div>
              </div>

              {/* Guests Count & Seating Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    عدد الأفراد *
                  </label>
                  <select
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500"
                  >
                    <option value="فردين (طاولة ثنائية)">فردين (طاولة ثنائية)</option>
                    <option value="3 إلى 4 أفراد">3 إلى 4 أفراد</option>
                    <option value="5 إلى 7 أفراد (عائلية)">5 إلى 7 أفراد (عائلية)</option>
                    <option value="8 إلى 12 فرداً (وليمة كبيرة)">8 إلى 12 فرداً (وليمة كبيرة)</option>
                    <option value="أكثر من 12 فرداً (حجز مسبق خاص)">أكثر من 12 فرداً (حجز خاص)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    منطقة الجلوس المفضلة
                  </label>
                  <select
                    value={bookingData.seatingArea}
                    onChange={(e) => setBookingData({ ...bookingData, seatingArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500"
                  >
                    <option value="صالة العائلات الداخلية المكيفة">صالة العائلات الداخلية المكيفة</option>
                    <option value="التراس الخارجي المفتوح">التراس الخارجي المفتوح</option>
                    <option value="منطقة قريبة من الشواية المباشرة">منطقة قريبة من الشواية</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  طلبات خاصة أو تجهيز مسبق (اختياري)
                </label>
                <input
                  type="text"
                  value={bookingData.specialNotes}
                  onChange={(e) => setBookingData({ ...bookingData, specialNotes: e.target.value })}
                  placeholder="مثال: تجهيز كرسي أطفال، احتفال بعيد ميلاد، تجهيز سرفيس ملوكي مسبقاً..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-400 text-charcoal-950 shadow-xl shadow-gold-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-charcoal-950" />
                  <span>تأكيد حجز الطاولة تجريبياً</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
