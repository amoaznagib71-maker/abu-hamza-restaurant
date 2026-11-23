import React, { useState } from 'react';
import { 
  X, ShoppingBag, Plus, Minus, Trash2, ArrowLeft, Bike, 
  Send, AlertCircle, Sparkles, Check 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart 
}) {
  if (!isOpen) return null;

  const [address, setAddress] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  // Subtotal calculation based on indicative prices
  const subtotal = cartItems.reduce((acc, item) => acc + (item.priceValue * item.quantity), 0);
  const deliveryFee = cartItems.length > 0 ? 30 : 0;
  const total = subtotal + deliveryFee;

  const handleSimulateOrder = () => {
    setOrderSent(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-md bg-charcoal-950 border-r border-gold-500/20 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-white/10 bg-charcoal-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ember-600/20 border border-ember-600/30 flex items-center justify-center text-ember-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">سلة طلبات المشاوي</h3>
                <span className="text-xs text-gray-400">
                  {cartItems.length} {cartItems.length === 1 ? 'صنف مختار' : 'أصناف مختارة'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-charcoal-800 text-gray-400 hover:text-white transition-colors"
              aria-label="إغلاق السلة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Items Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            
            {/* Disclaimer pill */}
            <div className="p-3 rounded-xl bg-charcoal-900 border border-gold-500/20 text-xs text-amber-200/90 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
              <span>الأسعار استرشادية وافتراضية لحساب ملخص الطلب فقط.</span>
            </div>

            {cartItems.length > 0 ? (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-xl bg-charcoal-900 border border-white/5 flex items-center justify-between gap-3 group"
                  >
                    {/* Item Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover shrink-0 border border-white/10"
                    />

                    {/* Details */}
                    <div className="flex-1 text-right min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                      <span className="text-xs text-gold-400 font-mono block mt-0.5">
                        [استرشادي: {item.priceValue * item.quantity} ج.م]
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 bg-charcoal-950 p-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-charcoal-800"
                        aria-label="إنقاص الكمية"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      
                      <span className="text-xs font-bold text-white w-5 text-center font-mono">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-charcoal-800"
                        aria-label="زيادة الكمية"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-500 hover:text-ember-500 p-1 transition-colors"
                      title="حذف الصنف"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Delivery details inputs */}
                <div className="pt-4 border-t border-white/10 space-y-3 text-right">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      عنوان التوصيل المقترح
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="مثال: التجمع الخامس، الحي الثاني، عمارة..."
                      className="w-full px-3.5 py-2 rounded-xl bg-charcoal-900 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      ملاحظات للشيف (مثل درجة التسوية أو زيادة طحينة)
                    </label>
                    <input
                      type="text"
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="عيش زيادة، طحينة سبايسي، تسوية ويل دن..."
                      className="w-full px-3.5 py-2 rounded-xl bg-charcoal-900 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center text-gray-500 space-y-3">
                <ShoppingBag className="w-12 h-12 mx-auto text-gray-600" />
                <p className="text-sm font-semibold text-gray-400">سلتك فارغة حالياً</p>
                <p className="text-xs">تصفح المنيو وأضف وجباتك المفضلة من مشويات أبو حمزة.</p>
              </div>
            )}

          </div>

          {/* Drawer Footer & Calculation */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-charcoal-900 space-y-3 text-right">
              
              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-400">إجمالي الأصناف الاسترشادي:</span>
                  <span className="font-mono text-white font-semibold">[{subtotal} ج.م]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">رسوم التوصيل المقدرة:</span>
                  <span className="font-mono text-white font-semibold">[{deliveryFee} ج.م]</span>
                </div>
                <div className="flex justify-between text-sm font-black pt-2 border-t border-white/10 text-gold-400">
                  <span>الإجمالي التقديري [استرشادي]:</span>
                  <span className="font-mono">[{total} ج.م]</span>
                </div>
              </div>

              {orderSent ? (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-center text-xs font-bold flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>تم تجهيز تفاصيل الطلب بنجاح (نموذج تجريبي)!</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={handleSimulateOrder}
                    className="py-3 px-3 rounded-xl text-xs font-black bg-gradient-to-r from-gold-500 to-amber-600 text-charcoal-950 hover:from-gold-400 transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5 text-charcoal-950" />
                    <span>تأكيد الطلب تجريبياً</span>
                  </button>

                  <button
                    onClick={onClearCart}
                    className="py-3 px-3 rounded-xl text-xs font-bold bg-charcoal-800 text-gray-400 hover:text-white transition-colors"
                  >
                    تفريغ السلة
                  </button>
                </div>
              )}

              <p className="text-[10px] text-gray-500 text-center">
                * جميع المعاملات في هذا الموقع مخصصة للعرض الهندسي والتصميمي فقط.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
