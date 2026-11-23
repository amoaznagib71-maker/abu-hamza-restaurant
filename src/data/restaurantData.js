// بيانات مبسطة ومركزة لمطعم مشويات أبو حمزة - بدون نصوص طويلة
export const RESTAURANT_INFO = {
  name: "مشويات أبو حمزة",
  tagline: "طعم المشويات على أصوله 🔥",
  phone: "[010XXXXXXXX - رقم استرشادي]",
  hotline: "[19XXX - خط ساخن استرشادي]",
  whatsapp: "[011XXXXXXXX - واتساب استرشادي]",
  address: "[القاهرة الجديدة - شارع التسعين - موقع افتراضي للتصميم]",
  hours: "يومياً من 12:00 ظهراً حتى 02:00 صباحاً",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
  disclaimer: "ملاحظة: هذا الموقع نموذج تصميم تجريبي ومقترح لمطعم مشويات أبو حمزة — جميع الصور والأسعار والبيانات المعروضة استرشادية وافتراضية لأغراض التصميم التجاري فقط."
};

export const MENU_CATEGORIES = [
  { id: "all", name: "الكل" },
  { id: "kebab", name: "كباب وكفتة" },
  { id: "ribs", name: "ريش وطرب" },
  { id: "poultry", name: "مشاوي الدواجن" },
  { id: "platters", name: "سرافيس وطواجن" },
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "كفتة حاتي مشوية عالفحم",
    price: "[سعر استرشادي: ٢٩٠ ج.م]",
    category: "kebab",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "كباب ضاني بلدي",
    price: "[سعر استرشادي: ٤٢٠ ج.م]",
    category: "kebab",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "مشكل كباب وكفتة",
    price: "[سعر استرشادي: ٣٨٠ ج.م]",
    category: "kebab",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "ريش ضاني متبلة عالفحم",
    price: "[سعر استرشادي: ٤٦٠ ج.م]",
    category: "ribs",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    name: "طرب بلدي مقرمش",
    price: "[سعر استرشادي: ٣٤٠ ج.م]",
    category: "ribs",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    name: "ستيك لحم بلدي مشوي",
    price: "[سعر استرشادي: ٣٩٠ ج.م]",
    category: "ribs",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    name: "دجاجة كاملة مشوية عالفحم",
    price: "[سعر استرشادي: ٢٦٠ ج.م]",
    category: "poultry",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    name: "شيش طاووق على الجمر",
    price: "[سعر استرشادي: ٢٣٠ ج.م]",
    category: "poultry",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 9,
    name: "جوز حمام محشي مشوي",
    price: "[سعر استرشادي: ٣٢٠ ج.م]",
    category: "poultry",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 10,
    name: "سرفيس مشويات مشكل أبو حمزة",
    price: "[سعر استرشادي: ٨٩٠ ج.م]",
    category: "platters",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 11,
    name: "طاجن بامية باللحم الضاني",
    price: "[سعر استرشادي: ٢١٠ ج.م]",
    category: "platters",
    image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 12,
    name: "طاجن عكاوي بالبصل القاورما",
    price: "[سعر استرشادي: ٢٨٠ ج.م]",
    category: "platters",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: "كباب وكفتة على الفحم",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
    size: "large" // takes 2 rows or columns in grid
  },
  {
    id: 2,
    title: "ريش ضاني مشوية",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85",
    size: "normal"
  },
  {
    id: 3,
    title: "نكهة الجمر الطبيعي",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=85",
    size: "normal"
  },
  {
    id: 4,
    title: "سرفيس مشويات ملكي",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=85",
    size: "normal"
  },
  {
    id: 5,
    title: "دجاج شيش متبل عالفحم",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=85",
    size: "normal"
  },
  {
    id: 6,
    title: "أطباق شرقية أصيلة",
    image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=85",
    size: "large"
  }
];
