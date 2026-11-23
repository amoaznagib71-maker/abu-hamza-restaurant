import React, { useState } from 'react';
import { Camera, Eye, X, ZoomIn, Flame } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export default function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);

  const filters = [
    { id: 'all', name: 'كل الصور' },
    { id: 'grill', name: 'من قلب الشواية' },
    { id: 'meat', name: 'مشاوي اللحوم' },
    { id: 'platters', name: 'العزومات والسرافيس' },
  ];

  const filteredPhotos = selectedFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-charcoal-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ember-600/10 border border-ember-600/20 text-ember-400 text-xs font-bold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>معرض الصور</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            من قلب الشواية.. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">عدسة أبو حمزة</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            لقطات حية تحكي قصة كل سيخ مشوي بحرفية ونار الفحم التي لا تنطفئ، وسفرة تفتح النفس بالهنا والشفا.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedFilter === f.id
                  ? 'bg-gold-500 text-charcoal-950 shadow-md font-black'
                  : 'bg-charcoal-900 text-gray-400 hover:text-white hover:bg-charcoal-800 border border-white/5'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-charcoal-900 border border-white/10 hover:border-gold-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag */}
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-charcoal-900/90 text-gold-400 border border-gold-500/30 backdrop-blur-sm">
                {item.categoryName}
              </span>

              {/* Bottom Details */}
              <div className="absolute bottom-4 right-4 left-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-gold-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>انقر للتكبير والمشاهدة</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setActivePhoto(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-charcoal-900 rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-charcoal-950/80 text-white hover:bg-ember-600 transition-colors"
                aria-label="إغلاق المعرض"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-6 bg-charcoal-950 text-right">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-4 h-4 text-ember-500" />
                  <span className="text-xs font-bold text-gold-400">{activePhoto.categoryName}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{activePhoto.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{activePhoto.desc}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
